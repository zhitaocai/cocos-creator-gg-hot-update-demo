import { GameBundleConfig } from "./GameBundleConfig";

/**
 * 游戏 Bundle 配置
 *
 * 默认 Bundle 优先级如下
 *
 * | internam bundle                    | 优先级  |
 * | -----------                        | ----- |
 * | internal                           | 21    |
 * | start-scene                        | 20    |
 * | resources                          | 8     |
 * | main                               | 7     |
 */
export class HotUpdateBundleConfig {
    private static _hotUpdateBundles: string[] = [GameBundleConfig.GameB, GameBundleConfig.GameC, GameBundleConfig.GameD];
    /**
     * 需要热更新的 Bundle
     */
    static hotUpdateBundles(): string[] {
        return this._hotUpdateBundles;
    }

    /**
     * 判断某个bundle是否需要热更新
     * @param bundleName 此bundle是否为需要热更新后才能加载的bundle
     */
    static isHotUpdateBundle(bundleName: string) {
        return this._hotUpdateBundles.includes(bundleName);
    }
}
