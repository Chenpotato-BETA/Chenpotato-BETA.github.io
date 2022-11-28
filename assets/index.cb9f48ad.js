import {
    O as e,
    c as t,
    o as l,
    b as o,
    h as a,
    U as n,
    i as s,
    e as i,
    t as r,
    J as u,
    k as p,
    q as c,
    j as d,
    n as v,
    ak as m,
    a5 as h,
    au as f,
    w as b,
    F as g,
    z as y,
    ad as C,
    af as S,
    S as x,
    m as O,
    s as w,
    x as L,
    g as I,
    Q as k,
    ah as T,
    am as M,
    ae as E,
    av as B,
    al as V,
    aw as P,
    at as z,
    ac as q,
    W as D,
    ax as W,
    K as F,
    L as j,
    p as K,
    v as A,
    ay as _,
    D as H
} from "./el-select.e274bb48.js";
import {
    E as $,
    u as R,
    a as Q
} from "./index.742e3cb2.js";
import {
    i as N,
    E as G
} from "./index.72bec9e8.js";
import {
    E as U
} from "./index.52524422.js";
import {
    b as J,
    E as X,
    _ as Y,
    w as Z,
    a as ee
} from "./index.176a125e.js";
import {
    d as te,
    e as le,
    b as oe
} from "./index.4e5ff846.js";
import {
    e as ae,
    c as ne,
    u as se
} from "./index.8720847e.js";
import {
    u as ie,
    a as re
} from "./index.0e1148e8.js";
import {
    e as ue
} from "./strings.e32d5a08.js";
import {
    u as pe
} from "./index.14b43c35.js";
import {
    a as ce
} from "./index.ca3d31b2.js";
import {
    u as de
} from "./index.d235e992.js";
import {
    d as ve
} from "./style.d69d81d7.js";
import {
    U as me,
    C as he
} from "./focus-trap.e600e472.js";
import {
    s as fe
} from "./scroll.4972bdba.js";
import {
    E as be
} from "./aria.66f3f71c.js";
import {
    i as ge
} from "./isEqual.296380c7.js";
import {
    d as ye
} from "./debounce.abbfdaeb.js";
import {
    C as Ce
} from "./index.87f7d0e4.js";
import {
    i as Se
} from "./validator.05a5fb38.js";
import {
    i as xe
} from "./icon.8b835c88.js";
const Oe = J({
        closable: Boolean,
        type: {
            type: String,
            values: ["success", "info", "warning", "danger", ""],
            default: ""
        },
        hit: Boolean,
        disableTransitions: Boolean,
        color: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            values: ne,
            default: ""
        },
        effect: {
            type: String,
            values: ["dark", "light", "plain"],
            default: "light"
        },
        round: Boolean
    }),
    we = {
        close: e => e instanceof MouseEvent,
        click: e => e instanceof MouseEvent
    },
    Le = e({
        name: "ElTag"
    });
