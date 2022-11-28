import {
    as as e,
    O as t,
    g as s,
    o as a,
    t as l,
    J as o,
    b as n,
    K as i,
    L as r,
    i as u,
    e as d,
    p as c,
    U as p,
    j as f,
    h as m,
    q as v,
    k as y,
    x as g,
    n as b,
    T as h,
    a9 as k,
    a5 as w,
    am as E,
    b4 as F,
    w as R,
    ai as x,
    c as S,
    af as T,
    ac as $,
    ar as L,
    ay as C,
    ao as U
} from "./el-select.e274bb48.js";
import {
    b as _,
    d as j,
    E as P,
    _ as O,
    w as D
} from "./index.176a125e.js";
import {
    x as B,
    f as q,
    y as A,
    d as H,
    n as K,
    A as M
} from "./index.4e5ff846.js";
import {
    E as X
} from "./el-progress.3a42d846.js";
import {
    t as z,
    d as N
} from "./style.d69d81d7.js";
import {
    i as W
} from "./focus-trap.e600e472.js";
import {
    m as J
} from "./typescript.72bf8adc.js";
import {
    u as G
} from "./index.14b43c35.js";
import {
    u as I,
    n as Q
} from "./index.0e1148e8.js";
import {
    d as V
} from "./index.8720847e.js";
const Y = Symbol("uploadContextKey");
class Z extends Error {
    constructor(e, t, s, a) {
        super(e), this.name = "UploadAjaxError", this.status = t, this.method = s, this.url = a
    }
}

