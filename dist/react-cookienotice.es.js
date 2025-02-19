/**
 * react-cookienotice v7.0.0-beta.4
 * (c) 2020-2025 by xavierbriole
 * Released under the MIT License.
 */
import Re, { useState as pe, useRef as Le, useEffect as Pe, useCallback as T, useMemo as $e } from "react";
var je = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Me() {
  if (Oe) return oe;
  Oe = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function s(v, l, d) {
    var b = null;
    if (d !== void 0 && (b = "" + d), l.key !== void 0 && (b = "" + l.key), "key" in l) {
      d = {};
      for (var f in l)
        f !== "key" && (d[f] = l[f]);
    } else d = l;
    return l = d.ref, {
      $$typeof: t,
      type: v,
      key: b,
      ref: l !== void 0 ? l : null,
      props: d
    };
  }
  return oe.Fragment = i, oe.jsx = s, oe.jsxs = s, oe;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ye() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ke ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case F:
          return "Fragment";
        case he:
          return "Portal";
        case U:
          return "Profiler";
        case re:
          return "StrictMode";
        case X:
          return "Suspense";
        case Z:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case ce:
            return (e.displayName || "Context") + ".Provider";
          case ie:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return o = e.displayName || null, o !== null ? o : t(e.type) || "Memo";
          case D:
            o = e._payload, e = e._init;
            try {
              return t(e(o));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function s(e) {
      try {
        i(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var n = o.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), i(e);
      }
    }
    function v() {
    }
    function l() {
      if (Y === 0) {
        K = console.log, se = console.info, le = console.warn, ue = console.error, fe = console.group, de = console.groupCollapsed, be = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: v,
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
      Y++;
    }
    function d() {
      if (Y--, Y === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: S({}, e, { value: K }),
          info: S({}, e, { value: se }),
          warn: S({}, e, { value: le }),
          error: S({}, e, { value: ue }),
          group: S({}, e, { value: fe }),
          groupCollapsed: S({}, e, { value: de }),
          groupEnd: S({}, e, { value: be })
        });
      }
      0 > Y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function b(e) {
      if (ee === void 0)
        try {
          throw Error();
        } catch (n) {
          var o = n.stack.trim().match(/\n( *(at )?)/);
          ee = o && o[1] || "", L = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ee + e + L;
    }
    function f(e, o) {
      if (!e || Ae) return "";
      var n = Ee.get(e);
      if (n !== void 0) return n;
      Ae = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var a = null;
      a = j.H, j.H = null, l();
      try {
        var h = {
          DetermineComponentFrameRoot: function() {
            try {
              if (o) {
                var P = function() {
                  throw Error();
                };
                if (Object.defineProperty(P.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(P, []);
                  } catch (N) {
                    var ve = N;
                  }
                  Reflect.construct(e, [], P);
                } else {
                  try {
                    P.call();
                  } catch (N) {
                    ve = N;
                  }
                  e.call(P.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (N) {
                  ve = N;
                }
                (P = e()) && typeof P.catch == "function" && P.catch(function() {
                });
              }
            } catch (N) {
              if (N && ve && typeof N.stack == "string")
                return [N.stack, ve.stack];
            }
            return [null, null];
          }
        };
        h.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(
          h.DetermineComponentFrameRoot,
          "name"
        );
        u && u.configurable && Object.defineProperty(
          h.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var r = h.DetermineComponentFrameRoot(), O = r[0], V = r[1];
        if (O && V) {
          var k = O.split(`
`), W = V.split(`
`);
          for (r = u = 0; u < k.length && !k[u].includes(
            "DetermineComponentFrameRoot"
          ); )
            u++;
          for (; r < W.length && !W[r].includes(
            "DetermineComponentFrameRoot"
          ); )
            r++;
          if (u === k.length || r === W.length)
            for (u = k.length - 1, r = W.length - 1; 1 <= u && 0 <= r && k[u] !== W[r]; )
              r--;
          for (; 1 <= u && 0 <= r; u--, r--)
            if (k[u] !== W[r]) {
              if (u !== 1 || r !== 1)
                do
                  if (u--, r--, 0 > r || k[u] !== W[r]) {
                    var te = `
` + k[u].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", e.displayName)), typeof e == "function" && Ee.set(e, te), te;
                  }
                while (1 <= u && 0 <= r);
              break;
            }
        }
      } finally {
        Ae = !1, j.H = a, d(), Error.prepareStackTrace = n;
      }
      return k = (k = e ? e.displayName || e.name : "") ? b(k) : "", typeof e == "function" && Ee.set(e, k), k;
    }
    function m(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var o = e.prototype;
        return f(
          e,
          !(!o || !o.isReactComponent)
        );
      }
      if (typeof e == "string") return b(e);
      switch (e) {
        case X:
          return b("Suspense");
        case Z:
          return b("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            return e = f(e.render, !1), e;
          case Q:
            return m(e.type);
          case D:
            o = e._payload, e = e._init;
            try {
              return m(e(o));
            } catch {
            }
        }
      return "";
    }
    function w() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function A(e) {
      if (C.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, o) {
      function n() {
        we || (we = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function $() {
      var e = t(this.type);
      return ze[e] || (ze[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, o, n, a, h, u) {
      return n = u.ref, e = {
        $$typeof: q,
        type: e,
        key: o,
        props: u,
        _owner: h
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: $
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function B(e, o, n, a, h, u) {
      if (typeof e == "string" || typeof e == "function" || e === F || e === U || e === re || e === X || e === Z || e === xe || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === Q || e.$$typeof === ce || e.$$typeof === ie || e.$$typeof === J || e.$$typeof === ge || e.getModuleId !== void 0)) {
        var r = o.children;
        if (r !== void 0)
          if (a)
            if (R(r)) {
              for (a = 0; a < r.length; a++)
                g(r[a], e);
              Object.freeze && Object.freeze(r);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else g(r, e);
      } else
        r = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (r += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : R(e) ? a = "array" : e !== void 0 && e.$$typeof === q ? (a = "<" + (t(e.type) || "Unknown") + " />", r = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          a,
          r
        );
      if (C.call(o, "key")) {
        r = t(e);
        var O = Object.keys(o).filter(function(k) {
          return k !== "key";
        });
        a = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", Ce[r + a] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          r,
          O,
          r
        ), Ce[r + a] = !0);
      }
      if (r = null, n !== void 0 && (s(n), r = "" + n), A(o) && (s(o.key), r = "" + o.key), "key" in o) {
        n = {};
        for (var V in o)
          V !== "key" && (n[V] = o[V]);
      } else n = o;
      return r && E(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(e, r, u, h, w(), n);
    }
    function g(e, o) {
      if (typeof e == "object" && e && e.$$typeof !== _e) {
        if (R(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            x(a) && z(a, o);
          }
        else if (x(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? n = null : (n = ae && e[ae] || e["@@iterator"], n = typeof n == "function" ? n : null), typeof n == "function" && n !== e.entries && (n = n.call(e), n !== e))
          for (; !(e = n.next()).done; )
            x(e.value) && z(e.value, o);
      }
    }
    function x(e) {
      return typeof e == "object" && e !== null && e.$$typeof === q;
    }
    function z(e, o) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, o = I(o), !Se[o])) {
        Se[o] = !0;
        var n = "";
        e && e._owner != null && e._owner !== w() && (n = null, typeof e._owner.tag == "number" ? n = t(e._owner.type) : typeof e._owner.name == "string" && (n = e._owner.name), n = " It was passed a child from " + n + ".");
        var a = j.getCurrentStack;
        j.getCurrentStack = function() {
          var h = m(e.type);
          return a && (h += a() || ""), h;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          o,
          n
        ), j.getCurrentStack = a;
      }
    }
    function I(e) {
      var o = "", n = w();
      return n && (n = t(n.type)) && (o = `

Check the render method of \`` + n + "`."), o || (e = t(e)) && (o = `

Check the top-level render call using <` + e + ">."), o;
    }
    var G = Re, q = Symbol.for("react.transitional.element"), he = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ae = Symbol.iterator, ke = Symbol.for("react.client.reference"), j = G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, S = Object.assign, ge = Symbol.for("react.client.reference"), R = Array.isArray, Y = 0, K, se, le, ue, fe, de, be;
    v.__reactDisabledLog = !0;
    var ee, L, Ae = !1, Ee = new (typeof WeakMap == "function" ? WeakMap : Map)(), _e = Symbol.for("react.client.reference"), we, ze = {}, Ce = {}, Se = {};
    ne.Fragment = F, ne.jsx = function(e, o, n, a, h) {
      return B(e, o, n, !1, a, h);
    }, ne.jsxs = function(e, o, n, a, h) {
      return B(e, o, n, !0, a, h);
    };
  }()), ne;
}
process.env.NODE_ENV === "production" ? je.exports = Me() : je.exports = Ye();
var c = je.exports;
const me = (t) => {
  const { name: i, value: s, expires: v, secure: l, httpOnly: d, sameSite: b } = t, f = /* @__PURE__ */ new Date();
  f.setTime(f.getTime() + v * 24 * 60 * 60 * 1e3);
  let m = `${i}=${s};expires=${f.toUTCString()};path=/;`;
  l && (m += "Secure;"), d && (m += "HttpOnly;"), m += `SameSite=${b};`, document.cookie = m;
}, We = (t) => {
  const i = document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);
  return i ? decodeURIComponent(i[2]) : null;
}, p = (t) => {
  process.env.NODE_ENV === "development" && console.error(`[react-cookienotice] ${t}`);
}, y = (t) => {
  if (typeof t == "string")
    return t;
}, Be = (t) => {
  if (typeof t == "number") {
    if (t >= 0)
      return t;
    p("timeout should be a positive number");
  }
  return 1e3;
}, Ue = (t) => {
  if (Array.isArray(t)) {
    if (t.length === 0 && p("services should have at least one element"), t.every((i) => typeof i == "object"))
      return t;
    p("services should contain only objects");
  }
}, Ve = (t) => {
  if (typeof t == "string") {
    if (t.lastIndexOf("http://", 0) === 0 || t.lastIndexOf("https://", 0) === 0)
      return t;
    p('a link should start with "http://" or "https://"');
  }
}, He = (t) => {
  if (typeof t == "boolean")
    return t;
}, Ie = (t) => typeof t == "object" ? ((t.vertical !== "top" || t.vertical !== "bottom") && p('placement.vertical parameter should be "top" or "bottom"'), (t.horizontal !== "left" || t.horizontal !== "right") && p('placement.horizontal parameter should be "left" or "right"'), t) : { vertical: "bottom", horizontal: "left" }, Ge = (t) => typeof t == "object" ? (typeof t.name != "string" && p("cookieOptions.name parameter should be a string"), typeof t.value != "string" && p("cookieOptions.value parameter should be a string"), typeof t.expires != "number" && p("cookieOptions.expires parameter should be a number"), typeof t.secure != "boolean" && p("cookieOptions.secure parameter should be a boolean"), typeof t.httpOnly != "boolean" && p("cookieOptions.httpOnly parameter should be a boolean"), /* v8 ignore next 3 */
(t.sameSite !== "strict" || t.sameSite !== "lax" || t.sameSite !== "none") && p(
  'cookieOptions.sameSite parameter should be "strict", "lax" or "none"'
), /\s/.test(t.name) && p("cookieOptions.name parameter should not contain whitespace"), t.name === "" && p("cookieOptions.name parameter should have at least one character"), /\s/.test(t.value) && p("cookieOptions.value parameter should not contain whitespace"), t.value === "" && p("cookieOptions.value parameter should have at least one character"), t.expires <= 0 && p("cookieOptions.expires parameter should be more than 0 day"), t) : {
  name: "hide-notice",
  value: "true",
  expires: 30,
  secure: !1,
  httpOnly: !1,
  sameSite: "lax"
}, qe = {
  "text.title": "Cookie-Zustimmung",
  "text.description": "Indem Sie auf „Akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies auf unserer Website zu, um Ihnen durch die Speicherung Ihrer Cookie-Einstellungen ein möglichst relevantes Erlebnis zu bieten.",
  "text.customizeTitle": "Anpassen",
  "button.accept": "Akzeptieren",
  "button.acceptAll": "Akzeptiere alle",
  "button.declineAll": "Alles ablehnen",
  "button.customize": "Anpassen",
  "button.back": "Zurück",
  "button.customizeAcceptAll": "Akzeptiere alle",
  "text.alwaysActive": "Immer aktiv"
}, Fe = {
  "text.title": "Cookie consent",
  "text.description": "By clicking Accept, you consent to our website's use of cookies to provide you with the most relevant experience by remembering your cookie preferences.",
  "text.customizeTitle": "Customize",
  "button.accept": "Accept",
  "button.acceptAll": "Accept all",
  "button.declineAll": "Decline all",
  "button.customize": "Customize",
  "button.back": "Back",
  "button.customizeAcceptAll": "Accept all",
  "text.alwaysActive": "Always active"
}, Je = {
  "text.title": "Consentimiento de cookies",
  "text.description": "Al hacer clic en Aceptar, usted acepta el uso de cookies por parte de nuestro sitio web para brindarle la experiencia más relevante al recordar sus preferencias de cookies.",
  "text.customizeTitle": "Personalizar",
  "button.accept": "Aceptar",
  "button.acceptAll": "Aceptar todo",
  "button.declineAll": "Rechazar todo",
  "button.customize": "Personalizar",
  "button.back": "Atrás",
  "button.customizeAcceptAll": "Aceptar todo",
  "text.alwaysActive": "Siempre activo"
}, Xe = {
  "text.title": "Consentement aux cookies",
  "text.description": "En cliquant sur Accepter, vous consentez à l'utilisation de cookies par notre site Web pour vous offrir l'expérience la plus pertinente en mémorisant vos préférences en matière de cookies.",
  "text.customizeTitle": "Personnaliser",
  "button.accept": "Accepter",
  "button.acceptAll": "Accepter tout",
  "button.declineAll": "Refuser tout",
  "button.customize": "Personnaliser",
  "button.back": "Retour",
  "button.customizeAcceptAll": "Accepter tout",
  "text.alwaysActive": "Toujours actif"
}, Ze = {
  "text.title": "Consenso ai cookie",
  "text.description": "Facendo clic su Accetta, acconsenti all'utilizzo dei cookie da parte del nostro sito Web per fornirti l'esperienza più pertinente ricordando le tue preferenze sui cookie.",
  "text.customizeTitle": "personalizzare",
  "button.accept": "Accettare",
  "button.acceptAll": "Accettare tutti",
  "button.declineAll": "Rifiuta tutto",
  "button.customize": "personalizzare",
  "button.back": "Indietro",
  "button.customizeAcceptAll": "Accettare tutti",
  "text.alwaysActive": "Sempre attivo"
}, Qe = {
  "text.title": "쿠키 동의",
  "text.description": "동의를 클릭하면 귀하의 쿠키 기본 설정을 기억함으로써 가장 관련성 높은 경험을 제공하기 위해 당사 웹사이트의 쿠키 사용에 동의하는 것입니다.",
  "text.customizeTitle": "사용자 정의",
  "button.accept": "수용하다",
  "button.acceptAll": "모든것을 받아 들인다",
  "button.declineAll": "모두 거절",
  "button.customize": "사용자 정의",
  "button.back": "뒤쪽에",
  "button.customizeAcceptAll": "모든것을 받아 들인다",
  "text.alwaysActive": "항상 활성"
}, De = {
  "text.title": "Consentiment als cookies",
  "text.description": "En clicant Acceptar, consentètz a l'utilizacion de cookies per nòstre site Web per vos ofrir l'experiéncia mai pertinenta en memorizant vòstras preferéncias a prepaus dels cookies.",
  "text.customizeTitle": "Personalizat",
  "button.accept": "Acceptar",
  "button.acceptAll": "Acceptar tot",
  "button.declineAll": "Declinar tot",
  "button.customize": "Personalizat",
  "button.back": "Precedent",
  "button.customizeAcceptAll": "Acceptar tot",
  "text.alwaysActive": "Totjorn actiu"
}, Ke = {
  "text.title": "Cookie 同意",
  "text.description": "单击“接受”即表示您同意我们的网站使用 cookie, 通过记住您的 cookie 偏好来为您提供最相关的体验。",
  "text.customizeTitle": "定制",
  "button.accept": "接受",
  "button.acceptAll": "全都接受",
  "button.declineAll": "全部拒绝",
  "button.customize": "定制",
  "button.back": "后退",
  "button.customizeAcceptAll": "全都接受",
  "text.alwaysActive": "始终活跃"
}, ye = {
  de: qe,
  en: Fe,
  es: Je,
  fr: Xe,
  it: Ze,
  ko: Qe,
  oc: De,
  zh: Ke
}, et = "en", _ = (t, i) => {
  if (i !== void 0)
    return i;
  const s = navigator.language.split("-")[0], l = Object.keys(ye).includes(s) ? s : et;
  return ye[l][t] === void 0 ? (p(`no message found for id "${t}"`), t) : ye[l][t];
}, H = ({ onClick: t, children: i }) => /* @__PURE__ */ c.jsx("button", { className: "react-cookienotice-button", onClick: t, children: i }), Te = ({ className: t, children: i }) => /* @__PURE__ */ c.jsx("div", { className: t, children: /* @__PURE__ */ c.jsx("span", { children: i }) }), tt = ({
  name: t,
  description: i,
  code: s,
  alwaysActive: v,
  isChecked: l,
  onCheckboxChange: d
}) => {
  const [b] = pe(!1), f = Le(null);
  return Pe(() => {
    if (f.current instanceof HTMLDivElement) {
      if (b) {
        f.current.style.maxHeight = `${f.current.scrollHeight}px`;
        return;
      }
      f.current.style.maxHeight = "0";
    }
  }, [b]), /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-service", style: { display: "flex", flexDirection: "row", alignItems: "start", justifyContent: "start" }, children: [
    /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-service-checkbox", children: [
      /* @__PURE__ */ c.jsx(
        "input",
        {
          type: "checkbox",
          id: s,
          name: s,
          checked: v || l,
          onChange: d,
          disabled: v
        }
      ),
      /* @__PURE__ */ c.jsx("label", { htmlFor: s, children: s })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-service-info", children: [
      t,
      /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: f,
          className: "react-cookienotice-service-info-content",
          children: /* @__PURE__ */ c.jsx("p", { className: "react-cookienotice-service-info-content-description", children: i })
        }
      )
    ] })
  ] });
}, ot = ({
  customizeTitleLabel: t,
  services: i,
  onAcceptButtonClick: s,
  acceptButtonLabel: v,
  onBackButtonClick: l,
  backButtonLabel: d,
  alwaysActiveLabel: b,
  customizeAcceptAllButtonLabel: f,
  onCustomizeAcceptAllButtonClick: m,
  customizeAcceptAllTimeout: w
}) => {
  const [A, E] = pe([]), $ = T(
    (g) => {
      const { name: x } = g.target;
      if (A.includes(x)) {
        E(
          A.filter((z) => z !== x)
        );
        return;
      }
      E([...A, x]);
    },
    [A]
  ), M = T(() => {
    const g = i.filter(({ alwaysActive: x }) => x).map(({ code: x }) => x);
    s([...A, ...g]);
  }, [A, s]), B = T(() => {
    E(i.map(({ code: g }) => g)), setTimeout(() => {
      m == null || m(i.map(({ code: g }) => g));
    }, w);
  }, []);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-body", children: [
      /* @__PURE__ */ c.jsx(Te, { className: "react-cookienotice-title", children: _("text.customizeTitle", t) }),
      /* @__PURE__ */ c.jsx("div", { className: "react-cookienotice-services", children: i.map(({ name: g, description: x, code: z, alwaysActive: I }, G) => /* @__PURE__ */ c.jsx(
        tt,
        {
          name: g,
          description: x,
          code: z,
          alwaysActive: I,
          alwaysActiveLabel: b,
          isChecked: A.includes(z),
          onCheckboxChange: $
        },
        G
      )) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-buttons", children: [
      /* @__PURE__ */ c.jsx(H, { onClick: l, children: _("button.back", d) }),
      /* @__PURE__ */ c.jsx(H, { onClick: B, children: _(
        "button.customizeAcceptAll",
        f
      ) }),
      /* @__PURE__ */ c.jsx(H, { onClick: M, children: _("button.accept", v) })
    ] })
  ] });
}, nt = ({ to: t, newTab: i, label: s }) => t === void 0 || i === void 0 || s === void 0 ? null : /* @__PURE__ */ c.jsx(
  "a",
  {
    href: t,
    target: i ? "_blank" : "_self",
    rel: i ? "noreferrer" : void 0,
    className: "react-cookienotice-link",
    children: s
  }
), rt = ({
  titleLabel: t,
  descriptionLabel: i,
  readMoreLink: s,
  readMoreInNewTab: v,
  readMoreLabel: l,
  onAcceptAllButtonClick: d,
  acceptAllButtonLabel: b,
  onCustomizeButtonClick: f,
  customizeButtonLabel: m,
  onDeclineAllButtonClick: w,
  declineAllButtonLabel: A,
  services: E
}) => {
  const $ = T(() => {
    d(E == null ? void 0 : E.map(({ code: M }) => M));
  }, []);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-body", children: [
      /* @__PURE__ */ c.jsx(Te, { className: "react-cookienotice-title", children: _("text.title", t) }),
      /* @__PURE__ */ c.jsx(Te, { className: "react-cookienotice-description", children: _("text.description", i) }),
      /* @__PURE__ */ c.jsx(
        nt,
        {
          to: s,
          newTab: v,
          label: l
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "react-cookienotice-buttons", children: [
      /* @__PURE__ */ c.jsx(H, { onClick: w, children: _("button.declineAll", A) }),
      E && E.length > 0 && /* @__PURE__ */ c.jsx(H, { onClick: f, children: _("button.customize", m) }),
      /* @__PURE__ */ c.jsx(H, { onClick: $, children: _("button.acceptAll", b) })
    ] })
  ] });
}, ct = ({
  acceptAllButtonLabel: t,
  onAcceptAllButtonClick: i,
  declineAllButtonLabel: s,
  onDeclineAllButtonClick: v,
  customizeButtonLabel: l,
  customizeTitleLabel: d,
  services: b,
  acceptButtonLabel: f,
  onAcceptButtonClick: m,
  backButtonLabel: w,
  alwaysActiveLabel: A,
  customizeAcceptAllButtonLabel: E,
  customizeAcceptAllTimeout: $,
  titleLabel: M,
  descriptionLabel: B,
  readMoreLabel: g,
  readMoreLink: x,
  readMoreInNewTab: z,
  placement: I,
  cookieOptions: G
}) => {
  const q = y(t), he = y(s), F = y(l), re = y(d), U = Ue(b), ie = y(f), ce = y(w), J = y(A), X = y(
    E
  ), Z = Be(
    $
  ), Q = y(M), D = y(B), xe = y(g), ae = Ve(x), ke = He(z), j = Ie(I), C = Ge(G), S = $e(
    () => We(C.name) === C.value,
    []
  ), [ge, R] = pe(!1), [Y, K] = pe(!1), se = T((L) => {
    R(!0), me(C), m == null || m(L);
  }, []), le = T(() => {
    K(!1);
  }, []), ue = T((L) => {
    R(!0), me(C), i == null || i(L);
  }, []), fe = T(() => {
    K(!0);
  }, []), de = T(() => {
    R(!0), me(C), v == null || v();
  }, []), be = T(
    (L) => {
      R(!0), me(C), i == null || i(L);
    },
    []
  ), ee = () => Y && U ? /* @__PURE__ */ c.jsx(
    ot,
    {
      customizeTitleLabel: re,
      services: U,
      onAcceptButtonClick: se,
      acceptButtonLabel: ie,
      onBackButtonClick: le,
      backButtonLabel: ce,
      alwaysActiveLabel: J,
      customizeAcceptAllButtonLabel: X,
      onCustomizeAcceptAllButtonClick: be,
      customizeAcceptAllTimeout: Z
    }
  ) : /* @__PURE__ */ c.jsx(
    rt,
    {
      titleLabel: Q,
      descriptionLabel: D,
      readMoreLink: ae,
      readMoreInNewTab: ke,
      readMoreLabel: xe,
      onAcceptAllButtonClick: ue,
      acceptAllButtonLabel: q,
      onCustomizeButtonClick: fe,
      customizeButtonLabel: F,
      onDeclineAllButtonClick: de,
      declineAllButtonLabel: he,
      services: U
    }
  );
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: `react-cookienotice-root${ge ? " hide-with-animation" : ""}${S ? " hidden" : ""} ${j.vertical} ${j.horizontal}`,
      children: ee()
    }
  );
};
export {
  ct as CookieNotice
};
