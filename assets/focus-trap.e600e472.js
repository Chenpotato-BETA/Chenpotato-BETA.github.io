import {
    Q as e,
    al as t,
    af as n,
    g as o,
    O as s,
    ac as a,
    w as r,
    e as u,
    S as c,
    aa as d,
    U as f
} from "./el-select.e274bb48.js";
import {
    _ as i
} from "./index.176a125e.js";
import {
    E as l
} from "./aria.66f3f71c.js";

function p(e) {
    return null == e
}
const v = "update:modelValue",
    m = "change",
    E = "input";
let w = [];
const y = e => {
        const t = e;
        t.key === l.esc && w.forEach((e => e(t)))
    },
    L = {
        cancelable: !0,
        bubbles: !1
    },
    h = {
        cancelable: !0,
        bubbles: !1
    },
    T = Symbol("elFocusTrap"),
    b = o(),
    g = o(0),
    k = o(0);
let R = 0;
const F = e => {
        const t = [],
            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    const t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 || e === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
    },
    S = (e, t) => {
        for (const n of e)
            if (!K(n, t)) return n
    },
    K = (e, t) => {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
            if (t && e === t) return !1;
            if ("none" === getComputedStyle(e).display) return !0;
            e = e.parentElement
        }
        return !1
    },
    N = (e, t) => {
        if (e && e.focus) {
            const n = document.activeElement;
            e.focus({
                preventScroll: !0
            }), k.value = window.performance.now(), e !== n && (e => e instanceof HTMLInputElement && "select" in e)(e) && t && e.select()
        }
    };

function P(e, t) {
    const n = [...e],
        o = e.indexOf(t);
    return -1 !== o && n.splice(o, 1), n
}
const I = (() => {
        let e = [];
        return {
            push: t => {
                const n = e[0];
                n && t !== n && n.pause(), e = P(e, t), e.unshift(t)
            },
            remove: t => {
                var n, o;
                e = P(e, t), null == (o = null == (n = e[0]) ? void 0 : n.resume) || o.call(n)
            }
        }
    })(),
    A = () => {
        b.value = "pointer", g.value = window.performance.now()
    },
    C = () => {
        b.value = "keyboard", g.value = window.performance.now()
    },
    _ = e => new CustomEvent("focus-trap.focusout-prevented", { ...h,
        detail: e
    });