function ee(e, t, s) {
    let a;
    return a = s.response ? `${s.response.error||s.response}` : s.responseText ? `${s.responseText}` : `fail to ${t.method} ${e} ${s.status}`, new Z(a, s.status, t.method, e)
}
const te = ["text", "picture", "picture-card"];
let se = 1;
const ae = () => Date.now() + se++,
    le = _({
        action: {
            type: String,
            default: "#"
        },
        headers: {
            type: j(Object)
        },
        method: {
            type: String,
            default: "post"
        },
        data: {
            type: Object,
            default: () => J({})
        },
        multiple: {
            type: Boolean,
            default: !1
        },
        name: {
            type: String,
            default: "file"
        },
        drag: {
            type: Boolean,
            default: !1
        },
        withCredentials: Boolean,
        showFileList: {
            type: Boolean,
            default: !0
        },
        accept: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "select"
        },
        fileList: {
            type: j(Array),
            default: () => J([])
        },
        autoUpload: {
            type: Boolean,
            default: !0
        },
        listType: {
            type: String,
            values: te,
            default: "text"
        },
        httpRequest: {
            type: j(Function),
            default: e => {
                "undefined" == typeof XMLHttpRequest && z("ElUpload", "XMLHttpRequest is undefined");
                const t = new XMLHttpRequest,
                    s = e.action;
                t.upload && t.upload.addEventListener("progress", (t => {
                    const s = t;
                    s.percent = t.total > 0 ? t.loaded / t.total * 100 : 0, e.onProgress(s)
                }));
                const a = new FormData;
                if (e.data)
                    for (const [o, n] of Object.entries(e.data)) Array.isArray(n) ? a.append(o, ...n) : a.append(o, n);
                a.append(e.filename, e.file, e.file.name), t.addEventListener("error", (() => {
                    e.onError(ee(s, e, t))
                })), t.addEventListener("load", (() => {
                    if (t.status < 200 || t.status >= 300) return e.onError(ee(s, e, t));
                    e.onSuccess(function(e) {
                        const t = e.responseText || e.response;
                        if (!t) return t;
                        try {
                            return JSON.parse(t)
                        } catch (s) {
                            return t
                        }
                    }(t))
                })), t.open(e.method, s, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
                const l = e.headers || {};
                if (l instanceof Headers) l.forEach(((e, s) => t.setRequestHeader(s, e)));
                else
                    for (const [o, n] of Object.entries(l)) W(n) || t.setRequestHeader(o, String(n));
                return t.send(a), t
            }
        },
        disabled: Boolean,
        limit: Number
    }),
    oe = _({ ...le,
        beforeUpload: {
            type: j(Function),
            default: e
        },
        beforeRemove: {
            type: j(Function)
        },
        onRemove: {
            type: j(Function),
            default: e
        },
        onChange: {
            type: j(Function),
            default: e
        },
        onPreview: {
            type: j(Function),
            default: e
        },
        onSuccess: {
            type: j(Function),
            default: e
        },
        onProgress: {
            type: j(Function),
            default: e
        },
        onError: {
            type: j(Function),
            default: e
        },
        onExceed: {
            type: j(Function),
            default: e
        }
    }),
    ne = _({
        files: {
            type: j(Array),
            default: () => J([])
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        handlePreview: {
            type: j(Function),
            default: e
        },
        listType: {
            type: String,
            values: te,
            default: "text"
        }
    }),
    ie = ["onKeydown"],
    re = ["src"],
    ue = ["onClick"],
    de = ["onClick"],
    ce = ["onClick"],
    pe = t({
        name: "ElUploadList"
    });
var fe = O(t({ ...pe,
    props: ne,
    emits: {
        remove: e => !!e
    },
    setup(e, {
        emit: t
    }) {
        const {
            t: k
        } = G(), w = I("upload"), E = I("icon"), F = I("list"), R = s(!1), x = e => {
            t("remove", e)
        };
        return (e, t) => (a(), l(h, {
            tag: "ul",
            class: u([d(w).b("list"), d(w).bm("list", e.listType), d(w).is("disabled", e.disabled)]),
            name: d(F).b()
        }, {
            default: o((() => [(a(!0), n(i, null, r(e.files, (s => (a(), n("li", {
                key: s.uid || s.name,
                class: u([d(w).be("list", "item"), d(w).is(s.status), {
                    focusing: R.value
                }]),
                tabindex: "0",
                onKeydown: c((t => !e.disabled && x(s)), ["delete"]),
                onFocus: t[0] || (t[0] = e => R.value = !0),
                onBlur: t[1] || (t[1] = e => R.value = !1),
                onClick: t[2] || (t[2] = e => R.value = !1)
            }, [p(e.$slots, "default", {
                file: s
            }, (() => ["picture" === e.listType || "uploading" !== s.status && "picture-card" === e.listType ? (a(), n("img", {
                key: 0,
                class: u(d(w).be("list", "item-thumbnail")),
                src: s.url,
                alt: ""
            }, null, 10, re)) : f("v-if", !0), "uploading" === s.status || "picture-card" !== e.listType ? (a(), n("div", {
                key: 1,
                class: u(d(w).be("list", "item-info"))
            }, [m("a", {
                class: u(d(w).be("list", "item-name")),
                onClick: v((t => e.handlePreview(s)), ["prevent"])
            }, [y(d(P), {
                class: u(d(E).m("document"))
            }, {
                default: o((() => [y(d(B))])),
                _: 1
            }, 8, ["class"]), m("span", {
                class: u(d(w).be("list", "item-file-name"))
            }, g(s.name), 3)], 10, ue), "uploading" === s.status ? (a(), l(d(X), {
                key: 0,
                type: "picture-card" === e.listType ? "circle" : "line",
                "stroke-width": "picture-card" === e.listType ? 6 : 2,
                percentage: Number(s.percentage),
                style: b("picture-card" === e.listType ? "" : "margin-top: 0.5rem")
            }, null, 8, ["type", "stroke-width", "percentage", "style"])) : f("v-if", !0)], 2)) : f("v-if", !0), m("label", {
                class: u(d(w).be("list", "item-status-label"))
            }, ["text" === e.listType ? (a(), l(d(P), {
                key: 0,
                class: u([d(E).m("upload-success"), d(E).m("circle-check")])
            }, {
                default: o((() => [y(d(q))])),
                _: 1
            }, 8, ["class"])) : ["picture-card", "picture"].includes(e.listType) ? (a(), l(d(P), {
                key: 1,
                class: u([d(E).m("upload-success"), d(E).m("check")])
            }, {
                default: o((() => [y(d(A))])),
                _: 1
            }, 8, ["class"])) : f("v-if", !0)], 2), e.disabled ? f("v-if", !0) : (a(), l(d(P), {
                key: 2,
                class: u(d(E).m("close")),
                onClick: e => x(s)
            }, {
                default: o((() => [y(d(H))])),
                _: 2
            }, 1032, ["class", "onClick"])), f(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), f(" This is a bug which needs to be fixed "), f(" TODO: Fix the incorrect navigation interaction "), e.disabled ? f("v-if", !0) : (a(), n("i", {
                key: 3,
                class: u(d(E).m("close-tip"))
            }, g(d(k)("el.upload.deleteTip")), 3)), "picture-card" === e.listType ? (a(), n("span", {
                key: 4,
                class: u(d(w).be("list", "item-actions"))
            }, [m("span", {
                class: u(d(w).be("list", "item-preview")),
                onClick: t => e.handlePreview(s)
            }, [y(d(P), {
                class: u(d(E).m("zoom-in"))
            }, {
                default: o((() => [y(d(K))])),
                _: 1
            }, 8, ["class"])], 10, de), e.disabled ? f("v-if", !0) : (a(), n("span", {
                key: 0,
                class: u(d(w).be("list", "item-delete")),
                onClick: e => x(s)
            }, [y(d(P), {
                class: u(d(E).m("delete"))
            }, {
                default: o((() => [y(d(M))])),
                _: 1
            }, 8, ["class"])], 10, ce))], 2)) : f("v-if", !0)]))], 42, ie)))), 128)), p(e.$slots, "append")])),
            _: 3
        }, 8, ["class", "name"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]
]);
const me = _({
        disabled: {
            type: Boolean,
            default: !1
        }
    }),
    ve = {
        file: e => k(e)
    },
    ye = ["onDrop", "onDragover"],
    ge = t({
        name: "ElUploadDrag"
    });
var be = O(t({ ...ge,
    props: me,
    emits: ve,
    setup(e, {
        emit: t
    }) {
        const l = e,
            o = w(Y);
        o || z("ElUploadDrag", "usage: <el-upload><el-upload-dragger /></el-upload>");
        const i = I("upload"),
            r = s(!1),
            c = e => {
                if (l.disabled) return;
                r.value = !1;
                const s = Array.from(e.dataTransfer.files),
                    a = o.accept.value;
                if (!a) return void t("file", s);
                const n = s.filter((e => {
                    const {
                        type: t,
                        name: s
                    } = e, l = s.includes(".") ? `.${s.split(".").pop()}` : "", o = t.replace(/\/.*$/, "");
                    return a.split(",").map((e => e.trim())).filter((e => e)).some((e => e.startsWith(".") ? l === e : /\/\*$/.test(e) ? o === e.replace(/\/\*$/, "") : !!/^[^/]+\/[^/]+$/.test(e) && t === e))
                }));
                t("file", n)
            },
            f = () => {
                l.disabled || (r.value = !0)
            };
        return (e, t) => (a(), n("div", {
            class: u([d(i).b("dragger"), d(i).is("dragover", r.value)]),
            onDrop: v(c, ["prevent"]),
            onDragover: v(f, ["prevent"]),
            onDragleave: t[0] || (t[0] = v((e => r.value = !1), ["prevent"]))
        }, [p(e.$slots, "default")], 42, ye))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]
]);
const he = _({ ...le,
        beforeUpload: {
            type: j(Function),
            default: e
        },
        onRemove: {
            type: j(Function),
            default: e
        },
        onStart: {
            type: j(Function),
            default: e
        },
        onSuccess: {
            type: j(Function),
            default: e
        },
        onProgress: {
            type: j(Function),
            default: e
        },
        onError: {
            type: j(Function),
            default: e
        },
        onExceed: {
            type: j(Function),
            default: e
        }
    }),
    ke = ["onKeydown"],
    we = ["name", "multiple", "accept"],
    Ee = t({
        name: "ElUploadContent",
        inheritAttrs: !1
    });
var Fe = O(t({ ...Ee,
    props: he,
    setup(e, {
        expose: t
    }) {
        const s = e,
            i = I("upload"),
            r = E({}),
            f = E(),
            y = e => {
                if (0 === e.length) return;
                const {
                    autoUpload: t,
                    limit: a,
                    fileList: l,
                    multiple: o,
                    onStart: n,
                    onExceed: i
                } = s;
                if (a && l.length + e.length > a) i(e, l);
                else {
                    o || (e = e.slice(0, 1));
                    for (const s of e) {
                        const e = s;
                        e.uid = ae(), n(e), t && g(e)
                    }
                }
            },
            g = async e => {
                if (f.value.value = "", !s.beforeUpload) return b(e);
                let t;
                try {
                    t = await s.beforeUpload(e)
                } catch (l) {
                    t = !1
                }
                if (!1 === t) return void s.onRemove(e);
                let a = e;
                t instanceof Blob && (a = t instanceof File ? t : new File([t], e.name, {
                    type: e.type
                })), b(Object.assign(a, {
                    uid: e.uid
                }))
            },
            b = e => {
                const {
                    headers: t,
                    data: a,
                    method: l,
                    withCredentials: o,
                    name: n,
                    action: i,
                    onProgress: u,
                    onSuccess: d,
                    onError: c,
                    httpRequest: p
                } = s, {
                    uid: f
                } = e, m = {
                    headers: t || {},
                    withCredentials: o,
                    file: e,
                    data: a,
                    method: l,
                    filename: n,
                    action: i,
                    onProgress: t => {
                        u(t, e)
                    },
                    onSuccess: t => {
                        d(t, e), delete r.value[f]
                    },
                    onError: t => {
                        c(t, e), delete r.value[f]
                    }
                }, v = p(m);
                r.value[f] = v, v instanceof Promise && v.then(m.onSuccess, m.onError)
            },
            h = e => {
                const t = e.target.files;
                t && y(Array.from(t))
            },
            k = () => {
                s.disabled || (f.value.value = "", f.value.click())
            },
            w = () => {
                k()
            };
        return t({
            abort: e => {
                Q(r.value).filter(e ? ([t]) => String(e.uid) === t : () => !0).forEach((([e, t]) => {
                    t instanceof XMLHttpRequest && t.abort(), delete r.value[e]
                }))
            },
            upload: g
        }), (e, t) => (a(), n("div", {
            class: u([d(i).b(), d(i).m(e.listType), d(i).is("drag", e.drag)]),
            tabindex: "0",
            onClick: k,
            onKeydown: c(v(w, ["self"]), ["enter", "space"])
        }, [e.drag ? (a(), l(be, {
            key: 0,
            disabled: e.disabled,
            onFile: y
        }, {
            default: o((() => [p(e.$slots, "default")])),
            _: 3
        }, 8, ["disabled"])) : p(e.$slots, "default", {
            key: 1
        }), m("input", {
            ref_key: "inputRef",
            ref: f,
            class: u(d(i).e("input")),
            name: e.name,
            multiple: e.multiple,
            accept: e.accept,
            type: "file",
            onChange: h,
            onClick: t[0] || (t[0] = v((() => {}), ["stop"]))
        }, null, 42, we)], 42, ke))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]
]);
const Re = (e, t) => {
        const s = F(e, "fileList", void 0, {
                passive: !0
            }),
            a = e => s.value.find((t => t.uid === e.uid));

        function l(e) {
            var s;
            null == (s = t.value) || s.abort(e)
        }
        return R((() => e.listType), (t => {
            "picture-card" !== t && "picture" !== t || (s.value = s.value.map((t => {
                const {
                    raw: a,
                    url: l
                } = t;
                if (!l && a) try {
                    t.url = URL.createObjectURL(a)
                } catch (o) {
                    e.onError(o, t, s.value)
                }
                return t
            })))
        })), R(s, (e => {
            for (const t of e) t.uid || (t.uid = ae()), t.status || (t.status = "success")
        }), {
            immediate: !0,
            deep: !0
        }), {
            uploadFiles: s,
            abort: l,
            clearFiles: function(e = ["ready", "uploading", "success", "fail"]) {
                s.value = s.value.filter((t => !e.includes(t.status)))
            },
            handleError: (t, l) => {
                const o = a(l);
                o && (console.error(t), o.status = "fail", s.value.splice(s.value.indexOf(o), 1), e.onError(t, o, s.value), e.onChange(o, s.value))
            },
            handleProgress: (t, l) => {
                const o = a(l);
                o && (e.onProgress(t, o, s.value), o.status = "uploading", o.percentage = Math.round(t.percent))
            },
            handleStart: t => {
                const a = {
                    name: t.name,
                    percentage: 0,
                    status: "ready",
                    size: t.size,
                    raw: t,
                    uid: t.uid
                };
                if ("picture-card" === e.listType || "picture" === e.listType) try {
                    a.url = URL.createObjectURL(t)
                } catch (l) {
                    N("ElUpload", l.message), e.onError(l, a, s.value)
                }
                s.value = [...s.value, a], e.onChange(a, s.value)
            },
            handleSuccess: (t, l) => {
                const o = a(l);
                o && (o.status = "success", o.response = t, e.onSuccess(t, o, s.value), e.onChange(o, s.value))
            },
            handleRemove: async t => {
                const o = t instanceof File ? a(t) : t;
                o || z("ElUpload", "file to be removed not found");
                const n = t => {
                    l(t);
                    const a = s.value;
                    a.splice(a.indexOf(t), 1), e.onRemove(t, a), (e => {
                        var t;
                        (null == (t = e.url) ? void 0 : t.startsWith("blob:")) && URL.revokeObjectURL(e.url)
                    })(t)
                };
                if (e.beforeRemove) {
                    !1 !== await e.beforeRemove(o, s.value) && n(o)
                } else n(o)
            },
            submit: function() {
                s.value.filter((({
                    status: e
                }) => "ready" === e)).forEach((({
                    raw: e
                }) => {
                    var s;
                    return e && (null == (s = t.value) ? void 0 : s.upload(e))
                }))
            }
        }
    },
    xe = t({
        name: "ElUpload"
    });
const Se = D(O(t({ ...xe,
    props: oe,
    setup(e, {
        expose: t
    }) {
        const s = e,
            i = x(),
            r = V(),
            u = E(),
            {
                abort: c,
                submit: m,
                clearFiles: v,
                uploadFiles: g,
                handleStart: b,
                handleError: h,
                handleRemove: k,
                handleSuccess: w,
                handleProgress: F
            } = Re(s, u),
            R = S((() => "picture-card" === s.listType)),
            _ = S((() => ({ ...s,
                fileList: g.value,
                onStart: b,
                onProgress: F,
                onSuccess: w,
                onError: h,
                onRemove: k
            })));
        return T((() => {
            g.value.forEach((({
                url: e
            }) => {
                (null == e ? void 0 : e.startsWith("blob:")) && URL.revokeObjectURL(e)
            }))
        })), $(Y, {
            accept: L(s, "accept")
        }), t({
            abort: c,
            submit: m,
            clearFiles: v,
            handleStart: b,
            handleRemove: k
        }), (e, t) => (a(), n("div", null, [d(R) && e.showFileList ? (a(), l(fe, {
            key: 0,
            disabled: d(r),
            "list-type": e.listType,
            files: d(g),
            "handle-preview": e.onPreview,
            onRemove: d(k)
        }, C({
            append: o((() => [y(Fe, U({
                ref_key: "uploadRef",
                ref: u
            }, d(_)), {
                default: o((() => [d(i).trigger ? p(e.$slots, "trigger", {
                    key: 0
                }) : f("v-if", !0), !d(i).trigger && d(i).default ? p(e.$slots, "default", {
                    key: 1
                }) : f("v-if", !0)])),
                _: 3
            }, 16)])),
            _: 2
        }, [e.$slots.file ? {
            name: "default",
            fn: o((({
                file: t
            }) => [p(e.$slots, "file", {
                file: t
            })]))
        } : void 0]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : f("v-if", !0), !d(R) || d(R) && !e.showFileList ? (a(), l(Fe, U({
            key: 1,
            ref_key: "uploadRef",
            ref: u
        }, d(_)), {
            default: o((() => [d(i).trigger ? p(e.$slots, "trigger", {
                key: 0
            }) : f("v-if", !0), !d(i).trigger && d(i).default ? p(e.$slots, "default", {
                key: 1
            }) : f("v-if", !0)])),
            _: 3
        }, 16)) : f("v-if", !0), e.$slots.trigger ? p(e.$slots, "default", {
            key: 2
        }) : f("v-if", !0), p(e.$slots, "tip"), !d(R) && e.showFileList ? (a(), l(fe, {
            key: 3,
            disabled: d(r),
            "list-type": e.listType,
            files: d(g),
            "handle-preview": e.onPreview,
            onRemove: d(k)
        }, C({
            _: 2
        }, [e.$slots.file ? {
            name: "default",
            fn: o((({
                file: t
            }) => [p(e.$slots, "file", {
                file: t
            })]))
        } : void 0]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : f("v-if", !0)]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]
]));
export {
    Se as E
};