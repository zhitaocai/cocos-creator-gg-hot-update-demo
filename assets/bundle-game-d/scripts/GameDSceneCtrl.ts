import { _decorator, Component } from "cc";
import { GameSceneConfig } from "../../main/scripts/configs/GameSceneConfig";
import { sceneRouter } from "../../main/scripts/framework/scene/SceneRouter";
const { ccclass, property } = _decorator;

@ccclass
export class GameDSceneCtrl extends Component {
    onBackBtnClick() {
        sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
    }
}
