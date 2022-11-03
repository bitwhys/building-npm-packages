// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Yyx2":[function(require,module,exports) {
var _utils = require("@bitwhys/utils");
var _utils1 = require("../../utils");
var _variableCss = require("@fontsource/lexend/variable.css");
var _tailwindCss = require("./tailwind.css");
const TEST_YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=vIA10kmNXwU";
const trigger = document.querySelector("#trigger");
const title = document.querySelector("#title");
const handleClick = (clickEvent)=>{
    clickEvent.preventDefault();
    const videoId = (0, _utils.getYouTubeVideoId)(TEST_YOUTUBE_VIDEO_URL);
    title.innerText = videoId;
    (0, _utils1.getCurrentTab)().then((tab)=>{
        console.log(`Tab: `, tab);
    });
};
trigger.addEventListener("click", handleClick);

},{"@bitwhys/utils":"55bXQ","../../utils":"cCFPO","@fontsource/lexend/variable.css":"99iSp","./tailwind.css":"irMXc"}],"55bXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getYouTubeVideoId", ()=>(0, _getYouTubeVideoIdDefault.default));
var _getYouTubeVideoId = require("./utils/getYouTubeVideoId");
var _getYouTubeVideoIdDefault = parcelHelpers.interopDefault(_getYouTubeVideoId);

},{"./utils/getYouTubeVideoId":"iiBmR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"iiBmR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getYouTubeVideoId = (url)=>{
    const videoIDRegEx = new RegExp(/v=(\S{11})/);
    const matches = url.match(videoIDRegEx);
    const [_, video_id] = matches;
    return video_id;
};
exports.default = getYouTubeVideoId;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cCFPO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCurrentTab", ()=>getCurrentTab);
const getCurrentTab = async ()=>{
    let queryOptions = {
        active: true,
        currentWindow: true
    };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"99iSp":[function() {},{}],"irMXc":[function() {},{}]},["8Yyx2"], "8Yyx2", "parcelRequire1b9a")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxhQUFhLEdBQUcsVUFBWTtJQUN2QyxJQUFJLFlBQVksR0FBRztRQUFFLE1BQU0sRUFBRSxJQUFJO1FBQUUsYUFBYSxFQUFFLElBQUk7S0FBRTtJQUN4RCw2REFBNkQ7SUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ2pELE9BQU8sR0FBRyxDQUFBO0NBQ1giLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wb3B1cC9wb3B1cC1tYWluLmpzIiwibm9kZV9tb2R1bGVzL0BiaXR3aHlzL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BiaXR3aHlzL3V0aWxzL3V0aWxzL2dldFlvdVR1YmVWaWRlb0lkLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvdXRpbHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0WW91VHViZVZpZGVvSWQgfSBmcm9tICdAYml0d2h5cy91dGlscydcbmltcG9ydCB7IGdldEN1cnJlbnRUYWIgfSBmcm9tICcuLi8uLi91dGlscydcblxuaW1wb3J0ICdAZm9udHNvdXJjZS9sZXhlbmQvdmFyaWFibGUuY3NzJ1xuaW1wb3J0ICcuL3RhaWx3aW5kLmNzcydcblxuY29uc3QgVEVTVF9ZT1VUVUJFX1ZJREVPX1VSTCA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXZJQTEwa21OWHdVJ1xuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlnZ2VyJylcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSBjbGlja0V2ZW50ID0+IHtcbiAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHZpZGVvSWQgPSBnZXRZb3VUdWJlVmlkZW9JZChURVNUX1lPVVRVQkVfVklERU9fVVJMKVxuICB0aXRsZS5pbm5lclRleHQgPSB2aWRlb0lkXG4gIGdldEN1cnJlbnRUYWIoKS50aGVuKHRhYiA9PiB7XG4gICAgY29uc29sZS5sb2coYFRhYjogYCwgdGFiKVxuICB9KVxufVxuXG50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGdldFlvdVR1YmVWaWRlb0lkIH0gZnJvbSAnLi91dGlscy9nZXRZb3VUdWJlVmlkZW9JZCdcbiIsImNvbnN0IGdldFlvdVR1YmVWaWRlb0lkID0gdXJsID0+IHtcbiAgY29uc3QgdmlkZW9JRFJlZ0V4ID0gbmV3IFJlZ0V4cCgvdj0oXFxTezExfSkvKVxuICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKHZpZGVvSURSZWdFeClcbiAgY29uc3QgW18sIHZpZGVvX2lkXSA9IG1hdGNoZXNcbiAgcmV0dXJuIHZpZGVvX2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFlvdVR1YmVWaWRlb0lkXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0Q3VycmVudFRhYiA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH1cbiAgLy8gYHRhYmAgd2lsbCBlaXRoZXIgYmUgYSBgdGFicy5UYWJgIGluc3RhbmNlIG9yIGB1bmRlZmluZWRgLlxuICBsZXQgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpXG4gIHJldHVybiB0YWJcbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJwb3B1cC5IQVNIX1JFRl82M2I0ODhjYzQzNzBiNjI1LmpzLm1hcCJ9
