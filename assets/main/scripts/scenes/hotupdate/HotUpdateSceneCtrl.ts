import { _decorator, Component, Label } from "cc";
import { GGHotUpdateInstance, GGHotUpdateInstanceObserver } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateInstance";
import { ggHotUpdateManager } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateManager";
import { GGHotUpdateInstanceState } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateType";
import { HotUpdateProgressComponent } from "../../components/HotUpdateProgressComponent";
import { GameSceneConfig } from "../../configs/GameSceneConfig";
import { sceneRouter } from "../../framework/scene/SceneRouter";
import { hotUpdateSystem } from "./HotUpdateSystem";
const { ccclass, property } = _decorator;

@ccclass
export class HotUpdateSceneCtrl extends Component implements GGHotUpdateInstanceObserver {
    @property(Label)
    bundleNameLabel: Label = null;

    @property({ type: HotUpdateProgressComponent, tooltip: "热更新进度组件" })
    hpProgressComp: HotUpdateProgressComponent | null = null;

    onBackBtnClick() {
        sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 组件生命周期处理

    protected onEnable(): void {
        const instance = ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig.bundleName);

        // 如果已经是最新版本或者热更新成功了，直接接入游戏场景，否则再次检查
        if (instance.state == GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate || instance.state == GGHotUpdateInstanceState.HotUpdateSuc) {
            sceneRouter.runSceneAsync(hotUpdateSystem.pendingSceneConfig!);
        } else {
            this.bundleNameLabel.string = hotUpdateSystem.pendingSceneConfig.bundleName;
            this.hpProgressComp.updateState(GGHotUpdateInstanceState.Idle);
            instance.register(this);
            instance.checkUpdate();
        }
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
                sceneRouter.runSceneAsync(hotUpdateSystem.pendingSceneConfig!);
                break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
                // 热更新：进行中
                this.hpProgressComp.updateProgress(instance.totalBytes, instance.downloadedBytes, instance.downloadSpeedInSecond, instance.downloadRemainTimeInSecond);
                break;
            case GGHotUpdateInstanceState.HotUpdateSuc:
                // 热更新：成功，进入游戏
                sceneRouter.runSceneAsync(hotUpdateSystem.pendingSceneConfig!);
                break;
            case GGHotUpdateInstanceState.HotUpdateFailed:
                // 热更新：失败，返回大厅
                this.scheduleOnce(() => {
                    sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
                }, 2);
                break;
        }
    }
}
