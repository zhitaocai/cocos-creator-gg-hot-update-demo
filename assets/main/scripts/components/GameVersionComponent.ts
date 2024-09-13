import { _decorator, Component, Label } from "cc";
import { GameVersionConfig } from "../configs/GameVersionConfig";
const { ccclass, property, requireComponent } = _decorator;

@ccclass
@requireComponent(Label)
export class GameVersionComponent extends Component {
    protected onLoad(): void {
        this.getComponent(Label).string = "v" + GameVersionConfig.gameVersionName;
    }
}