var j = i(s({
    name: "ElFocusTrap",
    inheritAttrs: !1,
    props: {
        loop: Boolean,
        trapped: Boolean,
        focusTrapEl: Object,
        focusStartEl: {
            type: [Object, String],
            default: "first"
        }
    },
    emits: ["focusAfterTrapped", "focusAfterReleased", "focusin", "focusout", "focusout-prevented", "release-requested"],
    setup(s, {
        emit: f
    }) {
        const i = o();
        let v, m;
        const {
            focusReason: E
        } = (e((() => {
            0 === R && (document.addEventListener("mousedown", A), document.addEventListener("touchstart", A), document.addEventListener("keydown", C)), R++
        })), n((() => {
            R--, R <= 0 && (document.removeEventListener("mousedown", A), document.removeEventListener("touchstart", A), document.removeEventListener("keydown", C))
        })), {
            focusReason: b,
            lastUserFocusTimestamp: g,
            lastAutomatedFocusTimestamp: k
        });
        var h;
        h = e => {
            s.trapped && !K.paused && f("release-requested", e)
        }, e((() => {
            0 === w.length && document.addEventListener("keydown", y), t && w.push(h)
        })), n((() => {
            w = w.filter((e => e !== h)), 0 === w.length && t && document.removeEventListener("keydown", y)
        }));
        const K = {
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            },
            P = e => {
                if (!s.loop && !s.trapped) return;
                if (K.paused) return;
                const {
                    key: t,
                    altKey: n,
                    ctrlKey: o,
                    metaKey: a,
                    currentTarget: r,
                    shiftKey: u
                } = e, {
                    loop: c
                } = s, d = t === l.tab && !n && !o && !a, i = document.activeElement;
                if (d && i) {
                    const t = r,
                        [n, o] = (e => {
                            const t = F(e);
                            return [S(t, e), S(t.reverse(), e)]
                        })(t);
                    if (n && o)
                        if (u || i !== o) {
                            if (u && [n, t].includes(i)) {
                                const t = _({
                                    focusReason: E.value
                                });
                                f("focusout-prevented", t), t.defaultPrevented || (e.preventDefault(), c && N(o, !0))
                            }
                        } else {
                            const t = _({
                                focusReason: E.value
                            });
                            f("focusout-prevented", t), t.defaultPrevented || (e.preventDefault(), c && N(n, !0))
                        }
                    else if (i === t) {
                        const t = _({
                            focusReason: E.value
                        });
                        f("focusout-prevented", t), t.defaultPrevented || e.preventDefault()
                    }
                }
            };
        a(T, {
            focusTrapRef: i,
            onKeydown: P
        }), r((() => s.focusTrapEl), (e => {
            e && (i.value = e)
        }), {
            immediate: !0
        }), r([i], (([e], [t]) => {
            e && (e.addEventListener("keydown", P), e.addEventListener("focusin", O), e.addEventListener("focusout", U)), t && (t.removeEventListener("keydown", P), t.removeEventListener("focusin", O), t.removeEventListener("focusout", U))
        }));
        const j = e => {
                f("focusAfterTrapped", e)
            },
            x = e => f("focusAfterReleased", e),
            O = e => {
                const t = u(i);
                if (!t) return;
                const n = e.target,
                    o = e.relatedTarget,
                    a = n && t.contains(n);
                if (!s.trapped) {
                    o && t.contains(o) || (v = o)
                }
                a && f("focusin", e), K.paused || s.trapped && (a ? m = n : N(m, !0))
            },
            U = e => {
                const t = u(i);
                if (!K.paused && t)
                    if (s.trapped) {
                        const n = e.relatedTarget;
                        p(n) || t.contains(n) || setTimeout((() => {
                            if (!K.paused && s.trapped) {
                                const e = _({
                                    focusReason: E.value
                                });
                                f("focusout-prevented", e), e.defaultPrevented || N(m, !0)
                            }
                        }), 0)
                    } else {
                        const n = e.target;
                        n && t.contains(n) || f("focusout", e)
                    }
            };
        async function D() {
            await c();
            const e = u(i);
            if (e) {
                I.push(K);
                const t = e.contains(document.activeElement) ? v : document.activeElement;
                v = t;
                if (!e.contains(t)) {
                    const n = new Event("focus-trap.focus-after-trapped", L);
                    e.addEventListener("focus-trap.focus-after-trapped", j), e.dispatchEvent(n), n.defaultPrevented || c((() => {
                        let n = s.focusStartEl;
                        d(n) || (N(n), document.activeElement !== n && (n = "first")), "first" === n && ((e, t = !1) => {
                            const n = document.activeElement;
                            for (const o of e)
                                if (N(o, t), document.activeElement !== n) return
                        })(F(e), !0), document.activeElement !== t && "container" !== n || N(e)
                    }))
                }
            }
        }

        function q() {
            const e = u(i);
            if (e) {
                e.removeEventListener("focus-trap.focus-after-trapped", j);
                const t = new CustomEvent("focus-trap.focus-after-released", { ...L,
                    detail: {
                        focusReason: E.value
                    }
                });
                e.addEventListener("focus-trap.focus-after-released", x), e.dispatchEvent(t), t.defaultPrevented || "keyboard" != E.value && g.value > k.value || N(null != v ? v : document.body, !0), e.removeEventListener("focus-trap.focus-after-released", j), I.remove(K)
            }
        }
        return e((() => {
            s.trapped && D(), r((() => s.trapped), (e => {
                e ? D() : q()
            }))
        })), n((() => {
            s.trapped && q()
        })), {
            onKeydown: P
        }
    }
}), [
    ["render", function(e, t, n, o, s, a) {
        return f(e.$slots, "default", {
            handleKeydown: e.onKeydown
        })
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]
]);
export {
    m as C, j as E, T as F, E as I, v as U, p as i
};