import {
    l as e
} from "./localforage.2a1ae675.js";
import {
    d as t
} from "./el-select.e274bb48.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
const a = {
    set(a = "", s = "", l) {
        if (l) {
            let m = {
                exp: t().valueOf() + l,
                data: s
            };
            return e.setItem(a, m)
        }
        return e.setItem(a, s)
    },
    async get(a = null, s = !0) {
        let l = await e.getItem(a);
        return l && l.exp && s ? t().valueOf() > l.exp ? (e.removeItem(a), null) : l.data : l && l.exp && !s ? l.data : l
    },
    keys: async () => await e.keys(),
    async getItem(a = null) {
        let s = await e.getItem(a);
        return s && s.exp ? {
            data: s.data,
            isExp: t().valueOf() > s.exp
        } : {
            data: s,
            isExp: !0
        }
    }
};
export {
    a as
    default
};