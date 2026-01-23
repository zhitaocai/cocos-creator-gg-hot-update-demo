import { _decorator, Component } from "cc";
import { JSB } from "cc/env";
import { GGHotUpdateInstance, GGHotUpdateInstanceObserver } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateInstance";
import { ggHotUpdateManager } from "../../../../../extensions/gg-hot-update/assets/scripts/hotupdate/GGHotUpdateManager";
import { UIHotUpdateProgress } from "../../components/UIHotUpdateProgress";
import { hotUpdateSystem } from "./HotUpdateSystem";
const { ccclass, property } = _decorator;

/**
 * 子包热更新场景 热更新进度UI 控制
 *
 * @author caizhitao
 * @created 2026-01-23 14:33:41
 */
@ccclass
export class HotUpdateSceneUIHotUpdateProgressCtrl extends Component implements GGHotUpdateInstanceObserver {
    @property({ type: UIHotUpdateProgress, tooltip: "热更新进度组件" })
    hpProgressComp: UIHotUpdateProgress = null!;

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 组件生命周期处理

    protected onLoad(): void {
        // 只有原生平台下才有热更新，因此我们控制只有原生平台下，才显示
        if (JSB) {
            this.node.active = true;
        } else {
            this.node.active = false;
        }
    }

    protected onEnable(): void {
        this.hpProgressComp.updateUI(null);
        // 注册子包热更新监听
        ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig!.bundleName).register(this);
    }

    protected onDisable(): void {
        // 注销子包热更新监听
        ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig!.bundleName).unregister(this);
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 热更新回调

    onGGHotUpdateInstanceCallBack(instance: GGHotUpdateInstance): void {
        this.hpProgressComp.updateUI(instance);
    }
}
