import {
    al as t
} from "./el-select.e274bb48.js";
const e = (e, n) => {
        if (!t || !e || !n) return !1;
        const o = e.getBoundingClientRect();
        let i;
        return i = n instanceof Element ? n.getBoundingClientRect() : {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0
        }, o.top < i.bottom && o.bottom > i.top && o.right > i.left && o.left < i.right
    },
    n = t => {
        let e = 0,
            n = t;
        for (; n;) e += n.offsetTop, n = n.offsetParent;
        return e
    },
    o = (t, e) => Math.abs(n(t) - n(e)),
    i = t => {
        let e, n;
        return "touchend" === t.type ? (n = t.changedTouches[0].clientY, e = t.changedTouches[0].clientX) : t.type.startsWith("touch") ? (n = t.touches[0].clientY, e = t.touches[0].clientX) : (n = t.clientY, e = t.clientX), {
            clientX: e,
            clientY: n
        }
    };
export {
    o as a, i as g, e as i
};