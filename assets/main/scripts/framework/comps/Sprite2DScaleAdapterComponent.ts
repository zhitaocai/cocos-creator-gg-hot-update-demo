import { Component, Enum, Sprite, UITransform, Widget, _decorator, screen } from "cc";

const { ccclass, property, executeInEditMode, requireComponent, disallowMultiple } = _decorator;

/**
 * 缩放方式
 */
export enum SpriteScaleType {
    /**
     * 缩放到填满父节点（图像可能会被裁剪，但父节点不会有空白）
     */
    FILL = 1,
    /**
     * 缩放到刚好在父节点内部最大化显示（图像会完整显示，但父节点上下或者左右可能会留空）
     */
    SUIT = 2,
}

/**
 * 对齐方式
 */
export enum SpriteAlignType {
    /**
     * 缩放后靠左对齐
     */
    LEFT = 1,
    /**
     * 缩放后靠上对齐
     */
    TOP = 2,
    /**
     * 缩放后靠右对齐
     */
    RIGHT = 3,
    /**
     * 缩放后靠下对齐
     */
    BOTTOM = 4,
    /**
     * 缩放后居中对齐
     */
    CENTER = 5,
}

/**
 * Sprite 适配组件
 */
@ccclass
@executeInEditMode
@requireComponent(Sprite)
@disallowMultiple
export default class Sprite2DScaleAdapterComponent extends Component {
    @property({ visible: false })
    private _scaleType: SpriteScaleType = SpriteScaleType.SUIT;

    @property({
        type: Enum(SpriteScaleType),
        tooltip: "缩放类型:\n\n-FILL: 缩放到填满父节点（图像可能会ui越出父节点）\n\n-SUIT: 缩放到刚好在父节点内部最大化显示（图像会完整显示，但父节点上下或者左右可能会留空）",
    })
    set scaleType(scaleType: SpriteScaleType) {
        if (this._scaleType == scaleType) {
            return;
        }
        this._scaleType = scaleType;
        this.updateSprite();
    }

    get scaleType(): SpriteScaleType {
        return this._scaleType;
    }

    @property({ visible: false })
    private _alignType: SpriteAlignType = SpriteAlignType.CENTER;

    @property({
        type: Enum(SpriteAlignType),
        tooltip: "对齐方式类型:\n如：\n-LEFT: 缩放后靠左对齐",
    })
    set alignType(alignType: SpriteAlignType) {
        if (this._alignType == alignType) {
            return;
        }
        this._alignType = alignType;
        this.updateSprite();
    }

    get alignType(): SpriteAlignType {
        return this._alignType;
    }

    private _sprite: Sprite = null!;
    onLoad() {
        this._sprite = this.node.getComponent(Sprite)!;
    }

    protected onEnable(): void {
        this.updateSprite();
        // screen.on("window-resize", this.updateSprite.bind(this));
        // screen.on("orientation-change", this.updateSprite.bind(this));
    }

    protected onDisable(): void {
        // screen.off("window-resize", this.updateSprite.bind(this));
        // screen.off("orientation-change", this.updateSprite.bind(this));
    }

    updateSprite(scaleType?: SpriteScaleType, alignType?: SpriteAlignType) {
        if (!this.node) {
            return;
        }
        if (!this._sprite || !this._sprite.enabled || !this._sprite.spriteFrame) {
            return;
        }

        let widget = this.node.parent?.getComponent(Widget);
        if (widget) {
            widget.updateAlignment();
        }

        const nodeUITransform = this.node.getComponent(UITransform);
        if (!nodeUITransform) {
            return;
        }

        const nodeParentUITransform = this.node.parent?.getComponent(UITransform);
        if (!nodeParentUITransform) {
            return;
        }

        const finalScaleType = scaleType ? scaleType : this.scaleType;
        const finalAlignType = alignType ? alignType : this.alignType;

        const nodeWidth = nodeUITransform.width;
        const nodeHeight = nodeUITransform.height;
        const nodeParentWidth = nodeParentUITransform.width;
        const nodeParentHeight = nodeParentUITransform.height;

        let finalScale = 0;
        if (nodeWidth / nodeHeight > nodeParentWidth / nodeParentHeight) {
            // 设计分辨率宽高比大于显示分辨率
            if (finalScaleType == SpriteScaleType.SUIT) {
                finalScale = nodeParentWidth / nodeWidth;
            } else if (finalScaleType == SpriteScaleType.FILL) {
                finalScale = nodeParentHeight / nodeHeight;
            }
        } else {
            // 设计分辨率宽高比小于显示分辨率
            if (finalScaleType == SpriteScaleType.SUIT) {
                finalScale = nodeParentHeight / nodeHeight;
            } else if (finalScaleType == SpriteScaleType.FILL) {
                finalScale = nodeParentWidth / nodeWidth;
            }
        }
        this.node.setScale(finalScale, finalScale);

        switch (finalAlignType) {
            case SpriteAlignType.CENTER:
                this.node.setPosition(0, 0);
                break;
            case SpriteAlignType.LEFT:
                this.node.setPosition(-0.5 * (nodeParentWidth - nodeWidth * this.node.scale.x), 0);
                break;
            case SpriteAlignType.RIGHT:
                this.node.setPosition(0.5 * (nodeParentWidth - nodeWidth * this.node.scale.x), 0);
                break;
            case SpriteAlignType.TOP:
                this.node.setPosition(0, 0.5 * (nodeParentHeight - nodeHeight * this.node.scale.y));
                break;
            case SpriteAlignType.BOTTOM:
                this.node.setPosition(0, -0.5 * (nodeParentHeight - nodeHeight * this.node.scale.y));
                break;
        }
    }
}
