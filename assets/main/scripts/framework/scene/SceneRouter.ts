import { AssetManager, assetManager, director, SceneAsset } from "cc";

/**
 * 场景配置
 */
export interface SceneConfig {
    /**
     * 场景所在bundle
     */
    bundleName: string;
    /**
     * 场景名字
     */
    sceneName: string;
}

/**
 * 场景路由器
 */
class DefaultSceneRouter {
    /**
     * 预加载场景
     */
    async loadSceneAsync(sceneConfig: SceneConfig): Promise<SceneAsset | null> {
        console.log("ScreenRouter: Load Start", sceneConfig.bundleName, sceneConfig.sceneName);
        let sceneAsset: SceneAsset | null = null;
        try {
            sceneAsset = await new Promise<SceneAsset | null>((resolve, reject) => {
                assetManager.loadBundle(sceneConfig.bundleName, (error: Error, bundle: AssetManager.Bundle) => {
                    if (error) {
                        console.error(`load bundle failed: ${sceneConfig.bundleName}`);
                        console.error(error);
                        reject(error);
                        return;
                    }
                    bundle.loadScene(sceneConfig.sceneName, (error: Error | null, asset: SceneAsset) => {
                        if (error) {
                            console.error(`load bundle ${sceneConfig.bundleName} scene ${sceneConfig.sceneName} failed`);
                            console.error(error);
                            reject(error);
                            return;
                        }
                        resolve(asset);
                    });
                });
            });
        } catch (error) {
            console.error(error);
        }
        if (sceneAsset) {
            console.log("ScreenRouter: Load Suc", sceneConfig.bundleName, sceneConfig.sceneName);
        } else {
            console.error("ScreenRouter: Load Err", sceneConfig.bundleName, sceneConfig.sceneName);
        }
        return sceneAsset;
    }

    /**
     * 打开场景(异步)
     */
    async runSceneAsync(sceneConfig: SceneConfig): Promise<void> {
        console.log("ScreenRouter: Leave", director.getScene()?.name ?? "");
        const sceneAsset = await this.loadSceneAsync(sceneConfig);
        if (sceneAsset) {
            director.runScene(sceneAsset);
            console.log("ScreenRouter: Enter Suc", sceneConfig.bundleName, sceneConfig.sceneName);
        } else {
            console.error("ScreenRouter: Enter Err", sceneConfig.bundleName, sceneConfig.sceneName);
        }
    }
}

/**
 * 统一场景管理器
 */
export const sceneRouter = new DefaultSceneRouter();
