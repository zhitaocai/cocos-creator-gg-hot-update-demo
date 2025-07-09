System.register("chunks:///_virtual/bundle-game-a", ['./GameASceneCtrl.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GameASceneCtrl.ts", ['cc', './GameSceneConfig.ts', './SceneRouter.ts'], function (exports) {
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
      cclegacy._RF.push({}, "84c00ceQQxJgIiZ97vf55lk", "GameASceneCtrl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameASceneCtrl = exports('GameASceneCtrl', ccclass(_class = class GameASceneCtrl extends Component {
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-game-a', 'chunks:///_virtual/bundle-game-a'); 
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