System.register("chunks:///bundle-game-b.js", ['cc', './SceneRouter-28bb57e1.js'], function () {
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
      cclegacy._RF.push({}, "43302H/QkxA1IAYITEhcqOk", "GameBSceneCtrl", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let GameBSceneCtrl = ccclass(_class = class GameBSceneCtrl extends Component {
        onBackBtnClick() {
          sceneRouter.runSceneAsync(GameSceneConfig.LobbyScene);
        }
      }) || _class;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/bundle-game-b', 'chunks:///bundle-game-b.js'); 
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