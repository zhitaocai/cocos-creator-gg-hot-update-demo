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
export class GameBundleConfig {
    /**
     *  start-scene bundle 优先级 20
     */
    static readonly StartScene = "start-scene";
    /**
     * resources bundle 优先级 8
     */
    static readonly Resources = "resources";
    /**
     * main bundle 优先级 7
     */
    static readonly Main = "main";

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 子游戏bundle

    /**
     * bundle-game-a 优先级 1
     */
    static readonly GameA = "bundle-game-a";
    /**
     * bundle-game-b 优先级 1
     */
    static readonly GameB = "bundle-game-b";
    /**
     * bundle-game-c 优先级 1
     */
    static readonly GameC = "bundle-game-c";
    /**
     * bundle-game-d 优先级 1
     */
    static readonly GameD = "bundle-game-d";
}
