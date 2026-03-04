System.register("chunks:///bundle-game-a.js", ['cc', './SceneRouter-89bbcede.js'], function () {
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
      cclegacy._RF.push({}, "84c00ceQQxJgIiZ97vf55lk", "GameASceneCtrl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameASceneCtrl = ccclass(_class = class GameASceneCtrl extends Component {
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-game-a', 'chunks:///bundle-game-a.js'); 
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