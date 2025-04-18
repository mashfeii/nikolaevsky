(() => {
    var __webpack_modules__ = {
        113: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                const e = "font-weight: normal;", t = e + "font-style: italic;", n = "default", o = Object.freeze({
                    assert: !0,
                    error: !0,
                    warn: !0
                }), i = {
                    expand: !0,
                    defaultEvent: void 0,
                    event: void 0,
                    label: "AutoConsoleGroup",
                    showTime: !0
                }, r = {
                    profile: 0,
                    profileEnd: 0,
                    timeStamp: 0,
                    trace: 0
                }, a = Object.assign(console);
                const {fromEntries: s, keys: l} = Object, c = e => [ e, a[e] ], u = e => t => [ t, function(n) {
                    e[t] = n;
                } ], d = (e, t) => s(l(e).map(t));
                const f = !(typeof window > "u" || "function" != typeof window.matchMedia) && window.matchMedia("(prefers-color-scheme: dark)").matches, p = f ? "color: #A9C7FB;" : "color: #135CD2;", h = f ? "color: #E3E3E3;" : "color: #1F1F1F;", m = "5.4.5", g = "iframeResizer", y = "[iFrameSizer]", w = Object.freeze({
                    max: 1,
                    scroll: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                }), b = "onload", v = "init", z = Object.freeze({
                    [b]: 1,
                    [v]: 1
                }), $ = "expanded", j = "collapsed", k = Object.freeze({
                    [$]: 1,
                    [j]: 1
                }), x = e => t => window.chrome ? e(t.replaceAll("<br>", "\n").replaceAll("<rb>", "[31;1m").replaceAll("</>", "[m").replaceAll("<b>", "[1m").replaceAll("<i>", "[3m").replaceAll("<u>", "[4m")) : e((e => e.replaceAll("<br>", "\n").replaceAll(/<[/a-z]+>/gi, ""))(t)), T = e => e, M = (E = function(s = {}) {
                    const l = {}, f = {}, p = [], h = {
                        ...i,
                        expand: !s.collapsed || i.expanded,
                        ...s
                    };
                    let m = "";
                    function g() {
                        p.length = 0, m = "";
                    }
                    function y() {
                        delete h.event, g();
                    }
                    const w = () => !!p.some((([e]) => e in o)) || !!h.expand;
                    function b() {
                        if (0 !== p.length) {
                            a[w() ? "group" : "groupCollapsed"](`%c${h.label}%c ${(e => {
                                const t = e.event || e.defaultEvent;
                                return t ? `${t}` : "";
                            })(h)} %c${h.showTime ? m : ""}`, e, "font-weight: bold;", t);
                            for (const [e, ...t] of p) a.assert(e in a, `Unknown console method: ${e}`), e in a && a[e](...t);
                            a.groupEnd(), y();
                        } else y();
                    }
                    function v() {
                        "" === m && (m = function() {
                            const e = new Date, t = (t, n) => e[t]().toString().padStart(n, "0");
                            return `@ ${t("getHours", 2)}:${t("getMinutes", 2)}:${t("getSeconds", 2)}.${t("getMilliseconds", 3)}`;
                        }());
                    }
                    function z(e, ...t) {
                        0 === p.length && (v(), queueMicrotask((() => queueMicrotask(b)))), p.push([ e, ...t ]);
                    }
                    function $(e = n, ...t) {
                        l[e] ? z("log", `${e}: ${performance.now() - l[e]} ms`, ...t) : z("timeLog", e, ...t);
                    }
                    return {
                        ...d(h, u(h)),
                        ...d(console, (e => [ e, (...t) => z(e, ...t) ])),
                        ...d(r, c),
                        assert: function(e, ...t) {
                            e || z("assert", e, ...t);
                        },
                        count: function(e = n) {
                            f[e] ? f[e] += 1 : f[e] = 1, z("log", `${e}: ${f[e]}`);
                        },
                        countReset: function(e = n) {
                            delete f[e];
                        },
                        endAutoGroup: b,
                        errorBoundary: e => (...t) => {
                            let n;
                            try {
                                n = e(...t);
                            } catch (e) {
                                if (!Error.prototype.isPrototypeOf(e)) throw e;
                                z("error", e);
                            }
                            return n;
                        },
                        event: function(e) {
                            v(), h.event = e;
                        },
                        purge: g,
                        time: function(e = n) {
                            v(), l[e] = performance.now();
                        },
                        timeEnd: function(e = n) {
                            $(e), delete l[e];
                        },
                        timeLog: $,
                        touch: v
                    };
                }, E?.__esModule ? E.default : E);
                var E;
                let O = {}, R = !1;
                const S = e => window.top === window.self ? `parent(${e})` : `nested parent(${e})`;
                const I = e => (t, ...n) => O[t]?.console[e](...n);
                var W;
                const C = (W = "log", (e, ...t) => !0 === (e => O[e] ? O[e].log : R)(e) ? I(W)(e, ...t) : null), A = I("warn"), L = I("error"), F = I("event"), N = I("purge"), H = I("errorBoundary");
                const B = (e, ...t) => O[e] ? O[e].console.warn(x(T)(...t)) : queueMicrotask((() => console?.warn(x((e => (...t) => [ `${g}(${e})`, ...t ].join(" "))(e))(...t)))), P = (e => (t, n = "renamed to") => (o, i, r = "", a = "") => e(a, `<rb>Deprecated ${t}(${o.replace("()", "")})</>\n\nThe <b>${o}</> ${t.toLowerCase()} has been ${n} <b>${i}</>. ${r}Use of the old ${t.toLowerCase()} will be removed in a future version of <i>iframe-resizer</>.`))(B), q = P("Function"), D = P("Option"), U = (e, t, n, o) => e.addEventListener(t, n, o || !1), J = (e, t, n) => e.removeEventListener(t, n, !1), Z = e => {
                    if (!e) return "";
                    let t = -559038744, n = 1103547984;
                    for (let o, i = 0; i < e.length; i++) o = e.codePointAt(i), t = Math.imul(t ^ o, 2246822519), 
                    n = Math.imul(n ^ o, 3266489917);
                    return t ^= Math.imul(t ^ n >>> 15, 1935289751), n ^= Math.imul(n ^ t >>> 15, 3405138345), 
                    t ^= n >>> 16, n ^= t >>> 16, (2097152 * (n >>> 0) + (t >>> 11)).toString(36);
                }, V = e => e.replace(/[A-Za-z]/g, (e => String.fromCodePoint((e <= "Z" ? 90 : 122) >= (e = e.codePointAt(0) + 19) ? e : e - 26))), X = [ "<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>", "<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>", "Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>", "<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.", "<iy><yi>Zvsv spjluzl kvlz uva zbwwvya jyvzz-kvthpu</><iy><iy>Av bzl <p>pmyhtl-ylzpgly</> dpao jyvzz kvthpu pmyhtlz fvb ullk lpaoly aol Wyvmlzzpvuhs vy Ibzpulzz spjluzlz. Mvy klahpsz vu bwnyhkl wypjpun wslhzl jvuahja pumv@pmyhtl-ylzpgly.jvt." ], Y = [ "NWSc3", "zvsv", "wyv", "ibzpulzz", "vlt" ], G = Object.fromEntries([ "2cgs7fdf4xb", "1c9ctcccr4z", "1q2pc4eebgb", "ueokt0969w", "w2zxchhgqz", "1umuxblj2e5" ].map(((e, t) => [ e, Math.max(0, t - 1) ]))), _ = e => V(X[e]), K = e => {
                    const t = e[V("spjluzl")];
                    if (!t) return -1;
                    const n = t.split("-");
                    let o = function(e = "") {
                        let t = -2;
                        const n = Z(V(e));
                        return n in G && (t = G[n]), t;
                    }(n[0]);
                    return 0 === o || (e => e[2] === Z(e[0] + e[1]))(n) || (o = -2), o;
                }, Q = {}, ee = Object.freeze({
                    autoResize: !0,
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyPadding: null,
                    checkOrigin: !0,
                    direction: "vertical",
                    inPageLinks: !1,
                    heightCalculationMethod: "auto",
                    id: "iFrameResizer",
                    log: !1,
                    logExpand: !1,
                    license: void 0,
                    mouseEvents: !0,
                    offsetHeight: null,
                    offsetWidth: null,
                    postMessageTarget: null,
                    sameDomain: !1,
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    tolerance: 0,
                    waitForLoad: !1,
                    warningTimeout: 5e3,
                    widthCalculationMethod: "auto",
                    onClose: () => !0,
                    onClosed() {},
                    onInit: !1,
                    onMessage: null,
                    onMouseEnter() {},
                    onMouseLeave() {},
                    onReady: e => {
                        "function" == typeof Q[e.id].onInit && (D("init()", "onReady()", "", e.id), Q[e.id].onInit(e));
                    },
                    onResized() {},
                    onScroll: () => !0
                }), te = {
                    position: null,
                    version: m
                };
                function ne(e) {
                    function t() {
                        ue(x), le(T), $("onResized", x);
                    }
                    function n(e) {
                        if ("border-box" !== e.boxSizing) return 0;
                        return (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
                    }
                    function o(e) {
                        if ("border-box" !== e.boxSizing) return 0;
                        return (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
                    }
                    const i = e => k.slice(k.indexOf(":") + 7 + e);
                    const r = (e, t) => (n, o) => {
                        const i = {};
                        var r, a;
                        r = function() {
                            fe(`${n} (${e})`, `${e}:${t()}`, o);
                        }, i[a = o] || (r(), i[a] = requestAnimationFrame((() => {
                            i[a] = null;
                        })));
                    }, a = (e, t) => () => {
                        let n = !1;
                        const o = t => () => {
                            Q[l] ? n && n !== t || (e(t, l), n = t, requestAnimationFrame((() => {
                                n = !1;
                            }))) : s();
                        }, i = o("scroll"), r = o("resize window");
                        function a(e, t) {
                            t(window, "scroll", i), t(window, "resize", r);
                        }
                        function s() {
                            F(l, `stop${t}`), a(0, J), c.disconnect(), u.disconnect(), J(Q[l].iframe, "load", s);
                        }
                        const l = T, c = new ResizeObserver(o("pageObserver")), u = new ResizeObserver(o("iframeObserver"));
                        Q[l] && (Q[l][`stop${t}`] = s, U(Q[l].iframe, "load", s), a(0, U), c.observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        }), u.observe(Q[l].iframe, {
                            attributes: !0,
                            childList: !1,
                            subtree: !1
                        }));
                    }, s = e => () => {
                        e in Q[T] && (Q[T][e](), delete Q[T][e]);
                    }, l = r("pageInfo", (function() {
                        const e = document.body.getBoundingClientRect(), t = x.iframe.getBoundingClientRect(), {scrollY: n, scrollX: o, innerHeight: i, innerWidth: r} = window, {clientHeight: a, clientWidth: s} = document.documentElement;
                        return JSON.stringify({
                            iframeHeight: t.height,
                            iframeWidth: t.width,
                            clientHeight: Math.max(a, i || 0),
                            clientWidth: Math.max(s, r || 0),
                            offsetTop: parseInt(t.top - e.top, 10),
                            offsetLeft: parseInt(t.left - e.left, 10),
                            scrollTop: n,
                            scrollLeft: o,
                            documentHeight: a,
                            documentWidth: s,
                            windowHeight: i,
                            windowWidth: r
                        });
                    })), c = r("parentInfo", (function() {
                        const {iframe: e} = x, {scrollWidth: t, scrollHeight: n} = document.documentElement, {width: o, height: i, offsetLeft: r, offsetTop: a, pageLeft: s, pageTop: l, scale: c} = window.visualViewport;
                        return JSON.stringify({
                            iframe: e.getBoundingClientRect(),
                            document: {
                                scrollWidth: t,
                                scrollHeight: n
                            },
                            viewport: {
                                width: o,
                                height: i,
                                offsetLeft: r,
                                offsetTop: a,
                                pageLeft: s,
                                pageTop: l,
                                scale: c
                            }
                        });
                    })), u = a(l, "PageInfo"), d = a(c, "ParentInfo"), f = s("stopPageInfo"), g = s("stopParentInfo");
                    function w(e) {
                        const t = e.getBoundingClientRect();
                        return ae(), {
                            x: Number(t.left) + Number(te.position.x),
                            y: Number(t.top) + Number(te.position.y)
                        };
                    }
                    function b(e) {
                        const t = e ? w(x.iframe) : {
                            x: 0,
                            y: 0
                        };
                        C(T, `Reposition requested (offset x:%c${t.x}%c y:%c${t.y})`, p, h, p);
                        const n = ((e, t) => ({
                            x: e.width + t.x,
                            y: e.height + t.y
                        }))(x, t), o = window.parentIframe || window.parentIFrame;
                        o ? function(t, n) {
                            t["scrollTo" + (e ? "Offset" : "")](n.x, n.y);
                        }(o, n) : function(e) {
                            te.position = e, v(T);
                        }(n);
                    }
                    function v(e) {
                        const {x: t, y: n} = te.position, o = Q[e]?.iframe;
                        !1 !== $("onScroll", {
                            iframe: o,
                            top: n,
                            left: t,
                            x: t,
                            y: n
                        }) ? le(e) : se();
                    }
                    function z(e) {
                        let t = {};
                        if (0 === x.width && 0 === x.height) {
                            const e = i(9).split(":");
                            t = {
                                x: e[1],
                                y: e[0]
                            };
                        } else t = {
                            x: x.width,
                            y: x.height
                        };
                        $(e, {
                            iframe: x.iframe,
                            screenX: Number(t.x),
                            screenY: Number(t.y),
                            type: x.type
                        });
                    }
                    const $ = (e, t) => oe(T, e, t);
                    function j() {
                        const {height: e, iframe: n, msg: o, type: r, width: a} = x;
                        switch (Q[T]?.firstRun && Q[T] && (Q[T].firstRun = !1), r) {
                          case "close":
                            re(n);
                            break;

                          case "message":
                            l = i(6), $("onMessage", {
                                iframe: x.iframe,
                                message: JSON.parse(l)
                            });
                            break;

                          case "mouseenter":
                            z("onMouseEnter");
                            break;

                          case "mouseleave":
                            z("onMouseLeave");
                            break;

                          case "autoResize":
                            Q[T].autoResize = JSON.parse(i(9));
                            break;

                          case "scrollBy":
                            !function() {
                                const e = x.width, t = x.height, n = window.parentIframe || window.parentIFrame || window;
                                C(T, `scrollBy: x: %c${e}%c y: %c${t}`, p, h, p), n.scrollBy(e, t);
                            }();
                            break;

                          case "scrollTo":
                            b(!1);
                            break;

                          case "scrollToOffset":
                            b(!0);
                            break;

                          case "pageInfo":
                            u();
                            break;

                          case "parentInfo":
                            d();
                            break;

                          case "pageInfoStop":
                            f();
                            break;

                          case "parentInfoStop":
                            g();
                            break;

                          case "inPageLink":
                            !function(e) {
                                const t = e.split("#")[1] || "", n = decodeURIComponent(t);
                                let o = document.getElementById(n) || document.getElementsByName(n)[0];
                                o ? function() {
                                    const e = w(o);
                                    C(T, `Moving to in page link: %c#${t}`, p), te.position = {
                                        x: e.x,
                                        y: e.y
                                    }, v(T), window.location.hash = t;
                                }() : window.top !== window.self && function() {
                                    const e = window.parentIframe || window.parentIFrame;
                                    e && e.moveToAnchor(t);
                                }();
                            }(i(9));
                            break;

                          case "title":
                            !function(e, t) {
                                Q[t]?.syncTitle && (Q[t].iframe.title = e, C(t, `Set iframe title attribute: %c${e}`, p));
                            }(o, T);
                            break;

                          case "reset":
                            ce(x);
                            break;

                          case "init":
                            t(), function(e) {
                                try {
                                    Q[e].sameOrigin = !!Q[e]?.iframe?.contentWindow?.iframeChildListener;
                                } catch (t) {
                                    Q[e].sameOrigin = !1;
                                }
                            }(T), (s = o) !== m && (void 0 !== s || B(T, "<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")), 
                            me = !0, $("onReady", n);
                            break;

                          default:
                            if (0 === a && 0 === e) return void A(T, `Unsupported message received (${r}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);
                            if (0 === a || 0 === e) return;
                            if (document.hidden) return;
                            t();
                        }
                        var s, l;
                    }
                    let k = e.data, x = {}, T = null;
                    "[iFrameResizerChild]Ready" !== k ? y === `${k}`.slice(0, 13) && k.slice(13).split(":")[0] in Q && (x = function() {
                        const e = k.slice(13).split(":"), t = e[1] ? Number(e[1]) : 0, i = Q[e[0]]?.iframe, r = getComputedStyle(i);
                        return {
                            iframe: i,
                            id: e[0],
                            height: t + n(r) + o(r),
                            width: Number(e[2]),
                            type: e[3],
                            msg: e[4]
                        };
                    }(), T = x.id, T ? (F(T, x.type), H(T, (function() {
                        !function(e) {
                            if (!Q[e]) throw new Error(`${x.type} No settings for ${e}. Message was: ${k}`);
                        }(T), x.type in {
                            true: 1,
                            false: 1,
                            undefined: 1
                        } || (Q[T].loaded = !0, (null !== x.iframe || (A(T, `The iframe (${x.id}) was not found.`), 
                        0)) && function() {
                            const {origin: t, sameOrigin: n} = e;
                            if (n) return !0;
                            let o = Q[T]?.checkOrigin;
                            if (o && "null" != `${t}` && !(o.constructor === Array ? function() {
                                let e = 0, n = !1;
                                for (;e < o.length; e++) if (o[e] === t) {
                                    n = !0;
                                    break;
                                }
                                return n;
                            }() : function() {
                                const e = Q[T]?.remoteHost;
                                return t === e;
                            }())) throw new Error(`Unexpected message received from: ${t} for ${x.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);
                            return !0;
                        }() && j());
                    }))()) : A("", "iframeResizer received messageData without id, message was: ", k)) : Object.keys(Q).forEach((e => {
                        Q[e].mode >= 0 && fe("iFrame requested init", pe(e), e);
                    }));
                }
                function oe(e, t, n) {
                    let o = null, i = null;
                    if (Q[e]) {
                        if (o = Q[e][t], "function" != typeof o) throw new TypeError(`${t} on iFrame[${e}] is not a function`);
                        if ("onClose" === t || "onScroll" === t) try {
                            i = o(n);
                        } catch (n) {
                            console.error(n), A(e, `Error in ${t} callback`);
                        } else setTimeout((() => o(n)));
                    }
                    return i;
                }
                function ie(e) {
                    const {id: t} = e;
                    delete Q[t], delete e.iframeResizer;
                }
                function re(e) {
                    const {id: t} = e;
                    if (!1 !== oe(t, "onClose", t)) {
                        try {
                            e.parentNode && e.remove();
                        } catch (e) {
                            A(t, e);
                        }
                        oe(t, "onClosed", t), ie(e);
                    }
                }
                function ae(e) {
                    null === te.position && (te.position = {
                        x: window.scrollX,
                        y: window.scrollY
                    });
                }
                function se() {
                    te.position = null;
                }
                function le(e) {
                    null !== te.position && (window.scrollTo(te.position.x, te.position.y), C(e, `Set page position: %c${te.position.x}%c, %c${te.position.y}`, p, h, p), 
                    se());
                }
                function ce(e) {
                    ae(e.id), ue(e), fe("reset", "reset", e.id);
                }
                function ue(e) {
                    function t(t) {
                        const o = `${e[t]}px`;
                        e.iframe.style[t] = o, C(n, `Set ${t}: %c${o}`, p);
                    }
                    const {id: n} = e, {sizeHeight: o, sizeWidth: i} = Q[n];
                    o && t("height"), i && t("width");
                }
                O = Q;
                const de = e => e.split(":").filter(((e, t) => 19 !== t)).join(":");
                function fe(e, t, n, o) {
                    function i(o) {
                        const i = e in z ? de(t) : t;
                        C(n, o, p, h, p), C(n, `Message data: %c${i}`, p);
                    }
                    F(n, e), Q[n] && (Q[n]?.postMessageTarget ? function() {
                        const {iframe: e, postMessageTarget: o, sameOrigin: r, targetOrigin: a} = Q[n];
                        if (r) try {
                            return e.contentWindow.iframeChildListener(y + t), void i(`Sending message to iframe %c${n}%c via sameOrigin`);
                        } catch (e) {}
                        i(`Sending message to iframe: %c${n}%c targetOrigin: %c${a}`), o.postMessage(y + t, a);
                    }() : A(n, `Iframe(${n}) not found`), o && Q[n]?.warningTimeout && (Q[n].msgTimeout = setTimeout((function() {
                        if (void 0 === Q[n]) return;
                        const {iframe: e, loaded: t, loadErrorShown: o, waitForLoad: i} = Q[n], {sandbox: r} = e, a = "object" == typeof r && r.length > 0;
                        t || o || (Q[n].loadErrorShown = !0, B(n, `<rb>No response from iFrame</>\n            \nThe iframe (<i>${n}</>) has not responded within ${Q[n].warningTimeout / 1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n${i ? "\nThe <b>waitForLoad</> option is currently set to <i>'true'</>. If the iframe loads before the JavaScript runs, this option will prevent <i>iframe-resizer</> from initialising. To disable this, set the <b>waitForLoad</> option to <i>'false'</>.  \n" : ""}${!a || r.contains("allow-scripts") && r.contains("allow-same-origin") ? "" : "\nThe iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values.\n"} \n${!a || r.contains("allow-scripts") && r.contains("allow-same-origin") ? "" : "The iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values.\n"}This message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`));
                    }), Q[n].warningTimeout)));
                }
                function pe(e) {
                    const t = Q[e];
                    return [ e, "8", t.sizeWidth, t.log, "32", !0, t.autoResize, t.bodyMargin, t.heightCalculationMethod, t.bodyBackground, t.bodyPadding, t.tolerance, t.inPageLinks, "child", t.widthCalculationMethod, t.mouseEvents, t.offsetHeight, t.offsetWidth, t.sizeHeight, t.license, te.version, t.mode, "", t.logExpand ].join(":");
                }
                let he = 0, me = !1, ge = !1;
                const ye = t => n => {
                    function o() {
                        if (Q[d]) {
                            const {iframe: e} = Q[d], t = {
                                close: re.bind(null, e),
                                disconnect: ie.bind(null, e),
                                removeListeners() {
                                    B(d, "\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"), 
                                    this.disconnect();
                                },
                                resize: fe.bind(null, "Window resize", "resize", d),
                                moveToAnchor(e) {
                                    ((e, t, n) => {
                                        if (typeof e !== t) throw new TypeError(`${n} is not a ${o = t, o.charAt(0).toUpperCase() + o.slice(1)}`);
                                        var o;
                                    })(e, "string", "moveToAnchor(anchor) anchor"), fe("Move to anchor", `moveToAnchor:${e}`, d);
                                },
                                sendMessage(e) {
                                    fe("message", `message:${e = JSON.stringify(e)}`, d);
                                }
                            };
                            e.iframeResizer = t, e.iFrameResizer = t;
                        }
                    }
                    function i(e) {
                        const {id: t} = n, {mode: o, waitForLoad: i} = Q[t];
                        -1 !== o && -2 !== o && (U(n, "load", (function() {
                            fe(b, `${e}:${me}`, t, !0), function() {
                                const e = Q[d]?.firstRun, t = Q[d]?.heightCalculationMethod in w;
                                !e && t && ce({
                                    iframe: n,
                                    height: 0,
                                    width: 0,
                                    type: "init"
                                });
                            }();
                        })), !1 === i && fe(v, `${e}:${me}`, t, !0));
                    }
                    function r(e) {
                        return e ? (("sizeWidth" in e || "sizeHeight" in e || "autoResize" in e) && B(d, '<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'), 
                        e) : {};
                    }
                    function a() {
                        const {mode: n} = Q[d];
                        if (n < 0) throw B("Parent", `${_(n + 2)}${_(2)}`), N(d), _(n + 2).replace(/<\/?[a-z][^>]*>|<\/>/gi, "");
                        ge || n > 0 && t.vInfoDisable || function(t, n) {
                            queueMicrotask((() => console.info(`%ciframe-resizer ${t}`, R || n < 1 ? "font-weight: bold;" : e)));
                        }(`v${m} (${(e => V(Y[e]))(n)})`, n), !ge && n < 1 && B("Parent", _(3)), ge = !0;
                    }
                    function s(e) {
                        const t = Q[e]?.iframe?.title;
                        return "" === t || void 0 === t;
                    }
                    const l = e => Object.hasOwn(e, "onMouseEnter") || Object.hasOwn(e, "onMouseLeave");
                    function c(e) {
                        var t, o;
                        Q[d] = {
                            ...Q[d],
                            iframe: n,
                            firstRun: !0,
                            remoteHost: n?.src.split("/").slice(0, 3).join("/"),
                            ...ee,
                            ...r(e),
                            mouseEvents: l(e),
                            mode: K(e),
                            syncTitle: s(d)
                        }, F(d, "setup"), function() {
                            const {direction: e} = Q[d];
                            if ("horizontal" === e) return Q[d].sizeWidth = !0, void (Q[d].sizeHeight = !1);
                            if ("none" === e) return Q[d].sizeWidth = !1, Q[d].sizeHeight = !1, void (Q[d].autoResize = !1);
                            if ("vertical" !== e) throw new TypeError(d, `Direction value of "${e}" is not valid`);
                        }(), (t = e?.offsetSize || e?.offset) && ("vertical" === Q[d].direction ? Q[d].offsetHeight = t : Q[d].offsetWidth = t), 
                        e?.offset && B(d, "<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."), 
                        null === Q[d].postMessageTarget && (Q[d].postMessageTarget = n.contentWindow), Q[d].targetOrigin = !0 === Q[d].checkOrigin ? "" === (o = Q[d].remoteHost) || null !== o.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : o : "*";
                    }
                    const u = () => "iframeResizer" in n, d = function(e) {
                        if (e && "string" != typeof e) throw new TypeError("Invalid id for iFrame. Expected String");
                        return "" !== e && e || (e = function() {
                            let e = t?.id || ee.id + he++;
                            return null !== document.getElementById(e) && (e += he++), e;
                        }(), n.id = e), e;
                    }(n.id);
                    if ("object" != typeof t) throw new TypeError("Options is not an object");
                    return function(e) {
                        const {search: t} = window.location;
                        t.includes("ifrlog") && (e.log = $, e.logExpand = !t.includes("ifrlog=collapsed"));
                    }(t), function(e, t) {
                        const n = Object.hasOwn(t, "log"), o = "string" == typeof t.log, i = n ? !!o || t.log : ee.log;
                        Object.hasOwn(t, "logExpand") || (t.logExpand = n && o ? t.log === $ : ee.logExpand), 
                        function(e) {
                            -1 === e?.log && (e.log = !1, e.vInfoDisable = !0);
                        }(t), function({enabled: e, expand: t, iframeId: n}) {
                            const o = M({
                                expand: t,
                                label: S(n)
                            });
                            R = e, O[n] || (O[n] = {
                                console: o
                            });
                        }({
                            enabled: i,
                            expand: t.logExpand,
                            iframeId: e
                        }), o && !(t.log in k) && L(e, 'Invalid value for options.log: Accepted values are "expanded" and "collapsed"'), 
                        t.log = i;
                    }(d, t), H(d, (function(e) {
                        u() ? A(d, `Ignored iframe (${d}), already setup.`) : (c(e), a(), be(), function() {
                            switch (n.style.overflow = !1 === Q[d]?.scrolling ? "hidden" : "auto", Q[d]?.scrolling) {
                              case "omit":
                                break;

                              case !0:
                                n.scrolling = "yes";
                                break;

                              case !1:
                                n.scrolling = "no";
                                break;

                              default:
                                n.scrolling = Q[d] ? Q[d].scrolling : "no";
                            }
                        }(), function() {
                            const {bodyMargin: e} = Q[d];
                            "number" != typeof e && "0" !== e || (Q[d].bodyMargin = `${e}px`);
                        }(), i(pe(d)), o());
                    }))(t), n?.iFrameResizer;
                };
                function we() {
                    !1 === document.hidden && function(e, t) {
                        const n = e => Q[e]?.autoResize && !Q[e]?.firstRun;
                        Object.keys(Q).forEach((function(o) {
                            n(o) && fe(e, t, o);
                        }));
                    }("Tab Visible", "resize");
                }
                const be = (e => {
                    let t = !1;
                    return function() {
                        return t ? void 0 : (t = !0, Reflect.apply(e, this, arguments));
                    };
                })((() => {
                    U(window, "message", ne), U(document, "visibilitychange", we), window.iframeParentListener = e => setTimeout((() => ne({
                        data: e,
                        sameOrigin: !0
                    })));
                })), ve = `[${g}] `;
                const ze = function() {
                    function e(e) {
                        switch (!0) {
                          case !e:
                            throw new TypeError(`${ve}iframe is not defined`);

                          case !e.tagName:
                            throw new TypeError(`${ve}Not a valid DOM element`);

                          case "IFRAME" !== e.tagName.toUpperCase():
                            throw new TypeError(`${ve}Expected <IFRAME> tag, found <${e.tagName}>`);

                          default:
                            t(e), n.push(e);
                        }
                    }
                    let t, n;
                    return function(o, i) {
                        if ("undefined" == typeof window) return [];
                        switch (t = ye(o), n = [], typeof i) {
                          case "undefined":
                          case "string":
                            document.querySelectorAll(i || "iframe").forEach(e);
                            break;

                          case "object":
                            e(i);
                            break;

                          default:
                            throw new TypeError(`${ve}Unexpected data type (${typeof i})`);
                        }
                        return Object.freeze(n);
                    };
                }();
                return "undefined" != typeof window && (window.iFrameResize = window.iFrameResize || function(...e) {
                    q("iFrameResize()", "iframeResize()", "", "parent"), ze(...e);
                }), ze;
            }));
        },
        144: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                const e = "undefined" != typeof window, t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), a = e && window.devicePixelRatio > 1, n = {
                    elements_selector: ".lazy",
                    container: t || e ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, s = e => Object.assign({}, n, e), l = function(e, t) {
                    let a;
                    const n = "LazyLoad::Initialized", s = new e(t);
                    try {
                        a = new CustomEvent(n, {
                            detail: {
                                instance: s
                            }
                        });
                    } catch (e) {
                        a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
                            instance: s
                        });
                    }
                    window.dispatchEvent(a);
                }, o = "src", r = "srcset", i = "sizes", d = "poster", c = "llOriginalAttrs", _ = "data", u = "loading", g = "loaded", b = "applied", h = "error", m = "native", p = "data-", f = "ll-status", v = (e, t) => e.getAttribute(p + t), E = e => v(e, f), I = (e, t) => ((e, t, a) => {
                    const n = p + t;
                    null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
                })(e, f, t), y = e => I(e, null), k = e => null === E(e), A = e => E(e) === m, L = [ u, g, b, h ], w = (e, t, a, n) => {
                    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
                }, x = (t, a) => {
                    e && "" !== a && t.classList.add(a);
                }, C = (t, a) => {
                    e && "" !== a && t.classList.remove(a);
                }, O = e => e.llTempImage, M = (e, t) => {
                    if (!t) return;
                    const a = t._observer;
                    a && a.unobserve(e);
                }, z = (e, t) => {
                    e && (e.loadingCount += t);
                }, N = (e, t) => {
                    e && (e.toLoadCount = t);
                }, T = e => {
                    let t = [];
                    for (let a, n = 0; a = e.children[n]; n += 1) "SOURCE" === a.tagName && t.push(a);
                    return t;
                }, R = (e, t) => {
                    const a = e.parentNode;
                    a && "PICTURE" === a.tagName && T(a).forEach(t);
                }, G = (e, t) => {
                    T(e).forEach(t);
                }, D = [ o ], H = [ o, d ], V = [ o, r, i ], F = [ _ ], j = e => !!e[c], B = e => e[c], J = e => delete e[c], S = (e, t) => {
                    if (j(e)) return;
                    const a = {};
                    t.forEach((t => {
                        a[t] = e.getAttribute(t);
                    })), e[c] = a;
                }, P = (e, t) => {
                    if (!j(e)) return;
                    const a = B(e);
                    t.forEach((t => {
                        ((e, t, a) => {
                            a ? e.setAttribute(t, a) : e.removeAttribute(t);
                        })(e, t, a[t]);
                    }));
                }, U = (e, t, a) => {
                    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
                }, $ = (e, t, a) => {
                    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
                }, q = (e, t, a) => {
                    a && e.setAttribute(t, a);
                }, K = (e, t) => {
                    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
                }, Q = {
                    IMG: (e, t) => {
                        R(e, (e => {
                            S(e, V), K(e, t);
                        })), S(e, V), K(e, t);
                    },
                    IFRAME: (e, t) => {
                        S(e, D), q(e, o, v(e, t.data_src));
                    },
                    VIDEO: (e, t) => {
                        G(e, (e => {
                            S(e, D), q(e, o, v(e, t.data_src));
                        })), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
                    },
                    OBJECT: (e, t) => {
                        S(e, F), q(e, _, v(e, t.data_src));
                    }
                }, W = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], X = (e, t) => {
                    !t || (e => e.loadingCount > 0)(t) || (e => e.toLoadCount > 0)(t) || w(e.callback_finish, t);
                }, Y = (e, t, a) => {
                    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
                }, Z = (e, t, a) => {
                    e.removeEventListener(t, a);
                }, ee = e => !!e.llEvLisnrs, te = e => {
                    if (!ee(e)) return;
                    const t = e.llEvLisnrs;
                    for (let a in t) {
                        const n = t[a];
                        Z(e, a, n);
                    }
                    delete e.llEvLisnrs;
                }, ae = (e, t, a) => {
                    (e => {
                        delete e.llTempImage;
                    })(e), z(a, -1), (e => {
                        e && (e.toLoadCount -= 1);
                    })(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
                }, ne = (e, t, a) => {
                    const n = O(e) || e;
                    ee(n) || ((e, t, a) => {
                        ee(e) || (e.llEvLisnrs = {});
                        const n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                        Y(e, n, t), Y(e, "error", a);
                    })(n, (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
                        })(0, e, t, a), te(n);
                    }), (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), 
                            s || X(a, n);
                        })(0, e, t, a), te(n);
                    }));
                }, se = (e, t, n) => {
                    (e => W.indexOf(e.tagName) > -1)(e) ? ((e, t, a) => {
                        ne(e, t, a), ((e, t, a) => {
                            const n = Q[e.tagName];
                            n && (n(e, t), $(e, t, a));
                        })(e, t, a);
                    })(e, t, n) : ((e, t, n) => {
                        (e => {
                            e.llTempImage = document.createElement("IMG");
                        })(e), ne(e, t, n), (e => {
                            j(e) || (e[c] = {
                                backgroundImage: e.style.backgroundImage
                            });
                        })(e), ((e, t, n) => {
                            const s = v(e, t.data_bg), l = v(e, t.data_bg_hidpi), r = a && l ? l : s;
                            r && (e.style.backgroundImage = `url("${r}")`, O(e).setAttribute(o, r), $(e, t, n));
                        })(e, t, n), ((e, t, n) => {
                            const s = v(e, t.data_bg_multi), l = v(e, t.data_bg_multi_hidpi), o = a && l ? l : s;
                            o && (e.style.backgroundImage = o, U(e, t, n));
                        })(e, t, n), ((e, t, a) => {
                            const n = v(e, t.data_bg_set);
                            if (!n) return;
                            let s = n.split("|").map((e => `image-set(${e})`));
                            e.style.backgroundImage = s.join(), U(e, t, a);
                        })(e, t, n);
                    })(e, t, n);
                }, le = e => {
                    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
                }, oe = e => {
                    R(e, (e => {
                        P(e, V);
                    })), P(e, V);
                }, re = {
                    IMG: oe,
                    IFRAME: e => {
                        P(e, D);
                    },
                    VIDEO: e => {
                        G(e, (e => {
                            P(e, D);
                        })), P(e, H), e.load();
                    },
                    OBJECT: e => {
                        P(e, F);
                    }
                }, ie = (e, t) => {
                    (e => {
                        const t = re[e.tagName];
                        t ? t(e) : (e => {
                            if (!j(e)) return;
                            const t = B(e);
                            e.style.backgroundImage = t.backgroundImage;
                        })(e);
                    })(e), ((e, t) => {
                        k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), 
                        C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
                    })(e, t), y(e), J(e);
                }, de = [ "IMG", "IFRAME", "VIDEO" ], ce = e => e.use_native && "loading" in HTMLImageElement.prototype, _e = (e, t, a) => {
                    e.forEach((e => (e => e.isIntersecting || e.intersectionRatio > 0)(e) ? ((e, t, a, n) => {
                        const s = (e => L.indexOf(E(e)) >= 0)(e);
                        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), ((e, t, a) => {
                            t.unobserve_entered && M(e, a);
                        })(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
                    })(e.target, e, t, a) : ((e, t, a, n) => {
                        k(e) || (x(e, a.class_exited), ((e, t, a, n) => {
                            a.cancel_on_exit && (e => E(e) === u)(e) && "IMG" === e.tagName && (te(e), (e => {
                                R(e, (e => {
                                    le(e);
                                })), le(e);
                            })(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
                        })(e, t, a, n), w(a.callback_exit, e, t, n));
                    })(e.target, e, t, a)));
                }, ue = e => Array.prototype.slice.call(e), ge = e => e.container.querySelectorAll(e.elements_selector), be = e => (e => E(e) === h)(e), he = (e, t) => (e => ue(e).filter(k))(e || ge(t)), me = function(t, a) {
                    const n = s(t);
                    this._settings = n, this.loadingCount = 0, ((e, t) => {
                        ce(e) || (t._observer = new IntersectionObserver((a => {
                            _e(a, e, t);
                        }), (e => ({
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }))(e)));
                    })(n, this), ((t, a) => {
                        e && (a._onlineHandler = () => {
                            ((e, t) => {
                                var a;
                                (a = ge(e), ue(a).filter(be)).forEach((t => {
                                    C(t, e.class_error), y(t);
                                })), t.update();
                            })(t, a);
                        }, window.addEventListener("online", a._onlineHandler));
                    })(n, this), this.update(a);
                };
                return me.prototype = {
                    update: function(e) {
                        const a = this._settings, n = he(e, a);
                        var s, l;
                        N(this, n.length), t ? this.loadAll(n) : ce(a) ? ((e, t, a) => {
                            e.forEach((e => {
                                -1 !== de.indexOf(e.tagName) && ((e, t, a) => {
                                    e.setAttribute("loading", "lazy"), ne(e, t, a), ((e, t) => {
                                        const a = Q[e.tagName];
                                        a && a(e, t);
                                    })(e, t), I(e, m);
                                })(e, t, a);
                            })), N(a, 0);
                        })(n, a, this) : (l = n, (e => {
                            e.disconnect();
                        })(s = this._observer), ((e, t) => {
                            t.forEach((t => {
                                e.observe(t);
                            }));
                        })(s, l));
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), 
                        ge(this._settings).forEach((e => {
                            J(e);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(e) {
                        const t = this._settings;
                        he(e, t).forEach((e => {
                            M(e, this), se(e, t, this);
                        }));
                    },
                    restoreAll: function() {
                        const e = this._settings;
                        ge(e).forEach((t => {
                            ie(t, e);
                        }));
                    }
                }, me.load = (e, t) => {
                    const a = s(t);
                    se(e, a);
                }, me.resetStatus = e => {
                    y(e);
                }, e && ((e, t) => {
                    if (t) if (t.length) for (let a, n = 0; a = t[n]; n += 1) l(e, a); else l(e, t);
                })(me, window.lazyLoadOptions), me;
            }));
        },
        496: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = window.innerHeight * .01;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
                if (bodyLockStatus && !e.target.closest(".menu") && document.documentElement.classList.contains("menu-open")) menuClose();
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        const inputMasks = document.querySelectorAll('input[type="tel"]');
        if (inputMasks.length) flsModules.inputmask = Inputmask({
            mask: "+7 (999) 999-99-99"
        }).mask(inputMasks);
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        var smooth_scroll_polyfills_min = __webpack_require__(496);
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = ".header__wrapper";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof smooth_scroll_polyfills_min !== "undefined") (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        var index_umd = __webpack_require__(113);
        $(".promo__slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: $(".promo__pagination"),
            prevArrow: $(".promo__navigation .navigation__button--prev"),
            nextArrow: $(".promo__navigation .navigation__button--next"),
            responsive: [ {
                breakpoint: 1023.98,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 575.98,
                settings: {
                    variableWidth: true
                }
            } ]
        });
        $(".flats__slider").slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendDots: $(".flats__pagination"),
            prevArrow: $(".flats__navigation .navigation__button--prev"),
            nextArrow: $(".flats__navigation .navigation__button--next"),
            responsive: [ {
                breakpoint: 1023.98,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    dots: true
                }
            } ]
        });
        $(".gallery__slider").slick({
            dots: true,
            speed: 500,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "13.12%",
            appendDots: $(".gallery__pagination"),
            prevArrow: $(".gallery__navigation .navigation__button--prev"),
            nextArrow: $(".gallery__navigation .navigation__button--next"),
            responsive: [ {
                breakpoint: 1023.98,
                settings: {
                    centerMode: false,
                    centerPadding: "0"
                }
            }, {
                breakpoint: 575.98,
                settings: {
                    variableWidth: true,
                    centerMode: false,
                    centerPadding: "0"
                }
            } ]
        });
        $(".sellers__slider").slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendDots: $(".sellers__pagination"),
            prevArrow: $(".sellers__navigation .navigation__button--prev"),
            nextArrow: $(".sellers__navigation .navigation__button--next"),
            responsive: [ {
                breakpoint: 1023.98,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    dots: true
                }
            } ]
        });
        index_umd({
            license: "GPLv3",
            log: "collapsed",
            waitForLoad: false
        }, "#calculator");
        isWebp();
        menuInit();
        fullVHfix();
        pageNavigation();
    })();
})();
