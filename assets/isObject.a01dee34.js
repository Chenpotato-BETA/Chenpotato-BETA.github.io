const t = "object" == typeof global && global && global.Object === Object && global;
var o = "object" == typeof self && self && self.Object === Object && self;
const e = t || o || Function("return this")();
const n = e.Symbol;
var r = Object.prototype,
    c = r.hasOwnProperty,
    l = r.toString,
    a = n ? n.toStringTag : void 0;
var b = Object.prototype.toString;
var i = n ? n.toStringTag : void 0;

function u(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? function(t) {
        var o = c.call(t, a),
            e = t[a];
        try {
            t[a] = void 0;
            var n = !0
        } catch (b) {}
        var r = l.call(t);
        return n && (o ? t[a] = e : delete t[a]), r
    }(t) : function(t) {
        return b.call(t)
    }(t)
}

function f(t) {
    return null != t && "object" == typeof t
}

function s(t) {
    return "symbol" == typeof t || f(t) && "[object Symbol]" == u(t)
}

function j(t) {
    var o = typeof t;
    return null != t && ("object" == o || "function" == o)
}
export {
    n as S, j as a, f as b, u as c, t as f, s as i, e as r
};