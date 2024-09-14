import { _decorator, Component, instantiate, Node, ScrollView } from "cc";
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

    protected start(): void {
        for (let i = this.itemParentNode.children.length - 1; i >= 0; --i) {
            this.itemParentNode.children[i].destroy();
        }

        const games: LobbyGameListItemModel[] = [
            { gameName: "GameA", sceneConfig: GameSceneConfig.GameAScene },
            { gameName: "GameB", sceneConfig: GameSceneConfig.GameBScene },
            { gameName: "GameC", sceneConfig: GameSceneConfig.GameCScene },
            { gameName: "GameD", sceneConfig: GameSceneConfig.GameDScene },
        ];
        games.forEach((data) => {
            const itemNode = instantiate(this.itemNode);
            itemNode.parent = this.itemParentNode;
            itemNode.getComponent(LobbyGameListItem)!.bindData(data);
        });
    }
}
