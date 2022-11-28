/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, o)
    }
    return n
}

function e(e) {
    for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(i), !0).forEach((function(t) {
            o(e, t, i[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        }))
    }
    return e
}

function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function o(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function i() {
    return i = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, i.apply(this, arguments)
}

function r(t, e) {
    if (null == t) return {};
    var n, o, i = function(t, e) {
        if (null == t) return {};
        var n, o, i = {},
            r = Object.keys(t);
        for (o = 0; o < r.length; o++) n = r[o], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        for (o = 0; o < r.length; o++) n = r[o], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
}

function a(t) {
    return function(t) {
        if (Array.isArray(t)) return l(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return l(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function l(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
    return o
}

function s(t) {
    if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t)
}
var c = s(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    u = s(/Edge/i),
    d = s(/firefox/i),
    h = s(/safari/i) && !s(/chrome/i) && !s(/android/i),
    f = s(/iP(ad|od|hone)/i),
    p = s(/chrome/i) && s(/android/i),
    g = {
        capture: !1,
        passive: !1
    };

function v(t, e, n) {
    t.addEventListener(e, n, !c && g)
}

function m(t, e, n) {
    t.removeEventListener(e, n, !c && g)
}

function b(t, e) {
    if (e) {
        if (">" === e[0] && (e = e.substring(1)), t) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
        } catch (n) {
            return !1
        }
        return !1
    }
}

function y(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function w(t, e, n, o) {
    if (t) {
        n = n || document;
        do {
            if (null != e && (">" === e[0] ? t.parentNode === n && b(t, e) : b(t, e)) || o && t === n) return t;
            if (t === n) break
        } while (t = y(t))
    }
    return null
}
var E, D = /\s+/g;

function S(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var o = (" " + t.className + " ").replace(D, " ").replace(" " + e + " ", " ");
            t.className = (o + (n ? " " + e : "")).replace(D, " ")
        }
}

function _(t, e, n) {
    var o = t && t.style;
    if (o) {
        if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
        e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px")
    }
}

function C(t, e) {
    var n = "";
    if ("string" == typeof t) n = t;
    else
        do {
            var o = _(t, "transform");
            o && "none" !== o && (n = o + " " + n)
        } while (!e && (t = t.parentNode));
    var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return i && new i(n)
}

function T(t, e, n) {
    if (t) {
        var o = t.getElementsByTagName(e),
            i = 0,
            r = o.length;
        if (n)
            for (; i < r; i++) n(o[i], i);
        return o
    }
    return []
}

function O() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function x(t, e, n, o, i) {
    if (t.getBoundingClientRect || t === window) {
        var r, a, l, s, u, d, h;
        if (t !== window && t.parentNode && t !== O() ? (a = (r = t.getBoundingClientRect()).top, l = r.left, s = r.bottom, u = r.right, d = r.height, h = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, h = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !c))
            do {
                if (i && i.getBoundingClientRect && ("none" !== _(i, "transform") || n && "static" !== _(i, "position"))) {
                    var f = i.getBoundingClientRect();
                    a -= f.top + parseInt(_(i, "border-top-width")), l -= f.left + parseInt(_(i, "border-left-width")), s = a + r.height, u = l + r.width;
                    break
                }
            } while (i = i.parentNode);
        if (o && t !== window) {
            var p = C(i || t),
                g = p && p.a,
                v = p && p.d;
            p && (s = (a /= v) + (d /= v), u = (l /= g) + (h /= g))
        }
        return {
            top: a,
            left: l,
            bottom: s,
            right: u,
            width: h,
            height: d
        }
    }
}

function M(t, e, n) {
    for (var o = k(t, !0), i = x(t)[e]; o;) {
        var r = x(o)[n];
        if (!("top" === n || "left" === n ? i >= r : i <= r)) return o;
        if (o === O()) break;
        o = k(o, !1)
    }
    return !1
}

function A(t, e, n, o) {
    for (var i = 0, r = 0, a = t.children; r < a.length;) {
        if ("none" !== a[r].style.display && a[r] !== jt.ghost && (o || a[r] !== jt.dragged) && w(a[r], n.draggable, t, !1)) {
            if (i === e) return a[r];
            i++
        }
        r++
    }
    return null
}

function N(t, e) {
    for (var n = t.lastElementChild; n && (n === jt.ghost || "none" === _(n, "display") || e && !b(n, e));) n = n.previousElementSibling;
    return n || null
}

function I(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || t === jt.clone || e && !b(t, e) || n++;
    return n
}

function P(t) {
    var e = 0,
        n = 0,
        o = O();
    if (t)
        do {
            var i = C(t),
                r = i.a,
                a = i.d;
            e += t.scrollLeft * r, n += t.scrollTop * a
        } while (t !== o && (t = t.parentNode));
    return [e, n]
}

function k(t, e) {
    if (!t || !t.getBoundingClientRect) return O();
    var n = t,
        o = !1;
    do {
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var i = _(n);
            if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                if (!n.getBoundingClientRect || n === document.body) return O();
                if (o || e) return n;
                o = !0
            }
        }
    } while (n = n.parentNode);
    return O()
}

function R(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}

function X(t, e) {
    return function() {
        if (!E) {
            var n = arguments,
                o = this;
            1 === n.length ? t.call(o, n[0]) : t.apply(o, n), E = setTimeout((function() {
                E = void 0
            }), e)
        }
    }
}

function Y(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function B(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}

function F(t, e) {
    _(t, "position", "absolute"), _(t, "top", e.top), _(t, "left", e.left), _(t, "width", e.width), _(t, "height", e.height)
}

function j(t) {
    _(t, "position", ""), _(t, "top", ""), _(t, "left", ""), _(t, "width", ""), _(t, "height", "")
}
var H = "Sortable" + (new Date).getTime();

function L() {
    var t, n = [];
    return {
        captureAnimationState: function() {
            (n = [], this.options.animation) && [].slice.call(this.el.children).forEach((function(t) {
                if ("none" !== _(t, "display") && t !== jt.ghost) {
                    n.push({
                        target: t,
                        rect: x(t)
                    });
                    var o = e({}, n[n.length - 1].rect);
                    if (t.thisAnimationDuration) {
                        var i = C(t, !0);
                        i && (o.top -= i.f, o.left -= i.e)
                    }
                    t.fromRect = o
                }
            }))
        },
        addAnimationState: function(t) {
            n.push(t)
        },
        removeAnimationState: function(t) {
            n.splice(function(t, e) {
                for (var n in t)
                    if (t.hasOwnProperty(n))
                        for (var o in e)
                            if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
                return -1
            }(n, {
                target: t
            }), 1)
        },
        animateAll: function(e) {
            var o = this;
            if (!this.options.animation) return clearTimeout(t), void("function" == typeof e && e());
            var i = !1,
                r = 0;
            n.forEach((function(t) {
                var e = 0,
                    n = t.target,
                    a = n.fromRect,
                    l = x(n),
                    s = n.prevFromRect,
                    c = n.prevToRect,
                    u = t.rect,
                    d = C(n, !0);
                d && (l.top -= d.f, l.left -= d.e), n.toRect = l, n.thisAnimationDuration && R(s, l) && !R(a, l) && (u.top - l.top) / (u.left - l.left) == (a.top - l.top) / (a.left - l.left) && (e = function(t, e, n, o) {
                    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation
                }(u, s, c, o.options)), R(l, a) || (n.prevFromRect = a, n.prevToRect = l, e || (e = o.options.animation), o.animate(n, u, l, e)), e && (i = !0, r = Math.max(r, e), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function() {
                    n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                }), e), n.thisAnimationDuration = e)
            })), clearTimeout(t), i ? t = setTimeout((function() {
                "function" == typeof e && e()
            }), r) : "function" == typeof e && e(), n = []
        },
        animate: function(t, e, n, o) {
            if (o) {
                _(t, "transition", ""), _(t, "transform", "");
                var i = C(this.el),
                    r = i && i.a,
                    a = i && i.d,
                    l = (e.left - n.left) / (r || 1),
                    s = (e.top - n.top) / (a || 1);
                t.animatingX = !!l, t.animatingY = !!s, _(t, "transform", "translate3d(" + l + "px," + s + "px,0)"), this.forRepaintDummy = function(t) {
                    return t.offsetWidth
                }(t), _(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), _(t, "transform", "translate3d(0,0,0)"), "number" == typeof t.animated && clearTimeout(t.animated), t.animated = setTimeout((function() {
                    _(t, "transition", ""), _(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1
                }), o)
            }
        }
    }
}
var K = [],
    W = {
        initializeByDefault: !0
    },
    z = {
        mount: function(t) {
            for (var e in W) W.hasOwnProperty(e) && !(e in t) && (t[e] = W[e]);
            K.forEach((function(e) {
                if (e.pluginName === t.pluginName) throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once")
            })), K.push(t)
        },
        pluginEvent: function(t, n, o) {
            var i = this;
            this.eventCanceled = !1, o.cancel = function() {
                i.eventCanceled = !0
            };
            var r = t + "Global";
            K.forEach((function(i) {
                n[i.pluginName] && (n[i.pluginName][r] && n[i.pluginName][r](e({
                    sortable: n
                }, o)), n.options[i.pluginName] && n[i.pluginName][t] && n[i.pluginName][t](e({
                    sortable: n
                }, o)))
            }))
        },
        initializePlugins: function(t, e, n, o) {
            for (var r in K.forEach((function(o) {
                    var r = o.pluginName;
                    if (t.options[r] || o.initializeByDefault) {
                        var a = new o(t, e, t.options);
                        a.sortable = t, a.options = t.options, t[r] = a, i(n, a.defaults)
                    }
                })), t.options)
                if (t.options.hasOwnProperty(r)) {
                    var a = this.modifyOption(t, r, t.options[r]);
                    void 0 !== a && (t.options[r] = a)
                }
        },
        getEventProperties: function(t, e) {
            var n = {};
            return K.forEach((function(o) {
                "function" == typeof o.eventProperties && i(n, o.eventProperties.call(e[o.pluginName], t))
            })), n
        },
        modifyOption: function(t, e, n) {
            var o;
            return K.forEach((function(i) {
                t[i.pluginName] && i.optionListeners && "function" == typeof i.optionListeners[e] && (o = i.optionListeners[e].call(t[i.pluginName], n))
            })), o
        }
    };

function G(t) {
    var n = t.sortable,
        o = t.rootEl,
        i = t.name,
        r = t.targetEl,
        a = t.cloneEl,
        l = t.toEl,
        s = t.fromEl,
        d = t.oldIndex,
        h = t.newIndex,
        f = t.oldDraggableIndex,
        p = t.newDraggableIndex,
        g = t.originalEvent,
        v = t.putSortable,
        m = t.extraEventProperties;
    if (n = n || o && o[H]) {
        var b, y = n.options,
            w = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        !window.CustomEvent || c || u ? (b = document.createEvent("Event")).initEvent(i, !0, !0) : b = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }), b.to = l || o, b.from = s || o, b.item = r || o, b.clone = a, b.oldIndex = d, b.newIndex = h, b.oldDraggableIndex = f, b.newDraggableIndex = p, b.originalEvent = g, b.pullMode = v ? v.lastPutMode : void 0;
        var E = e(e({}, m), z.getEventProperties(i, n));
        for (var D in E) b[D] = E[D];
        o && o.dispatchEvent(b), y[w] && y[w].call(n, b)
    }
}
var U = ["evt"],
    q = function(t, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = o.evt,
            a = r(o, U);
        z.pluginEvent.bind(jt)(t, n, e({
            dragEl: Z,
            parentEl: $,
            ghostEl: Q,
            rootEl: J,
            nextEl: tt,
            lastDownEl: et,
            cloneEl: nt,
            cloneHidden: ot,
            dragStarted: vt,
            putSortable: ct,
            activeSortable: jt.active,
            originalEvent: i,
            oldIndex: it,
            oldDraggableIndex: at,
            newIndex: rt,
            newDraggableIndex: lt,
            hideGhostForTarget: Xt,
            unhideGhostForTarget: Yt,
            cloneNowHidden: function() {
                ot = !0
            },
            cloneNowShown: function() {
                ot = !1
            },
            dispatchSortableEvent: function(t) {
                V({
                    sortable: n,
                    name: t,
                    originalEvent: i
                })
            }
        }, a))
    };

function V(t) {
    G(e({
        putSortable: ct,
        cloneEl: nt,
        targetEl: Z,
        rootEl: J,
        oldIndex: it,
        oldDraggableIndex: at,
        newIndex: rt,
        newDraggableIndex: lt
    }, t))
}
var Z, $, Q, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, vt, mt, bt, yt, wt, Et = !1,
    Dt = !1,
    St = [],
    _t = !1,
    Ct = !1,
    Tt = [],
    Ot = !1,
    xt = [],
    Mt = "undefined" != typeof document,
    At = f,
    Nt = u || c ? "cssFloat" : "float",
    It = Mt && !p && !f && "draggable" in document.createElement("div"),
    Pt = function() {
        if (Mt) {
            if (c) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents
        }
    }(),
    kt = function(t, e) {
        var n = _(t),
            o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
            i = A(t, 0, e),
            r = A(t, 1, e),
            a = i && _(i),
            l = r && _(r),
            s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + x(i).width,
            c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + x(r).width;
        if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (i && a.float && "none" !== a.float) {
            var u = "left" === a.float ? "left" : "right";
            return !r || "both" !== l.clear && l.clear !== u ? "horizontal" : "vertical"
        }
        return i && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || s >= o && "none" === n[Nt] || r && "none" === n[Nt] && s + c > o) ? "vertical" : "horizontal"
    },
    Rt = function(t) {
        function e(t, n) {
            return function(o, i, r, a) {
                var l = o.options.group.name && i.options.group.name && o.options.group.name === i.options.group.name;
                if (null == t && (n || l)) return !0;
                if (null == t || !1 === t) return !1;
                if (n && "clone" === t) return t;
                if ("function" == typeof t) return e(t(o, i, r, a), n)(o, i, r, a);
                var s = (n ? o : i).options.group.name;
                return !0 === t || "string" == typeof t && t === s || t.join && t.indexOf(s) > -1
            }
        }
        var o = {},
            i = t.group;
        i && "object" == n(i) || (i = {
            name: i
        }), o.name = i.name, o.checkPull = e(i.pull, !0), o.checkPut = e(i.put), o.revertClone = i.revertClone, t.group = o
    },
    Xt = function() {
        !Pt && Q && _(Q, "display", "none")
    },
    Yt = function() {
        !Pt && Q && _(Q, "display", "")
    };
