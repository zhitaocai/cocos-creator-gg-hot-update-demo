import { _decorator, AssetManager, assetManager, Component, instantiate, Layout, Node, NodePool, size, SpriteFrame, UITransform } from "cc";
import { UILoading } from "../../components/UILoading";
import { SubGameListItem } from "./SubGameListItem";

const { ccclass, property } = _decorator;

@ccclass
export class SubGameListCtrl extends Component {
    @property(UILoading)
    uiLoading: UILoading = null!;

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
        // 根据实际屏幕大小，决定示例图的大小，以实现两列的效果
        const gridLayout = this.itemParentNode.getComponent(Layout);
        const gridLayoutWidth = this.itemParentNode.getComponent(UITransform)!.width;
        const itemWidth = (gridLayoutWidth - gridLayout.paddingLeft - gridLayout.paddingRight - gridLayout.spacingX) / 2;
        gridLayout.cellSize = size(itemWidth, itemWidth);

        this.uiLoading.playShowAnim();
        // 加载并显示 子Bundle 的纹理资源
        assetManager.loadBundle(this.bundleName, (error: Error | null, bundle: AssetManager.Bundle) => {
            if (error) {
                console.error(`load bundle failed: ${this.bundleName}`);
                console.error(error);
                this.uiLoading.playHideAnim();
                return;
            }
            bundle.loadDir("textures", SpriteFrame, (error: Error, assets: SpriteFrame[]) => {
                this.uiLoading.playHideAnim();
                if (error) {
                    console.error(`load bundle textures failed: ${this.bundleName}`);
                    console.error(error);
                    return;
                }
                assets
                    .sort((a, b) => {
                        return parseInt(a.name) - parseInt(b.name);
                    })
                    .forEach((spriteFrame) => {
                        const itemNode = this._getNode();
                        itemNode.parent = this.itemParentNode;
                        const itemComp = itemNode.getComponent(SubGameListItem)!;
                        itemComp.setSpriteFrame(spriteFrame);
                    });
            });
        });
    }
}
