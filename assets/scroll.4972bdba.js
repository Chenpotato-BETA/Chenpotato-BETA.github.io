import {
    g as e
} from "./style.d69d81d7.js";
import {
    al as t
} from "./el-select.e274bb48.js";
const o = (o, r) => {
        if (!t) return !1;
        const n = {
                undefined: "overflow",
                true: "overflow-y",
                false: "overflow-x"
            }[String(r)],
            l = e(o, n);
        return ["scroll", "auto", "overlay"].some((e => l.includes(e)))
    },
    r = (e, r) => {
        if (!t) return;
        let n = e;
        for (; n;) {
            if ([window, document, document.documentElement].includes(n)) return window;
            if (o(n, r)) return n;
            n = n.parentNode
        }
        return n
    };
let n;
const l = e => {
    var o;
    if (!t) return 0;
    if (void 0 !== n) return n;
    const r = document.createElement("div");
    r.className = `${e}-scrollbar__wrap`, r.style.visibility = "hidden", r.style.width = "100px", r.style.position = "absolute", r.style.top = "-9999px", document.body.appendChild(r);
    const l = r.offsetWidth;
    r.style.overflow = "scroll";
    const s = document.createElement("div");
    s.style.width = "100%", r.appendChild(s);
    const i = s.offsetWidth;
    return null == (o = r.parentNode) || o.removeChild(r), n = l - i, n
};

function s(e, o) {
    if (!t) return;
    if (!o) return void(e.scrollTop = 0);
    const r = [];
    let n = o.offsetParent;
    for (; null !== n && e !== n && e.contains(n);) r.push(n), n = n.offsetParent;
    const l = o.offsetTop + r.reduce(((e, t) => e + t.offsetTop), 0),
        s = l + o.offsetHeight,
        i = e.scrollTop,
        d = i + e.clientHeight;
    l < i ? e.scrollTop = l : s > d && (e.scrollTop = s - e.clientHeight)
}
export {
    l as a, r as g, s
};