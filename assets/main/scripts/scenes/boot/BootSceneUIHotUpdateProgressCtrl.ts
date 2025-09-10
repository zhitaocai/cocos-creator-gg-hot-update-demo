import { _decorator, Component } from "cc";
import { JSB } from "cc/env";
import { GGHotUpdateInstance, GGHotUpdateInstanceObserver } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateInstance";
import { ggHotUpdateManager } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateManager";
import { GGHotUpdateInstanceEnum, GGHotUpdateInstanceState } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateType";
import { UIHotUpdateProgress } from "../../components/UIHotUpdateProgress";
const { ccclass, property } = _decorator;

/**
 * 启动场景 热更新进度UI 控制
 *
 * @author caizhitao
 * @created 2025-08-23 20:10:10
 */
@ccclass
export class BootSceneUIHotUpdateProgressCtrl extends Component implements GGHotUpdateInstanceObserver {
    @property({ type: UIHotUpdateProgress, tooltip: "热更新进度组件" })
    hpProgressComp: UIHotUpdateProgress = null!;

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 生命周期处理

    protected onLoad(): void {
        // 只有原生平台下才有热更新
        // 因此我们控制只有原生平台下，才显示
        if (JSB) {
            this.node.active = true;
        } else {
            this.node.active = false;
        }
    }

    protected onEnable(): void {
        this.hpProgressComp.updateState(GGHotUpdateInstanceState.Idle);

        // 注册主包热更新监听
        ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).register(this);
    }

    protected onDisable(): void {
        // 注销主包热更新监听
        ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).unregister(this);
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 监听 GG 热更新回调

    onGGHotUpdateInstanceCallBack(instance: GGHotUpdateInstance): void {
        this.hpProgressComp.updateState(instance.state);

        switch (instance.state) {
            case GGHotUpdateInstanceState.Idle:
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
                break;
            case GGHotUpdateInstanceState.HotUpdateInProgress: {
                // 热更新：下载中
                this.hpProgressComp.updateProgress(instance.totalBytes, instance.downloadedBytes, instance.downloadSpeedInSecond, instance.downloadRemainTimeInSecond);
                break;
            }
            case GGHotUpdateInstanceState.HotUpdateSuc:
            case GGHotUpdateInstanceState.HotUpdateFailed:
                break;
        }
    }
}
