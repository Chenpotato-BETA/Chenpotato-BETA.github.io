import {
    ae as e,
    S as t
} from "./el-select.e274bb48.js";
import {
    a as l
} from "./position.8ddd1c03.js";
import {
    t as n
} from "./style.d69d81d7.js";
import {
    g as o
} from "./scroll.4972bdba.js";
import {
    t as i
} from "./throttle.0dfde511.js";
import "./debounce.abbfdaeb.js";
import "./isObject.a01dee34.js";
const s = "ElInfiniteScroll",
    c = {
        delay: {
            type: Number,
            default: 200
        },
        distance: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        immediate: {
            type: Boolean,
            default: !0
        }
    },
    r = (e, t) => Object.entries(c).reduce(((l, [n, o]) => {
        var i, s;
        const {
            type: c,
            default: r
        } = o, a = e.getAttribute(`infinite-scroll-${n}`);
        let d = null != (s = null != (i = t[a]) ? i : a) ? s : r;
        return d = "false" !== d && d, d = c(d), l[n] = Number.isNaN(d) ? r : d, l
    }), {}),
    a = e => {
        const {
            observer: t
        } = e[s];
        t && (t.disconnect(), delete e[s].observer)
    },
    d = (e, t) => {
        const {
            container: n,
            containerEl: o,
            instance: i,
            observer: c,
            lastScrollTop: a
        } = e[s], {
            disabled: d,
            distance: u
        } = r(e, i), {
            clientHeight: b,
            scrollHeight: m,
            scrollTop: f
        } = o, p = f - a;
        if (e[s].lastScrollTop = f, c || d || p < 0) return;
        let v = !1;
        if (n === e) v = m - (b + f) <= u;
        else {
            const {
                clientTop: t,
                scrollHeight: n
            } = e;
            v = f + b >= l(e, o) + t + n - u
        }
        v && t.call(i)
    };

function u(e, t) {
    const {
        containerEl: l,
        instance: n
    } = e[s], {
        disabled: o
    } = r(e, n);
    o || 0 === l.clientHeight || (l.scrollHeight <= l.clientHeight ? t.call(n) : a(e))
}
const b = {
        async mounted(l, c) {
            const {
                instance: a,
                value: b
            } = c;
            e(b) || n(s, "'v-infinite-scroll' binding value must be a function"), await t();
            const {
                delay: m,
                immediate: f
            } = r(l, a), p = o(l, !0), v = p === window ? document.documentElement : p, y = i(d.bind(null, l, b), m);
            if (p) {
                if (l[s] = {
                        instance: a,
                        container: p,
                        containerEl: v,
                        delay: m,
                        cb: b,
                        onScroll: y,
                        lastScrollTop: v.scrollTop
                    }, f) {
                    const e = new MutationObserver(i(u.bind(null, l, b), 50));
                    l[s].observer = e, e.observe(l, {
                        childList: !0,
                        subtree: !0
                    }), u(l, b)
                }
                p.addEventListener("scroll", y)
            }
        },
        unmounted(e) {
            const {
                container: t,
                onScroll: l
            } = e[s];
            null == t || t.removeEventListener("scroll", l), a(e)
        },
        async updated(e) {
            e[s] || await t();
            const {
                containerEl: l,
                cb: n,
                observer: o
            } = e[s];
            l.clientHeight && o && u(e, n)
        },
        install: e => {
            e.directive("InfiniteScroll", b)
        }
    },
    m = b;
export {
    m as ElInfiniteScroll, b as
    default
};