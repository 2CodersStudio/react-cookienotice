/**
 * react-cookienotice v6.0.3
 * (c) 2020-2024 by xavierbriole
 * Released under the MIT License.
 */
import Ke, { useState as Ae, useCallback as N, useMemo as kt } from "react";
var we = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function xt() {
  if (Ue)
    return q;
  Ue = 1;
  var n = Ke, s = Symbol.for("react.element"), m = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(E, f, T) {
    var h, d = {}, k = null, O = null;
    T !== void 0 && (k = "" + T), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (h in f)
      b.call(f, h) && !w.hasOwnProperty(h) && (d[h] = f[h]);
    if (E && E.defaultProps)
      for (h in f = E.defaultProps, f)
        d[h] === void 0 && (d[h] = f[h]);
    return { $$typeof: s, type: E, key: k, ref: O, props: d, _owner: _.current };
  }
  return q.Fragment = m, q.jsx = y, q.jsxs = y, q;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Et() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ke, s = Symbol.for("react.element"), m = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), G = Symbol.iterator, ce = "@@iterator";
    function le(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = G && e[G] || e[ce];
      return typeof t == "function" ? t : null;
    }
    var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        ue("error", e, r);
      }
    }
    function ue(e, t, r) {
      {
        var o = P.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", r = r.concat([c]));
        var u = r.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var fe = !1, B = !1, de = !1, ve = !1, pe = !1, H;
    H = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === w || pe || e === _ || e === T || e === h || ve || e === O || fe || B || de || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === d || e.$$typeof === y || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === H || e.getModuleId !== void 0));
    }
    function he(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var c = t.displayName || t.name || "";
      return c !== "" ? r + "(" + c + ")" : r;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case m:
          return "Portal";
        case w:
          return "Profiler";
        case _:
          return "StrictMode";
        case T:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return X(t) + ".Consumer";
          case y:
            var r = e;
            return X(r._context) + ".Provider";
          case f:
            return he(e, e.render, "ForwardRef");
          case d:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case k: {
            var c = e, u = c._payload, i = c._init;
            try {
              return C(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, D = 0, Z, I, Q, M, ee, te, re;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function me() {
      {
        if (D === 0) {
          Z = console.log, I = console.info, Q = console.warn, M = console.error, ee = console.group, te = console.groupCollapsed, re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function ge() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: Z
            }),
            info: A({}, e, {
              value: I
            }),
            warn: A({}, e, {
              value: Q
            }),
            error: A({}, e, {
              value: M
            }),
            group: A({}, e, {
              value: ee
            }),
            groupCollapsed: A({}, e, {
              value: te
            }),
            groupEnd: A({}, e, {
              value: re
            })
          });
        }
        D < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = P.ReactCurrentDispatcher, ye;
    function oe(e, t, r) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            ye = o && o[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var ke = !1, ae;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new Ge();
    }
    function Oe(e, t) {
      if (!e || ke)
        return "";
      {
        var r = ae.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      ke = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, me();
      try {
        if (t) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (R) {
              o = R;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (R) {
              o = R;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            o = R;
          }
          e();
        }
      } catch (R) {
        if (R && o && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), x = o.stack.split(`
`), v = a.length - 1, p = x.length - 1; v >= 1 && p >= 0 && a[v] !== x[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (a[v] !== x[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || a[v] !== x[p]) {
                    var j = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, j), j;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        ke = !1, V.current = u, ge(), Error.prepareStackTrace = c;
      }
      var W = e ? e.displayName || e.name : "", F = W ? oe(W) : "";
      return typeof e == "function" && ae.set(e, F), F;
    }
    function He(e, t, r) {
      return Oe(e, !1);
    }
    function Xe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ie(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Xe(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case T:
          return oe("Suspense");
        case h:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return He(e.render);
          case d:
            return ie(e.type, t, r);
          case k: {
            var o = e, c = o._payload, u = o._init;
            try {
              return ie(u(c), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, Pe = {}, ze = P.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var t = e._owner, r = ie(e.type, e._source, t ? t.type : null);
        ze.setExtraStackFrame(r);
      } else
        ze.setExtraStackFrame(null);
    }
    function Ze(e, t, r, o, c) {
      {
        var u = Function.call.bind(Y);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var x = Error((o || "React class") + ": " + r + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              a = e[i](t, i, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (se(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, i, typeof a), se(null)), a instanceof Error && !(a.message in Pe) && (Pe[a.message] = !0, se(c), g("Failed %s type: %s", r, a.message), se(null));
          }
      }
    }
    var Qe = Array.isArray;
    function xe(e) {
      return Qe(e);
    }
    function et(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function tt(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function De(e) {
      if (tt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(e)), Le(e);
    }
    var U = P.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Ne, Ee;
    Ee = {};
    function nt(e) {
      if (Y.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ot(e) {
      if (Y.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function at(e, t) {
      if (typeof e.ref == "string" && U.current && t && U.current.stateNode !== t) {
        var r = C(U.current.type);
        Ee[r] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(U.current.type), e.ref), Ee[r] = !0);
      }
    }
    function it(e, t) {
      {
        var r = function() {
          Fe || (Fe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function st(e, t) {
      {
        var r = function() {
          Ne || (Ne = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var ct = function(e, t, r, o, c, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function lt(e, t, r, o, c) {
      {
        var u, i = {}, a = null, x = null;
        r !== void 0 && (De(r), a = "" + r), ot(t) && (De(t.key), a = "" + t.key), nt(t) && (x = t.ref, at(t, c));
        for (u in t)
          Y.call(t, u) && !rt.hasOwnProperty(u) && (i[u] = t[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            i[u] === void 0 && (i[u] = v[u]);
        }
        if (a || x) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && it(i, p), x && st(i, p);
        }
        return ct(e, a, x, c, o, U.current, i);
      }
    }
    var Re = P.ReactCurrentOwner, Ie = P.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var t = e._owner, r = ie(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(r);
      } else
        Ie.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function $e() {
      {
        if (Re.current) {
          var e = C(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ut(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + t + ":" + r + ".";
        }
        return "";
      }
    }
    var We = {};
    function ft(e) {
      {
        var t = $e();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Be(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = ft(t);
        if (We[r])
          return;
        We[r] = !0;
        var o = "";
        e && e._owner && e._owner !== Re.current && (o = " It was passed a child from " + C(e._owner.type) + "."), $(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, o), $(null);
      }
    }
    function Me(e, t) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            Ce(o) && Be(o, t);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = le(e);
          if (typeof c == "function" && c !== e.entries)
            for (var u = c.call(e), i; !(i = u.next()).done; )
              Ce(i.value) && Be(i.value, t);
        }
      }
    }
    function dt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === d))
          r = t.propTypes;
        else
          return;
        if (r) {
          var o = C(t);
          Ze(r, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !_e) {
          _e = !0;
          var c = C(t);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vt(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var o = t[r];
          if (o !== "children" && o !== "key") {
            $(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Ve = {};
    function Ye(e, t, r, o, c, u) {
      {
        var i = be(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = ut(c);
          x ? a += x : a += $e();
          var v;
          e === null ? v = "null" : xe(e) ? v = "array" : e !== void 0 && e.$$typeof === s ? (v = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var p = lt(e, t, r, c, u);
        if (p == null)
          return p;
        if (i) {
          var j = t.children;
          if (j !== void 0)
            if (o)
              if (xe(j)) {
                for (var W = 0; W < j.length; W++)
                  Me(j[W], e);
                Object.freeze && Object.freeze(j);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(j, e);
        }
        if (Y.call(t, "key")) {
          var F = C(e), R = Object.keys(t).filter(function(yt) {
            return yt !== "key";
          }), Te = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[F + Te]) {
            var gt = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, F, gt, F), Ve[F + Te] = !0;
          }
        }
        return e === b ? vt(p) : dt(p), p;
      }
    }
    function pt(e, t, r) {
      return Ye(e, t, r, !0);
    }
    function bt(e, t, r) {
      return Ye(e, t, r, !1);
    }
    var ht = bt, mt = pt;
    J.Fragment = b, J.jsx = ht, J.jsxs = mt;
  }()), J;
}
process.env.NODE_ENV === "production" ? we.exports = xt() : we.exports = Et();
var l = we.exports;
const Je = (n, s, m) => {
  const b = /* @__PURE__ */ new Date();
  b.setTime(b.getTime() + m * 24 * 60 * 60 * 1e3), document.cookie = `${n}=${s};expires=${b.toUTCString()}`;
}, Rt = (n) => {
  const s = document.cookie.match(`(^|;) ?${n}=([^;]*)(;|$)`);
  return s ? decodeURIComponent(s[2]) : null;
}, L = (n) => {
  process.env.NODE_ENV === "development" && console.error(`[react-cookienotice] ${n}`);
}, S = (n) => {
  if (typeof n == "string")
    return n;
}, _t = (n) => {
  if (Array.isArray(n)) {
    if (n.length === 0 && L("array should have at least one element"), n.every((s) => typeof s == "string"))
      return n;
    L("array should contain only string");
  }
}, Ct = (n) => {
  if (typeof n == "string") {
    if (n.lastIndexOf("http://", 0) === 0 || n.lastIndexOf("https://", 0) === 0)
      return n;
    L('a link should start with "http://" or "https://"');
  }
}, Tt = (n) => {
  if (typeof n == "boolean")
    return n;
}, jt = (n) => {
  if (typeof n == "number") {
    if (n > 0)
      return n;
    L("cookieExpiration parameter should be more than 0 day");
  }
  return 30;
}, At = (n) => typeof n == "string" ? (/\s/.test(n) && L("cookieName parameter should not contain whitespace"), n === "" && L("cookieName parameter should have at least one character"), n) : "hide-notice", wt = {
  "text.title": "Zustimmung der Kekse",
  "text.description": "Wenn Sie auf Akzeptieren klicken, stimmen Sie der Verwendung von Cookies durch die Website zu, um Ihnen die relevanteste Erfahrung zu bieten, indem Sie sich an Ihre Cookie -Einstellungen erinnern.",
  "text.customizeTitle": "Anpassen",
  "button.accept": "Akzeptieren",
  "button.acceptAll": "Akzeptiere alle",
  "button.declineAll": "Alles ablehnen",
  "button.customize": "Anpassen",
  "button.back": "Zurück"
}, St = {
  "text.title": "Cookie consent",
  "text.description": "By clicking Accept, you consent to our website's use of cookies to provide you with the most relevant experience by remembering your cookie preferences.",
  "text.customizeTitle": "Customize",
  "button.accept": "Accept",
  "button.acceptAll": "Accept all",
  "button.declineAll": "Decline all",
  "button.customize": "Customize",
  "button.back": "Back"
}, Ot = {
  "text.title": "Consentimiento de cookies",
  "text.description": "Al hacer clic en Aceptar, usted acepta el uso de cookies de nuestro sitio web para proporcionarle la experiencia más relevante al recordar sus preferencias de cookies.",
  "text.customizeTitle": "Personalizar",
  "button.accept": "Aceptar",
  "button.acceptAll": "Aceptar todo",
  "button.declineAll": "Declinar todo",
  "button.customize": "Personalizar",
  "button.back": "Atrás"
}, Pt = {
  "text.title": "Consentement aux cookies",
  "text.description": "En cliquant sur Accepter, vous consentez à l'utilisation de cookies par notre site Web pour vous offrir l'expérience la plus pertinente en mémorisant vos préférences en matière de cookies.",
  "text.customizeTitle": "Personnaliser",
  "button.accept": "Accepter",
  "button.acceptAll": "Accepter tout",
  "button.declineAll": "Refuser tout",
  "button.customize": "Personnaliser",
  "button.back": "Retour"
}, zt = {
  "text.title": "Consenso dei cookie",
  "text.description": "Facendo clic su Accetta, acconsenti all'uso da parte del nostro sito Web per offrirti l'esperienza più pertinente ricordando le preferenze dei cookie.",
  "text.customizeTitle": "personalizzare",
  "button.accept": "Accettare",
  "button.acceptAll": "Accettare tutti",
  "button.declineAll": "Rifiutare tutto",
  "button.customize": "personalizzare",
  "button.back": "Indietro"
}, Lt = {
  "text.title": "쿠키 동의",
  "text.description": "수락을 클릭하면 귀하는 웹 사이트의 쿠키 사용에 동의하여 쿠키 선호도를 기억하여 가장 관련성이 높은 경험을 제공합니다.",
  "text.customizeTitle": "사용자 정의하십시오",
  "button.accept": "수용하다",
  "button.acceptAll": "모든것을 받아 들인다",
  "button.declineAll": "모두를 거절합니다",
  "button.customize": "사용자 정의하십시오",
  "button.back": "뒤쪽에"
}, Dt = {
  "text.title": "Consentiment als cookies",
  "text.description": "En clicant Acceptar, consentètz a l'utilizacion de cookies per nòstre site Web per vos ofrir l'experiéncia mai pertinenta en memorizant vòstras preferéncias a prepaus dels cookies.",
  "text.customizeTitle": "Personalizat",
  "button.accept": "Acceptar",
  "button.acceptAll": "Acceptar tot",
  "button.declineAll": "Declinar tot",
  "button.customize": "Personalizat",
  "button.back": "Precedent"
}, Ft = {
  "text.title": "饼干同意",
  "text.description": "通过单击“接受”, 您同意我们网站使用cookie通过记住cookie首选项为您提供最相关的体验。",
  "text.customizeTitle": "定制",
  "button.accept": "接受",
  "button.acceptAll": "全都接受",
  "button.declineAll": "拒绝全部",
  "button.customize": "定制",
  "button.back": "后退"
}, je = {
  de: wt,
  en: St,
  es: Ot,
  fr: Pt,
  it: zt,
  ko: Lt,
  oc: Dt,
  zh: Ft
}, Nt = "en", z = (n, s) => {
  if (s !== void 0)
    return s;
  const m = navigator.language.split("-")[0], _ = Object.keys(je).includes(m) ? m : Nt;
  return je[_][n] === void 0 ? (L(`no message found for id "${n}"`), n) : je[_][n];
}, K = ({ onClick: n, children: s }) => /* @__PURE__ */ l.jsx("button", { className: "react-cookienotice-button", onClick: n, children: s }), Se = ({ className: n, children: s }) => /* @__PURE__ */ l.jsx("div", { className: n, children: /* @__PURE__ */ l.jsx("span", { children: s }) }), It = ({
  customizeTitleLabel: n,
  services: s,
  onAcceptButtonClick: m,
  acceptButtonLabel: b,
  onBackButtonClick: _,
  backButtonLabel: w
}) => {
  const [y, E] = Ae([]), f = N(
    (d) => {
      const { name: k } = d.target;
      if (y.includes(k)) {
        E(
          y.filter((O) => O !== k)
        );
        return;
      }
      E([...y, k]);
    },
    [y]
  ), T = N(() => {
    m(y);
  }, [y, m]), h = () => s.length === 0 ? (L("You must provide at least one service."), null) : s.map((d, k) => /* @__PURE__ */ l.jsxs("li", { children: [
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "checkbox",
        id: d,
        name: d,
        checked: y.includes(d),
        onChange: f
      }
    ),
    /* @__PURE__ */ l.jsx("label", { htmlFor: d, children: d }),
    /* @__PURE__ */ l.jsx("span", { children: d })
  ] }, k));
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "react-cookienotice-body", children: [
      /* @__PURE__ */ l.jsx(Se, { className: "react-cookienotice-title", children: z("text.customizeTitle", n) }),
      /* @__PURE__ */ l.jsx("ul", { className: "react-cookienotice-services", children: h() })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "react-cookienotice-buttons", children: [
      /* @__PURE__ */ l.jsx(K, { onClick: T, children: z("button.accept", b) }),
      /* @__PURE__ */ l.jsx(K, { onClick: _, children: z("button.back", w) })
    ] })
  ] });
}, $t = ({ to: n, newTab: s, label: m }) => n === void 0 || s === void 0 || m === void 0 ? null : /* @__PURE__ */ l.jsx(
  "a",
  {
    href: n,
    target: s ? "_blank" : "_self",
    rel: s ? "noreferrer" : void 0,
    className: "react-cookienotice-link",
    children: m
  }
), Wt = ({
  titleLabel: n,
  descriptionLabel: s,
  readMoreLink: m,
  readMoreInNewTab: b,
  readMoreLabel: _,
  onAcceptAllButtonClick: w,
  acceptAllButtonLabel: y,
  onCustomizeButtonClick: E,
  customizeButtonLabel: f,
  onDeclineAllButtonClick: T,
  declineAllButtonLabel: h,
  services: d
}) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  /* @__PURE__ */ l.jsxs("div", { className: "react-cookienotice-body", children: [
    /* @__PURE__ */ l.jsx(Se, { className: "react-cookienotice-title", children: z("text.title", n) }),
    /* @__PURE__ */ l.jsx(Se, { className: "react-cookienotice-description", children: z("text.description", s) }),
    /* @__PURE__ */ l.jsx($t, { to: m, newTab: b, label: _ })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "react-cookienotice-buttons", children: [
    /* @__PURE__ */ l.jsx(K, { onClick: w, children: z("button.acceptAll", y) }),
    d && d.length > 0 && /* @__PURE__ */ l.jsx(K, { onClick: E, children: z("button.customize", f) }),
    /* @__PURE__ */ l.jsx(K, { onClick: T, children: z("button.declineAll", h) })
  ] })
] }), Mt = ({
  acceptAllButtonLabel: n,
  onAcceptAllButtonClick: s,
  declineAllButtonLabel: m,
  onDeclineAllButtonClick: b,
  customizeButtonLabel: _,
  customizeTitleLabel: w,
  services: y,
  acceptButtonLabel: E,
  onAcceptButtonClick: f,
  backButtonLabel: T,
  titleLabel: h,
  descriptionLabel: d,
  readMoreLabel: k,
  readMoreLink: O,
  readMoreInNewTab: G,
  cookieExpiration: ce,
  cookieName: le
}) => {
  const P = S(n), g = S(m), ue = S(_), fe = S(w), B = _t(y), de = S(E), ve = S(T), pe = S(h), H = S(d), be = S(k), he = Ct(O), X = Tt(G), C = jt(ce), A = At(le), D = kt(
    () => Rt(A) === "true",
    []
  ), [Z, I] = Ae(D), [Q, M] = Ae(!1), ee = N((V) => {
    I(!0), Je(A, "true", C), f == null || f(V);
  }, []), te = N(() => {
    M(!1);
  }, []), re = N(() => {
    I(!0), Je(A, "true", C), s == null || s();
  }, []), ne = N(() => {
    M(!0);
  }, []), me = N(() => {
    I(!0), b == null || b();
  }, []);
  if (Z)
    return null;
  const ge = () => Q && B ? /* @__PURE__ */ l.jsx(
    It,
    {
      customizeTitleLabel: fe,
      services: B,
      onAcceptButtonClick: ee,
      acceptButtonLabel: de,
      onBackButtonClick: te,
      backButtonLabel: ve
    }
  ) : /* @__PURE__ */ l.jsx(
    Wt,
    {
      titleLabel: pe,
      descriptionLabel: H,
      readMoreLink: he,
      readMoreInNewTab: X,
      readMoreLabel: be,
      onAcceptAllButtonClick: re,
      acceptAllButtonLabel: P,
      onCustomizeButtonClick: ne,
      customizeButtonLabel: ue,
      onDeclineAllButtonClick: me,
      declineAllButtonLabel: g,
      services: B
    }
  );
  return /* @__PURE__ */ l.jsx("div", { className: "react-cookienotice-root", children: ge() });
};
export {
  Mt as CookieNotice
};
