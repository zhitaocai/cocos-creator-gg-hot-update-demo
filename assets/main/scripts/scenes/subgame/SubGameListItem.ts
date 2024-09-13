import { _decorator, Component, Sprite, SpriteFrame } from "cc";
import Sprite2DScaleAdapterComponent from "db://assets/main/scripts/framework/comps/Sprite2DScaleAdapterComponent";
const { ccclass, property } = _decorator;

@ccclass
export class SubGameListItem extends Component {
    @property(Sprite)
    sprite: Sprite = null;

    setSpriteFrame(spriteFrame: SpriteFrame) {
        this.sprite.spriteFrame = spriteFrame;
        this.sprite.getComponent(Sprite2DScaleAdapterComponent).updateSprite();
    }
}
