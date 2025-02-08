import { _decorator, Component, Label, ProgressBar } from "cc";
import { GGHotUpdateInstanceState } from "../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateType";

const { ccclass, property } = _decorator;

/**
 * 热更新进度组件
 *
 * @author caizhitao
 * @created 2024-09-04 10:43:52
 */
@ccclass
export class UIHotUpdateProgress extends Component {
    @property(Label)
    messageLabel: Label = null!;

    @property(ProgressBar)
    progressBar: ProgressBar = null!;

    @property(Label)
    progressLabel: Label = null!;

    @property(Label)
    downloadSpeedLabel: Label = null!;

    @property(Label)
    downloadSizeLabel: Label = null!;

    @property(Label)
    downloadRemainTimeLabel: Label = null!;

    /**
     * 设置下载进度可见性
     */
    private _setUpdateProgressVisability(visable: boolean) {
        this.progressBar.node.active = visable;
        this.progressLabel.node.active = visable;
        this.downloadSpeedLabel.node.active = visable;
        this.downloadSizeLabel.node.active = visable;
        this.downloadRemainTimeLabel.node.active = visable;
    }

    /**
     * 根据不同状态，更新UI
     *
     * @param state 状态
     */
    updateState(state: GGHotUpdateInstanceState) {
        switch (state) {
            case GGHotUpdateInstanceState.Idle:
                this.messageLabel.string = "";
                this._setUpdateProgressVisability(false);
                break;
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
                this.messageLabel.string = "Checking for Updates";
                this._setUpdateProgressVisability(false);
                break;
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
                this.messageLabel.string = "Check for Updates Failed";
                break;
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
                this.messageLabel.string = "New version found";
                break;
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
                this.messageLabel.string = "Already up to date";
                break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
                this.messageLabel.string = "Updating Resources";
                this._setUpdateProgressVisability(true);
                break;
            case GGHotUpdateInstanceState.HotUpdateSuc:
                this.messageLabel.string = "Resources update successful";
                break;
            case GGHotUpdateInstanceState.HotUpdateFailed:
                this.messageLabel.string = "Resources update failed";
                break;
        }
    }

    /**
     * 更新下载进度
     *
     * @param totalBytes 总下载字节数
     * @param downloadedBytes 已下载字节数
     * @param byteSpeedInSecond 下载速度（Bytes/s)
     * @param remainTimeInScond 下载剩余时间(s)
     */
    updateProgress(totalBytes: number, downloadedBytes: number, byteSpeedInSecond: number, remainTimeInScond: number) {
        let percent = 0;
        if (totalBytes > 0) {
            percent = downloadedBytes / totalBytes;
        }
        this.progressBar.progress = percent;
        this.progressLabel.string = (percent * 100).toFixed(2) + "%";
        this.downloadSizeLabel.string = `Size: ${this._byte2MB(downloadedBytes).toFixed(2)}MB/${this._byte2MB(totalBytes).toFixed(2)}MB`;
        this.downloadSpeedLabel.string = `Speed: ${this._byte2MB(byteSpeedInSecond).toFixed(2)}MB/s`;
        if (remainTimeInScond >= 0) {
            this.downloadRemainTimeLabel.string = `Remaining Time: ${remainTimeInScond}s`;
        } else {
            this.downloadRemainTimeLabel.string = `Remaining Time: -- s`;
        }
    }

    private _byte2MB(bytes: number): number {
        return bytes / 1024 / 1024;
    }
}
