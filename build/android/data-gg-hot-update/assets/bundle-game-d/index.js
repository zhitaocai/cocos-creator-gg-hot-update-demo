System.register("chunks:///bundle-game-d.js", ['cc', './SceneRouter-79865703.js'], function () {
  var cclegacy, Component, _decorator, sceneRouter, GameSceneConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      sceneRouter = module.s;
      GameSceneConfig = module.a;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "1231b1Q27pKZZU1Idsqm2Rq", "GameDSceneCtrl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameDSceneCtrl = ccclass(_class = class GameDSceneCtrl extends Component {
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-game-d', 'chunks:///bundle-game-d.js'); 
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