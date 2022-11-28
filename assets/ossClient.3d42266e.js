/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t = function() {
    return t = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t
    }, t.apply(this, arguments)
};

function e(t) {
    return t.replace(/^\/+/, "")
}

function n(t) {
    return unescape(encodeURIComponent(t))
}

function r(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}

function o(t, e) {
    return t << e | t >>> 32 - e
}

function s(t, e) {
    for (var n, r = e ? "0123456789ABCDEF" : "0123456789abcdef", o = "", s = 0, a = t.length; s < a; s += 1) n = t.charCodeAt(s), o += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
    return o
}

function a(t) {
    var e, n = 32 * t.length,
        r = "";
    for (e = 0; e < n; e += 8) r += String.fromCharCode(t[e >> 5] >>> 24 - e % 32 & 255);
    return r
}

function i(t) {
    var e, n = 8 * t.length,
        r = Array(t.length >> 2),
        o = r.length;
    for (e = 0; e < o; e += 1) r[e] = 0;
    for (e = 0; e < n; e += 8) r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << 24 - e % 32;
    return r
}

function c(t, e) {
    var n, r, o, s, a, i, c, u, h = e.length,
        f = Array();
    for (s = (i = Array(Math.ceil(t.length / 2))).length, n = 0; n < s; n += 1) i[n] = t.charCodeAt(2 * n) << 8 | t.charCodeAt(2 * n + 1);
    for (; i.length > 0;) {
        for (a = Array(), o = 0, n = 0; n < i.length; n += 1) o = (o << 16) + i[n], o -= (r = Math.floor(o / h)) * h, (a.length > 0 || r > 0) && (a[a.length] = r);
        f[f.length] = o, i = a
    }
    for (c = "", n = f.length - 1; n >= 0; n--) c += e.charAt(f[n]);
    for (u = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))), n = c.length; n < u; n += 1) c = e[0] + c;
    return c
}

function u(t, e) {
    void 0 === e && (e = "=");
    var n, r, o, s = "",
        a = t.length;
    for (n = 0; n < a; n += 3)
        for (o = t.charCodeAt(n) << 16 | (n + 1 < a ? t.charCodeAt(n + 1) << 8 : 0) | (n + 2 < a ? t.charCodeAt(n + 2) : 0), r = 0; r < 4; r += 1) 8 * n + 6 * r > 8 * t.length ? s += e : s += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - r) & 63);
    return s
}

function h(t) {
    var e = t.responseText || t.response;
    if (!e) return e;
    try {
        return JSON.parse(e)
    } catch (n) {
        return e
    }
}

