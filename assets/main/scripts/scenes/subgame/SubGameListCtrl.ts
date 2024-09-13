import { _decorator, AssetManager, assetManager, Component, instantiate, Node, NodePool, ScrollView, SpriteFrame, Tween } from "cc";
import { SubGameListItem } from "./SubGameListItem";
const { ccclass, property } = _decorator;

@ccclass
export class SubGameListCtrl extends Component {
    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Node)
    itemParentNode: Node = null!;

    @property(Node)
    itemNode: Node = null!;

    @property
    bundleName: string = "";

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 节点复用处理

    private _nodePool: NodePool = new NodePool();
    private _getNode(): Node {
        const node = this._nodePool.get();
        return node ? node : instantiate(this.itemNode);
    }
    private _putNode(node: Node) {
        Tween.stopAllByTarget(node);
        this._nodePool.put(node);
    }
    private _recycleAllNodes() {
        for (let i = this.itemParentNode.children.length - 1; i >= 0; --i) {
            this._putNode(this.itemParentNode.children[i]);
        }
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 生命周期处理

    protected onEnable(): void {
        this._recycleAllNodes();
        this._updateList();
    }

    protected onDisable(): void {
        this._recycleAllNodes();
    }

    private _updateList() {
        assetManager.loadBundle(this.bundleName, (error: Error | null, bundle: AssetManager.Bundle) => {
            if (error) {
                console.error(`load bundle failed: ${this.bundleName}`);
                console.error(error);
                return;
            }
            bundle.loadDir("textures", SpriteFrame, (error: Error, assets: SpriteFrame[]) => {
                if (error) {
                    console.error(`load bundle textures failed: ${this.bundleName}`);
                    console.error(error);
                    return;
                }
                assets
                    .sort((a, b) => {
                        return parseInt(a.name) - parseInt(b.name);
                    })
                    .forEach((asset) => {
                        const itemNode = this._getNode();
                        itemNode.parent = this.itemParentNode;
                        itemNode.getComponent(SubGameListItem)!.setSpriteFrame(asset);
                    });
            });
        });
    }
}