const Ie = Z(Y(e({ ...Le,
    props: Oe,
    emits: we,
    setup(e, {
        emit: h
    }) {
        const f = e,
            b = se(),
            g = ie("tag"),
            y = t((() => {
                const {
                    type: e,
                    hit: t,
                    effect: l,
                    closable: o,
                    round: a
                } = f;
                return [g.b(), g.is("closable", o), g.m(e), g.m(b.value), g.m(l), g.is("hit", t), g.is("round", a)]
            })),
            C = e => {
                h("close", e)
            },
            S = e => {
                h("click", e)
            };
        return (e, t) => e.disableTransitions ? (l(), o("span", {
            key: 0,
            class: s(i(y)),
            style: v({
                backgroundColor: e.color
            }),
            onClick: S
        }, [a("span", {
            class: s(i(g).e("content"))
        }, [n(e.$slots, "default")], 2), e.closable ? (l(), r(i(X), {
            key: 0,
            class: s(i(g).e("close")),
            onClick: c(C, ["stop"])
        }, {
            default: u((() => [p(i(te))])),
            _: 1
        }, 8, ["class", "onClick"])) : d("v-if", !0)], 6)) : (l(), r(m, {
            key: 1,
            name: `${i(g).namespace.value}-zoom-in-center`,
            appear: ""
        }, {
            default: u((() => [a("span", {
                class: s(i(y)),
                style: v({
                    backgroundColor: e.color
                }),
                onClick: S
            }, [a("span", {
                class: s(i(g).e("content"))
            }, [n(e.$slots, "default")], 2), e.closable ? (l(), r(i(X), {
                key: 0,
                class: s(i(g).e("close")),
                onClick: c(C, ["stop"])
            }, {
                default: u((() => [p(i(te))])),
                _: 1
            }, 8, ["class", "onClick"])) : d("v-if", !0)], 6)])),
            _: 3
        }, 8, ["name"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]
]));
var ke = Y(e({
    name: "ElOption",
    componentName: "ElOption",
    props: {
        value: {
            required: !0,
            type: [String, Number, Boolean, Object]
        },
        label: [String, Number],
        created: Boolean,
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const l = ie("select"),
            o = y({
                index: -1,
                groupDisabled: !1,
                visible: !0,
                hitState: !1,
                hover: !1
            }),
            {
                currentLabel: a,
                itemSelected: n,
                isDisabled: s,
                select: r,
                hoverItem: u
            } = function(e, l) {
                const o = h("ElSelect"),
                    a = h("ElSelectGroup", {
                        disabled: !1
                    }),
                    n = t((() => "[object object]" === Object.prototype.toString.call(e.value).toLowerCase())),
                    s = t((() => o.props.multiple ? v(o.props.modelValue, e.value) : m(e.value, o.props.modelValue))),
                    r = t((() => {
                        if (o.props.multiple) {
                            const e = o.props.modelValue || [];
                            return !s.value && e.length >= o.props.multipleLimit && o.props.multipleLimit > 0
                        }
                        return !1
                    })),
                    u = t((() => e.label || (n.value ? "" : e.value))),
                    p = t((() => e.value || e.label || "")),
                    c = t((() => e.disabled || l.groupDisabled || r.value)),
                    d = g(),
                    v = (e = [], t) => {
                        if (n.value) {
                            const l = o.props.valueKey;
                            return e && e.some((e => f(re(e, l)) === re(t, l)))
                        }
                        return e && e.includes(t)
                    },
                    m = (e, t) => {
                        if (n.value) {
                            const {
                                valueKey: l
                            } = o.props;
                            return re(e, l) === re(t, l)
                        }
                        return e === t
                    };
                b((() => u.value), (() => {
                    e.created || o.props.remote || o.setSelected()
                })), b((() => e.value), ((t, l) => {
                    const {
                        remote: a,
                        valueKey: n
                    } = o.props;
                    if (Object.is(t, l) || (o.onOptionDestroy(l, d.proxy), o.onOptionCreate(d.proxy)), !e.created && !a) {
                        if (n && "object" == typeof t && "object" == typeof l && t[n] === l[n]) return;
                        o.setSelected()
                    }
                })), b((() => a.disabled), (() => {
                    l.groupDisabled = a.disabled
                }), {
                    immediate: !0
                });
                const {
                    queryChange: y
                } = f(o);
                return b(y, (t => {
                    const {
                        query: a
                    } = i(t), n = new RegExp(ue(a), "i");
                    l.visible = n.test(u.value) || e.created, l.visible || o.filteredOptionsCount--
                })), {
                    select: o,
                    currentLabel: u,
                    currentValue: p,
                    itemSelected: s,
                    isDisabled: c,
                    hoverItem: () => {
                        e.disabled || a.disabled || (o.hoverIndex = o.optionsArray.indexOf(d.proxy))
                    }
                }
            }(e, o),
            {
                visible: p,
                hover: c
            } = C(o),
            d = g().proxy;
        return r.onOptionCreate(d), S((() => {
            const e = d.value,
                {
                    selected: t
                } = r,
                l = (r.props.multiple ? t : [t]).some((e => e.value === d.value));
            x((() => {
                r.cachedOptions.get(e) !== d || l || r.cachedOptions.delete(e)
            })), r.onOptionDestroy(e, d)
        })), {
            ns: l,
            currentLabel: a,
            itemSelected: n,
            isDisabled: s,
            select: r,
            hoverItem: u,
            visible: p,
            hover: c,
            selectOptionClick: function() {
                !0 !== e.disabled && !0 !== o.groupDisabled && r.handleOptionSelect(d, !0)
            },
            states: o
        }
    }
}), [
    ["render", function(e, t, i, r, u, p) {
        return O((l(), o("li", {
            class: s([e.ns.be("dropdown", "item"), e.ns.is("disabled", e.isDisabled), {
                selected: e.itemSelected,
                hover: e.hover
            }]),
            onMouseenter: t[0] || (t[0] = (...t) => e.hoverItem && e.hoverItem(...t)),
            onClick: t[1] || (t[1] = c(((...t) => e.selectOptionClick && e.selectOptionClick(...t)), ["stop"]))
        }, [n(e.$slots, "default", {}, (() => [a("span", null, L(e.currentLabel), 1)]))], 34)), [
            [w, e.visible]
        ])
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]
]);
const Te = e({
    name: "ElSelectDropdown",
    componentName: "ElSelectDropdown",
    setup() {
        const e = h("ElSelect"),
            l = ie("select"),
            o = t((() => e.props.popperClass)),
            a = t((() => e.props.multiple)),
            n = t((() => e.props.fitInputWidth)),
            s = I("");

        function i() {
            var t;
            s.value = `${null==(t=e.selectWrapper)?void 0:t.offsetWidth}px`
        }
        return k((() => {
            i(), T(e.selectWrapper, i)
        })), {
            ns: l,
            minWidth: s,
            popperClass: o,
            isMultiple: a,
            isFitInputWidth: n
        }
    }
});
const Me = (e, l, o) => {
        const {
            t: a
        } = pe(), n = ie("select");
        ce({
            from: "suffixTransition",
            replacement: "override style scheme",
            version: "2.3.0",
            scope: "props",
            ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
        }, t((() => !1 === e.suffixTransition)));
        const s = I(null),
            i = I(null),
            r = I(null),
            u = I(null),
            p = I(null),
            c = I(null),
            d = I(-1),
            v = M({
                query: ""
            }),
            m = M(""),
            {
                form: h,
                formItem: g
            } = de(),
            y = t((() => !e.filterable || e.multiple || !l.visible)),
            C = t((() => e.disabled || (null == h ? void 0 : h.disabled))),
            S = t((() => {
                const t = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : void 0 !== e.modelValue && null !== e.modelValue && "" !== e.modelValue;
                return e.clearable && !C.value && l.inputHovering && t
            })),
            O = t((() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon)),
            w = t((() => n.is("reverse", O.value && l.visible && e.suffixTransition))),
            L = t((() => e.remote ? 300 : 0)),
            k = t((() => e.loading ? e.loadingText || a("el.select.loading") : (!e.remote || "" !== l.query || 0 !== l.options.size) && (e.filterable && l.query && l.options.size > 0 && 0 === l.filteredOptionsCount ? e.noMatchText || a("el.select.noMatch") : 0 === l.options.size ? e.noDataText || a("el.select.noData") : null))),
            T = t((() => Array.from(l.options.values()))),
            q = t((() => Array.from(l.cachedOptions.values()))),
            D = t((() => {
                const t = T.value.filter((e => !e.created)).some((e => e.currentLabel === l.query));
                return e.filterable && e.allowCreate && "" !== l.query && !t
            })),
            W = se(),
            F = t((() => ["small"].includes(W.value) ? "small" : "default")),
            j = t({
                get: () => l.visible && !1 !== k.value,
                set(e) {
                    l.visible = e
                }
            });
        b([() => C.value, () => W.value, () => null == h ? void 0 : h.size], (() => {
            x((() => {
                K()
            }))
        })), b((() => e.placeholder), (e => {
            l.cachedPlaceHolder = l.currentPlaceholder = e
        })), b((() => e.modelValue), ((t, o) => {
            e.multiple && (K(), t && t.length > 0 || i.value && "" !== l.query ? l.currentPlaceholder = "" : l.currentPlaceholder = l.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (l.query = "", A(l.query))), $(), e.filterable && !e.multiple && (l.inputLength = 20), !ge(t, o) && e.validateEvent && (null == g || g.validate("change").catch((e => ve(e))))
        }), {
            flush: "post",
            deep: !0
        }), b((() => l.visible), (t => {
            var a, n, s;
            t ? (null == (n = null == (a = r.value) ? void 0 : a.updatePopper) || n.call(a), e.filterable && (l.filteredOptionsCount = l.optionsCount, l.query = e.remote ? "" : l.selectedLabel, e.multiple ? null == (s = i.value) || s.focus() : l.selectedLabel && (l.currentPlaceholder = `${l.selectedLabel}`, l.selectedLabel = ""), A(l.query), e.multiple || e.remote || (v.value.query = "", B(v), B(m)))) : (e.filterable && (E(e.filterMethod) && e.filterMethod(), E(e.remoteMethod) && e.remoteMethod()), i.value && i.value.blur(), l.query = "", l.previousQuery = null, l.selectedLabel = "", l.inputLength = 20, l.menuVisibleOnFocus = !1, Q(), x((() => {
                i.value && "" === i.value.value && 0 === l.selected.length && (l.currentPlaceholder = l.cachedPlaceHolder)
            })), e.multiple || (l.selected && (e.filterable && e.allowCreate && l.createdSelected && l.createdLabel ? l.selectedLabel = l.createdLabel : l.selectedLabel = l.selected.currentLabel, e.filterable && (l.query = l.selectedLabel)), e.filterable && (l.currentPlaceholder = l.cachedPlaceHolder))), o.emit("visible-change", t)
        })), b((() => l.options.entries()), (() => {
            var t, o, a;
            if (!V) return;
            null == (o = null == (t = r.value) ? void 0 : t.updatePopper) || o.call(t), e.multiple && K();
            const n = (null == (a = p.value) ? void 0 : a.querySelectorAll("input")) || [];
            Array.from(n).includes(document.activeElement) || $(), e.defaultFirstOption && (e.filterable || e.remote) && l.filteredOptionsCount && H()
        }), {
            flush: "post"
        }), b((() => l.hoverIndex), (e => {
            d.value = "number" == typeof e && e > -1 && T.value[e] || {}, T.value.forEach((e => {
                e.hover = d.value === e
            }))
        }));
        const K = () => {
                e.collapseTags && !e.filterable || x((() => {
                    var e, t;
                    if (!s.value) return;
                    const o = s.value.$el.querySelector("input"),
                        a = u.value,
                        n = (i = W.value || (null == h ? void 0 : h.size), ae[i || "default"]);
                    var i;
                    o.style.height = (0 === l.selected.length ? n : Math.max(a ? a.clientHeight + (a.clientHeight > n ? 6 : 0) : 0, n)) - 2 + "px", l.tagInMultiLine = Number.parseFloat(o.style.height) >= n, l.visible && !1 !== k.value && (null == (t = null == (e = r.value) ? void 0 : e.updatePopper) || t.call(e))
                }))
            },
            A = async t => {
                l.previousQuery === t || l.isOnComposition || (null !== l.previousQuery || "function" != typeof e.filterMethod && "function" != typeof e.remoteMethod ? (l.previousQuery = t, x((() => {
                    var e, t;
                    l.visible && (null == (t = null == (e = r.value) ? void 0 : e.updatePopper) || t.call(e))
                })), l.hoverIndex = -1, e.multiple && e.filterable && x((() => {
                    const t = 15 * i.value.value.length + 20;
                    l.inputLength = e.collapseTags ? Math.min(50, t) : t, _(), K()
                })), e.remote && "function" == typeof e.remoteMethod ? (l.hoverIndex = -1, e.remoteMethod(t)) : "function" == typeof e.filterMethod ? (e.filterMethod(t), B(m)) : (l.filteredOptionsCount = l.optionsCount, v.value.query = t, B(v), B(m)), e.defaultFirstOption && (e.filterable || e.remote) && l.filteredOptionsCount && (await x(), H())) : l.previousQuery = t)
            },
            _ = () => {
                "" !== l.currentPlaceholder && (l.currentPlaceholder = i.value.value ? "" : l.cachedPlaceHolder)
            },
            H = () => {
                const e = T.value.filter((e => e.visible && !e.disabled && !e.states.groupDisabled)),
                    t = e.find((e => e.created)),
                    o = e[0];
                l.hoverIndex = ee(T.value, t || o)
            },
            $ = () => {
                var t;
                if (!e.multiple) {
                    const o = R(e.modelValue);
                    return (null == (t = o.props) ? void 0 : t.created) ? (l.createdLabel = o.props.value, l.createdSelected = !0) : l.createdSelected = !1, l.selectedLabel = o.currentLabel, l.selected = o, void(e.filterable && (l.query = l.selectedLabel))
                }
                l.selectedLabel = "";
                const o = [];
                Array.isArray(e.modelValue) && e.modelValue.forEach((e => {
                    o.push(R(e))
                })), l.selected = o, x((() => {
                    K()
                }))
            },
            R = t => {
                let o;
                const a = "object" === P(t).toLowerCase(),
                    n = "null" === P(t).toLowerCase(),
                    s = "undefined" === P(t).toLowerCase();
                for (let r = l.cachedOptions.size - 1; r >= 0; r--) {
                    const l = q.value[r];
                    if (a ? re(l.value, e.valueKey) === re(t, e.valueKey) : l.value === t) {
                        o = {
                            value: t,
                            currentLabel: l.currentLabel,
                            isDisabled: l.isDisabled
                        };
                        break
                    }
                }
                if (o) return o;
                const i = {
                    value: t,
                    currentLabel: a ? t.label : n || s ? "" : t
                };
                return e.multiple && (i.hitState = !1), i
            },
            Q = () => {
                setTimeout((() => {
                    const t = e.valueKey;
                    e.multiple ? l.selected.length > 0 ? l.hoverIndex = Math.min.apply(null, l.selected.map((e => T.value.findIndex((l => re(l, t) === re(e, t)))))) : l.hoverIndex = -1 : l.hoverIndex = T.value.findIndex((e => ue(e) === ue(l.selected)))
                }), 300)
            },
            G = () => {
                var e;
                l.inputWidth = null == (e = s.value) ? void 0 : e.$el.getBoundingClientRect().width
            },
            U = ye((() => {
                e.filterable && l.query !== l.selectedLabel && (l.query = l.selectedLabel, A(l.query))
            }), L.value),
            J = ye((e => {
                A(e.target.value)
            }), L.value),
            X = t => {
                ge(e.modelValue, t) || o.emit(he, t)
            },
            Y = t => {
                t.stopPropagation();
                const a = e.multiple ? [] : "";
                if ("string" != typeof a)
                    for (const e of l.selected) e.isDisabled && a.push(e.value);
                o.emit(me, a), X(a), l.hoverIndex = -1, l.visible = !1, o.emit("clear")
            },
            Z = (t, a) => {
                var n;
                if (e.multiple) {
                    const a = (e.modelValue || []).slice(),
                        s = ee(a, t.value);
                    s > -1 ? a.splice(s, 1) : (e.multipleLimit <= 0 || a.length < e.multipleLimit) && a.push(t.value), o.emit(me, a), X(a), t.created && (l.query = "", A(""), l.inputLength = 20), e.filterable && (null == (n = i.value) || n.focus())
                } else o.emit(me, t.value), X(t.value), l.visible = !1;
                l.isSilentBlur = a, te(), l.visible || x((() => {
                    le(t)
                }))
            },
            ee = (t = [], l) => {
                if (!z(l)) return t.indexOf(l);
                const o = e.valueKey;
                let a = -1;
                return t.some(((e, t) => f(re(e, o)) === re(l, o) && (a = t, !0))), a
            },
            te = () => {
                l.softFocus = !0;
                const e = i.value || s.value;
                e && (null == e || e.focus())
            },
            le = e => {
                var t, l, o, a, s;
                const i = Array.isArray(e) ? e[0] : e;
                let u = null;
                if (null == i ? void 0 : i.value) {
                    const e = T.value.filter((e => e.value === i.value));
                    e.length > 0 && (u = e[0].$el)
                }
                if (r.value && u) {
                    const e = null == (a = null == (o = null == (l = null == (t = r.value) ? void 0 : t.popperRef) ? void 0 : l.contentRef) ? void 0 : o.querySelector) ? void 0 : a.call(o, `.${n.be("dropdown","wrap")}`);
                    e && fe(e, u)
                }
                null == (s = c.value) || s.handleScroll()
            },
            oe = e => {
                if (!Array.isArray(l.selected)) return;
                const t = l.selected[l.selected.length - 1];
                return t ? !0 === e || !1 === e ? (t.hitState = e, e) : (t.hitState = !t.hitState, t.hitState) : void 0
            },
            ne = e => {
                var t;
                e && !l.mouseEnter || C.value || (l.menuVisibleOnFocus ? l.menuVisibleOnFocus = !1 : r.value && r.value.isFocusInsideContent() || (l.visible = !l.visible), l.visible && (null == (t = i.value || s.value) || t.focus()))
            },
            ue = t => z(t.value) ? re(t.value, e.valueKey) : t.value,
            Ce = t((() => T.value.filter((e => e.visible)).every((e => e.disabled)))),
            Se = e => {
                if (l.visible) {
                    if (0 !== l.options.size && 0 !== l.filteredOptionsCount && !l.isOnComposition && !Ce.value) {
                        "next" === e ? (l.hoverIndex++, l.hoverIndex === l.options.size && (l.hoverIndex = 0)) : "prev" === e && (l.hoverIndex--, l.hoverIndex < 0 && (l.hoverIndex = l.options.size - 1));
                        const t = T.value[l.hoverIndex];
                        !0 !== t.disabled && !0 !== t.states.groupDisabled && t.visible || Se(e), x((() => le(d.value)))
                    }
                } else l.visible = !0
            };
        return {
            optionsArray: T,
            selectSize: W,
            handleResize: () => {
                var t, l;
                G(), null == (l = null == (t = r.value) ? void 0 : t.updatePopper) || l.call(t), e.multiple && !e.filterable && K()
            },
            debouncedOnInputChange: U,
            debouncedQueryChange: J,
            deletePrevTag: t => {
                if (t.target.value.length <= 0 && !oe()) {
                    const t = e.modelValue.slice();
                    t.pop(), o.emit(me, t), X(t)
                }
                1 === t.target.value.length && 0 === e.modelValue.length && (l.currentPlaceholder = l.cachedPlaceHolder)
            },
            deleteTag: (t, a) => {
                const n = l.selected.indexOf(a);
                if (n > -1 && !C.value) {
                    const t = e.modelValue.slice();
                    t.splice(n, 1), o.emit(me, t), X(t), o.emit("remove-tag", a.value)
                }
                t.stopPropagation()
            },
            deleteSelected: Y,
            handleOptionSelect: Z,
            scrollToOption: le,
            readonly: y,
            resetInputHeight: K,
            showClose: S,
            iconComponent: O,
            iconReverse: w,
            showNewOption: D,
            collapseTagSize: F,
            setSelected: $,
            managePlaceholder: _,
            selectDisabled: C,
            emptyText: k,
            toggleLastOptionHitState: oe,
            resetInputState: e => {
                e.code !== be.backspace && oe(!1), l.inputLength = 15 * i.value.value.length + 20, K()
            },
            handleComposition: e => {
                const t = e.target.value;
                if ("compositionend" === e.type) l.isOnComposition = !1, x((() => A(t)));
                else {
                    const e = t[t.length - 1] || "";
                    l.isOnComposition = !N(e)
                }
            },
            onOptionCreate: e => {
                l.optionsCount++, l.filteredOptionsCount++, l.options.set(e.value, e), l.cachedOptions.set(e.value, e)
            },
            onOptionDestroy: (e, t) => {
                l.options.get(e) === t && (l.optionsCount--, l.filteredOptionsCount--, l.options.delete(e))
            },
            handleMenuEnter: () => {
                x((() => le(l.selected)))
            },
            handleFocus: t => {
                l.softFocus ? l.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !l.visible && (l.menuVisibleOnFocus = !0), l.visible = !0), o.emit("focus", t))
            },
            blur: () => {
                var e;
                l.visible = !1, null == (e = s.value) || e.blur()
            },
            handleBlur: e => {
                x((() => {
                    l.isSilentBlur ? l.isSilentBlur = !1 : o.emit("blur", e)
                })), l.softFocus = !1
            },
            handleClearClick: e => {
                Y(e)
            },
            handleClose: () => {
                l.visible = !1
            },
            handleKeydownEscape: e => {
                l.visible && (e.preventDefault(), e.stopPropagation(), l.visible = !1)
            },
            toggleMenu: ne,
            selectOption: () => {
                l.visible ? T.value[l.hoverIndex] && Z(T.value[l.hoverIndex], void 0) : ne()
            },
            getValueKey: ue,
            navigateOptions: Se,
            dropMenuVisible: j,
            queryChange: v,
            groupQueryChange: m,
            reference: s,
            input: i,
            tooltipRef: r,
            tags: u,
            selectWrapper: p,
            scrollbar: c,
            handleMouseEnter: () => {
                l.mouseEnter = !0
            },
            handleMouseLeave: () => {
                l.mouseEnter = !1
            }
        }
    },
    Ee = e({
        name: "ElSelect",
        componentName: "ElSelect",
        components: {
            ElInput: G,
            ElSelectMenu: Y(Te, [
                ["render", function(e, t, a, i, r, u) {
                    return l(), o("div", {
                        class: s([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
                        style: v({
                            [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth
                        })
                    }, [n(e.$slots, "default")], 6)
                }],
                ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]
            ]),
            ElOption: ke,
            ElTag: Ie,
            ElScrollbar: U,
            ElTooltip: $,
            ElIcon: X
        },
        directives: {
            ClickOutside: Ce
        },
        props: {
            name: String,
            id: String,
            modelValue: {
                type: [Array, String, Number, Boolean, Object],
                default: void 0
            },
            autocomplete: {
                type: String,
                default: "off"
            },
            automaticDropdown: Boolean,
            size: {
                type: String,
                validator: Se
            },
            effect: {
                type: String,
                default: "light"
            },
            disabled: Boolean,
            clearable: Boolean,
            filterable: Boolean,
            allowCreate: Boolean,
            loading: Boolean,
            popperClass: {
                type: String,
                default: ""
            },
            remote: Boolean,
            loadingText: String,
            noMatchText: String,
            noDataText: String,
            remoteMethod: Function,
            filterMethod: Function,
            multiple: Boolean,
            multipleLimit: {
                type: Number,
                default: 0
            },
            placeholder: {
                type: String
            },
            defaultFirstOption: Boolean,
            reserveKeyword: {
                type: Boolean,
                default: !0
            },
            valueKey: {
                type: String,
                default: "value"
            },
            collapseTags: Boolean,
            collapseTagsTooltip: {
                type: Boolean,
                default: !1
            },
            teleported: R.teleported,
            persistent: {
                type: Boolean,
                default: !0
            },
            clearIcon: {
                type: xe,
                default: le
            },
            fitInputWidth: {
                type: Boolean,
                default: !1
            },
            suffixIcon: {
                type: xe,
                default: oe
            },
            tagType: { ...Oe.type,
                default: "info"
            },
            validateEvent: {
                type: Boolean,
                default: !0
            },
            remoteShowSuffix: {
                type: Boolean,
                default: !1
            },
            suffixTransition: {
                type: Boolean,
                default: !0
            },
            placement: {
                type: String,
                values: Q,
                default: "bottom-start"
            }
        },
        emits: [me, he, "remove-tag", "clear", "visible-change", "focus", "blur"],
        setup(e, l) {
            const o = ie("select"),
                a = ie("input"),
                {
                    t: n
                } = pe(),
                s = function(e) {
                    const {
                        t: t
                    } = pe();
                    return y({
                        options: new Map,
                        cachedOptions: new Map,
                        createdLabel: null,
                        createdSelected: !1,
                        selected: e.multiple ? [] : {},
                        inputLength: 20,
                        inputWidth: 0,
                        optionsCount: 0,
                        filteredOptionsCount: 0,
                        visible: !1,
                        softFocus: !1,
                        selectedLabel: "",
                        hoverIndex: -1,
                        query: "",
                        previousQuery: null,
                        inputHovering: !1,
                        cachedPlaceHolder: "",
                        currentPlaceholder: t("el.select.placeholder"),
                        menuVisibleOnFocus: !1,
                        isOnComposition: !1,
                        isSilentBlur: !1,
                        prefixWidth: 11,
                        tagInMultiLine: !1,
                        mouseEnter: !1
                    })
                }(e),
                {
                    optionsArray: r,
                    selectSize: u,
                    readonly: p,
                    handleResize: c,
                    collapseTagSize: d,
                    debouncedOnInputChange: v,
                    debouncedQueryChange: m,
                    deletePrevTag: h,
                    deleteTag: f,
                    deleteSelected: b,
                    handleOptionSelect: g,
                    scrollToOption: S,
                    setSelected: O,
                    resetInputHeight: w,
                    managePlaceholder: L,
                    showClose: I,
                    selectDisabled: M,
                    iconComponent: E,
                    iconReverse: B,
                    showNewOption: V,
                    emptyText: P,
                    toggleLastOptionHitState: z,
                    resetInputState: D,
                    handleComposition: W,
                    onOptionCreate: F,
                    onOptionDestroy: j,
                    handleMenuEnter: K,
                    handleFocus: A,
                    blur: _,
                    handleBlur: H,
                    handleClearClick: $,
                    handleClose: R,
                    handleKeydownEscape: Q,
                    toggleMenu: N,
                    selectOption: G,
                    getValueKey: U,
                    navigateOptions: J,
                    dropMenuVisible: X,
                    reference: Y,
                    input: Z,
                    tooltipRef: ee,
                    tags: te,
                    selectWrapper: le,
                    scrollbar: oe,
                    queryChange: ae,
                    groupQueryChange: ne,
                    handleMouseEnter: se,
                    handleMouseLeave: re
                } = Me(e, s, l),
                {
                    focus: ue
                } = (ce = Y, {
                    focus: () => {
                        var e, t;
                        null == (t = null == (e = ce.value) ? void 0 : e.focus) || t.call(e)
                    }
                });
            var ce;
            const {
                inputWidth: de,
                selected: ve,
                inputLength: he,
                filteredOptionsCount: fe,
                visible: be,
                softFocus: ge,
                selectedLabel: ye,
                hoverIndex: Ce,
                query: Se,
                inputHovering: xe,
                currentPlaceholder: Oe,
                menuVisibleOnFocus: we,
                isOnComposition: Le,
                isSilentBlur: Ie,
                options: ke,
                cachedOptions: Te,
                optionsCount: Ee,
                prefixWidth: Be,
                tagInMultiLine: Ve
            } = C(s), Pe = t((() => {
                const t = [o.b()],
                    l = i(u);
                return l && t.push(o.m(l)), e.disabled && t.push(o.m("disabled")), t
            })), ze = t((() => ({
                maxWidth: i(de) - 32 + "px",
                width: "100%"
            }))), qe = t((() => ({
                maxWidth: `${i(de)>123?i(de)-123:i(de)-75}px`
            })));
            q("ElSelect", y({
                props: e,
                options: ke,
                optionsArray: r,
                cachedOptions: Te,
                optionsCount: Ee,
                filteredOptionsCount: fe,
                hoverIndex: Ce,
                handleOptionSelect: g,
                onOptionCreate: F,
                onOptionDestroy: j,
                selectWrapper: le,
                selected: ve,
                setSelected: O,
                queryChange: ae,
                groupQueryChange: ne
            })), k((() => {
                s.cachedPlaceHolder = Oe.value = e.placeholder || n("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Oe.value = ""), T(le, c), e.remote && e.multiple && w(), x((() => {
                    const e = Y.value && Y.value.$el;
                    if (e && (de.value = e.getBoundingClientRect().width, l.slots.prefix)) {
                        const t = e.querySelector(`.${a.e("prefix")}`);
                        Be.value = Math.max(t.getBoundingClientRect().width + 5, 30)
                    }
                })), O()
            })), e.multiple && !Array.isArray(e.modelValue) && l.emit(me, []), !e.multiple && Array.isArray(e.modelValue) && l.emit(me, "");
            const De = t((() => {
                var e, t;
                return null == (t = null == (e = ee.value) ? void 0 : e.popperRef) ? void 0 : t.contentRef
            }));
            return {
                tagInMultiLine: Ve,
                prefixWidth: Be,
                selectSize: u,
                readonly: p,
                handleResize: c,
                collapseTagSize: d,
                debouncedOnInputChange: v,
                debouncedQueryChange: m,
                deletePrevTag: h,
                deleteTag: f,
                deleteSelected: b,
                handleOptionSelect: g,
                scrollToOption: S,
                inputWidth: de,
                selected: ve,
                inputLength: he,
                filteredOptionsCount: fe,
                visible: be,
                softFocus: ge,
                selectedLabel: ye,
                hoverIndex: Ce,
                query: Se,
                inputHovering: xe,
                currentPlaceholder: Oe,
                menuVisibleOnFocus: we,
                isOnComposition: Le,
                isSilentBlur: Ie,
                options: ke,
                resetInputHeight: w,
                managePlaceholder: L,
                showClose: I,
                selectDisabled: M,
                iconComponent: E,
                iconReverse: B,
                showNewOption: V,
                emptyText: P,
                toggleLastOptionHitState: z,
                resetInputState: D,
                handleComposition: W,
                handleMenuEnter: K,
                handleFocus: A,
                blur: _,
                handleBlur: H,
                handleClearClick: $,
                handleClose: R,
                handleKeydownEscape: Q,
                toggleMenu: N,
                selectOption: G,
                getValueKey: U,
                navigateOptions: J,
                dropMenuVisible: X,
                focus: ue,
                reference: Y,
                input: Z,
                tooltipRef: ee,
                popperPaneRef: De,
                tags: te,
                selectWrapper: le,
                scrollbar: oe,
                wrapperKls: Pe,
                selectTagsStyle: ze,
                nsSelect: o,
                tagTextStyle: qe,
                handleMouseEnter: se,
                handleMouseLeave: re
            }
        }
    }),
    Be = ["disabled", "autocomplete"],
    Ve = {
        style: {
            height: "100%",
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
        }
    };
var Pe = Y(Ee, [
    ["render", function(e, t, i, h, f, b) {
        const g = D("el-tag"),
            y = D("el-tooltip"),
            C = D("el-icon"),
            S = D("el-input"),
            x = D("el-option"),
            I = D("el-scrollbar"),
            k = D("el-select-menu"),
            T = W("click-outside");
        return O((l(), o("div", {
            ref: "selectWrapper",
            class: s(e.wrapperKls),
            onMouseenter: t[22] || (t[22] = (...t) => e.handleMouseEnter && e.handleMouseEnter(...t)),
            onMouseleave: t[23] || (t[23] = (...t) => e.handleMouseLeave && e.handleMouseLeave(...t)),
            onClick: t[24] || (t[24] = c(((...t) => e.toggleMenu && e.toggleMenu(...t)), ["stop"]))
        }, [p(y, {
            ref: "tooltipRef",
            visible: e.dropMenuVisible,
            placement: e.placement,
            teleported: e.teleported,
            "popper-class": [e.nsSelect.e("popper"), e.popperClass],
            "fallback-placements": ["bottom-start", "top-start", "right", "left"],
            effect: e.effect,
            pure: "",
            trigger: "click",
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            "stop-popper-mouse-event": !1,
            "gpu-acceleration": !1,
            persistent: e.persistent,
            onShow: e.handleMenuEnter
        }, {
            default: u((() => [a("div", {
                class: "select-trigger",
                onMouseenter: t[20] || (t[20] = t => e.inputHovering = !0),
                onMouseleave: t[21] || (t[21] = t => e.inputHovering = !1)
            }, [e.multiple ? (l(), o("div", {
                key: 0,
                ref: "tags",
                class: s(e.nsSelect.e("tags")),
                style: v(e.selectTagsStyle)
            }, [e.collapseTags && e.selected.length ? (l(), o("span", {
                key: 0,
                class: s([e.nsSelect.b("tags-wrapper"), {
                    "has-prefix": e.prefixWidth && e.selected.length
                }])
            }, [p(g, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = t => e.deleteTag(t, e.selected[0]))
            }, {
                default: u((() => [a("span", {
                    class: s(e.nsSelect.e("tags-text")),
                    style: v(e.tagTextStyle)
                }, L(e.selected[0].currentLabel), 7)])),
                _: 1
            }, 8, ["closable", "size", "hit", "type"]), e.selected.length > 1 ? (l(), r(g, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
            }, {
                default: u((() => [e.collapseTagsTooltip ? (l(), r(y, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                }, {
                    default: u((() => [a("span", {
                        class: s(e.nsSelect.e("tags-text"))
                    }, "+ " + L(e.selected.length - 1), 3)])),
                    content: u((() => [a("div", {
                        class: s(e.nsSelect.e("collapse-tags"))
                    }, [(l(!0), o(F, null, j(e.selected.slice(1), ((t, n) => (l(), o("div", {
                        key: n,
                        class: s(e.nsSelect.e("collapse-tag"))
                    }, [(l(), r(g, {
                        key: e.getValueKey(t),
                        class: "in-tooltip",
                        closable: !e.selectDisabled && !t.isDisabled,
                        size: e.collapseTagSize,
                        hit: t.hitState,
                        type: e.tagType,
                        "disable-transitions": "",
                        style: {
                            margin: "2px"
                        },
                        onClose: l => e.deleteTag(l, t)
                    }, {
                        default: u((() => [a("span", {
                            class: s(e.nsSelect.e("tags-text")),
                            style: v({
                                maxWidth: e.inputWidth - 75 + "px"
                            })
                        }, L(t.currentLabel), 7)])),
                        _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))], 2)))), 128))], 2)])),
                    _: 1
                }, 8, ["disabled", "effect", "teleported"])) : (l(), o("span", {
                    key: 1,
                    class: s(e.nsSelect.e("tags-text"))
                }, "+ " + L(e.selected.length - 1), 3))])),
                _: 1
            }, 8, ["size", "type"])) : d("v-if", !0)], 2)) : d("v-if", !0), d(" <div> "), e.collapseTags ? d("v-if", !0) : (l(), r(m, {
                key: 1,
                onAfterLeave: e.resetInputHeight
            }, {
                default: u((() => [a("span", {
                    class: s([e.nsSelect.b("tags-wrapper"), {
                        "has-prefix": e.prefixWidth && e.selected.length
                    }])
                }, [(l(!0), o(F, null, j(e.selected, (t => (l(), r(g, {
                    key: e.getValueKey(t),
                    closable: !e.selectDisabled && !t.isDisabled,
                    size: e.collapseTagSize,
                    hit: t.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: l => e.deleteTag(l, t)
                }, {
                    default: u((() => [a("span", {
                        class: s(e.nsSelect.e("tags-text")),
                        style: v({
                            maxWidth: e.inputWidth - 75 + "px"
                        })
                    }, L(t.currentLabel), 7)])),
                    _: 2
                }, 1032, ["closable", "size", "hit", "type", "onClose"])))), 128))], 2)])),
                _: 1
            }, 8, ["onAfterLeave"])), d(" </div> "), e.filterable ? O((l(), o("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[1] || (t[1] = t => e.query = t),
                type: "text",
                class: s([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: v({
                    marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                    flexGrow: 1,
                    width: e.inputLength / (e.inputWidth - 32) + "%",
                    maxWidth: e.inputWidth - 42 + "px"
                }),
                onFocus: t[2] || (t[2] = (...t) => e.handleFocus && e.handleFocus(...t)),
                onBlur: t[3] || (t[3] = (...t) => e.handleBlur && e.handleBlur(...t)),
                onKeyup: t[4] || (t[4] = (...t) => e.managePlaceholder && e.managePlaceholder(...t)),
                onKeydown: [t[5] || (t[5] = (...t) => e.resetInputState && e.resetInputState(...t)), t[6] || (t[6] = K(c((t => e.navigateOptions("next")), ["prevent"]), ["down"])), t[7] || (t[7] = K(c((t => e.navigateOptions("prev")), ["prevent"]), ["up"])), t[8] || (t[8] = K(((...t) => e.handleKeydownEscape && e.handleKeydownEscape(...t)), ["esc"])), t[9] || (t[9] = K(c(((...t) => e.selectOption && e.selectOption(...t)), ["stop", "prevent"]), ["enter"])), t[10] || (t[10] = K(((...t) => e.deletePrevTag && e.deletePrevTag(...t)), ["delete"])), t[11] || (t[11] = K((t => e.visible = !1), ["tab"]))],
                onCompositionstart: t[12] || (t[12] = (...t) => e.handleComposition && e.handleComposition(...t)),
                onCompositionupdate: t[13] || (t[13] = (...t) => e.handleComposition && e.handleComposition(...t)),
                onCompositionend: t[14] || (t[14] = (...t) => e.handleComposition && e.handleComposition(...t)),
                onInput: t[15] || (t[15] = (...t) => e.debouncedQueryChange && e.debouncedQueryChange(...t))
            }, null, 46, Be)), [
                [A, e.query]
            ]) : d("v-if", !0)], 6)) : d("v-if", !0), p(S, {
                id: e.id,
                ref: "reference",
                modelValue: e.selectedLabel,
                "onUpdate:modelValue": t[16] || (t[16] = t => e.selectedLabel = t),
                type: "text",
                placeholder: e.currentPlaceholder,
                name: e.name,
                autocomplete: e.autocomplete,
                size: e.selectSize,
                disabled: e.selectDisabled,
                readonly: e.readonly,
                "validate-event": !1,
                class: s([e.nsSelect.is("focus", e.visible)]),
                tabindex: e.multiple && e.filterable ? -1 : void 0,
                onFocus: e.handleFocus,
                onBlur: e.handleBlur,
                onInput: e.debouncedOnInputChange,
                onPaste: e.debouncedOnInputChange,
                onCompositionstart: e.handleComposition,
                onCompositionupdate: e.handleComposition,
                onCompositionend: e.handleComposition,
                onKeydown: [t[17] || (t[17] = K(c((t => e.navigateOptions("next")), ["stop", "prevent"]), ["down"])), t[18] || (t[18] = K(c((t => e.navigateOptions("prev")), ["stop", "prevent"]), ["up"])), K(c(e.selectOption, ["stop", "prevent"]), ["enter"]), K(e.handleKeydownEscape, ["esc"]), t[19] || (t[19] = K((t => e.visible = !1), ["tab"]))]
            }, _({
                suffix: u((() => [e.iconComponent && !e.showClose ? (l(), r(C, {
                    key: 0,
                    class: s([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                    default: u((() => [(l(), r(H(e.iconComponent)))])),
                    _: 1
                }, 8, ["class"])) : d("v-if", !0), e.showClose && e.clearIcon ? (l(), r(C, {
                    key: 1,
                    class: s([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                    onClick: e.handleClearClick
                }, {
                    default: u((() => [(l(), r(H(e.clearIcon)))])),
                    _: 1
                }, 8, ["class", "onClick"])) : d("v-if", !0)])),
                _: 2
            }, [e.$slots.prefix ? {
                name: "prefix",
                fn: u((() => [a("div", Ve, [n(e.$slots, "prefix")])]))
            } : void 0]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])], 32)])),
            content: u((() => [p(k, null, {
                default: u((() => [O(p(I, {
                    ref: "scrollbar",
                    tag: "ul",
                    "wrap-class": e.nsSelect.be("dropdown", "wrap"),
                    "view-class": e.nsSelect.be("dropdown", "list"),
                    class: s([e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && 0 === e.filteredOptionsCount)])
                }, {
                    default: u((() => [e.showNewOption ? (l(), r(x, {
                        key: 0,
                        value: e.query,
                        created: !0
                    }, null, 8, ["value"])) : d("v-if", !0), n(e.$slots, "default")])),
                    _: 3
                }, 8, ["wrap-class", "view-class", "class"]), [
                    [w, e.options.size > 0 && !e.loading]
                ]), e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && 0 === e.options.size) ? (l(), o(F, {
                    key: 0
                }, [e.$slots.empty ? n(e.$slots, "empty", {
                    key: 0
                }) : (l(), o("p", {
                    key: 1,
                    class: s(e.nsSelect.be("dropdown", "empty"))
                }, L(e.emptyText), 3))], 64)) : d("v-if", !0)])),
                _: 3
            })])),
            _: 3
        }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])], 34)), [
            [T, e.handleClose, e.popperPaneRef]
        ])
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]
]);
var ze = Y(e({
    name: "ElOptionGroup",
    componentName: "ElOptionGroup",
    props: {
        label: String,
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = ie("select"),
            l = I(!0),
            o = g(),
            a = I([]);
        q("ElSelectGroup", y({ ...C(e)
        }));
        const n = h("ElSelect");
        k((() => {
            a.value = s(o.subTree)
        }));
        const s = e => {
                const t = [];
                return Array.isArray(e.children) && e.children.forEach((e => {
                    var l;
                    e.type && "ElOption" === e.type.name && e.component && e.component.proxy ? t.push(e.component.proxy) : (null == (l = e.children) ? void 0 : l.length) && t.push(...s(e))
                })), t
            },
            {
                groupQueryChange: i
            } = f(n);
        return b(i, (() => {
            l.value = a.value.some((e => !0 === e.visible))
        }), {
            flush: "post"
        }), {
            visible: l,
            ns: t
        }
    }
}), [
    ["render", function(e, t, i, r, u, p) {
        return O((l(), o("ul", {
            class: s(e.ns.be("group", "wrap"))
        }, [a("li", {
            class: s(e.ns.be("group", "title"))
        }, L(e.label), 3), a("li", null, [a("ul", {
            class: s(e.ns.b("group"))
        }, [n(e.$slots, "default")], 2)])], 2)), [
            [w, e.visible]
        ])
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]
]);
const qe = Z(Pe, {
        Option: ke,
        OptionGroup: ze
    }),
    De = ee(ke);
ee(ze);
export {
    qe as E, De as a, Ie as b
};