import {
    b as e
} from "./baseRequest.b881af11.js";
const s = (s = {}, a = 3e3) => e.get("/website/info", {
        params: s,
        timeout: a
    }),
    a = (s = {}) => e.get("/website/use", {
        params: s
    }),
    t = (s = {}) => e.get("/website/list", {
        params: s
    }),
    i = (s = {}) => e.get("/website/delIcon", {
        params: s
    });
export {
    a,
    i as d,
    t as g,
    s as w
};