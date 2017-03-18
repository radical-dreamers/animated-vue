(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("src/common/generic-transition.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericTransition = function GenericTransition() {
  var enterTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var leaveTransition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var name = arguments[2];
  var isGroup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  _classCallCheck(this, GenericTransition);

  this.functional = true, this.enterTransition = enterTransition;
  this.name = name;
  this.leaveTransition = leaveTransition;
  this.isGroup = isGroup;

  var that = this;
  /**
   * This is our component's render function. It will render a transition or transition-group
   * component depending on the isGroup setting for this object
   * @param  {Function} createElement Vue's function for creating elements
   * @param  {Object} context All props, data, and stuff our component has
   * @return {Object}              the result of createElement with this
   * component's current parameters.
   */
  this.render = function (createElement, context) {

    var data = {
      props: {
        name: that.name,
        enterActiveClass: that.enterTransition != '' ? 'animated ' + that.enterTransition : '',
        leaveActiveClass: that.leaveTransition != '' ? 'animated' + that.leaveTransition : ''
      },
      on: {
        beforeEnter: function beforeEnter(el) {},
        afterEnter: function afterEnter(el) {}
      }
    };
    return createElement(that.isGroup ? 'transition-group' : 'transition', data, context.children);
  };
};

exports.default = GenericTransition;

});

require.register("src/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeIn = require('./transitions/fade-in');

var _fadeIn2 = _interopRequireDefault(_fadeIn);

var _attentionSeekers = require('./transitions/attention-seekers');

var _attentionSeekers2 = _interopRequireDefault(_attentionSeekers);

var _bouncingEntrances = require('./transitions/bouncing-entrances');

var _bouncingEntrances2 = _interopRequireDefault(_bouncingEntrances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
  'animated-fade-in': _fadeIn2.default,
  'animated-bounce': _attentionSeekers2.default.Bounce,
  'animated-flash': _attentionSeekers2.default.Flash,
  'animated-jello': _attentionSeekers2.default.Jello,
  'animated-pulse': _attentionSeekers2.default.Pulse,
  'animated-rubber-band': _attentionSeekers2.default.RubberBand,
  'animated-shake': _attentionSeekers2.default.Shake,
  'animated-swing': _attentionSeekers2.default.Swing,
  'animated-tada': _attentionSeekers2.default.Tada,
  'animated-wobble': _attentionSeekers2.default.Wobble,
  'animated-bounce-in': _bouncingEntrances2.default.BounceIn,
  'animated-bounce-in-down': _bouncingEntrances2.default.BounceInDown,
  'animated-bounce-in-left': _bouncingEntrances2.default.BounceInLeft,
  'animated-bounce-in-up': _bouncingEntrances2.default.BounceInUp,
  'animated-bounce-in-right': _bouncingEntrances2.default.BounceInRight
};

optoins.install = function (Vue) {
  for (var key in components) {
    Vue.component(key, components[key]);
  }
};

exports.default = options;

});

require.register("src/transitions/attention-seekers/bounce.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('bounce', undefined, 'bounce');

});

require.register("src/transitions/attention-seekers/flash.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('flash', undefined, 'flash');

});

require.register("src/transitions/attention-seekers/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bounce = require('./bounce');

var _bounce2 = _interopRequireDefault(_bounce);

var _flash = require('./flash');

var _flash2 = _interopRequireDefault(_flash);

var _pulse = require('./pulse');

var _pulse2 = _interopRequireDefault(_pulse);

var _rubberBand = require('./rubber-band');

var _rubberBand2 = _interopRequireDefault(_rubberBand);

var _shake = require('./shake');

var _shake2 = _interopRequireDefault(_shake);

var _swing = require('./swing');

var _swing2 = _interopRequireDefault(_swing);

var _tada = require('./tada');

var _tada2 = _interopRequireDefault(_tada);

var _wobble = require('./wobble');

var _wobble2 = _interopRequireDefault(_wobble);

var _jello = require('./jello');

var _jello2 = _interopRequireDefault(_jello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Bounce: _bounce2.default,
  Flash: _flash2.default,
  Pulse: _pulse2.default,
  RubberBand: _rubberBand2.default,
  Shake: _shake2.default,
  Swing: _swing2.default,
  Tada: _tada2.default,
  Wobble: _wobble2.default,
  Jello: _jello2.default
};

});

require.register("src/transitions/attention-seekers/jello.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('jello', undefined, 'jello');

});

require.register("src/transitions/attention-seekers/pulse.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('pulse', undefined, 'pulse');

});

require.register("src/transitions/attention-seekers/rubber-band.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('rubberBand', undefined, 'rubberBand');

});

require.register("src/transitions/attention-seekers/shake.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('shake', undefined, 'shake');

});

require.register("src/transitions/attention-seekers/swing.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('swing', undefined, 'swing');

});

require.register("src/transitions/attention-seekers/tada.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('tada', undefined, 'tada');

});

require.register("src/transitions/attention-seekers/wobble.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('wobble', undefined, 'wobble');

});

require.register("src/transitions/bouncing-entrances/bounce-in-down.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('bounceInDown', undefined, 'bounceInDown');

});

require.register("src/transitions/bouncing-entrances/bounce-in-left.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('bounceInLeft', undefined, 'bounceInLeft');

});

require.register("src/transitions/bouncing-entrances/bounce-in-right.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('bounceInRight', undefined, 'bounceInRight');

});

require.register("src/transitions/bouncing-entrances/bounce-in-up.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('bounceInUp', undefined, 'bounceInUp');

});

require.register("src/transitions/bouncing-entrances/bounce-in.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('bounceIn', undefined, 'bounceIn');

});

require.register("src/transitions/bouncing-entrances/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bounceIn = require('./bounce-in');

var _bounceIn2 = _interopRequireDefault(_bounceIn);

var _bounceInLeft = require('./bounce-in-left');

var _bounceInLeft2 = _interopRequireDefault(_bounceInLeft);

var _bounceInDown = require('./bounce-in-down');

var _bounceInDown2 = _interopRequireDefault(_bounceInDown);

var _bounceInRight = require('./bounce-in-right');

var _bounceInRight2 = _interopRequireDefault(_bounceInRight);

var _bounceInUp = require('./bounce-in-up');

var _bounceInUp2 = _interopRequireDefault(_bounceInUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  BounceIn: _bounceIn2.default,
  BounceInLeft: _bounceInLeft2.default,
  BounceInDown: _bounceInDown2.default,
  BounceInRight: _bounceInRight2.default,
  BounceInUp: _bounceInUp2.default
};

});

require.register("src/transitions/bouncing-exits/bounce-out.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default(undefined, 'bounceOut', 'bounceOut');

});

require.register("src/transitions/bouncing-exits/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bounceOut = require('./bounce-out');

var _bounceOut2 = _interopRequireDefault(_bounceOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  BounceOut: _bounceOut2.default
};

});

require.register("src/transitions/fade-in.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _genericTransition = require('../common/generic-transition');

var _genericTransition2 = _interopRequireDefault(_genericTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _genericTransition2.default('fadeIn', undefined, 'fadeIn');

});

require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=animated-vue.js.map