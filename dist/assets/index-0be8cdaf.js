(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qu = { exports: {} },
  el = {},
  Ku = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  ic = Symbol.for("react.portal"),
  oc = Symbol.for("react.fragment"),
  uc = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  hc = Symbol.for("react.lazy"),
  Io = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Io && e[Io]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xu = Object.assign,
  Gu = {};
function rn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Yu);
}
rn.prototype.isReactComponent = {};
rn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zu() {}
Zu.prototype = rn.prototype;
function Ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Yu);
}
var $i = (Ai.prototype = new Zu());
$i.constructor = Ai;
Xu($i, rn.prototype);
$i.isPureReactComponent = !0;
var Do = Array.isArray,
  Ju = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ju.call(t, r) && !qu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Bi.current,
  };
}
function vc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function yc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fo = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : t.toString(36);
}
function gr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xn:
          case ic:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + wl(o, 0) : r),
      Do(l)
        ? ((n = ""),
          e != null && (n = e.replace(Fo, "$&/") + "/"),
          gr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Hi(l) &&
            (l = vc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Do(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + wl(i, u);
      o += gr(i, t, n, s, l);
    }
  else if (((s = mc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + wl(i, u++)), (o += gr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    gr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  wc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Bi,
  };
function es() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = rn;
z.Fragment = oc;
z.Profiler = sc;
z.PureComponent = Ai;
z.StrictMode = uc;
z.Suspense = dc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
z.act = es;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Bi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ju.call(t, s) &&
        !qu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ac, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = bu;
z.createFactory = function (e) {
  var t = bu.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: fc, render: e };
};
z.isValidElement = Hi;
z.lazy = function (e) {
  return { $$typeof: hc, _payload: { _status: -1, _result: e }, _init: gc };
};
z.memo = function (e, t) {
  return { $$typeof: pc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
z.unstable_act = es;
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = "18.3.1";
Ku.exports = z;
var Ln = Ku.exports;
const kc = lc(Ln);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc = Ln,
  Ec = Symbol.for("react.element"),
  Cc = Symbol.for("react.fragment"),
  xc = Object.prototype.hasOwnProperty,
  _c = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) xc.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ec,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: _c.current,
  };
}
el.Fragment = Cc;
el.jsx = ts;
el.jsxs = ts;
Qu.exports = el;
var A = Qu.exports,
  Ql = {},
  ns = { exports: {} },
  ge = {},
  rs = { exports: {} },
  ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, N) {
    var T = C.length;
    C.push(N);
    e: for (; 0 < T; ) {
      var W = (T - 1) >>> 1,
        G = C[W];
      if (0 < l(G, N)) (C[W] = N), (C[T] = G), (T = W);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var N = C[0],
      T = C.pop();
    if (T !== N) {
      C[0] = T;
      e: for (var W = 0, G = C.length, bn = G >>> 1; W < bn; ) {
        var mt = 2 * (W + 1) - 1,
          gl = C[mt],
          vt = mt + 1,
          er = C[vt];
        if (0 > l(gl, T))
          vt < G && 0 > l(er, gl)
            ? ((C[W] = er), (C[vt] = T), (W = vt))
            : ((C[W] = gl), (C[mt] = T), (W = mt));
        else if (vt < G && 0 > l(er, T)) (C[W] = er), (C[vt] = T), (W = vt);
        else break e;
      }
    }
    return N;
  }
  function l(C, N) {
    var T = C.sortIndex - N.sortIndex;
    return T !== 0 ? T : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= C)
        r(c), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(c);
    }
  }
  function v(C) {
    if (((k = !1), d(C), !w))
      if (n(s) !== null) (w = !0), vl(E);
      else {
        var N = n(c);
        N !== null && yl(v, N.startTime - C);
      }
  }
  function E(C, N) {
    (w = !1), k && ((k = !1), f(P), (P = -1)), (g = !0);
    var T = p;
    try {
      for (
        d(N), h = n(s);
        h !== null && (!(h.expirationTime > N) || (C && !Pe()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var G = W(h.expirationTime <= N);
          (N = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === n(s) && r(s),
            d(N);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var bn = !0;
      else {
        var mt = n(c);
        mt !== null && yl(v, mt.startTime - N), (bn = !1);
      }
      return bn;
    } finally {
      (h = null), (p = T), (g = !1);
    }
  }
  var x = !1,
    _ = null,
    P = -1,
    V = 5,
    L = -1;
  function Pe() {
    return !(e.unstable_now() - L < V);
  }
  function un() {
    if (_ !== null) {
      var C = e.unstable_now();
      L = C;
      var N = !0;
      try {
        N = _(!0, C);
      } finally {
        N ? sn() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var sn;
  if (typeof a == "function")
    sn = function () {
      a(un);
    };
  else if (typeof MessageChannel < "u") {
    var Mo = new MessageChannel(),
      rc = Mo.port2;
    (Mo.port1.onmessage = un),
      (sn = function () {
        rc.postMessage(null);
      });
  } else
    sn = function () {
      D(un, 0);
    };
  function vl(C) {
    (_ = C), x || ((x = !0), sn());
  }
  function yl(C, N) {
    P = D(function () {
      C(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), vl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var T = p;
      p = N;
      try {
        return C();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, N) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var T = p;
      p = C;
      try {
        return N();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (C, N, T) {
      var W = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? W + T : W))
          : (T = W),
        C)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = T + G),
        (C = {
          id: m++,
          callback: N,
          priorityLevel: C,
          startTime: T,
          expirationTime: G,
          sortIndex: -1,
        }),
        T > W
          ? ((C.sortIndex = T),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (k ? (f(P), (P = -1)) : (k = !0), yl(v, T - W)))
          : ((C.sortIndex = G), t(s, C), w || g || ((w = !0), vl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (C) {
      var N = p;
      return function () {
        var T = p;
        p = N;
        try {
          return C.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(ls);
rs.exports = ls;
var Nc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = Ln,
  ye = Nc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  On = {};
function zt(e, t) {
  Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  Ao = {};
function Lc(e) {
  return Kl.call(Ao, e)
    ? !0
    : Kl.call(Uo, e)
    ? !1
    : zc.test(e)
    ? (Ao[e] = !0)
    : ((Uo[e] = !0), !1);
}
function Oc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vi = /[\-:]([a-z])/g;
function Wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vi, Wi);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vi, Wi);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vi, Wi);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rc(t, n, l, r) && (n = null),
    r || l === null
      ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  jt = Symbol.for("react.fragment"),
  Ki = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Yi = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Gl = Symbol.for("react.suspense_list"),
  Xi = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  $o = Symbol.iterator;
function an(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($o && e[$o]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  kl;
function yn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function El(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yn(e) : "";
}
function jc(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn("Lazy");
    case 13:
      return yn("Suspense");
    case 19:
      return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jt:
      return "Fragment";
    case Rt:
      return "Portal";
    case Yl:
      return "Profiler";
    case Ki:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case us:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xi:
        return (
          (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo"
        );
      case Ze:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Mc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === Ki ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ct(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ic(e) {
  var t = as(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Ic(e));
}
function cs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function fs(e, t) {
  (t = t.checked), t != null && Qi(e, "checked", t, !1);
}
function ql(e, t) {
  fs(e, t);
  var n = ct(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ho(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gn = Array.isArray;
function Wt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (gn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ct(n) };
}
function ds(e, t) {
  var n = ct(t.value),
    r = ct(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  hs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sn).forEach(function (e) {
  Dc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sn[t] = Sn[e]);
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sn.hasOwnProperty(e) && Sn[e])
    ? ("" + t).trim()
    : t + "px";
}
function vs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ms(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Fc = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ni(e, t) {
  if (t) {
    if (Fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ri(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var li = null;
function Gi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  Qt = null,
  Kt = null;
function Qo(e) {
  if ((e = Jn(e))) {
    if (typeof ii != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = il(t)), ii(e.stateNode, e.type, t));
  }
}
function ys(e) {
  Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e);
}
function gs() {
  if (Qt) {
    var e = Qt,
      t = Kt;
    if (((Kt = Qt = null), Qo(e), t)) for (e = 0; e < t.length; e++) Qo(t[e]);
  }
}
function ws(e, t) {
  return e(t);
}
function ks() {}
var Cl = !1;
function Ss(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return ws(e, t, n);
  } finally {
    (Cl = !1), (Qt !== null || Kt !== null) && (ks(), gs());
  }
}
function jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var oi = !1;
if (We)
  try {
    var cn = {};
    Object.defineProperty(cn, "passive", {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener("test", cn, cn),
      window.removeEventListener("test", cn, cn);
  } catch {
    oi = !1;
  }
function Uc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var En = !1,
  Or = null,
  Rr = !1,
  ui = null,
  Ac = {
    onError: function (e) {
      (En = !0), (Or = e);
    },
  };
function $c(e, t, n, r, l, i, o, u, s) {
  (En = !1), (Or = null), Uc.apply(Ac, arguments);
}
function Bc(e, t, n, r, l, i, o, u, s) {
  if (($c.apply(this, arguments), En)) {
    if (En) {
      var c = Or;
      (En = !1), (Or = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (ui = c));
  }
}
function Lt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Es(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ko(e) {
  if (Lt(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ko(l), e;
        if (i === r) return Ko(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Cs(e) {
  return (e = Hc(e)), e !== null ? xs(e) : null;
}
function xs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _s = ye.unstable_scheduleCallback,
  Yo = ye.unstable_cancelCallback,
  Vc = ye.unstable_shouldYield,
  Wc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  Qc = ye.unstable_getCurrentPriorityLevel,
  Zi = ye.unstable_ImmediatePriority,
  Ps = ye.unstable_UserBlockingPriority,
  jr = ye.unstable_NormalPriority,
  Kc = ye.unstable_LowPriority,
  Ns = ye.unstable_IdlePriority,
  tl = null,
  Fe = null;
function Yc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Zc,
  Xc = Math.log,
  Gc = Math.LN2;
function Zc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Gc) | 0)) | 0;
}
var ir = 64,
  or = 4194304;
function wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = wn(u)) : ((i &= o), i !== 0 && (r = wn(i)));
  } else (o = n & ~l), o !== 0 ? (r = wn(o)) : i !== 0 && (r = wn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Jc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Jc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ts() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function bc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ls,
  qi,
  Os,
  Rs,
  js,
  ai = !1,
  ur = [],
  nt = null,
  rt = null,
  lt = null,
  Mn = new Map(),
  In = new Map(),
  qe = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nt = null;
      break;
    case "dragenter":
    case "dragleave":
      rt = null;
      break;
    case "mouseover":
    case "mouseout":
      lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function fn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && qi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (nt = fn(nt, e, t, n, r, l)), !0;
    case "dragenter":
      return (rt = fn(rt, e, t, n, r, l)), !0;
    case "mouseover":
      return (lt = fn(lt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Mn.set(i, fn(Mn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), In.set(i, fn(In.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Es(n)), t !== null)) {
          (e.blockedOn = t),
            js(e.priority, function () {
              Os(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (li = r), n.target.dispatchEvent(r), (li = null);
    } else return (t = Jn(n)), t !== null && qi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Go(e, t, n) {
  kr(e) && n.delete(t);
}
function nf() {
  (ai = !1),
    nt !== null && kr(nt) && (nt = null),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    Mn.forEach(Go),
    In.forEach(Go);
}
function dn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, nf)));
}
function Dn(e) {
  function t(l) {
    return dn(l, e);
  }
  if (0 < ur.length) {
    dn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nt !== null && dn(nt, e),
      rt !== null && dn(rt, e),
      lt !== null && dn(lt, e),
      Mn.forEach(t),
      In.forEach(t),
      n = 0;
    n < qe.length;
    n++
  )
    (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); )
    Ms(n), n.blockedOn === null && qe.shift();
}
var Yt = Xe.ReactCurrentBatchConfig,
  Ir = !0;
function rf(e, t, n, r) {
  var l = R,
    i = Yt.transition;
  Yt.transition = null;
  try {
    (R = 1), bi(e, t, n, r);
  } finally {
    (R = l), (Yt.transition = i);
  }
}
function lf(e, t, n, r) {
  var l = R,
    i = Yt.transition;
  Yt.transition = null;
  try {
    (R = 4), bi(e, t, n, r);
  } finally {
    (R = l), (Yt.transition = i);
  }
}
function bi(e, t, n, r) {
  if (Ir) {
    var l = ci(e, t, n, r);
    if (l === null) Ml(e, t, r, Dr, n), Xo(e, r);
    else if (tf(l, e, t, n, r)) r.stopPropagation();
    else if ((Xo(e, r), t & 4 && -1 < ef.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jn(l);
        if (
          (i !== null && Ls(i),
          (i = ci(e, t, n, r)),
          i === null && Ml(e, t, r, Dr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Dr = null;
function ci(e, t, n, r) {
  if (((Dr = null), (e = Gi(r)), (e = wt(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Es(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dr = e), null;
}
function Is(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qc()) {
        case Zi:
          return 1;
        case Ps:
          return 4;
        case jr:
        case Kc:
          return 16;
        case Ns:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  eo = null,
  Sr = null;
function Ds() {
  if (Sr) return Sr;
  var e,
    t = eo,
    n = t.length,
    r,
    l = "value" in et ? et.value : et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Zo() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? sr
        : Zo),
      (this.isPropagationStopped = Zo),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  );
}
var ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  to = we(ln),
  Zn = B({}, ln, { view: 0, detail: 0 }),
  of = we(Zn),
  _l,
  Pl,
  pn,
  nl = B({}, Zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: no,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pn &&
            (pn && e.type === "mousemove"
              ? ((_l = e.screenX - pn.screenX), (Pl = e.screenY - pn.screenY))
              : (Pl = _l = 0),
            (pn = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  Jo = we(nl),
  uf = B({}, nl, { dataTransfer: 0 }),
  sf = we(uf),
  af = B({}, Zn, { relatedTarget: 0 }),
  Nl = we(af),
  cf = B({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = we(cf),
  df = B({}, ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = we(df),
  hf = B({}, ln, { data: 0 }),
  qo = we(hf),
  mf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yf[e]) ? !!t[e] : !1;
}
function no() {
  return gf;
}
var wf = B({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: no,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kf = we(wf),
  Sf = B({}, nl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bo = we(Sf),
  Ef = B({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: no,
  }),
  Cf = we(Ef),
  xf = B({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = we(xf),
  Pf = B({}, nl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nf = we(Pf),
  Tf = [9, 13, 27, 32],
  ro = We && "CompositionEvent" in window,
  Cn = null;
We && "documentMode" in document && (Cn = document.documentMode);
var zf = We && "TextEvent" in window && !Cn,
  Fs = We && (!ro || (Cn && 8 < Cn && 11 >= Cn)),
  eu = String.fromCharCode(32),
  tu = !1;
function Us(e, t) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function As(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mt = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return As(t);
    case "keypress":
      return t.which !== 32 ? null : ((tu = !0), eu);
    case "textInput":
      return (e = t.data), e === eu && tu ? null : e;
    default:
      return null;
  }
}
function Of(e, t) {
  if (Mt)
    return e === "compositionend" || (!ro && Us(e, t))
      ? ((e = Ds()), (Sr = eo = et = null), (Mt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Fs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  ys(r),
    (t = Fr(t, "onChange")),
    0 < t.length &&
      ((n = new to("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xn = null,
  Fn = null;
function jf(e) {
  Js(e, 0);
}
function rl(e) {
  var t = Ft(e);
  if (cs(t)) return e;
}
function Mf(e, t) {
  if (e === "change") return t;
}
var Bs = !1;
if (We) {
  var Tl;
  if (We) {
    var zl = "oninput" in document;
    if (!zl) {
      var ru = document.createElement("div");
      ru.setAttribute("oninput", "return;"),
        (zl = typeof ru.oninput == "function");
    }
    Tl = zl;
  } else Tl = !1;
  Bs = Tl && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  xn && (xn.detachEvent("onpropertychange", Hs), (Fn = xn = null));
}
function Hs(e) {
  if (e.propertyName === "value" && rl(Fn)) {
    var t = [];
    $s(t, Fn, e, Gi(e)), Ss(jf, t);
  }
}
function If(e, t, n) {
  e === "focusin"
    ? (lu(), (xn = t), (Fn = n), xn.attachEvent("onpropertychange", Hs))
    : e === "focusout" && lu();
}
function Df(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rl(Fn);
}
function Ff(e, t) {
  if (e === "click") return rl(t);
}
function Uf(e, t) {
  if (e === "input" || e === "change") return rl(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var je = typeof Object.is == "function" ? Object.is : Af;
function Un(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, t) {
  var n = iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = iu(n);
  }
}
function Vs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Vs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ws() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function lo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $f(e) {
  var t = Ws(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && lo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ou(n, i));
        var o = ou(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bf = We && "documentMode" in document && 11 >= document.documentMode,
  It = null,
  fi = null,
  _n = null,
  di = !1;
function uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di ||
    It == null ||
    It !== Lr(r) ||
    ((r = It),
    "selectionStart" in r && lo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_n && Un(_n, r)) ||
      ((_n = r),
      (r = Fr(fi, "onSelect")),
      0 < r.length &&
        ((t = new to("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = It))));
}
function ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dt = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
  },
  Ll = {},
  Qs = {};
We &&
  ((Qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dt.animationend.animation,
    delete Dt.animationiteration.animation,
    delete Dt.animationstart.animation),
  "TransitionEvent" in window || delete Dt.transitionend.transition);
function ll(e) {
  if (Ll[e]) return Ll[e];
  if (!Dt[e]) return e;
  var t = Dt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qs) return (Ll[e] = t[n]);
  return e;
}
var Ks = ll("animationend"),
  Ys = ll("animationiteration"),
  Xs = ll("animationstart"),
  Gs = ll("transitionend"),
  Zs = new Map(),
  su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dt(e, t) {
  Zs.set(e, t), zt(t, [e]);
}
for (var Ol = 0; Ol < su.length; Ol++) {
  var Rl = su[Ol],
    Hf = Rl.toLowerCase(),
    Vf = Rl[0].toUpperCase() + Rl.slice(1);
  dt(Hf, "on" + Vf);
}
dt(Ks, "onAnimationEnd");
dt(Ys, "onAnimationIteration");
dt(Xs, "onAnimationStart");
dt("dblclick", "onDoubleClick");
dt("focusin", "onFocus");
dt("focusout", "onBlur");
dt(Gs, "onTransitionEnd");
Zt("onMouseEnter", ["mouseout", "mouseover"]);
Zt("onMouseLeave", ["mouseout", "mouseover"]);
Zt("onPointerEnter", ["pointerout", "pointerover"]);
Zt("onPointerLeave", ["pointerout", "pointerover"]);
zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bc(r, t, void 0, e), (e.currentTarget = null);
}
function Js(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          au(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          au(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ui), (Rr = !1), (ui = null), e);
}
function M(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (qs(t, e, 2, !1), n.add(r));
}
function jl(e, t, n) {
  var r = 0;
  t && (r |= 4), qs(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      is.forEach(function (n) {
        n !== "selectionchange" && (Wf.has(n) || jl(n, !1, e), jl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), jl("selectionchange", !1, t));
  }
}
function qs(e, t, n, r) {
  switch (Is(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = bi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = wt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ss(function () {
    var c = i,
      m = Gi(n),
      h = [];
    e: {
      var p = Zs.get(e);
      if (p !== void 0) {
        var g = to,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = kf;
            break;
          case "focusin":
            (w = "focus"), (g = Nl);
            break;
          case "focusout":
            (w = "blur"), (g = Nl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Nl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Jo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Cf;
            break;
          case Ks:
          case Ys:
          case Xs:
            g = ff;
            break;
          case Gs:
            g = _f;
            break;
          case "scroll":
            g = of;
            break;
          case "wheel":
            g = Nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bo;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = jn(a, f)), v != null && k.push($n(a, v, d)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== li &&
            (w = n.relatedTarget || n.fromElement) &&
            (wt(w) || w[Qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? wt(w) : null),
              w !== null &&
                ((D = Lt(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((k = Jo),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = bo),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (D = g == null ? p : Ft(g)),
            (d = w == null ? p : Ft(w)),
            (p = new k(v, a + "leave", g, n, m)),
            (p.target = D),
            (p.relatedTarget = d),
            (v = null),
            wt(m) === c &&
              ((k = new k(f, a + "enter", w, n, m)),
              (k.target = d),
              (k.relatedTarget = D),
              (v = k)),
            (D = v),
            g && w)
          )
            t: {
              for (k = g, f = w, a = 0, d = k; d; d = Ot(d)) a++;
              for (d = 0, v = f; v; v = Ot(v)) d++;
              for (; 0 < a - d; ) (k = Ot(k)), a--;
              for (; 0 < d - a; ) (f = Ot(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Ot(k)), (f = Ot(f));
              }
              k = null;
            }
          else k = null;
          g !== null && cu(h, p, g, k, !1),
            w !== null && D !== null && cu(h, D, w, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ft(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Mf;
        else if (nu(p))
          if (Bs) E = Uf;
          else {
            E = Df;
            var x = If;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Ff);
        if (E && (E = E(e, c))) {
          $s(h, E, n, m);
          break e;
        }
        x && x(e, p, c),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            bl(p, "number", p.value);
      }
      switch (((x = c ? Ft(c) : window), e)) {
        case "focusin":
          (nu(x) || x.contentEditable === "true") &&
            ((It = x), (fi = c), (_n = null));
          break;
        case "focusout":
          _n = fi = It = null;
          break;
        case "mousedown":
          di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (di = !1), uu(h, n, m);
          break;
        case "selectionchange":
          if (Bf) break;
        case "keydown":
        case "keyup":
          uu(h, n, m);
      }
      var _;
      if (ro)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Mt
          ? Us(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Fs &&
          n.locale !== "ko" &&
          (Mt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Mt && (_ = Ds())
            : ((et = m),
              (eo = "value" in et ? et.value : et.textContent),
              (Mt = !0))),
        (x = Fr(c, P)),
        0 < x.length &&
          ((P = new qo(P, e, null, n, m)),
          h.push({ event: P, listeners: x }),
          _ ? (P.data = _) : ((_ = As(n)), _ !== null && (P.data = _)))),
        (_ = zf ? Lf(e, n) : Of(e, n)) &&
          ((c = Fr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new qo("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = _)));
    }
    Js(h, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = jn(e, n)),
      i != null && r.unshift($n(e, i, l)),
      (i = jn(e, t)),
      i != null && r.push($n(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = jn(n, i)), s != null && o.unshift($n(n, s, u)))
        : l || ((s = jn(n, i)), s != null && o.push($n(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Qf = /\r\n?/g,
  Kf = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qf,
      `
`
    )
    .replace(Kf, "");
}
function fr(e, t, n) {
  if (((t = fu(t)), fu(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var pi = null,
  hi = null;
function mi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Yf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  du = typeof Promise == "function" ? Promise : void 0,
  Xf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof du < "u"
      ? function (e) {
          return du.resolve(null).then(e).catch(Gf);
        }
      : vi;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Dn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Dn(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var on = Math.random().toString(36).slice(2),
  De = "__reactFiber$" + on,
  Bn = "__reactProps$" + on,
  Qe = "__reactContainer$" + on,
  yi = "__reactEvents$" + on,
  Zf = "__reactListeners$" + on,
  Jf = "__reactHandles$" + on;
function wt(e) {
  var t = e[De];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[De])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pu(e); e !== null; ) {
          if ((n = e[De])) return n;
          e = pu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[De] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ft(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Bn] || null;
}
var gi = [],
  Ut = -1;
function pt(e) {
  return { current: e };
}
function I(e) {
  0 > Ut || ((e.current = gi[Ut]), (gi[Ut] = null), Ut--);
}
function j(e, t) {
  Ut++, (gi[Ut] = e.current), (e.current = t);
}
var ft = {},
  le = pt(ft),
  fe = pt(!1),
  xt = ft;
function Jt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  I(fe), I(le);
}
function hu(e, t, n) {
  if (le.current !== ft) throw Error(y(168));
  j(le, t), j(fe, n);
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Mc(e) || "Unknown", l));
  return B({}, n, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (xt = le.current),
    j(le, e),
    j(fe, fe.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = bs(e, t, xt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(fe),
      I(le),
      j(le, e))
    : I(fe),
    j(fe, n);
}
var $e = null,
  ol = !1,
  Dl = !1;
function ea(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function qf(e) {
  (ol = !0), ea(e);
}
function ht() {
  if (!Dl && $e !== null) {
    Dl = !0;
    var e = 0,
      t = R;
    try {
      var n = $e;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (ol = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), _s(Zi, ht), l);
    } finally {
      (R = t), (Dl = !1);
    }
  }
  return null;
}
var At = [],
  $t = 0,
  Br = null,
  Hr = 0,
  ke = [],
  Se = 0,
  _t = null,
  Be = 1,
  He = "";
function yt(e, t) {
  (At[$t++] = Hr), (At[$t++] = Br), (Br = e), (Hr = t);
}
function ta(e, t, n) {
  (ke[Se++] = Be), (ke[Se++] = He), (ke[Se++] = _t), (_t = e);
  var r = Be;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Be = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (Be = (1 << i) | (n << l) | r), (He = e);
}
function io(e) {
  e.return !== null && (yt(e, 1), ta(e, 1, 0));
}
function oo(e) {
  for (; e === Br; )
    (Br = At[--$t]), (At[$t] = null), (Hr = At[--$t]), (At[$t] = null);
  for (; e === _t; )
    (_t = ke[--Se]),
      (ke[Se] = null),
      (He = ke[--Se]),
      (ke[Se] = null),
      (Be = ke[--Se]),
      (ke[Se] = null);
}
var ve = null,
  me = null,
  F = !1,
  Le = null;
function na(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (me = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _t !== null ? { id: Be, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (F) {
    var t = me;
    if (t) {
      var n = t;
      if (!vu(e, t)) {
        if (wi(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ve;
        t && vu(e, t)
          ? na(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (F = !1), (ve = e));
      }
    } else {
      if (wi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (F = !1), (ve = e);
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function dr(e) {
  if (e !== ve) return !1;
  if (!F) return yu(e), (F = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !mi(e.type, e.memoizedProps))),
    t && (t = me))
  ) {
    if (wi(e)) throw (ra(), Error(y(418)));
    for (; t; ) na(e, t), (t = it(t.nextSibling));
  }
  if ((yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              me = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = me; e; ) e = it(e.nextSibling);
}
function qt() {
  (me = ve = null), (F = !1);
}
function uo(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var bf = Xe.ReactCurrentBatchConfig;
function hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function la(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = at(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Vl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === jt
      ? m(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ze &&
            gu(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = hn(f, a, d)), (v.return = f), v)
      : ((v = zr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = hn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Wl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Ct(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Vl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return (
            (d = zr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = hn(f, null, a)),
            (d.return = f),
            d
          );
        case Rt:
          return (a = Wl(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (gn(a) || an(a))
        return (a = Ct(a, f.mode, d, null)), (a.return = f), a;
      pr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case nr:
          return d.key === E ? s(f, a, d, v) : null;
        case Rt:
          return d.key === E ? c(f, a, d, v) : null;
        case Ze:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (gn(d) || an(d)) return E !== null ? null : m(f, a, d, v, null);
      pr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Rt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Ze:
          var x = v._init;
          return g(f, a, d, x(v._payload), E);
      }
      if (gn(v) || an(v)) return (f = f.get(d) || null), m(a, f, v, E, null);
      pr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var E = null, x = null, _ = a, P = (a = 0), V = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((V = _), (_ = null)) : (V = _.sibling);
      var L = p(f, _, d[P], v);
      if (L === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && L.alternate === null && t(f, _),
        (a = i(L, a, P)),
        x === null ? (E = L) : (x.sibling = L),
        (x = L),
        (_ = V);
    }
    if (P === d.length) return n(f, _), F && yt(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = h(f, d[P], v)),
          _ !== null &&
            ((a = i(_, a, P)), x === null ? (E = _) : (x.sibling = _), (x = _));
      return F && yt(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++)
      (V = g(_, f, P, d[P], v)),
        V !== null &&
          (e && V.alternate !== null && _.delete(V.key === null ? P : V.key),
          (a = i(V, a, P)),
          x === null ? (E = V) : (x.sibling = V),
          (x = V));
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe);
        }),
      F && yt(f, P),
      E
    );
  }
  function k(f, a, d, v) {
    var E = an(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var x = (E = null), _ = a, P = (a = 0), V = null, L = d.next();
      _ !== null && !L.done;
      P++, L = d.next()
    ) {
      _.index > P ? ((V = _), (_ = null)) : (V = _.sibling);
      var Pe = p(f, _, L.value, v);
      if (Pe === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _),
        (a = i(Pe, a, P)),
        x === null ? (E = Pe) : (x.sibling = Pe),
        (x = Pe),
        (_ = V);
    }
    if (L.done) return n(f, _), F && yt(f, P), E;
    if (_ === null) {
      for (; !L.done; P++, L = d.next())
        (L = h(f, L.value, v)),
          L !== null &&
            ((a = i(L, a, P)), x === null ? (E = L) : (x.sibling = L), (x = L));
      return F && yt(f, P), E;
    }
    for (_ = r(f, _); !L.done; P++, L = d.next())
      (L = g(_, f, P, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? P : L.key),
          (a = i(L, a, P)),
          x === null ? (E = L) : (x.sibling = L),
          (x = L));
    return (
      e &&
        _.forEach(function (un) {
          return t(f, un);
        }),
      F && yt(f, P),
      E
    );
  }
  function D(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === jt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case nr:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = d.type), E === jt)) {
                  if (x.tag === 7) {
                    n(f, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ze &&
                    gu(E) === x.type)
                ) {
                  n(f, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = hn(f, x, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === jt
              ? ((a = Ct(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = zr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = hn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case Rt:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Wl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return o(f);
        case Ze:
          return (x = d._init), D(f, a, x(d._payload), v);
      }
      if (gn(d)) return w(f, a, d, v);
      if (an(d)) return k(f, a, d, v);
      pr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Vl(d, f.mode, v)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return D;
}
var bt = la(!0),
  ia = la(!1),
  Vr = pt(null),
  Wr = null,
  Bt = null,
  so = null;
function ao() {
  so = Bt = Wr = null;
}
function co(e) {
  var t = Vr.current;
  I(Vr), (e._currentValue = t);
}
function Si(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xt(e, t) {
  (Wr = e),
    (so = Bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function xe(e) {
  var t = e._currentValue;
  if (so !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bt === null)) {
      if (Wr === null) throw Error(y(308));
      (Bt = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else Bt = Bt.next = e;
  return t;
}
var kt = null;
function fo(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), fo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function po(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), fo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
function wu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = c = s = null), (u = i);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = B({}, h, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (s = h)) : (m = m.next = g),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Nt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var qn = {},
  Ue = pt(qn),
  Hn = pt(qn),
  Vn = pt(qn);
function St(e) {
  if (e === qn) throw Error(y(174));
  return e;
}
function ho(e, t) {
  switch ((j(Vn, t), j(Hn, e), j(Ue, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ti(t, e));
  }
  I(Ue), j(Ue, t);
}
function en() {
  I(Ue), I(Hn), I(Vn);
}
function sa(e) {
  St(Vn.current);
  var t = St(Ue.current),
    n = ti(t, e.type);
  t !== n && (j(Hn, e), j(Ue, n));
}
function mo(e) {
  Hn.current === e && (I(Ue), I(Hn));
}
var U = pt(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fl = [];
function vo() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var xr = Xe.ReactCurrentDispatcher,
  Ul = Xe.ReactCurrentBatchConfig,
  Pt = 0,
  $ = null,
  Y = null,
  Z = null,
  Yr = !1,
  Pn = !1,
  Wn = 0,
  ed = 0;
function te() {
  throw Error(y(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!je(e[n], t[n])) return !1;
  return !0;
}
function go(e, t, n, r, l, i) {
  if (
    ((Pt = i),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xr.current = e === null || e.memoizedState === null ? ld : id),
    (e = n(r, l)),
    Pn)
  ) {
    i = 0;
    do {
      if (((Pn = !1), (Wn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (xr.current = od),
        (e = n(r, l));
    } while (Pn);
  }
  if (
    ((xr.current = Xr),
    (t = Y !== null && Y.next !== null),
    (Pt = 0),
    (Z = Y = $ = null),
    (Yr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function wo() {
  var e = Wn !== 0;
  return (Wn = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? $.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var m = c.lane;
      if ((Pt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          ($.lanes |= m),
          (Nt |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      je(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), ($.lanes |= i), (Nt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    je(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function aa() {}
function ca(e, t) {
  var n = $,
    r = _e(),
    l = t(),
    i = !je(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    ko(pa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, da.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Pt & 30 || fa(n, t, l);
  }
  return l;
}
function fa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ha(t) && ma(e);
}
function pa(e, t, n) {
  return n(function () {
    ha(t) && ma(e);
  });
}
function ha(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function ma(e) {
  var t = Ke(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Su(e) {
  var t = Ie();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rd.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function va() {
  return _e().memoizedState;
}
function _r(e, t, n, r) {
  var l = Ie();
  ($.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ul(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && yo(r, o.deps))) {
      l.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
}
function Eu(e, t) {
  return _r(8390656, 8, e, t);
}
function ko(e, t) {
  return ul(2048, 8, e, t);
}
function ya(e, t) {
  return ul(4, 2, e, t);
}
function ga(e, t) {
  return ul(4, 4, e, t);
}
function wa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ka(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ul(4, 4, wa.bind(null, t, e), n)
  );
}
function So() {}
function Sa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ea(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ca(e, t, n) {
  return Pt & 21
    ? (je(n, t) || ((n = Ts()), ($.lanes |= n), (Nt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function td(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Ul.transition = r);
  }
}
function xa() {
  return _e().memoizedState;
}
function nd(e, t, n) {
  var r = st(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _a(e))
  )
    Pa(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = oe();
    Re(n, e, r, l), Na(n, t, r);
  }
}
function rd(e, t, n) {
  var r = st(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_a(e)) Pa(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), je(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), fo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = oe()), Re(n, e, r, l), Na(n, t, r));
  }
}
function _a(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function Pa(e, t) {
  Pn = Yr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Na(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
var Xr = {
    readContext: xe,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: xe,
    useCallback: function (e, t) {
      return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: Eu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, wa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ie();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ie();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ie();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Su,
    useDebugValue: So,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = Su(!1),
        t = e[0];
      return (e = td.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Ie();
      if (F) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Pt & 30 || fa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Eu(pa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, da.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ie(),
        t = J.identifierPrefix;
      if (F) {
        var n = He,
          r = Be;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ed++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: xe,
    useCallback: Sa,
    useContext: xe,
    useEffect: ko,
    useImperativeHandle: ka,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Ea,
    useReducer: Al,
    useRef: va,
    useState: function () {
      return Al(Qn);
    },
    useDebugValue: So,
    useDeferredValue: function (e) {
      var t = _e();
      return Ca(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Qn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: xa,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: xe,
    useCallback: Sa,
    useContext: xe,
    useEffect: ko,
    useImperativeHandle: ka,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Ea,
    useReducer: $l,
    useRef: va,
    useState: function () {
      return $l(Qn);
    },
    useDebugValue: So,
    useDeferredValue: function (e) {
      var t = _e();
      return Y === null ? (t.memoizedState = e) : Ca(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Qn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: xa,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ei(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = Ve(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = Ve(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = st(e),
      l = Ve(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Re(t, e, r, n), Cr(t, e, r));
  },
};
function Cu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(l, i)
      : !0
  );
}
function Ta(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = xe(i))
      : ((l = de(t) ? xt : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Jt(e, l) : ft)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sl.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), po(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = xe(i))
    : ((i = de(t) ? xt : le.current), (l.context = Jt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ei(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && sl.enqueueReplaceState(l, l.state, null),
      Qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zr || ((Zr = !0), (Mi = r)), xi(e, t);
    }),
    n
  );
}
function La(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        xi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        xi(e, t),
          typeof r != "function" &&
            (ut === null ? (ut = new Set([this])) : ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function _u(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ud();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sd.bind(null, e, t, n)), t.then(e, e));
}
function Pu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ve(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sd = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? ia(t, null, n, r) : bt(t, e.child, n, r);
}
function Tu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Xt(t, l),
    (r = go(e, t, n, r, i, l)),
    (n = wo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (F && n && io(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !zo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Oa(e, t, i, r, l))
      : ((e = zr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(o, r) && e.ref === t.ref)
    )
      return Ye(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = at(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Oa(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Un(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ye(e, t, l);
  }
  return _i(e, t, n, r, l);
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        j(Vt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          j(Vt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        j(Vt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      j(Vt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function ja(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _i(e, t, n, r, l) {
  var i = de(n) ? xt : le.current;
  return (
    (i = Jt(t, i)),
    Xt(t, l),
    (n = go(e, t, n, r, i, l)),
    (r = wo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (F && r && io(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (de(n)) {
    var i = !0;
    $r(t);
  } else i = !1;
  if ((Xt(t, l), t.stateNode === null))
    Pr(e, t), Ta(t, n, r), Ci(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = xe(c))
      : ((c = de(n) ? xt : le.current), (c = Jt(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && xu(t, o, r, c)),
      (Je = !1);
    var p = t.memoizedState;
    (o.state = p),
      Qr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || Je
        ? (typeof m == "function" && (Ei(t, n, m, r), (s = t.memoizedState)),
          (u = Je || Cu(t, n, u, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ua(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = xe(s))
        : ((s = de(n) ? xt : le.current), (s = Jt(t, s)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && xu(t, o, r, s)),
      (Je = !1),
      (p = t.memoizedState),
      (o.state = p),
      Qr(t, r, o, l);
    var w = t.memoizedState;
    u !== h || p !== w || fe.current || Je
      ? (typeof g == "function" && (Ei(t, n, g, r), (w = t.memoizedState)),
        (c = Je || Cu(t, n, c, r, p, w, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pi(e, t, n, r, i, l);
}
function Pi(e, t, n, r, l, i) {
  ja(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && mu(t, n, !1), Ye(e, t, i);
  (r = t.stateNode), (sd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = bt(t, e.child, null, i)), (t.child = bt(t, null, u, i)))
      : ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Ma(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hu(e, t.context, !1),
    ho(e, t.containerInfo);
}
function Ou(e, t, n, r, l) {
  return qt(), uo(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    j(U, l & 1),
    e === null)
  )
    return (
      ki(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = fl(o, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = Ni),
              e)
            : Eo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ad(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = at(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = at(u, i)) : ((i = Ct(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ti(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ni),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = at(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eo(e, t) {
  return (
    (t = fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && uo(r),
    bt(t, e.child, null, n),
    (e = Eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ad(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(y(422)))), hr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ct(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && bt(t, e.child, null, o),
        (t.child.memoizedState = Ti(o)),
        (t.memoizedState = Ni),
        i);
  if (!(t.mode & 1)) return hr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Bl(i, r, void 0)), hr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ke(e, l), Re(r, e, l, -1));
    }
    return To(), (r = Bl(Error(y(421)))), hr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ed.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (me = it(l.nextSibling)),
      (ve = t),
      (F = !0),
      (Le = null),
      e !== null &&
        ((ke[Se++] = Be),
        (ke[Se++] = He),
        (ke[Se++] = _t),
        (Be = e.id),
        (He = e.overflow),
        (_t = t)),
      (t = Eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Si(e.return, t, n);
}
function Hl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((j(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Hl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Hl(t, !0, n, null, i);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ma(t), qt();
      break;
    case 5:
      sa(t);
      break;
    case 1:
      de(t.type) && $r(t);
      break;
    case 4:
      ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      j(Vr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (j(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ia(e, t, n)
          : (j(U, U.current & 1),
            (e = Ye(e, t, n)),
            e !== null ? e.sibling : null);
      j(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        j(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ra(e, t, n);
  }
  return Ye(e, t, n);
}
var Fa, zi, Ua, Aa;
Fa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zi = function () {};
Ua = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), St(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Jl(e, l)), (r = Jl(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    ni(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (On.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (On.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Aa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mn(e, t) {
  if (!F)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fd(e, t, n) {
  var r = t.pendingProps;
  switch ((oo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && Ar(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        en(),
        I(fe),
        I(le),
        vo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Fi(Le), (Le = null)))),
        zi(e, t),
        ne(t),
        null
      );
    case 5:
      mo(t);
      var l = St(Vn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ua(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = St(Ue.current)), dr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[De] = t), (r[Bn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) M(kn[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Bo(r, i), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              Vo(r, i), M("invalid", r);
          }
          ni(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : On.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              rr(r), Ho(r, i, !0);
              break;
            case "textarea":
              rr(r), Wo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[De] = t),
            (e[Bn] = r),
            Fa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ri(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) M(kn[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Bo(e, r), (l = Jl(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                Vo(e, r), (l = ei(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            ni(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? vs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && hs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (On.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && M("scroll", e)
                      : s != null && Qi(e, i, s, o));
              }
            switch (n) {
              case "input":
                rr(e), Ho(e, r, !1);
                break;
              case "textarea":
                rr(e), Wo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ct(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Aa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = St(Vn.current)), St(Ue.current), dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[De] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[De] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (I(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (F && me !== null && t.mode & 1 && !(t.flags & 128))
          ra(), qt(), (t.flags |= 98560), (i = !1);
        else if (((i = dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[De] = t;
          } else
            qt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Le !== null && (Fi(Le), (Le = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? X === 0 && (X = 3) : To())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        en(), zi(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return co(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Ar(), ne(t), null;
    case 19:
      if ((I(U), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) mn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    mn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return j(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > nn &&
            ((t.flags |= 128), (r = !0), mn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !F)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > nn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          j(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        No(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function dd(e, t) {
  switch ((oo(t), t.tag)) {
    case 1:
      return (
        de(t.type) && Ar(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        en(),
        I(fe),
        I(le),
        vo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mo(t), null;
    case 13:
      if ((I(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        qt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(U), null;
    case 4:
      return en(), null;
    case 10:
      return co(t.type._context), null;
    case 22:
    case 23:
      return No(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mr = !1,
  re = !1,
  pd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Li(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var ju = !1;
function hd(e, t) {
  if (((pi = Ir), (e = Ws()), lo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++m === r && (s = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hi = { focusedElem: e, selectionRange: n }, Ir = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Te(t.type, k),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = ju), (ju = !1), w;
}
function Nn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Li(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[De], delete t[Bn], delete t[yi], delete t[Zf], delete t[Jf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
function ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ji(e, t, n), e = e.sibling; e !== null; ) ji(e, t, n), (e = e.sibling);
}
var q = null,
  ze = !1;
function Ge(e, t, n) {
  for (n = n.child; n !== null; ) Ha(e, t, n), (n = n.sibling);
}
function Ha(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(tl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Ht(n, t);
    case 6:
      var r = q,
        l = ze;
      (q = null),
        Ge(e, t, n),
        (q = r),
        (ze = l),
        q !== null &&
          (ze
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (ze
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, n)
              : e.nodeType === 1 && Il(e, n),
            Dn(e))
          : Il(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = ze),
        (q = n.stateNode.containerInfo),
        (ze = !0),
        Ge(e, t, n),
        (q = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Li(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Ht(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      Ge(e, t, n);
      break;
    case 21:
      Ge(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ge(e, t, n), (re = r))
        : Ge(e, t, n);
      break;
    default:
      Ge(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pd()),
      t.forEach(function (r) {
        var l = Cd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ne(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (ze = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Ha(i, o, l), (q = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Va(t, e), (t = t.sibling);
}
function Va(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ne(t, e), Me(e), r & 4)) {
        try {
          Nn(3, e, e.return), al(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          Nn(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      Ne(t, e), Me(e), r & 512 && n !== null && Ht(n, n.return);
      break;
    case 5:
      if (
        (Ne(t, e),
        Me(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && fs(l, i),
              ri(u, o);
            var c = ri(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === "style"
                ? vs(l, h)
                : m === "dangerouslySetInnerHTML"
                ? hs(l, h)
                : m === "children"
                ? Rn(l, h)
                : Qi(l, m, h, c);
            }
            switch (u) {
              case "input":
                ql(l, i);
                break;
              case "textarea":
                ds(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Wt(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wt(l, !!i.multiple, i.defaultValue, !0)
                      : Wt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Bn] = i;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Ne(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Ne(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dn(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      Ne(t, e), Me(e);
      break;
    case 13:
      Ne(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_o = Q())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || m), Ne(t, e), (re = c)) : Ne(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (S = e, m = e.child; m !== null; ) {
            for (h = S = m; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nn(4, p, p.return);
                  break;
                case 1:
                  Ht(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Ht(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fu(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : Fu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ms("display", o)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ne(t, e), Me(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      Ne(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ba(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Mu(e);
          ji(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Mu(e);
          Ri(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function md(e, t, n) {
  (S = e), Wa(e);
}
function Wa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || mr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = mr;
        var c = re;
        if (((mr = o), (re = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Uu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Uu(l);
        for (; i !== null; ) (S = i), Wa(i), (i = i.sibling);
        (S = l), (mr = u), (re = c);
      }
      Du(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Du(e);
  }
}
function Du(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ku(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ku(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Dn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Oi(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Uu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            al(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var i = t.return;
          try {
            Oi(t);
          } catch (s) {
            H(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Oi(t);
          } catch (s) {
            H(t, o, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var vd = Math.ceil,
  Gr = Xe.ReactCurrentDispatcher,
  Co = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  O = 0,
  J = null,
  K = null,
  b = 0,
  he = 0,
  Vt = pt(0),
  X = 0,
  Yn = null,
  Nt = 0,
  cl = 0,
  xo = 0,
  Tn = null,
  ae = null,
  _o = 0,
  nn = 1 / 0,
  Ae = null,
  Zr = !1,
  Mi = null,
  ut = null,
  vr = !1,
  tt = null,
  Jr = 0,
  zn = 0,
  Ii = null,
  Nr = -1,
  Tr = 0;
function oe() {
  return O & 6 ? Q() : Nr !== -1 ? Nr : (Nr = Q());
}
function st(e) {
  return e.mode & 1
    ? O & 2 && b !== 0
      ? b & -b
      : bf.transition !== null
      ? (Tr === 0 && (Tr = Ts()), Tr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < zn) throw ((zn = 0), (Ii = null), Error(y(185)));
  Gn(e, n, r),
    (!(O & 2) || e !== J) &&
      (e === J && (!(O & 2) && (cl |= n), X === 4 && be(e, b)),
      pe(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((nn = Q() + 500), ol && ht()));
}
function pe(e, t) {
  var n = e.callbackNode;
  qc(e, t);
  var r = Mr(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Yo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yo(n), t === 1))
      e.tag === 0 ? qf(Au.bind(null, e)) : ea(Au.bind(null, e)),
        Xf(function () {
          !(O & 6) && ht();
        }),
        (n = null);
    else {
      switch (zs(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = Ps;
          break;
        case 16:
          n = jr;
          break;
        case 536870912:
          n = Ns;
          break;
        default:
          n = jr;
      }
      n = qa(n, Qa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qa(e, t) {
  if (((Nr = -1), (Tr = 0), O & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Gt() && e.callbackNode !== n) return null;
  var r = Mr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qr(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var i = Ya();
    (J !== e || b !== t) && ((Ae = null), (nn = Q() + 500), Et(e, t));
    do
      try {
        wd();
        break;
      } catch (u) {
        Ka(e, u);
      }
    while (1);
    ao(),
      (Gr.current = i),
      (O = l),
      K !== null ? (t = 0) : ((J = null), (b = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = si(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1)
    )
      throw ((n = Yn), Et(e, 0), be(e, r), pe(e, Q()), n);
    if (t === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yd(l) &&
          ((t = qr(e, r)),
          t === 2 && ((i = si(e)), i !== 0 && ((r = i), (t = Di(e, i)))),
          t === 1))
      )
        throw ((n = Yn), Et(e, 0), be(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          gt(e, ae, Ae);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((t = _o + 500 - Q()), 10 < t))
          ) {
            if (Mr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(gt.bind(null, e, ae, Ae), t);
            break;
          }
          gt(e, ae, Ae);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vi(gt.bind(null, e, ae, Ae), r);
            break;
          }
          gt(e, ae, Ae);
          break;
        case 5:
          gt(e, ae, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Qa.bind(null, e) : null;
}
function Di(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = qr(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Fi(t)),
    e
  );
}
function Fi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function yd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!je(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function be(e, t) {
  for (
    t &= ~xo,
      t &= ~cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Au(e) {
  if (O & 6) throw Error(y(327));
  Gt();
  var t = Mr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = qr(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && ((t = r), (n = Di(e, r)));
  }
  if (n === 1) throw ((n = Yn), Et(e, 0), be(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gt(e, ae, Ae),
    pe(e, Q()),
    null
  );
}
function Po(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((nn = Q() + 500), ol && ht());
  }
}
function Tt(e) {
  tt !== null && tt.tag === 0 && !(O & 6) && Gt();
  var t = O;
  O |= 1;
  var n = Ce.transition,
    r = R;
  try {
    if (((Ce.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ce.transition = n), (O = t), !(O & 6) && ht();
  }
}
function No() {
  (he = Vt.current), I(Vt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Yf(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((oo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          en(), I(fe), I(le), vo();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          en();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          co(r.type._context);
          break;
        case 22:
        case 23:
          No();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = at(e.current, null)),
    (b = he = t),
    (X = 0),
    (Yn = null),
    (xo = cl = Nt = 0),
    (ae = Tn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Ka(e, t) {
  do {
    var n = K;
    try {
      if ((ao(), (xr.current = Xr), Yr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((Pt = 0),
        (Z = Y = $ = null),
        (Pn = !1),
        (Wn = 0),
        (Co.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Yn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Pu(o);
          if (g !== null) {
            (g.flags &= -257),
              Nu(g, o, u, i, t),
              g.mode & 1 && _u(i, c, t),
              (t = g),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _u(i, c, t), To();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && u.mode & 1) {
          var D = Pu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Nu(D, o, u, i, t),
              uo(tn(s, u));
            break e;
          }
        }
        (i = s = tn(s, u)),
          X !== 4 && (X = 2),
          Tn === null ? (Tn = [i]) : Tn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = za(i, s, t);
              wu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ut === null || !ut.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = La(i, u, t);
                wu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ga(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ya() {
  var e = Gr.current;
  return (Gr.current = Xr), e === null ? Xr : e;
}
function To() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Nt & 268435455) && !(cl & 268435455)) || be(J, b);
}
function qr(e, t) {
  var n = O;
  O |= 2;
  var r = Ya();
  (J !== e || b !== t) && ((Ae = null), Et(e, t));
  do
    try {
      gd();
      break;
    } catch (l) {
      Ka(e, l);
    }
  while (1);
  if ((ao(), (O = n), (Gr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), X;
}
function gd() {
  for (; K !== null; ) Xa(K);
}
function wd() {
  for (; K !== null && !Vc(); ) Xa(K);
}
function Xa(e) {
  var t = Ja(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ga(e) : (K = t),
    (Co.current = null);
}
function Ga(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = fd(n, t, he)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function gt(e, t, n) {
  var r = R,
    l = Ce.transition;
  try {
    (Ce.transition = null), (R = 1), kd(e, t, n, r);
  } finally {
    (Ce.transition = l), (R = r);
  }
  return null;
}
function kd(e, t, n, r) {
  do Gt();
  while (tt !== null);
  if (O & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (bc(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      qa(jr, function () {
        return Gt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = R;
    R = 1;
    var u = O;
    (O |= 4),
      (Co.current = null),
      hd(e, n),
      Va(n, e),
      $f(hi),
      (Ir = !!pi),
      (hi = pi = null),
      (e.current = n),
      md(n),
      Wc(),
      (O = u),
      (R = o),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (vr && ((vr = !1), (tt = e), (Jr = l)),
    (i = e.pendingLanes),
    i === 0 && (ut = null),
    Yc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zr) throw ((Zr = !1), (e = Mi), (Mi = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Gt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ii ? zn++ : ((zn = 0), (Ii = e))) : (zn = 0),
    ht(),
    null
  );
}
function Gt() {
  if (tt !== null) {
    var e = zs(Jr),
      t = Ce.transition,
      n = R;
    try {
      if (((Ce.transition = null), (R = 16 > e ? 16 : e), tt === null))
        var r = !1;
      else {
        if (((e = tt), (tt = null), (Jr = 0), O & 6)) throw Error(y(331));
        var l = O;
        for (O |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var m = S;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (S = h);
                  else
                    for (; S !== null; ) {
                      m = S;
                      var p = m.sibling,
                        g = m.return;
                      if (($a(m), m === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, u);
                  }
                } catch (E) {
                  H(u, u.return, E);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (S = v);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((O = l), ht(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(tl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ce.transition = t);
    }
  }
  return !1;
}
function $u(e, t, n) {
  (t = tn(n, t)),
    (t = za(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (Gn(e, 1, t), pe(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) $u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ut === null || !ut.has(r)))
        ) {
          (e = tn(n, e)),
            (e = La(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (Gn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - _o)
        ? Et(e, 0)
        : (xo |= n)),
    pe(e, t);
}
function Za(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ke(e, t)), e !== null && (Gn(e, t, n), pe(e, n));
}
function Ed(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Za(e, n);
}
function Cd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Za(e, n);
}
var Ja;
Ja = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), cd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), F && t.flags & 1048576 && ta(t, Hr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = Jt(t, le.current);
      Xt(t, n), (l = go(null, t, r, e, l, n));
      var i = wo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((i = !0), $r(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            po(t),
            (l.updater = sl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ci(t, r, e, n),
            (t = Pi(null, t, r, !0, i, n)))
          : ((t.tag = 0), F && i && io(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _d(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = _i(null, t, r, e, n);
            break e;
          case 1:
            t = Lu(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = zu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        _i(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Lu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ma(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ua(e, t),
          Qr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = tn(Error(y(423)), t)), (t = Ou(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tn(Error(y(424)), t)), (t = Ou(e, t, r, n, l));
            break e;
          } else
            for (
              me = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                F = !0,
                Le = null,
                n = ia(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qt(), r === l)) {
            t = Ye(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sa(t),
        e === null && ki(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        mi(r, l) ? (o = null) : i !== null && mi(r, i) && (t.flags |= 32),
        ja(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ki(t), null;
    case 13:
      return Ia(e, t, n);
    case 4:
      return (
        ho(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bt(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Tu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          j(Vr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (je(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ve(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Si(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Si(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Xt(t, n),
        (l = xe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        zu(e, t, r, l, n)
      );
    case 15:
      return Oa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Pr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), $r(t)) : (e = !1),
        Xt(t, n),
        Ta(t, r, l),
        Ci(t, r, l, n),
        Pi(null, t, r, !0, e, n)
      );
    case 19:
      return Da(e, t, n);
    case 22:
      return Ra(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function qa(e, t) {
  return _s(e, t);
}
function xd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new xd(e, t, n, r);
}
function zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e == "function") return zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Xi) return 14;
  }
  return 2;
}
function at(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) zo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case jt:
        return Ct(n.children, l, i, t);
      case Ki:
        (o = 8), (l |= 8);
        break;
      case Yl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Yl), (e.lanes = i), e
        );
      case Xl:
        return (e = Ee(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Gl:
        return (e = Ee(19, n, t, l)), (e.elementType = Gl), (e.lanes = i), e;
      case ss:
        return fl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case us:
              o = 9;
              break e;
            case Yi:
              o = 11;
              break e;
            case Xi:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ct(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = ss),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xl(0)),
    (this.expirationTimes = xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Lo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Pd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    po(i),
    e
  );
}
function Nd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ba(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return bs(e, n, t);
  }
  return t;
}
function ec(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Lo(n, r, !0, e, l, i, o, u, s)),
    (e.context = ba(null)),
    (n = e.current),
    (r = oe()),
    (l = st(n)),
    (i = Ve(r, l)),
    (i.callback = t ?? null),
    ot(n, i, l),
    (e.current.lanes = l),
    Gn(e, l, r),
    pe(e, r),
    e
  );
}
function dl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = st(l);
  return (
    (n = ba(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, o)),
    e !== null && (Re(e, l, o, i), Cr(e, l, o)),
    o
  );
}
function br(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oo(e, t) {
  Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function Td() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
pl.prototype.render = Ro.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  dl(e, t, null, null);
};
pl.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      dl(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
    qe.splice(n, 0, e), n === 0 && Ms(e);
  }
};
function jo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hu() {}
function zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = br(o);
        i.call(c);
      };
    }
    var o = ec(t, r, e, 0, null, !1, !1, "", Hu);
    return (
      (e._reactRootContainer = o),
      (e[Qe] = o.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = br(s);
      u.call(c);
    };
  }
  var s = Lo(e, 0, !1, null, null, !1, !1, "", Hu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      dl(t, s, n, r);
    }),
    s
  );
}
function ml(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = br(o);
        u.call(s);
      };
    }
    dl(t, o, e, l);
  } else o = zd(n, t, e, l, r);
  return br(o);
}
Ls = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          (Ji(t, n | 1), pe(t, Q()), !(O & 6) && ((nn = Q() + 500), ht()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        Oo(e, 1);
  }
};
qi = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = oe();
      Re(t, e, 134217728, n);
    }
    Oo(e, 134217728);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var t = st(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = oe();
      Re(n, e, t, r);
    }
    Oo(e, t);
  }
};
Rs = function () {
  return R;
};
js = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            cs(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wt(e, !!n.multiple, t, !1);
  }
};
ws = Po;
ks = Tt;
var Ld = { usingClientEntryPoint: !1, Events: [Jn, Ft, il, ys, gs, Po] },
  vn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Od = {
    bundleType: vn.bundleType,
    version: vn.version,
    rendererPackageName: vn.rendererPackageName,
    rendererConfig: vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || Td,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (tl = yr.inject(Od)), (Fe = yr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jo(t)) throw Error(y(200));
  return Nd(e, t, null, n);
};
ge.createRoot = function (e, t) {
  if (!jo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Lo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qe] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Ro(t)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Cs(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Tt(e);
};
ge.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return ml(null, e, t, !0, n);
};
ge.hydrateRoot = function (e, t, n) {
  if (!jo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ec(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Qe] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new pl(t);
};
ge.render = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return ml(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Po;
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return ml(e, t, n, !1, r);
};
ge.version = "18.3.1-next-f1338f8080-20240426";
function nc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), (ns.exports = ge);
var Rd = ns.exports,
  Vu = Rd;
(Ql.createRoot = Vu.createRoot), (Ql.hydrateRoot = Vu.hydrateRoot);
function jd() {
  const e = (t) => {
    console.log(t.target);
  };
  return A.jsx("section", {
    children: A.jsxs("form", {
      onSubmit: e,
      className: "w-full flex items-center justify-center gap-4",
      children: [
        A.jsx("input", {
          type: "text",
          name: "",
          id: "",
          className: "border rounded-xl p-2 h-8",
          placeholder: "Pose ta question",
        }),
        A.jsx("button", {
          type: "submit",
          className: "bg-neutral-900 rounded-full p-2",
          children: A.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 512 512",
            children: [
              A.jsx("path", {
                fill: "#F9F9F9",
                d: "M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25",
              }),
              A.jsx("path", {
                fill: "#F9F9F9",
                d: "M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Md() {
  return A.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 512 512",
    children: A.jsx("path", {
      d: "M256 64C141.1 64 48 139.2 48 232c0 64.9 45.6 121.2 112.3 149.2-5.2 25.8-21 47-33.5 60.5-2.3 2.5.2 6.5 3.6 6.3 11.5-.8 32.9-4.4 51-12.7 21.5-9.9 40.3-30.1 46.3-36.9 9.3 1 18.8 1.6 28.5 1.6 114.9 0 208-75.2 208-168C464 139.2 370.9 64 256 64z",
      fill: "currentColor",
    }),
  });
}
function Id() {
  return A.jsxs("nav", {
    className: "flex w-full justify-between items-center",
    children: [
      A.jsx("a", {
        href: "",
        className: "text-2xl font-semibold text-slate-700",
        children: A.jsx("h1", { children: "GPT" }),
      }),
      A.jsx("a", { href: "", className: "", children: A.jsx(Md, {}) }),
    ],
  });
}
function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
var Dd = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function (e) {},
    onComplete: function (e) {},
    preStringTyped: function (e, t) {},
    onStringTyped: function (e, t) {},
    onLastStringBackspaced: function (e) {},
    onTypingPaused: function (e, t) {},
    onTypingResumed: function (e, t) {},
    onReset: function (e) {},
    onStop: function (e, t) {},
    onStart: function (e, t) {},
    onDestroy: function (e) {},
  },
  Fd = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.load = function (n, r, l) {
        if (
          ((n.el = typeof l == "string" ? document.querySelector(l) : l),
          (n.options = Ui({}, Dd, r)),
          (n.isInput = n.el.tagName.toLowerCase() === "input"),
          (n.attr = n.options.attr),
          (n.bindInputFocusEvents = n.options.bindInputFocusEvents),
          (n.showCursor = !n.isInput && n.options.showCursor),
          (n.cursorChar = n.options.cursorChar),
          (n.cursorBlinking = !0),
          (n.elContent = n.attr ? n.el.getAttribute(n.attr) : n.el.textContent),
          (n.contentType = n.options.contentType),
          (n.typeSpeed = n.options.typeSpeed),
          (n.startDelay = n.options.startDelay),
          (n.backSpeed = n.options.backSpeed),
          (n.smartBackspace = n.options.smartBackspace),
          (n.backDelay = n.options.backDelay),
          (n.fadeOut = n.options.fadeOut),
          (n.fadeOutClass = n.options.fadeOutClass),
          (n.fadeOutDelay = n.options.fadeOutDelay),
          (n.isPaused = !1),
          (n.strings = n.options.strings.map(function (c) {
            return c.trim();
          })),
          (n.stringsElement =
            typeof n.options.stringsElement == "string"
              ? document.querySelector(n.options.stringsElement)
              : n.options.stringsElement),
          n.stringsElement)
        ) {
          (n.strings = []),
            (n.stringsElement.style.cssText =
              "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
          var i = Array.prototype.slice.apply(n.stringsElement.children),
            o = i.length;
          if (o)
            for (var u = 0; u < o; u += 1)
              n.strings.push(i[u].innerHTML.trim());
        }
        for (var s in ((n.strPos = 0),
        (n.currentElContent = this.getCurrentElContent(n)),
        n.currentElContent &&
          n.currentElContent.length > 0 &&
          ((n.strPos = n.currentElContent.length - 1),
          n.strings.unshift(n.currentElContent)),
        (n.sequence = []),
        n.strings))
          n.sequence[s] = s;
        (n.arrayPos = 0),
          (n.stopNum = 0),
          (n.loop = n.options.loop),
          (n.loopCount = n.options.loopCount),
          (n.curLoop = 0),
          (n.shuffle = n.options.shuffle),
          (n.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0,
          }),
          (n.typingComplete = !1),
          (n.autoInsertCss = n.options.autoInsertCss),
          n.autoInsertCss &&
            (this.appendCursorAnimationCss(n),
            this.appendFadeOutAnimationCss(n));
      }),
      (t.getCurrentElContent = function (n) {
        return n.attr
          ? n.el.getAttribute(n.attr)
          : n.isInput
          ? n.el.value
          : n.contentType === "html"
          ? n.el.innerHTML
          : n.el.textContent;
      }),
      (t.appendCursorAnimationCss = function (n) {
        var r = "data-typed-js-cursor-css";
        if (n.showCursor && !document.querySelector("[" + r + "]")) {
          var l = document.createElement("style");
          l.setAttribute(r, "true"),
            (l.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),
            document.body.appendChild(l);
        }
      }),
      (t.appendFadeOutAnimationCss = function (n) {
        var r = "data-typed-fadeout-js-css";
        if (n.fadeOut && !document.querySelector("[" + r + "]")) {
          var l = document.createElement("style");
          l.setAttribute(r, "true"),
            (l.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
            document.body.appendChild(l);
        }
      }),
      e
    );
  })())(),
  Wu = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.typeHtmlChars = function (n, r, l) {
        if (l.contentType !== "html") return r;
        var i = n.substring(r).charAt(0);
        if (i === "<" || i === "&") {
          var o;
          for (
            o = i === "<" ? ">" : ";";
            n.substring(r + 1).charAt(0) !== o && !(1 + ++r > n.length);

          );
          r++;
        }
        return r;
      }),
      (t.backSpaceHtmlChars = function (n, r, l) {
        if (l.contentType !== "html") return r;
        var i = n.substring(r).charAt(0);
        if (i === ">" || i === ";") {
          var o;
          for (
            o = i === ">" ? "<" : "&";
            n.substring(r - 1).charAt(0) !== o && !(--r < 0);

          );
          r--;
        }
        return r;
      }),
      e
    );
  })())(),
  Ud = (function () {
    function e(n, r) {
      Fd.load(this, r, n), this.begin();
    }
    var t = e.prototype;
    return (
      (t.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (t.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (t.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (t.destroy = function () {
        this.reset(!1), this.options.onDestroy(this);
      }),
      (t.reset = function (n) {
        n === void 0 && (n = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          n && (this.insertCursor(), this.options.onReset(this), this.begin());
      }),
      (t.begin = function () {
        var n = this;
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            n.strPos === 0
              ? n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos)
              : n.backspace(n.strings[n.sequence[n.arrayPos]], n.strPos);
          }, this.startDelay));
      }),
      (t.typewrite = function (n, r) {
        var l = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed),
          o = 1;
        this.pause.status !== !0
          ? (this.timeout = setTimeout(function () {
              r = Wu.typeHtmlChars(n, r, l);
              var u = 0,
                s = n.substring(r);
              if (s.charAt(0) === "^" && /^\^\d+/.test(s)) {
                var c = 1;
                (c += (s = /\d+/.exec(s)[0]).length),
                  (u = parseInt(s)),
                  (l.temporaryPause = !0),
                  l.options.onTypingPaused(l.arrayPos, l),
                  (n = n.substring(0, r) + n.substring(r + c)),
                  l.toggleBlinking(!0);
              }
              if (s.charAt(0) === "`") {
                for (
                  ;
                  n.substring(r + o).charAt(0) !== "`" &&
                  (o++, !(r + o > n.length));

                );
                var m = n.substring(0, r),
                  h = n.substring(m.length + 1, r + o),
                  p = n.substring(r + o + 1);
                (n = m + h + p), o--;
              }
              l.timeout = setTimeout(function () {
                l.toggleBlinking(!1),
                  r >= n.length ? l.doneTyping(n, r) : l.keepTyping(n, r, o),
                  l.temporaryPause &&
                    ((l.temporaryPause = !1),
                    l.options.onTypingResumed(l.arrayPos, l));
              }, u);
            }, i))
          : this.setPauseStatus(n, r, !0);
      }),
      (t.keepTyping = function (n, r, l) {
        r === 0 &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var i = n.substring(0, (r += l));
        this.replaceText(i), this.typewrite(n, r);
      }),
      (t.doneTyping = function (n, r) {
        var l = this;
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            this.loop === !1 || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              l.backspace(n, r);
            }, this.backDelay));
      }),
      (t.backspace = function (n, r) {
        var l = this;
        if (this.pause.status !== !0) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var i = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            r = Wu.backSpaceHtmlChars(n, r, l);
            var o = n.substring(0, r);
            if ((l.replaceText(o), l.smartBackspace)) {
              var u = l.strings[l.arrayPos + 1];
              l.stopNum = u && o === u.substring(0, r) ? r : 0;
            }
            r > l.stopNum
              ? (r--, l.backspace(n, r))
              : r <= l.stopNum &&
                (l.arrayPos++,
                l.arrayPos === l.strings.length
                  ? ((l.arrayPos = 0),
                    l.options.onLastStringBackspaced(),
                    l.shuffleStringsIfNeeded(),
                    l.begin())
                  : l.typewrite(l.strings[l.sequence[l.arrayPos]], r));
          }, i);
        } else this.setPauseStatus(n, r, !1);
      }),
      (t.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0);
      }),
      (t.setPauseStatus = function (n, r, l) {
        (this.pause.typewrite = l),
          (this.pause.curString = n),
          (this.pause.curStrPos = r);
      }),
      (t.toggleBlinking = function (n) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== n &&
              ((this.cursorBlinking = n),
              n
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (t.humanizer = function (n) {
        return Math.round((Math.random() * n) / 2) + n;
      }),
      (t.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (t.initFadeOut = function () {
        var n = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            n.arrayPos++,
              n.replaceText(""),
              n.strings.length > n.arrayPos
                ? n.typewrite(n.strings[n.sequence[n.arrayPos]], 0)
                : (n.typewrite(n.strings[0], 0), (n.arrayPos = 0));
          }, this.fadeOutDelay)
        );
      }),
      (t.replaceText = function (n) {
        this.attr
          ? this.el.setAttribute(this.attr, n)
          : this.isInput
          ? (this.el.value = n)
          : this.contentType === "html"
          ? (this.el.innerHTML = n)
          : (this.el.textContent = n);
      }),
      (t.bindFocusEvents = function () {
        var n = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (r) {
            n.stop();
          }),
          this.el.addEventListener("blur", function (r) {
            (n.el.value && n.el.value.length !== 0) || n.start();
          }));
      }),
      (t.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling
              )));
      }),
      e
    );
  })();
function Ad() {
  const e = Ln.useRef(null);
  return (
    Ln.useEffect(() => {
      const t = new Ud(e.current, {
        strings: [
          "De quoi allons nous parler aujourd'hui ?",
          "Que souhaites-tu apprendre de nouveau ?",
          "Comment puis-je t'aider ?",
        ],
        typeSpeed: 20,
        contentType: "html",
        loop: !0,
        cursorChar: "...",
        fadeOut: !0,
      });
      return () => {
        t.destroy();
      };
    }, []),
    A.jsxs("main", {
      className:
        "bg-slate-50 p-5 flex flex-col items-center justify-between min-w-full min-h-screen",
      children: [
        A.jsx(Id, {}),
        A.jsxs("section", {
          className: "flex flex-col items-center justify-center",
          children: [
            A.jsx("h1", {
              className: "text-6xl font-semibold mb-10",
              children: "GPT",
            }),
            A.jsx("p", {
              className: "text-xl",
              children: A.jsx("span", { ref: e }),
            }),
          ],
        }),
        A.jsx(jd, {}),
      ],
    })
  );
}
Ql.createRoot(document.getElementById("root")).render(
  A.jsx(kc.StrictMode, { children: A.jsx(Ad, {}) })
);
