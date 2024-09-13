import { SceneConfig } from "../framework/scene/SceneRouter";
import { GameBundleConfig } from "./GameBundleConfig";

/**
 * 游戏场景配置
 */
export class GameSceneConfig {
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 首包

    /**
     * 启动场景
     */
    static BootScene: SceneConfig = { bundleName: GameBundleConfig.Main, sceneName: "BootScene" };
    /**
     * 大厅场景
     */
    static LobbyScene: SceneConfig = { bundleName: GameBundleConfig.Main, sceneName: "LobbyScene" };
    /**
     * 子游戏热更新加载进度场景
     */
    static HotUpdateScene: SceneConfig = { bundleName: GameBundleConfig.Main, sceneName: "HotUpdateScene" };

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 子包

    /**
     * 子游戏A入口场景
     */
    static GameAScene: SceneConfig = { bundleName: GameBundleConfig.GameA, sceneName: "GameScene" };
    /**
     * 子游戏B入口场景
     */
    static GameBScene: SceneConfig = { bundleName: GameBundleConfig.GameB, sceneName: "GameScene" };
    /**
     * 子游戏C入口场景
     */
    static GameCScene: SceneConfig = { bundleName: GameBundleConfig.GameC, sceneName: "GameScene" };
    /**
     * 子游戏D入口场景
     */
    static GameDScene: SceneConfig = { bundleName: GameBundleConfig.GameD, sceneName: "GameScene" };
}