function f(t, e) {
    var n = new XMLHttpRequest;
    n.timeout = e.timeout || 6e4, e.onProgress && n.upload && (n.upload.onprogress = function(t) {
        t.percent = t.loaded / t.total * 100, e.onProgress(t)
    }), n.onerror = function(t) {
        e.onError(t)
    }, n.onload = function() {
        if (n.status < 200 || n.status >= 300) return e.onError(function(t, e, n) {
            var r = n.response.match(/<Code>(.+)<\/Code>/),
                o = n.response.match(/<Message>(.+)<\/Message>/),
                s = e.method || "GET",
                a = "";
            r && r[1] && (a += r[1] + ": "), o && o[1] && (a += o[1]);
            var i = new Error(a);
            return i.status = n.status, i.method = s, i.code = r && r[1] || "", i.url = t, i
        }(t, e, n), h(n));
        var r = {
            status: n.status,
            statusText: n.statusText,
            xhr: n,
            data: h(n)
        };
        e.onSuccess(r, n)
    }, n.ontimeout = function(t) {
        var r = new Error("Request timeout, limit " + n.timeout + " ms.");
        e.onError(r)
    }, e.onAbort && (n.onabort = e.onAbort), n.open(e.method || "get", t, !0), e.withCredentials && "withCredentials" in n && (n.withCredentials = !0);
    var r = e.headers || {};
    for (var o in null !== r["X-Requested-With"] && n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r) r.hasOwnProperty(o) && null !== r[o] && n.setRequestHeader(o, r[o]);
    return n.send(e.data || null), {
        abort: function() {
            n.abort()
        }
    }
}
var p = function(t) {
    var e = !(!t || "boolean" != typeof t.uppercase) && t.uppercase,
        h = t && "string" == typeof t.pad ? t.pad : "=",
        f = !t || "boolean" != typeof t.utf8 || t.utf8;

    function p(t, e) {
        var n, s, a, i, c, u, h, f, p = Array(80),
            l = 1732584193,
            d = -271733879,
            v = -1732584194,
            b = 271733878,
            m = -1009589776;
        for (t[e >> 5] |= 128 << 24 - e % 32, t[15 + (e + 64 >> 9 << 4)] = e, n = 0; n < t.length; n += 16) {
            for (i = l, c = d, u = v, h = b, f = m, s = 0; s < 80; s += 1) p[s] = s < 16 ? t[n + s] : o(p[s - 3] ^ p[s - 8] ^ p[s - 14] ^ p[s - 16], 1), a = r(r(o(l, 5), g(s, d, v, b)), r(r(m, p[s]), y(s))), m = b, b = v, v = o(d, 30), d = l, l = a;
            l = r(l, i), d = r(d, c), v = r(v, u), b = r(b, h), m = r(m, f)
        }
        return Array(l, d, v, b, m)
    }

    function l(t, e) {
        return a(p(i(t = e ? n(t) : t), 8 * t.length))
    }

    function d(t, e) {
        var r, o, s, c, u;
        for (t = f ? n(t) : t, e = f ? n(e) : e, (r = i(t)).length > 16 && (r = p(r, 8 * t.length)), o = Array(16), s = Array(16), c = 0; c < 16; c += 1) o[c] = 909522486 ^ r[c], s[c] = 1549556828 ^ r[c];
        return u = p(o.concat(i(e)), 512 + 8 * e.length), a(p(s.concat(u), 672))
    }

    function g(t, e, n, r) {
        return t < 20 ? e & n | ~e & r : t < 40 ? e ^ n ^ r : t < 60 ? e & n | e & r | n & r : e ^ n ^ r
    }

    function y(t) {
        return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514
    }
    this.hex = function(t) {
        return s(l(t, f), e)
    }, this.b64 = function(t) {
        return u(l(t, f), h)
    }, this.any = function(t, e) {
        return c(l(t, f), e)
    }, this.raw = function(t) {
        return l(t, f)
    }, this.hex_hmac = function(t, e) {
        return s(d(t, e))
    }, this.b64_hmac = function(t, e) {
        return u(d(t, e), h)
    }, this.any_hmac = function(t, e, n) {
        return c(d(t, e), n)
    }, this.setUpperCase = function(t) {
        return "boolean" == typeof t && (e = t), this
    }, this.setPad = function(t) {
        return h = t || h, this
    }, this.setUTF8 = function(t) {
        return "boolean" == typeof t && (f = t), this
    }
};
const l = new(function() {
    function r(e) {
        if (!(this instanceof r)) return new r(e);
        var n = t(t({
            endpoint: null,
            region: "oss-cn-hangzhou",
            timeout: 3e5,
            internal: !1,
            secure: void 0
        }, e), {
            host: ""
        });
        if (n.endpoint);
        else {
            if (!n.region || !n.bucket) throw new Error("require endpoint or region/bucket in options");
            n.endpoint = n.bucket, n.internal && (n.region += "-internal"), n.endpoint += "." + n.region + ".aliyuncs.com"
        }
        n.host += "http" + (!0 === n.secure || location && "https:" === location.protocol ? "s" : "") + "://" + n.endpoint, this.opts = n
    }
    return r.prototype.postObject = function(r, o, s) {
        var a;
        void 0 === s && (s = {});
        var i = new FormData;
        Object.keys(s.headers || {}).forEach((function(t) {
            i.append(t, s.headers[t].toString())
        }));
        var c, h, l = e((s.dir || "").replace(/^(.+?)\/*$/, "$1/") + e(r));
        if (i.append("key", l), this.opts.accessKeyId && this.opts.accessKeySecret) {
            if ("string" == typeof s.policy) a = s.policy;
            else {
                var d = t({
                    expiration: new Date(+new Date + 864e5).toISOString(),
                    conditions: [{
                            bucket: this.opts.bucket
                        }, {
                            key: l
                        },
                        ["content-length-range", 0, 1073741824]
                    ]
                }, s.policy);
                a = u(n(JSON.stringify(d)))
            }
            var g = s.signature || (c = this.opts.accessKeySecret, h = a, (new p).b64_hmac(c, h));
            i.append("OSSAccessKeyId", this.opts.accessKeyId), i.append("policy", a), i.append("Signature", g), this.opts.stsToken && i.append("x-oss-security-token", this.opts.stsToken)
        }
        var y = function(t, e) {
            void 0 === e && (e = []);
            var n = {};
            return Object.keys(t).forEach((function(r) {
                var o = r.toLowerCase();
                (/^x-oss-/.test(o) || e.indexOf(r) > -1) && (n[o] = t[r])
            })), n
        }(s, ["success_action_status", "success_action_redirect"]);
        Object.keys(y).forEach((function(t) {
            return i.append(t, y[t])
        })), i.append("file", o);
        var v = function() {},
            b = s.onSuccess || v,
            m = {
                method: "POST",
                data: i,
                timeout: s.timeout || this.opts.timeout,
                onSuccess: function(t, e) {
                    return b(t, e)
                },
                onError: s.onError || function(t) {
                    console.error(t)
                },
                onAbort: s.onAbort || v
            };
        return s.onProgress && (m.onProgress = s.onProgress), f(this.opts.host, m)
    }, r.prototype.generateObjectUrl = function(t, n) {
        return n ? "/" !== n[n.length - 1] && (n += "/") : n = this.opts.host + "/", n + function(t) {
            return encodeURIComponent(t).replace(/%2F/g, "/")
        }(e(t))
    }, r
}())({
    region: "oss-cn-shenzhen",
    bucket: "xdlumia2",
    accessKeyId: "LTAI5tM1Zd5SRWLFVBeKU5dv",
    accessKeySecret: "5Y5b2hWisRnXXNUJOcPtkg1v2R9dZK"
});
export {
    l as o
};