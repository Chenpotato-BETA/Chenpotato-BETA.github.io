import {
    o as e,
    s as t
} from "./main.354a692e.js";
import {
    M as o
} from "./el-select.e274bb48.js";
e(document, "keydown", (e => {
    let t = e.key,
        n = e.ctrlKey || e.meteKey,
        s = e.ctrlKey || e.altKey;
    o() && (n = e.meteKey, s = e.altKey), ("F12" === t || n && s && "i" === t.toLowerCase()) && (e.preventDefault(), e.stopPropagation())
}));
const n = function() {
    const e = location.search;
    if (!e) return {};
    let t = e.slice(1).split("&"),
        o = {};
    return t.forEach((e => {
        let t = e.split("=");
        o[t[0]] = t[1]
    })), o
}();
n.open && t({
    component: n.open,
    insetType: ""
});