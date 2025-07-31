System.register("chunks:///_virtual/bundle-game-d", ['./GameDSceneCtrl.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GameDSceneCtrl.ts", ['cc', './GameSceneConfig.ts', './SceneRouter.ts'], function (exports) {
  var cclegacy, Component, _decorator, GameSceneConfig, sceneRouter;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      GameSceneConfig = module.GameSceneConfig;
    }, function (module) {
      sceneRouter = module.sceneRouter;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "1231b1Q27pKZZU1Idsqm2Rq", "GameDSceneCtrl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameDSceneCtrl = exports('GameDSceneCtrl', ccclass(_class = class GameDSceneCtrl extends Component {
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-game-d', 'chunks:///_virtual/bundle-game-d'); 
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