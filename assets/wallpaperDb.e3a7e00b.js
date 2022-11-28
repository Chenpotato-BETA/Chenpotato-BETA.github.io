import {
    l as e
} from "./localforage.2a1ae675.js";
import {
    d as a
} from "./el-select.e274bb48.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
var t = e.createInstance({
    name: "wallpaper"
});
const l = {
    set(e = "", l = "", s) {
        if (s) {
            let r = {
                exp: a().valueOf() + s,
                data: l
            };
            return t.setItem(e, r)
        }
        return t.setItem(e, l)
    },
    async get(e = null, l = !0) {
        let s = await t.getItem(e);
        return s && s.exp && l ? a().valueOf() > s.exp ? (t.removeItem(e), null) : s.data : s && s.exp && !l ? s.data : s
    },
    keys: async () => await t.keys(),
    remove: async (e = null) => await t.removeItem(e),
    async getItem(e = null) {
        let l = await t.getItem(e);
        return l && l.exp ? {
            data: l.data,
            isExp: a().valueOf() > l.exp
        } : {
            data: l,
            isExp: !0
        }
    }
};
export {
    l as
    default
};