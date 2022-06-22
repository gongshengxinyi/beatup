function gl_() {
    bujs.a.s()
}

function BUJS() {}
BUJS.e = function(s) {
    var a = this;
    a.u = {
        i: "perfect.wav",
        c: "normal.wav",
        r: "miss.wav",
        b: "space.wav"
    }, a.o = new(window.AudioContext || window.webkitAudioContext), a.j = s, async.eachOf(a.u, function(s, n, e) {
        var t = new XMLHttpRequest;
        t.open("GET", "sound/" + s, !0), t.responseType = "arraybuffer", t.onload = function() {
            a.o.decodeAudioData(t.response, function(s) {
                a.u[n] = s
            }, function(s) {}), e()
        }, t.send()
    }), a.p("notes/" + bujs.a.f + ".json")
}, BUJS.e.prototype.p = function(s) {
    var a = this;
    $.get(s, function(s) {
        a.g = bujs.l[bujs.a.f], a.g._ = s, a.h = 6e4 / (4 * a.g.bpm), a.v(), a.U("music/" + a.g.ogg)
    })
}, BUJS.e.prototype.U = function(s) {
    var a = this,
        n = new XMLHttpRequest;
    bujs.B("Downloading music"), n.open("GET", s, !0), n.responseType = "arraybuffer", n.onload = function() {
        bujs.S ? (a.d = new ArrayBuffer(n.response.byteLength), new Uint8Array(a.d).set(new Uint8Array(n.response)), bujs.B("Touch/click to start music")) : a.o.decodeAudioData(n.response, function(s) {
            a.w = a.J(s), a.m = a.o.currentTime, a.w.start(0), void 0 !== a.j && a.j.call(bujs.a, a)
        }, function(s) {})
    }, n.send()
}, BUJS.e.prototype.J = function(s) {
    var a = this.o.createBufferSource();
    return a.buffer = s, a.connect(this.o.destination), a
}, BUJS.e.prototype.k = function(s) {
    this.J(s).start(0)
}, BUJS.e.prototype.v = function() {
    for (var s = this, a = 0; a < s.g._.length; a++) s.g._[a].t = s.g._[a].t * s.h
}, BUJS.e.prototype.L = function() {
    return 1e3 * (this.o.currentTime - this.m)
}, BUJS.M = function(s) {
    var a = this;
    a.R = [], a.j = s, a.T(), a.$(), a.F()
}, BUJS.M.prototype.Y = function() {
    var s = this;
    async.eachOf(s.G, s.A, function(a) {
        if (a);
        else {
            s.P();
            var n = document.getElementById("cvs");
            s.X = n.getContext("2d");
            var e = s.I.D * s.I.H,
                t = s.I.W * s.I.H;
            n.width = e, n.height = t, void 0 !== s.j && s.j.call(bujs.a, s)
        }
    })
}, BUJS.M.prototype.T = function() {
    this.I = {
        C: "img/",
        H: 1,
        D: 980,
        W: 400
    }
}, BUJS.M.prototype.$ = function() {
    var s = this;
    s.G = {
        q: ["bg/lafesta.jpg"],
        N: ["dnxp.png"],
        z: ["lane_7.png", "lane_4.png", "lane_1.png", "lane_9.png", "lane_6.png", "lane_3.png"],
        O: ["beatdown_7.png", "beatdown_4.png", "beatdown_1.png", "beatdown_9.png", "beatdown_6.png", "beatdown_3.png"],
        K: ["tableL.png"],
        Q: ["laneL.png"],
        V: ["landingL.png"],
        Z: ["tableR.png"],
        ss: ["laneR.png"],
        as: ["landingR.png"],
        ns: ["space_frame.png"],
        es: ["space_frame_cursor.png"],
        ts: ["space_frame_explode.png"],
        us: ["space_frame_space_explode.png"],
        cs: ["arrow_explode.png"],
        rs: ["a71.png", "a72.png", "a73.png", "a74.png", "a75.png", "a76.png", "a77.png", "a78.png"],
        bs: ["a41.png", "a42.png", "a43.png", "a44.png", "a45.png", "a46.png", "a47.png", "a48.png"],
        os: ["a11.png", "a12.png", "a13.png", "a14.png", "a15.png", "a16.png", "a17.png", "a18.png"],
        js: ["a91.png", "a92.png", "a93.png", "a94.png", "a95.png", "a96.png", "a97.png", "a98.png"],
        ps: ["a61.png", "a62.png", "a63.png", "a64.png", "a65.png", "a66.png", "a67.png", "a68.png"],
        fs: ["a31.png", "a32.png", "a33.png", "a34.png", "a35.png", "a36.png", "a37.png", "a38.png"],
        gs: ["space_frame_letter_b.png", "space_frame_letter_e.png", "space_frame_letter_a.png", "space_frame_letter_t.png", "space_frame_letter_u.png", "space_frame_letter_p.png"],
        ls: ["space_frame_letter_glow_blue.png"],
        _s: ["space_frame_letter_glow_yellow.png"],
        hs: ["space_frame_glow_blue.png"],
        vs: ["space_frame_glow_yellow.png"],
        Us: ["up_1.png"],
        Bs: ["up.png"],
        Ss: ["perfect.png", "great.png", "cool.png", "bad.png", "miss.png"],
        ds: ["del_1.png", "del_2.png"],
        ws: ["chance_1.png", "chance_2.png", "chance_3.png", "chance_4.png"],
        Js: ["c71.png"],
        ms: ["c41.png"],
        ks: ["c11.png"],
        ys: ["c91.png"],
        xs: ["c61.png"],
        Ls: ["c31.png"]
    };
    for (var a in s.G) s.G[a]._this = s
}, BUJS.M.prototype.F = function() {
    var s = this;
    s.Ms = {
        Rs: 80,
        Ts: 150,
        $s: 135,
        Fs: s.I.W - 350,
        Ys: 3,
        Gs: 67,
        As: 131,
        Ps: 5,
        Xs: 256,
        Ds: 123,
        Es: 3,
        Is: 1,
        Hs: 80,
        Ws: 46,
        Cs: 20,
        qs: 20,
        Ns: 64,
        zs: 14,
        Os: 40,
        Ks: 200,
        Qs: 60,
        Vs: 80,
        Zs: (s.I.D - 600) / 2,
        sa: 11,
        aa: 150
    }
}, BUJS.M.prototype.A = function(s, a, n) {
    var e = s._this;
    async.each(s, function(n, t) {
        if ("string" == typeof n) {
            var u = new Image;
            u.onload = function() {
                void 0 === e.G[a] && (e.G[a] = []), e.G[a][s.indexOf(n)] = u, t()
            }, u.src = e.I.C + n
        }
    }, function(s) {
        s || n()
    })
}, BUJS.M.prototype.na = function() {
    var s = this;
    s.X.fillStyle = "black", s.X.clearRect(0, 0, s.I.D, s.I.W)
}, BUJS.M.prototype.ea = function(s, a, n, e, t) {
    var u = this;
    e || (e = "12px"), n || (n = "Arial"), t || (t = "white"), u.X.font = e + " " + n, u.X.fillStyle = t, u.X.textAlign = "left", u.X.fillText(a, s.x, s.y)
}, BUJS.M.prototype.ta = function(s, a) {
    var n = this;
    void 0 !== s && null !== s && void 0 !== s.pos && (void 0 === a && (a = 1), n.X.drawImage(s, s.pos.x, s.pos.y, s.width * a, s.height * a))
}, BUJS.M.prototype.ua = function(s) {
    var a = this;
    a.ta(a.G.Q[0]), a.ta(a.G.ss[0]), a.ta(a.G.V[0]), a.ta(a.G.as[0]), a.ta(a.G.N[0]), a.ia(s), a.ca()
}, BUJS.M.prototype.ra = function() {
    var s = this;
    s.ta(s.G.Js[0]), s.ta(s.G.ys[0]), s.ta(s.G.ms[0]), s.ta(s.G.xs[0]), s.ta(s.G.ks[0]), s.ta(s.G.Ls[0])
}, BUJS.M.prototype.ca = function() {
    var s = this,
        a = (s.I.D - 135) / 2,
        n = s.Ms.Fs + s.Ms.Ns;
    s.ea({
        x: a,
        y: n
    }, "X/P/G/C/B/M: " + bujs.a.ba + "/" + bujs.a.oa[0] + "/" + bujs.a.oa[1] + "/" + bujs.a.oa[2] + "/" + bujs.a.oa[3] + "/" + bujs.a.oa[4]), s.ea({
        x: a,
        y: n + 16
    }, "Score:" + Math.round(bujs.a.ja)), s.ea({
        x: a,
        y: n + 32
    }, "Combo:" + bujs.a.pa);
    var e = bujs.a.oa,
        t = 0;
    0 === e[0] && 0 === e[1] && 0 === e[2] && 0 === e[3] && 0 === e[4] || (t = 100 * e[0] / (e[0] + e[1] + e[2] + e[3] + e[4])), s.ea({
        x: a,
        y: n + 48
    }, "Perfect %:" + t.toFixed(2) + "%"), s.ea({
        x: a,
        y: n + 64
    }, "Max X:" + bujs.a.fa)
}, BUJS.M.prototype.ia = function(s) {
    var a = this;
    s && (s >= 100 && s < 400 ? a.ta(a.G.vs[0]) : s >= 400 && a.ta(a.G.hs[0])), a.ta(a.G.ns[0])
}, BUJS.M.prototype.ga = function(s) {
    var a = this,
        n = null,
        e = null,
        t = 0,
        u = 0;
    if (s >= 400 ? (n = a.G.ls, t = 6) : s >= 100 ? (n = a.G.ls, e = a.G._s, u = 6 - (t = Math.floor((s - 100) / 50))) : (n = a.G._s, s >= 80 ? t = 5 : s >= 60 ? t = 4 : s >= 40 ? t = 3 : s >= 20 ? t = 2 : s >= 10 && (t = 1)), null != n)
        for (i = 0; i < t; i++) a.la(n[0], a.I.D / 2 - a.Ms.Ws / 2 * (5 - 2 * i) - a.G.ls[0].width / 2, a.I.W - a.Ms.Hs - a.G.ls[0].height / 2), a.ta(n[0]), a.ta(a.G.gs[i]);
    if (null != e)
        for (var i = t; i < t + u; i++) a.la(e[0], a.I.D / 2 - a.Ms.Ws / 2 * (5 - 2 * i) - a.G.ls[0].width / 2, a.I.W - a.Ms.Hs - a.G.ls[0].height / 2), a.ta(e[0]), a.ta(a.G.gs[i])
}, BUJS.M.prototype._a = function() {
    var s = this;
    s.ta(s.G.K[0]), s.ta(s.G.Z[0])
}, BUJS.M.prototype.la = function(s, a, n) {
    s.pos = {
        x: a,
        y: n
    }
}, BUJS.M.prototype.P = function() {
    var s = this;
    s.la(s.G.N[0], s.I.D - s.G.N[0].width - s.Ms.Cs, s.I.W - s.G.N[0].height - s.Ms.Cs), s.la(s.G.K[0], 0, s.Ms.Fs), s.la(s.G.Q[0], s.Ms.Ds - s.Ms.Es - s.Ms.Rs, s.Ms.Fs), s.la(s.G.V[0], s.G.Q[0].pos.x + s.Ms.Xs, s.Ms.Fs), s.la(s.G.Z[0], s.I.D - s.Ms.Ds, s.Ms.Fs), s.la(s.G.ss[0], s.I.D - s.Ms.Ds + s.Ms.Es - s.Ms.Xs + s.Ms.Rs, s.Ms.Fs), s.la(s.G.as[0], s.I.D - s.Ms.Ds + s.Ms.Es - s.Ms.Xs - s.G.as[0].width + s.Ms.Rs, s.Ms.Fs), s.la(s.G.ns[0], (s.I.D - s.G.ns[0].width) / 2, s.I.W - s.Ms.Hs - s.G.ns[0].height / 2), s.la(s.G.ds[0], s.I.D / 2 + s.G.ns[0].width / 2, s.I.W - s.Ms.Hs - s.G.ds[0].height / 2), s.la(s.G.ds[1], s.I.D / 2 + s.G.ns[0].width / 2, s.I.W - s.Ms.Hs - s.G.ds[1].height / 2), s.la(s.G.ws[0], s.I.D / 2 - s.G.ns[0].width / 2 - s.G.ws[0].width, s.I.W - s.Ms.Hs - s.G.ws[0].height / 2), s.la(s.G.ws[1], s.I.D / 2 - s.G.ns[0].width / 2 - s.G.ws[1].width, s.I.W - s.Ms.Hs - s.G.ws[1].height / 2), s.la(s.G.ws[2], s.I.D / 2 - s.G.ns[0].width / 2 - s.G.ws[2].width, s.I.W - s.Ms.Hs - s.G.ws[2].height / 2), s.la(s.G.ws[3], s.I.D / 2 - s.G.ns[0].width / 2 - s.G.ws[3].width, s.I.W - s.Ms.Hs - s.G.ws[3].height / 2), s.la(s.G.hs[0], (s.I.D - s.G.ns[0].width) / 2, s.I.W - s.Ms.Hs - s.G.ns[0].height / 2), s.la(s.G.vs[0], (s.I.D - s.G.ns[0].width) / 2, s.I.W - s.Ms.Hs - s.G.ns[0].height / 2);
    for (var a = 0; a < 6; a++) s.la(s.G.gs[a], s.I.D / 2 - s.Ms.Ws / 2 * (5 - 2 * a) - s.G.gs[0].width / 2, s.I.W - s.Ms.Hs - s.G.gs[0].height / 2);
    var n = s.I.D - s.G.rs[0].width;
    s.la(s.G.Js[0], 0, s.Ms.Fs + s.Ms.Ys), s.la(s.G.ys[0], n, s.Ms.Fs + s.Ms.Ys), s.la(s.G.ms[0], 0, s.Ms.Fs + s.Ms.Gs), s.la(s.G.xs[0], n, s.Ms.Fs + s.Ms.Gs), s.la(s.G.ks[0], 0, s.Ms.Fs + s.Ms.As), s.la(s.G.Ls[0], n, s.Ms.Fs + s.Ms.As)
}, BUJS.M.prototype.ha = function(s, a, n, e, t) {
    var u = this,
        i = 0,
        c = u.Ms.Fs + n,
        r = bujs.a.va.L();
    (i = e ? a + u.Ms.Ds - u.Ms.Es + u.Ms.Xs - u.Ms.Rs + u.Ms.Is - 40 * (t - r - 0) / bujs.a.va.h : u.I.D - (a + u.Ms.Ds - u.Ms.Es + u.Ms.Xs - u.Ms.Rs + u.Ms.Is + s.width) + 40 * (t - r - 0) / bujs.a.va.h) > u.I.D - u.Ms.Ds || i + s.width < u.Ms.Ds || (u.la(s, i, c), u.ta(s))
}, BUJS.M.prototype.Ua = function() {
    var s = this;
    s.ha(s.G.rs[0], 1, s.Ms.Ys, !0, bujs.a.va.L()), s.ha(s.G.js[0], 1, s.Ms.Ys, !1, bujs.a.va.L()), s.ha(s.G.bs[0], 1 + s.Ms.Ps, s.Ms.Gs, !0, bujs.a.va.L()), s.ha(s.G.ps[0], 1 + s.Ms.Ps, s.Ms.Gs, !1, bujs.a.va.L()), s.ha(s.G.os[0], 1, s.Ms.As, !0, bujs.a.va.L()), s.ha(s.G.fs[0], 1, s.Ms.As, !1, bujs.a.va.L())
}, BUJS.M.prototype.Ba = function(s) {
    var a = this,
        n = Math.min(bujs.a.Sa + a.Ms.zs, bujs.a.va.g._.length);
    if (bujs.a.Sa >= 0)
        for (var e = bujs.a.va.h, t = bujs.a.Sa; t < n; t++) {
            var u = bujs.a.va.g._[t],
                i = u.t,
                c = u.n,
                r = s + e * (a.Ms.zs + 1),
                b = s + 8 * e;
            if (5 !== c && i > r || 5 === c && i > b) break;
            if (!u.da) {
                var o = 0,
                    j = !0,
                    p = 0,
                    f = null,
                    g = s - i;
                if (g < 0 && (g = -g), o = Math.round(g / e) % 4, 0 === bujs.a.wa) switch (c) {
                    case 7:
                        f = a.G.rs[o], p = a.Ms.Ys;
                        break;
                    case 4:
                        f = a.G.bs[o], p = a.Ms.Gs;
                        break;
                    case 1:
                        f = a.G.os[o], p = a.Ms.As;
                        break;
                    case 9:
                        j = !1, f = a.G.js[o], p = a.Ms.Ys;
                        break;
                    case 6:
                        j = !1, f = a.G.ps[o], p = a.Ms.Gs;
                        break;
                    case 3:
                        j = !1, f = a.G.fs[o], p = a.Ms.As
                }
                if (1 === bujs.a.wa) switch (c) {
                    case 7:
                        f = a.G.rs[o], p = a.Ms.Gs;
                        break;
                    case 4:
                        f = a.G.bs[o], p = a.Ms.Gs;
                        break;
                    case 1:
                        f = a.G.os[o], p = a.Ms.Gs;
                        break;
                    case 9:
                        j = !1, f = a.G.js[o], p = a.Ms.Gs;
                        break;
                    case 6:
                        j = !1, f = a.G.ps[o], p = a.Ms.Gs;
                        break;
                    case 3:
                        j = !1, f = a.G.fs[o], p = a.Ms.Gs
                }
                if (2 === bujs.a.wa) switch (c) {
                    case 7:
                        f = a.G.rs[o], p = a.Ms.As;
                        break;
                    case 4:
                        f = a.G.bs[o], p = a.Ms.Gs;
                        break;
                    case 1:
                        f = a.G.os[o], p = a.Ms.Ys;
                        break;
                    case 9:
                        j = !1, f = a.G.js[o], p = a.Ms.As;
                        break;
                    case 6:
                        j = !1, f = a.G.ps[o], p = a.Ms.Gs;
                        break;
                    case 3:
                        j = !1, f = a.G.fs[o], p = a.Ms.Ys
                }
                if (null !== f) a.ha(f, 0, p, j, i);
                else if (5 === c) {
                    var l = (a.I.D - a.G.es[0].width) / 2 - (i - s) / e * 31 / 2,
                        _ = (a.I.D - a.G.es[0].width) / 2 + (i - s) / e * 31 / 2,
                        h = a.I.W - a.Ms.Hs - a.G.es[0].height / 2;
                    a.la(a.G.es[0], l, h), a.ta(a.G.es[0]), a.la(a.G.es[0], _, h), a.ta(a.G.es[0])
                }
            }
        }
}, BUJS.M.prototype.Ja = function() {
    var s = this;
    if (bujs.a.ma > 0) {
        var a = bujs.a.va.L() - bujs.a.ma,
            n = s.G.Ss[bujs.a.ka],
            e = 1;
        a < 50 && (e = 1 + (50 - a) / 90), s.la(n, (s.I.D - n.width * e) / 2, (s.Ms.Ts - n.height * e) / 2), s.ta(n, e), a > 200 && (bujs.a.ka = 0, bujs.a.ma = 0)
    }
}, BUJS.ya = function() {
    var s = this;
    $("body")[0].onkeydown = function(a) {
        var n = a.keyCode;
        s.xa(n)
    };
    var a = document.getElementsByTagName("canvas")[0];
    a.addEventListener("touchstart", function(a) {
        s.La(a)
    }, !1), bujs.S && a.addEventListener("touchend", function(a) {
        s.Ma(a)
    }, !1)
}, BUJS.ya.prototype.xa = function(s) {
    var a = this;
    switch (s) {
        case 112:
            bujs.a.Ra = !bujs.a.Ra;
            break;
        case 113:
            break;
        case 114:
            bujs.a.wa = (bujs.a.wa + 1) % 3;
            break;
        case 115:
            bujs.a.Ta = (bujs.a.Ta + 1) % (bujs.a.$a.G.q.length + 1);
            break;
        case 16:
            bujs.a.Fa = !bujs.a.Fa;
            break;
        case 93:
            bujs.a.Ya = !bujs.a.Ya;
        case 55:
        case 82:
        case 103:
        case 36:
            bujs.a.Ya || a.Ga(7);
            break;
        case 52:
        case 70:
        case 100:
        case 37:
            bujs.a.Ya || a.Ga(4);
            break;
        case 49:
        case 86:
        case 97:
        case 35:
            bujs.a.Ya || a.Ga(1);
            break;
        case 57:
        case 73:
        case 105:
        case 33:
            bujs.a.Ya || a.Ga(9);
            break;
        case 54:
        case 75:
        case 102:
        case 39:
            bujs.a.Ya || a.Ga(6);
            break;
        case 51:
        case 77:
        case 99:
        case 34:
            bujs.a.Ya || a.Ga(3);
            break;
        case 48:
        case 53:
        case 32:
        case 96:
        case 101:
            bujs.a.Ya || a.Ga(5)
    }
}, BUJS.ya.prototype.Ga = function(s) {
    var a = !0,
        n = -1,
        e = 0,
        t = 0,
        u = 0,
        i = 0;
    switch (s) {
        case 7:
            n = 0, u = bujs.a.$a.Ms.Ys;
            break;
        case 4:
            n = 1, t = 6, u = bujs.a.$a.Ms.Gs;
            break;
        case 1:
            n = 2, u = bujs.a.$a.Ms.As;
            break;
        case 9:
            n = 3, a = !1, u = bujs.a.$a.Ms.Ys;
            break;
        case 6:
            n = 4, a = !1, t = -5, u = bujs.a.$a.Ms.Gs;
            break;
        case 3:
            n = 5, a = !1, u = bujs.a.$a.Ms.As
    }
    n >= 0 && (a ? (e = bujs.a.$a.Ms.Ds - bujs.a.$a.Ms.Es - bujs.a.$a.Ms.Rs - bujs.a.$a.Ms.Is, t = t + bujs.a.$a.Ms.Ds - bujs.a.$a.Ms.Es + bujs.a.$a.Ms.Xs - bujs.a.$a.Ms.Rs + bujs.a.$a.Ms.Is) : (e = bujs.a.$a.I.D - (bujs.a.$a.Ms.Ds - bujs.a.$a.Ms.Rs + bujs.a.$a.Ms.Xs - bujs.a.$a.Ms.Is + bujs.a.$a.G.os[0].width + 3), t = t + bujs.a.$a.I.D - (bujs.a.$a.Ms.Ds - bujs.a.$a.Ms.Es + bujs.a.$a.Ms.Xs - bujs.a.$a.Ms.Rs + bujs.a.$a.Ms.Is + bujs.a.$a.G.os[0].width + 1)), i = u + bujs.a.$a.Ms.Fs + bujs.a.$a.G.os[0].height / 2 - bujs.a.$a.G.O[0].height / 2, u = u + bujs.a.$a.Ms.Fs + bujs.a.$a.G.os[0].height / 2 - bujs.a.$a.G.z[0].height / 2, bujs.a.Aa.push(new BUJS.Pa(bujs.a.$a, bujs.a.va.L(), bujs.a.$a.Ms.$s, bujs.a.$a.G.z[n], e, u)), bujs.a.Aa.push(new BUJS.Pa(bujs.a.$a, bujs.a.va.L(), bujs.a.$a.Ms.$s, bujs.a.$a.G.O[n], t, i))), 5 === s && bujs.a.Aa.push(new BUJS.Pa(bujs.a.$a, bujs.a.va.L(), bujs.a.$a.Ms.$s, bujs.a.$a.G.ts[0], (bujs.a.$a.I.D - bujs.a.$a.G.ts[0].width) / 2, bujs.a.$a.I.W - bujs.a.$a.Ms.Hs - bujs.a.$a.G.ts[0].height / 2)), bujs.a.Xa(s)
}, BUJS.ya.prototype.La = function(s) {
    s.preventDefault();
    for (var a = this, n = s.changedTouches[0].target, e = n.offsetLeft, t = n.offsetTop, u = bujs.a.$a.G.rs[0], i = bujs.a.$a.G.ns[0], c = bujs.a.$a.G.N[0], r = bujs.a.$a.Ms.Ds - bujs.a.$a.Ms.Es + bujs.a.$a.Ms.Xs - bujs.a.$a.Ms.Rs + bujs.a.$a.Ms.Is, b = bujs.a.$a.I.D - (bujs.a.$a.Ms.Ds - bujs.a.$a.Ms.Es + bujs.a.$a.Ms.Xs - bujs.a.$a.Ms.Rs + bujs.a.$a.Ms.Is + u.width), o = (bujs.a.$a.I.D - i.width) / 2, j = bujs.a.$a.I.W - bujs.a.$a.Ms.Hs - i.height / 2, p = 0; p < s.changedTouches.length; p++) {
        var f = s.changedTouches[p],
            g = f.pageX - e,
            l = f.pageY - t,
            _ = 0,
            h = 0;
        l >= bujs.a.$a.Ms.Fs + bujs.a.$a.Ms.Ys && l <= bujs.a.$a.Ms.Fs + bujs.a.$a.Ms.Ys + u.height && (h = 1), l >= bujs.a.$a.Ms.Fs + bujs.a.$a.Ms.Gs && l <= bujs.a.$a.Ms.Fs + bujs.a.$a.Ms.Gs + u.height && (h = 2), l >= bujs.a.$a.Ms.Fs + bujs.a.$a.Ms.As && l <= bujs.a.$a.Ms.Fs + bujs.a.$a.Ms.As + u.height && (h = 3);
        var v = 0;
        (g >= r && g <= r + u.width || g >= 0 && g <= bujs.a.$a.G.K[0].width) && (v = 1), (g >= b && g <= b + u.width || g >= bujs.a.$a.I.D - bujs.a.$a.G.Z[0].width && g <= bujs.a.$a.I.D) && (v = 2), 1 === h && 1 === v ? _ = 7 : 2 === h && 1 === v ? _ = 4 : 3 === h && 1 === v ? _ = 1 : 1 === h && 2 === v ? _ = 9 : 2 === h && 2 === v ? _ = 6 : 3 === h && 2 === v && (_ = 3), g >= o && g <= o + i.width && l >= j && l <= j + i.height && (_ = 5), g >= 0 && g <= c.width && l >= bujs.a.$a.I.W - c.height && l <= bujs.a.$a.I.W && (_ = 5), g >= bujs.a.$a.I.D - c.width && g <= bujs.a.$a.I.D && l >= bujs.a.$a.I.W - c.height && l <= bujs.a.$a.I.W && (_ = 5), 0 !== _ && a.Ga(_)
    }
}, BUJS.ya.prototype.Ma = function(s) {
    var a = bujs.a.va;
    void 0 !== a.m && null !== a.m || a.o.decodeAudioData(a.d.slice(0), function(s) {
        a.w = a.J(s), a.m = a.o.currentTime, a.w.start(0), void 0 !== a.j && a.j.call(bujs.a, a)
    }, function(s) {})
}, BUJS.Pa = function(s, a, n, e, t, u) {
    this.$a = s, this.Da = a, this.Ea = n || bujs.a.$a.Ms.$s, this.Ia = e || null, this.Ha = t || 0, this.Wa = u || 0
}, BUJS.Pa.prototype.Ca = function(s) {
    var a = this;
    return 1 - (s - a.Da) / a.Ea
}, BUJS.Pa.prototype.qa = function(s) {
    var a = this;
    null != a.Ia && (a.Da + a.Ea > s ? a.Da <= s && (a.Ia.pos = {
        x: a.Ha,
        y: a.Wa
    }, a.$a.X.globalAlpha = a.Ca(s), a.$a.ta(a.Ia), a.$a.X.globalAlpha = 1) : a.Da = -1)
}, BUJS.Na = function(s) {
    var a = this;
    this.f = s, this.za = [], this.Oa = 0, this.Ka = 0, this.Sa = 0, this.ka = 0, this.ma = 0, this.Qa = 0, this.oa = [0, 0, 0, 0, 0], this.ja = 0, this.ba = 0, this.pa = 0, this.fa = 0, this.wa = 0, this.Ta = 0, this.Fa = !1, this.Ra = !1, this.Va = 0, this.Aa = [], this.Za = [], this.Ya = !1, this.sn = !1, this.an = [480, 240, 120, 60, 0], this.nn = 2e3, this.en = 1.2, this.tn = 1.44, setTimeout(function() {
        a.va = new BUJS.e(a.j)
    }, 0), this.$a = new BUJS.M(this.j), this.$a.Y(), this.un = new BUJS.ya
}, BUJS.Na.prototype.j = function(s) {
    var a = this;
    if (void 0 !== s) {
        var n = s.constructor.name;
        a.za.indexOf(s) < 0 && a.za.push(n), 2 === a.za.length && a.in()
    }
}, BUJS.Na.prototype.in = function() {
    gl_()
}, BUJS.Na.prototype.s = function() {
    var s = this;
    s.cn(), s.rn(), null !== s.va.o && window.requestAnimationFrame(gl_)
}, BUJS.Na.prototype.rn = function() {
    var s = this;
    s.$a.na(), 0 !== bujs.a.Ta && s.$a.ta(s.G.q[bujs.a.Ta - 1]), void 0 !== s.va.m && null !== s.va.m || bujs.B("Touch/click to start music");
    var a = s.bn(),
        n = {
            x: 5,
            y: 15
        };
    s.$a.ea(n, a.toFixed(1)), s.$a.ea({
        x: 5,
        y: s.$a.I.W - 5
    }, s.va.L().toFixed(2)), s.$a.ea({
        x: 5,
        y: s.$a.I.W - 5 - 16
    }, s.va.g.name + " - " + s.va.g.singer + " [" + s.va.g.bpm.toFixed(1) + " bpm]"), s.$a.ua(s.pa), s.$a.ga(s.pa), s.Fa && s.$a.Ua(), s.jn(), s.$a.Ba(s.va.L()), s.$a.Ja(), s.pn(), s.$a._a(), s.$a.ra()
}, BUJS.Na.prototype.cn = function() {}, BUJS.Na.prototype.bn = function() {
    var s = this,
        a = s.va.L();
    return s.Oa++, 0 === s.Qa && (s.Qa = a), a > s.Qa + 1e3 && (s.Ka = s.Oa / (a - s.Qa) * 1e3, s.Qa = a, s.Oa = 0), s.Ka
}, BUJS.Na.prototype.pn = function() {
    var s = this,
        a = s.va.L(),
        n = Math.min(s.Sa + s.$a.Ms.zs, s.va.g._.length);
    if (s.Ya) {
        if (s.Sa >= 0)
            for (var e = s.Sa; e < n; e++)
                if (s.va.g._[e].t < a + 5) {
                    s.un.Ga(s.va.g._[e].n);
                    break
                }
    } else {
        if (s.Sa >= 0)
            for (e = s.Sa; e < n; e++) a > s.va.g._[e].t + 2 * s.va.h && (s.va.g._[e].da = !0, s.ka = 4, s.ma = a, s.va.k(s.va.u.r), s.fn(s.va.g._[e].n, 4));
        s.Sa = -1;
        for (var t = 0; t < s.va.g._.length; t++)
            if (!s.va.g._[t].da) {
                s.Sa = t;
                break
            }
    }
}, BUJS.Na.prototype.Xa = function(s) {
    var a = this,
        n = -1;
    if (0 !== s || a.Ya)
        for (var e = a.va.L(), t = a.Sa; t < a.Sa + 4 && !(a.Sa >= a.va.g._.length || a.Sa < 0); t++) {
            var u = a.va.g._[t],
                i = u.n,
                c = e - u.t;
            if ((i === s || a.Ya || a.sn) && (n = a.gn(c), 5 === i && a.Aa.push(new BUJS.Pa(a.$a, e, a.$a.Ms.$s, a.$a.G.ts[0], (a.$a.I.D - a.$a.G.ts[0].width) / 2, a.$a.I.W - a.$a.Ms.Hs - a.$a.G.ts[0].height / 2)), n >= 0 || a.Ya)) {
                switch (i) {
                    case 5:
                        a.Aa.push(new BUJS.Pa(a.$a, e, a.$a.Ms.$s, a.$a.G.us[0], (a.$a.I.D - a.$a.G.us[0].width) / 2, a.$a.I.W - a.$a.Ms.Hs - a.$a.G.us[0].height / 2))
                }
                if (4 !== n && 5 !== i) {
                    var r = !0,
                        b = 0;
                    switch (i) {
                        case 7:
                            b = a.$a.Ms.Ys;
                            break;
                        case 4:
                            b = a.$a.Ms.Gs;
                            break;
                        case 1:
                            b = a.$a.Ms.As;
                            break;
                        case 9:
                            r = !1, b = a.$a.Ms.Ys;
                            break;
                        case 6:
                            r = !1, b = a.$a.Ms.Gs;
                            break;
                        case 3:
                            r = !1, b = a.$a.Ms.As
                    }
                    b = a.$a.Ms.Fs + b + a.$a.G.os[0].height / 2, r ? a.Aa.push(new BUJS.Pa(a.$a, e, a.$a.Ms.$s, a.$a.G.cs[0], a.$a.Ms.Ds - a.$a.Ms.Es + a.$a.Ms.Xs - a.$a.Ms.Rs + a.$a.Ms.Is + a.$a.G.os[0].width / 2 - a.$a.G.cs[0].width / 2, b - a.$a.G.cs[0].width / 2)) : a.Aa.push(new BUJS.Pa(a.$a, e, a.$a.Ms.$s, a.$a.G.cs[0], a.$a.I.D - (a.$a.Ms.Ds - a.$a.Ms.Es + a.$a.Ms.Xs - a.$a.Ms.Rs + a.$a.Ms.Is + a.$a.G.os[0].width / 2) - a.$a.G.cs[0].width / 2, b - a.$a.G.cs[0].height / 2))
                }
                5 === i ? a.va.k(a.va.u.b) : 0 === n ? a.va.k(a.va.u.i) : 4 === n ? a.va.k(a.va.u.r) : a.va.k(a.va.u.c), a.fn(i, n), u.da = !0, a.Sa = -1;
                for (var o = 0; o < a.va.g._.length; o++)
                    if (void 0 === a.va.g._[o].da || !a.va.g._[o].da) {
                        a.Sa = o;
                        break
                    }
                a.ka = n, a.ma = e;
                break
            }
        }
}, BUJS.Na.prototype.gn = function(s) {
    var a = this;
    if (a.Ya) return 0;
    var n = a.va.h;
    return s > 4 * n * 80 / 100 || s < 4 * -n ? -1 : (s < 0 && (s = -s), s <= 4 * n * 5 / 100 ? 0 : s <= 4 * n * 15 / 100 ? 1 : s <= 4 * n * 27 / 100 ? 2 : s <= 4 * n * 40 / 100 ? 3 : 4)
}, BUJS.Na.prototype.jn = function() {
    for (var s = this, a = 0; a < s.Aa.length; a++) s.Aa[a].qa(s.va.L());
    for (a = s.Aa.length - 1; a >= 0; a--) s.Aa[a].Da < 0 && s.Aa.splice(a, 1)
}, BUJS.Na.prototype.fn = function(s, a) {
    var n = this,
        e = 0;
    5 === s ? a >= 0 && 4 !== a && (e = n.nn) : a >= 0 && (e = n.an[a]), n.pa >= 400 ? e *= n.tn : n.pa >= 100 && (e *= n.en), n.ja += e, n.oa[a]++, 4 !== a && a >= 0 ? n.pa++ : n.pa = 0, 0 === n.ka && 0 === a ? n.ba++ : n.ba = 0, n.ba > n.fa && (n.fa = n.ba)
}, BUJS.prototype.ln = function() {
    var s = this;
    s._n(), s.B("Loading extra UI components"), $.get("template/modal.html", function(a) {
        $("#template-container").html(a), s.hn()
    }), s.S = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}, BUJS.prototype.vn = function(s) {
    var a = document.querySelector(s),
        n = document.importNode(a.content, !0);
    document.body.appendChild(n)
}, BUJS.prototype.Un = function() {
    var s = $("#login-modal");
    s.on("shown.bs.modal", function() {
        s.find("#username").focus()
    }), s.modal("show")
}, BUJS.prototype.hn = function() {
    var s = this;
    s.B("Loading songs"), $.get("notes/list.json", function(a) {
        s.l = a, s.Bn()
    })
}, BUJS.prototype.Bn = function() {
    var s = this;
    s.B(""), s.vn("#songlist-template");
    var a = $("#songlist-modal"),
        n = a.find("#songlist-container");
    for (var e in s.l) {
        var t = s.l[e],
            u = document.createElement("li");
        u.setAttribute("class", "songListItem"), u.setAttribute("songid", e), u.innerText = "[" + t.bpm.toFixed(1) + "] " + t.singer + " " + t.name + " (" + t.slkauthor + ")", u.onclick = s.Sn, n.append(u)
    }
    a.modal("show")
}, BUJS.prototype._n = function() {
    var s = document.getElementById("cvs");
    s.width = 980, s.height = 400
}, BUJS.prototype.Sn = function() {
    var s = this.getAttribute("songid");
    bujs.a = new BUJS.Na(s), $("#songlist-modal").modal("hide")
}, BUJS.prototype.B = function(s) {
    var a = document.getElementById("cvs"),
        n = a.getContext("2d"),
        e = a.width,
        t = a.height;
    n.fillStyle = "black", n.clearRect(0, 0, e, t), n.font = "12px Arial", n.fillStyle = "white", n.textAlign = "center", n.fillText(s, e / 2, t / 2)
}, bujs = new BUJS, $(window).on("load", function() {
    bujs.ln()
});
