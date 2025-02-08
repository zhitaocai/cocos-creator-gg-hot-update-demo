import { Component, Node, Tween, UIOpacity, _decorator, tween } from "cc";
const { ccclass, property } = _decorator;

/**
 * 通用 Loading 组件
 *
 * @author caizhitao
 * @created 2025-01-22 11:35:04
 */
@ccclass
export class UILoading extends Component {
    private _circleNode: Node = null!;
    private _circleNodeUIOpacity: UIOpacity = null!;

    protected onLoad(): void {
        this._circleNode = this.node;
        this._circleNodeUIOpacity = this._circleNode.getComponent(UIOpacity)!;
        this._circleNodeUIOpacity.opacity = 0;
    }

    protected onDisable(): void {
        this.reset();
    }

    /**
     * 停止当前动画并恢复到默认状态
     */
    reset() {
        Tween.stopAllByTarget(this._circleNode);
        Tween.stopAllByTarget(this._circleNodeUIOpacity);
        this._circleNodeUIOpacity.opacity = 0;
        this._circleNode.angle = 0;
    }

    /**
     * 播放出现动画
     *
     * @param duration 渐现动画持续时间（s）
     * @param delayTime 渐现动画执行延迟时间（s)
     */
    playShowAnim(duration: number = 0.24, delayTime: number = 0) {
        // Loading 圈
        Tween.stopAllByTarget(this._circleNodeUIOpacity);
        this._circleNodeUIOpacity.opacity = 0;
        tween(this._circleNodeUIOpacity).delay(delayTime).to(duration, { opacity: 255 }).start();

        Tween.stopAllByTarget(this._circleNode);
        this._circleNode.angle = 0;
        tween(this._circleNode)
            .repeatForever(tween<Node>().by(0.7, { angle: 360 }))
            .start();
    }

    /**
     * 播放消息动画
     *
     * @param duration 渐隐动画持续时间（s）
     * @param delayTime 渐隐动画执行延迟时间（s)
     */
    playHideAnim(duration: number = 0.24, delayTime: number = 0) {
        Tween.stopAllByTarget(this._circleNode);
        Tween.stopAllByTarget(this._circleNodeUIOpacity);
        tween(this._circleNodeUIOpacity).delay(delayTime).to(duration, { opacity: 0 }).start();
    }
}
