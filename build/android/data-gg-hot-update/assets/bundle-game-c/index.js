System.register("chunks:///bundle-game-c.js", ['cc', './SceneRouter-28bb57e1.js'], function () {
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
      cclegacy._RF.push({}, "7feb8DJillDMqi2t93LtzFc", "GameCSceneCtrl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameCSceneCtrl = ccclass(_class = class GameCSceneCtrl extends Component {
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-game-c', 'chunks:///bundle-game-c.js'); 
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