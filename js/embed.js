(function() {
    function r(a, b) {
        return -1 < a.indexOf(b) ? a : -1 < a.indexOf("?") ? a + "\x26" + b : a + "?" + b
    }
    function O(a) {
        for (var b = 0; a && a.getAttribute("class") !== x;)
            a = a.parentNode, b++, 4 < b && (a = null);
        (b = a && a.parentNode) && b.getAttribute("class") === y && (a.removeAttribute("style"), a.removeAttribute("class"), b.removeAttribute("style"))
    }
    function ba(a) {
        a.removeAttribute("data-iframely-url");
        a.removeAttribute("data-iframely-loading")
    }
    function ca(a, b) {
        if (da) {
            var c = a;
            for (var d = !1; !d && c.parentNode;)
                c = c.parentNode, d = c.className &&
                0 <= c.className.split(" ").indexOf(da);
            if (c = d && c) {
                (a = c.parentNode) && a.removeChild(c);
                return
            }
        }
        c = b && b.originalElement;
        if (!c && a && "A" === a.nodeName && (a.textContent || a.innerText))
            ba(a), O(a);
        else {
            if (b && b.iframeContainer)
                b = b.iframeContainer;
            else if (b = a, d = B(a))
                b = d.maxWidthWrapper;
            d = b.parentNode;
            c && "A" === c.nodeName && (c.textContent || c.innerText) && (ba(a), d.insertBefore(c, b));
            d.removeChild(b)
        }
    }
    function P(a) {
        a = a.getBoundingClientRect();
        var b = window.innerHeight || document.documentElement.clientHeight,
            c = window.innerWidth ||
            document.documentElement.clientWidth,
            d = 2 * b,
            e = 2 * c;
        if (0 <= a.bottom && 0 <= a.right && a.top <= b && a.left <= c)
            return sa;
        if (a.bottom >= 0 - d && a.right >= 0 - e && a.top <= b + d && a.left <= c + e)
            return ea
    }
    function fa(a) {
        for (var b = 0, c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            d.nodeType === Node.TEXT_NODE ? (d = d.textContent || d.innerText, (d = d.replace(/\s|\n/g, "")) && b++) : d.nodeType === Node.ELEMENT_NODE && b++
        }
        return b
    }
    function B(a, b) {
        a = a.parentNode;
        if (!(!a || "DIV" !== a.nodeName || 2 < fa(a) || b && a.getAttribute("class") !== x || !b && "relative" !==
        a.style.position && a.getAttribute("class") !== x)) {
            var c = a.parentNode;
            if (!(!c || "DIV" !== c.nodeName || 1 < fa(c) || b && c.getAttribute("class") !== y))
                return {
                    aspectWrapper: a,
                    maxWidthWrapper: c
                }
        }
    }
    function ta(a) {
        var b = Q(a);
        a = b.url;
        var c = b.api_key;
        b = b.key;
        var d = [];
        a && d.push("url\x3d" + encodeURIComponent(a));
        c && d.push("api_key\x3d" + encodeURIComponent(c));
        b && d.push("key\x3d" + encodeURIComponent(b));
        return "/api/thumbnail?" + d.join("\x26")
    }
    function ha(a, b) {
        if (a = B(a)) {
            if (b.match(/\/api\/iframe\?.+/))
                var c = b.replace(/\/api\/iframe\?.+/,
                ta(b));
            else if (b.match(/^(?:https?:)?\/\/[^\/]+\/[a-zA-Z0-9]+(?:\?.*)?$/))
                c = b.replace(/^((?:https?:)?\/\/[^\/]+\/[a-zA-Z0-9]+)((?:\?.*)?)$/, "$1/thumbnail");
            else
                return;
            b = document.createElement("div");
            b.style.position = "absolute";
            b.style.top = "0";
            b.style.width = "100%";
            b.style.height = "100%";
            b.style.backgroundImage = "url('" + c + "')";
            b.style.backgroundSize = "cover";
            b.style.backgroundPosition = "center";
            c = document.createElement("div");
            c.setAttribute("class", ua);
            b.appendChild(c);
            c = a.aspectWrapper.style["padding-top"];
            var d = a.aspectWrapper.style["padding-bottom"];
            !d && -1 < a.aspectWrapper.className.indexOf(x) && (d = "56.25%");
            if (c && d && c.match(/^\d+px$/)) {
                var e = document.createElement("div");
                e.style.left = 0;
                e.style.top = "-" + c;
                e.style.width = "100%";
                e.style.height = 0;
                e.style.position = "relative";
                e.style["padding-bottom"] = d;
                e.appendChild(b);
                a.aspectWrapper.appendChild(e)
            } else
                a.aspectWrapper.appendChild(b)
        }
    }
    function ia(a) {
        var b = (a = B(a)) && a.aspectWrapper && 1 < a.aspectWrapper.childNodes.length && a.aspectWrapper.childNodes[1];
        b && "DIV" ===
        b.nodeName && a.aspectWrapper.removeChild(b)
    }
    function va(a, b) {
        setTimeout(function() {
            wa(a)
        }, b == ea ? 200 : 0)
    }
    function wa(a) {
        function b() {
            d++;
            d === c && (clearTimeout(e), setTimeout(function() {
                ia(a)
            }, 200))
        }
        var c = a.hasAttribute("data-direct") ? 1 : 2,
            d = 0;
        a.addEventListener ? a.addEventListener("load", b) : a.attachEvent("onload", b);
        var e = setTimeout(function() {
            b()
        }, 1E4);
        var f = a.getAttribute("data-iframely-url");
        f && (a.removeAttribute("data-iframely-url"), a.removeAttribute("data-iframely-loading"), a.setAttribute("src", f))
    }
    function ja() {
        if (!document.getElementById(ka)) {
            var a = ka,
                b = xa,
                c = document.createElement("style");
            c.id = a;
            c.type = "text/css";
            c.styleSheet ? c.styleSheet.cssText = b : c.innerHTML = b;
            document.getElementsByTagName("head")[0].appendChild(c)
        }
    }
    function I(a, b) {
        ja();
        b || (b = B(a));
        b && (a.style.top = "", a.style.left = "", a.style.width = "", a.style.height = "", a.style.position = "", a.style.border = "", a.style.boxSizing = "", b.aspectWrapper.style.top = "", b.aspectWrapper.style.left = "", b.aspectWrapper.style.width = "", b.aspectWrapper.style.position =
        "", b.aspectWrapper.className = x, b.maxWidthWrapper.className = y)
    }
    function F(a, b) {
        var c = B(a);
        I(a, c);
        var E = a.getAttribute("data-max-width");
        E && (b["max-width"] = E);
        if (b) {
            E = function() {
                var b = h.clientHeight;
                k != b && l.trigger("heightChanged", a, k, b)
            };
            b.frame_style && a.setAttribute("data-frame-style", b.frame_style);
            b.scrolling && a.setAttribute("scrolling", b.scrolling);
            var e = a.getAttribute("data-frame-style"),
                f = e && e.match(/border:[^;]*(\d+)px/) || 0;
            f && (f = parseInt(f[1]), f *= 2);
            if (c) {
                var h = c.aspectWrapper,
                    p = c.maxWidthWrapper,
                    k = h.clientHeight;
                a.removeAttribute("style");
                e && a.setAttribute("style", e);
                h.removeAttribute("style");
                p.removeAttribute("style");
                b && b.height && b.width && !b["aspect-ratio"] ? (p.style.width = b.width + f + "px", h.style.height = b.height + f + "px", h.style.paddingBottom = 0) : (b["aspect-ratio"] ? (h.style["padding-bottom"] = Math.round(1E5 / b["aspect-ratio"]) / 1E3 + "%", b["padding-bottom"] && (h.style.paddingTop = b["padding-bottom"] + "px")) : (b.height && (h.style.height = b.height + f + "px", h.style.paddingBottom = 0), b.width && (h.style.width =
                b.width + f + "px")), (b["max-width"] || b["min-width"]) && ["max-width", "min-width"].forEach(function(a) {
                    var c = b[a];
                    if (c) {
                        if ("number" === typeof c || "string" === typeof c && c.match(/^(\d+)?\.?(\d+)?$/))
                            c = c + f + "px";
                        p.style[a] = c
                    }
                }), d.checkLazyLoad());
                E()
            }
        }
    }
    function Q(a) {
        if (a = a.match(/\?(.+)/i)) {
            a = a[1];
            a = a.split("\x26");
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c].split("\x3d");
                b[d[0]] = decodeURIComponent(d[1])
            }
            return b
        }
        return {}
    }
    function ya() {
        var a = !1;
        try {
            a = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), !0)
        } catch (b) {
            a =
            navigator.mimeTypes && void 0 != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin ? !0 : !1
        }
        return a
    }
    var m = window.iframely = window.iframely || {},
        d = m.widgets = m.widgets || {},
        l = m.events = m.events || {},
        C = d._iframes = d._iframes || [],
        R = d._global_iframes = d._global_iframes || [],
        t = d._lazy_iframes = d._lazy_iframes || [],
        K = d._lazy_widgets = d._lazy_widgets || [],
        S = d._import_links = d._import_links || {},
        T = /^(?:https?:)?\/\/[^\/]+/,
        za = /^(?:https?:)?\/\/[^\/]+\/(\w+)(?:\?.*)?$/;
    "function" !== typeof Array.prototype.forEach && (Array.prototype.forEach = function(a) {
        for (var b = 0; b < this.length; b++)
            a.apply(this, [this[b], b, this])
    });
    d.load || (m.load = d.load = function() {
        if (0 === arguments.length) {
            var a = document.querySelectorAll("[data-iframely-url]"),
                b;
            if (!(-1 < navigator.userAgent.toLowerCase().indexOf("firefox") || Aa || la) && 1 < a.length && "file:" !== document.location.protocol && "import" in (b = document.createElement("link"))) {
                for (var c = function() {
                        for (var b in p)
                            for (var a = p[b], c = 0; c < a.length; c++) {
                                var e =
                                a[c];
                                "import" === e.getAttribute("data-iframely-loading") && (e.removeAttribute("data-iframely-loading"), d.createWidget(e))
                            }
                    }, k = function(a, b) {
                        p[a] || (p[a] = []);
                        p[a].push(b);
                        h++
                    }, e = [], f = [], h = 0, p = {}, A, z, g, t, v, x, r, y, G, l, D = 0; D < a.length; D++) {
                    var q = a[D];
                    if (!q.getAttribute("data-iframely-loading")) {
                        var C = function() {
                                t = t || n.match(/align=left/);
                                G = G || L;
                                v = v || (H = n.match(/iframe=([\w-]+)/)) && H[1];
                                x = x || n.match(/autoplay=(true|1)/);
                                y = y || n.match(/playerjs=(true|1)/);
                                l = l || (H = n.match(/language=([\w_-]+)/)) && H[1];
                                var a = n.match(/maxwidth=(\d+)/);
                                a && (r = r || a[1])
                            },
                            n = q.getAttribute("data-iframely-url");
                        A = (A = n.match(T)) && A[0] || M;
                        var u = n.match(za);
                        u = u && u[1];
                        var H,
                            N = n.match(/import=(false|0)/),
                            I = n.match(/app=(true|1)/),
                            L = (H = n.match(/media=([\w-]+)/)) && H[1];
                        !J && G && L !== G && (N = !0);
                        J && L && J !== L && (N = !0);
                        "IFRAME" === q.nodeName && I && (N = !0);
                        N ? d.createWidget(q) : u ? (q.setAttribute("data-iframely-loading", "import"), -1 === f.indexOf(u) && f.push(u), k(u, q), C()) : (g = Q(n), (u = g.url) || (u = q.getAttribute("href")), z = g.api_key || U, g = g.key || V, (z || g) && u ? (q.setAttribute("data-iframely-loading",
                        "import"), -1 === e.indexOf(u) && e.push(u), k(u, q), C()) : d.createWidget(q))
                    }
                }
                if (1 < h && (0 < e.length || 0 < f.length) && A) {
                    var F = function(a) {
                        var b = (a = a["import"]) ? a.querySelectorAll("template[data-uri]") : [];
                        d.applyIframelyImportCommonStyles && d.applyIframelyImportCommonStyles(a);
                        for (var e = 0; e < b.length; e++) {
                            var f = b[e],
                                g = f.getAttribute("data-iframe-src"),
                                h = f.getAttribute("data-media"),
                                k = f.hasAttribute("data-cancel"),
                                E = f.hasAttribute("data-shadow"),
                                u = f.getAttribute("data-uri"),
                                v = f.hasAttribute("data-render-event"),
                                z = p[u];
                            if (z) {
                                for (var t = 0; t < z.length; t++) {
                                    var w = z[t];
                                    if (k)
                                        ca(w);
                                    else if (g) {
                                        if (h)
                                            try {
                                                h = JSON.parse(h)
                                            } catch (Ba) {
                                                h = null
                                            }
                                        w.removeAttribute("data-iframely-loading");
                                        d.createWidget(w, {
                                            directIframeSrc: g,
                                            media: h
                                        })
                                    } else {
                                        var q = document.importNode(f.content, !0),
                                            n = !v && B(w, !0);
                                        if (n) {
                                            var m = n.aspectWrapper.parentNode;
                                            var r = n.aspectWrapper;
                                            n.maxWidthWrapper.removeAttribute("style")
                                        } else
                                            m = w.parentNode, r = w;
                                        var x = ma || w.hasAttribute("data-lazy");
                                        if ("IFRAME" === w.nodeName)
                                            w.removeAttribute("data-iframely-loading"), d.createWidget(w);
                                        else {
                                            var A = null;
                                            if (E) {
                                                var l = document.createElement("div"),
                                                    y = l.createShadowRoot();
                                                y.appendChild(q);
                                                q = {
                                                    shadowRoot: y,
                                                    shadowContainer: l,
                                                    container: m,
                                                    sourceTemplate: f,
                                                    importDoc: a
                                                };
                                                d.applyCardStyles && d.applyCardStyles(q);
                                                A = d.getWidgetAfterRenderCb && d.getWidgetAfterRenderCb(q);
                                                q = l
                                            }
                                            l = function() {
                                                var a = m,
                                                    b = A;
                                                return function() {
                                                    b && b();
                                                    v && setTimeout(function() {
                                                        O(a)
                                                    }, 5E3)
                                                }
                                            }();
                                            !x || P(w) ? (m.insertBefore(q, r), m.removeChild(r), l()) : (n ? (n = r, w.parentNode.removeChild(w)) : (n = document.createElement("div"), m.insertBefore(n,
                                            r), m.removeChild(r), n.style.width = "100%", n.style.height = "400px"), K.push({
                                                container: n,
                                                widget: q,
                                                widgetAfterRenderCb: l
                                            }))
                                        }
                                    }
                                }
                                delete p[u]
                            }
                        }
                        c()
                    };
                    b.rel = "import";
                    b.href = A + "/api/import?app\x3d1";
                    ya() && (b.href += "\x26flash\x3d1");
                    m.isTouch() && (b.href += "\x26touch\x3d1");
                    0 < e.length && (e = e.map(function(a) {
                        return "uri\x3d" + encodeURIComponent(a)
                    }), b.href += "\x26" + e.join("\x26"));
                    0 < f.length && (b.href += "\x26ids\x3d" + encodeURIComponent(f.join("\x26")));
                    z ? b.href += "\x26api_key\x3d" + z : g && (b.href += "\x26key\x3d" + g);
                    if (t || "left" ===
                    W)
                        b.href += "\x26align\x3dleft";
                    if (v || na)
                        b.href += "\x26iframe\x3d" + (v || na);
                    x && (b.href += "\x26autoplay\x3d1");
                    if (r || X)
                        b.href += "\x26maxwidth\x3d" + (r || X);
                    if (y || la)
                        b.href += "\x26playerjs\x3d1";
                    if (G || J)
                        b.href += "\x26media\x3d" + (G || J);
                    if (l || oa)
                        b.href += "\x26language\x3d" + (l || oa);
                    b.onload = function() {
                        F(b)
                    };
                    b.onerror = function() {
                        c()
                    };
                    b.href in S ? F(S[b.href]) : (S[b.href] = b, document.head.appendChild(b))
                } else
                    c()
            } else
                for (D = 0; D < a.length; D++)
                    q = a[D], d.createWidget(q)
        } else
            1 === arguments.length ? d.createWidget(arguments[0]) :
            2 === arguments.length && d.createWidgetInContainer(arguments[0], arguments[1])
    });
    d.createWidgetInContainer || (d.createWidgetInContainer = function(a, b) {
        var c = document.createElement("a");
        c.setAttribute("href", b);
        c.textContent = b;
        a.appendChild(c);
        d.createWidget(c)
    });
    d.createWidget || (d.createWidget = function(a, b) {
        if (!a.getAttribute("data-iframely-loading")) {
            a.setAttribute("data-iframely-loading", !0);
            var c = a.getAttribute("data-iframely-url"),
                k = a.hasAttribute("data-img"),
                e = c && c.match(/^((?:https?:)?\/\/[^\/]+)\/\w+/i);
            e = e && e[1];
            var f = ma || a.hasAttribute("data-lazy") || "IFRAME" === a.nodeName;
            if ("IFRAME" === a.nodeName)
                b && b.media ? F(a, b.media) : I(a), b && b.directIframeSrc && a.setAttribute("data-direct", ""), f ? (k && (ha(a, c), c = r(c, "img\x3d1")), a.setAttribute("data-iframely-url", b && b.directIframeSrc || c), t.push({
                    iframe: a
                })) : (a.setAttribute("src", b && b.directIframeSrc || c), a.removeAttribute("data-iframely-url"), a.removeAttribute("data-iframely-loading")), C.push({
                    iframe: a
                });
            else {
                var h = a.getAttribute("href"),
                    p = B(a, !0);
                if (p) {
                    var m = p.maxWidthWrapper.parentNode;
                    I(a, p)
                } else
                    m = a.parentNode, ja();
                var l = a.getAttribute("data-max-width");
                if (b && b.directIframeSrc)
                    var g = b.directIframeSrc;
                else
                    !h || c && e ? c && (g = r(c, "app\x3d1"), "auto" === l && (c = m.clientWidth) && (g = r(g, "maxwidth\x3d" + c)), W && (g = r(g, "align\x3d" + W))) : (l = l || X, g = "/api/iframe?app\x3d1\x26url\x3d" + encodeURIComponent(h), g = V ? M + g + "\x26key\x3d" + V : U ? M + g + "\x26api_key\x3d" + U : "http://open.iframe.ly" + g, pa && (g += "\x26" + pa));
                if (g) {
                    e = g.match(/^(https?:)?\/\//i);
                    e[1] || "file:" !== document.location.protocol || (g = "http:" + g);
                    e = document.createElement("iframe");
                    if (p) {
                        for (c = p.maxWidthWrapper; p.aspectWrapper.lastChild;)
                            p.aspectWrapper.removeChild(p.aspectWrapper.lastChild);
                        p.aspectWrapper.appendChild(e)
                    } else
                        c = document.createElement("div"), c.className = y, h = document.createElement("div"), h.className = x, c.appendChild(h), h.appendChild(e);
                    l && parseInt(l) && (c.setAttribute("style", "max-width: " + l + "px;"), e.setAttribute("data-max-width", l));
                    C.push({
                        iframe: e,
                        iframeContainer: c,
                        originalElement: a
                    });
                    p || (m.insertBefore(c, a), m.removeChild(a));
                    b && b.media && F(e, b.media);
                    f ? (k &&
                    (ha(e, g), g = r(g, "img\x3d1")), e.setAttribute("data-iframely-url", g), e.setAttribute("data-iframely-loading", !0), t.push({
                        iframe: e
                    })) : e.setAttribute("src", g)
                }
            }
            d.checkLazyLoad()
        }
    });
    var x = "iframely-responsive",
        y = "iframely-embed",
        ua = "iframely-loader";
    d.importedWidgetRendered || (d.importedWidgetRendered = O);
    if (!l.on) {
        var Y = {};
        l.on = function(a, b) {
            (Y[a] = Y[a] || []).push(b)
        };
        l.trigger = function(a) {
            var b = Array.prototype.slice.call(arguments, 1),
                c = Y[a] || [];
            c.forEach(function(a) {
                a.apply(c, b)
            })
        }
    }
    m.addEventListener || (m.addEventListener =
    function(a, b, c) {
        a && (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c)
    });
    d.ready || (d.ready = function(a) {
        "function" === typeof a && a()
    });
    m.windowMessaging = function() {
        return {
            postMessage: function(a, b, c) {
                a = JSON.stringify(a);
                c = c || window.parent;
                window.postMessage && c.postMessage(a, (b || "*").replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
            },
            receiveMessage: function(a) {
                function b(b) {
                    try {
                        var c = JSON.parse(b.data)
                    } catch (e) {}
                    a(b, c)
                }
                if (window.postMessage)
                    if (window.addEventListener)
                        window[a ?
                        "addEventListener" : "removeEventListener"]("message", b, !1);
                    else
                        window[a ? "attachEvent" : "detachEvent"]("onmessage", b)
            }
        }
    }();
    for (var qa = document.querySelectorAll("script"), Z = 0; Z < qa.length && !M; Z++) {
        var v = qa[Z].getAttribute("src");
        if (v && v.match(/\/embed\.js/)) {
            v = v.replace(/&amp;/gi, "\x26");
            var k = Q(v);
            var U = k.api_key;
            var V = k.key;
            var X = k.maxwidth;
            var da = k.parent;
            var ma = k.lazy;
            var la = "1" === k.playerjs || "true" === k.playerjs;
            var W = k.align;
            var na = k.iframe;
            var Aa = "0" === k["import"] || "false" === k["import"];
            var J = k.media;
            var oa = k.language;
            delete k.api_key;
            delete k.key;
            var ra = [],
                aa;
            for (aa in k)
                ra.push(aa + "\x3d" + encodeURIComponent(k[aa]));
            var pa = ra.join("\x26");
            var M = (v = v.match(T) || document.location.href.match(T)) && v[0] || "https://iframe.ly"
        }
    }
    d.checkLazyLoad || (d._checkLazyLoad = function() {
        d.checkLazyLoadTimeout && clearTimeout(d.checkLazyLoadTimeout);
        d.checkLazyLoadTimeout = null;
        for (var a = 0; a < t.length;) {
            var b = t[a].iframe,
                c = P(b);
            c ? (t.splice(a, 1), va(b, c)) : a++
        }
        for (a = 0; a < K.length;)
            b = K[a], (c = P(b.container)) ? (K.splice(a, 1), c =
            b, b = c.container.parentNode, b.insertBefore(c.widget, c.container), b.removeChild(c.container), c.widgetAfterRenderCb && c.widgetAfterRenderCb()) : a++
    }, d.checkLazyLoad = function() {
        d.checkLazyLoadTimeout || (d.checkLazyLoadTimeout = setTimeout(d._checkLazyLoad, 300))
    }, window.addEventListener ? (addEventListener("scroll", d.checkLazyLoad, !0), addEventListener("resize", d.checkLazyLoad, !0)) : window.attachEvent && (attachEvent("onscroll", d.checkLazyLoad), attachEvent("onresize", d.checkLazyLoad)));
    d.receiveMessageRegistered ||
    (d.receiveMessageRegistered = !0, m.windowMessaging.receiveMessage(function(a, b) {
        if (b && b.method) {
            for (var c = null, d = null, e = 0; e < C.length && !c; e++) {
                var f = C[e];
                f.iframe.contentWindow === a.source && (c = f.iframe, d = f)
            }
            if (!c)
                for (e = 0; e < R.length && !c; e++)
                    f = R[e], f.contentWindow === a.source && (c = f);
            if (!c) {
                var h = document.querySelectorAll("iframe");
                for (e = 0; e < h.length && !c; e++)
                    f = h[e], f.contentWindow === a.source && (R.push(f), c = f)
            }
            if (c && "widgetRendered" === b.method) {
                for (e = 0; e < t.length;)
                    f = t[e].iframe, c === f ? t.splice(e, 1) : e++;
                ia(c)
            }
            !c ||
            "setIframelyWidgetSize" !== b.method && "resize" !== b.method && "setIframelyEmbedData" !== b.method || F(c, b.data && b.data.media || {
                height: b.height
            });
            c && "cancelWidget" === b.method && ca(c, d)
        }
    }));
    var sa = 1,
        ea = 2,
        ka = "iframely-styles",
        xa = ".iframely-responsive{top: 0;left: 0;width: 100%;height: 0;position: relative;padding-bottom: 56.25%;}.iframely-responsive\x3e*{top: 0;left: 0;width: 100%;height: 100%;position: absolute;border: 0;box-sizing: border-box;}";
    m.isTouch = function() {
        return "ontouchstart" in window || navigator.maxTouchPoints
    };
    (function(a) {
        "complete" !== document.readyState && "interactive" !== document.readyState || a();
        document.addEventListener ? document.addEventListener("DOMContentLoaded", a) : window.attachEvent("onload", a)
    })(function() {
        d.load()
    });
    (d._e || []).forEach(function(a) {
        "function" === typeof a && a()
    })
})();

