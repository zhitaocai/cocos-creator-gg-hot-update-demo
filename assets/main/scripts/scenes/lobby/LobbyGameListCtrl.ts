import { _decorator, Component, instantiate, Node, NodePool, ScrollView } from "cc";
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
        const games: LobbyGameListItemModel[] = [
            { gameName: "GameA", sceneConfig: GameSceneConfig.GameAScene },
            { gameName: "GameB", sceneConfig: GameSceneConfig.GameBScene },
            { gameName: "GameC", sceneConfig: GameSceneConfig.GameCScene },
            { gameName: "GameD", sceneConfig: GameSceneConfig.GameDScene },
        ];
        games.forEach((data) => {
            const itemNode = this._getNode();
            itemNode.setParent(this.itemParentNode);
            itemNode.getComponent(LobbyGameListItem)!.bindData(data);
        });
    }
}
