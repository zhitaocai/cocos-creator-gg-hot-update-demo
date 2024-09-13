import { SceneConfig } from "../../framework/scene/SceneRouter";

class HotUpdateSystem {
    /**
     * 加载完毕后进入的场景配置
     */
    pendingSceneConfig: SceneConfig | null = null;
}

export const hotUpdateSystem = new HotUpdateSystem();
