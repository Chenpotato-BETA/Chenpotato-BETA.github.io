import {
    i as n
} from "./index.176a125e.js";
import {
    al as e
} from "./el-select.e274bb48.js";
const t = new Map;
let o;

function s(e, t) {
    let o = [];
    return Array.isArray(t.arg) ? o = t.arg : n(t.arg) && o.push(t.arg),
        function(n, s) {
            const a = t.instance.popperRef,
                d = n.target,
                i = null == s ? void 0 : s.target,
                r = !t || !t.instance,
                u = !d || !i,
                c = e.contains(d) || e.contains(i),
                l = e === d,
                g = o.length && o.some((n => null == n ? void 0 : n.contains(d))) || o.length && o.includes(i),
                m = a && (a.contains(d) || a.contains(i));
            r || u || c || l || g || m || t.value(n, s)
        }
}
e && (document.addEventListener("mousedown", (n => o = n)), document.addEventListener("mouseup", (n => {
    for (const e of t.values())
        for (const {
                documentHandler: t
            } of e) t(n, o)
})));
const a = {
    beforeMount(n, e) {
        t.has(n) || t.set(n, []), t.get(n).push({
            documentHandler: s(n, e),
            bindingFn: e.value
        })
    },
    updated(n, e) {
        t.has(n) || t.set(n, []);
        const o = t.get(n),
            a = o.findIndex((n => n.bindingFn === e.oldValue)),
            d = {
                documentHandler: s(n, e),
                bindingFn: e.value
            };
        a >= 0 ? o.splice(a, 1, d) : o.push(d)
    },
    unmounted(n) {
        t.delete(n)
    }
};
export {
    a as C
};