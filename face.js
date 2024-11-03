! function() {
    "use strict";
    var we, l = (we = "undefined" != typeof document && document.currentScript ? document.currentScript.src : undefined, function(e) {
        var t, d = void 0 !== (e = e || {}) ? e : {},
            r = {};
        for (t in d) d.hasOwnProperty(t) && (r[t] = d[t]);
        d.arguments = [], d.thisProgram = "./this.program", d.quit = function(e, t) {
            throw t
        }, d.preRun = [];
        var m, n, i, p = d.postRun = [];
        p = "object" == typeof window, m = "function" == typeof importScripts, n = "object" == typeof process && "function" == typeof require && !p && !m, i = !p && !n && !m;
        var o, a, s = "";

        function g(e) {
            return d.locateFile ? d.locateFile(e, s) : s + e
        }
        n ? (s = __dirname + "/", d.read = function(e, t) {
            var r;
            return o || (o = require("fs")), a || (a = require("path")), e = a.normalize(e), r = o.readFileSync(e), t ? r : r.toString()
        }, d.readBinary = function(e) {
            var t = d.read(e, !0);
            return t.buffer || (t = new Uint8Array(t)), T(t.buffer), t
        }, 1 < process.argv.length && (d.thisProgram = process.argv[1].replace(/\\/g, "/")), d.arguments = process.argv.slice(2), process.on("uncaughtException", function(e) {
            if (!(e instanceof oe)) throw e
        }), process.on("unhandledRejection", function(e, t) {
            process.exit(1)
        }), d.quit = function(e) {
            process.exit(e)
        }, d.inspect = function() {
            return "[Emscripten Module object]"
        }) : i ? ("undefined" != typeof read && (d.read = function(e) {
            return read(e)
        }), d.readBinary = function(e) {
            var t;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (T("object" == typeof(t = read(e, "binary"))), t)
        }, "undefined" != typeof scriptArgs ? d.arguments = scriptArgs : void 0 !== arguments && (d.arguments = arguments), "function" == typeof quit && (d.quit = function(e) {
            quit(e)
        })) : (p || m) && (p ? document.currentScript && (s = document.currentScript.src) : s = self.location.href, we && (s = we), s = 0 !== s.indexOf("blob:") ? s.split("/").slice(0, -1).join("/") + "/" : "", d.read = function(e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1), t.send(null), t.responseText
        }, m && (d.readBinary = function(e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
        }), d.readAsync = function(e, t, r) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function() {
                200 == n.status || 0 == n.status && n.response ? t(n.response) : r()
            }, n.onerror = r, n.send(null)
        }, d.setWindowTitle = function(e) {
            document.title = e
        });
        var l = d.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null),
            _ = d.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || l);
        for (t in r) r.hasOwnProperty(t) && (d[t] = r[t]);

        function u(e, t) {
            return t || (t = 16), e = Math.ceil(e / t) * t
        }
        r = undefined;
        var v = {
                "f64-rem": function(e, t) {
                    return e % t
                },
                "debugger": function() {}
            },
            h = (new Array(0), 0);

        function T(e, t) {
            e || se("Assertion failed: " + t)
        }

        function f(e) {
            var t = d["_" + e];
            return T(t, "Cannot call unknown function " + e + ", make sure it is exported"), t
        }
        var c = {
                stackSave: function() {
                    ie()
                },
                stackRestore: function() {
                    ne()
                },
                arrayToC: function(e) {
                    var t = re(e.length);
                    return function r(e, t) {
                        y.set(e, t)
                    }(e, t), t
                },
                stringToC: function(e) {
                    var t = 0;
                    if (null !== e && e !== undefined && 0 !== e) {
                        var r = 1 + (e.length << 2);
                        ! function n(e, t, r) {
                            return function h(e, t, r, n) {
                                if (!(0 < n)) return 0;
                                for (var i = r, o = r + n - 1, a = 0; a < e.length; ++a) {
                                    var s = e.charCodeAt(a);
                                    if (55296 <= s && s <= 57343) {
                                        var u = e.charCodeAt(++a);
                                        s = 65536 + ((1023 & s) << 10) | 1023 & u
                                    }
                                    if (s <= 127) {
                                        if (o <= r) break;
                                        t[r++] = s
                                    } else if (s <= 2047) {
                                        if (o <= r + 1) break;
                                        t[r++] = 192 | s >> 6, t[r++] = 128 | 63 & s
                                    } else if (s <= 65535) {
                                        if (o <= r + 2) break;
                                        t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                                    } else if (s <= 2097151) {
                                        if (o <= r + 3) break;
                                        t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                                    } else if (s <= 67108863) {
                                        if (o <= r + 4) break;
                                        t[r++] = 248 | s >> 24, t[r++] = 128 | s >> 18 & 63, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                                    } else {
                                        if (o <= r + 5) break;
                                        t[r++] = 252 | s >> 30, t[r++] = 128 | s >> 24 & 63, t[r++] = 128 | s >> 18 & 63, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                                    }
                                }
                                return t[r] = 0, r - i
                            }(e, R, t, r)
                        }(e, t = re(r), r)
                    }
                    return t
                }
            },
            E = {
                string: c.stringToC,
                array: c.arrayToC
            };

        function b(e, t, r, n, i) {
            var o = f(e),
                a = [],
                s = 0;
            if (n)
                for (var u = 0; u < n.length; u++) {
                    var h = E[r[u]];
                    a[u] = h ? (0 === s && (s = ie()), h(n[u])) : n[u]
                }
            var c = o.apply(null, a);
            return c = function l(e) {
                return "string" === t ? x(e) : "boolean" === t ? Boolean(e) : e
            }(c), 0 !== s && ne(s), c
        }

        function x(e, t) {
            if (0 === t || !e) return "";
            for (var r, n = 0, i = 0; n |= r = R[e + i >> 0], (0 != r || t) && (i++, !t || i != t););
            t || (t = i);
            var o = "";
            if (n < 128) {
                for (var a; 0 < t;) a = String.fromCharCode.apply(String, R.subarray(e, e + Math.min(t, 1024))), o = o ? o + a : a, e += 1024, t -= 1024;
                return o
            }
            return function s(e) {
                return I(R, e)
            }(e)
        }
        var A, y, R, P, D, w, F, S, C = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : undefined;

        function I(e, t) {
            for (var r = t; e[r];) ++r;
            if (16 < r - t && e.subarray && C) return C.decode(e.subarray(t, r));
            for (var n, i, o, a, s, u = "";;) {
                if (!(n = e[t++])) return u;
                if (128 & n)
                    if (i = 63 & e[t++], 192 != (224 & n))
                        if (o = 63 & e[t++], (n = 224 == (240 & n) ? (15 & n) << 12 | i << 6 | o : (a = 63 & e[t++], 240 == (248 & n) ? (7 & n) << 18 | i << 12 | o << 6 | a : (s = 63 & e[t++], 248 == (252 & n) ? (3 & n) << 24 | i << 18 | o << 12 | a << 6 | s : (1 & n) << 30 | i << 24 | o << 18 | a << 12 | s << 6 | 63 & e[t++]))) < 65536) u += String.fromCharCode(n);
                        else {
                            var h = n - 65536;
                            u += String.fromCharCode(55296 | h >> 10, 56320 | 1023 & h)
                        }
                else u += String.fromCharCode((31 & n) << 6 | i);
                else u += String.fromCharCode(n)
            }
        }

        function M() {
            d.HEAP8 = y = new Int8Array(A), d.HEAP16 = new Int16Array(A), d.HEAP32 = P = new Int32Array(A), d.HEAPU8 = R = new Uint8Array(A), d.HEAPU16 = new Uint16Array(A), d.HEAPU32 = new Uint32Array(A), d.HEAPF32 = new Float32Array(A), d.HEAPF64 = new Float64Array(A)
        }

        function B() {
            se("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + L + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
        }
        "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : undefined, D = 0;
        var N = d.TOTAL_STACK || 5242880,
            L = d.TOTAL_MEMORY || 16777216;

        function U(e) {
            for (; 0 < e.length;) {
                var t = e.shift();
                if ("function" != typeof t) {
                    var r = t.func;
                    "number" == typeof r ? t.arg === undefined ? d.dynCall_v(r) : d.dynCall_vi(r, t.arg) : r(t.arg === undefined ? null : t.arg)
                } else t()
            }
        }
        L < N && _("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + L + "! (TOTAL_STACK=" + N + ")"), d.buffer ? A = d.buffer : (A = "object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (d.wasmMemory = new WebAssembly.Memory({
            initial: L / 65536,
            maximum: L / 65536
        }), d.wasmMemory.buffer) : new ArrayBuffer(L), d.buffer = A), M();
        var O = [],
            H = [],
            k = [],
            G = [],
            V = !1,
            W = 0,
            X = null,
            z = null;
        d.preloadedImages = {}, d.preloadedAudios = {};
        var Y = "data:application/octet-stream;base64,";

        function j(e) {
            return String.prototype.startsWith ? e.startsWith(Y) : 0 === e.indexOf(Y)
        }

        function q() {
            return !!q.uncaught_exception
        }! function ue() {
            var e = "face-wasm.wast",
                u = "face-wasm.wasm",
                t = "face-wasm.temp.asm.js";
            j(e) || (e = g(e)), j(u) || (u = g(u)), j(t) || (t = g(t));
            var h = {
                    global: null,
                    env: null,
                    asm2wasm: v,
                    parent: d
                },
                c = null;

            function l(e) {
                var t = d.buffer;
                e.byteLength < t.byteLength && _("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
                var r = new Int8Array(t);
                new Int8Array(e).set(r),
                    function n(e) {
                        d.buffer = A = e
                    }(e), M()
            }

            function f() {
                try {
                    if (d.wasmBinary) return new Uint8Array(d.wasmBinary);
                    if (d.readBinary) return d.readBinary(u);
                    throw "both async and sync fetching of the wasm failed"
                } catch (_) {
                    se(_)
                }
            }

            function s(e, t, r) {
                if ("object" != typeof WebAssembly) return _("no native wasm support detected"), !1;
                if (!(d.wasmMemory instanceof WebAssembly.Memory)) return _("no native wasm Memory in use"), !1;

                function n(e, t) {
                    (c = e.exports).memory && l(c.memory), d.asm = c, d.usingWasm = !0,
                        function r(e) {
                            if (W--, d.monitorRunDependencies && d.monitorRunDependencies(W), 0 == W && (null !== X && (clearInterval(X), X = null), z)) {
                                var t = z;
                                z = null, t()
                            }
                        }()
                }
                if (t.memory = d.wasmMemory, h.global = {
                        NaN: NaN,
                        Infinity: Infinity
                    }, h["global.Math"] = Math, h.env = t, function a(e) {
                        W++, d.monitorRunDependencies && d.monitorRunDependencies(W)
                    }(), d.instantiateWasm) try {
                    return d.instantiateWasm(h, n)
                } catch (s) {
                    return _("Module.instantiateWasm callback failed with error: " + s), !1
                }

                function i(e) {
                    n(e.instance, e.module)
                }

                function o(e) {
                    (function t() {
                        return d.wasmBinary || !p && !m || "function" != typeof fetch ? new Promise(function(e, t) {
                            e(f())
                        }) : fetch(u, {
                            credentials: "same-origin"
                        }).then(function(e) {
                            if (!e.ok) throw "failed to load wasm binary file at '" + u + "'";
                            return e.arrayBuffer()
                        })["catch"](function() {
                            return f()
                        })
                    })().then(function(e) {
                        return WebAssembly.instantiate(e, h)
                    }).then(e)["catch"](function(e) {
                        _("failed to asynchronously prepare wasm: " + e), se(e)
                    })
                }
                return d.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || j(u) || "function" != typeof fetch ? o(i) : WebAssembly.instantiateStreaming(fetch(u, {
                    credentials: "same-origin"
                }), h).then(i)["catch"](function(e) {
                    _("wasm streaming compile failed: " + e), _("falling back to ArrayBuffer instantiation"), o(i)
                }), {}
            }
            d.asmPreload = d.asm;
            var r = d.reallocBuffer;
            d.reallocBuffer = function(e) {
                return "asmjs" === n ? r(e) : function(e) {
                    e = function r(e, t) {
                        return 0 < e % t && (e += t - e % t), e
                    }(e, d.usingWasm ? 65536 : 16777216);
                    var t = d.buffer.byteLength;
                    if (d.usingWasm) try {
                        return -1 !== d.wasmMemory.grow((e - t) / 65536) ? d.buffer = d.wasmMemory.buffer : null
                    } catch (n) {
                        return null
                    }
                }(e)
            };
            var n = "";
            d.asm = function(e, t, r) {
                if (!(t = function a(e) {
                        return e
                    }(t)).table) {
                    var n = d.wasmTableSize;
                    n === undefined && (n = 1024);
                    var i = d.wasmMaxTableSize;
                    "object" == typeof WebAssembly && "function" == typeof WebAssembly.Table ? i !== undefined ? t.table = new WebAssembly.Table({
                        initial: n,
                        maximum: i,
                        element: "anyfunc"
                    }) : t.table = new WebAssembly.Table({
                        initial: n,
                        element: "anyfunc"
                    }) : t.table = new Array(n), d.wasmTable = t.table
                }
                var o;
                return t.memoryBase || (t.memoryBase = d.STATIC_BASE), t.tableBase || (t.tableBase = 0), T(o = s(0, t), "no binaryen method succeeded."), o
            }
        }(), D = 42368, H.push(), d.STATIC_BASE = 1024, d.STATIC_BUMP = 41344, D += 16;
        var K = {
                last: 0,
                caught: [],
                infos: {},
                deAdjust: function(e) {
                    if (!e || K.infos[e]) return e;
                    for (var t in K.infos) {
                        var r = +t;
                        if (K.infos[r].adjusted === e) return r
                    }
                    return e
                },
                addRef: function(e) {
                    e && K.infos[e].refcount++
                },
                decRef: function(e) {
                    if (e) {
                        var t = K.infos[e];
                        T(0 < t.refcount), t.refcount--, 0 !== t.refcount || t.rethrown || (t.destructor && d.dynCall_vi(t.destructor, e), delete K.infos[e], ___cxa_free_exception(e))
                    }
                },
                clearRef: function(e) {
                    e && (K.infos[e].refcount = 0)
                }
            },
            Q = {
                varargs: 0,
                get: function(e) {
                    return Q.varargs += 4, P[Q.varargs - 4 >> 2]
                },
                getStr: function() {
                    return x(Q.get())
                },
                get64: function() {
                    var e = Q.get(),
                        t = Q.get();
                    return T(0 <= e ? 0 === t : -1 === t), e
                },
                getZero: function() {
                    T(0 === Q.get())
                }
            },
            Z = {},
            J = 1,
            $ = 22;
        S = function he(e) {
            var t = D;
            return D = D + e + 15 & -16, t
        }(4), F = u((w = u(D)) + N), P[S >> 2] = F, d.wasmTableSize = 4218, d.wasmMaxTableSize = 4218, d.asmGlobalArg = {}, d.asmLibraryArg = {
            abort: se,
            enlargeMemory: function ce() {
                B()
            },
            getTotalMemory: function le() {
                return L
            },
            abortOnCannotGrowMemory: B,
            ___cxa_allocate_exception: function fe(e) {
                return te(e)
            },
            ___cxa_pure_virtual: function de() {
                throw h = !0, "Pure virtual function called!"
            },
            ___cxa_throw: function me(e, t, r) {
                throw K.infos[e] = {
                    ptr: e,
                    adjusted: e,
                    type: t,
                    destructor: r,
                    refcount: 0,
                    caught: !1,
                    rethrown: !1
                }, K.last = e, "uncaught_exception" in q ? q.uncaught_exception++ : q.uncaught_exception = 1, e + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
            },
            ___setErrNo: function pe(e) {
                return d.___errno_location && (P[d.___errno_location() >> 2] = e), e
            },
            ___syscall140: function ge(e, t) {
                Q.varargs = t;
                try {
                    var r = Q.getStreamFromFD(),
                        n = (Q.get(), Q.get()),
                        i = Q.get(),
                        o = Q.get(),
                        a = n;
                    return FS.llseek(r, a, o), P[i >> 2] = r.position, r.getdents && 0 === a && 0 === o && (r.getdents = null), 0
                } catch (s) {
                    return "undefined" != typeof FS && s instanceof FS.ErrnoError || se(s), -s.errno
                }
            },
            ___syscall146: function _e(e, t) {
                Q.varargs = t;
                try {
                    var r = Q.get(),
                        n = Q.get(),
                        i = Q.get(),
                        o = 0;
                    _e.buffers || (_e.buffers = [null, [],
                        []
                    ], _e.printChar = function(e, t) {
                        var r = _e.buffers[e];
                        T(r), 0 === t || 10 === t ? ((1 === e ? l : _)(I(r, 0)), r.length = 0) : r.push(t)
                    });
                    for (var a = 0; a < i; a++) {
                        for (var s = P[n + 8 * a >> 2], u = P[n + (8 * a + 4) >> 2], h = 0; h < u; h++) _e.printChar(r, R[s + h]);
                        o += u
                    }
                    return o
                } catch (c) {
                    return "undefined" != typeof FS && c instanceof FS.ErrnoError || se(c), -c.errno
                }
            },
            ___syscall6: function ve(e, t) {
                Q.varargs = t;
                try {
                    var r = Q.getStreamFromFD();
                    return FS.close(r), 0
                } catch (n) {
                    return "undefined" != typeof FS && n instanceof FS.ErrnoError || se(n), -n.errno
                }
            },
            _abort: function Te() {
                d.abort()
            },
            _emscripten_memcpy_big: function Ee(e, t, r) {
                return R.set(R.subarray(t, t + r), e), e
            },
            _llvm_trap: function be() {
                se("trap!")
            },
            _pthread_getspecific: function xe(e) {
                return Z[e] || 0
            },
            _pthread_key_create: function Ae(e, t) {
                return 0 == e ? $ : (P[e >> 2] = J, Z[J] = 0, J++, 0)
            },
            _pthread_once: function ye(e, t) {
                ye.seen || (ye.seen = {}), e in ye.seen || (d.dynCall_v(t), ye.seen[e] = 1)
            },
            _pthread_setspecific: function Re(e, t) {
                return e in Z ? (Z[e] = t, 0) : $
            },
            DYNAMICTOP_PTR: S,
            STACKTOP: w
        };
        var ee = d.asm(d.asmGlobalArg, d.asmLibraryArg, A);
        d.asm = ee, d.___errno_location = function() {
            return d.asm.___errno_location.apply(null, arguments)
        }, d._computeArea = function() {
            return d.asm._computeArea.apply(null, arguments)
        }, d._computeAverageSpeed = function() {
            return d.asm._computeAverageSpeed.apply(null, arguments)
        }, d._computeEyeAverageSpeed = function() {
            return d.asm._computeEyeAverageSpeed.apply(null, arguments)
        }, d._computeEyeVolume = function() {
            return d.asm._computeEyeVolume.apply(null, arguments)
        }, d._computeQuality = function() {
            return d.asm._computeQuality.apply(null, arguments)
        }, d._computeVolume = function() {
            return d.asm._computeVolume.apply(null, arguments)
        }, d._getEarIndexCount = function() {
            return d.asm._getEarIndexCount.apply(null, arguments)
        }, d._getEarIndices = function() {
            return d.asm._getEarIndices.apply(null, arguments)
        }, d._getEarNormalData = function() {
            return d.asm._getEarNormalData.apply(null, arguments)
        }, d._getEarPositionData = function() {
            return d.asm._getEarPositionData.apply(null, arguments)
        }, d._getEarVertexCount = function() {
            return d.asm._getEarVertexCount.apply(null, arguments)
        }, d._getEyeIndex = function() {
            return d.asm._getEyeIndex.apply(null, arguments)
        }, d._getEyeIndexCount = function() {
            return d.asm._getEyeIndexCount.apply(null, arguments)
        }, d._getEyeIndices = function() {
            return d.asm._getEyeIndices.apply(null, arguments)
        }, d._getEyeNormalData = function() {
            return d.asm._getEyeNormalData.apply(null, arguments)
        }, d._getEyePositionData = function() {
            return d.asm._getEyePositionData.apply(null, arguments)
        }, d._getEyeVertexCount = function() {
            return d.asm._getEyeVertexCount.apply(null, arguments)
        }, d._getFaceIndexCount = function() {
            return d.asm._getFaceIndexCount.apply(null, arguments)
        }, d._getFaceIndexData = function() {
            return d.asm._getFaceIndexData.apply(null, arguments)
        }, d._getFaceNormalData = function() {
            return d.asm._getFaceNormalData.apply(null, arguments)
        }, d._getFacePositionData = function() {
            return d.asm._getFacePositionData.apply(null, arguments)
        }, d._getFaceVertexCount = function() {
            return d.asm._getFaceVertexCount.apply(null, arguments)
        }, d._getHairIndexCount = function() {
            return d.asm._getHairIndexCount.apply(null, arguments)
        }, d._getHairIndexData = function() {
            return d.asm._getHairIndexData.apply(null, arguments)
        }, d._getHairNormalData = function() {
            return d.asm._getHairNormalData.apply(null, arguments)
        }, d._getHairPositionData = function() {
            return d.asm._getHairPositionData.apply(null, arguments)
        }, d._getHairVertexCount = function() {
            return d.asm._getHairVertexCount.apply(null, arguments)
        }, d._getHiddenTriangleCount = function() {
            return d.asm._getHiddenTriangleCount.apply(null, arguments)
        }, d._getHiddenTriangles = function() {
            return d.asm._getHiddenTriangles.apply(null, arguments)
        }, d._getMouthiness = function() {
            return d.asm._getMouthiness.apply(null, arguments)
        }, d._getNoseIndexCount = function() {
            return d.asm._getNoseIndexCount.apply(null, arguments)
        }, d._getNoseIndices = function() {
            return d.asm._getNoseIndices.apply(null, arguments)
        }, d._getNoseNormalData = function() {
            return d.asm._getNoseNormalData.apply(null, arguments)
        }, d._getNosePositionData = function() {
            return d.asm._getNosePositionData.apply(null, arguments)
        }, d._getNoseVertexCount = function() {
            return d.asm._getNoseVertexCount.apply(null, arguments)
        }, d._getWrinkleStrengths = function() {
            return d.asm._getWrinkleStrengths.apply(null, arguments)
        }, d._hv_delete = function() {
            return d.asm._hv_delete.apply(null, arguments)
        }, d._hv_facesynth_new = function() {
            return d.asm._hv_facesynth_new.apply(null, arguments)
        }, d._hv_facesynth_new_with_options = function() {
            return d.asm._hv_facesynth_new_with_options.apply(null, arguments)
        }, d._hv_getNumInputChannels = function() {
            return d.asm._hv_getNumInputChannels.apply(null, arguments)
        }, d._hv_getNumOutputChannels = function() {
            return d.asm._hv_getNumOutputChannels.apply(null, arguments)
        }, d._hv_msg_getByteSize = function() {
            return d.asm._hv_msg_getByteSize.apply(null, arguments)
        }, d._hv_msg_getFloat = function() {
            return d.asm._hv_msg_getFloat.apply(null, arguments)
        }, d._hv_msg_getTimestamp = function() {
            return d.asm._hv_msg_getTimestamp.apply(null, arguments)
        }, d._hv_msg_hasFormat = function() {
            return d.asm._hv_msg_hasFormat.apply(null, arguments)
        }, d._hv_msg_init = function() {
            return d.asm._hv_msg_init.apply(null, arguments)
        }, d._hv_msg_setFloat = function() {
            return d.asm._hv_msg_setFloat.apply(null, arguments)
        }, d._hv_processInline = function() {
            return d.asm._hv_processInline.apply(null, arguments)
        }, d._hv_samplesToMilliseconds = function() {
            return d.asm._hv_samplesToMilliseconds.apply(null, arguments)
        }, d._hv_sendBangToReceiver = function() {
            return d.asm._hv_sendBangToReceiver.apply(null, arguments)
        }, d._hv_sendFloatToReceiver = function() {
            return d.asm._hv_sendFloatToReceiver.apply(null, arguments)
        }, d._hv_sendFloatToReceiverWithDelay = function() {
            return d.asm._hv_sendFloatToReceiverWithDelay.apply(null, arguments)
        }, d._hv_sendMessageToReceiverV = function() {
            return d.asm._hv_sendMessageToReceiverV.apply(null, arguments)
        }, d._hv_sendSymbolToReceiver = function() {
            return d.asm._hv_sendSymbolToReceiver.apply(null, arguments)
        }, d._hv_setPrintHook = function() {
            return d.asm._hv_setPrintHook.apply(null, arguments)
        }, d._hv_setSendHook = function() {
            return d.asm._hv_setSendHook.apply(null, arguments)
        }, d._hv_stringToHash = function() {
            return d.asm._hv_stringToHash.apply(null, arguments)
        }, d._hv_table_getBuffer = function() {
            return d.asm._hv_table_getBuffer.apply(null, arguments)
        }, d._hv_table_getLength = function() {
            return d.asm._hv_table_getLength.apply(null, arguments)
        }, d._hv_table_setLength = function() {
            return d.asm._hv_table_setLength.apply(null, arguments)
        }, d._initializeFace = function() {
            return d.asm._initializeFace.apply(null, arguments)
        };
        var te = d._malloc = function() {
                return d.asm._malloc.apply(null, arguments)
            },
            re = (d._rayIntersect = function() {
                return d.asm._rayIntersect.apply(null, arguments)
            }, d._setVertex = function() {
                return d.asm._setVertex.apply(null, arguments)
            }, d._step = function() {
                return d.asm._step.apply(null, arguments)
            }, d.stackAlloc = function() {
                return d.asm.stackAlloc.apply(null, arguments)
            }),
            ne = d.stackRestore = function() {
                return d.asm.stackRestore.apply(null, arguments)
            },
            ie = d.stackSave = function() {
                return d.asm.stackSave.apply(null, arguments)
            };

        function oe(e) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
        }

        function ae(e) {
            function t() {
                d.calledRun || (d.calledRun = !0, h || (function e() {
                    V || (V = !0, U(H))
                }(), function t() {
                    U(k)
                }(), d.onRuntimeInitialized && d.onRuntimeInitialized(), function r() {
                    if (d.postRun)
                        for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) e = d.postRun.shift(), G.unshift(e);
                    var e;
                    U(G)
                }()))
            }
            e = e || d.arguments, 0 < W || (function r() {
                if (d.preRun)
                    for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) e = d.preRun.shift(), O.unshift(e);
                var e;
                U(O)
            }(), 0 < W || d.calledRun || (d.setStatus ? (d.setStatus("Running..."), setTimeout(function() {
                setTimeout(function() {
                    d.setStatus("")
                }, 1), t()
            }, 1)) : t()))
        }

        function se(e) {
            throw d.onAbort && d.onAbort(e), e = e !== undefined ? (l(e), _(e), JSON.stringify(e)) : "", h = !0, "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."
        }
        if (d.dynCall_v = function() {
                return d.asm.dynCall_v.apply(null, arguments)
            }, d.dynCall_vi = function() {
                return d.asm.dynCall_vi.apply(null, arguments)
            }, d.asm = ee, d.ccall = b, d.cwrap = function Pe(e, t, r, n) {
                var i = (r = r || []).every(function(e) {
                    return "number" === e
                });
                return "string" !== t && i && !n ? f(e) : function() {
                    return b(e, t, r, arguments)
                }
            }, d.then = function(e) {
                if (d.calledRun) e(d);
                else {
                    var t = d.onRuntimeInitialized;
                    d.onRuntimeInitialized = function() {
                        t && t(), e(d)
                    }
                }
                return d
            }, (oe.prototype = new Error).constructor = oe, z = function De() {
                d.calledRun || ae(), d.calledRun || (z = De)
            }, d.run = ae, d.abort = se, d.preInit)
            for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); 0 < d.preInit.length;) d.preInit.pop()();
        return d.noExitRuntime = !0, ae(), e
    });
    "object" == typeof exports && "object" == typeof module ? module.exports = l : "function" == typeof define && define.amd ? define([], function() {
        return l
    }) : "object" == typeof exports && (exports.FaceLib = l);
    var f = function(e, t) {
        this.module = e, this.sampleRate = t.sampleRate || 44100, this.blockSize = t.blockSize || 2048, this.heavyContext = this.module._hv_facesynth_new_with_options(this.sampleRate, 1e3, 1e3, 0);
        var r = this.blockSize * this.getNumOutputChannels();
        this.processBuffer = new Float32Array(this.module.HEAPF32.buffer, this.module._malloc(r * Float32Array.BYTES_PER_ELEMENT), r)
    };
    f.prototype.preprocess = function(e) {
        for (var t = 0; t < e; ++t) this.setFloatParameters({
            dragging: Math.round(Math.random()),
            drag_delta_x: Math.random(),
            drag_delta_y: Math.random(),
            drag_delta_z: Math.random(),
            drag_distance: Math.random(),
            area: Math.random(),
            volume: Math.random(),
            slap: Math.round(Math.random())
        }), this.module._hv_processInline(this.heavyContext, null, this.processBuffer.byteOffset, this.blockSize)
    };
    var n = {
        area: 4151558017,
        average_eye_speed_left: 3085292019,
        average_eye_speed_right: 3570594550,
        average_speed: 391381125,
        drag_delta_x: 3329552188,
        drag_delta_y: 267539172,
        drag_delta_z: 3741941297,
        drag_distance: 920435809,
        dragging: 308932237,
        eye_volume_left: 4022162512,
        eye_volume_right: 268517835,
        init: 3057527446,
        quality: 2140652628,
        slap: 1362531630,
        vol_gloop: 2641398440,
        vol_master: 101509169,
        vol_slap: 1010567384,
        vol_slosh: 4260744706,
        vol_stretch: 4033315804,
        volume: 2976130901
    };
    f.prototype.process = function(e) {
        this.module._hv_processInline(this.heavyContext, null, this.processBuffer.byteOffset, this.blockSize);
        for (var t = 0; t < this.getNumOutputChannels(); ++t)
            for (var r = e.outputBuffer.getChannelData(t), n = t * this.blockSize, i = 0; i < this.blockSize; ++i) r[i] = this.processBuffer[n + i]
    }, f.prototype.getNumInputChannels = function() {
        return this.heavyContext ? this.module._hv_getNumInputChannels(this.heavyContext) : -1
    }, f.prototype.getNumOutputChannels = function() {
        return this.heavyContext ? this.module._hv_getNumOutputChannels(this.heavyContext) : -1
    }, f.prototype.setFloatParameter = function(e, t) {
        this.heavyContext && this.module._hv_sendFloatToReceiver(this.heavyContext, n[e], parseFloat(t))
    }, f.prototype.setFloatParameterWithDelay = function(e, t, r) {
        this.heavyContext && this.module._hv_sendFloatToReceiverWithDelay(this.heavyContext, n[e], parseFloat(t), r)
    }, f.prototype.setFloatParameters = function(e) {
        for (var t in e) this.setFloatParameter(t, e[t])
    }, f.prototype.setFloatParametersWithDelay = function(e, t) {
        for (var r in e) this.setFloatParameterWithDelay(r, e[r], t)
    };
    var d = function() {
        var n = ["ACTIVE_ATTRIBUTES", "ACTIVE_ATTRIBUTE_MAX_LENGTH", "ACTIVE_TEXTURE", "ACTIVE_UNIFORMS", "ACTIVE_UNIFORM_MAX_LENGTH", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "ALPHA", "ALPHA_BITS", "ALWAYS", "ARRAY_BUFFER", "ARRAY_BUFFER_BINDING", "ATTACHED_SHADERS", "BACK", "BLEND", "BLEND_COLOR", "BLEND_DST_ALPHA", "BLEND_DST_RGB", "BLEND_EQUATION", "BLEND_EQUATION_ALPHA", "BLEND_EQUATION_RGB", "BLEND_SRC_ALPHA", "BLEND_SRC_RGB", "BLUE_BITS", "BOOL", "BOOL_VEC2", "BOOL_VEC3", "BOOL_VEC4", "BROWSER_DEFAULT_WEBGL", "BUFFER_SIZE", "BUFFER_USAGE", "BYTE", "CCW", "CLAMP_TO_EDGE", "COLOR_ATTACHMENT0", "COLOR_BUFFER_BIT", "COLOR_CLEAR_VALUE", "COLOR_WRITEMASK", "COMPILE_STATUS", "COMPRESSED_TEXTURE_FORMATS", "CONSTANT_ALPHA", "CONSTANT_COLOR", "CONTEXT_LOST_WEBGL", "CULL_FACE", "CULL_FACE_MODE", "CURRENT_PROGRAM", "CURRENT_VERTEX_ATTRIB", "CW", "DECR", "DECR_WRAP", "DELETE_STATUS", "DEPTH_ATTACHMENT", "DEPTH_BITS", "DEPTH_BUFFER_BIT", "DEPTH_CLEAR_VALUE", "DEPTH_COMPONENT", "DEPTH_COMPONENT16", "DEPTH_FUNC", "DEPTH_RANGE", "DEPTH_STENCIL", "DEPTH_STENCIL_ATTACHMENT", "DEPTH_TEST", "DEPTH_WRITEMASK", "DITHER", "DONT_CARE", "DST_ALPHA", "DST_COLOR", "DYNAMIC_DRAW", "ELEMENT_ARRAY_BUFFER", "ELEMENT_ARRAY_BUFFER_BINDING", "EQUAL", "FASTEST", "FLOAT", "FLOAT_MAT2", "FLOAT_MAT3", "FLOAT_MAT4", "FLOAT_VEC2", "FLOAT_VEC3", "FLOAT_VEC4", "FRAGMENT_SHADER", "FRAMEBUFFER", "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", "FRAMEBUFFER_BINDING", "FRAMEBUFFER_COMPLETE", "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", "FRAMEBUFFER_UNSUPPORTED", "FRONT", "FRONT_AND_BACK", "FRONT_FACE", "FUNC_ADD", "FUNC_REVERSE_SUBTRACT", "FUNC_SUBTRACT", "GENERATE_MIPMAP_HINT", "GEQUAL", "GREATER", "GREEN_BITS", "HIGH_FLOAT", "HIGH_INT", "INCR", "INCR_WRAP", "INFO_LOG_LENGTH", "INT", "INT_VEC2", "INT_VEC3", "INT_VEC4", "INVALID_ENUM", "INVALID_FRAMEBUFFER_OPERATION", "INVALID_OPERATION", "INVALID_VALUE", "INVERT", "KEEP", "LEQUAL", "LESS", "LINEAR", "LINEAR_MIPMAP_LINEAR", "LINEAR_MIPMAP_NEAREST", "LINES", "LINE_LOOP", "LINE_STRIP", "LINE_WIDTH", "LINK_STATUS", "LOW_FLOAT", "LOW_INT", "LUMINANCE", "LUMINANCE_ALPHA", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VIEWPORT_DIMS", "MEDIUM_FLOAT", "MEDIUM_INT", "MIRRORED_REPEAT", "NEAREST", "NEAREST_MIPMAP_LINEAR", "NEAREST_MIPMAP_NEAREST", "NEVER", "NICEST", "NONE", "NOTEQUAL", "NO_ERROR", "NUM_COMPRESSED_TEXTURE_FORMATS", "ONE", "ONE_MINUS_CONSTANT_ALPHA", "ONE_MINUS_CONSTANT_COLOR", "ONE_MINUS_DST_ALPHA", "ONE_MINUS_DST_COLOR", "ONE_MINUS_SRC_ALPHA", "ONE_MINUS_SRC_COLOR", "OUT_OF_MEMORY", "PACK_ALIGNMENT", "POINTS", "POLYGON_OFFSET_FACTOR", "POLYGON_OFFSET_FILL", "POLYGON_OFFSET_UNITS", "RED_BITS", "RENDERBUFFER", "RENDERBUFFER_ALPHA_SIZE", "RENDERBUFFER_BINDING", "RENDERBUFFER_BLUE_SIZE", "RENDERBUFFER_DEPTH_SIZE", "RENDERBUFFER_GREEN_SIZE", "RENDERBUFFER_HEIGHT", "RENDERBUFFER_INTERNAL_FORMAT", "RENDERBUFFER_RED_SIZE", "RENDERBUFFER_STENCIL_SIZE", "RENDERBUFFER_WIDTH", "RENDERER", "REPEAT", "REPLACE", "RGB", "RGB5_A1", "RGB565", "RGBA", "RGBA4", "SAMPLER_2D", "SAMPLER_CUBE", "SAMPLES", "SAMPLE_ALPHA_TO_COVERAGE", "SAMPLE_BUFFERS", "SAMPLE_COVERAGE", "SAMPLE_COVERAGE_INVERT", "SAMPLE_COVERAGE_VALUE", "SCISSOR_BOX", "SCISSOR_TEST", "SHADER_COMPILER", "SHADER_SOURCE_LENGTH", "SHADER_TYPE", "SHADING_LANGUAGE_VERSION", "SHORT", "SRC_ALPHA", "SRC_ALPHA_SATURATE", "SRC_COLOR", "STATIC_DRAW", "STENCIL_ATTACHMENT", "STENCIL_BACK_FAIL", "STENCIL_BACK_FUNC", "STENCIL_BACK_PASS_DEPTH_FAIL", "STENCIL_BACK_PASS_DEPTH_PASS", "STENCIL_BACK_REF", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "STENCIL_BITS", "STENCIL_BUFFER_BIT", "STENCIL_CLEAR_VALUE", "STENCIL_FAIL", "STENCIL_FUNC", "STENCIL_INDEX", "STENCIL_INDEX8", "STENCIL_PASS_DEPTH_FAIL", "STENCIL_PASS_DEPTH_PASS", "STENCIL_REF", "STENCIL_TEST", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STREAM_DRAW", "SUBPIXEL_BITS", "TEXTURE", "TEXTURE0", "TEXTURE1", "TEXTURE2", "TEXTURE3", "TEXTURE4", "TEXTURE5", "TEXTURE6", "TEXTURE7", "TEXTURE8", "TEXTURE9", "TEXTURE10", "TEXTURE11", "TEXTURE12", "TEXTURE13", "TEXTURE14", "TEXTURE15", "TEXTURE16", "TEXTURE17", "TEXTURE18", "TEXTURE19", "TEXTURE20", "TEXTURE21", "TEXTURE22", "TEXTURE23", "TEXTURE24", "TEXTURE25", "TEXTURE26", "TEXTURE27", "TEXTURE28", "TEXTURE29", "TEXTURE30", "TEXTURE31", "TEXTURE_2D", "TEXTURE_BINDING_2D", "TEXTURE_BINDING_CUBE_MAP", "TEXTURE_CUBE_MAP", "TEXTURE_CUBE_MAP_NEGATIVE_X", "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_MAG_FILTER", "TEXTURE_MIN_FILTER", "TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "TRIANGLES", "TRIANGLE_FAN", "TRIANGLE_STRIP", "UNPACK_ALIGNMENT", "UNPACK_COLORSPACE_CONVERSION_WEBGL", "UNPACK_FLIP_Y_WEBGL", "UNPACK_PREMULTIPLY_ALPHA_WEBGL", "UNSIGNED_BYTE", "UNSIGNED_INT", "UNSIGNED_SHORT", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1", "UNSIGNED_SHORT_5_6_5", "VALIDATE_STATUS", "VENDOR", "VERSION", "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", "VERTEX_ATTRIB_ARRAY_ENABLED", "VERTEX_ATTRIB_ARRAY_NORMALIZED", "VERTEX_ATTRIB_ARRAY_POINTER", "VERTEX_ATTRIB_ARRAY_SIZE", "VERTEX_ATTRIB_ARRAY_STRIDE", "VERTEX_ATTRIB_ARRAY_TYPE", "VERTEX_SHADER", "VIEWPORT", "ZERO"];

        function i(s) {
            this.gl = s;
            for (var e = 0; e < n.length; e += 1) this[n[e]] = s[n[e]];
            this.changedParameters = {}, this.parameters = {
                framebuffer: {
                    defaults: [null],
                    setter: function(e) {
                        s.bindFramebuffer(s.FRAMEBUFFER, e)
                    },
                    usedInDraw: !0,
                    usedInClear: !0,
                    usedInRead: !0
                },
                program: {
                    defaults: [{
                        program: null
                    }],
                    setter: function(e) {
                        s.useProgram(e.program)
                    },
                    usedInDraw: !0
                },
                viewport: {
                    defaults: [0, 0, 0, 0],
                    setter: s.viewport,
                    usedInDraw: !0,
                    usedInClear: !0
                },
                indexBuffer: {
                    defaults: [null],
                    setter: function(e) {
                        s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e)
                    },
                    usedInDraw: !0
                },
                depthTest: {
                    defaults: [!1],
                    setter: function(e) {
                        e ? s.enable(s.DEPTH_TEST) : s.disable(s.DEPTH_TEST)
                    },
                    usedInDraw: !0
                },
                depthFunc: {
                    defaults: [s.LESS],
                    setter: s.depthFunc,
                    usedInDraw: !0
                },
                cullFace: {
                    defaults: [!1],
                    setter: function(e) {
                        e ? s.enable(s.CULL_FACE) : s.disable(s.CULL_FACE)
                    },
                    usedInDraw: !0
                },
                frontFace: {
                    defaults: [s.CCW],
                    setter: s.frontFace
                },
                blend: {
                    defaults: [!1],
                    setter: function(e) {
                        e ? s.enable(s.BLEND) : s.disable(s.BLEND)
                    },
                    usedInDraw: !0
                },
                blendEquation: {
                    defaults: [s.FUNC_ADD, s.FUNC_ADD],
                    setter: s.blendEquationSeparate,
                    usedInDraw: !0
                },
                blendFunc: {
                    defaults: [s.ONE, s.ZERO, s.ONE, s.ZERO],
                    setter: s.blendFuncSeparate,
                    usedInDraw: !0
                },
                polygonOffsetFill: {
                    defaults: [!1],
                    setter: function(e) {
                        e ? s.enable(s.POLYGON_OFFSET_FILL) : s.disable(s.POLYGON_OFFSET_FILL)
                    },
                    usedInDraw: !0
                },
                polygonOffset: {
                    defaults: [0, 0],
                    setter: s.polygonOffset,
                    usedInDraw: !0
                },
                scissorTest: {
                    defaults: [!1],
                    setter: function(e) {
                        e ? s.enable(s.SCISSOR_TEST) : s.disable(s.SCISSOR_TEST)
                    },
                    usedInDraw: !0,
                    usedInClear: !0
                },
                scissor: {
                    defaults: [0, 0, 0, 0],
                    setter: s.scissor,
                    usedInDraw: !0,
                    usedInClear: !0
                },
                colorMask: {
                    defaults: [!0, !0, !0, !0],
                    setter: s.colorMask,
                    usedInDraw: !0,
                    usedInClear: !0
                },
                depthMask: {
                    defaults: [!0],
                    setter: s.depthMask,
                    usedInDraw: !0,
                    usedInClear: !0
                },
                clearColor: {
                    defaults: [0, 0, 0, 0],
                    setter: s.clearColor,
                    usedInClear: !0
                },
                clearDepth: {
                    defaults: [1],
                    setter: s.clearDepth,
                    usedInClear: !0
                }
            };
            var t = s.getParameter(s.MAX_VERTEX_ATTRIBS);
            for (e = 0; e < t; ++e) this.parameters["attributeArray" + e.toString()] = {
                defaults: [null, 0, null, !1, 0, 0],
                setter: function() {
                    var a = e;
                    return function(e, t, r, n, i, o) {
                        null !== e && (s.bindBuffer(s.ARRAY_BUFFER, e), s.vertexAttribPointer(a, t, r, n, i, o), s.enableVertexAttribArray(a))
                    }
                }(),
                usedInDraw: !0
            };
            var r = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS);
            for (e = 0; e < r; ++e) this.parameters["texture" + e.toString()] = {
                defaults: [s.TEXTURE_2D, null],
                setter: function() {
                    var r = e;
                    return function(e, t) {
                        s.activeTexture(s.TEXTURE0 + r), s.bindTexture(e, t)
                    }
                }(),
                usedInDraw: !0
            };
            this.uniformSetters = {
                "1i": s.uniform1i,
                "2i": s.uniform2i,
                "3i": s.uniform3i,
                "4i": s.uniform4i,
                "1f": s.uniform1f,
                "2f": s.uniform2f,
                "3f": s.uniform3f,
                "4f": s.uniform4f,
                "1fv": s.uniform1fv,
                "2fv": s.uniform2fv,
                "3fv": s.uniform3fv,
                "4fv": s.uniform4fv,
                matrix2fv: s.uniformMatrix2fv,
                matrix3fv: s.uniformMatrix3fv,
                matrix4fv: s.uniformMatrix4fv
            }, this.defaultTextureUnit = 0
        }

        function p(e, t, r) {
            var n = e.createShader(t);
            return e.shaderSource(n, r), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS) || console.log(e.getShaderInfoLog(n)), n
        }

        function o(e, t, r, n) {
            this.uniformLocations = {}, this.uniforms = {};
            var i = e.gl,
                o = p(i, i.VERTEX_SHADER, t),
                a = p(i, i.FRAGMENT_SHADER, r),
                s = this.program = i.createProgram();
            if (i.attachShader(s, o), i.attachShader(s, a), n !== undefined)
                for (var u in n) i.bindAttribLocation(s, n[u], u);
            i.linkProgram(s), this.attributeLocations = {};
            for (var h = i.getProgramParameter(s, i.ACTIVE_ATTRIBUTES), c = 0; c < h; ++c) {
                u = i.getActiveAttrib(s, c).name;
                this.attributeLocations[u] = i.getAttribLocation(s, u)
            }
            var l = this.uniformLocations = {},
                f = i.getProgramParameter(s, i.ACTIVE_UNIFORMS);
            for (c = 0; c < f; c += 1) {
                var d = i.getActiveUniform(s, c),
                    m = i.getUniformLocation(s, d.name);
                l[d.name] = m
            }
        }

        function t(e) {
            this.wgl = e, this.changedParameters = {}
        }

        function a(e, t) {
            for (var r = 0; r < e.length; ++r)
                if (e[r] !== t[r]) return !1;
            return !0
        }

        function s(e) {
            t.call(this, e), this.uniforms = {}
        }

        function e(e) {
            t.call(this, e)
        }

        function r(e) {
            t.call(this, e)
        }
        return i.create = function(e, t) {
            var r = null;
            try {
                r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)
            } catch (n) {
                return null
            }
            return null === r ? null : new i(r)
        }, i.checkWebGLSupport = function(e, r) {
            i.checkWebGLSupportWithExtensions([], e, function(e, t) {
                r()
            })
        }, i.checkWebGLSupportWithExtensions = function(e, t, r) {
            var n = document.createElement("canvas"),
                i = null;
            try {
                i = n.getContext("webgl") || n.getContext("experimental-webgl")
            } catch (s) {
                return void r(!1, [])
            }
            if (null !== i) {
                for (var o = [], a = 0; a < e.length; ++a) null === i.getExtension(e[a]) && o.push(e[a]);
                0 < o.length ? r(!0, o) : t()
            } else r(!1, [])
        }, i.prototype.getSupportedExtensions = function() {
            return this.gl.getSupportedExtensions()
        }, i.prototype.getExtension = function(e) {
            var t = this.gl;
            if ("ANGLE_instanced_arrays" !== e) return t.getExtension(e);
            var r = t.getExtension("ANGLE_instanced_arrays");
            if (null === r) return null;
            this.instancedExt = r;
            for (var n = t.getParameter(t.MAX_VERTEX_ATTRIBS), i = 0; i < n; ++i) this.parameters["attributeDivisor" + i.toString()] = {
                defaults: [0],
                setter: function() {
                    var t = i;
                    return function(e) {
                        r.vertexAttribDivisorANGLE(t, e)
                    }
                }(),
                usedInDraw: !0
            };
            return s.prototype.vertexAttribPointer = function(e, t, r, n, i, o, a) {
                return this.setParameter("attributeArray" + t.toString(), [e, r, n, i, o, a]), this.changedParameters.hasOwnProperty("attributeDivisor" + t.toString()) && this.setParameter("attributeDivisor" + t.toString(), [0]), this
            }, s.prototype.vertexAttribDivisorANGLE = function(e, t) {
                return this.setParameter("attributeDivisor" + e.toString(), [t]), this
            }, this.drawArraysInstancedANGLE = function(e, t, r, n, i) {
                this.resolveDrawState(e), this.instancedExt.drawArraysInstancedANGLE(t, r, n, i)
            }, this.drawElementsInstancedANGLE = function(e, t, r, n, i, o) {
                this.resolveDrawState(e), this.instancedExt.drawElementsInstancedANGLE(t, r, n, i, o)
            }, {}
        }, i.prototype.getParameter = function(e) {
            return this.gl.getParameter(e)
        }, i.prototype.canRenderToTexture = function(e) {
            var t = this.gl,
                r = this.createFramebuffer(),
                n = this.buildTexture(t.RGBA, e, 1, 1, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST);
            this.framebufferTexture2D(r, t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
            var i = this.checkFramebufferStatus(r) === t.FRAMEBUFFER_COMPLETE;
            return this.deleteFramebuffer(r), this.deleteTexture(n), i
        }, i.prototype.checkFramebufferStatus = function(e) {
            return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e), this.changedParameters.framebuffer = e, this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)
        }, i.prototype.getShaderPrecisionFormat = function(e, t) {
            return this.gl.getShaderPrecisionFormat(e, t)
        }, i.prototype.hasHalfFloatTextureSupport = function() {
            var e = this.getExtension("OES_texture_half_float");
            return null !== e && (null !== this.getExtension("OES_texture_half_float_linear") && !!this.canRenderToTexture(e.HALF_FLOAT_OES))
        }, i.prototype.hasFloatTextureSupport = function() {
            return null !== this.getExtension("OES_texture_float") && null !== this.getExtension("OES_texture_float_linear") && !!this.canRenderToTexture(this.FLOAT)
        }, i.prototype.resolveState = function(e, t) {
            this.gl;
            for (var r in this.changedParameters) this.changedParameters.hasOwnProperty(r) && (e.changedParameters.hasOwnProperty(r) || this.parameters[r][t] && (this.parameters[r].setter.apply(this.gl, this.parameters[r].defaults), delete this.changedParameters[r]));
            for (var r in e.changedParameters) e.changedParameters.hasOwnProperty(r) && (this.changedParameters.hasOwnProperty(r) && a(this.changedParameters[r], e.changedParameters[r]) || (this.changedParameters[r] = e.changedParameters[r], this.parameters[r].setter.apply(this.gl, this.changedParameters[r])))
        }, i.prototype.resolveDrawState = function(e) {
            var t = this.gl;
            this.resolveState(e, "usedInDraw");
            var r = e.changedParameters.program[0];
            for (var n in e.uniforms)
                if (e.uniforms.hasOwnProperty(n)) {
                    var i = [r.uniformLocations[n]].concat(e.uniforms[n].value);
                    this.uniformSetters[e.uniforms[n].type].apply(t, i)
                }
        }, i.prototype.drawArrays = function(e, t, r, n) {
            this.resolveDrawState(e), this.gl.drawArrays(t, r, n)
        }, i.prototype.drawElements = function(e, t, r, n, i) {
            this.resolveDrawState(e), this.gl.drawElements(t, r, n, i)
        }, i.prototype.resolveClearState = function(e) {
            this.resolveState(e, "usedInClear")
        }, i.prototype.clear = function(e, t) {
            this.resolveClearState(e), this.gl.clear(t)
        }, i.prototype.resolveReadState = function(e) {
            this.resolveState(e, "usedInRead")
        }, i.prototype.readPixels = function(e, t, r, n, i, o, a, s) {
            this.resolveReadState(e), this.gl.readPixels(t, r, n, i, o, a, s)
        }, i.prototype.finish = function() {
            return this.gl.finish(), this
        }, i.prototype.flush = function() {
            return this.gl.flush(), this
        }, i.prototype.getError = function() {
            return this.gl.getError()
        }, i.prototype.createFramebuffer = function() {
            return this.gl.createFramebuffer()
        }, i.prototype.framebufferTexture2D = function(e, t, r, n, i, o) {
            return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e), this.changedParameters.framebuffer = e, this.gl.framebufferTexture2D(t, r, n, i, o), this
        }, i.prototype.framebufferRenderbuffer = function(e, t, r, n, i) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e), this.changedParameters.framebuffer = e, this.gl.framebufferRenderbuffer(t, r, n, i)
        }, i.prototype.drawBuffers = function(e, t) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e), this.changedParameters.framebuffer = e, this.drawExt.drawBuffersWEBGL(t)
        }, i.prototype.createTexture = function() {
            return this.gl.createTexture()
        }, i.prototype.bindTextureForEditing = function(e, t) {
            this.gl.activeTexture(this.gl.TEXTURE0 + this.defaultTextureUnit), this.gl.bindTexture(e, t), this.changedParameters["texture" + this.defaultTextureUnit.toString()] = [e, t]
        }, i.prototype.texImage2D = function(e, t) {
            var r = Array.prototype.slice.call(arguments, 2);
            return r.unshift(e), this.bindTextureForEditing(e, t), this.gl.texImage2D.apply(this.gl, r), this
        }, i.prototype.texSubImage2D = function(e, t) {
            var r = Array.prototype.slice.call(arguments, 2);
            return r.unshift(e), this.bindTextureForEditing(e, t), this.gl.texSubImage2D.apply(this.gl, r), this
        }, i.prototype.texParameteri = function(e, t, r, n) {
            return this.bindTextureForEditing(e, t), this.gl.texParameteri(e, r, n), this
        }, i.prototype.texParameterf = function(e, t, r, n) {
            return this.bindTextureForEditing(e, t), this.gl.texParameterf(e, r, n), this
        }, i.prototype.pixelStorei = function(e, t, r, n) {
            return this.bindTextureForEditing(e, t), this.gl.pixelStorei(r, n), this
        }, i.prototype.setTextureFiltering = function(e, t, r, n, i, o) {
            var a = this.gl;
            return this.bindTextureForEditing(e, t), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, r), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, n), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, i), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, o), this
        }, i.prototype.generateMipmap = function(e, t) {
            return this.bindTextureForEditing(e, t), this.gl.generateMipmap(e), this
        }, i.prototype.buildTexture = function(e, t, r, n, i, o, a, s, u) {
            var h = this.createTexture();
            return this.rebuildTexture(h, e, t, r, n, i, o, a, s, u), h
        }, i.prototype.rebuildTexture = function(e, t, r, n, i, o, a, s, u, h) {
            return this.texImage2D(this.TEXTURE_2D, e, 0, t, n, i, 0, t, r, o).setTextureFiltering(this.TEXTURE_2D, e, a, s, u, h), this
        }, i.prototype.createRenderbuffer = function() {
            return this.gl.createRenderbuffer()
        }, i.prototype.renderbufferStorage = function(e, t, r, n, i) {
            return this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, e), this.gl.renderbufferStorage(t, r, n, i), this
        }, i.prototype.createBuffer = function() {
            return this.gl.createBuffer()
        }, i.prototype.bufferData = function(e, t, r, n) {
            var i = this.gl;
            t === i.ARRAY_BUFFER || t === i.ELEMENT_ARRAY_BUFFER && (this.changedParameters.indexBuffer = [e]), i.bindBuffer(t, e), i.bufferData(t, r, n)
        }, i.prototype.buildBuffer = function(e, t, r) {
            var n = this.createBuffer();
            return this.bufferData(n, e, t, r), n
        }, i.prototype.bufferSubData = function(e, t, r, n) {
            var i = this.gl;
            t === i.ARRAY_BUFFER || t === i.ELEMENT_ARRAY_BUFFER && (this.changedParameters.indexBuffer = [e]), i.bindBuffer(t, e), i.bufferSubData(t, r, n)
        }, i.prototype.createProgram = function(e, t, r) {
            return new o(this, e, t, r)
        }, i.loadTextFiles = function(n, i) {
            for (var o = 0, a = {}, e = 0; e < n.length; ++e) {
                var s = n[e];
                ! function() {
                    var t = s,
                        r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        if (4 === r.readyState) {
                            var e = r.responseText;
                            a[t] = e, (o += 1) === n.length && i(a)
                        }
                    }, r.open("GET", t, !0), r.send()
                }()
            }
        }, i.prototype.createProgramFromFiles = function(o, a, s, u, e) {
            var h = this,
                t = [];
            Array.isArray(o) ? t = t.concat(o) : t.push(o), Array.isArray(a) ? t = t.concat(a) : t.push(a), i.loadTextFiles(t, function(e) {
                var t = [];
                if (Array.isArray(o))
                    for (var r = 0; r < o.length; ++r) t.push(e[o[r]]);
                else t.push(e[o]);
                var n = [];
                if (Array.isArray(a))
                    for (r = 0; r < a.length; ++r) n.push(e[a[r]]);
                else n.push(e[a]);
                var i = h.createProgram(t.join("\n"), n.join("\n"), s);
                u(i)
            })
        }, i.prototype.createProgramsFromFiles = function(e, r, t) {
            var n = function h(e) {
                    var t = 0;
                    for (var r in e) e.hasOwnProperty(r) && (t += 1);
                    return t
                }(e),
                i = 0,
                o = {};
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var s = e[a],
                        u = this;
                    ! function() {
                        var t = a;
                        u.createProgramFromFiles(s.vertexShader, s.fragmentShader, s.attributeLocations, function(e) {
                            o[t] = e, ++i === n && r(o)
                        })
                    }()
                }
        }, i.prototype.createDrawState = function() {
            return new s(this)
        }, i.prototype.createClearState = function() {
            return new e(this)
        }, i.prototype.createReadState = function() {
            return new r(this)
        }, i.prototype.deleteBuffer = function(e) {
            this.gl.deleteBuffer(e)
        }, i.prototype.deleteFramebuffer = function(e) {
            this.gl.deleteFramebuffer(e)
        }, i.prototype.deleteTexture = function(e) {
            this.gl.deleteTexture(e)
        }, o.prototype.getAttribLocation = function(e) {
            return this.attributeLocations[e]
        }, t.prototype.setParameter = function(e, t) {
            a(t, this.wgl.parameters[e].defaults) ? this.changedParameters.hasOwnProperty(e) && delete this.changedParameters[e] : this.changedParameters[e] = t
        }, t.prototype.clone = function() {
            var e = new this.constructor(this.wgl);
            for (var t in this.changedParameters)
                if (this.changedParameters.hasOwnProperty(t)) {
                    for (var r = this.changedParameters[t], n = [], i = 0; i < r.length; ++i) n.push(r[i]);
                    e.changedParameters[t] = n
                }
            return e
        }, (s.prototype = Object.create(t.prototype)).constructor = t, s.prototype.bindFramebuffer = function(e) {
            return this.setParameter("framebuffer", [e]), this
        }, s.prototype.viewport = function(e, t, r, n) {
            return this.setParameter("viewport", [e, t, r, n]), this
        }, s.prototype.enable = function(e) {
            return e === this.wgl.DEPTH_TEST ? this.setParameter("depthTest", [!0]) : e === this.wgl.BLEND ? this.setParameter("blend", [!0]) : e === this.wgl.CULL_FACE ? this.setParameter("cullFace", [!0]) : e === this.wgl.POLYGON_OFFSET_FILL ? this.setParameter("polygonOffsetFill", [!0]) : e === this.wgl.SCISSOR_TEST && this.setParameter("scissorTest", [!0]), this
        }, s.prototype.disable = function(e) {
            return e === this.wgl.DEPTH_TEST ? this.setParameter("depthTest", [!1]) : e === this.wgl.BLEND ? this.setParameter("blend", [!1]) : e === this.wgl.CULL_FACE ? this.setParameter("cullFace", [!1]) : e === this.wgl.POLYGON_OFFSET_FILL ? this.setParameter("polygonOffsetFill", [!1]) : e === this.wgl.SCISSOR_TEST && this.setParameter("scissorTest", [!1]), this
        }, s.prototype.vertexAttribPointer = function(e, t, r, n, i, o, a) {
            return this.setParameter("attributeArray" + t.toString(), [e, r, n, i, o, a]), this.instancedExt && this.changedParameters.hasOwnProperty("attributeDivisor" + t.toString()) && this.setParameter("attributeDivisor" + t.toString(), [0]), this
        }, s.prototype.bindIndexBuffer = function(e) {
            return this.setParameter("indexBuffer", [e]), this
        }, s.prototype.depthFunc = function(e) {
            return this.setParameter("depthFunc", [e]), this
        }, s.prototype.frontFace = function(e) {
            return this.setParameter("frontFace", [e]), this
        }, s.prototype.blendEquation = function(e) {
            return this.blendEquationSeparate(e, e), this
        }, s.prototype.blendEquationSeparate = function(e, t) {
            return this.setParameter("blendEquation", [e, t]), this
        }, s.prototype.blendFunc = function(e, t) {
            return this.blendFuncSeparate(e, t, e, t), this
        }, s.prototype.blendFuncSeparate = function(e, t, r, n) {
            return this.setParameter("blendFunc", [e, t, r, n]), this
        }, s.prototype.scissor = function(e, t, r, n) {
            return this.setParameter("scissor", [e, t, r, n]), this
        }, s.prototype.useProgram = function(e) {
            return this.setParameter("program", [e]), this
        }, s.prototype.bindTexture = function(e, t, r) {
            return this.setParameter("texture" + e.toString(), [t, r]), this
        }, s.prototype.colorMask = function(e, t, r, n) {
            return this.setParameter("colorMask", [e, t, r, n]), this
        }, s.prototype.depthMask = function(e) {
            return this.setParameter("depthMask", [e]), this
        }, s.prototype.polygonOffset = function(e, t) {
            return this.setParameter("polygonOffset", [e, t]), this
        }, s.prototype.uniformTexture = function(e, t, r, n) {
            return this.uniform1i(e, t), this.bindTexture(t, r, n), this
        }, s.prototype.uniform1i = function(e, t) {
            return this.uniforms[e] = {
                type: "1i",
                value: [t]
            }, this
        }, s.prototype.uniform2i = function(e, t, r) {
            return this.uniforms[e] = {
                type: "2i",
                value: [t, r]
            }, this
        }, s.prototype.uniform3i = function(e, t, r, n) {
            return this.uniforms[e] = {
                type: "3i",
                value: [t, r, n]
            }, this
        }, s.prototype.uniform4i = function(e, t, r, n, i) {
            return this.uniforms[e] = {
                type: "4i",
                value: [t, r, n, i]
            }, this
        }, s.prototype.uniform1f = function(e, t) {
            return this.uniforms[e] = {
                type: "1f",
                value: t
            }, this
        }, s.prototype.uniform2f = function(e, t, r) {
            return this.uniforms[e] = {
                type: "2f",
                value: [t, r]
            }, this
        }, s.prototype.uniform3f = function(e, t, r, n) {
            return this.uniforms[e] = {
                type: "3f",
                value: [t, r, n]
            }, this
        }, s.prototype.uniform4f = function(e, t, r, n, i) {
            return this.uniforms[e] = {
                type: "4f",
                value: [t, r, n, i]
            }, this
        }, s.prototype.uniform1fv = function(e, t) {
            return this.uniforms[e] = {
                type: "1fv",
                value: t
            }, this
        }, s.prototype.uniform2fv = function(e, t) {
            return this.uniforms[e] = {
                type: "2fv",
                value: t
            }, this
        }, s.prototype.uniform3fv = function(e, t) {
            return this.uniforms[e] = {
                type: "3fv",
                value: t
            }, this
        }, s.prototype.uniform4fv = function(e, t) {
            return this.uniforms[e] = {
                type: "4fv",
                value: t
            }, this
        }, s.prototype.uniformMatrix2fv = function(e, t, r) {
            return this.uniforms[e] = {
                type: "matrix2fv",
                value: [t, r]
            }, this
        }, s.prototype.uniformMatrix3fv = function(e, t, r) {
            return this.uniforms[e] = {
                type: "matrix3fv",
                value: [t, r]
            }, this
        }, s.prototype.uniformMatrix4fv = function(e, t, r) {
            return this.uniforms[e] = {
                type: "matrix4fv",
                value: [t, r]
            }, this
        }, ((e.prototype = Object.create(t.prototype)).constructor = e).prototype.bindFramebuffer = function(e) {
            return this.setParameter("framebuffer", [e]), this
        }, e.prototype.clearColor = function(e, t, r, n) {
            return this.setParameter("clearColor", [e, t, r, n]), this
        }, e.prototype.clearDepth = function(e) {
            return this.setParameter("clearDepth", [e]), this
        }, e.prototype.colorMask = function(e, t, r, n) {
            return this.setParameter("colorMask", [e, t, r, n]), this
        }, e.prototype.depthMask = function(e) {
            return this.setParameter("depthMask", [e]), this
        }, e.prototype.enable = function(e) {
            return e === this.wgl.SCISSOR_TEST && this.setParameter("scissorTest", [!0]), this
        }, e.prototype.disable = function(e) {
            return e === this.wgl.SCISSOR_TEST && this.setParameter("scissorTest", [!1]), this
        }, e.prototype.scissor = function(e, t, r, n) {
            return this.setParameter("scissor", [e, t, r, n]), this
        }, ((r.prototype = Object.create(t.prototype)).constructor = r).prototype.bindFramebuffer = function(e) {
            return this.setParameter("framebuffer", [e]), this
        }, i
    }();

    function m(e, t, r) {
        this.module = e, this.wgl = t, this.wireframe = r, this.initializeFace = this.module.cwrap("initializeFace", null, []), this.step = this.module.cwrap("step", "number", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]), this.setVertex = this.module.cwrap("setVertex", "number", ["number", "number", "number", "number"]), this.getFacePositionData = this.module.cwrap("getFacePositionData", "number", []), this.getFaceNormalData = this.module.cwrap("getFaceNormalData", "number", []), this.getFaceVertexCount = this.module.cwrap("getFaceVertexCount", "number", []), this.getWrinkleStrengths = this.module.cwrap("getWrinkleStrengths", "number", []), this.getMouthiness = this.module.cwrap("getMouthiness", "number", []), this.getFaceIndexData = this.module.cwrap("getFaceIndexData", "number", []), this.getFaceIndexCount = this.module.cwrap("getFaceIndexCount", "number", []), this.getHiddenTriangles = this.module.cwrap("getHiddenTriangles", "number", []), this.getHiddenTriangleCount = this.module.cwrap("getHiddenTriangleCount", "number", []), this.rayIntersect = this.module.cwrap("rayIntersect", "number", ["number", "number", "number", "number", "number", "number"]), this.computeVolume = this.module.cwrap("computeVolume", "number", []), this.computeArea = this.module.cwrap("computeArea", "number", []), this.computeQuality = this.module.cwrap("computeQuality", "number", []), this.computeAverageSpeed = this.module.cwrap("computeAverageSpeed", "number", []), this.computeEyeVolume = this.module.cwrap("computeEyeVolume", "number", ["number"]), this.computeEyeAverageSpeed = this.module.cwrap("computeEyeAverageSpeed", "number", ["number"]), this.initializeFace(), this.vertexCount = this.getFaceVertexCount(), this.textureWidth = Math.ceil(Math.sqrt(this.vertexCount)), this.textureHeight = this.textureWidth, this.basePositionsTexture = t.buildTexture(t.RGBA, t.FLOAT, this.textureWidth, this.textureHeight, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST), this.baseNormalsTexture = t.buildTexture(t.RGBA, t.FLOAT, this.textureWidth, this.textureHeight, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST), this.baseVertexBuffer = t.createBuffer();
        for (var n = [], i = 0; i < this.vertexCount; ++i) {
            var o = (i % this.textureWidth + .5) / this.textureWidth,
                a = (Math.floor(i / this.textureWidth) + .5) / this.textureHeight;
            n.push(o), n.push(a)
        }
        if (t.bufferData(this.baseVertexBuffer, t.ARRAY_BUFFER, new Float32Array(n), t.STATIC_DRAW), this.baseIndices = this.module.HEAPU16.subarray(this.getFaceIndexData() >> 1, (this.getFaceIndexData() >> 1) + this.getFaceIndexCount()), this.wireframe) {
            var s = [];
            for (i = 0; i < this.baseIndices.length; i += 3) {
                var u = this.baseIndices[i + 0],
                    h = this.baseIndices[i + 1],
                    c = this.baseIndices[i + 2];
                s.push(u), s.push(h), s.push(h), s.push(c), s.push(c), s.push(u)
            }
            this.renderingIndexBuffer = t.buildBuffer(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(s), t.STATIC_DRAW), this.renderingIndexCount = s.length
        } else this.baseIndexBuffer = t.buildBuffer(t.ELEMENT_ARRAY_BUFFER, this.baseIndices, t.STATIC_DRAW), this.renderingIndexBuffer = this.baseIndexBuffer, this.renderingIndexCount = this.baseIndices.length;
        this.restBasePositions = this.module.HEAPF32.subarray(this.getFacePositionData() >> 2, (this.getFacePositionData() >> 2) + 3 * this.getFaceVertexCount()).slice(0), this.restBaseNormals = this.module.HEAPF32.subarray(this.getFaceNormalData() >> 2, (this.getFaceNormalData() >> 2) + 3 * this.getFaceVertexCount()).slice(0), this.wrinkleStrengths = this.module.HEAPF32.subarray(this.getWrinkleStrengths() >> 2, (this.getWrinkleStrengths() >> 2) + this.getFaceVertexCount()), this.mouthinesses = this.module.HEAPF32.subarray(this.getMouthiness() >> 2, (this.getMouthiness() >> 2) + this.getFaceVertexCount()), this.hiddenTriangles = this.module.HEAPU16.subarray(this.getHiddenTriangles() >> 1, (this.getHiddenTriangles() >> 1) + this.getHiddenTriangleCount()), this.basePositionsData = new Float32Array(this.textureWidth * this.textureHeight * 4), this.baseNormalsData = new Float32Array(this.textureWidth * this.textureHeight * 4)
    }

    function r(e, t) {
        return [e[3 * t + 0], e[3 * t + 1], e[3 * t + 2]]
    }

    function L(e, t, r) {
        this.a = e, this.b = t, this.c = r, this.wrinkleIndices = [], this.hidden = !1
    }

    function U(e, t, r, n) {
        this.a = e, this.b = t, this.c = r, this.hidden = n, this.isBeyondBorder = !1
    }

    function O(e, t) {
        this.baseTriangleIndex = e, this.barycentricCoordinates = t
    }

    function H(e) {
        this.baseAssociations = e, this.neighbours = [], this.opposites = [], this.triangles = [], this.isOnBorder = !1, this.isBeyondBorder = !1, this.wrinkleStrength = 1, this.mouthiness = 0
    }

    function k(e, t, r) {
        return (1 - r) * e + r * t
    }

    function I(e, t, r, n, i) {
        this.subdivisions = e, this.vertices = [], this.baseTriangles = [], this.triangles = [], this.midpointMap = {};
        for (var o = 0; o < r.length; o += 3) {
            var a = new L(r[o + 0], r[o + 1], r[o + 2]);
            this.baseTriangles.push(a), this.triangles.push(new U(r[o + 0], r[o + 1], r[o + 2], !1))
        }
        for (o = 0; o < t.hiddenTriangles.length; ++o) {
            var s = t.hiddenTriangles[o];
            this.baseTriangles[s].hidden = !0, this.triangles[s].hidden = !0
        }
        for (o = 0; o < t.vertexCount; ++o) this.vertices.push(new H([]));
        for (o = 0; o < this.baseTriangles.length; ++o) {
            var u = this.baseTriangles[o];
            this.vertices[u.a].baseAssociations.push(new O(o, [1, 0, 0])), this.vertices[u.b].baseAssociations.push(new O(o, [0, 1, 0])), this.vertices[u.c].baseAssociations.push(new O(o, [0, 0, 1]))
        }

        function m(e, t) {
            return e < t ? (5e4 * e + t).toFixed(0) : (5e4 * t + e).toFixed(0)
        }

        function h(e, t) {
            var r = m(e, t);
            if (this.midpointMap[r] !== undefined) return d = this.midpointMap[r];
            for (var n, i, o, a = new H([]), s = this.vertices[e], u = this.vertices[t], h = 0; h < s.baseAssociations.length; ++h)
                for (var c = s.baseAssociations[h], l = 0; l < u.baseAssociations.length; ++l) {
                    var f = u.baseAssociations[l];
                    c.baseTriangleIndex === f.baseTriangleIndex && a.baseAssociations.push(new O(c.baseTriangleIndex, (n = c.barycentricCoordinates, i = f.barycentricCoordinates, o = .5, [k(n[0], i[0], o), k(n[1], i[1], o), k(n[2], i[2], o)])))
                }
            this.vertices.push(a);
            var d = this.vertices.length - 1;
            return this.midpointMap[r] = d
        }
        h = h.bind(this);
        for (o = 0; o < this.subdivisions; ++o) {
            for (var c = [], l = 0; l < this.triangles.length; ++l) {
                var f = (u = this.triangles[l]).a,
                    d = u.b,
                    p = u.c,
                    g = h(f, d),
                    _ = h(d, p),
                    v = h(p, f);
                c.push(new U(f, g, v, u.hidden)), c.push(new U(d, _, g, u.hidden)), c.push(new U(p, v, _, u.hidden)), c.push(new U(g, _, v, u.hidden))
            }
            this.triangles = c
        }
        var T = [];
        for (o = 0; o < this.vertices.length; ++o) T[o] = !1;
        for (o = 0; o < this.triangles.length; ++o) {
            (u = this.triangles[o]).hidden || (T[u.a] = !0, T[u.b] = !0, T[u.c] = !0)
        }
        for (o = 0; o < this.triangles.length; ++o) {
            (u = this.triangles[o]).hidden && (T[u.a] || T[u.b] || T[u.c]) && (T[u.a] ? this.vertices[u.a].isOnBorder = !0 : this.vertices[u.a].isBeyondBorder = !0, T[u.b] ? this.vertices[u.b].isOnBorder = !0 : this.vertices[u.b].isBeyondBorder = !0, T[u.c] ? this.vertices[u.c].isOnBorder = !0 : this.vertices[u.c].isBeyondBorder = !0, T[u.a] = !0, T[u.b] = !0, T[u.c] = !0, u.isBeyondBorder = !0)
        }
        var E = [],
            b = 0;
        for (o = 0; o < this.vertices.length; ++o) T[o] ? (E[o] = b, b += 1) : E[o] = -1;
        var x = [];
        for (o = 0; o < this.triangles.length; ++o) {
            if (!(u = this.triangles[o]).hidden || u.isBeyondBorder) {
                var A = u.isBeyondBorder,
                    y = new U(E[u.a], E[u.b], E[u.c], u.hidden);
                y.isBeyondBorder = A, x.push(y)
            }
        }
        this.triangles = x;
        var R = [];
        for (o = 0; o < this.vertices.length; ++o) T[o] && R.push(this.vertices[o]);
        this.vertices = R;
        for (o = 0; o < this.triangles.length; ++o) {
            u = this.triangles[o];
            this.vertices[u.a].triangles.push(u), this.vertices[u.b].triangles.push(u), this.vertices[u.c].triangles.push(u)
        }
        var P = [0, 1, 2, 3, 4, 5];
        for (o = 0; o < this.vertices.length; ++o) this.vertices[o].isBeyondBorder ? this.vertices[o].neighbours = P : this.vertices[o].sortTriangles(o);
        var D = {};

        function w(e, t, r) {
            var n = m(e, t);
            if (D[n] === undefined) D[n] = r;
            else {
                var i = D[n];
                this.vertices[r].opposites.push(i), this.vertices[i].opposites.push(r)
            }
        }
        w = w.bind(this);
        for (o = 0; o < this.triangles.length; ++o) {
            w((u = this.triangles[o]).a, u.b, u.c), w(u.b, u.c, u.a), w(u.c, u.a, u.b)
        }
        var F = [0, 1, 2, 3, 4, 5];
        for (o = 0; o < this.vertices.length; ++o) this.vertices[o].isBeyondBorder && (this.vertices[o].opposites = F);
        var S = [];
        for (o = 0; o < this.triangles.length; ++o) this.triangles[o].isBeyondBorder || S.push(this.triangles[o]);
        this.triangles = S;
        for (o = 0; o < this.vertices.length; ++o) {
            var C = this.vertices[o],
                I = C.baseAssociations[0],
                M = (a = this.baseTriangles[I.baseTriangleIndex], I.barycentricCoordinates[0]),
                B = I.barycentricCoordinates[1],
                N = I.barycentricCoordinates[2];
            C.wrinkleStrength = M * n[a.a] + B * n[a.b] + N * n[a.c], C.mouthiness = M * i[a.a] + B * i[a.b] + N * i[a.c], (C.isOnBorder || C.isBeyondBorder) && (C.wrinkleStrength = 0)
        }
        for (o = 0; o < this.vertices.length; ++o)
            for (l = 0; l < this.vertices[o].baseAssociations.length; ++l) this.baseTriangles[this.vertices[o].baseAssociations[l].baseTriangleIndex].wrinkleIndices.push(o)
    }
    Float32Array.prototype.slice || Object.defineProperty(Float32Array.prototype, "slice", {
        value: Array.prototype.slice
    }), m.prototype.intersect = function(e, t) {
        return this.rayIntersect(e[0], e[1], e[2], t[0], t[1], t[2])
    }, m.prototype.update = function(e, t, r, n, i, o, a, s) {
        var u = this.wgl;
        this.step(e[0], e[1], e[2], e[3], t, r, n[0], n[1], n[2], i, o, a[0], a[1], a[2], s[0], s[1], s[2]);
        var h = this.module.HEAPF32.subarray(this.getFacePositionData() >> 2, (this.getFacePositionData() >> 2) + 3 * this.getFaceVertexCount()),
            c = this.module.HEAPF32.subarray(this.getFaceNormalData() >> 2, (this.getFaceNormalData() >> 2) + 3 * this.getFaceVertexCount());
        this.positions = h, this.normals = c;
        for (var l = 0; l < this.textureWidth * this.textureHeight; ++l)
            if (l < h.length / 3) this.basePositionsData[4 * l + 0] = h[3 * l + 0], this.basePositionsData[4 * l + 1] = h[3 * l + 1], this.basePositionsData[4 * l + 2] = h[3 * l + 2], this.basePositionsData[4 * l + 3] = 0, this.baseNormalsData[4 * l + 0] = c[3 * l + 0], this.baseNormalsData[4 * l + 1] = c[3 * l + 1], this.baseNormalsData[4 * l + 2] = c[3 * l + 2], this.baseNormalsData[4 * l + 3] = 0;
            else
                for (var f = 0; f < 4; ++f) this.basePositionsData[4 * l + f] = 0, this.baseNormalsData[4 * l + f] = 0;
        u.texImage2D(u.TEXTURE_2D, this.basePositionsTexture, 0, u.RGBA, this.textureWidth, this.textureHeight, 0, u.RGBA, u.FLOAT, this.basePositionsData), u.texImage2D(u.TEXTURE_2D, this.baseNormalsTexture, 0, u.RGBA, this.textureWidth, this.textureHeight, 0, u.RGBA, u.FLOAT, this.baseNormalsData)
    }, m.prototype.getPosition = function(e) {
        return r(this.positions, e)
    }, m.prototype.getNormal = function(e) {
        return r(this.normals, e)
    }, m.prototype.getRestPosition = function(e) {
        var t = this.baseIndices[3 * e];
        return r(this.restBasePositions, t)
    }, H.prototype.findTriangle = function(e, t) {
        for (var r = 0; r < this.triangles.length; ++r) {
            var n = this.triangles[r];
            if (n.a === e && n.b === t || n.b === e && n.c === t || n.c === e && n.a === t) return n
        }
    }, H.prototype.sortTriangles = function(e) {
        for (var t = [], r = this.triangles[0], n = r; t.push(n), n.a === e ? n = this.findTriangle(n.b, e) : n.b === e ? n = this.findTriangle(n.c, e) : n.c === e && (n = this.findTriangle(n.a, e)), n !== r;);
        this.triangles = t;
        for (var i = 0; i < this.triangles.length; ++i) {
            var o = this.triangles[i];
            o.a === e ? this.neighbours.push(o.b) : o.b === e ? this.neighbours.push(o.c) : o.c === e && this.neighbours.push(o.a)
        }
    };
    var i = {
            "attachmentconstraint.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform sampler2D u_attachmentPositionsTexture;\r\nuniform sampler2D u_strengthsTexture;\r\n\r\nvoid main () {\r\n    vec3 position = texture2D(u_positionsTexture, v_coordinates).rgb;\r\n    vec3 attachmentPosition = texture2D(u_attachmentPositionsTexture, v_coordinates).rgb;\r\n    float strength = texture2D(u_strengthsTexture, v_coordinates).r;\r\n\r\n    float RADIUS = 0.008 * strength;\r\n\r\n    float dist = distance(position, attachmentPosition);\r\n\r\n    if (dist > RADIUS) {\r\n        position = position + ((dist - RADIUS) * (attachmentPosition - position) / dist);\r\n    }\r\n\r\n    gl_FragColor = vec4(position, 0.0);\r\n}\r\n",
            "attachmentpositions.frag": "//this shader computes the attachment location for each wrinkle mesh point by interpolating the base mesh\r\n\r\nprecision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_basePositionsTexture;\r\nuniform sampler2D u_baseNormalsTexture;\r\nuniform vec2 u_baseTextureResolution;\r\n\r\nuniform sampler2D u_wrinkleAssociationsTexture;\r\nuniform sampler2D u_wrinkleBarycentricCoordinatesTexture;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_baseTextureResolution.x)), floor((index + 0.5) / u_baseTextureResolution.x)) + 0.5) / u_baseTextureResolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 associations = texture2D(u_wrinkleAssociationsTexture, v_coordinates).rgb;\r\n    vec3 barycentricCoordinates = texture2D(u_wrinkleBarycentricCoordinatesTexture, v_coordinates).rgb;\r\n\r\n    float u = barycentricCoordinates.y;\r\n    float v = barycentricCoordinates.z;\r\n    float w = barycentricCoordinates.x;\r\n\r\n    vec3 p1 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.x)).rgb;\r\n    vec3 p2 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.y)).rgb;\r\n    vec3 p3 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.z)).rgb;\r\n\r\n    vec3 n1 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.x)).rgb;\r\n    vec3 n2 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.y)).rgb;\r\n    vec3 n3 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.z)).rgb;\r\n\r\n    vec3 b300 = p1;\r\n    vec3 b030 = p2;\r\n    vec3 b003 = p3;\r\n\r\n    vec3 b210 = (2.0 * p1 + p2 - dot(p2 - p1, n1) * n1) / 3.0;\r\n    vec3 b120 = (2.0 * p2 + p1 - dot(p1 - p2, n2) * n2) / 3.0;\r\n    vec3 b021 = (2.0 * p2 + p3 - dot(p3 - p2, n2) * n2) / 3.0;\r\n    vec3 b012 = (2.0 * p3 + p2 - dot(p2 - p3, n3) * n3) / 3.0;\r\n    vec3 b102 = (2.0 * p3 + p1 - dot(p1 - p3, n3) * n3) / 3.0;\r\n    vec3 b201 = (2.0 * p1 + p3 - dot(p3 - p1, n1) * n1) / 3.0;\r\n\r\n    vec3 E = (b210 + b120 + b021 + b012 + b102 + b201) / 6.0;\r\n    vec3 V = (p1 + p2 + p3) / 3.0;\r\n\r\n    vec3 b111 = E + (E - V) / 2.0;\r\n\r\n    float u2 = u * u;\r\n    float u3 = u2 * u;\r\n\r\n    float v2 = v * v;\r\n    float v3 = v2 * v;\r\n\r\n    float w2 = w * w;\r\n    float w3 = w2 * w;\r\n\r\n    vec3 position = b300 * w3 + b030 * u3 + b003 * v3\r\n        + b210 * 3.0 * w2 * u + b120 * 3.0 * w * u2 + b201 * 3.0 * w2 * v\r\n        + b021 * 3.0 * u2 * v + b102 * 3.0 * w * v2 + b012 * 3.0 * u * v2\r\n        + b111 * 6.0 * w * u * v;\r\n\r\n\r\n    gl_FragColor = vec4(position, 0.0);\r\n}\r\n",
            "background.frag": "precision highp float;\r\n\r\nvarying vec2 v_position;\r\n\r\nuniform vec2 u_scale;\r\nuniform vec3 u_color;\r\n\r\nvoid main () {\r\n    vec3 direction = normalize(vec3(\r\n    \tv_position * u_scale,\r\n    \t-1.0));\r\n\r\n    float factor = 1.0 - pow(max(-direction.z, 0.0), 0.3);\r\n    vec3 color = (u_color - factor) * 0.6;\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}\r\n",
            "background.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nvarying vec2 v_position;\r\n\r\nvoid main () {\r\n\tv_position = a_position;\r\n    gl_Position = vec4(a_position, 0.999, 1.0);\r\n}\r\n",
            "composite.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_colorTexture;\r\n\r\nvoid main () {\r\n    gl_FragColor = vec4(texture2D(u_colorTexture, v_coordinates).rgb, 1.0);\r\n}\r\n",
            "constraintdistance.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform vec2 u_resolution;\r\n\r\nuniform sampler2D u_connectionsTexture;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 center = texture2D(u_positionsTexture, v_coordinates).rgb;\r\n    vec4 connections = texture2D(u_connectionsTexture, v_coordinates).rgba;\r\n\r\n    vec3 a = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.x)).rgb;\r\n    vec3 b = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.y)).rgb;\r\n    vec3 c = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.z)).rgb;\r\n    vec3 d = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.w)).rgb;\r\n\r\n    float aL = distance(center, a);\r\n    float bL = distance(center, b);\r\n    float cL = distance(center, c);\r\n    float dL = distance(center, d);\r\n\r\n\r\n    gl_FragColor = vec4(aL, bL, cL, dL);\r\n}\r\n",
            "copy.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nvoid main () {\r\n    gl_FragColor = texture2D(u_texture, v_coordinates);\r\n}\r\n",
            "distanceconstraint.frag": "//computes the distance between the vertex and those it's connected to\r\n\r\nprecision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform vec2 u_resolution;\r\n\r\nuniform sampler2D u_neighboursTextureA;\r\nuniform sampler2D u_neighboursTextureB;\r\n\r\nuniform sampler2D u_distancesTextureA;\r\nuniform sampler2D u_distancesTextureB;\r\n\r\nuniform sampler2D u_fixedTexture;\r\n\r\nuniform sampler2D u_strengthsTexture;\r\n\r\nuniform int u_respectFixed;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvec3 getDelta (vec3 center, vec3 other, float restLength) {\r\n    restLength *= 1.0;\r\n\r\n    float dist = distance(center, other);\r\n\r\n    vec3 delta = 1.5 * (dist - restLength) * (other - center) / dist;\r\n\r\n    return delta;\r\n}\r\n\r\nvoid main () {\r\n    vec3 center = texture2D(u_positionsTexture, v_coordinates).rgb;\r\n    float isFixed = texture2D(u_fixedTexture, v_coordinates).r;\r\n\r\n    vec4 neighboursA = texture2D(u_neighboursTextureA, v_coordinates).rgba;\r\n    vec4 neighboursB = texture2D(u_neighboursTextureB, v_coordinates).rgba;\r\n\r\n    vec3 a = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.x)).rgb;\r\n    vec3 b = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.y)).rgb;\r\n    vec3 c = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.z)).rgb;\r\n    vec3 d = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.w)).rgb;\r\n    vec3 e = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.x)).rgb;\r\n    vec3 f = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.y)).rgb;\r\n\r\n    vec4 distancesA = texture2D(u_distancesTextureA, v_coordinates).rgba;\r\n    vec4 distancesB = texture2D(u_distancesTextureB, v_coordinates).rgba;\r\n\r\n    float aL = distancesA.x;\r\n    float bL = distancesA.y;\r\n    float cL = distancesA.z;\r\n    float dL = distancesA.w;\r\n    float eL = distancesB.x;\r\n    float fL = distancesB.y;\r\n\r\n\r\n    vec3 offset = vec3(0.0);\r\n\r\n    offset += getDelta(center, a, aL);\r\n    offset += getDelta(center, b, bL);\r\n    offset += getDelta(center, c, cL);\r\n    offset += getDelta(center, d, dL);\r\n    offset += getDelta(center, e, eL);\r\n    if (neighboursB.y >= 0.0) offset += getDelta(center, f, fL);\r\n\r\n    float count = neighboursB.y >= 0.0 ? 6.0 : 5.0;\r\n\r\n    float strength = texture2D(u_strengthsTexture, v_coordinates).r;\r\n\r\n    gl_FragColor = vec4(center + strength * offset / count, 0.0);\r\n\r\n    if (isFixed > 0.5 && u_respectFixed == 1) gl_FragColor = vec4(center, 0.0); \r\n\r\n}\r\n\r\n",
            "eye.frag": "//requires lightingcommon.glsl\r\n\r\nvarying vec3 v_baseNormal;\r\n\r\nuniform float u_pupilNoiseOffset;\r\nuniform vec3 u_eyePosition;\r\n\r\nuniform vec3 u_lookDirection;\r\n\r\n//\r\n// Description : Array and textureless GLSL 2D simplex noise function.\r\n//      Author : Ian McEwan, Ashima Arts.\r\n//  Maintainer : stegu\r\n//     Lastmod : 20110822 (ijm)\r\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\r\n//               Distributed under the MIT License. See LICENSE file.\r\n//               https://github.com/ashima/webgl-noise\r\n//               https://github.com/stegu/webgl-noise\r\n// \r\n\r\nvec3 mod289(vec3 x) {\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec2 mod289(vec2 x) {\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec3 permute(vec3 x) {\r\n  return mod289(((x*34.0)+1.0)*x);\r\n}\r\n\r\nfloat snoise(vec2 v)\r\n  {\r\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\r\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\r\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\r\n                      0.024390243902439); // 1.0 / 41.0\r\n// First corner\r\n  vec2 i  = floor(v + dot(v, C.yy) );\r\n  vec2 x0 = v -   i + dot(i, C.xx);\r\n\r\n// Other corners\r\n  vec2 i1;\r\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\r\n  //i1.y = 1.0 - i1.x;\r\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\r\n  // x1 = x0 - i1 + 1.0 * C.xx ;\r\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\r\n  vec4 x12 = x0.xyxy + C.xxzz;\r\n  x12.xy -= i1;\r\n\r\n// Permutations\r\n  i = mod289(i); // Avoid truncation effects in permutation\r\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\r\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\r\n\r\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\r\n  m = m*m ;\r\n  m = m*m ;\r\n\r\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\r\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\r\n\r\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\r\n  vec3 h = abs(x) - 0.5;\r\n  vec3 ox = floor(x + 0.5);\r\n  vec3 a0 = x - ox;\r\n\r\n// Normalise gradients implicitly by scaling m\r\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\r\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\r\n\r\n// Compute final noise value at P\r\n  vec3 g;\r\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\r\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r\n  return 130.0 * dot(m, g);\r\n}\r\n\r\nvec3 closestPointOnAxis (vec3 base, vec3 direction, vec3 point) {\r\n    return base + dot(point - base, direction) * direction;\r\n}\r\n\r\nfloat distanceFromAxis (vec3 base, vec3 direction, vec3 point) {\r\n    return distance(point, closestPointOnAxis(base, direction, point));\r\n}\r\n\r\nvec3 eyeColor (vec3 point) {\r\n    //closest point on cylinder axis\r\n    vec3 closestPoint = closestPointOnAxis(u_eyePosition, u_lookDirection, point);\r\n\r\n    if (dot(u_lookDirection, v_worldPosition - u_eyePosition) < 0.0) return vec3(1.0);\r\n\r\n    vec3 offset = point - closestPoint;\r\n\r\n    //find plane of cylinder\r\n    vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), u_lookDirection));\r\n    vec3 up = cross(u_lookDirection, right);\r\n\r\n    //project onto cylinder plane\r\n    float x = dot(offset, right);\r\n    float y = dot(offset, up);\r\n\r\n    float PUPIL_FREQUENCY = 8.0;\r\n\r\n    float theta = mod(atan(y, x) + PI + u_pupilNoiseOffset, 2.0 * PI);\r\n    float r = 0.025 + snoise(vec2(PUPIL_FREQUENCY * theta / (2.0 * PI), 0.0)) * 0.003;\r\n\r\n    return length(vec2(x, y)) < r ? vec3(0.0) : vec3(1.0);\r\n}\r\n\r\n/*\r\nvec3 eyeColor (vec3 point) {\r\n    return distanceFromAxis(u_eyePosition, u_lookDirection, point) < 0.03 ? vec3(0.0) : vec3(1.0);\r\n}\r\n*/\r\n\r\nvoid main () {\r\n    vec3 normal = normalize(v_normal);\r\n\r\n    vec3 albedo = eyeColor(v_worldPosition);\r\n\r\n    float roughness = 0.05;\r\n    float F0 = 0.35;\r\n\r\n    vec3 color = shadeSurfaceWithLights(v_worldPosition, normal, albedo, roughness, F0);\r\n\r\n    gl_FragColor = vec4(gammaCorrect(color), 1.0);\r\n}\r\n",
            "eye.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\nattribute vec3 a_normal;\r\n\r\nuniform mat4 u_projectionViewMatrix;\r\nuniform mat4 u_modelMatrix;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_baseNormal;\r\nvarying vec3 v_worldPosition;\r\n\r\nvoid main () {\r\n    v_normal = normalize((u_modelMatrix * vec4(a_normal, 0.0)).xyz);\r\n    v_baseNormal = v_normal;\r\n    v_worldPosition = (u_modelMatrix * vec4(a_position, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}\r\n",
            "eyedepth.frag": "precision highp float;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nconst float PackUpscale = 256.0 / 255.0;\r\nconst float UnpackDownscale = 255.0 / 256.0;\r\n\r\nconst vec3 PackFactors = vec3(256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);\r\n\r\nconst float ShiftRight8 = 1.0 / 256.0;\r\n\r\nvec4 packDepthToRGBA( const in float v ) {\r\n    vec4 r = vec4( fract( v * PackFactors ), v );\r\n    r.yzw -= r.xyz * ShiftRight8; // tidy overflow\r\n    return r * PackUpscale;\r\n}\r\n\r\nvoid main () {\r\n    float ndcDepth = v_clipSpacePosition.z / v_clipSpacePosition.w;\r\n    gl_FragColor = packDepthToRGBA(ndcDepth * 0.5 + 0.5);\r\n}\r\n",
            "eyedepth.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\n\r\nuniform mat4 u_projectionViewModelMatrix;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nvoid main () {\r\n    v_clipSpacePosition = u_projectionViewModelMatrix * vec4(a_position, 1.0);\r\n    gl_Position = v_clipSpacePosition;\r\n}\r\n",
            "fullscreen.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nvoid main () {\r\n    v_coordinates = a_position * 0.5 + 0.5;\r\n\r\n    gl_Position = vec4(a_position, 0.0, 1.0);\r\n}\r\n",
            "fxaa.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_input;\r\n\r\nuniform vec2 u_resolution;\r\n\r\nuniform float u_scale;\r\n\r\nconst float FXAA_SPAN_MAX = 8.0;\r\nconst float FXAA_REDUCE_MUL = 1.0 / 8.0;\r\nconst float FXAA_REDUCE_MIN = 1.0 / 128.0;\r\n \r\nvoid main () {\r\n    vec2 delta = 1.0 / u_resolution;\r\n\r\n    vec3 rgbNW = texture2D(u_input, v_coordinates + vec2(-1.0, -1.0) * delta).rgb;\r\n    vec3 rgbNE = texture2D(u_input, v_coordinates + vec2(1.0, -1.0) * delta).rgb;\r\n    vec3 rgbSW = texture2D(u_input, v_coordinates + vec2(-1.0, 1.0) * delta).rgb;\r\n    vec3 rgbSE = texture2D(u_input, v_coordinates + vec2(1.0, 1.0) * delta).rgb;\r\n    vec3 rgbM = texture2D(u_input, v_coordinates).rgb;\r\n\r\n    vec3 luma = vec3(0.299, 0.587, 0.114);\r\n    float lumaNW = dot(rgbNW, luma);\r\n    float lumaNE = dot(rgbNE, luma);\r\n    float lumaSW = dot(rgbSW, luma);\r\n    float lumaSE = dot(rgbSE, luma);\r\n    float lumaM  = dot(rgbM,  luma);\r\n\r\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\r\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\r\n\r\n    vec2 dir = vec2(\r\n        -((lumaNW + lumaNE) - (lumaSW + lumaSE)),\r\n        ((lumaNW + lumaSW) - (lumaNE + lumaSE)));\r\n\r\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\r\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\r\n    dir = min(vec2(FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX), dir * rcpDirMin)) * delta.xy;\r\n\r\n    vec3 rgbA = 0.5 * (texture2D(u_input, v_coordinates.xy + dir * (1.0 / 3.0 - 0.5)).xyz + texture2D(u_input, v_coordinates.xy + dir * (2.0 / 3.0 - 0.5)).xyz);\r\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(u_input, v_coordinates.xy + dir * -0.5).xyz + texture2D(u_input, v_coordinates.xy + dir * 0.5).xyz);\r\n    float lumaB = dot(rgbB, luma);\r\n    if (lumaB < lumaMin || lumaB > lumaMax) {\r\n        gl_FragColor = vec4(rgbA, 1.0) * u_scale;\r\n    } else {\r\n        gl_FragColor = vec4(rgbB, 1.0) * u_scale;\r\n    }\r\n}\r\n",
            "hair.frag": "uniform sampler2D u_perturbationTexture3D;\r\nuniform float u_perturbationTextureWidth;\r\n\r\nuniform vec3 u_hairAlbedo;\r\n\r\nvarying vec3 v_restPosition;\r\n\r\n//coordinates are in pixel space\r\nvec4 texture3D(sampler2D texture, vec3 coordinates, vec3 resolution) {\r\n    coordinates = mod(coordinates, vec3(resolution));\r\n\r\n    //belowZIndex and aboveZIndex don't have the 0.5 offset\r\n    float belowZIndex = floor(coordinates.z - 0.5);\r\n    float aboveZIndex = belowZIndex + 1.0;\r\n\r\n    //we interpolate the z\r\n    float fraction = fract(coordinates.z - 0.5);\r\n\r\n    vec2 belowCoordinates = vec2(\r\n        belowZIndex * resolution.x + coordinates.x,\r\n        coordinates.y) / vec2(resolution.x * resolution.z, resolution.y);\r\n\r\n    vec2 aboveCoordinates = vec2(\r\n        aboveZIndex * resolution.x + coordinates.x,\r\n        coordinates.y) / vec2(resolution.x * resolution.z, resolution.y);\r\n\r\n    return mix(texture2D(texture, belowCoordinates), texture2D(texture, aboveCoordinates), fraction);\r\n}\r\n\r\nvoid main () {\r\n    vec3 normal = normalize(v_normal);\r\n\r\n    vec3 peturbation = texture3D(u_perturbationTexture3D, v_restPosition * 400.0, vec3(u_perturbationTextureWidth)).rgb * 2.0 - 1.0;\r\n    normal = normalize(v_normal + peturbation * 0.07);\r\n\r\n    if (!gl_FrontFacing) {\r\n        normal *= -1.0;\r\n    }\r\n\r\n    float roughness = 0.5;\r\n    float F0 = 0.05;\r\n\r\n    vec3 color = shadeSurfaceWithLights(v_worldPosition, normal, u_hairAlbedo, roughness, F0);\r\n\r\n    gl_FragColor = vec4(gammaCorrect(color), 1.0);\r\n}\r\n",
            "hair.vert": "//define DEPTH for depth only\r\n\r\nprecision highp float;\r\n\r\nattribute vec3 a_associations;\r\nattribute vec3 a_barycentricCoordinates;\r\n\r\n#ifndef DEPTH\r\nattribute vec3 a_restPosition;\r\n#endif\r\n\r\n#ifndef DEPTH\r\nuniform mat4 u_projectionViewMatrix;\r\nuniform mat4 u_modelMatrix;\r\n#else\r\nuniform mat4 u_projectionViewModelMatrix;\r\n#endif\r\n\r\nuniform sampler2D u_basePositionsTexture;\r\nuniform sampler2D u_baseNormalsTexture;\r\nuniform vec2 u_baseTextureResolution;\r\n\r\n#ifndef DEPTH\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\nvarying vec3 v_restPosition;\r\n#endif\r\n\r\n#ifdef DEPTH\r\nvarying vec4 v_clipSpacePosition;\r\n#endif\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_baseTextureResolution.x)), floor((index + 0.5) / u_baseTextureResolution.x)) + 0.5) / u_baseTextureResolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 associations = a_associations;\r\n    vec3 barycentricCoordinates = a_barycentricCoordinates;\r\n\r\n    #ifndef DEPTH\r\n    v_restPosition = a_restPosition;\r\n    #endif\r\n\r\n    float u = barycentricCoordinates.y;\r\n    float v = barycentricCoordinates.z;\r\n    float w = barycentricCoordinates.x;\r\n\r\n    vec3 p1 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.x)).rgb;\r\n    vec3 p2 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.y)).rgb;\r\n    vec3 p3 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.z)).rgb;\r\n\r\n    vec3 n1 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.x)).rgb;\r\n    vec3 n2 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.y)).rgb;\r\n    vec3 n3 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.z)).rgb;\r\n\r\n    vec3 b300 = p1;\r\n    vec3 b030 = p2;\r\n    vec3 b003 = p3;\r\n\r\n    vec3 b210 = (2.0 * p1 + p2 - dot(p2 - p1, n1) * n1) / 3.0;\r\n    vec3 b120 = (2.0 * p2 + p1 - dot(p1 - p2, n2) * n2) / 3.0;\r\n    vec3 b021 = (2.0 * p2 + p3 - dot(p3 - p2, n2) * n2) / 3.0;\r\n    vec3 b012 = (2.0 * p3 + p2 - dot(p2 - p3, n3) * n3) / 3.0;\r\n    vec3 b102 = (2.0 * p3 + p1 - dot(p1 - p3, n3) * n3) / 3.0;\r\n    vec3 b201 = (2.0 * p1 + p3 - dot(p3 - p1, n1) * n1) / 3.0;\r\n\r\n    vec3 E = (b210 + b120 + b021 + b012 + b102 + b201) / 6.0;\r\n    vec3 V = (p1 + p2 + p3) / 3.0;\r\n\r\n    vec3 b111 = E + (E - V) / 2.0;\r\n\r\n    float u2 = u * u;\r\n    float u3 = u2 * u;\r\n\r\n    float v2 = v * v;\r\n    float v3 = v2 * v;\r\n\r\n    float w2 = w * w;\r\n    float w3 = w2 * w;\r\n\r\n    vec3 position = b300 * w3 + b030 * u3 + b003 * v3\r\n        + b210 * 3.0 * w2 * u + b120 * 3.0 * w * u2 + b201 * 3.0 * w2 * v\r\n        + b021 * 3.0 * u2 * v + b102 * 3.0 * w * v2 + b012 * 3.0 * u * v2\r\n        + b111 * 6.0 * w * u * v;\r\n\r\n\r\n    #ifndef DEPTH\r\n\r\n    vec3 n200 = n1;\r\n    vec3 n020 = n2;\r\n    vec3 n002 = n3;\r\n\r\n    vec3 n110 = normalize(n1 + n2 - (2.0 * dot(p2 - p1, n1 + n2) / dot(p2 - p1, p2 - p1)) * (p2 - p1));\r\n    vec3 n011 = normalize(n2 + n3 - (2.0 * dot(p3 - p2, n2 + n3) / dot(p3 - p2, p3 - p2)) * (p3 - p2));\r\n    vec3 n101 = normalize(n3 + n1 - (2.0 * dot(p1 - p3, n3 + n1) / dot(p1 - p3, p1 - p3)) * (p1 - p3));\r\n\r\n    v_normal = normalize(n200 * w2 + n020 * u2 + n002 * v2 + n110 * w * u + n011 * u * v + n101 * w * v);\r\n    v_normal = normalize(n200 * w + n020 * u + n002 * v);\r\n\r\n    v_normal = (u_modelMatrix * vec4(v_normal, 0.0)).xyz;\r\n    v_worldPosition = (u_modelMatrix * vec4(position, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n\r\n    #else\r\n\r\n    v_clipSpacePosition = u_projectionViewModelMatrix * vec4(position, 1.0);\r\n    gl_Position = v_clipSpacePosition;\r\n\r\n    #endif\r\n}\r\n\r\n",
            "hairdepth.frag": "precision highp float;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nconst float PackUpscale = 256.0 / 255.0;\r\nconst float UnpackDownscale = 255.0 / 256.0;\r\n\r\nconst vec3 PackFactors = vec3(256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);\r\n\r\nconst float ShiftRight8 = 1.0 / 256.0;\r\n\r\nvec4 packDepthToRGBA( const in float v ) {\r\n    vec4 r = vec4( fract( v * PackFactors ), v );\r\n    r.yzw -= r.xyz * ShiftRight8; // tidy overflow\r\n    return r * PackUpscale;\r\n}\r\n\r\nvoid main () {\r\n    float ndcDepth = v_clipSpacePosition.z / v_clipSpacePosition.w;\r\n    gl_FragColor = packDepthToRGBA(ndcDepth * 0.5 + 0.5);\r\n}\r\n",
            "image.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_image;\r\nuniform float u_alpha;\r\n\r\nvoid main () {\r\n\tgl_FragColor = texture2D(u_image, v_coordinates) * u_alpha;\r\n}",
            "image.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nvoid main () {\r\n\tv_coordinates = a_position * 0.5 + 0.5;\r\n    gl_Position = vec4(a_position, 0.999, 1.0);\r\n}\r\n",
            "lightingcommon.glsl": "precision highp float;\r\nprecision highp sampler2D;\r\n\r\nuniform vec3 u_cameraPosition;\r\n\r\nuniform vec3 u_lightPosition0;\r\nuniform mat4 u_lightProjectionViewMatrix0;\r\nuniform sampler2D u_shadowDepthTexture0;\r\nuniform vec2 u_shadowResolution0;\r\nuniform vec3 u_lightColor0;\r\nuniform float u_lightNear0;\r\nuniform float u_lightFar0;\r\n\r\nuniform vec3 u_lightPosition1;\r\nuniform mat4 u_lightProjectionViewMatrix1;\r\nuniform sampler2D u_shadowDepthTexture1;\r\nuniform vec2 u_shadowResolution1;\r\nuniform vec3 u_lightColor1;\r\nuniform float u_lightNear1;\r\nuniform float u_lightFar1;\r\n\r\nuniform vec3 u_skinAlbedo;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nconst float PI = 3.14159265;\r\n\r\nfloat square (float x) {\r\n    return x * x;\r\n}\r\n\r\nfloat fresnel (float F0, float lDotH) {\r\n    float f = pow(1.0 - lDotH, 5.0);\r\n\r\n    return (1.0 - F0) * f + F0;\r\n}\r\n\r\nfloat GGX (float alpha, float nDotH) {\r\n    float a2 = square(alpha);\r\n\r\n    return a2 / (PI * square(square(nDotH) * (a2 - 1.0) + 1.0));\r\n}\r\n\r\nfloat GGGX (float alpha, float nDotL, float nDotV) {\r\n    float a2 = square(alpha);\r\n\r\n    float gl = nDotL + sqrt(a2 + (1.0 - a2) * square(nDotL));\r\n    float gv = nDotV + sqrt(a2 + (1.0 - a2) * square(nDotV));\r\n\r\n    return 1.0 / (gl * gv);\r\n}\r\n\r\nfloat saturate (float x) {\r\n    return clamp(x, 0.0, 1.0);\r\n}\r\n\r\nfloat specularBRDF (vec3 lightDirection, vec3 eyeDirection, vec3 normal, float roughness, float F0) {\r\n    vec3 halfVector = normalize(lightDirection + eyeDirection);\r\n\r\n    float nDotH = saturate(dot(normal, halfVector));\r\n    float nDotL = saturate(dot(normal, lightDirection));\r\n    float nDotV = saturate(dot(normal, eyeDirection));\r\n    float lDotH = saturate(dot(lightDirection, halfVector));\r\n\r\n    float D = GGX(roughness, nDotH);\r\n    float G = GGGX(roughness, nDotL, nDotV);\r\n    float F = fresnel(F0, lDotH);\r\n\r\n    return D * G * F;\r\n}\r\n\r\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\r\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\r\n\r\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\r\n\r\nconst float ShiftRight8 = 1. / 256.;\r\n\r\nfloat unpackRGBAToDepth( const in vec4 v ) {\r\n    return dot( v, UnpackFactors );\r\n}\r\n\r\nfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\r\n    return step(compare, unpackRGBAToDepth(texture2D( depths, uv )));\r\n}\r\n\r\nfloat texture2DShadow( sampler2D depths, vec2 size, vec2 uv, float compare ) {\r\n    return texture2DCompare(depths, uv, compare);\r\n}\r\n\r\nfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\r\n    const vec2 offset = vec2(0.0, 1.0);\r\n\r\n    vec2 texelSize = vec2(1.0) / size;\r\n    vec2 centroidUV = floor(uv * size + 0.5) / size;\r\n\r\n    float lb = texture2DCompare(depths, centroidUV + texelSize * offset.xx, compare );\r\n    float lt = texture2DCompare(depths, centroidUV + texelSize * offset.xy, compare );\r\n    float rb = texture2DCompare(depths, centroidUV + texelSize * offset.yx, compare );\r\n    float rt = texture2DCompare(depths, centroidUV + texelSize * offset.yy, compare );\r\n\r\n    vec2 f = fract(uv * size + 0.5);\r\n\r\n    float a = mix(lb, lt, f.y);\r\n    float b = mix(rb, rt, f.y);\r\n    float c = mix(a, b, f.x);\r\n\r\n    return c;\r\n}\r\n\r\nfloat getShadow (vec3 worldPosition, mat4 projectionViewMatrix, sampler2D depthTexture, vec2 resolution) {\r\n    vec4 lightSpacePosition = projectionViewMatrix * vec4(worldPosition, 1.0);\r\n    lightSpacePosition /= lightSpacePosition.w;\r\n    lightSpacePosition = lightSpacePosition * 0.5 + 0.5;\r\n    vec2 lightSpaceCoordinates = lightSpacePosition.xy;\r\n\r\n    <shadow>\r\n}\r\n\r\nfloat linearizeDepth (float depth, float near, float far) {\r\n    return 2.0 * near * far / (far + near - (2.0 * depth - 1.0) * (far - near)); \r\n}\r\n\r\nvec3 getTransmittedColor (vec3 worldPosition, vec3 normal, vec3 lightDirection, vec3 lightColor, mat4 lightProjectionViewMatrix, sampler2D depthTexture, float lightNear, float lightFar) {\r\n    vec3 shrunkPosition = worldPosition - normal * 0.01;\r\n    vec4 lightSpacePosition2 = lightProjectionViewMatrix * vec4(shrunkPosition, 1.0);\r\n    lightSpacePosition2 /= lightSpacePosition2.w;\r\n    lightSpacePosition2 = lightSpacePosition2 * 0.5 + 0.5;\r\n    vec2 lightSpaceCoordinates2 = lightSpacePosition2.xy;\r\n\r\n    float lightSample = unpackRGBAToDepth(texture2D(depthTexture, lightSpaceCoordinates2));\r\n    float d = abs(linearizeDepth(lightSample, lightNear, lightFar) - linearizeDepth(lightSpacePosition2.z, lightNear, lightFar)) * 20.0;\r\n\r\n    float dd = -d * d;\r\n    vec3 profile = vec3(0.233, 0.455, 0.649) * exp(dd / 0.0064) +\r\n                     vec3(0.1,   0.336, 0.344) * exp(dd / 0.0484) +\r\n                     vec3(0.118, 0.198, 0.0)   * exp(dd / 0.187)  +\r\n                     vec3(0.113, 0.007, 0.007) * exp(dd / 0.567)  +\r\n                     vec3(0.358, 0.004, 0.0)   * exp(dd / 1.99)   +\r\n                     vec3(0.078, 0.0,   0.0)   * exp(dd / 7.41);\r\n\r\n    return profile * 1.0 * saturate(0.6 + dot(lightDirection, -normal)) * lightColor;\r\n}\r\n\r\nvec3 shadeSurfaceWithLightWithoutShadow (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0, vec3 lightPosition, vec3 lightColor, mat4 projectionViewMatrix, sampler2D depthTexture, vec2 depthResolution) {\r\n    vec3 eyeDirection = normalize(u_cameraPosition - worldPosition);\r\n    vec3 lightDirection = normalize(lightPosition - worldPosition);\r\n\r\n    float diffuse = saturate(dot(lightDirection, normal));\r\n    float specular = specularBRDF(lightDirection, eyeDirection, normal, roughness, F0);\r\n\r\n    vec3 color = (diffuse * 1.0 * albedo + specular * 1.0) * lightColor;\r\n\r\n    return color;\r\n}\r\n\r\nvec3 shadeSurfaceWithLight (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0, vec3 lightPosition, vec3 lightColor, mat4 projectionViewMatrix, sampler2D depthTexture, vec2 depthResolution) {\r\n    float shadow = getShadow(worldPosition, projectionViewMatrix, depthTexture, depthResolution);\r\n\r\n    vec3 color = shadeSurfaceWithLightWithoutShadow(worldPosition, normal, albedo, roughness, F0, lightPosition, lightColor, projectionViewMatrix, depthTexture, depthResolution) * shadow;\r\n\r\n    return color;\r\n}\r\n\r\nvec3 shadeSurfaceWithLights (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0) {\r\n    vec3 total = shadeSurfaceWithLight(worldPosition, normal, albedo, roughness, F0, u_lightPosition0, u_lightColor0, u_lightProjectionViewMatrix0, u_shadowDepthTexture0, u_shadowResolution0);\r\n    total += shadeSurfaceWithLight(worldPosition, normal, albedo, roughness, F0, u_lightPosition1, u_lightColor1, u_lightProjectionViewMatrix1, u_shadowDepthTexture1, u_shadowResolution1);\r\n\r\n    return total;\r\n}\r\n\r\nvec3 shadeSurfaceWithLightsWithTransmittance (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0) {\r\n    vec3 total = shadeSurfaceWithLights(worldPosition, normal, albedo, roughness, F0);    \r\n\r\n    total += getTransmittedColor(worldPosition, normal, normalize(u_lightPosition0 - worldPosition), u_lightColor0, u_lightProjectionViewMatrix0, u_shadowDepthTexture0, u_lightNear0, u_lightFar0); \r\n    total += getTransmittedColor(worldPosition, normal, normalize(u_lightPosition1 - worldPosition), u_lightColor1, u_lightProjectionViewMatrix1, u_shadowDepthTexture1, u_lightNear1, u_lightFar1);\r\n\r\n    return total;\r\n}\r\n\r\n\r\nvec3 shadeSkin (vec3 worldPosition, vec3 normal) {\r\n    vec3 albedo = u_skinAlbedo;\r\n    float roughness = 0.3;\r\n    float F0 = 0.35;\r\n\r\n    return shadeSurfaceWithLightsWithTransmittance(worldPosition, normal, albedo, roughness, F0);\r\n}\r\n\r\nvec3 gammaCorrect (vec3 color) {\r\n    float GAMMA = 2.2;\r\n    return pow(color, vec3(1.0 / GAMMA));\r\n}\r\n",
            "markfixed.frag": "precision highp float;\r\n\r\nvoid main () {\r\n    gl_FragColor = vec4(1.0);\r\n}\r\n",
            "markfixed.vert": "precision highp float;\r\n\r\nattribute float a_index;\r\n\r\nuniform vec2 u_resolution;\r\n\r\nvoid main () {\r\n    float x = mod(a_index, u_resolution.x);\r\n    float y = floor(a_index / u_resolution.x);\r\n\r\n    vec2 coordinates = vec2(x + 0.5, y + 0.5) / u_resolution;\r\n\r\n    gl_PointSize = 1.0;\r\n\r\n    gl_Position = vec4(coordinates * 2.0 - 1.0, 0.0, 1.0);\r\n}\r\n",
            "normals.frag": "//computes the normal for a point on the wrinkle mesh using neighbouring positions\r\n\r\nprecision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform vec2 u_resolution;\r\n\r\nuniform sampler2D u_neighboursTextureA;\r\nuniform sampler2D u_neighboursTextureB;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 center = texture2D(u_positionsTexture, v_coordinates).rgb;\r\n\r\n    vec4 neighboursA = texture2D(u_neighboursTextureA, v_coordinates).rgba;\r\n    vec4 neighboursB = texture2D(u_neighboursTextureB, v_coordinates).rgba;\r\n\r\n    vec3 a = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.x)).rgb;\r\n    vec3 b = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.y)).rgb;\r\n    vec3 c = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.z)).rgb;\r\n    vec3 d = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.w)).rgb;\r\n    vec3 e = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.x)).rgb;\r\n    vec3 f = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.y)).rgb;\r\n\r\n    vec3 normal = vec3(0.0);\r\n\r\n    //assumes vertex has either 5 or 6 neighbours\r\n    normal += cross(a - center, b - center);\r\n    normal += cross(b - center, c - center);\r\n    normal += cross(c - center, d - center);\r\n    normal += cross(d - center, e - center);\r\n\r\n    if (neighboursB.y >= 0.0) {\r\n        normal += cross(e - center, f - center);\r\n        normal += cross(f - center, a - center);\r\n    } else {\r\n        normal += cross(e - center, a - center);\r\n    }\r\n    \r\n    normal = normalize(normal);\r\n\r\n    gl_FragColor = vec4(-normal, 0.0);\r\n}\r\n",
            "nose.frag": "//needs lightingcommon.glsl\r\n\r\nvoid main () {\r\n    vec3 normal = normalize(v_normal);\r\n\r\n    if (!gl_FrontFacing) {\r\n        normal *= -1.0;\r\n    }\r\n\r\n    vec3 color = shadeSkin(v_worldPosition, normal);\r\n\r\n    gl_FragColor = vec4(gammaCorrect(color), 1.0);\r\n}\r\n",
            "nose.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\nattribute vec3 a_normal;\r\n\r\nuniform mat4 u_projectionViewMatrix;\r\nuniform mat4 u_modelMatrix;\r\n\r\nvarying vec3 v_worldPosition;\r\nvarying vec3 v_normal;\r\n\r\nvoid main () {\r\n    v_normal = normalize((u_modelMatrix * vec4(a_normal, 0.0)).xyz);\r\n    v_worldPosition = (u_modelMatrix * vec4(a_position, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}\r\n",
            "setposition.frag": "precision highp float;\r\n\r\nvarying vec3 v_position;\r\n\r\nvoid main () {\r\n    gl_FragColor = vec4(v_position, 0.0);\r\n}\r\n",
            "setposition.vert": "precision highp float;\r\n\r\nattribute float a_index;\r\nattribute vec3 a_position;\r\n\r\nuniform vec2 u_resolution;\r\n\r\nvarying vec3 v_position;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvoid main () {\r\n    v_position = a_position;\r\n\r\n    gl_PointSize = 1.0;\r\n\r\n    vec2 coordinates = getBaseTextureCoordinates(a_index);\r\n\r\n    gl_Position = vec4(coordinates * 2.0 - 1.0, 0.0, 1.0);\r\n}\r\n",
            "skindepth.frag": "precision highp float;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nconst float PackUpscale = 256.0 / 255.0;\r\nconst float UnpackDownscale = 255.0 / 256.0;\r\n\r\nconst vec3 PackFactors = vec3(256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);\r\n\r\nconst float ShiftRight8 = 1.0 / 256.0;\r\n\r\nvec4 packDepthToRGBA( const in float v ) {\r\n    vec4 r = vec4( fract( v * PackFactors ), v );\r\n    r.yzw -= r.xyz * ShiftRight8; // tidy overflow\r\n    return r * PackUpscale;\r\n}\r\n\r\nvoid main () {\r\n    float ndcDepth = v_clipSpacePosition.z / v_clipSpacePosition.w;\r\n    gl_FragColor = packDepthToRGBA(ndcDepth * 0.5 + 0.5);\r\n}\r\n",
            "skindepth.vert": "precision highp float;\r\n\r\nattribute vec2 a_textureCoordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nuniform mat4 u_projectionViewModelMatrix;\r\n\r\nvoid main () {\r\n    vec3 position = texture2D(u_positionsTexture, a_textureCoordinates).rgb;\r\n\r\n    v_clipSpacePosition = u_projectionViewModelMatrix * vec4(position, 1.0);\r\n\r\n    gl_Position = v_clipSpacePosition;\r\n}\r\n",
            "staticskin.vert": "//define DEPTH for depth only\r\n\r\nprecision highp float;\r\n\r\nattribute vec3 a_associations;\r\nattribute vec3 a_barycentricCoordinates;\r\n\r\n#ifndef DEPTH\r\nattribute float a_mouthiness;\r\n#endif\r\n\r\n#ifndef DEPTH\r\nuniform mat4 u_projectionViewMatrix;\r\nuniform mat4 u_modelMatrix;\r\n#else\r\nuniform mat4 u_projectionViewModelMatrix;\r\n#endif\r\n\r\nuniform sampler2D u_basePositionsTexture;\r\nuniform sampler2D u_baseNormalsTexture;\r\nuniform vec2 u_baseTextureResolution;\r\n\r\n#ifndef DEPTH\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\nvarying float v_mouthiness;\r\n#endif\r\n\r\n#ifdef DEPTH\r\nvarying vec4 v_clipSpacePosition;\r\n#endif\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_baseTextureResolution.x)), floor((index + 0.5) / u_baseTextureResolution.x)) + 0.5) / u_baseTextureResolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 associations = a_associations;\r\n    vec3 barycentricCoordinates = a_barycentricCoordinates;\r\n\r\n    #ifndef DEPTH\r\n    v_mouthiness = a_mouthiness;\r\n    #endif\r\n\r\n    float u = barycentricCoordinates.y;\r\n    float v = barycentricCoordinates.z;\r\n    float w = barycentricCoordinates.x;\r\n\r\n    vec3 p1 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.x)).rgb;\r\n    vec3 p2 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.y)).rgb;\r\n    vec3 p3 = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(associations.z)).rgb;\r\n\r\n    vec3 n1 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.x)).rgb;\r\n    vec3 n2 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.y)).rgb;\r\n    vec3 n3 = texture2D(u_baseNormalsTexture, getBaseTextureCoordinates(associations.z)).rgb;\r\n\r\n    vec3 b300 = p1;\r\n    vec3 b030 = p2;\r\n    vec3 b003 = p3;\r\n\r\n    vec3 b210 = (2.0 * p1 + p2 - dot(p2 - p1, n1) * n1) / 3.0;\r\n    vec3 b120 = (2.0 * p2 + p1 - dot(p1 - p2, n2) * n2) / 3.0;\r\n    vec3 b021 = (2.0 * p2 + p3 - dot(p3 - p2, n2) * n2) / 3.0;\r\n    vec3 b012 = (2.0 * p3 + p2 - dot(p2 - p3, n3) * n3) / 3.0;\r\n    vec3 b102 = (2.0 * p3 + p1 - dot(p1 - p3, n3) * n3) / 3.0;\r\n    vec3 b201 = (2.0 * p1 + p3 - dot(p3 - p1, n1) * n1) / 3.0;\r\n\r\n    vec3 E = (b210 + b120 + b021 + b012 + b102 + b201) / 6.0;\r\n    vec3 V = (p1 + p2 + p3) / 3.0;\r\n\r\n    vec3 b111 = E + (E - V) / 2.0;\r\n\r\n    float u2 = u * u;\r\n    float u3 = u2 * u;\r\n\r\n    float v2 = v * v;\r\n    float v3 = v2 * v;\r\n\r\n    float w2 = w * w;\r\n    float w3 = w2 * w;\r\n\r\n    vec3 position = b300 * w3 + b030 * u3 + b003 * v3\r\n        + b210 * 3.0 * w2 * u + b120 * 3.0 * w * u2 + b201 * 3.0 * w2 * v\r\n        + b021 * 3.0 * u2 * v + b102 * 3.0 * w * v2 + b012 * 3.0 * u * v2\r\n        + b111 * 6.0 * w * u * v;\r\n\r\n\r\n    #ifndef DEPTH\r\n\r\n    vec3 n200 = n1;\r\n    vec3 n020 = n2;\r\n    vec3 n002 = n3;\r\n\r\n    vec3 n110 = normalize(n1 + n2 - (2.0 * dot(p2 - p1, n1 + n2) / dot(p2 - p1, p2 - p1)) * (p2 - p1));\r\n    vec3 n011 = normalize(n2 + n3 - (2.0 * dot(p3 - p2, n2 + n3) / dot(p3 - p2, p3 - p2)) * (p3 - p2));\r\n    vec3 n101 = normalize(n3 + n1 - (2.0 * dot(p1 - p3, n3 + n1) / dot(p1 - p3, p1 - p3)) * (p1 - p3));\r\n\r\n    //v_normal = normalize(n200 * w + n020 * u + n002 * v);\r\n    v_normal = normalize(n200 * w2 + n020 * u2 + n002 * v2 + n110 * w * u + n011 * u * v + n101 * w * v);\r\n\r\n    v_normal = (u_modelMatrix * vec4(v_normal, 0.0)).xyz;\r\n    v_worldPosition = (u_modelMatrix * vec4(position, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n\r\n    #else\r\n\r\n    v_clipSpacePosition = u_projectionViewModelMatrix * vec4(position, 1.0);\r\n    gl_Position = v_clipSpacePosition;\r\n\r\n    #endif\r\n}\r\n",
            "wrinkle.frag": "//needs lightingcommon.glsl\r\n\r\nvarying float v_mouthiness;\r\n\r\nuniform vec3 u_mouthColor;\r\n\r\nvoid main () {\r\n    vec3 normal = normalize(v_normal);\r\n    if (!gl_FrontFacing) {\r\n        normal *= -1.0;\r\n    }\r\n\r\n    vec3 color = shadeSkin(v_worldPosition, normal);\r\n\r\n    float mouthFactor = smoothstep(0.15, 0.125, v_mouthiness);\r\n    if (gl_FrontFacing) {\r\n        color = mix(u_mouthColor, color, mouthFactor);\r\n    }\r\n\r\n    gl_FragColor = vec4(gammaCorrect(color), mouthFactor);\r\n}\r\n",
            "wrinkle.vert": "precision highp float;\r\n\r\nattribute vec2 a_textureCoordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform sampler2D u_normalsTexture;\r\nuniform sampler2D u_mouthinessTexture;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\nvarying float v_mouthiness;\r\n\r\nvoid main () {\r\n    vec3 position = texture2D(u_positionsTexture, a_textureCoordinates).rgb;\r\n    vec3 normal = texture2D(u_normalsTexture, a_textureCoordinates).rgb;\r\n    v_mouthiness = texture2D(u_mouthinessTexture, a_textureCoordinates).r;\r\n\r\n    v_normal = normalize((u_modelMatrix * vec4(normal, 0.0)).xyz);\r\n    v_worldPosition = (u_modelMatrix * vec4(position, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}\r\n"
        },
        u = function(e, t, r) {
            return Math.max(t, Math.min(r, e))
        },
        o = function(e, t) {
            var r = t.getBoundingClientRect();
            return {
                x: e.clientX - r.left,
                y: e.clientY - r.top
            }
        },
        R = {
            identity: function() {
                return [0, 0, 0, 1]
            },
            makeIdentity: function(e) {
                return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
            },
            length: function(e) {
                return e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3]
            },
            invert: function(e, t) {
                var r = 1 / (t[0] * t[0] + t[1] * t[1] + t[2] * t[2] + t[3] * t[3]);
                return e[0] = -t[0] * r, e[1] = -t[1] * r, e[2] = -t[2] * r, e[3] = t[3] * r, e
            },
            multiply: function(e, t, r) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    s = r[0],
                    u = r[1],
                    h = r[2],
                    c = r[3];
                return e[0] = s * n - u * i - h * o - c * a, e[1] = s * i + u * n + h * a - c * o, e[2] = s * o - u * a + h * n + c * i, e[3] = s * a + u * o - h * i + c * n, e
            },
            normalize: function(e, t) {
                var r = 1 / Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2] + t[3] * t[3]);
                return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e
            },
            fromAxisAngle: function(e, t, r) {
                return e[0] = t[0] * Math.sin(r / 2), e[1] = t[1] * Math.sin(r / 2), e[2] = t[2] * Math.sin(r / 2), e[3] = Math.cos(r / 2), e
            },
            slerp: function(e, t, r, n) {
                var i, o, a, s, u, h = t[0],
                    c = t[1],
                    l = t[2],
                    f = t[3],
                    d = r[0],
                    m = r[1],
                    p = r[2],
                    g = r[3];
                return (o = h * d + c * m + l * p + f * g) < 0 && (o = -o, d = -d, m = -m, p = -p, g = -g), u = 1e-6 < 1 - o ? (i = Math.acos(o), a = Math.sin(i), s = Math.sin((1 - n) * i) / a, Math.sin(n * i) / a) : (s = 1 - n, n), e[0] = s * h + u * d, e[1] = s * c + u * m, e[2] = s * l + u * p, e[3] = s * f + u * g, R.normalize(e, e), e
            }
        },
        P = {
            set: function(e, t, r, n) {
                return e[0] = t, e[1] = r, e[2] = n, e
            },
            copy: function(e, t) {
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
            },
            clone: function(e) {
                return [e[0], e[1], e[2]]
            },
            dot: function(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
            },
            scaleAndAdd: function(e, t, r, n) {
                return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e
            },
            cross: function(e, t, r) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = r[0],
                    s = r[1],
                    u = r[2];
                return e[0] = i * u - o * s, e[1] = o * a - n * u, e[2] = n * s - i * a, e
            },
            coneClamp: function(e, t, r, n) {
                if (P.dot(t, r) < -.9999) return e;
                var i = Math.acos(P.dot(t, r));
                if (n < i) {
                    var o = P.normalize([], P.cross([], r, t)),
                        a = R.fromAxisAngle([], o, i - n);
                    return P.multiplyByQuaternion(e, r, a), e
                }
                return e
            },
            rotateTowards: function(e, t, r, n) {
                var i = Math.acos(P.dot(t, r));
                i < n && (n = i);
                var o = P.normalize([], P.cross([], t, r)),
                    a = R.fromAxisAngle([], o, n);
                return P.multiplyByQuaternion(e, t, a), e
            },
            add: function(e, t, r) {
                return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e
            },
            multiply: function(e, t, r) {
                return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e
            },
            addList: function(e, t) {
                e[0] = 0, e[1] = 0;
                for (var r = e[2] = 0; r < t.length; ++r) e[0] += t[r][0], e[1] += t[r][1], e[2] += t[r][2];
                return e
            },
            subtract: function(e, t, r) {
                return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e
            },
            multiplyByScalar: function(e, t, r) {
                return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e
            },
            multiplyByQuaternion: function(e, t, r) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = r[3],
                    s = r[0],
                    u = r[1],
                    h = r[2],
                    c = a * n + u * o - h * i,
                    l = a * i + h * n - s * o,
                    f = a * o + s * i - u * n,
                    d = -s * n - u * i - h * o;
                return e[0] = d * -s + c * a + l * -h - f * -u, e[1] = d * -u + l * a + f * -s - c * -h, e[2] = d * -h + f * a + c * -u - l * -s, e
            },
            normalize: function(e, t) {
                var r = t[0],
                    n = t[1],
                    i = t[2],
                    o = 1 / Math.sqrt(r * r + n * n + i * i);
                return e[0] = r * o, e[1] = n * o, e[2] = i * o, e
            },
            distance: function(e, t) {
                var r = t[0] - e[0],
                    n = t[1] - e[1],
                    i = t[2] - e[2];
                return Math.sqrt(r * r + n * n + i * i)
            },
            distance2: function(e, t) {
                var r = t[0] - e[0],
                    n = t[1] - e[1],
                    i = t[2] - e[2];
                return r * r + n * n + i * i
            },
            length: function(e) {
                return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
            },
            slerp: function(e, t, r, n) {
                var i = P.dot(t, r);
                i = u(i, 0, 1);
                for (var o = Math.acos(i) * n, a = P.subtract([], r, P.multiplyByScalar([], t, i)), s = 0; s < 3; ++s) e[s] = t[s] * Math.cos(o) + a[s] * Math.sin(o);
                return e
            },
            pow: function(e, t, r) {
                return e[0] = Math.pow(t[0], r), e[1] = Math.pow(t[1], r), e[2] = Math.pow(t[2], r), e
            },
            hsvToRGB: function(e, t) {
                var r = t[0],
                    n = t[1],
                    i = t[2],
                    o = 6 * (r %= 1),
                    a = (t = i * n) * (1 - Math.abs(o % 2 - 1)),
                    s = Math.floor(o),
                    u = [t, a, 0, 0, a, t][s],
                    h = [a, t, t, a, 0, 0][s],
                    c = [0, 0, a, t, t, a][s],
                    l = i - t;
                return u += l, h += l, c += l, e[0] = u, e[1] = h, e[2] = c, e
            },
            rgbToHSV: function(e, t) {
                var r, n, i, o, a, s = t[0],
                    u = t[1],
                    h = t[2],
                    c = Math.max(s, u, h),
                    l = c - Math.min(s, u, h),
                    f = function(e) {
                        return (c - e) / 6 / l + .5
                    };
                return 0 == l ? o = a = 0 : (a = l / c, r = f(s), n = f(u), i = f(h), s === c ? o = i - n : u === c ? o = 1 / 3 + r - i : h === c && (o = 2 / 3 + n - r), o < 0 ? o += 1 : 1 < o && (o -= 1)), e[0] = o, e[1] = a, e[2] = c, e
            }
        };

    function p(e, t) {
        var r = e % t;
        return r < 0 ? r + t : r
    }

    function s(e, t, r) {
        this.mouthiness = e, this.mouthPoints = t, this.smoothingIterations = r, this.positions = new Float32Array(3 * this.mouthPoints.length), this.positionsTemp = new Float32Array(3 * this.mouthPoints.length)
    }

    function h(e, t) {
        this.wrinkleIndex = e, this.baseAssociation = t
    }

    function M(i, o) {
        function e(e) {
            for (var t = [], r = function c(e, t) {
                    for (var r = {}, n = -1, i = 0; i < e.triangles.length; ++i) {
                        var o = e.triangles[i],
                            a = e.vertices[o.a],
                            s = e.vertices[o.b],
                            u = e.vertices[o.c];
                        a.mouthiness === t && s.mouthiness === t && u.mouthiness > t && (r[o.a] = o.b, -1 === n && (n = o.a)), s.mouthiness === t && u.mouthiness === t && a.mouthiness > t && (r[o.b] = o.c, -1 === n && (n = o.b)), u.mouthiness === t && a.mouthiness === t && s.mouthiness > t && (r[o.c] = o.a, -1 === n && (n = o.c))
                    }
                    for (var h = [n]; r[h[h.length - 1]] !== h[0];) h.push(r[h[h.length - 1]]);
                    return h
                }(i, e), n = 0; n < r.length; ++n) t.push(new h(r[n], i.vertices[r[n]].baseAssociations[0]));
            this.mouthRings.push(new s(e, t, o))
        }
        this.mouthRings = [], e = e.bind(this);
        for (var t = .5 * Math.pow(.5, i.subdivisions), r = 0; r < 1; r += t) e(r);
        for (var n = 0; n < i.vertices.length; ++n) {
            var a = i.vertices[n];
            1 === a.mouthiness && this.mouthRings.push(new s(1, [new h(n, a.baseAssociations[0])], o))
        }
    }

    function a(t, e, r, n, i, o, a, s) {
        var u = this.rawMesh = new I(e, r, r.baseIndices, r.wrinkleStrengths, r.mouthinesses);
        this.mouth = new M(u, s);
        for (var h = this.textureWidth = Math.ceil(Math.sqrt(u.vertices.length)), c = this.textureHeight = h, l = [], f = 0; f < u.vertices.length; ++f) {
            var d = (f % h + .5) / h,
                m = (Math.floor(f / h) + .5) / c;
            l.push(d), l.push(m)
        }
        this.vertexBuffer = t.createBuffer(), t.bufferData(this.vertexBuffer, t.ARRAY_BUFFER, new Float32Array(l), t.STATIC_DRAW);
        var p = [];
        for (f = 0; f < u.triangles.length; ++f) {
            var g = u.triangles[f];
            a ? (p.push(g.a), p.push(g.b), p.push(g.b), p.push(g.c), p.push(g.c), p.push(g.a)) : (p.push(g.a), p.push(g.b), p.push(g.c))
        }
        this.indexBuffer = t.createBuffer(), t.bufferData(this.indexBuffer, t.ELEMENT_ARRAY_BUFFER, new Uint16Array(p), t.STATIC_DRAW), this.wrinkleIndexCount = p.length;
        var _ = new Float32Array(h * c * 4),
            v = new Float32Array(h * c * 4),
            T = new Float32Array(h * c * 4),
            E = new Float32Array(h * c * 4),
            b = new Float32Array(h * c * 4),
            x = new Float32Array(h * c * 4),
            A = new Float32Array(h * c * 4),
            y = new Float32Array(h * c * 4);
        for (f = 0; f < h * c; ++f)
            if (f < u.vertices.length) {
                for (var R = u.vertices[f], P = R.baseAssociations[0], D = u.baseTriangles[P.baseTriangleIndex], w = R.wrinkleStrength, F = R.mouthiness, S = 0; S < 4; ++S) A[4 * f + S] = w, y[4 * f + S] = F;
                _[4 * f + 0] = D.a, _[4 * f + 1] = D.b, _[4 * f + 2] = D.c, v[4 * f + (_[4 * f + 3] = 0)] = P.barycentricCoordinates[0], v[4 * f + 1] = P.barycentricCoordinates[1], v[4 * f + 2] = P.barycentricCoordinates[2], T[4 * f + (v[4 * f + 3] = 0)] = R.neighbours[0], T[4 * f + 1] = R.neighbours[1], T[4 * f + 2] = R.neighbours[2], T[4 * f + 3] = R.neighbours[3], E[4 * f + 0] = R.neighbours[4], E[4 * f + 1] = 5 < R.neighbours.length ? R.neighbours[5] : -1, E[4 * f + 2] = -1, E[4 * f + 3] = -1, b[4 * f + 0] = R.opposites[0], b[4 * f + 1] = R.opposites[1], b[4 * f + 2] = R.opposites[2], b[4 * f + 3] = R.opposites[3], x[4 * f + 0] = R.opposites[4], x[4 * f + 1] = 5 < R.opposites.length ? R.opposites[5] : -1, x[4 * f + 2] = -1, x[4 * f + 3] = -1
            } else
                for (S = 0; S < 4; ++S) _[4 * f + S] = 0, v[4 * f + S] = 0, T[4 * f + S] = -1, E[4 * f + S] = -1, b[4 * f + S] = -1, x[4 * f + S] = -1, A[4 * f + S] = 0, y[4 * f + S] = 0;

        function C(e) {
            return t.buildTexture(t.RGBA, t.FLOAT, h, c, e, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST)
        }
        this.wrinkleAssociationTexture = C(_), this.wrinkleBarycentricCoordinatesTexture = C(v), this.neighboursTextureA = C(T), this.neighboursTextureB = C(E), this.oppositesTextureA = C(b), this.oppositesTextureB = C(x), this.wrinkleStrengthTexture = C(A), this.mouthinessTexture = C(y), this.neighboursDistancesTextureA = C(null), this.neighboursDistancesTextureB = C(null), this.oppositesDistancesTextureA = C(null), this.oppositesDistancesTextureB = C(null), this.positionsTexture = C(null), this.positionsTextureTemp = C(null), this.normalsTexture = C(null), this.attachmentPositionsTexture = C(null), this.fixedTexture = t.buildTexture(t.RGBA, t.UNSIGNED_BYTE, h, c, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST)
    }

    function g(e, t) {
        this.wgl = e, this.wireframe = t, this.attachmentPositionsProgram = e.createProgram(i["fullscreen.vert"], i["attachmentpositions.frag"], {
            a_position: 0
        }), this.attachmentConstraintProgram = e.createProgram(i["fullscreen.vert"], i["attachmentconstraint.frag"], {
            a_position: 0
        }), this.distanceConstraintProgram = e.createProgram(i["fullscreen.vert"], i["distanceconstraint.frag"], {
            a_position: 0
        }), this.normalsProgram = e.createProgram(i["fullscreen.vert"], i["normals.frag"], {
            a_position: 0
        }), this.copyProgram = e.createProgram(i["fullscreen.vert"], i["copy.frag"], {
            a_position: 0
        }), this.constraintDistanceProgram = e.createProgram(i["fullscreen.vert"], i["constraintdistance.frag"], {
            a_position: 0
        }), this.markFixedProgram = e.createProgram(i["markfixed.vert"], i["markfixed.frag"], {
            a_index: 0
        }), this.setPositionProgram = e.createProgram(i["setposition.vert"], i["setposition.frag"], {
            a_index: 0,
            a_position: 1
        }), this.quadVertexBuffer = e.createBuffer(), e.bufferData(this.quadVertexBuffer, e.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), e.STATIC_DRAW), this.markBuffer = e.createBuffer(), this.mouthIndicesBuffer = e.createBuffer(), this.mouthPositionsBuffer = e.createBuffer(), this.framebuffer = e.createFramebuffer(), this.initialized = !1, this.wrinkleMeshes = {}
    }

    function v(e, t, r) {
        var n = e[t];
        e[t] = e[r], e[r] = n
    }

    function _(e, t, r, n, i) {
        for (var o = this.rawMesh = new I(1, t, t.baseIndices, t.wrinkleStrengths, t.mouthinesses), a = [], s = 0; s < o.triangles.length; ++s) {
            var u = o.triangles[s];
            a.push(u.a), a.push(u.b), a.push(u.c)
        }
        this.indexBuffer = e.buildBuffer(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(a), e.STATIC_DRAW), this.indexCount = a.length;
        var h = new Float32Array(3 * o.vertices.length),
            c = new Float32Array(3 * o.vertices.length),
            l = new Float32Array(o.vertices.length);
        for (s = 0; s < o.vertices.length; ++s) {
            var f = o.vertices[s],
                d = f.baseAssociations[0],
                m = o.baseTriangles[d.baseTriangleIndex];
            h[3 * s + 0] = m.a, h[3 * s + 1] = m.b, h[3 * s + 2] = m.c, c[3 * s + 0] = d.barycentricCoordinates[0], c[3 * s + 1] = d.barycentricCoordinates[1], c[3 * s + 2] = d.barycentricCoordinates[2], l[s] = f.mouthiness
        }
        this.associationsBuffer = e.buildBuffer(e.ARRAY_BUFFER, h, e.STATIC_DRAW), this.barycentricCoordinatesBuffer = e.buildBuffer(e.ARRAY_BUFFER, c, e.STATIC_DRAW), this.mouthinessesBuffer = e.buildBuffer(e.ARRAY_BUFFER, l, e.STATIC_DRAW)
    }
    s.prototype.setBasePositions = function(e, t, r) {
        for (var n = [0, 0, 0], i = .03 * - function p(e, t, r) {
                return (r = function n(e, t, r) {
                    return e < t && (e = t), r < e && (e = r), e
                }((r - e) / (t - e), 0, 1)) * r * (3 - 2 * r)
            }(0, .2, this.mouthiness), o = 0; o < this.mouthPoints.length; ++o) {
            for (var a = this.mouthPoints[o].baseAssociation, s = e[a.baseTriangleIndex].a, u = e[a.baseTriangleIndex].b, h = e[a.baseTriangleIndex].c, c = a.barycentricCoordinates[0], l = a.barycentricCoordinates[1], f = a.barycentricCoordinates[2], d = 0; d < 3; ++d) n[d] = c * r[3 * s + d] + l * r[3 * u + d] + f * r[3 * h + d];
            P.normalize(n, n);
            for (d = 0; d < 3; ++d) {
                var m = c * t[3 * s + d] + l * t[3 * u + d] + f * t[3 * h + d];
                this.positions[3 * o + d] = m + n[d] * i
            }
        }
    }, s.prototype.update = function(e, t, r) {
        if (this.setBasePositions(e, t, r), 1 !== this.mouthPoints.length)
            for (var n = 0; n < this.smoothingIterations; ++n) {
                for (var i = 0; i < this.mouthPoints.length; ++i)
                    for (var o = p(i - 1, this.mouthPoints.length), a = p(i + 1, this.mouthPoints.length), s = 0; s < 3; ++s) {
                        var u = this.positions[3 * o + s],
                            h = this.positions[3 * a + s],
                            c = this.positions[3 * i + s],
                            l = .5 * (h - c) + .5 * (u - c);
                        this.positionsTemp[3 * i + s] = this.positions[3 * i + s] + .5 * l
                    }
                var f = this.positions;
                this.positions = this.positionsTemp, this.positionsTemp = f
            }
    }, g.prototype.createMesh = function(e, t, r, n, i) {
        var o = this.wgl;
        0 === e ? this.wrinkleMeshes[0] = new a(o, 1, t, t.baseIndices, t.wrinkleStrengths, t.mouthinesses, this.wireframe, 3) : 1 === e && (this.wrinkleMeshes[1] = new a(o, 2, t, t.baseIndices, t.wrinkleStrengths, t.mouthinesses, this.wireframe, 5))
    }, g.prototype.getWrinkleMesh = function(e) {
        return this.wrinkleMeshes[e]
    }, g.prototype.computeAttachmentPositions = function(e, t, r, n, i, o, a, s) {
        var u = this.wgl;
        u.framebufferTexture2D(this.framebuffer, u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, t, 0);
        var h = u.createDrawState().useProgram(this.attachmentPositionsProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, e.textureWidth, e.textureHeight).uniformTexture("u_basePositionsTexture", 0, u.TEXTURE_2D, i).uniformTexture("u_baseNormalsTexture", 1, u.TEXTURE_2D, o).uniformTexture("u_wrinkleAssociationsTexture", 2, u.TEXTURE_2D, e.wrinkleAssociationTexture).uniformTexture("u_wrinkleBarycentricCoordinatesTexture", 3, u.TEXTURE_2D, e.wrinkleBarycentricCoordinatesTexture).uniform2f("u_baseTextureResolution", r, n).vertexAttribPointer(this.quadVertexBuffer, 0, 2, u.FLOAT, !1, 0, 0);
        u.drawArrays(h, u.TRIANGLE_STRIP, 0, 4);
        for (var c = [], l = [], f = e.mouth, d = 0; d < f.mouthRings.length; ++d) {
            var m = f.mouthRings[d];
            m.update(e.rawMesh.baseTriangles, a, s);
            for (var p = 0; p < m.mouthPoints.length; ++p) {
                var g = m.mouthPoints[p];
                c.push(g.wrinkleIndex), l.push(m.positions[3 * p + 0]), l.push(m.positions[3 * p + 1]), l.push(m.positions[3 * p + 2])
            }
        }
        u.bufferData(this.mouthIndicesBuffer, u.ARRAY_BUFFER, new Float32Array(c), u.STATIC_DRAW), u.bufferData(this.mouthPositionsBuffer, u.ARRAY_BUFFER, new Float32Array(l), u.STATIC_DRAW);
        var _ = u.createDrawState().useProgram(this.setPositionProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, e.textureWidth, e.textureHeight).uniform2f("u_resolution", e.textureWidth, e.textureHeight).vertexAttribPointer(this.mouthIndicesBuffer, 0, 1, u.FLOAT, !1, 0, 0).vertexAttribPointer(this.mouthPositionsBuffer, 1, 3, u.FLOAT, !1, 0, 0);
        u.drawArrays(_, u.POINTS, 0, c.length)
    }, g.prototype.computeConstraintDistance = function(e, t, r) {
        var n = this.wgl;
        n.framebufferTexture2D(this.framebuffer, n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, r, 0);
        var i = n.createDrawState().useProgram(this.constraintDistanceProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, e.textureWidth, e.textureHeight).uniformTexture("u_positionsTexture", 0, n.TEXTURE_2D, e.attachmentPositionsTexture).uniformTexture("u_connectionsTexture", 1, n.TEXTURE_2D, t).uniform2f("u_resolution", e.textureWidth, e.textureHeight).vertexAttribPointer(this.quadVertexBuffer, 0, 2, n.FLOAT, !1, 0, 0);
        n.drawArrays(i, n.TRIANGLE_STRIP, 0, 4)
    }, g.prototype.update = function(e, t, r, n, i, o, a, s, u) {
        var h = this.wgl,
            c = this.getWrinkleMesh(u);
        if (!this.initialized) {
            for (var l in this.wrinkleMeshes) {
                c = this.wrinkleMeshes[l];
                this.computeAttachmentPositions(c, c.positionsTexture, e, t, r, n, i, o), this.computeAttachmentPositions(c, c.attachmentPositionsTexture, e, t, r, n, i, o), this.computeConstraintDistance(c, c.neighboursTextureA, c.neighboursDistancesTextureA), this.computeConstraintDistance(c, c.neighboursTextureB, c.neighboursDistancesTextureB), this.computeConstraintDistance(c, c.oppositesTextureA, c.oppositesDistancesTextureA), this.computeConstraintDistance(c, c.oppositesTextureB, c.oppositesDistancesTextureB)
            }
            this.initialized = !0
        }
        if (this.computeAttachmentPositions(c, c.attachmentPositionsTexture, e, t, r, n, i, o), a) {
            var f = new Float32Array(c.rawMesh.baseTriangles[s].wrinkleIndices);
            h.bufferData(this.markBuffer, h.ARRAY_BUFFER, f, h.STATIC_DRAW), h.framebufferTexture2D(this.framebuffer, h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, c.fixedTexture, 0), h.clear(h.createClearState().bindFramebuffer(this.framebuffer), h.COLOR_BUFFER_BIT);
            var d = h.createDrawState().useProgram(this.markFixedProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, c.textureWidth, c.textureHeight).uniform2f("u_resolution", c.textureWidth, c.textureHeight).vertexAttribPointer(this.markBuffer, 0, 1, h.FLOAT, !1, 0, 0);
            h.drawArrays(d, h.POINTS, 0, f.length)
        }

        function m(e, t, r, n, i) {
            h.framebufferTexture2D(this.framebuffer, h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, c.positionsTextureTemp, 0);
            var o = h.createDrawState().useProgram(this.distanceConstraintProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, c.textureWidth, c.textureHeight).uniformTexture("u_positionsTexture", 0, h.TEXTURE_2D, c.positionsTexture).uniformTexture("u_neighboursTextureA", 1, h.TEXTURE_2D, e).uniformTexture("u_neighboursTextureB", 2, h.TEXTURE_2D, t).uniformTexture("u_distancesTextureA", 3, h.TEXTURE_2D, r).uniformTexture("u_distancesTextureB", 4, h.TEXTURE_2D, n).uniformTexture("u_fixedTexture", 5, h.TEXTURE_2D, c.fixedTexture).uniformTexture("u_strengthsTexture", 6, h.TEXTURE_2D, c.wrinkleStrengthTexture).uniform2f("u_resolution", c.textureWidth, c.textureHeight).uniform1i("u_respectFixed", i ? 1 : 0).vertexAttribPointer(this.quadVertexBuffer, 0, 2, h.FLOAT, !1, 0, 0);
            h.drawArrays(o, h.TRIANGLE_STRIP, 0, 4), v(c, "positionsTexture", "positionsTextureTemp")
        }
        m = m.bind(this);
        for (l = 0; l < 15; ++l) {
            h.framebufferTexture2D(this.framebuffer, h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, c.positionsTextureTemp, 0);
            var p = h.createDrawState().useProgram(this.attachmentConstraintProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, c.textureWidth, c.textureHeight).uniformTexture("u_positionsTexture", 0, h.TEXTURE_2D, c.positionsTexture).uniformTexture("u_attachmentPositionsTexture", 1, h.TEXTURE_2D, c.attachmentPositionsTexture).uniformTexture("u_strengthsTexture", 2, h.TEXTURE_2D, c.wrinkleStrengthTexture).uniform2f("u_resolution", c.textureWidth, c.textureHeight).vertexAttribPointer(this.quadVertexBuffer, 0, 2, h.FLOAT, !1, 0, 0);
            0 === l && (h.drawArrays(p, h.TRIANGLE_STRIP, 0, 4), v(c, "positionsTexture", "positionsTextureTemp"));
            var g = l < 14;
            m(c.neighboursTextureA, c.neighboursTextureB, c.neighboursDistancesTextureA, c.neighboursDistancesTextureB, g), m(c.oppositesTextureA, c.oppositesTextureB, c.oppositesDistancesTextureA, c.oppositesDistancesTextureB, g)
        }
        h.framebufferTexture2D(this.framebuffer, h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, c.normalsTexture, 0);
        var _ = h.createDrawState().useProgram(this.normalsProgram).bindFramebuffer(this.framebuffer).viewport(0, 0, c.textureWidth, c.textureHeight).uniformTexture("u_positionsTexture", 0, h.TEXTURE_2D, c.positionsTexture).uniformTexture("u_neighboursTextureA", 1, h.TEXTURE_2D, c.neighboursTextureA).uniformTexture("u_neighboursTextureB", 2, h.TEXTURE_2D, c.neighboursTextureB).uniform2f("u_resolution", c.textureWidth, c.textureHeight).vertexAttribPointer(this.quadVertexBuffer, 0, 2, h.FLOAT, !1, 0, 0);
        h.drawArrays(_, h.TRIANGLE_STRIP, 0, 4)
    };
    var B = {
        set: function(e, t, r, n, i, o, a, s, u, h, c, l, f, d, m, p, g) {
            e[0] = t, e[1] = r, e[2] = n, e[3] = i, e[4] = o, e[5] = a, e[6] = s, e[7] = u, e[8] = h, e[9] = c, e[10] = l, e[11] = f, e[12] = d, e[13] = m, e[14] = p, e[15] = g
        },
        copy: function(e, t) {
            for (var r = 0; r < 16; r++) e[r] = t[r]
        },
        makeIdentity: function(e) {
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        },
        makeTranslation: function(e, t, r, n) {
            return B.makeIdentity(e), e[12] = t, e[13] = r, e[14] = n, e
        },
        makeXRotation: function(e, t) {
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = Math.cos(t), e[6] = Math.sin(t), e[7] = 0, e[8] = 0, e[9] = -Math.sin(t), e[10] = Math.cos(t), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        },
        makeYRotation: function(e, t) {
            return e[0] = Math.cos(t), e[1] = 0, e[2] = -Math.sin(t), e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = Math.sin(t), e[9] = 0, e[10] = Math.cos(t), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        },
        transformPosition: function(e, t, r) {
            var n = t[0],
                i = t[1],
                o = t[2];
            return e[0] = r[0] * n + r[4] * i + r[8] * o + r[12], e[1] = r[1] * n + r[5] * i + r[9] * o + r[13], e[2] = r[2] * n + r[6] * i + r[10] * o + r[14], e[3] = r[3] * n + r[7] * i + r[11] * o + r[15], e
        },
        transformDirection: function(e, t, r) {
            var n = t[0],
                i = t[1],
                o = t[2];
            return e[0] = r[0] * n + r[4] * i + r[8] * o, e[1] = r[1] * n + r[5] * i + r[9] * o, e[2] = r[2] * n + r[6] * i + r[10] * o, e[3] = r[3] * n + r[7] * i + r[11] * o, e
        },
        multiplyVector: function(e, t, r) {
            var n = r[0],
                i = r[1],
                o = r[2],
                a = r[3];
            return e[0] = t[0] * n + t[4] * i + t[8] * o + t[12] * a, e[1] = t[1] * n + t[5] * i + t[9] * o + t[13] * a, e[2] = t[2] * n + t[6] * i + t[10] * o + t[14] * a, e[3] = t[3] * n + t[7] * i + t[11] * o + t[15] * a, e
        },
        premultiply: function(e, t, r) {
            var n = r[0],
                i = r[4],
                o = r[8],
                a = r[12],
                s = r[1],
                u = r[5],
                h = r[9],
                c = r[13],
                l = r[2],
                f = r[6],
                d = r[10],
                m = r[14],
                p = r[3],
                g = r[7],
                _ = r[11],
                v = r[15],
                T = t[0],
                E = t[1],
                b = t[2],
                x = t[3];
            return e[0] = n * T + i * E + o * b + a * x, e[1] = s * T + u * E + h * b + c * x, e[2] = l * T + f * E + d * b + m * x, e[3] = p * T + g * E + _ * b + v * x, T = t[4], E = t[5], b = t[6], x = t[7], e[4] = n * T + i * E + o * b + a * x, e[5] = s * T + u * E + h * b + c * x, e[6] = l * T + f * E + d * b + m * x, e[7] = p * T + g * E + _ * b + v * x, T = t[8], E = t[9], b = t[10], x = t[11], e[8] = n * T + i * E + o * b + a * x, e[9] = s * T + u * E + h * b + c * x, e[10] = l * T + f * E + d * b + m * x, e[11] = p * T + g * E + _ * b + v * x, T = t[12], E = t[13], b = t[14], x = t[15], e[12] = n * T + i * E + o * b + a * x, e[13] = s * T + u * E + h * b + c * x, e[14] = l * T + f * E + d * b + m * x, e[15] = p * T + g * E + _ * b + v * x, e
        },
        transpose: function(e, t) {
            if (e === t) {
                var r = t[1],
                    n = t[2],
                    i = t[3],
                    o = t[6],
                    a = t[7],
                    s = t[11];
                t[1] = t[4], t[4] = r, t[2] = t[8], t[8] = n, t[3] = t[12], t[12] = i, t[6] = t[9], t[9] = o, t[7] = t[13], t[13] = a, t[11] = t[14], t[14] = s
            } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15]
        },
        invert: function(e, t) {
            var r = t[0],
                n = t[4],
                i = t[8],
                o = t[12],
                a = t[1],
                s = t[5],
                u = t[9],
                h = t[13],
                c = t[2],
                l = t[6],
                f = t[10],
                d = t[14],
                m = t[3],
                p = t[7],
                g = t[11],
                _ = t[15],
                v = f * _,
                T = d * g,
                E = l * _,
                b = d * p,
                x = l * g,
                A = f * p,
                y = c * _,
                R = d * m,
                P = c * g,
                D = f * m,
                w = c * p,
                F = l * m,
                S = i * h,
                C = o * u,
                I = n * h,
                M = o * s,
                B = n * u,
                N = i * s,
                L = r * h,
                U = o * a,
                O = r * u,
                H = i * a,
                k = r * s,
                G = n * a,
                V = v * s + b * u + x * h - (T * s + E * u + A * h),
                W = T * a + y * u + D * h - (v * a + R * u + P * h),
                X = E * a + R * s + w * h - (b * a + y * s + F * h),
                z = A * a + P * s + F * u - (x * a + D * s + w * u),
                Y = 1 / (r * V + n * W + i * X + o * z);
            return e[0] = Y * V, e[1] = Y * W, e[2] = Y * X, e[3] = Y * z, e[4] = Y * (T * n + E * i + A * o - (v * n + b * i + x * o)), e[5] = Y * (v * r + R * i + P * o - (T * r + y * i + D * o)), e[6] = Y * (b * r + y * n + F * o - (E * r + R * n + w * o)), e[7] = Y * (x * r + D * n + w * i - (A * r + P * n + F * i)), e[8] = Y * (S * p + M * g + B * _ - (C * p + I * g + N * _)), e[9] = Y * (C * m + L * g + H * _ - (S * m + U * g + O * _)), e[10] = Y * (I * m + U * p + k * _ - (M * m + L * p + G * _)), e[11] = Y * (N * m + O * p + G * g - (B * m + H * p + k * g)), e[12] = Y * (I * f + N * d + C * l - (B * d + S * l + M * f)), e[13] = Y * (O * d + S * c + U * f - (L * f + H * d + C * c)), e[14] = Y * (L * l + G * d + M * c - (k * d + I * c + U * l)), e[15] = Y * (k * f + B * c + H * l - (O * l + G * f + N * c)), e
        },
        fromQuaternion: function(e, t) {
            var r = t[3],
                n = t[0],
                i = t[1],
                o = t[2];
            return e[0] = 1 - 2 * i * i - 2 * o * o, e[1] = 2 * n * i + 2 * r * o, e[2] = 2 * n * o - 2 * r * i, e[3] = 0, e[4] = 2 * n * i - 2 * r * o, e[5] = 1 - 2 * n * n - 2 * o * o, e[6] = 2 * i * o + 2 * r * n, e[7] = 0, e[8] = 2 * n * o + 2 * r * i, e[9] = 2 * i * o - 2 * r * n, e[10] = 1 - 2 * n * n - 2 * i * i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        },
        makePerspective: function(e, t, r, n, i) {
            var o = 1 / Math.tan(t / 2),
                a = 1 / (n - i);
            return e[0] = o / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (i + n) * a, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * i * n * a, e[15] = 0, e
        },
        makePerspectiveHorizontal: function(e, t, r, n, i) {
            var o = 1 / Math.tan(t / 2),
                a = 1 / (n - i);
            return e[0] = o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o * r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (i + n) * a, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * i * n * a, e[15] = 0, e
        },
        makeLookAt: function(e, t, r, n) {
            var i = t[0] - r[0],
                o = t[1] - r[1],
                a = t[2] - r[2],
                s = Math.sqrt(i * i + o * o + a * a);
            i /= s, o /= s, a /= s;
            var u = n[2] * o - n[1] * a,
                h = n[0] * a - n[2] * i,
                c = n[1] * i - n[0] * o,
                l = Math.sqrt(u * u + h * h + c * c),
                f = o * (c /= l) - a * (h /= l),
                d = a * (u /= l) - i * c,
                m = i * h - o * u,
                p = Math.sqrt(f * f + d * d + m * m);
            return f /= p, d /= p, m /= p, e[0] = u, e[1] = h, e[2] = c, e[3] = 0, e[4] = f, e[5] = d, e[6] = m, e[7] = 0, e[8] = i, e[9] = o, e[10] = a, e[11] = 0, e[12] = -(u * t[0] + h * t[1] + c * t[2]), e[13] = -(f * t[0] + d * t[1] + m * t[2]), e[14] = -(i * t[0] + o * t[1] + a * t[2]), e[15] = 1, e
        },
        makeOrthographic: function(e, t, r, n, i, o, a) {
            return e[0] = 2 / (r - t), e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 / (i - n), e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = -2 / (a - o), e[11] = 0, e[12] = -(r + t) / (r - t), e[13] = -(i + n) / (i - n), e[14] = -(a + o) / (a - o), e[15] = 1, e
        }
    };

    function c(e, t, r, n, i) {
        this.azimuth = t, this.elevation = r, this.distance = n, this.brightness = i, this.wgl = e, this.near = .1, this.far = 100, this.recomputeViewMatrix(), this.projectionMatrix = B.makePerspective(new Float32Array(16), Math.PI / 4, 1, this.near, this.far), this.projectionViewMatrix = B.premultiply(new Float32Array(16), this.viewMatrix, this.projectionMatrix), this.shadowMapWidth = 1024, this.depthColorTexture = e.buildTexture(e.RGBA, e.UNSIGNED_BYTE, this.shadowMapWidth, this.shadowMapWidth, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.LINEAR, e.LINEAR), this.depthRenderbuffer = e.createRenderbuffer(), e.renderbufferStorage(this.depthRenderbuffer, e.RENDERBUFFER, e.DEPTH_COMPONENT16, this.shadowMapWidth, this.shadowMapWidth)
    }

    function T(e, t) {
        this.wgl = e, this.wireframe = t, this.skinDepthProgram = e.createProgram(i["skindepth.vert"], i["skindepth.frag"], {
            a_textureCoordinates: 0
        }), this.eyeDepthProgram = e.createProgram(i["eyedepth.vert"], i["eyedepth.frag"], {
            a_position: 0
        }), this.hairDepthProgram = e.createProgram("#define DEPTH 1 \n" + i["hair.vert"], i["hairdepth.frag"]), this.staticSkinDepthProgram = e.createProgram("#define DEPTH 1 \n" + i["staticskin.vert"], i["skindepth.frag"]), this.framebuffer = e.createFramebuffer()
    }
    c.prototype.recomputeViewMatrix = function() {
        this.viewMatrix = B.makeIdentity(new Float32Array(16), new Float32Array(16));
        var e = B.makeXRotation(new Float32Array(16), this.elevation),
            t = B.makeYRotation(new Float32Array(16), this.azimuth),
            r = B.makeTranslation(new Float32Array(16), 0, 0, -this.distance);
        B.premultiply(this.viewMatrix, this.viewMatrix, t), B.premultiply(this.viewMatrix, this.viewMatrix, e), B.premultiply(this.viewMatrix, this.viewMatrix, r)
    }, c.prototype.getPosition = function() {
        return [this.distance * Math.sin(Math.PI / 2 - this.elevation) * Math.sin(-this.azimuth), this.distance * Math.cos(Math.PI / 2 - this.elevation), this.distance * Math.sin(Math.PI / 2 - this.elevation) * Math.cos(-this.azimuth)]
    }, T.prototype.renderForLight = function(e, t, r, n, i, o, a, s, u, h, c, l, f) {
        var d = this.wgl;
        d.framebufferTexture2D(this.framebuffer, d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, l.depthColorTexture, 0), d.framebufferRenderbuffer(this.framebuffer, d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.RENDERBUFFER, l.depthRenderbuffer), d.clear(d.createClearState().bindFramebuffer(this.framebuffer).clearColor(1, 1, 1, 1), d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT);
        var m = B.premultiply(new Float32Array(16), e, l.projectionViewMatrix);
        if (i) {
            var p = d.createDrawState().bindFramebuffer(this.framebuffer).enable(d.DEPTH_TEST).viewport(0, 0, l.shadowMapWidth, l.shadowMapWidth).depthMask(!0).uniformMatrix4fv("u_projectionViewModelMatrix", !1, m).uniformTexture("u_basePositionsTexture", 2, d.TEXTURE_2D, t.basePositionsTexture).uniformTexture("u_baseNormalsTexture", 3, d.TEXTURE_2D, t.baseNormalsTexture).uniform2f("u_baseTextureResolution", t.textureWidth, t.textureHeight).vertexAttribPointer(n.associationsBuffer, this.staticSkinDepthProgram.getAttribLocation("a_associations"), 3, d.FLOAT, !1, 0, 0).vertexAttribPointer(n.barycentricCoordinatesBuffer, this.staticSkinDepthProgram.getAttribLocation("a_barycentricCoordinates"), 3, d.FLOAT, !1, 0, 0).bindIndexBuffer(n.indexBuffer).useProgram(this.staticSkinDepthProgram);
            d.drawElements(p, d.TRIANGLES, n.indexCount, d.UNSIGNED_SHORT, 0)
        } else {
            var g = r.getWrinkleMesh(f),
                _ = d.createDrawState().bindFramebuffer(this.framebuffer).viewport(0, 0, l.shadowMapWidth, l.shadowMapWidth).enable(d.DEPTH_TEST).depthMask(!0).vertexAttribPointer(g.vertexBuffer, 0, 2, d.FLOAT, d.FALSE, 0, 0).bindIndexBuffer(g.indexBuffer).uniformMatrix4fv("u_projectionViewModelMatrix", !1, m).uniformTexture("u_positionsTexture", 0, d.TEXTURE_2D, g.positionsTexture).useProgram(this.skinDepthProgram);
            d.drawElements(_, g.wireframe ? d.LINES : d.TRIANGLES, g.wrinkleIndexCount, d.UNSIGNED_SHORT, 0)
        }

        function v(e) {
            var t = d.createDrawState().bindFramebuffer(this.framebuffer).enable(d.DEPTH_TEST).viewport(0, 0, l.shadowMapWidth, l.shadowMapWidth).depthMask(!0).uniformMatrix4fv("u_projectionViewModelMatrix", !1, m).vertexAttribPointer(e.positionsBuffer, 0, 3, d.FLOAT, !1, 0, 0).bindIndexBuffer(e.indexBuffer).useProgram(this.eyeDepthProgram);
            d.drawElements(t, d.TRIANGLES, e.indicesCount, d.UNSIGNED_SHORT, 0)
        }(v = v.bind(this))(o), v(a);
        var T = function(e) {
            var t = d.createDrawState().bindFramebuffer(this.framebuffer).enable(d.DEPTH_TEST).viewport(0, 0, l.shadowMapWidth, l.shadowMapWidth).depthMask(!0).uniformMatrix4fv("u_projectionViewModelMatrix", !1, m).vertexAttribPointer(e.positionsBuffer, 0, 3, d.FLOAT, !1, 0, 0).bindIndexBuffer(e.indexBuffer).useProgram(this.eyeDepthProgram);
            d.drawElements(t, d.TRIANGLES, e.indicesCount, d.UNSIGNED_SHORT, 0)
        }.bind(this);
        T(u), T(h), T(c);
        var E = s.getMesh(f),
            b = d.createDrawState().bindFramebuffer(this.framebuffer).enable(d.DEPTH_TEST).viewport(0, 0, l.shadowMapWidth, l.shadowMapWidth).depthMask(!0).uniformMatrix4fv("u_projectionViewModelMatrix", !1, m).uniformTexture("u_basePositionsTexture", 2, d.TEXTURE_2D, s.basePositionsTexture).uniformTexture("u_baseNormalsTexture", 3, d.TEXTURE_2D, s.baseNormalsTexture).uniform2f("u_baseTextureResolution", s.baseTextureWidth, s.baseTextureHeight).vertexAttribPointer(E.associationsBuffer, this.hairDepthProgram.getAttribLocation("a_associations"), 3, d.FLOAT, !1, 0, 0).vertexAttribPointer(E.barycentricCoordinatesBuffer, this.hairDepthProgram.getAttribLocation("a_barycentricCoordinates"), 3, d.FLOAT, !1, 0, 0).bindIndexBuffer(E.indexBuffer).useProgram(this.hairDepthProgram);
        d.drawElements(b, d.TRIANGLES, E.indexCount, d.UNSIGNED_SHORT, 0)
    }, T.prototype.render = function(e, t, r, n, i, o, a, s, u, h, c, l, f) {
        for (var d = 0; d < l.length; ++d) this.renderForLight(e, t, r, n, i, o, a, s, u, h, c, l[d], f)
    };
    var E = [1, .37, .3];

    function t(e, t) {
        for (var r = [], n = 0; n < 3; ++n) {
            var i = t / (.001 + E[n]);
            r[n] = Math.exp(-i * i / (2 * e)) / (2 * Math.PI * e)
        }
        return r
    }

    function b(e) {
        return P.addList([], [P.multiplyByScalar([], t(.0484, e), .1), P.multiplyByScalar([], t(.187, e), .118), P.multiplyByScalar([], t(.567, e), .113), P.multiplyByScalar([], t(1.99, e), .358), P.multiplyByScalar([], t(7.41, e), .078)])
    }

    function x(e) {
        var t = function f(e) {
                for (var t = 20 < e ? 3 : 2, r = [], n = 2 * t / (e - 1), i = 0; i < e; ++i) {
                    var o = i * n - t,
                        a = o < 0 ? -1 : 1;
                    r.push(t * a * Math.abs(Math.pow(o, 2)) / Math.pow(t, 2))
                }
                var s = [];
                for (i = 0; i < e; ++i) {
                    var u = ((0 < i ? Math.abs(r[i] - r[i - 1]) : 0) + (i < e - 1 ? Math.abs(r[i] - r[i + 1]) : 0)) / 2;
                    b(r[i]), (h = P.multiplyByScalar([], b(r[i]), u))[3] = r[i], s.push(h)
                }
                var h = s[Math.floor(e / 2)];
                for (i = Math.floor(e / 2); 0 < i; --i) s[i] = s[i - 1];
                s[0] = h;
                var c = P.addList([], s);
                for (i = 0; i < e; ++i) s[i][0] /= c[0], s[i][1] /= c[1], s[i][2] /= c[2];
                var l = [.58, .2, 0];
                for (s[0][0] = 1 * (1 - l[0]) + l[0] * s[0][0], s[0][1] = 1 * (1 - l[1]) + l[1] * s[0][1], s[0][2] = 1 * (1 - l[2]) + l[2] * s[0][2], i = 1; i < e; ++i) P.multiply(s[i], s[i], l);
                return s
            }(e),
            r = ["precision highp float;", "varying vec2 v_coordinates;", "uniform sampler2D u_colorTexture;", "uniform vec2 u_direction;", "uniform vec2 u_resolution;", "uniform mat4 u_projectionMatrix;", "uniform float u_near;", "uniform float u_far;", "float linearizeDepth (float depth, float near, float far) {", "depth = 2.0 * depth - 1.0;", "return 2.0 * near * far / (far + near - depth * (far - near));", "}", "void main () {", "vec4 color = texture2D(u_colorTexture, v_coordinates);", "if (color.a == 0.0) discard;", "vec3 colorM = color.rgb;", "float z = 1.0;", "float width = 0.2;", "vec4 corner = vec4(width, width, z, 1.0);", "corner = u_projectionMatrix * corner;", "corner.xyz /= corner.w;", "corner.xy *= 0.5;", "corner.xy = abs(corner.xy);", "vec3 kernel0 = " + ("vec3(" + t[0][0].toFixed(10) + "," + t[0][1].toFixed(10) + "," + t[0][2].toFixed(10) + ")") + ";", "vec3 colorBlurred = colorM;", "colorBlurred *= kernel0;", "vec2 delta = u_direction * corner.xy;"].join("\n");
        r += "\n";
        for (var n = 1; n < t.length; ++n) {
            var i = t[n],
                o = "sample" + n.toFixed(0);
            r += ["vec4 " + o + " = texture2D(u_colorTexture, v_coordinates + delta * " + i[3].toFixed(10) + ");", o + ".rgb = mix(colorM, " + o + ".rgb, step(0.5, " + o + ".a));", "colorBlurred.rgb += vec3(" + i[0].toFixed(10) + "," + i[1].toFixed(10) + "," + i[2].toFixed(10) + ") * " + o + ".rgb;"].join("\n"), r += "\n"
        }
        return r += ["gl_FragColor = vec4(colorBlurred, 1.0);", "}"].join("\n")
    }
    var A = .5 * Math.PI,
        y = .62 * Math.PI,
        e = P.multiplyByScalar([], [255, 201, 167], 1 / 255),
        D = P.pow([], e, 2.2),
        N = P.pow([], P.multiplyByScalar([], [152, 100, 52], 1 / 255), 2.2),
        w = P.rgbToHSV([], e),
        G = P.hsvToRGB([], [w[0] + .5, .9, .4]),
        F = P.multiplyByScalar([], [126, 13, 12], .5 / 255),
        V = P.pow([], F, 2.2);

    function S(e, t) {
        return i["lightingcommon.glsl"].replace("<shadow>", function h(e, t) {
            for (var r = function u(e, t) {
                    var r = [],
                        n = .5 / (e / 2) - 1,
                        i = 1 / (e / 2);
                    n *= t, i *= t;
                    for (var o = 0; o < e; ++o)
                        for (var a = 0; a < e; ++a) r.push([n + a * i, n + o * i]);
                    return r
                }(e, t / 1024), n = ["float shadow = 0.0;"], i = 1 / r.length, o = 0; o < r.length; ++o) {
                var a = r[o],
                    s = "vec2(" + a[0].toFixed(8) + "," + a[1].toFixed(8) + ")";
                n.push("shadow += " + i.toFixed(8) + " * texture2DShadowLerp(depthTexture, resolution, lightSpaceCoordinates + " + s + ", lightSpacePosition.z - 0.0001);")
            }
            return n.push("return shadow;"), n.join("\n")
        }(e, t))
    }

    function C(e, t) {
        this.canvas = e, this.wgl = t, this.programSets = {
            0: {
                sssBlurProgram: t.createProgram(i["fullscreen.vert"], x(13), {
                    a_position: 0
                })
            },
            1: {
                sssBlurProgram: t.createProgram(i["fullscreen.vert"], x(17), {
                    a_position: 0
                })
            }
        }, this.lightingCommons = {
            0: S(3, 5),
            1: S(4, 5)
        }, this.compositeProgram = t.createProgram(i["fullscreen.vert"], i["composite.frag"], {
            a_position: 0
        }), this.fxaaProgram = t.createProgram(i["fullscreen.vert"], i["fxaa.frag"], {
            a_position: 0
        }), this.backgroundProgram = t.createProgram(i["background.vert"], i["background.frag"], {
            a_position: 0
        }), this.imageProgram = t.createProgram(i["image.vert"], i["image.frag"], {
            a_position: 0
        }), this.staticSkinProgram = t.createProgram(i["staticskin.vert"], this.lightingCommons[0] + i["wrinkle.frag"]), this.quadVertexBuffer = t.createBuffer(), t.bufferData(this.quadVertexBuffer, t.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), t.STATIC_DRAW), this.cameraPosition = [0, 0, 1.7], this.viewMatrix = B.makeTranslation(new Float32Array(16), -this.cameraPosition[0], -this.cameraPosition[1], -this.cameraPosition[2]), this.lights = [new c(t, -1, 0, 5, 1), new c(t, 1, 0, 5, .2)], this.framebuffer = t.createFramebuffer(), this.colorTexture = t.buildTexture(t.RGBA, t.UNSIGNED_BYTE, this.canvas.width, this.canvas.height, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.LINEAR, t.LINEAR), this.colorTextureTemp = t.buildTexture(t.RGBA, t.UNSIGNED_BYTE, this.canvas.width, this.canvas.height, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.LINEAR, t.LINEAR), this.depthRenderbuffer = t.createRenderbuffer(), t.renderbufferStorage(this.depthRenderbuffer, t.RENDERBUFFER, t.DEPTH_COMPONENT16, this.canvas.width, this.canvas.height), this.shadowRenderer = new T(t), this.fov = A, this.targetFOV = this.fov, this.canvas.addEventListener("wheel", function(e) {
            var t = e.deltaY;
            this.targetFOV = 0 < t ? y : A
        }.bind(this))
    }

    function W(e, t, r) {
        this.module = e, this.wgl = t, this.index = r, this.getEyePositionData = this.module.cwrap("getEyePositionData", "number", ["number"]), this.getEyeNormalData = this.module.cwrap("getEyeNormalData", "number", ["number"]), this.getEyeVertexCount = this.module.cwrap("getEyeVertexCount", "number", ["number"]), this.getEyeIndices = this.module.cwrap("getEyeIndices", "number", ["number"]), this.getEyeIndexCount = this.module.cwrap("getEyeIndexCount", "number", ["number"]), this.getEyeIndex = this.module.cwrap("getEyeIndex", "number", ["number"]), this.baseIndex = this.getEyeIndex(r), this.indices = this.module.HEAPU16.subarray(this.getEyeIndices(r) >> 1, (this.getEyeIndices(r) >> 1) + this.getEyeIndexCount()), this.vertices = this.module.HEAPF32.subarray(this.getEyePositionData(r) >> 2, (this.getEyePositionData(r) >> 2) + 3 * this.getEyeVertexCount(r)), this.normals = this.module.HEAPF32.subarray(this.getEyeNormalData(r) >> 2, (this.getEyeNormalData(r) >> 2) + 3 * this.getEyeVertexCount(r)), this.positionsBuffer = t.buildBuffer(t.ARRAY_BUFFER, this.vertices, t.STATIC_DRAW), this.normalsBuffer = t.buildBuffer(t.ARRAY_BUFFER, this.normals, t.STATIC_DRAW), this.indexBuffer = t.buildBuffer(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.indicesCount = this.indices.length, this.lookDirection = [0, 0, 1]
    }

    function X(e, t, r) {
        this.module = e, this.wgl = t, this.index = r, this.getPositionData = this.module.cwrap("getEarPositionData", "number", ["number"]), this.getNormalData = this.module.cwrap("getEarNormalData", "number", ["number"]), this.getVertexCount = this.module.cwrap("getEarVertexCount", "number", ["number"]), this.getIndices = this.module.cwrap("getEarIndices", "number", ["number"]), this.getIndexCount = this.module.cwrap("getEarIndexCount", "number", ["number"]), this.indices = this.module.HEAPU16.subarray(this.getIndices(this.index) >> 1, (this.getIndices(this.index) >> 1) + this.getIndexCount(this.index)), this.vertices = this.module.HEAPF32.subarray(this.getPositionData(this.index) >> 2, (this.getPositionData(this.index) >> 2) + 3 * this.getVertexCount(this.index)), this.normals = this.module.HEAPF32.subarray(this.getNormalData(this.index) >> 2, (this.getNormalData(this.index) >> 2) + 3 * this.getVertexCount(this.index)), this.positionsBuffer = t.buildBuffer(t.ARRAY_BUFFER, this.vertices, t.STATIC_DRAW), this.normalsBuffer = t.buildBuffer(t.ARRAY_BUFFER, this.normals, t.STATIC_DRAW), this.indexBuffer = t.buildBuffer(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.indicesCount = this.indices.length
    }

    function z(e, t, r) {
        this.a = e, this.b = t, this.c = r
    }

    function Y(e, t) {
        this.baseTriangleIndex = e, this.barycentricCoordinates = t
    }

    function j(e) {
        this.baseAssociations = e, this.restPosition = [0, 0, 0]
    }

    function q(e, t, r) {
        return (1 - r) * e + r * t
    }

    function K(e, t, r, n, i, o) {
        for (var a = [], s = 0; s < e.length; ++s) a[s] = e[s] * n + t[s] * i + r[s] * o;
        return a
    }

    function Q(e, t, r, n) {
        this.vertices = [], this.baseTriangles = [], this.triangles = [], this.midpointMap = {};
        for (var i = 0; i < r.length; i += 3) {
            var o = new z(r[i + 0], r[i + 1], r[i + 2]);
            this.baseTriangles.push(o), this.triangles.push(new z(r[i + 0], r[i + 1], r[i + 2]))
        }
        for (i = 0; i < t; ++i) this.vertices.push(new j([]));
        for (i = 0; i < this.baseTriangles.length; ++i) {
            var a = this.baseTriangles[i];
            this.vertices[a.a].baseAssociations.push(new Y(i, [1, 0, 0])), this.vertices[a.b].baseAssociations.push(new Y(i, [0, 1, 0])), this.vertices[a.c].baseAssociations.push(new Y(i, [0, 0, 1]))
        }

        function s(e, t) {
            var r = function m(e, t) {
                return e < t ? (5e4 * e + t).toFixed(0) : (5e4 * t + e).toFixed(0)
            }(e, t);
            if (this.midpointMap[r] !== undefined) return d = this.midpointMap[r];
            for (var n, i, o, a = new j([]), s = this.vertices[e], u = this.vertices[t], h = 0; h < s.baseAssociations.length; ++h)
                for (var c = s.baseAssociations[h], l = 0; l < u.baseAssociations.length; ++l) {
                    var f = u.baseAssociations[l];
                    c.baseTriangleIndex === f.baseTriangleIndex && (a.baseAssociations.push(new Y(c.baseTriangleIndex, (n = c.barycentricCoordinates, i = f.barycentricCoordinates, o = .5, [q(n[0], i[0], o), q(n[1], i[1], o), q(n[2], i[2], o)]))), 1)
                }
            this.vertices.push(a);
            var d = this.vertices.length - 1;
            return this.midpointMap[r] = d
        }
        s = s.bind(this);
        for (i = 0; i < e; ++i) {
            for (var u = [], h = 0; h < this.triangles.length; ++h) {
                var c = (a = this.triangles[h]).a,
                    l = a.b,
                    f = a.c,
                    d = s(c, l),
                    m = s(l, f),
                    p = s(f, c);
                u.push(new z(c, d, p, a.hidden)), u.push(new z(l, m, d, a.hidden)), u.push(new z(f, p, m, a.hidden)), u.push(new z(d, m, p, a.hidden))
            }
            this.triangles = u
        }
        for (i = 0; i < this.vertices.length; ++i) {
            var g = this.vertices[i],
                _ = g.baseAssociations[0],
                v = (o = this.baseTriangles[_.baseTriangleIndex]).a,
                T = o.b,
                E = o.c,
                b = [n[3 * v + 0], n[3 * v + 1], n[3 * v + 2]],
                x = [n[3 * T + 0], n[3 * T + 1], n[3 * T + 2]],
                A = [n[3 * E + 0], n[3 * E + 1], n[3 * E + 2]];
            g.restPosition = K(b, x, A, _.barycentricCoordinates[0], _.barycentricCoordinates[1], _.barycentricCoordinates[2])
        }
    }

    function Z(e, t, r, n, i) {
        for (var o = new Q(t, r, n, i), a = [], s = 0; s < o.triangles.length; ++s) {
            var u = o.triangles[s];
            a.push(u.a), a.push(u.b), a.push(u.c)
        }
        this.indexBuffer = e.buildBuffer(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(a), e.STATIC_DRAW), this.indexCount = a.length;
        var h = new Float32Array(3 * o.vertices.length),
            c = new Float32Array(3 * o.vertices.length),
            l = new Float32Array(3 * o.vertices.length);
        for (s = 0; s < o.vertices.length; ++s) {
            var f = o.vertices[s],
                d = f.baseAssociations[0],
                m = o.baseTriangles[d.baseTriangleIndex];
            h[3 * s + 0] = m.a, h[3 * s + 1] = m.b, h[3 * s + 2] = m.c, c[3 * s + 0] = d.barycentricCoordinates[0], c[3 * s + 1] = d.barycentricCoordinates[1], c[3 * s + 2] = d.barycentricCoordinates[2], l[3 * s + 0] = f.restPosition[0], l[3 * s + 1] = f.restPosition[1], l[3 * s + 2] = f.restPosition[2]
        }
        this.associationsBuffer = e.buildBuffer(e.ARRAY_BUFFER, h, e.STATIC_DRAW), this.barycentricCoordinatesBuffer = e.buildBuffer(e.ARRAY_BUFFER, c, e.STATIC_DRAW), this.restPositionsBuffer = e.buildBuffer(e.ARRAY_BUFFER, l, e.STATIC_DRAW)
    }

    function J(e, t) {
        this.module = e, this.wgl = t, this.getHairPositionData = this.module.cwrap("getHairPositionData", "number", []), this.getHairNormalData = this.module.cwrap("getHairNormalData", "number", []), this.getHairVertexCount = this.module.cwrap("getHairVertexCount", "number", []), this.getHairIndexData = this.module.cwrap("getHairIndexData", "number", []), this.getHairIndexCount = this.module.cwrap("getHairIndexCount", "number", []), this.baseTextureWidth = Math.ceil(Math.sqrt(this.getHairVertexCount())), this.baseTextureHeight = this.baseTextureWidth, this.basePositionsTexture = t.buildTexture(t.RGBA, t.FLOAT, this.baseTextureWidth, this.baseTextureHeight, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST), this.baseNormalsTexture = t.buildTexture(t.RGBA, t.FLOAT, this.baseTextureWidth, this.baseTextureHeight, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.NEAREST, t.NEAREST), this.baseRestPositions = this.module.HEAPF32.subarray(this.getHairPositionData() >> 2, (this.getHairPositionData() >> 2) + 3 * this.getHairVertexCount()), this.hairIndices = this.module.HEAPU16.subarray(this.getHairIndexData() >> 1, (this.getHairIndexData() >> 1) + this.getHairIndexCount()), this.perturbationTexture3DWidth = 32, this.perturbationTexture3D = function i(e, t) {
            for (var r = new Uint8Array(t * t * t * 4), n = 0; n < t * t * t * 4; ++n) r[n] = Math.floor(256 * Math.random());
            return e.buildTexture(e.RGBA, e.UNSIGNED_BYTE, t * t, t, r, e.REPEAT, e.REPEAT, e.LINEAR, e.LINEAR)
        }(t, this.perturbationTexture3DWidth), this.basePositionsData = new Float32Array(this.baseTextureWidth * this.baseTextureHeight * 4), this.baseNormalsData = new Float32Array(this.baseTextureWidth * this.baseTextureHeight * 4), this.meshes = {}
    }

    function $(e, t) {
        this.module = e, this.wgl = t, this.getNosePositionData = this.module.cwrap("getNosePositionData", "number", []), this.getNoseNormalData = this.module.cwrap("getNoseNormalData", "number", []), this.getNoseVertexCount = this.module.cwrap("getNoseVertexCount", "number", []), this.getNoseIndices = this.module.cwrap("getNoseIndices", "number", []), this.getNoseIndexCount = this.module.cwrap("getNoseIndexCount", "number", []), this.indices = this.module.HEAPU16.subarray(this.getNoseIndices() >> 1, (this.getNoseIndices() >> 1) + this.getNoseIndexCount()), this.vertices = this.module.HEAPF32.subarray(this.getNosePositionData() >> 2, (this.getNosePositionData() >> 2) + 3 * this.getNoseVertexCount()), this.normals = this.module.HEAPF32.subarray(this.getNoseNormalData() >> 2, (this.getNoseNormalData() >> 2) + 3 * this.getNoseVertexCount()), this.positionsBuffer = t.buildBuffer(t.ARRAY_BUFFER, new Float32Array(this.vertices), t.STATIC_DRAW), this.normalsBuffer = t.buildBuffer(t.ARRAY_BUFFER, new Float32Array(this.normals), t.STATIC_DRAW), this.indexBuffer = t.buildBuffer(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), t.STATIC_DRAW), this.indicesCount = this.indices.length
    }
    C.prototype.createPrograms = function(e, t) {
        var r = this.wgl;
        0 === t ? this.programSets[e].wrinkleProgram = r.createProgram(i["wrinkle.vert"], this.lightingCommons[e] + i["wrinkle.frag"], {
            a_textureCoordinates: 0
        }) : 1 === t ? this.programSets[e].hairProgram = r.createProgram(i["hair.vert"], this.lightingCommons[e] + i["hair.frag"]) : 2 === t ? this.programSets[e].eyeProgram = r.createProgram(i["eye.vert"], this.lightingCommons[e] + i["eye.frag"], {
            a_position: 0,
            a_normal: 1
        }) : 3 === t && (this.programSets[e].appendageProgram = r.createProgram(i["nose.vert"], this.lightingCommons[e] + i["nose.frag"], {
            a_position: 0,
            a_normal: 1
        }))
    }, C.prototype.onResize = function() {
        var e = this.wgl;
        e.rebuildTexture(this.colorTexture, e.RGBA, e.UNSIGNED_BYTE, this.canvas.width, this.canvas.height, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.LINEAR, e.LINEAR), e.rebuildTexture(this.colorTextureTemp, e.RGBA, e.UNSIGNED_BYTE, this.canvas.width, this.canvas.height, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.LINEAR, e.LINEAR), e.renderbufferStorage(this.depthRenderbuffer, e.RENDERBUFFER, e.DEPTH_COMPONENT16, this.canvas.width, this.canvas.height)
    }, C.prototype.setLightingUniforms = function(e, t) {
        var r = this.lights[0],
            n = this.wgl;
        e.uniformMatrix4fv("u_projectionViewMatrix", !1, this.projectionViewMatrix).uniformMatrix4fv("u_modelMatrix", !1, this.modelMatrix).uniform3f("u_cameraPosition", this.cameraPosition[0], this.cameraPosition[1], this.cameraPosition[2]).uniform3f("u_skinAlbedo", D[0], D[1], D[2]);
        for (var i = 0; i < this.lights.length; ++i) {
            r = this.lights[i];
            e.uniform3f("u_lightPosition" + i.toFixed(0), r.getPosition()[0], r.getPosition()[1], r.getPosition()[2]).uniform3f("u_lightColor" + i.toFixed(0), r.brightness, r.brightness, r.brightness).uniformTexture("u_shadowDepthTexture" + i.toFixed(0), t + i, n.TEXTURE_2D, r.depthColorTexture).uniform2f("u_shadowResolution" + i.toFixed(0), r.shadowMapWidth, r.shadowMapWidth).uniformMatrix4fv("u_lightProjectionViewMatrix" + i.toFixed(0), !1, r.projectionViewMatrix).uniform1f("u_lightNear" + i.toFixed(0), r.near).uniform1f("u_lightFar" + i.toFixed(0), r.far)
        }
    }, C.prototype.update = function() {
        (this.canvas.width !== this.canvas.clientWidth || this.canvas.height !== this.canvas.clientHeight) && 0 < this.canvas.clientWidth && 0 < this.canvas.clientHeight && (this.canvas.width = this.canvas.clientWidth, this.canvas.height = this.canvas.clientHeight, this.onResize()), this.fov += .05 * (this.targetFOV - this.fov), this.canvas.width > this.canvas.height ? this.projectionMatrix = B.makePerspective(new Float32Array(16), this.fov, this.canvas.width / this.canvas.height, .1, 100) : this.projectionMatrix = B.makePerspectiveHorizontal(new Float32Array(16), this.fov, this.canvas.width / this.canvas.height, .1, 100), this.projectionViewMatrix = B.premultiply(new Float32Array(16), this.viewMatrix, this.projectionMatrix)
    }, C.prototype.render = function(e, t, r, n, i, o, a, s, u, h, c, l, f, d, m) {
        var p = this.programSets[m];
        this.projectionViewMatrix = B.premultiply(new Float32Array(16), this.viewMatrix, this.projectionMatrix), this.modelMatrix = e;
        var g = this.wgl;
        this.shadowRenderer.render(e, t, r, n, i, o, a, s, u, h, c, this.lights, m), g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTexture, 0), g.framebufferRenderbuffer(this.framebuffer, g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.RENDERBUFFER, this.depthRenderbuffer), g.clear(g.createClearState().bindFramebuffer(this.framebuffer), g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTextureTemp, 0), g.clear(g.createClearState().bindFramebuffer(this.framebuffer), g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTexture, 0);
        var _ = s.getMesh(m),
            v = g.createDrawState().bindFramebuffer(this.framebuffer).enable(g.DEPTH_TEST).viewport(0, 0, this.canvas.width, this.canvas.height).uniformTexture("u_basePositionsTexture", 0, g.TEXTURE_2D, s.basePositionsTexture).uniformTexture("u_baseNormalsTexture", 1, g.TEXTURE_2D, s.baseNormalsTexture).uniformTexture("u_perturbationTexture3D", 2, g.TEXTURE_2D, s.perturbationTexture3D).uniform1f("u_perturbationTextureWidth", s.perturbationTexture3DWidth).uniform2f("u_baseTextureResolution", s.baseTextureWidth, s.baseTextureHeight).uniform3f("u_hairAlbedo", N[0], N[1], N[2]).vertexAttribPointer(_.associationsBuffer, p.hairProgram.getAttribLocation("a_associations"), 3, g.FLOAT, !1, 0, 0).vertexAttribPointer(_.barycentricCoordinatesBuffer, p.hairProgram.getAttribLocation("a_barycentricCoordinates"), 3, g.FLOAT, !1, 0, 0).vertexAttribPointer(_.restPositionsBuffer, p.hairProgram.getAttribLocation("a_restPosition"), 3, g.FLOAT, !1, 0, 0).bindIndexBuffer(_.indexBuffer).useProgram(p.hairProgram);
        if (this.setLightingUniforms(v, 3), v.colorMask(!1, !1, !1, !1), g.drawElements(v, g.TRIANGLES, _.indexCount, g.UNSIGNED_SHORT, 0), i) {
            var T = g.createDrawState().bindFramebuffer(this.framebuffer).enable(g.DEPTH_TEST).viewport(0, 0, this.canvas.width, this.canvas.height).uniformTexture("u_basePositionsTexture", 0, g.TEXTURE_2D, t.basePositionsTexture).uniformTexture("u_baseNormalsTexture", 1, g.TEXTURE_2D, t.baseNormalsTexture).uniform2f("u_baseTextureResolution", t.textureWidth, t.textureHeight).uniform3f("u_hairAlbedo", N[0], N[1], N[2]).vertexAttribPointer(n.associationsBuffer, this.staticSkinProgram.getAttribLocation("a_associations"), 3, g.FLOAT, !1, 0, 0).vertexAttribPointer(n.barycentricCoordinatesBuffer, this.staticSkinProgram.getAttribLocation("a_barycentricCoordinates"), 3, g.FLOAT, !1, 0, 0).vertexAttribPointer(n.mouthinessesBuffer, this.staticSkinProgram.getAttribLocation("a_mouthiness"), 1, g.FLOAT, !1, 0, 0).uniform3f("u_mouthColor", V[0], V[1], V[2]).bindIndexBuffer(n.indexBuffer).useProgram(this.staticSkinProgram);
            this.setLightingUniforms(T, 3), T.colorMask(!1, !1, !1, !1), g.drawElements(T, g.TRIANGLES, n.indexCount, g.UNSIGNED_SHORT, 0), T.colorMask(!0, !0, !0, !0), T.depthFunc(g.LEQUAL), g.drawElements(T, g.TRIANGLES, n.indexCount, g.UNSIGNED_SHORT, 0)
        } else {
            var E = r.getWrinkleMesh(m),
                b = g.createDrawState().bindFramebuffer(this.framebuffer).viewport(0, 0, this.canvas.width, this.canvas.height).enable(g.DEPTH_TEST).vertexAttribPointer(E.vertexBuffer, 0, 2, g.FLOAT, g.FALSE, 0, 0).bindIndexBuffer(E.indexBuffer).uniformTexture("u_positionsTexture", 0, g.TEXTURE_2D, E.positionsTexture).uniformTexture("u_normalsTexture", 1, g.TEXTURE_2D, E.normalsTexture).uniformTexture("u_mouthinessTexture", 2, g.TEXTURE_2D, E.mouthinessTexture).uniform3f("u_mouthColor", V[0], V[1], V[2]).useProgram(p.wrinkleProgram);
            this.setLightingUniforms(b, 3), b.colorMask(!1, !1, !1, !1), g.drawElements(b, E.wireframe ? g.LINES : g.TRIANGLES, E.wrinkleIndexCount, g.UNSIGNED_SHORT, 0), b.colorMask(!0, !0, !0, !0), b.depthFunc(g.LEQUAL), g.drawElements(b, E.wireframe ? g.LINES : g.TRIANGLES, E.wrinkleIndexCount, g.UNSIGNED_SHORT, 0)
        }
        var x = function(e) {
            var t = g.createDrawState().bindFramebuffer(this.framebuffer).viewport(0, 0, this.canvas.width, this.canvas.height).enable(g.DEPTH_TEST).vertexAttribPointer(e.positionsBuffer, 0, 3, g.FLOAT, g.FALSE, 0, 0).vertexAttribPointer(e.normalsBuffer, 1, 3, g.FLOAT, g.FALSE, 0, 0).bindIndexBuffer(e.indexBuffer).useProgram(p.appendageProgram);
            this.setLightingUniforms(t, 0), g.drawElements(t, g.TRIANGLES, e.indicesCount, g.UNSIGNED_SHORT, 0)
        }.bind(this);
        x(u), x(h), x(c), g.clear(g.createClearState().clearColor(0, 0, 0, 1), g.COLOR_BUFFER_BIT, g.DEPTH_BUFFER_BIT), g.framebufferRenderbuffer(this.framebuffer, g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.RENDERBUFFER, null);
        var A = g.createDrawState().viewport(0, 0, this.canvas.width, this.canvas.height).vertexAttribPointer(this.quadVertexBuffer, 0, 2, g.FLOAT, !1, 0, 0).uniform2f("u_resolution", this.canvas.width, this.canvas.height).uniformMatrix4fv("u_projectionMatrix", !1, this.projectionMatrix).uniform1f("u_near", .1).uniform1f("u_far", 100).useProgram(p.sssBlurProgram);

        function y(e, t) {
            var r = g.createDrawState().bindFramebuffer(this.framebuffer).enable(g.DEPTH_TEST).viewport(0, 0, this.canvas.width, this.canvas.height).vertexAttribPointer(e.positionsBuffer, 0, 3, g.FLOAT, !1, 0, 0).vertexAttribPointer(e.normalsBuffer, 1, 3, g.FLOAT, !1, 0, 0).bindIndexBuffer(e.indexBuffer).uniform3f("u_eyePosition", e.position[0], e.position[1], e.position[2]).uniform1f("u_pupilNoiseOffset", t).uniform3f("u_lookDirection", e.lookDirection[0], e.lookDirection[1], e.lookDirection[2]).useProgram(p.eyeProgram);
            this.setLightingUniforms(r, 0), g.drawElements(r, g.TRIANGLES, e.indicesCount, g.UNSIGNED_SHORT, 0)
        }
        g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTextureTemp, 0), A.bindFramebuffer(this.framebuffer).uniformTexture("u_colorTexture", 0, g.TEXTURE_2D, this.colorTexture).uniform2f("u_direction", 1, 0), g.drawArrays(A, g.TRIANGLE_STRIP, 0, 4), g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTexture, 0), A.bindFramebuffer(this.framebuffer).uniformTexture("u_colorTexture", 0, g.TEXTURE_2D, this.colorTextureTemp).uniform2f("u_direction", 0, 1), g.drawArrays(A, g.TRIANGLE_STRIP, 0, 4), y = y.bind(this), g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTexture, 0), g.framebufferRenderbuffer(this.framebuffer, g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.RENDERBUFFER, this.depthRenderbuffer), y(o, 0), y(a, 123), v.colorMask(!0, !0, !0, !0), v.depthFunc(g.LEQUAL), g.drawElements(v, g.TRIANGLES, _.indexCount, g.UNSIGNED_SHORT, 0);
        var R = g.createDrawState().bindFramebuffer(this.framebuffer).viewport(0, 0, this.canvas.width, this.canvas.height).enable(g.DEPTH_TEST).depthMask(!1).vertexAttribPointer(this.quadVertexBuffer, 0, 2, g.FLOAT, !1, 0, 0).useProgram(this.backgroundProgram).uniformMatrix4fv("u_projectionViewMatrix", !1, this.projectionViewMatrix).uniform3f("u_cameraPosition", this.cameraPosition[0], this.cameraPosition[1], this.cameraPosition[2]).uniform3f("u_color", G[0], G[1], G[2]);
        if (this.canvas.width > this.canvas.height ? R.uniform2f("u_scale", Math.tan(this.fov / 2) * this.canvas.width / this.canvas.height, Math.tan(this.fov / 2)) : R.uniform2f("u_scale", Math.tan(this.fov / 2), Math.tan(this.fov / 2) * this.canvas.height / this.canvas.width), g.drawArrays(R, g.TRIANGLE_STRIP, 0, 4), 0 === d) {
            var P = g.createDrawState().bindFramebuffer(null).viewport(0, 0, this.canvas.width, this.canvas.height).vertexAttribPointer(this.quadVertexBuffer, 0, 2, g.FLOAT, !1, 0, 0).uniformTexture("u_input", 0, g.TEXTURE_2D, this.colorTexture).uniform2f("u_resolution", this.canvas.width, this.canvas.height).uniform1f("u_scale", l).useProgram(this.fxaaProgram);
            g.drawArrays(P, g.TRIANGLE_STRIP, 0, 4)
        } else {
            g.framebufferTexture2D(this.framebuffer, g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.colorTextureTemp, 0);
            P = g.createDrawState().bindFramebuffer(this.framebuffer).viewport(0, 0, this.canvas.width, this.canvas.height).vertexAttribPointer(this.quadVertexBuffer, 0, 2, g.FLOAT, !1, 0, 0).uniformTexture("u_input", 0, g.TEXTURE_2D, this.colorTexture).uniform2f("u_resolution", this.canvas.width, this.canvas.height).uniform1f("u_scale", l).useProgram(this.fxaaProgram);
            g.drawArrays(P, g.TRIANGLE_STRIP, 0, 4);
            var D = [0, -.85, 0, 1];
            B.multiplyVector(D, this.projectionViewMatrix, D);
            var w = this.canvas.height * (D[1] / D[3] * .5 + .5) - .06 * this.canvas.height,
                F = Math.floor(this.canvas.width / 2 - f.width / 2),
                S = g.createDrawState().bindFramebuffer(this.framebuffer).viewport(F, w - f.height, f.width, f.height).enable(g.DEPTH_TEST).depthMask(!1).vertexAttribPointer(this.quadVertexBuffer, 0, 2, g.FLOAT, !1, 0, 0).useProgram(this.imageProgram).enable(g.BLEND).blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA).uniformTexture("u_image", 0, g.TEXTURE_2D, f.texture).uniform1f("u_alpha", d);
            g.drawArrays(S, g.TRIANGLE_STRIP, 0, 4);
            var C = g.createDrawState().bindFramebuffer(null).viewport(0, 0, this.canvas.width, this.canvas.height).vertexAttribPointer(this.quadVertexBuffer, 0, 2, g.FLOAT, !1, 0, 0).uniformTexture("u_colorTexture", 0, g.TEXTURE_2D, this.colorTextureTemp).useProgram(this.compositeProgram);
            g.drawArrays(C, g.TRIANGLE_STRIP, 0, 4)
        }
    }, C.prototype.getRayDirection = function(e, t) {
        var r = 2 * Math.atan(1 / this.projectionMatrix[5]),
            n = [e * Math.tan(r / 2) * (this.canvas.width / this.canvas.height), t * Math.tan(r / 2), -1],
            i = B.invert([], this.viewMatrix),
            o = B.transformDirection([], n, i);
        return P.normalize(o, o), o
    }, W.prototype.update = function(e, t, r) {
        var n = this.wgl;
        this.vertices = this.module.HEAPF32.subarray(this.getEyePositionData(this.index) >> 2, (this.getEyePositionData(this.index) >> 2) + 3 * this.getEyeVertexCount(this.index)), this.normals = this.module.HEAPF32.subarray(this.getEyeNormalData(this.index) >> 2, (this.getEyeNormalData(this.index) >> 2) + 3 * this.getEyeVertexCount(this.index)), n.bufferData(this.positionsBuffer, n.ARRAY_BUFFER, this.vertices, n.DYNAMIC_DRAW), n.bufferData(this.normalsBuffer, n.ARRAY_BUFFER, this.normals, n.DYNAMIC_DRAW), this.position = [e.positions[3 * this.baseIndex + 0], e.positions[3 * this.baseIndex + 1], e.positions[3 * this.baseIndex + 2]];
        var i = [e.normals[3 * this.baseIndex + 0], e.normals[3 * this.baseIndex + 1], e.normals[3 * this.baseIndex + 2]];
        P.multiplyByQuaternion(this.position, this.position, r), P.multiplyByQuaternion(i, i, r);
        var o = P.normalize([], P.subtract([], t, this.position));
        P.coneClamp(o, i, o, 1.3), P.slerp(this.lookDirection, this.lookDirection, o, .7)
    }, X.prototype.update = function(e) {
        var t = this.wgl;
        this.vertices = this.module.HEAPF32.subarray(this.getPositionData(this.index) >> 2, (this.getPositionData(this.index) >> 2) + 3 * this.getVertexCount(this.index)), this.normals = this.module.HEAPF32.subarray(this.getNormalData(this.index) >> 2, (this.getNormalData(this.index) >> 2) + 3 * this.getVertexCount(this.index)), t.bufferData(this.positionsBuffer, t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), t.bufferData(this.normalsBuffer, t.ARRAY_BUFFER, this.normals, t.DYNAMIC_DRAW)
    }, J.prototype.createMesh = function(e) {
        var t = this.wgl;
        0 === e ? this.meshes[0] = new Z(t, 1, this.getHairVertexCount(), this.hairIndices, this.baseRestPositions) : 1 === e && (this.meshes[1] = new Z(t, 2, this.getHairVertexCount(), this.hairIndices, this.baseRestPositions))
    }, J.prototype.getMesh = function(e) {
        return this.meshes[e]
    }, J.prototype.update = function() {
        for (var e = this.wgl, t = this.module.HEAPF32.subarray(this.getHairPositionData() >> 2, (this.getHairPositionData() >> 2) + 3 * this.getHairVertexCount()), r = this.module.HEAPF32.subarray(this.getHairNormalData() >> 2, (this.getHairNormalData() >> 2) + 3 * this.getHairVertexCount()), n = 0; n < this.baseTextureWidth * this.baseTextureHeight; ++n)
            if (n < t.length / 3) this.basePositionsData[4 * n + 0] = t[3 * n + 0], this.basePositionsData[4 * n + 1] = t[3 * n + 1], this.basePositionsData[4 * n + 2] = t[3 * n + 2], this.basePositionsData[4 * n + 3] = 0, this.baseNormalsData[4 * n + 0] = r[3 * n + 0], this.baseNormalsData[4 * n + 1] = r[3 * n + 1], this.baseNormalsData[4 * n + 2] = r[3 * n + 2], this.baseNormalsData[4 * n + 3] = 0;
            else
                for (var i = 0; i < 4; ++i) this.basePositionsData[4 * n + i] = 0, this.baseNormalsData[4 * n + i] = 0;
        e.texImage2D(e.TEXTURE_2D, this.basePositionsTexture, 0, e.RGBA, this.baseTextureWidth, this.baseTextureHeight, 0, e.RGBA, e.FLOAT, this.basePositionsData), e.texImage2D(e.TEXTURE_2D, this.baseNormalsTexture, 0, e.RGBA, this.baseTextureWidth, this.baseTextureHeight, 0, e.RGBA, e.FLOAT, this.baseNormalsData)
    }, $.prototype.update = function(e) {
        var t = this.wgl;
        this.vertices = this.module.HEAPF32.subarray(this.getNosePositionData() >> 2, (this.getNosePositionData() >> 2) + 3 * this.getNoseVertexCount()), this.normals = this.module.HEAPF32.subarray(this.getNoseNormalData() >> 2, (this.getNoseNormalData() >> 2) + 3 * this.getNoseVertexCount()), t.bufferData(this.positionsBuffer, t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), t.bufferData(this.normalsBuffer, t.ARRAY_BUFFER, this.normals, t.DYNAMIC_DRAW)
    };
    var ee = 0;

    function te(e, t) {
        var r = this.buttons = [document.getElementById("quality-medium"), document.getElementById("quality-high")];
        this.currentValue = e;
        for (var n = 0; n < this.buttons.length; ++n) {
            var i = this;
            ! function() {
                var e = n;
                r[e].addEventListener("click", function() {
                    t(e), i.currentValue = e, i.refresh()
                })
            }()
        }
        this.changeCallback = t, this.refresh()
    }
    var re = {
        clamp: function(e, t, r) {
            return Math.max(t, Math.min(r, e))
        },
        smoothstep: function(e, t, r) {
            return (r = re.clamp((r - e) / (t - e), 0, 1)) * r * (3 - 2 * r)
        }
    };
    te.prototype.refresh = function() {
        for (var e = 0; e < this.buttons.length; ++e) e === this.currentValue ? this.buttons[e].className = "quality quality-selected" : this.buttons[e].className = "quality quality-unselected"
    };

    function ne(e, t) {
        this.point = e, this.normal = t
    }

    function ie(e, t, r) {
        this.onProgress = t, this.onLoaded = r, this.isSimplified = e;
        var n = this.canvas = document.createElement("canvas");
        n.width = window.innerWidth, n.height = window.innerHeight;
        var i, o = this.wgl = d.create(n, {
            antialias: !1
        });
        o.getExtension("OES_texture_float");
        var a = "object" == typeof WebAssembly,
            s = [function(t) {
                a ? (console.log("using webassembly"), l().then(function(e) {
                    i = e, t()
                })) : (console.log("using asm.js"), function n(e, t) {
                    var r = document.createElement("script");
                    r.onload = t, r.src = e, document.body.appendChild(r)
                }("face-asm.js", function() {
                    FaceLibAsm().then(function(e) {
                        i = e, t()
                    })
                }.bind(this)))
            }, function(e) {
                this.baseMesh = new m(i, o, !1), e()
            }, function(e) {
                this.hair = new J(i, o), this.hair.createMesh(0), e()
            }, function(e) {
                this.isSimplified || this.hair.createMesh(1), e()
            }, function(e) {
                this.isSimplified ? (this.staticSkin = new _(o, this.baseMesh, this.baseMesh.baseIndices, this.baseMesh.wrinkleStrengths, this.baseMesh.mouthinesses), this.wrinkleSimulator = null) : (this.wrinkleSimulator = new g(o, !1), this.staticSkin = null), e()
            }, function(e) {
                this.isSimplified || this.wrinkleSimulator.createMesh(0, this.baseMesh, this.baseMesh.baseIndices, this.baseMesh.wrinkleStrengths, this.baseMesh.mouthinesses), e()
            }, function(e) {
                this.isSimplified || this.wrinkleSimulator.createMesh(1, this.baseMesh, this.baseMesh.baseIndices, this.baseMesh.wrinkleStrengths, this.baseMesh.mouthinesses), e()
            }, function(e) {
                this.leftEye = new W(i, o, 0), this.rightEye = new W(i, o, 1), this.nose = new $(i, o), this.leftEar = new X(i, o, 0), this.rightEar = new X(i, o, 1), e()
            }, function(e) {
                this.renderer = new C(n, o), e()
            }, function(e) {
                this.renderer.createPrograms(0, 0), e()
            }, function(e) {
                this.renderer.createPrograms(0, 1), e()
            }, function(e) {
                this.renderer.createPrograms(0, 2), e()
            }, function(e) {
                this.renderer.createPrograms(0, 3), e()
            }, function(e) {
                this.isSimplified || this.renderer.createPrograms(1, 0), e()
            }, function(e) {
                this.isSimplified || this.renderer.createPrograms(1, 1), e()
            }, function(e) {
                this.isSimplified || this.renderer.createPrograms(1, 2), e()
            }, function(e) {
                this.isSimplified || this.renderer.createPrograms(1, 3), e()
            }, function(t) {
                ! function i(t, e, r) {
                    var n = new Image;
                    n.onload = function() {
                        var e = t.createTexture();
                        t.pixelStorei(t.TEXTURE_2D, e, t.UNPACK_FLIP_Y_WEBGL, !0), t.pixelStorei(t.TEXTURE_2D, e, t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), t.setTextureFiltering(t.TEXTURE_2D, e, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.LINEAR, t.LINEAR), t.texImage2D(t.TEXTURE_2D, e, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n), t.pixelStorei(t.TEXTURE_2D, e, t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.TEXTURE_2D, e, t.UNPACK_FLIP_Y_WEBGL, !1), r({
                            texture: e,
                            width: n.width,
                            height: n.height
                        })
                    }, n.src = e
                }(o, "pull.png", function(e) {
                    this.promptImage = e, t()
                }.bind(this))
            }, function(e) {
                this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.renderer.onResize(), e()
            }, function(e) {
                this.webAudioContext = new(window.AudioContext || window.webkitAudioContext), this.blockSize = 2048, this.heavy = new f(i, {
                    blockSize: this.blockSize,
                    sampleRate: this.webAudioContext.sampleRate
                }), e()
            }];
        if (!a)
            for (var u = 0; u < 20; ++u) s.push(function(e) {
                this.heavy.preprocess(10), e()
            });
        s.push(function(e) {
            this.webAudioProcessor = this.webAudioContext.createScriptProcessor(this.blockSize, this.heavy.getNumInputChannels(), Math.max(this.heavy.getNumOutputChannels(), 1)), this.lastAudioProcessTime = Date.now();
            var t = this;
            this.webAudioProcessor.onaudioprocess = function(e) {
                t.lastAudioProcessTime = Date.now(), t.heavy.process(e)
            }, this.webAudioProcessor.connect(this.webAudioContext.destination), e()
        });
        for (u = 0; u < s.length; ++u) s[u] = s[u].bind(this);
        var h = 0;

        function c() {
            h < s.length ? (t(h / (s.length - 1)), s[h](function() {
                requestAnimationFrame(c)
            }), h += 1) : (this.audioParameters = {}, this.mouseX = 0, this.mouseY = 0, this.draggingTriangleIndex = -1, this.lastDraggingTriangleIndex = -1, this.faceRotation = R.makeIdentity([]), n.addEventListener("mousedown", function(e) {
                0 === e.button && this.onMouseDown(e)
            }.bind(this)), document.addEventListener("mouseup", function(e) {
                this.onMouseUp(e)
            }.bind(this)), document.addEventListener("mousemove", function(e) {
                this.onMouseMove(e)
            }.bind(this)), n.addEventListener("touchstart", this.onTouchStart.bind(this)), n.addEventListener("touchmove", this.onTouchMove.bind(this)), n.addEventListener("touchend", this.onTouchEnd.bind(this)), n.addEventListener("touchcancel", this.onTouchCancel.bind(this)), n.addEventListener("click", function(e) {
                this.tryUnlockAudio()
            }.bind(this)), this.quality = ee, this.onLoaded(), this.framesSinceStart = 0, this.framesAtFirstDrag = -1)
        }(c = c.bind(this))()
    }
    ne.prototype.distanceToPoint = function(e) {
        return P.dot(P.subtract([], e, this.point), this.normal)
    }, ne.prototype.intersectionDistance = function(e, t) {
        var r = P.dot(this.normal, t);
        return P.dot(P.subtract([], this.point, e), this.normal) / r
    }, ne.prototype.intersect = function(e, t) {
        var r = P.dot(this.normal, t),
            n = P.dot(P.subtract([], this.point, e), this.normal) / r;
        return P.add([], e, P.multiplyByScalar([], t, n))
    }, ie.prototype.onMouseDown = function(e) {
        var t = o(e, this.canvas);
        this.mouseX = t.x / this.canvas.width * 2 - 1, this.mouseY = -(t.y / this.canvas.height * 2 - 1);
        var r = this.renderer.getRayDirection(this.mouseX, this.mouseY),
            n = R.invert([], this.faceRotation),
            i = this.baseMesh.intersect(P.multiplyByQuaternion([], this.renderer.cameraPosition, n), P.multiplyByQuaternion([], r, n)); - 1 !== i ? (this.draggingTriangleIndex = i, (this.lastDraggingTriangleIndex = -1) === this.framesAtFirstDrag && (this.framesAtFirstDrag = this.framesSinceStart)) : this.draggingTriangleIndex = -1, this.tryUnlockAudio()
    }, ie.prototype.onMouseMove = function(e) {
        var t = o(e, this.canvas);
        this.mouseX = t.x / this.canvas.width * 2 - 1, this.mouseY = -(t.y / this.canvas.height * 2 - 1)
    }, ie.prototype.onMouseUp = function(e) {
        -1 !== this.draggingTriangleIndex && (this.lastDraggingTriangleIndex = this.draggingTriangleIndex), this.draggingTriangleIndex = -1, this.tryUnlockAudio()
    }, ie.prototype.tryUnlockAudio = function() {
        if ("running" !== this.webAudioContext.state) {
            this.webAudioContext.resume();
            var e = this.webAudioContext,
                t = e.createBuffer(1, 1, e.sampleRate),
                r = e.createBufferSource();
            r.buffer = t, r.connect(e.destination), r.start(0), this.lastAudioProcessTime = Date.now()
        }
    }, ie.prototype.onTouchStart = function(e) {
        e.preventDefault(), 1 === e.touches.length && this.onMouseDown(e.targetTouches[0])
    }, ie.prototype.onTouchMove = function(e) {
        e.preventDefault(), this.onMouseMove(e.targetTouches[0])
    }, ie.prototype.onTouchEnd = function(e) {
        e.preventDefault(), 0 < e.touches.length || this.onMouseUp({})
    }, ie.prototype.onTouchCancel = function(e) {
        e.preventDefault(), 0 < e.touches.length || this.onMouseUp({})
    }, ie.prototype.start = function() {
        var e = document.createElement("div");
        if (document.body.appendChild(e), e.outerHTML = document.getElementById("main-template").innerHTML, this.isSimplified) {
            var t = document.getElementById("quality-container");
            t.parentNode.removeChild(t)
        } else this.qualitySelector = new te(this.quality, function(e) {
            this.quality = e
        }.bind(this));

        function r() {
            this.update(), requestAnimationFrame(r)
        }
        this.heavy.setFloatParameters({
            vol_gloop: .8,
            vol_master: .6,
            vol_slap: .4,
            vol_slosh: .66,
            vol_stretch: .7
        }), this.heavy.setFloatParameter("init", 500), (r = r.bind(this))()
    }, ie.prototype.update = function() {
        if (this.renderer.update(), this.audioParameters = {
                volume: this.baseMesh.computeVolume(),
                area: this.baseMesh.computeArea(),
                dragging: this.isDragging() ? 1 : 0
            }, -1 !== this.lastDraggingTriangleIndex) {
            var e = this.baseMesh.baseIndices[3 * this.lastDraggingTriangleIndex];
            P.length(this.baseMesh.getPosition(e)) < P.length(this.baseMesh.getRestPosition(this.lastDraggingTriangleIndex)) && (this.audioParameters.slap = 1, this.lastDraggingTriangleIndex = -1)
        }
        var t = [0, 0, 0];
        for (var r in this.isDragging() && (t = P.subtract([], this.baseMesh.getPosition(this.baseMesh.baseIndices[3 * this.draggingTriangleIndex]), this.baseMesh.getRestPosition(this.draggingTriangleIndex))), this.audioParameters.drag_delta_x = t[0], this.audioParameters.drag_delta_y = t[1], this.audioParameters.drag_delta_z = t[2], this.audioParameters.drag_distance = P.length(t), this.audioParameters) Math.abs(this.audioParameters[r]) < 1e-4 && (this.audioParameters[r] = 0);
        if ("running" === this.webAudioContext.state) {
            var n = Math.max(Date.now() - this.lastAudioProcessTime, 0);
            this.heavy.setFloatParametersWithDelay(this.audioParameters, n)
        }
        var i = this.renderer.getRayDirection(this.mouseX, this.mouseY),
            o = [0, 0, 0];
        if (this.isDragging()) {
            var a, s = this.baseMesh.getRestPosition(this.draggingTriangleIndex),
                u = P.normalize([], s),
                h = P.normalize([], [u[0], u[1], 0]),
                c = new ne(s, [0, 0, 1]),
                l = new ne(s, h),
                f = c.intersect(this.renderer.cameraPosition, i),
                d = 0;
            if (l.distanceToPoint(f) < 0) {
                var m = Math.acos(P.dot(u, [0, 0, 1])) + .1,
                    p = -l.distanceToPoint(f),
                    g = P.normalize([], P.cross([], h, [0, 0, 1])),
                    _ = Math.min(m, 2 * Math.abs(p));
                a = R.fromAxisAngle([], g, _), d = .15 * _
            } else a = R.identity();
            var v = R.invert([], this.faceRotation),
                T = P.multiplyByQuaternion([], this.baseMesh.getRestPosition(this.draggingTriangleIndex), this.faceRotation);
            o = new ne(P.add([], T, [0, 0, d]), [0, 0, 1]).intersect(this.renderer.cameraPosition, i), P.multiplyByQuaternion(o, o, v)
        } else a = R.identity();
        this.faceRotation = R.slerp([], this.faceRotation, a, this.isDragging() ? .1 : .05), this.baseMesh.update([0, 0, 0, 1], this.isDragging() ? 1 : 0, this.draggingTriangleIndex, o, this.isDragging() ? .8 : .97, 0, this.renderer.cameraPosition, i);
        var E = new ne([0, 0, 1.2], [0, 0, 1]).intersect(this.renderer.cameraPosition, i);
        this.hair.update(), this.leftEye.update(this.baseMesh, E, this.faceRotation), this.rightEye.update(this.baseMesh, E, this.faceRotation), this.nose.update(), this.leftEar.update(), this.rightEar.update();
        var b = B.fromQuaternion(new Float32Array(16), this.faceRotation);
        this.isSimplified || this.wrinkleSimulator.update(this.baseMesh.textureWidth, this.baseMesh.textureHeight, this.baseMesh.basePositionsTexture, this.baseMesh.baseNormalsTexture, this.baseMesh.positions, this.baseMesh.normals, this.isDragging(), this.draggingTriangleIndex, this.quality), this.framesSinceStart += 1;
        var x = re.smoothstep(0, 30, this.framesSinceStart),
            A = re.smoothstep(0, 30, this.framesSinceStart);
        if (-1 === this.framesAtFirstDrag) A *= 1;
        else {
            var y = this.framesSinceStart - this.framesAtFirstDrag;
            A *= 60 < y ? 0 : re.smoothstep(60, 0, y)
        }
        this.renderer.render(b, this.baseMesh, this.wrinkleSimulator, this.staticSkin, this.isSimplified, this.leftEye, this.rightEye, this.hair, this.nose, this.leftEar, this.rightEar, x, this.promptImage, A, this.quality)
    }, ie.prototype.isDragging = function() {
        return -1 !== this.draggingTriangleIndex
    };
    var oe = document.createElement("canvas"),
        ae = d.create(oe);
    if (null !== ae && null !== ae.getExtension("OES_texture_float") && function ue() {
            return window.AudioContext || window.webkitAudioContext
        }()) {
        document.getElementById("placeholder").outerHTML = document.getElementById("loading-template").innerHTML;
        var se = new ie(function he() {
            return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
        }(), function(e) {
            document.getElementById("loading-fill").style.width = Math.round(100 * e).toFixed(0) + "%"
        }, function() {
            document.getElementById("loading-bar").className = "loading-bar-hidden", window.setTimeout(function() {
                document.getElementById("loading-bar").outerHTML = "", document.body.appendChild(se.canvas), se.start()
            }, 200)
        })
    } else document.getElementById("placeholder").outerHTML = document.getElementById("no-support-template").innerHTML
}();