Mt && document.addEventListener("click", (function(t) {
    if (Dt) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Dt = !1, !1
}), !0);
var Bt = function(t) {
        if (Z) {
            t = t.touches ? t.touches[0] : t;
            var e = (i = t.clientX, r = t.clientY, St.some((function(t) {
                var e = t[H].options.emptyInsertThreshold;
                if (e && !N(t)) {
                    var n = x(t),
                        o = i >= n.left - e && i <= n.right + e,
                        l = r >= n.top - e && r <= n.bottom + e;
                    return o && l ? a = t : void 0
                }
            })), a);
            if (e) {
                var n = {};
                for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
                n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[H]._onDragOver(n)
            }
        }
        var i, r, a
    },
    Ft = function(t) {
        Z && Z.parentNode[H]._isOutsideThisEl(t.target)
    };

function jt(t, e) {
    if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = i({}, e), t[H] = this;
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return kt(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(t, e) {
            t.setData("Text", e.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: !1 !== jt.supportPointer && "PointerEvent" in window && !h,
        emptyInsertThreshold: 5
    };
    for (var o in z.initializePlugins(this, t, n), n) !(o in e) && (e[o] = n[o]);
    for (var r in Rt(e), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
    this.nativeDraggable = !e.forceFallback && It, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? v(t, "pointerdown", this._onTapStart) : (v(t, "mousedown", this._onTapStart), v(t, "touchstart", this._onTapStart)), this.nativeDraggable && (v(t, "dragover", this), v(t, "dragenter", this)), St.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), i(this, L())
}

function Ht(t, e, n, o, i, r, a, l) {
    var s, d, h = t[H],
        f = h.options.onMove;
    return !window.CustomEvent || c || u ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || x(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), f && (d = f.call(h, s, a)), d
}

function Lt(t) {
    t.draggable = !1
}

function Kt() {
    Ot = !1
}

function Wt(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;) o += e.charCodeAt(n);
    return o.toString(36)
}

function zt(t) {
    return setTimeout(t, 0)
}

function Gt(t) {
    return clearTimeout(t)
}
jt.prototype = {
    constructor: jt,
    _isOutsideThisEl: function(t) {
        this.el.contains(t) || t === this.el || (mt = null)
    },
    _getDirection: function(t, e) {
        return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, Z) : this.options.direction
    },
    _onTapStart: function(t) {
        if (t.cancelable) {
            var e = this,
                n = this.el,
                o = this.options,
                i = o.preventOnFilter,
                r = t.type,
                a = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t,
                l = (a || t).target,
                s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l,
                c = o.filter;
            if (function(t) {
                    xt.length = 0;
                    var e = t.getElementsByTagName("input"),
                        n = e.length;
                    for (; n--;) {
                        var o = e[n];
                        o.checked && xt.push(o)
                    }
                }(n), !Z && !(/mousedown|pointerdown/.test(r) && 0 !== t.button || o.disabled) && !s.isContentEditable && (this.nativeDraggable || !h || !l || "SELECT" !== l.tagName.toUpperCase()) && !((l = w(l, o.draggable, n, !1)) && l.animated || et === l)) {
                if (it = I(l), at = I(l, o.draggable), "function" == typeof c) {
                    if (c.call(this, t, l, this)) return V({
                        sortable: e,
                        rootEl: s,
                        name: "filter",
                        targetEl: l,
                        toEl: n,
                        fromEl: n
                    }), q("filter", e, {
                        evt: t
                    }), void(i && t.cancelable && t.preventDefault())
                } else if (c && (c = c.split(",").some((function(o) {
                        if (o = w(s, o.trim(), n, !1)) return V({
                            sortable: e,
                            rootEl: o,
                            name: "filter",
                            targetEl: l,
                            fromEl: n,
                            toEl: n
                        }), q("filter", e, {
                            evt: t
                        }), !0
                    })))) return void(i && t.cancelable && t.preventDefault());
                o.handle && !w(s, o.handle, n, !1) || this._prepareDragStart(t, a, l)
            }
        }
    },
    _prepareDragStart: function(t, e, n) {
        var o, i = this,
            r = i.el,
            a = i.options,
            l = r.ownerDocument;
        if (n && !Z && n.parentNode === r) {
            var s = x(n);
            if (J = r, $ = (Z = n).parentNode, tt = Z.nextSibling, et = n, st = a.group, jt.dragged = Z, ut = {
                    target: Z,
                    clientX: (e || t).clientX,
                    clientY: (e || t).clientY
                }, pt = ut.clientX - s.left, gt = ut.clientY - s.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, Z.style["will-change"] = "all", o = function() {
                    q("delayEnded", i, {
                        evt: t
                    }), jt.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !d && i.nativeDraggable && (Z.draggable = !0), i._triggerDragStart(t, e), V({
                        sortable: i,
                        name: "choose",
                        originalEvent: t
                    }), S(Z, a.chosenClass, !0))
                }, a.ignore.split(",").forEach((function(t) {
                    T(Z, t.trim(), Lt)
                })), v(l, "dragover", Bt), v(l, "mousemove", Bt), v(l, "touchmove", Bt), v(l, "mouseup", i._onDrop), v(l, "touchend", i._onDrop), v(l, "touchcancel", i._onDrop), d && this.nativeDraggable && (this.options.touchStartThreshold = 4, Z.draggable = !0), q("delayStart", this, {
                    evt: t
                }), !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (u || c)) o();
            else {
                if (jt.eventCanceled) return void this._onDrop();
                v(l, "mouseup", i._disableDelayedDrag), v(l, "touchend", i._disableDelayedDrag), v(l, "touchcancel", i._disableDelayedDrag), v(l, "mousemove", i._delayedDragTouchMoveHandler), v(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && v(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, a.delay)
            }
        }
    },
    _delayedDragTouchMoveHandler: function(t) {
        var e = t.touches ? t.touches[0] : t;
        Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Z && Lt(Z), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var t = this.el.ownerDocument;
        m(t, "mouseup", this._disableDelayedDrag), m(t, "touchend", this._disableDelayedDrag), m(t, "touchcancel", this._disableDelayedDrag), m(t, "mousemove", this._delayedDragTouchMoveHandler), m(t, "touchmove", this._delayedDragTouchMoveHandler), m(t, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(t, e) {
        e = e || "touch" == t.pointerType && t, !this.nativeDraggable || e ? this.options.supportPointer ? v(document, "pointermove", this._onTouchMove) : v(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (v(Z, "dragend", this), v(J, "dragstart", this._onDragStart));
        try {
            document.selection ? zt((function() {
                document.selection.empty()
            })) : window.getSelection().removeAllRanges()
        } catch (n) {}
    },
    _dragStarted: function(t, e) {
        if (Et = !1, J && Z) {
            q("dragStarted", this, {
                evt: e
            }), this.nativeDraggable && v(document, "dragover", Ft);
            var n = this.options;
            !t && S(Z, n.dragClass, !1), S(Z, n.ghostClass, !0), jt.active = this, t && this._appendGhost(), V({
                sortable: this,
                name: "start",
                originalEvent: e
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (dt) {
            this._lastX = dt.clientX, this._lastY = dt.clientY, Xt();
            for (var t = document.elementFromPoint(dt.clientX, dt.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(dt.clientX, dt.clientY)) !== e;) e = t;
            if (Z.parentNode[H]._isOutsideThisEl(t), e)
                do {
                    if (e[H]) {
                        if (e[H]._onDragOver({
                                clientX: dt.clientX,
                                clientY: dt.clientY,
                                target: t,
                                rootEl: e
                            }) && !this.options.dragoverBubble) break
                    }
                    t = e
                } while (e = e.parentNode);
            Yt()
        }
    },
    _onTouchMove: function(t) {
        if (ut) {
            var e = this.options,
                n = e.fallbackTolerance,
                o = e.fallbackOffset,
                i = t.touches ? t.touches[0] : t,
                r = Q && C(Q, !0),
                a = Q && r && r.a,
                l = Q && r && r.d,
                s = At && wt && P(wt),
                c = (i.clientX - ut.clientX + o.x) / (a || 1) + (s ? s[0] - Tt[0] : 0) / (a || 1),
                u = (i.clientY - ut.clientY + o.y) / (l || 1) + (s ? s[1] - Tt[1] : 0) / (l || 1);
            if (!jt.active && !Et) {
                if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
                this._onDragStart(t, !0)
            }
            if (Q) {
                r ? (r.e += c - (ht || 0), r.f += u - (ft || 0)) : r = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: c,
                    f: u
                };
                var d = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
                _(Q, "webkitTransform", d), _(Q, "mozTransform", d), _(Q, "msTransform", d), _(Q, "transform", d), ht = c, ft = u, dt = i
            }
            t.cancelable && t.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!Q) {
            var t = this.options.fallbackOnBody ? document.body : J,
                e = x(Z, !0, At, !0, t),
                n = this.options;
            if (At) {
                for (wt = t;
                    "static" === _(wt, "position") && "none" === _(wt, "transform") && wt !== document;) wt = wt.parentNode;
                wt !== document.body && wt !== document.documentElement ? (wt === document && (wt = O()), e.top += wt.scrollTop, e.left += wt.scrollLeft) : wt = O(), Tt = P(wt)
            }
            S(Q = Z.cloneNode(!0), n.ghostClass, !1), S(Q, n.fallbackClass, !0), S(Q, n.dragClass, !0), _(Q, "transition", ""), _(Q, "transform", ""), _(Q, "box-sizing", "border-box"), _(Q, "margin", 0), _(Q, "top", e.top), _(Q, "left", e.left), _(Q, "width", e.width), _(Q, "height", e.height), _(Q, "opacity", "0.8"), _(Q, "position", At ? "absolute" : "fixed"), _(Q, "zIndex", "100000"), _(Q, "pointerEvents", "none"), jt.ghost = Q, t.appendChild(Q), _(Q, "transform-origin", pt / parseInt(Q.style.width) * 100 + "% " + gt / parseInt(Q.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(t, e) {
        var n = this,
            o = t.dataTransfer,
            i = n.options;
        q("dragStart", this, {
            evt: t
        }), jt.eventCanceled ? this._onDrop() : (q("setupClone", this), jt.eventCanceled || ((nt = B(Z)).draggable = !1, nt.style["will-change"] = "", this._hideClone(), S(nt, this.options.chosenClass, !1), jt.clone = nt), n.cloneId = zt((function() {
            q("clone", n), jt.eventCanceled || (n.options.removeCloneOnHide || J.insertBefore(nt, Z), n._hideClone(), V({
                sortable: n,
                name: "clone"
            }))
        })), !e && S(Z, i.dragClass, !0), e ? (Dt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (m(document, "mouseup", n._onDrop), m(document, "touchend", n._onDrop), m(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, Z)), v(document, "drop", n), _(Z, "transform", "translateZ(0)")), Et = !0, n._dragStartId = zt(n._dragStarted.bind(n, e, t)), v(document, "selectstart", n), vt = !0, h && _(document.body, "user-select", "none"))
    },
    _onDragOver: function(t) {
        var n, o, i, r, a = this.el,
            l = t.target,
            s = this.options,
            c = s.group,
            u = jt.active,
            d = st === c,
            h = s.sort,
            f = ct || u,
            p = this,
            g = !1;
        if (!Ot) {
            if (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(), l = w(l, s.draggable, a, !0), F("dragOver"), jt.eventCanceled) return g;
            if (Z.contains(t.target) || l.animated && l.animatingX && l.animatingY || p._ignoreWhileAnimating === l) return L(!1);
            if (Dt = !1, u && !s.disabled && (d ? h || (i = $ !== J) : ct === this || (this.lastPutMode = st.checkPull(this, u, Z, t)) && c.checkPut(this, u, Z, t))) {
                if (r = "vertical" === this._getDirection(t, l), n = x(Z), F("dragOverValid"), jt.eventCanceled) return g;
                if (i) return $ = J, j(), this._hideClone(), F("revert"), jt.eventCanceled || (tt ? J.insertBefore(Z, tt) : J.appendChild(Z)), L(!0);
                var v = N(a, s.draggable);
                if (!v || function(t, e, n) {
                        var o = x(N(n.el, n.options.draggable)),
                            i = 10;
                        return e ? t.clientX > o.right + i || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + i
                    }(t, r, this) && !v.animated) {
                    if (v === Z) return L(!1);
                    if (v && a === t.target && (l = v), l && (o = x(l)), !1 !== Ht(J, a, Z, n, l, o, t, !!l)) return j(), a.appendChild(Z), $ = a, K(), L(!0)
                } else if (v && function(t, e, n) {
                        var o = x(A(n.el, 0, n.options, !0)),
                            i = 10;
                        return e ? t.clientX < o.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < o.top - i || t.clientY < o.bottom && t.clientX < o.left
                    }(t, r, this)) {
                    var m = A(a, 0, s, !0);
                    if (m === Z) return L(!1);
                    if (o = x(l = m), !1 !== Ht(J, a, Z, n, l, o, t, !1)) return j(), a.insertBefore(Z, m), $ = a, K(), L(!0)
                } else if (l.parentNode === a) {
                    o = x(l);
                    var b, y, E, D = Z.parentNode !== a,
                        C = ! function(t, e, n) {
                            var o = n ? t.left : t.top,
                                i = n ? t.right : t.bottom,
                                r = n ? t.width : t.height,
                                a = n ? e.left : e.top,
                                l = n ? e.right : e.bottom,
                                s = n ? e.width : e.height;
                            return o === a || i === l || o + r / 2 === a + s / 2
                        }(Z.animated && Z.toRect || n, l.animated && l.toRect || o, r),
                        T = r ? "top" : "left",
                        O = M(l, "top", "top") || M(Z, "top", "top"),
                        P = O ? O.scrollTop : void 0;
                    if (mt !== l && (y = o[T], _t = !1, Ct = !C && s.invertSwap || D), b = function(t, e, n, o, i, r, a, l) {
                            var s = o ? t.clientY : t.clientX,
                                c = o ? n.height : n.width,
                                u = o ? n.top : n.left,
                                d = o ? n.bottom : n.right,
                                h = !1;
                            if (!a)
                                if (l && yt < c * i) {
                                    if (!_t && (1 === bt ? s > u + c * r / 2 : s < d - c * r / 2) && (_t = !0), _t) h = !0;
                                    else if (1 === bt ? s < u + yt : s > d - yt) return -bt
                                } else if (s > u + c * (1 - i) / 2 && s < d - c * (1 - i) / 2) return function(t) {
                                return I(Z) < I(t) ? 1 : -1
                            }(e);
                            if ((h = h || a) && (s < u + c * r / 2 || s > d - c * r / 2)) return s > u + c / 2 ? 1 : -1;
                            return 0
                        }(t, l, o, r, C ? 1 : s.swapThreshold, null == s.invertedSwapThreshold ? s.swapThreshold : s.invertedSwapThreshold, Ct, mt === l), 0 !== b) {
                        var k = I(Z);
                        do {
                            k -= b, E = $.children[k]
                        } while (E && ("none" === _(E, "display") || E === Q))
                    }
                    if (0 === b || E === l) return L(!1);
                    mt = l, bt = b;
                    var R = l.nextElementSibling,
                        X = !1,
                        B = Ht(J, a, Z, n, l, o, t, X = 1 === b);
                    if (!1 !== B) return 1 !== B && -1 !== B || (X = 1 === B), Ot = !0, setTimeout(Kt, 30), j(), X && !R ? a.appendChild(Z) : l.parentNode.insertBefore(Z, X ? R : l), O && Y(O, 0, P - O.scrollTop), $ = Z.parentNode, void 0 === y || Ct || (yt = Math.abs(y - x(l)[T])), K(), L(!0)
                }
                if (a.contains(Z)) return L(!1)
            }
            return !1
        }

        function F(s, c) {
            q(s, p, e({
                evt: t,
                isOwner: d,
                axis: r ? "vertical" : "horizontal",
                revert: i,
                dragRect: n,
                targetRect: o,
                canSort: h,
                fromSortable: f,
                target: l,
                completed: L,
                onMove: function(e, o) {
                    return Ht(J, a, Z, n, e, x(e), t, o)
                },
                changed: K
            }, c))
        }

        function j() {
            F("dragOverAnimationCapture"), p.captureAnimationState(), p !== f && f.captureAnimationState()
        }

        function L(e) {
            return F("dragOverCompleted", {
                insertion: e
            }), e && (d ? u._hideClone() : u._showClone(p), p !== f && (S(Z, ct ? ct.options.ghostClass : u.options.ghostClass, !1), S(Z, s.ghostClass, !0)), ct !== p && p !== jt.active ? ct = p : p === jt.active && ct && (ct = null), f === p && (p._ignoreWhileAnimating = l), p.animateAll((function() {
                F("dragOverAnimationComplete"), p._ignoreWhileAnimating = null
            })), p !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (l === Z && !Z.animated || l === a && !l.animated) && (mt = null), s.dragoverBubble || t.rootEl || l === document || (Z.parentNode[H]._isOutsideThisEl(t.target), !e && Bt(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), g = !0
        }

        function K() {
            rt = I(Z), lt = I(Z, s.draggable), V({
                sortable: p,
                name: "change",
                toEl: a,
                newIndex: rt,
                newDraggableIndex: lt,
                originalEvent: t
            })
        }
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        m(document, "mousemove", this._onTouchMove), m(document, "touchmove", this._onTouchMove), m(document, "pointermove", this._onTouchMove), m(document, "dragover", Bt), m(document, "mousemove", Bt), m(document, "touchmove", Bt)
    },
    _offUpEvents: function() {
        var t = this.el.ownerDocument;
        m(t, "mouseup", this._onDrop), m(t, "touchend", this._onDrop), m(t, "pointerup", this._onDrop), m(t, "touchcancel", this._onDrop), m(document, "selectstart", this)
    },
    _onDrop: function(t) {
        var e = this.el,
            n = this.options;
        rt = I(Z), lt = I(Z, n.draggable), q("drop", this, {
            evt: t
        }), $ = Z && Z.parentNode, rt = I(Z), lt = I(Z, n.draggable), jt.eventCanceled || (Et = !1, Ct = !1, _t = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Gt(this.cloneId), Gt(this._dragStartId), this.nativeDraggable && (m(document, "drop", this), m(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), h && _(document.body, "user-select", ""), _(Z, "transform", ""), t && (vt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), Q && Q.parentNode && Q.parentNode.removeChild(Q), (J === $ || ct && "clone" !== ct.lastPutMode) && nt && nt.parentNode && nt.parentNode.removeChild(nt), Z && (this.nativeDraggable && m(Z, "dragend", this), Lt(Z), Z.style["will-change"] = "", vt && !Et && S(Z, ct ? ct.options.ghostClass : this.options.ghostClass, !1), S(Z, this.options.chosenClass, !1), V({
            sortable: this,
            name: "unchoose",
            toEl: $,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: t
        }), J !== $ ? (rt >= 0 && (V({
            rootEl: $,
            name: "add",
            toEl: $,
            fromEl: J,
            originalEvent: t
        }), V({
            sortable: this,
            name: "remove",
            toEl: $,
            originalEvent: t
        }), V({
            rootEl: $,
            name: "sort",
            toEl: $,
            fromEl: J,
            originalEvent: t
        }), V({
            sortable: this,
            name: "sort",
            toEl: $,
            originalEvent: t
        })), ct && ct.save()) : rt !== it && rt >= 0 && (V({
            sortable: this,
            name: "update",
            toEl: $,
            originalEvent: t
        }), V({
            sortable: this,
            name: "sort",
            toEl: $,
            originalEvent: t
        })), jt.active && (null != rt && -1 !== rt || (rt = it, lt = at), V({
            sortable: this,
            name: "end",
            toEl: $,
            originalEvent: t
        }), this.save())))), this._nulling()
    },
    _nulling: function() {
        q("nulling", this), J = Z = $ = Q = tt = nt = et = ot = ut = dt = vt = rt = lt = it = at = mt = bt = ct = st = jt.dragged = jt.ghost = jt.clone = jt.active = null, xt.forEach((function(t) {
            t.checked = !0
        })), xt.length = ht = ft = 0
    },
    handleEvent: function(t) {
        switch (t.type) {
            case "drop":
            case "dragend":
                this._onDrop(t);
                break;
            case "dragenter":
            case "dragover":
                Z && (this._onDragOver(t), function(t) {
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                    t.cancelable && t.preventDefault()
                }(t));
                break;
            case "selectstart":
                t.preventDefault()
        }
    },
    toArray: function() {
        for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++) w(t = n[o], r.draggable, this.el, !1) && e.push(t.getAttribute(r.dataIdAttr) || Wt(t));
        return e
    },
    sort: function(t, e) {
        var n = {},
            o = this.el;
        this.toArray().forEach((function(t, e) {
            var i = o.children[e];
            w(i, this.options.draggable, o, !1) && (n[t] = i)
        }), this), e && this.captureAnimationState(), t.forEach((function(t) {
            n[t] && (o.removeChild(n[t]), o.appendChild(n[t]))
        })), e && this.animateAll()
    },
    save: function() {
        var t = this.options.store;
        t && t.set && t.set(this)
    },
    closest: function(t, e) {
        return w(t, e || this.options.draggable, this.el, !1)
    },
    option: function(t, e) {
        var n = this.options;
        if (void 0 === e) return n[t];
        var o = z.modifyOption(this, t, e);
        n[t] = void 0 !== o ? o : e, "group" === t && Rt(n)
    },
    destroy: function() {
        q("destroy", this);
        var t = this.el;
        t[H] = null, m(t, "mousedown", this._onTapStart), m(t, "touchstart", this._onTapStart), m(t, "pointerdown", this._onTapStart), this.nativeDraggable && (m(t, "dragover", this), m(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
            t.removeAttribute("draggable")
        })), this._onDrop(), this._disableDelayedDragEvents(), St.splice(St.indexOf(this.el), 1), this.el = t = null
    },
    _hideClone: function() {
        if (!ot) {
            if (q("hideClone", this), jt.eventCanceled) return;
            _(nt, "display", "none"), this.options.removeCloneOnHide && nt.parentNode && nt.parentNode.removeChild(nt), ot = !0
        }
    },
    _showClone: function(t) {
        if ("clone" === t.lastPutMode) {
            if (ot) {
                if (q("showClone", this), jt.eventCanceled) return;
                Z.parentNode != J || this.options.group.revertClone ? tt ? J.insertBefore(nt, tt) : J.appendChild(nt) : J.insertBefore(nt, Z), this.options.group.revertClone && this.animate(Z, nt), _(nt, "display", ""), ot = !1
            }
        } else this._hideClone()
    }
}, Mt && v(document, "touchmove", (function(t) {
    (jt.active || Et) && t.cancelable && t.preventDefault()
})), jt.utils = {
    on: v,
    off: m,
    css: _,
    find: T,
    is: function(t, e) {
        return !!w(t, e, t, !1)
    },
    extend: function(t, e) {
        if (t && e)
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    },
    throttle: X,
    closest: w,
    toggleClass: S,
    clone: B,
    index: I,
    nextTick: zt,
    cancelNextTick: Gt,
    detectDirection: kt,
    getChild: A
}, jt.get = function(t) {
    return t[H]
}, jt.mount = function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
    n[0].constructor === Array && (n = n[0]), n.forEach((function(t) {
        if (!t.prototype || !t.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
        t.utils && (jt.utils = e(e({}, jt.utils), t.utils)), z.mount(t)
    }))
}, jt.create = function(t, e) {
    return new jt(t, e)
}, jt.version = "1.14.0";
var Ut, qt, Vt, Zt, $t, Qt, Jt = [],
    te = !1;

function ee() {
    Jt.forEach((function(t) {
        clearInterval(t.pid)
    })), Jt = []
}

function ne() {
    clearInterval(Qt)
}
var oe, ie = X((function(t, e, n, o) {
        if (e.scroll) {
            var i, r = (t.touches ? t.touches[0] : t).clientX,
                a = (t.touches ? t.touches[0] : t).clientY,
                l = e.scrollSensitivity,
                s = e.scrollSpeed,
                c = O(),
                u = !1;
            qt !== n && (qt = n, ee(), Ut = e.scroll, i = e.scrollFn, !0 === Ut && (Ut = k(n, !0)));
            var d = 0,
                h = Ut;
            do {
                var f = h,
                    p = x(f),
                    g = p.top,
                    v = p.bottom,
                    m = p.left,
                    b = p.right,
                    y = p.width,
                    w = p.height,
                    E = void 0,
                    D = void 0,
                    S = f.scrollWidth,
                    C = f.scrollHeight,
                    T = _(f),
                    M = f.scrollLeft,
                    A = f.scrollTop;
                f === c ? (E = y < S && ("auto" === T.overflowX || "scroll" === T.overflowX || "visible" === T.overflowX), D = w < C && ("auto" === T.overflowY || "scroll" === T.overflowY || "visible" === T.overflowY)) : (E = y < S && ("auto" === T.overflowX || "scroll" === T.overflowX), D = w < C && ("auto" === T.overflowY || "scroll" === T.overflowY));
                var N = E && (Math.abs(b - r) <= l && M + y < S) - (Math.abs(m - r) <= l && !!M),
                    I = D && (Math.abs(v - a) <= l && A + w < C) - (Math.abs(g - a) <= l && !!A);
                if (!Jt[d])
                    for (var P = 0; P <= d; P++) Jt[P] || (Jt[P] = {});
                Jt[d].vx == N && Jt[d].vy == I && Jt[d].el === f || (Jt[d].el = f, Jt[d].vx = N, Jt[d].vy = I, clearInterval(Jt[d].pid), 0 == N && 0 == I || (u = !0, Jt[d].pid = setInterval(function() {
                    o && 0 === this.layer && jt.active._onTouchMove($t);
                    var e = Jt[this.layer].vy ? Jt[this.layer].vy * s : 0,
                        n = Jt[this.layer].vx ? Jt[this.layer].vx * s : 0;
                    "function" == typeof i && "continue" !== i.call(jt.dragged.parentNode[H], n, e, t, $t, Jt[this.layer].el) || Y(Jt[this.layer].el, n, e)
                }.bind({
                    layer: d
                }), 24))), d++
            } while (e.bubbleScroll && h !== c && (h = k(h, !1)));
            te = u
        }
    }), 30),
    re = function(t) {
        var e = t.originalEvent,
            n = t.putSortable,
            o = t.dragEl,
            i = t.activeSortable,
            r = t.dispatchSortableEvent,
            a = t.hideGhostForTarget,
            l = t.unhideGhostForTarget;
        if (e) {
            var s = n || i;
            a();
            var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e,
                u = document.elementFromPoint(c.clientX, c.clientY);
            l(), s && !s.el.contains(u) && (r("spill"), this.onSpill({
                dragEl: o,
                putSortable: n
            }))
        }
    };

function ae() {}

function le() {}
ae.prototype = {
    startIndex: null,
    dragStart: function(t) {
        var e = t.oldDraggableIndex;
        this.startIndex = e
    },
    onSpill: function(t) {
        var e = t.dragEl,
            n = t.putSortable;
        this.sortable.captureAnimationState(), n && n.captureAnimationState();
        var o = A(this.sortable.el, this.startIndex, this.options);
        o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll()
    },
    drop: re
}, i(ae, {
    pluginName: "revertOnSpill"
}), le.prototype = {
    onSpill: function(t) {
        var e = t.dragEl,
            n = t.putSortable || this.sortable;
        n.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), n.animateAll()
    },
    drop: re
}, i(le, {
    pluginName: "removeOnSpill"
});
var se, ce, ue, de, he, fe = [],
    pe = [],
    ge = !1,
    ve = !1,
    me = !1;

function be(t, e) {
    pe.forEach((function(n, o) {
        var i = e.children[n.sortableIndex + (t ? Number(o) : 0)];
        i ? e.insertBefore(n, i) : e.appendChild(n)
    }))
}

function ye() {
    fe.forEach((function(t) {
        t !== ue && t.parentNode && t.parentNode.removeChild(t)
    }))
}
jt.mount(new function() {
    function t() {
        for (var t in this.defaults = {
                scroll: !0,
                forceAutoScrollFallback: !1,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0
            }, this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this))
    }
    return t.prototype = {
        dragStarted: function(t) {
            var e = t.originalEvent;
            this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? v(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? v(document, "touchmove", this._handleFallbackAutoScroll) : v(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(t) {
            var e = t.originalEvent;
            this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
        },
        drop: function() {
            this.sortable.nativeDraggable ? m(document, "dragover", this._handleAutoScroll) : (m(document, "pointermove", this._handleFallbackAutoScroll), m(document, "touchmove", this._handleFallbackAutoScroll), m(document, "mousemove", this._handleFallbackAutoScroll)), ne(), ee(), clearTimeout(E), E = void 0
        },
        nulling: function() {
            $t = qt = Ut = te = Qt = Vt = Zt = null, Jt.length = 0
        },
        _handleFallbackAutoScroll: function(t) {
            this._handleAutoScroll(t, !0)
        },
        _handleAutoScroll: function(t, e) {
            var n = this,
                o = (t.touches ? t.touches[0] : t).clientX,
                i = (t.touches ? t.touches[0] : t).clientY,
                r = document.elementFromPoint(o, i);
            if ($t = t, e || this.options.forceAutoScrollFallback || u || c || h) {
                ie(t, this.options, r, e);
                var a = k(r, !0);
                !te || Qt && o === Vt && i === Zt || (Qt && ne(), Qt = setInterval((function() {
                    var r = k(document.elementFromPoint(o, i), !0);
                    r !== a && (a = r, ee()), ie(t, n.options, r, e)
                }), 10), Vt = o, Zt = i)
            } else {
                if (!this.options.bubbleScroll || k(r, !0) === O()) return void ee();
                ie(t, this.options, k(r, !1), !1)
            }
        }
    }, i(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}), jt.mount(le, ae);
const we = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: jt,
    MultiDrag: function() {
        function t(t) {
            for (var e in this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this));
            t.options.supportPointer ? v(document, "pointerup", this._deselectMultiDrag) : (v(document, "mouseup", this._deselectMultiDrag), v(document, "touchend", this._deselectMultiDrag)), v(document, "keydown", this._checkKeyDown), v(document, "keyup", this._checkKeyUp), this.defaults = {
                selectedClass: "sortable-selected",
                multiDragKey: null,
                setData: function(e, n) {
                    var o = "";
                    fe.length && ce === t ? fe.forEach((function(t, e) {
                        o += (e ? ", " : "") + t.textContent
                    })) : o = n.textContent, e.setData("Text", o)
                }
            }
        }
        return t.prototype = {
            multiDragKeyDown: !1,
            isMultiDrag: !1,
            delayStartGlobal: function(t) {
                var e = t.dragEl;
                ue = e
            },
            delayEnded: function() {
                this.isMultiDrag = ~fe.indexOf(ue)
            },
            setupClone: function(t) {
                var e = t.sortable,
                    n = t.cancel;
                if (this.isMultiDrag) {
                    for (var o = 0; o < fe.length; o++) pe.push(B(fe[o])), pe[o].sortableIndex = fe[o].sortableIndex, pe[o].draggable = !1, pe[o].style["will-change"] = "", S(pe[o], this.options.selectedClass, !1), fe[o] === ue && S(pe[o], this.options.chosenClass, !1);
                    e._hideClone(), n()
                }
            },
            clone: function(t) {
                var e = t.sortable,
                    n = t.rootEl,
                    o = t.dispatchSortableEvent,
                    i = t.cancel;
                this.isMultiDrag && (this.options.removeCloneOnHide || fe.length && ce === e && (be(!0, n), o("clone"), i()))
            },
            showClone: function(t) {
                var e = t.cloneNowShown,
                    n = t.rootEl,
                    o = t.cancel;
                this.isMultiDrag && (be(!1, n), pe.forEach((function(t) {
                    _(t, "display", "")
                })), e(), he = !1, o())
            },
            hideClone: function(t) {
                var e = this;
                t.sortable;
                var n = t.cloneNowHidden,
                    o = t.cancel;
                this.isMultiDrag && (pe.forEach((function(t) {
                    _(t, "display", "none"), e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t)
                })), n(), he = !0, o())
            },
            dragStartGlobal: function(t) {
                t.sortable, !this.isMultiDrag && ce && ce.multiDrag._deselectMultiDrag(), fe.forEach((function(t) {
                    t.sortableIndex = I(t)
                })), fe = fe.sort((function(t, e) {
                    return t.sortableIndex - e.sortableIndex
                })), me = !0
            },
            dragStarted: function(t) {
                var e = this,
                    n = t.sortable;
                if (this.isMultiDrag) {
                    if (this.options.sort && (n.captureAnimationState(), this.options.animation)) {
                        fe.forEach((function(t) {
                            t !== ue && _(t, "position", "absolute")
                        }));
                        var o = x(ue, !1, !0, !0);
                        fe.forEach((function(t) {
                            t !== ue && F(t, o)
                        })), ve = !0, ge = !0
                    }
                    n.animateAll((function() {
                        ve = !1, ge = !1, e.options.animation && fe.forEach((function(t) {
                            j(t)
                        })), e.options.sort && ye()
                    }))
                }
            },
            dragOver: function(t) {
                var e = t.target,
                    n = t.completed,
                    o = t.cancel;
                ve && ~fe.indexOf(e) && (n(!1), o())
            },
            revert: function(t) {
                var e = t.fromSortable,
                    n = t.rootEl,
                    o = t.sortable,
                    i = t.dragRect;
                fe.length > 1 && (fe.forEach((function(t) {
                    o.addAnimationState({
                        target: t,
                        rect: ve ? x(t) : i
                    }), j(t), t.fromRect = i, e.removeAnimationState(t)
                })), ve = !1, function(t, e) {
                    fe.forEach((function(n, o) {
                        var i = e.children[n.sortableIndex + (t ? Number(o) : 0)];
                        i ? e.insertBefore(n, i) : e.appendChild(n)
                    }))
                }(!this.options.removeCloneOnHide, n))
            },
            dragOverCompleted: function(t) {
                var e = t.sortable,
                    n = t.isOwner,
                    o = t.insertion,
                    i = t.activeSortable,
                    r = t.parentEl,
                    a = t.putSortable,
                    l = this.options;
                if (o) {
                    if (n && i._hideClone(), ge = !1, l.animation && fe.length > 1 && (ve || !n && !i.options.sort && !a)) {
                        var s = x(ue, !1, !0, !0);
                        fe.forEach((function(t) {
                            t !== ue && (F(t, s), r.appendChild(t))
                        })), ve = !0
                    }
                    if (!n)
                        if (ve || ye(), fe.length > 1) {
                            var c = he;
                            i._showClone(e), i.options.animation && !he && c && pe.forEach((function(t) {
                                i.addAnimationState({
                                    target: t,
                                    rect: de
                                }), t.fromRect = de, t.thisAnimationDuration = null
                            }))
                        } else i._showClone(e)
                }
            },
            dragOverAnimationCapture: function(t) {
                var e = t.dragRect,
                    n = t.isOwner,
                    o = t.activeSortable;
                if (fe.forEach((function(t) {
                        t.thisAnimationDuration = null
                    })), o.options.animation && !n && o.multiDrag.isMultiDrag) {
                    de = i({}, e);
                    var r = C(ue, !0);
                    de.top -= r.f, de.left -= r.e
                }
            },
            dragOverAnimationComplete: function() {
                ve && (ve = !1, ye())
            },
            drop: function(t) {
                var e = t.originalEvent,
                    n = t.rootEl,
                    o = t.parentEl,
                    i = t.sortable,
                    r = t.dispatchSortableEvent,
                    a = t.oldIndex,
                    l = t.putSortable,
                    s = l || this.sortable;
                if (e) {
                    var c = this.options,
                        u = o.children;
                    if (!me)
                        if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), S(ue, c.selectedClass, !~fe.indexOf(ue)), ~fe.indexOf(ue)) fe.splice(fe.indexOf(ue), 1), se = null, G({
                            sortable: i,
                            rootEl: n,
                            name: "deselect",
                            targetEl: ue,
                            originalEvt: e
                        });
                        else {
                            if (fe.push(ue), G({
                                    sortable: i,
                                    rootEl: n,
                                    name: "select",
                                    targetEl: ue,
                                    originalEvt: e
                                }), e.shiftKey && se && i.el.contains(se)) {
                                var d, h, f = I(se),
                                    p = I(ue);
                                if (~f && ~p && f !== p)
                                    for (p > f ? (h = f, d = p) : (h = p, d = f + 1); h < d; h++) ~fe.indexOf(u[h]) || (S(u[h], c.selectedClass, !0), fe.push(u[h]), G({
                                        sortable: i,
                                        rootEl: n,
                                        name: "select",
                                        targetEl: u[h],
                                        originalEvt: e
                                    }))
                            } else se = ue;
                            ce = s
                        }
                    if (me && this.isMultiDrag) {
                        if (ve = !1, (o[H].options.sort || o !== n) && fe.length > 1) {
                            var g = x(ue),
                                v = I(ue, ":not(." + this.options.selectedClass + ")");
                            if (!ge && c.animation && (ue.thisAnimationDuration = null), s.captureAnimationState(), !ge && (c.animation && (ue.fromRect = g, fe.forEach((function(t) {
                                    if (t.thisAnimationDuration = null, t !== ue) {
                                        var e = ve ? x(t) : g;
                                        t.fromRect = e, s.addAnimationState({
                                            target: t,
                                            rect: e
                                        })
                                    }
                                }))), ye(), fe.forEach((function(t) {
                                    u[v] ? o.insertBefore(t, u[v]) : o.appendChild(t), v++
                                })), a === I(ue))) {
                                var m = !1;
                                fe.forEach((function(t) {
                                    t.sortableIndex === I(t) || (m = !0)
                                })), m && r("update")
                            }
                            fe.forEach((function(t) {
                                j(t)
                            })), s.animateAll()
                        }
                        ce = s
                    }(n === o || l && "clone" !== l.lastPutMode) && pe.forEach((function(t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    }))
                }
            },
            nullingGlobal: function() {
                this.isMultiDrag = me = !1, pe.length = 0
            },
            destroyGlobal: function() {
                this._deselectMultiDrag(), m(document, "pointerup", this._deselectMultiDrag), m(document, "mouseup", this._deselectMultiDrag), m(document, "touchend", this._deselectMultiDrag), m(document, "keydown", this._checkKeyDown), m(document, "keyup", this._checkKeyUp)
            },
            _deselectMultiDrag: function(t) {
                if (!(void 0 !== me && me || ce !== this.sortable || t && w(t.target, this.options.draggable, this.sortable.el, !1) || t && 0 !== t.button))
                    for (; fe.length;) {
                        var e = fe[0];
                        S(e, this.options.selectedClass, !1), fe.shift(), G({
                            sortable: this.sortable,
                            rootEl: this.sortable.el,
                            name: "deselect",
                            targetEl: e,
                            originalEvt: t
                        })
                    }
            },
            _checkKeyDown: function(t) {
                t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
            },
            _checkKeyUp: function(t) {
                t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
            }
        }, i(t, {
            pluginName: "multiDrag",
            utils: {
                select: function(t) {
                    var e = t.parentNode[H];
                    e && e.options.multiDrag && !~fe.indexOf(t) && (ce && ce !== e && (ce.multiDrag._deselectMultiDrag(), ce = e), S(t, e.options.selectedClass, !0), fe.push(t))
                },
                deselect: function(t) {
                    var e = t.parentNode[H],
                        n = fe.indexOf(t);
                    e && e.options.multiDrag && ~n && (S(t, e.options.selectedClass, !1), fe.splice(n, 1))
                }
            },
            eventProperties: function() {
                var t = this,
                    e = [],
                    n = [];
                return fe.forEach((function(o) {
                    var i;
                    e.push({
                        multiDragElement: o,
                        index: o.sortableIndex
                    }), i = ve && o !== ue ? -1 : ve ? I(o, ":not(." + t.options.selectedClass + ")") : I(o), n.push({
                        multiDragElement: o,
                        index: i
                    })
                })), {
                    items: a(fe),
                    clones: [].concat(pe),
                    oldIndicies: e,
                    newIndicies: n
                }
            },
            optionListeners: {
                multiDragKey: function(t) {
                    return "ctrl" === (t = t.toLowerCase()) ? t = "Control" : t.length > 1 && (t = t.charAt(0).toUpperCase() + t.substr(1)), t
                }
            }
        })
    },
    Sortable: jt,
    Swap: function() {
        function t() {
            this.defaults = {
                swapClass: "sortable-swap-highlight"
            }
        }
        return t.prototype = {
            dragStart: function(t) {
                var e = t.dragEl;
                oe = e
            },
            dragOverValid: function(t) {
                var e = t.completed,
                    n = t.target,
                    o = t.onMove,
                    i = t.activeSortable,
                    r = t.changed,
                    a = t.cancel;
                if (i.options.swap) {
                    var l = this.sortable.el,
                        s = this.options;
                    if (n && n !== l) {
                        var c = oe;
                        !1 !== o(n) ? (S(n, s.swapClass, !0), oe = n) : oe = null, c && c !== oe && S(c, s.swapClass, !1)
                    }
                    r(), e(!0), a()
                }
            },
            drop: function(t) {
                var e = t.activeSortable,
                    n = t.putSortable,
                    o = t.dragEl,
                    i = n || this.sortable,
                    r = this.options;
                oe && S(oe, r.swapClass, !1), oe && (r.swap || n && n.options.swap) && o !== oe && (i.captureAnimationState(), i !== e && e.captureAnimationState(), function(t, e) {
                    var n, o, i = t.parentNode,
                        r = e.parentNode;
                    if (!i || !r || i.isEqualNode(e) || r.isEqualNode(t)) return;
                    n = I(t), o = I(e), i.isEqualNode(r) && n < o && o++;
                    i.insertBefore(e, i.children[n]), r.insertBefore(t, r.children[o])
                }(o, oe), i.animateAll(), i !== e && e.animateAll())
            },
            nulling: function() {
                oe = null
            }
        }, i(t, {
            pluginName: "swap",
            eventProperties: function() {
                return {
                    swapItem: oe
                }
            }
        })
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    we as s
};