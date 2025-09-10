System.register("chunks:///main.js", ['cc', './rollupPluginModLoBabelHelpers-9d38038d.js', './SceneRouter-79865703.js'], function () {
  var cclegacy, Label, Component, _decorator, ProgressBar, UIOpacity, Tween, tween, Sprite, Enum, Widget, UITransform, error, path, native, game, sys, Node, NodePool, instantiate, Layout, size, assetManager, SpriteFrame, _applyDecoratedDescriptor, _initializerDefineProperty, GameBundleConfig, sceneRouter, GameSceneConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Component = module.Component;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      Sprite = module.Sprite;
      Enum = module.Enum;
      Widget = module.Widget;
      UITransform = module.UITransform;
      error = module.error;
      path = module.path;
      native = module.native;
      game = module.game;
      sys = module.sys;
      Node = module.Node;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Layout = module.Layout;
      size = module.size;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      _applyDecoratedDescriptor = module._;
      _initializerDefineProperty = module.a;
    }, function (module) {
      GameBundleConfig = module.G;
      sceneRouter = module.s;
      GameSceneConfig = module.a;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab2a5lS+ntBkpQJFzH8ux52", "GameVersionConfig", undefined);
      /**
       * 游戏版本配置
       */
      const GameVersionConfig = {
        /**
         * 游戏版本名（每次发布都要更新）
         */
        gameVersionName: "4.0.0.xx"
      };
      cclegacy._RF.pop();
      var _dec, _class;
      cclegacy._RF.push({}, "848ceDJq4hAP74g61G6HAXz", "UIGameVersionName", undefined);
      const {
        ccclass,
        property,
        requireComponent
      } = _decorator;
      let UIGameVersionName = (_dec = requireComponent(Label), ccclass(_class = _dec(_class = class UIGameVersionName extends Component {
        onLoad() {
          this.getComponent(Label).string = "v" + GameVersionConfig.gameVersionName;
        }
      }) || _class) || _class);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f5c34GzzehCrIH/G0kaAbQ9", "GGHotUpdateType", undefined);
      /**
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      /**
       * 热更新实例类型
       */
      let GGHotUpdateInstanceEnum = /*#__PURE__*/function (GGHotUpdateInstanceEnum) {
        GGHotUpdateInstanceEnum["BuildIn"] = "build-in";
        return GGHotUpdateInstanceEnum;
      }({});

      /**
       * 热更新实例配置
       */

      /**
       * 热更新实例状态
       */
      let GGHotUpdateInstanceState = /*#__PURE__*/function (GGHotUpdateInstanceState) {
        GGHotUpdateInstanceState["Idle"] = "Idle";
        GGHotUpdateInstanceState["CheckUpdateInProgress"] = "CheckUpdateInProgress";
        GGHotUpdateInstanceState["CheckUpdateFailedParseLocalProjectManifestError"] = "CheckUpdateFailedParseLocalProjectManifestError";
        GGHotUpdateInstanceState["CheckUpdateFailedParseRemoteVersionManifestError"] = "CheckUpdateFailedParseRemoteVersionManifestError";
        GGHotUpdateInstanceState["CheckUpdateFailedDownloadRemoteProjectManifestError"] = "CheckUpdateFailedDownloadRemoteProjectManifestError";
        GGHotUpdateInstanceState["CheckUpdateFailedParseRemoteProjectManifestError"] = "CheckUpdateFailedParseRemoteProjectManifestError";
        GGHotUpdateInstanceState["CheckUpdateSucNewVersionFound"] = "CheckUpdateSucNewVersionFound";
        GGHotUpdateInstanceState["CheckUpdateSucAlreadyUpToDate"] = "CheckUpdateSucAlreadyUpToDate";
        GGHotUpdateInstanceState["HotUpdateInProgress"] = "HotUpdateInProgress";
        GGHotUpdateInstanceState["HotUpdateSuc"] = "HotUpdateSuc";
        GGHotUpdateInstanceState["HotUpdateFailed"] = "HotUpdateFailed";
        return GGHotUpdateInstanceState;
      }({});
      let ProjectManifestAssetUpdateState = /*#__PURE__*/function (ProjectManifestAssetUpdateState) {
        ProjectManifestAssetUpdateState[ProjectManifestAssetUpdateState["Idle"] = 0] = "Idle";
        ProjectManifestAssetUpdateState[ProjectManifestAssetUpdateState["Suc"] = 1] = "Suc";
        return ProjectManifestAssetUpdateState;
      }({});
      cclegacy._RF.pop();
      var _dec$1, _dec2, _dec3, _dec4, _dec5, _dec6, _class$1, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b3353974bdAT6Ov0eFqEdVI", "UIHotUpdateProgress", undefined);
      const {
        ccclass: ccclass$1,
        property: property$1
      } = _decorator;

      /**
       * 热更新进度组件
       *
       * @author caizhitao
       * @created 2024-09-04 10:43:52
       */
      let UIHotUpdateProgress = (_dec$1 = property$1(Label), _dec2 = property$1(ProgressBar), _dec3 = property$1(Label), _dec4 = property$1(Label), _dec5 = property$1(Label), _dec6 = property$1(Label), ccclass$1(_class$1 = (_class2 = class UIHotUpdateProgress extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "messageLabel", _descriptor, this);
          _initializerDefineProperty(this, "progressBar", _descriptor2, this);
          _initializerDefineProperty(this, "progressLabel", _descriptor3, this);
          _initializerDefineProperty(this, "downloadSpeedLabel", _descriptor4, this);
          _initializerDefineProperty(this, "downloadSizeLabel", _descriptor5, this);
          _initializerDefineProperty(this, "downloadRemainTimeLabel", _descriptor6, this);
        }
        /**
         * 设置下载进度可见性
         */
        _setUpdateProgressVisability(visable) {
          this.progressBar.node.active = visable;
          this.progressLabel.node.active = visable;
          this.downloadSpeedLabel.node.active = visable;
          this.downloadSizeLabel.node.active = visable;
          this.downloadRemainTimeLabel.node.active = visable;
        }

        /**
         * 根据不同状态，更新UI
         *
         * @param state 状态
         */
        updateState(state) {
          switch (state) {
            case GGHotUpdateInstanceState.Idle:
              this.messageLabel.string = "";
              this._setUpdateProgressVisability(false);
              break;
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
              this.messageLabel.string = "Checking for Updates";
              this._setUpdateProgressVisability(false);
              break;
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
              this.messageLabel.string = "Check for Updates Failed";
              break;
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
              this.messageLabel.string = "New version found";
              break;
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
              this.messageLabel.string = "Already up to date";
              break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
              this.messageLabel.string = "Updating Resources";
              this._setUpdateProgressVisability(true);
              break;
            case GGHotUpdateInstanceState.HotUpdateSuc:
              this.messageLabel.string = "Resources update successful";
              break;
            case GGHotUpdateInstanceState.HotUpdateFailed:
              this.messageLabel.string = "Resources update failed";
              break;
          }
        }

        /**
         * 更新下载进度
         *
         * @param totalBytes 总下载字节数
         * @param downloadedBytes 已下载字节数
         * @param byteSpeedInSecond 下载速度（Bytes/s)
         * @param remainTimeInScond 下载剩余时间(s)
         */
        updateProgress(totalBytes, downloadedBytes, byteSpeedInSecond, remainTimeInScond) {
          let percent = 0;
          if (totalBytes > 0) {
            percent = downloadedBytes / totalBytes;
          }
          this.progressBar.progress = percent;
          this.progressLabel.string = (percent * 100).toFixed(2) + "%";
          this.downloadSizeLabel.string = `Size: ${this._byte2MB(downloadedBytes).toFixed(2)}MB/${this._byte2MB(totalBytes).toFixed(2)}MB`;
          this.downloadSpeedLabel.string = `Speed: ${this._byte2MB(byteSpeedInSecond).toFixed(2)}MB/s`;
          if (remainTimeInScond >= 0) {
            this.downloadRemainTimeLabel.string = `Remaining Time: ${remainTimeInScond}s`;
          } else {
            this.downloadRemainTimeLabel.string = `Remaining Time: -- s`;
          }
        }
        _byte2MB(bytes) {
          return bytes / 1024 / 1024;
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "messageLabel", [_dec$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downloadSpeedLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "downloadSizeLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "downloadRemainTimeLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class$1);
      cclegacy._RF.pop();
      var _class$2;
      cclegacy._RF.push({}, "be280Atpj1M6I+qcKFDEH6O", "UILoading", undefined);
      const {
        ccclass: ccclass$2,
        property: property$2
      } = _decorator;

      /**
       * 通用 Loading 组件
       *
       * @author caizhitao
       * @created 2025-01-22 11:35:04
       */
      let UILoading = ccclass$2(_class$2 = class UILoading extends Component {
        constructor(...args) {
          super(...args);
          this._circleNode = null;
          this._circleNodeUIOpacity = null;
        }
        onLoad() {
          this._circleNode = this.node;
          this._circleNodeUIOpacity = this._circleNode.getComponent(UIOpacity);
          this._circleNodeUIOpacity.opacity = 0;
        }
        onDisable() {
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
        playShowAnim(duration = 0.24, delayTime = 0) {
          // Loading 圈
          Tween.stopAllByTarget(this._circleNodeUIOpacity);
          this._circleNodeUIOpacity.opacity = 0;
          tween(this._circleNodeUIOpacity).delay(delayTime).to(duration, {
            opacity: 255
          }).start();
          Tween.stopAllByTarget(this._circleNode);
          this._circleNode.angle = 0;
          tween(this._circleNode).repeatForever(tween().by(0.7, {
            angle: 360
          })).start();
        }

        /**
         * 播放消息动画
         *
         * @param duration 渐隐动画持续时间（s）
         * @param delayTime 渐隐动画执行延迟时间（s)
         */
        playHideAnim(duration = 0.24, delayTime = 0) {
          Tween.stopAllByTarget(this._circleNode);
          Tween.stopAllByTarget(this._circleNodeUIOpacity);
          tween(this._circleNodeUIOpacity).delay(delayTime).to(duration, {
            opacity: 0
          }).start();
        }
      }) || _class$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "50dda8T431NE71huI9DtdUf", "HotUpdateBundleConfig", undefined);

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
      class HotUpdateBundleConfig {
        /**
         * 需要热更新的 Bundle
         */
        static hotUpdateBundles() {
          return this._hotUpdateBundles;
        }

        /**
         * 判断某个bundle是否需要热更新
         * @param bundleName 此bundle是否为需要热更新后才能加载的bundle
         */
        static isHotUpdateBundle(bundleName) {
          return this._hotUpdateBundles.includes(bundleName);
        }
      }
      HotUpdateBundleConfig._hotUpdateBundles = [GameBundleConfig.GameB, GameBundleConfig.GameC, GameBundleConfig.GameD];
      cclegacy._RF.pop();
      var _dec$2, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _class$3, _class2$1, _descriptor$1, _descriptor2$1;
      cclegacy._RF.push({}, "619d9iDGS5HAYNkMBZYae4v", "Sprite2DScaleAdapterComponent", undefined);
      const {
        ccclass: ccclass$3,
        property: property$3,
        executeInEditMode,
        requireComponent: requireComponent$1,
        disallowMultiple
      } = _decorator;

      /**
       * 缩放方式
       */
      let SpriteScaleType = /*#__PURE__*/function (SpriteScaleType) {
        SpriteScaleType[SpriteScaleType["FILL"] = 1] = "FILL";
        SpriteScaleType[SpriteScaleType["SUIT"] = 2] = "SUIT";
        return SpriteScaleType;
      }({});

      /**
       * 对齐方式
       */
      let SpriteAlignType = /*#__PURE__*/function (SpriteAlignType) {
        SpriteAlignType[SpriteAlignType["LEFT"] = 1] = "LEFT";
        SpriteAlignType[SpriteAlignType["TOP"] = 2] = "TOP";
        SpriteAlignType[SpriteAlignType["RIGHT"] = 3] = "RIGHT";
        SpriteAlignType[SpriteAlignType["BOTTOM"] = 4] = "BOTTOM";
        SpriteAlignType[SpriteAlignType["CENTER"] = 5] = "CENTER";
        return SpriteAlignType;
      }({});

      /**
       * Sprite 适配组件
       */
      let Sprite2DScaleAdapterComponent = (_dec$2 = requireComponent$1(Sprite), _dec2$1 = property$3({
        visible: false
      }), _dec3$1 = property$3({
        type: Enum(SpriteScaleType),
        tooltip: "缩放类型:\n\n-FILL: 缩放到填满父节点（图像可能会ui越出父节点）\n\n-SUIT: 缩放到刚好在父节点内部最大化显示（图像会完整显示，但父节点上下或者左右可能会留空）"
      }), _dec4$1 = property$3({
        visible: false
      }), _dec5$1 = property$3({
        type: Enum(SpriteAlignType),
        tooltip: "对齐方式类型:\n如：\n-LEFT: 缩放后靠左对齐"
      }), ccclass$3(_class$3 = executeInEditMode(_class$3 = _dec$2(_class$3 = disallowMultiple(_class$3 = (_class2$1 = class Sprite2DScaleAdapterComponent extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "_scaleType", _descriptor$1, this);
          _initializerDefineProperty(this, "_alignType", _descriptor2$1, this);
          this._sprite = null;
        }
        set scaleType(scaleType) {
          if (this._scaleType == scaleType) {
            return;
          }
          this._scaleType = scaleType;
          this.updateSprite();
        }
        get scaleType() {
          return this._scaleType;
        }
        set alignType(alignType) {
          if (this._alignType == alignType) {
            return;
          }
          this._alignType = alignType;
          this.updateSprite();
        }
        get alignType() {
          return this._alignType;
        }
        onLoad() {
          this._sprite = this.node.getComponent(Sprite);
        }
        onEnable() {
          this.updateSprite();
          // screen.on("window-resize", this.updateSprite.bind(this));
          // screen.on("orientation-change", this.updateSprite.bind(this));
        }

        onDisable() {
          // screen.off("window-resize", this.updateSprite.bind(this));
          // screen.off("orientation-change", this.updateSprite.bind(this));
        }
        updateSprite(scaleType, alignType) {
          var _this$node$parent, _this$node$parent2;
          if (!this.node) {
            return;
          }
          if (!this._sprite || !this._sprite.enabled || !this._sprite.spriteFrame) {
            return;
          }
          let widget = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(Widget);
          if (widget) {
            widget.updateAlignment();
          }
          const nodeUITransform = this.node.getComponent(UITransform);
          if (!nodeUITransform) {
            return;
          }
          const nodeParentUITransform = (_this$node$parent2 = this.node.parent) == null ? void 0 : _this$node$parent2.getComponent(UITransform);
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
      }, (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_scaleType", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SpriteScaleType.SUIT;
        }
      }), _applyDecoratedDescriptor(_class2$1.prototype, "scaleType", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "scaleType"), _class2$1.prototype), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_alignType", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SpriteAlignType.CENTER;
        }
      }), _applyDecoratedDescriptor(_class2$1.prototype, "alignType", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "alignType"), _class2$1.prototype)), _class2$1)) || _class$3) || _class$3) || _class$3) || _class$3);
      cclegacy._RF.pop();
      const DEBUG = true;
      cclegacy._RF.push({}, "f769axO7fNPc70dhd4CcRuV", "GGLogger", undefined);

      /**
       * 默认日志
       *
       * @author caizhitao
       * @created 2024-08-09 18:19:14
       */
      class GGLogger {
        constructor() {
          this.enable = false;
        }
        log(...args) {
          this.enable && console.log(...this._formatArgs(...args));
        }
        debug(...args) {
          this.enable && console.debug(...this._formatArgs(...args));
        }
        info(...args) {
          this.enable && console.info(...this._formatArgs(...args));
        }
        error(...args) {
          this.enable && console.error(...this._formatArgs(...args));
        }
        warn(...args) {
          this.enable && console.warn(...this._formatArgs(...args));
        }
        time(label) {
          this.enable && console.time(label);
        }
        timeEnd(label) {
          this.enable && console.timeEnd(label);
        }

        /**
         * 原生平台上不能直接打印object和array，因此这里将object和array转换为字符串进行输出，方便在 对应平台的开发工具中（如: Android Studio Logcat） 中直接看 log 结果
         */
        _formatArgs(...args) {
          {
            try {
              for (let i = 0; i < args.length; i++) {
                const arg = args[i];
                if (Array.isArray(arg) || typeof arg == "object") {
                  args[i] = JSON.stringify(arg);
                }
              }
            } catch (err) {
              error("打印日志异常，可以忽略，也可以排查");
            }
          }
          args.unshift("gg-hot-update");
          return args;
        }
      }
      const ggLogger = new GGLogger();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "31da95tffdJ74xi05kbrI21", "GGObserverSystem", undefined);
      /**
       * 观察者系统
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      class GGObserverSystem {
        constructor() {
          this._observers = null;
        }
        /**
         * 观察者
         */
        get observers() {
          if (this._observers == null) {
            this._observers = new Set();
          }
          return this._observers;
        }

        /**
         * 注册观察者
         */
        register(obserber) {
          this.observers.add(obserber);
        }
        /**
         * 注销观察者
         */
        unregister(observer) {
          this.observers.delete(observer);
        }
        /**
         * 注销所有观察者
         */
        unregisterAll() {
          this.observers.clear();
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "31550RrFfZOSJ0hhUy+rms5", "GGHotUpdateInstance", undefined);

      /**
       * 热更新实例观察者方法
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */

      /**
       * 热更新实例
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      class GGHotUpdateInstance extends GGObserverSystem {
        /**
         * 当前热更新实例状态
         */
        get state() {
          return this._state;
        }
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 下载信息
        /**
         * 待下载的总字节
         */
        get totalBytes() {
          return this._totalBytes;
        }
        /**
         * 已下载的字节
         */
        get downloadedBytes() {
          return this._downloadedBytes;
        }
        /**
         * 待下载的文件列表
         */
        get totalFiles() {
          return this._totalFiles;
        }
        /**
         * 热更新下载速度 Bytes/s
         */
        get downloadSpeedInSecond() {
          return this._downloadSpeed;
        }
        /**
         * 下载剩余时间(s)
         *
         * * >=0: 已知剩余秒数
         * * <0: 未知剩余时间
         */
        get downloadRemainTimeInSecond() {
          return this._downloadRemainTimeInSecond;
        }
        /**
         * @param name 热更新的包名字
         * @param remoteRootUrl 热更包的远程根地址 e.g. ``http://192.168.0.1:8080/1.0.0``
         * @param searchRootDirPath 热更包的本地搜索根目录 e.g. ``/data/user/0/${pacakgeName}/files/gg-hot-update``
         * @param option 热更新实例配置
         */
        constructor(name, remoteRootUrl, searchRootDirPath, option) {
          super();
          /**
           * 热更新的包名字
           *
           * * 主包: `GGHotUpdateInstanceEnum.BuildIn`
           * * 子包: 传 Bundle 名字
           */
          this.name = void 0;
          /**
           * 热更新实例配置
           */
          this._option = void 0;
          /**
           * 热更新文件的远程根地址
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``http://192.168.0.1:8080/1.0.0``
           *      * 子包: ``http://192.168.0.1:8080/1.0.0/assets/${bundleName}``
           */
          this._remoteRootUrl = void 0;
          /**
           * 热更包的本地搜索根目录
           *
           * e.g.
           *
           * * Android: ``/data/user/0/com.cocos.game/files/gg-hot-update``
           */
          this._searchRootDirPath = void 0;
          /**
           * 热更包的本地下载根目录
           *
           * * 主包：如果确认热更新完毕，那么会在下次游戏启动时，将这个下载目录的内容移动到搜索目录
           * * 子包：如果确认热更新完毕，那么会在更新搜索路径时（updateSearchPath）， 将这个下载目录的内容移动到搜索目录
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``/data/user/0/${packageName}/files/gg-hot-update-temp/build-in``
           *      * 子包: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}``
           */
          this._downloadRootDirPath = void 0;
          /**
           * version.manifest 的远程地址
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``http://192.168.0.1:8080/1.0.0/version.manifest``
           *      * 子包: ``http://192.168.0.1:8080/1.0.0/assets/${bundleName}/version.manifest``
           */
          this._versionManifestRemoteUrl = void 0;
          /**
           * version.manifeset 的本地下载路径
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``/data/user/0/${packageName}/files/gg-hot-update-temp/build-in/version.manifest``
           *      * 子包: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}/version.manifest``
           */
          this._versionManifestDownloadPath = void 0;
          /**
           * project.manifest 的远程地址
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``http://192.168.0.1:8080/1.0.0/project.manifest``
           *      * 子包: ``http://192.168.0.1:8080/1.0.0/assets/${bundleName}/project.manifest``
           */
          this._projectManifestRemoteUrl = void 0;
          /**
           * project.manifeset 的本地搜索路径
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``/data/user/0/${packageName}/files/gg-hot-update/project.manifest``
           *      * 子包: ``/data/user/0/${packageName}/files/gg-hot-update/assets/${bundleName}/project.manifest``
           */
          this._projectManifestSearchPath = void 0;
          /**
           * project.manifeset 的本地下载路径
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``/data/user/0/${packageName}/files/gg-hot-update-temp/build-in/project.manifest.gg``
           *      * 子包: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}/project.manifest``
           */
          this._projectManifestDownloadPath = void 0;
          /**
           * project.manifest 的包内路径
           *
           * e.g.
           *
           * * Android:
           *      * 主包: ``@assets/project.manifest``
           *      * 子包: ``@assets/assets/${bundleName}/project.manifest``
           */
          this._projectManifestBuildInPaths = void 0;
          /**
           * 本地 project.manifest 配置（搜索目录下）
           */
          this._localProjectManifest = void 0;
          /**
           * 远端 project.manifeset 配置
           */
          this._remoteProjectManifest = void 0;
          /**
           * 下载任务管理器
           */
          this._downloader = void 0;
          /**
           * 下载任务队列
           */
          this._downloadTasks = void 0;
          /**
           * 当前并行下载任务数量
           */
          this._curConcurrentTaskCount = void 0;
          this._state = GGHotUpdateInstanceState.Idle;
          this._totalBytes = 0;
          this._downloadedBytes = 0;
          this._totalFiles = 0;
          /**
           * 下载成功的文件列表
           */
          this.downloadSucFiles = [];
          /**
           * 下载失败的文件列表
           */
          this.downloadFailedFiles = [];
          this._downloadSpeed = 0;
          this._downloadRemainTimeInSecond = -1;
          /**
           * 上次计算下载速度时的累计下载字节数(Bytes)
           */
          this._lastDownloadedBytes = 0;
          /**
           * 上次计算下载速度时的时间戳(ms)
           */
          this._lastSpeedUpdateTimeInMs = 0;
          /**
           * 上次回调下载进度的时间戳(ms)
           */
          this._lastCallBackUpdateTimeInMs = 0;
          /**
           * 实例是否已经销毁
           */
          this._destroyed = false;
          this.name = name;
          this._option = option;
          this._remoteRootUrl = remoteRootUrl;
          this._searchRootDirPath = searchRootDirPath;
          this._downloadRootDirPath = path.join(this._searchRootDirPath + "-temp", this.name);
          if (this.name == GGHotUpdateInstanceEnum.BuildIn) {
            this._versionManifestRemoteUrl = `${this._remoteRootUrl}/version.manifest`;
            this._versionManifestDownloadPath = path.join(this._downloadRootDirPath, "version.manifest");
            this._projectManifestRemoteUrl = `${this._remoteRootUrl}/project.manifest`;
            this._projectManifestSearchPath = path.join(this._searchRootDirPath, "project.manifest");
            this._projectManifestDownloadPath = path.join(this._downloadRootDirPath, "project.manifest.gg");
            this._projectManifestBuildInPaths = [`@assets/project.manifest`, path.join("data", "project.manifest")];
          } else {
            this._versionManifestRemoteUrl = `${this._remoteRootUrl}/assets/${this.name}/version.manifest`;
            this._versionManifestDownloadPath = path.join(this._downloadRootDirPath, "assets", this.name, "version.manifest");
            this._projectManifestRemoteUrl = `${this._remoteRootUrl}/assets/${this.name}/project.manifest`;
            this._projectManifestSearchPath = path.join(this._searchRootDirPath, "assets", this.name, "project.manifest");
            this._projectManifestDownloadPath = path.join(this._downloadRootDirPath, "assets", this.name, "project.manifest");
            this._projectManifestBuildInPaths = [`@assets/assets/${this.name}/project.manifest`, path.join("data", "assets", this.name, "project.manifest")];
          }
          this._localProjectManifest = null;
          this._remoteProjectManifest = null;
          this._downloader = new native.Downloader();
          this._downloader.onProgress = this._onProgress.bind(this);
          this._downloader.onError = this._onError.bind(this);
          this._downloader.onSuccess = this._onSuccess.bind(this);
          this._downloadTasks = [];
          this._curConcurrentTaskCount = 0;
          this._state = GGHotUpdateInstanceState.Idle;
          this._destroyed = false;
          this._resetDownloadInfo();
        }

        /**
         * 递归创建所有父目录
         *
         * @param filePath 目标文件路径
         */
        _createParentDirs(filePath) {
          // 获取目标路径的目录部分
          const dirPath = path.dirname(filePath);
          if (!native.fileUtils.isDirectoryExist(dirPath)) {
            // 如果父目录不存在，递归创建所有父目录
            this._createParentDirs(dirPath);
            // 创建当前目录
            native.fileUtils.createDirectory(dirPath);
          }
        }

        /**
         * 重置下载信息
         */
        _resetDownloadInfo() {
          // 移除还没有开始的下载任务
          if (this._downloadTasks.length > 0) {
            this._downloadTasks.length = 0;
          }

          // 重置并行下载任务数
          this._curConcurrentTaskCount = 0;

          // 重置下载信息
          this._totalBytes = 0;
          this._downloadedBytes = 0;
          this._totalFiles = 0;
          this.downloadSucFiles.length = 0;
          this.downloadFailedFiles.length = 0;
          this._downloadSpeed = 0;
          this._downloadRemainTimeInSecond = -1;
        }

        /**
         * 更新状态
         */
        _updateState(state) {
          this._state = state;
          this.observers.forEach(observer => {
            observer.onGGHotUpdateInstanceCallBack == null || observer.onGGHotUpdateInstanceCallBack(this);
          });
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 下载监听

        _onProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 version.manifest 的下载进度

          if (task.requestURL == this._versionManifestRemoteUrl) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 project.manifest 的下载进度

          if (task.requestURL == this._projectManifestRemoteUrl) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理热更新的差异文件的下载进度

          // 更新下载进度
          this._downloadedBytes += bytesReceived;
          let curTime = Date.now();

          // 计算下载速度（间隔一段时间在计算，避免短时间内多次计算，值波动范围过大，导致数据失真，失去参考意义）
          if (curTime - this._lastSpeedUpdateTimeInMs >= this._option.downloadSpeedCalculationIntervalInMs) {
            if (this._lastSpeedUpdateTimeInMs == 0) {
              // 首次下载进度回调，是没有上次下载进度记录的，所以此时下载速度和剩余时间重置
              this._downloadSpeed = 0;
              this._downloadRemainTimeInSecond = -1;
            } else {
              // 二次或后续下载进度回调时，存在上次下载进度记录，所以可以比较计算此时下载速度和剩余时间
              this._downloadSpeed = (this._downloadedBytes - this._lastDownloadedBytes) / ((curTime - this._lastSpeedUpdateTimeInMs) / 1000);
              this._downloadRemainTimeInSecond = Math.round((this._totalBytes - this._downloadedBytes) / this._downloadSpeed);
            }
            this._lastDownloadedBytes = this._downloadedBytes;
            this._lastSpeedUpdateTimeInMs = curTime;
          }

          // 外部下载进度回调（间隔一段时间之后在回调）
          if (curTime - this._lastCallBackUpdateTimeInMs >= this._option.downloadProgressCallBackIntervalInMs) {
            this._lastCallBackUpdateTimeInMs = curTime;
            {
              let info = "热更新：下载中";
              info += ` 总字节数：${this._totalBytes}`;
              info += ` 已下载字节数: ${this._downloadedBytes}`;
              info += ` 总下载文件数：${this._totalFiles}`;
              info += ` 下载成功文件数：${this.downloadSucFiles.length}`;
              info += ` 下载失败文件数：${this.downloadFailedFiles.length}`;
              info += ` 当前并行下载任务数：${this._curConcurrentTaskCount}`;
              info += ` 当前下载速度：${(this._downloadSpeed / 1024 / 1024).toFixed(2)} MB/s`;
              info += ` 当前剩余时间：${this._downloadRemainTimeInSecond}s`;
              this._debug(info);
            }
            this._updateState(GGHotUpdateInstanceState.HotUpdateInProgress);
          }
        }
        _onError(task, errorCode, errorCodeInternal, errorStr) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 version.manifest 的下载失败

          if (task.requestURL == this._versionManifestRemoteUrl) {
            {
              this._error(`检查更新：下载远程 version.manifest 失败。错误代码：${errorCode} 内部错误代码：${errorCodeInternal} 错误信息：${errorStr}`);
              this._error(`检查更新：失败`);
            }
            this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError);
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 project.manifest 的下载失败

          if (task.requestURL == this._projectManifestRemoteUrl) {
            {
              this._error(`检查更新：下载远程 project.manifest 失败。错误代码：${errorCode} 内部错误代码：${errorCodeInternal} 错误信息：${errorStr}`);
              this._error(`检查更新：失败`);
            }
            this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError);
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理热更新的差异文件的下载失败

          // 收集下载失败任务
          this.downloadFailedFiles.push(task);

          // 更新下载进度
          {
            this._debug(`热更新：文件下载失败：${task.requestURL} 下载失败。错误代码：${errorCode} 内部错误代码：${errorCodeInternal} 错误信息：${errorStr} 当前累计下载失败文件数量：${this.downloadFailedFiles.length}`);
          }
          this._updateState(GGHotUpdateInstanceState.HotUpdateInProgress);

          // 处理结果
          this._handleDownloadResult();
        }
        _onSuccess(task) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 version.manifest 的下载成功

          if (task.requestURL == this._versionManifestRemoteUrl) {
            var _this$_localProjectMa;
            this._debug(`检查更新：下载远程 version.manifest 成功`);

            // 解析下载好的远程 version.manifest
            let remoteVersionManifest = null;
            try {
              if (native.fileUtils.isFileExist(this._versionManifestDownloadPath)) {
                remoteVersionManifest = JSON.parse(native.fileUtils.getStringFromFile(this._versionManifestDownloadPath));

                // 如果下载好的远程 version.manifest 已经解析完毕了，那这个文件就没用了，删除它
                native.fileUtils.removeFile(this._versionManifestDownloadPath);
              }
            } catch (error) {
              {
                this._error(error);
              }
            }
            if (remoteVersionManifest == null) {
              {
                this._error(`检查更新：解析远程 version.manifest 失败`);
                this._error(`检查更新：失败`);
              }
              this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError);
              return;
            }

            // 从搜索目录下的 project.manifest 中获取版本
            const localVersion = ((_this$_localProjectMa = this._localProjectManifest) == null ? void 0 : _this$_localProjectMa.version) ?? "";
            const remoteVersion = remoteVersionManifest.version ?? "";
            {
              this._debug(`检查更新：解析远程 version.manifest 成功。版本信息: ${JSON.stringify(remoteVersionManifest)}`);
              this._debug(`检查更新：当前本地版本: ${localVersion}`);
              this._debug(`检查更新：当前远端版本: ${remoteVersion}`);
            }

            // 本地版本和远程版本比较
            const isNewVersionFound = remoteVersion != localVersion;

            // 未发现新版本
            if (!isNewVersionFound) {
              this._debug(`检查更新：成功，当前已经是最新版本`);
              // 释放文件json内存
              this._localProjectManifest = null;
              this._updateState(GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate);
              return;
            }

            // 发现新版本
            // 如果本地已经下载好新版本的远程 project.manifest ，那么解析文件，并获取差异文件记录
            try {
              if (native.fileUtils.isFileExist(this._projectManifestDownloadPath)) {
                this._reCalculateDownloadInfo();
                // 如果还有文件未下载，那么返回新版本
                if (this._totalFiles != this.downloadSucFiles.length) {
                  this._updateState(GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound);
                  return;
                }
              }
            } catch (error) {
              {
                this._error(error);
                this._error(`检查更新：解析本地已存在的远程 project.manifest 失败。地址： ${this._projectManifestDownloadPath}`);
              }
            }

            // 到这里表示本地没有 project.manifest 文件，或者解析出错，总之不对劲了，此时删除这个文件，重新走一躺下载处理
            if (native.fileUtils.isFileExist(this._projectManifestDownloadPath)) {
              native.fileUtils.removeFile(this._projectManifestDownloadPath);
            }
            this._debug(`检查更新：下载远程 project.manifest 开始，下载地址：${this._projectManifestRemoteUrl} 本地存储地址：${this._projectManifestDownloadPath}`);
            this._createParentDirs(this._projectManifestDownloadPath);
            this._downloader.createDownloadTask(this._projectManifestRemoteUrl, this._projectManifestDownloadPath);
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 project.manifest 的下载成功

          if (task.requestURL == this._projectManifestRemoteUrl) {
            this._debug(`检查更新：下载远程 project.manifest 成功`);

            // 解析已经下载下来的 project.manifest
            try {
              if (native.fileUtils.isFileExist(task.storagePath)) {
                this._remoteProjectManifest = JSON.parse(native.fileUtils.getStringFromFile(task.storagePath));
              }
            } catch (error) {
              this._error(error);
            }
            if (this._remoteProjectManifest == null) {
              this._error(`检查更新：解析远程 project.manifest 失败。下载地址： ${task.requestURL} 本地存储地址：${task.storagePath}`);
              this._error(`检查更新：失败`);
              this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError);
              return;
            }

            // 对比本地最新 project.manifest 和远程 project.manifest，将需要下载的文件标记一下，并保存到本地（以方便后面断点续传）
            let hasDiff = false;
            Object.keys(this._remoteProjectManifest.assets).forEach(assetPath => {
              const remoteAssetInfo = this._remoteProjectManifest.assets[assetPath];
              const localAssetInfo = this._localProjectManifest.assets[assetPath] ?? null;
              const assetNeed2Update = localAssetInfo == null || remoteAssetInfo.size != localAssetInfo.size || remoteAssetInfo.md5 != localAssetInfo.md5;
              if (assetNeed2Update) {
                // 标记此文件需要下载
                remoteAssetInfo.state = ProjectManifestAssetUpdateState.Idle;
                hasDiff = true;
              }
            });
            if (hasDiff) {
              // 如果比较后，存在差异文件需要下载，那么
              this._debug(`检查更新：成功，发现新版本`);

              // 1. 将有待下载文件的信息写回到本地，方便后面恢复下载
              native.fileUtils.writeStringToFile(JSON.stringify(this._remoteProjectManifest), task.storagePath);

              // 2. 重新计算下载信息
              this._reCalculateDownloadInfo();

              // 3. 返回新版本
              this._updateState(GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound);
            } else {
              // 如果比较后，没有差异文件需要下载，那么返回已经更新到最新
              this._debug(`检查更新：成功，发现不同远端版本，但和当前本地版本没有文件差异，因此当前已经是最新版本`);

              // 释放文件json内存
              this._localProjectManifest = null;
              this._updateState(GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate);
            }
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理热更新的差异文件的下载成功

          // 收集下载成功任务
          this.downloadSucFiles.push(task);

          // 更新下载进度
          this._updateState(GGHotUpdateInstanceState.HotUpdateInProgress);

          // 标记文件下载成功，并保存到本地，方便恢复任务
          if (this._remoteProjectManifest) {
            this._remoteProjectManifest.assets[task.identifier].state = ProjectManifestAssetUpdateState.Suc;
            native.fileUtils.writeStringToFile(JSON.stringify(this._remoteProjectManifest), this._projectManifestDownloadPath);
          }

          // 处理结果
          this._handleDownloadResult();
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * 销毁实例
         *
         * 1. 实例销毁之后，没法再次使用
         * 2. 实例销毁的一般应用场合为，主包已经完成了热更新，在重启游戏之前，进行销毁
         */
        destroy() {
          // 标记实例已经被销毁
          this._destroyed = true;

          // 移除所有外部观察者
          this.unregisterAll();

          // 重置属性
          this._remoteProjectManifest = null;
          this._localProjectManifest = null;

          // 重置状态信息
          this._state = GGHotUpdateInstanceState.Idle;

          // 放弃进行中的下载任务
          if (this._downloadTasks.length > 0) {
            this._downloadTasks.forEach(task => {
              this._downloader.abort(task);
            });
          }
          // 重置下载信息
          this._resetDownloadInfo();
        }

        /**
         * 清除下载缓存
         *
         * 1. 清除下载缓存后，后续的检查更新、热更新都会重新下载所有文件
         * 2. 在多次检查更新失败或者多次热更新失败后，可以考虑调用此方法，清除所有下载临时文件
         */
        clearDownloadCache() {
          // 部分状态下不可以删除下载缓存
          if (this._state == GGHotUpdateInstanceState.CheckUpdateInProgress) {
            this._warn("当前正在检查更新中，删除本地缓存失败");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateInProgress) {
            this._warn("当前正在热更新中，删除本地缓存失败");
            return;
          }

          // 清除本地的下载缓存目录
          if (native.fileUtils.isDirectoryExist(this._downloadRootDirPath)) {
            const suc = native.fileUtils.removeDirectory(this._downloadRootDirPath);
            this._debug(`当前本地缓存目录(${this._downloadRootDirPath})：存在，${suc ? "已删除成功" : "删除失败"}`);
            return;
          } else {
            this._debug(`当前本地缓存目录(${this._downloadRootDirPath})：不存在，不用删除`);
          }
        }

        /**
         * 检查更新
         */
        checkUpdate() {
          if (this._state == GGHotUpdateInstanceState.CheckUpdateInProgress) {
            this._warn("检查更新：当前已经在检查新版本中。请不要重复调用 `checkUpdate`.");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateInProgress) {
            this._warn("检查更新：当前已经在热更新中。请不要在此时调用 `checkUpdate`.");
            return;
          }

          // 更新状态
          this._debug(`检查更新：开始`);
          this._resetDownloadInfo();
          this._updateState(GGHotUpdateInstanceState.CheckUpdateInProgress);

          // 按照以下顺序，读取「此包」「本地最新版本」的 project.manifest 文件内容到内存中
          //
          // 1. 本地搜索目录的 project.manifest
          // 2. 内置的 project.manifest
          const localProjectManifestPaths = [this._projectManifestSearchPath, ...this._projectManifestBuildInPaths];
          {
            this._debug(`检查更新：解析本地 project.manifest 开始`);
            this._debug(`检查更新：本地 project.manifest 文件搜索路径如下：${JSON.stringify(localProjectManifestPaths)}`);
          }
          this._localProjectManifest = null;
          for (const localProjectManifestPath of localProjectManifestPaths) {
            this._debug(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：开始`);
            if (!native.fileUtils.isFileExist(localProjectManifestPath)) {
              this._debug(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：失败，文件不存在`);
              continue;
            }
            const localProjectManifestText = native.fileUtils.getStringFromFile(localProjectManifestPath);
            if (localProjectManifestText) {
              try {
                this._localProjectManifest = JSON.parse(localProjectManifestText);
                DEBUG && this._debug(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：成功`);
              } catch (error) {
                {
                  this._error(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：失败，文件内容解析失败`);
                  this._error(error);
                  this._error(`检查更新：失败，解析本地 project.manifest 失败`);
                }
                this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError);
                return;
              }
            }
            if (this._localProjectManifest) {
              break;
            }
          }
          // 如果没有读取本地到 project.manifest 配置，那么可能是包的首次更新，此时生成一个默认空白配置，那么就会全量将包下载下来
          if (!this._localProjectManifest) {
            this._debug(`检查更新：没法解析到本地 project.manifest 配置，将初始化一个空的 project.manifeset 配置`);
            this._localProjectManifest = {
              version: "",
              assets: {}
            };
          }
          this._debug(`检查更新：解析本地 project.manifest 成功`);

          // 检查更新前，先删除本地可能存在的 version.manifest
          if (native.fileUtils.isFileExist(this._versionManifestDownloadPath)) {
            native.fileUtils.removeFile(this._versionManifestDownloadPath);
          }

          // 通过 fetch 请求远程 version.manifest 的内容，在部分引擎版本下可能存在异常（fetch 这个 api 在原生平台上的实现上存在差异）
          // 因此，改用 downloader 去下载 version.manifest 并解析，完全替代 fetch
          this._debug(`检查更新：下载远程 version.manifest 开始。地址: ${this._versionManifestRemoteUrl}`);
          this._createParentDirs(this._versionManifestDownloadPath);
          this._downloader.createDownloadTask(this._versionManifestRemoteUrl, this._versionManifestDownloadPath);
        }

        /**
         * 重新计算下载信息
         */
        _reCalculateDownloadInfo() {
          // 重置所有下载信息
          this._resetDownloadInfo();

          // 读取本地已经下载好的远程 project.manifest
          try {
            if (native.fileUtils.isFileExist(this._projectManifestDownloadPath)) {
              this._remoteProjectManifest = JSON.parse(native.fileUtils.getStringFromFile(this._projectManifestDownloadPath));
            }
          } catch (error) {
            {
              this._error(error);
            }
          }
          if (!this._remoteProjectManifest) {
            this._error(`解析本地已存在的远程 project.manifest 失败。地址： ${this._projectManifestDownloadPath}`);
            return;
          }

          // 计算下载信息
          Object.keys(this._remoteProjectManifest.assets).forEach(assetPath => {
            const remoteAssetInfo = this._remoteProjectManifest.assets[assetPath];
            const localAssetInfo = this._localProjectManifest.assets[assetPath] ?? null;
            const need2Update = localAssetInfo == null || remoteAssetInfo.size != localAssetInfo.size || remoteAssetInfo.md5 != localAssetInfo.md5;
            if (need2Update && remoteAssetInfo.state != null) {
              // 更新需要下载的文件信息
              this._totalFiles++;
              this._totalBytes += remoteAssetInfo.size;

              // 恢复下载任务
              const downloadTask = {
                identifier: assetPath,
                requestURL: `${this._remoteRootUrl}/${assetPath}`,
                storagePath: path.join(this._downloadRootDirPath, assetPath)
              };
              if (remoteAssetInfo.state == ProjectManifestAssetUpdateState.Suc) {
                // 更新累计下载字节数
                this._downloadedBytes += remoteAssetInfo.size;
                // 下载成功的任务加入到成功列表
                this.downloadSucFiles.push(downloadTask);
              } else {
                // 更新累计下载字节数
                // 如果之前已经有相当一部分文件未下载完成，那么这里的读取可能会比较耗时
                const downloadTempFilePath = downloadTask.storagePath + ".tmp";
                if (native.fileUtils.isFileExist(downloadTempFilePath)) {
                  let downloadFileSize = native.fileUtils.getFileSize(downloadTempFilePath);
                  if (downloadFileSize > 0) {
                    this._downloadedBytes += remoteAssetInfo.size;
                  }
                }
                // 未下载或下载失败的任务加入到失败列表
                this.downloadFailedFiles.push(downloadTask);
              }
            }
          });
          {
            let info = `待下载信息：`;
            info += `总字节数：${this._totalBytes} `;
            info += `已下载字节数：${this._downloadedBytes} `;
            info += `总下载文件数：${this._totalFiles} `;
            info += `下载成功文件数：${this.downloadSucFiles.length} `;
            info += `未下载或下载失败文件数：${this.downloadFailedFiles.length}`;
            this._debug(info);
          }
        }

        /**
         * 开始热更新
         */
        hotUpdate() {
          if (this._state == GGHotUpdateInstanceState.CheckUpdateInProgress) {
            this._warn("热更新：当前正在检查新版本中。请在发现新版本之后再调用 `hotUpdate`.");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateInProgress) {
            this._warn("热更新：当前已经在热更新中。请不要重复调用 `hotUpdate`.");
            return;
          }
          this._debug(`热更新：开始`);
          this._updateState(GGHotUpdateInstanceState.HotUpdateInProgress);

          // 开始下载之前，重置下载信息
          this._reCalculateDownloadInfo();

          // 如果之前已经下载过，但存在下载未完成或者下载失败的文件，那么我们将失败的任务再次加入下载任务队列
          if (this.downloadFailedFiles.length > 0) {
            this._debug(`热更新：发现 ${this.downloadFailedFiles.length} 个未下载或下载失败任务，将重新加入队列进行下载`);
            this._downloadTasks.push(...this.downloadFailedFiles);
            this.downloadFailedFiles.length = 0;
          }

          // 如果没有发现差异文件，那么直接返回热更新成功
          if (this._downloadTasks.length == 0) {
            this._debug(`热更新：成功，当前没有资源需要下载`);
            this._updateSearchPath();
            this._updateState(GGHotUpdateInstanceState.HotUpdateSuc);
            return;
          }
          this._debug(`热更新：当前共计 ${this._downloadTasks.length} 个下载任务`);

          // 启动下载
          this._lastDownloadedBytes = 0;
          this._lastSpeedUpdateTimeInMs = 0;
          this._lastCallBackUpdateTimeInMs = Date.now();
          this._nextDownload();
        }
        _handleDownloadResult() {
          //  不管下载成功还是失败，并行任务数 -1;
          this._curConcurrentTaskCount--;

          // 如果已经没有后续下载任务并且进行中的任务都已经结束了，那么检查热更新结果
          if (this._downloadTasks.length == 0 && this._curConcurrentTaskCount == 0) {
            this._downloadSpeed = 0;
            this._downloadRemainTimeInSecond = -1;
            const suc = this._totalFiles == this.downloadSucFiles.length;
            {
              let info = suc ? "热更新：成功" : "热更新：失败";
              info += ` 总字节数：${this._totalBytes}`;
              info += ` 已下载字节数: ${this._downloadedBytes}`;
              info += ` 总下载文件数：${this._totalFiles}`;
              info += ` 下载成功文件数：${this.downloadSucFiles.length}`;
              info += ` 下载失败文件数：${this.downloadFailedFiles.length}`;
              info += ` 当前并行下载任务数：${this._curConcurrentTaskCount}`;
              info += ` 当前下载速度：${(this._downloadSpeed / 1024 / 1024).toFixed(2)} MB/s`;
              info += ` 当前剩余时间：${this._downloadRemainTimeInSecond}s`;
              suc ? this._debug(info) : this._error(info);
            }
            if (suc) {
              this._updateSearchPath();
              this._updateState(GGHotUpdateInstanceState.HotUpdateSuc);
            } else {
              this._updateState(GGHotUpdateInstanceState.HotUpdateFailed);
            }
            return;
          }

          // 如果还有后续其他下载任务，那么开启下个下载
          if (this._downloadTasks.length > 0) {
            this._nextDownload();
          }
        }
        _nextDownload() {
          while (this._downloadTasks.length > 0 && this._curConcurrentTaskCount < this._option.downloadMaxConcurrentTask) {
            this._curConcurrentTaskCount++;
            const task = this._downloadTasks.shift();
            this._createParentDirs(task.storagePath);
            this._downloader.createDownloadTask(task.requestURL, task.storagePath, task.identifier);
          }
        }
        /**
         * 更新搜索地址
         *
         * * 主包：更新搜索路径之后，还需要重启游戏才可以生效
         * * 子包：更新搜索路径之后，不用重启游戏就生效（但是要注意此前还没有加载过子包）
         */
        _updateSearchPath() {
          // e.g. ["@assets/data/","@assets/Resources/","@assets/"]
          const searchPaths = native.fileUtils.getSearchPaths();

          // 待插入的搜索路径（注意结尾要加 /)
          const newSearchPath = this._searchRootDirPath + "/";
          {
            this._debug(`当前搜索路径顺序：${JSON.stringify(searchPaths)}`);
            this._debug(`待插入的搜索路径：${newSearchPath}`);
          }

          // 插入新的搜索路径到当前搜索路径的最前面（如果当前搜索路径数组已经包含新的待插入搜索路径，那么只需要将其提到数组最前面即可）
          let isNewPathExist = false;
          for (let j = searchPaths.length - 1; j >= 0; --j) {
            if (searchPaths[j] == newSearchPath) {
              searchPaths.unshift(searchPaths.splice(j, 1)[0]);
              isNewPathExist = true;
              break;
            }
          }
          // 如果当前搜索路径数组不包含新的待插入搜索路径，那么将新的路径插入哦到最前面
          if (!isNewPathExist) {
            searchPaths.unshift(newSearchPath);
          }
          this._debug(`最终搜索路径顺序：${JSON.stringify(searchPaths)}`);
          const downloadDirPath = this._downloadRootDirPath + "/";
          if (this.name == GGHotUpdateInstanceEnum.BuildIn) {
            // 如果是主包

            // 不用更新搜索路径，在下次重启时，main.js 会自动更新搜索路径

            // 将主包下载好的 project.manifest.gg 重命名为 project.manifest，以标识主包的这个版本已经热更新完毕
            // 在下一次重启游戏后，main.js 检查到 project.manifest 存在后，才能确认主包是热更新成功（而不是热更新一半了），才会将热更新后的主包内容从下载目录移动到搜索目录
            // e.g.
            // /data/user/0/package/files/gg-hot-update-temp/build-in/project.manifest.gg ->
            // /data/user/0/package/files/gg-hot-update-temp/build-in/project.manifest
            const srcFilePath = this._projectManifestDownloadPath;
            const dstFilePath = srcFilePath.substring(0, srcFilePath.lastIndexOf(".gg"));
            this._debug(`主包热更新成功，将重命名下载目录的 project.manifest.gg 为 project.manifest 以标记主包热更新成功: ${srcFilePath} -> ${dstFilePath}`);
            if (native.fileUtils.isFileExist(dstFilePath)) {
              native.fileUtils.removeFile(dstFilePath);
            }
            this._createParentDirs(dstFilePath);
            native.fileUtils.renameFile(srcFilePath, dstFilePath);
          } else {
            // 如果是子包
            this._debug(`将移动下载目录 ${this._downloadRootDirPath} 的资源到搜索目录 ${this._searchRootDirPath}`);

            // 更新搜索路径
            native.fileUtils.setSearchPaths(searchPaths);

            // 移动下载目录的内容到搜索路径下
            const downloadDirPathLength = downloadDirPath.length;
            if (native.fileUtils.isDirectoryExist(downloadDirPath)) {
              const fileList = [];
              native.fileUtils.listFilesRecursively(downloadDirPath, fileList);
              fileList.forEach(srcPath => {
                let relativePath = srcPath.substring(downloadDirPathLength);
                let dstPath = newSearchPath + relativePath;
                if (dstPath[dstPath.length - 1] == "/") {
                  native.fileUtils.createDirectory(dstPath);
                } else {
                  this._createParentDirs(dstPath);
                  if (native.fileUtils.isFileExist(dstPath)) {
                    native.fileUtils.removeFile(dstPath);
                  }
                  native.fileUtils.renameFile(srcPath, dstPath);
                }
              });
            }
            if (native.fileUtils.isDirectoryExist(downloadDirPath)) {
              native.fileUtils.removeDirectory(downloadDirPath);
            }
          }

          // 缓存新的搜索路径数组，以便下次重启的时候，更新新的搜索路径
          localStorage.setItem("GGHotUpdateSearchPaths", JSON.stringify(searchPaths));
          this._debug(`保存最新搜索路径到 LocalStorage 中，方便下次重启游戏时更新搜索路径`);
        }
        _debug(...args) {
          ggLogger.debug(this.name, ...args);
        }
        _warn(...args) {
          ggLogger.warn(this.name, ...args);
        }
        _error(...args) {
          ggLogger.error(this.name, ...args);
        }
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7c768M/iutHF5TRZnALfhHC", "GGHotUpdateManager", undefined);

      /**
       * 热更新实例管理器
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      class GGHotUpdateManager {
        constructor() {
          /**
           * 热更新实例
           */
          this._instanceMap = null;
          this._enableLog = false;
          this._remoteRootUrl = "";
          this._localRootDirPath = "";
        }
        /**
         * 是否打印调试日志
         */
        get enableLog() {
          return this._enableLog;
        }
        /**
         * 热更新文件的远程地址根目录
         *
         * e.g. http://192.168.0.1:8080/1.0.0
         */
        get remoteRootUrl() {
          return this._remoteRootUrl;
        }
        /**
         * 热更新文件的本地存储根目录
         *
         * e.g. Android: ``/data/user/0/com.cocos.game/files/gg-hot-update``
         */
        get localRootDirPath() {
          return this._localRootDirPath;
        }
        /**
         * 初始化热更新管理器配置
         *
         * @param config 配置
         */
        init(config) {
          this._enableLog = config.enableLog ?? false;
          this._remoteRootUrl = config.packageUrl;
          this._localRootDirPath = config.storageDirPath ?? path.join(native.fileUtils.getWritablePath(), "gg-hot-update");

          // 初始化日志输出
          ggLogger.enable = this._enableLog;
        }

        /**
         * 获取热更新实例
         *
         * @param bundleName 内置的热更新实例类型 或 子包Bundle名字
         * @param option 热更新实例配置
         */
        getInstance(bundleName, option) {
          if (!this._instanceMap) {
            this._instanceMap = new Map();
          }
          let instance = this._instanceMap.get(bundleName);
          if (!instance) {
            instance = new GGHotUpdateInstance(bundleName, this._remoteRootUrl, this._localRootDirPath, option ? option : {
              downloadMaxConcurrentTask: 24,
              downloadProgressCallBackIntervalInMs: 16,
              downloadSpeedCalculationIntervalInMs: 1000
            });
            this._instanceMap.set(bundleName, instance);
          }
          return instance;
        }

        /**
         * 重启游戏
         */
        restartGame() {
          // 销毁所有热更新实例
          if (this._instanceMap) {
            this._instanceMap.forEach(instance => {
              instance.destroy();
            });
          }
          // 重启游戏
          game.restart();
        }

        /**
         * 清空所有热更包的数据，包括：
         *
         * * 更新搜索路径：移除所有热更包的搜索路径
         * * 删除插件用到的 LocalStorage 的值
         * * 删除所有热更包的本地下载目录
         * * 删除所有热更包的搜索路径目录
         *
         * 此API一般发生不兼容的升级后调用，然后重启游戏。比如
         *
         * * 在引擎升级后（比如从 3.8.4 升级到 3.8.5)，出现了不兼容的API，此时可能需要调用这个方法移除所有热更新信息，然后重启游戏
         * * 在客户端移除了一些原生方法，导致 ts 不能调用对应的方法，出现了不兼容的API，此时可能需要调用这个方法移除所有热更新信息，然后重启游戏
         * * ...
         *
         * @since 4.0.0
         */
        clear() {
          ggLogger.debug(`清空所有热更包的数据：开始`);
          // 销毁所有热更新实例
          if (this._instanceMap) {
            this._instanceMap.forEach(instance => {
              instance.destroy();
            });
          }

          // 更新搜索路径：移除所有热更包的搜索路径
          // e.g. ["/data/user/0/com.cocos.game/files/gg-hot-update", "@assets/data/","@assets/Resources/","@assets/"] -> ["@assets/data/","@assets/Resources/","@assets/"]
          const searchPaths = native.fileUtils.getSearchPaths();
          const searchRootDirPath = this._localRootDirPath + "/";
          {
            ggLogger.debug(`移除前的搜索路径：${JSON.stringify(searchPaths)}`);
            ggLogger.debug(`待移除的搜索路径：${searchRootDirPath}`);
          }
          for (let i = searchPaths.length - 1; i >= 0; --i) {
            if (searchPaths[i] == searchRootDirPath) {
              searchPaths.splice(i, 1);
            }
          }
          ggLogger.debug(`移除后的搜索路径：${JSON.stringify(searchPaths)}`);

          // 删除插件用到的 LocalStorage 的值
          localStorage.removeItem("GGHotUpdateSearchPaths");

          // 删除所有热更包的本地下载目录
          const doanloadRootDirPath = path.join(this._localRootDirPath + "-temp");
          if (native.fileUtils.isDirectoryExist(doanloadRootDirPath)) {
            const suc = native.fileUtils.removeDirectory(doanloadRootDirPath);
            ggLogger.debug(`删除所有热更包的本地下载目录(${doanloadRootDirPath})：存在，${suc ? "已删除成功" : "删除失败"}`);
          } else {
            ggLogger.debug(`删除所有热更包的本地下载目录(${doanloadRootDirPath})：不存在，不用删除`);
          }

          // 删除所有热更包的搜索路径目录
          if (native.fileUtils.isDirectoryExist(searchRootDirPath)) {
            const suc = native.fileUtils.removeDirectory(searchRootDirPath);
            ggLogger.debug(`删除所有热更包的搜索路径目录(${searchRootDirPath})：存在，${suc ? "已删除成功" : "删除失败"}`);
          } else {
            ggLogger.debug(`删除所有热更包的搜索路径目录(${searchRootDirPath})：不存在，不用删除`);
          }
          ggLogger.debug(`清空所有热更包的数据：结束`);
        }
      }

      /**
       * 热更新实例管理器
       */
      const ggHotUpdateManager = new GGHotUpdateManager();
      cclegacy._RF.pop();
      var _class$4;
      cclegacy._RF.push({}, "5517bNtGaNJrJzFRELgHPkd", "BootSceneCtrl", undefined);
      const {
        ccclass: ccclass$4,
        property: property$4
      } = _decorator;

      /**
       * 启动场景 热更新 主逻辑 控制
       *
       * @author caizhitao
       * @created 2025-08-23 22:04:18
       */
      let BootSceneCtrl = ccclass$4(_class$4 = class BootSceneCtrl extends Component {
        constructor(...args) {
          super(...args);
          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 监听 GG 热更新回调
          /**
           * 检查更新失败后，最大重试次数
           */
          this._checkUpdateRetryMaxTimes = 3;
          /**
           * 检查更新失败后，累计重试次数
           */
          this._checkUpdateRetryCurTimes = 0;
          /**
           * 检查更新失败后，重试间隔(秒)
           */
          this._checkUpdateRetryIntervalInSecond = 5;
          /**
           * 热更新失败后，最大重试次数
           */
          this._hotUpdateRetryMaxTimes = 3;
          /**
           * 热更新失败后，累计重试次数
           */
          this._hotUpdateRetryCurTimes = 0;
          /**
           * 热更新失败后，重试间隔(秒)
           */
          this._hotUpdateRetryIntervalInSecond = 5;
        }
        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 生命周期处理

        onLoad() {
          {
            let packageUrl = "";
            switch (sys.os) {
              case sys.OS.IOS:
                packageUrl = `https://raw.githubusercontent.com/zhitaocai/cocos-creator-gg-hot-update-demo/v4/build/android/data-gg-hot-update`;
                break;
              case sys.OS.ANDROID:
                // packageUrl = `https://raw.githubusercontent.com/zhitaocai/cocos-creator-gg-hot-update-demo/v4/build/ios/data-gg-hot-update`;
                packageUrl = `http://192.168.40.4:8082/gg-hot-update-demo/build/android/data-gg-hot-update`;
                break;
            }
            ggHotUpdateManager.init({
              enableLog: DEBUG,
              packageUrl: packageUrl
            });
          }
        }
        onEnable() {
          {
            ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).register(this);
            ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).checkUpdate();
          }
        }
        onDisable() {
          {
            ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).unregister(this);
          }
        }
        onGGHotUpdateInstanceCallBack(instance) {
          switch (instance.state) {
            case GGHotUpdateInstanceState.Idle:
              break;
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
              break;
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
              {
                // 检查更新失败
                if (this._checkUpdateRetryCurTimes >= this._checkUpdateRetryMaxTimes) {
                  console.log(`检查更新失败：${instance.state}，当前累计重试次数：${this._checkUpdateRetryCurTimes}，最大重试次数：${this._checkUpdateRetryMaxTimes}，已达到最大重试次数，将弹出重试弹窗`);
                  // 如果是解析本地信息失败导致的检查更新失败，那么可以考虑清除本地的下载缓存目录，以清空所有缓存，提高下次能正确更新的概率
                  if (instance.state == GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError) {
                    instance.clearDownloadCache();
                  }
                  // 弹窗提示检查失败以及提供重试机制
                  // showAlertDialog({
                  //     titleLabel: "Check for Updates Failed",
                  //     msgLabel: "There seems to be a problem during the update check.\nPlease check if your network connection is active.",
                  //     cancelBtnVisable: false,
                  //     confirmBtnVisable: true,
                  //     confirmBtnLabel: "Retry",
                  //     onConfirmBtnClick: () => {
                  //         this.checkUpdateRetryCurTimes = 0;
                  //         instance.checkUpdate();
                  //         hideAlertDialog();
                  //     },
                  // });
                } else {
                  console.log(`检查更新失败：${instance.state}，当前累计重试次数：${this._checkUpdateRetryCurTimes}，最大重试次数：${this._checkUpdateRetryMaxTimes}，还没达到最大重试次数，将在${this._checkUpdateRetryIntervalInSecond}s后重试`);
                  this.scheduleOnce(() => {
                    this._checkUpdateRetryCurTimes++;
                    instance.checkUpdate();
                  }, this._checkUpdateRetryIntervalInSecond);
                }
                break;
              }
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
              // 检查更新成功，并且发现现版本，开始热更新
              instance.hotUpdate();
              break;
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
              // 检查更新成功，但没有发现新版本，跳过热更新
              this._enterLobbyScene();
              break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
              break;
            case GGHotUpdateInstanceState.HotUpdateSuc:
              {
                // 热更新：成功，重启游戏
                // 等一小段时间在重启
                this.scheduleOnce(() => {
                  ggHotUpdateManager.restartGame();
                });
                break;
              }
            case GGHotUpdateInstanceState.HotUpdateFailed:
              {
                // 热更新：失败，尝试进行一定次数的重试
                if (this._hotUpdateRetryCurTimes >= this._hotUpdateRetryMaxTimes) {
                  console.log(`热更新过程中出现下载失败的文件，当前累计重试次数：${this._hotUpdateRetryCurTimes}，最大重试次数：${this._hotUpdateRetryMaxTimes}，已达到最大重试次数，将弹出重试弹窗`);
                  // 如果尝试一定次数之后，依旧失败，那么弹窗提示
                  // showAlertDialog({
                  //     titleLabel: "Update Resources Failed",
                  //     msgLabel: "There seems to be a problem during the resources update process.\nPlease check if your network connection is active.",
                  //     cancelBtnVisable: false,
                  //     confirmBtnVisable: true,
                  //     confirmBtnLabel: "Retry",
                  //     onConfirmBtnClick: () => {
                  //         this.hotUpdateRetryCurTimes = 0;
                  //         instance.hotUpdate();
                  //         hideAlertDialog();
                  //     },
                  // });
                } else {
                  console.log(`热更新过程中出现下载失败的文件，当前累计重试次数：${this._hotUpdateRetryCurTimes}，最大重试次数：${this._hotUpdateRetryMaxTimes}，还没有达到最大重试次数，将在${this._hotUpdateRetryIntervalInSecond}s后重试`);
                  this.scheduleOnce(() => {
                    this._hotUpdateRetryCurTimes++;
                    instance.hotUpdate();
                  }, this._hotUpdateRetryIntervalInSecond);
                }
                break;
              }
          }
        }
        _enterLobbyScene() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class$4;
      cclegacy._RF.pop();
      var _dec$3, _class$5, _class2$2, _descriptor$2;
      cclegacy._RF.push({}, "925d89ykyNIrIyEuDljmIe2", "BootSceneUIHotUpdateProgressCtrl", undefined);
      const {
        ccclass: ccclass$5,
        property: property$5
      } = _decorator;

      /**
       * 启动场景 热更新进度UI 控制
       *
       * @author caizhitao
       * @created 2025-08-23 20:10:10
       */
      let BootSceneUIHotUpdateProgressCtrl = (_dec$3 = property$5({
        type: UIHotUpdateProgress,
        tooltip: "热更新进度组件"
      }), ccclass$5(_class$5 = (_class2$2 = class BootSceneUIHotUpdateProgressCtrl extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "hpProgressComp", _descriptor$2, this);
        }
        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 生命周期处理
        onLoad() {
          // 只有原生平台下才有热更新
          // 因此我们控制只有原生平台下，才显示
          {
            this.node.active = true;
          }
        }
        onEnable() {
          this.hpProgressComp.updateState(GGHotUpdateInstanceState.Idle);

          // 注册主包热更新监听
          ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).register(this);
        }
        onDisable() {
          // 注销主包热更新监听
          ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn).unregister(this);
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 监听 GG 热更新回调

        onGGHotUpdateInstanceCallBack(instance) {
          this.hpProgressComp.updateState(instance.state);
          switch (instance.state) {
            case GGHotUpdateInstanceState.Idle:
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
              break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
              {
                // 热更新：下载中
                this.hpProgressComp.updateProgress(instance.totalBytes, instance.downloadedBytes, instance.downloadSpeedInSecond, instance.downloadRemainTimeInSecond);
                break;
              }
            case GGHotUpdateInstanceState.HotUpdateSuc:
            case GGHotUpdateInstanceState.HotUpdateFailed:
              break;
          }
        }
      }, _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "hpProgressComp", [_dec$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2$2)) || _class$5);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a919crM8jdEtZNZ6OUx1k30", "HotUpdateSystem", undefined);
      class HotUpdateSystem {
        constructor() {
          /**
           * 加载完毕后进入的场景配置
           */
          this.pendingSceneConfig = null;
        }
      }
      const hotUpdateSystem = new HotUpdateSystem();
      cclegacy._RF.pop();
      var _dec$4, _dec2$2, _class$6, _class2$3, _descriptor$3, _descriptor2$2;
      cclegacy._RF.push({}, "85fdbrbQFlPzKk1Mw0ymHXt", "HotUpdateSceneCtrl", undefined);
      const {
        ccclass: ccclass$6,
        property: property$6
      } = _decorator;
      let HotUpdateSceneCtrl = (_dec$4 = property$6(Label), _dec2$2 = property$6({
        type: UIHotUpdateProgress,
        tooltip: "热更新进度组件"
      }), ccclass$6(_class$6 = (_class2$3 = class HotUpdateSceneCtrl extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "bundleNameLabel", _descriptor$3, this);
          _initializerDefineProperty(this, "hpProgressComp", _descriptor2$2, this);
        }
        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 组件生命周期处理
        onEnable() {
          this.bundleNameLabel.string = hotUpdateSystem.pendingSceneConfig.bundleName;

          // 显示 loading
          this.hpProgressComp.updateState(GGHotUpdateInstanceState.Idle);

          // 检查更新
          const instance = ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig.bundleName);
          instance.register(this);
          instance.checkUpdate();
        }
        onDisable() {
          const instance = ggHotUpdateManager.getInstance(hotUpdateSystem.pendingSceneConfig.bundleName);
          instance.unregister(this);
          this.unscheduleAllCallbacks();
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 热更新回调

        onGGHotUpdateInstanceCallBack(instance) {
          this.hpProgressComp.updateState(instance.state);
          switch (instance.state) {
            case GGHotUpdateInstanceState.Idle:
              break;
            case GGHotUpdateInstanceState.CheckUpdateInProgress:
              break;
            case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
            case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
              // 检查更新失败：返回大厅
              this.scheduleOnce(() => {
                sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
              }, 2);
              break;
            case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
              // 检查更新成功：发现新版本，进行热更新
              instance.hotUpdate();
              break;
            case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
              // 检查更新成功：当前已经是最新版本，直接进入游戏场景
              this._enterGameScene();
              break;
            case GGHotUpdateInstanceState.HotUpdateInProgress:
              // 热更新：进行中
              this.hpProgressComp.updateProgress(instance.totalBytes, instance.downloadedBytes, instance.downloadSpeedInSecond, instance.downloadRemainTimeInSecond);
              break;
            case GGHotUpdateInstanceState.HotUpdateSuc:
              // 热更新：成功，进入游戏
              this._enterGameScene();
              break;
            case GGHotUpdateInstanceState.HotUpdateFailed:
              // 热更新：失败，返回大厅
              this.scheduleOnce(() => {
                sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
              }, 2);
              break;
          }
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 业务逻辑处理

        _enterGameScene() {
          sceneRouter.runSceneAsync(hotUpdateSystem.pendingSceneConfig);
        }
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }, (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "bundleNameLabel", [_dec$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$3.prototype, "hpProgressComp", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2$3)) || _class$6);
      cclegacy._RF.pop();
      var _dec$5, _class$7, _class2$4, _descriptor$4;
      cclegacy._RF.push({}, "2b5e2t73URPAKcyvYx9lwmk", "LobbyGameListItem", undefined);
      const {
        ccclass: ccclass$7,
        property: property$7
      } = _decorator;
      let LobbyGameListItem = (_dec$5 = property$7(Label), ccclass$7(_class$7 = (_class2$4 = class LobbyGameListItem extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "gameName", _descriptor$4, this);
          this._data = null;
        }
        bindData(data) {
          this._data = data;
          this.gameName.string = this._data.gameName;
        }
        onClick() {
          if (!this._data) {
            return;
          }
          // 如果
          //
          // * 待打开的子游戏bundle是需要热更新的bundle
          // * 待打开的子游戏bundle还没有更新到最新版本
          //
          // 那么，想进入热更新加载场景，热更游戏，热更新完毕后再进入游戏场景，否则直接进入游戏常见
          if (HotUpdateBundleConfig.isHotUpdateBundle(this._data.sceneConfig.bundleName) && ggHotUpdateManager.getInstance(this._data.sceneConfig.bundleName).state != GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate && ggHotUpdateManager.getInstance(this._data.sceneConfig.bundleName).state != GGHotUpdateInstanceState.HotUpdateSuc) {
            hotUpdateSystem.pendingSceneConfig = this._data.sceneConfig;
            sceneRouter.runSceneAsync(GameSceneConfig.HotUpdateScene);
          } else {
            sceneRouter.runSceneAsync(this._data.sceneConfig);
          }
        }
      }, _descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "gameName", [_dec$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2$4)) || _class$7);
      cclegacy._RF.pop();
      var _dec$6, _dec2$3, _class$8, _class2$5, _descriptor$5, _descriptor2$3;
      cclegacy._RF.push({}, "71774IsIUxDsaiupc0uyOdp", "LobbyGameListCtrl", undefined);
      const {
        ccclass: ccclass$8,
        property: property$8
      } = _decorator;
      let LobbyGameListCtrl = (_dec$6 = property$8(Node), _dec2$3 = property$8(Node), ccclass$8(_class$8 = (_class2$5 = class LobbyGameListCtrl extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "itemParentNode", _descriptor$5, this);
          _initializerDefineProperty(this, "itemNode", _descriptor2$3, this);
          // ////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 节点复用处理
          this._nodePool = new NodePool();
        }
        _getNode() {
          const node = this._nodePool.get();
          return node ? node : instantiate(this.itemNode);
        }
        _putNode(node) {
          this._nodePool.put(node);
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 生命周期处理

        onLoad() {
          for (let i = this.itemParentNode.children.length - 1; i >= 0; --i) {
            this._putNode(this.itemParentNode.children[i]);
          }
        }
        onDestroy() {
          this._nodePool.clear();
        }
        start() {
          const games = [{
            gameName: "GameA",
            sceneConfig: GameSceneConfig.GameAScene
          }, {
            gameName: "GameB",
            sceneConfig: GameSceneConfig.GameBScene
          }, {
            gameName: "GameC",
            sceneConfig: GameSceneConfig.GameCScene
          }, {
            gameName: "GameD",
            sceneConfig: GameSceneConfig.GameDScene
          }];
          games.forEach(data => {
            const itemNode = this._getNode();
            itemNode.parent = this.itemParentNode;
            const itemComp = itemNode.getComponent(LobbyGameListItem);
            itemComp.bindData(data);
          });
        }
      }, (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "itemParentNode", [_dec$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$5.prototype, "itemNode", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2$5)) || _class$8);
      cclegacy._RF.pop();
      var _dec$7, _class$9, _class2$6, _descriptor$6;
      cclegacy._RF.push({}, "434dembGBRCJpqvmUt5Kxj0", "SubGameListItem", undefined);
      const {
        ccclass: ccclass$9,
        property: property$9
      } = _decorator;
      let SubGameListItem = (_dec$7 = property$9(Sprite), ccclass$9(_class$9 = (_class2$6 = class SubGameListItem extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "sprite", _descriptor$6, this);
        }
        setSpriteFrame(spriteFrame) {
          this.sprite.spriteFrame = spriteFrame;
          this.sprite.getComponent(Sprite2DScaleAdapterComponent).updateSprite();
        }
      }, _descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "sprite", [_dec$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2$6)) || _class$9);
      cclegacy._RF.pop();
      var _dec$8, _dec2$4, _dec3$2, _class$a, _class2$7, _descriptor$7, _descriptor2$4, _descriptor3$1, _descriptor4$1;
      cclegacy._RF.push({}, "d33ebtLuqVBh7tZjjHz/ks4", "SubGameListCtrl", undefined);
      const {
        ccclass: ccclass$a,
        property: property$a
      } = _decorator;
      let SubGameListCtrl = (_dec$8 = property$a(UILoading), _dec2$4 = property$a(Node), _dec3$2 = property$a(Node), ccclass$a(_class$a = (_class2$7 = class SubGameListCtrl extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "uiLoading", _descriptor$7, this);
          _initializerDefineProperty(this, "itemParentNode", _descriptor2$4, this);
          _initializerDefineProperty(this, "itemNode", _descriptor3$1, this);
          _initializerDefineProperty(this, "bundleName", _descriptor4$1, this);
          // ////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 节点复用处理
          this._nodePool = new NodePool();
        }
        _getNode() {
          const node = this._nodePool.get();
          return node ? node : instantiate(this.itemNode);
        }
        _putNode(node) {
          this._nodePool.put(node);
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 生命周期处理

        onLoad() {
          for (let i = this.itemParentNode.children.length - 1; i >= 0; --i) {
            this._putNode(this.itemParentNode.children[i]);
          }
        }
        onDestroy() {
          this._nodePool.clear();
        }
        start() {
          // 根据实际屏幕大小，决定示例图的大小，以实现两列的效果
          const gridLayout = this.itemParentNode.getComponent(Layout);
          const gridLayoutWidth = this.itemParentNode.getComponent(UITransform).width;
          const itemWidth = (gridLayoutWidth - gridLayout.paddingLeft - gridLayout.paddingRight - gridLayout.spacingX) / 2;
          gridLayout.cellSize = size(itemWidth, itemWidth);
          this.uiLoading.playShowAnim();
          // 加载并显示 子Bundle 的纹理资源
          assetManager.loadBundle(this.bundleName, (error, bundle) => {
            if (error) {
              console.error(`load bundle failed: ${this.bundleName}`);
              console.error(error);
              this.uiLoading.playHideAnim();
              return;
            }
            bundle.loadDir("textures", SpriteFrame, (error, assets) => {
              this.uiLoading.playHideAnim();
              if (error) {
                console.error(`load bundle textures failed: ${this.bundleName}`);
                console.error(error);
                return;
              }
              assets.sort((a, b) => {
                return parseInt(a.name) - parseInt(b.name);
              }).forEach(spriteFrame => {
                const itemNode = this._getNode();
                itemNode.parent = this.itemParentNode;
                const itemComp = itemNode.getComponent(SubGameListItem);
                itemComp.setSpriteFrame(spriteFrame);
              });
            });
          });
        }
      }, (_descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "uiLoading", [_dec$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$7.prototype, "itemParentNode", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$7.prototype, "itemNode", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$7.prototype, "bundleName", [property$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2$7)) || _class$a);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});