import {
    b as a
} from "./baseRequest.b881af11.js";
const t = (t = {}) => a.get("/itab/version", {
        params: t
    }),
    e = (t = {}) => a.get("/itab/defaultNavConfig", {
        params: t,
        timeout: 2e3
    }),
    s = (t = {}) => a.get("/itab/defaultUnionConfig", {
        params: t,
        timeout: 2e3
    });
export {
    t as a, s as b, e as g
};