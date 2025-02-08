import { _decorator, Component, Label } from "cc";
import { GGHotUpdateInstance, GGHotUpdateInstanceObserver } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateInstance";
import { ggHotUpdateManager } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateManager";
import { GGHotUpdateInstanceState } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateType";
import { UIHotUpdateProgress } from "../../components/UIHotUpdateProgress";
import { GameSceneConfig } from "../../configs/GameSceneConfig";
import { sceneRouter } from "../../framework/scene/SceneRouter";
import { hotUpdateSystem } from "./HotUpdateSystem";
const { ccclass, property } = _decorator;

@ccclass
export class HotUpdateSceneCtrl extends Component implements GGHotUpdateInstanceObserver {
    @property(Label)
    bundleNameLabel: Label = null;

    @property({ type: UIHotUpdateProgress, tooltip: "热更新进度组件" })
    hpProgressComp: UIHotUpdateProgress | null = null;

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 组件生命周期处理

    protected onEnable(): void {
        this.bundleNameLabel.string = hotUpdateSystem.pendingSceneConfig.bundleName;

        // 显示 loading
        this.hpProgressComp.updateState(GGHotUpdateInstanceState.Idle);

        // 检查更新
        const instance = ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig.bundleName);
        instance.register(this);
        instance.checkUpdate();
    }

    protected onDisable(): void {
        const instance = ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig.bundleName);
        instance.unregister(this);
        this.unscheduleAllCallbacks();
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 热更新回调

    onGGHotUpdateInstanceCallBack(instance: GGHotUpdateInstance): void {
        this.hpProgressComp.updateState(instance.state);
        switch (instance.state) {
            case GGHotUpdateInstanceState.Idle:
                break;
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
                break;
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
                // 检查更新失败：返回大厅
                this.scheduleOnce(() => {
                    sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
                }, 2);
                break;
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
                // 检查更新成功：发现新版本，进行热更新
                instance.hotUpdate();
                break;
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
                // 检查更新成功：当前已经是最新版本，直接进入游戏场景
                this._enterGameScene();
                break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
                // 热更新：进行中
                this.hpProgressComp.updateProgress(instance.totalBytes, instance.downloadedBytes, instance.downloadSpeedInSecond, instance.downloadRemainTimeInSecond);
                break;
            case GGHotUpdateInstanceState.HotUpdateSuc:
                // 热更新：成功，进入游戏
                this._enterGameScene();
                break;
            case GGHotUpdateInstanceState.HotUpdateFailed:
                // 热更新：失败，返回大厅
                this.scheduleOnce(() => {
                    sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
                }, 2);
                break;
        }
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 业务逻辑处理

    private _enterGameScene() {
        sceneRouter.runSceneAsync(hotUpdateSystem.pendingSceneConfig!);
    }

    onBackBtnClick() {
        sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
    }
}
