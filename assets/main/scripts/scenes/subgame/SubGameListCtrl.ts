import { _decorator, AssetManager, assetManager, Component, instantiate, Node, ScrollView, SpriteFrame } from "cc";
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

    protected start(): void {
        for (let i = this.itemParentNode.children.length - 1; i >= 0; --i) {
            this.itemParentNode.children[i].destroy();
        }

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
