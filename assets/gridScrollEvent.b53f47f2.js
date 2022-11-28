import {
    G as e,
    u as t,
    H as a,
    aU as i,
    w as l
} from "./el-select.e274bb48.js";
import {
    o as n,
    $ as r
} from "./main.354a692e.js";
import {
    d as s
} from "./debounce.abbfdaeb.js";
import "./isObject.a01dee34.js";
const o = e(),
    u = t();
n(r("#app-main"), "mousewheel", g, !1), n(r("#app-main"), "DOMMouseScroll", g, !1);
let p = 0,
    d = 0,
    c = 0;
const m = s((e => {
        let t = -e.wheelDelta || -e.deltaY || 40 * e.detail,
            i = r(`#app-grid_${a.value}`),
            l = r(`#app-grid_${a.value} .app-grid`),
            n = t < 0 ? "up" : "down";
        if (i.clientHeight >= l.clientHeight) return void b(n);
        i.style.transition = "transform .26s cubic-bezier(0.165, 0.84, 0.44, 1)";
        let s = i.clientHeight - l.clientHeight;
        "down" == n ? (p == s && b(n), p -= d, p < s && (p = s)) : (0 == p && b(n), p += d, p > 0 && (p = 0)), i.style.transform = `translateY(${p}px)`
    }), 150, {
        leading: !0,
        trailing: !1
    }),
    f = s(((e, t) => {
        d = 160 * t, c = 0, m(e)
    }), 30, {
        leading: !0,
        trailing: !1
    });

function g(e) {
    c += 1, f(e, c)
}

function b(e) {
    if (!1 === u.value.sidebar.mouseGroup) return;
    let t = o.value.findIndex((e => e.id == a.value)),
        l = o.value.length - 1;
    "up" == e ? (t--, t < 0 && (t = l)) : (t++, t > l && (t = 0));
    let n = o.value[t].id;
    i(n), v(n)
}

function v(e) {
    let t = r(`#app-grid_${e}`);
    t.style.transition = "transform 0s cubic-bezier(0.165, 0.84, 0.44, 1)", t.style.transform = "translateY(0px)", p = 0
}
l((() => a.value), (e => {
    v(e)
}));