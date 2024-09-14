import { _decorator, Component } from "cc";
import { DEBUG, JSB } from "cc/env";
import { GGHotUpdateInstance, GGHotUpdateInstanceObserver } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateInstance";
import { ggHotUpdateManager } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateManager";
import { GGHotUpdateInstanceEnum, GGHotUpdateInstanceState } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateType";
import { HotUpdateProgressComponent } from "../../../../main/scripts/components/HotUpdateProgressComponent";
import { GameSceneConfig } from "../../configs/GameSceneConfig";
import { sceneRouter } from "../../framework/scene/SceneRouter";
const { ccclass, property } = _decorator;

@ccclass
export class BootSceneCtrl extends Component implements GGHotUpdateInstanceObserver {
    @property({ type: HotUpdateProgressComponent, tooltip: "热更新进度组件" })
    hpProgressComp: HotUpdateProgressComponent | null = null;

    protected onLoad(): void {
        if (JSB) {
            this.hpProgressComp.node.active = true;
            ggHotUpdateManager.init({
                enableLog: DEBUG,
                packageUrl: `https://raw.githubusercontent.com/zhitaocai/cocos-creator-gg-hot-update-demo/main/remote-assets`,
            });
        } else {
            this.hpProgressComp.node.active = false;
        }
    }

    protected onEnable(): void {
        if (JSB) {
            this.hpProgressComp.updateState(GGHotUpdateInstanceState.Idle);
            ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).register(this);
            ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).checkUpdate();
        } else {
            this.scheduleOnce(() => {
                this._enterLobbyScene();
            }, 0.1);
        }
    }

    protected onDisable(): void {
        if (JSB) {
            ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).unregister(this);
        }
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 监听 GG 热更新回调

    /**
     * 检查更新失败后，重试间隔(秒)
     */
    private checkUpdateRetryIntervalInSecond = 2;
    /**
     * 检查更新失败后，最大重试次数
     */
    private checkUpdateRetryMaxTimes = 1;
    /**
     * 检查更新失败后，累计重试次数
     */
    private checkUpdateRetryCurTimes = 0;
    /**
     * 热更新失败后，重试间隔(秒)
     */
    private hotUpdateRetryIntervalInSecond = 2;
    /**
     * 热更新失败后，最大重试次数
     */
    private hotUpdateRetryMaxTimes = 1;
    /**
     * 热更新失败后，累计重试次数
     */
    private hotUpdateRetryCurTimes = 0;

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
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError: {
                // 检查更新失败
                if (this.checkUpdateRetryCurTimes >= this.checkUpdateRetryMaxTimes) {
                    console.log(
                        `检查更新失败：${instance.state}，当前累计重试次数：${this.checkUpdateRetryCurTimes}，最大重试次数：${this.checkUpdateRetryMaxTimes}，已达到最大重试次数，将弹出重试弹窗`
                    );
                    // 如果是解析本地信息失败导致的检查更新失败，那么可以考虑清除本地的下载缓存目录，以清空所有缓存，提高下次能正确更新的概率
                    if (instance.state == GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError) {
                        instance.clearDownloadCache();
                    }
                    // 弹窗提示检查失败以及提供重试机制
                    // showAlertDialog({
                    //     titleLabel: "Check for Updates Failed",
                    //     msgLabel: "There seems to be a problem during the update check.\nPlease check if your network connection is active.",
                    //     cancelBtnVisable: false,
                    //     confirmBtnVisable: true,
                    //     confirmBtnLabel: "Retry",
                    //     onConfirmBtnClick: () => {
                    //         this.checkUpdateRetryCurTimes = 0;
                    //         instance.checkUpdate();
                    //         hideAlertDialog();
                    //     },
                    // });
                } else {
                    console.log(
                        `检查更新失败：${instance.state}，当前累计重试次数：${this.checkUpdateRetryCurTimes}，最大重试次数：${this.checkUpdateRetryMaxTimes}，还没达到最大重试次数，将在${this.checkUpdateRetryIntervalInSecond}s后重试`
                    );
                    this.scheduleOnce(() => {
                        this.checkUpdateRetryCurTimes++;
                        instance.checkUpdate();
                    }, this.checkUpdateRetryIntervalInSecond);
                }
                break;
            }
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
                // 检查更新成功，并且发现现版本，开始热更新
                instance.hotUpdate();
                break;
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
                // 检查更新成功，但没有发现新版本，跳过热更新
                this._enterLobbyScene();
                break;
            case GGHotUpdateInstanceState.HotUpdateInProgress: {
                // 热更新：下载中
                if (this.hpProgressComp) {
                    this.hpProgressComp.updateProgress(instance.totalBytes, instance.downloadedBytes, instance.downloadSpeedInSecond, instance.downloadRemainTimeInSecond);
                }
                break;
            }
            case GGHotUpdateInstanceState.HotUpdateSuc: {
                // 热更新：成功，重启游戏
                // 等一小段时间在重启
                this.scheduleOnce(() => {
                    ggHotUpdateManager.restartGame();
                });
                break;
            }
            case GGHotUpdateInstanceState.HotUpdateFailed: {
                // 热更新：失败，尝试进行一定次数的重试
                if (this.hotUpdateRetryCurTimes >= this.hotUpdateRetryMaxTimes) {
                    console.log(`热更新过程中出现下载失败的文件，当前累计重试次数：${this.hotUpdateRetryCurTimes}，最大重试次数：${this.hotUpdateRetryMaxTimes}，已达到最大重试次数，将弹出重试弹窗`);
                    // 如果尝试一定次数之后，依旧失败，那么弹窗提示
                    // showAlertDialog({
                    //     titleLabel: "Update Resources Failed",
                    //     msgLabel: "There seems to be a problem during the resources update process.\nPlease check if your network connection is active.",
                    //     cancelBtnVisable: false,
                    //     confirmBtnVisable: true,
                    //     confirmBtnLabel: "Retry",
                    //     onConfirmBtnClick: () => {
                    //         this.hotUpdateRetryCurTimes = 0;
                    //         instance.hotUpdate();
                    //         hideAlertDialog();
                    //     },
                    // });
                } else {
                    console.log(
                        `热更新过程中出现下载失败的文件，当前累计重试次数：${this.hotUpdateRetryCurTimes}，最大重试次数：${this.hotUpdateRetryMaxTimes}，还没有达到最大重试次数，将在${this.hotUpdateRetryIntervalInSecond}s后重试`
                    );
                    this.scheduleOnce(() => {
                        this.hotUpdateRetryCurTimes++;
                        instance.hotUpdate();
                    }, this.hotUpdateRetryIntervalInSecond);
                }
                break;
            }
        }
    }

    private _enterLobbyScene() {
        sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
    }
}
