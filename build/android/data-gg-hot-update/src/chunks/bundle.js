System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///rollupPluginModLoBabelHelpers-9d38038d.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        _: _applyDecoratedDescriptor,
        a: _initializerDefineProperty
      });
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

System.register("chunks:///SceneRouter-28bb57e1.js", ['cc'], function (exports) {
  var cclegacy, assetManager, director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      director = module.director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94c87r0aCFM4Z34I8EauBjh", "GameBundleConfig", undefined);
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
      class GameBundleConfig {}
      exports('G', GameBundleConfig);
      /**
       *  start-scene bundle 优先级 20
       */
      GameBundleConfig.StartScene = "start-scene";
      /**
       * resources bundle 优先级 8
       */
      GameBundleConfig.Resources = "resources";
      /**
       * main bundle 优先级 7
       */
      GameBundleConfig.Main = "main";
      // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 子游戏bundle
      /**
       * bundle-game-a 优先级 1
       */
      GameBundleConfig.GameA = "bundle-game-a";
      /**
       * bundle-game-b 优先级 1
       */
      GameBundleConfig.GameB = "bundle-game-b";
      /**
       * bundle-game-c 优先级 1
       */
      GameBundleConfig.GameC = "bundle-game-c";
      /**
       * bundle-game-d 优先级 1
       */
      GameBundleConfig.GameD = "bundle-game-d";
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "29a8352vkVKoLfeBzCv9r53", "GameSceneConfig", undefined);

      /**
       * 游戏场景配置
       */
      class GameSceneConfig {}
      exports('a', GameSceneConfig);
      // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 首包
      /**
       * 启动场景
       */
      GameSceneConfig.BootScene = {
        bundleName: GameBundleConfig.Main,
        sceneName: "BootScene"
      };
      /**
       * 大厅场景
       */
      GameSceneConfig.LobbyScene = {
        bundleName: GameBundleConfig.Main,
        sceneName: "LobbyScene"
      };
      /**
       * 子游戏热更新加载进度场景
       */
      GameSceneConfig.HotUpdateScene = {
        bundleName: GameBundleConfig.Main,
        sceneName: "HotUpdateScene"
      };
      // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // 子包
      /**
       * 子游戏A入口场景
       */
      GameSceneConfig.GameAScene = {
        bundleName: GameBundleConfig.GameA,
        sceneName: "GameScene"
      };
      /**
       * 子游戏B入口场景
       */
      GameSceneConfig.GameBScene = {
        bundleName: GameBundleConfig.GameB,
        sceneName: "GameScene"
      };
      /**
       * 子游戏C入口场景
       */
      GameSceneConfig.GameCScene = {
        bundleName: GameBundleConfig.GameC,
        sceneName: "GameScene"
      };
      /**
       * 子游戏D入口场景
       */
      GameSceneConfig.GameDScene = {
        bundleName: GameBundleConfig.GameD,
        sceneName: "GameScene"
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "15bf4sr0C5PNpt7BY2YwnkQ", "SceneRouter", undefined);

      /**
       * 场景配置
       */

      /**
       * 场景路由器
       */
      class DefaultSceneRouter {
        /**
         * 预加载场景
         */
        async loadSceneAsync(sceneConfig) {
          console.log("ScreenRouter: Load Start", sceneConfig.bundleName, sceneConfig.sceneName);
          let sceneAsset = null;
          try {
            sceneAsset = await new Promise((resolve, reject) => {
              assetManager.loadBundle(sceneConfig.bundleName, (error, bundle) => {
                if (error) {
                  console.error(`load bundle failed: ${sceneConfig.bundleName}`);
                  console.error(error);
                  reject(error);
                  return;
                }
                bundle.loadScene(sceneConfig.sceneName, (error, asset) => {
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
        async runSceneAsync(sceneConfig) {
          var _director$getScene;
          console.log("ScreenRouter: Leave", ((_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.name) ?? "");
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
      const sceneRouter = exports('s', new DefaultSceneRouter());
      cclegacy._RF.pop();
    }
  };
});

} }; });