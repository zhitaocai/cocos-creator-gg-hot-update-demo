import { _decorator, Component, instantiate, Node, NodePool, ScrollView, Tween } from "cc";
import { GameSceneConfig } from "../../configs/GameSceneConfig";
import { LobbyGameListItem, LobbyGameListItemModel } from "./LobbyGameListItem";
const { ccclass, property } = _decorator;

@ccclass
export class LobbyGameListCtrl extends Component {
    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Node)
    itemParentNode: Node = null!;

    @property(Node)
    itemNode: Node = null!;

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
        const games: LobbyGameListItemModel[] = [
            { gameName: "GameA", sceneConfig: GameSceneConfig.GameAScene },
            { gameName: "GameB", sceneConfig: GameSceneConfig.GameBScene },
            { gameName: "GameC", sceneConfig: GameSceneConfig.GameCScene },
            { gameName: "GameD", sceneConfig: GameSceneConfig.GameDScene },
        ];
        games.forEach((data) => {
            const itemNode = this._getNode();
            itemNode.parent = this.itemParentNode;
            itemNode.getComponent(LobbyGameListItem)!.bindData(data);
        });
    }
}
