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
        lastFocusedWindow: true
    };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"99iSp":[function() {},{}],"irMXc":[function() {},{}]},["8Yyx2"], "8Yyx2", "parcelRequire1b9a")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxhQUFhLEdBQUcsVUFBWTtJQUN2QyxJQUFJLFlBQVksR0FBRztRQUFFLE1BQU0sRUFBRSxJQUFJO1FBQUUsaUJBQWlCLEVBQUUsSUFBSTtLQUFFO0lBQzVELDZEQUE2RDtJQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDakQsT0FBTyxHQUFHLENBQUE7Q0FDWCIsInNvdXJjZXMiOlsic3JjL3BhZ2VzL3BvcHVwL3BvcHVwLW1haW4uanMiLCJub2RlX21vZHVsZXMvQGJpdHdoeXMvdXRpbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQGJpdHdoeXMvdXRpbHMvdXRpbHMvZ2V0WW91VHViZVZpZGVvSWQuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy91dGlscy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRZb3VUdWJlVmlkZW9JZCB9IGZyb20gJ0BiaXR3aHlzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0Q3VycmVudFRhYiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5pbXBvcnQgJ0Bmb250c291cmNlL2xleGVuZC92YXJpYWJsZS5jc3MnXG5pbXBvcnQgJy4vdGFpbHdpbmQuY3NzJ1xuXG5jb25zdCBURVNUX1lPVVRVQkVfVklERU9fVVJMID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dklBMTBrbU5Yd1UnXG5jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWdnZXInKVxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuXG5jb25zdCBoYW5kbGVDbGljayA9IGNsaWNrRXZlbnQgPT4ge1xuICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdmlkZW9JZCA9IGdldFlvdVR1YmVWaWRlb0lkKFRFU1RfWU9VVFVCRV9WSURFT19VUkwpXG4gIHRpdGxlLmlubmVyVGV4dCA9IHZpZGVvSWRcbiAgZ2V0Q3VycmVudFRhYigpLnRoZW4odGFiID0+IHtcbiAgICBjb25zb2xlLmxvZyhgVGFiOiBgLCB0YWIpXG4gIH0pXG59XG5cbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0WW91VHViZVZpZGVvSWQgfSBmcm9tICcuL3V0aWxzL2dldFlvdVR1YmVWaWRlb0lkJ1xuIiwiY29uc3QgZ2V0WW91VHViZVZpZGVvSWQgPSB1cmwgPT4ge1xuICBjb25zdCB2aWRlb0lEUmVnRXggPSBuZXcgUmVnRXhwKC92PShcXFN7MTF9KS8pXG4gIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2godmlkZW9JRFJlZ0V4KVxuICBjb25zdCBbXywgdmlkZW9faWRdID0gbWF0Y2hlc1xuICByZXR1cm4gdmlkZW9faWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0WW91VHViZVZpZGVvSWRcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXRDdXJyZW50VGFiID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgcXVlcnlPcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH1cbiAgLy8gYHRhYmAgd2lsbCBlaXRoZXIgYmUgYSBgdGFicy5UYWJgIGluc3RhbmNlIG9yIGB1bmRlZmluZWRgLlxuICBsZXQgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpXG4gIHJldHVybiB0YWJcbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJwb3B1cC5IQVNIX1JFRl82M2I0ODhjYzQzNzBiNjI1LmpzLm1hcCJ9
