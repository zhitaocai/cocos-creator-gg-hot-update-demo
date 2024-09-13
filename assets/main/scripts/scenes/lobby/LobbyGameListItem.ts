import { _decorator, Component, Label } from "cc";
import { ggHotUpdateManager } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateManager";
import { GGHotUpdateInstanceState } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateType";
import { GameSceneConfig } from "../../configs/GameSceneConfig";
import { SceneConfig, sceneRouter } from "../../framework/scene/SceneRouter";
import { hotUpdateSystem } from "../hotupdate/HotUpdateSystem";
const { ccclass, property } = _decorator;

export interface LobbyGameListItemModel {
    /**
     * 显示在UI上的游戏名字
     */
    gameName: string;
    /**
     * 子游戏场景配置
     */
    sceneConfig: SceneConfig;
}

@ccclass
export class LobbyGameListItem extends Component {
    @property(Label)
    gameName: Label = null;

    private _data: LobbyGameListItemModel = null;

    bindData(data: LobbyGameListItemModel) {
        this._data = data;
        this.gameName.string = this._data.gameName;
    }

    onClick() {
        // 如果
        //
        // * 待打开的子游戏bundle是需要热更新的bundle
        // * 待打开的子游戏bundle还没有更新到最新版本
        //
        // 那么，想进入热更新加载场景，热更游戏，热更新完毕后再进入游戏场景，否则直接进入游戏常见
        if (
            ggHotUpdateManager.isHotUpdateBundle(this._data.sceneConfig.bundleName) &&
            ggHotUpdateManager.getInstance(this._data.sceneConfig.bundleName).state != GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate &&
            ggHotUpdateManager.getInstance(this._data.sceneConfig.bundleName).state != GGHotUpdateInstanceState.HotUpdateSuc
        ) {
            hotUpdateSystem.pendingSceneConfig = this._data.sceneConfig;
            sceneRouter.runSceneAsync(GameSceneConfig.HotUpdateScene);
        } else {
            sceneRouter.runSceneAsync(this._data.sceneConfig);
        }
    }
}
