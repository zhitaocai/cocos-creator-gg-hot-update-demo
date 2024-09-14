import { _decorator, AssetManager, assetManager, Component, instantiate, Node, NodePool, ScrollView, SpriteFrame } from "cc";
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
        this._nodePool.put(node);
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 生命周期处理

    protected onLoad(): void {
        for (let i = this.itemParentNode.children.length - 1; i >= 0; --i) {
            this._putNode(this.itemParentNode.children[i]);
        }
    }

    protected onDestroy(): void {
        this._nodePool.clear();
    }

    protected start(): void {
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
                        const itemNode = instantiate(this.itemNode);
                        itemNode.parent = this.itemParentNode;
                        itemNode.getComponent(SubGameListItem)!.setSpriteFrame(asset);
                    });
            });
        });
    }
}
