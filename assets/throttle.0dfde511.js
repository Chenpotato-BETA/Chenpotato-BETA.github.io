import {
    d as i
} from "./debounce.abbfdaeb.js";
import {
    a
} from "./isObject.a01dee34.js";

function n(n, e, t) {
    var r = !0,
        o = !0;
    if ("function" != typeof n) throw new TypeError("Expected a function");
    return a(t) && (r = "leading" in t ? !!t.leading : r, o = "trailing" in t ? !!t.trailing : o), i(n, e, {
        leading: r,
        maxWait: e,
        trailing: o
    })
}
export {
    n as t
};