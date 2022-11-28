import {
    X as r,
    d as t
} from "./el-select.e274bb48.js";
var o = {
    exports: {}
};
const e = o.exports = function(r, t, o) {
    r = r || {};
    var e = t.prototype,
        n = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };

    function a(r, t, o, n) {
        return e.fromToBase(r, t, o, n)
    }
    o.en.relativeTime = n, e.fromToBase = function(t, e, a, s, d) {
        for (var u, i, f, m = a.$locale().relativeTime || n, h = r.thresholds || [{
                l: "s",
                r: 44,
                d: "second"
            }, {
                l: "m",
                r: 89
            }, {
                l: "mm",
                r: 44,
                d: "minute"
            }, {
                l: "h",
                r: 89
            }, {
                l: "hh",
                r: 21,
                d: "hour"
            }, {
                l: "d",
                r: 35
            }, {
                l: "dd",
                r: 25,
                d: "day"
            }, {
                l: "M",
                r: 45
            }, {
                l: "MM",
                r: 10,
                d: "month"
            }, {
                l: "y",
                r: 17
            }, {
                l: "yy",
                d: "year"
            }], l = h.length, c = 0; c < l; c += 1) {
            var y = h[c];
            y.d && (u = s ? o(t).diff(a, y.d, !0) : a.diff(t, y.d, !0));
            var p = (r.rounding || Math.round)(Math.abs(u));
            if (f = u > 0, p <= y.r || !y.r) {
                p <= 1 && c > 0 && (y = h[c - 1]);
                var v = m[y.l];
                d && (p = d("" + p)), i = "string" == typeof v ? v.replace("%d", p) : v(p, e, y.l, f);
                break
            }
        }
        if (e) return i;
        var M = f ? m.future : m.past;
        return "function" == typeof M ? M(i) : M.replace("%s", i)
    }, e.to = function(r, t) {
        return a(r, t, this, !0)
    }, e.from = function(r, t) {
        return a(r, t, this)
    };
    var s = function(r) {
        return r.$u ? o.utc() : o()
    };
    e.toNow = function(r) {
        return this.to(s(this), r)
    }, e.fromNow = function(r) {
        return this.from(s(this), r)
    }
};
t.extend(e);
const n = (r, o = "MM-DD HH:mm") => t(r).format(o),
    a = r => t(r).fromNow();
export {
    n as a, a as t
};