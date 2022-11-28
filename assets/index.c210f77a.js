import {
    X as t
} from "./el-select.e274bb48.js";

function n(t, n) {
    for (var e = 0; e < n.length; e++) {
        const i = n[e];
        if ("string" != typeof i && !Array.isArray(i))
            for (const n in i)
                if ("default" !== n && !(n in t)) {
                    const e = Object.getOwnPropertyDescriptor(i, n);
                    e && Object.defineProperty(t, n, e.get ? e : {
                        enumerable: !0,
                        get: () => i[n]
                    })
                }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
var e, i = {
    exports: {}
};
e = i,
    function(t, n) {
        if (e.exports) e.exports = n();
        else {
            var i = n();
            for (var r in i) t[r] = i[r]
        }
    }(t, (function() {
        var t, n, e, i, r, a, F, h, u, C, o, A, E, D, s, g, B, _, c, f, I, p, d, y, x, l, m, Y, S, N, G, Z, M, T, v, O, H, X, P = {
                _: function(t, n, e, i) {
                    return n < 100 && (t.setFullYear(n), t.setMonth(e - 1), t.setDate(i)), t.setMilliseconds(0), t
                },
                fromYmd: function(t, n, e) {
                    return this.fromYmdHms(t, n, e, 0, 0, 0)
                },
                fromYmdHms: function(t, n, e, i, r, a) {
                    return this._(new Date(t + "/" + n + "/" + e + " " + i + ":" + r + ":" + a), t, n, e)
                },
                getDaysBetweenYmd: function(t, n, e, i, r, a) {
                    var F, h, u;
                    if (t == i) F = w.getDaysInYear(i, r, a) - w.getDaysInYear(t, n, e);
                    else if (t > i) {
                        for (h = w.getDaysOfYear(i) - w.getDaysInYear(i, r, a), u = i + 1; u < t; u++) h += w.getDaysOfYear(u);
                        F = -(h += w.getDaysInYear(t, n, e))
                    } else {
                        for (h = w.getDaysOfYear(t) - w.getDaysInYear(t, n, e), u = t + 1; u < i; u++) h += w.getDaysOfYear(u);
                        F = h += w.getDaysInYear(i, r, a)
                    }
                    return F
                },
                getDaysBetween: function(t, n) {
                    return this.getDaysBetweenYmd(t.getFullYear(), t.getMonth() + 1, t.getDate(), n.getFullYear(), n.getMonth() + 1, n.getDate())
                }
            },
            L = (t = function(t) {
                return n(t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds())
            }, n = function(n, e, i, r, a, F) {
                return 1582 === n && 10 === e && i >= 15 && (i -= 10), {
                    _p: {
                        year: n,
                        month: e,
                        day: i,
                        hour: r,
                        minute: a,
                        second: F,
                        calendar: P.fromYmdHms(n, e, i, r, a, F)
                    },
                    getYear: function() {
                        return this._p.year
                    },
                    getMonth: function() {
                        return this._p.month
                    },
                    getDay: function() {
                        return this._p.day
                    },
                    getHour: function() {
                        return this._p.hour
                    },
                    getMinute: function() {
                        return this._p.minute
                    },
                    getSecond: function() {
                        return this._p.second
                    },
                    getWeek: function() {
                        return this._p.calendar.getDay()
                    },
                    getWeekInChinese: function() {
                        return w.WEEK[this.getWeek()]
                    },
                    getSolarWeek: function(t) {
                        return J.fromDate(this._p.calendar, t)
                    },
                    isLeapYear: function() {
                        return w.isLeapYear(this._p.year)
                    },
                    getFestivals: function() {
                        var t = [],
                            n = w.FESTIVAL[this._p.month + "-" + this._p.day];
                        n && t.push(n);
                        var e = Math.ceil(this._p.day / 7),
                            i = this.getWeek();
                        return (n = w.WEEK_FESTIVAL[this._p.month + "-" + e + "-" + i]) && t.push(n), this._p.day + 7 > w.getDaysOfMonth(this._p.year, this._p.month) && (n = w.WEEK_FESTIVAL[this._p.month + "-0-" + i]) && t.push(n), t
                    },
                    getOtherFestivals: function() {
                        var t = [],
                            n = w.OTHER_FESTIVAL[this._p.month + "-" + this._p.day];
                        return n && (t = t.concat(n)), t
                    },
                    getXingzuo: function() {
                        return this.getXingZuo()
                    },
                    getXingZuo: function() {
                        var t = 11,
                            n = 100 * this._p.month + this._p.day;
                        return n >= 321 && n <= 419 ? t = 0 : n >= 420 && n <= 520 ? t = 1 : n >= 521 && n <= 621 ? t = 2 : n >= 622 && n <= 722 ? t = 3 : n >= 723 && n <= 822 ? t = 4 : n >= 823 && n <= 922 ? t = 5 : n >= 923 && n <= 1023 ? t = 6 : n >= 1024 && n <= 1122 ? t = 7 : n >= 1123 && n <= 1221 ? t = 8 : n >= 1222 || n <= 119 ? t = 9 : n <= 218 && (t = 10), w.XINGZUO[t]
                    },
                    toYmd: function() {
                        var t = this._p.day;
                        1582 === this._p.year && 10 === this._p.month && t >= 5 && (t += 10);
                        for (var n = this._p.year + ""; n.length < 4;) n = "0" + n;
                        return [n, (this._p.month < 10 ? "0" : "") + this._p.month, (t < 10 ? "0" : "") + t].join("-")
                    },
                    toYmdHms: function() {
                        return this.toYmd() + " " + [(this._p.hour < 10 ? "0" : "") + this._p.hour, (this._p.minute < 10 ? "0" : "") + this._p.minute, (this._p.second < 10 ? "0" : "") + this._p.second].join(":")
                    },
                    toString: function() {
                        return this.toYmd()
                    },
                    toFullString: function() {
                        var t = this.toYmdHms();
                        this.isLeapYear() && (t += " 闰年"), t += " 星期" + this.getWeekInChinese();
                        for (var n = this.getFestivals(), e = 0, i = n.length; e < i; e++) t += " (" + n[e] + ")";
                        return t += " " + this.getXingZuo() + "座"
                    },
                    next: function(n, e) {
                        var i = P.fromYmdHms(this._p.year, this._p.month, this._p.day, this._p.hour, this._p.minute, this._p.second);
                        if (0 != n)
                            if (e)
                                for (var r = Math.abs(n), a = n < 1 ? -1 : 1; r > 0;) {
                                    i.setDate(i.getDate() + a);
                                    var F = !0,
                                        h = V.getHoliday(i.getFullYear(), i.getMonth() + 1, i.getDate());
                                    if (h) F = h.isWork();
                                    else {
                                        var u = i.getDay();
                                        0 !== u && 6 !== u || (F = !1)
                                    }
                                    F && r--
                                } else i.setDate(i.getDate() + n);
                        return t(i)
                    },
                    getLunar: function() {
                        return U.fromDate(this._p.calendar)
                    },
                    getJulianDay: function() {
                        var t = this._p.year,
                            n = this._p.month,
                            e = this._p.day + ((this._p.second / 60 + this._p.minute) / 60 + this._p.hour) / 24,
                            i = 0,
                            r = !1;
                        return 372 * t + 31 * n + Math.floor(e) >= 588829 && (r = !0), n <= 2 && (n += 12, t--), r && (i = 2 - (i = Math.floor(t / 100)) + Math.floor(i / 4)), Math.floor(365.25 * (t + 4716)) + Math.floor(30.6001 * (n + 1)) + e + i - 1524.5
                    },
                    getCalendar: function() {
                        return this._p.calendar
                    }
                }
            }, {
                J2000: 2451545,
                fromYmd: function(t, e, i) {
                    return n(t, e, i, 0, 0, 0)
                },
                fromYmdHms: function(t, e, i, r, a, F) {
                    return n(t, e, i, r, a, F)
                },
                fromDate: function(n) {
                    return t(n)
                },
                fromJulianDay: function(t) {
                    return function(t) {
                        var e, i = Math.floor(t + .5),
                            r = t + .5 - i;
                        i >= 2299161 && (i += 1 + (e = Math.floor((i - 1867216.25) / 36524.25)) - Math.floor(e / 4)), i += 1524;
                        var a = Math.floor((i - 122.1) / 365.25);
                        i -= Math.floor(365.25 * a);
                        var F = Math.floor(i / 30.601),
                            h = i -= Math.floor(30.601 * F);
                        F > 13 ? (F -= 13, a -= 4715) : (F -= 1, a -= 4716), r *= 24;
                        var u = Math.floor(r);
                        r -= u, r *= 60;
                        var C = Math.floor(r);
                        r -= C, r *= 60;
                        var o = Math.round(r);
                        return o > 59 && (o -= 60, C++), C > 59 && (C -= 60, u++), n(a, F, h, u, C, o)
                    }(t)
                },
                fromBaZi: function(e, i, r, a, F, h) {
                    return function(e, i, r, a, F, h) {
                        F = 1 == F ? 1 : 2, h = null == h ? 1900 : h;
                        var u = [],
                            C = t(new Date).getLunar(),
                            o = z.getJiaZiIndex(C.getYearInGanZhiExact()) - z.getJiaZiIndex(e);
                        o < 0 && (o += 60);
                        for (var A = C.getYear() - o, E = 0, D = a.substr(1), s = 0, g = z.ZHI.length; s < g; s++) z.ZHI[s] === D && (E = 2 * (s - 1));
                        for (; A >= h;) {
                            for (var B, _ = A - 1, c = 0, f = 12, I = !1; c < 15;) {
                                if (_ >= h && (C = (B = n(_, f, 1, E, 0, 0)).getLunar()).getYearInGanZhiExact() === e && C.getMonthInGanZhiExact() === i) {
                                    I = !0;
                                    break
                                }++f > 12 && (f = 1, _++), c++
                            }
                            if (I)
                                for (c = 0, --f < 1 && (f = 12, _--), B = n(_, f, 1, E, 0, 0); c < 61;) {
                                    C = B.getLunar();
                                    var p = 2 == F ? C.getDayInGanZhiExact2() : C.getDayInGanZhiExact();
                                    if (C.getYearInGanZhiExact() === e && C.getMonthInGanZhiExact() === i && p === r && C.getTimeInGanZhi() === a) {
                                        u.push(B);
                                        break
                                    }
                                    B = B.next(1), c++
                                }
                            A -= 60
                        }
                        return u
                    }(e, i, r, a, F, h)
                }
            }),
            U = function() {
                var t = function(t, n, e, i, r, a) {
                        var F = {};
                        return function(t, n) {
                                t.jieQiList = [], t.jieQi = {};
                                for (var e = n.getJieQiJulianDays(), i = 0, r = U.JIE_QI_IN_USE.length; i < r; i++) {
                                    var a = U.JIE_QI_IN_USE[i];
                                    t.jieQiList.push(a), t.jieQi[a] = L.fromJulianDay(e[i])
                                }
                            }(F, a),
                            function(t, n, e) {
                                var i = e - 4,
                                    r = i % 10,
                                    a = i % 12;
                                r < 0 && (r += 10), a < 0 && (a += 12);
                                var F = r,
                                    h = a,
                                    u = r,
                                    C = a,
                                    o = n.getYear(),
                                    A = n.toYmd(),
                                    E = n.toYmdHms(),
                                    D = t.jieQi["立春"];
                                D.getYear() != o && (D = t.jieQi.LI_CHUN);
                                var s = D.toYmd(),
                                    g = D.toYmdHms();
                                e === o ? (A < s && (F--, h--), E < g && (u--, C--)) : e < o && (A >= s && (F++, h++), E >= g && (u++, C++)), t.yearGanIndex = r, t.yearZhiIndex = a, t.yearGanIndexByLiChun = (F < 0 ? F + 10 : F) % 10, t.yearZhiIndexByLiChun = (h < 0 ? h + 12 : h) % 12, t.yearGanIndexExact = (u < 0 ? u + 10 : u) % 10, t.yearZhiIndexExact = (C < 0 ? C + 12 : C) % 12
                            }(F, r, t),
                            function(t, n) {
                                var e, i, r = null,
                                    a = U.JIE_QI_IN_USE.length,
                                    F = -3;
                                for (e = 0; e < a; e += 2) {
                                    i = t.jieQi[U.JIE_QI_IN_USE[e]];
                                    var h = n.toYmd();
                                    if (h >= (null == r ? h : r.toYmd()) && h < i.toYmd()) break;
                                    r = i, F++
                                }
                                var u = 2 * ((t.yearGanIndexByLiChun + (F < 0 ? 1 : 0)) % 5 + 1) % 10;
                                for (t.monthGanIndex = ((F < 0 ? F + 10 : F) + u) % 10, t.monthZhiIndex = ((F < 0 ? F + 12 : F) + z.BASE_MONTH_ZHI_INDEX) % 12, r = null, F = -3, e = 0; e < a; e += 2) {
                                    i = t.jieQi[U.JIE_QI_IN_USE[e]];
                                    var C = n.toYmdHms();
                                    if (C >= (null == r ? C : r.toYmdHms()) && C < i.toYmdHms()) break;
                                    r = i, F++
                                }
                                u = 2 * ((t.yearGanIndexExact + (F < 0 ? 1 : 0)) % 5 + 1) % 10, t.monthGanIndexExact = ((F < 0 ? F + 10 : F) + u) % 10, t.monthZhiIndexExact = ((F < 0 ? F + 12 : F) + z.BASE_MONTH_ZHI_INDEX) % 12
                            }(F, r),
                            function(t, n, e, i) {
                                var r = L.fromYmdHms(n.getYear(), n.getMonth(), n.getDay(), 12, 0, 0),
                                    a = Math.floor(r.getJulianDay()) - 11,
                                    F = a % 10,
                                    h = a % 12;
                                t.dayGanIndex = F, t.dayZhiIndex = h;
                                var u = F,
                                    C = h;
                                t.dayGanIndexExact2 = u, t.dayZhiIndexExact2 = C;
                                var o = (e < 10 ? "0" : "") + e + ":" + (i < 10 ? "0" : "") + i;
                                o >= "23:00" && o <= "23:59" && (++u >= 10 && (u -= 10), ++C >= 12 && (C -= 12)), t.dayGanIndexExact = u, t.dayZhiIndexExact = C
                            }(F, r, n, e),
                            function(t, n, e) {
                                var i = z.getTimeZhiIndex((n < 10 ? "0" : "") + n + ":" + (e < 10 ? "0" : "") + e);
                                t.timeZhiIndex = i, t.timeGanIndex = (t.dayGanIndexExact % 5 * 2 + i) % 10
                            }(F, n, e),
                            function(t, n) {
                                t.weekIndex = n.getWeek()
                            }(F, r), F
                    },
                    n = function(t, n, i, r, a, F) {
                        var h = W.fromYear(t),
                            u = h.getMonth(n);
                        if (null == u) throw "wrong lunar year " + t + " month " + n;
                        if (i < 1) throw "lunar day must bigger than 0";
                        var C = u.getDayCount();
                        if (i > C) throw "only " + C + " days in lunar year " + t + " month " + n;
                        var o = L.fromJulianDay(u.getFirstJulianDay() + i - 1),
                            A = L.fromYmdHms(o.getYear(), o.getMonth(), o.getDay(), r, a, F);
                        return e(t, n, i, r, a, F, A, h)
                    },
                    e = function(n, e, i, r, a, F, h, u) {
                        var C = t(n, r, a, 0, h, u);
                        return {
                            _p: {
                                year: n,
                                month: e,
                                day: i,
                                hour: r,
                                minute: a,
                                second: F,
                                timeGanIndex: C.timeGanIndex,
                                timeZhiIndex: C.timeZhiIndex,
                                dayGanIndex: C.dayGanIndex,
                                dayZhiIndex: C.dayZhiIndex,
                                dayGanIndexExact: C.dayGanIndexExact,
                                dayZhiIndexExact: C.dayZhiIndexExact,
                                dayGanIndexExact2: C.dayGanIndexExact2,
                                dayZhiIndexExact2: C.dayZhiIndexExact2,
                                monthGanIndex: C.monthGanIndex,
                                monthZhiIndex: C.monthZhiIndex,
                                monthGanIndexExact: C.monthGanIndexExact,
                                monthZhiIndexExact: C.monthZhiIndexExact,
                                yearGanIndex: C.yearGanIndex,
                                yearZhiIndex: C.yearZhiIndex,
                                yearGanIndexByLiChun: C.yearGanIndexByLiChun,
                                yearZhiIndexByLiChun: C.yearZhiIndexByLiChun,
                                yearGanIndexExact: C.yearGanIndexExact,
                                yearZhiIndexExact: C.yearZhiIndexExact,
                                weekIndex: C.weekIndex,
                                jieQi: C.jieQi,
                                jieQiList: C.jieQiList,
                                solar: h,
                                eightChar: null
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getDay: function() {
                                return this._p.day
                            },
                            getHour: function() {
                                return this._p.hour
                            },
                            getMinute: function() {
                                return this._p.minute
                            },
                            getSecond: function() {
                                return this._p.second
                            },
                            getTimeGanIndex: function() {
                                return this._p.timeGanIndex
                            },
                            getTimeZhiIndex: function() {
                                return this._p.timeZhiIndex
                            },
                            getDayGanIndex: function() {
                                return this._p.dayGanIndex
                            },
                            getDayGanIndexExact: function() {
                                return this._p.dayGanIndexExact
                            },
                            getDayGanIndexExact2: function() {
                                return this._p.dayGanIndexExact2
                            },
                            getDayZhiIndex: function() {
                                return this._p.dayZhiIndex
                            },
                            getDayZhiIndexExact: function() {
                                return this._p.dayZhiIndexExact
                            },
                            getDayZhiIndexExact2: function() {
                                return this._p.dayZhiIndexExact2
                            },
                            getMonthGanIndex: function() {
                                return this._p.monthGanIndex
                            },
                            getMonthGanIndexExact: function() {
                                return this._p.monthGanIndexExact
                            },
                            getMonthZhiIndex: function() {
                                return this._p.monthZhiIndex
                            },
                            getMonthZhiIndexExact: function() {
                                return this._p.monthZhiIndexExact
                            },
                            getYearGanIndex: function() {
                                return this._p.yearGanIndex
                            },
                            getYearGanIndexByLiChun: function() {
                                return this._p.yearGanIndexByLiChun
                            },
                            getYearGanIndexExact: function() {
                                return this._p.yearGanIndexExact
                            },
                            getYearZhiIndex: function() {
                                return this._p.yearZhiIndex
                            },
                            getYearZhiIndexByLiChun: function() {
                                return this._p.yearZhiIndexByLiChun
                            },
                            getYearZhiIndexExact: function() {
                                return this._p.yearZhiIndexExact
                            },
                            getGan: function() {
                                return this.getYearGan()
                            },
                            getZhi: function() {
                                return this.getYearZhi()
                            },
                            getYearGan: function() {
                                return z.GAN[this._p.yearGanIndex + 1]
                            },
                            getYearGanByLiChun: function() {
                                return z.GAN[this._p.yearGanIndexByLiChun + 1]
                            },
                            getYearGanExact: function() {
                                return z.GAN[this._p.yearGanIndexExact + 1]
                            },
                            getYearZhi: function() {
                                return z.ZHI[this._p.yearZhiIndex + 1]
                            },
                            getYearZhiByLiChun: function() {
                                return z.ZHI[this._p.yearZhiIndexByLiChun + 1]
                            },
                            getYearZhiExact: function() {
                                return z.ZHI[this._p.yearZhiIndexExact + 1]
                            },
                            getYearInGanZhi: function() {
                                return this.getYearGan() + this.getYearZhi()
                            },
                            getYearInGanZhiByLiChun: function() {
                                return this.getYearGanByLiChun() + this.getYearZhiByLiChun()
                            },
                            getYearInGanZhiExact: function() {
                                return this.getYearGanExact() + this.getYearZhiExact()
                            },
                            getMonthGan: function() {
                                return z.GAN[this._p.monthGanIndex + 1]
                            },
                            getMonthGanExact: function() {
                                return z.GAN[this._p.monthGanIndexExact + 1]
                            },
                            getMonthZhi: function() {
                                return z.ZHI[this._p.monthZhiIndex + 1]
                            },
                            getMonthZhiExact: function() {
                                return z.ZHI[this._p.monthZhiIndexExact + 1]
                            },
                            getMonthInGanZhi: function() {
                                return this.getMonthGan() + this.getMonthZhi()
                            },
                            getMonthInGanZhiExact: function() {
                                return this.getMonthGanExact() + this.getMonthZhiExact()
                            },
                            getDayGan: function() {
                                return z.GAN[this._p.dayGanIndex + 1]
                            },
                            getDayGanExact: function() {
                                return z.GAN[this._p.dayGanIndexExact + 1]
                            },
                            getDayGanExact2: function() {
                                return z.GAN[this._p.dayGanIndexExact2 + 1]
                            },
                            getDayZhi: function() {
                                return z.ZHI[this._p.dayZhiIndex + 1]
                            },
                            getDayZhiExact: function() {
                                return z.ZHI[this._p.dayZhiIndexExact + 1]
                            },
                            getDayZhiExact2: function() {
                                return z.ZHI[this._p.dayZhiIndexExact2 + 1]
                            },
                            getDayInGanZhi: function() {
                                return this.getDayGan() + this.getDayZhi()
                            },
                            getDayInGanZhiExact: function() {
                                return this.getDayGanExact() + this.getDayZhiExact()
                            },
                            getDayInGanZhiExact2: function() {
                                return this.getDayGanExact2() + this.getDayZhiExact2()
                            },
                            getTimeGan: function() {
                                return z.GAN[this._p.timeGanIndex + 1]
                            },
                            getTimeZhi: function() {
                                return z.ZHI[this._p.timeZhiIndex + 1]
                            },
                            getTimeInGanZhi: function() {
                                return this.getTimeGan() + this.getTimeZhi()
                            },
                            getShengxiao: function() {
                                return this.getYearShengXiao()
                            },
                            getYearShengXiao: function() {
                                return z.SHENGXIAO[this._p.yearZhiIndex + 1]
                            },
                            getYearShengXiaoByLiChun: function() {
                                return z.SHENGXIAO[this._p.yearZhiIndexByLiChun + 1]
                            },
                            getYearShengXiaoExact: function() {
                                return z.SHENGXIAO[this._p.yearZhiIndexExact + 1]
                            },
                            getMonthShengXiao: function() {
                                return z.SHENGXIAO[this._p.monthZhiIndex + 1]
                            },
                            getMonthShengXiaoExact: function() {
                                return z.SHENGXIAO[this._p.monthZhiIndexExact + 1]
                            },
                            getDayShengXiao: function() {
                                return z.SHENGXIAO[this._p.dayZhiIndex + 1]
                            },
                            getTimeShengXiao: function() {
                                return z.SHENGXIAO[this._p.timeZhiIndex + 1]
                            },
                            getYearInChinese: function() {
                                for (var t = this._p.year + "", n = "", e = "0".charCodeAt(0), i = 0, r = t.length; i < r; i++) n += z.NUMBER[t.charCodeAt(i) - e];
                                return n
                            },
                            getMonthInChinese: function() {
                                var t = this._p.month;
                                return (t < 0 ? "闰" : "") + z.MONTH[Math.abs(t)]
                            },
                            getDayInChinese: function() {
                                return z.DAY[this._p.day]
                            },
                            getPengZuGan: function() {
                                return z.PENGZU_GAN[this._p.dayGanIndex + 1]
                            },
                            getPengZuZhi: function() {
                                return z.PENGZU_ZHI[this._p.dayZhiIndex + 1]
                            },
                            getPositionXi: function() {
                                return this.getDayPositionXi()
                            },
                            getPositionXiDesc: function() {
                                return this.getDayPositionXiDesc()
                            },
                            getPositionYangGui: function() {
                                return this.getDayPositionYangGui()
                            },
                            getPositionYangGuiDesc: function() {
                                return this.getDayPositionYangGuiDesc()
                            },
                            getPositionYinGui: function() {
                                return this.getDayPositionYinGui()
                            },
                            getPositionYinGuiDesc: function() {
                                return this.getDayPositionYinGuiDesc()
                            },
                            getPositionFu: function() {
                                return this.getDayPositionFu()
                            },
                            getPositionFuDesc: function() {
                                return this.getDayPositionFuDesc()
                            },
                            getPositionCai: function() {
                                return this.getDayPositionCai()
                            },
                            getPositionCaiDesc: function() {
                                return this.getDayPositionCaiDesc()
                            },
                            getDayPositionXi: function() {
                                return z.POSITION_XI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionXiDesc: function() {
                                return z.POSITION_DESC[this.getDayPositionXi()]
                            },
                            getDayPositionYangGui: function() {
                                return z.POSITION_YANG_GUI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionYangGuiDesc: function() {
                                return z.POSITION_DESC[this.getDayPositionYangGui()]
                            },
                            getDayPositionYinGui: function() {
                                return z.POSITION_YIN_GUI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionYinGuiDesc: function() {
                                return z.POSITION_DESC[this.getDayPositionYinGui()]
                            },
                            getDayPositionFu: function(t) {
                                return (1 === t ? z.POSITION_FU : z.POSITION_FU_2)[this._p.dayGanIndex + 1]
                            },
                            getDayPositionFuDesc: function(t) {
                                return z.POSITION_DESC[this.getDayPositionFu(t)]
                            },
                            getDayPositionCai: function() {
                                return z.POSITION_CAI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionCaiDesc: function() {
                                return z.POSITION_DESC[this.getDayPositionCai()]
                            },
                            getTimePositionXi: function() {
                                return z.POSITION_XI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionXiDesc: function() {
                                return z.POSITION_DESC[this.getTimePositionXi()]
                            },
                            getTimePositionYangGui: function() {
                                return z.POSITION_YANG_GUI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionYangGuiDesc: function() {
                                return z.POSITION_DESC[this.getTimePositionYangGui()]
                            },
                            getTimePositionYinGui: function() {
                                return z.POSITION_YIN_GUI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionYinGuiDesc: function() {
                                return z.POSITION_DESC[this.getTimePositionYinGui()]
                            },
                            getTimePositionFu: function(t) {
                                return (1 === t ? z.POSITION_FU : z.POSITION_FU_2)[this._p.timeGanIndex + 1]
                            },
                            getTimePositionFuDesc: function(t) {
                                return z.POSITION_DESC[this.getTimePositionFu(t)]
                            },
                            getTimePositionCai: function() {
                                return z.POSITION_CAI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionCaiDesc: function() {
                                return z.POSITION_DESC[this.getTimePositionCai()]
                            },
                            _getDayPositionTaiSui: function(t, n) {
                                var e = "";
                                switch (t) {
                                    case "甲子":
                                    case "乙丑":
                                    case "丙寅":
                                    case "丁卯":
                                    case "戊辰":
                                    case "已巳":
                                        e = "震";
                                        break;
                                    case "丙子":
                                    case "丁丑":
                                    case "戊寅":
                                    case "已卯":
                                    case "庚辰":
                                    case "辛巳":
                                        e = "离";
                                        break;
                                    case "戊子":
                                    case "已丑":
                                    case "庚寅":
                                    case "辛卯":
                                    case "壬辰":
                                    case "癸巳":
                                        e = "中";
                                        break;
                                    case "庚子":
                                    case "辛丑":
                                    case "壬寅":
                                    case "癸卯":
                                    case "甲辰":
                                    case "乙巳":
                                        e = "兑";
                                        break;
                                    case "壬子":
                                    case "癸丑":
                                    case "甲寅":
                                    case "乙卯":
                                    case "丙辰":
                                    case "丁巳":
                                        e = "坎";
                                        break;
                                    default:
                                        e = z.POSITION_TAI_SUI_YEAR[n]
                                }
                                return e
                            },
                            getDayPositionTaiSui: function(t) {
                                var n, e;
                                switch (t) {
                                    case 1:
                                        n = this.getDayInGanZhi(), e = this._p.yearZhiIndex;
                                        break;
                                    case 3:
                                        n = this.getDayInGanZhi(), e = this._p.yearZhiIndexExact;
                                        break;
                                    default:
                                        n = this.getDayInGanZhiExact2(), e = this._p.yearZhiIndexByLiChun
                                }
                                return this._getDayPositionTaiSui(n, e)
                            },
                            getDayPositionTaiSuiDesc: function(t) {
                                return z.POSITION_DESC[this.getDayPositionTaiSui(t)]
                            },
                            _getMonthPositionTaiSui: function(t, n) {
                                var e = "",
                                    i = t - z.BASE_MONTH_ZHI_INDEX;
                                switch (i < 0 && (i += 12), i) {
                                    case 0:
                                    case 4:
                                    case 8:
                                        e = "艮";
                                        break;
                                    case 2:
                                    case 6:
                                    case 10:
                                        e = "坤";
                                        break;
                                    case 3:
                                    case 7:
                                    case 11:
                                        e = "巽";
                                        break;
                                    default:
                                        e = z.POSITION_GAN[n]
                                }
                                return e
                            },
                            getMonthPositionTaiSui: function(t) {
                                var n, e;
                                return 3 === t ? (n = this._p.monthZhiIndexExact, e = this._p.monthGanIndexExact) : (n = this._p.monthZhiIndex, e = this._p.monthGanIndex), this._getMonthPositionTaiSui(n, e)
                            },
                            getMonthPositionTaiSuiDesc: function(t) {
                                return z.POSITION_DESC[this.getMonthPositionTaiSui(t)]
                            },
                            getYearPositionTaiSui: function(t) {
                                var n;
                                switch (t) {
                                    case 1:
                                        n = this._p.yearZhiIndex;
                                        break;
                                    case 3:
                                        n = this._p.yearZhiIndexExact;
                                        break;
                                    default:
                                        n = this._p.yearZhiIndexByLiChun
                                }
                                return z.POSITION_TAI_SUI_YEAR[n]
                            },
                            getYearPositionTaiSuiDesc: function(t) {
                                return z.POSITION_DESC[this.getYearPositionTaiSui(t)]
                            },
                            getChong: function() {
                                return this.getDayChong()
                            },
                            getChongGan: function() {
                                return this.getDayChongGan()
                            },
                            getChongGanTie: function() {
                                return this.getDayChongGanTie()
                            },
                            getChongShengXiao: function() {
                                return this.getDayChongShengXiao()
                            },
                            getChongDesc: function() {
                                return this.getDayChongDesc()
                            },
                            getSha: function() {
                                return this.getDaySha()
                            },
                            getDayChong: function() {
                                return z.CHONG[this._p.dayZhiIndex]
                            },
                            getDayChongGan: function() {
                                return z.CHONG_GAN[this._p.dayGanIndex]
                            },
                            getDayChongGanTie: function() {
                                return z.CHONG_GAN_TIE[this._p.dayGanIndex]
                            },
                            getDayChongShengXiao: function() {
                                for (var t = this.getChong(), n = 0, e = z.ZHI.length; n < e; n++)
                                    if (z.ZHI[n] === t) return z.SHENGXIAO[n];
                                return ""
                            },
                            getDayChongDesc: function() {
                                return "(" + this.getDayChongGan() + this.getDayChong() + ")" + this.getDayChongShengXiao()
                            },
                            getDaySha: function() {
                                return z.SHA[this.getDayZhi()]
                            },
                            getTimeChong: function() {
                                return z.CHONG[this._p.timeZhiIndex]
                            },
                            getTimeChongGan: function() {
                                return z.CHONG_GAN[this._p.timeGanIndex]
                            },
                            getTimeChongGanTie: function() {
                                return z.CHONG_GAN_TIE[this._p.timeGanIndex]
                            },
                            getTimeChongShengXiao: function() {
                                for (var t = this.getTimeChong(), n = 0, e = z.ZHI.length; n < e; n++)
                                    if (z.ZHI[n] === t) return z.SHENGXIAO[n];
                                return ""
                            },
                            getTimeChongDesc: function() {
                                return "(" + this.getTimeChongGan() + this.getTimeChong() + ")" + this.getTimeChongShengXiao()
                            },
                            getTimeSha: function() {
                                return z.SHA[this.getTimeZhi()]
                            },
                            getYearNaYin: function() {
                                return z.NAYIN[this.getYearInGanZhi()]
                            },
                            getMonthNaYin: function() {
                                return z.NAYIN[this.getMonthInGanZhi()]
                            },
                            getDayNaYin: function() {
                                return z.NAYIN[this.getDayInGanZhi()]
                            },
                            getTimeNaYin: function() {
                                return z.NAYIN[this.getTimeInGanZhi()]
                            },
                            getSeason: function() {
                                return z.SEASON[Math.abs(this._p.month)]
                            },
                            _convertJieQi: function(t) {
                                var n = t;
                                return "DONG_ZHI" === n ? n = "冬至" : "DA_HAN" === n ? n = "大寒" : "XIAO_HAN" === n ? n = "小寒" : "LI_CHUN" === n ? n = "立春" : "DA_XUE" === n ? n = "大雪" : "YU_SHUI" === n ? n = "雨水" : "JING_ZHE" === n && (n = "惊蛰"), n
                            },
                            getJie: function() {
                                for (var t = 0, n = U.JIE_QI_IN_USE.length; t < n; t += 2) {
                                    var e = U.JIE_QI_IN_USE[t],
                                        i = this._p.jieQi[e];
                                    if (i.getYear() === this._p.solar.getYear() && i.getMonth() === this._p.solar.getMonth() && i.getDay() === this._p.solar.getDay()) return this._convertJieQi(e)
                                }
                                return ""
                            },
                            getQi: function() {
                                for (var t = 1, n = U.JIE_QI_IN_USE.length; t < n; t += 2) {
                                    var e = U.JIE_QI_IN_USE[t],
                                        i = this._p.jieQi[e];
                                    if (i.getYear() === this._p.solar.getYear() && i.getMonth() === this._p.solar.getMonth() && i.getDay() === this._p.solar.getDay()) return this._convertJieQi(e)
                                }
                                return ""
                            },
                            getJieQi: function() {
                                for (var t in this._p.jieQi) {
                                    var n = this._p.jieQi[t];
                                    if (n.getYear() === this._p.solar.getYear() && n.getMonth() === this._p.solar.getMonth() && n.getDay() === this._p.solar.getDay()) return this._convertJieQi(t)
                                }
                                return ""
                            },
                            getWeek: function() {
                                return this._p.weekIndex
                            },
                            getWeekInChinese: function() {
                                return w.WEEK[this.getWeek()]
                            },
                            getXiu: function() {
                                return z.XIU[this.getDayZhi() + this.getWeek()]
                            },
                            getXiuLuck: function() {
                                return z.XIU_LUCK[this.getXiu()]
                            },
                            getXiuSong: function() {
                                return z.XIU_SONG[this.getXiu()]
                            },
                            getZheng: function() {
                                return z.ZHENG[this.getXiu()]
                            },
                            getAnimal: function() {
                                return z.ANIMAL[this.getXiu()]
                            },
                            getGong: function() {
                                return z.GONG[this.getXiu()]
                            },
                            getShou: function() {
                                return z.SHOU[this.getGong()]
                            },
                            getFestivals: function() {
                                var t = [],
                                    n = z.FESTIVAL[this._p.month + "-" + this._p.day];
                                return n && t.push(n), 12 === Math.abs(this._p.month) && this._p.day >= 29 && this._p.year != this.next(1).getYear() && t.push("除夕"), t
                            },
                            getOtherFestivals: function() {
                                var t = [],
                                    n = z.OTHER_FESTIVAL[this._p.month + "-" + this._p.day];
                                n && (t = t.concat(n));
                                var e = this._p.solar.toYmd();
                                this._p.solar.toYmd() === this._p.jieQi["清明"].next(-1).toYmd() && t.push("寒食节");
                                var i = this._p.jieQi["立春"],
                                    r = 4 - i.getLunar().getDayGanIndex();
                                return r < 0 && (r += 10), e === i.next(r + 40).toYmd() && t.push("春社"), (r = 4 - (i = this._p.jieQi["立秋"]).getLunar().getDayGanIndex()) < 0 && (r += 10), e === i.next(r + 40).toYmd() && t.push("秋社"), t
                            },
                            getBaZi: function() {
                                var t = this.getEightChar(),
                                    n = [];
                                return n.push(t.getYear()), n.push(t.getMonth()), n.push(t.getDay()), n.push(t.getTime()), n
                            },
                            getBaZiWuXing: function() {
                                var t = this.getEightChar(),
                                    n = [];
                                return n.push(t.getYearWuXing()), n.push(t.getMonthWuXing()), n.push(t.getDayWuXing()), n.push(t.getTimeWuXing()), n
                            },
                            getBaZiNaYin: function() {
                                var t = this.getEightChar(),
                                    n = [];
                                return n.push(t.getYearNaYin()), n.push(t.getMonthNaYin()), n.push(t.getDayNaYin()), n.push(t.getTimeNaYin()), n
                            },
                            getBaZiShiShenGan: function() {
                                var t = this.getEightChar(),
                                    n = [];
                                return n.push(t.getYearShiShenGan()), n.push(t.getMonthShiShenGan()), n.push(t.getDayShiShenGan()), n.push(t.getTimeShiShenGan()), n
                            },
                            getBaZiShiShenZhi: function() {
                                var t = this.getEightChar(),
                                    n = [];
                                return n.push(t.getYearShiShenZhi()[0]), n.push(t.getMonthShiShenZhi()[0]), n.push(t.getDayShiShenZhi()[0]), n.push(t.getTimeShiShenZhi()[0]), n
                            },
                            getBaZiShiShenYearZhi: function() {
                                return this.getEightChar().getYearShiShenZhi()
                            },
                            getBaZiShiShenMonthZhi: function() {
                                return this.getEightChar().getMonthShiShenZhi()
                            },
                            getBaZiShiShenDayZhi: function() {
                                return this.getEightChar().getDayShiShenZhi()
                            },
                            getBaZiShiShenTimeZhi: function() {
                                return this.getEightChar().getTimeShiShenZhi()
                            },
                            getZhiXing: function() {
                                var t = this._p.dayZhiIndex - this._p.monthZhiIndex;
                                return t < 0 && (t += 12), z.ZHI_XING[t + 1]
                            },
                            getDayTianShen: function() {
                                var t = this.getMonthZhi(),
                                    n = z.ZHI_TIAN_SHEN_OFFSET[t];
                                return z.TIAN_SHEN[(this._p.dayZhiIndex + n) % 12 + 1]
                            },
                            getTimeTianShen: function() {
                                var t = this.getDayZhiExact(),
                                    n = z.ZHI_TIAN_SHEN_OFFSET[t];
                                return z.TIAN_SHEN[(this._p.timeZhiIndex + n) % 12 + 1]
                            },
                            getDayTianShenType: function() {
                                return z.TIAN_SHEN_TYPE[this.getDayTianShen()]
                            },
                            getTimeTianShenType: function() {
                                return z.TIAN_SHEN_TYPE[this.getTimeTianShen()]
                            },
                            getDayTianShenLuck: function() {
                                return z.TIAN_SHEN_TYPE_LUCK[this.getDayTianShenType()]
                            },
                            getTimeTianShenLuck: function() {
                                return z.TIAN_SHEN_TYPE_LUCK[this.getTimeTianShenType()]
                            },
                            getDayPositionTai: function() {
                                return z.POSITION_TAI_DAY[z.getJiaZiIndex(this.getDayInGanZhi())]
                            },
                            getMonthPositionTai: function() {
                                var t = this._p.month;
                                return t < 0 ? "" : z.POSITION_TAI_MONTH[t - 1]
                            },
                            getDayYi: function(t) {
                                return z.getDayYi(2 == t ? this.getMonthInGanZhiExact() : this.getMonthInGanZhi(), this.getDayInGanZhi())
                            },
                            getDayJi: function(t) {
                                return z.getDayJi(2 == t ? this.getMonthInGanZhiExact() : this.getMonthInGanZhi(), this.getDayInGanZhi())
                            },
                            getDayJiShen: function() {
                                return z.getDayJiShen(this.getMonth(), this.getDayInGanZhi())
                            },
                            getDayXiongSha: function() {
                                return z.getDayXiongSha(this.getMonth(), this.getDayInGanZhi())
                            },
                            getTimeYi: function() {
                                return z.getTimeYi(this.getDayInGanZhiExact(), this.getTimeInGanZhi())
                            },
                            getTimeJi: function() {
                                return z.getTimeJi(this.getDayInGanZhiExact(), this.getTimeInGanZhi())
                            },
                            getYueXiang: function() {
                                return z.YUE_XIANG[this._p.day]
                            },
                            _getYearNineStar: function(t) {
                                var n = z.getJiaZiIndex(t) + 1,
                                    e = 0;
                                n != z.getJiaZiIndex(this.getYearInGanZhi()) + 1 && (e = -1);
                                var i = (62 + Math.floor((this._p.year + e + 2696) / 60) % 3 * 3 - n) % 9;
                                return 0 === i && (i = 9), q.fromIndex(i - 1)
                            },
                            getYearNineStar: function(t) {
                                var n;
                                switch (t) {
                                    case 1:
                                        n = this.getYearInGanZhi();
                                        break;
                                    case 3:
                                        n = this.getYearInGanZhiExact();
                                        break;
                                    default:
                                        n = this.getYearInGanZhiByLiChun()
                                }
                                return this._getYearNineStar(n)
                            },
                            _getMonthNineStar: function(t, n) {
                                var e = 27 - t % 3 * 3;
                                n < z.BASE_MONTH_ZHI_INDEX && (e -= 3);
                                var i = (e - n) % 9;
                                return q.fromIndex(i)
                            },
                            getMonthNineStar: function(t) {
                                var n, e;
                                switch (t) {
                                    case 1:
                                        n = this._p.yearZhiIndex, e = this._p.monthZhiIndex;
                                        break;
                                    case 3:
                                        n = this._p.yearZhiIndexExact, e = this._p.monthZhiIndexExact;
                                        break;
                                    default:
                                        n = this._p.yearZhiIndexByLiChun, e = this._p.monthZhiIndex
                                }
                                return this._getMonthNineStar(n, e)
                            },
                            getDayNineStar: function() {
                                var t, n, e, i = this._p.solar.toYmd(),
                                    r = this._p.jieQi["冬至"],
                                    a = this._p.jieQi.DONG_ZHI,
                                    F = this._p.jieQi["夏至"],
                                    h = z.getJiaZiIndex(r.getLunar().getDayInGanZhi()),
                                    u = z.getJiaZiIndex(a.getLunar().getDayInGanZhi()),
                                    C = z.getJiaZiIndex(F.getLunar().getDayInGanZhi()),
                                    o = (t = h > 29 ? r.next(60 - h) : r.next(-h)).toYmd(),
                                    A = (n = u > 29 ? a.next(60 - u) : a.next(-u)).toYmd(),
                                    E = (e = C > 29 ? F.next(60 - C) : F.next(-C)).toYmd(),
                                    D = 0;
                                return i >= o && i < E ? D = P.getDaysBetween(t.getCalendar(), this.getSolar().getCalendar()) % 9 : i >= E && i < A ? D = 8 - P.getDaysBetween(e.getCalendar(), this.getSolar().getCalendar()) % 9 : i >= A ? D = P.getDaysBetween(n.getCalendar(), this.getSolar().getCalendar()) % 9 : i < o && (D = (8 + P.getDaysBetween(this.getSolar().getCalendar(), t.getCalendar())) % 9), q.fromIndex(D)
                            },
                            getTimeNineStar: function() {
                                var t = this._p.solar.toYmd(),
                                    n = !1;
                                (t >= this._p.jieQi["冬至"].toYmd() && t < this._p.jieQi["夏至"].toYmd() || t >= this._p.jieQi.DONG_ZHI.toYmd()) && (n = !0);
                                var e = n ? 6 : 2,
                                    i = this.getDayZhi();
                                "子午卯酉".indexOf(i) > -1 ? e = n ? 0 : 8 : "辰戌丑未".indexOf(i) > -1 && (e = n ? 3 : 5);
                                var r = n ? e + this._p.timeZhiIndex : e + 9 - this._p.timeZhiIndex;
                                return q.fromIndex(r % 9)
                            },
                            getSolar: function() {
                                return this._p.solar
                            },
                            getJieQiTable: function() {
                                return this._p.jieQi
                            },
                            getJieQiList: function() {
                                return this._p.jieQiList
                            },
                            getNextJie: function(t) {
                                for (var n = [], e = 0, i = U.JIE_QI_IN_USE.length / 2; e < i; e++) n.push(U.JIE_QI_IN_USE[2 * e]);
                                return this._getNearJieQi(!0, n, t)
                            },
                            getPrevJie: function(t) {
                                for (var n = [], e = 0, i = U.JIE_QI_IN_USE.length / 2; e < i; e++) n.push(U.JIE_QI_IN_USE[2 * e]);
                                return this._getNearJieQi(!1, n, t)
                            },
                            getNextQi: function(t) {
                                for (var n = [], e = 0, i = U.JIE_QI_IN_USE.length / 2; e < i; e++) n.push(U.JIE_QI_IN_USE[2 * e + 1]);
                                return this._getNearJieQi(!0, n, t)
                            },
                            getPrevQi: function(t) {
                                for (var n = [], e = 0, i = U.JIE_QI_IN_USE.length / 2; e < i; e++) n.push(U.JIE_QI_IN_USE[2 * e + 1]);
                                return this._getNearJieQi(!1, n, t)
                            },
                            getNextJieQi: function(t) {
                                return this._getNearJieQi(!0, null, t)
                            },
                            getPrevJieQi: function(t) {
                                return this._getNearJieQi(!1, null, t)
                            },
                            _buildJieQi: function(t, n) {
                                var e, i, r = !1,
                                    a = !1;
                                for (e = 0, i = U.JIE_QI.length; e < i; e++)
                                    if (U.JIE_QI[e] === t) {
                                        e % 2 == 0 ? a = !0 : r = !0;
                                        break
                                    }
                                return {
                                    _p: {
                                        name: t,
                                        solar: n,
                                        jie: r,
                                        qi: a
                                    },
                                    getName: function() {
                                        return this._p.name
                                    },
                                    getSolar: function() {
                                        return this._p.solar
                                    },
                                    setName: function(t) {
                                        this._p.name = t
                                    },
                                    setSolar: function(t) {
                                        this._p.solar = t
                                    },
                                    isJie: function() {
                                        return this._p.jie
                                    },
                                    isQi: function() {
                                        return this._p.qi
                                    },
                                    toString: function() {
                                        return this.getName()
                                    }
                                }
                            },
                            _getNearJieQi: function(t, n, e) {
                                var i = null,
                                    r = null,
                                    a = {},
                                    F = !1;
                                if (null != n)
                                    for (var h = 0, u = n.length; h < u; h++) a[n[h]] = !0, F = !0;
                                var C = this._p.solar[e ? "toYmd" : "toYmdHms"]();
                                for (var o in this._p.jieQi) {
                                    var A = this._convertJieQi(o);
                                    if (!F || a[A]) {
                                        var E = this._p.jieQi[o],
                                            D = E[e ? "toYmd" : "toYmdHms"]();
                                        if (t) {
                                            if (D < C) continue;
                                            (null == r || D < r[e ? "toYmd" : "toYmdHms"]()) && (i = A, r = E)
                                        } else {
                                            if (D > C) continue;
                                            (null == r || D > r[e ? "toYmd" : "toYmdHms"]()) && (i = A, r = E)
                                        }
                                    }
                                }
                                return null == r ? null : this._buildJieQi(i, r)
                            },
                            getCurrentJieQi: function() {
                                for (var t in this._p.jieQi) {
                                    var n = this._p.jieQi[t];
                                    if (n.getYear() === this._p.solar.getYear() && n.getMonth() === this._p.solar.getMonth() && n.getDay() === this._p.solar.getDay()) return this._buildJieQi(this._convertJieQi(t), n)
                                }
                                return null
                            },
                            getCurrentJie: function() {
                                for (var t = 0, n = U.JIE_QI_IN_USE.length; t < n; t += 2) {
                                    var e = U.JIE_QI_IN_USE[t],
                                        i = this._p.jieQi[e];
                                    if (i.getYear() === this._p.solar.getYear() && i.getMonth() === this._p.solar.getMonth() && i.getDay() === this._p.solar.getDay()) return this._buildJieQi(this._convertJieQi(e), i)
                                }
                                return null
                            },
                            getCurrentQi: function() {
                                for (var t = 1, n = U.JIE_QI_IN_USE.length; t < n; t += 2) {
                                    var e = U.JIE_QI_IN_USE[t],
                                        i = this._p.jieQi[e];
                                    if (i.getYear() === this._p.solar.getYear() && i.getMonth() === this._p.solar.getMonth() && i.getDay() === this._p.solar.getDay()) return this._buildJieQi(this._convertJieQi(e), i)
                                }
                                return null
                            },
                            getEightChar: function() {
                                return this._p.eightChar || (this._p.eightChar = $.fromLunar(this)), this._p.eightChar
                            },
                            next: function(t) {
                                return this._p.solar.next(t).getLunar()
                            },
                            getYearXun: function() {
                                return z.getXun(this.getYearInGanZhi())
                            },
                            getMonthXun: function() {
                                return z.getXun(this.getMonthInGanZhi())
                            },
                            getDayXun: function() {
                                return z.getXun(this.getDayInGanZhi())
                            },
                            getTimeXun: function() {
                                return z.getXun(this.getTimeInGanZhi())
                            },
                            getYearXunByLiChun: function() {
                                return z.getXun(this.getYearInGanZhiByLiChun())
                            },
                            getYearXunExact: function() {
                                return z.getXun(this.getYearInGanZhiExact())
                            },
                            getMonthXunExact: function() {
                                return z.getXun(this.getMonthInGanZhiExact())
                            },
                            getDayXunExact: function() {
                                return z.getXun(this.getDayInGanZhiExact())
                            },
                            getDayXunExact2: function() {
                                return z.getXun(this.getDayInGanZhiExact2())
                            },
                            getYearXunKong: function() {
                                return z.getXunKong(this.getYearInGanZhi())
                            },
                            getMonthXunKong: function() {
                                return z.getXunKong(this.getMonthInGanZhi())
                            },
                            getDayXunKong: function() {
                                return z.getXunKong(this.getDayInGanZhi())
                            },
                            getTimeXunKong: function() {
                                return z.getXunKong(this.getTimeInGanZhi())
                            },
                            getYearXunKongByLiChun: function() {
                                return z.getXunKong(this.getYearInGanZhiByLiChun())
                            },
                            getYearXunKongExact: function() {
                                return z.getXunKong(this.getYearInGanZhiExact())
                            },
                            getMonthXunKongExact: function() {
                                return z.getXunKong(this.getMonthInGanZhiExact())
                            },
                            getDayXunKongExact: function() {
                                return z.getXunKong(this.getDayInGanZhiExact())
                            },
                            getDayXunKongExact2: function() {
                                return z.getXunKong(this.getDayInGanZhiExact2())
                            },
                            toString: function() {
                                return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese()
                            },
                            toFullString: function() {
                                var t = this.toString();
                                t += " " + this.getYearInGanZhi() + "(" + this.getYearShengXiao() + ")年", t += " " + this.getMonthInGanZhi() + "(" + this.getMonthShengXiao() + ")月", t += " " + this.getDayInGanZhi() + "(" + this.getDayShengXiao() + ")日", t += " " + this.getTimeZhi() + "(" + this.getTimeShengXiao() + ")时", t += " 纳音[" + this.getYearNaYin() + " " + this.getMonthNaYin() + " " + this.getDayNaYin() + " " + this.getTimeNaYin() + "]", t += " 星期" + this.getWeekInChinese();
                                var n, e, i = this.getFestivals();
                                for (n = 0, e = i.length; n < e; n++) t += " (" + i[n] + ")";
                                for (n = 0, e = (i = this.getOtherFestivals()).length; n < e; n++) t += " (" + i[n] + ")";
                                var r = this.getJieQi();
                                return r.length > 0 && (t += " [" + r + "]"), t += " " + this.getGong() + "方" + this.getShou(), t += " 星宿[" + this.getXiu() + this.getZheng() + this.getAnimal() + "](" + this.getXiuLuck() + ")", t += " 彭祖百忌[" + this.getPengZuGan() + " " + this.getPengZuZhi() + "]", t += " 喜神方位[" + this.getDayPositionXi() + "](" + this.getDayPositionXiDesc() + ")", t += " 阳贵神方位[" + this.getDayPositionYangGui() + "](" + this.getDayPositionYangGuiDesc() + ")", t += " 阴贵神方位[" + this.getDayPositionYinGui() + "](" + this.getDayPositionYinGuiDesc() + ")", t += " 福神方位[" + this.getDayPositionFu() + "](" + this.getDayPositionFuDesc() + ")", t += " 财神方位[" + this.getDayPositionCai() + "](" + this.getDayPositionCaiDesc() + ")", t += " 冲[" + this.getDayChongDesc() + "]", t += " 煞[" + this.getDaySha() + "]"
                            },
                            _buildNameAndIndex: function(t, n) {
                                return {
                                    _p: {
                                        name: t,
                                        index: n
                                    },
                                    getName: function() {
                                        return this._p.name
                                    },
                                    setName: function(t) {
                                        this._p.name = t
                                    },
                                    getIndex: function() {
                                        return this._p.index
                                    },
                                    setIndex: function(t) {
                                        this._p.index = t
                                    },
                                    toString: function() {
                                        return this.getName()
                                    },
                                    toFullString: function() {
                                        return this.getName() + "第" + this.getIndex() + "天"
                                    }
                                }
                            },
                            getShuJiu: function() {
                                var t = P.fromYmd(this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    n = this._p.jieQi.DONG_ZHI,
                                    e = P.fromYmd(n.getYear(), n.getMonth(), n.getDay());
                                t < e && (n = this._p.jieQi["冬至"], e = P.fromYmd(n.getYear(), n.getMonth(), n.getDay()));
                                var i = P.fromYmd(n.getYear(), n.getMonth(), n.getDay());
                                if (i.setDate(i.getDate() + 81), t < e || t >= i) return null;
                                var r = P.getDaysBetween(e, t);
                                return this._buildNameAndIndex(z.NUMBER[Math.floor(r / 9) + 1] + "九", r % 9 + 1)
                            },
                            getFu: function() {
                                var t = P.fromYmd(this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    n = this._p.jieQi["夏至"],
                                    e = this._p.jieQi["立秋"],
                                    i = P.fromYmd(n.getYear(), n.getMonth(), n.getDay()),
                                    r = 6 - n.getLunar().getDayGanIndex();
                                if (r < 0 && (r += 10), r += 20, i.setDate(i.getDate() + r), t < i) return null;
                                var a = P.getDaysBetween(i, t);
                                if (a < 10) return this._buildNameAndIndex("初伏", a + 1);
                                if (i.setDate(i.getDate() + 10), (a = P.getDaysBetween(i, t)) < 10) return this._buildNameAndIndex("中伏", a + 1);
                                i.setDate(i.getDate() + 10);
                                var F = P.fromYmd(e.getYear(), e.getMonth(), e.getDay());
                                if (a = P.getDaysBetween(i, t), F <= i) {
                                    if (a < 10) return this._buildNameAndIndex("末伏", a + 1)
                                } else {
                                    if (a < 10) return this._buildNameAndIndex("中伏", a + 11);
                                    if (i.setDate(i.getDate() + 10), (a = P.getDaysBetween(i, t)) < 10) return this._buildNameAndIndex("末伏", a + 1)
                                }
                                return null
                            },
                            getLiuYao: function() {
                                return z.LIU_YAO[(Math.abs(this._p.month) + this._p.day - 2) % 6]
                            },
                            getWuHou: function() {
                                for (var t = this.getPrevJieQi(!0), n = t.getName(), e = 0, i = 0, r = U.JIE_QI.length; i < r; i++)
                                    if (n === U.JIE_QI[i]) {
                                        e = i;
                                        break
                                    }
                                var a = P.fromYmd(this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    F = t.getSolar(),
                                    h = P.fromYmd(F.getYear(), F.getMonth(), F.getDay()),
                                    u = P.getDaysBetween(h, a);
                                return z.WU_HOU[(3 * e + Math.floor(u / 5)) % z.WU_HOU.length]
                            },
                            getHou: function() {
                                var t = this.getPrevJieQi(!0),
                                    n = t.getName(),
                                    e = t.getSolar(),
                                    i = P.getDaysBetweenYmd(e.getYear(), e.getMonth(), e.getDay(), this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    r = z.HOU.length - 1,
                                    a = Math.floor(i / 5);
                                return a > r && (a = r), n + " " + z.HOU[a]
                            },
                            getDayLu: function() {
                                var t = z.LU[this.getDayGan()],
                                    n = z.LU[this.getDayZhi()],
                                    e = t + "命互禄";
                                return n && (e += " " + n + "命进禄"), e
                            },
                            getTimes: function() {
                                var t = [];
                                t.push(tt.fromYmdHms(this._p.year, this._p.month, this._p.day, 0, 0, 0));
                                for (var n = 0; n < 12; n++) t.push(tt.fromYmdHms(this._p.year, this._p.month, this._p.day, 2 * (n + 1) - 1, 0, 0));
                                return t
                            },
                            getFoto: function() {
                                return et.fromLunar(this)
                            },
                            getTao: function() {
                                return at.fromLunar(this)
                            }
                        }
                    };
                return {
                    JIE_QI: ["冬至", "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪"],
                    JIE_QI_IN_USE: ["DA_XUE", "冬至", "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "DONG_ZHI", "XIAO_HAN", "DA_HAN", "LI_CHUN", "YU_SHUI", "JING_ZHE"],
                    fromYmdHms: function(t, e, i, r, a, F) {
                        return n(t, e, i, r, a, F)
                    },
                    fromYmd: function(t, e, i) {
                        return n(t, e, i, 0, 0, 0)
                    },
                    fromDate: function(t) {
                        return function(t) {
                            for (var n = t.getFullYear(), i = t.getMonth() + 1, r = t.getDate(), a = 0, F = 0, h = 0, u = W.fromYear(n), C = u.getMonths(), o = 0, A = C.length; o < A; o++) {
                                var E = C[o],
                                    D = L.fromJulianDay(E.getFirstJulianDay()),
                                    s = P.getDaysBetweenYmd(D.getYear(), D.getMonth(), D.getDay(), n, i, r);
                                if (s < E.getDayCount()) {
                                    a = E.getYear(), F = E.getMonth(), h = s + 1;
                                    break
                                }
                            }
                            return e(a, F, h, t.getHours(), t.getMinutes(), t.getSeconds(), L.fromDate(t), u)
                        }(t)
                    }
                }
            }(),
            J = function() {
                var t = function(t, e) {
                        return n(t.getFullYear(), t.getMonth() + 1, t.getDate(), e)
                    },
                    n = function(e, i, r, a) {
                        return {
                            _p: {
                                year: e,
                                month: i,
                                day: r,
                                start: a,
                                calendar: P.fromYmd(e, i, r)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getDay: function() {
                                return this._p.day
                            },
                            getStart: function() {
                                return this._p.start
                            },
                            getIndex: function() {
                                var t = P.fromYmd(this._p.year, this._p.month, 1).getDay() - this._p.start;
                                return t < 0 && (t += 7), Math.ceil((this._p.day + t) / 7)
                            },
                            getIndexInYear: function() {
                                var t = P.fromYmd(this._p.year, 1, 1).getDay() - this._p.start;
                                return t < 0 && (t += 7), Math.ceil((w.getDaysInYear(this._p.year, this._p.month, this._p.day) + t) / 7)
                            },
                            next: function(e, i) {
                                if (0 === e) return n(this._p.year, this._p.month, this._p.day, this._p.start);
                                var r;
                                if (i) {
                                    var a = e;
                                    r = P.fromYmd(this._p.year, this._p.month, this._p.day);
                                    for (var F = t(r, this._p.start), h = this._p.month, u = a > 0; 0 !== a;) {
                                        r.setDate(r.getDate() + (u ? 7 : -7));
                                        var C = (F = t(r, this._p.start)).getMonth();
                                        if (h !== C) {
                                            var o = F.getIndex();
                                            if (u)
                                                if (1 === o) {
                                                    var A = F.getFirstDay();
                                                    C = (F = n(A.getYear(), A.getMonth(), A.getDay(), this._p.start)).getMonth()
                                                } else r = P.fromYmd(F.getYear(), F.getMonth(), 1), F = t(r, this._p.start);
                                            else if (w.getWeeksOfMonth(F.getYear(), F.getMonth(), this._p.start) === o) {
                                                var E = F.getFirstDay().next(6);
                                                C = (F = n(E.getYear(), E.getMonth(), E.getDay(), this._p.start)).getMonth()
                                            } else r = P.fromYmd(F.getYear(), F.getMonth(), w.getDaysOfMonth(F.getYear(), F.getMonth())), F = t(r, this._p.start);
                                            h = C
                                        }
                                        a -= u ? 1 : -1
                                    }
                                    return F
                                }
                                return (r = P.fromYmd(this._p.year, this._p.month, this._p.day)).setDate(r.getDate() + 7 * e), t(r, this._p.start)
                            },
                            getFirstDay: function() {
                                var t = P.fromYmd(this._p.year, this._p.month, this._p.day),
                                    n = t.getDay() - this._p.start;
                                return n < 0 && (n += 7), t.setDate(t.getDate() - n), L.fromDate(t)
                            },
                            getFirstDayInMonth: function() {
                                for (var t = 0, n = this.getDays(), e = 0; e < n.length; e++)
                                    if (this._p.month === n[e].getMonth()) {
                                        t = e;
                                        break
                                    }
                                return n[t]
                            },
                            getDays: function() {
                                var t = this.getFirstDay(),
                                    n = [];
                                n.push(t);
                                for (var e = 1; e < 7; e++) n.push(t.next(e));
                                return n
                            },
                            getDaysInMonth: function() {
                                for (var t = this.getDays(), n = [], e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    this._p.month === i.getMonth() && n.push(i)
                                }
                                return n
                            },
                            toString: function() {
                                return this.getYear() + "." + this.getMonth() + "." + this.getIndex()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + this.getMonth() + "月第" + this.getIndex() + "周"
                            }
                        }
                    };
                return {
                    fromYmd: function(t, e, i, r) {
                        return n(t, e, i, r)
                    },
                    fromDate: function(n, e) {
                        return t(n, e)
                    }
                }
            }(),
            b = function() {
                var t = function(t) {
                        return n(t.getFullYear(), t.getMonth() + 1)
                    },
                    n = function(n, e) {
                        return {
                            _p: {
                                year: n,
                                month: e,
                                calendar: P.fromYmd(n, e, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            next: function(n) {
                                var e = P.fromYmd(this._p.year, this._p.month, 1);
                                return e.setMonth(e.getMonth() + n), t(e)
                            },
                            getDays: function() {
                                var t = [],
                                    n = L.fromYmd(this._p.year, this._p.month, 1);
                                t.push(n);
                                for (var e = w.getDaysOfMonth(this._p.year, this._p.month), i = 1; i < e; i++) t.push(n.next(i));
                                return t
                            },
                            getWeeks: function(t) {
                                for (var n = [], e = this._p.year, i = this._p.month, r = w.getWeeksOfMonth(e, i, t), a = w.getDaysOfMonth(e, i), F = 0; F < r; F++) {
                                    var h = e,
                                        u = i,
                                        C = 1 + 7 * F;
                                    C > a && (C -= a, ++u > 12 && h++), n.push(J.fromYmd(h, u, C, t))
                                }
                                return n
                            },
                            toString: function() {
                                return this.getYear() + "-" + this.getMonth()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + this.getMonth() + "月"
                            }
                        }
                    };
                return {
                    fromYm: function(t, e) {
                        return n(t, e)
                    },
                    fromDate: function(n) {
                        return t(n)
                    }
                }
            }(),
            Q = function() {
                var t = function(t) {
                        return n(t.getFullYear(), t.getMonth() + 1)
                    },
                    n = function(e, i) {
                        return {
                            _p: {
                                year: e,
                                month: i,
                                calendar: P.fromYmd(e, i, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getIndex: function() {
                                return Math.ceil(this._p.month / 3)
                            },
                            next: function(e) {
                                if (0 === e) return n(this._p.year, this._p.month);
                                var i = P.fromYmd(this._p.year, this._p.month, 1);
                                return i.setMonth(i.getMonth() + 3 * e), t(i)
                            },
                            getMonths: function() {
                                for (var t = [], n = this.getIndex() - 1, e = 0; e < 3; e++) t.push(b.fromYm(this._p.year, 3 * n + e + 1));
                                return t
                            },
                            toString: function() {
                                return this.getYear() + "." + this.getIndex()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + this.getIndex() + "季度"
                            }
                        }
                    };
                return {
                    fromYm: function(t, e) {
                        return n(t, e)
                    },
                    fromDate: function(n) {
                        return t(n)
                    }
                }
            }(),
            k = function() {
                var t = function(t) {
                        return n(t.getFullYear(), t.getMonth() + 1)
                    },
                    n = function(e, i) {
                        return {
                            _p: {
                                year: e,
                                month: i,
                                calendar: P.fromYmd(e, i, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getIndex: function() {
                                return Math.ceil(this._p.month / 6)
                            },
                            next: function(e) {
                                if (0 === e) return n(this._p.year, this._p.month);
                                var i = P.fromYmd(this._p.year, this._p.month, 1);
                                return i.setMonth(i.getMonth() + 6 * e), t(i)
                            },
                            getMonths: function() {
                                for (var t = [], n = this.getIndex() - 1, e = 0; e < 6; e++) t.push(b.fromYm(this._p.year, 6 * n + e + 1));
                                return t
                            },
                            toString: function() {
                                return this.getYear() + "." + this.getIndex()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + ["上", "下"][this.getIndex() - 1] + "半年"
                            }
                        }
                    };
                return {
                    fromYm: function(t, e) {
                        return n(t, e)
                    },
                    fromDate: function(n) {
                        return t(n)
                    }
                }
            }(),
            K = function() {
                var t = function(t) {
                        return n(t.getFullYear())
                    },
                    n = function(n) {
                        return {
                            _p: {
                                year: n,
                                calendar: P.fromYmd(n, 1, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            next: function(n) {
                                var e = P.fromYmd(this._p.year, 1, 1);
                                return e.setFullYear(e.getFullYear() + n), t(e)
                            },
                            getMonths: function() {
                                var t = [],
                                    n = b.fromYm(this._p.year, 1);
                                t.push(n);
                                for (var e = 1; e < 12; e++) t.push(n.next(e));
                                return t
                            },
                            toString: function() {
                                return this.getYear() + ""
                            },
                            toFullString: function() {
                                return this.getYear() + "年"
                            }
                        }
                    };
                return {
                    fromYear: function(t) {
                        return n(t)
                    },
                    fromDate: function(n) {
                        return t(n)
                    }
                }
            }(),
            W = function() {
                var t = ["下", "上", "中"],
                    n = ["七", "八", "九", "一", "二", "三", "四", "五", "六"],
                    e = [75, 94, 170, 238, 265, 322, 389, 469, 553, 583, 610, 678, 735, 754, 773, 849, 887, 936, 1050, 1069, 1126, 1145, 1164, 1183, 1259, 1278, 1308, 1373, 1403, 1441, 1460, 1498, 1555, 1593, 1612, 1631, 1642, 2033, 2128, 2147, 2242, 2614, 2728, 2910, 3062, 3244, 3339, 3616, 3711, 3730, 3825, 4007, 4159, 4197, 4322, 4341, 4379, 4417, 4531, 4599, 4694, 4713, 4789, 4808, 4971, 5085, 5104, 5161, 5180, 5199, 5294, 5305, 5476, 5677, 5696, 5772, 5791, 5848, 5886, 6049, 6068, 6144, 6163, 6258, 6402, 6440, 6497, 6516, 6630, 6641, 6660, 6679, 6736, 6774, 6850, 6869, 6899, 6918, 6994, 7013, 7032, 7051, 7070, 7089, 7108, 7127, 7146, 7222, 7271, 7290, 7309, 7366, 7385, 7404, 7442, 7461, 7480, 7491, 7499, 7594, 7624, 7643, 7662, 7681, 7719, 7738, 7814, 7863, 7882, 7901, 7939, 7958, 7977, 7996, 8034, 8053, 8072, 8091, 8121, 8159, 8186, 8216, 8235, 8254, 8273, 8311, 8330, 8341, 8349, 8368, 8444, 8463, 8474, 8493, 8531, 8569, 8588, 8626, 8664, 8683, 8694, 8702, 8713, 8721, 8751, 8789, 8808, 8816, 8827, 8846, 8884, 8903, 8922, 8941, 8971, 9036, 9066, 9085, 9104, 9123, 9142, 9161, 9180, 9199, 9218, 9256, 9294, 9313, 9324, 9343, 9362, 9381, 9419, 9438, 9476, 9514, 9533, 9544, 9552, 9563, 9571, 9582, 9601, 9639, 9658, 9666, 9677, 9696, 9734, 9753, 9772, 9791, 9802, 9821, 9886, 9897, 9916, 9935, 9954, 9973, 9992],
                    i = [37, 56, 113, 132, 151, 189, 208, 227, 246, 284, 303, 341, 360, 379, 417, 436, 458, 477, 496, 515, 534, 572, 591, 629, 648, 667, 697, 716, 792, 811, 830, 868, 906, 925, 944, 963, 982, 1001, 1020, 1039, 1058, 1088, 1153, 1202, 1221, 1240, 1297, 1335, 1392, 1411, 1422, 1430, 1517, 1525, 1536, 1574, 3358, 3472, 3806, 3988, 4751, 4941, 5066, 5123, 5275, 5343, 5438, 5457, 5495, 5533, 5552, 5715, 5810, 5829, 5905, 5924, 6421, 6535, 6793, 6812, 6888, 6907, 7002, 7184, 7260, 7279, 7374, 7556, 7746, 7757, 7776, 7833, 7852, 7871, 7966, 8015, 8110, 8129, 8148, 8224, 8243, 8338, 8406, 8425, 8482, 8501, 8520, 8558, 8596, 8607, 8615, 8645, 8740, 8778, 8835, 8865, 8930, 8960, 8979, 8998, 9017, 9055, 9074, 9093, 9112, 9150, 9188, 9237, 9275, 9332, 9351, 9370, 9408, 9427, 9446, 9457, 9465, 9495, 9560, 9590, 9628, 9647, 9685, 9715, 9742, 9780, 9810, 9818, 9829, 9848, 9867, 9905, 9924, 9943, 9962, 1e4],
                    r = {},
                    a = {};
                ! function() {
                    var t, n;
                    for (t = 0, n = e.length; t < n; t++) r["_" + e[t]] = 13;
                    for (t = 0, n = i.length; t < n; t++) r["_" + i[t]] = 14
                }();
                var F = function(e) {
                    var i = "_" + e,
                        F = a[i];
                    return F || (F = function(e) {
                        var i, a, F, h = ((a = (i = e - 4) % 10) < 0 && (a += 10), (F = i % 12) < 0 && (F += 12), {
                            ganIndex: a,
                            zhiIndex: F
                        });
                        return {
                            _p: {
                                year: e,
                                ganIndex: h.ganIndex,
                                zhiIndex: h.zhiIndex,
                                months: [],
                                jieQiJulianDays: []
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getGanIndex: function() {
                                return this._p.ganIndex
                            },
                            getZhiIndex: function() {
                                return this._p.zhiIndex
                            },
                            getGan: function() {
                                return z.GAN[this._p.ganIndex + 1]
                            },
                            getZhi: function() {
                                return z.ZHI[this._p.zhiIndex + 1]
                            },
                            getGanZhi: function() {
                                return this.getGan() + this.getZhi()
                            },
                            getJieQiJulianDays: function() {
                                return this._p.jieQiJulianDays
                            },
                            getMonths: function() {
                                return this._p.months
                            },
                            getMonth: function(t) {
                                for (var n = 0, e = this._p.months.length; n < e; n++) {
                                    var i = this._p.months[n];
                                    if (i.getYear() === this._p.year && i.getMonth() === t) return i
                                }
                                return null
                            },
                            getLeapMonth: function() {
                                for (var t = 0, n = this._p.months.length; t < n; t++) {
                                    var e = this._p.months[t];
                                    if (e.getYear() === this._p.year && e.isLeap()) return Math.abs(e.getMonth())
                                }
                                return 0
                            },
                            _getZaoByGan: function(t, n) {
                                var e = t - L.fromJulianDay(this.getMonth(1).getFirstJulianDay()).getLunar().getDayGanIndex();
                                return e < 0 && (e += 10), n.replace("几", z.NUMBER[e + 1])
                            },
                            _getZaoByZhi: function(t, n) {
                                var e = t - L.fromJulianDay(this.getMonth(1).getFirstJulianDay()).getLunar().getDayZhiIndex();
                                return e < 0 && (e += 12), n.replace("几", z.NUMBER[e + 1])
                            },
                            getTouLiang: function() {
                                return this._getZaoByZhi(0, "几鼠偷粮")
                            },
                            getCaoZi: function() {
                                return this._getZaoByZhi(0, "草子几分")
                            },
                            getGengTian: function() {
                                return this._getZaoByZhi(1, "几牛耕田")
                            },
                            getHuaShou: function() {
                                return this._getZaoByZhi(3, "花收几分")
                            },
                            getZhiShui: function() {
                                return this._getZaoByZhi(4, "几龙治水")
                            },
                            getTuoGu: function() {
                                return this._getZaoByZhi(6, "几马驮谷")
                            },
                            getQiangMi: function() {
                                return this._getZaoByZhi(9, "几鸡抢米")
                            },
                            getKanCan: function() {
                                return this._getZaoByZhi(9, "几姑看蚕")
                            },
                            getGongZhu: function() {
                                return this._getZaoByZhi(11, "几屠共猪")
                            },
                            getJiaTian: function() {
                                return this._getZaoByGan(0, "甲田几分")
                            },
                            getFenBing: function() {
                                return this._getZaoByGan(2, "几人分饼")
                            },
                            getDeJin: function() {
                                return this._getZaoByGan(7, "几日得金")
                            },
                            getRenBing: function() {
                                return this._getZaoByGan(2, this._getZaoByZhi(2, "几人几丙"))
                            },
                            getRenChu: function() {
                                return this._getZaoByGan(3, this._getZaoByZhi(2, "几人几锄"))
                            },
                            getYuan: function() {
                                return t[Math.floor((this._p.year + 2696) / 60) % 3] + "元"
                            },
                            getYun: function() {
                                return n[Math.floor((this._p.year + 2696) / 20) % 9] + "运"
                            },
                            getNineStar: function() {
                                var t = z.getJiaZiIndex(this.getGanZhi()) + 1,
                                    n = (62 + Math.floor((this._p.year + 2696) / 60) % 3 * 3 - t) % 9;
                                return 0 === n && (n = 9), q.fromIndex(n - 1)
                            },
                            getPositionXi: function() {
                                return z.POSITION_XI[this._p.ganIndex + 1]
                            },
                            getPositionXiDesc: function() {
                                return z.POSITION_DESC[this.getPositionXi()]
                            },
                            getPositionYangGui: function() {
                                return z.POSITION_YANG_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYangGuiDesc: function() {
                                return z.POSITION_DESC[this.getPositionYangGui()]
                            },
                            getPositionYinGui: function() {
                                return z.POSITION_YIN_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYinGuiDesc: function() {
                                return z.POSITION_DESC[this.getPositionYinGui()]
                            },
                            getPositionFu: function(t) {
                                return (1 === t ? z.POSITION_FU : z.POSITION_FU_2)[this._p.ganIndex + 1]
                            },
                            getPositionFuDesc: function(t) {
                                return z.POSITION_DESC[this.getPositionFu(t)]
                            },
                            getPositionCai: function() {
                                return z.POSITION_CAI[this._p.ganIndex + 1]
                            },
                            getPositionCaiDesc: function() {
                                return z.POSITION_DESC[this.getPositionCai()]
                            },
                            getPositionTaiSui: function() {
                                return z.POSITION_TAI_SUI_YEAR[this._p.zhiIndex]
                            },
                            getPositionTaiSuiDesc: function() {
                                return z.POSITION_DESC[this.getPositionTaiSui()]
                            },
                            toString: function() {
                                return this.getYear() + ""
                            },
                            toFullString: function() {
                                return this.getYear() + "年"
                            },
                            next: function(t) {
                                return W.fromYear(this._p.year + t)
                            },
                            _compute: function() {
                                this._p.months = [], this._p.jieQiJulianDays = [];
                                var t, n, e = [],
                                    i = [],
                                    a = [],
                                    F = this._p.year,
                                    h = F - 2e3;
                                for (t = 0, n = U.JIE_QI_IN_USE.length; t < n; t++) {
                                    var u = 36525 * j.saLonT((h + 15 * (17 + t) / 360) * j.PI_2);
                                    u += j.ONE_THIRD - j.dtT(u), this._p.jieQiJulianDays.push(u + L.J2000), t > 0 && t < 26 && (e[t - 1] = Math.round(u))
                                }
                                var C = j.calcShuo(e[0]);
                                for (C > e[0] && (C -= 29.5306), t = 0; t < 16; t++) i.push(j.calcShuo(C + 29.5306 * t));
                                for (t = 0; t < 15; t++) a.push(Math.floor(i[t + 1] - i[t]));
                                var o = r["_" + F];
                                if (!o && (o = -1, i[13] <= e[24])) {
                                    for (t = 1; i[t + 1] > e[2 * t] && t < 13;) t++;
                                    o = t
                                }
                                var A = F - 1,
                                    E = r["_" + A];
                                E = E ? E - 12 : -1;
                                var D = this._p.year - 1,
                                    s = 11;
                                for (t = 0, n = a.length; t < n; t++) {
                                    var g = s,
                                        B = !1;
                                    (D === F && t === o || D === A && t === E) && (g = -g), (D === F && t + 1 === o || D === A && t + 1 === E) && (B = !0), this._p.months.push(R._(D, g, a[t], i[t] + L.J2000)), B || s++, 13 === s && (s = 1, D++)
                                }
                                return this
                            }
                        }._compute()
                    }(e), a[i] = F), F
                };
                return {
                    fromYear: function(t) {
                        return F(t)
                    }
                }
            }(),
            R = {
                fromYm: function(t, n) {
                    return function(t, n) {
                        return W.fromYear(t).getMonth(n)
                    }(t, n)
                },
                _: function(t, n, e, i) {
                    return function(t, n, e, i) {
                        return {
                            _p: {
                                year: t,
                                month: n,
                                dayCount: e,
                                firstJulianDay: i
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getDayCount: function() {
                                return this._p.dayCount
                            },
                            getFirstJulianDay: function() {
                                return this._p.firstJulianDay
                            },
                            isLeap: function() {
                                return this._p.month < 0
                            },
                            getPositionTaiSui: function() {
                                var t = "";
                                switch (Math.abs(this._p.month)) {
                                    case 1:
                                    case 5:
                                    case 9:
                                        t = "艮";
                                        break;
                                    case 3:
                                    case 7:
                                    case 11:
                                        t = "坤";
                                        break;
                                    case 4:
                                    case 8:
                                    case 12:
                                        t = "巽";
                                        break;
                                    default:
                                        t = z.POSITION_GAN[L.fromJulianDay(this.getFirstJulianDay()).getLunar().getMonthGanIndex()]
                                }
                                return t
                            },
                            getPositionTaiSuiDesc: function() {
                                return z.POSITION_DESC[this.getPositionTaiSui()]
                            },
                            getNineStar: function() {
                                var t = W.fromYear(this._p.year).getZhiIndex() % 3,
                                    n = this._p.month;
                                n < 0 && (n = -n);
                                var e = (13 + n) % 12,
                                    i = 27 - 3 * t;
                                e < z.BASE_MONTH_ZHI_INDEX && (i -= 3);
                                var r = (i - e) % 9;
                                return q.fromIndex(r)
                            },
                            next: function(t) {
                                if (0 == t) return R.fromYm(this._p.year, this._p.month);
                                var n, e, i, r = Math.abs(t),
                                    a = this._p.year,
                                    F = a,
                                    h = this._p.month,
                                    u = 0,
                                    C = W.fromYear(a).getMonths();
                                if (t > 0) {
                                    for (;;) {
                                        for (i = C.length, n = 0; n < i; n++)
                                            if ((e = C[n]).getYear() === F && e.getMonth() === h) {
                                                u = n;
                                                break
                                            }
                                        var o = i - u - 1;
                                        if (r < o) break;
                                        r -= o;
                                        var A = C[i - 1];
                                        F = A.getYear(), h = A.getMonth(), a++, C = W.fromYear(a).getMonths()
                                    }
                                    return C[u + r]
                                }
                                for (;;) {
                                    for (i = C.length, n = 0; n < i; n++)
                                        if ((e = C[n]).getYear() === F && e.getMonth() === h) {
                                            u = n;
                                            break
                                        }
                                    if (r <= u) break;
                                    r -= u;
                                    var E = C[0];
                                    F = E.getYear(), h = E.getMonth(), a--, C = W.fromYear(a).getMonths()
                                }
                                return C[u - r]
                            },
                            toString: function() {
                                return this.getYear() + "年" + (this.isLeap() ? "闰" : "") + z.MONTH[Math.abs(this.getMonth())] + "月(" + this.getDayCount() + ")天"
                            }
                        }
                    }(t, n, e, i)
                }
            },
            j = {
                PI_2: 2 * Math.PI,
                ONE_THIRD: 1 / 3,
                SECOND_PER_DAY: 86400,
                SECOND_PER_RAD: 648e3 / Math.PI,
                NUT_B: [2.1824, -33.75705, 36e-6, -1720, 920, 3.5069, 1256.66393, 11e-6, -132, 57, 1.3375, 16799.4182, -51e-6, -23, 10, 4.3649, -67.5141, 72e-6, 21, -9, .04, -628.302, 0, -14, 0, 2.36, 8328.691, 0, 7, 0, 3.46, 1884.966, 0, -5, 2, 5.44, 16833.175, 0, -4, 2, 3.69, 25128.11, 0, -3, 0, 3.55, 628.362, 0, 2, 0],
                DT_AT: [-4e3, 108371.7, -13036.8, 392, 0, -500, 17201, -627.82, 16.17, -.3413, -150, 12200.6, -346.41, 5.403, -.1593, 150, 9113.8, -328.13, -1.647, .0377, 500, 5707.5, -391.41, .915, .3145, 900, 2203.4, -283.45, 13.034, -.1778, 1300, 490.1, -57.35, 2.085, -.0072, 1600, 120, -9.81, -1.532, .1403, 1700, 10.2, -.91, .51, -.037, 1800, 13.4, -.72, .202, -.0193, 1830, 7.8, -1.81, .416, -.0247, 1860, 8.3, -.13, -.406, .0292, 1880, -5.4, .32, -.183, .0173, 1900, -2.3, 2.06, .169, -.0135, 1920, 21.2, 1.69, -.304, .0167, 1940, 24.2, 1.22, -.064, .0031, 1960, 33.2, .51, .231, -.0109, 1980, 51, 1.29, -.026, .0032, 2e3, 63.87, .1, 0, 0, 2005, 64.7, .4, 0, 0, 2015, 69],
                XL0: [1e10, 20, 578, 920, 1100, 1124, 1136, 1148, 1217, 1226, 1229, 1229, 1229, 1229, 1937, 2363, 2618, 2633, 2660, 2666, 17534704567, 0, 0, 334165646, 4.669256804, 6283.075849991, 3489428, 4.6261024, 12566.1517, 349706, 2.744118, 5753.384885, 341757, 2.828866, 3.523118, 313590, 3.62767, 77713.771468, 267622, 4.418084, 7860.419392, 234269, 6.135162, 3930.209696, 132429, .742464, 11506.76977, 127317, 2.037097, 529.690965, 119917, 1.109629, 1577.343542, 99025, 5.23268, 5884.92685, 90186, 2.04505, 26.29832, 85722, 3.50849, 398.149, 77979, 1.17883, 5223.69392, 75314, 2.53339, 5507.55324, 50526, 4.58293, 18849.22755, 49238, 4.20507, 775.52261, 35666, 2.91954, .06731, 31709, 5.84902, 11790.62909, 28413, 1.89869, 796.29801, 27104, .31489, 10977.0788, 24281, .34481, 5486.77784, 20616, 4.80647, 2544.31442, 20539, 1.86948, 5573.1428, 20226, 2.45768, 6069.77675, 15552, .83306, 213.2991, 13221, 3.41118, 2942.46342, 12618, 1.08303, 20.7754, 11513, .64545, .98032, 10285, .636, 4694.00295, 10190, .97569, 15720.83878, 10172, 4.2668, 7.11355, 9921, 6.2099, 2146.1654, 9761, .681, 155.4204, 8580, 5.9832, 161000.6857, 8513, 1.2987, 6275.9623, 8471, 3.6708, 71430.6956, 7964, 1.8079, 17260.1547, 7876, 3.037, 12036.4607, 7465, 1.7551, 5088.6288, 7387, 3.5032, 3154.6871, 7355, 4.6793, 801.8209, 6963, .833, 9437.7629, 6245, 3.9776, 8827.3903, 6115, 1.8184, 7084.8968, 5696, 2.7843, 6286.599, 5612, 4.3869, 14143.4952, 5558, 3.4701, 6279.5527, 5199, .1891, 12139.5535, 5161, 1.3328, 1748.0164, 5115, .2831, 5856.4777, 4900, .4874, 1194.447, 4104, 5.3682, 8429.2413, 4094, 2.3985, 19651.0485, 3920, 6.1683, 10447.3878, 3677, 6.0413, 10213.2855, 3660, 2.5696, 1059.3819, 3595, 1.7088, 2352.8662, 3557, 1.776, 6812.7668, 3329, .5931, 17789.8456, 3041, .4429, 83996.8473, 3005, 2.7398, 1349.8674, 2535, 3.1647, 4690.4798, 2474, .2148, 3.5904, 2366, .4847, 8031.0923, 2357, 2.0653, 3340.6124, 2282, 5.222, 4705.7323, 2189, 5.5559, 553.5694, 2142, 1.4256, 16730.4637, 2109, 4.1483, 951.7184, 2030, .3713, 283.8593, 1992, 5.2221, 12168.0027, 1986, 5.7747, 6309.3742, 1912, 3.8222, 23581.2582, 1889, 5.3863, 149854.4001, 1790, 2.2149, 13367.9726, 1748, 4.5605, 135.0651, 1622, 5.9884, 11769.8537, 1508, 4.1957, 6256.7775, 1442, 4.1932, 242.7286, 1435, 3.7236, 38.0277, 1397, 4.4014, 6681.2249, 1362, 1.8893, 7632.9433, 1250, 1.1305, 5.5229, 1205, 2.6223, 955.5997, 1200, 1.0035, 632.7837, 1129, .1774, 4164.312, 1083, .3273, 103.0928, 1052, .9387, 11926.2544, 1050, 5.3591, 1592.596, 1033, 6.1998, 6438.4962, 1001, 6.0291, 5746.2713, 980, .999, 11371.705, 980, 5.244, 27511.468, 938, 2.624, 5760.498, 923, .483, 522.577, 922, 4.571, 4292.331, 905, 5.337, 6386.169, 862, 4.165, 7058.598, 841, 3.299, 7234.794, 836, 4.539, 25132.303, 813, 6.112, 4732.031, 812, 6.271, 426.598, 801, 5.821, 28.449, 787, .996, 5643.179, 776, 2.957, 23013.54, 769, 3.121, 7238.676, 758, 3.974, 11499.656, 735, 4.386, 316.392, 731, .607, 11513.883, 719, 3.998, 74.782, 706, .323, 263.084, 676, 5.911, 90955.552, 663, 3.665, 17298.182, 653, 5.791, 18073.705, 630, 4.717, 6836.645, 615, 1.458, 233141.314, 612, 1.075, 19804.827, 596, 3.321, 6283.009, 596, 2.876, 6283.143, 555, 2.452, 12352.853, 541, 5.392, 419.485, 531, .382, 31441.678, 519, 4.065, 6208.294, 513, 2.361, 10973.556, 494, 5.737, 9917.697, 450, 3.272, 11015.106, 449, 3.653, 206.186, 447, 2.064, 7079.374, 435, 4.423, 5216.58, 421, 1.906, 245.832, 413, .921, 3738.761, 402, .84, 20.355, 387, 1.826, 11856.219, 379, 2.344, 3.881, 374, 2.954, 3128.389, 370, 5.031, 536.805, 365, 1.018, 16200.773, 365, 1.083, 88860.057, 352, 5.978, 3894.182, 352, 2.056, 244287.6, 351, 3.713, 6290.189, 340, 1.106, 14712.317, 339, .978, 8635.942, 339, 3.202, 5120.601, 333, .837, 6496.375, 325, 3.479, 6133.513, 316, 5.089, 21228.392, 316, 1.328, 10873.986, 309, 3.646, 10.637, 303, 1.802, 35371.887, 296, 3.397, 9225.539, 288, 6.026, 154717.61, 281, 2.585, 14314.168, 262, 3.856, 266.607, 262, 2.579, 22483.849, 257, 1.561, 23543.231, 255, 3.949, 1990.745, 251, 3.744, 10575.407, 240, 1.161, 10984.192, 238, .106, 7.046, 236, 4.272, 6040.347, 234, 3.577, 10969.965, 211, 3.714, 65147.62, 210, .754, 13521.751, 207, 4.228, 5650.292, 202, .814, 170.673, 201, 4.629, 6037.244, 200, .381, 6172.87, 199, 3.933, 6206.81, 199, 5.197, 6262.3, 197, 1.046, 18209.33, 195, 1.07, 5230.807, 195, 4.869, 36.028, 194, 4.313, 6244.943, 192, 1.229, 709.933, 192, 5.595, 6282.096, 192, .602, 6284.056, 189, 3.744, 23.878, 188, 1.904, 15.252, 188, .867, 22003.915, 182, 3.681, 15110.466, 181, .491, 1.484, 179, 3.222, 39302.097, 179, 1.259, 12559.038, 62833196674749, 0, 0, 20605886, 2.67823456, 6283.07584999, 430343, 2.635127, 12566.1517, 42526, 1.59047, 3.52312, 11926, 5.79557, 26.29832, 10898, 2.96618, 1577.34354, 9348, 2.5921, 18849.2275, 7212, 1.1385, 529.691, 6777, 1.8747, 398.149, 6733, 4.4092, 5507.5532, 5903, 2.888, 5223.6939, 5598, 2.1747, 155.4204, 4541, .398, 796.298, 3637, .4662, 775.5226, 2896, 2.6471, 7.1135, 2084, 5.3414, .9803, 1910, 1.8463, 5486.7778, 1851, 4.9686, 213.2991, 1729, 2.9912, 6275.9623, 1623, .0322, 2544.3144, 1583, 1.4305, 2146.1654, 1462, 1.2053, 10977.0788, 1246, 2.8343, 1748.0164, 1188, 3.258, 5088.6288, 1181, 5.2738, 1194.447, 1151, 2.075, 4694.003, 1064, .7661, 553.5694, 997, 1.303, 6286.599, 972, 4.239, 1349.867, 945, 2.7, 242.729, 858, 5.645, 951.718, 758, 5.301, 2352.866, 639, 2.65, 9437.763, 610, 4.666, 4690.48, 583, 1.766, 1059.382, 531, .909, 3154.687, 522, 5.661, 71430.696, 520, 1.854, 801.821, 504, 1.425, 6438.496, 433, .241, 6812.767, 426, .774, 10447.388, 413, 5.24, 7084.897, 374, 2.001, 8031.092, 356, 2.429, 14143.495, 350, 4.8, 6279.553, 337, .888, 12036.461, 337, 3.862, 1592.596, 325, 3.4, 7632.943, 322, .616, 8429.241, 318, 3.188, 4705.732, 297, 6.07, 4292.331, 295, 1.431, 5746.271, 290, 2.325, 20.355, 275, .935, 5760.498, 270, 4.804, 7234.794, 253, 6.223, 6836.645, 228, 5.003, 17789.846, 225, 5.672, 11499.656, 215, 5.202, 11513.883, 208, 3.955, 10213.286, 208, 2.268, 522.577, 206, 2.224, 5856.478, 206, 2.55, 25132.303, 203, .91, 6256.778, 189, .532, 3340.612, 188, 4.735, 83996.847, 179, 1.474, 4164.312, 178, 3.025, 5.523, 177, 3.026, 5753.385, 159, 4.637, 3.286, 157, 6.124, 5216.58, 155, 3.077, 6681.225, 154, 4.2, 13367.973, 143, 1.191, 3894.182, 138, 3.093, 135.065, 136, 4.245, 426.598, 134, 5.765, 6040.347, 128, 3.085, 5643.179, 127, 2.092, 6290.189, 125, 3.077, 11926.254, 125, 3.445, 536.805, 114, 3.244, 12168.003, 112, 2.318, 16730.464, 111, 3.901, 11506.77, 111, 5.32, 23.878, 105, 3.75, 7860.419, 103, 2.447, 1990.745, 96, .82, 3.88, 96, 4.08, 6127.66, 91, 5.42, 206.19, 91, .42, 7079.37, 88, 5.17, 11790.63, 81, .34, 9917.7, 80, 3.89, 10973.56, 78, 2.4, 1589.07, 78, 2.58, 11371.7, 77, 3.98, 955.6, 77, 3.36, 36.03, 76, 1.3, 103.09, 75, 5.18, 10969.97, 75, 4.96, 6496.37, 73, 5.21, 38.03, 72, 2.65, 6309.37, 70, 5.61, 3738.76, 69, 2.6, 3496.03, 69, .39, 15.25, 69, 2.78, 20.78, 65, 1.13, 7058.6, 64, 4.28, 28.45, 61, 5.63, 10984.19, 60, .73, 419.48, 60, 5.28, 10575.41, 58, 5.55, 17298.18, 58, 3.19, 4732.03, 5291887, 0, 0, 871984, 1.072097, 6283.07585, 30913, .86729, 12566.1517, 2734, .053, 3.5231, 1633, 5.1883, 26.2983, 1575, 3.6846, 155.4204, 954, .757, 18849.228, 894, 2.057, 77713.771, 695, .827, 775.523, 506, 4.663, 1577.344, 406, 1.031, 7.114, 381, 3.441, 5573.143, 346, 5.141, 796.298, 317, 6.053, 5507.553, 302, 1.192, 242.729, 289, 6.117, 529.691, 271, .306, 398.149, 254, 2.28, 553.569, 237, 4.381, 5223.694, 208, 3.754, .98, 168, .902, 951.718, 153, 5.759, 1349.867, 145, 4.364, 1748.016, 134, 3.721, 1194.447, 125, 2.948, 6438.496, 122, 2.973, 2146.165, 110, 1.271, 161000.686, 104, .604, 3154.687, 100, 5.986, 6286.599, 92, 4.8, 5088.63, 89, 5.23, 7084.9, 83, 3.31, 213.3, 76, 3.42, 5486.78, 71, 6.19, 4690.48, 68, 3.43, 4694, 65, 1.6, 2544.31, 64, 1.98, 801.82, 61, 2.48, 10977.08, 50, 1.44, 6836.65, 49, 2.34, 1592.6, 46, 1.31, 4292.33, 46, 3.81, 149854.4, 43, .04, 7234.79, 40, 4.94, 7632.94, 39, 1.57, 71430.7, 38, 3.17, 6309.37, 35, .99, 6040.35, 35, .67, 1059.38, 31, 3.18, 2352.87, 31, 3.55, 8031.09, 30, 1.92, 10447.39, 30, 2.52, 6127.66, 28, 4.42, 9437.76, 28, 2.71, 3894.18, 27, .67, 25132.3, 26, 5.27, 6812.77, 25, .55, 6279.55, 23, 1.38, 4705.73, 22, .64, 6256.78, 20, 6.07, 640.88, 28923, 5.84384, 6283.07585, 3496, 0, 0, 1682, 5.4877, 12566.1517, 296, 5.196, 155.42, 129, 4.722, 3.523, 71, 5.3, 18849.23, 64, 5.97, 242.73, 40, 3.79, 553.57, 11408, 3.14159, 0, 772, 4.134, 6283.076, 77, 3.84, 12566.15, 42, .42, 155.42, 88, 3.14, 0, 17, 2.77, 6283.08, 5, 2.01, 155.42, 3, 2.21, 12566.15, 27962, 3.1987, 84334.66158, 10164, 5.42249, 5507.55324, 8045, 3.8801, 5223.6939, 4381, 3.7044, 2352.8662, 3193, 4.0003, 1577.3435, 2272, 3.9847, 1047.7473, 1814, 4.9837, 6283.0758, 1639, 3.5646, 5856.4777, 1444, 3.7028, 9437.7629, 1430, 3.4112, 10213.2855, 1125, 4.8282, 14143.4952, 1090, 2.0857, 6812.7668, 1037, 4.0566, 71092.8814, 971, 3.473, 4694.003, 915, 1.142, 6620.89, 878, 4.44, 5753.385, 837, 4.993, 7084.897, 770, 5.554, 167621.576, 719, 3.602, 529.691, 692, 4.326, 6275.962, 558, 4.41, 7860.419, 529, 2.484, 4705.732, 521, 6.25, 18073.705, 903, 3.897, 5507.553, 618, 1.73, 5223.694, 380, 5.244, 2352.866, 166, 1.627, 84334.662, 10001398880, 0, 0, 167069963, 3.098463508, 6283.075849991, 1395602, 3.0552461, 12566.1517, 308372, 5.198467, 77713.771468, 162846, 1.173877, 5753.384885, 157557, 2.846852, 7860.419392, 92480, 5.45292, 11506.76977, 54244, 4.56409, 3930.2097, 47211, 3.661, 5884.92685, 34598, .96369, 5507.55324, 32878, 5.89984, 5223.69392, 30678, .29867, 5573.1428, 24319, 4.2735, 11790.62909, 21183, 5.84715, 1577.34354, 18575, 5.02194, 10977.0788, 17484, 3.01194, 18849.22755, 10984, 5.05511, 5486.77784, 9832, .8868, 6069.7768, 8650, 5.6896, 15720.8388, 8583, 1.2708, 161000.6857, 6490, .2725, 17260.1547, 6292, .9218, 529.691, 5706, 2.0137, 83996.8473, 5574, 5.2416, 71430.6956, 4938, 3.245, 2544.3144, 4696, 2.5781, 775.5226, 4466, 5.5372, 9437.7629, 4252, 6.0111, 6275.9623, 3897, 5.3607, 4694.003, 3825, 2.3926, 8827.3903, 3749, .8295, 19651.0485, 3696, 4.9011, 12139.5535, 3566, 1.6747, 12036.4607, 3454, 1.8427, 2942.4634, 3319, .2437, 7084.8968, 3192, .1837, 5088.6288, 3185, 1.7778, 398.149, 2846, 1.2134, 6286.599, 2779, 1.8993, 6279.5527, 2628, 4.589, 10447.3878, 2460, 3.7866, 8429.2413, 2393, 4.996, 5856.4777, 2359, .2687, 796.298, 2329, 2.8078, 14143.4952, 2210, 1.95, 3154.6871, 2035, 4.6527, 2146.1654, 1951, 5.3823, 2352.8662, 1883, .6731, 149854.4001, 1833, 2.2535, 23581.2582, 1796, .1987, 6812.7668, 1731, 6.152, 16730.4637, 1717, 4.4332, 10213.2855, 1619, 5.2316, 17789.8456, 1381, 5.1896, 8031.0923, 1364, 3.6852, 4705.7323, 1314, .6529, 13367.9726, 1041, 4.3329, 11769.8537, 1017, 1.5939, 4690.4798, 998, 4.201, 6309.374, 966, 3.676, 27511.468, 874, 6.064, 1748.016, 779, 3.674, 12168.003, 771, .312, 7632.943, 756, 2.626, 6256.778, 746, 5.648, 11926.254, 693, 2.924, 6681.225, 680, 1.423, 23013.54, 674, .563, 3340.612, 663, 5.661, 11371.705, 659, 3.136, 801.821, 648, 2.65, 19804.827, 615, 3.029, 233141.314, 612, 5.134, 1194.447, 563, 4.341, 90955.552, 552, 2.091, 17298.182, 534, 5.1, 31441.678, 531, 2.407, 11499.656, 523, 4.624, 6438.496, 513, 5.324, 11513.883, 477, .256, 11856.219, 461, 1.722, 7234.794, 458, 3.766, 6386.169, 458, 4.466, 5746.271, 423, 1.055, 5760.498, 422, 1.557, 7238.676, 415, 2.599, 7058.598, 401, 3.03, 1059.382, 397, 1.201, 1349.867, 379, 4.907, 4164.312, 360, 5.707, 5643.179, 352, 3.626, 244287.6, 348, .761, 10973.556, 342, 3.001, 4292.331, 336, 4.546, 4732.031, 334, 3.138, 6836.645, 324, 4.164, 9917.697, 316, 1.691, 11015.106, 307, .238, 35371.887, 298, 1.306, 6283.143, 298, 1.75, 6283.009, 293, 5.738, 16200.773, 286, 5.928, 14712.317, 281, 3.515, 21228.392, 280, 5.663, 8635.942, 277, .513, 26.298, 268, 4.207, 18073.705, 266, .9, 12352.853, 260, 2.962, 25132.303, 255, 2.477, 6208.294, 242, 2.8, 709.933, 231, 1.054, 22483.849, 229, 1.07, 14314.168, 216, 1.314, 154717.61, 215, 6.038, 10873.986, 200, .561, 7079.374, 198, 2.614, 951.718, 197, 4.369, 167283.762, 186, 2.861, 5216.58, 183, 1.66, 39302.097, 183, 5.912, 3738.761, 175, 2.145, 6290.189, 173, 2.168, 10575.407, 171, 3.702, 1592.596, 171, 1.343, 3128.389, 164, 5.55, 6496.375, 164, 5.856, 10984.192, 161, 1.998, 10969.965, 161, 1.909, 6133.513, 157, 4.955, 25158.602, 154, 6.216, 23543.231, 153, 5.357, 13521.751, 150, 5.77, 18209.33, 150, 5.439, 155.42, 139, 1.778, 9225.539, 139, 1.626, 5120.601, 128, 2.46, 13916.019, 123, .717, 143571.324, 122, 2.654, 88860.057, 121, 4.414, 3894.182, 121, 1.192, 3.523, 120, 4.03, 553.569, 119, 1.513, 17654.781, 117, 3.117, 14945.316, 113, 2.698, 6040.347, 110, 3.085, 43232.307, 109, .998, 955.6, 108, 2.939, 17256.632, 107, 5.285, 65147.62, 103, .139, 11712.955, 103, 5.85, 213.299, 102, 3.046, 6037.244, 101, 2.842, 8662.24, 100, 3.626, 6262.3, 98, 2.36, 6206.81, 98, 5.11, 6172.87, 98, 2, 15110.47, 97, 2.67, 5650.29, 97, 2.75, 6244.94, 96, 4.02, 6282.1, 96, 5.31, 6284.06, 92, .1, 29088.81, 85, 3.26, 20426.57, 84, 2.6, 28766.92, 81, 3.58, 10177.26, 80, 5.81, 5230.81, 78, 2.53, 16496.36, 77, 4.06, 6127.66, 73, .04, 5481.25, 72, 5.96, 12559.04, 72, 5.92, 4136.91, 71, 5.49, 22003.91, 70, 3.41, 7.11, 69, .62, 11403.68, 69, 3.9, 1589.07, 69, 1.96, 12416.59, 69, 4.51, 426.6, 67, 1.61, 11087.29, 66, 4.5, 47162.52, 66, 5.08, 283.86, 66, 4.32, 16858.48, 65, 1.04, 6062.66, 64, 1.59, 18319.54, 63, 5.7, 45892.73, 63, 4.6, 66567.49, 63, 3.82, 13517.87, 62, 2.62, 11190.38, 61, 1.54, 33019.02, 60, 5.58, 10344.3, 60, 5.38, 316428.23, 60, 5.78, 632.78, 59, 6.12, 9623.69, 57, .16, 17267.27, 57, 3.86, 6076.89, 57, 1.98, 7668.64, 56, 4.78, 20199.09, 55, 4.56, 18875.53, 55, 3.51, 17253.04, 54, 3.07, 226858.24, 54, 4.83, 18422.63, 53, 5.02, 12132.44, 52, 3.63, 5333.9, 52, .97, 155427.54, 51, 3.36, 20597.24, 50, .99, 11609.86, 50, 2.21, 1990.75, 48, 1.62, 12146.67, 48, 1.17, 12569.67, 47, 4.62, 5436.99, 47, 1.81, 12562.63, 47, .59, 21954.16, 47, .76, 7342.46, 46, .27, 4590.91, 46, 3.77, 156137.48, 45, 5.66, 10454.5, 44, 5.84, 3496.03, 43, .24, 17996.03, 41, 5.93, 51092.73, 41, 4.21, 12592.45, 40, 5.14, 1551.05, 40, 5.28, 15671.08, 39, 3.69, 18052.93, 39, 4.94, 24356.78, 38, 2.72, 11933.37, 38, 5.23, 7477.52, 38, 4.99, 9779.11, 37, 3.7, 9388.01, 37, 4.44, 4535.06, 36, 2.16, 28237.23, 36, 2.54, 242.73, 36, .22, 5429.88, 35, 6.15, 19800.95, 35, 2.92, 36949.23, 34, 5.63, 2379.16, 34, 5.73, 16460.33, 34, 5.11, 5849.36, 33, 6.19, 6268.85, 10301861, 1.1074897, 6283.07584999, 172124, 1.064423, 12566.1517, 70222, 3.14159, 0, 3235, 1.0217, 18849.2275, 3080, 2.8435, 5507.5532, 2497, 1.3191, 5223.6939, 1849, 1.4243, 1577.3435, 1008, 5.9138, 10977.0788, 865, 1.42, 6275.962, 863, .271, 5486.778, 507, 1.686, 5088.629, 499, 6.014, 6286.599, 467, 5.987, 529.691, 440, .518, 4694.003, 410, 1.084, 9437.763, 387, 4.75, 2544.314, 375, 5.071, 796.298, 352, .023, 83996.847, 344, .949, 71430.696, 341, 5.412, 775.523, 322, 6.156, 2146.165, 286, 5.484, 10447.388, 284, 3.42, 2352.866, 255, 6.132, 6438.496, 252, .243, 398.149, 243, 3.092, 4690.48, 225, 3.689, 7084.897, 220, 4.952, 6812.767, 219, .42, 8031.092, 209, 1.282, 1748.016, 193, 5.314, 8429.241, 185, 1.82, 7632.943, 175, 3.229, 6279.553, 173, 1.537, 4705.732, 158, 4.097, 11499.656, 158, 5.539, 3154.687, 150, 3.633, 11513.883, 148, 3.222, 7234.794, 147, 3.653, 1194.447, 144, .817, 14143.495, 135, 6.151, 5746.271, 134, 4.644, 6836.645, 128, 2.693, 1349.867, 123, 5.65, 5760.498, 118, 2.577, 13367.973, 113, 3.357, 17789.846, 110, 4.497, 4292.331, 108, 5.828, 12036.461, 102, 5.621, 6256.778, 99, 1.14, 1059.38, 98, .66, 5856.48, 93, 2.32, 10213.29, 92, .77, 16730.46, 88, 1.5, 11926.25, 86, 1.42, 5753.38, 85, .66, 155.42, 81, 1.64, 6681.22, 80, 4.11, 951.72, 66, 4.55, 5216.58, 65, .98, 25132.3, 64, 4.19, 6040.35, 64, .52, 6290.19, 63, 1.51, 5643.18, 59, 6.18, 4164.31, 57, 2.3, 10973.56, 55, 2.32, 11506.77, 55, 2.2, 1592.6, 55, 5.27, 3340.61, 54, 5.54, 553.57, 53, 5.04, 9917.7, 53, .92, 11371.7, 52, 3.98, 17298.18, 52, 3.6, 10969.97, 49, 5.91, 3894.18, 49, 2.51, 6127.66, 48, 1.67, 12168, 46, .31, 801.82, 42, 3.7, 10575.41, 42, 4.05, 10984.19, 40, 2.17, 7860.42, 40, 4.17, 26.3, 38, 5.82, 7058.6, 37, 3.39, 6496.37, 36, 1.08, 6309.37, 36, 5.34, 7079.37, 34, 3.62, 11790.63, 32, .32, 16200.77, 31, 4.24, 3738.76, 29, 4.55, 11856.22, 29, 1.26, 8635.94, 27, 3.45, 5884.93, 26, 5.08, 10177.26, 26, 5.38, 21228.39, 24, 2.26, 11712.96, 24, 1.05, 242.73, 24, 5.59, 6069.78, 23, 3.63, 6284.06, 23, 1.64, 4732.03, 22, 3.46, 213.3, 21, 1.05, 3496.03, 21, 3.92, 13916.02, 21, 4.01, 5230.81, 20, 5.16, 12352.85, 20, .69, 1990.75, 19, 2.73, 6062.66, 19, 5.01, 11015.11, 18, 6.04, 6283.01, 18, 2.85, 7238.68, 18, 5.6, 6283.14, 18, 5.16, 17253.04, 18, 2.54, 14314.17, 17, 1.58, 7.11, 17, .98, 3930.21, 17, 4.75, 17267.27, 16, 2.19, 6076.89, 16, 2.19, 18073.7, 16, 6.12, 3.52, 16, 4.61, 9623.69, 16, 3.4, 16496.36, 15, .19, 9779.11, 15, 5.3, 13517.87, 15, 4.26, 3128.39, 15, .81, 709.93, 14, .5, 25158.6, 14, 4.38, 4136.91, 13, .98, 65147.62, 13, 3.31, 154717.61, 13, 2.11, 1589.07, 13, 1.92, 22483.85, 12, 6.03, 9225.54, 12, 1.53, 12559.04, 12, 5.82, 6282.1, 12, 5.61, 5642.2, 12, 2.38, 167283.76, 12, .39, 12132.44, 12, 3.98, 4686.89, 12, 5.81, 12569.67, 12, .56, 5849.36, 11, .45, 6172.87, 11, 5.8, 16858.48, 11, 6.22, 12146.67, 11, 2.27, 5429.88, 435939, 5.784551, 6283.07585, 12363, 5.57935, 12566.1517, 1234, 3.1416, 0, 879, 3.628, 77713.771, 569, 1.87, 5573.143, 330, 5.47, 18849.228, 147, 4.48, 5507.553, 110, 2.842, 161000.686, 101, 2.815, 5223.694, 85, 3.11, 1577.34, 65, 5.47, 775.52, 61, 1.38, 6438.5, 50, 4.42, 6286.6, 47, 3.66, 7084.9, 46, 5.39, 149854.4, 42, .9, 10977.08, 40, 3.2, 5088.63, 35, 1.81, 5486.78, 32, 5.35, 3154.69, 30, 3.52, 796.3, 29, 4.62, 4690.48, 28, 1.84, 4694, 27, 3.14, 71430.7, 27, 6.17, 6836.65, 26, 1.42, 2146.17, 25, 2.81, 1748.02, 24, 2.18, 155.42, 23, 4.76, 7234.79, 21, 3.38, 7632.94, 21, .22, 4705.73, 20, 4.22, 1349.87, 20, 2.01, 1194.45, 20, 4.58, 529.69, 19, 1.59, 6309.37, 18, 5.7, 6040.35, 18, 6.03, 4292.33, 17, 2.9, 9437.76, 17, 2, 8031.09, 17, 5.78, 83996.85, 16, .05, 2544.31, 15, .95, 6127.66, 14, .36, 10447.39, 14, 1.48, 2352.87, 13, .77, 553.57, 13, 5.48, 951.72, 13, 5.27, 6279.55, 13, 3.76, 6812.77, 11, 5.41, 6256.78, 10, .68, 1592.6, 10, 4.95, 398.15, 10, 1.15, 3894.18, 10, 5.2, 244287.6, 10, 1.94, 11856.22, 9, 5.39, 25132.3, 8, 6.18, 1059.38, 8, .69, 8429.24, 8, 5.85, 242.73, 7, 5.26, 14143.5, 7, .52, 801.82, 6, 2.24, 8635.94, 6, 4, 13367.97, 6, 2.77, 90955.55, 6, 5.17, 7058.6, 5, 1.46, 233141.31, 5, 4.13, 7860.42, 5, 3.91, 26.3, 5, 3.89, 12036.46, 5, 5.58, 6290.19, 5, 5.54, 1990.75, 5, .83, 11506.77, 5, 6.22, 6681.22, 4, 5.26, 10575.41, 4, 1.91, 7477.52, 4, .43, 10213.29, 4, 1.09, 709.93, 4, 5.09, 11015.11, 4, 4.22, 88860.06, 4, 3.57, 7079.37, 4, 1.98, 6284.06, 4, 3.93, 10973.56, 4, 6.18, 9917.7, 4, .36, 10177.26, 4, 2.75, 3738.76, 4, 3.33, 5643.18, 4, 5.36, 25158.6, 14459, 4.27319, 6283.07585, 673, 3.917, 12566.152, 77, 0, 0, 25, 3.73, 18849.23, 4, 2.8, 6286.6, 386, 2.564, 6283.076, 31, 2.27, 12566.15, 5, 3.44, 5573.14, 2, 2.05, 18849.23, 1, 2.06, 77713.77, 1, 4.41, 161000.69, 1, 3.82, 149854.4, 1, 4.08, 6127.66, 1, 5.26, 6438.5, 9, 1.22, 6283.08, 1, .66, 12566.15],
                XL1: [
                    [22639.586, .78475822, 8328.691424623, 1.5229241, 25.0719, -.123598, 4586.438, .1873974, 7214.06286536, -2.184756, -18.86, .0828, 2369.914, 2.542952, 15542.75428998, -.661832, 6.212, -.0408, 769.026, 3.140313, 16657.38284925, 3.04585, 50.144, -.2472, 666.418, 1.527671, 628.30195521, -.02664, .062, -.0054, 411.596, 4.826607, 16866.932315, -1.28012, -1.07, -.0059, 211.656, 4.115028, -1114.6285593, -3.70768, -43.93, .2064, 205.436, .230523, 6585.7609101, -2.15812, -18.92, .0882, 191.956, 4.898507, 23871.4457146, .86109, 31.28, -.164, 164.729, 2.586078, 14914.4523348, -.6352, 6.15, -.035, 147.321, 5.4553, -7700.3894694, -1.5496, -25.01, .118, 124.988, .48608, 7771.377145, -.3309, 3.11, -.02, 109.38, 3.88323, 8956.9933798, 1.4963, 25.13, -.129, 55.177, 5.57033, -1324.178025, .6183, 7.3, -.035, 45.1, .89898, 25195.62374, .2428, 24, -.129, 39.533, 3.81213, -8538.24089, 2.803, 26.1, -.118, 38.43, 4.30115, 22756.817155, -2.8466, -12.6, .042, 36.124, 5.49587, 24986.074274, 4.5688, 75.2, -.371, 30.773, 1.94559, 14428.125731, -4.3695, -37.7, .166, 28.397, 3.28586, 7842.364821, -2.2114, -18.8, .077, 24.358, 5.64142, 16171.056245, -.6885, 6.3, -.046, 18.585, 4.41371, -557.31428, -1.8538, -22, .1, 17.954, 3.58454, 8399.6791, -.3576, 3.2, -.03, 14.53, 4.9416, 23243.143759, .888, 31.2, -.16, 14.38, .9709, 32200.137139, 2.384, 56.4, -.29, 14.251, 5.7641, -2.3012, 1.523, 25.1, -.12, 13.899, .3735, 31085.50858, -1.324, 12.4, -.08, 13.194, 1.7595, -9443.319984, -5.231, -69, .33, 9.679, 3.0997, -16029.080894, -3.072, -50.1, .24, 9.366, .3016, 24080.99518, -3.465, -19.9, .08, 8.606, 4.1582, -1742.930514, -3.681, -44, .21, 8.453, 2.8416, 16100.06857, 1.192, 28.2, -.14, 8.05, 2.6292, 14286.15038, -.609, 6.1, -.03, 7.63, 6.2388, 17285.684804, 3.019, 50.2, -.25, 7.447, 1.4845, 1256.60391, -.053, .1, -.01, 7.371, .2736, 5957.458955, -2.131, -19, .09, 7.063, 5.6715, 33.757047, -.308, -3.6, .02, 6.383, 4.7843, 7004.5134, 2.141, 32.4, -.16, 5.742, 2.6572, 32409.686605, -1.942, 5, -.05, 4.374, 4.3443, 22128.5152, -2.82, -13, .05, 3.998, 3.2545, 33524.31516, 1.766, 49, -.25, 3.21, 2.2443, 14985.44001, -2.516, -16, .06, 2.915, 1.7138, 24499.74767, .834, 31, -.17, 2.732, 1.9887, 13799.82378, -4.343, -38, .17, 2.568, 5.4122, -7072.08751, -1.576, -25, .11, 2.521, 3.2427, 8470.66678, -2.238, -19, .07, 2.489, 4.0719, -486.3266, -3.734, -44, .2, 2.146, 5.6135, -1952.47998, .645, 7, -.03, 1.978, 2.7291, 39414.2, .199, 37, -.21, 1.934, 1.5682, 33314.7657, 6.092, 100, -.5, 1.871, .4166, 30457.20662, -1.297, 12, -.1, 1.753, 2.0582, -8886.0057, -3.38, -47, .2, 1.437, 2.386, -695.87607, .59, 7, 0, 1.373, 3.026, -209.54947, 4.33, 51, -.2, 1.262, 5.94, 16728.37052, 1.17, 28, -.1, 1.224, 6.172, 6656.74859, -4.04, -41, .2, 1.187, 5.873, 6099.43431, -5.89, -63, .3, 1.177, 1.014, 31571.83518, 2.41, 56, -.3, 1.162, 3.84, 9585.29534, 1.47, 25, -.1, 1.143, 5.639, 8364.73984, -2.18, -19, .1, 1.078, 1.229, 70.98768, -1.88, -22, .1, 1.059, 3.326, 40528.82856, 3.91, 81, -.4, .99, 5.013, 40738.37803, -.42, 30, -.2, .948, 5.687, -17772.01141, -6.75, -94, .5, .876, .298, -.35232, 0, 0, 0, .822, 2.994, 393.02097, 0, 0, 0, .788, 1.836, 8326.39022, 3.05, 50, -.2, .752, 4.985, 22614.8418, .91, 31, -.2, .74, 2.875, 8330.99262, 0, 0, 0, .669, .744, -24357.77232, -4.6, -75, .4, .644, 1.314, 8393.12577, -2.18, -19, .1, .639, 5.888, 575.33849, 0, 0, 0, .635, 1.116, 23385.11911, -2.87, -13, 0, .584, 5.197, 24428.75999, 2.71, 53, -.3, .583, 3.513, -9095.55517, .95, 4, 0, .572, 6.059, 29970.88002, -5.03, -32, .1, .565, 2.96, .32863, 1.52, 25, -.1, .561, 4.001, -17981.56087, -2.43, -43, .2, .557, .529, 7143.07519, -.3, 3, 0, .546, 2.311, 25614.37623, 4.54, 75, -.4, .536, 4.229, 15752.30376, -4.99, -45, .2, .493, 3.316, -8294.9344, -1.83, -29, .1, .491, 1.744, 8362.4485, 1.21, 21, -.1, .478, 1.803, -10071.6219, -5.2, -69, .3, .454, .857, 15333.2048, 3.66, 57, -.3, .445, 2.071, 8311.7707, -2.18, -19, .1, .426, .345, 23452.6932, -3.44, -20, .1, .42, 4.941, 33733.8646, -2.56, -2, 0, .413, 1.642, 17495.2343, -1.31, -1, 0, .404, 1.458, 23314.1314, -.99, 9, -.1, .395, 2.132, 38299.5714, -3.51, -6, 0, .382, 2.7, 31781.3846, -1.92, 5, 0, .375, 4.827, 6376.2114, 2.17, 32, -.2, .361, 3.867, 16833.1753, -.97, 3, 0, .358, 5.044, 15056.4277, -4.4, -38, .2, .35, 5.157, -8257.7037, -3.4, -47, .2, .344, 4.233, 157.7344, 0, 0, 0, .34, 2.672, 13657.8484, -.58, 6, 0, .329, 5.61, 41853.0066, 3.29, 74, -.4, .325, 5.895, -39.8149, 0, 0, 0, .309, 4.387, 21500.2132, -2.79, -13, .1, .302, 1.278, 786.0419, 0, 0, 0, .302, 5.341, -24567.3218, -.27, -24, .1, .301, 1.045, 5889.8848, -1.57, -12, 0, .294, 4.201, -2371.2325, -3.65, -44, .2, .293, 3.704, 21642.1886, -6.55, -57, .2, .29, 4.069, 32828.4391, 2.36, 56, -.3, .289, 3.472, 31713.8105, -1.35, 12, -.1, .285, 5.407, -33.7814, .31, 4, 0, .283, 5.998, -16.9207, -3.71, -44, .2, .283, 2.772, 38785.898, .23, 37, -.2, .274, 5.343, 15613.742, -2.54, -16, .1, .263, 3.997, 25823.9257, .22, 24, -.1, .254, .6, 24638.3095, -1.61, 2, 0, .253, 1.344, 6447.1991, .29, 10, -.1, .25, .887, 141.9754, -3.76, -44, .2, .247, .317, 5329.157, -2.1, -19, .1, .245, .141, 36.0484, -3.71, -44, .2, .231, 2.287, 14357.1381, -2.49, -16, .1, .227, 5.158, 2.6298, 0, 0, 0, .219, 5.085, 47742.8914, 1.72, 63, -.3, .211, 2.145, 6638.7244, -2.18, -19, .1, .201, 4.415, 39623.7495, -4.13, -14, 0, .194, 2.091, 588.4927, 0, 0, 0, .193, 3.057, -15400.7789, -3.1, -50, 0, .186, 5.598, 16799.3582, -.72, 6, 0, .185, 3.886, 1150.677, 0, 0, 0, .183, 1.619, 7178.0144, 1.52, 25, 0, .181, 2.635, 8328.3391, 1.52, 25, 0, .181, 2.077, 8329.0437, 1.52, 25, 0, .179, 3.215, -9652.8694, -.9, -18, 0, .176, 1.716, -8815.018, -5.26, -69, 0, .175, 5.673, 550.7553, 0, 0, 0, .17, 2.06, 31295.058, -5.6, -39, 0, .167, 1.239, 7211.7617, -.7, 6, 0, .165, 4.499, 14967.4158, -.7, 6, 0, .164, 3.595, 15540.4531, .9, 31, 0, .164, 4.237, 522.3694, 0, 0, 0, .163, 4.633, 15545.0555, -2.2, -19, 0, .161, .478, 6428.0209, -2.2, -19, 0, .158, 2.03, 13171.5218, -4.3, -38, 0, .157, 2.28, 7216.3641, -3.7, -44, 0, .154, 5.65, 7935.6705, 1.5, 25, 0, .152, .46, 29828.9047, -1.3, 12, 0, .151, 1.19, -.7113, 0, 0, 0, .15, 1.42, 23942.4334, -1, 9, 0, .144, 2.75, 7753.3529, 1.5, 25, 0, .137, 2.08, 7213.7105, -2.2, -19, 0, .137, 1.44, 7214.4152, -2.2, -19, 0, .136, 4.46, -1185.6162, -1.8, -22, 0, .136, 3.03, 8000.1048, -2.2, -19, 0, .134, 2.83, 14756.7124, -.7, 6, 0, .131, 5.05, 6821.0419, -2.2, -19, 0, .128, 5.99, -17214.6971, -4.9, -72, 0, .127, 5.35, 8721.7124, 1.5, 25, 0, .126, 4.49, 46628.2629, -2, 19, 0, .125, 5.94, 7149.6285, 1.5, 25, 0, .124, 1.09, 49067.0695, 1.1, 55, 0, .121, 2.88, 15471.7666, 1.2, 28, 0, .111, 3.92, 41643.4571, 7.6, 125, -1, .11, 1.96, 8904.0299, 1.5, 25, 0, .106, 3.3, -18.0489, -2.2, -19, 0, .105, 2.3, -4.931, 1.5, 25, 0, .104, 2.22, -6.559, -1.9, -22, 0, .101, 1.44, 1884.9059, -.1, 0, 0, .1, 5.92, 5471.1324, -5.9, -63, 0, .099, 1.12, 15149.7333, -.7, 6, 0, .096, 4.73, 15508.9972, -.4, 10, 0, .095, 5.18, 7230.9835, 1.5, 25, 0, .093, 3.37, 39900.5266, 3.9, 81, 0, .092, 2.01, 25057.0619, 2.7, 53, 0, .092, 1.21, -79.6298, 0, 0, 0, .092, 1.65, -26310.2523, -4, -68, 0, .091, 1.01, 42062.5561, -1, 23, 0, .09, 6.1, 29342.5781, -5, -32, 0, .09, 4.43, 15542.402, -.7, 6, 0, .09, 3.8, 15543.1066, -.7, 6, 0, .089, 4.15, 6063.3859, -2.2, -19, 0, .086, 4.03, 52.9691, 0, 0, 0, .085, .49, 47952.4409, -2.6, 11, 0, .085, 1.6, 7632.8154, 2.1, 32, 0, .084, .22, 14392.0773, -.7, 6, 0, .083, 6.22, 6028.4466, -4, -41, 0, .083, .63, -7909.9389, 2.8, 26, 0, .083, 5.2, -77.5523, 0, 0, 0, .082, 2.74, 8786.1467, -2.2, -19, 0, .08, 2.43, 9166.5428, -2.8, -26, 0, .08, 3.7, -25405.1732, 4.1, 27, 0, .078, 5.68, 48857.52, 5.4, 106, -1, .077, 1.85, 8315.5735, -2.2, -19, 0, .075, 5.46, -18191.1103, 1.9, 8, 0, .075, 1.41, -16238.6304, 1.3, 1, 0, .074, 5.06, 40110.0761, -.4, 30, 0, .072, 2.1, 64.4343, -3.7, -44, 0, .071, 2.17, 37671.2695, -3.5, -6, 0, .069, 1.71, 16693.4313, -.7, 6, 0, .069, 3.33, -26100.7028, -8.3, -119, 1, .068, 1.09, 8329.4028, 1.5, 25, 0, .068, 3.62, 8327.9801, 1.5, 25, 0, .068, 2.41, 16833.1509, -1, 3, 0, .067, 3.4, 24709.2971, -3.5, -20, 0, .067, 1.65, 8346.7156, -.3, 3, 0, .066, 2.61, 22547.2677, 1.5, 39, 0, .066, 3.5, 15576.5113, -1, 3, 0, .065, 5.76, 33037.9886, -2, 5, 0, .065, 4.58, 8322.1325, -.3, 3, 0, .065, 6.2, 17913.9868, 3, 50, 0, .065, 1.5, 22685.8295, -1, 9, 0, .065, 2.37, 7180.3058, -1.9, -15, 0, .064, 1.06, 30943.5332, 2.4, 56, 0, .064, 1.89, 8288.8765, 1.5, 25, 0, .064, 4.7, 6.0335, .3, 4, 0, .063, 2.83, 8368.5063, 1.5, 25, 0, .063, 5.66, -2580.7819, .7, 7, 0, .062, 3.78, 7056.3285, -2.2, -19, 0, .061, 1.49, 8294.91, 1.8, 29, 0, .061, .12, -10281.1714, -.9, -18, 0, .061, 3.06, -8362.4729, -1.2, -21, 0, .061, 4.43, 8170.9571, 1.5, 25, 0, .059, 5.78, -13.1179, -3.7, -44, 0, .059, 5.97, 6625.5702, -2.2, -19, 0, .058, 5.01, -.508, -.3, 0, 0, .058, 2.73, 7161.0938, -2.2, -19, 0, .057, .19, 7214.0629, -2.2, -19, 0, .057, 4, 22199.5029, -4.7, -35, 0, .057, 5.38, 8119.142, 5.8, 76, 0, .056, 1.07, 7542.6495, 1.5, 25, 0, .056, .28, 8486.4258, 1.5, 25, 0, .054, 4.19, 16655.0816, 4.6, 75, 0, .053, .72, 7267.032, -2.2, -19, 0, .053, 3.12, 12.6192, .6, 7, 0, .052, 2.99, -32896.013, -1.8, -49, 0, .052, 3.46, 1097.708, 0, 0, 0, .051, 5.37, -6443.786, -1.6, -25, 0, .051, 1.35, 7789.401, -2.2, -19, 0, .051, 5.83, 40042.502, .2, 38, 0, .051, 3.63, 9114.733, 1.5, 25, 0, .05, 1.51, 8504.484, -2.5, -22, 0, .05, 5.23, 16659.684, 1.5, 25, 0, .05, 1.15, 7247.82, -2.5, -23, 0, .047, .25, -1290.421, .3, 0, 0, .047, 4.67, -32686.464, -6.1, -100, 0, .047, 3.49, 548.678, 0, 0, 0, .047, 2.37, 6663.308, -2.2, -19, 0, .046, .98, 1572.084, 0, 0, 0, .046, 2.04, 14954.262, -.7, 6, 0, .046, 3.72, 6691.693, -2.2, -19, 0, .045, 6.19, -235.287, 0, 0, 0, .044, 2.96, 32967.001, -.1, 27, 0, .044, 3.82, -1671.943, -5.6, -66, 0, .043, 5.82, 1179.063, 0, 0, 0, .043, .07, 34152.617, 1.7, 49, 0, .043, 3.71, 6514.773, -.3, 0, 0, .043, 5.62, 15.732, -2.5, -23, 0, .043, 5.8, 8351.233, -2.2, -19, 0, .042, .27, 7740.199, 1.5, 25, 0, .042, 6.14, 15385.02, -.7, 6, 0, .042, 6.13, 7285.051, -4.1, -41, 0, .041, 1.27, 32757.451, 4.2, 78, 0, .041, 4.46, 8275.722, 1.5, 25, 0, .04, .23, 8381.661, 1.5, 25, 0, .04, 5.87, -766.864, 2.5, 29, 0, .04, 1.66, 254.431, 0, 0, 0, .04, .4, 9027.981, -.4, 0, 0, .04, 2.96, 7777.936, 1.5, 25, 0, .039, 4.67, 33943.068, 6.1, 100, 0, .039, 3.52, 8326.062, 1.5, 25, 0, .039, 3.75, 21013.887, -6.5, -57, 0, .039, 5.6, 606.978, 0, 0, 0, .039, 1.19, 8331.321, 1.5, 25, 0, .039, 2.84, 7211.433, -2.2, -19, 0, .038, .67, 7216.693, -2.2, -19, 0, .038, 6.22, 25161.867, .6, 28, 0, .038, 4.4, 7806.322, 1.5, 25, 0, .038, 4.16, 9179.168, -2.2, -19, 0, .037, 4.73, 14991.999, -.7, 6, 0, .036, .35, 67.514, -.6, -7, 0, .036, 3.7, 25266.611, -1.6, 0, 0, .036, 5.39, 16328.796, -.7, 6, 0, .035, 1.44, 7174.248, -2.2, -19, 0, .035, 5, 15684.73, -4.4, -38, 0, .035, .39, -15.419, -2.2, -19, 0, .035, 6.07, 15020.385, -.7, 6, 0, .034, 6.01, 7371.797, -2.2, -19, 0, .034, .96, -16623.626, -3.4, -54, 0, .033, 6.24, 9479.368, 1.5, 25, 0, .033, 3.21, 23661.896, 5.2, 82, 0, .033, 4.06, 8311.418, -2.2, -19, 0, .033, 2.4, 1965.105, 0, 0, 0, .033, 5.17, 15489.785, -.7, 6, 0, .033, 5.03, 21986.54, .9, 31, 0, .033, 4.1, 16691.14, 2.7, 46, 0, .033, 5.13, 47114.589, 1.7, 63, 0, .033, 4.45, 8917.184, 1.5, 25, 0, .033, 4.23, 2.078, 0, 0, 0, .032, 2.33, 75.251, 1.5, 25, 0, .032, 2.1, 7253.878, -2.2, -19, 0, .032, 3.11, -.224, 1.5, 25, 0, .032, 4.43, 16640.462, -.7, 6, 0, .032, 5.68, 8328.363, 0, 0, 0, .031, 5.32, 8329.02, 3, 50, 0, .031, 3.7, 16118.093, -.7, 6, 0, .03, 3.67, 16721.817, -.7, 6, 0, .03, 5.27, -1881.492, -1.2, -15, 0, .03, 5.72, 8157.839, -2.2, -19, 0, .029, 5.73, -18400.313, -6.7, -94, 0, .029, 2.76, 16, -2.2, -19, 0, .029, 1.75, 8879.447, 1.5, 25, 0, .029, .32, 8851.061, 1.5, 25, 0, .029, .9, 14704.903, 3.7, 57, 0, .028, 2.9, 15595.723, -.7, 6, 0, .028, 5.88, 16864.631, .2, 24, 0, .028, .63, 16869.234, -2.8, -26, 0, .028, 4.04, -18609.863, -2.4, -43, 0, .027, 5.83, 6727.736, -5.9, -63, 0, .027, 6.12, 418.752, 4.3, 51, 0, .027, .14, 41157.131, 3.9, 81, 0, .026, 3.8, 15.542, 0, 0, 0, .026, 1.68, 50181.698, 4.8, 99, -1, .026, .32, 315.469, 0, 0, 0, .025, 5.67, 19.188, .3, 0, 0, .025, 3.16, 62.133, -2.2, -19, 0, .025, 3.76, 15502.939, -.7, 6, 0, .025, 4.53, 45999.961, -2, 19, 0, .024, 3.21, 837.851, -4.4, -51, 0, .024, 2.82, 38157.596, .3, 37, 0, .024, 5.21, 15540.124, -.7, 6, 0, .024, .26, 14218.576, 0, 13, 0, .024, 3.01, 15545.384, -.7, 6, 0, .024, 1.16, -17424.247, -.6, -21, 0, .023, 2.34, -67.574, .6, 7, 0, .023, 2.44, 18.024, -1.9, -22, 0, .023, 3.7, 469.4, 0, 0, 0, .023, .72, 7136.511, -2.2, -19, 0, .023, 4.5, 15582.569, -.7, 6, 0, .023, 2.8, -16586.395, -4.9, -72, 0, .023, 1.51, 80.182, 0, 0, 0, .023, 1.09, 5261.583, -1.5, -12, 0, .023, .56, 54956.954, -.5, 44, 0, .023, 4.01, 8550.86, -2.2, -19, 0, .023, 4.46, 38995.448, -4.1, -14, 0, .023, 3.82, 2358.126, 0, 0, 0, .022, 3.77, 32271.125, .5, 34, 0, .022, .82, 15935.775, -.7, 6, 0, .022, 1.07, 24013.421, -2.9, -13, 0, .022, .4, 8940.078, -2.2, -19, 0, .022, 2.06, 15700.489, -.7, 6, 0, .022, 4.27, 15124.002, -5, -45, 0, .021, 1.16, 56071.583, 3.2, 88, 0, .021, 5.58, 9572.189, -2.2, -19, 0, .02, 1.7, -17.273, -3.7, -44, 0, .02, 3.05, 214.617, 0, 0, 0, .02, 4.41, 8391.048, -2.2, -19, 0, .02, 5.95, 23869.145, 2.4, 56, 0, .02, .42, 40947.927, -4.7, -21, 0, .019, 1.39, 5818.897, .3, 10, 0, .019, .71, 23873.747, -.7, 6, 0, .019, 2.81, 7291.615, -2.2, -19, 0, .019, 5.09, 8428.018, -2.2, -19, 0, .019, 4.14, 6518.187, -1.6, -12, 0, .019, 3.85, 21.33, 0, 0, 0, .018, .66, 14445.046, -.7, 6, 0, .018, 1.65, .966, -4, -48, 0, .018, 5.64, -17143.709, -6.8, -94, 0, .018, 6.01, 7736.432, -2.2, -19, 0, .018, 2.74, 31153.083, -1.9, 5, 0, .018, 4.58, 6116.355, -2.2, -19, 0, .018, 2.28, 46.401, .3, 0, 0, .018, 3.8, 10213.597, 1.4, 25, 0, .018, 2.84, 56281.132, -1.1, 36, 0, .018, 3.53, 8249.062, 1.5, 25, 0, .017, 4.43, 20871.911, -3, -13, 0, .017, 4.44, 627.596, 0, 0, 0, .017, 1.85, 628.308, 0, 0, 0, .017, 1.19, 8408.321, 2, 25, 0, .017, 1.95, 7214.056, -2, -19, 0, .017, 1.57, 7214.07, -2, -19, 0, .017, 1.65, 13870.811, -6, -60, 0, .017, .3, 22.542, -4, -44, 0, .017, 2.62, -119.445, 0, 0, 0, .016, 4.87, 5747.909, 2, 32, 0, .016, 4.45, 14339.108, -1, 6, 0, .016, 1.83, 41366.68, 0, 30, 0, .016, 4.53, 16309.618, -3, -23, 0, .016, 2.54, 15542.754, -1, 6, 0, .016, 6.05, 1203.646, 0, 0, 0, .015, 5.2, 2751.147, 0, 0, 0, .015, 1.8, -10699.924, -5, -69, 0, .015, .4, 22824.391, -3, -20, 0, .015, 2.1, 30666.756, -6, -39, 0, .015, 2.1, 6010.417, -2, -19, 0, .015, .7, -23729.47, -5, -75, 0, .015, 1.4, 14363.691, -1, 6, 0, .015, 5.8, 16900.689, -2, 0, 0, .015, 5.2, 23800.458, 3, 53, 0, .015, 5.3, 6035, -2, -19, 0, .015, 1.2, 8251.139, 2, 25, 0, .015, 3.6, -8.86, 0, 0, 0, .015, .8, 882.739, 0, 0, 0, .015, 3, 1021.329, 0, 0, 0, .015, .6, 23296.107, 1, 31, 0, .014, 5.4, 7227.181, 2, 25, 0, .014, .1, 7213.352, -2, -19, 0, .014, 4, 15506.706, 3, 50, 0, .014, 3.4, 7214.774, -2, -19, 0, .014, 4.6, 6665.385, -2, -19, 0, .014, .1, -8.636, -2, -22, 0, .014, 3.1, 15465.202, -1, 6, 0, .014, 4.9, 508.863, 0, 0, 0, .014, 3.5, 8406.244, 2, 25, 0, .014, 1.3, 13313.497, -8, -82, 0, .014, 2.8, 49276.619, -3, 0, 0, .014, .1, 30528.194, -3, -10, 0, .013, 1.7, 25128.05, 1, 31, 0, .013, 2.9, 14128.405, -1, 6, 0, .013, 3.4, 57395.761, 3, 80, 0, .013, 2.7, 13029.546, -1, 6, 0, .013, 3.9, 7802.556, -2, -19, 0, .013, 1.6, 8258.802, -2, -19, 0, .013, 2.2, 8417.709, -2, -19, 0, .013, .7, 9965.21, -2, -19, 0, .013, 3.4, 50391.247, 0, 48, 0, .013, 3, 7134.433, -2, -19, 0, .013, 2.9, 30599.182, -5, -31, 0, .013, 3.6, -9723.857, 1, 0, 0, .013, 4.8, 7607.084, -2, -19, 0, .012, .8, 23837.689, 1, 35, 0, .012, 3.6, 4.409, -4, -44, 0, .012, 5, 16657.031, 3, 50, 0, .012, 4.4, 16657.735, 3, 50, 0, .012, 1.1, 15578.803, -4, -38, 0, .012, 6, -11.49, 0, 0, 0, .012, 1.9, 8164.398, 0, 0, 0, .012, 2.4, 31852.372, -4, -17, 0, .012, 2.4, 6607.085, -2, -19, 0, .012, 4.2, 8359.87, 0, 0, 0, .012, .5, 5799.713, -2, -19, 0, .012, 2.7, 7220.622, 0, 0, 0, .012, 4.3, -139.72, 0, 0, 0, .012, 2.3, 13728.836, -2, -16, 0, .011, 3.6, 14912.146, 1, 31, 0, .011, 4.7, 14916.748, -2, -19, 0],
                    [1.6768, 4.66926, 628.301955, -.0266, .1, -.005, .51642, 3.3721, 6585.76091, -2.158, -18.9, .09, .41383, 5.7277, 14914.452335, -.635, 6.2, -.04, .37115, 3.9695, 7700.389469, 1.55, 25, -.12, .2756, .7416, 8956.99338, 1.496, 25.1, -.13, .24599, 4.2253, -2.3012, 1.523, 25.1, -.12, .07118, .1443, 7842.36482, -2.211, -19, .08, .06128, 2.4998, 16171.05625, -.688, 6, 0, .04516, .443, 8399.6791, -.36, 3, 0, .04048, 5.771, 14286.15038, -.61, 6, 0, .03747, 4.626, 1256.60391, -.05, 0, 0, .03707, 3.415, 5957.45895, -2.13, -19, .1, .03649, 1.8, 23243.14376, .89, 31, -.2, .02438, .042, 16029.08089, 3.07, 50, -.2, .02165, 1.017, -1742.93051, -3.68, -44, .2, .01923, 3.097, 17285.6848, 3.02, 50, -.3, .01692, 1.28, .3286, 1.52, 25, -.1, .01361, .298, 8326.3902, 3.05, 50, -.2, .01293, 4.013, 7072.0875, 1.58, 25, -.1, .01276, 4.413, 8330.9926, 0, 0, 0, .0127, .101, 8470.6668, -2.24, -19, .1, .01097, 1.203, 22128.5152, -2.82, -13, 0, .01088, 2.545, 15542.7543, -.66, 6, 0, .00835, .19, 7214.0629, -2.18, -19, .1, .00734, 4.855, 24499.7477, .83, 31, -.2, .00686, 5.13, 13799.8238, -4.34, -38, .2, .00631, .93, -486.3266, -3.73, -44, 0, .00585, .699, 9585.2953, 1.5, 25, 0, .00566, 4.073, 8328.3391, 1.5, 25, 0, .00566, .638, 8329.0437, 1.5, 25, 0, .00539, 2.472, -1952.48, .6, 7, 0, .00509, 2.88, -.7113, 0, 0, 0, .00469, 3.56, 30457.2066, -1.3, 12, 0, .00387, .78, -.3523, 0, 0, 0, .00378, 1.84, 22614.8418, .9, 31, 0, .00362, 5.53, -695.8761, .6, 7, 0, .00317, 2.8, 16728.3705, 1.2, 28, 0, .00303, 6.07, 157.7344, 0, 0, 0, .003, 2.53, 33.757, -.3, -4, 0, .00295, 4.16, 31571.8352, 2.4, 56, 0, .00289, 5.98, 7211.7617, -.7, 6, 0, .00285, 2.06, 15540.4531, .9, 31, 0, .00283, 2.65, 2.6298, 0, 0, 0, .00282, 6.17, 15545.0555, -2.2, -19, 0, .00278, 1.23, -39.8149, 0, 0, 0, .00272, 3.82, 7216.3641, -3.7, -44, 0, .0027, 4.37, 70.9877, -1.9, -22, 0, .00256, 5.81, 13657.8484, -.6, 6, 0, .00244, 5.64, -.2237, 1.5, 25, 0, .0024, 2.96, 8311.7707, -2.2, -19, 0, .00239, .87, -33.7814, .3, 4, 0, .00216, 2.31, 15.9995, -2.2, -19, 0, .00186, 3.46, 5329.157, -2.1, -19, 0, .00169, 2.4, 24357.772, 4.6, 75, 0, .00161, 5.8, 8329.403, 1.5, 25, 0, .00161, 5.2, 8327.98, 1.5, 25, 0, .0016, 4.26, 23385.119, -2.9, -13, 0, .00156, 1.26, 550.755, 0, 0, 0, .00155, 1.25, 21500.213, -2.8, -13, 0, .00152, .6, -16.921, -3.7, -44, 0, .0015, 2.71, -79.63, 0, 0, 0, .0015, 5.29, 15.542, 0, 0, 0, .00148, 1.06, -2371.232, -3.7, -44, 0, .00141, .77, 8328.691, 1.5, 25, 0, .00141, 3.67, 7143.075, -.3, 0, 0, .00138, 5.45, 25614.376, 4.5, 75, 0, .00129, 4.9, 23871.446, .9, 31, 0, .00126, 4.03, 141.975, -3.8, -44, 0, .00124, 6.01, 522.369, 0, 0, 0, .0012, 4.94, -10071.622, -5.2, -69, 0, .00118, 5.07, -15.419, -2.2, -19, 0, .00107, 3.49, 23452.693, -3.4, -20, 0, .00104, 4.78, 17495.234, -1.3, 0, 0, .00103, 1.44, -18.049, -2.2, -19, 0, .00102, 5.63, 15542.402, -.7, 6, 0, .00102, 2.59, 15543.107, -.7, 6, 0, .001, 4.11, -6.559, -1.9, -22, 0, 97e-5, .08, 15400.779, 3.1, 50, 0, 96e-5, 5.84, 31781.385, -1.9, 5, 0, 94e-5, 1.08, 8328.363, 0, 0, 0, 94e-5, 2.46, 16799.358, -.7, 6, 0, 94e-5, 1.69, 6376.211, 2.2, 32, 0, 93e-5, 3.64, 8329.02, 3, 50, 0, 93e-5, 2.65, 16655.082, 4.6, 75, 0, 9e-4, 1.9, 15056.428, -4.4, -38, 0, 89e-5, 1.59, 52.969, 0, 0, 0, 88e-5, 2.02, -8257.704, -3.4, -47, 0, 88e-5, 3.02, 7213.711, -2.2, -19, 0, 87e-5, .5, 7214.415, -2.2, -19, 0, 87e-5, .49, 16659.684, 1.5, 25, 0, 82e-5, 5.64, -4.931, 1.5, 25, 0, 79e-5, 5.17, 13171.522, -4.3, -38, 0, 76e-5, 3.6, 29828.905, -1.3, 12, 0, 76e-5, 4.08, 24567.322, .3, 24, 0, 76e-5, 4.58, 1884.906, -.1, 0, 0, 73e-5, .33, 31713.811, -1.4, 12, 0, 73e-5, .93, 32828.439, 2.4, 56, 0, 71e-5, 5.91, 38785.898, .2, 37, 0, 69e-5, 2.2, 15613.742, -2.5, -16, 0, 66e-5, 3.87, 15.732, -2.5, -23, 0, 66e-5, .86, 25823.926, .2, 24, 0, 65e-5, 2.52, 8170.957, 1.5, 25, 0, 63e-5, .18, 8322.132, -.3, 0, 0, 6e-4, 5.84, 8326.062, 1.5, 25, 0, 6e-4, 5.15, 8331.321, 1.5, 25, 0, 6e-4, 2.18, 8486.426, 1.5, 25, 0, 58e-5, 2.3, -1.731, -4, -44, 0, 58e-5, 5.43, 14357.138, -2, -16, 0, 57e-5, 3.09, 8294.91, 2, 29, 0, 57e-5, 4.67, -8362.473, -1, -21, 0, 56e-5, 4.15, 16833.151, -1, 0, 0, 54e-5, 1.93, 7056.329, -2, -19, 0, 54e-5, 5.27, 8315.574, -2, -19, 0, 52e-5, 5.6, 8311.418, -2, -19, 0, 52e-5, 2.7, -77.552, 0, 0, 0, 51e-5, 4.3, 7230.984, 2, 25, 0, 5e-4, .4, -.508, 0, 0, 0, 49e-5, 5.4, 7211.433, -2, -19, 0, 49e-5, 4.4, 7216.693, -2, -19, 0, 49e-5, 4.3, 16864.631, 0, 24, 0, 49e-5, 2.2, 16869.234, -3, -26, 0, 47e-5, 6.1, 627.596, 0, 0, 0, 47e-5, 5, 12.619, 1, 7, 0, 45e-5, 4.9, -8815.018, -5, -69, 0, 44e-5, 1.6, 62.133, -2, -19, 0, 42e-5, 2.9, -13.118, -4, -44, 0, 42e-5, 4.1, -119.445, 0, 0, 0, 41e-5, 4.3, 22756.817, -3, -13, 0, 41e-5, 3.6, 8288.877, 2, 25, 0, 4e-4, .5, 6663.308, -2, -19, 0, 4e-4, 1.1, 8368.506, 2, 25, 0, 39e-5, 4.1, 6443.786, 2, 25, 0, 39e-5, 3.1, 16657.383, 3, 50, 0, 38e-5, .1, 16657.031, 3, 50, 0, 38e-5, 3, 16657.735, 3, 50, 0, 38e-5, 4.6, 23942.433, -1, 9, 0, 37e-5, 4.3, 15385.02, -1, 6, 0, 37e-5, 5, 548.678, 0, 0, 0, 36e-5, 1.8, 7213.352, -2, -19, 0, 36e-5, 1.7, 7214.774, -2, -19, 0, 35e-5, 1.1, 7777.936, 2, 25, 0, 35e-5, 1.6, -8.86, 0, 0, 0, 35e-5, 4.4, 23869.145, 2, 56, 0, 35e-5, 2, 6691.693, -2, -19, 0, 34e-5, 1.3, -1185.616, -2, -22, 0, 34e-5, 2.2, 23873.747, -1, 6, 0, 33e-5, 2, -235.287, 0, 0, 0, 33e-5, 3.1, 17913.987, 3, 50, 0, 33e-5, 1, 8351.233, -2, -19, 0],
                    [.00487, 4.6693, 628.30196, -.027, 0, -.01, .00228, 2.6746, -2.3012, 1.523, 25, -.12, .0015, 3.372, 6585.76091, -2.16, -19, .1, .0012, 5.728, 14914.45233, -.64, 6, 0, .00108, 3.969, 7700.38947, 1.55, 25, -.1, 8e-4, .742, 8956.99338, 1.5, 25, -.1, 254e-6, 6.002, .3286, 1.52, 25, -.1, 21e-5, .144, 7842.3648, -2.21, -19, 0, 18e-5, 2.5, 16171.0562, -.7, 6, 0, 13e-5, .44, 8399.6791, -.4, 3, 0, 126e-6, 5.03, 8326.3902, 3, 50, 0, 12e-5, 5.77, 14286.1504, -.6, 6, 0, 118e-6, 5.96, 8330.9926, 0, 0, 0, 11e-5, 1.8, 23243.1438, .9, 31, 0, 11e-5, 3.42, 5957.459, -2.1, -19, 0, 11e-5, 4.63, 1256.6039, -.1, 0, 0, 99e-6, 4.7, -.7113, 0, 0, 0, 7e-5, .04, 16029.0809, 3.1, 50, 0, 7e-5, 5.14, 8328.3391, 1.5, 25, 0, 7e-5, 5.85, 8329.0437, 1.5, 25, 0, 6e-5, 1.02, -1742.9305, -3.7, -44, 0, 6e-5, 3.1, 17285.6848, 3, 50, 0, 54e-6, 5.69, -.352, 0, 0, 0, 43e-6, .52, 15.542, 0, 0, 0, 41e-6, 2.03, 2.63, 0, 0, 0, 4e-5, .1, 8470.667, -2.2, -19, 0, 4e-5, 4.01, 7072.088, 1.6, 25, 0, 36e-6, 2.93, -8.86, -.3, 0, 0, 3e-5, 1.2, 22128.515, -2.8, -13, 0, 3e-5, 2.54, 15542.754, -.7, 6, 0, 27e-6, 4.43, 7211.762, -.7, 6, 0, 26e-6, .51, 15540.453, .9, 31, 0, 26e-6, 1.44, 15545.055, -2.2, -19, 0, 25e-6, 5.37, 7216.364, -3.7, -44, 0],
                    [12e-6, 1.041, -2.3012, 1.52, 25, -.1, 17e-7, .31, -.711, 0, 0, 0]
                ],
                SHUO_KB: [1457698.231017, 29.53067166, 1546082.512234, 29.53085106, 1640640.7353, 29.5306, 1642472.151543, 29.53085439, 1683430.5093, 29.53086148, 1752148.041079, 29.53085097, 1807665.420323, 29.53059851, 1883618.1141, 29.5306, 1907360.7047, 29.5306, 1936596.2249, 29.5306, 1939135.6753, 29.5306, 1947168],
                SB: "00000000000000000000000020000002000000000000200000001000000000000000000000000000000000000010002000000000000000200000000200000000000000000000002000000000020000000000000000000000000000000000100000000000010000001000001000000000000000100000000020000000000000002000000000000001000000000000001000000000000100000000010010000020000202001101002020200101000002020010100002000000010100202000001010000202020001010000202020001010000202000001010020202001010000020200101000022000010101002020001010100002020201010100002020200010100002020000010100202000010100000202001010000220200101010020200010101001000000000001001000200000000000020000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000020010000000000000000000000000000000000000001000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000010001000000100001001010010101000000000000100001000001000100000000001000000000000100100000000010010100010000000000000000000100011000000000000000000002000000001020000000001001000001000001001000000001000100010010000100001000000100000100100010000000000000010000200000000000000000000000000000000001000000000100100000000000000000000000000000000000000000000000000010000000000101000000000000000000000000000001001010010010100100010000010010000001001001001001000000100100000100010000000100000000000000100000000010100000000001000100010100100000010000000010010000000001000001000000101002000000000100000000000000100001000000010100000101001000000100100100100100000010010010000001001010000000100101001000000000101001000000010101000000000010000001000001000001000000100000000000010010000000000000000010000000100010010000000100000010000010100010010000000000000000001001000000000100101000000010000100110100000000100000000000010000000010000010000100010000000000000000000000010000000000000000100000001000000000001000000000000000100000000000100000010000000100001010000000000101000010100000001001000000010100000000000000000000001000000000001000000000000000000000000000000000000000100000001000000000000100000000000000000000000010000000010010000000001000001010100000001000000000000001000010000101001001010000001000101000000000100100000100110000010010010010001001010010010000001000000000000101000010000000101000000000010000001001001001001000000100101000000010000100010101001010010010000101010010000000101010010000000100010010000010010010000001001010000000100101000100010000000100100001000100100000101010000000000101010100100000100000000000010010000010001001010001000100000001001010000000000000001000100100000100010100001010100000100000000100100100100010010100010001000000010010100000010001010000000001000000000001001010100000001000010100000001001010000101000000010010000100101001000100010100000000010000010000010010001000001000010100000001000000100001000000010000101001001010000001000101000001000100100000100100000010010010010101000000010000000000000010000000001010010010000100010000010010000001001000001001000000100100000100010010100100100001010000100000001010000100000001010100000000100000010000010010010000001001010001000100101000101000010100100000001010100100000001010100000000001000000100000000100100000010010100000000000010001000100000001001000010001001000001010101001000001000101001000100000001000000100100000100010000100010001000000010010100000010000000010001000010001000001000010101000000000010100001000001000100101000100010000000100101000000100010000000000010000010000010010101000000010000101000000010010100001010000010100000001001010000001000101000000000100000000100100101000000000000101000000000100001000010000000100001010010010100000010001010000010001000000001001000000000100000101000010100100000000010100100000001010100100100001000100002000000100002200001010010000000001010001010000101001001000010100001000000010101001000001010001000000000000000100000000100100000001000100010000000010000010000001000000000010101001010000010101000000001000000001000000001001000000000101000100000000100010100000000010000000100010010000010101010010101010100010010001000010010000000001010001000100001000100010000000100100000000100000000000010000101010000010000101010000000000101000010000010100000010001010100000001001000000001000000000000000100000000000100101010000000100001010000100100101000010100000100000000010010000010010001000001010001000000001001001010000100101001000000100001000000010101000001000000000100100000000100010000010100010000001010010000100001001000010000101001000000000101000000000010101001001000000001000000000101000100000010100110000001010110010100001010010000000101010010000000101010010000010000010000000000010001000000101001000000010001000101001000100100100000010000000000101010000100010100010000100010000000010000001010010000000100010001000010001000101001000000100000000000100100000101000100101010100000100100010000100100201001000100010000100000000010010000001001001000001001000100000000001010100000101001010100000001001010010000000101001000100010100100000010010010010010000001000000001000100000001000010100000000000010100101001001010010001000001001000000100100000100000000000010100010001001010010010100001000010000000001000010000100101010010010010000001001001001001000000000101000100000010100100101001010100000000001010010000000001010000000000101000010010010000010000000001010001000000101001000010010001000101001000100100000001010100100000101010100100000100000100000010010100010000001000010000000100010001010010001001000001000001001000001010100001000101000101001000100000000100010010100100000001000100010100100000000010010000001000001000001001010101000001000010101000001001010100101001001010010001000101001000000000100100000010010010000010010001000000010010100000000010010100001000010010100101010001010010000000001001001001100100100100100000010010100010101000010010000100000000010000000001010000010100100010010010010000011001001001000000000100101000100010010100100101000010000100000000010100100000001010100100100100000000010010010000000001001010001000100101001001010010101000000000010100001000001010100001000001000000000000100100100000010010100010001001000010000100100010001010010001001000000010101001000001010001001000001000001001000100101000100010010000100001001000100010100100000010010010000010010001010001000010101010000010010001001000001000100101001000010010001000101001000000100100100000100000010000010010101000000010000101000000000000101001010010010100100010001010010000001001001001001100000100100100100010000000100101000000000100001000010100100101001000100010100100000010010010010011001001001001001000100101000001010000100100000000000100000000000010100000001001000000100100100100110010010010200000001001010001000100101001001010000101001000000010101001000000010001001001001000001000000100100000000010010100010001001010010010100101010000000010101000010000010101000010000010000000000001001000000000100101000100010010000100101001000100010100100010010000010101010010100010100010010000010000010010001001010001000100100001000010010001000101001000100100000100000100100010000010100101010000000100101010010100010001001000010010100100010001010010000001000001000001000000100000100101010100000100001010000100000001010010100100101001000100010100100000010010010010011000001001001001010100000001001010000000001000010000101001001010010001000101001000000100100100100110010010010010010001001010010010100101000000000000101000010000000101000000010010000001001001001001100100100100000000010010100010101001010010010000101010010000000101010010000000100010010000010010010000001001010000000100101000100010010000100101001000100100000101010000100000101010100100000100000000000010010000010001001010001000100100001001010010001000100001000100100100100010100001010100000100101010100100100100010010100010001001000010010100100010001010010001001000001000001001010100000001001010100000001001010000101002001010010000100101001000100010100100000010000010010010000001000001001010100000001000010000001000000010100101001001010010001000101001001000100100100100110000010010010010101001010010000100001000010000100001010010010020000000000000000020001000000000000000000000002000000000000000000000000000000100000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000020000000000000000000002000000000000002000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000200000000000000000000000002000000000000000000000000000000000020000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000001000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000010000200000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000100000000000000000200000000000000000000000002000000000000000000000000000000000020000000200000000000000000000000000002000000000000200000000000020000000000000000000000000000000000000000000000000000000000000000000000000000020000000002000000000200000000000000000000000000000000000000000000000000000000001000000000000000000200000000000000000000000000000000200000000000000000000000000000000100000000000000000000000000000000000000000200000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000100000200000000000000000000000002000000000200000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000001000000000000000000000000002000000000000002000000000002000000000000000000000000200200000000000000000000000000000000000001000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000200000000000000000000000100000010100000000000000000000000100000000200000000000000000000020000000000000000000000200000000000000000000000000000000000000000200000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000200000000000000000000000000010000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000020000000000000020000000000000000000000000000000000000000100000000001000000000000000000000000000000000200000000000200000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000100000020000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000010000000000000010000002000000000002000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000001000000002000000000000002000000000000000000000000000000000000000000000000000000220000000010000020000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000201000020000000200000000000000000000000001000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000001000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000200010000000000000000000000000000000000100000000000000100000000000000000000000000000000000000000002000100000000000000000000000000010000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000002000000000000000100000000000000000000000000000000000000000200000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000200000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000002000000000000000000000000000000000020000020000000000000020000000000000000000000000000200000000000020000000000000000000000000000000000000000000001000000000000000000000000000000020000000000000000000200000000000000000000000000000000000000000000010000000000000000000000000000000200000020000000000000000000000000200000000000000000000000000000000000000000000000002000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000100000000000000000020000000000002000000000000002000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000020000000000000001000000000000000000000000000000000000000002000000000002000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000200000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000020000000000000001000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000100000000000000000000000000000000000000000000000",
                nutationLon2: function(t) {
                    for (var n = -1.742 * t, e = t * t, i = 0, r = 0, a = this.NUT_B.length; r < a; r += 5) i += (this.NUT_B[r + 3] + n) * Math.sin(this.NUT_B[r] + this.NUT_B[r + 1] * t + this.NUT_B[r + 2] * e), n = 0;
                    return i / 100 / this.SECOND_PER_RAD
                },
                eLon: function(t, n) {
                    t /= 10;
                    for (var e, i, r, a, F, h = 0, u = 1, C = this.XL0[2] - this.XL0[1], o = 0; o < 6; o++, u *= t)
                        if (e = Math.floor(this.XL0[1 + o]), 0 != (F = (i = Math.floor(this.XL0[2 + o])) - e)) {
                            n < 0 ? r = i : (r = Math.floor(3 * n * F / C + .5 + e), 0 != o && (r += 3), r > i && (r = i)), a = 0;
                            for (var A = e; A < r; A += 3) a += this.XL0[A] * Math.cos(this.XL0[A + 1] + t * this.XL0[A + 2]);
                            h += a * u
                        }
                    h /= this.XL0[0];
                    var E = t * t;
                    return h += (-.0728 - 2.7702 * t - 1.1019 * E - .0996 * E * t) / this.SECOND_PER_RAD
                },
                mLon: function(t, n) {
                    var e, i, r = this.XL1,
                        a = r[0].length,
                        F = 1,
                        h = 0,
                        u = t * t,
                        C = u * t,
                        o = C * t,
                        A = o * t,
                        E = t - 10;
                    h += (3.81034409 + 8399.684730072 * t - 3319e-8 * u + 3.11e-8 * C - 2.033e-10 * o) * this.SECOND_PER_RAD, h += 5028.792262 * t + 1.1124406 * u + 7699e-8 * C - 23479e-9 * o - 1.78e-8 * A, E > 0 && (h += 1.43 * E - .866 + .054 * E * E), u /= 1e4, C /= 1e8, o /= 1e8, (n *= 6) < 0 && (n = a);
                    for (var D = 0, s = r.length; D < s; D++, F *= t) {
                        var g = r[D],
                            B = g.length,
                            _ = Math.floor(n * B / a + .5);
                        for (D > 0 && (_ += 6), _ >= B && (_ = B), e = 0, i = 0; e < _; e += 6) i += g[e] * Math.cos(g[e + 1] + t * g[e + 2] + u * g[e + 3] + C * g[e + 4] + o * g[e + 5]);
                        h += i * F
                    }
                    return h /= this.SECOND_PER_RAD
                },
                gxcSunLon: function(t) {
                    var n = t * t,
                        e = 628.301955 * t - .043126 - 2732e-9 * n;
                    return -20.49552 * (1 + (.016708634 - 42037e-9 * t - 1.267e-7 * n) * Math.cos(e)) / this.SECOND_PER_RAD
                },
                ev: function(t) {
                    var n = 628.307585 * t;
                    return 628.332 + 21 * Math.sin(1.527 + n) + .44 * Math.sin(1.48 + 2 * n) + .129 * Math.sin(5.82 + n) * t + 55e-5 * Math.sin(4.21 + n) * t * t
                },
                saLon: function(t, n) {
                    return this.eLon(t, n) + this.nutationLon2(t) + this.gxcSunLon(t) + Math.PI
                },
                dtExt: function(t, n) {
                    var e = (t - 1820) / 100;
                    return n * e * e - 20
                },
                dtCalc: function(t) {
                    var n, e = this.DT_AT.length,
                        i = this.DT_AT[e - 2],
                        r = this.DT_AT[e - 1];
                    if (t >= i) return t > i + 100 ? this.dtExt(t, 31) : this.dtExt(t, 31) - (this.dtExt(i, 31) - r) * (i + 100 - t) / 100;
                    for (n = 0; n < e && !(t < this.DT_AT[n + 5]); n += 5);
                    var a = (t - this.DT_AT[n]) / (this.DT_AT[n + 5] - this.DT_AT[n]) * 10,
                        F = a * a,
                        h = F * a;
                    return this.DT_AT[n + 1] + this.DT_AT[n + 2] * a + this.DT_AT[n + 3] * F + this.DT_AT[n + 4] * h
                },
                dtT: function(t) {
                    return this.dtCalc(t / 365.2425 + 2e3) / this.SECOND_PER_DAY
                },
                mv: function(t) {
                    var n = 8399.71 - 914 * Math.sin(.7848 + 8328.691425 * t + 1523e-7 * t * t);
                    return n -= 179 * Math.sin(2.543 + 15542.7543 * t) + 160 * Math.sin(.1874 + 7214.0629 * t) + 62 * Math.sin(3.14 + 16657.3828 * t) + 34 * Math.sin(4.827 + 16866.9323 * t) + 22 * Math.sin(4.9 + 23871.4457 * t) + 12 * Math.sin(2.59 + 14914.4523 * t) + 7 * Math.sin(.23 + 6585.7609 * t) + 5 * Math.sin(.9 + 25195.624 * t) + 5 * Math.sin(2.32 - 7700.3895 * t) + 5 * Math.sin(3.88 + 8956.9934 * t) + 5 * Math.sin(.49 + 7771.3771 * t)
                },
                saLonT: function(t) {
                    var n, e = 628.3319653318;
                    return n = (t - 1.75347 - Math.PI) / e, e = this.ev(n), n += (t - this.saLon(n, 10)) / e, e = this.ev(n), n += (t - this.saLon(n, -1)) / e
                },
                msaLon: function(t, n, e) {
                    return this.mLon(t, n) + -34e-7 - (this.eLon(t, e) + this.gxcSunLon(t) + Math.PI)
                },
                msaLonT: function(t) {
                    var n, e = 7771.37714500204;
                    return n = (t + 1.08472) / e, n += (t - this.msaLon(n, 3, 3)) / e, e = this.mv(n) - this.ev(n), n += (t - this.msaLon(n, 20, 10)) / e, n += (t - this.msaLon(n, -1, 60)) / e
                },
                msaLonT2: function(t) {
                    var n, e = 7771.37714500204,
                        i = (n = (t + 1.08472) / e) * n;
                    return i = (n -= (-3309e-8 * i + .10976 * Math.cos(.784758 + 8328.6914246 * n + 152292e-9 * i) + .02224 * Math.cos(.1874 + 7214.0628654 * n - 21848e-8 * i) - .03342 * Math.cos(4.669257 + 628.307585 * n)) / e) * n, n += (t - (this.mLon(n, 20) - (4.8950632 + 628.3319653318 * n + 5297e-9 * i + .0334166 * Math.cos(4.669257 + 628.307585 * n) + 2061e-7 * Math.cos(2.67823 + 628.307585 * n) * n + 349e-6 * Math.cos(4.6261 + 1256.61517 * n) - 20.5 / this.SECOND_PER_RAD))) / (e = 7771.38 - 914 * Math.sin(.7848 + 8328.691425 * n + 1523e-7 * i) - 179 * Math.sin(2.543 + 15542.7543 * n) - 160 * Math.sin(.1874 + 7214.0629 * n))
                },
                shuoHigh: function(t) {
                    var n = 36525 * this.msaLonT2(t),
                        e = ((n = n - this.dtT(n) + this.ONE_THIRD) + .5) % 1 * this.SECOND_PER_DAY;
                    return (e < 1800 || e > this.SECOND_PER_DAY - 1800) && (n = 36525 * this.msaLonT(t) - this.dtT(n) + this.ONE_THIRD), n
                },
                shuoLow: function(t) {
                    var n = 7771.37714500204,
                        e = (t + 1.08472) / n;
                    return 36525 * (e -= (-331e-7 * e * e + .10976 * Math.cos(.785 + 8328.6914 * e) + .02224 * Math.cos(.187 + 7214.0629 * e) - .03342 * Math.cos(4.669 + 628.3076 * e)) / n + (32 * (e + 1.8) * (e + 1.8) - 20) / this.SECOND_PER_DAY / 36525) + this.ONE_THIRD
                },
                calcShuo: function(t) {
                    var n, e = this.SHUO_KB.length,
                        i = 0,
                        r = 14;
                    t += L.J2000;
                    var a = this.SHUO_KB[0] - r,
                        F = this.SHUO_KB[e - 1] - r,
                        h = 2436935;
                    if (t < a || t >= h) i = Math.floor(this.shuoHigh(Math.floor((t + r - 2451551) / 29.5306) * Math.PI * 2) + .5);
                    else if (t >= a && t < F) {
                        for (n = 0; n < e && !(t + r < this.SHUO_KB[n + 2]); n += 2);
                        i = this.SHUO_KB[n] + this.SHUO_KB[n + 1] * Math.floor((t + r - this.SHUO_KB[n]) / this.SHUO_KB[n + 1]), 1683460 === (i = Math.floor(i + .5)) && i++, i -= L.J2000
                    } else if (t >= F && t < h) {
                        i = Math.floor(this.shuoLow(Math.floor((t + r - 2451551) / 29.5306) * Math.PI * 2) + .5);
                        var u = Math.floor((t - F) / 29.5306),
                            C = this.SB.substr(u, 1);
                        "1" == C ? i += 1 : "2" == C && (i -= 1)
                    }
                    return i
                }
            },
            w = {
                WEEK: ["日", "一", "二", "三", "四", "五", "六"],
                DAYS_OF_MONTH: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                XINGZUO: ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"],
                FESTIVAL: {
                    "1-1": "元旦节",
                    "2-14": "情人节",
                    "3-8": "妇女节",
                    "3-12": "植树节",
                    "3-15": "消费者权益日",
                    "4-1": "愚人节",
                    "5-1": "劳动节",
                    "5-4": "青年节",
                    "6-1": "儿童节",
                    "7-1": "建党节",
                    "8-1": "建军节",
                    "9-10": "教师节",
                    "10-1": "国庆节",
                    "10-31": "万圣节前夜",
                    "11-1": "万圣节",
                    "12-24": "平安夜",
                    "12-25": "圣诞节"
                },
                OTHER_FESTIVAL: {
                    "1-8": ["周恩来逝世纪念日"],
                    "1-10": ["中国人民警察节", "中国公安110宣传日"],
                    "1-21": ["列宁逝世纪念日"],
                    "1-26": ["国际海关日"],
                    "2-2": ["世界湿地日"],
                    "2-4": ["世界抗癌日"],
                    "2-7": ["京汉铁路罢工纪念"],
                    "2-10": ["国际气象节"],
                    "2-19": ["邓小平逝世纪念日"],
                    "2-21": ["国际母语日"],
                    "2-24": ["第三世界青年日"],
                    "3-1": ["国际海豹日"],
                    "3-3": ["全国爱耳日"],
                    "3-5": ["周恩来诞辰纪念日", "中国青年志愿者服务日"],
                    "3-6": ["世界青光眼日"],
                    "3-12": ["孙中山逝世纪念日"],
                    "3-14": ["马克思逝世纪念日"],
                    "3-17": ["国际航海日"],
                    "3-18": ["全国科技人才活动日"],
                    "3-21": ["世界森林日", "世界睡眠日"],
                    "3-22": ["世界水日"],
                    "3-23": ["世界气象日"],
                    "3-24": ["世界防治结核病日"],
                    "4-2": ["国际儿童图书日"],
                    "4-7": ["世界卫生日"],
                    "4-22": ["列宁诞辰纪念日"],
                    "4-23": ["世界图书和版权日"],
                    "4-26": ["世界知识产权日"],
                    "5-3": ["世界新闻自由日"],
                    "5-5": ["马克思诞辰纪念日"],
                    "5-8": ["世界红十字日"],
                    "5-11": ["世界肥胖日"],
                    "5-25": ["525心理健康节"],
                    "5-27": ["上海解放日"],
                    "5-31": ["世界无烟日"],
                    "6-5": ["世界环境日"],
                    "6-6": ["全国爱眼日"],
                    "6-8": ["世界海洋日"],
                    "6-11": ["中国人口日"],
                    "6-14": ["世界献血日"],
                    "7-1": ["香港回归纪念日"],
                    "7-7": ["中国人民抗日战争纪念日"],
                    "7-11": ["世界人口日"],
                    "8-5": ["恩格斯逝世纪念日"],
                    "8-6": ["国际电影节"],
                    "8-12": ["国际青年日"],
                    "8-22": ["邓小平诞辰纪念日"],
                    "9-3": ["中国抗日战争胜利纪念日"],
                    "9-8": ["世界扫盲日"],
                    "9-9": ["毛泽东逝世纪念日"],
                    "9-14": ["世界清洁地球日"],
                    "9-18": ["九一八事变纪念日"],
                    "9-20": ["全国爱牙日"],
                    "9-21": ["国际和平日"],
                    "9-27": ["世界旅游日"],
                    "10-4": ["世界动物日"],
                    "10-10": ["辛亥革命纪念日"],
                    "10-13": ["中国少年先锋队诞辰日"],
                    "10-25": ["抗美援朝纪念日"],
                    "11-12": ["孙中山诞辰纪念日"],
                    "11-17": ["国际大学生节"],
                    "11-28": ["恩格斯诞辰纪念日"],
                    "12-1": ["世界艾滋病日"],
                    "12-12": ["西安事变纪念日"],
                    "12-13": ["国家公祭日"],
                    "12-26": ["毛泽东诞辰纪念日"]
                },
                WEEK_FESTIVAL: {
                    "3-0-1": "全国中小学生安全教育日",
                    "5-2-0": "母亲节",
                    "6-3-0": "父亲节",
                    "11-4-4": "感恩节"
                },
                isLeapYear: function(t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                },
                getDaysOfMonth: function(t, n) {
                    var e = n - 1,
                        i = this.DAYS_OF_MONTH[e];
                    return 1 === e && this.isLeapYear(t) && i++, i
                },
                getDaysOfYear: function(t) {
                    return this.isLeapYear(t) ? 366 : 365
                },
                getDaysInYear: function(t, n, e) {
                    for (var i = 0, r = 1; r < n; r++) i += this.getDaysOfMonth(t, r);
                    return i += e, 1582 === t && 10 === n && e >= 15 && (i -= 10), i
                },
                getWeeksOfMonth: function(t, n, e) {
                    var i = this.getDaysOfMonth(t, n),
                        r = P.fromYmd(t, n, 1).getDay();
                    return Math.ceil((i + r - e) / 7)
                }
            },
            z = {
                BASE_MONTH_ZHI_INDEX: 2,
                XUN: ["甲子", "甲戌", "甲申", "甲午", "甲辰", "甲寅"],
                XUN_KONG: ["戌亥", "申酉", "午未", "辰巳", "寅卯", "子丑"],
                LIU_YAO: ["先胜", "友引", "先负", "佛灭", "大安", "赤口"],
                HOU: ["初候", "二候", "三候"],
                WU_HOU: ["蚯蚓结", "麋角解", "水泉动", "雁北乡", "鹊始巢", "雉始雊", "鸡始乳", "征鸟厉疾", "水泽腹坚", "东风解冻", "蛰虫始振", "鱼陟负冰", "獭祭鱼", "候雁北", "草木萌动", "桃始华", "仓庚鸣", "鹰化为鸠", "玄鸟至", "雷乃发声", "始电", "桐始华", "田鼠化为鴽", "虹始见", "萍始生", "鸣鸠拂奇羽", "戴胜降于桑", "蝼蝈鸣", "蚯蚓出", "王瓜生", "苦菜秀", "靡草死", "麦秋至", "螳螂生", "鵙始鸣", "反舌无声", "鹿角解", "蜩始鸣", "半夏生", "温风至", "蟋蟀居壁", "鹰始挚", "腐草为萤", "土润溽暑", "大雨行时", "凉风至", "白露降", "寒蝉鸣", "鹰乃祭鸟", "天地始肃", "禾乃登", "鸿雁来", "玄鸟归", "群鸟养羞", "雷始收声", "蛰虫坯户", "水始涸", "鸿雁来宾", "雀入大水为蛤", "菊有黄花", "豺乃祭兽", "草木黄落", "蛰虫咸俯", "水始冰", "地始冻", "雉入大水为蜃", "虹藏不见", "天气上升地气下降", "闭塞而成冬", "鹖鴠不鸣", "虎始交", "荔挺出"],
                GAN: ["", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
                POSITION_XI: ["", "艮", "乾", "坤", "离", "巽", "艮", "乾", "坤", "离", "巽"],
                POSITION_YANG_GUI: ["", "坤", "坤", "兑", "乾", "艮", "坎", "离", "艮", "震", "巽"],
                POSITION_YIN_GUI: ["", "艮", "坎", "乾", "兑", "坤", "坤", "艮", "离", "巽", "震"],
                POSITION_FU: ["", "巽", "巽", "震", "震", "坎", "离", "坤", "坤", "乾", "兑"],
                POSITION_FU_2: ["", "坎", "坤", "乾", "巽", "艮", "坎", "坤", "乾", "巽", "艮"],
                POSITION_CAI: ["", "艮", "艮", "坤", "坤", "坎", "坎", "震", "震", "离", "离"],
                POSITION_TAI_SUI_YEAR: ["坎", "艮", "艮", "震", "巽", "巽", "离", "坤", "坤", "兑", "坎", "坎"],
                POSITION_GAN: ["震", "震", "离", "离", "中", "中", "兑", "兑", "坎", "坎"],
                POSITION_ZHI: ["坎", "中", "震", "震", "中", "离", "离", "中", "兑", "兑", "中", "坎"],
                POSITION_TAI_DAY: ["占门碓 外东南", "碓磨厕 外东南", "厨灶炉 外正南", "仓库门 外正南", "房床栖 外正南", "占门床 外正南", "占碓磨 外正南", "厕灶厨 外西南", "仓库炉 外西南", "房床门 外西南", "门碓栖 外西南", "碓磨床 外西南", "厨灶碓 外西南", "仓库厕 外正西", "房床炉 外正西", "占大门 外正西", "碓磨栖 外正西", "厨房床 外正西", "仓库碓 外西北", "房床厕 外西北", "占门炉 外西北", "门碓磨 外西北", "厨灶栖 外西北", "仓库床 外西北", "房床碓 外正北", "占门厕 外正北", "碓磨炉 外正北", "厨灶门 外正北", "仓库栖 外正北", "占房床 房内北", "占门碓 房内北", "碓磨厕 房内北", "厨灶炉 房内北", "门仓库 房内北", "床房栖 房内中", "占门床 房内中", "占碓磨 房内南", "厨磨厕 房内南", "仓库炉 房内南", "房床门 房内西", "门碓栖 房内东", "碓磨床 房内东", "厨灶碓 房内东", "仓库厕 房内东", "房床炉 房内中", "占大门 外东北", "碓磨栖 外东北", "厨灶床 外东北", "仓库碓 外东北", "房床厕 外东北", "占门炉 外东北", "门碓磨 外正东", "厨灶栖 外正东", "仓库床 外正东", "房床碓 外正东", "占门厕 外正东", "碓磨炉 外东南", "厨灶门 外东南", "仓库栖 外东南", "占房床 外东南"],
                POSITION_TAI_MONTH: ["占房床", "占户窗", "占门堂", "占厨灶", "占房床", "占床仓", "占碓磨", "占厕户", "占门房", "占房床", "占灶炉", "占房床"],
                ZHI: ["", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
                ZHI_XING: ["", "建", "除", "满", "平", "定", "执", "破", "危", "成", "收", "开", "闭"],
                JIA_ZI: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
                TIAN_SHEN: ["", "青龙", "明堂", "天刑", "朱雀", "金匮", "天德", "白虎", "玉堂", "天牢", "玄武", "司命", "勾陈"],
                ZHI_TIAN_SHEN_OFFSET: {
                    "子": 4,
                    "丑": 2,
                    "寅": 0,
                    "卯": 10,
                    "辰": 8,
                    "巳": 6,
                    "午": 4,
                    "未": 2,
                    "申": 0,
                    "酉": 10,
                    "戌": 8,
                    "亥": 6
                },
                TIAN_SHEN_TYPE: {
                    "青龙": "黄道",
                    "明堂": "黄道",
                    "金匮": "黄道",
                    "天德": "黄道",
                    "玉堂": "黄道",
                    "司命": "黄道",
                    "天刑": "黑道",
                    "朱雀": "黑道",
                    "白虎": "黑道",
                    "天牢": "黑道",
                    "玄武": "黑道",
                    "勾陈": "黑道"
                },
                TIAN_SHEN_TYPE_LUCK: {
                    "黄道": "吉",
                    "黑道": "凶"
                },
                PENGZU_GAN: ["", "甲不开仓财物耗散", "乙不栽植千株不长", "丙不修灶必见灾殃", "丁不剃头头必生疮", "戊不受田田主不祥", "己不破券二比并亡", "庚不经络织机虚张", "辛不合酱主人不尝", "壬不泱水更难提防", "癸不词讼理弱敌强"],
                PENGZU_ZHI: ["", "子不问卜自惹祸殃", "丑不冠带主不还乡", "寅不祭祀神鬼不尝", "卯不穿井水泉不香", "辰不哭泣必主重丧", "巳不远行财物伏藏", "午不苫盖屋主更张", "未不服药毒气入肠", "申不安床鬼祟入房", "酉不会客醉坐颠狂", "戌不吃犬作怪上床", "亥不嫁娶不利新郎"],
                NUMBER: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                MONTH: ["", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
                SEASON: ["", "孟春", "仲春", "季春", "孟夏", "仲夏", "季夏", "孟秋", "仲秋", "季秋", "孟冬", "仲冬", "季冬"],
                SHENGXIAO: ["", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
                DAY: ["", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"],
                YUE_XIANG: ["", "朔", "既朔", "蛾眉新", "蛾眉新", "蛾眉", "夕月", "上弦", "上弦", "九夜", "宵", "宵", "宵", "渐盈凸", "小望", "望", "既望", "立待", "居待", "寝待", "更待", "渐亏凸", "下弦", "下弦", "有明", "有明", "蛾眉残", "蛾眉残", "残", "晓", "晦"],
                XIU: {
                    "申1": "毕",
                    "申2": "翼",
                    "申3": "箕",
                    "申4": "奎",
                    "申5": "鬼",
                    "申6": "氐",
                    "申0": "虚",
                    "子1": "毕",
                    "子2": "翼",
                    "子3": "箕",
                    "子4": "奎",
                    "子5": "鬼",
                    "子6": "氐",
                    "子0": "虚",
                    "辰1": "毕",
                    "辰2": "翼",
                    "辰3": "箕",
                    "辰4": "奎",
                    "辰5": "鬼",
                    "辰6": "氐",
                    "辰0": "虚",
                    "巳1": "危",
                    "巳2": "觜",
                    "巳3": "轸",
                    "巳4": "斗",
                    "巳5": "娄",
                    "巳6": "柳",
                    "巳0": "房",
                    "酉1": "危",
                    "酉2": "觜",
                    "酉3": "轸",
                    "酉4": "斗",
                    "酉5": "娄",
                    "酉6": "柳",
                    "酉0": "房",
                    "丑1": "危",
                    "丑2": "觜",
                    "丑3": "轸",
                    "丑4": "斗",
                    "丑5": "娄",
                    "丑6": "柳",
                    "丑0": "房",
                    "寅1": "心",
                    "寅2": "室",
                    "寅3": "参",
                    "寅4": "角",
                    "寅5": "牛",
                    "寅6": "胃",
                    "寅0": "星",
                    "午1": "心",
                    "午2": "室",
                    "午3": "参",
                    "午4": "角",
                    "午5": "牛",
                    "午6": "胃",
                    "午0": "星",
                    "戌1": "心",
                    "戌2": "室",
                    "戌3": "参",
                    "戌4": "角",
                    "戌5": "牛",
                    "戌6": "胃",
                    "戌0": "星",
                    "亥1": "张",
                    "亥2": "尾",
                    "亥3": "壁",
                    "亥4": "井",
                    "亥5": "亢",
                    "亥6": "女",
                    "亥0": "昴",
                    "卯1": "张",
                    "卯2": "尾",
                    "卯3": "壁",
                    "卯4": "井",
                    "卯5": "亢",
                    "卯6": "女",
                    "卯0": "昴",
                    "未1": "张",
                    "未2": "尾",
                    "未3": "壁",
                    "未4": "井",
                    "未5": "亢",
                    "未6": "女",
                    "未0": "昴"
                },
                XIU_LUCK: {
                    "角": "吉",
                    "亢": "凶",
                    "氐": "凶",
                    "房": "吉",
                    "心": "凶",
                    "尾": "吉",
                    "箕": "吉",
                    "斗": "吉",
                    "牛": "凶",
                    "女": "凶",
                    "虚": "凶",
                    "危": "凶",
                    "室": "吉",
                    "壁": "吉",
                    "奎": "凶",
                    "娄": "吉",
                    "胃": "吉",
                    "昴": "凶",
                    "毕": "吉",
                    "觜": "凶",
                    "参": "吉",
                    "井": "吉",
                    "鬼": "凶",
                    "柳": "凶",
                    "星": "凶",
                    "张": "吉",
                    "翼": "凶",
                    "轸": "吉"
                },
                XIU_SONG: {
                    "角": "角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，堂前立见主人凶。",
                    "亢": "亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。",
                    "氐": "氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。",
                    "房": "房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。",
                    "心": "心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。",
                    "尾": "尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。",
                    "箕": "箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰禄乐安康。",
                    "斗": "斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。",
                    "牛": "牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。",
                    "女": "女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。",
                    "虚": "虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。",
                    "危": "危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。",
                    "室": "室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。",
                    "壁": "壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉著祖鞭。",
                    "奎": "奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。",
                    "娄": "娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。",
                    "胃": "胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。",
                    "昴": "昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。",
                    "毕": "毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。",
                    "觜": "觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。",
                    "参": "参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。",
                    "井": "井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。",
                    "鬼": "鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。",
                    "柳": "柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰驼背曲似弓弯，更有棒刑宜谨慎，妇人随客走盘桓。",
                    "星": "星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。",
                    "张": "张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。",
                    "翼": "翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。",
                    "轸": "轸星临水造龙宫，代代为官受皇封，富贵荣华增寿禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。"
                },
                ZHENG: {
                    "角": "木",
                    "井": "木",
                    "奎": "木",
                    "斗": "木",
                    "亢": "金",
                    "鬼": "金",
                    "娄": "金",
                    "牛": "金",
                    "氐": "土",
                    "柳": "土",
                    "胃": "土",
                    "女": "土",
                    "房": "日",
                    "星": "日",
                    "昴": "日",
                    "虚": "日",
                    "心": "月",
                    "张": "月",
                    "毕": "月",
                    "危": "月",
                    "尾": "火",
                    "翼": "火",
                    "觜": "火",
                    "室": "火",
                    "箕": "水",
                    "轸": "水",
                    "参": "水",
                    "壁": "水"
                },
                ANIMAL: {
                    "角": "蛟",
                    "斗": "獬",
                    "奎": "狼",
                    "井": "犴",
                    "亢": "龙",
                    "牛": "牛",
                    "娄": "狗",
                    "鬼": "羊",
                    "女": "蝠",
                    "氐": "貉",
                    "胃": "彘",
                    "柳": "獐",
                    "房": "兔",
                    "虚": "鼠",
                    "昴": "鸡",
                    "星": "马",
                    "心": "狐",
                    "危": "燕",
                    "毕": "乌",
                    "张": "鹿",
                    "尾": "虎",
                    "室": "猪",
                    "觜": "猴",
                    "翼": "蛇",
                    "箕": "豹",
                    "壁": "獝",
                    "参": "猿",
                    "轸": "蚓"
                },
                GONG: {
                    "角": "东",
                    "井": "南",
                    "奎": "西",
                    "斗": "北",
                    "亢": "东",
                    "鬼": "南",
                    "娄": "西",
                    "牛": "北",
                    "氐": "东",
                    "柳": "南",
                    "胃": "西",
                    "女": "北",
                    "房": "东",
                    "星": "南",
                    "昴": "西",
                    "虚": "北",
                    "心": "东",
                    "张": "南",
                    "毕": "西",
                    "危": "北",
                    "尾": "东",
                    "翼": "南",
                    "觜": "西",
                    "室": "北",
                    "箕": "东",
                    "轸": "南",
                    "参": "西",
                    "壁": "北"
                },
                SHOU: {
                    "东": "青龙",
                    "南": "朱雀",
                    "西": "白虎",
                    "北": "玄武"
                },
                FESTIVAL: {
                    "1-1": "春节",
                    "1-15": "元宵节",
                    "2-2": "龙头节",
                    "5-5": "端午节",
                    "7-7": "七夕节",
                    "8-15": "中秋节",
                    "9-9": "重阳节",
                    "12-8": "腊八节"
                },
                OTHER_FESTIVAL: {
                    "1-4": ["接神日"],
                    "1-5": ["隔开日"],
                    "1-7": ["人日"],
                    "1-8": ["谷日", "顺星节"],
                    "1-9": ["天日"],
                    "1-10": ["地日"],
                    "1-20": ["天穿节"],
                    "1-25": ["填仓节"],
                    "1-30": ["正月晦"],
                    "2-1": ["中和节"],
                    "2-2": ["社日节"],
                    "3-3": ["上巳节"],
                    "5-20": ["分龙节"],
                    "5-25": ["会龙节"],
                    "6-6": ["天贶节"],
                    "6-24": ["观莲节"],
                    "6-25": ["五谷母节"],
                    "7-14": ["中元节"],
                    "7-22": ["财神节"],
                    "7-29": ["地藏节"],
                    "8-1": ["天灸日"],
                    "10-1": ["寒衣节"],
                    "10-10": ["十成节"],
                    "10-15": ["下元节"],
                    "12-7": ["驱傩日"],
                    "12-16": ["尾牙"],
                    "12-24": ["祭灶日"]
                },
                CHONG: ["午", "未", "申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳"],
                CHONG_GAN: ["戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"],
                CHONG_GAN_TIE: ["己", "戊", "辛", "庚", "癸", "壬", "乙", "甲", "丁", "丙"],
                CHONG_GAN_4: ["庚", "辛", "壬", "癸", "", "", "甲", "乙", "丙", "丁"],
                HE_GAN_5: ["己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊"],
                HE_ZHI_6: ["丑", "子", "亥", "戌", "酉", "申", "未", "午", "巳", "辰", "卯", "寅"],
                SHA: {
                    "子": "南",
                    "丑": "东",
                    "寅": "北",
                    "卯": "西",
                    "辰": "南",
                    "巳": "东",
                    "午": "北",
                    "未": "西",
                    "申": "南",
                    "酉": "东",
                    "戌": "北",
                    "亥": "西"
                },
                POSITION_DESC: {
                    "坎": "正北",
                    "艮": "东北",
                    "震": "正东",
                    "巽": "东南",
                    "离": "正南",
                    "坤": "西南",
                    "兑": "正西",
                    "乾": "西北",
                    "中": "中宫"
                },
                NAYIN: {
                    "甲子": "海中金",
                    "甲午": "沙中金",
                    "丙寅": "炉中火",
                    "丙申": "山下火",
                    "戊辰": "大林木",
                    "戊戌": "平地木",
                    "庚午": "路旁土",
                    "庚子": "壁上土",
                    "壬申": "剑锋金",
                    "壬寅": "金箔金",
                    "甲戌": "山头火",
                    "甲辰": "覆灯火",
                    "丙子": "涧下水",
                    "丙午": "天河水",
                    "戊寅": "城头土",
                    "戊申": "大驿土",
                    "庚辰": "白蜡金",
                    "庚戌": "钗钏金",
                    "壬午": "杨柳木",
                    "壬子": "桑柘木",
                    "甲申": "泉中水",
                    "甲寅": "大溪水",
                    "丙戌": "屋上土",
                    "丙辰": "沙中土",
                    "戊子": "霹雳火",
                    "戊午": "天上火",
                    "庚寅": "松柏木",
                    "庚申": "石榴木",
                    "壬辰": "长流水",
                    "壬戌": "大海水",
                    "乙丑": "海中金",
                    "乙未": "沙中金",
                    "丁卯": "炉中火",
                    "丁酉": "山下火",
                    "己巳": "大林木",
                    "己亥": "平地木",
                    "辛未": "路旁土",
                    "辛丑": "壁上土",
                    "癸酉": "剑锋金",
                    "癸卯": "金箔金",
                    "乙亥": "山头火",
                    "乙巳": "覆灯火",
                    "丁丑": "涧下水",
                    "丁未": "天河水",
                    "己卯": "城头土",
                    "己酉": "大驿土",
                    "辛巳": "白蜡金",
                    "辛亥": "钗钏金",
                    "癸未": "杨柳木",
                    "癸丑": "桑柘木",
                    "乙酉": "泉中水",
                    "乙卯": "大溪水",
                    "丁亥": "屋上土",
                    "丁巳": "沙中土",
                    "己丑": "霹雳火",
                    "己未": "天上火",
                    "辛卯": "松柏木",
                    "辛酉": "石榴木",
                    "癸巳": "长流水",
                    "癸亥": "大海水"
                },
                WU_XING_GAN: {
                    "甲": "木",
                    "乙": "木",
                    "丙": "火",
                    "丁": "火",
                    "戊": "土",
                    "己": "土",
                    "庚": "金",
                    "辛": "金",
                    "壬": "水",
                    "癸": "水"
                },
                WU_XING_ZHI: {
                    "寅": "木",
                    "卯": "木",
                    "巳": "火",
                    "午": "火",
                    "辰": "土",
                    "丑": "土",
                    "戌": "土",
                    "未": "土",
                    "申": "金",
                    "酉": "金",
                    "亥": "水",
                    "子": "水"
                },
                SHI_SHEN_GAN: {
                    "甲甲": "比肩",
                    "甲乙": "劫财",
                    "甲丙": "食神",
                    "甲丁": "伤官",
                    "甲戊": "偏财",
                    "甲己": "正财",
                    "甲庚": "七杀",
                    "甲辛": "正官",
                    "甲壬": "偏印",
                    "甲癸": "正印",
                    "乙乙": "比肩",
                    "乙甲": "劫财",
                    "乙丁": "食神",
                    "乙丙": "伤官",
                    "乙己": "偏财",
                    "乙戊": "正财",
                    "乙辛": "七杀",
                    "乙庚": "正官",
                    "乙癸": "偏印",
                    "乙壬": "正印",
                    "丙丙": "比肩",
                    "丙丁": "劫财",
                    "丙戊": "食神",
                    "丙己": "伤官",
                    "丙庚": "偏财",
                    "丙辛": "正财",
                    "丙壬": "七杀",
                    "丙癸": "正官",
                    "丙甲": "偏印",
                    "丙乙": "正印",
                    "丁丁": "比肩",
                    "丁丙": "劫财",
                    "丁己": "食神",
                    "丁戊": "伤官",
                    "丁辛": "偏财",
                    "丁庚": "正财",
                    "丁癸": "七杀",
                    "丁壬": "正官",
                    "丁乙": "偏印",
                    "丁甲": "正印",
                    "戊戊": "比肩",
                    "戊己": "劫财",
                    "戊庚": "食神",
                    "戊辛": "伤官",
                    "戊壬": "偏财",
                    "戊癸": "正财",
                    "戊甲": "七杀",
                    "戊乙": "正官",
                    "戊丙": "偏印",
                    "戊丁": "正印",
                    "己己": "比肩",
                    "己戊": "劫财",
                    "己辛": "食神",
                    "己庚": "伤官",
                    "己癸": "偏财",
                    "己壬": "正财",
                    "己乙": "七杀",
                    "己甲": "正官",
                    "己丁": "偏印",
                    "己丙": "正印",
                    "庚庚": "比肩",
                    "庚辛": "劫财",
                    "庚壬": "食神",
                    "庚癸": "伤官",
                    "庚甲": "偏财",
                    "庚乙": "正财",
                    "庚丙": "七杀",
                    "庚丁": "正官",
                    "庚戊": "偏印",
                    "庚己": "正印",
                    "辛辛": "比肩",
                    "辛庚": "劫财",
                    "辛癸": "食神",
                    "辛壬": "伤官",
                    "辛乙": "偏财",
                    "辛甲": "正财",
                    "辛丁": "七杀",
                    "辛丙": "正官",
                    "辛己": "偏印",
                    "辛戊": "正印",
                    "壬壬": "比肩",
                    "壬癸": "劫财",
                    "壬甲": "食神",
                    "壬乙": "伤官",
                    "壬丙": "偏财",
                    "壬丁": "正财",
                    "壬戊": "七杀",
                    "壬己": "正官",
                    "壬庚": "偏印",
                    "壬辛": "正印",
                    "癸癸": "比肩",
                    "癸壬": "劫财",
                    "癸乙": "食神",
                    "癸甲": "伤官",
                    "癸丁": "偏财",
                    "癸丙": "正财",
                    "癸己": "七杀",
                    "癸戊": "正官",
                    "癸辛": "偏印",
                    "癸庚": "正印"
                },
                SHI_SHEN_ZHI: {
                    "甲子癸": "正印",
                    "甲丑癸": "正印",
                    "甲丑己": "正财",
                    "甲丑辛": "正官",
                    "甲寅丙": "食神",
                    "甲寅甲": "比肩",
                    "甲寅戊": "偏财",
                    "甲卯乙": "劫财",
                    "甲辰乙": "劫财",
                    "甲辰戊": "偏财",
                    "甲辰癸": "正印",
                    "甲巳戊": "偏财",
                    "甲巳丙": "食神",
                    "甲巳庚": "七杀",
                    "甲午丁": "伤官",
                    "甲午己": "正财",
                    "甲未乙": "劫财",
                    "甲未己": "正财",
                    "甲未丁": "伤官",
                    "甲申戊": "偏财",
                    "甲申庚": "七杀",
                    "甲申壬": "偏印",
                    "甲酉辛": "正官",
                    "甲戌辛": "正官",
                    "甲戌戊": "偏财",
                    "甲戌丁": "伤官",
                    "甲亥壬": "偏印",
                    "甲亥甲": "比肩",
                    "乙子癸": "偏印",
                    "乙丑癸": "偏印",
                    "乙丑己": "偏财",
                    "乙丑辛": "七杀",
                    "乙寅丙": "伤官",
                    "乙寅甲": "劫财",
                    "乙寅戊": "正财",
                    "乙卯乙": "比肩",
                    "乙辰乙": "比肩",
                    "乙辰戊": "正财",
                    "乙辰癸": "偏印",
                    "乙巳戊": "正财",
                    "乙巳丙": "伤官",
                    "乙巳庚": "正官",
                    "乙午丁": "食神",
                    "乙午己": "偏财",
                    "乙未乙": "比肩",
                    "乙未己": "偏财",
                    "乙未丁": "食神",
                    "乙申戊": "正财",
                    "乙申庚": "正官",
                    "乙申壬": "正印",
                    "乙酉辛": "七杀",
                    "乙戌辛": "七杀",
                    "乙戌戊": "正财",
                    "乙戌丁": "食神",
                    "乙亥壬": "正印",
                    "乙亥甲": "劫财",
                    "丙子癸": "正官",
                    "丙丑癸": "正官",
                    "丙丑己": "伤官",
                    "丙丑辛": "正财",
                    "丙寅丙": "比肩",
                    "丙寅甲": "偏印",
                    "丙寅戊": "食神",
                    "丙卯乙": "正印",
                    "丙辰乙": "正印",
                    "丙辰戊": "食神",
                    "丙辰癸": "正官",
                    "丙巳戊": "食神",
                    "丙巳丙": "比肩",
                    "丙巳庚": "偏财",
                    "丙午丁": "劫财",
                    "丙午己": "伤官",
                    "丙未乙": "正印",
                    "丙未己": "伤官",
                    "丙未丁": "劫财",
                    "丙申戊": "食神",
                    "丙申庚": "偏财",
                    "丙申壬": "七杀",
                    "丙酉辛": "正财",
                    "丙戌辛": "正财",
                    "丙戌戊": "食神",
                    "丙戌丁": "劫财",
                    "丙亥壬": "七杀",
                    "丙亥甲": "偏印",
                    "丁子癸": "七杀",
                    "丁丑癸": "七杀",
                    "丁丑己": "食神",
                    "丁丑辛": "偏财",
                    "丁寅丙": "劫财",
                    "丁寅甲": "正印",
                    "丁寅戊": "伤官",
                    "丁卯乙": "偏印",
                    "丁辰乙": "偏印",
                    "丁辰戊": "伤官",
                    "丁辰癸": "七杀",
                    "丁巳戊": "伤官",
                    "丁巳丙": "劫财",
                    "丁巳庚": "正财",
                    "丁午丁": "比肩",
                    "丁午己": "食神",
                    "丁未乙": "偏印",
                    "丁未己": "食神",
                    "丁未丁": "比肩",
                    "丁申戊": "伤官",
                    "丁申庚": "正财",
                    "丁申壬": "正官",
                    "丁酉辛": "偏财",
                    "丁戌辛": "偏财",
                    "丁戌戊": "伤官",
                    "丁戌丁": "比肩",
                    "丁亥壬": "正官",
                    "丁亥甲": "正印",
                    "戊子癸": "正财",
                    "戊丑癸": "正财",
                    "戊丑己": "劫财",
                    "戊丑辛": "伤官",
                    "戊寅丙": "偏印",
                    "戊寅甲": "七杀",
                    "戊寅戊": "比肩",
                    "戊卯乙": "正官",
                    "戊辰乙": "正官",
                    "戊辰戊": "比肩",
                    "戊辰癸": "正财",
                    "戊巳戊": "比肩",
                    "戊巳丙": "偏印",
                    "戊巳庚": "食神",
                    "戊午丁": "正印",
                    "戊午己": "劫财",
                    "戊未乙": "正官",
                    "戊未己": "劫财",
                    "戊未丁": "正印",
                    "戊申戊": "比肩",
                    "戊申庚": "食神",
                    "戊申壬": "偏财",
                    "戊酉辛": "伤官",
                    "戊戌辛": "伤官",
                    "戊戌戊": "比肩",
                    "戊戌丁": "正印",
                    "戊亥壬": "偏财",
                    "戊亥甲": "七杀",
                    "己子癸": "偏财",
                    "己丑癸": "偏财",
                    "己丑己": "比肩",
                    "己丑辛": "食神",
                    "己寅丙": "正印",
                    "己寅甲": "正官",
                    "己寅戊": "劫财",
                    "己卯乙": "七杀",
                    "己辰乙": "七杀",
                    "己辰戊": "劫财",
                    "己辰癸": "偏财",
                    "己巳戊": "劫财",
                    "己巳丙": "正印",
                    "己巳庚": "伤官",
                    "己午丁": "偏印",
                    "己午己": "比肩",
                    "己未乙": "七杀",
                    "己未己": "比肩",
                    "己未丁": "偏印",
                    "己申戊": "劫财",
                    "己申庚": "伤官",
                    "己申壬": "正财",
                    "己酉辛": "食神",
                    "己戌辛": "食神",
                    "己戌戊": "劫财",
                    "己戌丁": "偏印",
                    "己亥壬": "正财",
                    "己亥甲": "正官",
                    "庚子癸": "伤官",
                    "庚丑癸": "伤官",
                    "庚丑己": "正印",
                    "庚丑辛": "劫财",
                    "庚寅丙": "七杀",
                    "庚寅甲": "偏财",
                    "庚寅戊": "偏印",
                    "庚卯乙": "正财",
                    "庚辰乙": "正财",
                    "庚辰戊": "偏印",
                    "庚辰癸": "伤官",
                    "庚巳戊": "偏印",
                    "庚巳丙": "七杀",
                    "庚巳庚": "比肩",
                    "庚午丁": "正官",
                    "庚午己": "正印",
                    "庚未乙": "正财",
                    "庚未己": "正印",
                    "庚未丁": "正官",
                    "庚申戊": "偏印",
                    "庚申庚": "比肩",
                    "庚申壬": "食神",
                    "庚酉辛": "劫财",
                    "庚戌辛": "劫财",
                    "庚戌戊": "偏印",
                    "庚戌丁": "正官",
                    "庚亥壬": "食神",
                    "庚亥甲": "偏财",
                    "辛子癸": "食神",
                    "辛丑癸": "食神",
                    "辛丑己": "偏印",
                    "辛丑辛": "比肩",
                    "辛寅丙": "正官",
                    "辛寅甲": "正财",
                    "辛寅戊": "正印",
                    "辛卯乙": "偏财",
                    "辛辰乙": "偏财",
                    "辛辰戊": "正印",
                    "辛辰癸": "食神",
                    "辛巳戊": "正印",
                    "辛巳丙": "正官",
                    "辛巳庚": "劫财",
                    "辛午丁": "七杀",
                    "辛午己": "偏印",
                    "辛未乙": "偏财",
                    "辛未己": "偏印",
                    "辛未丁": "七杀",
                    "辛申戊": "正印",
                    "辛申庚": "劫财",
                    "辛申壬": "伤官",
                    "辛酉辛": "比肩",
                    "辛戌辛": "比肩",
                    "辛戌戊": "正印",
                    "辛戌丁": "七杀",
                    "辛亥壬": "伤官",
                    "辛亥甲": "正财",
                    "壬子癸": "劫财",
                    "壬丑癸": "劫财",
                    "壬丑己": "正官",
                    "壬丑辛": "正印",
                    "壬寅丙": "偏财",
                    "壬寅甲": "食神",
                    "壬寅戊": "七杀",
                    "壬卯乙": "伤官",
                    "壬辰乙": "伤官",
                    "壬辰戊": "七杀",
                    "壬辰癸": "劫财",
                    "壬巳戊": "七杀",
                    "壬巳丙": "偏财",
                    "壬巳庚": "偏印",
                    "壬午丁": "正财",
                    "壬午己": "正官",
                    "壬未乙": "伤官",
                    "壬未己": "正官",
                    "壬未丁": "正财",
                    "壬申戊": "七杀",
                    "壬申庚": "偏印",
                    "壬申壬": "比肩",
                    "壬酉辛": "正印",
                    "壬戌辛": "正印",
                    "壬戌戊": "七杀",
                    "壬戌丁": "正财",
                    "壬亥壬": "比肩",
                    "壬亥甲": "食神",
                    "癸子癸": "比肩",
                    "癸丑癸": "比肩",
                    "癸丑己": "七杀",
                    "癸丑辛": "偏印",
                    "癸寅丙": "正财",
                    "癸寅甲": "伤官",
                    "癸寅戊": "正官",
                    "癸卯乙": "食神",
                    "癸辰乙": "食神",
                    "癸辰戊": "正官",
                    "癸辰癸": "比肩",
                    "癸巳戊": "正官",
                    "癸巳丙": "正财",
                    "癸巳庚": "正印",
                    "癸午丁": "偏财",
                    "癸午己": "七杀",
                    "癸未乙": "食神",
                    "癸未己": "七杀",
                    "癸未丁": "偏财",
                    "癸申戊": "正官",
                    "癸申庚": "正印",
                    "癸申壬": "劫财",
                    "癸酉辛": "偏印",
                    "癸戌辛": "偏印",
                    "癸戌戊": "正官",
                    "癸戌丁": "偏财",
                    "癸亥壬": "劫财",
                    "癸亥甲": "伤官"
                },
                ZHI_HIDE_GAN: {
                    "子": ["癸"],
                    "丑": ["己", "癸", "辛"],
                    "寅": ["甲", "丙", "戊"],
                    "卯": ["乙"],
                    "辰": ["戊", "乙", "癸"],
                    "巳": ["丙", "庚", "戊"],
                    "午": ["丁", "己"],
                    "未": ["己", "丁", "乙"],
                    "申": ["庚", "壬", "戊"],
                    "酉": ["辛"],
                    "戌": ["戊", "辛", "丁"],
                    "亥": ["壬", "甲"]
                },
                YI_JI: ["祭祀", "祈福", "求嗣", "开光", "塑绘", "齐醮", "斋醮", "沐浴", "酬神", "造庙", "祀灶", "焚香", "谢土", "出火", "雕刻", "嫁娶", "订婚", "纳采", "问名", "纳婿", "归宁", "安床", "合帐", "冠笄", "订盟", "进人口", "裁衣", "挽面", "开容", "修坟", "启钻", "破土", "安葬", "立碑", "成服", "除服", "开生坟", "合寿木", "入殓", "移柩", "普渡", "入宅", "安香", "安门", "修造", "起基", "动土", "上梁", "竖柱", "开井开池", "作陂放水", "拆卸", "破屋", "坏垣", "补垣", "伐木做梁", "作灶", "解除", "开柱眼", "穿屏扇架", "盖屋合脊", "开厕", "造仓", "塞穴", "平治道涂", "造桥", "作厕", "筑堤", "开池", "伐木", "开渠", "掘井", "扫舍", "放水", "造屋", "合脊", "造畜稠", "修门", "定磉", "作梁", "修饰垣墙", "架马", "开市", "挂匾", "纳财", "求财", "开仓", "买车", "置产", "雇庸", "出货财", "安机械", "造车器", "经络", "酝酿", "作染", "鼓铸", "造船", "割蜜", "栽种", "取渔", "结网", "牧养", "安碓磑", "习艺", "入学", "理发", "探病", "见贵", "乘船", "渡水", "针灸", "出行", "移徙", "分居", "剃头", "整手足甲", "纳畜", "捕捉", "畋猎", "教牛马", "会亲友", "赴任", "求医", "治病", "词讼", "起基动土", "破屋坏垣", "盖屋", "造仓库", "立券交易", "交易", "立券", "安机", "会友", "求医疗病", "诸事不宜", "馀事勿取", "行丧", "断蚁", "归岫", "无"],
                LU: {
                    "甲": "寅",
                    "乙": "卯",
                    "丙": "巳",
                    "丁": "午",
                    "戊": "巳",
                    "己": "午",
                    "庚": "申",
                    "辛": "酉",
                    "壬": "亥",
                    "癸": "子",
                    "寅": "甲",
                    "卯": "乙",
                    "巳": "丙,戊",
                    "午": "丁,己",
                    "申": "庚",
                    "酉": "辛",
                    "亥": "壬",
                    "子": "癸"
                },
                DAY_YI_JI: "30=192531010D:838454151A4C200C1E23221D212726,030F522E1F00=2430000C18:8319000776262322200C1E1D,06292C2E1F04=32020E1A26:791715795B0001025D,0F522E38201D=162E3A0A22:790F181113332C2E2D302F157954,7001203810=0E1A263202:79026A176576036A,522E201F05=0D19250131:7911192C2E302F00030401060F1571292A75,707C20522F=0C18243000:4F2C2E2B383F443D433663,0F01478A20151D=0E1A320226:3840,0001202B892F=14202C3808:3807504089,8829=0E1A263202:383940,6370018A75202B454F6605=32020E1A26:38394089,0001202B22=16223A0A2E:384C,8A2020=2B3707131F:2C2E5B000739337C38802D44484C2425201F1E272621,5229701535=121E2A3606:2C2E2D2B156343364C,0F4729710D708A20036A1904=0D19250131:5040262789,0F7129033B=202C380814:5040000738,0F7D7C584F012063452B35=1A2632020E:50400089,8813=1A2632020E:69687011180F791966762627201E,0352292E8034=182430000C:291503000D332E53261F2075,0F5238584F450B=000C182430:297170192C2E2D2F2B3E363F4C,0F52156320010347200B=131F2B3707:297115030102195283840D332C2E,0F1F5863201D8A02=222E3A0A16:261F1E20232289,52290058363F32=16222E3A0A:261F201E232289,8D39=0D19310125:262322271E201D21,52450F4F09=0D19253101:262322271E202189,1F4526=16222E3A0A:262322271F1E20,712906=0F1B273303:17262322274050,80387C6B2C=0915212D39:1707702C2E71291F20,0F52000106111D15=16222E3A0A:170007386A7448363F261F1E,030F79636F2026=030F1B2733:1784832C2E5B26201F,0F010D2913=182430000C:175447440D15838477656A49,2B2E1F8A202228=101C283404:70504C7889,8803=0D19250131:700F181126151E20001A7919,8D2F=0915212D39:705283845B0D2F71,0F202E4106=3606121E2A:70786289,06802E1F23=1824000C30:70076A363F,292017=202C380814:700718111A302F717566,0F2B2E2026=3B0B17232F:70545283842E71291A7933192A5D5A5040,090C384F45208A1D6B38=212D390915:7039170F45513A2C2E7129242526271F201D,00010352153A=15212D3909:703911170E2C2E2D2F4B15712952633D,092B8A2027=010D192531:702D155483840F63262720,53292F017D4F38442B2E1F4717=16222E3A0A:705C4C39171A4F0E7971295B4C5248,0F2E1F1D37=1A2632020E:2E260F27201F,523815292F1A22=0E1A260232:64262322271F2021,0F2F293822=2F3B0B1723:161A0F1526271F4C,586103473818=2430000C18:161A7889,292E1F0F386131=17232F3B0B:04795B3F651A5D,0F5201062016=14202C3808:04170F79195D1A637566363F76,01522E8A2039=132B37071F:0470170F191A134C8384662426232227201E,8D08=0D19253101:040370181123220F1326271E2021,29153B=0D19310125:040307177938494C,0F26207017=0E2632021A:0403010218111A17332C2E2D2B15713E6575,45382064291D=142C380820:04033918110F0D2C2E7129332D2B72528384547566,8D1C=1830000C24:040318111A17332C15290D200C7A,4745063835=0F2733031B:040318111A16175B795452848315302F6563395D,387029202E=14202C3808:04031975363F6366,0F5401202C5283842E2F1E=0E1A320226:0403080618111A16332E2F152A09537919702C5445490D75072B,8063203820=182430000C:04067033392C7161262322271E1D210C,8D2F=101C283404:3F4889,881C=2733030F1B:3F74397677658988,0F3847201D=293505111D:3F8B657789,0F2029702E7D35=111D293505:3F8B6589,1F200A=020E1A2632:3F656477,0F2B71292005=111D290535:3F6589,8810=0F1B273303:3F88,2B38200F1C=293505111D:0F83843D363F776424,15462F2C52032971152A=0F1B273303:0F17795B54838458,52807C3811=121E2A3606:0F172C2E387129363F7566512C2E2D4E4461,01034752203A=172F3B0B23:0F171511793F76584C,0347200C1D20=2D39091521:0F175B3975660745514F2B4825201E211D,010352292E2E=0F1B273303:0F170070792C2E261F,040341232228=05111D2935:0F1700707129385C363F3D1F1E232226,80412B202F14=14202C3808:0F17000728705448757A,522E1F15562F05=30000C1824:0F17000102061979454F3A15477677,241F8A2021=2F3B0B1723:0F17000102060370392E52838453331F,452F2C266A79292B203810=0C18243000:0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D34=1A2632020E:0F171170792F5B1566770001032C2B802D,29387C207134=14202C3808:0F0D33000103452E528384297115752620,63386F7014=15212D3909:0F7045332C2E71201F1D21,4701155229530327=101C283404:0F70161715232238838426271F20,7D035219=121E2A3606:0F705B0004037C5D15653F1F26,522B473809=131F2B0737:0F705215261E20,012E1F25=182430000C:0F707B7C00012F75,52201B=2531010D19:0F706A151E201D528384544466,47010C2E292F2C3820=14202C3808:0F707500261E20,382E1F05=3606121E2A:0F161A17452F0D33712C2E2B5443633F,150170208A0327=0E1A263202:0F150370002E0D3979528384532971331F1E20,477D0D=06121E2A36:0F5B8370000102060403161A494447,386A418A201A=17232F3B0B:0F03700D332C2E2971152F52838463,01004547380C26=101C283404:0F03700D33195284835329711563,01260038206B0E=131F2B3707:0F03706A4F0D332C528384532E29711563,450075000F=131F2B3707:0F0370010239332E2C19528384532971156375262720,8D18=17232F3B0B:0F0370390D332C192E2971637547202322,581528=0E1A263202:0F0302791566046F,29710D722A38528384202E4530=0E1A263202:0F030102392E15634447001F1E,293845200D707538=1E2A360612:0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E20=33030F1B27:0F03000102700D29713963451F0C20,528338542F15806128=121E2A3606:0F030001027039452971150D332C2F6327,2052838403=2C38081420:0F030001022A0D3945297115528384630D7020,476A382E1F4426=010D192531:0F03390D332C1929711563261D2E2322,382000521118750C706B15=131F2B3707:0F033915666A52261E272048,382E2F6329712C0114=0D19253101:0F52838403700D332C29712E1F27201E2322,1545017505=131F2B3707:0F528400012E7129,092026=3707131F2B:0F528471295B795D2B155333565A446375661F201E272621,00016B0C4113=14202C3808:0F280001363F8B4326232220,2E1F47032F7D35=16222E3A0A:0F0211195465756679,2F384570202B6A10=15212D3909:0F0102700D332C2E2F0319528384531529716345261F2322,8D32=101C283404:0F0102037039330D5284832971152E1F0C,0026206B37=16222E3A0A:0F003854,20521D2106=020E1A2632:0F00175058,5D6B80382E16=1B2733030F:0F00701784831952712C2E1526271F,033806201F=2B3707131F:0F00701A17830E544C5C0E78,7129632E1F38208A452F16=15212D3909:0F00040370396A742E15444948,458A384F2021=16222E3A0A:0F005B261F20,2E2F1D=2531010D19:0F0003450D3329712C2E2F1575,528A63705A20587D7C12=17232F3B0B:0F00030D70332C2E3952838453542971156375,6B2019=1B2733030F:0F000301020D297115332E1F0C,165220262E=121E2A3606:0F00030102700D332E2C192971155383846375261F1E20,8D1F=33030F1B27:0F00030102700D19297115332C2B535448,2E45208A00=2632020E1A:0F00030102705283842E544779,2920454F754C3836=16222E3A0A:0F0052037029710D332C15,7545584F8A201D2121=121E2A3606:0F00074850,8A2036=0D25310119:0F00071A706A717677492923221E202726,80522E1F39=1E2A360612:0F006A385040740717,1F70631E=212D390915:0F006A1938271779,565A4575522F801F1E632B=121E2A3606:0F00010D0302703352838453297115632E,208A454F2B=0E1A263202:0F000170390D332E2971152F63751F1E20,52846A381F=14202C3808:0F000106387129,2E1F24=14202C3808:0F0001062E7129,522010=0814202C38:0F0001062871292E7C528384032C5C2A15767765,11185D8A206B08=131F2B0737:0F0001067C1F20,522900=202C380814:0F0001020D700339332C192A83842971152E1F0C20262322,065256386110=111D293505:0F000102700D332C2E297115383F631F20,0347562B=14202C3808:0F000102700D332C712E15261F201E,80036A61473831=0C18243000:0F000102700D335283845329711563,38048A7D45202A=14202C3808:0F000102702E15471F1E,294F2B452C2F268011=0D19253101:0F0001022E792D3E75663D19,472063703852292B39=222E3A0A16:0F0001022E154826271F1E203874362322,036312=0D19253101:0F000102032971152C2E19,4720637038522B15=111D293505:0F000102030D70332E3919528384532971152B2F201F0C,8D1B=232F3B0B17:0F000102030D7033528384534529711520,63475814=131F2B3707:0F000102030D332C2E195283845329716375261E2322,8D19=15212D3909:0F00010203700D332C2E1929711552838453637526202322,8D09=111D293505:0F00010203700D332E2F192971152B52838453631F20,8D33=1A2632020E:0F00010203700D332E2F1929711552838453261F201E2322,8D03=2E3A0A1622:0F0001020370332C2E2F1575261F,2971476A458352380C=111D293505:0F0001020370332E2F0D19297115637566302B2C3979,8D08=000C182430:0F000102037039297175261F1D21,454F2E1563410F=17232F3B0B:0F0001020370390D3319297115632E2C752620212322,8D07=3606121E2A:0F0001020370390D332C1929712E157563548384534C,20248A38=16222E3A0A:0F0001020370390D1952838453542971631F0C,152036=14202C3808:0F00010203703915632719792322,80262045297158750F=111D293505:0F00010203528384157033,752971206B452F2B262E05=3404101C28:0F00010206030D7129302F79802D7C7C2B5C4744,11701D2052843833=111D293505:0F00010206181139702E1F686F6A792D2C2E304E15337566491F23221D21,52296B0D800D=15212D3909:0F000102070D70332C2E19528384297115637526201E2322,8D05=2C38081420:0F0001021A175D2C19152E302F7183846379,8A20704F7545410A=131F2B3707:0F001A651707,565A58202E1F476320=121E36062A:0F11707B7C5271291E20,2E1F39=111D293505:0F11700001522E71291F20,2B07=131F2B0737:0F11700001397129,2E2002=111D293505:0F11707129,2E1F2002=131F37072B:0F1152702E2F71291F20,000103=131F37072B:0F1152702E2F71291F20,7A3A=111D293505:0F117B7C2C2E71291F20,520300=111D350529:0F110001702E2F71291F20,0621=101C280434:0F11000170717B,522E1F0A=06121E2A36:0F110001708471292E1F20,03388051561C=121E2A3606:0F1100017B7C702E7129,522B22=2D39091521:0F110039702C2E522F1574487B7C2D4E804B,098A204538612B=05111D2935:0F1118795B65170002195D,52382E8A201E=2531010D19:0F111829711500010370390D332E750C201F,4552832F382B8004=2A3606121E:0F1118175C000301027039450D29332C2E2F15631F,8A582020=31010D1925:0F1118032A0D545283841A802D2C2E2B71296366774744201F26232221,010900150C06=2C38081420:0F11180300706A2E1549466319,292F26806B382B20754506=2E3A0A1622:0F1118528384530001035C53702971152B332C2E63201F1E23222621,6B75452D4F802E=111D293505:0F1118060300017B7C792E39767566261F20,7129805136=232F3B0B17:0F111800171A454F514E3A3871157765443D23221E262720,80612E1F1C=212D390915:0F11180003706A4F0D332C2E1929711571335363751F20262322,524746416128=3B0B17232F:0F111800037039450D2971332C632026,1F2E2B38528327=3B0B17232F:0F11180006032A0D700D332E011954838471152C202322,58477D630C=0814202C38:0F1118000106287129705B032C2E302F802D4E2B201F,528458384108=380814202C:0F11180001027039302971542F7526201E,63472E151F583A=1E2A360612:0F1118000102030D70332C2E192971158384535426201E2322,471F1B=1F2B370713:0F1118000102030D70332C2E195283845329711563261F0C20,4745752522=3505111D29:0F1118000102030D70332E2C192971153953631F0C262720,5284612528=390915212D:0F111800010203700D332C2E192971152F4B49471F270C2322,52562B2029=390915212D:0F111800010203391929710D1552838453,2075708A456309410F=0A16222E3A:0F111800010206032A0D09717029092D302F1575761320,521F47251D=1F2B370713:0F1118000102111A1703154F2C2E382D2F807566,7163708A1F207D2A=05111D2935:0F111800017C5C2C2E7129,527015382021=2B3707131F:0F11185C0370332D152322528384636626271E,2F292C2E1F00010601=2430000C18:0F11185C0001092A0D7014692983847B7C2C2E302F802D2B,06454F208A2E=0D19253101:0F11181200171A7919547638,5215201D09=3A0A16222E:0F1A1716007015713F261F2720,5263587D2B470304=111D293505:0F1A0070153871291F20,7A7629=010D192531:0F181179005B712980152D4E2A0D533358,5270208A11=0814202C38:0F181138171A7975665B52845415,47701F8A2013=121E2A3606:0F181117795B5C007054292A0D690403332D2C2E66632B3D,8A454F3822=121E2A3606:0F1811705200012E71291F20,382A=16222E0A3A:0F1811705200012E71291F20,062B27=14202C0838:0F18117052000171291E20,2E1F27=16222E0A3A:0F18117000012E71291F20,527A06=111D290535:0F1811700001062E2F1F20,712912=14202C3808:0F181100062839707952542C2E302F03565A7566441F1E,0D29802B2029=1824300C00:0F181100012C2E7129,522025=121E2A0636:0F18110001261F20,03522E=0915212D39:0F18110001702C2E7129,6F454F098A2025=030F1B2733:0F18110001702C2E71291F0D2B152F2127,5283162014=16222E3A0A:0F18110001707B7C0D7129,52565A152B2034=17232F3B0B:0F1811000104037115454F7677657B7C392023222726210C,52092E1F27=3707131F2B:0F181100010603797B7C802D302F2B6743441F202322,2952477D2528=14202C0838:0F181100017B7C2E71291F20,036F33=0D19253101:0F18110001027939706954528384685D15565A75201E1D26,29032E11=182430000C:0F1811000102062A0D2C2D804B2B672E2F7129,70471F8A2030=17232F3B0B:0F5C707971292C2E0E032A0D6A79804B2D8C2B3348634C,52110915462031=15212D3909:0F5C5B0001032A0D7052842C2E71291F20,1118517D462B=0F1B273303:0F5C111800015B712952841F20,756A251A=2733030F1B:1545332C2E2F84836375662620,0F0003700D71292B1C=0E1A320226:1516291211020056,06382007=000C182430:1551000403706A454F3A3D771F262322271E1D21,382B41522016=17232F3B0B:1500443626271F1E,29710F47380D19520337=182430000C:150001021745512E443D65262322,2B63387C18=192531010D:151A83842627202322,580F7003632E1F297C26=0E1A263202:15391A302F83845475662627201E,0F702E4629004708=3606121E2A:5B000102073911522C302F3A678C363F33490D482425200C1E2322,0F15382E1F6116=1E2A360612:5B71297000010611182A0D39792C2E332D4E712980152C1F202621,52454F3804=2C38081420:5B11180001020328700D332C2E195283847115632F751F2720,290F476630=0C18243000:201E27262322,8902=3404101C28:2A0D11180F52848353037039156358332C2E,3820002628=010D192531:4089,030F565A61206B27=1824300C00:4089,8836=1C28340410:0370833F0F6A5215,010D582E1F202C2F582938=112935051D:03700F,79192C2E2D715275262322271F201D217936=112935051D:0370110F45510D3371290941614C522623222720,8D3B=152D390921:03047039171A533852443D363F,8D11=0F1B273303:030402111A16175B4F3A2B153E0079015D5452848369026A51,7006200F05=0F1B270333:03041A174533302F56795B3E808339528454,700F292026=121E2A3606:037B7C2E2F261F20,0F14=1E2A360612:030270170F45513A2C7129528384702A0D532D2C24252623222720,155A382E1F2F=1B2733030F:03027011170D332D2C2E2F716152838454,010F201F2C=121E2A3606:03027039450D332C2F2D2971528384636626202322,581535=212D390915:03020E0F18110D332C2E2D2F4971293E615244756653,8A202531=1B2733030F:030102703945802D2C512B7129092322270C7566,112E528325=2D39091521:030102062C2E543E3D636679,380D19462971001F=293505111D:03111A171538193E3F,0F632C2E70454F200C19=17232F3B0B:031A2B7915656A,0F177001204529710D632E2F02=32020E1A26:033945302F838475262720,297071000F2E1F3810=17232F3B0B:0339332C2E1575201E26,0F520D631F29712A72473826=390915212D:0339332C2E302B66201D1F27,0D2971010015520F6B0E=15212D3909:03392D2E332F211D201F1E27,0F7015380029710D195824=16223A0A2E:036F791E20,522E1F31=1D29350511:5283845B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D712917=15212D3909:5283845303702971150D2F,388A6A6D0F2012=111D293505:528384530370331929272E2B2F631F1D20,0F156B380E=0D19253101:528384530339454F0D297115332E2F637520,0F00705802=2A3606121E:528384530339332E152C2F58631F20,380D000F2900=283404101C:528384530003010215392C20,1112180F29560D2E1F754511=15212D3909:5283845300031929150D332C2E63,0F217045208A717521=3505111D29:5283845300010670528384802D2C2E4E155B201F1E232221,380F71296A0E=17232F3B0B:5283845354037029711575262720,631F58000F2E38010D=111D293505:528384000103451915332C2E631F2720,29716A0D0F7019=1D29350511:5283840001032E1570637566302F391F,0F4729712030=16222E3A0A:5283845479036A2627201E,0F380D70297115012F1A=1F2B370713:528384542E03700F1118705469565A7566631F1E2021,297138000C31=121E2A3606:52838454443D65002C2E15495D1F,0F417D712B38630F=0D19253101:5283845444360F11756415,2C2F29016B472E2B20381D=212D390915:528384545363000103332E15,0F1F197029710D757D2032=121E2A3606:528384546315332C2E2F26201F2322,0F0D45002971756B17=192531010D:52838454754C2971150301022E,0F63206A0938268A4117=1B2733030F:52848353000103297115332E2F19,0F8A514F6A6620754526=1824300C00:528403395B2F1E20,0F012D=0B17232F3B:5254700001020612692D4E584647336375662E1F1E,71290D262037=131F2B3707:525400045B17791A565D754C7866,2E1F207C34=0F2733031B:483F89,8838=232F3B0B17:767779392623222789,152B1F1D200E=0A16222E3A:767789,528300292025=14202C3808:7665261F20,0F291A=222E3A0A16:7665262322271F201E21,0F0029807124=1824000C30:7889,292E1F24=101C283404:8D,8832=1D29350511:63767789,522E0006206B31=131F2B3707:7B7C343589,0F7038=2632020E1A:7B7C343589,520F20=0E1A260232:7B34,8812=1C28340410:02703918110F7919155283756626232227201E,012C2E1F0C29=121E2A3606:020F11161A17454F2C2E2D302F2B38434C,2070016328=1824300C00:02060418110D332C2E415B637566262322271F20,520F23=142038082C:07504089,0F010C=15212D3909:07262723221F40,0F7129523B=2430000C18:0717363F1A2C4F3A67433D8B,71290F0103471A=2531010D19:0704031118528384542D2E4E49201F1E1D2127,292B000C3B=283404101C:073F7765644889,012014=111D293505:074048261F202322,0F71454F1500018008=111D293505:07404826271F1E2089,882C=0D19253101:07565A5283845463756677261F20,010F15296120=2F3B0B1723:07487677393F89,0F2952151F1D30=111D293505:074889,06520F3808=17232F3B0B:074889,883B=131F2B3707:074889,8832=15212D3909:07762623221F1E20,000F1552296B2F2A=0D19253101:0776776A742623221F200C211D1E,11180F2F5206802B0B=04101C2834:0776776564,000F29382011=101C283404:0706397B7C794C636A48,520F7129472026=14202C3808:077C343589,880A=380814202C:076A79040363660F5D363F,52292E1F20382F15560123=16223A0A2E:076A696819,0F2918=222E3A0A16:076A171552847983546578,712970010F2D=182430000C:076A48,45752F29384C0F204F612B30=131F2B3707:076A7626271F1E20,0D0F29382F2E0E=0814202C38:07343589,065238=1C28340410:070039201F0C2789,06030F292F23=101C280434:076564,0F292002=0D19253101:073918111A17332C2E71292322271F1E20481D45548384,38002F702A=1824300C00:7C343589,8801=172F3B0B23:6A79363F65,0F292B7118=1B2733030F:6A170F19,5845754C201F4F382430=1B2733030F:6A170F1963766F,5452201F32=0C18243000:6A0339332C20528384531563,29713801000F0C47806B3B=2A3606121E:77766564000789,0F52201E8A01=202C380814:1F2027260076232289,0F29528339=0F1B330327:3435,8809=0F1B273303:34357B7C,8818=121E2A3606:34357B7C7789,0F291D=232F3B0B17:34357B7C89,0F2021=33030F1B27:34357B7C89,030F27=390915212D:34357B7C89,712917=1D29350511:3435073989,8802=2C38081420:34357C89,0111180F292006=30000C1824:34357C89,71291A=14202C3808:34357C89,8A2036=182430000C:3435000789,8835=232F3B0B17:34350089,0F2025=3707131F2B:34353989,0F2037=0D25310119:343589,0F52202D=0F1B273303:343589,0F7152290D=131F2B3707:343589,8830=121E2A3606:343589,881C=16222E3A0A:343589,8819=131F2B3707:343589,880F=15212D3909:343589,8832=14202C3808:343589,8813=0D19253101:343589,8811=17232F3B0B:343589,881E=142C380820:017018110F1A2E15495247838463462322271F,8D03=0F1B270333:0103040818111A155284262322271E20217A79708330,38472E631B=14202C3808:010670170F0E3A294152838454262322271F201E,2E1815442C=0F1B273303:01067071292C2E1F20,1103150F520A=17232F0B3B:010670181126271F202165,293816=182430000C:0106111839513A2C2E2D2F8C804B4723221F63,7152292037=0F2733031B:010203040618110F3315292A271D200C6339171A712C2E30491E21,7A21=0E1A260232:010206040318110F2E292A27200C70072C302F541F392B49,381512=1A2632020E:010206110F452C2E7129095B5226232227201F0C,58804B036B2B381C=142C380820:01023918112E2D493E52756624262322271F20,8D12=121E2A3606:008354,06462F2E1F27=030F1B2733:00797084831754,0F2E472D4E1F06=0D19250131:0079701811072C2E01060F33152627200C7A1A302F4576631F2B,8052382900=172F3B0B23:00790F072C2E0103047018111A262322271E7A302F5448637545,293815561E=101C340428:007952151E20,0F2E1F33=0F1B273303:007984831A160F1719,632E20471D6B01=152D390921:0079110F0304062A528423222627207A19701A2C2E2F5D83,294513=0F1B273303:0079181A165B332F2B262322271E2021030469702D4E49712930845D,454F05=152139092D:0079192E2F030417332D1552847A5D,4E201F=162E3A0A22:003826232277,632E20523A=0D19310125:0038262389,521513=1C28340410:00384089,0F202E157C07=04101C2834:00384089,152967631F=101C283404:00384740,0F2037=1C28340410:00387765504089,0F157C04=131F37072B:00385476,521F13=16222E3A0A:003854767789,2E1F522010=131F2B3707:003854637519,205D1D1F52151E210F=121E2A3606:003889,52201F1D4733=121E2A3606:003889,881F=212D390915:001D23221E2789,52290F2E1F202B=07131F2B37:002C7080305C784C62,2E1F472001=283404101C:004D64547589,0F292E=131F2B3707:005040,522E1F0F2C2004=3404101C28:005089,032C2E1F33=182430000C:005089,8815=192531010D:00261F23221E201D2189,8D12=131F2B3707:00261F2322271E200C89,8D1E=121E2A3606:0026271E20,2F2E1F33=16222E3A0A:002627241F1E20232289,8D33=14202C3808:002627651E2027232289,881B=182430000C:00262789,292C2E1F2B2F2A=07131F2B37:00262322271F1E203F8B65,52290F038002=15212D3909:001779332D2322271E2007760304,38290F1C=1F2B370713:00173883546365756619,466115201F701D47522434=0D25310119:00170F79191A6540,712909387C2015=0E1A263202:00170F332C2E2D2F802952443F26232227201F,15637C383A=132B37071F:00170F7665776489,8D2A=390915212D:00177689,0F52804F2507=2E3A0A1622:00177179546A76,0F52443D1F2D=0915212D39:0070,0F292C2E791F13=131F2B3707:007083624C,0F38202E7D4F45471F7107=380814202C:00704F0D332C2E2D15363F261F20274C,0F2906036F4703=3404101C28:00702C2E164C157126271F1E202425363F,29386A032B0F=0F1B273303:00700F1715262720,472E386309=15212D0939:007022230726,2E17712952302F15=15212D3909:00704889,8834=1C28340410:0070784889,0345201F21=2D39091521:007007482089,2E1F58470B=0D19253101:0070071A010618110F5B52846775,6326202E=16222E3A0A:00701A17794C0F302F715475,2E454F8A20243A=0F1B330327:007018111A1617192E15382627201F656477,4F090A=0F1B273303:002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A37=14202C3808:002E4344793F26271F20,03702C2F292B381A31=0E1A263202:00161A5D454F153826201E27,7D0D2904=152139092D:0004037039180F332D152952262322271F0C533A83,4117804735=1F2B370713:0004037B7C0F79494766754667,80293869208A1E=162E3A0A22:00040301067018111A0F332C15292A261E200C7A791970712F5D52838454,5617454F06=3404101C28:000403110F527079156523221E2027,0129802E1F6B1D=1830000C24:0004031A170F11332C2E302F1571292A657677451949,70201D5218=102834041C:0004031811171A5B332C2E155D52,0D29204504=17233B0B2F:00040318110F1519262322271E2021,52831F3825=3B0B17232F:00046A7966444C7765,010C202F38520F70292E31=14202C3808:003F261F202789,8836=131F2B3707:003F657789,7152290F032B3A=2632020E1A:003F651F0C2027232289,0F292B=16222E3A0A:003F89,8836=212D390915:000F76,032E1F522C292B22=2B3707131F:000F7765,2E1F7C4607=0F1B273303:000F01111A1615292A2627200C2C670279538384543E49,634512=0F1B273303:000F1320,6380382936=0F2733031B:000F1323222627,2E3829031535=0D25310119:00676589,0F200F=0C18243000:00401D232289,71290F47202B=101C283404:0040395089,8803=30000C1824:004023222089,0F291118470D=0A16222E3A:004089,0F5211=1A2632020E:004089,0F0147200B=3A0A16222E:00037039454F0D332971152C4C48,090F476341382E0A=111D293505:00037039041A26271F1E202322,0F2F2C335129452E0D3A3B=222E3A0A16:000370396A450D332F4B154C,0F208A7D41381F2E14=0F1B273303:00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B0B=0F1B273303:000304111A33152D2E302F71292A5284530770022B,0F6345203B=0F1B330327:00030418111617332E2D2F292A52845407020D302B,090F452001=0F1B273303:000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,632039=2430000C18:00036A7415384878,45751F20240F522E834F2E=182430000C:000301394F2E154763751F27,0F707A802629710D192035=14202C3808:0003391983845475,2E1F0F6A702971722A0D04=0F1B270333:00483F,6338200F2A=3B0B17232F:00481F2023221E27262189,0F292C2E1B=122A36061E:0076645089,8819=202C380814:0076777566262322271F201E,0F111852290D=101C283404:00763989,0F2036=1E2A360612:00788B89,0671292E25=010D192531:00784C00793989,0F29702E1F208A21=31010D1925:0006261F1E201D212322,0F2938111801=2A3606121E:00060403702C2E4C154947443D651F,0D2920=101C283404:0006522E261F20,0F712939=2632020E1A:00060724232227261F2025,520F157929382F22=31010D1925:0006547677,0F5229151F201B=0E1A320226:00061A161718110F292A0C26271F212A79700102212F49,470D=0814202C38:002876396577261F20,5283290F37=212D390915:0028397976771E232227,0F522E47442027=121E2A3606:006389,8822=101C280434:007B7C3989,881E=1830000C24:007B343589,8805=2E3A0A1622:00021719792B155D5466774962,010611180F292030=14202C3808:00020370454F0D3933192C2E2D156375261F202322,0F7123=0E1A260232:0002070818111A16175B153E445D5452848365647576,2038454F15=182430000C:0007385476771548,52061F2024=2D39091521:0007504089,0F29157030=15212D3909:0007504089,060F71702F2918=15212D3909:0007504089,880B=17232F0B3B:000770171989,0F2E20382F=0B17232F3B:00077089,522E1F8A202C=07131F2B37:000704036939487C4466,0F7011293821=1824000C30:000715547776,521F18=0E2632021A:0007030401021811171A0F2E2322271F1E706749528483,202F293800=0F1B330327:00077663,0F297138202C=0B17232F3B:000776776548,0F1118152E1F2017=121E2A3606:00077665776489,52830F208A14=1A2632020E:00077B7C4834353989,2952203B=2632020E1A:00076A386563,0F7D8A2066454F52754C15=1E2A360612:00076A0F3874485040,06707C2509=3606121E2A:00076A74504089,5229702C7D15=14202C3808:00076A74173926271F1E20,0F7029522B09=000C182430:00076A54196348767765,7920297115528A0D382B16=101C283404:000734357B7C3989,0F528329200C=06121E2A36:0007343589,290F7104=2E3A0A1622:0007343589,0F292F702012=182430000C:0007343589,0F71296B708003=15212D3909:0007343589,7129706300=0D19310125:0007010618111A332D302F15262322271E530270164C,560F712924=0E1A263202:000701020618111A175284835407230C7027,262038292C=111D293505:0007711F204840,010F29153814=17232F3B0B:00076527262322,1552835A201D0F382D=0D19253101:0007363F8B3989,09292C208A0F28=030F1B2733:000739483F66,0F208A2B0A=04101C2834:0007397B7C343589,0106522008=020E1A2632:0007396A48343589,0F203A=283404101C:00073934357B7C89,0F5223=3505111D29:000739343589,032010=0A16222E3A:000739343589,520F2F=111D293505:000739343589,8A200A=15212D0939:00077A7089,8817=17232F3B0B:000789,8D3B=172F3B0B23:000789,8815=1B2733030F:007C343589,881B=212D390915:007C343589,8812=15212D3909:006A79190F6F2627,6B46204538290B=380814202C:006A38075040,0F630141202B454F2D=121E2A3606:006A5040077448,702B2C0F2F292E=0B17232F3B:006A583F232227261F20,0F291547031C=232F3B0B17:006A6F391974,0F2E614447702C292F71201F38521F=31010D1925:0034353989,522E1F2B=0D19253101:00343589,060F5200=2A3606121E:00343589,7129565A01=131F2B3707:00343589,883B=111D350529:00343589,8800=152D390921:000150402627,0F292F2B1E=2733030F1B:00010F17505840,565A80385283846315=101C283404:000103020611187B7C2D4E616439201E0C26,522E474429=101C283404:0001030239450D297115332C2E4C,0F542070528438632C=101C283404:000103392E54837548,19700F58157A20381F=1830000C24:00010670175B71292A152322271E,03637C2B380F=0E1A263202:0001067052842E71291F20,030F38477533=131F2B3707:0001067011185B0D332C2E2D712909262322271F200C,0F5263250C=17232F0B3B:000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,520A=0D19253101:0001060403232226380F767754,568020152D=111D293505:000106025B7571295B04032D302F382B2A0D801E20,2E1F0F0F0C=0D19253101:00010607155B5C26271E2021165D83,38470F2920=16222E3A0A:000106073018110F3329271E0C7A0D75,3826201508=0F1B273303:00010618111A16332C2E2F2D27200C07483A450D,1552843825=0E1A263202:000102261E2027,03476F700F2971382E39=15212D3909:0001027007834878,2E388A201D17=131F2B3707:00010203450D3329152C2E2F5375,0F638A6A1D8A382D=0E1A263202:000102030D70332C2E29712F534426201F1E,0F38152F=121E2A3606:0001020370450D332C2E2D152971,0F52838A201D1B=1D29350511:0001020370528384631575712D2E4E3E581F1E1D,292C2B452620803A=222E3A0A16:0001020370392F2971152B54754C,458A1F0F20462C=14202C3808:0001020370392F80712B546675201E26,1F58472E152F=16222E3A0A:000102037039714515750D33,201D381F092E0F1103=32020E1A26:000102030F7039453319152E2D2F63751F0C1E20,71290D38472C=16222E3A0A:000102035270392E2D5863,0F381D2B2921201511=131F2B3707:0001020352666A,0F7020262938172F3A=2430000C18:00010203332C2E2F1558631F,0F1920707A2971264627=05111D2935:0001020311180F702E1F7952838468332D6749443E46630C1E1D21,292B2035=1C28340410:000102031118396375664819,1D4138702080291F=232F3B0B17:000102033945332C6375201D21,0F1929710D702D=101C283404:00010203390D3329152C2B751E20,2E1F54475352458316=111D293505:0001020339161745514F2C190F1A16152E2D2F304979,8D13=17232F3B0B:00010203396A79637566201D211E,29387D71707A30=101C283404:000102033911170D3319152E2F0947442627201F,8D25=3505111D29:000102031811392E2D19528384543E4463751F20,152F1A290F0D=0E1A263202:0001020626232227201E,0F2E03801F0F=101C283404:0001020617385483,030F47202B6B1B=2733030F1B:000102060F17705283797823221E2027,2E712910=121E2A3606:000102062A397129797B7C2E1F2425,162F5D20262B=182430000C:0001020603691817452C2E2D498344,412B6A09633808=3A0A16222E:0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A292039=17232F3B0B:000102060717706A33392D2E4E674447482322271E210C,71292B4F2023=33030F1B27:0001020607036A5D397C7C2163664744,0F4E25208A08=04101C2834:000102060775261F20,71290F70150C=101C283404:00010206111803302F565A802D4E2B881F261E0C,0D0F521B=16222E3A0A:00010206090D5B7952838454685D7B7C443D77656366201F1E,030F47454F24=010D192531:000102071283542627201D210C4C78,29580F2E6352032E1F01=32020E1A26:00010275261E0C2322,6303706F0F292E1F19=0E2632021A:000102081A158483262322270C1E,700F292E1B=101C283404:00011A1615262322271F1E200C214C,472B0F1124=3707131F2B:00013974150726271F1E200C,0F06520D297170382B4507=17233B0B2F:000118111A16175B154C26271E200C232279302F5D528384547543,0F297C7A03=17232F3B0B:000118111A332C2E2D1571292A2627200C7A1979,387C02=172F3B0B23:000118111A332C2E2D1571292A23222627200C7A791970302F5D5283845456,387C454F1F=0E1A263202:0001081811171A160F1571292A26271E20396476452B0D,632E523813=15212D3909:00211D1E232289,8D16=0E2632021A:006526232227201F,8926=05111D2935:00657689,6B0F5225=16223A0A2E:00654C89,8D03=2A3606121E:006589,2970472008=15212D3909:001A170F5B332E2D7129261E203E5D,1503528306=152139092D:001A170F1379232227761926,71293833=1C28340410:001A1715838444363F261F1E200C2322,0F476B52036338=14202C3808:001A2B5448701938754C,152E20242510=0D19253101:0039504089,8D39=283404101C:003926271E20747677642322480C06,2E1F38=0F1B273303:0039262322271E201D210C0748766465776A,150F382939=202C380814:0039332C2E2D2F152B4644261F1E,0F7019382971637A31=192531010D:0039787989,1F2E2010=101C283404:0039787089,2E1F8A034F206B29=05111D2935:00398B7989,0F200C=131F2B3707:0039077426271F1E20,0F29713852832B632D=14202C3808:0039076A7426271F2048,0F79197029717A382C=0E1A263202:00397C343548,8929=3B0B17232F:003934357B7C89,0F2028=16222E0A3A:0039343589,8D34=16222E3A0A:0039343589,880B=111D293505:0039343589,8805=17233B0B2F:0039343589,882E=101C283404:0039343589,8806=17233B0B2F:00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C2B=0915212D39:00396577647969271E2322,52012E1F2620612D=16222E3A0A:00391A6A15384C4943363F7448,0F0379472B6319=192531010D:00394C786F89,0F2E442035=182430000C:003989,882A=121E2A3606:003989,8816=13191F252B313701070D:003989,8801=0D19310125:003989,880D=0F1B273303:0018112C2E01040607332D292A09270C2322696870302F47023945,382052801C=101C340428:00190F153917701A48,472E1F200334=1F2B370713:00195475667689,5229152E2019=222E3A0A16:004C504089,0F5215470A=3A0A16222E:005C702C2F802B154C78,5A562E1F208A45466319=102834041C:0089,090F1538=131F2B3707:71297C790001062A710F802D,5215705D2F=0E1A263202:7100030170391959152E2D2F2B39,0F201F4F75668A3824=030F1B2733:5483846376656419786A,298030201A=2430000C18:5452838479195D00012A0D7B7C2C2E3348156366242526201E,0F71292D=07131F2B37:54528384700001020339482D301571565A363F637566,06292B201F8A29=030F1B2733:54528384036F796A153E65,7129631D=2733030F1B:5452848303152F802C2D,2E1F208A7A700F29710C7D22=33030F1B27:118384155B20272E1F21,0F03380E=0E1A263202:1179302F842627201E,0071292E1F0E=06121E2A36:11177B7C52842C2E5B1F20,060071292F0F0E=101C283404:110F70528475660D7129,012E1F20262A=101C283404:110F03706A795215636626271E,0C012F38062C292B07=020E1A2632:110F0001702C2E7129201F,52060C=0E1A263202:110F00017052792E1F1E,71290D2B2020=293505111D:110F1A6A702C2E1952838453712F6375,45201500011D=101C340428:11037B7C2E2F7129,0F52200B=0E1A263202:11000170792C2E7129,0F52201F01=111D350529:110001527B7C2E75,0F2009=04101C2834:1100010206702D804E2B2620,0F52540D00=131F2B3707:110001392E1F20,0F712932=17232F3B0B:11715452838454292C2E302D4E092A0D50407970443D,5680410023=2B3707131F:111879690001020370396A2E2D528384543E637566,0F380D580F292000=222E3A0A16:111879076A1A171523221E27207924,5229700F1D012E292B0C2F0B=06121E2A36:111817000106702C2E71292A0D33802D302F4E2B44,0F52252029=07131F2B37:11180F000704030D7C684580302F153867534775,70204119=2430000C18:11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478A2037=1E2A360612:11180F000152548471702C2E2D4E303348492A156144474C63,8A201F38450618=202C380814:11180F000128032A0D7129302C2E302F2D802B09411F1E20,5284543824=2F3B0B1723:11180F0001020370391952845329712B632E7B7C792D2C8020,385D151E=293505111D:11180F0001020339700D29716375662E1F2620,3815568016=16222E3A0A:11180F000102587B7C5283847971302F804B2B497675,09612E1F201E=232F3B0B17:11180F00010E715229702E79692C2E2D2B15093954444C6666,2F565A806132=131F2B3707:11180F71297052838454792A0D33802D153853201F1E212627,012F56476628=3707131F2B:11180F71297000010604032A0D793969302F33802D636675,201F52565A1E18=1D29350511:11180F5C000102030D332C2E195329711563261F202322,52843A=202C380814:11180370392A0D3329712C2F156375795B5D,450C8A00382E1F20010C=3A0A16222E:11185283847975661271393D692D15565A201E262322,292F060D0C02=30000C1824:111852838470795B302F404533802D152B39201E23221D212726,0F2E1F010D2923=2D39091521:111852838453546319297115030D332B2C,060F8A2E38201F38=0D19253101:111800020D041A796933483E5347446563751F1D212026,010F09150C17=2430000C18:1118000717161A2C2E3371292B56433D6375363F,0F010347208A09=020E1A2632:111800012A0D2C705271292E201F,1538617904=30000C1824:11180001032A0D70795B2C2E302F802D4E152B33714161201F26,520958470A=000C182430:11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A2971702037=232F3B0B17:111800010206037939695483845D2D2E4E446375661F262120,0F52290D7123=31010D1925:111800010206071979697C67474475664C,0F16298A2014=182430000C:11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E15414732=192531010D:111871545283842979397B7C69152B2A0D3348295324251F1D1E26,6B00702F800C201E=1F2B370713:5D0007363F232227261E21,037C0F471F202E=0E1A263202:6526232227201F,880E=111D293505:653989,8806=131F2B3707:363F6526232227201E89,8832=1A2632020E:1A454F548384,881D=121E2A3606:1A38712975,0F201A=0E1A263202:1A162623227954,0001710F290C=0F1B273303:1A16170F13152654,3852204F32=0F1B273303:1A5D453A332C2E2F4B25262322271F201E1D21,000F704723=2F3B0B1723:3950177089,522E1F0F201A=1D29350511:39701117302F713819297566,004551152C2E201D1F34=121E2A3606:393589,881A=15212D3909:393589,882C=182430000C:393589,8825=101C283404:393589,881C=2531010D19:394089,71294709636F7C440D=0D19253101:3948007889,8D38=2430000C18:394889,8811=111D293505:394889,882A=0E1A263202:3907,8807=0D19253101:39343589,8831=101C283404:393489,8801=222E3A0A16:390050404C89,0F528329692018=131F2B3707:39006A26201F,0F520D38580629712B09=380814202C:390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A15=17232F3B0B:3989,8D11=0A16222E3A:181179838454637566,0F5229012007=111D293505:18117915384C,52200E=0C18243000:1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F29=16222E0A3A:1811795B5466,01202F=192531010D:181179000607040D03302F5283844F3A45512B1533664C47,090F702E208A2B=0B17232F3B:18117900012C2E5B1F20,0F710D52291A=122A36061E:181179190E332C2E2D52637566262322271F20,8D02=0F1B273303:181117332C2E1526232227201F1E3E,38030F522922=142038082C:181170792C2F7129,52201F=121E36062A:18117001061579,71292023=121E2A3606:18117000012C2E7129,522024=3505111D29:18110F390001020370390D3329711563752E1F0C201D,38525D1A=101C283404:18110F197983842E230C271F1E7A70525463,2620291503=111D293505:1811002E1F8384,0F2022=1824000C30:181100012C2E2F1F,0F3821=142038082C:181100012C2E2F1F20,0F5229=14202C3808:181100015B3875,2E2034=15212D3909:181100012A0D2C2E2F2B2D302F4E447129841F,0F09416138200F=0814202C38:181100012A0D52842953411E20,2E1F0F47152F=131F2B3707:18110001032A0D845B7129302F791533536678,0F208A1F1D33=17232F3B0B:18115452840001712970802D2C2E302F2B2A0D78791F,0F204758610E=0F1B273303:18111A16175B3315262322271F1E201D215D838454433E363F754551,00030F290D=0C18243000:18115C0001702A2C2E2F5283847129795B6375802D154C,1F208A2407=15212D3909:88,262052830D=17232F3B0B:88,8D17=102834041C:88,8D0B=15212D0939:88,8D24=121E2A0636:88,8D09=17232F0B3B:88,8D13=111D293505:1979,3F2F2E45207D37=112935051D:1966583F6589,8831=16222E3A0A:4C4089,880C=0C18243000:4C78,297172380D2A2E0F47484112=16222E3A0A:5C0F1811790070528471291F20,2F0380512514=1C28340410:5C0001020652835B0E03804B2D4E2B752024210C06,292E565A36=1A2632020E:5C11180001027170520D298483292B15200C,03802E386333=15212D3909:89,6B34=111D293505:89,8D",
                TIME_YI_JI: "0D28=,2C2E2128=,2C2E0110=,2C2E0C1F=,2C2E7A701B1C=,01022308=,01026D003026=,000106037A702D02=,000106037A702802=,000106037A703131=,000106037A70341B=,000106087A701F0E=,000106087A702E15=,000106087A702C2E0E39=,000106087A702C2E0D2B=,881727=,88032D=,88352F=,882B2F=,882125=,882A22=,880C1E=,880220=,88161A=,882018=,883422=,880113=,880B11=,883315=,882915=,881F17=,88150D=,88122E=,88302A=,88262A=,883A28=,880826=,881C2C=,881905=,882303=,880F09=,88050B=,883701=,882D01=,88060C=,882410=,881A12=,882E0E=,88380E=,881010=,883630=,881834=,880E38=,882232=,882C30=,88043A=,881E0A=,880006=,883208=,880A04=,881400=,882808=,883137=,883B35=,882737=,881D39=,88133B=,880933=,88251D=,882F1B=,881B1F=,88111D=,880719=,88391B=,88212D=,7A702C0B15=,7A70551515=,7A70552D00=,7A7D2C2E1334=382C,000106083528=382C,7A70000106080504=382C7A6C55700F197120,00010608223A=380006082C,01026D0D2C=380006082C,01027A70551D30=380006082C0F71295283,01027A703636=380006082C0F71295283,0102416D1226=380006082C7A706C550F297120,0102251C=380006082C7A6C55700F197120,01026D2300=3800010608,2C2E0324=3800010608,7A702C2E082E=3800010608,7A70552C2E3B34=38000106082C,2F8026330C=38000106082C,2F80267A701622=38000106082C7A70556C0F197120,1904=38000106082C7A6C55700F197120,1514=38000106087A70556C0F197120,2C2E3138=38000106087A70556C0F197120,2C2E0B10=38000106087A6C55700F197120,2C2E2B28=387A6C55700F197120,000106082C2E2E16=38082C,000106037A700E3A=38082C,000106037A703708=38082C6C550F197120,000106037A701B20=38082C6C550F197120,000106037A70111C=38082C6C550F197120,000106037A703A2D=2C38,000106082733=2C38,000106081015=2C38020F71295283,000106083817=2C2920,7A700F03=2C2920,616D1839=2C292070556C100F,00010608161B=2C2920020F7100010608,302B=2C2920556C0F1971,7A701E07=2C2920010F,1B1B=2C2920010670100F00,352B=2C292000010206100F70,082B=2C292000010206100F707A,0C21=2C292000010870556C100F7A,0617=2C29206C0F1971,7A70552807=2C29207A70556C0F197100010206,122F=2C29207A706C55100F1971,1017=2C29207A706C55100F1971,2731=2C20,616D0436=2C2070550F,7A7D01022E12=2C200F71295283,01021831=2C20556C0F1971,7A702912=2C20100F52,01026D1D33=2C807138152952,000106080E31=2C80713815295270556C100F,000106083201=2C80713815295270556C100F7A,000106080327=2C80713815295202100F,000106037A702B2B=2C80713815295202100F,000106037A702801=2C80713815295202100F,000106083639=2C80713815295202100F7A7055,00010608341D=2C807138152952556C100F,000106037A701B23=2C807138152952010F6C55,7A70302D=2C8071381529520102100F7A7055,2231=2C8071381529520102100F7A6C55,1F13=2C80713815295200010206100F20,7A70313B=2C8071381529526C550F,000106037A701A15=2C8071381529527A70550F,000106080219=2C8071381529527A70556C0F19,000106082E0D=2C80713815295208556C100F,000106037A70161F=2C80711529525670556C100F,000106083813=2C80711529525670556C100F,000106082D05=2C807115295256020F7A706C55,2237=2C80711529525602100F,000106081F0D=2C80711529525602100F55,000106037A702627=2C8071152952560102100F7A706C,2C33=2C8071152952560102100F7A706C,0939=2C80711529525601100F7A7055,416D021F=2C80711529525600010206100F70,0E37=2C80711529525600010870556C10,2129=2C8071152952566C550F,7A702519=2C8071152952566C550F19,7A702417=2C8071152952566C55100F19,000106037A70043B=2C8071152952566C55100F19,000106037A700C1B=2C8071152952566C55100F19,7A703B31=2C8071152952566C100F19,7A705500010603172D=2C8071152952567A70550F,416D3A2F=2C8071152952567A70556C100F,1901=2C8071152952567A706C55100F19,1119=2C8071152952567A6C55700F19,1C2B=2C80711529525608556C100F,000106037A701403=2C80711529525608556C100F,000106037A70071D=2C80711529525608100F55,000106037A701908=292C20,7A7D01026D2E0F=292C200102100F7A7055,032C=292C20000608,0102071C=292C206C550F1971,000106037A700E33=292C207A70556C000108,0503=2920550F,7A702C2E0721=2920556C100F,7A702C1225=2920000108556C100F,7A702C2E1F11=2900010870556C100F7A,032C201A11=297A70556C100F,032C200E35=297A70556C100F,032C20000A=70556C0F197120,7A7D3A29=70556C100F2C20,000106081C25=70556C100F2C20,000106082805=70556C100F2C20,000106082F20=70556C100F2C20,00010608150C=70556C100F29522002,7A7D000106033314=70556C100F,00010608032C20122A=70556C08,7A7D000106032415=70100F2C715220,000106081A0D=4B0F2C20,000106037A701902=4B0F2C20,000106080E3B=4B0F20,7A702C000106032E17=0F2C09382920,7A7000010603363B=0F2C093829206C55,000106037A70082C=0F29528320,7A2C71707D01026D0718=0F712952832C20,7A7D01021C26=0F712952832C20,7A7D01026D3918=0F712952832C2038000608,01027A70552126=0F712952832C2010,01021330=0F712952832C207A7055,01021118=0F712952832C207A7055,01023524=0F715220,7A70552C2E3419=20556C0F1971,7A702C2E1D31=2000010206100F,7A702C1E05=0270290F2C207A,00010608212C=0270550F,00010608032C200C23=0270550F,00010608032C203706=0270550F20,000106082C2E2520=0270550F20,7A7D000106032E13=0270550F202C807115295256,000106081620=020F29528320,000106087A2C71707D0112=020F2952832055,7A2C71707D000106030F08=020F20,7A7055000106032A23=020F712952832C20,2521=020F712952832C20,000106082F21=020F712952832C20,000106080003=020F712952832C20,7A700432=020F712952832C2038000106086C,7A701E03=020F712952832C2070556C10,000106081623=020F712952832C2001,2236=020F712952832C2001,000B=020F712952832C2001,7A70552C36=020F712952832C20013800,416D341E=020F712952832C20017055,7A7D0E32=020F712952832C200110,7A7D0329=020F712952832C2001107A706C55,262D=020F712952832C20017A7055,1229=020F712952832C2000010608,122D=020F712952832C2000010608,1011=020F712952832C2000010608,0A0B=020F712952832C2000010608,1F0F=020F712952832C2000010870556C,1A0E=020F712952832C206C55,7A703312=020F712952832C2010,000106037A70172A=020F712952832C2010,7A7055000106033B3B=020F712952832C2010,416D000106037A700B12=020F712952832C20106C55,000106037A700615=020F712952832C207A7055,3203=020F712952832C207A7055,201B=020F712952832C207A706C5510,2023=020F712952832C207A6C7055,2A1B=020F7129528320,000106087A702C2629=020F7129528320,7A702C2E3709=020F7129528320,7A702C000106083A24=020F7129528320,7A70552C2E341A=020F712952832038000106087A70,2C2E1C2D=020F712952832001,7A702C2E0611=020F712952832001,7A702C2E021A=020F712952832001,7A7D2C2E3815=020F71295283200100,7A702C2E3024=020F71295283200110,616D2C2E093B=020F71295283206C55,7A702C2E000106030505=020F71295283206C55,7A702C030C1A=020F71295283207A706C55,000106082C2E3705=020F712952837A706C55,032C201F0C=02550F20,000106037A700508=02550F20,000106037A703029=02550F20,000106087A702C2E3027=02550F202C807115295256,000106037A703526=02100F2C29528320,000106037A70150E=02100F2C29528320,00010608380F=02100F2C29528320,000106083527=02100F2C29528320,7A70000106031C27=02100F2C2955528320,000106081227=02100F2C29555283207A706C,00010608060F=02100F2C29555283207A706C,000106081D34=02100F7020,7A7D000106030F02=02100F7055528315,2F8026000106083920=02100F7055528315,2F802600010608212A=02100F7055528315,000106082A20=02100F7055528315,000106083A26=02100F7055528315,000106080439=02100F7055528315,000106080008=02100F7055528315,000106081B21=02100F7055528315,00010608071B=02100F7055528315,000106080D24=02100F7055528315,000106082C2E2C32=02100F7055528315,000106082C2E2B2C=02100F7055528315,00010608032C201402=02100F7055528315,00010608032C20391C=02100F7055528315,7A7D000106031F10=02100F705552831538,2F8026000106082D06=02100F70555283157A,2F802600010608290D=02100F20,7A702C000106032416=02100F20,616D000106037A702C34=02100F20292C,7A70000106031C2A=02100F528315,7A7055000106032234=02100F528315,7A7055000106032A21=02100F55528315,000106037A703313=02100F55528315,000106037A700509=02100F55528315,000106037A702D03=02100F55528315,000106037A700613=02100F55528315,000106037A702235=02100F55528315,000106037A70391D=02100F55528315,000106037A70100F=02100F55528315,000106087A702C111B=02100F55528315,000106087A702C2E2916=02100F55528315,7A2C71707D000106030430=02100F55528315,7A2C71707D000106033B32=02100F55528315,7A2C71707D000106081903=02100F55528315,7A702C2E000106033A27=02100F55528315,7A702C000106030931=02100F55528315,7A702C000106030C1C=02100F55528315,7A70000106032735=02100F555283152C8071,000106037A700B13=02100F555283152C807138,000106037A701517=02100F555283152C807138,000106037A702917=02100F555283156C,000106037A703136=550F522010,7A2C71707D01022A1E=550F715220,7A702C2E1333=550F715220,7A702C2E000106081405=556C,000106087A702C2E0433=556C,7A70000106083B38=556C0F197120,7A702C2E1E01=556C0F19712001,7A702C2E190B=556C000108,7A70230B=556C000108,7A702C2E1A0F=556C0001082C807115295256,7A701830=556C0008,7A2C71707D01023814=556C100F295220,7A2C71707D03082F=556C100F295220,7A702C0C1D=556C100F295220,7A702C2E00010603021D=556C100F295220,7A70000106031121=556C100F2952202C,7A701835=556C100F2952202C80713815,000106037A703B30=556C100F29522002,000106037A70290C=556C100F29522002,7A70000106030930=556C100F2952200238,000106037A702B27=556C100F2952200102,7A702C2E3812=556C08,000106037A701012=556C08,000106037A701621=556C08,7A702C2E000106033209=556C08,7A702C2E000106032021=556C082C807138152952,000106037A700009=556C082C807138152952,000106037A702A1D=807138152952000170100F,032C200A05=807138152952000170100F,032C20273B=8071381529527A706C550F,032C203423=80711529525600010870556C100F,032C201511=80711529525600010870556C100F,032C20183B=80711529525600010870556C100F,032C203311=010F2C80093829206C55,7A702B29=010F2C80093829206C55,7A70616D3A25=010F2C09382920,7A70550825=010F2C093829207A6C5570,201E=010F09382920,7A702C2E352E=010670100F2C71522000,1C28=010670100F7152207A6C55,2C2E2E11=0106100F7152,7A70032C203205=0106100F71526C,7A70032C202A19=0102290F20,7A702C2E2A1F=010270290F2C207A6C55,2413=010270290F2C207A6C55,0437=010270290F2C207A6C55,0935=010270550F,032C201B18=010270550F20,2B24=010270550F20,2F80261906=010270550F20,2C2E2732=010270550F20,2C2E071A=010270550F20,2C2E3700=010270550F20,7A7D1724=010270550F203800,2F80263921=010270550F202C29,416D290F=010270550F202C807138152952,1619=010270550F202C8071381529527A,3207=010270550F202C80711529525600,0829=010270550F2000,060D=010270550F2000,0001=010270550F2000,2736=010270550F207A,1B1E=010270550F207A,2C2E140B=010270550F207A6C,0114=010270550F7A6C,032C202C3B=010270550F7A6C,032C20201F=0102550F20,7A702C1A13=0102550F20,7A702C3637=0102550F20,7A702C280B=0102550F20,7A702C223B=0102550F20,7A702C032D04=0102100F2C29528320,7A701409=0102100F2C29528320,7A70552307=0102100F2C2952832000,0005=0102100F295283,032C207A700A00=0102100F2955528320,7A2C71707D082D=0102100F2955528320,7A702C2E2809=0102100F295552832000,7A702C2E2B2D=0102100F7055528315,021E=0102100F7055528315,0C20=0102100F7055528315,2F80263420=0102100F7055528315,2F80261510=0102100F7055528315,2F80262E10=0102100F7055528315,2F80262806=0102100F7055528315,2F80263134=0102100F7055528315,2F80261D38=0102100F7055528315,2F8026251A=0102100F7055528315,2F80263A2A=0102100F7055528315,2F80267A7D1120=0102100F7055528315,2F80267A7D0824=0102100F7055528315,2C2E1E00=0102100F7055528315,2C2E7A2F1D=0102100F7055528315,032C200A06=0102100F7055528315,7A7D2C2E1C2E=0102100F70555283153800,2F80261832=0102100F70555283153800,2C2E280A=0102100F70555283153800,2C2E320A=0102100F705552831538007A,2738=0102100F705552831538007A6C,2F80260720=0102100F705552831538007A6C,2F8026032B=0102100F70555283152C292000,1907=0102100F70555283152C292000,3703=0102100F70555283152C292000,2739=0102100F70555283152C29207A,251B=0102100F70555283152C29207A,2B25=0102100F70555283152C29207A6C,1331=0102100F70555283152C207A,0D29=0102100F70555283152C80717A,1B1D=0102100F70555283158071,032C200D2D=0102100F705552831500,1725=0102100F705552831500,352D=0102100F705552831500,0C19=0102100F705552831500,150F=0102100F705552831500,3025=0102100F705552831500,0F07=0102100F705552831500,1E09=0102100F705552831500,251F=0102100F705552831500,010C=0102100F705552831500,2F80261A10=0102100F705552831500,2F80261016=0102100F705552831500,2F80260934=0102100F705552831500,2F80262910=0102100F705552831500,2F80267A7D1A14=0102100F705552831500,2C2E2304=0102100F705552831500,7A7D3421=0102100F7055528315002C2920,212F=0102100F7055528315002C807138,111F=0102100F7055528315002C807138,3135=0102100F7055528315008071,032C200828=0102100F7055528315007A6C,2022=0102100F70555283156C,7A7D140A=0102100F70555283156C,7A7D2C2E2127=0102100F70555283157A,1618=0102100F70555283157A,0B0F=0102100F70555283157A,1836=0102100F70555283157A,172E=0102100F70555283157A,2F8026352A=0102100F70555283157A,2F80262B2E=0102100F70555283157A,2F8026082A=0102100F70555283157A,2F80262306=0102100F70555283157A,2F80263702=0102100F70555283157A,2F80262C38=0102100F70555283157A,2F80261E06=0102100F70555283157A,2F80261B1A=0102100F70555283157A,2F8026032A=0102100F70555283157A,2C2E1F14=0102100F70555283157A,2C2E3810=0102100F70555283157A,2C2E262C=0102100F70555283157A29,032C20201A=0102100F70555283157A00,2F80260A02=0102100F70555283157A00,2F80261838=0102100F70555283157A6C,2F80260E34=0102100F70555283157A6C,2F80260438=0102100F70555283157A6C,2C2E2F1A=0102100F70555283157A6C,2C2E2305=0102100F528315,7A70553525=0102100F5283152C8071,7A70550723=0102100F528315807138,7A7055032C200D2A=0102100F55528315,2F80267A2C71707D3316=0102100F55528315,2F80267A2C71707D1224=0102100F55528315,2F80267A2C71707D212E=0102100F55528315,2F80267A700616=0102100F55528315,2F80267A70380C=0102100F55528315,2F80267A700434=0102100F55528315,2F80267A702A18=0102100F55528315,7A2C71707D2628=0102100F55528315,7A2C71707D100C=0102100F55528315,7A2C71707D2F80261729=0102100F55528315,7A701F15=0102100F55528315,7A70240E=0102100F55528315,7A703632=0102100F55528315,7A701339=0102100F55528315,7A700115=0102100F55528315,7A702C2C37=0102100F55528315,7A702C320B=0102100F55528315,7A702C3206=0102100F55528315,7A702C2E2238=0102100F55528315,616D2F80267A2C71707D3816=0102100F555283153800,2F80267A701406=0102100F555283153800,2F80267A700111=0102100F555283152C8071,7A700501=0102100F555283152C8071,7A70370B=0102100F555283152C807138,7A703B37=0102100F555283152C80713800,7A701C2F=0102100F555283152920,7A702C240F=0102100F555283152920,7A702C0A03=0102100F555283152920,7A702C0221=0102100F55528315292000,7A702C2E3317=0102100F55528315292000,7A702C2E3634=0102100F5552831500,2F80267A2C71707D3028=0102100F5552831500,7A2C71707D111A=0102100F5552831500,7A2C71707D071E=0102100F5552831500,7A2C71707D2913=0102100F5552831500,7A702F19=0102100F5552831500,7A702301=0102100F5552831500,7A702C3919=0102100F5552831500,7A702C3B33=0102100F5552831500,7A702C2E0223=0102100F5552831500,7A702C03032F=0102100F55528315006C,7A702C2E262E=0102100F555283156C,2F80267A70032E=0102100F555283156C,7A2C71707D0F0B=0102100F555283156C,7A701D3B=0102100F555283156C,7A702C2E030116=01100F1571292C20,2F80267A703200=01100F1571292C20,7A7055370A=01100F1571292C2000,7A701B22=01100F1571292C2000,7A701E04=01100F1571292C2000,416D1336=01100F1571292C20007A70556C,391A=01100F1571292C20007A6C7055,1C24=01100F1571292C207A7055,2F80260D2E=01100F15712920,7A702C2E2D0A=01100F15712920,7A702C2E2800=01100F15712920027A7055,2C2E251E=01100F157129207A70556C,2C2E1228=01100F157129207A70556C,416D2C2E050A=01100F5220,7A70550000=01100F5220,616D2624=01100F5220,616D2F80267A702804=01100F5220006C,7A70550F06=01100F52207A70556C,2C2E2F1E=01100F52207A70556C,2C2E1014=01100F527A70556C,032C20161E=01100F712920,7A702C2E0A0A=01100F71522C2920,616D161C=0070100F292C20,01020F04=0006100F7020,7A7D01026D183A=0006100F7020,616D0102201C=0006100F20,7A2C71707D01026D1D37=000170100F292C20,2F18=000170100F292C802038,161D=00014B0F,032C201338=00014B0F2C2002,2F80261728=00014B0F20,2C2E0F0A=00014B0F20,7A2C71707D1833=00014B0F20,7A702C1407=00014B0F20,7A702C1401=0001060838,2C2E1123=0001060838,416D032C202019=000106082C38,2C31=000106082C38,391F=000106082C38,2523=000106082C38,7A70416D1C29=000106082C38020F71295283,3811=000106082C38020F71295283,7A700937=000106082C386C550F197120,7A700117=00010252100F29202C7A706C55,1337=00010206700F202C807138152952,3A2E=00010206100F7020,616D0610=00010206100F20,7A2C71707D0328=00010206100F20,7A700F01=00010206100F20,7A702C3310=00010206100F20,7A702C2E3139=0001100F298020,7A702C2625=00010870556C100F2C20,1909=00010870556C100F2C20,391E=00010870556C100F2C20,2124=00010870556C100F2C20,2F80267A7D0F00=00010870556C100F2C2038,2D09=00010870556C100F2C2002,0500=00010870556C100F2C207A,2C39=00010870556C100F2C207A,2518=00010870556C100F2C207A,0B0C=00010870556C100F2C207A,2F80262911=00010870556C100F7A,032C200007=000108556C100F2C2029,7A700A07=000108556C100F2C2029,7A701332=000108556C100F20,2C2E7A70100D=000108556C100F20,7A702C2E2239=000108556C100F20,7A702C2E0A01=000108556C100F20,7A702C2E380D=0001086C100F2C20,7A70551D36=0001086C100F2C20,7A70552F1F=000108100F70552920,010D=000108100F70552920,616D0507=000108100F705529202C80713815,0B0D=000108100F705529202C8071157A,3133=000108100F7055292002,2309=000108100F7055292002,416D0002=000108100F705529207A,2F80263202=000108100F705529207A,2F80263638=000108100F705529207A,2C2E2A1A=000108100F705529207A38,2F80262414=000108100F705529207A6C,2C2E2E14=000108100F552920,7A2C71707D1404=000108100F552920,7A2C71707D0B17=000108100F552920,7A70330D=000108100F552920,7A702C172F=000108100F552920,7A702C2E3707=000108100F5529206C,616D7A702C2E302E=6C55700F197120,2C2E7A7D0C22=6C55700F197120,7A7D01026D1E02=6C550F297120,000106037A703923=6C550F297120,7A702C2E03230A=6C550F1920,7A2C71707D240C=6C550F19200210,7A2C71707D000106031A16=6C550F197120,000106037A701513=6C550F197120,7A703A2B=6C550F197120,7A701837=6C550F197120,7A702F23=6C550F197120,7A702F22=6C550F197120,7A702D07=6C550F197120,7A702C2E3922=6C550F197120,7A700102093A=6C550F197120,7A70000106031B19=6C550F197120,616D7A70071F=6C550F197120,616D7A702C2E212B=6C550F197120,616D7A702C2E000106032734=6C550F197120292C,000106037A700325=6C550F1971200001020610,7A702C122B=6C550F19712008,000106037A702411=6C100F2952,7A7055032C20010E=100F2C29528320,01023704=100F2C29528320,0102363A=100F292C206C55,000106037A702B26=100F2920,7A2C71707D01026D302C=100F7055528315,01021E08=100F7055528315,01022730=100F7055528315,01021512=100F7055528315,010200352C=100F7055528315,7A7D01026D2F1C=100F7055528315,7A7D01026D0222=100F70555283153800,01026D2412=100F70555283157A,01022230=100F70555283157A,0102060E=100F70555283157A6C,01022C3A=100F70555283157A6C,01026D1F12=100F1571292C20,01026D3B36=100F1571292C20,01026D1516=100F1571292C20,000106037A702302=100F1571292C20,000106037A701D32=100F1571292C20,000106082F8026330E=100F1571292C20,000106086D2A1C=100F1571292C20,7A7001026D313A=100F1571292C20,7A7000010603341C=100F1571292C20,416D7A70000106032B2A=100F1571292C2002,000106037A700326=100F1571292C20556C,000106037A70273A=100F1571292C2000,01026D0722=100F1571292C2000,01026D2E0C=100F1571292C206C55,000106037A701408=100F1571292C207A706C55,01022020=100F1571292C207A706C55,000106081726=100F1571292C207A6C7055,0102290E=100F1571292C207A6C7055,000106080932=100F1571292C207A6C7055,000106080D26=100F52,00010608032C20100E=100F5283153800,01027A70550B16=100F5220,2F8026000106081122=100F5220,6D010200133A=100F5220,01026D1F16=100F5220,000106037A703132=100F5220,000106083B3A=100F5220,000106082522=100F5220,00010608190A=100F5220,000106082C2E021C=100F5220,7A70000106030936=100F52202C,01026D3A2C=100F52206C55,01027A701A0C=100F52206C55,000106037A700E30=100F52206C55,000106037A700A08=100F52207A706C55,000106083204=100F52207A6C5570,01026D0B0E=100F55528315,01027A2C71707D0004=100F55528315,7A2C71707D01026D1D3A=100F55528315,7A2C71707D01026D3418=100F5552831500,7A2C71707D0102201D=100F712920,7A702C2E00010608030E36=100F71522C2920,01023635=100F715229,00010608032C20021B=7A70550F2C715220,1900=7A70550F715220,2C2E0A09=7A70556C,00010608172C=7A70556C,00010608032C200B14=7A70556C,00010608032C202914=7A70556C0F197120,2C2E0938=7A70556C0F197120,000106082C2E111E=7A70556C000108,0502=7A70556C000108,2F80260D2F=7A70556C0001082C807138152952,2D0B=7A70556C0001082C807138152952,3633=7A70556C0001082C807115295256,0C18=7A70556C0008,01020218=7A70556C0008,0102302F=7A70556C100F295220,000106082C35=7A70556C100F295220,000106081E0B=7A70556C100F2952202C807115,3130=7A70556C100F29522002,000106080506=7A70556C100F29522001,2C2E330F=7A70556C100F29522001022C8071,010F=7A70556C100F295220010200,0435=7A70556C100F295280713815,032C200614=7A70556C100F295201,032C20122C=7A70556C100F29520102,032C203B39=7A706C550F297120,0F05=7A706C550F297102,032C200D25=7A706C550F19712001,616D2233=7A706C550F19712000010608,2626=7A6C70550F197120,01021A17=7A6C70550F197120,00010608262F=7A6C70550F1971202C29,000106083529=7A6C70550F19712002,616D000106082D08=7A6C70550F197120103800,0102341F=7A6C55700F197120,2C2E172B=082C38,7A7055000106030D27=082C38,7A70000106030827=08556C100F2C20,000106037A702803=08556C100F2C20,000106037A701013=08556C100F2C20,7A7000010603262B=08556C100F2C20,7A7000010603240D=08556C100F2C20,7A70000106033631=08556C100F2C20,7A70000106030431=08556C100F20,7A702C2E000106031D35=08100F552920,000106037A701335=08100F552920,000106037A700612=08100F55292038,000106037A70",
                SHEN_SHA: ["无", "天恩", "母仓", "时阳", "生气", "益后", "青龙", "灾煞", "天火", "四忌", "八龙", "复日", "续世", "明堂", "月煞", "月虚", "血支", "天贼", "五虚", "土符", "归忌", "血忌", "月德", "月恩", "四相", "王日", "天仓", "不将", "要安", "五合", "鸣吠对", "月建", "小时", "土府", "往亡", "天刑", "天德", "官日", "吉期", "玉宇", "大时", "大败", "咸池", "朱雀", "守日", "天巫", "福德", "六仪", "金堂", "金匮", "厌对", "招摇", "九空", "九坎", "九焦", "相日", "宝光", "天罡", "死神", "月刑", "月害", "游祸", "重日", "时德", "民日", "三合", "临日", "天马", "时阴", "鸣吠", "死气", "地囊", "白虎", "月德合", "敬安", "玉堂", "普护", "解神", "小耗", "天德合", "月空", "驿马", "天后", "除神", "月破", "大耗", "五离", "天牢", "阴德", "福生", "天吏", "致死", "元武", "阳德", "天喜", "天医", "司命", "月厌", "地火", "四击", "大煞", "大会", "天愿", "六合", "五富", "圣心", "河魁", "劫煞", "四穷", "勾陈", "触水龙", "八风", "天赦", "五墓", "八专", "阴错", "四耗", "阳错", "四废", "三阴", "小会", "阴道冲阳", "单阴", "孤辰", "阴位", "行狠", "了戾", "绝阴", "纯阳", "七鸟", "岁薄", "阴阳交破", "阴阳俱错", "阴阳击冲", "逐阵", "阳错阴冲", "七符", "天狗", "九虎", "成日", "天符", "孤阳", "绝阳", "纯阴", "六蛇", "阴神", "解除", "阳破阴冲"],
                DAY_SHEN_SHA: "100=010203040506,0708090A0B101=010C0D,0E0F101112131415102=16011718191A1B1C1D1E,1F20212223103=24011825261B271D1E,28292A2B104=012C2D2E2F3031,3233343536105=3738,393A3B3C3D123E106=3F404142434445,464748107=494A4B4C4D,4E108=4F5051524C4D5345,54555657109=58595345,5A5B12565C10A=5D415E5F60,616263640B6510B=0266676869,6A6B6C0A3E6D10C=1602171803041B05061E,07086E10D=24181B0C0D,0E0F1011126F13141510E=70191A1C1D,1F2021222310F=0125261B271D,28292A2B110=012C2D2E2F3031,3233343536111=49013738,393A3B3C3D123E112=4F50013F404142434445,4648113=014A4B,4E6E114=51524C4D5345,54550B5657115=0158595345,5A5B12565C116=1601185D415E5F60,61626364117=24021867681B69,6A6B3E6D118=0203040506,0708119=1B0C0D,0E0F10111213141511A=191A1B1C1D1E,1F2021222311B=4925261B271D1E,28292A11C=4F502C2D2E2F3031,323334353611D=3738,393A3B3C3D123E11E=3F404142434445,460B4811F=4A4B,4E71120=16171851524C4D5345,545556121=241858595345,5A5B12565C122=5D415E5F60,61626364123=0267681B69,6A6B3E6D124=0203041B05061E,070847125=491B0C0D,0E0F101112131415126=4F50191A1C1D1E,1F20212223127=2526271D1E,28292A2B128=2C2D2E2F3031,32333435360B129=3738,393A3B3C3D123E12A=1617183F404142434445,464812B=24184A4B,4E7212C=51524C4D53,5455565712D=0158595345,5A5B12565C12E=015D415E5F60,616263647312F=49010267681B69,6A6B3E6D130=4F500102030405061E,070874131=010C0D,0E0F101112131415726E132=191A1C1D1E,1F2021220B722375133=2526271D1E,28292A2B134=1617182C2D2E2F3031,3233343536135=24183738,393A3B3C3D126F3E136=3F4041424344,4648137=4A4B,4E72138=51524C4D5345,545576567257139=4958595345,5A5B7612565C7713A=4F505D415E5F60,6162636413B=02676869,6A6B3E6D200=1601025D60,393B28292A11090A201=0103041A1B4A,123435360B6D202=011819681B4C1D061E,3D1014203=011718252F591D0D1E,1F20213233204=012C26,3C23205=493751522D2E69,121364223E2B206=503F4005311E,6A3A5A5B207=5841440C38,4615208=431C4D45,6B4E5648209=27534B45,545507086162125620A=16666730,0E0F635720B=0241425E5F1B,6C0A0B3E5C20C=02185D1B601E,393B28292A116E20D=171803041B4A,126F3435366D20E=7019684C1D06,3D101420F=4901252F591D0D,1F2021323378210=50012C26,3C23211=013751522D2E69,121364223E2B212=013F40053145,6A3A5A5B213=015841440C38,46156E214=16431C4D5345,6B4E5648215=27534B45,545507086162120B5648216=18671B30,0E0F6357217=02171841425E5F1B,3E5C218=025D60,393B28292A11219=4903041A1B4A,123435366D21A=5019681B4C1D061E,3D101421B=252F591D0D45,1F2021323321C=2C26,3C2321D=3751522D2E69,121364223E2B21E=163F40053145,6A3A5A5B21F=5841440C38,467147150B220=18431C4D5345,6B4E5648221=171827534B45,5455070861621256222=6730,0E0F6357223=490241425E5F1B,3E5C224=50025D1B601E,393B28292A11225=03041A4A,123435366D226=19684C1D061E,3D1014227=252F591D0D1E,1F20213233228=162C26,3C23229=3751522D2E69,121364220B3E2B22A=183F40053145,6A3A5A5B22B=17185841440C38,46157222C=431C4D53,6B4E564822D=490127534B45,54550708616212567922E=5001671B30,0E0F635722F=010241425E5F,3E5C230=01025D601E,393B28292A1174231=0103041A4A,1234353647726E6D232=1619684C1D061E,3D1014233=252F591D0D1E,1F202132330B75234=182C26,3C23235=17183751522D2E69,126F1364223E2B236=3F400531,6A3A5A5B237=495841440C38,461572238=50431C4D5345,6B4E76567248239=27534B45,5455070861627612567323A=6730,0E0F635723B=0241425E5F,3E5C300=0102415E5F1A1B69,090A471457301=011B05,6A125C302=5001185D19515203042F0C1D601E,323315303=4F490118251C1D1E,3C5A5B106D304=012C2706,1F20213B710B787A305=58372668300D,6B123E306=173F402D2E45,07086423307=00,393A0E2B308=24164142444A533145,61624622567B309=674C533845,28292A4E12135630A=431B594D,5455633435364830B=021B27,3D116C0A3E30C=500218415E5F1A1B691E,146E5730D=4F49181B05,6A126F5C30E=705D19515203042F0C1D60,3233150B30F=01251C1D,3C5A5B106D310=01172C2706,1F20213B7C311=0158372668300D,6B123E312=2416013F402D2E45,0708476423313=01,393A0E0F6E2B314=4142444A533145,61624622567D315=66671B4C533845,28292A4E121356316=5018431B594D,54556334353648317=4F4902181B4B,3D113E318=02415E5F1A69,140B57319=1B05,6A125C31A=175D19515203042F0C1D601E,32331531B=251C1D1E,3C5A5B106D31C=24162C2706,1F20213B31D=58372668300D,6B123E31E=3F402D2E45,0708642331F=00,393A0E0F2B320=50184142444A533145,61624622567E321=4F4918671B4C533845,28292A4E121356322=43594D,5455633435360B48323=021B4B,3D113E324=0217415E5F1A691E,1457325=05,6A125C326=58165D19515203042F0C1D601E,323315327=251C1D1E,3C5A5B106D328=2C2706,1F20213B75329=58372668300D,6B123E32A=50183F402D2E45,0708642332B=4F4918,393A0E0F722B32C=4142444A5331,616246220B567B32D=01671B4C533845,28292A4E12135632E=011743594D,5455633435364832F=01024B,3D113E330=24160102415E5F1A691E,741457331=0105,6A12726E5C332=5D19515203042F0C1D601E,32331572333=251C1D1E,3C5A5B106D334=50182C2706,1F20213B335=4F491858372668300D,6B126F3E336=3F402D2E,0708640B23337=00,393A0E0F722B338=174142444A533145,616246762256727B73339=674C533845,28292A4E7612135633A=241643594D,5455633435364833B=024B,3D113E400=5001431B,5A5B1248401=490141425E5F2F4B,32336314402=4F01024A1D1E,396B3C130B57403=01025803044C1D1E,07085C404=01183F5D5960,0E0F10127F405=171819,1F20213E6D788075406=162526690645,28292A407=242C2D2E050D,6162343536647B408=3767680C5345,6A3A3B3D12155623409=4041441C5345,46562B40A=501B274D31,4E1140B=4951521A1B3038,5455223E40C=4F431B1E,5A5B0981120B6E4840D=41425E5F2F4B,3233631440E=02184A1D,396B3C135740F=010217185803044C1D,0708475C410=16013F585960,0E0F1012411=240119,1F20213E6D412=012526690645,28292A413=012C2D2E050D,6162343536646E7B414=503767681B0C5345,6A3A3B3D126F155623415=494041441B1C5345,46562B416=4F1B274D31,4E11710B417=51521A1B3038,54556C81223E418=18431B,5A5B1248419=171841425E5F2F4B,3233631441A=16024A1D1E,396B3C135741B=24025844044C1D1E,07085C41C=3F5D5960,0E0F101241D=19,1F20213E6D41E=50702526690645,28292A41F=492C2D2E050D,6162343536647D420=4F663767681B0C5345,6A3A3B3D12150B5623421=4041441B1C5345,46562B422=181B274D31,4E11423=171851521A3038,5455223E424=16431E,5A5B1248425=2441425E5F2F4B,32336314426=024A1D1E,396B3C1357427=025803044C1D1E,07085C428=503F5D5960,0E0F10126F429=4919,1F20213E6D42A=4F2526690645,28292A0B8242B=2C2D2E050D,616234353664727E7342C=183767681B0C53,6A3A3B3D1215562342D=0117184041441C5345,4647562B42E=1601274D31,4E1142F=240151521A3038,5455223E430=01431E,5A5B761248431=0141425E5F2F4B,32336314726E432=50024A1D1E,396B3C137257433=49025844044C1D1E,0708745C434=4F3F5D5960,0E0F10120B435=19,1F20213E6D75436=1825266906,28292A82437=17182C2D2E050D,616234353664727B73438=163767680C5345,6A3A3B3D1215567223439=244041441C5345,46562B43A=274D31,4E1143B=51521A3038,545576223E83500=012F4D31,54550708323312501=01586938,0E0F3C63502=16010241435E5F051D1E,641448503=01020C1D4B1E,6A28292A353615220B504=0117183F03041C,123457505=181927,3D103E5C506=5D25306045,1F20213B616213507=492C2667,6D508=503751522D2E530645,1256509=401B4A530D45,393A5A5B115650A=4142441A1B4C,462350B=681B59,6B4E3E2B50C=162F4D311E,5455070832330981126E50D=586938,0E0F3C0B50E=02171841435E5F051D,64144850F=0102180C1D4B,6A28292A35361522510=013F03041C,123457511=49011927,3D103E5C512=50015D25306045,1F20213B616213513=012C26671B,6E6D514=3751522D2E1B530645,126F56515=401B4A530D45,393A5A5B1156516=164142441A1B4C,467123517=6859,6B4E6C810B3E2B518=17182F4D31,54550708323312519=18586938,0E0F3C6351A=0241435E5F051D1E,64144851B=49020C1D4B1E,6A28292A3536152251C=503F03041C,12345751D=1927,3D103E5C51E=705D25306045,1F20213B61621351F=2C26671B,6D520=163751522D2E1B530645,1256521=404A530D45,393A5A5B110B56522=17184142441A1B,4623523=186859,6B4E3E2B524=2F4D311E,54550708323312525=49586938,0E0F3C63526=500241435E5F051D1E,641448527=020C1D4B1E,6A28292A35361522528=3F03041C,126F344757529=1927,3D103E5C52A=165D25306045,1F20213B616213658452B=662C2667,0B726D52C=17183751522D2E1B5306,125652D=0118404A530D45,393A5A5B115652E=014142441A4C,462352F=49016859,6B4E3E2B530=50012F4D311E,545507083233761285531=01586938,0E0F3C63726E532=0241435E5F051D1E,64147248533=020C1D4B1E,6A28292A7435361522534=163F03041C,123457535=1927,3D100B3E5C536=16185D253060,1F20213B61621378537=182C2667,726D538=3751522D2E530645,125672539=49404A530D45,393A5A5B115653A=504142441A4C,46472353B=681B59,6B4E763E2B600=241601304D,3C28292A4E1235361423601=01,54553B63342B602=0102681D311E,3D603=010241425E5F4A1D381E,64604=01183F434C,39127148605=4F49181951520304594B,61620B3E73606=50256745,5A5B102257607=172C69,1F20215C608=5D37261B05536045,6B111256609=402D2E1A1B0C5345,6B11125660A=24161B1C06,6A3A0E0F1360B=5841442F270D,3233463E60C=304D1E,3C28292A4E0981123536146E2360D=00,54553B63342B60E=0218681D31,3D60F=4F4901021841425E5F4A1D38,640B610=50013F434C,391248611=01171951520304594B,61623E612=0125671B45,5A5B102257613=012C1B69,1F20216E5C614=24165D37261B05536045,6B11126F56615=402D2E1A1B0C5345,070815566D616=1C06,6A3A0E0F1347617=5841442F270D,3233466C813E618=18304D,3C28292A4E1235361423619=4F4918,54553B63340B2B61A=5002681D311E,3D61B=021741425E5F4A1D381E,6461C=3F434C,39124861D=1951520304594B,61623E61E=24167025671B45,5A5B10225761F=2C1B69,1F20215C620=5D372605536045,6B111256621=402D2E1A0C5345,070815566D622=181B1C06,6A3A0E0F13623=4F49185841442F270D,3233460B3E624=50304D1E,3C28292A4E1235361423625=17,54553B63342B626=02681D311E,3D627=0241425E5F4A1D381E,64628=24163F434C,39126F48629=1951520304594B,61623E62A=256745,5A5B1022578662B=2C69,1F2021725C7562C=185D37261B055360,6B11125662D=4F490118402D2E1A0C5345,0708150B566D62E=50011C06,6A3A0E0F1362F=01175841442F270D,3233463E630=01304D1E,3C28292A4E761235361423631=01,54553B6334726E2B87632=241602681D311E,3D72633=0241425E5F4A1D381E,7464634=3F434C,39124748635=1951520304594B,61623E6573636=661825671B,5A5B10225786637=4F49182C69,1F20210B725C75638=505D372605536045,6B11125672639=17402D2E1A0C5345,070815566D63A=1B1C06,6A3A0E0F1363B=5841442F270D,323346763E700=0103404142445906,46701=01020D,4E14702=50015152694D1D1E,54553B23703=4901051D1E,5A5B2B1288704=4F0102415E5F0C31,6162636415705=6667681C38,6A6B3E706=4303042745,07080B48707=02304B,0E0F101112708=16171819,1F20135657709=24185825261B5345,28292A353622565C70A=025D2C2D2E2F4A60,3233893470B=374C,393A3C3D3E6D70C=503F4041424459061E,466E70D=49020D,4E1470E=4F5152694D1D,54553B70F=01051D,5A5B12132B710=0102415E5F0C31,61626364150B65711=0167681C38,6A6B3E712=162417184303041B2745,070848713=240102181B304B,0E0F1011126E714=191A1B5345,1F20215657715=5825261B5345,28292A353622565C717=49374C,393A3C3D126F473E6D718=4F3F404142445906,46719=020D,4E1471A=515269,1D1E71B=051D1E,5A5B12132B71C=16021718415E5F0C31,616263641571D=241867681B1C38,6A6B3E71E=4303041B2745,07084871F=021B30,0E0F101112720=50191A5345,1F20215657721=495825265345,28292A353622565C722=4F025D2C2D2E2F4A60,32338934723=374C,393A3C3D123E6D724=3F4041424459061E,46098A0B725=020D,4E7114726=1617185152694D1D1E,54553B23727=2418051D1E,5A5B12132B728=02415E5F0C31,616263641573729=67681B1C38,6A6B3E72A=504303042745,07084872B=4902304B,0E0F1011126F7272C=4F70191A1B,1F2021565772D=015825265345,28292A353622565C72E=01025D2C2D2E2F4A60,323389340B72F=01374C,393A3C3D6C8A123E6D730=160117183F4041424459061E,46731=240102180D,4E14726E732=5152694D1D1E,54553B767223733=051D1E,5A5B7612132B77734=5002415E5F0C31,6162636415735=4967681C38,6A6B473E736=4F4303041B27,7448737=02304B,0E0F10111272738=191A5345,1F20210B56725775739=5825265345,28292A353622565C73A=160217185D2C2D2E2F4A60,3233893473B=2418374C,393A3C3D123E6D800=50013F5D402760,6A3A5A5B22801=490102414430,466D802=014D1D061E,6B4E4714803=011D0D1E,54550708616212804=0102671B4A,0E0F6323805=41425E5F4C,8B2B806=16593145,3928292A113536807=025803041A1B38,1234130B808=181943681B695345,3D105648809=1718252F0553534B45,1F20213B32335680A=50022C260C,3C155780B=493751522D2E1C,12643E5C80C=3F5D4027601E,6A3A5A5B226E80D=02414430,466D80E=4D1D06,6B4E1480F=011D0D,5455070861621279810=16010266674A,0E0F6323811=0141425E5F1B4C,0B3E2B812=01181B593145,3928292A113536813=010217185803041A1B38,1234136E814=501943681B695345,3D105648815=49252F05534B45,1F20213B323356816=022C260C,3C1557817=3751522D2E1C,126F643E5C818=3F5D402760,6A3A5A5B22819=02414430,466D81A=164D1D061E,6B4E1481B=1D0D1E,545507086162120B6581C=0218671B4A,0E0F632381D=171841425E5F1B4C,3E2B81E=501B593145,3928292A11353681F=49025D03041A38,123413820=194368695345,3D10475648821=252F05534B45,1F20213B323356716=50025D2C2D2E2F4A60,32338934822=022C260C,3C1557823=3751522D2E1C,12643E5C824=163F5D4027601E,6A3A5A5B098A22825=02414430,46710B6D826=184D1D061E,6B4E14827=17181D0D1E,54550708616212828=5002671B4A,0E0F6323829=4941425E5F4C,3E2B82A=593145,3928292A11353682B=025803041A38,126F34137282C=701943681B6953,3D10564882D=01252F05534B45,1F2021613233567882E=1601022C260C,3C155782F=013751522D2E1C,6C8A12640B3E5C830=01183F5D4027601E,6A3A5A5B22831=01021718414430,46726E6D832=504D1D061E,6B4E761472833=491D0D1E,545507086162761273834=02674A,0E0F6323835=41425E5F4C,3E2B836=1B5931,3928292A11743536837=025803041A38,12341372838=16194368695345,3D10567248839=252F05534B45,1F20213B32330B567583A=02182C260C,3C155783B=17183751522D2E1C,12643E5C900=013F408C2E4C,0708641457901=010259,393A0E0F5C902=2416015D4142441D601E,61624635367B903=0167691D1E,28292A4E126D904=01021B054D06,5455637134220B905=580C0D,3D11153E906=17415E5F1A1B1C45,23907=4F49021B27,6A3B12472B908=501819515203042F30533145,323356909=1825533845,3C5A5B105690A=022C43,1F2021487C90B=3726684A4B,6B12133E90C=24163F402D2E4C1E,070864146E5790D=0259,393A0E0F5C90E=5D4142441D60,61624635360B7B90F=0167691D,28292A4E126D910=0102171B054D06,5455633422911=4F4901581B0C0D,3D11153E912=500118415E5F1A1B1C45,23913=0102181B27,6A3B126E2B914=19515203042F30533145,323356915=25533845,3C5A5B1056916=2416022C43,1F202148917=3726684A4B,6B126F133E918=3F402D2E4C,070864140B57919=0259,393A0E0F5C91A=175D4142441D601E,61624635367D91B=4F4966671B691D1E,28292A4E126D91C=5002181B054D06,545563342291D=18581B0C0D,3D11153E91E=415E5F1A1C45,2391F=0227,6A3B122B920=241619515203042F305331,323356921=25533845,3C5A5B1056922=022C43,1F20210B48788D923=3726684A4B,6B12133E924=173F402D2E4C1E,0708098A641457925=4F49022E,393A0E0F475C926=50185D4142441D601E,61624635367E927=18671B691D1E,28292A4E126D928=02054D06,5455633422929=580C0D,3D11153E92A=2416415E5F1A1C45,2392B=0227,6A3B126F722B92C=7019515203042F305331,32330B5692D=0125533845,3C5A5B105692E=0102162C43,1F2021487592F=4F49013726684A4B,6B6C8A12133E930=5001183F402D2E4C1E,0708641457931=01021859,393A0E0F726E5C932=5D4142441D601E,616246763536727B73933=67691D1E,28292A4E76126D934=241602054D06,5455633422935=580C0D,3D11153E936=415E5F1A1B1C,740B23937=0227,6A3B12722B938=1719515203042F30533145,32335672939=4F4925533845,3C5A5B105693A=5002182C43,1F20214893B=183726684A4B,6B12133EA00=160170182543261C,28292A48A01=240117182C2D2E274B,61623464147BA02=013F376768301D1E,6A3A3D1257A03=01584041441D1E,465CA04=015D4D60,4E1113A05=4951521A1B4A,54553E6DA06=4F501B4C0645,5A5B12A07=41425E5F2F590D,32336322A08=025345,396B3C0B5623A09=020304695345,0708562BA0A=16180531,0E0F10126FA0B=241618190C38,1F20213B3536103EA0C=2543261C1E,28292A6E48A0D=2C2D2E274B,61623464147BA0E=3F376768301D,6A3A3D124757A0F=4924584041441B1D,465CA10=4F50015D1B4D60,4E1113A11=0151521A1B4A,54553E6DA12=011B4C0645,5A5B120BA13=0141425E5F2F590D,323363226EA14=1602185345,396B3C5623A15=240217180304695345,0708562BA16=0531,0E0F1012A17=190C38,1F20213B3536153EA18=2543261C,28292A4882A19=49503F3767681B301D1E,6A3A3D1257A1A=4F503F3767681B301D1E,6A3A3D1257A1B=584041441B1D1E,465CA1C=5D1B4D60,4E1171130BA1D=51521A1B4A,54553E6DA1E=16184C0645,5A5B12A1F=24171841425E5F2F590D,32336322A20=025345,396B3C5623A21=020304695345,0708562BA22=0531,0E0F10128EA23=49190C38,1F20213B3536153E788FA24=4F502543261C1E,28292A48A25=2C2D2E274B,61623464147DA26=663F3767681B301D1E,6A3A3D120B57A27=584041441B1D1E,465CA28=16185D4D60,4E1113A29=24171851521A4A,54553E6DA2A=4C0645,5A5B7612A2B=41425E5F2F590D,3233632272A2C=0253,396B3C475623A2D=1601020304695345,0708562BA2E=4F50010531,0E0F1012A2F=01190C38,1F20213B3536153EA30=012543261C1E,28292A09900B4882A31=012C2D2E274B,6162346414726E7E73A32=16183F376768301D1E,6A3A3D126F7257A33=2417185D4041441D1E,465CA34=5D4D60,4E1113A35=51521A4A,5455763E6D83A36=4C06,5A5B12A37=4941425E5F2F590D,3233632272A38=4F50029145,396B3C567223A39=020304695345,070874562BA3A=0531,0E0F10120BA3B=190C38,1F20213B6C903536153E75B00=01701718254A31,1F20216162B01=0118582C26,674C38B02=50013F375152432D2E591D1E,121448B03=4901401B1D4B1E,393A5B11B04=014142441A69,4657B05=681B05,6B4E3E5CB06=682F0C4D6045,5455070832331215B07=1C,0E0F3C636DB08=1602415E5F27530645,3536136456B09=0230530D45,6A28292A0B56B0A=17180304,126F342223B0B=1819,3D103E2BB0C=50254A311E,1F202161626EB0D=49582C26,671B4C38B0E=3F375152432D2E591D,121448B0F=01401B1D4B,393A3B5A5B11B10=014142441A1B69,4657B11=01681B05,6B4E3E5CB12=16015D2F0C4D6045,5455070832331215B13=011C,0E0F3C630B6E6DB14=021718415E5F27530645,3536136456B15=021830530D45,6A28292A56B16=500304,12342223B17=4919,3D103E2BB18=254A31,1F4E21616278B19=582C26,671B4C38B1A=3F375152432D2E1B591D1E,121448B1B=401B1D4B1E,393A3B5A5B1147B1C=164142441A1B69,467157B1D=6805,6B4E0B3E5CB1E=17185D2F0C926045,5455070832331215B1F=181C,0E0F3C636DB20=5002415E5F27530645,3536136456B21=490230530D45,6A28292A56B22=0304,12342223B23=19,3D103E2BB24=254A311E,1F20136162B25=582C26671B4C38,00B26=163F375152432D2E1B591D1E,121448B27=401D4B1E,393A3B5A5B110BB28=17184142441A69,4657B29=186805,6B4E3E5CB2A=505D2F0C4D6045,54550708323376121585B2B=491C,0E0F3C63726DB2C=02415E5F275306,3536136456B2D=010230530D45,6A28292A56B2E=010304,12342223B2F=0119,3D103E2BB30=1601254A311E,1F2021616209906584B31=0166582C26674C38,0B726EB32=17183F375152432D2E591D1E,126F147248B33=18401D4B1E,393A3B5A5B11B34=504142441A69,4657B35=49681B05,6B4E763E5CB36=5D2F0C4D60,5455070832331215B37=1C,0E0F3C63726DB38=02415E5F27530645,353613645672B39=0230530D45,6A28292A744756B3A=160304,12342223B3B=19,3D106C900B3E2BC00=500170661825670C,5A5B1013141523C01=4F4901182C1C,1F2021222BC02=011637261B271D311E,6B1112C03=01402D2E1A1B311D381E,0708C04=0143,6A3A0E0F7148C05=41442F4B,32334635360B3EC06=24164A4D45,3C28292A4E1257C07=174C,545563345CC08=025D6859536045,3D56C09=0241425E5F5345,4764566DC0A=50186906,393B126FC0B=4F4918581951520304050D,61623EC0C=25671B0C1E,5A5B101314156E23C0D=2C1B1C,1F2021222BC0E=3F37264B1D31,6B1112C0F=01402D2E1A1B301D38,07080BC10=241601431B,6A3A0E0F48C11=011741442F4B,32334635363EC12=014A4D45,3C28292A4E1257C13=014C,545563346E5CC14=5002185D6804536045,3D56C15=4F49021841425E5F5345,64566DC16=6906,393B12C17=581951524404050D,61623EC18=25670C,5A5B101314152386C19=2C1B1C,1F2021220B2BC1A=24163F37261B271D31,6B1112C1B=17402D2E1A1B301D381E,0708C1C=43,6A3A0E0F48C1D=41582F4B,32334635363EC1E=50184A4D45,3C28292A4E1257C1F=4F49184C,545563345CC20=025D6859536045,3D56C21=0241425E5F5345,64566DC22=6906,393B12C23=581951520304050D,61620B3EC24=241625671B0C1E,5A5B1013141523C25=172C1B1C,1F2021222BC26=3F3726271D311E,6B1112C27=402D2E1A301D381E,0708C28=501843,6A5B0E0F48C29=4F491841442F4B,32334635363EC2A=4A4D45,3C28292A4E761257C2B=4C,54556334725C93C2C=025D68595360,3D56C2D=010241425E5F5345,640B566DC2E=2416016906,393B12C2F=0117581951520304050D,61623EC30=0125670C,5A5B1009901314152386C31=012C1C,1F202122726E2B75C32=50183F3726271D311E,6B11126F72C33=4F4918402D2E1A301D381E,070847C34=431B,6A3A0E0F48C35=41442F4B,3233467635363EC36=4A4D,3C28292A4E1257C37=4C,545563340B725CC38=2416025D6859536045,3D5672C39=021741425E5F5345,7464566DC3A=6906,393B12C3B=581951520304050D,61626C903E6573",
                getTimeZhiIndex: function(t) {
                    if (!t) return 0;
                    t.length > 5 && (t = t.substr(0, 5));
                    for (var n = 1, e = 1; e < 22; e += 2) {
                        if (t >= (e < 10 ? "0" : "") + e + ":00" && t <= (e + 1 < 10 ? "0" : "") + (e + 1) + ":59") return n;
                        n++
                    }
                    return 0
                },
                convertTime: function(t) {
                    return this.ZHI[this.getTimeZhiIndex(t) + 1]
                },
                getJiaZiIndex: function(t) {
                    for (var n = 0, e = this.JIA_ZI.length; n < e; n++)
                        if (this.JIA_ZI[n] == t) return n;
                    return -1
                },
                hex: function(t) {
                    var n = t.toString(16);
                    return n.length < 2 && (n = "0" + n), n.toUpperCase()
                },
                getDayYi: function(t, n) {
                    for (var e = [], i = this.hex(this.getJiaZiIndex(n)), r = this.hex(this.getJiaZiIndex(t)), a = this.DAY_YI_JI, F = a.indexOf(i + "="); F > -1;) {
                        var h = a = a.substr(F + 3);
                        h.indexOf("=") > -1 && (h = h.substr(0, h.indexOf("=") - 2));
                        var u, C, o, A = !1,
                            E = h.substr(0, h.indexOf(":"));
                        for (u = 0, o = E.length; u < o; u += 2)
                            if ((C = E.substr(u, 2)) == r) {
                                A = !0;
                                break
                            }
                        if (A) {
                            var D = h.substr(h.indexOf(":") + 1);
                            for (u = 0, o = (D = D.substr(0, D.indexOf(","))).length; u < o; u += 2) C = D.substr(u, 2), e.push(this.YI_JI[parseInt(C, 16)]);
                            break
                        }
                        F = a.indexOf(i + "=")
                    }
                    return e.length < 1 && e.push("无"), e
                },
                getDayJi: function(t, n) {
                    for (var e = [], i = this.hex(this.getJiaZiIndex(n)), r = this.hex(this.getJiaZiIndex(t)), a = this.DAY_YI_JI, F = a.indexOf(i + "="); F > -1;) {
                        var h = a = a.substr(F + 3);
                        h.indexOf("=") > -1 && (h = h.substr(0, h.indexOf("=") - 2));
                        var u, C, o, A = !1,
                            E = h.substr(0, h.indexOf(":"));
                        for (u = 0, o = E.length; u < o; u += 2)
                            if ((C = E.substr(u, 2)) == r) {
                                A = !0;
                                break
                            }
                        if (A) {
                            var D = h.substr(h.indexOf(",") + 1);
                            for (u = 0, o = D.length; u < o; u += 2) C = D.substr(u, 2), e.push(this.YI_JI[parseInt(C, 16)]);
                            break
                        }
                        F = a.indexOf(i + "=")
                    }
                    return e.length < 1 && e.push("无"), e
                },
                getDayJiShen: function(t, n) {
                    var e = [],
                        i = this.hex(this.getJiaZiIndex(n)),
                        r = Math.abs(t).toString(16).toUpperCase(),
                        a = this.DAY_SHEN_SHA.indexOf(r + i + "=");
                    if (a > -1) {
                        var F = this.DAY_SHEN_SHA.substr(a + 4);
                        F.indexOf("=") > -1 && (F = F.substr(0, F.indexOf("=") - 3));
                        for (var h = F.substr(0, F.indexOf(",")), u = 0, C = h.length; u < C; u += 2) {
                            var o = h.substr(u, 2);
                            e.push(this.SHEN_SHA[parseInt(o, 16)])
                        }
                    }
                    return e.length < 1 && e.push("无"), e
                },
                getDayXiongSha: function(t, n) {
                    var e = [],
                        i = this.hex(this.getJiaZiIndex(n)),
                        r = Math.abs(t).toString(16).toUpperCase(),
                        a = this.DAY_SHEN_SHA.indexOf(r + i + "=");
                    if (a > -1) {
                        var F = this.DAY_SHEN_SHA.substr(a + 4);
                        F.indexOf("=") > -1 && (F = F.substr(0, F.indexOf("=") - 3));
                        for (var h = F.substr(F.indexOf(",") + 1), u = 0, C = h.length; u < C; u += 2) {
                            var o = h.substr(u, 2);
                            e.push(this.SHEN_SHA[parseInt(o, 16)])
                        }
                    }
                    return e.length < 1 && e.push("无"), e
                },
                getTimeYi: function(t, n) {
                    var e = [],
                        i = this.hex(this.getJiaZiIndex(t)),
                        r = this.hex(this.getJiaZiIndex(n)),
                        a = this.TIME_YI_JI.indexOf(i + r + "=");
                    if (a > -1) {
                        var F = this.TIME_YI_JI.substr(a + 5);
                        F.indexOf("=") > -1 && (F = F.substr(0, F.indexOf("=") - 4));
                        for (var h = F.substr(0, F.indexOf(",")), u = 0, C = h.length; u < C; u += 2) {
                            var o = h.substr(u, 2);
                            e.push(this.YI_JI[parseInt(o, 16)])
                        }
                    }
                    return e.length < 1 && e.push("无"), e
                },
                getTimeJi: function(t, n) {
                    var e = [],
                        i = this.hex(this.getJiaZiIndex(t)),
                        r = this.hex(this.getJiaZiIndex(n)),
                        a = this.TIME_YI_JI.indexOf(i + r + "=");
                    if (a > -1) {
                        var F = this.TIME_YI_JI.substr(a + 5);
                        F.indexOf("=") > -1 && (F = F.substr(0, F.indexOf("=") - 4));
                        for (var h = F.substr(F.indexOf(",") + 1), u = 0, C = h.length; u < C; u += 2) {
                            var o = h.substr(u, 2);
                            e.push(this.YI_JI[parseInt(o, 16)])
                        }
                    }
                    return e.length < 1 && e.push("无"), e
                },
                getXunIndex: function(t) {
                    var n, e, i = t.substr(0, 1),
                        r = t.substr(1),
                        a = 0,
                        F = 0;
                    for (n = 0, e = this.GAN.length; n < e; n++)
                        if (this.GAN[n] === i) {
                            a = n;
                            break
                        }
                    for (n = 0, e = this.ZHI.length; n < e; n++)
                        if (this.ZHI[n] === r) {
                            F = n;
                            break
                        }
                    var h = a - F;
                    return h < 0 && (h += 12), h / 2
                },
                getXun: function(t) {
                    return this.XUN[this.getXunIndex(t)]
                },
                getXunKong: function(t) {
                    return this.XUN_KONG[this.getXunIndex(t)]
                }
            },
            V = (e = ["元旦节", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节", "国庆中秋", "抗战胜利日"], i = 18, r = "0".charCodeAt(0), a = e, F = "200112290020020101200112300020020101200201010120020101200201020120020101200201030120020101200202091020020212200202101020020212200202121120020212200202131120020212200202141120020212200202151120020212200202161120020212200202171120020212200202181120020212200204273020020501200204283020020501200205013120020501200205023120020501200205033120020501200205043120020501200205053120020501200205063120020501200205073120021001200209286020021001200209296020021001200210016120021001200210026120021001200210036120021001200210046120021001200210056120021001200210066120021001200210076120021001200301010120030101200302011120030201200302021120030201200302031120030201200302041120030201200302051120030201200302061120030201200302071120030201200302081020030201200302091020030201200304263020030501200304273020030501200305013120030501200305023120030501200305033120030501200305043120030501200305053120030501200305063120030501200305073120031001200309276020031001200309286020031001200310016120031001200310026120031001200310036120031001200310046120031001200310056120031001200310066120031001200310076120031001200401010120040101200401171020040122200401181020040122200401221120040122200401231120040122200401241120040122200401251120040122200401261120040122200401271120040122200401281120040122200405013120040501200405023120040501200405033120040501200405043120040501200405053120040501200405063120040501200405073120041001200405083020040501200405093020040501200410016120041001200410026120041001200410036120041001200410046120041001200410056120041001200410066120041001200410076120041001200410096020041001200410106020041001200501010120050101200501020120050101200501030120050101200502051020050209200502061020050209200502091120050209200502101120050209200502111120050209200502121120050209200502131120050209200502141120050209200502151120050209200504303020050501200505013120050501200505023120050501200505033120050501200505043120050501200505053120050501200505063120050501200505073120051001200505083020050501200510016120051001200510026120051001200510036120051001200510046120051001200510056120051001200510066120051001200510076120051001200510086020051001200510096020051001200512310020060101200601010120060101200601020120060101200601030120060101200601281020060129200601291120060129200601301120060129200601311120060129200602011120060129200602021120060129200602031120060129200602041120060129200602051020060129200604293020060501200604303020060501200605013120060501200605023120060501200605033120060501200605043120060501200605053120060501200605063120060501200605073120061001200609306020061001200610016120061001200610026120061001200610036120061001200610046120061001200610056120061001200610066120061001200610076120061001200610086020061001200612300020070101200612310020070101200701010120070101200701020120070101200701030120070101200702171020070218200702181120070218200702191120070218200702201120070218200702211120070218200702221120070218200702231120070218200702241120070218200702251020070218200704283020070501200704293020070501200705013120070501200705023120070501200705033120070501200705043120070501200705053120070501200705063120070501200705073120070501200709296020071001200709306020071001200710016120071001200710026120071001200710036120071001200710046120071001200710056120071001200710066120071001200710076120071001200712290020080101200712300120080101200712310120080101200801010120080101200802021020080206200802031020080206200802061120080206200802071120080206200802081120080206200802091120080206200802101120080206200802111120080206200802121120080206200804042120080404200804052120080404200804062120080404200805013120080501200805023120080501200805033120080501200805043020080501200806074120080608200806084120080608200806094120080608200809135120080914200809145120080914200809155120080914200809276020081001200809286020081001200809296120081001200809306120081001200810016120081001200810026120081001200810036120081001200810046120081001200810056120081001200901010120090101200901020120090101200901030120090101200901040020090101200901241020090125200901251120090125200901261120090125200901271120090125200901281120090125200901291120090125200901301120090125200901311120090125200902011020090125200904042120090404200904052120090404200904062120090404200905013120090501200905023120090501200905033120090501200905284120090528200905294120090528200905304120090528200905314020090528200909276020091001200910016120091001200910026120091001200910036120091001200910046120091001200910055120091003200910065120091003200910075120091003200910085120091003200910105020091003201001010120100101201001020120100101201001030120100101201002131120100213201002141120100213201002151120100213201002161120100213201002171120100213201002181120100213201002191120100213201002201020100213201002211020100213201004032120100405201004042120100405201004052120100405201005013120100501201005023120100501201005033120100501201006124020100616201006134020100616201006144120100616201006154120100616201006164120100616201009195020100922201009225120100922201009235120100922201009245120100922201009255020100922201009266020101001201010016120101001201010026120101001201010036120101001201010046120101001201010056120101001201010066120101001201010076120101001201010096020101001201101010120110101201101020120110101201101030120110101201101301020110203201102021120110203201102031120110203201102041120110203201102051120110203201102061120110203201102071120110203201102081120110203201102121020110203201104022020110405201104032120110405201104042120110405201104052120110405201104303120110501201105013120110501201105023120110501201106044120110606201106054120110606201106064120110606201109105120110912201109115120110912201109125120110912201110016120111001201110026120111001201110036120111001201110046120111001201110056120111001201110066120111001201110076120111001201110086020111001201110096020111001201112310020120101201201010120120101201201020120120101201201030120120101201201211020120123201201221120120123201201231120120123201201241120120123201201251120120123201201261120120123201201271120120123201201281120120123201201291020120123201203312020120404201204012020120404201204022120120404201204032120120404201204042120120404201204283020120501201204293120120501201204303120120501201205013120120501201205023020120501201206224120120623201206234120120623201206244120120623201209295020120930201209305120120930201210016120121001201210026120121001201210036120121001201210046120121001201210056120121001201210066120121001201210076120121001201210086020121001201301010120130101201301020120130101201301030120130101201301050020130101201301060020130101201302091120130210201302101120130210201302111120130210201302121120130210201302131120130210201302141120130210201302151120130210201302161020130210201302171020130210201304042120130404201304052120130404201304062120130404201304273020130501201304283020130501201304293120130501201304303120130501201305013120130501201306084020130612201306094020130612201306104120130612201306114120130612201306124120130612201309195120130919201309205120130919201309215120130919201309225020130919201309296020131001201310016120131001201310026120131001201310036120131001201310046120131001201310056120131001201310066120131001201310076120131001201401010120140101201401261020140131201401311120140131201402011120140131201402021120140131201402031120140131201402041120140131201402051120140131201402061120140131201402081020140131201404052120140405201404062120140405201404072120140405201405013120140501201405023120140501201405033120140501201405043020140501201405314120140602201406014120140602201406024120140602201409065120140908201409075120140908201409085120140908201409286020141001201410016120141001201410026120141001201410036120141001201410046120141004201410056120141001201410066120141001201410076120141001201410116020141001201501010120150101201501020120150101201501030120150101201501040020150101201502151020150219201502181120150219201502191120150219201502201120150219201502211120150219201502221120150219201502231120150219201502241120150219201502281020150219201504042120150405201504052120150405201504062120150405201505013120150501201505023120150501201505033120150501201506204120150620201506214120150620201506224120150620201509038120150903201509048120150903201509058120150903201509068020150903201509265120150927201509275120150927201510016120151001201510026120151001201510036120151001201510046120151004201510056120151001201510066120151001201510076120151001201510106020151001201601010120160101201601020120160101201601030120160101201602061020160208201602071120160208201602081120160208201602091120160208201602101120160208201602111120160208201602121120160208201602131120160208201602141020160208201604022120160404201604032120160404201604042120160404201604303120160501201605013120160501201605023120160501201606094120160609201606104120160609201606114120160609201606124020160609201609155120160915201609165120160915201609175120160915201609185020160915201610016120161001201610026120161001201610036120161001201610046120161001201610056120161001201610066120161001201610076120161001201610086020161001201610096020161001201612310120170101201701010120170101201701020120170101201701221020170128201701271120170128201701281120170128201701291120170128201701301120170128201701311120170128201702011120170128201702021120170128201702041020170128201704012020170404201704022120170404201704032120170404201704042120170404201704293120170501201704303120170501201705013120170501201705274020170530201705284120170530201705294120170530201705304120170530201709306020171001201710016120171001201710026120171001201710036120171001201710045120171004201710056120171001201710066120171001201710076120171001201710086120171001201712300120180101201712310120180101201801010120180101201802111020180216201802151120180216201802161120180216201802171120180216201802181120180216201802191120180216201802201120180216201802211120180216201802241020180216201804052120180405201804062120180405201804072120180405201804082020180405201804283020180501201804293120180501201804303120180501201805013120180501201806164120180618201806174120180618201806184120180618201809225120180924201809235120180924201809245120180924201809296020181001201809306020181001201810016120181001201810026120181001201810036120181001201810046120181001201810056120181001201810066120181001201810076120181001201812290020190101201812300120190101201812310120190101201901010120190101201902021020190205201902031020190205201902041120190205201902051120190205201902061120190205201902071120190205201902081120190205201902091120190205201902101120190205201904052120190405201904062120190405201904072120190405201904283020190501201905013120190501201905023120190501201905033120190501201905043120190501201905053020190501201906074120190607201906084120190607201906094120190607201909135120190913201909145120190913201909155120190913201909296020191001201910016120191001201910026120191001201910036120191001201910046120191001201910056120191001201910066120191001201910076120191001201910126020191001202001010120200101202001191020200125202001241120200125202001251120200125202001261120200125202001271120200125202001281120200125202001291120200125202001301120200125202001311120200125202002011120200125202002021120200125202004042120200404202004052120200404202004062120200404202004263020200501202005013120200501202005023120200501202005033120200501202005043120200501202005053120200501202005093020200501202006254120200625202006264120200625202006274120200625202006284020200625202009277020201001202010017120201001202010026120201001202010036120201001202010046120201001202010056120201001202010066120201001202010076120201001202010086120201001202010106020201001202101010120210101202101020120210101202101030120210101202102071020210212202102111120210212202102121120210212202102131120210212202102141120210212202102151120210212202102161120210212202102171120210212202102201020210212202104032120210404202104042120210404202104052120210404202104253020210501202105013120210501202105023120210501202105033120210501202105043120210501202105053120210501202105083020210501202106124120210614202106134120210614202106144120210614202109185020210921202109195120210921202109205120210921202109215120210921202109266020211001202110016120211001202110026120211001202110036120211001202110046120211001202110056120211001202110066120211001202110076120211001202110096020211001202201010120220101202201020120220101202201030120220101202201291020220201202201301020220201202201311120220201202202011120220201202202021120220201202202031120220201202202041120220201202202051120220201202202061120220201202204022020220405202204032120220405202204042120220405202204052120220405202204243020220501202204303120220501202205013120220501202205023120220501202205033120220501202205043120220501202205073020220501202206034120220603202206044120220603202206054120220603202209105120220910202209115120220910202209125120220910202210016120221001202210026120221001202210036120221001202210046120221001202210056120221001202210066120221001202210076120221001202210086020221001202210096020221001", h = function(t) {
                return (t < 10 ? "0" : "") + t
            }, u = function(t) {
                return t.indexOf("-") < 0 ? t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6) : t
            }, C = function(t, n, e, i) {
                return {
                    _p: {
                        day: u(t),
                        name: n,
                        work: e,
                        target: u(i)
                    },
                    getDay: function() {
                        return this._p.day
                    },
                    setDay: function(t) {
                        this._p.day = u(t)
                    },
                    getName: function() {
                        return this._p.name
                    },
                    setName: function(t) {
                        this._p.name = t
                    },
                    isWork: function() {
                        return this._p.work
                    },
                    setWork: function(t) {
                        this._p.work = t
                    },
                    getTarget: function() {
                        return this._p.target
                    },
                    setTarget: function(t) {
                        this._p.target = u(t)
                    },
                    toString: function() {
                        return this._p.day + " " + this._p.name + (this._p.work ? "调休" : "") + " " + this._p.target
                    }
                }
            }, o = function(t) {
                var n = t.substr(0, 8),
                    e = a[t.charCodeAt(8) - r],
                    i = t.charCodeAt(9) === r,
                    F = t.substr(10, 8);
                return C(n, e, i, F)
            }, A = function(t) {
                var n = t.length,
                    e = t.substr(n - 18, 8),
                    i = a[t.charCodeAt(n - 10) - r],
                    F = t.charCodeAt(n - 9) === r,
                    h = t.substr(n - 8);
                return C(e, i, F, h)
            }, E = function(t) {
                var n = [],
                    e = function(t) {
                        var n = F.indexOf(t);
                        if (n < 0) return null;
                        var e = F.substr(n),
                            r = e.length % i;
                        for (r > 0 && (e = e.substr(r)); 0 !== e.indexOf(t) && e.length >= i;) e = e.substr(i);
                        return e
                    }(t);
                if (null == e) return n;
                for (; 0 === e.indexOf(t);) n.push(o(e)), e = e.substr(i);
                return n
            }, D = function(t) {
                var n = [],
                    e = function(t) {
                        var n = F.lastIndexOf(t);
                        if (n < 0) return null;
                        var e = t.length,
                            r = F.substr(0, n + e),
                            a = r.length,
                            h = a % i;
                        for (h > 0 && (r = r.substr(0, a - h)), a = r.length; a - e !== r.lastIndexOf(t) && a >= i;) a = (r = r.substr(0, a - i)).length;
                        return r
                    }(t);
                if (null == e) return n;
                for (var r = e.length, a = t.length; r - a === e.lastIndexOf(t);) n.push(A(e)), r = (e = e.substr(0, r - i)).length;
                return n.reverse(), n
            }, s = function(t) {
                var n = [];
                switch (t.length) {
                    case 1:
                        n = E(t[0].replace(/-/g, ""));
                        break;
                    case 3:
                        n = E(t[0] + h(t[1]) + h(t[2]))
                }
                return n.length < 1 ? null : n[0]
            }, g = function(t) {
                var n = [];
                switch (t.length) {
                    case 1:
                        n = E((t[0] + "").replace(/-/g, ""));
                        break;
                    case 2:
                        n = E(t[0] + h(t[1]))
                }
                return n
            }, B = function(t) {
                var n = [];
                switch (t.length) {
                    case 1:
                        n = D((t[0] + "").replace(/-/g, ""));
                        break;
                    case 3:
                        n = D(t[0] + h(t[1]) + h(t[2]))
                }
                return n
            }, _ = function(t) {
                if (t) {
                    for (var n = []; t.length >= i;) {
                        var e = t.substr(0, i),
                            h = e.substr(0, 8),
                            u = "~" == e.substr(8, 1),
                            C = s([h]);
                        if (C) {
                            for (var o = -1, A = 0, E = a.length; A < E; A++)
                                if (a[A] === C.getName()) {
                                    o = A;
                                    break
                                }
                            if (o > -1) {
                                var D = h + String.fromCharCode(o + r) + (C.isWork() ? "0" : "1") + C.getTarget().replace(/-/g, "");
                                F = F.replace(new RegExp(D, "g"), u ? "" : e)
                            }
                        } else u || n.push(e);
                        t = t.substr(i)
                    }
                    n.length > 0 && (F += n.join(""))
                }
            }, c = function(t) {
                switch (t.length) {
                    case 1:
                        _(t[0]);
                        break;
                    case 2:
                        (n = t[0]) && (a = n), _(t[1])
                }
                var n
            }, {
                NAMES: e,
                getHoliday: function() {
                    return s(arguments)
                },
                getHolidays: function() {
                    return g(arguments)
                },
                getHolidaysByTarget: function() {
                    return B(arguments)
                },
                fix: function() {
                    c(arguments)
                }
            }),
            q = {
                NUMBER: ["一", "二", "三", "四", "五", "六", "七", "八", "九"],
                COLOR: ["白", "黒", "碧", "绿", "黄", "白", "赤", "白", "紫"],
                WU_XING: ["水", "土", "木", "木", "土", "金", "金", "土", "火"],
                POSITION: ["坎", "坤", "震", "巽", "中", "乾", "兑", "艮", "离"],
                NAME_BEI_DOU: ["天枢", "天璇", "天玑", "天权", "玉衡", "开阳", "摇光", "洞明", "隐元"],
                NAME_XUAN_KONG: ["贪狼", "巨门", "禄存", "文曲", "廉贞", "武曲", "破军", "左辅", "右弼"],
                NAME_QI_MEN: ["天蓬", "天芮", "天冲", "天辅", "天禽", "天心", "天柱", "天任", "天英"],
                BA_MEN_QI_MEN: ["休", "死", "伤", "杜", "", "开", "惊", "生", "景"],
                NAME_TAI_YI: ["太乙", "摄提", "轩辕", "招摇", "天符", "青龙", "咸池", "太阴", "天乙"],
                TYPE_TAI_YI: ["吉神", "凶神", "安神", "安神", "凶神", "吉神", "凶神", "吉神", "吉神"],
                SONG_TAI_YI: ["门中太乙明，星官号贪狼，赌彩财喜旺，婚姻大吉昌，出入无阻挡，参谒见贤良，此行三五里，黑衣别阴阳。", "门前见摄提，百事必忧疑，相生犹自可，相克祸必临，死门并相会，老妇哭悲啼，求谋并吉事，尽皆不相宜，只可藏隐遁，若动伤身疾。", "出入会轩辕，凡事必缠牵，相生全不美，相克更忧煎，远行多不利，博彩尽输钱，九天玄女法，句句不虚言。", "招摇号木星，当之事莫行，相克行人阻，阴人口舌迎，梦寐多惊惧，屋响斧自鸣，阴阳消息理，万法弗违情。", "五鬼为天符，当门阴女谋，相克无好事，行路阻中途，走失难寻觅，道逢有尼姑，此星当门值，万事有灾除。", "神光跃青龙，财气喜重重，投入有酒食，赌彩最兴隆，更逢相生旺，休言克破凶，见贵安营寨，万事总吉同。", "吾将为咸池，当之尽不宜，出入多不利，相克有灾情，赌彩全输尽，求财空手回，仙人真妙语，愚人莫与知，动用虚惊退，反复逆风吹。", "坐临太阴星，百祸不相侵，求谋悉成就，知交有觅寻，回风归来路，恐有殃伏起，密语中记取，慎乎莫轻行。", "迎来天乙星，相逢百事兴，运用和合庆，茶酒喜相迎，求谋并嫁娶，好合有天成，祸福如神验，吉凶甚分明。"],
                LUCK_XUAN_KONG: ["吉", "凶", "凶", "吉", "凶", "吉", "凶", "吉", "吉"],
                LUCK_QI_MEN: ["大凶", "大凶", "小吉", "大吉", "大吉", "大吉", "小凶", "小吉", "小凶"],
                YIN_YANG_QI_MEN: ["阳", "阴", "阳", "阳", "阳", "阴", "阴", "阳", "阴"],
                fromIndex: function(t) {
                    return function(t) {
                        return {
                            _p: {
                                index: t
                            },
                            getNumber: function() {
                                return q.NUMBER[this._p.index]
                            },
                            getColor: function() {
                                return q.COLOR[this._p.index]
                            },
                            getWuXing: function() {
                                return q.WU_XING[this._p.index]
                            },
                            getPosition: function() {
                                return q.POSITION[this._p.index]
                            },
                            getPositionDesc: function() {
                                return z.POSITION_DESC[this.getPosition()]
                            },
                            getNameInXuanKong: function() {
                                return q.NAME_XUAN_KONG[this._p.index]
                            },
                            getNameInBeiDou: function() {
                                return q.NAME_BEI_DOU[this._p.index]
                            },
                            getNameInQiMen: function() {
                                return q.NAME_QI_MEN[this._p.index]
                            },
                            getNameInTaiYi: function() {
                                return q.NAME_TAI_YI[this._p.index]
                            },
                            getLuckInQiMen: function() {
                                return q.LUCK_QI_MEN[this._p.index]
                            },
                            getLuckInXuanKong: function() {
                                return q.LUCK_XUAN_KONG[this._p.index]
                            },
                            getYinYangInQiMen: function() {
                                return q.YIN_YANG_QI_MEN[this._p.index]
                            },
                            getTypeInTaiYi: function() {
                                return q.TYPE_TAI_YI[this._p.index]
                            },
                            getBaMenInQiMen: function() {
                                return q.BA_MEN_QI_MEN[this._p.index]
                            },
                            getSongInTaiYi: function() {
                                return q.SONG_TAI_YI[this._p.index]
                            },
                            getIndex: function() {
                                return this._p.index
                            },
                            toString: function() {
                                return this.getNumber() + this.getColor() + this.getWuXing() + this.getNameInBeiDou()
                            },
                            toFullString: function() {
                                var t = this.getNumber();
                                return t += this.getColor(), t += this.getWuXing(), t += " ", t += this.getPosition(), t += "(", t += this.getPositionDesc(), t += ") ", t += this.getNameInBeiDou(), t += " 玄空[", t += this.getNameInXuanKong(), t += " ", t += this.getLuckInXuanKong(), t += "] 奇门[", t += this.getNameInQiMen(), t += " ", t += this.getLuckInQiMen(), this.getBaMenInQiMen().length > 0 && (t += " ", t += this.getBaMenInQiMen(), t += "门"), t += " ", t += this.getYinYangInQiMen(), t += "] 太乙[", t += this.getNameInTaiYi(), t += " ", (t += this.getTypeInTaiYi()) + "]"
                            }
                        }
                    }(t)
                }
            },
            $ = (f = {
                "甲": 1,
                "丙": 10,
                "戊": 10,
                "庚": 7,
                "壬": 4,
                "乙": 6,
                "丁": 9,
                "己": 9,
                "辛": 0,
                "癸": 3
            }, {
                MONTH_ZHI: ["", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"],
                CHANG_SHENG: ["长生", "沐浴", "冠带", "临官", "帝旺", "衰", "病", "死", "墓", "绝", "胎", "养"],
                fromLunar: function(t) {
                    return function(t) {
                        return {
                            _p: {
                                sect: 2,
                                lunar: t
                            },
                            setSect: function(t) {
                                this._p.sect = 1 == t ? 1 : 2
                            },
                            getSect: function() {
                                return this._p.sect
                            },
                            getDayGanIndex: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayGanIndexExact2() : this._p.lunar.getDayGanIndexExact()
                            },
                            getDayZhiIndex: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayZhiIndexExact2() : this._p.lunar.getDayZhiIndexExact()
                            },
                            getYear: function() {
                                return this._p.lunar.getYearInGanZhiExact()
                            },
                            getYearGan: function() {
                                return this._p.lunar.getYearGanExact()
                            },
                            getYearZhi: function() {
                                return this._p.lunar.getYearZhiExact()
                            },
                            getYearHideGan: function() {
                                return z.ZHI_HIDE_GAN[this.getYearZhi()]
                            },
                            getYearWuXing: function() {
                                return z.WU_XING_GAN[this.getYearGan()] + z.WU_XING_ZHI[this.getYearZhi()]
                            },
                            getYearNaYin: function() {
                                return z.NAYIN[this.getYear()]
                            },
                            getYearShiShenGan: function() {
                                return z.SHI_SHEN_GAN[this.getDayGan() + this.getYearGan()]
                            },
                            getYearShiShenZhi: function() {
                                for (var t = this.getDayGan(), n = this.getYearZhi(), e = z.ZHI_HIDE_GAN[n], i = [], r = 0, a = e.length; r < a; r++) i.push(z.SHI_SHEN_ZHI[t + n + e[r]]);
                                return i
                            },
                            _getDiShi: function(t) {
                                var n = f[this.getDayGan()] + (this.getDayGanIndex() % 2 == 0 ? t : -t);
                                return n >= 12 && (n -= 12), n < 0 && (n += 12), $.CHANG_SHENG[n]
                            },
                            getYearDiShi: function() {
                                return this._getDiShi(this._p.lunar.getYearZhiIndexExact())
                            },
                            getYearXun: function() {
                                return this._p.lunar.getYearXunExact()
                            },
                            getYearXunKong: function() {
                                return this._p.lunar.getYearXunKongExact()
                            },
                            getMonth: function() {
                                return this._p.lunar.getMonthInGanZhiExact()
                            },
                            getMonthGan: function() {
                                return this._p.lunar.getMonthGanExact()
                            },
                            getMonthZhi: function() {
                                return this._p.lunar.getMonthZhiExact()
                            },
                            getMonthHideGan: function() {
                                return z.ZHI_HIDE_GAN[this.getMonthZhi()]
                            },
                            getMonthWuXing: function() {
                                return z.WU_XING_GAN[this.getMonthGan()] + z.WU_XING_ZHI[this.getMonthZhi()]
                            },
                            getMonthNaYin: function() {
                                return z.NAYIN[this.getMonth()]
                            },
                            getMonthShiShenGan: function() {
                                return z.SHI_SHEN_GAN[this.getDayGan() + this.getMonthGan()]
                            },
                            getMonthShiShenZhi: function() {
                                for (var t = this.getDayGan(), n = this.getMonthZhi(), e = z.ZHI_HIDE_GAN[n], i = [], r = 0, a = e.length; r < a; r++) i.push(z.SHI_SHEN_ZHI[t + n + e[r]]);
                                return i
                            },
                            getMonthDiShi: function() {
                                return this._getDiShi(this._p.lunar.getMonthZhiIndexExact())
                            },
                            getMonthXun: function() {
                                return this._p.lunar.getMonthXunExact()
                            },
                            getMonthXunKong: function() {
                                return this._p.lunar.getMonthXunKongExact()
                            },
                            getDay: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayInGanZhiExact2() : this._p.lunar.getDayInGanZhiExact()
                            },
                            getDayGan: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayGanExact2() : this._p.lunar.getDayGanExact()
                            },
                            getDayZhi: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayZhiExact2() : this._p.lunar.getDayZhiExact()
                            },
                            getDayHideGan: function() {
                                return z.ZHI_HIDE_GAN[this.getDayZhi()]
                            },
                            getDayWuXing: function() {
                                return z.WU_XING_GAN[this.getDayGan()] + z.WU_XING_ZHI[this.getDayZhi()]
                            },
                            getDayNaYin: function() {
                                return z.NAYIN[this.getDay()]
                            },
                            getDayShiShenGan: function() {
                                return "日主"
                            },
                            getDayShiShenZhi: function() {
                                for (var t = this.getDayGan(), n = this.getDayZhi(), e = z.ZHI_HIDE_GAN[n], i = [], r = 0, a = e.length; r < a; r++) i.push(z.SHI_SHEN_ZHI[t + n + e[r]]);
                                return i
                            },
                            getDayDiShi: function() {
                                return this._getDiShi(this.getDayZhiIndex())
                            },
                            getDayXun: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayXunExact2() : this._p.lunar.getDayXunExact()
                            },
                            getDayXunKong: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayXunKongExact2() : this._p.lunar.getDayXunKongExact()
                            },
                            getTime: function() {
                                return this._p.lunar.getTimeInGanZhi()
                            },
                            getTimeGan: function() {
                                return this._p.lunar.getTimeGan()
                            },
                            getTimeZhi: function() {
                                return this._p.lunar.getTimeZhi()
                            },
                            getTimeHideGan: function() {
                                return z.ZHI_HIDE_GAN[this.getTimeZhi()]
                            },
                            getTimeWuXing: function() {
                                return z.WU_XING_GAN[this.getTimeGan()] + z.WU_XING_ZHI[this.getTimeZhi()]
                            },
                            getTimeNaYin: function() {
                                return z.NAYIN[this.getTime()]
                            },
                            getTimeShiShenGan: function() {
                                return z.SHI_SHEN_GAN[this.getDayGan() + this.getTimeGan()]
                            },
                            getTimeShiShenZhi: function() {
                                for (var t = this.getDayGan(), n = this.getTimeZhi(), e = z.ZHI_HIDE_GAN[n], i = [], r = 0, a = e.length; r < a; r++) i.push(z.SHI_SHEN_ZHI[t + n + e[r]]);
                                return i
                            },
                            getTimeDiShi: function() {
                                return this._getDiShi(this._p.lunar.getTimeZhiIndex())
                            },
                            getTimeXun: function() {
                                return this._p.lunar.getTimeXun()
                            },
                            getTimeXunKong: function() {
                                return this._p.lunar.getTimeXunKong()
                            },
                            getTaiYuan: function() {
                                var t = this._p.lunar.getMonthGanIndexExact() + 1;
                                t >= 10 && (t -= 10);
                                var n = this._p.lunar.getMonthZhiIndexExact() + 3;
                                return n >= 12 && (n -= 12), z.GAN[t + 1] + z.ZHI[n + 1]
                            },
                            getTaiYuanNaYin: function() {
                                return z.NAYIN[this.getTaiYuan()]
                            },
                            getTaiXi: function() {
                                var t = this._p.lunar,
                                    n = 2 == sect ? t.getDayGanIndexExact2() : t.getDayGanIndexExact(),
                                    e = 2 == sect ? t.getDayZhiIndexExact2() : t.getDayZhiIndexExact();
                                return z.HE_GAN_5[n] + z.HE_ZHI_6[e]
                            },
                            getTaiXiNaYin: function() {
                                return z.NAYIN[this.getTaiXi()]
                            },
                            getMingGong: function() {
                                for (var n = 0, e = 0, i = 0, r = $.MONTH_ZHI.length; i < r; i++) {
                                    var a = $.MONTH_ZHI[i];
                                    t.getMonthZhiExact() === a && (n = i), t.getTimeZhi() === a && (e = i)
                                }
                                var F = 26 - (n + e);
                                F > 12 && (F -= 12);
                                var h = z.getJiaZiIndex(t.getMonthInGanZhiExact()) - (n - F);
                                return h >= 60 && (h -= 60), h < 0 && (h += 60), z.JIA_ZI[h]
                            },
                            getMingGongNaYin: function() {
                                return z.NAYIN[this.getMingGong()]
                            },
                            getShenGong: function() {
                                for (var n = 0, e = 0, i = 0, r = $.MONTH_ZHI.length; i < r; i++) {
                                    var a = $.MONTH_ZHI[i];
                                    t.getMonthZhiExact() === a && (n = i), t.getTimeZhi() === a && (e = i)
                                }
                                var F = 2 + n + e;
                                F > 12 && (F -= 12);
                                var h = z.getJiaZiIndex(t.getMonthInGanZhiExact()) - (n - F);
                                return h >= 60 && (h -= 60), h < 0 && (h += 60), z.JIA_ZI[h]
                            },
                            getShenGongNaYin: function() {
                                return z.NAYIN[this.getShenGong()]
                            },
                            getLunar: function() {
                                return this._p.lunar
                            },
                            getYun: function(t, n) {
                                n = 2 == n ? n : 1;
                                var e = this.getLunar(),
                                    i = 0 == e.getYearGanIndexExact() % 2,
                                    r = 1 === t,
                                    a = i && r || !i && !r,
                                    F = function() {
                                        var t, i, r, F = e.getPrevJie(),
                                            h = e.getNextJie(),
                                            u = e.getSolar(),
                                            C = a ? u : F.getSolar(),
                                            o = a ? h.getSolar() : u,
                                            A = 0;
                                        if (2 === n) {
                                            var E = Math.floor((o.getCalendar() - C.getCalendar()) / 6e4);
                                            E -= 4320 * (t = Math.floor(E / 4320)), E -= 360 * (i = Math.floor(E / 360)), A = 2 * (E -= 12 * (r = Math.floor(E / 12)))
                                        } else {
                                            var D = (23 === o.getHour() ? 11 : z.getTimeZhiIndex(o.toYmdHms().substr(11, 5))) - (23 === C.getHour() ? 11 : z.getTimeZhiIndex(C.toYmdHms().substr(11, 5))),
                                                s = P.getDaysBetweenYmd(C.getYear(), C.getMonth(), C.getDay(), o.getYear(), o.getMonth(), o.getDay());
                                            D < 0 && (D += 12, s--);
                                            var g = Math.floor(10 * D / 30);
                                            i = 4 * s + g, r = 10 * D - 30 * g, i -= 12 * (t = Math.floor(i / 12))
                                        }
                                        return {
                                            year: t,
                                            month: i,
                                            day: r,
                                            hour: A
                                        }
                                    }(),
                                    h = function(t, n) {
                                        return {
                                            _p: {
                                                index: n,
                                                liuNian: t
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getMonthInChinese: function() {
                                                return z.MONTH[this._p.index + 1]
                                            },
                                            getGanZhi: function() {
                                                var n = 0,
                                                    e = t.getGanZhi().substr(0, 1);
                                                return "甲" === e || "己" === e ? n = 2 : "乙" === e || "庚" === e ? n = 4 : "丙" === e || "辛" === e ? n = 6 : "丁" !== e && "壬" !== e || (n = 8), z.GAN[(this._p.index + n) % 10 + 1] + z.ZHI[(this._p.index + z.BASE_MONTH_ZHI_INDEX) % 12 + 1]
                                            },
                                            getXun: function() {
                                                return z.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return z.getXunKong(this.getGanZhi())
                                            }
                                        }
                                    },
                                    u = function(t, n) {
                                        return {
                                            _p: {
                                                year: t.getStartYear() + n,
                                                age: t.getStartAge() + n,
                                                index: n,
                                                daYun: t,
                                                lunar: t.getLunar()
                                            },
                                            getYear: function() {
                                                return this._p.year
                                            },
                                            getAge: function() {
                                                return this._p.age
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getLunar: function() {
                                                return this._p.lunar
                                            },
                                            getGanZhi: function() {
                                                var t = z.getJiaZiIndex(this._p.lunar.getJieQiTable()["立春"].getLunar().getYearInGanZhiExact()) + this._p.index;
                                                return this._p.daYun.getIndex() > 0 && (t += this._p.daYun.getStartAge() - 1), t %= z.JIA_ZI.length, z.JIA_ZI[t]
                                            },
                                            getXun: function() {
                                                return z.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return z.getXunKong(this.getGanZhi())
                                            },
                                            getLiuYue: function() {
                                                for (var t = [], n = 0; n < 12; n++) t.push(h(this, n));
                                                return t
                                            }
                                        }
                                    },
                                    C = function(t, n, e) {
                                        return {
                                            _p: {
                                                year: t.getStartYear() + n,
                                                age: t.getStartAge() + n,
                                                index: n,
                                                daYun: t,
                                                forward: e,
                                                lunar: t.getLunar()
                                            },
                                            getYear: function() {
                                                return this._p.year
                                            },
                                            getAge: function() {
                                                return this._p.age
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getGanZhi: function() {
                                                var t = z.getJiaZiIndex(this._p.lunar.getTimeInGanZhi()),
                                                    n = this._p.index + 1;
                                                this._p.daYun.getIndex() > 0 && (n += this._p.daYun.getStartAge() - 1), t += this._p.forward ? n : -n;
                                                for (var e = z.JIA_ZI.length; t < 0;) t += e;
                                                return t %= e, z.JIA_ZI[t]
                                            },
                                            getXun: function() {
                                                return z.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return z.getXunKong(this.getGanZhi())
                                            }
                                        }
                                    },
                                    o = function(t, n) {
                                        var e, i, r, a, F = t.getLunar().getSolar().getYear(),
                                            h = t.getStartSolar().getYear();
                                        return n < 1 ? (e = F, i = 1, r = h - 1, a = h - F) : (r = (e = h + 10 * (n - 1)) + 9, a = 9 + (i = e - F + 1)), {
                                            _p: {
                                                startYear: e,
                                                endYear: r,
                                                startAge: i,
                                                endAge: a,
                                                index: n,
                                                yun: t,
                                                lunar: t.getLunar()
                                            },
                                            getStartYear: function() {
                                                return this._p.startYear
                                            },
                                            getEndYear: function() {
                                                return this._p.endYear
                                            },
                                            getStartAge: function() {
                                                return this._p.startAge
                                            },
                                            getEndAge: function() {
                                                return this._p.endAge
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getLunar: function() {
                                                return this._p.lunar
                                            },
                                            getGanZhi: function() {
                                                if (this._p.index < 1) return "";
                                                var t = z.getJiaZiIndex(this._p.lunar.getMonthInGanZhiExact());
                                                t += this._p.yun.isForward() ? this._p.index : -this._p.index;
                                                var n = z.JIA_ZI.length;
                                                return t >= n && (t -= n), t < 0 && (t += n), z.JIA_ZI[t]
                                            },
                                            getXun: function() {
                                                return z.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return z.getXunKong(this.getGanZhi())
                                            },
                                            getLiuNian: function(t) {
                                                t || (t = 10), this._p.index < 1 && (t = this._p.endYear - this._p.startYear + 1);
                                                for (var n = [], e = 0; e < t; e++) n.push(u(this, e));
                                                return n
                                            },
                                            getXiaoYun: function(t) {
                                                t || (t = 10), this._p.index < 1 && (t = this._p.endYear - this._p.startYear + 1);
                                                for (var n = [], e = 0; e < t; e++) n.push(C(this, e, this._p.yun.isForward()));
                                                return n
                                            }
                                        }
                                    };
                                return {
                                    _p: {
                                        gender: t,
                                        startYear: F.year,
                                        startMonth: F.month,
                                        startDay: F.day,
                                        startHour: F.hour,
                                        forward: a,
                                        lunar: e
                                    },
                                    getGender: function() {
                                        return this._p.gender
                                    },
                                    getStartYear: function() {
                                        return this._p.startYear
                                    },
                                    getStartMonth: function() {
                                        return this._p.startMonth
                                    },
                                    getStartDay: function() {
                                        return this._p.startDay
                                    },
                                    getStartHour: function() {
                                        return this._p.startHour
                                    },
                                    isForward: function() {
                                        return this._p.forward
                                    },
                                    getLunar: function() {
                                        return this._p.lunar
                                    },
                                    getStartSolar: function() {
                                        var t = this._p.lunar.getSolar(),
                                            n = P.fromYmdHms(t.getYear(), t.getMonth(), t.getDay(), t.getHour(), t.getMinute(), t.getSecond());
                                        return n.setFullYear(t.getYear() + this._p.startYear), n.setMonth(t.getMonth() - 1 + this._p.startMonth), n.setDate(t.getDay() + this._p.startDay), n.setHours(t.getHour() + this._p.startHour), L.fromDate(n)
                                    },
                                    getDaYun: function(t) {
                                        t || (t = 10);
                                        for (var n = [], e = 0; e < t; e++) n.push(o(this, e));
                                        return n
                                    }
                                }
                            },
                            toString: function() {
                                return this.getYear() + " " + this.getMonth() + " " + this.getDay() + " " + this.getTime()
                            }
                        }
                    }(t)
                }
            }),
            tt = {
                fromYmdHms: function(t, n, e, i, r, a) {
                    return function(t, n, e, i, r, a) {
                        var F = U.fromYmdHms(t, n, e, i, r, a),
                            h = z.getTimeZhiIndex([(i < 10 ? "0" : "") + i, (r < 10 ? "0" : "") + r].join(":"));
                        return {
                            _p: {
                                ganIndex: (F.getDayGanIndexExact() % 5 * 2 + h) % 10,
                                zhiIndex: h,
                                lunar: F
                            },
                            getGanIndex: function() {
                                return this._p.ganIndex
                            },
                            getZhiIndex: function() {
                                return this._p.zhiIndex
                            },
                            getGan: function() {
                                return z.GAN[this._p.ganIndex + 1]
                            },
                            getZhi: function() {
                                return z.ZHI[this._p.zhiIndex + 1]
                            },
                            getGanZhi: function() {
                                return this.getGan() + this.getZhi()
                            },
                            getShengXiao: function() {
                                return z.SHENGXIAO[this._p.zhiIndex + 1]
                            },
                            getPositionXi: function() {
                                return z.POSITION_XI[this._p.ganIndex + 1]
                            },
                            getPositionXiDesc: function() {
                                return z.POSITION_DESC[this.getPositionXi()]
                            },
                            getPositionYangGui: function() {
                                return z.POSITION_YANG_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYangGuiDesc: function() {
                                return z.POSITION_DESC[this.getPositionYangGui()]
                            },
                            getPositionYinGui: function() {
                                return z.POSITION_YIN_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYinGuiDesc: function() {
                                return z.POSITION_DESC[this.getPositionYinGui()]
                            },
                            getPositionFu: function(t) {
                                return (1 === t ? z.POSITION_FU : z.POSITION_FU_2)[this._p.ganIndex + 1]
                            },
                            getPositionFuDesc: function(t) {
                                return z.POSITION_DESC[this.getPositionFu(t)]
                            },
                            getPositionCai: function() {
                                return z.POSITION_CAI[this._p.ganIndex + 1]
                            },
                            getPositionCaiDesc: function() {
                                return z.POSITION_DESC[this.getPositionCai()]
                            },
                            getNaYin: function() {
                                return z.NAYIN[this.getGanZhi()]
                            },
                            getTianShen: function() {
                                return z.TIAN_SHEN[(this._p.zhiIndex + z.ZHI_TIAN_SHEN_OFFSET[this._p.lunar.getDayZhiExact()]) % 12 + 1]
                            },
                            getTianShenType: function() {
                                return z.TIAN_SHEN_TYPE[this.getTianShen()]
                            },
                            getTianShenLuck: function() {
                                return z.TIAN_SHEN_TYPE_LUCK[this.getTianShenType()]
                            },
                            getChong: function() {
                                return z.CHONG[this._p.zhiIndex]
                            },
                            getSha: function() {
                                return z.SHA[this.getZhi()]
                            },
                            getChongShengXiao: function() {
                                for (var t = this.getChong(), n = 0, e = z.ZHI.length; n < e; n++)
                                    if (z.ZHI[n] === t) return z.SHENGXIAO[n];
                                return ""
                            },
                            getChongDesc: function() {
                                return "(" + this.getChongGan() + this.getChong() + ")" + this.getChongShengXiao()
                            },
                            getChongGan: function() {
                                return z.CHONG_GAN[this._p.ganIndex]
                            },
                            getChongGanTie: function() {
                                return z.CHONG_GAN_TIE[this._p.ganIndex]
                            },
                            getYi: function() {
                                return z.getTimeYi(this._p.lunar.getDayInGanZhiExact(), this.getGanZhi())
                            },
                            getJi: function() {
                                return z.getTimeJi(this._p.lunar.getDayInGanZhiExact(), this.getGanZhi())
                            },
                            getNineStar: function() {
                                var t = this._p.lunar.getSolar().toYmd(),
                                    n = this._p.lunar.getJieQiTable(),
                                    e = !1;
                                t >= n["冬至"].toYmd() && t < n["夏至"].toYmd() && (e = !0);
                                var i = e ? 7 : 3,
                                    r = this._p.lunar.getDayZhi();
                                "子午卯酉".indexOf(r) > -1 ? i = e ? 1 : 9 : "辰戌丑未".indexOf(r) > -1 && (i = e ? 4 : 6);
                                var a = e ? i + this._p.zhiIndex - 1 : i - this._p.zhiIndex - 1;
                                return a > 8 && (a -= 9), a < 0 && (a += 9), q.fromIndex(a)
                            },
                            getXun: function() {
                                return z.getXun(this.getGanZhi())
                            },
                            getXunKong: function() {
                                return z.getXunKong(this.getGanZhi())
                            },
                            getMinHm: function() {
                                var t = this._p.lunar.getHour();
                                return t < 1 ? "00:00" : t > 22 ? "23:00" : (t % 2 == 0 && (t -= 1), (t < 10 ? "0" : "") + t + ":00")
                            },
                            getMaxHm: function() {
                                var t = this._p.lunar.getHour();
                                return t < 1 ? "00:59" : t > 22 ? "23:59" : (t % 2 != 0 && (t += 1), (t < 10 ? "0" : "") + t + ":59")
                            },
                            toString: function() {
                                return this.getGanZhi()
                            }
                        }
                    }(t, n, e, i, r, a)
                }
            },
            nt = (I = [11, 13, 15, 17, 19, 21, 24, 0, 2, 4, 7, 9], d = "犯者夺纪", y = "犯者减寿", x = "犯者损寿", l = "犯者削禄夺纪", m = "犯者三年内夫妇俱亡", Y = (p = function(t, n, e, i) {
                return {
                    _p: {
                        name: t,
                        result: n || "",
                        everyMonth: !!e,
                        remark: i || ""
                    },
                    getName: function() {
                        return this._p.name
                    },
                    getResult: function() {
                        return this._p.result
                    },
                    isEveryMonth: function() {
                        return this._p.everyMonth
                    },
                    getRemark: function() {
                        return this._p.remark
                    },
                    toString: function() {
                        return this._p.name
                    },
                    toFullString: function() {
                        var t = [this._p.name];
                        return this._p.result && t.push(this._p.result), this._p.remark && t.push(this._p.remark), t.join(" ")
                    }
                }
            })("杨公忌"), S = p("四天王巡行", "", !0), N = p("斗降", d, !0), G = p("月朔", d, !0), Z = p("月望", d, !0), M = p("月晦", y, !0), T = p("雷斋日", y, !0), v = p("九毒日", "犯者夭亡，奇祸不测"), O = p("人神在阴", "犯者得病", !0, "宜先一日即戒"), H = p("司命奏事", y, !0, "如月小，即戒廿九"), X = p("月晦", y, !0, "如月小，即戒廿九"), {
                XIU_27: ["角", "亢", "氐", "房", "心", "尾", "箕", "斗", "女", "虚", "危", "室", "壁", "奎", "娄", "胃", "昴", "毕", "觜", "参", "井", "鬼", "柳", "星", "张", "翼", "轸"],
                DAY_ZHAI_GUAN_YIN: ["1-8", "2-7", "2-9", "2-19", "3-3", "3-6", "3-13", "4-22", "5-3", "5-17", "6-16", "6-18", "6-19", "6-23", "7-13", "8-16", "9-19", "9-23", "10-2", "11-19", "11-24", "12-25"],
                FESTIVAL: {
                    "1-1": [p("天腊，玉帝校世人神气禄命", l), G],
                    "1-3": [p("万神都会", d), N],
                    "1-5": [p("五虚忌")],
                    "1-6": [p("六耗忌"), T],
                    "1-7": [p("上会日", x)],
                    "1-8": [p("五殿阎罗天子诞", d), S],
                    "1-9": [p("玉皇上帝诞", d)],
                    "1-13": [Y],
                    "1-14": [p("三元降", y), S],
                    "1-15": [p("三元降", y), p("上元神会", d), Z, S],
                    "1-16": [p("三元降", y)],
                    "1-19": [p("长春真人诞")],
                    "1-23": [p("三尸神奏事"), S],
                    "1-25": [M, p("天地仓开日", "犯者损寿，子带疾")],
                    "1-27": [N],
                    "1-28": [O],
                    "1-29": [S],
                    "1-30": [X, H, S],
                    "2-1": [p("一殿秦广王诞", d), G],
                    "2-2": [p("万神都会", d), p("福德土地正神诞", "犯者得祸")],
                    "2-3": [p("文昌帝君诞", l), N],
                    "2-6": [p("东华帝君诞"), T],
                    "2-8": [p("释迦牟尼佛出家", d), p("三殿宋帝王诞", d), p("张大帝诞", d), S],
                    "2-11": [Y],
                    "2-14": [S],
                    "2-15": [p("释迦牟尼佛涅槃", l), p("太上老君诞", l), p("月望", l, !0), S],
                    "2-17": [p("东方杜将军诞")],
                    "2-18": [p("四殿五官王诞", l), p("至圣先师孔子讳辰", l)],
                    "2-19": [p("观音大士诞", d)],
                    "2-21": [p("普贤菩萨诞")],
                    "2-23": [S],
                    "2-25": [M],
                    "2-27": [N],
                    "2-28": [O],
                    "2-29": [S],
                    "2-30": [X, H, S],
                    "3-1": [p("二殿楚江王诞", d), G],
                    "3-3": [p("玄天上帝诞", d), N],
                    "3-6": [T],
                    "3-8": [p("六殿卞城王诞", d), S],
                    "3-9": [p("牛鬼神出", "犯者产恶胎"), Y],
                    "3-12": [p("中央五道诞")],
                    "3-14": [S],
                    "3-15": [p("昊天上帝诞", d), p("玄坛诞", d), Z, S],
                    "3-16": [p("准提菩萨诞", d)],
                    "3-19": [p("中岳大帝诞"), p("后土娘娘诞"), p("三茅降")],
                    "3-20": [p("天地仓开日", x), p("子孙娘娘诞")],
                    "3-23": [S],
                    "3-25": [M],
                    "3-27": [p("七殿泰山王诞"), N],
                    "3-28": [O, p("苍颉至圣先师诞", l), p("东岳大帝诞")],
                    "3-29": [S],
                    "3-30": [X, H, S],
                    "4-1": [p("八殿都市王诞", d), G],
                    "4-3": [N],
                    "4-4": [p("万神善会", "犯者失瘼夭胎"), p("文殊菩萨诞")],
                    "4-6": [T],
                    "4-7": [p("南斗、北斗、西斗同降", y), Y],
                    "4-8": [p("释迦牟尼佛诞", d), p("万神善会", "犯者失瘼夭胎"), p("善恶童子降", "犯者血死"), p("九殿平等王诞"), S],
                    "4-14": [p("纯阳祖师诞", y), S],
                    "4-15": [Z, p("钟离祖师诞"), S],
                    "4-16": [p("天地仓开日", x)],
                    "4-17": [p("十殿转轮王诞", d)],
                    "4-18": [p("天地仓开日", x), p("紫徽大帝诞", x)],
                    "4-20": [p("眼光圣母诞")],
                    "4-23": [S],
                    "4-25": [M],
                    "4-27": [N],
                    "4-28": [O],
                    "4-29": [S],
                    "4-30": [X, H, S],
                    "5-1": [p("南极长生大帝诞", d), G],
                    "5-3": [N],
                    "5-5": [p("地腊", l), p("五帝校定生人官爵", l), v, Y],
                    "5-6": [v, T],
                    "5-7": [v],
                    "5-8": [p("南方五道诞"), S],
                    "5-11": [p("天地仓开日", x), p("天下都城隍诞")],
                    "5-12": [p("炳灵公诞")],
                    "5-13": [p("关圣降", l)],
                    "5-14": [p("夜子时为天地交泰", m), S],
                    "5-15": [Z, v, S],
                    "5-16": [p("九毒日", m), p("天地元气造化万物之辰", m)],
                    "5-17": [v],
                    "5-18": [p("张天师诞")],
                    "5-22": [p("孝娥神诞", d)],
                    "5-23": [S],
                    "5-25": [v, M],
                    "5-26": [v],
                    "5-27": [v, N],
                    "5-28": [O],
                    "5-29": [S],
                    "5-30": [X, H, S],
                    "6-1": [G],
                    "6-3": [p("韦驮菩萨圣诞"), N, Y],
                    "6-5": [p("南赡部洲转大轮", x)],
                    "6-6": [p("天地仓开日", x), T],
                    "6-8": [S],
                    "6-10": [p("金粟如来诞")],
                    "6-14": [S],
                    "6-15": [Z, S],
                    "6-19": [p("观世音菩萨成道", d)],
                    "6-23": [p("南方火神诞", "犯者遭回禄"), S],
                    "6-24": [p("雷祖诞", l), p("关帝诞", l)],
                    "6-25": [M],
                    "6-27": [N],
                    "6-28": [O],
                    "6-29": [S],
                    "6-30": [X, H, S],
                    "7-1": [G, Y],
                    "7-3": [N],
                    "7-5": [p("中会日", x, !1, "一作初七")],
                    "7-6": [T],
                    "7-7": [p("道德腊", l), p("五帝校生人善恶", l), p("魁星诞", l)],
                    "7-8": [S],
                    "7-10": [p("阴毒日", "", !1, "大忌")],
                    "7-12": [p("长真谭真人诞")],
                    "7-13": [p("大势至菩萨诞", y)],
                    "7-14": [p("三元降", y), S],
                    "7-15": [Z, p("三元降", d), p("地官校籍", d), S],
                    "7-16": [p("三元降", y)],
                    "7-18": [p("西王母诞", d)],
                    "7-19": [p("太岁诞", d)],
                    "7-22": [p("增福财神诞", l)],
                    "7-23": [S],
                    "7-25": [M],
                    "7-27": [N],
                    "7-28": [O],
                    "7-29": [Y, S],
                    "7-30": [p("地藏菩萨诞", d), X, H, S],
                    "8-1": [G, p("许真君诞")],
                    "8-3": [N, p("北斗诞", l), p("司命灶君诞", "犯者遭回禄")],
                    "8-5": [p("雷声大帝诞", d)],
                    "8-6": [T],
                    "8-8": [S],
                    "8-10": [p("北斗大帝诞")],
                    "8-12": [p("西方五道诞")],
                    "8-14": [S],
                    "8-15": [Z, p("太明朝元", "犯者暴亡", !1, "宜焚香守夜"), S],
                    "8-16": [p("天曹掠刷真君降", "犯者贫夭")],
                    "8-18": [p("天人兴福之辰", "", !1, "宜斋戒，存想吉事")],
                    "8-23": [p("汉恒候张显王诞"), S],
                    "8-24": [p("灶君夫人诞")],
                    "8-25": [M],
                    "8-27": [N, p("至圣先师孔子诞", l), Y],
                    "8-28": [O, p("四天会事")],
                    "8-29": [S],
                    "8-30": [p("诸神考校", "犯者夺算"), X, H, S],
                    "9-1": [G, p("南斗诞", l), p("北斗九星降世", d, !1, "此九日俱宜斋戒")],
                    "9-3": [N, p("五瘟神诞")],
                    "9-6": [T],
                    "9-8": [S],
                    "9-9": [p("斗母诞", l), p("酆都大帝诞"), p("玄天上帝飞升")],
                    "9-10": [p("斗母降", d)],
                    "9-11": [p("宜戒")],
                    "9-13": [p("孟婆尊神诞")],
                    "9-14": [S],
                    "9-15": [Z, S],
                    "9-17": [p("金龙四大王诞", "犯者遭水厄")],
                    "9-19": [p("日宫月宫会合", y), p("观世音菩萨诞", y)],
                    "9-23": [S],
                    "9-25": [M, Y],
                    "9-27": [N],
                    "9-28": [O],
                    "9-29": [S],
                    "9-30": [p("药师琉璃光佛诞", "犯者危疾"), X, H, S],
                    "10-1": [G, p("民岁腊", d), p("四天王降", "犯者一年内死")],
                    "10-3": [N, p("三茅诞")],
                    "10-5": [p("下会日", y), p("达摩祖师诞", y)],
                    "10-6": [T, p("天曹考察", d)],
                    "10-8": [p("佛涅槃日", "", !1, "大忌色欲"), S],
                    "10-10": [p("四天王降", "犯者一年内死")],
                    "10-11": [p("宜戒")],
                    "10-14": [p("三元降", y), S],
                    "10-15": [Z, p("三元降", d), p("下元水府校籍", d), S],
                    "10-16": [p("三元降", y), S],
                    "10-23": [Y, S],
                    "10-25": [M],
                    "10-27": [N, p("北极紫徽大帝降")],
                    "10-28": [O],
                    "10-29": [S],
                    "10-30": [X, H, S],
                    "11-1": [G],
                    "11-3": [N],
                    "11-4": [p("至圣先师孔子诞", l)],
                    "11-6": [p("西岳大帝诞")],
                    "11-8": [S],
                    "11-11": [p("天地仓开日", d), p("太乙救苦天尊诞", d)],
                    "11-14": [S],
                    "11-15": [p("月望", "上半夜犯男死 下半夜犯女死"), p("四天王巡行", "上半夜犯男死 下半夜犯女死")],
                    "11-17": [p("阿弥陀佛诞")],
                    "11-19": [p("太阳日宫诞", "犯者得奇祸")],
                    "11-21": [Y],
                    "11-23": [p("张仙诞", "犯者绝嗣"), S],
                    "11-25": [p("掠刷大夫降", "犯者遭大凶"), M],
                    "11-26": [p("北方五道诞")],
                    "11-27": [N],
                    "11-28": [O],
                    "11-29": [S],
                    "11-30": [X, H, S],
                    "12-1": [G],
                    "12-3": [N],
                    "12-6": [p("天地仓开日", y), T],
                    "12-7": [p("掠刷大夫降", "犯者得恶疾")],
                    "12-8": [p("王侯腊", d), p("释迦如来成佛之辰"), S, p("初旬内戊日，亦名王侯腊", d)],
                    "12-12": [p("太素三元君朝真")],
                    "12-14": [S],
                    "12-15": [Z, S],
                    "12-16": [p("南岳大帝诞")],
                    "12-19": [Y],
                    "12-20": [p("天地交道", "犯者促寿")],
                    "12-21": [p("天猷上帝诞")],
                    "12-23": [p("五岳诞降"), S],
                    "12-24": [p("司今朝天奏人善恶", "犯者得大祸")],
                    "12-25": [p("三清玉帝同降，考察善恶", "犯者得奇祸"), M],
                    "12-27": [N],
                    "12-28": [O],
                    "12-29": [p("华严菩萨诞"), S],
                    "12-30": [p("诸神下降，察访善恶", "犯者男女俱亡")]
                },
                getXiu: function(t, n) {
                    return function(t, n) {
                        return nt.XIU_27[(I[Math.abs(t) - 1] + n - 1) % nt.XIU_27.length]
                    }(t, n)
                }
            }),
            et = function() {
                var t = function(t, e, i, r, a, F) {
                        return n(U.fromYmdHms(t + et.DEAD_YEAR - 1, e, i, r, a, F))
                    },
                    n = function(t) {
                        return {
                            _p: {
                                lunar: t
                            },
                            getLunar: function() {
                                return this._p.lunar
                            },
                            getYear: function() {
                                var t = this._p.lunar.getSolar().getYear(),
                                    n = t - et.DEAD_YEAR;
                                return t === this._p.lunar.getYear() && n++, n
                            },
                            getMonth: function() {
                                return this._p.lunar.getMonth()
                            },
                            getDay: function() {
                                return this._p.lunar.getDay()
                            },
                            getYearInChinese: function() {
                                for (var t = this.getYear() + "", n = "", e = "0".charCodeAt(0), i = 0, r = t.length; i < r; i++) n += z.NUMBER[t.charCodeAt(i) - e];
                                return n
                            },
                            getMonthInChinese: function() {
                                return this._p.lunar.getMonthInChinese()
                            },
                            getDayInChinese: function() {
                                return this._p.lunar.getDayInChinese()
                            },
                            getFestivals: function() {
                                var t = nt.FESTIVAL[this.getMonth() + "-" + this.getDay()];
                                return t || []
                            },
                            isMonthZhai: function() {
                                var t = this.getMonth();
                                return 1 === t || 5 === t || 9 === t
                            },
                            isDayYangGong: function() {
                                for (var t = this.getFestivals(), n = 0, e = t.length; n < e; n++)
                                    if ("杨公忌" === t[n].getName()) return !0;
                                return !1
                            },
                            isDayZhaiShuoWang: function() {
                                var t = this.getDay();
                                return 1 === t || 15 === t
                            },
                            isDayZhaiSix: function() {
                                var t = this.getDay();
                                return 8 === t || 14 === t || 15 === t || 23 === t || 29 === t || 30 === t || 28 === t && 30 !== R.fromYm(this._p.lunar.getYear(), this.getMonth()).getDayCount()
                            },
                            isDayZhaiTen: function() {
                                var t = this.getDay();
                                return 1 === t || 8 === t || 14 === t || 15 === t || 18 === t || 23 === t || 24 === t || 28 === t || 29 === t || 30 === t
                            },
                            isDayZhaiGuanYin: function() {
                                for (var t = this.getMonth() + "-" + this.getDay(), n = 0, e = nt.DAY_ZHAI_GUAN_YIN.length; n < e; n++)
                                    if (t === nt.DAY_ZHAI_GUAN_YIN[n]) return !0;
                                return !1
                            },
                            getXiu: function() {
                                return nt.getXiu(this.getMonth(), this.getDay())
                            },
                            getXiuLuck: function() {
                                return z.XIU_LUCK[this.getXiu()]
                            },
                            getXiuSong: function() {
                                return z.XIU_SONG[this.getXiu()]
                            },
                            getZheng: function() {
                                return z.ZHENG[this.getXiu()]
                            },
                            getAnimal: function() {
                                return z.ANIMAL[this.getXiu()]
                            },
                            getGong: function() {
                                return z.GONG[this.getXiu()]
                            },
                            getShou: function() {
                                return z.SHOU[this.getGong()]
                            },
                            toString: function() {
                                return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese()
                            },
                            toFullString: function() {
                                for (var t = this.toString(), n = this.getFestivals(), e = 0, i = n.length; e < i; e++) t += " (" + n[e] + ")";
                                return t
                            }
                        }
                    };
                return {
                    DEAD_YEAR: -543,
                    fromYmdHms: function(n, e, i, r, a, F) {
                        return t(n, e, i, r, a, F)
                    },
                    fromYmd: function(n, e, i) {
                        return t(n, e, i, 0, 0, 0)
                    },
                    fromLunar: function(t) {
                        return n(t)
                    }
                }
            }(),
            it = {
                create: function(t, n) {
                    return function(t, n) {
                        return {
                            _p: {
                                name: t,
                                remark: n || ""
                            },
                            getName: function() {
                                return this._p.name
                            },
                            getRemark: function() {
                                return this._p.remark
                            },
                            toString: function() {
                                return this._p.name
                            },
                            toFullString: function() {
                                var t = [this._p.name];
                                return this._p.remark && t.push("[" + this._p.remark + "]"), t.join("")
                            }
                        }
                    }(t, n)
                }
            },
            rt = function() {
                var t = it.create;
                return {
                    SAN_HUI: ["1-7", "7-7", "10-15"],
                    SAN_YUAN: ["1-15", "7-15", "10-15"],
                    WU_LA: ["1-1", "5-5", "7-7", "10-1", "12-8"],
                    AN_WU: ["未", "戌", "辰", "寅", "午", "子", "酉", "申", "巳", "亥", "卯", "丑"],
                    BA_HUI: {
                        "丙午": "天会",
                        "壬午": "地会",
                        "壬子": "人会",
                        "庚午": "日会",
                        "庚申": "月会",
                        "辛酉": "星辰会",
                        "甲辰": "五行会",
                        "甲戌": "四时会"
                    },
                    BA_JIE: {
                        "立春": "东北方度仙上圣天尊同梵炁始青天君下降",
                        "春分": "东方玉宝星上天尊同青帝九炁天君下降",
                        "立夏": "东南方好生度命天尊同梵炁始丹天君下降",
                        "夏至": "南方玄真万福天尊同赤帝三炁天君下降",
                        "立秋": "西南方太灵虚皇天尊同梵炁始素天君下降",
                        "秋分": "西方太妙至极天尊同白帝七炁天君下降",
                        "立冬": "西北方无量太华天尊同梵炁始玄天君下降",
                        "冬至": "北方玄上玉宸天尊同黑帝五炁天君下降"
                    },
                    FESTIVAL: {
                        "1-1": [t("天腊之辰", "天腊，此日五帝会于东方九炁青天")],
                        "1-3": [t("郝真人圣诞"), t("孙真人圣诞")],
                        "1-5": [t("孙祖清静元君诞")],
                        "1-7": [t("举迁赏会", "此日上元赐福，天官同地水二官考校罪福")],
                        "1-9": [t("玉皇上帝圣诞")],
                        "1-13": [t("关圣帝君飞升")],
                        "1-15": [t("上元天官圣诞"), t("老祖天师圣诞")],
                        "1-19": [t("长春邱真人(邱处机)圣诞")],
                        "1-28": [t("许真君(许逊天师)圣诞")],
                        "2-1": [t("勾陈天皇大帝圣诞"), t("长春刘真人(刘渊然)圣诞")],
                        "2-2": [t("土地正神诞"), t("姜太公圣诞")],
                        "2-3": [t("文昌梓潼帝君圣诞")],
                        "2-6": [t("东华帝君圣诞")],
                        "2-13": [t("度人无量葛真君圣诞")],
                        "2-15": [t("太清道德天尊(太上老君)圣诞")],
                        "2-19": [t("慈航真人圣诞")],
                        "3-1": [t("谭祖(谭处端)长真真人圣诞")],
                        "3-3": [t("玄天上帝圣诞")],
                        "3-6": [t("眼光娘娘圣诞")],
                        "3-15": [t("天师张大真人圣诞"), t("财神赵公元帅圣诞")],
                        "3-16": [t("三茅真君得道之辰"), t("中岳大帝圣诞")],
                        "3-18": [t("王祖(王处一)玉阳真人圣诞"), t("后土娘娘圣诞")],
                        "3-19": [t("太阳星君圣诞")],
                        "3-20": [t("子孙娘娘圣诞")],
                        "3-23": [t("天后妈祖圣诞")],
                        "3-26": [t("鬼谷先师诞")],
                        "3-28": [t("东岳大帝圣诞")],
                        "4-1": [t("长生谭真君成道之辰")],
                        "4-10": [t("何仙姑圣诞")],
                        "4-14": [t("吕祖纯阳祖师圣诞")],
                        "4-15": [t("钟离祖师圣诞")],
                        "4-18": [t("北极紫微大帝圣诞"), t("泰山圣母碧霞元君诞"), t("华佗神医先师诞")],
                        "4-20": [t("眼光圣母娘娘诞")],
                        "4-28": [t("神农先帝诞")],
                        "5-1": [t("南极长生大帝圣诞")],
                        "5-5": [t("地腊之辰", "地腊，此日五帝会于南方三炁丹天"), t("南方雷祖圣诞"), t("地祗温元帅圣诞"), t("雷霆邓天君圣诞")],
                        "5-11": [t("城隍爷圣诞")],
                        "5-13": [t("关圣帝君降神"), t("关平太子圣诞")],
                        "5-18": [t("张天师圣诞")],
                        "5-20": [t("马祖丹阳真人圣诞")],
                        "5-29": [t("紫青白祖师圣诞")],
                        "6-1": [t("南斗星君下降")],
                        "6-2": [t("南斗星君下降")],
                        "6-3": [t("南斗星君下降")],
                        "6-4": [t("南斗星君下降")],
                        "6-5": [t("南斗星君下降")],
                        "6-6": [t("南斗星君下降")],
                        "6-10": [t("刘海蟾祖师圣诞")],
                        "6-15": [t("灵官王天君圣诞")],
                        "6-19": [t("慈航(观音)成道日")],
                        "6-23": [t("火神圣诞")],
                        "6-24": [t("南极大帝中方雷祖圣诞"), t("关圣帝君圣诞")],
                        "6-26": [t("二郎真君圣诞")],
                        "7-7": [t("道德腊之辰", "道德腊，此日五帝会于西方七炁素天"), t("庆生中会", "此日中元赦罪，地官同天水二官考校罪福")],
                        "7-12": [t("西方雷祖圣诞")],
                        "7-15": [t("中元地官大帝圣诞")],
                        "7-18": [t("王母娘娘圣诞")],
                        "7-20": [t("刘祖(刘处玄)长生真人圣诞")],
                        "7-22": [t("财帛星君文财神增福相公李诡祖圣诞")],
                        "7-26": [t("张三丰祖师圣诞")],
                        "8-1": [t("许真君飞升日")],
                        "8-3": [t("九天司命灶君诞")],
                        "8-5": [t("北方雷祖圣诞")],
                        "8-10": [t("北岳大帝诞辰")],
                        "8-15": [t("太阴星君诞")],
                        "9-1": [t("北斗九皇降世之辰")],
                        "9-2": [t("北斗九皇降世之辰")],
                        "9-3": [t("北斗九皇降世之辰")],
                        "9-4": [t("北斗九皇降世之辰")],
                        "9-5": [t("北斗九皇降世之辰")],
                        "9-6": [t("北斗九皇降世之辰")],
                        "9-7": [t("北斗九皇降世之辰")],
                        "9-8": [t("北斗九皇降世之辰")],
                        "9-9": [t("北斗九皇降世之辰"), t("斗姥元君圣诞"), t("重阳帝君圣诞"), t("玄天上帝飞升"), t("酆都大帝圣诞")],
                        "9-22": [t("增福财神诞")],
                        "9-23": [t("萨翁真君圣诞")],
                        "9-28": [t("五显灵官马元帅圣诞")],
                        "10-1": [t("民岁腊之辰", "民岁腊，此日五帝会于北方五炁黑天"), t("东皇大帝圣诞")],
                        "10-3": [t("三茅应化真君圣诞")],
                        "10-6": [t("天曹诸司五岳五帝圣诞")],
                        "10-15": [t("下元水官大帝圣诞"), t("建生大会", "此日下元解厄，水官同天地二官考校罪福")],
                        "10-18": [t("地母娘娘圣诞")],
                        "10-19": [t("长春邱真君飞升")],
                        "10-20": [t("虚靖天师(即三十代天师弘悟张真人)诞")],
                        "11-6": [t("西岳大帝圣诞")],
                        "11-9": [t("湘子韩祖圣诞")],
                        "11-11": [t("太乙救苦天尊圣诞")],
                        "11-26": [t("北方五道圣诞")],
                        "12-8": [t("王侯腊之辰", "王侯腊，此日五帝会于上方玄都玉京")],
                        "12-16": [t("南岳大帝圣诞"), t("福德正神诞")],
                        "12-20": [t("鲁班先师圣诞")],
                        "12-21": [t("天猷上帝圣诞")],
                        "12-22": [t("重阳祖师圣诞")],
                        "12-23": [t("祭灶王", "最适宜谢旧年太岁，开启拜新年太岁")],
                        "12-25": [t("玉帝巡天"), t("天神下降")],
                        "12-29": [t("清静孙真君(孙不二)成道")]
                    }
                }
            }(),
            at = function() {
                var t = function(t, e, i, r, a, F) {
                        return n(U.fromYmdHms(t + at.BIRTH_YEAR, e, i, r, a, F))
                    },
                    n = function(t) {
                        return {
                            _p: {
                                lunar: t
                            },
                            getLunar: function() {
                                return this._p.lunar
                            },
                            getYear: function() {
                                return this._p.lunar.getYear() - at.BIRTH_YEAR
                            },
                            getMonth: function() {
                                return this._p.lunar.getMonth()
                            },
                            getDay: function() {
                                return this._p.lunar.getDay()
                            },
                            getYearInChinese: function() {
                                for (var t = this.getYear() + "", n = "", e = "0".charCodeAt(0), i = 0, r = t.length; i < r; i++) n += z.NUMBER[t.charCodeAt(i) - e];
                                return n
                            },
                            getMonthInChinese: function() {
                                return this._p.lunar.getMonthInChinese()
                            },
                            getDayInChinese: function() {
                                return this._p.lunar.getDayInChinese()
                            },
                            getFestivals: function() {
                                var t = [],
                                    n = rt.FESTIVAL[this.getMonth() + "-" + this.getDay()];
                                n && (t = t.concat(n));
                                var e = this._p.lunar.getJieQi();
                                "冬至" === e ? t.push(it.create("元始天尊圣诞")) : "夏至" === e && t.push(it.create("灵宝天尊圣诞"));
                                var i = rt.BA_JIE[e];
                                return i && t.push(it.create(i)), (i = rt.BA_HUI[this._p.lunar.getDayInGanZhi()]) && t.push(it.create(i)), t
                            },
                            _isDayIn: function(t) {
                                for (var n = this.getMonth() + "-" + this.getDay(), e = 0, i = t.length; e < i; e++)
                                    if (n === t[e]) return !0;
                                return !1
                            },
                            isDaySanHui: function() {
                                return this._isDayIn(rt.SAN_HUI)
                            },
                            isDaySanYuan: function() {
                                return this._isDayIn(rt.SAN_YUAN)
                            },
                            isDayBaJie: function() {
                                return !!rt.BA_JIE[this._p.lunar.getJieQi()]
                            },
                            isDayWuLa: function() {
                                return this._isDayIn(rt.WU_LA)
                            },
                            isDayBaHui: function() {
                                return !!rt.BA_HUI[this._p.lunar.getDayInGanZhi()]
                            },
                            isDayMingWu: function() {
                                return "戊" === this._p.lunar.getDayGan()
                            },
                            isDayAnWu: function() {
                                return this._p.lunar.getDayZhi() === rt.AN_WU[Math.abs(this.getMonth()) - 1]
                            },
                            isDayWu: function() {
                                return this.isDayMingWu() || this.isDayAnWu()
                            },
                            isDayTianShe: function() {
                                var t = !1,
                                    n = this._p.lunar.getMonthZhi(),
                                    e = this._p.lunar.getDayInGanZhi();
                                switch (n) {
                                    case "寅":
                                    case "卯":
                                    case "辰":
                                        "戊寅" === e && (t = !0);
                                        break;
                                    case "巳":
                                    case "午":
                                    case "未":
                                        "甲午" === e && (t = !0);
                                        break;
                                    case "申":
                                    case "酉":
                                    case "戌":
                                        "戊申" === e && (t = !0);
                                        break;
                                    case "亥":
                                    case "子":
                                    case "丑":
                                        "甲子" === e && (t = !0)
                                }
                                return t
                            },
                            toString: function() {
                                return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese()
                            },
                            toFullString: function() {
                                return "道歷" + this.getYearInChinese() + "年，天運" + this._p.lunar.getYearInGanZhi() + "年，" + this._p.lunar.getMonthInGanZhi() + "月，" + this._p.lunar.getDayInGanZhi() + "日。" + this.getMonthInChinese() + "月" + this.getDayInChinese() + "日，" + this._p.lunar.getTimeZhi() + "時。"
                            }
                        }
                    };
                return {
                    BIRTH_YEAR: -2697,
                    fromYmdHms: function(n, e, i, r, a, F) {
                        return t(n, e, i, r, a, F)
                    },
                    fromYmd: function(n, e, i) {
                        return t(n, e, i, 0, 0, 0)
                    },
                    fromLunar: function(t) {
                        return n(t)
                    }
                }
            }();
        return {
            ShouXingUtil: j,
            SolarUtil: w,
            LunarUtil: z,
            FotoUtil: nt,
            TaoUtil: rt,
            Solar: L,
            Lunar: U,
            Foto: et,
            Tao: at,
            NineStar: q,
            EightChar: $,
            SolarWeek: J,
            SolarMonth: b,
            SolarSeason: Q,
            SolarHalfYear: k,
            SolarYear: K,
            LunarMonth: R,
            LunarYear: W,
            LunarTime: tt,
            HolidayUtil: V
        }
    }));
const {
    Solar: r,
    Lunar: a,
    Foto: F,
    Tao: h,
    NineStar: u,
    EightChar: C,
    SolarWeek: o,
    SolarMonth: A,
    SolarSeason: E,
    SolarHalfYear: D,
    SolarYear: s,
    LunarMonth: g,
    LunarYear: B,
    LunarTime: _,
    ShouXingUtil: c,
    SolarUtil: f,
    LunarUtil: I,
    FotoUtil: p,
    TaoUtil: d,
    HolidayUtil: y
} = i.exports;
var x = {
    Solar: r,
    Lunar: a,
    Foto: F,
    Tao: h,
    NineStar: u,
    EightChar: C,
    SolarWeek: o,
    SolarMonth: A,
    SolarSeason: E,
    SolarHalfYear: D,
    SolarYear: s,
    LunarMonth: g,
    LunarYear: B,
    LunarTime: _,
    ShouXingUtil: c,
    SolarUtil: f,
    LunarUtil: I,
    FotoUtil: p,
    TaoUtil: d,
    HolidayUtil: y
};
const l = n({
    __proto__: null,
    default: x
}, [x]);
export {
    l as i, x as l
};