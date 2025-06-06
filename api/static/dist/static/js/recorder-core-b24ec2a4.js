import { g as ie } from "./cssfilter-476ae7ee.js";
function le(N0, v1) {
  for (var g0 = 0; g0 < v1.length; g0++) {
    const J = v1[g0];
    if (typeof J != "string" && !Array.isArray(J)) {
      for (const Z0 in J)
        if (Z0 !== "default" && !(Z0 in N0)) {
          const b1 = Object.getOwnPropertyDescriptor(J, Z0);
          b1 && Object.defineProperty(N0, Z0, b1.get ? b1 : { enumerable: true, get: () => J[Z0] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(N0, Symbol.toStringTag, { value: "Module" }));
}
var re = { exports: {} };
(function(N0) {
  (function(v1) {
    var g0 = typeof window == "object" && !!window.document, J = g0 ? window : Object;
    v1(J, g0), N0.exports && (N0.exports = J.Recorder);
  })(function(v1, g0) {
    var J = function() {
    }, Z0 = function(S) {
      return typeof S == "number";
    }, b1 = function(S) {
      return JSON.stringify(S);
    }, Y = function(S) {
      return new c1(S);
    }, W = Y.LM = "2025-01-11 09:28", L0 = "https://github.com/xiangyuecn/Recorder", d0 = "Recorder", w0 = "getUserMedia", j0 = "srcSampleRate", B0 = "sampleRate", F0 = "bitRate", z = "catch", a0 = v1[d0];
    if (a0 && a0.LM == W) {
      a0.CLog(a0.i18n.$T("K8zP::\u91CD\u590D\u5BFC\u5165{1}", 0, d0), 3);
      return;
    }
    Y.IsOpen = function() {
      var S = Y.Stream;
      if (S) {
        var A = o1(S), t = A[0];
        if (t) {
          var I = t.readyState;
          return I == "live" || I == t.LIVE;
        }
      }
      return false;
    }, Y.BufferSize = 4096, Y.Destroy = function() {
      D0(d0 + " Destroy"), h0();
      for (var S in m0)
        m0[S]();
    };
    var m0 = {};
    Y.BindDestroy = function(S, A) {
      m0[S] = A;
    }, Y.Support = function() {
      if (!g0)
        return false;
      var S = navigator.mediaDevices || {};
      return S[w0] || (S = navigator, S[w0] || (S[w0] = S.webkitGetUserMedia || S.mozGetUserMedia || S.msGetUserMedia)), !(!S[w0] || (Y.Scope = S, !Y.GetContext()));
    }, Y.GetContext = function(S) {
      if (!g0)
        return null;
      var A = window.AudioContext;
      if (A || (A = window.webkitAudioContext), !A)
        return null;
      var t = Y.Ctx, I = 0;
      return t || (t = Y.Ctx = new A(), I = 1, Y.NewCtxs = Y.NewCtxs || [], Y.BindDestroy("Ctx", function() {
        var X = Y.Ctx;
        X && X.close && (E0(X), Y.Ctx = 0);
        var $ = Y.NewCtxs;
        Y.NewCtxs = [];
        for (var Q = 0; Q < $.length; Q++)
          E0($[Q]);
      })), S && t.close && (I || (t._useC || E0(t), t = new A()), t._useC = 1, Y.NewCtxs.push(t)), t;
    }, Y.CloseNewCtx = function(S) {
      if (S && S.close) {
        E0(S);
        for (var A = Y.NewCtxs || [], t = A.length, I = 0; I < A.length; I++)
          if (A[I] == S) {
            A.splice(I, 1);
            break;
          }
        D0(s0("mSxV::\u5269{1}\u4E2AGetContext\u672Aclose", 0, t + "-1=" + A.length), A.length ? 3 : 0);
      }
    };
    var E0 = function(S) {
      if (S && S.close && !S._isC && (S._isC = 1, S.state != "closed"))
        try {
          S.close();
        } catch (A) {
          D0("ctx close err", 1, A);
        }
    }, j = Y.ResumeCtx = function(S, A, t, I) {
      var X = 0, $ = 0, Q = 0, v0 = 0, f0 = "EventListener", u0 = "ResumeCtx ", i0 = function(I0, x0) {
        $ && J0(), X || (X = 1, I0 && I(I0, v0), x0 && t(v0)), x0 && (!S._LsSC && S["add" + f0] && S["add" + f0]("statechange", y0), S._LsSC = 1, Q = 1);
      }, J0 = function(I0) {
        if (!(I0 && $)) {
          $ = I0 ? 1 : 0;
          for (var x0 = ["focus", "mousedown", "mouseup", "touchstart", "touchend"], q0 = 0; q0 < x0.length; q0++)
            window[(I0 ? "add" : "remove") + f0](x0[q0], y0, true);
        }
      }, y0 = function() {
        var I0 = S.state, x0 = S0(I0);
        if (!X && !A(x0 ? ++v0 : v0))
          return i0();
        x0 ? (Q && D0(u0 + "sc " + I0, 3), J0(1), S.resume().then(function() {
          Q && D0(u0 + "sc " + S.state), i0(0, 1);
        })[z](function(q0) {
          D0(u0 + "error", 1, q0), S0(S.state) || i0(q0.message || "error");
        })) : I0 == "closed" ? (Q && !S._isC && D0(u0 + "sc " + I0, 1), i0("ctx closed")) : i0(0, 1);
      };
      y0();
    }, S0 = Y.CtxSpEnd = function(S) {
      return S == "suspended" || S == "interrupted";
    }, k0 = function(S) {
      var A = S.state, t = "ctx.state=" + A;
      return S0(A) && (t += s0("nMIy::\uFF08\u6CE8\u610F\uFF1Actx\u4E0D\u662Frunning\u72B6\u6001\uFF0Crec.open\u548Cstart\u81F3\u5C11\u8981\u6709\u4E00\u4E2A\u5728\u7528\u6237\u64CD\u4F5C(\u89E6\u6478\u3001\u70B9\u51FB\u7B49)\u65F6\u8FDB\u884C\u8C03\u7528\uFF0C\u5426\u5219\u5C06\u5728rec.start\u65F6\u5C1D\u8BD5\u8FDB\u884Cctx.resume\uFF0C\u53EF\u80FD\u4F1A\u4EA7\u751F\u517C\u5BB9\u6027\u95EE\u9898(\u4EC5iOS)\uFF0C\u8BF7\u53C2\u9605\u6587\u6863\u4E2DrunningContext\u914D\u7F6E\uFF09")), t;
    }, O0 = "ConnectEnableWebM";
    Y[O0] = true;
    var H0 = "ConnectEnableWorklet";
    Y[H0] = false;
    var s1 = function(S) {
      var A = S.BufferSize || Y.BufferSize, t = S.Stream, I = t._c, X = I[B0], $ = {}, Q = o1(t), v0 = Q[0], f0 = null, u0 = "";
      if (v0 && v0.getSettings) {
        f0 = v0.getSettings();
        var i0 = f0[B0];
        i0 && i0 != X && (u0 = s0("eS8i::Stream\u7684\u91C7\u6837\u7387{1}\u4E0D\u7B49\u4E8E{2}\uFF0C\u5C06\u8FDB\u884C\u91C7\u6837\u7387\u8F6C\u6362\uFF08\u6CE8\u610F\uFF1A\u97F3\u8D28\u4E0D\u4F1A\u53D8\u597D\u751A\u81F3\u53EF\u80FD\u53D8\u5DEE\uFF09\uFF0C\u4E3B\u8981\u5728\u79FB\u52A8\u7AEF\u672A\u7981\u7528\u56DE\u58F0\u6D88\u9664\u65F6\u4F1A\u4EA7\u751F\u6B64\u73B0\u8C61\uFF0C\u6D4F\u89C8\u5668\u6709\u56DE\u58F0\u6D88\u9664\u65F6\u53EF\u80FD\u53EA\u4F1A\u8FD4\u56DE16k\u91C7\u6837\u7387\u7684\u97F3\u9891\u6570\u636E\uFF0C", 0, i0, X));
      }
      t._ts = f0, D0(u0 + "Stream TrackSet: " + b1(f0), u0 ? 3 : 0);
      var J0 = function(w) {
        var e = t._m = I.createMediaStreamSource(t), i = I.destination, h = "createMediaStreamDestination";
        I[h] && (i = t._d = I[h]()), e.connect(w), w.connect(i);
      }, y0, I0, x0, q0 = "", u = t._call, k = function(w, e) {
        for (var i in u) {
          if (e != X) {
            $.index = 0, $ = Y.SampleData([w], e, X, $, { _sum: 1 });
            var h = $.data, T = $._sum;
          } else {
            $ = {};
            for (var c = w.length, h = new Int16Array(c), T = 0, l = 0; l < c; l++) {
              var v = Math.max(-1, Math.min(1, w[l]));
              v = v < 0 ? v * 32768 : v * 32767, h[l] = v, T += Math.abs(v);
            }
          }
          for (var s in u)
            u[s](h, T);
          return;
        }
      }, H = "ScriptProcessor", p = "audioWorklet", U = d0 + " " + p, m = "RecProc", C = "MediaRecorder", K = C + ".WebM.PCM", M = I.createScriptProcessor || I.createJavaScriptNode, V = s0("ZGlf::\u3002\u7531\u4E8E{1}\u5185\u90E81\u79D2375\u6B21\u56DE\u8C03\uFF0C\u5728\u79FB\u52A8\u7AEF\u53EF\u80FD\u4F1A\u6709\u6027\u80FD\u95EE\u9898\u5BFC\u81F4\u56DE\u8C03\u4E22\u5931\u5F55\u97F3\u53D8\u77ED\uFF0CPC\u7AEF\u65E0\u5F71\u54CD\uFF0C\u6682\u4E0D\u5EFA\u8BAE\u5F00\u542F{1}\u3002", 0, p), d = function() {
        I0 = t.isWorklet = false, _1(t), D0(s0("7TU0::Connect\u91C7\u7528\u8001\u7684{1}\uFF0C", 0, H) + f1.get(Y[H0] ? s0("JwCL::\u4F46\u5DF2\u8BBE\u7F6E{1}\u5C1D\u8BD5\u542F\u7528{2}", 2) : s0("VGjB::\u53EF\u8BBE\u7F6E{1}\u5C1D\u8BD5\u542F\u7528{2}", 2), [d0 + "." + H0 + "=true", p]) + q0 + V, 3);
        var w = t._p = M.call(I, A, 1, 1);
        J0(w), w.onaudioprocess = function(e) {
          var i = e.inputBuffer.getChannelData(0);
          k(i, X);
        };
      }, g = function() {
        y0 = t.isWebM = false, P0(t), I0 = t.isWorklet = !M || Y[H0];
        var w = window.AudioWorkletNode;
        if (!(I0 && I[p] && w)) {
          d();
          return;
        }
        var e = function() {
          var l = function(s) {
            return s.toString().replace(/^function|DEL_/g, "").replace(/\$RA/g, U);
          }, v = "class " + m + " extends AudioWorkletProcessor{";
          return v += "constructor " + l(function(s) {
            DEL_super(s);
            var x = this, r = s.processorOptions.bufferSize;
            x.bufferSize = r, x.buffer = new Float32Array(r * 2), x.pos = 0, x.port.onmessage = function(L) {
              L.data.kill && (x.kill = true, $C.log("$RA kill call"));
            }, $C.log("$RA .ctor call", s);
          }), v += "process " + l(function(s, x, r) {
            var L = this, _ = L.bufferSize, o = L.buffer, f = L.pos;
            if (s = (s[0] || [])[0] || [], s.length) {
              o.set(s, f), f += s.length;
              var b = ~~(f / _) * _;
              if (b) {
                this.port.postMessage({ val: o.slice(0, b) });
                var B = o.subarray(b, f);
                o = new Float32Array(_ * 2), o.set(B), f = B.length, L.buffer = o;
              }
              L.pos = f;
            }
            return !L.kill;
          }), v += '}try{registerProcessor("' + m + '", ' + m + ')}catch(e){$C.error("' + U + ' Reg Error",e)}', v = v.replace(/\$C\./g, "console."), "data:text/javascript;base64," + btoa(unescape(encodeURIComponent(v)));
        }, i = function() {
          return I0 && t._na;
        }, h = t._na = function() {
          x0 !== "" && (clearTimeout(x0), x0 = setTimeout(function() {
            x0 = 0, i() && (D0(s0("MxX1::{1}\u672A\u8FD4\u56DE\u4EFB\u4F55\u97F3\u9891\uFF0C\u6062\u590D\u4F7F\u7528{2}", 0, p, H), 3), M && d());
          }, 500));
        }, T = function() {
          if (i()) {
            var l = t._n = new w(I, m, { processorOptions: { bufferSize: A } });
            J0(l), l.port.onmessage = function(v) {
              x0 && (clearTimeout(x0), x0 = ""), i() ? k(v.data.val, X) : I0 || D0(s0("XUap::{1}\u591A\u4F59\u56DE\u8C03", 0, p), 3);
            }, D0(s0("yOta::Connect\u91C7\u7528{1}\uFF0C\u8BBE\u7F6E{2}\u53EF\u6062\u590D\u8001\u5F0F{3}", 0, p, d0 + "." + H0 + "=false", H) + q0 + V, 3);
          }
        }, c = function() {
          if (i()) {
            if (I[m]) {
              T();
              return;
            }
            var l = e();
            I[p].addModule(l).then(function(v) {
              i() && (I[m] = 1, T(), x0 && h());
            })[z](function(v) {
              D0(p + ".addModule Error", 1, v), i() && d();
            });
          }
        };
        j(I, function() {
          return i();
        }, c, c);
      }, E = function() {
        var w = window[C], e = "ondataavailable", i = "audio/webm; codecs=pcm";
        y0 = t.isWebM = Y[O0];
        var h = w && e in w.prototype && w.isTypeSupported(i);
        if (q0 = h ? "" : s0("VwPd::\uFF08\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u6301{1}\uFF09", 0, K), !y0 || !h) {
          g();
          return;
        }
        var T = function() {
          return y0 && t._ra;
        };
        t._ra = function() {
          x0 !== "" && (clearTimeout(x0), x0 = setTimeout(function() {
            T() && (D0(s0("vHnb::{1}\u672A\u8FD4\u56DE\u4EFB\u4F55\u97F3\u9891\uFF0C\u964D\u7EA7\u4F7F\u7528{2}", 0, C, p), 3), g());
          }, 500));
        };
        var c = Object.assign({ mimeType: i }, Y.ConnectWebMOptions), l = t._r = new w(t, c), v = t._rd = {};
        l[e] = function(s) {
          var x = new FileReader();
          x.onloadend = function() {
            if (T()) {
              var r = T1(new Uint8Array(x.result), v);
              if (!r)
                return;
              if (r == -1) {
                g();
                return;
              }
              x0 && (clearTimeout(x0), x0 = ""), k(r, v.webmSR);
            } else
              y0 || D0(s0("O9P7::{1}\u591A\u4F59\u56DE\u8C03", 0, C), 3);
          }, x.readAsArrayBuffer(s.data);
        };
        try {
          l.start(~~(A / 48)), D0(s0("LMEm::Connect\u91C7\u7528{1}\uFF0C\u8BBE\u7F6E{2}\u53EF\u6062\u590D\u4F7F\u7528{3}\u6216\u8001\u5F0F{4}", 0, K, d0 + "." + O0 + "=false", p, H));
        } catch (s) {
          D0("mr start err", 1, s), g();
        }
      };
      E();
    }, W0 = function(S) {
      S._na && S._na(), S._ra && S._ra();
    }, _1 = function(S) {
      S._na = null, S._n && (S._n.port.postMessage({ kill: true }), S._n.disconnect(), S._n = null);
    }, P0 = function(S) {
      if (S._ra = null, S._r) {
        try {
          S._r.stop();
        } catch (A) {
          D0("mr stop err", 1, A);
        }
        S._r = null;
      }
    }, h0 = function(S) {
      S = S || Y;
      var A = S == Y, t = S.Stream;
      t && (t._m && (t._m.disconnect(), t._m = null), !t._RC && t._c && Y.CloseNewCtx(t._c), t._RC = null, t._c = null, t._d && (D(t._d.stream), t._d = null), t._p && (t._p.disconnect(), t._p.onaudioprocess = t._p = null), _1(t), P0(t), A && D(t)), S.Stream = 0;
    }, D = Y.StopS_ = function(S) {
      for (var A = o1(S), t = 0; t < A.length; t++) {
        var I = A[t];
        I.stop && I.stop();
      }
      S.stop && S.stop();
    }, o1 = function(S) {
      var A = 0, t = 0, I = [];
      S.getAudioTracks && (A = S.getAudioTracks(), t = S.getVideoTracks()), A || (A = S.audioTracks, t = S.videoTracks);
      for (var X = 0, $ = A ? A.length : 0; X < $; X++)
        I.push(A[X]);
      for (var X = 0, $ = t ? t.length : 0; X < $; X++)
        I.push(t[X]);
      return I;
    };
    Y.SampleData = function(S, A, t, I, X) {
      var $ = "SampleData";
      I || (I = {});
      var Q = I.index || 0, v0 = I.offset || 0, f0 = I.raisePrev || 0, u0 = I.filter;
      if (u0 && u0.fn && (u0.sr && u0.sr != A || u0.srn && u0.srn != t) && (u0 = null, D0(s0("d48C::{1}\u7684filter\u91C7\u6837\u7387\u53D8\u4E86\uFF0C\u91CD\u8BBE\u6EE4\u6CE2", 0, $), 3)), !u0)
        if (t <= A) {
          var i0 = t > A * 3 / 4 ? 0 : t / 2 * 3 / 4;
          u0 = { fn: i0 ? Y.IIRFilter(true, A, i0) : 0 };
        } else {
          var i0 = A > t * 3 / 4 ? 0 : A / 2 * 3 / 4;
          u0 = { fn: i0 ? Y.IIRFilter(true, t, i0) : 0 };
        }
      u0.sr = A, u0.srn = t;
      var J0 = u0.fn, y0 = I.frameNext || [];
      X || (X = {});
      var I0 = X.frameSize || 1;
      X.frameType && (I0 = X.frameType == "mp3" ? 1152 : 1);
      var x0 = X._sum, q0 = 0, u = S.length;
      Q > u + 1 && D0(s0("tlbC::{1}\u4F3C\u4E4E\u4F20\u5165\u4E86\u672A\u91CD\u7F6Echunk {2}", 0, $, Q + ">" + u), 3);
      for (var k = 0, H = Q; H < u; H++)
        k += S[H].length;
      var p = A / t;
      if (p > 1)
        k = Math.max(0, k - Math.floor(v0)), k = Math.floor(k / p);
      else if (p < 1) {
        var U = 1 / p;
        k = Math.floor(k * U);
      }
      k += y0.length;
      for (var m = new Int16Array(k), C = 0, H = 0; H < y0.length; H++)
        m[C] = y0[H], C++;
      for (; Q < u; Q++) {
        var K = S[Q], M = K instanceof Float32Array, H = v0, V = K.length, d = J0 && J0.Embed, g = 0, E = 0, w = 0, e = 0;
        if (p < 1) {
          for (var i = C + H, h = f0, T = 0; T < V; T++) {
            var c = K[T];
            M && (c = Math.max(-1, Math.min(1, c)), c = c < 0 ? c * 32768 : c * 32767);
            var l = Math.floor(i);
            i += U;
            for (var v = Math.floor(i), s = (c - h) / (v - l), x = 1; l < v; l++, x++) {
              var r = Math.floor(h + x * s);
              d ? (w = r, e = d.b0 * w + d.b1 * d.x1 + d.b0 * d.x2 - d.a1 * d.y1 - d.a2 * d.y2, d.x2 = d.x1, d.x1 = w, d.y2 = d.y1, d.y1 = e, r = e) : r = J0 ? J0(r) : r, r > 32767 ? r = 32767 : r < -32768 && (r = -32768), x0 && (q0 += Math.abs(r)), m[l] = r, C++;
            }
            h = f0 = c, H += U;
          }
          v0 = H % 1;
          continue;
        }
        for (var T = 0, L = 0; T < V; T++, L++) {
          if (L < V) {
            var c = K[L];
            M && (c = Math.max(-1, Math.min(1, c)), c = c < 0 ? c * 32768 : c * 32767), d ? (w = c, e = d.b0 * w + d.b1 * d.x1 + d.b0 * d.x2 - d.a1 * d.y1 - d.a2 * d.y2, d.x2 = d.x1, d.x1 = w, d.y2 = d.y1, d.y1 = e) : e = J0 ? J0(c) : c;
          }
          if (g = E, E = e, L == 0) {
            T--;
            continue;
          }
          var _ = Math.floor(H);
          if (T == _) {
            var o = Math.ceil(H), f = H - _, b = g, B = o < V ? E : b, a = b + (B - b) * f;
            a > 32767 ? a = 32767 : a < -32768 && (a = -32768), x0 && (q0 += Math.abs(a)), m[C] = a, C++, H += p;
          }
        }
        v0 = Math.max(0, H - V);
      }
      p < 1 && C + 1 == k && (k--, m = new Int16Array(m.buffer.slice(0, k * 2))), C - 1 != k && C != k && D0($ + " idx:" + C + " != size:" + k, 3), y0 = null;
      var n = k % I0;
      if (n > 0) {
        var F = (k - n) * 2;
        y0 = new Int16Array(m.buffer.slice(F)), m = new Int16Array(m.buffer.slice(0, F));
      }
      var R = { index: Q, offset: v0, raisePrev: f0, filter: u0, frameNext: y0, sampleRate: t, data: m };
      return x0 && (R._sum = q0), R;
    }, Y.IIRFilter = function(S, A, t) {
      var I = 2 * Math.PI * t / A, X = Math.sin(I), $ = Math.cos(I), Q = X / 2, v0 = 1 + Q, f0 = -2 * $ / v0, u0 = (1 - Q) / v0;
      if (S)
        var i0 = (1 - $) / 2 / v0, J0 = (1 - $) / v0;
      else
        var i0 = (1 + $) / 2 / v0, J0 = -(1 + $) / v0;
      var y0 = 0, I0 = 0, x0 = 0, q0 = 0, u = 0, k = function(H) {
        return x0 = i0 * H + J0 * y0 + i0 * I0 - f0 * q0 - u0 * u, I0 = y0, y0 = H, u = q0, q0 = x0, x0;
      };
      return k.Embed = { x1: 0, x2: 0, y1: 0, y2: 0, b0: i0, b1: J0, a1: f0, a2: u0 }, k;
    }, Y.PowerLevel = function(S, A) {
      var t = S / A || 0, I;
      return t < 1251 ? I = Math.round(t / 1250 * 10) : I = Math.round(Math.min(100, Math.max(0, (1 + Math.log(t / 1e4) / Math.log(10)) * 100))), I;
    }, Y.PowerDBFS = function(S) {
      var A = Math.max(0.1, S || 0), t = 32767;
      return A = Math.min(A, t), A = 20 * Math.log(A / t) / Math.log(10), Math.max(-100, Math.round(A));
    }, Y.CLog = function(S, A) {
      if (typeof console == "object") {
        var t = /* @__PURE__ */ new Date(), I = ("0" + t.getMinutes()).substr(-2) + ":" + ("0" + t.getSeconds()).substr(-2) + "." + ("00" + t.getMilliseconds()).substr(-3), X = this && this.envIn && this.envCheck && this.id, $ = ["[" + I + " " + d0 + (X ? ":" + X : "") + "]" + S], Q = arguments, v0 = Y.CLog, f0 = 2, u0 = v0.log || console.log;
        for (Z0(A) ? u0 = A == 1 ? v0.error || console.error : A == 3 ? v0.warn || console.warn : u0 : f0 = 1; f0 < Q.length; f0++)
          $.push(Q[f0]);
        V0 ? u0 && u0("[IsLoser]" + $[0], $.length > 1 ? $ : "") : u0.apply(console, $);
      }
    };
    var D0 = function() {
      Y.CLog.apply(this, arguments);
    }, V0 = true;
    try {
      V0 = !console.log.apply;
    } catch {
    }
    var w1 = 0;
    function c1(S) {
      var A = this;
      A.id = ++w1, N1();
      var t = { type: "mp3", onProcess: J };
      for (var I in S)
        t[I] = S[I];
      A.set = t;
      var X = t[F0], $ = t[B0];
      (X && !Z0(X) || $ && !Z0($)) && A.CLog(s0.G("IllegalArgs-1", [s0("VtS4::{1}\u548C{2}\u5FC5\u987B\u662F\u6570\u503C", 0, B0, F0)]), 1, S), t[F0] = +X || 16, t[B0] = +$ || 16e3, A.state = 0, A._S = 9, A.Sync = { O: 9, C: 9 };
    }
    Y.Sync = { O: 9, C: 9 }, Y.prototype = c1.prototype = { CLog: D0, _streamStore: function() {
      return this.set.sourceStream ? this : Y;
    }, _streamGet: function() {
      return this._streamStore().Stream;
    }, _streamCtx: function() {
      var S = this._streamGet();
      return S && S._c;
    }, open: function(S, A) {
      var t = this, I = t.set, X = t._streamStore(), $ = 0;
      S = S || J;
      var Q = function(M, V) {
        V = !!V, t.CLog(s0("5tWi::\u5F55\u97F3open\u5931\u8D25\uFF1A") + M + ",isUserNotAllow:" + V, 1), $ && Y.CloseNewCtx($), A && A(M, V);
      };
      t._streamTag = w0;
      var v0 = function() {
        t.CLog("open ok, id:" + t.id + " stream:" + t._streamTag), S(), t._SO = 0;
      }, f0 = X.Sync, u0 = ++f0.O, i0 = f0.C;
      t._O = t._O_ = u0, t._SO = t._S;
      var J0 = function() {
        if (i0 != f0.C || !t._O) {
          var M = s0("dFm8::open\u88AB\u53D6\u6D88");
          return u0 == f0.O ? t.close() : M = s0("VtJO::open\u88AB\u4E2D\u65AD"), Q(M), true;
        }
      };
      if (!g0) {
        Q(s0.G("NonBrowser-1", ["open"]) + s0("EMJq::\uFF0C\u53EF\u5C1D\u8BD5\u4F7F\u7528RecordApp\u89E3\u51B3\u65B9\u6848") + "(" + L0 + "/tree/master/app-support-sample)");
        return;
      }
      var y0 = t.envCheck({ envName: "H5", canProcess: true });
      if (y0) {
        Q(s0("A5bm::\u4E0D\u80FD\u5F55\u97F3\uFF1A") + y0);
        return;
      }
      var I0, x0 = function() {
        I0 = I.runningContext, I0 || (I0 = $ = Y.GetContext(true));
      };
      if (I.sourceStream) {
        if (t._streamTag = "set.sourceStream", !Y.GetContext()) {
          Q(s0("1iU7::\u4E0D\u652F\u6301\u6B64\u6D4F\u89C8\u5668\u4ECE\u6D41\u4E2D\u83B7\u53D6\u5F55\u97F3"));
          return;
        }
        x0(), h0(X);
        var q0 = t.Stream = I.sourceStream;
        q0._c = I0, q0._RC = I.runningContext, q0._call = {};
        try {
          s1(X);
        } catch (M) {
          h0(X), Q(s0("BTW2::\u4ECE\u6D41\u4E2D\u6253\u5F00\u5F55\u97F3\u5931\u8D25\uFF1A") + M.message);
          return;
        }
        v0();
        return;
      }
      var u = function(M, V) {
        try {
          window.top.a;
        } catch {
          Q(s0("Nclz::\u65E0\u6743\u5F55\u97F3(\u8DE8\u57DF\uFF0C\u8BF7\u5C1D\u8BD5\u7ED9iframe\u6DFB\u52A0\u9EA6\u514B\u98CE\u8BBF\u95EE\u7B56\u7565\uFF0C\u5982{1})", 0, 'allow="camera;microphone"'));
          return;
        }
        k(1, M) && (/Found/i.test(M) ? Q(V + s0("jBa9::\uFF0C\u65E0\u53EF\u7528\u9EA6\u514B\u98CE")) : Q(V));
      }, k = function(M, V) {
        if (/Permission|Allow/i.test(V))
          M && Q(s0("gyO5::\u7528\u6237\u62D2\u7EDD\u4E86\u5F55\u97F3\u6743\u9650"), true);
        else if (window.isSecureContext === false)
          M && Q(s0("oWNo::\u6D4F\u89C8\u5668\u7981\u6B62\u4E0D\u5B89\u5168\u9875\u9762\u5F55\u97F3\uFF0C\u53EF\u5F00\u542Fhttps\u89E3\u51B3"));
        else
          return 1;
      };
      if (Y.IsOpen()) {
        v0();
        return;
      }
      if (!Y.Support()) {
        u("", s0("COxc::\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5F55\u97F3"));
        return;
      }
      x0();
      var H = function(M) {
        setTimeout(function() {
          M._call = {};
          var V = Y.Stream;
          V && (h0(), M._call = V._call), Y.Stream = M, M._c = I0, M._RC = I.runningContext, !J0() && (Y.IsOpen() ? (V && t.CLog(s0("upb8::\u53D1\u73B0\u540C\u65F6\u591A\u6B21\u8C03\u7528open"), 1), s1(X), v0()) : Q(s0("Q1GA::\u5F55\u97F3\u529F\u80FD\u65E0\u6548\uFF1A\u65E0\u97F3\u9891\u6D41")));
        }, 100);
      }, p = function(M) {
        var V = M.name || M.message || M.code + ":" + M, d = "";
        U == 1 && k(0, V) && (d = s0("KxE2::\uFF0C\u5C06\u5C1D\u8BD5\u7981\u7528\u56DE\u58F0\u6D88\u9664\u540E\u91CD\u8BD5"));
        var g = s0("xEQR::\u8BF7\u6C42\u5F55\u97F3\u6743\u9650\u9519\u8BEF"), E = s0("bDOG::\u65E0\u6CD5\u5F55\u97F3\uFF1A");
        t.CLog(g + d + "|" + M, d || C ? 3 : 1, M), d ? (m = V, C = M, K(1)) : C ? (t.CLog(g + "|" + C, 1, C), u(m, E + C)) : u(V, E + M);
      }, U = 0, m, C, K = function(M) {
        U++;
        var V = "audioTrackSet", d = "autoGainControl", g = "echoCancellation", E = "noiseSuppression", w = V + ":{" + g + "," + E + "," + d + "}", e = JSON.parse(b1(I[V] || true));
        t.CLog("open... " + U + " " + V + ":" + b1(e)), M && (typeof e != "object" && (e = {}), e[d] = false, e[g] = false, e[E] = false), e[B0] && t.CLog(s0("IjL3::\u6CE8\u610F\uFF1A\u5DF2\u914D\u7F6E{1}\u53C2\u6570\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u6D4F\u89C8\u5668\u4E0D\u80FD\u6B63\u786E\u9009\u7528\u9EA6\u514B\u98CE\u3001\u79FB\u52A8\u7AEF\u65E0\u6CD5\u542F\u7528\u56DE\u58F0\u6D88\u9664\u7B49\u73B0\u8C61", 0, V + "." + B0), 3);
        var i = { audio: e, video: I.videoTrackSet || false };
        try {
          var h = Y.Scope[w0](i, H, p);
        } catch (T) {
          t.CLog(w0, 3, T), i = { audio: true, video: false }, h = Y.Scope[w0](i, H, p);
        }
        t.CLog(w0 + "(" + b1(i) + ") " + k0(I0) + s0("RiWe::\uFF0C\u672A\u914D\u7F6E {1} \u65F6\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u81EA\u52A8\u542F\u7528\u56DE\u58F0\u6D88\u9664\uFF0C\u79FB\u52A8\u7AEF\u672A\u7981\u7528\u56DE\u58F0\u6D88\u9664\u65F6\u53EF\u80FD\u4F1A\u964D\u4F4E\u7CFB\u7EDF\u64AD\u653E\u97F3\u91CF\uFF08\u5173\u95ED\u5F55\u97F3\u540E\u53EF\u6062\u590D\uFF09\u548C\u4EC5\u63D0\u4F9B16k\u91C7\u6837\u7387\u7684\u97F3\u9891\u6D41\uFF08\u4E0D\u9700\u8981\u56DE\u58F0\u6D88\u9664\u65F6\u53EF\u660E\u786E\u914D\u7F6E\u6210\u7981\u7528\u6765\u83B7\u5F9748k\u9AD8\u97F3\u8D28\u7684\u6D41\uFF09\uFF0C\u8BF7\u53C2\u9605\u6587\u6863\u4E2D{2}\u914D\u7F6E", 0, w, V) + "(" + L0 + ") LM:" + W + " UA:" + navigator.userAgent), h && h.then && h.then(H)[z](p);
      };
      K();
    }, close: function(S) {
      S = S || J;
      var A = this, t = A._streamStore();
      A._stop();
      var I = " stream:" + A._streamTag, X = t.Sync;
      if (A._O = 0, A._O_ != X.O) {
        A.CLog(s0("hWVz::close\u88AB\u5FFD\u7565\uFF08\u56E0\u4E3A\u540C\u65F6open\u4E86\u591A\u4E2Arec\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u771F\u6B63close\uFF09") + I, 3), S();
        return;
      }
      X.C++, h0(t), A.CLog("close," + I), S();
    }, mock: function(S, A) {
      var t = this;
      return t._stop(), t.isMock = 1, t.mockEnvInfo = null, t.buffers = [S], t.recSize = S.length, t._setSrcSR(A), t._streamTag = "mock", t;
    }, _setSrcSR: function(S) {
      var A = this, t = A.set, I = t[B0];
      I > S ? t[B0] = S : I = 0, A[j0] = S, A.CLog(j0 + ": " + S + " set." + B0 + ": " + t[B0] + (I ? " " + s0("UHvm::\u5FFD\u7565") + ": " + I : ""), I ? 3 : 0);
    }, envCheck: function(S) {
      var A, t = this, I = t.set, X = "CPU_BE";
      if (!A && !Y[X] && typeof Int8Array == "function" && !new Int8Array(new Int32Array([1]).buffer)[0] && (N1(X), A = s0("Essp::\u4E0D\u652F\u6301{1}\u67B6\u6784", 0, X)), !A) {
        var $ = I.type, Q = t[$ + "_envCheck"];
        I.takeoffEncodeChunk && (Q ? S.canProcess || (A = s0("7uMV::{1}\u73AF\u5883\u4E0D\u652F\u6301\u5B9E\u65F6\u5904\u7406", 0, S.envName)) : A = s0("2XBl::{1}\u7C7B\u578B\u4E0D\u652F\u6301\u8BBE\u7F6EtakeoffEncodeChunk", 0, $) + (t[$] ? "" : s0("LG7e::(\u672A\u52A0\u8F7D\u7F16\u7801\u5668)"))), !A && Q && (A = t[$ + "_envCheck"](S, I));
      }
      return A || "";
    }, envStart: function(S, A) {
      var t = this, I = t.set;
      if (t.isMock = S ? 1 : 0, t.mockEnvInfo = S, t.buffers = [], t.recSize = 0, S && (t._streamTag = "env$" + S.envName), t.state = 1, t.envInLast = 0, t.envInFirst = 0, t.envInFix = 0, t.envInFixTs = [], t._setSrcSR(A), t.engineCtx = 0, t[I.type + "_start"]) {
        var X = t.engineCtx = t[I.type + "_start"](I);
        X && (X.pcmDatas = [], X.pcmSize = 0);
      }
    }, envResume: function() {
      this.envInFixTs = [];
    }, envIn: function(S, A) {
      var t = this, I = t.set, X = t.engineCtx;
      if (t.state != 1) {
        t.state || t.CLog("envIn at state=0", 3);
        return;
      }
      var $ = t[j0], Q = S.length, v0 = Y.PowerLevel(A, Q), f0 = t.buffers, u0 = f0.length;
      f0.push(S);
      var i0 = f0, J0 = u0, y0 = Date.now(), I0 = Math.round(Q / $ * 1e3);
      t.envInLast = y0, t.buffers.length == 1 && (t.envInFirst = y0 - I0);
      var x0 = t.envInFixTs;
      x0.splice(0, 0, { t: y0, d: I0 });
      for (var q0 = y0, u = 0, k = 0; k < x0.length; k++) {
        var H = x0[k];
        if (y0 - H.t > 3e3) {
          x0.length = k;
          break;
        }
        q0 = H.t, u += H.d;
      }
      var p = x0[1], U = y0 - q0, m = U - u;
      if (m > U / 3 && (p && U > 1e3 || x0.length >= 6)) {
        var C = y0 - p.t - I0;
        if (C > I0 / 5) {
          var K = !I.disableEnvInFix;
          if (t.CLog("[" + y0 + "]" + f1.get(s0(K ? "4Kfd::\u8865\u507F{1}ms" : "bM5i::\u672A\u8865\u507F{1}ms", 1), [C]), 3), t.envInFix += C, K) {
            var M = new Int16Array(C * $ / 1e3);
            Q += M.length, f0.push(M);
          }
        }
      }
      var V = t.recSize, d = Q, g = V + d;
      if (t.recSize = g, X) {
        var E = Y.SampleData(f0, $, I[B0], X.chunkInfo);
        X.chunkInfo = E, V = X.pcmSize, d = E.data.length, g = V + d, X.pcmSize = g, f0 = X.pcmDatas, u0 = f0.length, f0.push(E.data), $ = E[B0];
      }
      var w = Math.round(g / $ * 1e3), e = f0.length, i = i0.length, h = function() {
        for (var s = T ? 0 : -d, x = f0[0] == null, r = u0; r < e; r++) {
          var L = f0[r];
          L == null ? x = 1 : (s += L.length, X && L.length && t[I.type + "_encode"](X, L));
        }
        if (x && X) {
          var r = J0;
          for (i0[0] && (r = 0); r < i; r++)
            i0[r] = null;
        }
        x && (s = T ? d : 0, f0[0] = null), X ? X.pcmSize += s : t.recSize += s;
      }, T = 0, c = "rec.set.onProcess";
      try {
        T = I.onProcess(f0, v0, w, $, u0, h), T = T === true;
      } catch (s) {
        console.error(c + s0("gFUF::\u56DE\u8C03\u51FA\u9519\u662F\u4E0D\u5141\u8BB8\u7684\uFF0C\u9700\u4FDD\u8BC1\u4E0D\u4F1A\u629B\u5F02\u5E38"), s);
      }
      var l = Date.now() - y0;
      if (l > 10 && t.envInFirst - y0 > 1e3 && t.CLog(c + s0("2ghS::\u4F4E\u6027\u80FD\uFF0C\u8017\u65F6{1}ms", 0, l), 3), T) {
        for (var v = 0, k = u0; k < e; k++)
          f0[k] == null ? v = 1 : f0[k] = new Int16Array(0);
        v ? t.CLog(s0("ufqH::\u672A\u8FDB\u5165\u5F02\u6B65\u524D\u4E0D\u80FD\u6E05\u9664buffers"), 3) : X ? X.pcmSize -= d : t.recSize -= d;
      } else
        h();
    }, start: function() {
      var S = this, A = 1;
      if (S.set.sourceStream ? S.Stream || (A = 0) : Y.IsOpen() || (A = 0), !A) {
        S.CLog(s0("6WmN::start\u5931\u8D25\uFF1A\u672Aopen"), 1);
        return;
      }
      var t = S._streamCtx();
      if (S.CLog(s0("kLDN::start \u5F00\u59CB\u5F55\u97F3\uFF0C") + k0(t) + " stream:" + S._streamTag), S._stop(), S.envStart(null, t[B0]), S.state = 3, S._SO && S._SO + 1 != S._S) {
        S.CLog(s0("Bp2y::start\u88AB\u4E2D\u65AD"), 3);
        return;
      }
      S._SO = 0;
      var I = function() {
        S.state == 3 && (S.state = 1, S.resume());
      }, X = "AudioContext resume: ", $ = S._streamGet();
      $._call[S.id] = function() {
        S.CLog(X + t.state + "|stream ok"), I();
      }, j(t, function(Q) {
        return Q && S.CLog(X + "wait..."), S.state == 3;
      }, function(Q) {
        Q && S.CLog(X + t.state), I();
      }, function(Q) {
        S.CLog(X + t.state + s0("upkE::\uFF0C\u53EF\u80FD\u65E0\u6CD5\u5F55\u97F3\uFF1A") + Q, 1), I();
      });
    }, pause: function() {
      var S = this, A = S._streamGet();
      S.state && (S.state = 2, S.CLog("pause"), A && delete A._call[S.id]);
    }, resume: function() {
      var S = this, A = S._streamGet(), t = "resume", I = t + "(wait ctx)";
      if (S.state == 3)
        S.CLog(I);
      else if (S.state) {
        S.state = 1, S.CLog(t), S.envResume(), A && (A._call[S.id] = function($, Q) {
          S.state == 1 && S.envIn($, Q);
        }, W0(A));
        var X = S._streamCtx();
        X && j(X, function($) {
          return $ && S.CLog(I + "..."), S.state == 1;
        }, function($) {
          $ && S.CLog(I + X.state), W0(A);
        }, function($) {
          S.CLog(I + X.state + "[err]" + $, 1);
        });
      }
    }, _stop: function(S) {
      var A = this, t = A.set;
      A.isMock || A._S++, A.state && (A.pause(), A.state = 0), !S && A[t.type + "_stop"] && (A[t.type + "_stop"](A.engineCtx), A.engineCtx = 0);
    }, stop: function(S, A, t) {
      var I = this, X = I.set, $, Q = I.envInLast - I.envInFirst, v0 = Q && I.buffers.length;
      I.CLog(s0("Xq4s::stop \u548Cstart\u65F6\u5DEE:") + (Q ? Q + "ms " + s0("3CQP::\u8865\u507F:") + I.envInFix + "ms envIn:" + v0 + " fps:" + (v0 / Q * 1e3).toFixed(1) : "-") + " stream:" + I._streamTag + " (" + L0 + ") LM:" + W);
      var f0 = function() {
        I._stop(), t && I.close();
      }, u0 = function(H) {
        I.CLog(s0("u8JG::\u7ED3\u675F\u5F55\u97F3\u5931\u8D25\uFF1A") + H, 1), A && A(H), f0();
      }, i0 = function(H, p, U) {
        var m = "blob", C = "arraybuffer", K = "dataType", M = "DefaultDataType", V = I[K] || Y[M] || m, d = K + "=" + V, g = H instanceof ArrayBuffer, E = 0, w = g ? H.byteLength : H.size;
        if (V == C ? g || (E = 1) : V == m ? typeof Blob != "function" ? E = s0.G("NonBrowser-1", [d]) + s0("1skY::\uFF0C\u8BF7\u8BBE\u7F6E{1}", 0, d0 + "." + M + '="' + C + '"') : (g && (H = new Blob([H], { type: p })), H instanceof Blob || (E = 1), p = H.type || p) : E = s0.G("NotSupport-1", [d]), I.CLog(s0("Wv7l::\u7ED3\u675F\u5F55\u97F3 \u7F16\u7801\u82B1{1}ms \u97F3\u9891\u65F6\u957F{2}ms \u6587\u4EF6\u5927\u5C0F{3}b", 0, Date.now() - $, U, w) + " " + d + "," + p), E) {
          u0(E != 1 ? E : s0("Vkbd::{1}\u7F16\u7801\u5668\u8FD4\u56DE\u7684\u4E0D\u662F{2}", 0, X.type, V) + ", " + d);
          return;
        }
        if (X.takeoffEncodeChunk)
          I.CLog(s0("QWnr::\u542F\u7528takeoffEncodeChunk\u540Estop\u8FD4\u56DE\u7684blob\u957F\u5EA6\u4E3A0\u4E0D\u63D0\u4F9B\u97F3\u9891\u6570\u636E"), 3);
        else if (w < Math.max(50, U / 5)) {
          u0(s0("Sz2H::\u751F\u6210\u7684{1}\u65E0\u6548", 0, X.type));
          return;
        }
        S && S(H, U, p), f0();
      };
      if (!I.isMock) {
        var J0 = I.state == 3;
        if (!I.state || J0) {
          u0(s0("wf9t::\u672A\u5F00\u59CB\u5F55\u97F3") + (J0 ? s0("Dl2c::\uFF0C\u5F00\u59CB\u5F55\u97F3\u524D\u65E0\u7528\u6237\u4EA4\u4E92\u5BFC\u81F4AudioContext\u672A\u8FD0\u884C") : ""));
          return;
        }
      }
      I._stop(true);
      var y0 = I.recSize;
      if (!y0) {
        u0(s0("Ltz3::\u672A\u91C7\u96C6\u5230\u5F55\u97F3"));
        return;
      }
      if (!I[X.type]) {
        u0(s0("xGuI::\u672A\u52A0\u8F7D{1}\u7F16\u7801\u5668\uFF0C\u8BF7\u5C1D\u8BD5\u5230{2}\u7684src/engine\u5185\u627E\u5230{1}\u7684\u7F16\u7801\u5668\u5E76\u52A0\u8F7D", 0, X.type, d0));
        return;
      }
      if (I.isMock) {
        var I0 = I.envCheck(I.mockEnvInfo || { envName: "mock", canProcess: false });
        if (I0) {
          u0(s0("AxOH::\u5F55\u97F3\u9519\u8BEF\uFF1A") + I0);
          return;
        }
      }
      var x0 = I.engineCtx;
      if (I[X.type + "_complete"] && x0) {
        var k = Math.round(x0.pcmSize / X[B0] * 1e3);
        $ = Date.now(), I[X.type + "_complete"](x0, function(p, U) {
          i0(p, U, k);
        }, u0);
        return;
      }
      if ($ = Date.now(), !I.buffers[0]) {
        u0(s0("xkKd::\u97F3\u9891buffers\u88AB\u91CA\u653E"));
        return;
      }
      var q0 = Y.SampleData(I.buffers, I[j0], X[B0]);
      X[B0] = q0[B0];
      var u = q0.data, k = Math.round(u.length / X[B0] * 1e3);
      I.CLog(s0("CxeT::\u91C7\u6837:{1} \u82B1:{2}ms", 0, y0 + "->" + u.length, Date.now() - $)), setTimeout(function() {
        $ = Date.now(), I[X.type](u, function(H, p) {
          i0(H, p, k);
        }, function(H) {
          u0(H);
        });
      });
    } };
    var T1 = function(S, A) {
      A.pos || (A.pos = [0], A.tracks = {}, A.bytes = []);
      var t = A.tracks, I = [A.pos[0]], X = function() {
        A.pos[0] = I[0];
      }, $ = A.bytes.length, Q = new Uint8Array($ + S.length);
      if (Q.set(A.bytes), Q.set(S, $), A.bytes = Q, !A._ht) {
        if (z0(Q, I), A1(Q, I), !d1(z0(Q, I), [24, 83, 128, 103]))
          return;
        for (z0(Q, I); I[0] < Q.length; ) {
          var v0 = z0(Q, I), f0 = A1(Q, I), u0 = [0], i0 = 0;
          if (!f0)
            return;
          if (d1(v0, [22, 84, 174, 107])) {
            for (; u0[0] < f0.length; ) {
              var J0 = z0(f0, u0), y0 = A1(f0, u0), I0 = [0], x0 = { channels: 0, sampleRate: 0 };
              if (d1(J0, [174]))
                for (; I0[0] < y0.length; ) {
                  var q0 = z0(y0, I0), u = A1(y0, I0), k = [0];
                  if (d1(q0, [215])) {
                    var H = Q0(u);
                    x0.number = H, t[H] = x0;
                  } else if (d1(q0, [131])) {
                    var H = Q0(u);
                    H == 1 ? x0.type = "video" : H == 2 ? (x0.type = "audio", i0 || (A.track0 = x0), x0.idx = i0++) : x0.type = "Type-" + H;
                  } else if (d1(q0, [134])) {
                    for (var p = "", U = 0; U < u.length; U++)
                      p += String.fromCharCode(u[U]);
                    x0.codec = p;
                  } else if (d1(q0, [225]))
                    for (; k[0] < u.length; ) {
                      var m = z0(u, k), C = A1(u, k);
                      if (d1(m, [181])) {
                        var H = 0, K = new Uint8Array(C.reverse()).buffer;
                        C.length == 4 ? H = new Float32Array(K)[0] : C.length == 8 ? H = new Float64Array(K)[0] : D0("WebM Track !Float", 1, C), x0[B0] = Math.round(H);
                      } else
                        d1(m, [98, 100]) ? x0.bitDepth = Q0(C) : d1(m, [159]) && (x0.channels = Q0(C));
                    }
                }
            }
            A._ht = 1, D0("WebM Tracks", t), X();
            break;
          }
        }
      }
      var M = A.track0;
      if (M) {
        var V = M[B0];
        if (A.webmSR = V, M.bitDepth == 16 && /FLOAT/i.test(M.codec) && (M.bitDepth = 32, D0("WebM 16->32 bit", 3)), V < 8e3 || M.bitDepth != 32 || M.channels < 1 || !/(\b|_)PCM\b/i.test(M.codec))
          return A.bytes = [], A.bad || D0("WebM Track Unexpected", 3, A), A.bad = 1, -1;
        for (var d = [], g = 0; I[0] < Q.length; ) {
          var J0 = z0(Q, I), y0 = A1(Q, I);
          if (!y0)
            break;
          if (d1(J0, [163])) {
            var E = y0[0] & 15, x0 = t[E];
            if (x0) {
              if (x0.idx === 0) {
                for (var w = new Uint8Array(y0.length - 4), U = 4; U < y0.length; U++)
                  w[U - 4] = y0[U];
                d.push(w), g += w.length;
              }
            } else
              return D0("WebM !Track" + E, 1, t), -1;
          }
          X();
        }
        if (g) {
          var e = new Uint8Array(Q.length - A.pos[0]);
          e.set(Q.subarray(A.pos[0])), A.bytes = e, A.pos[0] = 0;
          for (var w = new Uint8Array(g), U = 0, i = 0; U < d.length; U++)
            w.set(d[U], i), i += d[U].length;
          var K = new Float32Array(w.buffer);
          if (M.channels > 1) {
            for (var h = [], U = 0; U < K.length; )
              h.push(K[U]), U += M.channels;
            K = new Float32Array(h);
          }
          return K;
        }
      }
    }, d1 = function(S, A) {
      if (!S || S.length != A.length)
        return false;
      if (S.length == 1)
        return S[0] == A[0];
      for (var t = 0; t < S.length; t++)
        if (S[t] != A[t])
          return false;
      return true;
    }, Q0 = function(S) {
      for (var A = "", t = 0; t < S.length; t++) {
        var I = S[t];
        A += (I < 16 ? "0" : "") + I.toString(16);
      }
      return parseInt(A, 16) || 0;
    }, z0 = function(S, A, t) {
      var I = A[0];
      if (!(I >= S.length)) {
        var X = S[I], $ = ("0000000" + X.toString(2)).substr(-8), Q = /^(0*1)(\d*)$/.exec($);
        if (Q) {
          var v0 = Q[1].length, f0 = [];
          if (!(I + v0 > S.length)) {
            for (var u0 = 0; u0 < v0; u0++)
              f0[u0] = S[I], I++;
            return t && (f0[0] = parseInt(Q[2] || "0", 2)), A[0] = I, f0;
          }
        }
      }
    }, A1 = function(S, A) {
      var t = z0(S, A, 1);
      if (t) {
        var I = Q0(t), X = A[0], $ = [];
        if (I < 2147483647) {
          if (X + I > S.length)
            return;
          for (var Q = 0; Q < I; Q++)
            $[Q] = S[X], X++;
        }
        return A[0] = X, $;
      }
    }, f1 = Y.i18n = { lang: "zh-CN", alias: { "zh-CN": "zh", "en-US": "en" }, locales: {}, data: {}, put: function(S, A) {
      var t = d0 + ".i18n.put: ", I = S.overwrite;
      I = I == null || I;
      var X = S.lang;
      if (X = f1.alias[X] || X, !X)
        throw new Error(t + "set.lang?");
      var $ = f1.locales[X];
      $ || ($ = {}, f1.locales[X] = $);
      for (var Q = /^([\w\-]+):/, v0, f0 = 0; f0 < A.length; f0++) {
        var i0 = A[f0];
        if (v0 = Q.exec(i0), !v0) {
          D0(t + "'key:'? " + i0, 3, S);
          continue;
        }
        var u0 = v0[1], i0 = i0.substr(u0.length + 1);
        !I && $[u0] || ($[u0] = i0);
      }
    }, get: function() {
      return f1.v_G.apply(null, arguments);
    }, v_G: function(S, A, t) {
      A = A || [], t = t || f1.lang, t = f1.alias[t] || t;
      var I = f1.locales[t], X = I && I[S] || "";
      return !X && t != "zh" ? t == "en" ? f1.v_G(S, A, "zh") : f1.v_G(S, A, "en") : (f1.lastLang = t, X == "=Empty" ? "" : X.replace(/\{(\d+)(\!?)\}/g, function($, Q, v0) {
        return Q = +Q || 0, $ = A[Q - 1], (Q < 1 || Q > A.length) && ($ = "{?}", D0("i18n[" + S + "] no {" + Q + "}: " + X, 3)), v0 ? "" : $;
      }));
    }, $T: function() {
      return f1.v_T.apply(null, arguments);
    }, v_T: function() {
      for (var S = arguments, A = "", t = [], I = 0, X = d0 + ".i18n.$T:", $ = /^([\w\-]*):/, Q, v0 = 0; v0 < S.length; v0++) {
        var f0 = S[v0];
        if (v0 == 0) {
          if (Q = $.exec(f0), A = Q && Q[1], !A)
            throw new Error(X + "0 'key:'?");
          f0 = f0.substr(A.length + 1);
        }
        if (I === -1)
          t.push(f0);
        else {
          if (I)
            throw new Error(X + " bad args");
          if (f0 === 0)
            I = -1;
          else if (Z0(f0)) {
            if (f0 < 1)
              throw new Error(X + " bad args");
            I = f0;
          } else {
            var u0 = v0 == 1 ? "en" : v0 ? "" : "zh";
            if (Q = $.exec(f0), Q && (u0 = Q[1] || u0, f0 = f0.substr(Q[1].length + 1)), !Q || !u0)
              throw new Error(X + v0 + " 'lang:'?");
            f1.put({ lang: u0, overwrite: false }, [A + ":" + f0]);
          }
        }
      }
      return A ? I > 0 ? A : f1.v_G(A, t) : "";
    } }, s0 = f1.$T;
    s0.G = f1.get, s0("NonBrowser-1::\u975E\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u4E0D\u652F\u6301{1}", 1), s0("IllegalArgs-1::\u53C2\u6570\u9519\u8BEF\uFF1A{1}", 1), s0("NeedImport-2::\u8C03\u7528{1}\u9700\u8981\u5148\u5BFC\u5165{2}", 2), s0("NotSupport-1::\u4E0D\u652F\u6301\uFF1A{1}", 1), Y.TrafficImgUrl = "//ia.51.la/go1?id=20469973&pvFlag=1";
    var N1 = Y.Traffic = function(S) {
      if (g0) {
        S = S ? "/" + d0 + "/Report/" + S : "";
        var A = Y.TrafficImgUrl;
        if (A) {
          var t = Y.Traffic, I = /^(https?:..[^\/#]*\/?)[^#]*/i.exec(location.href) || [], X = I[1] || "http://file/", $ = (I[0] || X) + S;
          if (A.indexOf("//") == 0 && (/^https:/i.test($) ? A = "https:" + A : A = "http:" + A), S && (A = A + "&cu=" + encodeURIComponent(X + S)), !t[$]) {
            t[$] = 1;
            var Q = new Image();
            Q.src = A, D0("Traffic Analysis Image: " + (S || d0 + ".TrafficImgUrl=" + Y.TrafficImgUrl));
          }
        }
      }
    };
    a0 && (D0(s0("8HO5::\u8986\u76D6\u5BFC\u5165{1}", 0, d0), 1), a0.Destroy()), v1[d0] = Y;
  });
})(re);
var ne = re.exports;
const _e = ie(ne), ve = le({ __proto__: null, default: _e }, [ne]);
(function(N0) {
  var v1 = typeof window == "object" && !!window.document, g0 = v1 ? window : Object, J = g0.Recorder, Z0 = J.i18n;
  N0(J, Z0, Z0.$T, v1);
})(function(N0, v1, g0, J) {
  var Z0 = "48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000", b1 = "8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 192, 224, 256, 320";
  N0.prototype.enc_mp3 = { stable: true, takeEC: "full", getTestMsg: function() {
    return g0("Zm7L::\u91C7\u6837\u7387\u8303\u56F4\uFF1A{1}\uFF1B\u6BD4\u7279\u7387\u8303\u56F4\uFF1A{2}\uFF08\u4E0D\u540C\u6BD4\u7279\u7387\u652F\u6301\u7684\u91C7\u6837\u7387\u8303\u56F4\u4E0D\u540C\uFF0C\u5C0F\u4E8E32kbps\u65F6\u91C7\u6837\u7387\u9700\u5C0F\u4E8E32000\uFF09", 0, Z0, b1);
  } };
  var Y = function(z) {
    var a0 = z.bitRate, m0 = z.sampleRate, E0 = m0;
    if ((" " + b1 + ",").indexOf(" " + a0 + ",") == -1 && N0.CLog(g0("eGB9::{1}\u4E0D\u5728mp3\u652F\u6301\u7684\u53D6\u503C\u8303\u56F4\uFF1A{2}", 0, "bitRate=" + a0, b1), 3), (" " + Z0 + ",").indexOf(" " + m0 + ",") == -1) {
      for (var j = Z0.split(", "), S0 = [], k0 = 0; k0 < j.length; k0++)
        S0.push({ v: +j[k0], s: Math.abs(j[k0] - m0) });
      S0.sort(function(O0, H0) {
        return O0.s - H0.s;
      }), E0 = S0[0].v, z.sampleRate = E0, N0.CLog(g0("zLTa::sampleRate\u5DF2\u66F4\u65B0\u4E3A{1}\uFF0C\u56E0\u4E3A{2}\u4E0D\u5728mp3\u652F\u6301\u7684\u53D6\u503C\u8303\u56F4\uFF1A{3}", 0, E0, m0, Z0), 3);
    }
  }, W = function() {
    return g0.G("NeedImport-2", ["mp3.js", "src/engine/mp3-engine.js"]);
  }, L0 = J && typeof Worker == "function";
  N0.prototype.mp3 = function(z, a0, m0) {
    var E0 = this, j = E0.set, S0 = z.length;
    if (!N0.lamejs) {
      m0(W());
      return;
    }
    if (L0) {
      var k0 = E0.mp3_start(j);
      if (k0) {
        if (k0.isW) {
          E0.mp3_encode(k0, z), E0.mp3_complete(k0, a0, m0, 1);
          return;
        }
        E0.mp3_stop(k0);
      }
    }
    Y(j);
    var O0 = new N0.lamejs.Mp3Encoder(1, j.sampleRate, j.bitRate), H0 = 57600, s1 = new Int8Array(5e5), W0 = 0, _1 = 0, P0 = 0, h0 = function() {
      try {
        if (_1 < S0)
          var D = O0.encodeBuffer(z.subarray(_1, _1 + H0));
        else {
          P0 = 1;
          var D = O0.flush();
        }
      } catch (c1) {
        if (console.error(c1), !P0)
          try {
            O0.flush();
          } catch (T1) {
            console.error(T1);
          }
        m0("MP3 Encoder: " + c1.message);
        return;
      }
      var o1 = D.length;
      if (o1 > 0) {
        if (W0 + o1 > s1.length) {
          var D0 = new Int8Array(s1.length + Math.max(5e5, o1));
          D0.set(s1.subarray(0, W0)), s1 = D0;
        }
        s1.set(D, W0), W0 += o1;
      }
      if (_1 < S0)
        _1 += H0, setTimeout(h0);
      else {
        var V0 = [s1.buffer.slice(0, W0)], w1 = B0.fn(V0, W0, S0, j.sampleRate);
        F0(w1, j), a0(V0[0] || new ArrayBuffer(0), "audio/mp3");
      }
    };
    h0();
  };
  var d0;
  N0.BindDestroy("mp3Worker", function() {
    d0 && (N0.CLog("mp3Worker Destroy"), d0.terminate(), d0 = null);
  }), N0.prototype.mp3_envCheck = function(z, a0) {
    var m0 = "";
    return a0.takeoffEncodeChunk && (j0() || (m0 = g0("yhUs::\u5F53\u524D\u6D4F\u89C8\u5668\u7248\u672C\u592A\u4F4E\uFF0C\u65E0\u6CD5\u5B9E\u65F6\u5904\u7406"))), !m0 && !N0.lamejs && (m0 = W()), m0;
  }, N0.prototype.mp3_start = function(z) {
    return j0(z);
  };
  var w0 = { id: 0 }, j0 = function(z, a0) {
    var m0 = function(P0) {
      var h0 = P0.data, D = S0.wkScope.wk_ctxs, o1 = S0.wkScope.wk_lame, D0 = S0.wkScope.wk_mp3TrimFix, V0 = D[h0.id];
      if (h0.action == "init")
        D[h0.id] = { sampleRate: h0.sampleRate, bitRate: h0.bitRate, takeoff: h0.takeoff, pcmSize: 0, memory: new Int8Array(5e5), mOffset: 0, encObj: new o1.Mp3Encoder(1, h0.sampleRate, h0.bitRate) };
      else if (!V0)
        return;
      var w1 = function(Q0) {
        var z0 = Q0.length;
        if (V0.mOffset + z0 > V0.memory.length) {
          var A1 = new Int8Array(V0.memory.length + Math.max(5e5, z0));
          A1.set(V0.memory.subarray(0, V0.mOffset)), V0.memory = A1;
        }
        V0.memory.set(Q0, V0.mOffset), V0.mOffset += z0;
      };
      switch (h0.action) {
        case "stop":
          if (!V0.isCp)
            try {
              V0.encObj.flush();
            } catch (Q0) {
              console.error(Q0);
            }
          V0.encObj = null, delete D[h0.id];
          break;
        case "encode":
          if (V0.isCp)
            break;
          V0.pcmSize += h0.pcm.length;
          try {
            var c1 = V0.encObj.encodeBuffer(h0.pcm);
          } catch (Q0) {
            V0.err = Q0, console.error(Q0);
          }
          c1 && c1.length > 0 && (V0.takeoff ? k0.onmessage({ action: "takeoff", id: h0.id, chunk: c1 }) : w1(c1));
          break;
        case "complete":
          V0.isCp = 1;
          try {
            var c1 = V0.encObj.flush();
          } catch (Q0) {
            V0.err = Q0, console.error(Q0);
          }
          if (c1 && c1.length > 0 && (V0.takeoff ? k0.onmessage({ action: "takeoff", id: h0.id, chunk: c1 }) : w1(c1)), V0.err) {
            k0.onmessage({ action: h0.action, id: h0.id, err: "MP3 Encoder: " + V0.err.message });
            break;
          }
          var T1 = [V0.memory.buffer.slice(0, V0.mOffset)], d1 = D0.fn(T1, V0.mOffset, V0.pcmSize, V0.sampleRate);
          k0.onmessage({ action: h0.action, id: h0.id, blob: T1[0] || new ArrayBuffer(0), meta: d1 });
          break;
      }
    }, E0 = function(P0) {
      k0.onmessage = function(h0) {
        var D = h0;
        P0 && (D = h0.data);
        var o1 = w0[D.id];
        o1 && (D.action == "takeoff" ? o1.set.takeoffEncodeChunk(new Uint8Array(D.chunk.buffer)) : (o1.call && o1.call(D), o1.call = null));
      };
    }, j = function() {
      var P0 = { worker: k0, set: z };
      return z ? (P0.id = ++w0.id, w0[P0.id] = P0, Y(z), k0.postMessage({ action: "init", id: P0.id, sampleRate: z.sampleRate, bitRate: z.bitRate, takeoff: !!z.takeoffEncodeChunk, x: new Int16Array(5) })) : k0.postMessage({ x: new Int16Array(5) }), P0;
    }, S0, k0 = d0;
    if (a0 || !L0)
      return N0.CLog(g0("k9PT::\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Web Worker\uFF0Cmp3\u5B9E\u65F6\u7F16\u7801\u5668\u8FD0\u884C\u5728\u4E3B\u7EBF\u7A0B\u4E2D"), 3), k0 = { postMessage: function(P0) {
        m0({ data: P0 });
      } }, S0 = { wkScope: { wk_ctxs: {}, wk_lame: N0.lamejs, wk_mp3TrimFix: B0 } }, E0(), j();
    try {
      if (!k0) {
        var O0 = (m0 + "").replace(/[\w\$]+\.onmessage/g, "self.postMessage");
        O0 = O0.replace(/[\w\$]+\.wkScope/g, "wkScope");
        var H0 = ");wk_lame();self.onmessage=" + O0;
        H0 += ";var wkScope={ wk_ctxs:{},wk_lame:wk_lame", H0 += ",wk_mp3TrimFix:{rm:" + B0.rm + ",fn:" + B0.fn + "} }";
        var s1 = N0.lamejs.toString(), W0 = (window.URL || webkitURL).createObjectURL(new Blob(["var wk_lame=(", s1, H0], { type: "text/javascript" }));
        k0 = new Worker(W0), setTimeout(function() {
          (window.URL || webkitURL).revokeObjectURL(W0);
        }, 1e4), E0(1);
      }
      var _1 = j();
      return _1.isW = 1, d0 = k0, _1;
    } catch (P0) {
      return k0 && k0.terminate(), console.error(P0), j0(z, 1);
    }
  };
  N0.prototype.mp3_stop = function(z) {
    if (z && z.worker) {
      z.worker.postMessage({ action: "stop", id: z.id }), z.worker = null, delete w0[z.id];
      var a0 = -1;
      for (var m0 in w0)
        a0++;
      a0 && N0.CLog(g0("fT6M::mp3 worker\u5269{1}\u4E2A\u672Astop", 0, a0), 3);
    }
  }, N0.prototype.mp3_encode = function(z, a0) {
    z && z.worker && z.worker.postMessage({ action: "encode", id: z.id, pcm: a0 });
  }, N0.prototype.mp3_complete = function(z, a0, m0, E0) {
    var j = this;
    z && z.worker ? (z.call = function(S0) {
      E0 && j.mp3_stop(z), S0.err ? m0(S0.err) : (F0(S0.meta, z.set), a0(S0.blob, "audio/mp3"));
    }, z.worker.postMessage({ action: "complete", id: z.id })) : m0(g0("mPxH::mp3\u7F16\u7801\u5668\u672Astart"));
  }, N0.mp3ReadMeta = function(z, a0) {
    var m0 = typeof window < "u" && window.parseInt || typeof self < "u" && self.parseInt || parseInt, E0 = new Uint8Array(z[0] || []);
    if (E0.length < 4)
      return null;
    var j = function(Q0, z0) {
      return ("0000000" + ((z0 || E0)[Q0] || 0).toString(2)).substr(-8);
    }, S0 = j(0) + j(1), k0 = j(2) + j(3);
    if (!/^1{11}/.test(S0))
      return null;
    var O0 = { "00": 2.5, 10: 2, 11: 1 }[S0.substr(11, 2)], H0 = { "01": 3 }[S0.substr(13, 2)], s1 = { 1: [44100, 48e3, 32e3], 2: [22050, 24e3, 16e3], "2.5": [11025, 12e3, 8e3] }[O0];
    s1 && (s1 = s1[m0(k0.substr(4, 2), 2)]);
    var W0 = [[0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320]][O0 == 1 ? 1 : 0][m0(k0.substr(0, 4), 2)];
    if (!O0 || !H0 || !W0 || !s1)
      return null;
    for (var _1 = Math.round(a0 * 8 / W0), P0 = H0 == 1 ? 384 : H0 == 2 || O0 == 1 ? 1152 : 576, h0 = P0 / s1 * 1e3, D = Math.floor(P0 * W0 / 8 / s1 * 1e3), o1 = 0, D0 = 0, V0 = 0; V0 < z.length; V0++) {
      var w1 = z[V0];
      if (D0 += w1.byteLength, D0 >= D + 3) {
        var c1 = new Uint8Array(w1), T1 = w1.byteLength - (D0 - (D + 3) + 1), d1 = j(T1, c1);
        o1 = d1.charAt(6) == "1";
        break;
      }
    }
    return o1 && D++, { version: O0, layer: H0, sampleRate: s1, bitRate: W0, duration: _1, size: a0, hasPadding: o1, frameSize: D, frameDurationFloat: h0 };
  };
  var B0 = { rm: N0.mp3ReadMeta, fn: function(z, a0, m0, E0) {
    var j = this.rm(z, a0);
    if (!j)
      return { size: a0, err: "mp3 unknown format" };
    var S0 = Math.round(m0 / E0 * 1e3), k0 = Math.floor((j.duration - S0) / j.frameDurationFloat);
    if (k0 > 0) {
      var O0 = k0 * j.frameSize - (j.hasPadding ? 1 : 0);
      a0 -= O0;
      for (var H0 = 0, s1 = [], W0 = 0; W0 < z.length; W0++) {
        var _1 = z[W0];
        if (O0 <= 0)
          break;
        O0 >= _1.byteLength ? (O0 -= _1.byteLength, s1.push(_1), z.splice(W0, 1), W0--) : (z[W0] = _1.slice(O0), H0 = _1, O0 = 0);
      }
      var P0 = this.rm(z, a0);
      if (!P0) {
        H0 && (z[0] = H0);
        for (var W0 = 0; W0 < s1.length; W0++)
          z.splice(W0, 0, s1[W0]);
        j.err = "mp3 fix error: \u5DF2\u8FD8\u539F\uFF0C\u9519\u8BEF\u539F\u56E0\u4E0D\u660E";
      }
      var h0 = j.trimFix = {};
      h0.remove = k0, h0.removeDuration = Math.round(k0 * j.frameDurationFloat), h0.duration = Math.round(a0 * 8 / j.bitRate);
    }
    return j;
  } }, F0 = function(z, a0) {
    var m0 = "MP3 Info: ";
    (z.sampleRate && z.sampleRate != a0.sampleRate || z.bitRate && z.bitRate != a0.bitRate) && (N0.CLog(m0 + g0("uY9i::\u548C\u8BBE\u7F6E\u7684\u4E0D\u5339\u914D{1}\uFF0C\u5DF2\u66F4\u65B0\u6210{2}", 0, "set:" + a0.bitRate + "kbps " + a0.sampleRate + "hz", "set:" + z.bitRate + "kbps " + z.sampleRate + "hz"), 3, a0), a0.sampleRate = z.sampleRate, a0.bitRate = z.bitRate);
    var E0 = z.trimFix;
    E0 ? (m0 += g0("iMSm::Fix\u79FB\u9664{1}\u5E27", 0, E0.remove) + " " + E0.removeDuration + "ms -> " + E0.duration + "ms", E0.remove > 2 && (z.err = (z.err ? z.err + ", " : "") + g0("b9zm::\u79FB\u9664\u5E27\u6570\u8FC7\u591A"))) : m0 += (z.duration || "-") + "ms", z.err ? N0.CLog(m0, z.size ? 1 : 0, z.err, z) : N0.CLog(m0, z);
  };
});
const fe = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
(function(N0) {
  var v1 = typeof window == "object" && !!window.document, g0 = v1 ? window : Object, J = g0.Recorder;
  N0(J);
})(function(N0) {
  function v1() {
    var g0 = function(u) {
      return Math.log(u) / Math.log(10);
    }, J = function(u) {
      throw new Error("abort(" + u + ")");
    };
    function Z0(u) {
      return new Int8Array(u);
    }
    function b1(u) {
      return new Int16Array(u);
    }
    function Y(u) {
      return new Int32Array(u);
    }
    function W(u) {
      return new Float32Array(u);
    }
    function L0(u) {
      return new Float64Array(u);
    }
    function d0(u) {
      if (u.length == 1)
        return W(u[0]);
      var k = u[0];
      u = u.slice(1);
      for (var H = [], p = 0; p < k; p++)
        H.push(d0(u));
      return H;
    }
    function w0(u) {
      if (u.length == 1)
        return Y(u[0]);
      var k = u[0];
      u = u.slice(1);
      for (var H = [], p = 0; p < k; p++)
        H.push(w0(u));
      return H;
    }
    function j0(u) {
      if (u.length == 1)
        return b1(u[0]);
      var k = u[0];
      u = u.slice(1);
      for (var H = [], p = 0; p < k; p++)
        H.push(j0(u));
      return H;
    }
    function B0(u) {
      if (u.length == 1)
        return new Array(u[0]);
      var k = u[0];
      u = u.slice(1);
      for (var H = [], p = 0; p < k; p++)
        H.push(B0(u));
      return H;
    }
    var F0 = {};
    F0.fill = function(u, k, H, p) {
      if (arguments.length == 2)
        for (var U = 0; U < u.length; U++)
          u[U] = arguments[1];
      else
        for (var U = k; U < H; U++)
          u[U] = p;
    };
    var z = {};
    z.arraycopy = function(u, k, H, p, U) {
      for (var m = k + U; k < m; )
        H[p++] = u[k++];
    };
    var a0 = {};
    a0.SQRT2 = 1.4142135623730951, a0.FAST_LOG10 = function(u) {
      return g0(u);
    }, a0.FAST_LOG10_X = function(u, k) {
      return g0(u) * k;
    };
    function m0(u) {
      this.ordinal = u;
    }
    m0.short_block_allowed = new m0(0), m0.short_block_coupled = new m0(1), m0.short_block_dispensed = new m0(2), m0.short_block_forced = new m0(3);
    var E0 = {};
    E0.MAX_VALUE = 34028235e31;
    function j(u) {
      this.ordinal = u;
    }
    j.vbr_off = new j(0), j.vbr_mt = new j(1), j.vbr_rh = new j(2), j.vbr_abr = new j(3), j.vbr_mtrh = new j(4), j.vbr_default = j.vbr_mtrh;
    function S0(u) {
      var k = u;
      this.ordinal = function() {
        return k;
      };
    }
    S0.STEREO = new S0(0), S0.JOINT_STEREO = new S0(1), S0.DUAL_CHANNEL = new S0(2), S0.MONO = new S0(3), S0.NOT_SET = new S0(4);
    function k0() {
      var u = 3, k = 98, H = 4;
      this.getLameShortVersion = function() {
        return u + "." + k + "." + H;
      };
    }
    function O0() {
      var u = null;
      this.qupvt = null, this.setModules = function(_) {
        this.qupvt = _, u = _;
      };
      function k(_) {
        this.bits = 0 | _;
      }
      var H = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [1, 1], [1, 1], [1, 2], [2, 2], [2, 3], [2, 3], [3, 4], [3, 4], [3, 4], [4, 5], [4, 5], [4, 6], [5, 6], [5, 6], [5, 7], [6, 7], [6, 7]];
      function p(_, o, f, b, B, a) {
        var n = 0.5946 / o;
        for (_ = _ >> 1; _-- != 0; )
          B[a++] = n > f[b++] ? 0 : 1, B[a++] = n > f[b++] ? 0 : 1;
      }
      function U(_, o, f, b, B, a) {
        _ = _ >> 1;
        var n = _ % 2;
        for (_ = _ >> 1; _-- != 0; ) {
          var F, R, O, q, Z, e0, b0, A0;
          F = f[b++] * o, R = f[b++] * o, Z = 0 | F, O = f[b++] * o, e0 = 0 | R, q = f[b++] * o, b0 = 0 | O, F += u.adj43[Z], A0 = 0 | q, R += u.adj43[e0], B[a++] = 0 | F, O += u.adj43[b0], B[a++] = 0 | R, q += u.adj43[A0], B[a++] = 0 | O, B[a++] = 0 | q;
        }
        if (n != 0) {
          var F, R, Z, e0;
          F = f[b++] * o, R = f[b++] * o, Z = 0 | F, e0 = 0 | R, F += u.adj43[Z], R += u.adj43[e0], B[a++] = 0 | F, B[a++] = 0 | R;
        }
      }
      function m(_, o, f, b, B) {
        var a, n, F = 0, R, O = 0, q = 0, Z = 0, e0 = o, b0 = 0, A0 = e0, p0 = 0, n1 = _, i1 = 0;
        for (R = B != null && b.global_gain == B.global_gain, b.block_type == t.SHORT_TYPE ? n = 38 : n = 21, a = 0; a <= n; a++) {
          var $0 = -1;
          if ((R || b.block_type == t.NORM_TYPE) && ($0 = b.global_gain - (b.scalefac[a] + (b.preflag != 0 ? u.pretab[a] : 0) << b.scalefac_scale + 1) - b.subblock_gain[b.window[a]] * 8), R && B.step[a] == $0)
            O != 0 && (U(O, f, n1, i1, A0, p0), O = 0), q != 0 && J();
          else {
            var t1 = b.width[a];
            if (F + b.width[a] > b.max_nonzero_coeff) {
              var u1;
              u1 = b.max_nonzero_coeff - F + 1, F0.fill(o, b.max_nonzero_coeff, 576, 0), t1 = u1, t1 < 0 && (t1 = 0), a = n + 1;
            }
            if (O == 0 && q == 0 && (A0 = e0, p0 = b0, n1 = _, i1 = Z), B != null && B.sfb_count1 > 0 && a >= B.sfb_count1 && B.step[a] > 0 && $0 >= B.step[a] ? (O != 0 && (U(O, f, n1, i1, A0, p0), O = 0, A0 = e0, p0 = b0, n1 = _, i1 = Z), q += t1) : (q != 0 && (p(q, f, n1, i1, A0, p0), q = 0, A0 = e0, p0 = b0, n1 = _, i1 = Z), O += t1), t1 <= 0) {
              q != 0 && J(), O != 0 && J();
              break;
            }
          }
          a <= n && (b0 += b.width[a], Z += b.width[a], F += b.width[a]);
        }
        O != 0 && (U(O, f, n1, i1, A0, p0), O = 0), q != 0 && J();
      }
      function C(_, o, f) {
        var b = 0, B = 0;
        do {
          var a = _[o++], n = _[o++];
          b < a && (b = a), B < n && (B = n);
        } while (o < f);
        return b < B && (b = B), b;
      }
      function K(_, o, f, b, B, a) {
        var n = D.ht[b].xlen * 65536 + D.ht[B].xlen, F = 0, R;
        do {
          var O = _[o++], q = _[o++];
          O != 0 && (O > 14 && (O = 15, F += n), O *= 16), q != 0 && (q > 14 && (q = 15, F += n), O += q), F += D.largetbl[O];
        } while (o < f);
        return R = F & 65535, F >>= 16, F > R && (F = R, b = B), a.bits += F, b;
      }
      function M(_, o, f, b) {
        var B = 0, a = D.ht[1].hlen;
        do {
          var n = _[o + 0] * 2 + _[o + 1];
          o += 2, B += a[n];
        } while (o < f);
        return b.bits += B, 1;
      }
      function V(_, o, f, b, B) {
        var a = 0, n, F = D.ht[b].xlen, R;
        b == 2 ? R = D.table23 : R = D.table56;
        do {
          var O = _[o + 0] * F + _[o + 1];
          o += 2, a += R[O];
        } while (o < f);
        return n = a & 65535, a >>= 16, a > n && (a = n, b++), B.bits += a, b;
      }
      function d(_, o, f, b, B) {
        var a = 0, n = 0, F = 0, R = D.ht[b].xlen, O = D.ht[b].hlen, q = D.ht[b + 1].hlen, Z = D.ht[b + 2].hlen;
        do {
          var e0 = _[o + 0] * R + _[o + 1];
          o += 2, a += O[e0], n += q[e0], F += Z[e0];
        } while (o < f);
        var b0 = b;
        return a > n && (a = n, b0++), a > F && (a = F, b0 = b + 2), B.bits += a, b0;
      }
      var g = [1, 2, 5, 7, 7, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13];
      function E(_, o, f, b) {
        var B = C(_, o, f);
        switch (B) {
          case 0:
            return B;
          case 1:
            return M(_, o, f, b);
          case 2:
          case 3:
            return V(_, o, f, g[B - 1], b);
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
            return d(_, o, f, g[B - 1], b);
          default:
            B > z0.IXMAX_VAL && J(), B -= 15;
            var a;
            for (a = 24; a < 32 && !(D.ht[a].linmax >= B); a++)
              ;
            var n;
            for (n = a - 8; n < 24 && !(D.ht[n].linmax >= B); n++)
              ;
            return K(_, o, f, n, a, b);
        }
      }
      this.noquant_count_bits = function(_, o, f) {
        var b = o.l3_enc, B = Math.min(576, o.max_nonzero_coeff + 2 >> 1 << 1);
        for (f != null && (f.sfb_count1 = 0); B > 1 && !(b[B - 1] | b[B - 2]); B -= 2)
          ;
        o.count1 = B;
        for (var a = 0, n = 0; B > 3; B -= 4) {
          var F;
          if (((b[B - 1] | b[B - 2] | b[B - 3] | b[B - 4]) & 2147483647) > 1)
            break;
          F = ((b[B - 4] * 2 + b[B - 3]) * 2 + b[B - 2]) * 2 + b[B - 1], a += D.t32l[F], n += D.t33l[F];
        }
        var R = a;
        if (o.count1table_select = 0, a > n && (R = n, o.count1table_select = 1), o.count1bits = R, o.big_values = B, B == 0)
          return R;
        if (o.block_type == t.SHORT_TYPE)
          a = 3 * _.scalefac_band.s[3], a > o.big_values && (a = o.big_values), n = o.big_values;
        else if (o.block_type == t.NORM_TYPE) {
          if (a = o.region0_count = _.bv_scf[B - 2], n = o.region1_count = _.bv_scf[B - 1], n = _.scalefac_band.l[a + n + 2], a = _.scalefac_band.l[a + 1], n < B) {
            var O = new k(R);
            o.table_select[2] = E(b, n, B, O), R = O.bits;
          }
        } else
          o.region0_count = 7, o.region1_count = t.SBMAX_l - 1 - 7 - 1, a = _.scalefac_band.l[7 + 1], n = B, a > n && (a = n);
        if (a = Math.min(a, B), n = Math.min(n, B), 0 < a) {
          var O = new k(R);
          o.table_select[0] = E(b, 0, a, O), R = O.bits;
        }
        if (a < n) {
          var O = new k(R);
          o.table_select[1] = E(b, a, n, O), R = O.bits;
        }
        if (_.use_best_huffman == 2 && J(), f != null && o.block_type == t.NORM_TYPE) {
          for (var q = 0; _.scalefac_band.l[q] < o.big_values; )
            q++;
          f.sfb_count1 = q;
        }
        return R;
      }, this.count_bits = function(_, o, f, b) {
        var B = f.l3_enc, a = z0.IXMAX_VAL / u.IPOW20(f.global_gain);
        return f.xrpow_max > a ? z0.LARGE_BITS : (m(o, B, u.IPOW20(f.global_gain), f, b), _.substep_shaping & 2 && J(), this.noquant_count_bits(_, f, b));
      };
      function w(_, o, f, b, B, a, n) {
        for (var F = o.big_values, R = 0; R <= 7 + 15; R++)
          b[R] = z0.LARGE_BITS;
        for (var R = 0; R < 16; R++) {
          var O = _.scalefac_band.l[R + 1];
          if (O >= F)
            break;
          var q = 0, Z = new k(q), e0 = E(f, 0, O, Z);
          q = Z.bits;
          for (var b0 = 0; b0 < 8; b0++) {
            var A0 = _.scalefac_band.l[R + b0 + 2];
            if (A0 >= F)
              break;
            var p0 = q;
            Z = new k(p0);
            var n1 = E(f, O, A0, Z);
            p0 = Z.bits, b[R + b0] > p0 && (b[R + b0] = p0, B[R + b0] = R, a[R + b0] = e0, n[R + b0] = n1);
          }
        }
      }
      function e(_, o, f, b, B, a, n, F) {
        for (var R = o.big_values, O = 2; O < t.SBMAX_l + 1; O++) {
          var q = _.scalefac_band.l[O];
          if (q >= R)
            break;
          var Z = B[O - 2] + o.count1bits;
          if (f.part2_3_length <= Z)
            break;
          var e0 = new k(Z), b0 = E(b, q, R, e0);
          Z = e0.bits, !(f.part2_3_length <= Z) && (f.assign(o), f.part2_3_length = Z, f.region0_count = a[O - 2], f.region1_count = O - 2 - a[O - 2], f.table_select[0] = n[O - 2], f.table_select[1] = F[O - 2], f.table_select[2] = b0);
        }
      }
      this.best_huffman_divide = function(_, o) {
        var f = new f1(), b = o.l3_enc, B = Y(7 + 15 + 1), a = Y(7 + 15 + 1), n = Y(7 + 15 + 1), F = Y(7 + 15 + 1);
        if (!(o.block_type == t.SHORT_TYPE && _.mode_gr == 1)) {
          f.assign(o), o.block_type == t.NORM_TYPE && (w(_, o, b, B, a, n, F), e(_, f, o, b, B, a, n, F));
          var R = f.big_values;
          if (!(R == 0 || (b[R - 2] | b[R - 1]) > 1) && (R = o.count1 + 2, !(R > 576))) {
            f.assign(o), f.count1 = R;
            for (var O = 0, q = 0; R > f.big_values; R -= 4) {
              var Z = ((b[R - 4] * 2 + b[R - 3]) * 2 + b[R - 2]) * 2 + b[R - 1];
              O += D.t32l[Z], q += D.t33l[Z];
            }
            if (f.big_values = R, f.count1table_select = 0, O > q && (O = q, f.count1table_select = 1), f.count1bits = O, f.block_type == t.NORM_TYPE)
              e(_, f, o, b, B, a, n, F);
            else {
              if (f.part2_3_length = O, O = _.scalefac_band.l[7 + 1], O > R && (O = R), O > 0) {
                var e0 = new k(f.part2_3_length);
                f.table_select[0] = E(b, 0, O, e0), f.part2_3_length = e0.bits;
              }
              if (R > O) {
                var e0 = new k(f.part2_3_length);
                f.table_select[1] = E(b, O, R, e0), f.part2_3_length = e0.bits;
              }
              o.part2_3_length > f.part2_3_length && o.assign(f);
            }
          }
        }
      };
      var i = [1, 1, 1, 1, 8, 2, 2, 2, 4, 4, 4, 8, 8, 8, 16, 16], h = [1, 2, 4, 8, 1, 2, 4, 8, 2, 4, 8, 2, 4, 8, 4, 8], T = [0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4], c = [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3];
      O0.slen1_tab = T, O0.slen2_tab = c;
      function l(_, o) {
        for (var f, b = o.tt[1][_], B = o.tt[0][_], a = 0; a < D.scfsi_band.length - 1; a++) {
          for (f = D.scfsi_band[a]; f < D.scfsi_band[a + 1] && !(B.scalefac[f] != b.scalefac[f] && b.scalefac[f] >= 0); f++)
            ;
          if (f == D.scfsi_band[a + 1]) {
            for (f = D.scfsi_band[a]; f < D.scfsi_band[a + 1]; f++)
              b.scalefac[f] = -1;
            o.scfsi[_][a] = 1;
          }
        }
        var n = 0, F = 0;
        for (f = 0; f < 11; f++)
          b.scalefac[f] != -1 && (F++, n < b.scalefac[f] && (n = b.scalefac[f]));
        for (var R = 0, O = 0; f < t.SBPSY_l; f++)
          b.scalefac[f] != -1 && (O++, R < b.scalefac[f] && (R = b.scalefac[f]));
        for (var a = 0; a < 16; a++)
          if (n < i[a] && R < h[a]) {
            var q = T[a] * F + c[a] * O;
            b.part2_length > q && (b.part2_length = q, b.scalefac_compress = a);
          }
      }
      this.best_scalefac_store = function(_, o, f, b) {
        var B = b.tt[o][f], a, n, F, R, O = 0;
        for (F = 0, a = 0; a < B.sfbmax; a++) {
          var q = B.width[a];
          for (F += q, R = -q; R < 0 && B.l3_enc[R + F] == 0; R++)
            ;
          R == 0 && (B.scalefac[a] = O = -2);
        }
        if (B.scalefac_scale == 0 && B.preflag == 0) {
          var Z = 0;
          for (a = 0; a < B.sfbmax; a++)
            B.scalefac[a] > 0 && (Z |= B.scalefac[a]);
          if (!(Z & 1) && Z != 0) {
            for (a = 0; a < B.sfbmax; a++)
              B.scalefac[a] > 0 && (B.scalefac[a] >>= 1);
            B.scalefac_scale = O = 1;
          }
        }
        if (B.preflag == 0 && B.block_type != t.SHORT_TYPE && _.mode_gr == 2) {
          for (a = 11; a < t.SBPSY_l && !(B.scalefac[a] < u.pretab[a] && B.scalefac[a] != -2); a++)
            ;
          if (a == t.SBPSY_l) {
            for (a = 11; a < t.SBPSY_l; a++)
              B.scalefac[a] > 0 && (B.scalefac[a] -= u.pretab[a]);
            B.preflag = O = 1;
          }
        }
        for (n = 0; n < 4; n++)
          b.scfsi[f][n] = 0;
        for (_.mode_gr == 2 && o == 1 && b.tt[0][f].block_type != t.SHORT_TYPE && b.tt[1][f].block_type != t.SHORT_TYPE && (l(f, b), O = 0), a = 0; a < B.sfbmax; a++)
          B.scalefac[a] == -2 && (B.scalefac[a] = 0);
        O != 0 && (_.mode_gr == 2 ? this.scale_bitcount(B) : this.scale_bitcount_lsf(_, B));
      };
      var v = [0, 18, 36, 54, 54, 36, 54, 72, 54, 72, 90, 72, 90, 108, 108, 126], s = [0, 18, 36, 54, 51, 35, 53, 71, 52, 70, 88, 69, 87, 105, 104, 122], x = [0, 10, 20, 30, 33, 21, 31, 41, 32, 42, 52, 43, 53, 63, 64, 74];
      this.scale_bitcount = function(_) {
        var o, f, b = 0, B = 0, a, n = _.scalefac;
        if (_.block_type == t.SHORT_TYPE)
          a = v, _.mixed_block_flag != 0 && (a = s);
        else if (a = x, _.preflag == 0) {
          for (f = 11; f < t.SBPSY_l && !(n[f] < u.pretab[f]); f++)
            ;
          if (f == t.SBPSY_l)
            for (_.preflag = 1, f = 11; f < t.SBPSY_l; f++)
              n[f] -= u.pretab[f];
        }
        for (f = 0; f < _.sfbdivide; f++)
          b < n[f] && (b = n[f]);
        for (; f < _.sfbmax; f++)
          B < n[f] && (B = n[f]);
        for (_.part2_length = z0.LARGE_BITS, o = 0; o < 16; o++)
          b < i[o] && B < h[o] && _.part2_length > a[o] && (_.part2_length = a[o], _.scalefac_compress = o);
        return _.part2_length == z0.LARGE_BITS;
      };
      var r = [[15, 15, 7, 7], [15, 15, 7, 0], [7, 3, 0, 0], [15, 31, 31, 0], [7, 7, 7, 0], [3, 3, 0, 0]];
      this.scale_bitcount_lsf = function(_, o) {
        var f, b, B, a, n, F, R, O, q = Y(4), Z = o.scalefac;
        for (o.preflag != 0 ? f = 2 : f = 0, R = 0; R < 4; R++)
          q[R] = 0;
        if (o.block_type == t.SHORT_TYPE) {
          b = 1;
          var e0 = u.nr_of_sfb_block[f][b];
          for (O = 0, B = 0; B < 4; B++)
            for (a = e0[B] / 3, R = 0; R < a; R++, O++)
              for (n = 0; n < 3; n++)
                Z[O * 3 + n] > q[B] && (q[B] = Z[O * 3 + n]);
        } else {
          b = 0;
          var e0 = u.nr_of_sfb_block[f][b];
          for (O = 0, B = 0; B < 4; B++)
            for (a = e0[B], R = 0; R < a; R++, O++)
              Z[O] > q[B] && (q[B] = Z[O]);
        }
        for (F = false, B = 0; B < 4; B++)
          q[B] > r[f][B] && (F = true);
        if (!F) {
          var b0, A0, p0, n1;
          for (o.sfb_partition_table = u.nr_of_sfb_block[f][b], B = 0; B < 4; B++)
            o.slen[B] = L[q[B]];
          switch (b0 = o.slen[0], A0 = o.slen[1], p0 = o.slen[2], n1 = o.slen[3], f) {
            case 0:
              o.scalefac_compress = (b0 * 5 + A0 << 4) + (p0 << 2) + n1;
              break;
            case 1:
              o.scalefac_compress = 400 + (b0 * 5 + A0 << 2) + p0;
              break;
            case 2:
              o.scalefac_compress = 500 + b0 * 3 + A0;
              break;
          }
        }
        if (!F)
          for (o.part2_length = 0, B = 0; B < 4; B++)
            o.part2_length += o.slen[B] * o.sfb_partition_table[B];
        return F;
      };
      var L = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
      this.huffman_init = function(_) {
        for (var o = 2; o <= 576; o += 2) {
          for (var f = 0, b; _.scalefac_band.l[++f] < o; )
            ;
          for (b = H[f][0]; _.scalefac_band.l[b + 1] > o; )
            b--;
          for (b < 0 && (b = H[f][0]), _.bv_scf[o - 2] = b, b = H[f][1]; _.scalefac_band.l[b + _.bv_scf[o - 2] + 2] > o; )
            b--;
          b < 0 && (b = H[f][1]), _.bv_scf[o - 1] = b;
        }
      };
    }
    H0.STEPS_per_dB = 100, H0.MAX_dB = 120, H0.GAIN_NOT_ENOUGH_SAMPLES = -24601, H0.GAIN_ANALYSIS_ERROR = 0, H0.GAIN_ANALYSIS_OK = 1, H0.INIT_GAIN_ANALYSIS_ERROR = 0, H0.INIT_GAIN_ANALYSIS_OK = 1, H0.YULE_ORDER = 10, H0.MAX_ORDER = H0.YULE_ORDER, H0.MAX_SAMP_FREQ = 48e3, H0.RMS_WINDOW_TIME_NUMERATOR = 1, H0.RMS_WINDOW_TIME_DENOMINATOR = 20, H0.MAX_SAMPLES_PER_WINDOW = H0.MAX_SAMP_FREQ * H0.RMS_WINDOW_TIME_NUMERATOR / H0.RMS_WINDOW_TIME_DENOMINATOR + 1;
    function H0() {
    }
    function s1() {
      function u(m, C, K, M, V, d, g, E, w, e, i, h, T, c) {
        this.quant_comp = C, this.quant_comp_s = K, this.safejoint = M, this.nsmsfix = V, this.st_lrm = d, this.st_s = g, this.nsbass = E, this.scale = w, this.masking_adj = e, this.ath_lower = i, this.ath_curve = h, this.interch = T, this.sfscale = c;
      }
      var k;
      this.setModules = function(m) {
        k = m;
      };
      function H(m, C, K) {
        J();
      }
      var p = [new u(8, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -30, 11, 12e-4, 1), new u(16, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -25, 11, 1e-3, 1), new u(24, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -20, 11, 1e-3, 1), new u(32, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -15, 11, 1e-3, 1), new u(40, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1), new u(48, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1), new u(56, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -6, 11, 8e-4, 1), new u(64, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -2, 11, 8e-4, 1), new u(80, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, 0, 8, 7e-4, 1), new u(96, 9, 9, 0, 2.5, 6.6, 145, 0, 0.95, 0, 1, 5.5, 6e-4, 1), new u(112, 9, 9, 0, 2.25, 6.6, 145, 0, 0.95, 0, 2, 4.5, 5e-4, 1), new u(128, 9, 9, 0, 1.95, 6.4, 140, 0, 0.95, 0, 3, 4, 2e-4, 1), new u(160, 9, 9, 1, 1.79, 6, 135, 0, 0.95, -2, 5, 3.5, 0, 1), new u(192, 9, 9, 1, 1.49, 5.6, 125, 0, 0.97, -4, 7, 3, 0, 0), new u(224, 9, 9, 1, 1.25, 5.2, 125, 0, 0.98, -6, 9, 2, 0, 0), new u(256, 9, 9, 1, 0.97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0), new u(320, 9, 9, 1, 0.9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0)];
      function U(m, C, K) {
        var M = C, V = k.nearestBitrateFullIndex(C);
        if (m.VBR = j.vbr_abr, m.VBR_mean_bitrate_kbps = M, m.VBR_mean_bitrate_kbps = Math.min(m.VBR_mean_bitrate_kbps, 320), m.VBR_mean_bitrate_kbps = Math.max(m.VBR_mean_bitrate_kbps, 8), m.brate = m.VBR_mean_bitrate_kbps, m.VBR_mean_bitrate_kbps > 320 && (m.disable_reservoir = true), p[V].safejoint > 0 && (m.exp_nspsytune = m.exp_nspsytune | 2), p[V].sfscale > 0 && (m.internal_flags.noise_shaping = 2), Math.abs(p[V].nsbass) > 0) {
          var d = int(p[V].nsbass * 4);
          d < 0 && (d += 64), m.exp_nspsytune = m.exp_nspsytune | d << 2;
        }
        return K != 0 ? m.quant_comp = p[V].quant_comp : Math.abs(m.quant_comp - -1) > 0 || (m.quant_comp = p[V].quant_comp), K != 0 ? m.quant_comp_short = p[V].quant_comp_s : Math.abs(m.quant_comp_short - -1) > 0 || (m.quant_comp_short = p[V].quant_comp_s), K != 0 ? m.msfix = p[V].nsmsfix : Math.abs(m.msfix - -1) > 0 || (m.msfix = p[V].nsmsfix), K != 0 ? m.internal_flags.nsPsy.attackthre = p[V].st_lrm : Math.abs(m.internal_flags.nsPsy.attackthre - -1) > 0 || (m.internal_flags.nsPsy.attackthre = p[V].st_lrm), K != 0 ? m.internal_flags.nsPsy.attackthre_s = p[V].st_s : Math.abs(m.internal_flags.nsPsy.attackthre_s - -1) > 0 || (m.internal_flags.nsPsy.attackthre_s = p[V].st_s), K != 0 ? m.scale = p[V].scale : Math.abs(m.scale - -1) > 0 || (m.scale = p[V].scale), K != 0 ? m.maskingadjust = p[V].masking_adj : Math.abs(m.maskingadjust - 0) > 0 || (m.maskingadjust = p[V].masking_adj), p[V].masking_adj > 0 ? K != 0 ? m.maskingadjust_short = p[V].masking_adj * 0.9 : Math.abs(m.maskingadjust_short - 0) > 0 || (m.maskingadjust_short = p[V].masking_adj * 0.9) : K != 0 ? m.maskingadjust_short = p[V].masking_adj * 1.1 : Math.abs(m.maskingadjust_short - 0) > 0 || (m.maskingadjust_short = p[V].masking_adj * 1.1), K != 0 ? m.ATHlower = -p[V].ath_lower / 10 : Math.abs(-m.ATHlower * 10 - 0) > 0 || (m.ATHlower = -p[V].ath_lower / 10), K != 0 ? m.ATHcurve = p[V].ath_curve : Math.abs(m.ATHcurve - -1) > 0 || (m.ATHcurve = p[V].ath_curve), K != 0 ? m.interChRatio = p[V].interch : Math.abs(m.interChRatio - -1) > 0 || (m.interChRatio = p[V].interch), C;
      }
      this.apply_preset = function(m, C, K) {
        switch (C) {
          case i0.R3MIX: {
            C = i0.V3, m.VBR = j.vbr_mtrh;
            break;
          }
          case i0.MEDIUM: {
            C = i0.V4, m.VBR = j.vbr_rh;
            break;
          }
          case i0.MEDIUM_FAST: {
            C = i0.V4, m.VBR = j.vbr_mtrh;
            break;
          }
          case i0.STANDARD: {
            C = i0.V2, m.VBR = j.vbr_rh;
            break;
          }
          case i0.STANDARD_FAST: {
            C = i0.V2, m.VBR = j.vbr_mtrh;
            break;
          }
          case i0.EXTREME: {
            C = i0.V0, m.VBR = j.vbr_rh;
            break;
          }
          case i0.EXTREME_FAST: {
            C = i0.V0, m.VBR = j.vbr_mtrh;
            break;
          }
          case i0.INSANE:
            return C = 320, m.preset = C, U(m, C, K), m.VBR = j.vbr_off, C;
        }
        switch (m.preset = C, C) {
          case i0.V9:
            return H(), C;
          case i0.V8:
            return H(), C;
          case i0.V7:
            return H(), C;
          case i0.V6:
            return H(), C;
          case i0.V5:
            return H(), C;
          case i0.V4:
            return H(), C;
          case i0.V3:
            return H(), C;
          case i0.V2:
            return H(), C;
          case i0.V1:
            return H(), C;
          case i0.V0:
            return H(), C;
        }
        return 8 <= C && C <= 320 ? U(m, C, K) : (m.preset = 0, C);
      };
    }
    function W0() {
      var u;
      this.setModules = function(k) {
        u = k;
      }, this.ResvFrameBegin = function(k, H) {
        var p = k.internal_flags, U, m = p.l3_side, C = u.getframebits(k);
        H.bits = (C - p.sideinfo_len * 8) / p.mode_gr;
        var K = 8 * 256 * p.mode_gr - 8;
        k.brate > 320 ? J() : (U = 8 * 1440, k.strict_ISO && J()), p.ResvMax = U - C, p.ResvMax > K && (p.ResvMax = K), (p.ResvMax < 0 || k.disable_reservoir) && (p.ResvMax = 0);
        var M = H.bits * p.mode_gr + Math.min(p.ResvSize, p.ResvMax);
        return M > U && (M = U), m.resvDrain_pre = 0, p.pinfo != null && J(), M;
      }, this.ResvMaxBits = function(k, H, p, U) {
        var m = k.internal_flags, C, K = m.ResvSize, M = m.ResvMax;
        U != 0 && (K += H), m.substep_shaping & 1 && (M *= 0.9), p.bits = H, K * 10 > M * 9 ? (C = K - M * 9 / 10, p.bits += C, m.substep_shaping |= 128) : (C = 0, m.substep_shaping &= 127, !k.disable_reservoir && !(m.substep_shaping & 1) && (p.bits -= 0.1 * H));
        var V = K < m.ResvMax * 6 / 10 ? K : m.ResvMax * 6 / 10;
        return V -= C, V < 0 && (V = 0), V;
      }, this.ResvAdjust = function(k, H) {
        k.ResvSize -= H.part2_3_length + H.part2_length;
      }, this.ResvFrameEnd = function(k, H) {
        var p, U = k.l3_side;
        k.ResvSize += H * k.mode_gr;
        var m = 0;
        U.resvDrain_post = 0, U.resvDrain_pre = 0, (p = k.ResvSize % 8) != 0 && (m += p), p = k.ResvSize - m - k.ResvMax, p > 0 && (m += p);
        {
          var C = Math.min(U.main_data_begin * 8, m) / 8;
          U.resvDrain_pre += 8 * C, m -= 8 * C, k.ResvSize -= 8 * C, U.main_data_begin -= C;
        }
        U.resvDrain_post += m, k.ResvSize -= m;
      };
    }
    _1.NUMTOCENTRIES = 100, _1.MAXFRAMESIZE = 2880;
    function _1() {
      this.setModules = function(H, p, U) {
      };
      var u = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
      function k(H, p) {
        var U = p ^ H;
        return p = p >> 8 ^ u[U & 255], p;
      }
      this.updateMusicCRC = function(H, p, U, m) {
        for (var C = 0; C < m; ++C)
          H[0] = k(p[U + C], H[0]);
      };
    }
    P0.EQ = function(u, k) {
      return Math.abs(u) > Math.abs(k) ? Math.abs(u - k) <= Math.abs(u) * 1e-6 : Math.abs(u - k) <= Math.abs(k) * 1e-6;
    }, P0.NEQ = function(u, k) {
      return !P0.EQ(u, k);
    };
    function P0() {
      var u = this, k = null, H = null;
      this.setModules = function(l, v, s, x) {
        k = s, H = x;
      };
      var p = null, U = 0, m = 0, C = 0;
      this.getframebits = function(l) {
        var v = l.internal_flags, s;
        v.bitrate_index != 0 ? s = D.bitrate_table[l.version][v.bitrate_index] : s = l.brate;
        var x = 0 | (l.version + 1) * 72e3 * s / l.out_samplerate + v.padding;
        return 8 * x;
      };
      function K(l) {
        z.arraycopy(l.header[l.w_ptr].buf, 0, p, m, l.sideinfo_len), m += l.sideinfo_len, U += l.sideinfo_len * 8, l.w_ptr = l.w_ptr + 1 & v0.MAX_HEADER_BUF - 1;
      }
      function M(l, v, s) {
        for (; s > 0; ) {
          var x;
          C == 0 && (C = 8, m++, l.header[l.w_ptr].write_timing == U && K(l), p[m] = 0), x = Math.min(s, C), s -= x, C -= x, p[m] |= v >> s << C, U += x;
        }
      }
      function V(l, v) {
        var s = l.internal_flags, x;
        if (v >= 8 && (M(s, 76, 8), v -= 8), v >= 8 && (M(s, 65, 8), v -= 8), v >= 8 && (M(s, 77, 8), v -= 8), v >= 8 && (M(s, 69, 8), v -= 8), v >= 32) {
          var r = k.getLameShortVersion();
          if (v >= 32)
            for (x = 0; x < r.length && v >= 8; ++x)
              v -= 8, M(s, r.charCodeAt(x), 8);
        }
        for (; v >= 1; v -= 1)
          M(s, s.ancillary_flag, 1), s.ancillary_flag ^= l.disable_reservoir ? 0 : 1;
      }
      function d(l, v, s) {
        for (var x = l.header[l.h_ptr].ptr; s > 0; ) {
          var r = Math.min(s, 8 - (x & 7));
          s -= r, l.header[l.h_ptr].buf[x >> 3] |= v >> s << 8 - (x & 7) - r, x += r;
        }
        l.header[l.h_ptr].ptr = x;
      }
      function g(l, v) {
        var s = l.internal_flags, x, r, L;
        if (x = s.l3_side, s.header[s.h_ptr].ptr = 0, F0.fill(s.header[s.h_ptr].buf, 0, s.sideinfo_len, 0), l.out_samplerate < 16e3 ? d(s, 4094, 12) : d(s, 4095, 12), d(s, l.version, 1), d(s, 4 - 3, 2), d(s, l.error_protection ? 0 : 1, 1), d(s, s.bitrate_index, 4), d(s, s.samplerate_index, 2), d(s, s.padding, 1), d(s, l.extension, 1), d(s, l.mode.ordinal(), 2), d(s, s.mode_ext, 2), d(s, l.copyright, 1), d(s, l.original, 1), d(s, l.emphasis, 2), l.error_protection && d(s, 0, 16), l.version == 1) {
          for (d(s, x.main_data_begin, 9), s.channels_out == 2 ? d(s, x.private_bits, 3) : d(s, x.private_bits, 5), L = 0; L < s.channels_out; L++) {
            var _;
            for (_ = 0; _ < 4; _++)
              d(s, x.scfsi[L][_], 1);
          }
          for (r = 0; r < 2; r++)
            for (L = 0; L < s.channels_out; L++) {
              var o = x.tt[r][L];
              d(s, o.part2_3_length + o.part2_length, 12), d(s, o.big_values / 2, 9), d(s, o.global_gain, 8), d(s, o.scalefac_compress, 4), o.block_type != t.NORM_TYPE ? (d(s, 1, 1), d(s, o.block_type, 2), d(s, o.mixed_block_flag, 1), o.table_select[0] == 14 && (o.table_select[0] = 16), d(s, o.table_select[0], 5), o.table_select[1] == 14 && (o.table_select[1] = 16), d(s, o.table_select[1], 5), d(s, o.subblock_gain[0], 3), d(s, o.subblock_gain[1], 3), d(s, o.subblock_gain[2], 3)) : (d(s, 0, 1), o.table_select[0] == 14 && (o.table_select[0] = 16), d(s, o.table_select[0], 5), o.table_select[1] == 14 && (o.table_select[1] = 16), d(s, o.table_select[1], 5), o.table_select[2] == 14 && (o.table_select[2] = 16), d(s, o.table_select[2], 5), d(s, o.region0_count, 4), d(s, o.region1_count, 3)), d(s, o.preflag, 1), d(s, o.scalefac_scale, 1), d(s, o.count1table_select, 1);
            }
        } else
          for (d(s, x.main_data_begin, 8), d(s, x.private_bits, s.channels_out), r = 0, L = 0; L < s.channels_out; L++) {
            var o = x.tt[r][L];
            d(s, o.part2_3_length + o.part2_length, 12), d(s, o.big_values / 2, 9), d(s, o.global_gain, 8), d(s, o.scalefac_compress, 9), o.block_type != t.NORM_TYPE ? (d(s, 1, 1), d(s, o.block_type, 2), d(s, o.mixed_block_flag, 1), o.table_select[0] == 14 && (o.table_select[0] = 16), d(s, o.table_select[0], 5), o.table_select[1] == 14 && (o.table_select[1] = 16), d(s, o.table_select[1], 5), d(s, o.subblock_gain[0], 3), d(s, o.subblock_gain[1], 3), d(s, o.subblock_gain[2], 3)) : (d(s, 0, 1), o.table_select[0] == 14 && (o.table_select[0] = 16), d(s, o.table_select[0], 5), o.table_select[1] == 14 && (o.table_select[1] = 16), d(s, o.table_select[1], 5), o.table_select[2] == 14 && (o.table_select[2] = 16), d(s, o.table_select[2], 5), d(s, o.region0_count, 4), d(s, o.region1_count, 3)), d(s, o.scalefac_scale, 1), d(s, o.count1table_select, 1);
          }
        l.error_protection && J();
        {
          var f = s.h_ptr;
          s.h_ptr = f + 1 & v0.MAX_HEADER_BUF - 1, s.header[s.h_ptr].write_timing = s.header[f].write_timing + v, s.h_ptr == s.w_ptr;
        }
      }
      function E(l, v) {
        var s = D.ht[v.count1table_select + 32], x, r = 0, L = v.big_values, _ = v.big_values;
        for (x = (v.count1 - v.big_values) / 4; x > 0; --x) {
          var o = 0, f = 0, b;
          b = v.l3_enc[L + 0], b != 0 && (f += 8, v.xr[_ + 0] < 0 && o++), b = v.l3_enc[L + 1], b != 0 && (f += 4, o *= 2, v.xr[_ + 1] < 0 && o++), b = v.l3_enc[L + 2], b != 0 && (f += 2, o *= 2, v.xr[_ + 2] < 0 && o++), b = v.l3_enc[L + 3], b != 0 && (f++, o *= 2, v.xr[_ + 3] < 0 && o++), L += 4, _ += 4, M(l, o + s.table[f], s.hlen[f]), r += s.hlen[f];
        }
        return r;
      }
      function w(l, v, s, x, r) {
        var L = D.ht[v], _ = 0;
        if (v == 0)
          return _;
        for (var o = s; o < x; o += 2) {
          var f = 0, b = 0, B = L.xlen, a = L.xlen, n = 0, F = r.l3_enc[o], R = r.l3_enc[o + 1];
          if (F != 0 && (r.xr[o] < 0 && n++, f--), v > 15) {
            if (F > 14) {
              var O = F - 15;
              n |= O << 1, b = B, F = 15;
            }
            if (R > 14) {
              var q = R - 15;
              n <<= B, n |= q, b += B, R = 15;
            }
            a = 16;
          }
          R != 0 && (n <<= 1, r.xr[o + 1] < 0 && n++, f--), F = F * a + R, b -= f, f += L.hlen[F], M(l, L.table[F], f), M(l, n, b), _ += f + b;
        }
        return _;
      }
      function e(l, v) {
        var s = 3 * l.scalefac_band.s[3];
        s > v.big_values && (s = v.big_values);
        var x = w(l, v.table_select[0], 0, s, v);
        return x += w(l, v.table_select[1], s, v.big_values, v), x;
      }
      function i(l, v) {
        var s, x, r, L;
        s = v.big_values;
        var _ = v.region0_count + 1;
        return r = l.scalefac_band.l[_], _ += v.region1_count + 1, L = l.scalefac_band.l[_], r > s && (r = s), L > s && (L = s), x = w(l, v.table_select[0], 0, r, v), x += w(l, v.table_select[1], r, L, v), x += w(l, v.table_select[2], L, s, v), x;
      }
      function h(l) {
        var v, s, x, r, L = 0, _ = l.internal_flags, o = _.l3_side;
        if (l.version == 1)
          for (v = 0; v < 2; v++)
            for (s = 0; s < _.channels_out; s++) {
              var f = o.tt[v][s], b = O0.slen1_tab[f.scalefac_compress], B = O0.slen2_tab[f.scalefac_compress];
              for (r = 0, x = 0; x < f.sfbdivide; x++)
                f.scalefac[x] != -1 && (M(_, f.scalefac[x], b), r += b);
              for (; x < f.sfbmax; x++)
                f.scalefac[x] != -1 && (M(_, f.scalefac[x], B), r += B);
              f.block_type == t.SHORT_TYPE ? r += e(_, f) : r += i(_, f), r += E(_, f), L += r;
            }
        else
          for (v = 0, s = 0; s < _.channels_out; s++) {
            var f = o.tt[v][s], a, n, F = 0;
            if (r = 0, x = 0, n = 0, f.block_type == t.SHORT_TYPE) {
              for (; n < 4; n++) {
                var R = f.sfb_partition_table[n] / 3, O = f.slen[n];
                for (a = 0; a < R; a++, x++)
                  M(_, Math.max(f.scalefac[x * 3 + 0], 0), O), M(_, Math.max(f.scalefac[x * 3 + 1], 0), O), M(_, Math.max(f.scalefac[x * 3 + 2], 0), O), F += 3 * O;
              }
              r += e(_, f);
            } else {
              for (; n < 4; n++) {
                var R = f.sfb_partition_table[n], O = f.slen[n];
                for (a = 0; a < R; a++, x++)
                  M(_, Math.max(f.scalefac[x], 0), O), F += O;
              }
              r += i(_, f);
            }
            r += E(_, f), L += F + r;
          }
        return L;
      }
      function T() {
        this.total = 0;
      }
      function c(l, v) {
        var s = l.internal_flags, x, r, L;
        return s.w_ptr, L = s.h_ptr - 1, L == -1 && (L = v0.MAX_HEADER_BUF - 1), x = s.header[L].write_timing - U, v.total = x, x >= 0 && J(), r = u.getframebits(l), x += r, v.total += r, v.total % 8 != 0 ? v.total = 1 + v.total / 8 : v.total = v.total / 8, v.total += m + 1, x;
      }
      this.flush_bitstream = function(l) {
        var v = l.internal_flags, s, x;
        v.h_ptr - 1, s = v.l3_side, !((x = c(l, new T())) < 0) && (V(l, x), v.ResvSize = 0, s.main_data_begin = 0, v.findReplayGain && J(), v.findPeakSample && J());
      }, this.format_bitstream = function(l) {
        var v = l.internal_flags, s;
        s = v.l3_side;
        var x = this.getframebits(l);
        V(l, s.resvDrain_pre), g(l, x);
        var r = 8 * v.sideinfo_len;
        if (r += h(l), V(l, s.resvDrain_post), r += s.resvDrain_post, s.main_data_begin += (x - r) / 8, c(l, new T()) != v.ResvSize, s.main_data_begin * 8 != v.ResvSize && (v.ResvSize = s.main_data_begin * 8), U > 1e9) {
          var L;
          for (L = 0; L < v0.MAX_HEADER_BUF; ++L)
            v.header[L].write_timing -= U;
          U = 0;
        }
        return 0;
      }, this.copy_buffer = function(l, v, s, x, r) {
        var L = m + 1;
        if (L <= 0)
          return 0;
        if (x != 0 && L > x)
          return -1;
        if (z.arraycopy(p, 0, v, s, L), m = -1, C = 0, r != 0) {
          var _ = Y(1);
          _[0] = l.nMusicCRC, H.updateMusicCRC(_, v, s, L), l.nMusicCRC = _[0], L > 0 && (l.VBR_seek_table.nBytesWritten += L), l.decode_on_the_fly && J();
        }
        return L;
      }, this.init_bit_stream_w = function(l) {
        p = Z0(i0.LAME_MAXMP3BUFFER), l.h_ptr = l.w_ptr = 0, l.header[l.h_ptr].write_timing = 0, m = -1, C = 0, U = 0;
      };
    }
    function h0(u, k, H, p) {
      this.xlen = u, this.linmax = k, this.table = H, this.hlen = p;
    }
    var D = {};
    D.t1HB = [1, 1, 1, 0], D.t2HB = [1, 2, 1, 3, 1, 1, 3, 2, 0], D.t3HB = [3, 2, 1, 1, 1, 1, 3, 2, 0], D.t5HB = [1, 2, 6, 5, 3, 1, 4, 4, 7, 5, 7, 1, 6, 1, 1, 0], D.t6HB = [7, 3, 5, 1, 6, 2, 3, 2, 5, 4, 4, 1, 3, 3, 2, 0], D.t7HB = [1, 2, 10, 19, 16, 10, 3, 3, 7, 10, 5, 3, 11, 4, 13, 17, 8, 4, 12, 11, 18, 15, 11, 2, 7, 6, 9, 14, 3, 1, 6, 4, 5, 3, 2, 0], D.t8HB = [3, 4, 6, 18, 12, 5, 5, 1, 2, 16, 9, 3, 7, 3, 5, 14, 7, 3, 19, 17, 15, 13, 10, 4, 13, 5, 8, 11, 5, 1, 12, 4, 4, 1, 1, 0], D.t9HB = [7, 5, 9, 14, 15, 7, 6, 4, 5, 5, 6, 7, 7, 6, 8, 8, 8, 5, 15, 6, 9, 10, 5, 1, 11, 7, 9, 6, 4, 1, 14, 4, 6, 2, 6, 0], D.t10HB = [1, 2, 10, 23, 35, 30, 12, 17, 3, 3, 8, 12, 18, 21, 12, 7, 11, 9, 15, 21, 32, 40, 19, 6, 14, 13, 22, 34, 46, 23, 18, 7, 20, 19, 33, 47, 27, 22, 9, 3, 31, 22, 41, 26, 21, 20, 5, 3, 14, 13, 10, 11, 16, 6, 5, 1, 9, 8, 7, 8, 4, 4, 2, 0], D.t11HB = [3, 4, 10, 24, 34, 33, 21, 15, 5, 3, 4, 10, 32, 17, 11, 10, 11, 7, 13, 18, 30, 31, 20, 5, 25, 11, 19, 59, 27, 18, 12, 5, 35, 33, 31, 58, 30, 16, 7, 5, 28, 26, 32, 19, 17, 15, 8, 14, 14, 12, 9, 13, 14, 9, 4, 1, 11, 4, 6, 6, 6, 3, 2, 0], D.t12HB = [9, 6, 16, 33, 41, 39, 38, 26, 7, 5, 6, 9, 23, 16, 26, 11, 17, 7, 11, 14, 21, 30, 10, 7, 17, 10, 15, 12, 18, 28, 14, 5, 32, 13, 22, 19, 18, 16, 9, 5, 40, 17, 31, 29, 17, 13, 4, 2, 27, 12, 11, 15, 10, 7, 4, 1, 27, 12, 8, 12, 6, 3, 1, 0], D.t13HB = [1, 5, 14, 21, 34, 51, 46, 71, 42, 52, 68, 52, 67, 44, 43, 19, 3, 4, 12, 19, 31, 26, 44, 33, 31, 24, 32, 24, 31, 35, 22, 14, 15, 13, 23, 36, 59, 49, 77, 65, 29, 40, 30, 40, 27, 33, 42, 16, 22, 20, 37, 61, 56, 79, 73, 64, 43, 76, 56, 37, 26, 31, 25, 14, 35, 16, 60, 57, 97, 75, 114, 91, 54, 73, 55, 41, 48, 53, 23, 24, 58, 27, 50, 96, 76, 70, 93, 84, 77, 58, 79, 29, 74, 49, 41, 17, 47, 45, 78, 74, 115, 94, 90, 79, 69, 83, 71, 50, 59, 38, 36, 15, 72, 34, 56, 95, 92, 85, 91, 90, 86, 73, 77, 65, 51, 44, 43, 42, 43, 20, 30, 44, 55, 78, 72, 87, 78, 61, 46, 54, 37, 30, 20, 16, 53, 25, 41, 37, 44, 59, 54, 81, 66, 76, 57, 54, 37, 18, 39, 11, 35, 33, 31, 57, 42, 82, 72, 80, 47, 58, 55, 21, 22, 26, 38, 22, 53, 25, 23, 38, 70, 60, 51, 36, 55, 26, 34, 23, 27, 14, 9, 7, 34, 32, 28, 39, 49, 75, 30, 52, 48, 40, 52, 28, 18, 17, 9, 5, 45, 21, 34, 64, 56, 50, 49, 45, 31, 19, 12, 15, 10, 7, 6, 3, 48, 23, 20, 39, 36, 35, 53, 21, 16, 23, 13, 10, 6, 1, 4, 2, 16, 15, 17, 27, 25, 20, 29, 11, 17, 12, 16, 8, 1, 1, 0, 1], D.t15HB = [7, 12, 18, 53, 47, 76, 124, 108, 89, 123, 108, 119, 107, 81, 122, 63, 13, 5, 16, 27, 46, 36, 61, 51, 42, 70, 52, 83, 65, 41, 59, 36, 19, 17, 15, 24, 41, 34, 59, 48, 40, 64, 50, 78, 62, 80, 56, 33, 29, 28, 25, 43, 39, 63, 55, 93, 76, 59, 93, 72, 54, 75, 50, 29, 52, 22, 42, 40, 67, 57, 95, 79, 72, 57, 89, 69, 49, 66, 46, 27, 77, 37, 35, 66, 58, 52, 91, 74, 62, 48, 79, 63, 90, 62, 40, 38, 125, 32, 60, 56, 50, 92, 78, 65, 55, 87, 71, 51, 73, 51, 70, 30, 109, 53, 49, 94, 88, 75, 66, 122, 91, 73, 56, 42, 64, 44, 21, 25, 90, 43, 41, 77, 73, 63, 56, 92, 77, 66, 47, 67, 48, 53, 36, 20, 71, 34, 67, 60, 58, 49, 88, 76, 67, 106, 71, 54, 38, 39, 23, 15, 109, 53, 51, 47, 90, 82, 58, 57, 48, 72, 57, 41, 23, 27, 62, 9, 86, 42, 40, 37, 70, 64, 52, 43, 70, 55, 42, 25, 29, 18, 11, 11, 118, 68, 30, 55, 50, 46, 74, 65, 49, 39, 24, 16, 22, 13, 14, 7, 91, 44, 39, 38, 34, 63, 52, 45, 31, 52, 28, 19, 14, 8, 9, 3, 123, 60, 58, 53, 47, 43, 32, 22, 37, 24, 17, 12, 15, 10, 2, 1, 71, 37, 34, 30, 28, 20, 17, 26, 21, 16, 10, 6, 8, 6, 2, 0], D.t16HB = [1, 5, 14, 44, 74, 63, 110, 93, 172, 149, 138, 242, 225, 195, 376, 17, 3, 4, 12, 20, 35, 62, 53, 47, 83, 75, 68, 119, 201, 107, 207, 9, 15, 13, 23, 38, 67, 58, 103, 90, 161, 72, 127, 117, 110, 209, 206, 16, 45, 21, 39, 69, 64, 114, 99, 87, 158, 140, 252, 212, 199, 387, 365, 26, 75, 36, 68, 65, 115, 101, 179, 164, 155, 264, 246, 226, 395, 382, 362, 9, 66, 30, 59, 56, 102, 185, 173, 265, 142, 253, 232, 400, 388, 378, 445, 16, 111, 54, 52, 100, 184, 178, 160, 133, 257, 244, 228, 217, 385, 366, 715, 10, 98, 48, 91, 88, 165, 157, 148, 261, 248, 407, 397, 372, 380, 889, 884, 8, 85, 84, 81, 159, 156, 143, 260, 249, 427, 401, 392, 383, 727, 713, 708, 7, 154, 76, 73, 141, 131, 256, 245, 426, 406, 394, 384, 735, 359, 710, 352, 11, 139, 129, 67, 125, 247, 233, 229, 219, 393, 743, 737, 720, 885, 882, 439, 4, 243, 120, 118, 115, 227, 223, 396, 746, 742, 736, 721, 712, 706, 223, 436, 6, 202, 224, 222, 218, 216, 389, 386, 381, 364, 888, 443, 707, 440, 437, 1728, 4, 747, 211, 210, 208, 370, 379, 734, 723, 714, 1735, 883, 877, 876, 3459, 865, 2, 377, 369, 102, 187, 726, 722, 358, 711, 709, 866, 1734, 871, 3458, 870, 434, 0, 12, 10, 7, 11, 10, 17, 11, 9, 13, 12, 10, 7, 5, 3, 1, 3], D.t24HB = [15, 13, 46, 80, 146, 262, 248, 434, 426, 669, 653, 649, 621, 517, 1032, 88, 14, 12, 21, 38, 71, 130, 122, 216, 209, 198, 327, 345, 319, 297, 279, 42, 47, 22, 41, 74, 68, 128, 120, 221, 207, 194, 182, 340, 315, 295, 541, 18, 81, 39, 75, 70, 134, 125, 116, 220, 204, 190, 178, 325, 311, 293, 271, 16, 147, 72, 69, 135, 127, 118, 112, 210, 200, 188, 352, 323, 306, 285, 540, 14, 263, 66, 129, 126, 119, 114, 214, 202, 192, 180, 341, 317, 301, 281, 262, 12, 249, 123, 121, 117, 113, 215, 206, 195, 185, 347, 330, 308, 291, 272, 520, 10, 435, 115, 111, 109, 211, 203, 196, 187, 353, 332, 313, 298, 283, 531, 381, 17, 427, 212, 208, 205, 201, 193, 186, 177, 169, 320, 303, 286, 268, 514, 377, 16, 335, 199, 197, 191, 189, 181, 174, 333, 321, 305, 289, 275, 521, 379, 371, 11, 668, 184, 183, 179, 175, 344, 331, 314, 304, 290, 277, 530, 383, 373, 366, 10, 652, 346, 171, 168, 164, 318, 309, 299, 287, 276, 263, 513, 375, 368, 362, 6, 648, 322, 316, 312, 307, 302, 292, 284, 269, 261, 512, 376, 370, 364, 359, 4, 620, 300, 296, 294, 288, 282, 273, 266, 515, 380, 374, 369, 365, 361, 357, 2, 1033, 280, 278, 274, 267, 264, 259, 382, 378, 372, 367, 363, 360, 358, 356, 0, 43, 20, 19, 17, 15, 13, 11, 9, 7, 6, 4, 7, 5, 3, 1, 3], D.t32HB = [1, 10, 8, 20, 12, 20, 16, 32, 14, 12, 24, 0, 28, 16, 24, 16], D.t33HB = [15, 28, 26, 48, 22, 40, 36, 64, 14, 24, 20, 32, 12, 16, 8, 0], D.t1l = [1, 4, 3, 5], D.t2l = [1, 4, 7, 4, 5, 7, 6, 7, 8], D.t3l = [2, 3, 7, 4, 4, 7, 6, 7, 8], D.t5l = [1, 4, 7, 8, 4, 5, 8, 9, 7, 8, 9, 10, 8, 8, 9, 10], D.t6l = [3, 4, 6, 8, 4, 4, 6, 7, 5, 6, 7, 8, 7, 7, 8, 9], D.t7l = [1, 4, 7, 9, 9, 10, 4, 6, 8, 9, 9, 10, 7, 7, 9, 10, 10, 11, 8, 9, 10, 11, 11, 11, 8, 9, 10, 11, 11, 12, 9, 10, 11, 12, 12, 12], D.t8l = [2, 4, 7, 9, 9, 10, 4, 4, 6, 10, 10, 10, 7, 6, 8, 10, 10, 11, 9, 10, 10, 11, 11, 12, 9, 9, 10, 11, 12, 12, 10, 10, 11, 11, 13, 13], D.t9l = [3, 4, 6, 7, 9, 10, 4, 5, 6, 7, 8, 10, 5, 6, 7, 8, 9, 10, 7, 7, 8, 9, 9, 10, 8, 8, 9, 9, 10, 11, 9, 9, 10, 10, 11, 11], D.t10l = [1, 4, 7, 9, 10, 10, 10, 11, 4, 6, 8, 9, 10, 11, 10, 10, 7, 8, 9, 10, 11, 12, 11, 11, 8, 9, 10, 11, 12, 12, 11, 12, 9, 10, 11, 12, 12, 12, 12, 12, 10, 11, 12, 12, 13, 13, 12, 13, 9, 10, 11, 12, 12, 12, 13, 13, 10, 10, 11, 12, 12, 13, 13, 13], D.t11l = [2, 4, 6, 8, 9, 10, 9, 10, 4, 5, 6, 8, 10, 10, 9, 10, 6, 7, 8, 9, 10, 11, 10, 10, 8, 8, 9, 11, 10, 12, 10, 11, 9, 10, 10, 11, 11, 12, 11, 12, 9, 10, 11, 12, 12, 13, 12, 13, 9, 9, 9, 10, 11, 12, 12, 12, 9, 9, 10, 11, 12, 12, 12, 12], D.t12l = [4, 4, 6, 8, 9, 10, 10, 10, 4, 5, 6, 7, 9, 9, 10, 10, 6, 6, 7, 8, 9, 10, 9, 10, 7, 7, 8, 8, 9, 10, 10, 10, 8, 8, 9, 9, 10, 10, 10, 11, 9, 9, 10, 10, 10, 11, 10, 11, 9, 9, 9, 10, 10, 11, 11, 12, 10, 10, 10, 11, 11, 11, 11, 12], D.t13l = [1, 5, 7, 8, 9, 10, 10, 11, 10, 11, 12, 12, 13, 13, 14, 14, 4, 6, 8, 9, 10, 10, 11, 11, 11, 11, 12, 12, 13, 14, 14, 14, 7, 8, 9, 10, 11, 11, 12, 12, 11, 12, 12, 13, 13, 14, 15, 15, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15, 15, 9, 9, 11, 11, 12, 12, 13, 13, 12, 13, 13, 14, 14, 15, 15, 16, 10, 10, 11, 12, 12, 12, 13, 13, 13, 13, 14, 13, 15, 15, 16, 16, 10, 11, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 15, 15, 16, 16, 11, 11, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 16, 18, 18, 10, 10, 11, 12, 12, 13, 13, 14, 14, 14, 14, 15, 15, 16, 17, 17, 11, 11, 12, 12, 13, 13, 13, 15, 14, 15, 15, 16, 16, 16, 18, 17, 11, 12, 12, 13, 13, 14, 14, 15, 14, 15, 16, 15, 16, 17, 18, 19, 12, 12, 12, 13, 14, 14, 14, 14, 15, 15, 15, 16, 17, 17, 17, 18, 12, 13, 13, 14, 14, 15, 14, 15, 16, 16, 17, 17, 17, 18, 18, 18, 13, 13, 14, 15, 15, 15, 16, 16, 16, 16, 16, 17, 18, 17, 18, 18, 14, 14, 14, 15, 15, 15, 17, 16, 16, 19, 17, 17, 17, 19, 18, 18, 13, 14, 15, 16, 16, 16, 17, 16, 17, 17, 18, 18, 21, 20, 21, 18], D.t15l = [3, 5, 6, 8, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 14, 5, 5, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 6, 7, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 13, 13, 7, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 8, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 13, 13, 13, 14, 10, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 14, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 14, 14, 14, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15, 14, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 15, 12, 12, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 14, 14, 15, 15, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 14, 15, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 15, 15], D.t16_5l = [1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 11, 4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 11, 7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 12, 9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15, 13, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 12, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15, 15, 16, 13, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 13, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 17, 17, 13, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 13, 12, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 15, 16, 15, 14, 12, 13, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 17, 17, 16, 13, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16, 16, 16, 16, 15, 16, 14, 13, 14, 14, 14, 14, 15, 15, 15, 15, 17, 16, 16, 16, 16, 18, 14, 15, 14, 14, 14, 15, 15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 14, 14, 15, 13, 14, 16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 14, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 12], D.t16l = [1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 10, 4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 10, 7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 11, 9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15, 12, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 11, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15, 15, 16, 12, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 12, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 17, 17, 12, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 12, 12, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 15, 16, 15, 13, 12, 13, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 17, 17, 16, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16, 16, 16, 16, 15, 16, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 17, 16, 16, 16, 16, 18, 13, 15, 14, 14, 14, 15, 15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 13, 14, 15, 13, 14, 16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 13, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10], D.t24l = [4, 5, 7, 8, 9, 10, 10, 11, 11, 12, 12, 12, 12, 12, 13, 10, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 10, 7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 9, 8, 8, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 9, 10, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 9, 11, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 10, 12, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 10, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10, 13, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 6], D.t32l = [1 + 0, 4 + 1, 4 + 1, 5 + 2, 4 + 1, 6 + 2, 5 + 2, 6 + 3, 4 + 1, 5 + 2, 5 + 2, 6 + 3, 5 + 2, 6 + 3, 6 + 3, 6 + 4], D.t33l = [4 + 0, 4 + 1, 4 + 1, 4 + 2, 4 + 1, 4 + 2, 4 + 2, 4 + 3, 4 + 1, 4 + 2, 4 + 2, 4 + 3, 4 + 2, 4 + 3, 4 + 3, 4 + 4], D.ht = [new h0(0, 0, null, null), new h0(2, 0, D.t1HB, D.t1l), new h0(3, 0, D.t2HB, D.t2l), new h0(3, 0, D.t3HB, D.t3l), new h0(0, 0, null, null), new h0(4, 0, D.t5HB, D.t5l), new h0(4, 0, D.t6HB, D.t6l), new h0(6, 0, D.t7HB, D.t7l), new h0(6, 0, D.t8HB, D.t8l), new h0(6, 0, D.t9HB, D.t9l), new h0(8, 0, D.t10HB, D.t10l), new h0(8, 0, D.t11HB, D.t11l), new h0(8, 0, D.t12HB, D.t12l), new h0(16, 0, D.t13HB, D.t13l), new h0(0, 0, null, D.t16_5l), new h0(16, 0, D.t15HB, D.t15l), new h0(1, 1, D.t16HB, D.t16l), new h0(2, 3, D.t16HB, D.t16l), new h0(3, 7, D.t16HB, D.t16l), new h0(4, 15, D.t16HB, D.t16l), new h0(6, 63, D.t16HB, D.t16l), new h0(8, 255, D.t16HB, D.t16l), new h0(10, 1023, D.t16HB, D.t16l), new h0(13, 8191, D.t16HB, D.t16l), new h0(4, 15, D.t24HB, D.t24l), new h0(5, 31, D.t24HB, D.t24l), new h0(6, 63, D.t24HB, D.t24l), new h0(7, 127, D.t24HB, D.t24l), new h0(8, 255, D.t24HB, D.t24l), new h0(9, 511, D.t24HB, D.t24l), new h0(11, 2047, D.t24HB, D.t24l), new h0(13, 8191, D.t24HB, D.t24l), new h0(0, 0, D.t32HB, D.t32l), new h0(0, 0, D.t33HB, D.t33l)], D.largetbl = [65540, 327685, 458759, 589832, 655369, 655370, 720906, 720907, 786443, 786444, 786444, 851980, 851980, 851980, 917517, 655370, 262149, 393222, 524295, 589832, 655369, 720906, 720906, 720907, 786443, 786443, 786444, 851980, 917516, 851980, 917516, 655370, 458759, 524295, 589832, 655369, 720905, 720906, 786442, 786443, 851979, 786443, 851979, 851980, 851980, 917516, 917517, 720905, 589832, 589832, 655369, 720905, 720906, 786442, 786442, 786443, 851979, 851979, 917515, 917516, 917516, 983052, 983052, 786441, 655369, 655369, 720905, 720906, 786442, 786442, 851978, 851979, 851979, 917515, 917516, 917516, 983052, 983052, 983053, 720905, 655370, 655369, 720906, 720906, 786442, 851978, 851979, 917515, 851979, 917515, 917516, 983052, 983052, 983052, 1048588, 786441, 720906, 720906, 720906, 786442, 851978, 851979, 851979, 851979, 917515, 917516, 917516, 917516, 983052, 983052, 1048589, 786441, 720907, 720906, 786442, 786442, 851979, 851979, 851979, 917515, 917516, 983052, 983052, 983052, 983052, 1114125, 1114125, 786442, 720907, 786443, 786443, 851979, 851979, 851979, 917515, 917515, 983051, 983052, 983052, 983052, 1048588, 1048589, 1048589, 786442, 786443, 786443, 786443, 851979, 851979, 917515, 917515, 983052, 983052, 983052, 983052, 1048588, 983053, 1048589, 983053, 851978, 786444, 851979, 786443, 851979, 917515, 917516, 917516, 917516, 983052, 1048588, 1048588, 1048589, 1114125, 1114125, 1048589, 786442, 851980, 851980, 851979, 851979, 917515, 917516, 983052, 1048588, 1048588, 1048588, 1048588, 1048589, 1048589, 983053, 1048589, 851978, 851980, 917516, 917516, 917516, 917516, 983052, 983052, 983052, 983052, 1114124, 1048589, 1048589, 1048589, 1048589, 1179661, 851978, 983052, 917516, 917516, 917516, 983052, 983052, 1048588, 1048588, 1048589, 1179661, 1114125, 1114125, 1114125, 1245197, 1114125, 851978, 917517, 983052, 851980, 917516, 1048588, 1048588, 983052, 1048589, 1048589, 1114125, 1179661, 1114125, 1245197, 1114125, 1048589, 851978, 655369, 655369, 655369, 720905, 720905, 786441, 786441, 786441, 851977, 851977, 851977, 851978, 851978, 851978, 851978, 655366], D.table23 = [65538, 262147, 458759, 262148, 327684, 458759, 393222, 458759, 524296], D.table56 = [65539, 262148, 458758, 524296, 262148, 327684, 524294, 589831, 458757, 524294, 589831, 655368, 524295, 524295, 589832, 655369], D.bitrate_table = [[0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1], [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], [0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1]], D.samplerate_table = [[22050, 24e3, 16e3, -1], [44100, 48e3, 32e3, -1], [11025, 12e3, 8e3, -1]], D.scfsi_band = [0, 6, 11, 16, 21];
    function o1(u) {
      this.bits = u;
    }
    function D0() {
      this.over_noise = 0, this.tot_noise = 0, this.max_noise = 0, this.over_count = 0, this.over_SSD = 0, this.bits = 0;
    }
    function V0() {
      this.setModules = function(u, k) {
      };
    }
    function w1() {
      this.useAdjust = 0, this.aaSensitivityP = 0, this.adjust = 0, this.adjustLimit = 0, this.decay = 0, this.floor = 0, this.l = W(t.SBMAX_l), this.s = W(t.SBMAX_s), this.psfb21 = W(t.PSFB21), this.psfb12 = W(t.PSFB12), this.cb_l = W(t.CBANDS), this.cb_s = W(t.CBANDS), this.eql_w = W(t.BLKSIZE / 2);
    }
    function c1() {
      this.class_id = 0, this.num_samples = 0, this.num_channels = 0, this.in_samplerate = 0, this.out_samplerate = 0, this.scale = 0, this.scale_left = 0, this.scale_right = 0, this.analysis = false, this.bWriteVbrTag = false, this.decode_only = false, this.quality = 0, this.mode = S0.STEREO, this.force_ms = false, this.free_format = false, this.findReplayGain = false, this.decode_on_the_fly = false, this.write_id3tag_automatic = false, this.brate = 0, this.compression_ratio = 0, this.copyright = 0, this.original = 0, this.extension = 0, this.emphasis = 0, this.error_protection = 0, this.strict_ISO = false, this.disable_reservoir = false, this.quant_comp = 0, this.quant_comp_short = 0, this.experimentalY = false, this.experimentalZ = 0, this.exp_nspsytune = 0, this.preset = 0, this.VBR = null, this.VBR_q_frac = 0, this.VBR_q = 0, this.VBR_mean_bitrate_kbps = 0, this.VBR_min_bitrate_kbps = 0, this.VBR_max_bitrate_kbps = 0, this.VBR_hard_min = 0, this.lowpassfreq = 0, this.highpassfreq = 0, this.lowpasswidth = 0, this.highpasswidth = 0, this.maskingadjust = 0, this.maskingadjust_short = 0, this.ATHonly = false, this.ATHshort = false, this.noATH = false, this.ATHtype = 0, this.ATHcurve = 0, this.ATHlower = 0, this.athaa_type = 0, this.athaa_loudapprox = 0, this.athaa_sensitivity = 0, this.short_blocks = null, this.useTemporal = false, this.interChRatio = 0, this.msfix = 0, this.tune = false, this.tune_value_a = 0, this.version = 0, this.encoder_delay = 0, this.encoder_padding = 0, this.framesize = 0, this.frameNum = 0, this.lame_allocated_gfp = 0, this.internal_flags = null;
    }
    function T1(u) {
      var k = u;
      this.quantize = k, this.iteration_loop = function(H, p, U, m) {
        var C = H.internal_flags, K = W(s0.SFBMAX), M = W(576), V = Y(2), d = 0, g = C.l3_side, E = new o1(d);
        this.quantize.rv.ResvFrameBegin(H, E), d = E.bits;
        for (var w = 0; w < C.mode_gr; w++) {
          this.quantize.qupvt.on_pe(H, p, V, d, w, w), C.mode_ext == t.MPG_MD_MS_LR && J();
          for (var e = 0; e < C.channels_out; e++) {
            var i, h, T = g.tt[w][e];
            T.block_type != t.SHORT_TYPE ? (i = 0, h = C.PSY.mask_adjust - i) : (i = 0, h = C.PSY.mask_adjust_short - i), C.masking_lower = Math.pow(10, h * 0.1), this.quantize.init_outer_loop(C, T), this.quantize.init_xrpow(C, T, M) && (this.quantize.qupvt.calc_xmin(H, m[w][e], T, K), this.quantize.outer_loop(H, T, K, M, e, V[e])), this.quantize.iteration_finish_one(C, w, e);
          }
        }
        this.quantize.rv.ResvFrameEnd(C, d);
      };
    }
    function d1() {
    }
    function Q0(u, k, H, p) {
      this.l = Y(1 + t.SBMAX_l), this.s = Y(1 + t.SBMAX_s), this.psfb21 = Y(1 + t.PSFB21), this.psfb12 = Y(1 + t.PSFB12);
      var U = this.l, m = this.s;
      arguments.length == 4 && (this.arrL = arguments[0], this.arrS = arguments[1], this.arr21 = arguments[2], this.arr12 = arguments[3], z.arraycopy(this.arrL, 0, U, 0, Math.min(this.arrL.length, this.l.length)), z.arraycopy(this.arrS, 0, m, 0, Math.min(this.arrS.length, this.s.length)), z.arraycopy(this.arr21, 0, this.psfb21, 0, Math.min(this.arr21.length, this.psfb21.length)), z.arraycopy(this.arr12, 0, this.psfb12, 0, Math.min(this.arr12.length, this.psfb12.length)));
    }
    z0.Q_MAX = 256 + 1, z0.Q_MAX2 = 116, z0.LARGE_BITS = 1e5, z0.IXMAX_VAL = 8206;
    function z0() {
      var u = null, k = null, H = null;
      this.setModules = function(c, l, v) {
        u = c, k = l, H = v;
      };
      function p(c) {
        return g[c + z0.Q_MAX2];
      }
      this.IPOW20 = function(c) {
        return E[c];
      };
      var U = 2220446049250313e-31, m = z0.IXMAX_VAL, C = m + 2, K = z0.Q_MAX, M = z0.Q_MAX2, V = 100;
      this.nr_of_sfb_block = [[[6, 5, 5, 5], [9, 9, 9, 9], [6, 9, 9, 9]], [[6, 5, 7, 3], [9, 9, 12, 6], [6, 9, 12, 6]], [[11, 10, 0, 0], [18, 18, 0, 0], [15, 18, 0, 0]], [[7, 7, 7, 0], [12, 12, 12, 0], [6, 15, 12, 0]], [[6, 6, 6, 3], [12, 9, 9, 6], [6, 12, 9, 6]], [[8, 8, 5, 0], [15, 12, 9, 0], [6, 18, 9, 0]]];
      var d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 0];
      this.pretab = d, this.sfBandIndex = [new Q0([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 24, 32, 42, 56, 74, 100, 132, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 114, 136, 162, 194, 232, 278, 332, 394, 464, 540, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 136, 180, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 52, 62, 74, 90, 110, 134, 162, 196, 238, 288, 342, 418, 576], [0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106, 136, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50, 60, 72, 88, 106, 128, 156, 190, 230, 276, 330, 384, 576], [0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100, 126, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 54, 66, 82, 102, 126, 156, 194, 240, 296, 364, 448, 550, 576], [0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138, 180, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0 / 3, 12 / 3, 24 / 3, 36 / 3, 54 / 3, 78 / 3, 108 / 3, 144 / 3, 186 / 3, 240 / 3, 312 / 3, 402 / 3, 522 / 3, 576 / 3], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0 / 3, 12 / 3, 24 / 3, 36 / 3, 54 / 3, 78 / 3, 108 / 3, 144 / 3, 186 / 3, 240 / 3, 312 / 3, 402 / 3, 522 / 3, 576 / 3], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new Q0([0, 12, 24, 36, 48, 60, 72, 88, 108, 132, 160, 192, 232, 280, 336, 400, 476, 566, 568, 570, 572, 574, 576], [0 / 3, 24 / 3, 48 / 3, 72 / 3, 108 / 3, 156 / 3, 216 / 3, 288 / 3, 372 / 3, 480 / 3, 486 / 3, 492 / 3, 498 / 3, 576 / 3], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0])];
      var g = W(K + M + 1), E = W(K), w = W(C), e = W(C);
      this.adj43 = e;
      function i(c, l) {
        var v = H.ATHformula(l, c);
        return v -= V, v = Math.pow(10, v / 10 + c.ATHlower), v;
      }
      function h(c) {
        for (var l = c.internal_flags.ATH.l, v = c.internal_flags.ATH.psfb21, s = c.internal_flags.ATH.s, x = c.internal_flags.ATH.psfb12, r = c.internal_flags, L = c.out_samplerate, _ = 0; _ < t.SBMAX_l; _++) {
          var o = r.scalefac_band.l[_], f = r.scalefac_band.l[_ + 1];
          l[_] = E0.MAX_VALUE;
          for (var b = o; b < f; b++) {
            var B = b * L / 1152, a = i(c, B);
            l[_] = Math.min(l[_], a);
          }
        }
        for (var _ = 0; _ < t.PSFB21; _++) {
          var o = r.scalefac_band.psfb21[_], f = r.scalefac_band.psfb21[_ + 1];
          v[_] = E0.MAX_VALUE;
          for (var b = o; b < f; b++) {
            var B = b * L / 1152, a = i(c, B);
            v[_] = Math.min(v[_], a);
          }
        }
        for (var _ = 0; _ < t.SBMAX_s; _++) {
          var o = r.scalefac_band.s[_], f = r.scalefac_band.s[_ + 1];
          s[_] = E0.MAX_VALUE;
          for (var b = o; b < f; b++) {
            var B = b * L / 384, a = i(c, B);
            s[_] = Math.min(s[_], a);
          }
          s[_] *= r.scalefac_band.s[_ + 1] - r.scalefac_band.s[_];
        }
        for (var _ = 0; _ < t.PSFB12; _++) {
          var o = r.scalefac_band.psfb12[_], f = r.scalefac_band.psfb12[_ + 1];
          x[_] = E0.MAX_VALUE;
          for (var b = o; b < f; b++) {
            var B = b * L / 384, a = i(c, B);
            x[_] = Math.min(x[_], a);
          }
          x[_] *= r.scalefac_band.s[13] - r.scalefac_band.s[12];
        }
        c.noATH && J(), r.ATH.floor = 10 * g0(i(c, -1));
      }
      this.iteration_init = function(c) {
        var l = c.internal_flags, v = l.l3_side, s;
        if (l.iteration_init_init == 0) {
          for (l.iteration_init_init = 1, v.main_data_begin = 0, h(c), w[0] = 0, s = 1; s < C; s++)
            w[s] = Math.pow(s, 4 / 3);
          for (s = 0; s < C - 1; s++)
            e[s] = s + 1 - Math.pow(0.5 * (w[s] + w[s + 1]), 0.75);
          for (e[s] = 0.5, s = 0; s < K; s++)
            E[s] = Math.pow(2, (s - 210) * -0.1875);
          for (s = 0; s <= K + M; s++)
            g[s] = Math.pow(2, (s - 210 - M) * 0.25);
          u.huffman_init(l);
          {
            var x, r, L, _;
            for (s = c.exp_nspsytune >> 2 & 63, s >= 32 && (s -= 64), x = Math.pow(10, s / 4 / 10), s = c.exp_nspsytune >> 8 & 63, s >= 32 && (s -= 64), r = Math.pow(10, s / 4 / 10), s = c.exp_nspsytune >> 14 & 63, s >= 32 && (s -= 64), L = Math.pow(10, s / 4 / 10), s = c.exp_nspsytune >> 20 & 63, s >= 32 && (s -= 64), _ = L * Math.pow(10, s / 4 / 10), s = 0; s < t.SBMAX_l; s++) {
              var o;
              s <= 6 ? o = x : s <= 13 ? o = r : s <= 20 ? o = L : o = _, l.nsPsy.longfact[s] = o;
            }
            for (s = 0; s < t.SBMAX_s; s++) {
              var o;
              s <= 5 ? o = x : s <= 10 ? o = r : s <= 11 ? o = L : o = _, l.nsPsy.shortfact[s] = o;
            }
          }
        }
      }, this.on_pe = function(c, l, v, s, x, r) {
        var L = c.internal_flags, _ = 0, o, f = Y(2), b, B = new o1(_), a = k.ResvMaxBits(c, s, B, r);
        _ = B.bits;
        var n = _ + a;
        for (n > v0.MAX_BITS_PER_GRANULE && (n = v0.MAX_BITS_PER_GRANULE), o = 0, b = 0; b < L.channels_out; ++b)
          v[b] = Math.min(v0.MAX_BITS_PER_CHANNEL, _ / L.channels_out), f[b] = 0 | v[b] * l[x][b] / 700 - v[b], f[b] > s * 3 / 4 && (f[b] = s * 3 / 4), f[b] < 0 && (f[b] = 0), f[b] + v[b] > v0.MAX_BITS_PER_CHANNEL && (f[b] = Math.max(0, v0.MAX_BITS_PER_CHANNEL - v[b])), o += f[b];
        if (o > a)
          for (b = 0; b < L.channels_out; ++b)
            f[b] = a * f[b] / o;
        for (b = 0; b < L.channels_out; ++b)
          v[b] += f[b], a -= f[b];
        for (o = 0, b = 0; b < L.channels_out; ++b)
          o += v[b];
        return o > v0.MAX_BITS_PER_GRANULE && J(), n;
      }, this.athAdjust = function(c, l, v) {
        var s = 90.30873362, x = 94.82444863, r = a0.FAST_LOG10_X(l, 10), L = c * c, _ = 0;
        return r -= v, L > 1e-20 && (_ = 1 + a0.FAST_LOG10_X(L, 10 / s)), _ < 0 && (_ = 0), r *= _, r += v + s - x, Math.pow(10, 0.1 * r);
      }, this.calc_xmin = function(c, l, v, s) {
        var x = 0, r = c.internal_flags, L, _ = 0, o = 0, f = r.ATH, b = v.xr, B = c.VBR == j.vbr_mtrh ? 1 : 0, a = r.masking_lower;
        for ((c.VBR == j.vbr_mtrh || c.VBR == j.vbr_mt) && (a = 1), L = 0; L < v.psy_lmax; L++) {
          var n, F, R, O, q, Z;
          c.VBR == j.vbr_rh || c.VBR == j.vbr_mtrh ? F = athAdjust(f.adjust, f.l[L], f.floor) : F = f.adjust * f.l[L], q = v.width[L], R = F / q, O = U, Z = q >> 1, n = 0;
          do {
            var e0, b0;
            e0 = b[_] * b[_], n += e0, O += e0 < R ? e0 : R, _++, b0 = b[_] * b[_], n += b0, O += b0 < R ? b0 : R, _++;
          } while (--Z > 0);
          if (n > F && o++, L == t.SBPSY_l && J(), B != 0 && (F = O), !c.ATHonly) {
            var A0 = l.en.l[L];
            if (A0 > 0) {
              var p0;
              p0 = n * l.thm.l[L] * a / A0, B != 0 && (p0 *= r.nsPsy.longfact[L]), F < p0 && (F = p0);
            }
          }
          B != 0 ? s[x++] = F : s[x++] = F * r.nsPsy.longfact[L];
        }
        var n1 = 575;
        if (v.block_type != t.SHORT_TYPE)
          for (var i1 = 576; i1-- != 0 && P0.EQ(b[i1], 0); )
            n1 = i1;
        v.max_nonzero_coeff = n1;
        for (var $0 = v.sfb_smin; L < v.psymax; $0++, L += 3) {
          var q, t1, u1;
          for (c.VBR == j.vbr_rh || c.VBR == j.vbr_mtrh ? u1 = athAdjust(f.adjust, f.s[$0], f.floor) : u1 = f.adjust * f.s[$0], q = v.width[L], t1 = 0; t1 < 3; t1++) {
            var n = 0, F, R, O, Z = q >> 1;
            R = u1 / q, O = U;
            do {
              var e0, b0;
              e0 = b[_] * b[_], n += e0, O += e0 < R ? e0 : R, _++, b0 = b[_] * b[_], n += b0, O += b0 < R ? b0 : R, _++;
            } while (--Z > 0);
            if (n > u1 && o++, $0 == t.SBPSY_s && J(), B != 0 ? F = O : F = u1, !c.ATHonly && !c.ATHshort) {
              var A0 = l.en.s[$0][t1];
              if (A0 > 0) {
                var p0;
                p0 = n * l.thm.s[$0][t1] * a / A0, B != 0 && (p0 *= r.nsPsy.shortfact[$0]), F < p0 && (F = p0);
              }
            }
            B != 0 ? s[x++] = F : s[x++] = F * r.nsPsy.shortfact[$0];
          }
          c.useTemporal && (s[x - 3] > s[x - 3 + 1] && (s[x - 3 + 1] += (s[x - 3] - s[x - 3 + 1]) * r.decay), s[x - 3 + 1] > s[x - 3 + 2] && (s[x - 3 + 2] += (s[x - 3 + 1] - s[x - 3 + 2]) * r.decay));
        }
        return o;
      };
      function T(c) {
        this.s = c;
      }
      this.calc_noise_core = function(c, l, v, s) {
        var x = 0, r = l.s, L = c.l3_enc;
        if (r > c.count1)
          for (; v-- != 0; ) {
            var _;
            _ = c.xr[r], r++, x += _ * _, _ = c.xr[r], r++, x += _ * _;
          }
        else if (r > c.big_values) {
          var o = W(2);
          for (o[0] = 0, o[1] = s; v-- != 0; ) {
            var _;
            _ = Math.abs(c.xr[r]) - o[L[r]], r++, x += _ * _, _ = Math.abs(c.xr[r]) - o[L[r]], r++, x += _ * _;
          }
        } else
          for (; v-- != 0; ) {
            var _;
            _ = Math.abs(c.xr[r]) - w[L[r]] * s, r++, x += _ * _, _ = Math.abs(c.xr[r]) - w[L[r]] * s, r++, x += _ * _;
          }
        return l.s = r, x;
      }, this.calc_noise = function(c, l, v, s, x) {
        var r = 0, L = 0, _, o, f = 0, b = 0, B = 0, a = -20, n = 0, F = c.scalefac, R = 0;
        for (s.over_SSD = 0, _ = 0; _ < c.psymax; _++) {
          var O = c.global_gain - (F[R++] + (c.preflag != 0 ? d[_] : 0) << c.scalefac_scale + 1) - c.subblock_gain[c.window[_]] * 8, q = 0;
          if (x != null && x.step[_] == O)
            q = x.noise[_], n += c.width[_], v[r++] = q / l[L++], q = x.noise_log[_];
          else {
            var Z = p(O);
            if (o = c.width[_] >> 1, n + c.width[_] > c.max_nonzero_coeff) {
              var e0;
              e0 = c.max_nonzero_coeff - n + 1, e0 > 0 ? o = e0 >> 1 : o = 0;
            }
            var b0 = new T(n);
            q = this.calc_noise_core(c, b0, o, Z), n = b0.s, x != null && (x.step[_] = O, x.noise[_] = q), q = v[r++] = q / l[L++], q = a0.FAST_LOG10(Math.max(q, 1e-20)), x != null && (x.noise_log[_] = q);
          }
          if (x != null && (x.global_gain = c.global_gain), B += q, q > 0) {
            var A0;
            A0 = Math.max(0 | q * 10 + 0.5, 1), s.over_SSD += A0 * A0, f++, b += q;
          }
          a = Math.max(a, q);
        }
        return s.over_count = f, s.tot_noise = B, s.over_noise = b, s.max_noise = a, f;
      };
    }
    function A1() {
      this.global_gain = 0, this.sfb_count1 = 0, this.step = Y(39), this.noise = W(39), this.noise_log = W(39);
    }
    function f1() {
      this.xr = W(576), this.l3_enc = Y(576), this.scalefac = Y(s0.SFBMAX), this.xrpow_max = 0, this.part2_3_length = 0, this.big_values = 0, this.count1 = 0, this.global_gain = 0, this.scalefac_compress = 0, this.block_type = 0, this.mixed_block_flag = 0, this.table_select = Y(3), this.subblock_gain = Y(3 + 1), this.region0_count = 0, this.region1_count = 0, this.preflag = 0, this.scalefac_scale = 0, this.count1table_select = 0, this.part2_length = 0, this.sfb_lmax = 0, this.sfb_smin = 0, this.psy_lmax = 0, this.sfbmax = 0, this.psymax = 0, this.sfbdivide = 0, this.width = Y(s0.SFBMAX), this.window = Y(s0.SFBMAX), this.count1bits = 0, this.sfb_partition_table = null, this.slen = Y(4), this.max_nonzero_coeff = 0;
      var u = this;
      function k(p) {
        return new Int32Array(p);
      }
      function H(p) {
        return new Float32Array(p);
      }
      this.assign = function(p) {
        u.xr = H(p.xr), u.l3_enc = k(p.l3_enc), u.scalefac = k(p.scalefac), u.xrpow_max = p.xrpow_max, u.part2_3_length = p.part2_3_length, u.big_values = p.big_values, u.count1 = p.count1, u.global_gain = p.global_gain, u.scalefac_compress = p.scalefac_compress, u.block_type = p.block_type, u.mixed_block_flag = p.mixed_block_flag, u.table_select = k(p.table_select), u.subblock_gain = k(p.subblock_gain), u.region0_count = p.region0_count, u.region1_count = p.region1_count, u.preflag = p.preflag, u.scalefac_scale = p.scalefac_scale, u.count1table_select = p.count1table_select, u.part2_length = p.part2_length, u.sfb_lmax = p.sfb_lmax, u.sfb_smin = p.sfb_smin, u.psy_lmax = p.psy_lmax, u.sfbmax = p.sfbmax, u.psymax = p.psymax, u.sfbdivide = p.sfbdivide, u.width = k(p.width), u.window = k(p.window), u.count1bits = p.count1bits, u.sfb_partition_table = p.sfb_partition_table.slice(0), u.slen = k(p.slen), u.max_nonzero_coeff = p.max_nonzero_coeff;
      };
    }
    var s0 = {};
    s0.SFBMAX = t.SBMAX_s * 3;
    function N1() {
      this.rv = null;
      var u;
      this.qupvt = null;
      var k, H = new V0(), p;
      this.setModules = function(e, i, h, T) {
        u = i, this.rv = i, k = h, this.qupvt = h, p = T, H.setModules(k, p);
      };
      function U(e, i, h, T) {
        T = 0;
        for (var c = 0; c <= h; ++c) {
          var l = Math.abs(e.xr[c]);
          T += l, i[c] = Math.sqrt(l * Math.sqrt(l)), i[c] > e.xrpow_max && (e.xrpow_max = i[c]);
        }
        return T;
      }
      this.init_xrpow = function(e, i, h) {
        var T = 0, c = 0 | i.max_nonzero_coeff;
        if (i.xrpow_max = 0, F0.fill(h, c, 576, 0), T = U(i, h, c, T), T > 1e-20) {
          var l = 0;
          e.substep_shaping & 2 && (l = 1);
          for (var v = 0; v < i.psymax; v++)
            e.pseudohalf[v] = l;
          return true;
        }
        return F0.fill(i.l3_enc, 0, 576, 0), false;
      };
      function m(e, i) {
        var h = e.ATH, T = i.xr;
        if (i.block_type != t.SHORT_TYPE)
          for (var c = false, l = t.PSFB21 - 1; l >= 0 && !c; l--) {
            var v = e.scalefac_band.psfb21[l], s = e.scalefac_band.psfb21[l + 1], x = k.athAdjust(h.adjust, h.psfb21[l], h.floor);
            e.nsPsy.longfact[21] > 1e-12 && (x *= e.nsPsy.longfact[21]);
            for (var r = s - 1; r >= v; r--)
              if (Math.abs(T[r]) < x)
                T[r] = 0;
              else {
                c = true;
                break;
              }
          }
        else
          for (var L = 0; L < 3; L++)
            for (var c = false, l = t.PSFB12 - 1; l >= 0 && !c; l--) {
              var v = e.scalefac_band.s[12] * 3 + (e.scalefac_band.s[13] - e.scalefac_band.s[12]) * L + (e.scalefac_band.psfb12[l] - e.scalefac_band.psfb12[0]), s = v + (e.scalefac_band.psfb12[l + 1] - e.scalefac_band.psfb12[l]), _ = k.athAdjust(h.adjust, h.psfb12[l], h.floor);
              e.nsPsy.shortfact[12] > 1e-12 && (_ *= e.nsPsy.shortfact[12]);
              for (var r = s - 1; r >= v; r--)
                if (Math.abs(T[r]) < _)
                  T[r] = 0;
                else {
                  c = true;
                  break;
                }
            }
      }
      this.init_outer_loop = function(e, i) {
        i.part2_3_length = 0, i.big_values = 0, i.count1 = 0, i.global_gain = 210, i.scalefac_compress = 0, i.table_select[0] = 0, i.table_select[1] = 0, i.table_select[2] = 0, i.subblock_gain[0] = 0, i.subblock_gain[1] = 0, i.subblock_gain[2] = 0, i.subblock_gain[3] = 0, i.region0_count = 0, i.region1_count = 0, i.preflag = 0, i.scalefac_scale = 0, i.count1table_select = 0, i.part2_length = 0, i.sfb_lmax = t.SBPSY_l, i.sfb_smin = t.SBPSY_s, i.psy_lmax = e.sfb21_extra ? t.SBMAX_l : t.SBPSY_l, i.psymax = i.psy_lmax, i.sfbmax = i.sfb_lmax, i.sfbdivide = 11;
        for (var h = 0; h < t.SBMAX_l; h++)
          i.width[h] = e.scalefac_band.l[h + 1] - e.scalefac_band.l[h], i.window[h] = 3;
        if (i.block_type == t.SHORT_TYPE) {
          var T = W(576);
          i.sfb_smin = 0, i.sfb_lmax = 0, i.mixed_block_flag != 0 && J(), i.psymax = i.sfb_lmax + 3 * ((e.sfb21_extra ? t.SBMAX_s : t.SBPSY_s) - i.sfb_smin), i.sfbmax = i.sfb_lmax + 3 * (t.SBPSY_s - i.sfb_smin), i.sfbdivide = i.sfbmax - 18, i.psy_lmax = i.sfb_lmax;
          var c = e.scalefac_band.l[i.sfb_lmax];
          z.arraycopy(i.xr, 0, T, 0, 576);
          for (var h = i.sfb_smin; h < t.SBMAX_s; h++)
            for (var l = e.scalefac_band.s[h], v = e.scalefac_band.s[h + 1], s = 0; s < 3; s++)
              for (var x = l; x < v; x++)
                i.xr[c++] = T[3 * x + s];
          for (var r = i.sfb_lmax, h = i.sfb_smin; h < t.SBMAX_s; h++)
            i.width[r] = i.width[r + 1] = i.width[r + 2] = e.scalefac_band.s[h + 1] - e.scalefac_band.s[h], i.window[r] = 0, i.window[r + 1] = 1, i.window[r + 2] = 2, r += 3;
        }
        i.count1bits = 0, i.sfb_partition_table = k.nr_of_sfb_block[0][0], i.slen[0] = 0, i.slen[1] = 0, i.slen[2] = 0, i.slen[3] = 0, i.max_nonzero_coeff = 575, F0.fill(i.scalefac, 0), m(e, i);
      };
      function C(e) {
        this.ordinal = e;
      }
      C.BINSEARCH_NONE = new C(0), C.BINSEARCH_UP = new C(1), C.BINSEARCH_DOWN = new C(2);
      function K(e, i, h, T, c) {
        var l, v = e.CurrentStep[T], s = false, x = e.OldValue[T], r = C.BINSEARCH_NONE;
        for (i.global_gain = x, h -= i.part2_length; ; ) {
          var L;
          if (l = p.count_bits(e, c, i, null), v == 1 || l == h)
            break;
          l > h ? (r == C.BINSEARCH_DOWN && (s = true), s && (v /= 2), r = C.BINSEARCH_UP, L = v) : (r == C.BINSEARCH_UP && (s = true), s && (v /= 2), r = C.BINSEARCH_DOWN, L = -v), i.global_gain += L, i.global_gain < 0 && J(), i.global_gain > 255 && J();
        }
        for (; l > h && i.global_gain < 255; )
          i.global_gain++, l = p.count_bits(e, c, i, null);
        return e.CurrentStep[T] = x - i.global_gain >= 4 ? 4 : 2, e.OldValue[T] = i.global_gain, i.part2_3_length = l, l;
      }
      function M(e) {
        for (var i = 0; i < e.sfbmax; i++)
          if (e.scalefac[i] + e.subblock_gain[e.window[i]] == 0)
            return false;
        return true;
      }
      function V(e, i, h, T, c) {
        var l;
        switch (e) {
          default:
          case 9: {
            i.over_count > 0 ? (l = h.over_SSD <= i.over_SSD, h.over_SSD == i.over_SSD && (l = h.bits < i.bits)) : l = h.max_noise < 0 && h.max_noise * 10 + h.bits <= i.max_noise * 10 + i.bits;
            break;
          }
          case 0:
            l = h.over_count < i.over_count || h.over_count == i.over_count && h.over_noise < i.over_noise || h.over_count == i.over_count && P0.EQ(h.over_noise, i.over_noise) && h.tot_noise < i.tot_noise;
            break;
          case 8:
            J();
          case 1:
            l = h.max_noise < i.max_noise;
            break;
          case 2:
            l = h.tot_noise < i.tot_noise;
            break;
          case 3:
            l = h.tot_noise < i.tot_noise && h.max_noise < i.max_noise;
            break;
          case 4:
            l = h.max_noise <= 0 && i.max_noise > 0.2 || h.max_noise <= 0 && i.max_noise < 0 && i.max_noise > h.max_noise - 0.2 && h.tot_noise < i.tot_noise || h.max_noise <= 0 && i.max_noise > 0 && i.max_noise > h.max_noise - 0.2 && h.tot_noise < i.tot_noise + i.over_noise || h.max_noise > 0 && i.max_noise > -0.05 && i.max_noise > h.max_noise - 0.1 && h.tot_noise + h.over_noise < i.tot_noise + i.over_noise || h.max_noise > 0 && i.max_noise > -0.1 && i.max_noise > h.max_noise - 0.15 && h.tot_noise + h.over_noise + h.over_noise < i.tot_noise + i.over_noise + i.over_noise;
            break;
          case 5:
            l = h.over_noise < i.over_noise || P0.EQ(h.over_noise, i.over_noise) && h.tot_noise < i.tot_noise;
            break;
          case 6:
            l = h.over_noise < i.over_noise || P0.EQ(h.over_noise, i.over_noise) && (h.max_noise < i.max_noise || P0.EQ(h.max_noise, i.max_noise) && h.tot_noise <= i.tot_noise);
            break;
          case 7:
            l = h.over_count < i.over_count || h.over_noise < i.over_noise;
            break;
        }
        return i.over_count == 0 && (l = l && h.bits < i.bits), l;
      }
      function d(e, i, h, T, c) {
        var l = e.internal_flags, v;
        i.scalefac_scale == 0 ? v = 1.2968395546510096 : v = 1.6817928305074292;
        for (var s = 0, x = 0; x < i.sfbmax; x++)
          s < h[x] && (s = h[x]);
        var r = l.noise_shaping_amp;
        switch (r == 3 && J(), r) {
          case 2:
            break;
          case 1:
            s > 1 ? s = Math.pow(s, 0.5) : s *= 0.95;
            break;
          case 0:
          default:
            s > 1 ? s = 1 : s *= 0.95;
            break;
        }
        for (var L = 0, x = 0; x < i.sfbmax; x++) {
          var _ = i.width[x], o;
          if (L += _, !(h[x] < s)) {
            for (l.substep_shaping & 2 && J(), i.scalefac[x]++, o = -_; o < 0; o++)
              T[L + o] *= v, T[L + o] > i.xrpow_max && (i.xrpow_max = T[L + o]);
            if (l.noise_shaping_amp == 2)
              return;
          }
        }
      }
      function g(e, i) {
        for (var h = 1.2968395546510096, T = 0, c = 0; c < e.sfbmax; c++) {
          var l = e.width[c], v = e.scalefac[c];
          if (e.preflag != 0 && (v += k.pretab[c]), T += l, v & 1) {
            v++;
            for (var s = -l; s < 0; s++)
              i[T + s] *= h, i[T + s] > e.xrpow_max && (e.xrpow_max = i[T + s]);
          }
          e.scalefac[c] = v >> 1;
        }
        e.preflag = 0, e.scalefac_scale = 1;
      }
      function E(e, i, h) {
        var T, c = i.scalefac;
        for (T = 0; T < i.sfb_lmax; T++)
          if (c[T] >= 16)
            return true;
        for (var l = 0; l < 3; l++) {
          var v = 0, s = 0;
          for (T = i.sfb_lmax + l; T < i.sfbdivide; T += 3)
            v < c[T] && (v = c[T]);
          for (; T < i.sfbmax; T += 3)
            s < c[T] && (s = c[T]);
          if (!(v < 16 && s < 8)) {
            if (i.subblock_gain[l] >= 7)
              return true;
            i.subblock_gain[l]++;
            var x = e.scalefac_band.l[i.sfb_lmax];
            for (T = i.sfb_lmax + l; T < i.sfbmax; T += 3) {
              var r, L = i.width[T], _ = c[T];
              if (_ = _ - (4 >> i.scalefac_scale), _ >= 0) {
                c[T] = _, x += L * 3;
                continue;
              }
              c[T] = 0;
              {
                var o = 210 + (_ << i.scalefac_scale + 1);
                r = k.IPOW20(o);
              }
              x += L * (l + 1);
              for (var f = -L; f < 0; f++)
                h[x + f] *= r, h[x + f] > i.xrpow_max && (i.xrpow_max = h[x + f]);
              x += L * (3 - l - 1);
            }
            {
              var r = k.IPOW20(202);
              x += i.width[T] * (l + 1);
              for (var f = -i.width[T]; f < 0; f++)
                h[x + f] *= r, h[x + f] > i.xrpow_max && (i.xrpow_max = h[x + f]);
            }
          }
        }
        return false;
      }
      function w(e, i, h, T, c) {
        var l = e.internal_flags;
        d(e, i, h, T);
        var v = M(i);
        return v ? false : (l.mode_gr == 2 ? v = p.scale_bitcount(i) : v = p.scale_bitcount_lsf(l, i), v ? (l.noise_shaping > 1 && (F0.fill(l.pseudohalf, 0), i.scalefac_scale == 0 ? (g(i, T), v = false) : i.block_type == t.SHORT_TYPE && l.subblock_gain > 0 && (v = E(l, i, T) || M(i))), v || (l.mode_gr == 2 ? v = p.scale_bitcount(i) : v = p.scale_bitcount_lsf(l, i)), !v) : true);
      }
      this.outer_loop = function(e, i, h, T, c, l) {
        var v = e.internal_flags, s = new f1(), x = W(576), r = W(s0.SFBMAX), L = new D0(), _, o = new A1(), f = 9999999, b = false, B = false, a = 0;
        if (K(v, i, l, c, T), v.noise_shaping == 0)
          return 100;
        k.calc_noise(i, h, r, L, o), L.bits = i.part2_3_length, s.assign(i);
        var n = 0;
        for (z.arraycopy(T, 0, x, 0, 576); !b; ) {
          do {
            var F = new D0(), R, O = 255;
            if (v.substep_shaping & 2 ? R = 20 : R = 3, v.sfb21_extra && J(), !w(e, s, r, T))
              break;
            s.scalefac_scale != 0 && (O = 254);
            var q = l - s.part2_length;
            if (q <= 0)
              break;
            for (; (s.part2_3_length = p.count_bits(v, T, s, o)) > q && s.global_gain <= O; )
              s.global_gain++;
            if (s.global_gain > O)
              break;
            if (L.over_count == 0) {
              for (; (s.part2_3_length = p.count_bits(v, T, s, o)) > f && s.global_gain <= O; )
                s.global_gain++;
              if (s.global_gain > O)
                break;
            }
            if (k.calc_noise(s, h, r, F, o), F.bits = s.part2_3_length, i.block_type != t.SHORT_TYPE ? _ = e.quant_comp : _ = e.quant_comp_short, _ = V(_, L, F) ? 1 : 0, _ != 0)
              f = i.part2_3_length, L = F, i.assign(s), n = 0, z.arraycopy(T, 0, x, 0, 576);
            else if (v.full_outer_loop == 0 && (++n > R && L.over_count == 0 || v.noise_shaping_amp == 3 && B && n > 30 || v.noise_shaping_amp == 3 && B && s.global_gain - a > 15))
              break;
          } while (s.global_gain + s.scalefac_scale < 255);
          v.noise_shaping_amp == 3 ? J() : b = true;
        }
        return e.VBR == j.vbr_rh || e.VBR == j.vbr_mtrh ? z.arraycopy(x, 0, T, 0, 576) : v.substep_shaping & 1 && J(), L.over_count;
      }, this.iteration_finish_one = function(e, i, h) {
        var T = e.l3_side, c = T.tt[i][h];
        p.best_scalefac_store(e, i, h, T), e.use_best_huffman == 1 && p.best_huffman_divide(e, c), u.ResvAdjust(e, c);
      };
    }
    function S() {
      var u = [-0.1482523854003001, 32.308141959636465, 296.40344946382766, 883.1344870032432, 11113.947376231741, 1057.2713659324597, 305.7402417275812, 30.825928907280012, 3.8533188138216365, 59.42900443849514, 709.5899960123345, 5281.91112291017, -5829.66483675846, -817.6293103748613, -76.91656988279972, -4.594269939176596, 0.9063471690191471, 0.1960342806591213, -0.15466694054279598, 34.324387823855965, 301.8067566458425, 817.599602898885, 11573.795901679885, 1181.2520595540152, 321.59731579894424, 31.232021761053772, 3.7107095756221318, 53.650946155329365, 684.167428119626, 5224.56624370173, -6366.391851890084, -908.9766368219582, -89.83068876699639, -5.411397422890401, 0.8206787908286602, 0.3901806440322567, -0.16070888947830023, 36.147034243915876, 304.11815768187864, 732.7429163887613, 11989.60988270091, 1300.012278487897, 335.28490093152146, 31.48816102859945, 3.373875931311736, 47.232241542899175, 652.7371796173471, 5132.414255594984, -6909.087078780055, -1001.9990371107289, -103.62185754286375, -6.104916304710272, 0.7416505462720353, 0.5805693545089249, -0.16636367662261495, 37.751650073343995, 303.01103387567713, 627.9747488785183, 12358.763425278165, 1412.2779918482834, 346.7496836825721, 31.598286663170416, 3.1598635433980946, 40.57878626349686, 616.1671130880391, 5007.833007176154, -7454.040671756168, -1095.7960341867115, -118.24411666465777, -6.818469345853504, 0.6681786379192989, 0.7653668647301797, -0.1716176790982088, 39.11551877123304, 298.3413246578966, 503.5259106886539, 12679.589408408976, 1516.5821921214542, 355.9850766329023, 31.395241710249053, 2.9164211881972335, 33.79716964664243, 574.8943997801362, 4853.234992253242, -7997.57021486075, -1189.7624067269965, -133.6444792601766, -7.7202770609839915, 0.5993769336819237, 0.9427934736519954, -0.17645823955292173, 40.21879108166477, 289.9982036694474, 359.3226160751053, 12950.259102786438, 1612.1013903507662, 362.85067106591504, 31.045922092242872, 2.822222032597987, 26.988862316190684, 529.8996541764288, 4671.371946949588, -8535.899136645805, -1282.5898586244496, -149.58553632943463, -8.643494270763135, 0.5345111359507916, 1.111140466039205, -0.36174739330527045, 41.04429910497807, 277.5463268268618, 195.6386023135583, 13169.43812144731, 1697.6433561479398, 367.40983966190305, 30.557037410382826, 2.531473372857427, 20.070154905927314, 481.50208566532336, 4464.970341588308, -9065.36882077239, -1373.62841526722, -166.1660487028118, -9.58289321133207, 0.4729647758913199, 1.268786568327291, -0.36970682634889585, 41.393213350082036, 261.2935935556502, 12.935476055240873, 13336.131683328815, 1772.508612059496, 369.76534388639965, 29.751323653701338, 2.4023193045459172, 13.304795348228817, 430.5615775526625, 4237.0568611071185, -9581.931701634761, -1461.6913552409758, -183.12733958476446, -10.718010163869403, 0.41421356237309503, 1.414213562373095, -0.37677560326535325, 41.619486213528496, 241.05423794991074, -187.94665032361226, 13450.063605744153, 1836.153896465782, 369.4908799925761, 29.001847876923147, 2.0714759319987186, 6.779591200894186, 377.7767837205709, 3990.386575512536, -10081.709459700915, -1545.947424837898, -200.3762958015653, -11.864482073055006, 0.3578057213145241, 1.546020906725474, -0.3829366947518991, 41.1516456456653, 216.47684307105183, -406.1569483347166, 13511.136535077321, 1887.8076599260432, 367.3025214564151, 28.136213436723654, 1.913880671464418, 0.3829366947518991, 323.85365704338597, 3728.1472257487526, -10561.233882199509, -1625.2025997821418, -217.62525175416, -13.015432208941645, 0.3033466836073424, 1.66293922460509, -0.5822628872992417, 40.35639251440489, 188.20071124269245, -640.2706748618148, 13519.21490106562, 1927.6022433578062, 362.8197642637487, 26.968821921868447, 1.7463817695935329, -5.62650678237171, 269.3016715297017, 3453.386536448852, -11016.145278780888, -1698.6569643425091, -234.7658734267683, -14.16351421663124, 0.2504869601913055, 1.76384252869671, -0.5887180101749253, 39.23429103868072, 155.76096234403798, -889.2492977967378, 13475.470561874661, 1955.0535223723712, 356.4450994756727, 25.894952980042156, 1.5695032905781554, -11.181939564328772, 214.80884394039484, 3169.1640829158237, -11443.321309975563, -1765.1588461316153, -251.68908574481912, -15.49755935939164, 0.198912367379658, 1.847759065022573, -0.7912582233652842, 37.39369355329111, 119.699486012458, -1151.0956593239027, 13380.446257078214, 1970.3952110853447, 348.01959814116185, 24.731487364283044, 1.3850130831637748, -16.421408865300393, 161.05030052864092, 2878.3322807850063, -11838.991423510031, -1823.985884688674, -268.2854986386903, -16.81724543849939, 0.1483359875383474, 1.913880671464418, -0.7960642926861912, 35.2322109610459, 80.01928065061526, -1424.0212633405113, 13235.794061869668, 1973.804052543835, 337.9908651258184, 23.289159354463873, 1.3934255946442087, -21.099669467133474, 108.48348407242611, 2583.700758091299, -12199.726194855148, -1874.2780658979746, -284.2467154529415, -18.11369784385905, 0.09849140335716425, 1.961570560806461, -0.998795456205172, 32.56307803611191, 36.958364584370486, -1706.075448829146, 13043.287458812016, 1965.3831106103316, 326.43182772364605, 22.175018750622293, 1.198638339011324, -25.371248002043963, 57.53505923036915, 2288.41886619975, -12522.674544337233, -1914.8400385312243, -299.26241273417224, -19.37805630698734, 0.04912684976946725, 1.990369453344394, 0.035780907 * a0.SQRT2 * 0.5 / 2384e-9, 0.017876148 * a0.SQRT2 * 0.5 / 2384e-9, 3134727e-9 * a0.SQRT2 * 0.5 / 2384e-9, 2457142e-9 * a0.SQRT2 * 0.5 / 2384e-9, 971317e-9 * a0.SQRT2 * 0.5 / 2384e-9, 218868e-9 * a0.SQRT2 * 0.5 / 2384e-9, 101566e-9 * a0.SQRT2 * 0.5 / 2384e-9, 13828e-9 * a0.SQRT2 * 0.5 / 2384e-9, 12804.797818791945, 1945.5515939597317, 313.4244966442953, 20.801593959731544, 1995.1556208053692, 9.000838926174497, -29.20218120805369], k = 12, H = 36, p = [[2382191739347913e-28, 6423305872147834e-28, 9400849094049688e-28, 1122435026096556e-27, 1183840321267481e-27, 1122435026096556e-27, 940084909404969e-27, 6423305872147839e-28, 2382191739347918e-28, 5456116108943412e-27, 4878985199565852e-27, 4240448995017367e-27, 3559909094758252e-27, 2858043359288075e-27, 2156177623817898e-27, 1475637723558783e-27, 8371015190102974e-28, 2599706096327376e-28, -5456116108943412e-27, -4878985199565852e-27, -4240448995017367e-27, -3559909094758252e-27, -2858043359288076e-27, -2156177623817898e-27, -1475637723558783e-27, -8371015190102975e-28, -2599706096327376e-28, -2382191739347923e-28, -6423305872147843e-28, -9400849094049696e-28, -1122435026096556e-27, -1183840321267481e-27, -1122435026096556e-27, -9400849094049694e-28, -642330587214784e-27, -2382191739347918e-28], [2382191739347913e-28, 6423305872147834e-28, 9400849094049688e-28, 1122435026096556e-27, 1183840321267481e-27, 1122435026096556e-27, 9400849094049688e-28, 6423305872147841e-28, 2382191739347918e-28, 5456116108943413e-27, 4878985199565852e-27, 4240448995017367e-27, 3559909094758253e-27, 2858043359288075e-27, 2156177623817898e-27, 1475637723558782e-27, 8371015190102975e-28, 2599706096327376e-28, -5461314069809755e-27, -4921085770524055e-27, -4343405037091838e-27, -3732668368707687e-27, -3093523840190885e-27, -2430835727329465e-27, -1734679010007751e-27, -974825365660928e-27, -2797435120168326e-28, 0, 0, 0, 0, 0, 0, -2283748241799531e-28, -4037858874020686e-28, -2146547464825323e-28], [0.1316524975873958, 0.414213562373095, 0.7673269879789602, 1.091308501069271, 1.303225372841206, 1.56968557711749, 1.920982126971166, 2.414213562373094, 3.171594802363212, 4.510708503662055, 7.595754112725146, 22.90376554843115, 0.984807753012208, 0.6427876096865394, 0.3420201433256688, 0.9396926207859084, -0.1736481776669303, -0.7660444431189779, 0.8660254037844387, 0.5, -0.5144957554275265, -0.4717319685649723, -0.3133774542039019, -0.1819131996109812, -0.09457419252642064, -0.04096558288530405, -0.01419856857247115, -0.003699974673760037, 0.8574929257125442, 0.8817419973177052, 0.9496286491027329, 0.9833145924917901, 0.9955178160675857, 0.9991605581781475, 0.999899195244447, 0.9999931550702802], [0, 0, 0, 0, 0, 0, 2283748241799531e-28, 4037858874020686e-28, 2146547464825323e-28, 5461314069809755e-27, 4921085770524055e-27, 4343405037091838e-27, 3732668368707687e-27, 3093523840190885e-27, 2430835727329466e-27, 1734679010007751e-27, 974825365660928e-27, 2797435120168326e-28, -5456116108943413e-27, -4878985199565852e-27, -4240448995017367e-27, -3559909094758253e-27, -2858043359288075e-27, -2156177623817898e-27, -1475637723558782e-27, -8371015190102975e-28, -2599706096327376e-28, -2382191739347913e-28, -6423305872147834e-28, -9400849094049688e-28, -1122435026096556e-27, -1183840321267481e-27, -1122435026096556e-27, -9400849094049688e-28, -6423305872147841e-28, -2382191739347918e-28]], U = p[t.SHORT_TYPE], m = p[t.SHORT_TYPE], C = p[t.SHORT_TYPE], K = p[t.SHORT_TYPE], M = [0, 1, 16, 17, 8, 9, 24, 25, 4, 5, 20, 21, 12, 13, 28, 29, 2, 3, 18, 19, 10, 11, 26, 27, 6, 7, 22, 23, 14, 15, 30, 31];
      function V(E, w, e) {
        for (var i = 10, h = w + 238 - 14 - 286, T = -15; T < 0; T++) {
          var c, l, v;
          c = u[i + -10], l = E[h + -224] * c, v = E[w + 224] * c, c = u[i + -9], l += E[h + -160] * c, v += E[w + 160] * c, c = u[i + -8], l += E[h + -96] * c, v += E[w + 96] * c, c = u[i + -7], l += E[h + -32] * c, v += E[w + 32] * c, c = u[i + -6], l += E[h + 32] * c, v += E[w + -32] * c, c = u[i + -5], l += E[h + 96] * c, v += E[w + -96] * c, c = u[i + -4], l += E[h + 160] * c, v += E[w + -160] * c, c = u[i + -3], l += E[h + 224] * c, v += E[w + -224] * c, c = u[i + -2], l += E[w + -256] * c, v -= E[h + 256] * c, c = u[i + -1], l += E[w + -192] * c, v -= E[h + 192] * c, c = u[i + 0], l += E[w + -128] * c, v -= E[h + 128] * c, c = u[i + 1], l += E[w + -64] * c, v -= E[h + 64] * c, c = u[i + 2], l += E[w + 0] * c, v -= E[h + 0] * c, c = u[i + 3], l += E[w + 64] * c, v -= E[h + -64] * c, c = u[i + 4], l += E[w + 128] * c, v -= E[h + -128] * c, c = u[i + 5], l += E[w + 192] * c, v -= E[h + -192] * c, l *= u[i + 6], c = v - l, e[30 + T * 2] = v + l, e[31 + T * 2] = u[i + 7] * c, i += 18, w--, h++;
        }
        {
          var l, v, s, x;
          v = E[w + -16] * u[i + -10], l = E[w + -32] * u[i + -2], v += (E[w + -48] - E[w + 16]) * u[i + -9], l += E[w + -96] * u[i + -1], v += (E[w + -80] + E[w + 48]) * u[i + -8], l += E[w + -160] * u[i + 0], v += (E[w + -112] - E[w + 80]) * u[i + -7], l += E[w + -224] * u[i + 1], v += (E[w + -144] + E[w + 112]) * u[i + -6], l -= E[w + 32] * u[i + 2], v += (E[w + -176] - E[w + 144]) * u[i + -5], l -= E[w + 96] * u[i + 3], v += (E[w + -208] + E[w + 176]) * u[i + -4], l -= E[w + 160] * u[i + 4], v += (E[w + -240] - E[w + 208]) * u[i + -3], l -= E[w + 224], s = l - v, x = l + v, v = e[14], l = e[15] - v, e[31] = x + v, e[30] = s + l, e[15] = s - l, e[14] = x - v;
        }
        {
          var r;
          r = e[28] - e[0], e[0] += e[28], e[28] = r * u[i + -2 * 18 + 7], r = e[29] - e[1], e[1] += e[29], e[29] = r * u[i + -2 * 18 + 7], r = e[26] - e[2], e[2] += e[26], e[26] = r * u[i + -4 * 18 + 7], r = e[27] - e[3], e[3] += e[27], e[27] = r * u[i + -4 * 18 + 7], r = e[24] - e[4], e[4] += e[24], e[24] = r * u[i + -6 * 18 + 7], r = e[25] - e[5], e[5] += e[25], e[25] = r * u[i + -6 * 18 + 7], r = e[22] - e[6], e[6] += e[22], e[22] = r * a0.SQRT2, r = e[23] - e[7], e[7] += e[23], e[23] = r * a0.SQRT2 - e[7], e[7] -= e[6], e[22] -= e[7], e[23] -= e[22], r = e[6], e[6] = e[31] - r, e[31] = e[31] + r, r = e[7], e[7] = e[30] - r, e[30] = e[30] + r, r = e[22], e[22] = e[15] - r, e[15] = e[15] + r, r = e[23], e[23] = e[14] - r, e[14] = e[14] + r, r = e[20] - e[8], e[8] += e[20], e[20] = r * u[i + -10 * 18 + 7], r = e[21] - e[9], e[9] += e[21], e[21] = r * u[i + -10 * 18 + 7], r = e[18] - e[10], e[10] += e[18], e[18] = r * u[i + -12 * 18 + 7], r = e[19] - e[11], e[11] += e[19], e[19] = r * u[i + -12 * 18 + 7], r = e[16] - e[12], e[12] += e[16], e[16] = r * u[i + -14 * 18 + 7], r = e[17] - e[13], e[13] += e[17], e[17] = r * u[i + -14 * 18 + 7], r = -e[20] + e[24], e[20] += e[24], e[24] = r * u[i + -12 * 18 + 7], r = -e[21] + e[25], e[21] += e[25], e[25] = r * u[i + -12 * 18 + 7], r = e[4] - e[8], e[4] += e[8], e[8] = r * u[i + -12 * 18 + 7], r = e[5] - e[9], e[5] += e[9], e[9] = r * u[i + -12 * 18 + 7], r = e[0] - e[12], e[0] += e[12], e[12] = r * u[i + -4 * 18 + 7], r = e[1] - e[13], e[1] += e[13], e[13] = r * u[i + -4 * 18 + 7], r = e[16] - e[28], e[16] += e[28], e[28] = r * u[i + -4 * 18 + 7], r = -e[17] + e[29], e[17] += e[29], e[29] = r * u[i + -4 * 18 + 7], r = a0.SQRT2 * (e[2] - e[10]), e[2] += e[10], e[10] = r, r = a0.SQRT2 * (e[3] - e[11]), e[3] += e[11], e[11] = r, r = a0.SQRT2 * (-e[18] + e[26]), e[18] += e[26], e[26] = r - e[18], r = a0.SQRT2 * (-e[19] + e[27]), e[19] += e[27], e[27] = r - e[19], r = e[2], e[19] -= e[3], e[3] -= r, e[2] = e[31] - r, e[31] += r, r = e[3], e[11] -= e[19], e[18] -= r, e[3] = e[30] - r, e[30] += r, r = e[18], e[27] -= e[11], e[19] -= r, e[18] = e[15] - r, e[15] += r, r = e[19], e[10] -= r, e[19] = e[14] - r, e[14] += r, r = e[10], e[11] -= r, e[10] = e[23] - r, e[23] += r, r = e[11], e[26] -= r, e[11] = e[22] - r, e[22] += r, r = e[26], e[27] -= r, e[26] = e[7] - r, e[7] += r, r = e[27], e[27] = e[6] - r, e[6] += r, r = a0.SQRT2 * (e[0] - e[4]), e[0] += e[4], e[4] = r, r = a0.SQRT2 * (e[1] - e[5]), e[1] += e[5], e[5] = r, r = a0.SQRT2 * (e[16] - e[20]), e[16] += e[20], e[20] = r, r = a0.SQRT2 * (e[17] - e[21]), e[17] += e[21], e[21] = r, r = -a0.SQRT2 * (e[8] - e[12]), e[8] += e[12], e[12] = r - e[8], r = -a0.SQRT2 * (e[9] - e[13]), e[9] += e[13], e[13] = r - e[9], r = -a0.SQRT2 * (e[25] - e[29]), e[25] += e[29], e[29] = r - e[25], r = -a0.SQRT2 * (e[24] + e[28]), e[24] -= e[28], e[28] = r - e[24], r = e[24] - e[16], e[24] = r, r = e[20] - r, e[20] = r, r = e[28] - r, e[28] = r, r = e[25] - e[17], e[25] = r, r = e[21] - r, e[21] = r, r = e[29] - r, e[29] = r, r = e[17] - e[1], e[17] = r, r = e[9] - r, e[9] = r, r = e[25] - r, e[25] = r, r = e[5] - r, e[5] = r, r = e[21] - r, e[21] = r, r = e[13] - r, e[13] = r, r = e[29] - r, e[29] = r, r = e[1] - e[0], e[1] = r, r = e[16] - r, e[16] = r, r = e[17] - r, e[17] = r, r = e[8] - r, e[8] = r, r = e[9] - r, e[9] = r, r = e[24] - r, e[24] = r, r = e[25] - r, e[25] = r, r = e[4] - r, e[4] = r, r = e[5] - r, e[5] = r, r = e[20] - r, e[20] = r, r = e[21] - r, e[21] = r, r = e[12] - r, e[12] = r, r = e[13] - r, e[13] = r, r = e[28] - r, e[28] = r, r = e[29] - r, e[29] = r, r = e[0], e[0] += e[31], e[31] -= r, r = e[1], e[1] += e[30], e[30] -= r, r = e[16], e[16] += e[15], e[15] -= r, r = e[17], e[17] += e[14], e[14] -= r, r = e[8], e[8] += e[23], e[23] -= r, r = e[9], e[9] += e[22], e[22] -= r, r = e[24], e[24] += e[7], e[7] -= r, r = e[25], e[25] += e[6], e[6] -= r, r = e[4], e[4] += e[27], e[27] -= r, r = e[5], e[5] += e[26], e[26] -= r, r = e[20], e[20] += e[11], e[11] -= r, r = e[21], e[21] += e[10], e[10] -= r, r = e[12], e[12] += e[19], e[19] -= r, r = e[13], e[13] += e[18], e[18] -= r, r = e[28], e[28] += e[3], e[3] -= r, r = e[29], e[29] += e[2], e[2] -= r;
        }
      }
      function d(E, w) {
        for (var e = 0; e < 3; e++) {
          var i, h, T, c, l, v;
          c = E[w + 2 * 3] * p[t.SHORT_TYPE][0] - E[w + 5 * 3], i = E[w + 0 * 3] * p[t.SHORT_TYPE][2] - E[w + 3 * 3], h = c + i, T = c - i, c = E[w + 5 * 3] * p[t.SHORT_TYPE][0] + E[w + 2 * 3], i = E[w + 3 * 3] * p[t.SHORT_TYPE][2] + E[w + 0 * 3], l = c + i, v = -c + i, i = (E[w + 1 * 3] * p[t.SHORT_TYPE][1] - E[w + 4 * 3]) * 2069978111953089e-26, c = (E[w + 4 * 3] * p[t.SHORT_TYPE][1] + E[w + 1 * 3]) * 2069978111953089e-26, E[w + 3 * 0] = h * 190752519173728e-25 + i, E[w + 3 * 5] = -l * 190752519173728e-25 + c, T = T * 0.8660254037844387 * 1907525191737281e-26, l = l * 0.5 * 1907525191737281e-26 + c, E[w + 3 * 1] = T - l, E[w + 3 * 2] = T + l, h = h * 0.5 * 1907525191737281e-26 - i, v = v * 0.8660254037844387 * 1907525191737281e-26, E[w + 3 * 3] = h + v, E[w + 3 * 4] = h - v, w++;
        }
      }
      function g(E, w, e) {
        var i, h;
        {
          var T, c, l, v, s, x, r, L;
          T = e[17] - e[9], l = e[15] - e[11], v = e[14] - e[12], s = e[0] + e[8], x = e[1] + e[7], r = e[2] + e[6], L = e[3] + e[5], E[w + 17] = s + r - L - (x - e[4]), h = (s + r - L) * m[12 + 7] + (x - e[4]), i = (T - l - v) * m[12 + 6], E[w + 5] = i + h, E[w + 6] = i - h, c = (e[16] - e[10]) * m[12 + 6], x = x * m[12 + 7] + e[4], i = T * m[12 + 0] + c + l * m[12 + 1] + v * m[12 + 2], h = -s * m[12 + 4] + x - r * m[12 + 5] + L * m[12 + 3], E[w + 1] = i + h, E[w + 2] = i - h, i = T * m[12 + 1] - c - l * m[12 + 2] + v * m[12 + 0], h = -s * m[12 + 5] + x - r * m[12 + 3] + L * m[12 + 4], E[w + 9] = i + h, E[w + 10] = i - h, i = T * m[12 + 2] - c + l * m[12 + 0] - v * m[12 + 1], h = s * m[12 + 3] - x + r * m[12 + 4] - L * m[12 + 5], E[w + 13] = i + h, E[w + 14] = i - h;
        }
        {
          var _, o, f, b, B, a, n, F;
          _ = e[8] - e[0], f = e[6] - e[2], b = e[5] - e[3], B = e[17] + e[9], a = e[16] + e[10], n = e[15] + e[11], F = e[14] + e[12], E[w + 0] = B + n + F + (a + e[13]), i = (B + n + F) * m[12 + 7] - (a + e[13]), h = (_ - f + b) * m[12 + 6], E[w + 11] = i + h, E[w + 12] = i - h, o = (e[7] - e[1]) * m[12 + 6], a = e[13] - a * m[12 + 7], i = B * m[12 + 3] - a + n * m[12 + 4] + F * m[12 + 5], h = _ * m[12 + 2] + o + f * m[12 + 0] + b * m[12 + 1], E[w + 3] = i + h, E[w + 4] = i - h, i = -B * m[12 + 5] + a - n * m[12 + 3] - F * m[12 + 4], h = _ * m[12 + 1] + o - f * m[12 + 2] - b * m[12 + 0], E[w + 7] = i + h, E[w + 8] = i - h, i = -B * m[12 + 4] + a - n * m[12 + 5] - F * m[12 + 3], h = _ * m[12 + 0] - o + f * m[12 + 1] - b * m[12 + 2], E[w + 15] = i + h, E[w + 16] = i - h;
        }
      }
      this.mdct_sub48 = function(E, w, e) {
        for (var i = w, h = 286, T = 0; T < E.channels_out; T++) {
          for (var c = 0; c < E.mode_gr; c++) {
            for (var l, v = E.l3_side.tt[c][T], s = v.xr, x = 0, r = E.sb_sample[T][1 - c], L = 0, _ = 0; _ < 18 / 2; _++)
              for (V(i, h, r[L]), V(i, h + 32, r[L + 1]), L += 2, h += 64, l = 1; l < 32; l += 2)
                r[L - 1][l] *= -1;
            for (l = 0; l < 32; l++, x += 18) {
              var o = v.block_type, f = E.sb_sample[T][c], b = E.sb_sample[T][1 - c];
              if (v.mixed_block_flag != 0 && l < 2 && (o = 0), E.amp_filter[l] < 1e-12)
                F0.fill(s, x + 0, x + 18, 0);
              else if (E.amp_filter[l] < 1 && J(), o == t.SHORT_TYPE) {
                for (var _ = -k / 4; _ < 0; _++) {
                  var B = p[t.SHORT_TYPE][_ + 3];
                  s[x + _ * 3 + 9] = f[9 + _][M[l]] * B - f[8 - _][M[l]], s[x + _ * 3 + 18] = f[14 - _][M[l]] * B + f[15 + _][M[l]], s[x + _ * 3 + 10] = f[15 + _][M[l]] * B - f[14 - _][M[l]], s[x + _ * 3 + 19] = b[2 - _][M[l]] * B + b[3 + _][M[l]], s[x + _ * 3 + 11] = b[3 + _][M[l]] * B - b[2 - _][M[l]], s[x + _ * 3 + 20] = b[8 - _][M[l]] * B + b[9 + _][M[l]];
                }
                d(s, x);
              } else {
                for (var a = W(18), _ = -H / 4; _ < 0; _++) {
                  var n, F;
                  n = p[o][_ + 27] * b[_ + 9][M[l]] + p[o][_ + 36] * b[8 - _][M[l]], F = p[o][_ + 9] * f[_ + 9][M[l]] - p[o][_ + 18] * f[8 - _][M[l]], a[_ + 9] = n - F * U[3 + _ + 9], a[_ + 18] = n * U[3 + _ + 9] + F;
                }
                g(s, x, a);
              }
              if (o != t.SHORT_TYPE && l != 0)
                for (var _ = 7; _ >= 0; --_) {
                  var R, O;
                  R = s[x + _] * C[20 + _] + s[x + -1 - _] * K[28 + _], O = s[x + _] * K[28 + _] - s[x + -1 - _] * C[20 + _], s[x + -1 - _] = R, s[x + _] = O;
                }
            }
          }
          if (i = e, h = 286, E.mode_gr == 1)
            for (var q = 0; q < 18; q++)
              z.arraycopy(E.sb_sample[T][1][q], 0, E.sb_sample[T][0][q], 0, 32);
        }
      };
    }
    function A() {
      this.thm = new $(), this.en = new $();
    }
    t.ENCDELAY = 576, t.POSTDELAY = 1152, t.MDCTDELAY = 48, t.FFTOFFSET = 224 + t.MDCTDELAY, t.DECDELAY = 528, t.SBLIMIT = 32, t.CBANDS = 64, t.SBPSY_l = 21, t.SBPSY_s = 12, t.SBMAX_l = 22, t.SBMAX_s = 13, t.PSFB21 = 6, t.PSFB12 = 6, t.BLKSIZE = 1024, t.HBLKSIZE = t.BLKSIZE / 2 + 1, t.BLKSIZE_s = 256, t.HBLKSIZE_s = t.BLKSIZE_s / 2 + 1, t.NORM_TYPE = 0, t.START_TYPE = 1, t.SHORT_TYPE = 2, t.STOP_TYPE = 3, t.MPG_MD_LR_LR = 0, t.MPG_MD_LR_I = 1, t.MPG_MD_MS_LR = 2, t.MPG_MD_MS_I = 3, t.fircoef = [-0.0207887 * 5, -0.0378413 * 5, -0.0432472 * 5, -0.031183 * 5, 779609e-23 * 5, 0.0467745 * 5, 0.10091 * 5, 0.151365 * 5, 0.187098 * 5];
    function t() {
      var u = t.MPG_MD_MS_LR, k = null;
      this.psy = null;
      var H = null, p = null;
      this.setModules = function(M, V, d, g) {
        k = M, this.psy = V, H = V, p = g;
      };
      var U = new S();
      function m(M) {
        var V, d;
        if (M.ATH.useAdjust == 0) {
          M.ATH.adjust = 1;
          return;
        }
        if (d = M.loudness_sq[0][0], V = M.loudness_sq[1][0], M.channels_out == 2 ? J() : (d += d, V += V), M.mode_gr == 2 && (d = Math.max(d, V)), d *= 0.5, d *= M.ATH.aaSensitivityP, d > 0.03125)
          M.ATH.adjust >= 1 ? M.ATH.adjust = 1 : M.ATH.adjust < M.ATH.adjustLimit && (M.ATH.adjust = M.ATH.adjustLimit), M.ATH.adjustLimit = 1;
        else {
          var g = 31.98 * d + 625e-6;
          M.ATH.adjust >= g ? (M.ATH.adjust *= g * 0.075 + 0.925, M.ATH.adjust < g && (M.ATH.adjust = g)) : M.ATH.adjustLimit >= g ? M.ATH.adjust = g : M.ATH.adjust < M.ATH.adjustLimit && (M.ATH.adjust = M.ATH.adjustLimit), M.ATH.adjustLimit = g;
        }
      }
      function C(M) {
        var V, d;
        for (M.bitrate_stereoMode_Hist[M.bitrate_index][4]++, M.bitrate_stereoMode_Hist[15][4]++, M.channels_out == 2 && J(), V = 0; V < M.mode_gr; ++V)
          for (d = 0; d < M.channels_out; ++d) {
            var g = M.l3_side.tt[V][d].block_type | 0;
            M.l3_side.tt[V][d].mixed_block_flag != 0 && (g = 4), M.bitrate_blockType_Hist[M.bitrate_index][g]++, M.bitrate_blockType_Hist[M.bitrate_index][5]++, M.bitrate_blockType_Hist[15][g]++, M.bitrate_blockType_Hist[15][5]++;
          }
      }
      function K(M, V) {
        var d = M.internal_flags, g, E;
        if (d.lame_encode_frame_init == 0) {
          var w, e, i = W(2014), h = W(286 + 1152 + 576);
          for (d.lame_encode_frame_init = 1, w = 0, e = 0; w < 286 + 576 * (1 + d.mode_gr); ++w)
            w < 576 * d.mode_gr ? (i[w] = 0, d.channels_out == 2 && (h[w] = 0)) : (i[w] = V[0][e], d.channels_out == 2 && (h[w] = V[1][e]), ++e);
          for (E = 0; E < d.mode_gr; E++)
            for (g = 0; g < d.channels_out; g++)
              d.l3_side.tt[E][g].block_type = t.SHORT_TYPE;
          U.mdct_sub48(d, i, h);
        }
      }
      this.lame_encode_mp3_frame = function(M, V, d, g, E, w) {
        var e, i = B0([2, 2]);
        i[0][0] = new A(), i[0][1] = new A(), i[1][0] = new A(), i[1][1] = new A();
        var h = B0([2, 2]);
        h[0][0] = new A(), h[0][1] = new A(), h[1][0] = new A(), h[1][1] = new A();
        var T, c = [null, null], l = M.internal_flags, v = d0([2, 4]), s = [0.5, 0.5], x = [[0, 0], [0, 0]], r = [[0, 0], [0, 0]], L, _, o;
        if (c[0] = V, c[1] = d, l.lame_encode_frame_init == 0 && K(M, c), l.padding = 0, (l.slot_lag -= l.frac_SpF) < 0 && (l.slot_lag += M.out_samplerate, l.padding = 1), l.psymodel != 0) {
          var f, b = [null, null], B = 0, a = Y(2);
          for (o = 0; o < l.mode_gr; o++) {
            for (_ = 0; _ < l.channels_out; _++)
              b[_] = c[_], B = 576 + o * 576 - t.FFTOFFSET;
            if (M.VBR == j.vbr_mtrh || M.VBR == j.vbr_mt ? J() : f = H.L3psycho_anal_ns(M, b, B, o, i, h, x[o], r[o], v[o], a), f != 0)
              return -4;
            for (M.mode == S0.JOINT_STEREO && J(), _ = 0; _ < l.channels_out; _++) {
              var n = l.l3_side.tt[o][_];
              n.block_type = a[_], n.mixed_block_flag = 0;
            }
          }
        } else
          J();
        if (m(l), U.mdct_sub48(l, c[0], c[1]), l.mode_ext = t.MPG_MD_LR_LR, M.force_ms ? l.mode_ext = t.MPG_MD_MS_LR : M.mode == S0.JOINT_STEREO && J(), l.mode_ext == u ? (T = h, L = r) : (T = i, L = x), M.analysis && l.pinfo != null && J(), M.VBR == j.vbr_off || M.VBR == j.vbr_abr) {
          var F, R;
          for (F = 0; F < 18; F++)
            l.nsPsy.pefirbuf[F] = l.nsPsy.pefirbuf[F + 1];
          for (R = 0, o = 0; o < l.mode_gr; o++)
            for (_ = 0; _ < l.channels_out; _++)
              R += L[o][_];
          for (l.nsPsy.pefirbuf[18] = R, R = l.nsPsy.pefirbuf[9], F = 0; F < 9; F++)
            R += (l.nsPsy.pefirbuf[F] + l.nsPsy.pefirbuf[18 - F]) * t.fircoef[F];
          for (R = 670 * 5 * l.mode_gr * l.channels_out / R, o = 0; o < l.mode_gr; o++)
            for (_ = 0; _ < l.channels_out; _++)
              L[o][_] *= R;
        }
        return l.iteration_loop.iteration_loop(M, L, s, T), k.format_bitstream(M), e = k.copy_buffer(l, g, E, w, 1), M.bWriteVbrTag && p.addVbrFrame(M), M.analysis && l.pinfo != null && J(), C(l), e;
      };
    }
    function I() {
      this.sum = 0, this.seen = 0, this.want = 0, this.pos = 0, this.size = 0, this.bag = null, this.nVbrNumFrames = 0, this.nBytesWritten = 0, this.TotalFrameSize = 0;
    }
    function X() {
      this.tt = [[null, null], [null, null]], this.main_data_begin = 0, this.private_bits = 0, this.resvDrain_pre = 0, this.resvDrain_post = 0, this.scfsi = [Y(4), Y(4)];
      for (var u = 0; u < 2; u++)
        for (var k = 0; k < 2; k++)
          this.tt[u][k] = new f1();
    }
    function $() {
      this.l = W(t.SBMAX_l), this.s = d0([t.SBMAX_s, 3]);
      var u = this;
      this.assign = function(k) {
        z.arraycopy(k.l, 0, u.l, 0, t.SBMAX_l);
        for (var H = 0; H < t.SBMAX_s; H++)
          for (var p = 0; p < 3; p++)
            u.s[H][p] = k.s[H][p];
      };
    }
    function Q() {
      this.last_en_subshort = d0([4, 9]), this.lastAttacks = Y(4), this.pefirbuf = W(19), this.longfact = W(t.SBMAX_l), this.shortfact = W(t.SBMAX_s), this.attackthre = 0, this.attackthre_s = 0;
    }
    v0.MFSIZE = 3 * 1152 + t.ENCDELAY - t.MDCTDELAY, v0.MAX_HEADER_BUF = 256, v0.MAX_BITS_PER_CHANNEL = 4095, v0.MAX_BITS_PER_GRANULE = 7680, v0.BPC = 320;
    function v0() {
      var u = 40;
      this.Class_ID = 0, this.lame_encode_frame_init = 0, this.iteration_init_init = 0, this.fill_buffer_resample_init = 0, this.mfbuf = d0([2, v0.MFSIZE]), this.mode_gr = 0, this.channels_in = 0, this.channels_out = 0, this.resample_ratio = 0, this.mf_samples_to_encode = 0, this.mf_size = 0, this.VBR_min_bitrate = 0, this.VBR_max_bitrate = 0, this.bitrate_index = 0, this.samplerate_index = 0, this.mode_ext = 0, this.lowpass1 = 0, this.lowpass2 = 0, this.highpass1 = 0, this.highpass2 = 0, this.noise_shaping = 0, this.noise_shaping_amp = 0, this.substep_shaping = 0, this.psymodel = 0, this.noise_shaping_stop = 0, this.subblock_gain = 0, this.use_best_huffman = 0, this.full_outer_loop = 0, this.l3_side = new X(), this.ms_ratio = W(2), this.padding = 0, this.frac_SpF = 0, this.slot_lag = 0, this.tag_spec = null, this.nMusicCRC = 0, this.OldValue = Y(2), this.CurrentStep = Y(2), this.masking_lower = 0, this.bv_scf = Y(576), this.pseudohalf = Y(s0.SFBMAX), this.sfb21_extra = false, this.inbuf_old = new Array(2), this.blackfilt = new Array(2 * v0.BPC + 1), this.itime = L0(2), this.sideinfo_len = 0, this.sb_sample = d0([2, 2, 18, t.SBLIMIT]), this.amp_filter = W(32);
      function k() {
        this.write_timing = 0, this.ptr = 0, this.buf = Z0(u);
      }
      this.header = new Array(v0.MAX_HEADER_BUF), this.h_ptr = 0, this.w_ptr = 0, this.ancillary_flag = 0, this.ResvSize = 0, this.ResvMax = 0, this.scalefac_band = new Q0(), this.minval_l = W(t.CBANDS), this.minval_s = W(t.CBANDS), this.nb_1 = d0([4, t.CBANDS]), this.nb_2 = d0([4, t.CBANDS]), this.nb_s1 = d0([4, t.CBANDS]), this.nb_s2 = d0([4, t.CBANDS]), this.s3_ss = null, this.s3_ll = null, this.decay = 0, this.thm = new Array(4), this.en = new Array(4), this.tot_ener = W(4), this.loudness_sq = d0([2, 2]), this.loudness_sq_save = W(2), this.mld_l = W(t.SBMAX_l), this.mld_s = W(t.SBMAX_s), this.bm_l = Y(t.SBMAX_l), this.bo_l = Y(t.SBMAX_l), this.bm_s = Y(t.SBMAX_s), this.bo_s = Y(t.SBMAX_s), this.npart_l = 0, this.npart_s = 0, this.s3ind = w0([t.CBANDS, 2]), this.s3ind_s = w0([t.CBANDS, 2]), this.numlines_s = Y(t.CBANDS), this.numlines_l = Y(t.CBANDS), this.rnumlines_l = W(t.CBANDS), this.mld_cb_l = W(t.CBANDS), this.mld_cb_s = W(t.CBANDS), this.numlines_s_num1 = 0, this.numlines_l_num1 = 0, this.pe = W(4), this.ms_ratio_s_old = 0, this.ms_ratio_l_old = 0, this.ms_ener_ratio_old = 0, this.blocktype_old = Y(2), this.nsPsy = new Q(), this.VBR_seek_table = new I(), this.ATH = null, this.PSY = null, this.nogap_total = 0, this.nogap_current = 0, this.decode_on_the_fly = true, this.findReplayGain = true, this.findPeakSample = true, this.PeakSample = 0, this.RadioGain = 0, this.AudiophileGain = 0, this.rgdata = null, this.noclipGainChange = 0, this.noclipScale = 0, this.bitrate_stereoMode_Hist = w0([16, 4 + 1]), this.bitrate_blockType_Hist = w0([16, 4 + 1 + 1]), this.pinfo = null, this.hip = null, this.in_buffer_nsamples = 0, this.in_buffer_0 = null, this.in_buffer_1 = null, this.iteration_loop = null;
      for (var H = 0; H < this.en.length; H++)
        this.en[H] = new $();
      for (var H = 0; H < this.thm.length; H++)
        this.thm[H] = new $();
      for (var H = 0; H < this.header.length; H++)
        this.header[H] = new k();
    }
    function f0() {
      var u = W(t.BLKSIZE), k = W(t.BLKSIZE_s / 2), H = [0.9238795325112867, 0.3826834323650898, 0.9951847266721969, 0.0980171403295606, 0.9996988186962042, 0.02454122852291229, 0.9999811752826011, 0.006135884649154475];
      function p(m, C, K) {
        var M = 0, V, d, g;
        K <<= 1;
        var E = C + K;
        V = 4;
        do {
          var w, e, i, h, T, c, l;
          l = V >> 1, h = V, T = V << 1, c = T + h, V = T << 1, d = C, g = d + l;
          do {
            var v, s, x, r;
            s = m[d + 0] - m[d + h], v = m[d + 0] + m[d + h], r = m[d + T] - m[d + c], x = m[d + T] + m[d + c], m[d + T] = v - x, m[d + 0] = v + x, m[d + c] = s - r, m[d + h] = s + r, s = m[g + 0] - m[g + h], v = m[g + 0] + m[g + h], r = a0.SQRT2 * m[g + c], x = a0.SQRT2 * m[g + T], m[g + T] = v - x, m[g + 0] = v + x, m[g + c] = s - r, m[g + h] = s + r, g += V, d += V;
          } while (d < E);
          for (e = H[M + 0], w = H[M + 1], i = 1; i < l; i++) {
            var L, _;
            L = 1 - 2 * w * w, _ = 2 * w * e, d = C + i, g = C + h - i;
            do {
              var o, f, b, v, s, B, x, a, r, n;
              f = _ * m[d + h] - L * m[g + h], o = L * m[d + h] + _ * m[g + h], s = m[d + 0] - o, v = m[d + 0] + o, B = m[g + 0] - f, b = m[g + 0] + f, f = _ * m[d + c] - L * m[g + c], o = L * m[d + c] + _ * m[g + c], r = m[d + T] - o, x = m[d + T] + o, n = m[g + T] - f, a = m[g + T] + f, f = w * x - e * n, o = e * x + w * n, m[d + T] = v - o, m[d + 0] = v + o, m[g + c] = B - f, m[g + h] = B + f, f = e * a - w * r, o = w * a + e * r, m[g + T] = b - o, m[g + 0] = b + o, m[d + c] = s - f, m[d + h] = s + f, g += V, d += V;
            } while (d < E);
            L = e, e = L * H[M + 0] - w * H[M + 1], w = L * H[M + 1] + w * H[M + 0];
          }
          M += 2;
        } while (V < K);
      }
      var U = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254];
      this.fft_short = function(m, C, K, M, V) {
        for (var d = 0; d < 3; d++) {
          var g = t.BLKSIZE_s / 2, E = 65535 & 576 / 3 * (d + 1), w = t.BLKSIZE_s / 8 - 1;
          do {
            var e, i, h, T, c, l = U[w << 2] & 255;
            e = k[l] * M[K][V + l + E], c = k[127 - l] * M[K][V + l + E + 128], i = e - c, e = e + c, h = k[l + 64] * M[K][V + l + E + 64], c = k[63 - l] * M[K][V + l + E + 192], T = h - c, h = h + c, g -= 4, C[d][g + 0] = e + h, C[d][g + 2] = e - h, C[d][g + 1] = i + T, C[d][g + 3] = i - T, e = k[l + 1] * M[K][V + l + E + 1], c = k[126 - l] * M[K][V + l + E + 129], i = e - c, e = e + c, h = k[l + 65] * M[K][V + l + E + 65], c = k[62 - l] * M[K][V + l + E + 193], T = h - c, h = h + c, C[d][g + t.BLKSIZE_s / 2 + 0] = e + h, C[d][g + t.BLKSIZE_s / 2 + 2] = e - h, C[d][g + t.BLKSIZE_s / 2 + 1] = i + T, C[d][g + t.BLKSIZE_s / 2 + 3] = i - T;
          } while (--w >= 0);
          p(C[d], g, t.BLKSIZE_s / 2);
        }
      }, this.fft_long = function(m, C, K, M, V) {
        var d = t.BLKSIZE / 8 - 1, g = t.BLKSIZE / 2;
        do {
          var E, w, e, i, h, T = U[d] & 255;
          E = u[T] * M[K][V + T], h = u[T + 512] * M[K][V + T + 512], w = E - h, E = E + h, e = u[T + 256] * M[K][V + T + 256], h = u[T + 768] * M[K][V + T + 768], i = e - h, e = e + h, g -= 4, C[g + 0] = E + e, C[g + 2] = E - e, C[g + 1] = w + i, C[g + 3] = w - i, E = u[T + 1] * M[K][V + T + 1], h = u[T + 513] * M[K][V + T + 513], w = E - h, E = E + h, e = u[T + 257] * M[K][V + T + 257], h = u[T + 769] * M[K][V + T + 769], i = e - h, e = e + h, C[g + t.BLKSIZE / 2 + 0] = E + e, C[g + t.BLKSIZE / 2 + 2] = E - e, C[g + t.BLKSIZE / 2 + 1] = w + i, C[g + t.BLKSIZE / 2 + 3] = w - i;
        } while (--d >= 0);
        p(C, g, t.BLKSIZE / 2);
      }, this.init_fft = function(m) {
        for (var C = 0; C < t.BLKSIZE; C++)
          u[C] = 0.42 - 0.5 * Math.cos(2 * Math.PI * (C + 0.5) / t.BLKSIZE) + 0.08 * Math.cos(4 * Math.PI * (C + 0.5) / t.BLKSIZE);
        for (var C = 0; C < t.BLKSIZE_s / 2; C++)
          k[C] = 0.5 * (1 - Math.cos(2 * Math.PI * (C + 0.5) / t.BLKSIZE_s));
      };
    }
    function u0() {
      var u = new f0(), k = 2.302585092994046, H = 2, p = 16, U = 2, m = 16, C = 0.34, K = 1 / (14752 * 14752) / (t.BLKSIZE / 2), M = 0.01, V = 0.8, d = 0.6, g = 0.3, E = 3.5, w = 21, e = 0.2302585093;
      function i(P, y) {
        for (var N = 0, l0 = 0; l0 < t.BLKSIZE / 2; ++l0)
          N += P[l0] * y.ATH.eql_w[l0];
        return N *= K, N;
      }
      function h(P, y, N, l0, t0, G, r0, n0, _0, R0, o0) {
        var e1 = P.internal_flags;
        _0 < 2 ? (u.fft_long(e1, l0[t0], _0, R0, o0), u.fft_short(e1, G[r0], _0, R0, o0)) : _0 == 2 && J(), y[0] = l0[t0 + 0][0], y[0] *= y[0];
        for (var X0 = t.BLKSIZE / 2 - 1; X0 >= 0; --X0) {
          var K0 = l0[t0 + 0][t.BLKSIZE / 2 - X0], r1 = l0[t0 + 0][t.BLKSIZE / 2 + X0];
          y[t.BLKSIZE / 2 - X0] = (K0 * K0 + r1 * r1) * 0.5;
        }
        for (var Y0 = 2; Y0 >= 0; --Y0) {
          N[Y0][0] = G[r0 + 0][Y0][0], N[Y0][0] *= N[Y0][0];
          for (var X0 = t.BLKSIZE_s / 2 - 1; X0 >= 0; --X0) {
            var K0 = G[r0 + 0][Y0][t.BLKSIZE_s / 2 - X0], r1 = G[r0 + 0][Y0][t.BLKSIZE_s / 2 + X0];
            N[Y0][t.BLKSIZE_s / 2 - X0] = (K0 * K0 + r1 * r1) * 0.5;
          }
        }
        {
          for (var T0 = 0, X0 = 11; X0 < t.HBLKSIZE; X0++)
            T0 += y[X0];
          e1.tot_ener[_0] = T0;
        }
        P.analysis && J(), P.athaa_loudapprox == 2 && _0 < 2 && (e1.loudness_sq[n0][_0] = e1.loudness_sq_save[_0], e1.loudness_sq_save[_0] = i(y, e1));
      }
      var T = 8, c = 23, l = 15, v, s, x, r = [1, 0.79433, 0.63096, 0.63096, 0.63096, 0.63096, 0.63096, 0.25119, 0.11749];
      function L() {
        v = Math.pow(10, (T + 1) / 16), s = Math.pow(10, (c + 1) / 16), x = Math.pow(10, l / 10);
      }
      var _ = [3.3246 * 3.3246, 3.23837 * 3.23837, 3.15437 * 3.15437, 3.00412 * 3.00412, 2.86103 * 2.86103, 2.65407 * 2.65407, 2.46209 * 2.46209, 2.284 * 2.284, 2.11879 * 2.11879, 1.96552 * 1.96552, 1.82335 * 1.82335, 1.69146 * 1.69146, 1.56911 * 1.56911, 1.46658 * 1.46658, 1.37074 * 1.37074, 1.31036 * 1.31036, 1.25264 * 1.25264, 1.20648 * 1.20648, 1.16203 * 1.16203, 1.12765 * 1.12765, 1.09428 * 1.09428, 1.0659 * 1.0659, 1.03826 * 1.03826, 1.01895 * 1.01895, 1], o = [1.33352 * 1.33352, 1.35879 * 1.35879, 1.38454 * 1.38454, 1.39497 * 1.39497, 1.40548 * 1.40548, 1.3537 * 1.3537, 1.30382 * 1.30382, 1.22321 * 1.22321, 1.14758 * 1.14758, 1], f = [2.35364 * 2.35364, 2.29259 * 2.29259, 2.23313 * 2.23313, 2.12675 * 2.12675, 2.02545 * 2.02545, 1.87894 * 1.87894, 1.74303 * 1.74303, 1.61695 * 1.61695, 1.49999 * 1.49999, 1.39148 * 1.39148, 1.29083 * 1.29083, 1.19746 * 1.19746, 1.11084 * 1.11084, 1.03826 * 1.03826];
      function b(P, y, N, l0, t0, G) {
        var r0;
        if (y > P)
          if (y < P * s)
            r0 = y / P;
          else
            return P + y;
        else {
          if (P >= y * s)
            return P + y;
          r0 = P / y;
        }
        if (P += y, l0 + 3 <= 3 + 3) {
          if (r0 >= v)
            return P;
          var n0 = 0 | a0.FAST_LOG10_X(r0, 16);
          return P * o[n0];
        }
        var n0 = 0 | a0.FAST_LOG10_X(r0, 16);
        if (G != 0 ? y = t0.ATH.cb_s[N] * t0.ATH.adjust : y = t0.ATH.cb_l[N] * t0.ATH.adjust, P < x * y) {
          if (P > y) {
            var _0, R0;
            return _0 = 1, n0 <= 13 && (_0 = f[n0]), R0 = a0.FAST_LOG10_X(P / y, 10 / 15), P * ((_[n0] - _0) * R0 + _0);
          }
          return n0 > 13 ? P : P * f[n0];
        }
        return P * _[n0];
      }
      function B(P, y, N, l0, t0) {
        var G, r0, n0 = 0, _0 = 0;
        for (G = r0 = 0; G < t.SBMAX_s; ++r0, ++G) {
          for (var R0 = P.bo_s[G], o0 = P.npart_s, e1 = R0 < o0 ? R0 : o0; r0 < e1; )
            n0 += y[r0], _0 += N[r0], r0++;
          if (P.en[l0].s[G][t0] = n0, P.thm[l0].s[G][t0] = _0, r0 >= o0) {
            ++G;
            break;
          }
          {
            var X0 = P.PSY.bo_s_weight[G], K0 = 1 - X0;
            n0 = X0 * y[r0], _0 = X0 * N[r0], P.en[l0].s[G][t0] += n0, P.thm[l0].s[G][t0] += _0, n0 = K0 * y[r0], _0 = K0 * N[r0];
          }
        }
        for (; G < t.SBMAX_s; ++G)
          P.en[l0].s[G][t0] = 0, P.thm[l0].s[G][t0] = 0;
      }
      function a(P, y, N, l0) {
        var t0, G, r0 = 0, n0 = 0;
        for (t0 = G = 0; t0 < t.SBMAX_l; ++G, ++t0) {
          for (var _0 = P.bo_l[t0], R0 = P.npart_l, o0 = _0 < R0 ? _0 : R0; G < o0; )
            r0 += y[G], n0 += N[G], G++;
          if (P.en[l0].l[t0] = r0, P.thm[l0].l[t0] = n0, G >= R0) {
            ++t0;
            break;
          }
          {
            var e1 = P.PSY.bo_l_weight[t0], X0 = 1 - e1;
            r0 = e1 * y[G], n0 = e1 * N[G], P.en[l0].l[t0] += r0, P.thm[l0].l[t0] += n0, r0 = X0 * y[G], n0 = X0 * N[G];
          }
        }
        for (; t0 < t.SBMAX_l; ++t0)
          P.en[l0].l[t0] = 0, P.thm[l0].l[t0] = 0;
      }
      function n(P, y, N, l0, t0, G) {
        var r0 = P.internal_flags, n0, _0;
        for (_0 = n0 = 0; _0 < r0.npart_s; ++_0) {
          for (var R0 = 0, o0 = r0.numlines_s[_0], e1 = 0; e1 < o0; ++e1, ++n0) {
            var X0 = y[G][n0];
            R0 += X0;
          }
          N[_0] = R0;
        }
        for (n0 = _0 = 0; _0 < r0.npart_s; _0++) {
          var K0 = r0.s3ind_s[_0][0], r1 = r0.s3_ss[n0++] * N[K0];
          for (++K0; K0 <= r0.s3ind_s[_0][1]; )
            r1 += r0.s3_ss[n0] * N[K0], ++n0, ++K0;
          {
            var Y0 = U * r0.nb_s1[t0][_0];
            l0[_0] = Math.min(r1, Y0);
          }
          if (r0.blocktype_old[t0 & 1] == t.SHORT_TYPE) {
            var Y0 = m * r0.nb_s2[t0][_0], T0 = l0[_0];
            l0[_0] = Math.min(Y0, T0);
          }
          r0.nb_s2[t0][_0] = r0.nb_s1[t0][_0], r0.nb_s1[t0][_0] = r1;
        }
        for (; _0 <= t.CBANDS; ++_0)
          N[_0] = 0, l0[_0] = 0;
      }
      function F(P, y, N, l0) {
        var t0 = P.internal_flags;
        P.short_blocks == m0.short_block_coupled && !(y[0] != 0 && y[1] != 0) && (y[0] = y[1] = 0);
        for (var G = 0; G < t0.channels_out; G++)
          l0[G] = t.NORM_TYPE, P.short_blocks == m0.short_block_dispensed && (y[G] = 1), P.short_blocks == m0.short_block_forced && (y[G] = 0), y[G] != 0 ? t0.blocktype_old[G] == t.SHORT_TYPE && (l0[G] = t.STOP_TYPE) : (l0[G] = t.SHORT_TYPE, t0.blocktype_old[G] == t.NORM_TYPE && (t0.blocktype_old[G] = t.START_TYPE), t0.blocktype_old[G] == t.STOP_TYPE && (t0.blocktype_old[G] = t.SHORT_TYPE)), N[G] = t0.blocktype_old[G], t0.blocktype_old[G] = l0[G];
      }
      function R(P, y, N) {
        return N >= 1 ? P : N <= 0 ? y : y > 0 ? Math.pow(P / y, N) * y : 0;
      }
      var O = [11.8, 13.6, 17.2, 32, 46.5, 51.3, 57.5, 67.1, 71.5, 84.6, 97.6, 130];
      function q(P, y) {
        for (var N = 309.07, l0 = 0; l0 < t.SBMAX_s - 1; l0++)
          for (var t0 = 0; t0 < 3; t0++) {
            var G = P.thm.s[l0][t0];
            if (G > 0) {
              var r0 = G * y, n0 = P.en.s[l0][t0];
              n0 > r0 && (n0 > r0 * 1e10 ? N += O[l0] * (10 * k) : N += O[l0] * a0.FAST_LOG10(n0 / r0));
            }
          }
        return N;
      }
      var Z = [6.8, 5.8, 5.8, 6.4, 6.5, 9.9, 12.1, 14.4, 15, 18.9, 21.6, 26.9, 34.2, 40.2, 46.8, 56.5, 60.7, 73.9, 85.7, 93.4, 126.1];
      function e0(P, y) {
        for (var N = 281.0575, l0 = 0; l0 < t.SBMAX_l - 1; l0++) {
          var t0 = P.thm.l[l0];
          if (t0 > 0) {
            var G = t0 * y, r0 = P.en.l[l0];
            r0 > G && (r0 > G * 1e10 ? N += Z[l0] * (10 * k) : N += Z[l0] * a0.FAST_LOG10(r0 / G));
          }
        }
        return N;
      }
      function b0(P, y, N, l0, t0) {
        var G, r0;
        for (G = r0 = 0; G < P.npart_l; ++G) {
          var n0 = 0, _0 = 0, R0;
          for (R0 = 0; R0 < P.numlines_l[G]; ++R0, ++r0) {
            var o0 = y[r0];
            n0 += o0, _0 < o0 && (_0 = o0);
          }
          N[G] = n0, l0[G] = _0, t0[G] = n0 * P.rnumlines_l[G];
        }
      }
      function A0(P, y, N, l0) {
        var t0 = r.length - 1, G = 0, r0 = N[G] + N[G + 1];
        if (r0 > 0) {
          var n0 = y[G];
          n0 < y[G + 1] && (n0 = y[G + 1]), r0 = 20 * (n0 * 2 - r0) / (r0 * (P.numlines_l[G] + P.numlines_l[G + 1] - 1));
          var _0 = 0 | r0;
          _0 > t0 && (_0 = t0), l0[G] = _0;
        } else
          l0[G] = 0;
        for (G = 1; G < P.npart_l - 1; G++)
          if (r0 = N[G - 1] + N[G] + N[G + 1], r0 > 0) {
            var n0 = y[G - 1];
            n0 < y[G] && (n0 = y[G]), n0 < y[G + 1] && (n0 = y[G + 1]), r0 = 20 * (n0 * 3 - r0) / (r0 * (P.numlines_l[G - 1] + P.numlines_l[G] + P.numlines_l[G + 1] - 1));
            var _0 = 0 | r0;
            _0 > t0 && (_0 = t0), l0[G] = _0;
          } else
            l0[G] = 0;
        if (r0 = N[G - 1] + N[G], r0 > 0) {
          var n0 = y[G - 1];
          n0 < y[G] && (n0 = y[G]), r0 = 20 * (n0 * 2 - r0) / (r0 * (P.numlines_l[G - 1] + P.numlines_l[G] - 1));
          var _0 = 0 | r0;
          _0 > t0 && (_0 = t0), l0[G] = _0;
        } else
          l0[G] = 0;
      }
      var p0 = [-865163e-23 * 2, -851586e-8 * 2, -674764e-23 * 2, 0.0209036 * 2, -336639e-22 * 2, -0.0438162 * 2, -154175e-22 * 2, 0.0931738 * 2, -552212e-22 * 2, -0.313819 * 2];
      this.L3psycho_anal_ns = function(P, y, N, l0, t0, G, r0, n0, _0, R0) {
        var o0 = P.internal_flags, e1 = d0([2, t.BLKSIZE]), X0 = d0([2, 3, t.BLKSIZE_s]), K0 = W(t.CBANDS + 1), r1 = W(t.CBANDS + 1), Y0 = W(t.CBANDS + 2), T0 = Y(2), U0 = Y(2), h1, c0, C0, M0, a1, E1, x1, G0, F1 = d0([2, 576]), p1, y1 = Y(t.CBANDS + 2), L1 = Y(t.CBANDS + 2);
        for (F0.fill(L1, 0), h1 = o0.channels_out, P.mode == S0.JOINT_STEREO && (h1 = 4), P.VBR == j.vbr_off ? p1 = o0.ResvMax == 0 ? 0 : o0.ResvSize / o0.ResvMax * 0.5 : P.VBR == j.vbr_rh || P.VBR == j.vbr_mtrh || P.VBR == j.vbr_mt ? p1 = 0.6 : p1 = 1, c0 = 0; c0 < o0.channels_out; c0++) {
          var I1 = y[c0], H1 = N + 576 - 350 - w + 192;
          for (M0 = 0; M0 < 576; M0++) {
            var X1, g1;
            for (X1 = I1[H1 + M0 + 10], g1 = 0, a1 = 0; a1 < (w - 1) / 2 - 1; a1 += 2)
              X1 += p0[a1] * (I1[H1 + M0 + a1] + I1[H1 + M0 + w - a1]), g1 += p0[a1 + 1] * (I1[H1 + M0 + a1 + 1] + I1[H1 + M0 + w - a1 - 1]);
            F1[c0][M0] = X1 + g1;
          }
          t0[l0][c0].en.assign(o0.en[c0]), t0[l0][c0].thm.assign(o0.thm[c0]), h1 > 2 && J();
        }
        for (c0 = 0; c0 < h1; c0++) {
          var W1, z1, M1 = W(12), R1 = [0, 0, 0, 0], Y1 = W(12), K1 = 1, Z1, Q1 = W(t.CBANDS), J1 = W(t.CBANDS), l1 = [0, 0, 0, 0], $1 = W(t.HBLKSIZE), ee = d0([3, t.HBLKSIZE_s]);
          for (M0 = 0; M0 < 3; M0++)
            M1[M0] = o0.nsPsy.last_en_subshort[c0][M0 + 6], Y1[M0] = M1[M0] / o0.nsPsy.last_en_subshort[c0][M0 + 4], R1[0] += M1[M0];
          c0 == 2 && J();
          {
            var ae = F1[c0 & 1], D1 = 0;
            for (M0 = 0; M0 < 9; M0++) {
              for (var se = D1 + 64, m1 = 1; D1 < se; D1++)
                m1 < Math.abs(ae[D1]) && (m1 = Math.abs(ae[D1]));
              o0.nsPsy.last_en_subshort[c0][M0] = M1[M0 + 3] = m1, R1[1 + M0 / 3] += m1, m1 > M1[M0 + 3 - 2] ? m1 = m1 / M1[M0 + 3 - 2] : M1[M0 + 3 - 2] > m1 * 10 ? m1 = M1[M0 + 3 - 2] / (m1 * 10) : m1 = 0, Y1[M0 + 3] = m1;
            }
          }
          for (P.analysis && J(), Z1 = c0 == 3 ? o0.nsPsy.attackthre_s : o0.nsPsy.attackthre, M0 = 0; M0 < 12; M0++)
            l1[M0 / 3] == 0 && Y1[M0] > Z1 && (l1[M0 / 3] = M0 % 3 + 1);
          for (M0 = 1; M0 < 4; M0++) {
            var q1;
            R1[M0 - 1] > R1[M0] ? q1 = R1[M0 - 1] / R1[M0] : q1 = R1[M0] / R1[M0 - 1], q1 < 1.7 && (l1[M0] = 0, M0 == 1 && (l1[0] = 0));
          }
          for (l1[0] != 0 && o0.nsPsy.lastAttacks[c0] != 0 && (l1[0] = 0), (o0.nsPsy.lastAttacks[c0] == 3 || l1[0] + l1[1] + l1[2] + l1[3] != 0) && (K1 = 0, l1[1] != 0 && l1[0] != 0 && (l1[1] = 0), l1[2] != 0 && l1[1] != 0 && (l1[2] = 0), l1[3] != 0 && l1[2] != 0 && (l1[3] = 0)), c0 < 2 ? U0[c0] = K1 : J(), _0[c0] = o0.tot_ener[c0], z1 = X0, W1 = e1, h(P, $1, ee, W1, c0 & 1, z1, c0 & 1, l0, c0, y, N), b0(o0, $1, K0, Q1, J1), A0(o0, Q1, J1, y1), G0 = 0; G0 < 3; G0++) {
            var G1, S1;
            for (n(P, ee, r1, Y0, c0, G0), B(o0, r1, Y0, c0, G0), x1 = 0; x1 < t.SBMAX_s; x1++) {
              if (S1 = o0.thm[c0].s[x1][G0], S1 *= V, l1[G0] >= 2 || l1[G0 + 1] == 1) {
                var O1 = G0 != 0 ? G0 - 1 : 2, m1 = R(o0.thm[c0].s[x1][O1], S1, d * p1);
                S1 = Math.min(S1, m1);
              }
              if (l1[G0] == 1) {
                var O1 = G0 != 0 ? G0 - 1 : 2, m1 = R(o0.thm[c0].s[x1][O1], S1, g * p1);
                S1 = Math.min(S1, m1);
              } else if (G0 != 0 && l1[G0 - 1] == 3 || G0 == 0 && o0.nsPsy.lastAttacks[c0] == 3) {
                var O1 = G0 != 2 ? G0 + 1 : 0, m1 = R(o0.thm[c0].s[x1][O1], S1, g * p1);
                S1 = Math.min(S1, m1);
              }
              G1 = M1[G0 * 3 + 3] + M1[G0 * 3 + 4] + M1[G0 * 3 + 5], M1[G0 * 3 + 5] * 6 < G1 && (S1 *= 0.5, M1[G0 * 3 + 4] * 6 < G1 && (S1 *= 0.5)), o0.thm[c0].s[x1][G0] = S1;
            }
          }
          for (o0.nsPsy.lastAttacks[c0] = l1[2], E1 = 0, C0 = 0; C0 < o0.npart_l; C0++) {
            for (var C1 = o0.s3ind[C0][0], j1 = K0[C1] * r[y1[C1]], k1 = o0.s3_ll[E1++] * j1; ++C1 <= o0.s3ind[C0][1]; )
              j1 = K0[C1] * r[y1[C1]], k1 = b(k1, o0.s3_ll[E1++] * j1, C1, C1 - C0, o0, 0);
            k1 *= 0.158489319246111, o0.blocktype_old[c0 & 1] == t.SHORT_TYPE ? Y0[C0] = k1 : Y0[C0] = R(Math.min(k1, Math.min(H * o0.nb_1[c0][C0], p * o0.nb_2[c0][C0])), k1, p1), o0.nb_2[c0][C0] = o0.nb_1[c0][C0], o0.nb_1[c0][C0] = k1;
          }
          for (; C0 <= t.CBANDS; ++C0)
            K0[C0] = 0, Y0[C0] = 0;
          a(o0, K0, Y0, c0);
        }
        for ((P.mode == S0.STEREO || P.mode == S0.JOINT_STEREO) && J(), P.mode == S0.JOINT_STEREO && J(), F(P, U0, R0, T0), c0 = 0; c0 < h1; c0++) {
          var V1, P1 = 0, te, U1;
          c0 > 1 ? J() : (V1 = r0, P1 = 0, te = R0[c0], U1 = t0[l0][c0]), te == t.SHORT_TYPE ? V1[P1 + c0] = q(U1, o0.masking_lower) : V1[P1 + c0] = e0(U1, o0.masking_lower), P.analysis && (o0.pinfo.pe[l0][c0] = V1[P1 + c0]);
        }
        return 0;
      };
      function n1(P) {
        var y, N, l0, t0;
        return y = P, y >= 0 ? y *= 3 : y *= 1.5, y >= 0.5 && y <= 2.5 ? (t0 = y - 0.5, N = 8 * (t0 * t0 - 2 * t0)) : N = 0, y += 0.474, l0 = 15.811389 + 7.5 * y - 17.5 * Math.sqrt(1 + y * y), l0 <= -60 ? 0 : (y = Math.exp((N + l0) * e), y /= 0.6609193, y);
      }
      function i1(P) {
        return P < 0 && (P = 0), P = P * 1e-3, 13 * Math.atan(0.76 * P) + 3.5 * Math.atan(P * P / (7.5 * 7.5));
      }
      function $0(P, y, N, l0, t0, G, r0, n0, _0, R0, o0, e1) {
        var X0 = W(t.CBANDS + 1), K0 = n0 / (e1 > 15 ? 2 * 576 : 2 * 192), r1 = Y(t.HBLKSIZE), Y0;
        n0 /= _0;
        var T0 = 0, U0 = 0;
        for (Y0 = 0; Y0 < t.CBANDS; Y0++) {
          var h1, c0;
          for (h1 = i1(n0 * T0), X0[Y0] = n0 * T0, c0 = T0; i1(n0 * c0) - h1 < C && c0 <= _0 / 2; c0++)
            ;
          for (P[Y0] = c0 - T0, U0 = Y0 + 1; T0 < c0; )
            r1[T0++] = Y0;
          if (T0 > _0 / 2) {
            T0 = _0 / 2, ++Y0;
            break;
          }
        }
        X0[Y0] = n0 * T0;
        for (var C0 = 0; C0 < e1; C0++) {
          var M0, a1, E1, x1, G0;
          E1 = R0[C0], x1 = R0[C0 + 1], M0 = 0 | Math.floor(0.5 + o0 * (E1 - 0.5)), M0 < 0 && (M0 = 0), a1 = 0 | Math.floor(0.5 + o0 * (x1 - 0.5)), a1 > _0 / 2 && (a1 = _0 / 2), N[C0] = (r1[M0] + r1[a1]) / 2, y[C0] = r1[a1];
          var F1 = K0 * x1;
          r0[C0] = (F1 - X0[y[C0]]) / (X0[y[C0] + 1] - X0[y[C0]]), r0[C0] < 0 ? r0[C0] = 0 : r0[C0] > 1 && (r0[C0] = 1), G0 = i1(n0 * R0[C0] * o0), G0 = Math.min(G0, 15.5) / 15.5, G[C0] = Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * G0)) - 2.5);
        }
        T0 = 0;
        for (var p1 = 0; p1 < U0; p1++) {
          var y1 = P[p1], h1, L1;
          h1 = i1(n0 * T0), L1 = i1(n0 * (T0 + y1 - 1)), l0[p1] = 0.5 * (h1 + L1), h1 = i1(n0 * (T0 - 0.5)), L1 = i1(n0 * (T0 + y1 - 0.5)), t0[p1] = L1 - h1, T0 += y1;
        }
        return U0;
      }
      function t1(P, y, N, l0, t0, G) {
        var r0 = d0([t.CBANDS, t.CBANDS]), n0, _0 = 0;
        if (G)
          for (var R0 = 0; R0 < y; R0++)
            for (n0 = 0; n0 < y; n0++) {
              var o0 = n1(N[R0] - N[n0]) * l0[n0];
              r0[R0][n0] = o0 * t0[R0];
            }
        else
          J();
        for (var R0 = 0; R0 < y; R0++) {
          for (n0 = 0; n0 < y && !(r0[R0][n0] > 0); n0++)
            ;
          for (P[R0][0] = n0, n0 = y - 1; n0 > 0 && !(r0[R0][n0] > 0); n0--)
            ;
          P[R0][1] = n0, _0 += P[R0][1] - P[R0][0] + 1;
        }
        for (var e1 = W(_0), X0 = 0, R0 = 0; R0 < y; R0++)
          for (n0 = P[R0][0]; n0 <= P[R0][1]; n0++)
            e1[X0++] = r0[R0][n0];
        return e1;
      }
      function u1(P) {
        var y = i1(P);
        return y = Math.min(y, 15.5) / 15.5, Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * y)) - 2.5);
      }
      this.psymodel_init = function(P) {
        var y = P.internal_flags, N, l0 = true, t0 = 13, G = 24, r0 = 0, n0 = 0, _0 = -8.25, R0 = -4.5, o0 = W(t.CBANDS), e1 = W(t.CBANDS), X0 = W(t.CBANDS), K0 = P.out_samplerate;
        switch (P.experimentalZ) {
          default:
          case 0:
            l0 = true;
            break;
          case 1:
            l0 = !(P.VBR == j.vbr_mtrh || P.VBR == j.vbr_mt);
            break;
          case 2:
            l0 = false;
            break;
          case 3:
            t0 = 8, r0 = -1.75, n0 = -0.0125, _0 = -8.25, R0 = -2.25;
            break;
        }
        for (y.ms_ener_ratio_old = 0.25, y.blocktype_old[0] = y.blocktype_old[1] = t.NORM_TYPE, N = 0; N < 4; ++N) {
          for (var T0 = 0; T0 < t.CBANDS; ++T0)
            y.nb_1[N][T0] = 1e20, y.nb_2[N][T0] = 1e20, y.nb_s1[N][T0] = y.nb_s2[N][T0] = 1;
          for (var r1 = 0; r1 < t.SBMAX_l; r1++)
            y.en[N].l[r1] = 1e20, y.thm[N].l[r1] = 1e20;
          for (var T0 = 0; T0 < 3; ++T0) {
            for (var r1 = 0; r1 < t.SBMAX_s; r1++)
              y.en[N].s[r1][T0] = 1e20, y.thm[N].s[r1][T0] = 1e20;
            y.nsPsy.lastAttacks[N] = 0;
          }
          for (var T0 = 0; T0 < 9; T0++)
            y.nsPsy.last_en_subshort[N][T0] = 10;
        }
        for (y.loudness_sq_save[0] = y.loudness_sq_save[1] = 0, y.npart_l = $0(y.numlines_l, y.bo_l, y.bm_l, o0, e1, y.mld_l, y.PSY.bo_l_weight, K0, t.BLKSIZE, y.scalefac_band.l, t.BLKSIZE / (2 * 576), t.SBMAX_l), N = 0; N < y.npart_l; N++) {
          var Y0 = r0;
          o0[N] >= t0 && (Y0 = n0 * (o0[N] - t0) / (G - t0) + r0 * (G - o0[N]) / (G - t0)), X0[N] = Math.pow(10, Y0 / 10), y.numlines_l[N] > 0 ? y.rnumlines_l[N] = 1 / y.numlines_l[N] : y.rnumlines_l[N] = 0;
        }
        y.s3_ll = t1(y.s3ind, y.npart_l, o0, e1, X0, l0);
        var T0 = 0;
        for (N = 0; N < y.npart_l; N++) {
          var U0;
          U0 = E0.MAX_VALUE;
          for (var h1 = 0; h1 < y.numlines_l[N]; h1++, T0++) {
            var c0 = K0 * T0 / (1e3 * t.BLKSIZE), C0;
            C0 = this.ATHformula(c0 * 1e3, P) - 20, C0 = Math.pow(10, 0.1 * C0), C0 *= y.numlines_l[N], U0 > C0 && (U0 = C0);
          }
          y.ATH.cb_l[N] = U0, U0 = -20 + o0[N] * 20 / 10, U0 > 6 && (U0 = 100), U0 < -15 && (U0 = -15), U0 -= 8, y.minval_l[N] = Math.pow(10, U0 / 10) * y.numlines_l[N];
        }
        for (y.npart_s = $0(y.numlines_s, y.bo_s, y.bm_s, o0, e1, y.mld_s, y.PSY.bo_s_weight, K0, t.BLKSIZE_s, y.scalefac_band.s, t.BLKSIZE_s / (2 * 192), t.SBMAX_s), T0 = 0, N = 0; N < y.npart_s; N++) {
          var U0, Y0 = _0;
          o0[N] >= t0 && (Y0 = R0 * (o0[N] - t0) / (G - t0) + _0 * (G - o0[N]) / (G - t0)), X0[N] = Math.pow(10, Y0 / 10), U0 = E0.MAX_VALUE;
          for (var h1 = 0; h1 < y.numlines_s[N]; h1++, T0++) {
            var c0 = K0 * T0 / (1e3 * t.BLKSIZE_s), C0;
            C0 = this.ATHformula(c0 * 1e3, P) - 20, C0 = Math.pow(10, 0.1 * C0), C0 *= y.numlines_s[N], U0 > C0 && (U0 = C0);
          }
          y.ATH.cb_s[N] = U0, U0 = -7 + o0[N] * 7 / 12, o0[N] > 12 && (U0 *= 1 + Math.log(1 + U0) * 3.1), o0[N] < 12 && (U0 *= 1 + Math.log(1 - U0) * 2.3), U0 < -15 && (U0 = -15), U0 -= 8, y.minval_s[N] = Math.pow(10, U0 / 10) * y.numlines_s[N];
        }
        y.s3_ss = t1(y.s3ind_s, y.npart_s, o0, e1, X0, l0), L(), u.init_fft(y), y.decay = Math.exp(-1 * k / (M * K0 / 192));
        {
          var M0;
          M0 = E, P.exp_nspsytune & 2 && (M0 = 1), Math.abs(P.msfix) > 0 && (M0 = P.msfix), P.msfix = M0;
          for (var a1 = 0; a1 < y.npart_l; a1++)
            y.s3ind[a1][1] > y.npart_l - 1 && (y.s3ind[a1][1] = y.npart_l - 1);
        }
        var E1 = 576 * y.mode_gr / K0;
        if (y.ATH.decay = Math.pow(10, -12 / 10 * E1), y.ATH.adjust = 0.01, y.ATH.adjustLimit = 1, P.ATHtype != -1) {
          var c0, x1 = P.out_samplerate / t.BLKSIZE, G0 = 0;
          for (c0 = 0, N = 0; N < t.BLKSIZE / 2; ++N)
            c0 += x1, y.ATH.eql_w[N] = 1 / Math.pow(10, this.ATHformula(c0, P) / 10), G0 += y.ATH.eql_w[N];
          for (G0 = 1 / G0, N = t.BLKSIZE / 2; --N >= 0; )
            y.ATH.eql_w[N] *= G0;
        }
        {
          for (var a1 = T0 = 0; a1 < y.npart_s; ++a1)
            for (N = 0; N < y.numlines_s[a1]; ++N)
              ++T0;
          for (var a1 = T0 = 0; a1 < y.npart_l; ++a1)
            for (N = 0; N < y.numlines_l[a1]; ++N)
              ++T0;
        }
        for (T0 = 0, N = 0; N < y.npart_l; N++) {
          var c0 = K0 * (T0 + y.numlines_l[N] / 2) / (1 * t.BLKSIZE);
          y.mld_cb_l[N] = u1(c0), T0 += y.numlines_l[N];
        }
        for (; N < t.CBANDS; ++N)
          y.mld_cb_l[N] = 1;
        for (T0 = 0, N = 0; N < y.npart_s; N++) {
          var c0 = K0 * (T0 + y.numlines_s[N] / 2) / (1 * t.BLKSIZE_s);
          y.mld_cb_s[N] = u1(c0), T0 += y.numlines_s[N];
        }
        for (; N < t.CBANDS; ++N)
          y.mld_cb_s[N] = 1;
        return 0;
      };
      function B1(P, y) {
        P < -0.3 && (P = 3410), P /= 1e3, P = Math.max(0.1, P);
        var N = 3.64 * Math.pow(P, -0.8) - 6.8 * Math.exp(-0.6 * Math.pow(P - 3.4, 2)) + 6 * Math.exp(-0.15 * Math.pow(P - 8.7, 2)) + (0.6 + 0.04 * y) * 1e-3 * Math.pow(P, 4);
        return N;
      }
      this.ATHformula = function(P, y) {
        var N;
        switch (y.ATHtype) {
          case 0:
            N = B1(P, 9);
            break;
          case 1:
            N = B1(P, -1);
            break;
          case 2:
            N = B1(P, 0);
            break;
          case 3:
            N = B1(P, 1) + 6;
            break;
          case 4:
            N = B1(P, y.ATHcurve);
            break;
          default:
            N = B1(P, 0);
            break;
        }
        return N;
      };
    }
    function i0() {
      var u = this, k = 128 * 1024;
      i0.V9 = 410, i0.V8 = 420, i0.V7 = 430, i0.V6 = 440, i0.V5 = 450, i0.V4 = 460, i0.V3 = 470, i0.V2 = 480, i0.V1 = 490, i0.V0 = 500, i0.R3MIX = 1e3, i0.STANDARD = 1001, i0.EXTREME = 1002, i0.INSANE = 1003, i0.STANDARD_FAST = 1004, i0.EXTREME_FAST = 1005, i0.MEDIUM = 1006, i0.MEDIUM_FAST = 1007;
      var H = 16384 + k;
      i0.LAME_MAXMP3BUFFER = H;
      var p, U, m, C, K, M = new u0(), V, d;
      this.enc = new t(), this.setModules = function(a, n, F, R, O, q, Z, e0, b0) {
        p = a, U = n, m = F, C = R, K = O, V = q, d = e0, this.enc.setModules(U, M, C, V);
      };
      function g() {
        this.mask_adjust = 0, this.mask_adjust_short = 0, this.bo_l_weight = W(t.SBMAX_l), this.bo_s_weight = W(t.SBMAX_s);
      }
      function E() {
        this.lowerlimit = 0;
      }
      function w(a, n) {
        this.lowpass = n;
      }
      var e = 4294479419;
      function i(a) {
        var n;
        return a.class_id = e, n = a.internal_flags = new v0(), a.mode = S0.NOT_SET, a.original = 1, a.in_samplerate = 44100, a.num_channels = 2, a.num_samples = -1, a.bWriteVbrTag = true, a.quality = -1, a.short_blocks = null, n.subblock_gain = -1, a.lowpassfreq = 0, a.highpassfreq = 0, a.lowpasswidth = -1, a.highpasswidth = -1, a.VBR = j.vbr_off, a.VBR_q = 4, a.ATHcurve = -1, a.VBR_mean_bitrate_kbps = 128, a.VBR_min_bitrate_kbps = 0, a.VBR_max_bitrate_kbps = 0, a.VBR_hard_min = 0, n.VBR_min_bitrate = 1, n.VBR_max_bitrate = 13, a.quant_comp = -1, a.quant_comp_short = -1, a.msfix = -1, n.resample_ratio = 1, n.OldValue[0] = 180, n.OldValue[1] = 180, n.CurrentStep[0] = 4, n.CurrentStep[1] = 4, n.masking_lower = 1, n.nsPsy.attackthre = -1, n.nsPsy.attackthre_s = -1, a.scale = -1, a.athaa_type = -1, a.ATHtype = -1, a.athaa_loudapprox = -1, a.athaa_sensitivity = 0, a.useTemporal = null, a.interChRatio = -1, n.mf_samples_to_encode = t.ENCDELAY + t.POSTDELAY, a.encoder_padding = 0, n.mf_size = t.ENCDELAY - t.MDCTDELAY, a.findReplayGain = false, a.decode_on_the_fly = false, n.decode_on_the_fly = false, n.findReplayGain = false, n.findPeakSample = false, n.RadioGain = 0, n.AudiophileGain = 0, n.noclipGainChange = 0, n.noclipScale = -1, a.preset = 0, a.write_id3tag_automatic = true, 0;
      }
      this.lame_init = function() {
        var a = new c1();
        return i(a), a.lame_allocated_gfp = 1, a;
      };
      function h(a) {
        return a > 1 ? 0 : a <= 0 ? 1 : Math.cos(Math.PI / 2 * a);
      }
      this.nearestBitrateFullIndex = function(a) {
        var n = [8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], F = 0, R = 0, O = 0, q = 0;
        q = n[16], O = 16, R = n[16], F = 16;
        for (var Z = 0; Z < 16; Z++)
          if (Math.max(a, n[Z + 1]) != a) {
            q = n[Z + 1], O = Z + 1, R = n[Z], F = Z;
            break;
          }
        return q - a > a - R ? F : O;
      };
      function T(a, n) {
        switch (a) {
          case 44100:
            return n.version = 1, 0;
          case 48e3:
            return n.version = 1, 1;
          case 32e3:
            return n.version = 1, 2;
          case 22050:
            return n.version = 0, 0;
          case 24e3:
            return n.version = 0, 1;
          case 16e3:
            return n.version = 0, 2;
          case 11025:
            return n.version = 0, 0;
          case 12e3:
            return n.version = 0, 1;
          case 8e3:
            return n.version = 0, 2;
          default:
            return n.version = 0, -1;
        }
      }
      function c(a, n, F) {
        F < 16e3 && (n = 2);
        for (var R = D.bitrate_table[n][1], O = 2; O <= 14; O++)
          D.bitrate_table[n][O] > 0 && Math.abs(D.bitrate_table[n][O] - a) < Math.abs(R - a) && (R = D.bitrate_table[n][O]);
        return R;
      }
      function l(a, n, F) {
        F < 16e3 && (n = 2);
        for (var R = 0; R <= 14; R++)
          if (D.bitrate_table[n][R] > 0 && D.bitrate_table[n][R] == a)
            return R;
        return -1;
      }
      function v(a, n) {
        var F = [new w(8, 2e3), new w(16, 3700), new w(24, 3900), new w(32, 5500), new w(40, 7e3), new w(48, 7500), new w(56, 1e4), new w(64, 11e3), new w(80, 13500), new w(96, 15100), new w(112, 15600), new w(128, 17e3), new w(160, 17500), new w(192, 18600), new w(224, 19400), new w(256, 19700), new w(320, 20500)], R = u.nearestBitrateFullIndex(n);
        a.lowerlimit = F[R].lowpass;
      }
      function s(a) {
        var n = a.internal_flags, F = 32;
        if (n.lowpass1 > 0) {
          for (var R = 999, O = 0; O <= 31; O++) {
            var q = O / 31;
            q >= n.lowpass2 && (F = Math.min(F, O)), n.lowpass1 < q && q < n.lowpass2 && (R = Math.min(R, O));
          }
          R == 999 ? n.lowpass1 = (F - 0.75) / 31 : n.lowpass1 = (R - 0.75) / 31, n.lowpass2 = F / 31;
        }
        n.highpass2 > 0 && J(), n.highpass2 > 0 && J();
        for (var O = 0; O < 32; O++) {
          var Z, e0, q = O / 31;
          n.highpass2 > n.highpass1 ? J() : Z = 1, n.lowpass2 > n.lowpass1 ? e0 = h((q - n.lowpass1) / (n.lowpass2 - n.lowpass1 + 1e-20)) : e0 = 1, n.amp_filter[O] = Z * e0;
        }
      }
      function x(a) {
        var n = a.internal_flags;
        switch (a.quality) {
          default:
          case 9:
            n.psymodel = 0, n.noise_shaping = 0, n.noise_shaping_amp = 0, n.noise_shaping_stop = 0, n.use_best_huffman = 0, n.full_outer_loop = 0;
            break;
          case 8:
            a.quality = 7;
          case 7:
            n.psymodel = 1, n.noise_shaping = 0, n.noise_shaping_amp = 0, n.noise_shaping_stop = 0, n.use_best_huffman = 0, n.full_outer_loop = 0;
            break;
          case 6:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.noise_shaping_amp = 0, n.noise_shaping_stop = 0, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 0, n.full_outer_loop = 0;
            break;
          case 5:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.noise_shaping_amp = 0, n.noise_shaping_stop = 0, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 0, n.full_outer_loop = 0;
            break;
          case 4:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.noise_shaping_amp = 0, n.noise_shaping_stop = 0, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 1, n.full_outer_loop = 0;
            break;
          case 3:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.noise_shaping_amp = 1, n.noise_shaping_stop = 1, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 1, n.full_outer_loop = 0;
            break;
          case 2:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.substep_shaping == 0 && (n.substep_shaping = 2), n.noise_shaping_amp = 1, n.noise_shaping_stop = 1, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 1, n.full_outer_loop = 0;
            break;
          case 1:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.substep_shaping == 0 && (n.substep_shaping = 2), n.noise_shaping_amp = 2, n.noise_shaping_stop = 1, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 1, n.full_outer_loop = 0;
            break;
          case 0:
            n.psymodel = 1, n.noise_shaping == 0 && (n.noise_shaping = 1), n.substep_shaping == 0 && (n.substep_shaping = 2), n.noise_shaping_amp = 2, n.noise_shaping_stop = 1, n.subblock_gain == -1 && (n.subblock_gain = 1), n.use_best_huffman = 1, n.full_outer_loop = 0;
            break;
        }
      }
      function r(a) {
        var n = a.internal_flags;
        a.frameNum = 0, a.write_id3tag_automatic && d.id3tag_write_v2(a), n.bitrate_stereoMode_Hist = w0([16, 4 + 1]), n.bitrate_blockType_Hist = w0([16, 4 + 1 + 1]), n.PeakSample = 0, a.bWriteVbrTag && V.InitVbrTag(a);
      }
      this.lame_init_params = function(a) {
        var n = a.internal_flags;
        if (n.Class_ID = 0, n.ATH == null && (n.ATH = new w1()), n.PSY == null && (n.PSY = new g()), n.rgdata == null && (n.rgdata = new d1()), n.channels_in = a.num_channels, n.channels_in == 1 && (a.mode = S0.MONO), n.channels_out = a.mode == S0.MONO ? 1 : 2, n.mode_ext = t.MPG_MD_MS_LR, a.mode == S0.MONO && (a.force_ms = false), a.VBR == j.vbr_off && a.VBR_mean_bitrate_kbps != 128 && a.brate == 0 && (a.brate = a.VBR_mean_bitrate_kbps), a.VBR == j.vbr_off || a.VBR == j.vbr_mtrh || a.VBR == j.vbr_mt || (a.free_format = false), a.VBR == j.vbr_off && a.brate == 0 && J(), a.VBR == j.vbr_off && a.compression_ratio > 0 && J(), a.out_samplerate != 0 && (a.out_samplerate < 16e3 ? (a.VBR_mean_bitrate_kbps = Math.max(a.VBR_mean_bitrate_kbps, 8), a.VBR_mean_bitrate_kbps = Math.min(a.VBR_mean_bitrate_kbps, 64)) : a.out_samplerate < 32e3 ? (a.VBR_mean_bitrate_kbps = Math.max(a.VBR_mean_bitrate_kbps, 8), a.VBR_mean_bitrate_kbps = Math.min(a.VBR_mean_bitrate_kbps, 160)) : (a.VBR_mean_bitrate_kbps = Math.max(a.VBR_mean_bitrate_kbps, 32), a.VBR_mean_bitrate_kbps = Math.min(a.VBR_mean_bitrate_kbps, 320))), a.lowpassfreq == 0) {
          var F = 16e3;
          switch (a.VBR) {
            case j.vbr_off: {
              var R = new E();
              v(R, a.brate), F = R.lowerlimit;
              break;
            }
            case j.vbr_abr: {
              var R = new E();
              v(R, a.VBR_mean_bitrate_kbps), F = R.lowerlimit;
              break;
            }
            case j.vbr_rh:
              J();
            default:
              J();
          }
          a.mode == S0.MONO && (a.VBR == j.vbr_off || a.VBR == j.vbr_abr) && (F *= 1.5), a.lowpassfreq = F | 0;
        }
        switch (a.out_samplerate == 0 && J(), a.lowpassfreq = Math.min(20500, a.lowpassfreq), a.lowpassfreq = Math.min(a.out_samplerate / 2, a.lowpassfreq), a.VBR == j.vbr_off && (a.compression_ratio = a.out_samplerate * 16 * n.channels_out / (1e3 * a.brate)), a.VBR == j.vbr_abr && J(), a.bWriteVbrTag || (a.findReplayGain = false, a.decode_on_the_fly = false, n.findPeakSample = false), n.findReplayGain = a.findReplayGain, n.decode_on_the_fly = a.decode_on_the_fly, n.decode_on_the_fly && (n.findPeakSample = true), n.findReplayGain && J(), n.decode_on_the_fly && !a.decode_only && J(), n.mode_gr = a.out_samplerate <= 24e3 ? 1 : 2, a.framesize = 576 * n.mode_gr, a.encoder_delay = t.ENCDELAY, n.resample_ratio = a.in_samplerate / a.out_samplerate, a.VBR) {
          case j.vbr_mt:
          case j.vbr_rh:
          case j.vbr_mtrh:
            {
              var O = [5.7, 6.5, 7.3, 8.2, 10, 11.9, 13, 14, 15, 16.5];
              a.compression_ratio = O[a.VBR_q];
            }
            break;
          case j.vbr_abr:
            a.compression_ratio = a.out_samplerate * 16 * n.channels_out / (1e3 * a.VBR_mean_bitrate_kbps);
            break;
          default:
            a.compression_ratio = a.out_samplerate * 16 * n.channels_out / (1e3 * a.brate);
            break;
        }
        a.mode == S0.NOT_SET && (a.mode = S0.JOINT_STEREO), a.highpassfreq > 0 ? J() : (n.highpass1 = 0, n.highpass2 = 0), a.lowpassfreq > 0 ? (n.lowpass2 = 2 * a.lowpassfreq, a.lowpasswidth >= 0 ? J() : n.lowpass1 = (1 - 0) * 2 * a.lowpassfreq, n.lowpass1 /= a.out_samplerate, n.lowpass2 /= a.out_samplerate) : J(), s(a), n.samplerate_index = T(a.out_samplerate, a), n.samplerate_index < 0 && J(), a.VBR == j.vbr_off ? a.free_format ? n.bitrate_index = 0 : (a.brate = c(a.brate, a.version, a.out_samplerate), n.bitrate_index = l(a.brate, a.version, a.out_samplerate), n.bitrate_index <= 0 && J()) : n.bitrate_index = 1, a.analysis && (a.bWriteVbrTag = false), n.pinfo != null && (a.bWriteVbrTag = false), U.init_bit_stream_w(n);
        for (var q = n.samplerate_index + 3 * a.version + 6 * (a.out_samplerate < 16e3 ? 1 : 0), Z = 0; Z < t.SBMAX_l + 1; Z++)
          n.scalefac_band.l[Z] = C.sfBandIndex[q].l[Z];
        for (var Z = 0; Z < t.PSFB21 + 1; Z++) {
          var e0 = (n.scalefac_band.l[22] - n.scalefac_band.l[21]) / t.PSFB21, b0 = n.scalefac_band.l[21] + Z * e0;
          n.scalefac_band.psfb21[Z] = b0;
        }
        n.scalefac_band.psfb21[t.PSFB21] = 576;
        for (var Z = 0; Z < t.SBMAX_s + 1; Z++)
          n.scalefac_band.s[Z] = C.sfBandIndex[q].s[Z];
        for (var Z = 0; Z < t.PSFB12 + 1; Z++) {
          var e0 = (n.scalefac_band.s[13] - n.scalefac_band.s[12]) / t.PSFB12, b0 = n.scalefac_band.s[12] + Z * e0;
          n.scalefac_band.psfb12[Z] = b0;
        }
        n.scalefac_band.psfb12[t.PSFB12] = 192, a.version == 1 ? n.sideinfo_len = n.channels_out == 1 ? 4 + 17 : 4 + 32 : n.sideinfo_len = n.channels_out == 1 ? 4 + 9 : 4 + 17, a.error_protection && (n.sideinfo_len += 2), r(a), n.Class_ID = e;
        {
          var A0;
          for (A0 = 0; A0 < 19; A0++)
            n.nsPsy.pefirbuf[A0] = 700 * n.mode_gr * n.channels_out;
          a.ATHtype == -1 && (a.ATHtype = 4);
        }
        switch (a.VBR) {
          case j.vbr_mt:
            a.VBR = j.vbr_mtrh;
          case j.vbr_mtrh: {
            a.useTemporal == null && (a.useTemporal = false), m.apply_preset(a, 500 - a.VBR_q * 10, 0), a.quality < 0 && (a.quality = LAME_DEFAULT_QUALITY), a.quality < 5 && (a.quality = 0), a.quality > 5 && (a.quality = 5), n.PSY.mask_adjust = a.maskingadjust, n.PSY.mask_adjust_short = a.maskingadjust_short, a.experimentalY ? n.sfb21_extra = false : n.sfb21_extra = a.out_samplerate > 44e3, n.iteration_loop = new VBRNewIterationLoop(K);
            break;
          }
          case j.vbr_rh: {
            m.apply_preset(a, 500 - a.VBR_q * 10, 0), n.PSY.mask_adjust = a.maskingadjust, n.PSY.mask_adjust_short = a.maskingadjust_short, a.experimentalY ? n.sfb21_extra = false : n.sfb21_extra = a.out_samplerate > 44e3, a.quality > 6 && (a.quality = 6), a.quality < 0 && (a.quality = LAME_DEFAULT_QUALITY), n.iteration_loop = new VBROldIterationLoop(K);
            break;
          }
          default: {
            var p0;
            n.sfb21_extra = false, a.quality < 0 && (a.quality = LAME_DEFAULT_QUALITY), p0 = a.VBR, p0 == j.vbr_off && (a.VBR_mean_bitrate_kbps = a.brate), m.apply_preset(a, a.VBR_mean_bitrate_kbps, 0), a.VBR = p0, n.PSY.mask_adjust = a.maskingadjust, n.PSY.mask_adjust_short = a.maskingadjust_short, p0 == j.vbr_off ? n.iteration_loop = new T1(K) : J();
            break;
          }
        }
        return a.VBR != j.vbr_off && J(), a.tune && J(), x(a), a.athaa_type < 0 ? n.ATH.useAdjust = 3 : n.ATH.useAdjust = a.athaa_type, n.ATH.aaSensitivityP = Math.pow(10, a.athaa_sensitivity / -10), a.short_blocks == null && (a.short_blocks = m0.short_block_allowed), a.short_blocks == m0.short_block_allowed && (a.mode == S0.JOINT_STEREO || a.mode == S0.STEREO) && (a.short_blocks = m0.short_block_coupled), a.quant_comp < 0 && (a.quant_comp = 1), a.quant_comp_short < 0 && (a.quant_comp_short = 0), a.msfix < 0 && (a.msfix = 0), a.exp_nspsytune = a.exp_nspsytune | 1, a.internal_flags.nsPsy.attackthre < 0 && (a.internal_flags.nsPsy.attackthre = u0.NSATTACKTHRE), a.internal_flags.nsPsy.attackthre_s < 0 && (a.internal_flags.nsPsy.attackthre_s = u0.NSATTACKTHRE_S), a.scale < 0 && (a.scale = 1), a.ATHtype < 0 && (a.ATHtype = 4), a.ATHcurve < 0 && (a.ATHcurve = 4), a.athaa_loudapprox < 0 && (a.athaa_loudapprox = 2), a.interChRatio < 0 && (a.interChRatio = 0), a.useTemporal == null && (a.useTemporal = true), n.slot_lag = n.frac_SpF = 0, a.VBR == j.vbr_off && (n.slot_lag = n.frac_SpF = (a.version + 1) * 72e3 * a.brate % a.out_samplerate | 0), C.iteration_init(a), M.psymodel_init(a), 0;
      };
      function L(a, n) {
        (a.in_buffer_0 == null || a.in_buffer_nsamples < n) && (a.in_buffer_0 = W(n), a.in_buffer_1 = W(n), a.in_buffer_nsamples = n);
      }
      this.lame_encode_flush = function(a, n, F, R) {
        var O = a.internal_flags, q = j0([2, 1152]), Z = 0, e0, b0, A0, p0, n1 = O.mf_samples_to_encode - t.POSTDELAY, i1 = _(a);
        if (O.mf_samples_to_encode < 1)
          return 0;
        for (e0 = 0, a.in_samplerate != a.out_samplerate && J(), A0 = a.framesize - n1 % a.framesize, A0 < 576 && (A0 += a.framesize), a.encoder_padding = A0, p0 = (n1 + A0) / a.framesize; p0 > 0 && Z >= 0; ) {
          var $0 = i1 - O.mf_size, t1 = a.frameNum;
          $0 *= a.in_samplerate, $0 /= a.out_samplerate, $0 > 1152 && ($0 = 1152), $0 < 1 && ($0 = 1), b0 = R - e0, R == 0 && (b0 = 0), Z = this.lame_encode_buffer(a, q[0], q[1], $0, n, F, b0), F += Z, e0 += Z, p0 -= t1 != a.frameNum ? 1 : 0;
        }
        return O.mf_samples_to_encode = 0, Z < 0 || (b0 = R - e0, R == 0 && (b0 = 0), U.flush_bitstream(a), Z = U.copy_buffer(O, n, F, b0, 1), Z < 0) ? Z : (F += Z, e0 += Z, b0 = R - e0, R == 0 && (b0 = 0), a.write_id3tag_automatic && J(), e0);
      }, this.lame_encode_buffer = function(a, n, F, R, O, q, Z) {
        var e0 = a.internal_flags, b0 = [null, null];
        if (e0.Class_ID != e)
          return -3;
        if (R == 0)
          return 0;
        L(e0, R), b0[0] = e0.in_buffer_0, b0[1] = e0.in_buffer_1;
        for (var A0 = 0; A0 < R; A0++)
          b0[0][A0] = n[A0], e0.channels_in > 1 && (b0[1][A0] = F[A0]);
        return o(a, b0[0], b0[1], R, O, q, Z);
      };
      function _(a) {
        var n = t.BLKSIZE + a.framesize - t.FFTOFFSET;
        return n = Math.max(n, 512 + a.framesize - 32), n;
      }
      function o(a, n, F, R, O, q, Z) {
        var e0 = a.internal_flags, b0 = 0, A0, p0, n1, i1, $0, t1 = [null, null], u1 = [null, null];
        if (e0.Class_ID != e)
          return -3;
        if (R == 0)
          return 0;
        if ($0 = U.copy_buffer(e0, O, q, Z, 0), $0 < 0)
          return $0;
        if (q += $0, b0 += $0, u1[0] = n, u1[1] = F, P0.NEQ(a.scale, 0) && P0.NEQ(a.scale, 1))
          for (p0 = 0; p0 < R; ++p0)
            u1[0][p0] *= a.scale, e0.channels_out == 2 && (u1[1][p0] *= a.scale);
        if (P0.NEQ(a.scale_left, 0) && P0.NEQ(a.scale_left, 1))
          for (p0 = 0; p0 < R; ++p0)
            u1[0][p0] *= a.scale_left;
        if (P0.NEQ(a.scale_right, 0) && P0.NEQ(a.scale_right, 1))
          for (p0 = 0; p0 < R; ++p0)
            u1[1][p0] *= a.scale_right;
        a.num_channels == 2 && e0.channels_out == 1 && J(), i1 = _(a), t1[0] = e0.mfbuf[0], t1[1] = e0.mfbuf[1];
        for (var B1 = 0; R > 0; ) {
          var P = [null, null], y = 0, N = 0;
          P[0] = u1[0], P[1] = u1[1];
          var l0 = new b();
          if (B(a, t1, P, B1, R, l0), y = l0.n_in, N = l0.n_out, e0.findReplayGain && !e0.decode_on_the_fly && p.AnalyzeSamples(e0.rgdata, t1[0], e0.mf_size, t1[1], e0.mf_size, N, e0.channels_out) == H0.GAIN_ANALYSIS_ERROR)
            return -6;
          if (R -= y, B1 += y, e0.channels_out == 2, e0.mf_size += N, e0.mf_samples_to_encode < 1 && J(), e0.mf_samples_to_encode += N, e0.mf_size >= i1) {
            var t0 = Z - b0;
            if (Z == 0 && (t0 = 0), A0 = f(a, t1[0], t1[1], O, q, t0), A0 < 0)
              return A0;
            for (q += A0, b0 += A0, e0.mf_size -= a.framesize, e0.mf_samples_to_encode -= a.framesize, n1 = 0; n1 < e0.channels_out; n1++)
              for (p0 = 0; p0 < e0.mf_size; p0++)
                t1[n1][p0] = t1[n1][p0 + a.framesize];
          }
        }
        return b0;
      }
      function f(a, n, F, R, O, q) {
        var Z = u.enc.lame_encode_mp3_frame(a, n, F, R, O, q);
        return a.frameNum++, Z;
      }
      function b() {
        this.n_in = 0, this.n_out = 0;
      }
      function B(a, n, F, R, O, q) {
        var Z = a.internal_flags;
        if (Z.resample_ratio < 0.9999 || Z.resample_ratio > 1.0001)
          J();
        else {
          q.n_out = Math.min(a.framesize, O), q.n_in = q.n_out;
          for (var e0 = 0; e0 < q.n_out; ++e0)
            n[0][Z.mf_size + e0] = F[0][R + e0], Z.channels_out == 2 && (n[1][Z.mf_size + e0] = F[1][R + e0]);
        }
      }
    }
    function J0() {
      this.setModules = function(u, k) {
      };
    }
    function y0() {
      this.setModules = function(u, k, H) {
      };
    }
    function I0() {
    }
    function x0() {
      this.setModules = function(u, k) {
      };
    }
    function q0(u, k, H) {
      u != 1 && J("fix cc: only supports mono");
      var p = new i0(), U = new J0(), m = new H0(), C = new P0(), K = new s1(), M = new z0(), V = new N1(), d = new _1(), g = new k0(), E = new x0(), w = new W0(), e = new O0(), i = new y0(), h = new I0();
      p.setModules(m, C, K, M, V, d, g, E, h), C.setModules(m, h, g, d), E.setModules(C, g), K.setModules(p), V.setModules(C, w, M, e), M.setModules(e, w, p.enc.psy), w.setModules(C), e.setModules(M), d.setModules(p, C, g), U.setModules(i, h), i.setModules(g, E, K);
      var T = p.lame_init();
      T.num_channels = u, T.in_samplerate = k, T.out_samplerate = k, T.brate = H, T.mode = S0.STEREO, T.quality = 3, T.bWriteVbrTag = false, T.disable_reservoir = true, T.write_id3tag_automatic = false, p.lame_init_params(T);
      var c = 1152, l = 0 | 1.25 * c + 7200, v = Z0(l);
      this.encodeBuffer = function(s, x) {
        u == 1 && (x = s), s.length > c && (c = s.length, l = 0 | 1.25 * c + 7200, v = Z0(l));
        var r = p.lame_encode_buffer(T, s, x, s.length, v, 0, l);
        return new Int8Array(v.subarray(0, r));
      }, this.flush = function() {
        var s = p.lame_encode_flush(T, v, 0, l);
        return new Int8Array(v.subarray(0, s));
      };
    }
    s0.SFBMAX = t.SBMAX_s * 3, v1.Mp3Encoder = q0;
  }
  v1(), N0.lamejs = v1;
});
const ue = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
(function(N0) {
  var v1 = typeof window == "object" && !!window.document, g0 = v1 ? window : Object, J = g0.Recorder, Z0 = J.i18n;
  N0(J, Z0, Z0.$T, v1);
})(function(N0, v1, g0, J) {
  var Z0 = function(W) {
    return new Y(W);
  }, b1 = "WaveView", Y = function(W) {
    var L0 = this, d0 = { scale: 2, speed: 9, phase: 21.8, fps: 20, keep: true, lineWidth: 3, linear1: [0, "rgba(150,96,238,1)", 0.2, "rgba(170,79,249,1)", 1, "rgba(53,199,253,1)"], linear2: [0, "rgba(209,130,255,0.6)", 1, "rgba(53,199,255,0.6)"], linearBg: [0, "rgba(255,255,255,0.2)", 1, "rgba(54,197,252,0.2)"] };
    for (var w0 in W)
      d0[w0] = W[w0];
    L0.set = W = d0;
    var j0 = "compatibleCanvas";
    if (W[j0])
      var B0 = L0.canvas = W[j0];
    else {
      if (!J)
        throw new Error(g0.G("NonBrowser-1", [b1]));
      var F0 = W.elem;
      F0 && (typeof F0 == "string" ? F0 = document.querySelector(F0) : F0.length && (F0 = F0[0])), F0 && (W.width = F0.offsetWidth, W.height = F0.offsetHeight);
      var z = L0.elem = document.createElement("div");
      z.style.fontSize = 0, z.innerHTML = '<canvas style="width:100%;height:100%;"/>';
      var B0 = L0.canvas = z.querySelector("canvas");
      F0 && (F0.innerHTML = "", F0.appendChild(z));
    }
    var a0 = W.scale, m0 = W.width * a0, E0 = W.height * a0;
    if (!m0 || !E0)
      throw new Error(g0.G("IllegalArgs-1", [b1 + " width=0 height=0"]));
    B0.width = m0, B0.height = E0;
    var j = L0.ctx = B0.getContext("2d");
    L0.linear1 = L0.genLinear(j, m0, W.linear1), L0.linear2 = L0.genLinear(j, m0, W.linear2), L0.linearBg = L0.genLinear(j, E0, W.linearBg, true), L0._phase = 0;
  };
  Y.prototype = Z0.prototype = { genLinear: function(W, L0, d0, w0) {
    for (var j0 = W.createLinearGradient(0, 0, w0 ? 0 : L0, w0 ? L0 : 0), B0 = 0; B0 < d0.length; )
      j0.addColorStop(d0[B0++], d0[B0++]);
    return j0;
  }, genPath: function(W, L0, d0) {
    for (var w0 = [], j0 = this, B0 = j0.set, F0 = B0.scale, z = B0.width * F0, a0 = B0.height * F0 / 2, m0 = 0; m0 <= z; m0 += F0) {
      var E0 = (1 + Math.cos(Math.PI + m0 / z * 2 * Math.PI)) / 2, j = E0 * a0 * L0 * Math.sin(2 * Math.PI * (m0 / z) * W + d0) + a0;
      w0.push(j);
    }
    return w0;
  }, input: function(W, L0, d0) {
    var w0 = this;
    w0.sampleRate = d0, w0.pcmData = W, w0.pcmPos = 0, w0.inputTime = Date.now(), w0.schedule();
  }, schedule: function() {
    var W = this, L0 = W.set, d0 = Math.floor(1e3 / L0.fps);
    W.timer || (W.timer = setInterval(function() {
      W.schedule();
    }, d0));
    var w0 = Date.now(), j0 = W.drawTime || 0;
    if (!(w0 - j0 < d0)) {
      W.drawTime = w0;
      for (var B0 = W.sampleRate / L0.fps, F0 = W.pcmData, z = W.pcmPos, a0 = Math.max(0, Math.min(B0, F0.length - z)), m0 = 0, E0 = 0; E0 < a0; E0++, z++)
        m0 += Math.abs(F0[z]);
      W.pcmPos = z, (a0 || !L0.keep) && W.draw(N0.PowerLevel(m0, a0)), !a0 && w0 - W.inputTime > 1300 && (clearInterval(W.timer), W.timer = 0);
    }
  }, draw: function(W) {
    var L0 = this, d0 = L0.set, w0 = L0.ctx, j0 = d0.scale, B0 = d0.width * j0, F0 = d0.height * j0, z = d0.speed / d0.fps, a0 = L0._phase -= z, m0 = a0 + z * d0.phase, E0 = W / 100, j = L0.genPath(2, E0, a0), S0 = L0.genPath(1.8, E0, m0);
    w0.clearRect(0, 0, B0, F0), w0.beginPath();
    for (var k0 = 0, O0 = 0; O0 <= B0; k0++, O0 += j0)
      O0 == 0 ? w0.moveTo(O0, j[k0]) : w0.lineTo(O0, j[k0]);
    k0--;
    for (var O0 = B0 - 1; O0 >= 0; k0--, O0 -= j0)
      w0.lineTo(O0, S0[k0]);
    w0.closePath(), w0.fillStyle = L0.linearBg, w0.fill(), L0.drawPath(S0, L0.linear2), L0.drawPath(j, L0.linear1);
  }, drawPath: function(W, L0) {
    var d0 = this, w0 = d0.set, j0 = d0.ctx, B0 = w0.scale, F0 = w0.width * B0;
    j0.beginPath();
    for (var z = 0, a0 = 0; a0 <= F0; z++, a0 += B0)
      a0 == 0 ? j0.moveTo(a0, W[z]) : j0.lineTo(a0, W[z]);
    j0.lineWidth = w0.lineWidth * B0, j0.strokeStyle = L0, j0.stroke();
  } }, N0[b1] = Z0;
});
const ce = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
export {
  ue as a,
  fe as m,
  ve as r,
  ce as w
};
