import { E as ee, c as fe, e as te, A as Je, b as ge, B as Ze, C as Qe, f as Re, d as Ie, D as Xe, F as et, G as tt, g as ot, H as nt, I as at, J as st, v as lt } from "./element-plus-c72880c6.js";
import { _ as rt } from "./index-62cbccec.js";
import { _ as it } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { u as ct, b as dt } from "./vue-router-2f60a71a.js";
import { u as we, _ as ut } from "./index.vue_vue_type_script_setup_true_lang-7914fb88.js";
import { d as pt } from "./debounce-f4e6390f.js";
import { d as ne, e as F, o as d, c as h, a as s, A as pe, G as V, n as W, V as le, j as Y, i as Pe, R as _t, H as z, S as X, M as l, J as P, K as _, ab as He, a2 as R, ac as Q, I as re, u as A, P as y, Q as ft, af as Ue, an as mt, T as gt, f as me, w as vt, O as _e, ae as ht, y as Te } from "./@vue-3b855f7b.js";
import { g as he, f as $e, h as be, _ as ze, i as xt, j as de, b as yt, a as bt, k as Oe, l as se, C as ue, m as xe, n as ye, o as Ae, q as wt, r as $t, e as kt, __tla as __tla_0 } from "./index-76ebd052.js";
import { d as Fe, G as Ct, u as Ne, H as Et, I as Tt, J as At, y as Ve } from "./@element-plus-0cfad8bb.js";
import { M as Ft } from "./markdown-it-467cea12.js";
import { m as Vt } from "./markdown-it-katex-12c45a45.js";
import { x as Bt } from "./xss-4faf7994.js";
import { H as Be } from "./highlight.js-5a86d77b.js";
import { g as Me, e as Se, d as qe, c as St, b as qt } from "./agent-6508b772.js";
import { d as Lt } from "./pinia-6f4b1ece.js";
import { _ as Dt } from "./image.vue_vue_type_style_index_0_lang-58647f4f.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./group-89b8a1af.js";
import "./vue-codemirror-0523f0f1.js";
import "./codemirror-763a75c7.js";
import "./@codemirror-a2adbe38.js";
import "./@lezer-f449c16b.js";
import "./crelt-7bb88e1d.js";
import "./style-mod-ab9c37a6.js";
import "./@marijn-45184d7f.js";
import "./w3c-keyname-9fb136d3.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
import "./vue-demi-71ba0ef2.js";
import "./mdurl-d7fdfec3.js";
import "./uc.micro-2ff9f57e.js";
import "./entities-52510f6e.js";
import "./linkify-it-c9428ec8.js";
import "./punycode.js-c41da3d1.js";
import "./match-at-ccd587f4.js";
import "./vue-cropper-d3d11008.js";
let ia;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Rt = Lt("conversation-store", {
    state: () => ({}),
    actions: {
      async loadListData({ data: { offset: u, limit: p } = {} } = {}) {
        const { data: { conversations: n = [] } = {} } = await he.conversation.list({
          data: {
            offset: u,
            limit: p
          }
        });
        return n.map((e = {}, o) => e);
      },
      async save({ data: u } = {}) {
        return u = {
          conversation_id: 0,
          agent_id: 0,
          ...u
        }, u.conversation_id || delete u.conversation_id, he.conversation[u.conversation_id ? "update" : "create"]({
          data: u
        });
      },
      async chat({ data: u, onDownloadProgress: p, signal: n, hideError: e = false } = {}) {
        var _a;
        const o = ((_a = u == null ? void 0 : u.agent_configs) == null ? void 0 : _a.completion_params) || {
          frequency_penalty: 0.5,
          presence_penalty: 0.5,
          temperature: 0.2,
          top_p: 0.75
        };
        return u.agent_configs && delete u.agent_configs, u = {
          conversation_id: 0,
          frequency_penalty: o.frequency_penalty || 0,
          messages: [],
          model: "",
          presence_penalty: o.presence_penalty || 0,
          stream: true,
          temperature: o.temperature || 0,
          top_p: o.top_p || 0,
          ...u
        }, u.agent_id && (u.model = `agent-${u.agent_id}`, delete u.agent_id), he.conversation.chat({
          data: u,
          onDownloadProgress: p,
          signal: n,
          hideError: e
        });
      }
    }
  }), It = [
    "data-visible"
  ], Pt = [
    "data-visible"
  ], Ht = ne({
    __name: "index",
    props: {
      disableTop: {
        type: Boolean,
        default: false
      },
      disableBottom: {
        type: Boolean,
        default: false
      },
      threshold: {
        default: 50
      },
      debounceTime: {
        default: 200
      }
    },
    emits: [
      "load-top",
      "load-bottom"
    ],
    setup(u, { expose: p, emit: n }) {
      const e = u, o = n, r = F(null), g = F(null), i = F(false), c = F(false), a = F(0);
      let E = 0;
      const f = pt(() => {
        if (!r.value)
          return;
        const { scrollTop: v, scrollHeight: T, clientHeight: t } = r.value, x = v, b = x > a.value;
        a.value = x;
        const q = x <= e.threshold, C = x + t >= T - e.threshold;
        !b && q && !e.disableTop && (i.value = true, o("load-top", () => {
          i.value = false;
        })), b && C && !e.disableBottom && (c.value = true, o("load-bottom", () => {
          c.value = false;
        }));
      }, e.debounceTime), k = () => {
        f();
      };
      return p({
        scrollToTop: (v = "smooth") => {
          var _a;
          (_a = r.value) == null ? void 0 : _a.scrollTo({
            top: 0,
            behavior: v
          });
        },
        scrollToBottom: (v = "smooth") => {
          if (!r.value)
            return;
          const { scrollHeight: T, clientHeight: t } = r.value;
          r.value.scrollTo({
            top: T - t,
            behavior: v
          });
        },
        prepareTopLoad: () => {
          r.value && (E = r.value.scrollHeight);
        },
        adjustScrollPosition: () => {
          W(() => {
            if (!r.value)
              return;
            const T = r.value.scrollHeight - E;
            T > 0 && (r.value.scrollTop += T);
          });
        }
      }), (v, T) => (d(), h("div", {
        ref_key: "containerRef",
        ref: r,
        class: "scroll-container",
        onScrollPassive: k
      }, [
        s("div", {
          ref_key: "contentRef",
          ref: g,
          class: "scroll-content"
        }, [
          v.disableTop ? V("", true) : (d(), h("div", {
            key: 0,
            class: "load-indicator top-indicator",
            "data-visible": i.value
          }, [
            pe(v.$slots, "top-loading", {
              loading: i.value
            }, () => [
              T[0] || (T[0] = s("div", {
                class: "loader"
              }, [
                s("div", {
                  class: "loader-spinner"
                })
              ], -1))
            ], true)
          ], 8, It)),
          pe(v.$slots, "default", {}, void 0, true),
          v.disableBottom ? V("", true) : (d(), h("div", {
            key: 1,
            class: "load-indicator bottom-indicator",
            "data-visible": c.value
          }, [
            pe(v.$slots, "bottom-loading", {
              loading: c.value
            }, () => [
              T[1] || (T[1] = s("div", {
                class: "loader"
              }, [
                s("div", {
                  class: "loader-spinner"
                })
              ], -1))
            ], true)
          ], 8, Pt))
        ], 512)
      ], 544));
    }
  });
  const Ut = $e(Ht, [
    [
      "__scopeId",
      "data-v-16b4f811"
    ]
  ]);
  const oe = {};
  (function() {
    var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = oe.util = {
      rotl: function(n, e) {
        return n << e | n >>> 32 - e;
      },
      rotr: function(n, e) {
        return n << 32 - e | n >>> e;
      },
      endian: function(n) {
        if (n.constructor === Number)
          return p.rotl(n, 8) & 16711935 | p.rotl(n, 24) & 4278255360;
        for (var e = 0; e < n.length; e++)
          n[e] = p.endian(n[e]);
        return n;
      },
      randomBytes: function(n) {
        for (var e = []; n > 0; n--)
          e.push(Math.floor(Math.random() * 256));
        return e;
      },
      stringToBytes: function(n) {
        for (var e = [], o = 0; o < n.length; o++)
          e.push(n.charCodeAt(o));
        return e;
      },
      bytesToString: function(n) {
        for (var e = [], o = 0; o < n.length; o++)
          e.push(String.fromCharCode(n[o]));
        return e.join("");
      },
      stringToWords: function(n) {
        for (var e = [], o = 0, r = 0; o < n.length; o++, r += 8)
          e[r >>> 5] |= n.charCodeAt(o) << 24 - r % 32;
        return e;
      },
      bytesToWords: function(n) {
        for (var e = [], o = 0, r = 0; o < n.length; o++, r += 8)
          e[r >>> 5] |= n[o] << 24 - r % 32;
        return e;
      },
      wordsToBytes: function(n) {
        for (var e = [], o = 0; o < n.length * 32; o += 8)
          e.push(n[o >>> 5] >>> 24 - o % 32 & 255);
        return e;
      },
      bytesToHex: function(n) {
        for (var e = [], o = 0; o < n.length; o++)
          e.push((n[o] >>> 4).toString(16)), e.push((n[o] & 15).toString(16));
        return e.join("");
      },
      hexToBytes: function(n) {
        for (var e = [], o = 0; o < n.length; o += 2)
          e.push(parseInt(n.substr(o, 2), 16));
        return e;
      },
      bytesToBase64: function(n) {
        if (typeof btoa == "function")
          return btoa(p.bytesToString(n));
        for (var e = [], o, r = 0; r < n.length; r++)
          switch (r % 3) {
            case 0:
              e.push(u.charAt(n[r] >>> 2)), o = (n[r] & 3) << 4;
              break;
            case 1:
              e.push(u.charAt(o | n[r] >>> 4)), o = (n[r] & 15) << 2;
              break;
            case 2:
              e.push(u.charAt(o | n[r] >>> 6)), e.push(u.charAt(n[r] & 63)), o = -1;
          }
        for (o !== void 0 && o !== -1 && e.push(u.charAt(o)); e.length % 4 !== 0; )
          e.push("=");
        return e.join("");
      },
      base64ToBytes: function(n) {
        if (typeof atob == "function")
          return p.stringToBytes(atob(n));
        n = n.replace(/[^A-Z0-9+/]/gi, "");
        for (var e = [], o = 0; o < n.length; o++)
          switch (o % 4) {
            case 1:
              e.push(u.indexOf(n.charAt(o - 1)) << 2 | u.indexOf(n.charAt(o)) >>> 4);
              break;
            case 2:
              e.push((u.indexOf(n.charAt(o - 1)) & 15) << 4 | u.indexOf(n.charAt(o)) >>> 2);
              break;
            case 3:
              e.push((u.indexOf(n.charAt(o - 1)) & 3) << 6 | u.indexOf(n.charAt(o)));
              break;
          }
        return e;
      }
    };
    oe.mode = {};
  })();
  (function() {
    var u = oe.util;
    oe.HMAC = function(p, n, e, o) {
      e = e.length > p._blocksize * 4 ? p(e, {
        asBytes: true
      }) : u.stringToBytes(e);
      for (var r = e, g = e.slice(0), i = 0; i < p._blocksize * 4; i++)
        r[i] ^= 92, g[i] ^= 54;
      var c = p(u.bytesToString(r) + p(u.bytesToString(g) + n, {
        asString: true
      }), {
        asBytes: true
      });
      return o && o.asBytes ? c : o && o.asString ? u.bytesToString(c) : u.bytesToHex(c);
    };
  })();
  (function() {
    var u = oe.util, p = oe.SHA1 = function(n, e) {
      var o = u.wordsToBytes(p._sha1(n));
      return e && e.asBytes ? o : e && e.asString ? u.bytesToString(o) : u.bytesToHex(o);
    };
    p._sha1 = function(n) {
      var e = u.stringToWords(n), o = n.length * 8, r = [], g = 1732584193, i = -271733879, c = -1732584194, a = 271733878, E = -1009589776;
      e[o >> 5] |= 128 << 24 - o % 32, e[(o + 64 >>> 9 << 4) + 15] = o;
      for (var f = 0; f < e.length; f += 16) {
        for (var k = g, B = i, I = c, D = a, L = E, v = 0; v < 80; v++) {
          if (v < 16)
            r[v] = e[f + v];
          else {
            var T = r[v - 3] ^ r[v - 8] ^ r[v - 14] ^ r[v - 16];
            r[v] = T << 1 | T >>> 31;
          }
          var t = (g << 5 | g >>> 27) + E + (r[v] >>> 0) + (v < 20 ? (i & c | ~i & a) + 1518500249 : v < 40 ? (i ^ c ^ a) + 1859775393 : v < 60 ? (i & c | i & a | c & a) - 1894007588 : (i ^ c ^ a) - 899497514);
          E = a, a = c, c = i << 30 | i >>> 2, i = g, g = t;
        }
        g += k, i += B, c += I, a += D, E += L;
      }
      return [
        g,
        i,
        c,
        a,
        E
      ];
    }, p._blocksize = 16;
  })();
  function zt(u, p) {
    return new File([
      u
    ], p, {
      type: u.type
    });
  }
  function Ot(u) {
    return new Promise((p, n) => {
      const e = new FileReader();
      e.onload = function(o) {
        p(o.target.result);
      }, e.onerror = function(o) {
        n(o);
      }, e.readAsDataURL(u);
    });
  }
  const Nt = {
    key: 0,
    class: "h-10 flex gap-4 border-b mx-4"
  }, Mt = {
    class: "w-[280px]"
  }, Gt = {
    class: "border flex items-center p-1 rounded"
  }, Yt = {
    class: "flex-center pb-2"
  }, Wt = {
    class: "flex items-center gap-1 cursor-pointer"
  }, jt = {
    key: 1,
    class: "flex flex-wrap gap-2"
  }, Kt = {
    key: 1,
    class: "absolute top-0 left-0 right-0 bottom-0 rounded bg-black/50 flex-center text-sm text-white"
  }, Jt = [
    "onClick"
  ], Zt = {
    class: "flex justify-end items-center gap-1"
  }, Qt = {
    key: 1,
    class: "absolute left-0 right-0 top-0 bottom-0 px-4 rounded-md flex items-center bg-[#F5F8FF]"
  }, Xt = {
    class: "flex-1 flex-center gap-3"
  }, eo = {
    class: "text-sm text-[#2563EB]"
  }, to = {
    class: "flex items-center gap-2"
  }, oo = {
    class: "text-sm text-[#1B2B51]"
  }, Le = 3, De = 60, no = ne({
    __name: "input",
    props: {
      placeholder: {
        default: "message_input_placeholder"
      },
      fileUpload: {
        default: {
          image: {
            enabled: false
          }
        }
      },
      mainColor: {
        default: "#2563EB"
      },
      speechToText: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: [
      "confirm"
    ],
    setup(u, { expose: p, emit: n }) {
      const e = u, o = n, r = F(), g = F(), i = `chat-input_${be(8)}`, c = F(false), a = le({
        question: "",
        chatbi_db_id: "",
        oFileList: []
      }), E = le({
        remote_url: ""
      }), f = le({
        recording: false,
        time: 0
      });
      let k;
      const B = Y(() => e.fileUpload.image || {
        enabled: false,
        transfer_methods: [],
        number_limits: 6
      }), I = Y(() => B.value.number_limits - a.oFileList.length), D = Y(() => f.recording ? false : c.value || a.oFileList.length || a.question.trim()), L = Y(() => e.disabled ? true : a.oFileList.length ? !a.oFileList.every((m) => m.percentage === 100) : !(a.question || "").trim()), v = () => {
        g.value.trigger();
      }, T = async (m) => {
        if (!m.url) {
          const w = await Ot(m.raw);
          m.url = w, m.upload_file_id = m.id || "", m.type = "image", m.is_error = 1, m.transfer_method = "local_file", m.belongs_to = "user";
        }
      }, t = async (m) => {
        m.upload_file_id = m.id, m.is_error = 0;
      }, x = (m) => {
        m.is_error = 1;
      }, b = (m) => {
        const w = a.oFileList[m];
        a.oFileList.splice(m, 1), w.raw && g.value.handleRemove(w.raw);
      }, q = () => {
        !I.value || !E.remote_url || (a.oFileList.push({
          type: "image",
          transfer_method: "remote_url",
          url: E.remote_url,
          upload_file_id: "",
          is_error: 0,
          belongs_to: "user",
          percentage: 100
        }), E.remote_url = "");
      }, C = () => {
        c.value = true;
      };
      let H = null, S = null;
      const M = async () => {
        const m = (await de(() => import("./recorder-core-b24ec2a4.js").then((w) => w.r), ["static/js/recorder-core-b24ec2a4.js","static/js/cssfilter-476ae7ee.js"])).default;
        return await de(() => import("./recorder-core-b24ec2a4.js").then((w) => w.m), ["static/js/recorder-core-b24ec2a4.js","static/js/cssfilter-476ae7ee.js"]), await de(() => import("./recorder-core-b24ec2a4.js").then((w) => w.a), ["static/js/recorder-core-b24ec2a4.js","static/js/cssfilter-476ae7ee.js"]), await de(() => import("./recorder-core-b24ec2a4.js").then((w) => w.w), ["static/js/recorder-core-b24ec2a4.js","static/js/cssfilter-476ae7ee.js"]), m;
      }, O = (m = true) => {
        H && H.stop((w, J) => {
          if (clearInterval(k), f.recording = false, f.time = J, H.close(), H = null, m)
            return;
          const ie = zt(w, `${Date.now()}.mp3`);
          fileUpload(ie).then((Z) => {
            o("confirm", {
              question: "",
              files: [
                {
                  type: "audio",
                  transfer_method: "local_file",
                  url: Z.url,
                  is_error: 0,
                  belongs_to: "user",
                  upload_file_id: Z.id
                }
              ],
              chatbi_db_id: a.chatbi_db_id
            });
          });
        });
      }, j = async () => {
        const m = await M();
        H = m({
          type: "mp3",
          sampleRate: 16e3,
          bitRate: 16,
          onProcess: (w, J, ie, Z, ae, Ee) => {
            S && S.input(w[w.length - 1], J, Z);
          }
        }), H.open(() => {
          f.recording = true, W(() => {
            S = m.WaveView({
              elem: r.value
            }), f.time = 0, k && clearInterval(k), k = setInterval(() => {
              f.time += 1, De === f.time && O(false);
            }, 1e3), H.start();
          });
        }, (w, J) => {
          ee.warning(J ? "\u672A\u6388\u6743\u6D4F\u89C8\u5668\u5F55\u97F3\u6743\u9650" : "\u65E0\u53EF\u7528\u9EA6\u514B\u98CE");
        });
      }, U = () => {
        j();
      }, $ = () => {
        if (f.time < Le)
          return ee.warning(`\u5F55\u97F3\u65F6\u95F4\u81F3\u5C11${Le}\u79D2`);
        O(false);
      }, G = () => {
        O(true);
      }, K = () => {
        L.value || o("confirm", {
          question: a.question,
          files: [
            ...a.oFileList
          ],
          chatbi_db_id: a.chatbi_db_id
        });
      }, Ge = (m) => {
        m.key === "Enter" && !m.shiftKey && (m.preventDefault(), K());
      }, ke = (m) => m.classList && m.classList.contains(i) ? true : m.parentNode ? ke(m.parentNode) : false, Ce = (m) => {
        ke(m.target) || (c.value = false);
      };
      return Pe(() => {
        document.addEventListener("click", Ce);
      }), _t(() => {
        document.removeEventListener("click", Ce), O(true);
      }), p({
        set question(m) {
          a.question = m;
        },
        get question() {
          return a.question;
        },
        clearFiles() {
          var _a;
          (_a = g.value) == null ? void 0 : _a.clearFiles();
        }
      }), (m, w) => {
        const J = Ue("FileUpload"), ie = fe, Z = te, ae = ze, Ee = Je, ve = ge, Ye = Ze, We = fe, ce = mt("debounce");
        return d(), h("div", {
          class: re([
            "w-full m-auto border rounded bg-white relative input",
            [
              i
            ]
          ]),
          style: ft({
            borderColor: D.value ? m.mainColor : ""
          })
        }, [
          D.value && B.value.enabled ? (d(), h("div", Nt, [
            V("", true),
            B.value.enabled ? (d(), h(z, {
              key: 1
            }, [
              X(s("div", null, [
                l(J, {
                  ref_key: "fileUploadRef",
                  ref: g,
                  "file-list": a.oFileList,
                  "onUpdate:fileList": w[0] || (w[0] = (N) => a.oFileList = N),
                  size: 10,
                  multiple: "",
                  limit: B.value.number_limits,
                  accept: ".jpg,.png",
                  onProgress: T,
                  onSuccess: t
                }, null, 8, [
                  "file-list",
                  "limit"
                ])
              ], 512), [
                [
                  gt,
                  false
                ]
              ]),
              B.value.transfer_methods.includes("remote_url") ? (d(), P(Ee, {
                key: 0,
                effect: "light",
                trigger: "click",
                placement: "top",
                "append-to": `.${i}`,
                "show-arrow": false,
                "popper-class": "corp-switch-popper"
              }, {
                content: _(() => [
                  s("div", Mt, [
                    s("div", Gt, [
                      l(ie, {
                        modelValue: E.remote_url,
                        "onUpdate:modelValue": w[1] || (w[1] = (N) => E.remote_url = N),
                        placeholder: "\u5C06\u56FE\u7247\u94FE\u63A5\u7C98\u8D34\u81F3\u6B64\u5904",
                        type: "text",
                        class: "flex-1",
                        style: {
                          "--el-input-text-color": "#182B50",
                          "--el-input-bg-color": "transparent",
                          "--el-border-color": "none",
                          "--el-input-focus-border": "none",
                          "--el-input-hover-border": "none",
                          "--el-input-hover-border-color": "none",
                          "--el-input-focus-border-color": "none"
                        },
                        onKeypress: He(q, [
                          "enter"
                        ])
                      }, null, 8, [
                        "modelValue"
                      ]),
                      l(Z, {
                        disabled: !E.remote_url,
                        type: "primary",
                        onClick: q
                      }, {
                        default: _(() => w[4] || (w[4] = [
                          R(" \u597D\u7684 ")
                        ])),
                        _: 1
                      }, 8, [
                        "disabled"
                      ])
                    ]),
                    B.value.transfer_methods.includes("local_file") ? (d(), h(z, {
                      key: 0
                    }, [
                      w[6] || (w[6] = s("div", {
                        class: "flex-center my-3"
                      }, [
                        s("div", {
                          class: "w-[47px] h-px bg-[#EDEEF1]"
                        }),
                        s("span", {
                          class: "text-xs text-[#182B50] text-opacity-40 px-3"
                        }, "OR"),
                        s("div", {
                          class: "w-[47px] h-px bg-[#EDEEF1]"
                        })
                      ], -1)),
                      s("div", Yt, [
                        s("div", {
                          class: "flex items-center gap-1 text-xs text-[#2563EB] cursor-pointer",
                          onClick: v
                        }, [
                          l(ae, {
                            name: "image",
                            width: "16px",
                            height: "16px"
                          }),
                          w[5] || (w[5] = R(" \u4ECE\u672C\u5730\u4E0A\u4F20 "))
                        ])
                      ])
                    ], 64)) : V("", true)
                  ])
                ]),
                default: _(() => [
                  s("div", Wt, [
                    l(ae, {
                      name: "image",
                      width: "14px",
                      height: "14px",
                      color: "#525D78"
                    }),
                    w[7] || (w[7] = s("span", {
                      class: "text-xs text-[#182B50CC]"
                    }, "\u56FE\u7247", -1))
                  ])
                ]),
                _: 1
              }, 8, [
                "append-to"
              ])) : X((d(), h("div", {
                key: 1,
                class: "flex items-center gap-1 cursor-pointer",
                onClick: v
              }, [
                l(ae, {
                  name: "image",
                  width: "14px",
                  height: "14px",
                  color: "#525D78"
                }),
                w[8] || (w[8] = s("span", {
                  class: "text-xs text-[#182B50CC]"
                }, "\u56FE\u7247", -1))
              ])), [
                [
                  ce
                ]
              ])
            ], 64)) : V("", true),
            V("", true)
          ])) : V("", true),
          s("div", {
            class: re([
              [
                D.value ? "" : "flex items-center"
              ],
              "pl-2 pr-4 py-3"
            ])
          }, [
            V("", true),
            a.oFileList.length ? (d(), h("div", jt, [
              (d(true), h(z, null, Q(a.oFileList, (N, je) => (d(), h("div", {
                key: N.uid,
                class: "flex-none h-12 w-12 relative bg-[#F6F7F9] group"
              }, [
                N.url ? (d(), P(Ye, {
                  key: 0,
                  class: "w-12 h-12 rounded",
                  fit: "cover",
                  src: N.url,
                  onError: (Ke) => x(N)
                }, null, 8, [
                  "src",
                  "onError"
                ])) : V("", true),
                N.percentage < 100 ? (d(), h("div", Kt, y(N.percentage) + "% ", 1)) : V("", true),
                s("div", {
                  class: "w-4 h-4 absolute -right-2 -top-2 cursor-pointer bg-white rounded-full invisible group-hover:visible",
                  onClick: (Ke) => b(je)
                }, [
                  l(ve, {
                    color: "#8C929F",
                    class: "!absolute left-0 top-0"
                  }, {
                    default: _(() => [
                      l(A(Fe))
                    ]),
                    _: 1
                  })
                ], 8, Jt)
              ]))), 128))
            ])) : V("", true),
            l(We, {
              modelValue: a.question,
              "onUpdate:modelValue": w[2] || (w[2] = (N) => a.question = N),
              placeholder: m.$t(m.placeholder),
              type: "textarea",
              class: re({
                "pointer-events-none": m.disabled
              }),
              rows: D.value ? 3 : 1,
              style: {
                "--el-input-text-color": "#182B50",
                "--el-input-bg-color": "transparent",
                "--el-border-color": "none",
                "--el-input-focus-border": "none",
                "--el-input-hover-border": "none",
                "--el-input-hover-border-color": "none",
                "--el-input-focus-border-color": "none"
              },
              resize: "none",
              maxlength: 1e4,
              onFocus: C,
              onKeypress: Ge
            }, null, 8, [
              "modelValue",
              "placeholder",
              "class",
              "rows"
            ]),
            s("div", Zt, [
              m.speechToText ? X((d(), h("div", {
                key: 0,
                class: "flex-center px-2 cursor-pointer",
                onClick: U
              }, [
                l(ve, {
                  size: "18",
                  color: "rgba(24, 43, 80, 0.8)"
                }, {
                  default: _(() => [
                    l(A(Ct))
                  ]),
                  _: 1
                })
              ])), [
                [
                  ce
                ]
              ]) : V("", true),
              l(Z, {
                color: m.mainColor,
                style: {
                  "--el-button-border-color": "transparent",
                  "--el-button-disabled-border-color": "transparent"
                },
                disabled: L.value,
                onClick: K
              }, {
                default: _(() => [
                  R(y(m.$t("action_send")), 1)
                ]),
                _: 1
              }, 8, [
                "color",
                "disabled"
              ])
            ])
          ], 2),
          f.recording ? (d(), h("div", Qt, [
            w[11] || (w[11] = s("div", {
              class: "text-sm text-[#9EA6BA]"
            }, " \u73B0\u5728\u8BB2... ", -1)),
            s("div", Xt, [
              s("div", {
                ref_key: "recWaveRef",
                ref: r,
                class: "flex-none w-32 h-10 rec-wave-bar"
              }, null, 512),
              s("div", eo, y(De - f.time) + "''\u540E\u505C\u6B62\u5F55\u97F3 ", 1)
            ]),
            s("div", to, [
              X((d(), h("div", {
                class: "cursor-pointer",
                onClick: $
              }, [
                l(ae, {
                  name: "paused",
                  color: "#2563EB",
                  width: "20"
                })
              ])), [
                [
                  ce
                ]
              ]),
              X((d(), P(ve, {
                class: "cursor-pointer",
                size: "20",
                color: "#CCCCCC",
                onClick: G
              }, {
                default: _(() => [
                  l(A(Fe))
                ]),
                _: 1
              })), [
                [
                  ce
                ]
              ]),
              s("div", oo, y(A(xt)(f.time)), 1)
            ])
          ])) : V("", true)
        ], 6);
      };
    }
  });
  const ao = $e(no, [
    [
      "__scopeId",
      "data-v-626207ce"
    ]
  ]);
  const so = [
    "innerHTML"
  ], lo = {
    __name: "text",
    props: {
      content: {
        type: String,
        required: true
      },
      reasoningContent: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(u) {
      const p = u, n = F(null);
      F(null);
      const e = new Ft({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
        highlight: (g, i) => {
          if (i && Be.getLanguage(i))
            try {
              return `<pre class="hljs"><code>${Be.highlight(g, {
                language: i,
                ignoreIllegals: true
              }).value}</code></pre>`;
            } catch {
            }
          return `<pre class="hljs"><code>${e.utils.escapeHtml(g)}</code></pre>`;
        },
        ...p.options
      }).use(Vt), o = F(""), r = F(p.loading);
      return me(() => p.loading, (g) => {
        g === true && (r.value = true);
      }), vt(() => {
        const g = p.reasoningContent ? `<details ${r.value ? "open" : ""}><summary>
<i></i>
<span>${p.content ? window.$t("completion_completed") : window.$t("completion_thinking")}</span>
</summary>
${p.reasoningContent}
</details>` : "";
        o.value = Bt(e.render(g + p.content)), W(() => {
          const i = n.value.querySelector("details summary i");
          i && (i.innerHTML = '<svg aria-hidden="true"  style="width: 16px; height: 16px;"><use xlink:href="#icon-star-link" fill=""></use></svg>');
        });
      }), (g, i) => (d(), h("div", {
        ref_key: "markdown_ref",
        ref: n,
        class: re([
          "markdown-body",
          {
            "is-loading": u.loading
          }
        ]),
        innerHTML: o.value
      }, null, 10, so));
    }
  }, ro = {
    class: "flex flex-col pt-7"
  }, io = {
    class: "flex items-center justify-between px-4 mb-2"
  }, co = {
    class: "text-base text-[#1D1E1F]"
  }, uo = {
    class: "text-sm text-[#1D1E1F]"
  }, po = {
    class: "flex flex-col space-y-4"
  }, _o = {
    class: "w-full flex justify-end"
  }, fo = {
    class: "w-full flex items-start flex-row justify-end gap-4"
  }, mo = [
    "innerHTML"
  ], go = [
    "src",
    "alt"
  ], vo = {
    class: "w-full flex items-start space-x-4"
  }, ho = [
    "src",
    "alt"
  ], xo = {
    class: "flex-1 overflow-x-hidden"
  }, yo = {
    class: "bg-[#F2F3F5] py-2.5 px-4 w-max max-w-[calc(100%-54px)] box-border rounded-md text-sm text-[#1D1E1F] group"
  }, bo = {
    class: "px-6 py-3"
  }, wo = ne({
    __name: "chat",
    setup(u) {
      const p = we(), n = Rt(), e = yt(), o = bt(), r = F(), g = F(), i = F([]), c = F(false), a = Y(() => e.info), E = Y(() => o.info), f = Y(() => c.value || i.value.some((C) => C.answer.loading)), k = (C) => {
        setTimeout(() => {
          C();
        }, 1200);
      }, B = (C) => {
        setTimeout(() => {
          C();
        }, 1200);
      };
      let I = 0, D = -1, L = {}, v = null;
      const T = async (C = {}) => {
        if (!p.agent_data.agent_id)
          return ee.warning(window.$t("agent_not_found"));
        p.agent_data.channel_type || await p.saveAgentData({
          hideToast: true
        });
        const { question: H = "" } = C;
        if (v && v.abort(), v = new AbortController(), !I) {
          c.value = true;
          const { data: S = {} } = await n.save({
            data: {
              agent_id: p.agent_data.agent_id,
              title: H
            }
          }).finally(() => {
            c.value = false;
          });
          I = S.conversation_id;
        }
        i.value.push({
          question: {
            role: "user",
            content: H
          },
          answer: {
            loading: true,
            role: "assistant",
            content: "",
            reasoning_content: ""
          }
        }), D = i.value.length - 1, L = i.value[D] || {}, n.chat({
          data: {
            conversation_id: I,
            agent_id: p.agent_data.agent_id,
            messages: [
              {
                role: "user",
                content: H
              }
            ],
            agent_configs: p.agent_data.configs
          },
          hideError: true,
          onDownloadProgress: async ({ chunks: S = [], intact_content: M, intact_reasoning_content: O } = {}) => {
            L.answer.content = M || L.answer.content || "", L.answer.reasoning_content = O || L.answer.reasoning_content || "", S[0] && S[0].role && (L.answer.role = S[0].role || ""), await W(), r.value && r.value.scrollToBottom();
          },
          signal: v.signal
        }).catch((S) => {
          ee.warning(S.message === "Access token is invalid" ? window.$t("agent_app.check_agent_config_tip") : S.message);
        }).finally(() => {
          L.answer.loading = false, v = null;
        }), g.value.question = "", await W(), r.value && r.value.scrollToBottom();
      }, t = () => {
        v && (v.abort(), v = null, L.answer.loading = false);
      }, x = ({ data: C = {} } = {}) => {
        T({
          question: C.question.content
        });
      }, b = () => {
        I = 0, i.value = [];
      }, q = async (C = "") => {
        await Oe(C), ee.success(window.$t("action_copy_success"));
      };
      return (C, H) => {
        const S = ge, M = Qe, O = te, j = Ut;
        return d(), h("div", ro, [
          s("div", io, [
            s("div", co, y(C.$t("debug_preview")), 1),
            s("div", {
              class: "flex-center gap-1 cursor-pointer",
              onClick: b
            }, [
              l(S, null, {
                default: _(() => [
                  l(A(Ne))
                ]),
                _: 1
              }),
              s("span", uo, y(C.$t("restart")), 1)
            ])
          ]),
          l(j, {
            ref_key: "scroll_ref",
            ref: r,
            class: "flex-1 px-4",
            "disable-top": true,
            "disable-bottom": true,
            onLoadBottom: B,
            onLoadTop: k
          }, {
            default: _(() => [
              s("div", po, [
                i.value.length ? (d(true), h(z, {
                  key: 1
                }, Q(i.value, (U, $) => (d(), h(z, {
                  key: $
                }, [
                  s("div", _o, [
                    s("div", fo, [
                      s("div", {
                        class: "bg-[#2563EB] bg-opacity-10 py-2.5 px-4 w-max max-w-[calc(100%-110px)] box-border rounded-md text-sm text-[#1D1E1F] whitespace-pre-wrap break-words",
                        innerHTML: U.question.content
                      }, null, 8, mo),
                      s("img", {
                        class: "w-10 h-10 rounded",
                        src: E.value.logo,
                        alt: a.value.nickname
                      }, null, 8, go)
                    ])
                  ]),
                  s("div", vo, [
                    s("img", {
                      class: "w-10 h-10 rounded",
                      src: A(p).agent_data.logo || A(Me).get(A(p).agent_data.agent_type),
                      alt: C.$t(A(p).agent_data.agent_type_label)
                    }, null, 8, ho),
                    s("div", xo, [
                      s("div", yo, [
                        l(lo, {
                          content: U.answer.content,
                          "reasoning-content": U.answer.reasoning_content,
                          loading: U.answer.loading
                        }, null, 8, [
                          "content",
                          "reasoning-content",
                          "loading"
                        ]),
                        s("div", {
                          class: re([
                            "flex items-center mt-1 gap-2 group-hover:visible",
                            [
                              U.answer.loading ? "visible" : "invisible"
                            ]
                          ])
                        }, [
                          U.answer.loading ? (d(), P(O, {
                            key: 0,
                            type: "primary",
                            link: "",
                            class: "bg-transparent",
                            onClick: t
                          }, {
                            default: _(() => [
                              l(S, {
                                class: "mr-1"
                              }, {
                                default: _(() => [
                                  l(A(Et))
                                ]),
                                _: 1
                              }),
                              R(" " + y(C.$t("action_stop_generation")), 1)
                            ]),
                            _: 1
                          })) : (d(), h(z, {
                            key: 1
                          }, [
                            l(O, {
                              type: "primary",
                              link: "",
                              class: "bg-transparent",
                              onClick: (G) => x({
                                data: U
                              })
                            }, {
                              default: _(() => [
                                l(S, {
                                  class: "mr-1"
                                }, {
                                  default: _(() => [
                                    l(A(Tt))
                                  ]),
                                  _: 1
                                }),
                                R(" " + y(C.$t("action_restart_generation")), 1)
                              ]),
                              _: 2
                            }, 1032, [
                              "onClick"
                            ]),
                            U.answer.content ? (d(), P(O, {
                              key: 0,
                              type: "primary",
                              link: "",
                              class: "bg-transparent",
                              onClick: (G) => q(U.answer.content)
                            }, {
                              default: _(() => [
                                l(S, {
                                  class: "mr-1"
                                }, {
                                  default: _(() => [
                                    l(A(At))
                                  ]),
                                  _: 1
                                }),
                                R(" " + y(C.$t("action_copy")), 1)
                              ]),
                              _: 2
                            }, 1032, [
                              "onClick"
                            ])) : V("", true)
                          ], 64))
                        ], 2)
                      ])
                    ])
                  ])
                ], 64))), 128)) : (d(), P(M, {
                  key: 0,
                  class: "mt-10",
                  description: C.$t("chat.empty_desc")
                }, null, 8, [
                  "description"
                ]))
              ])
            ]),
            _: 1
          }, 512),
          s("div", bo, [
            l(ao, {
              ref_key: "chat_input_ref",
              ref: g,
              disabled: f.value,
              onConfirm: T
            }, null, 8, [
              "disabled"
            ])
          ])
        ]);
      };
    }
  }), $o = {
    class: "flex flex-col px-4"
  }, ko = {
    class: "flex items-center justify-between mb-5"
  }, Co = {
    class: "text-base text-[#1D1E1F]"
  }, Eo = {
    class: "flex-center gap-1 cursor-pointer"
  }, To = {
    class: "text-sm text-[#1D1E1F]"
  }, Ao = {
    key: 0,
    class: "text-xs text-[#182b50] text-opacity-30 mt-1"
  }, Fo = {
    key: 0,
    class: "text-xs text-[#182b50] text-opacity-30 mt-1"
  }, Vo = {
    key: 0,
    class: "text-xs text-[#182b50] text-opacity-30 mt-1"
  }, Bo = {
    key: 0,
    class: "text-xs text-[#182b50] text-opacity-30 mt-1"
  }, So = {
    class: "flex flex-wrap gap-3"
  }, qo = [
    "onClick"
  ], Lo = {
    class: "text-xs text-[#182B50] text-opacity-80"
  }, Do = {
    key: 0,
    class: "text-xs text-[#182b50] text-opacity-30 mt-1"
  }, Ro = ne({
    __name: "completion",
    setup(u, { expose: p }) {
      const n = F([
        {
          id: 1,
          type: "text",
          label: window.$t("model_name"),
          placeholder: window.$t("model_name_placeholder"),
          maxlength: 20,
          showWordLimit: true,
          required: true,
          value: "gpt-3.5-turbo"
        },
        {
          id: 2,
          type: "textarea",
          label: window.$t("prompt"),
          placeholder: window.$t("prompt_placeholder"),
          maxlength: 200,
          showWordLimit: true,
          required: true,
          value: "\u4F60\u662F\u4E00\u4E2AAI\u52A9\u624B"
        }
      ]), e = (c) => function(a, E, f) {
        c.required ? c.value.some((B) => B.trim()) ? f() : f(new Error(`\u8BF7\u6DFB\u52A0${c.label}`)) : f();
      }, o = (c) => {
        c.temp = "", c.focus = true;
      }, r = (c) => {
        const a = c.temp.trim();
        a && (c.value.unshift(a), c.temp = ""), c.focus = false;
      }, g = (c, a) => {
        c.value.splice(a, 1);
      }, i = () => n.value.reduce((c, a) => (c[`${a.id}`] = a.type === "select" && !a.multiple ? a.value : Array.isArray(a.value) ? a.value.join(",") : String(a.value), c), {});
      return p({
        validate(c) {
          return formRef.value.validate((a) => {
            a && c && c(i());
          });
        }
      }), (c, a) => {
        const E = ge, f = fe, k = Ie, B = Xe, I = et, D = tt, L = Ue("Close"), v = Re, T = te;
        return d(), h("div", $o, [
          s("div", ko, [
            s("div", Co, y(c.$t("debug_preview")), 1),
            s("div", Eo, [
              l(E, null, {
                default: _(() => [
                  l(A(Ne))
                ]),
                _: 1
              }),
              s("span", To, y(c.$t("restart")), 1)
            ])
          ]),
          V("", true),
          l(v, {
            ref: "formRef",
            model: n.value,
            "label-position": "top",
            "require-asterisk-position": "right",
            onSubmit: a[0] || (a[0] = _e(() => {
            }, [
              "prevent"
            ]))
          }, {
            default: _(() => [
              (d(true), h(z, null, Q(n.value, (t, x) => (d(), h(z, {
                key: t.id
              }, [
                t.type === "text" ? (d(), P(k, {
                  key: 0,
                  prop: `${x}.value`,
                  label: t.label,
                  required: t.required,
                  rules: [
                    {
                      required: t.required,
                      message: "\u8BF7\u8F93\u5165",
                      trigger: "blur"
                    }
                  ]
                }, {
                  default: _(() => [
                    l(f, {
                      modelValue: t.value,
                      "onUpdate:modelValue": (b) => t.value = b,
                      size: "large",
                      placeholder: t.placeholder,
                      maxlength: t.maxlength,
                      "show-word-limit": t.showWordLimit
                    }, null, 8, [
                      "modelValue",
                      "onUpdate:modelValue",
                      "placeholder",
                      "maxlength",
                      "show-word-limit"
                    ]),
                    t.desc ? (d(), h("div", Ao, y(t.desc), 1)) : V("", true)
                  ]),
                  _: 2
                }, 1032, [
                  "prop",
                  "label",
                  "required",
                  "rules"
                ])) : t.type === "textarea" ? (d(), P(k, {
                  key: 1,
                  prop: `${x}.value`,
                  label: t.label,
                  required: t.required,
                  rules: [
                    {
                      required: t.required,
                      message: "\u8BF7\u8F93\u5165",
                      trigger: "blur"
                    }
                  ]
                }, {
                  default: _(() => [
                    l(f, {
                      modelValue: t.value,
                      "onUpdate:modelValue": (b) => t.value = b,
                      size: "large",
                      type: "textarea",
                      rows: "4",
                      resize: "none",
                      placeholder: t.placeholder,
                      maxlength: t.maxlength,
                      "show-word-limit": t.showWordLimit
                    }, null, 8, [
                      "modelValue",
                      "onUpdate:modelValue",
                      "placeholder",
                      "maxlength",
                      "show-word-limit"
                    ]),
                    t.desc ? (d(), h("div", Fo, y(t.desc), 1)) : V("", true)
                  ]),
                  _: 2
                }, 1032, [
                  "prop",
                  "label",
                  "required",
                  "rules"
                ])) : t.type === "inputNumber" ? (d(), P(k, {
                  key: 2,
                  prop: `${x}.value`,
                  label: t.label,
                  required: t.required,
                  rules: [
                    {
                      required: t.required,
                      message: "\u8BF7\u8F93\u5165",
                      trigger: "blur"
                    }
                  ]
                }, {
                  default: _(() => [
                    s("div", null, [
                      l(B, {
                        modelValue: t.value,
                        "onUpdate:modelValue": (b) => t.value = b,
                        size: "large",
                        min: 1,
                        placeholder: t.placeholder
                      }, null, 8, [
                        "modelValue",
                        "onUpdate:modelValue",
                        "placeholder"
                      ]),
                      t.desc ? (d(), h("div", Vo, y(t.desc), 1)) : V("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  "prop",
                  "label",
                  "required",
                  "rules"
                ])) : t.type === "select" ? (d(), P(k, {
                  key: 3,
                  prop: `${x}.value`,
                  label: t.label,
                  required: t.required,
                  rules: [
                    {
                      required: t.required,
                      message: "\u8BF7\u9009\u62E9",
                      trigger: "change"
                    }
                  ]
                }, {
                  default: _(() => [
                    l(D, {
                      modelValue: t.value,
                      "onUpdate:modelValue": (b) => t.value = b,
                      class: "w-full",
                      size: "large",
                      multiple: t.multiple,
                      placeholder: t.placeholder
                    }, {
                      default: _(() => [
                        (d(true), h(z, null, Q(t.options, (b) => (d(), P(I, {
                          key: b.value,
                          label: b.label,
                          value: b.label
                        }, null, 8, [
                          "label",
                          "value"
                        ]))), 128))
                      ]),
                      _: 2
                    }, 1032, [
                      "modelValue",
                      "onUpdate:modelValue",
                      "multiple",
                      "placeholder"
                    ]),
                    t.desc ? (d(), h("div", Bo, y(t.desc), 1)) : V("", true)
                  ]),
                  _: 2
                }, 1032, [
                  "prop",
                  "label",
                  "required",
                  "rules"
                ])) : t.type === "tag" ? (d(), P(k, {
                  key: 4,
                  prop: `${x}.value`,
                  label: t.label,
                  required: t.required,
                  rules: [
                    {
                      validator: e(t),
                      trigger: "change"
                    }
                  ]
                }, {
                  default: _(() => [
                    s("div", null, [
                      s("div", So, [
                        (d(true), h(z, null, Q(t.value, (b, q) => (d(), h("div", {
                          key: q,
                          class: "border bordre-[#B0B7C3] rounded-sm min-h-[32px] inline-flex items-center px-3 py-1 text-xs text-[#182B50] text-opacity-80 break-all"
                        }, [
                          R(y(b) + " ", 1),
                          l(E, {
                            class: "cursor-pointer ml-1",
                            color: "#d2d5dc",
                            onClick: (C) => g(t, q)
                          }, {
                            default: _(() => [
                              l(L)
                            ]),
                            _: 2
                          }, 1032, [
                            "onClick"
                          ])
                        ]))), 128)),
                        t.focus ? (d(), P(f, {
                          key: 0,
                          modelValue: t.temp,
                          "onUpdate:modelValue": (b) => t.temp = b,
                          autofocus: "",
                          style: {
                            width: "104px"
                          },
                          class: "h-8",
                          placeholder: c.$t("form_input_placeholder"),
                          onKeypress: He((b) => r(t), [
                            "enter"
                          ]),
                          onBlur: (b) => r(t)
                        }, null, 8, [
                          "modelValue",
                          "onUpdate:modelValue",
                          "placeholder",
                          "onKeypress",
                          "onBlur"
                        ])) : (d(), h("div", {
                          key: 1,
                          class: "border bordre-[#B0B7C3] border-dashed rounded-sm h-8 inline-flex items-center px-3 cursor-pointer",
                          onClick: (b) => o(t)
                        }, [
                          s("span", Lo, "+ " + y(c.$t("action_add")), 1)
                        ], 8, qo))
                      ]),
                      t.desc ? (d(), h("div", Do, y(t.desc), 1)) : V("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  "prop",
                  "label",
                  "required",
                  "rules"
                ])) : V("", true)
              ], 64))), 128))
            ]),
            _: 1
          }, 8, [
            "model"
          ]),
          s("div", null, [
            l(T, {
              type: "primary",
              size: "large"
            }, {
              default: _(() => [
                R(y(c.$t("start_running")), 1)
              ]),
              _: 1
            })
          ])
        ]);
      };
    }
  }), Io = {
    class: "h-full overflow-y-auto relative"
  }, Po = {
    class: "p-6 bg-white rounded"
  }, Ho = {
    class: "text-base text-[#1D1E1F]"
  }, Uo = {
    class: "text-sm text-[#9A9A9A] mt-4"
  }, zo = {
    class: "flex flex-wrap gap-5 mt-5"
  }, Oo = {
    class: "bg-white rounded p-5 relative"
  }, No = {
    class: "text-sm text-[#9A9A9A]"
  }, Mo = {
    class: "text-sm text-[#1D1E1F] break-words mt-4"
  }, Go = {
    class: "absolute right-8 -bottom-9"
  }, Yo = {
    class: "bg-[#E6EEFF] rounded p-5 mt-4"
  }, Wo = {
    class: "flex items-center justify-between"
  }, jo = {
    class: "text-sm text-[#9A9A9A]"
  }, Ko = {
    class: "text-sm text-[#1D1E1F] text-wrap break-words whitespace-pre-wrap mt-4 truncate line-clamp-6",
    style: {
      "-webkit-line-clamp": "12"
    }
  }, Jo = {
    class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex"
  }, Zo = {
    class: "text-base text-[#9A9A9A] mt-4"
  }, Qo = {
    class: "p-6 bg-white rounded mt-6"
  }, Xo = {
    class: "text-base text-[#1D1E1F]"
  }, en = {
    class: "text-sm text-[#9A9A9A] mt-4"
  }, tn = {
    class: "flex flex-wrap justify-between gap-5 mt-5"
  }, on = {
    key: 0,
    class: "w-[220px] h-[205px]"
  }, nn = [
    "src"
  ], an = [
    "onClick"
  ], sn = {
    class: "text-base text-[#9A9A9A] mt-4"
  }, ln = [
    "title"
  ], rn = [
    "title"
  ], cn = {
    class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex"
  }, dn = {
    class: "py-4 flex items-center justify-center"
  }, un = {
    class: "py-4 flex items-center justify-center"
  }, pn = ne({
    __name: "guide",
    setup(u) {
      const p = we(), n = F(), e = F(), o = F(p.form_data.use_cases.filter((t) => t.type === "case")), r = F([]);
      for (let t = 0; t < 3; t++) {
        const x = p.form_data.use_cases.filter((b) => b.type === "scene");
        r.value.push(x[t] || {
          id: "",
          image: "",
          scene: "",
          desc: ""
        });
      }
      const g = F(false), i = le({
        id: "",
        input_text: "",
        output_text: ""
      }), c = F(false), a = le({
        id: "",
        image: "",
        scene: "",
        desc: ""
      }), E = async (t = "") => {
        await Oe(t), ee.success(window.$t("action_copy_success"));
      }, f = async ({ data: t = {} } = {}) => {
        i.id = t.id || "", i.input_text = t.input_text || "", i.output_text = t.output_text || "", g.value = true, await W(), n.value.clearValidate();
      }, k = ({ data: t = {}, index: x = -1 } = {}) => {
        o.value.splice(x, 1);
      }, B = () => {
        n.value.validate((t) => {
          if (!t)
            return;
          const x = i.id || be(8), b = o.value.find((q) => q.id === x);
          b ? (b.input_text = i.input_text || "", b.output_text = i.output_text || "") : o.value.push({
            type: "case",
            id: x,
            input_text: i.input_text || "",
            output_text: i.output_text || ""
          }), I();
        });
      }, I = () => {
        g.value = false;
      }, D = async ({ data: t = {} } = {}) => {
        a.id = t.id || "", a.image = t.image || "", a.scene = t.scene || "", a.desc = t.desc || "", c.value = true, await W(), e.value.clearValidate();
      }, L = ({ data: t = {}, index: x = -1 } = {}) => {
        r.value.splice(x, 1), r.value.push({
          id: "",
          image: "",
          scene: "",
          desc: ""
        });
      }, v = () => {
        e.value.validate((t) => {
          if (!t)
            return;
          const x = a.id || be(8), b = r.value.find((q) => q.id === x);
          if (b)
            b.image = a.image || "", b.scene = a.scene || "", b.desc = a.desc || "";
          else {
            const q = r.value.findIndex((C) => !C.id);
            q >= 0 && r.value.splice(q, 1, {
              type: "scene",
              id: x,
              image: a.image || "",
              scene: a.scene || "",
              desc: a.desc || ""
            });
          }
          T();
        });
      }, T = () => {
        c.value = false;
      };
      return me(() => o.value, () => {
        p.form_data.use_cases = [
          ...o.value,
          ...r.value
        ].filter((t) => t.id);
      }, {
        immediate: true,
        deep: true
      }), me(() => r.value, () => {
        p.form_data.use_cases = [
          ...o.value,
          ...r.value
        ].filter((t) => t.id);
      }, {
        immediate: true,
        deep: true
      }), (t, x) => {
        const b = ze, q = te, C = ge, H = nt, S = fe, M = Ie, O = Re, j = te, U = ot;
        return d(), h("div", Io, [
          s("div", Po, [
            s("h4", Ho, y(t.$t("usage_case")), 1),
            s("div", Uo, y(t.$t("usage_case_desc")), 1),
            s("div", zo, [
              (d(true), h(z, null, Q(o.value, ($, G) => (d(), h("div", {
                key: G,
                class: "flex-none w-[48%] box-border p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid"
              }, [
                s("div", Oo, [
                  s("div", No, y(t.$t("input")), 1),
                  s("div", Mo, y($.input_text || "--"), 1),
                  s("div", Go, [
                    l(b, {
                      width: "50",
                      height: "50",
                      name: "arrow-down",
                      color: "white"
                    })
                  ])
                ]),
                s("div", Yo, [
                  s("div", Wo, [
                    s("div", jo, y(t.$t("output")), 1),
                    l(b, {
                      name: "copy",
                      color: "#4F5052",
                      onClick: (K) => E($.output_text)
                    }, null, 8, [
                      "onClick"
                    ])
                  ]),
                  s("div", Ko, y($.output_text || "--"), 1)
                ]),
                s("div", Jo, [
                  l(q, {
                    type: "primary",
                    onClick: (K) => f({
                      data: $
                    })
                  }, {
                    default: _(() => [
                      R(y(t.$t("action_edit")), 1)
                    ]),
                    _: 2
                  }, 1032, [
                    "onClick"
                  ]),
                  l(q, {
                    onClick: (K) => k({
                      data: $,
                      index: G
                    })
                  }, {
                    default: _(() => [
                      R(y(t.$t("action_delete")), 1)
                    ]),
                    _: 2
                  }, 1032, [
                    "onClick"
                  ])
                ])
              ]))), 128)),
              s("div", {
                class: "flex-none w-[48%] h-[140px] flex-center flex-col p-5 bg-[#F7F9FC] rounded cursor-pointer",
                onClick: _e(f, [
                  "stop"
                ])
              }, [
                l(C, {
                  size: "28",
                  color: "#9A9A9A"
                }, {
                  default: _(() => [
                    l(A(Ve))
                  ]),
                  _: 1
                }),
                s("p", Zo, y(t.$t("action_add")), 1)
              ])
            ])
          ]),
          s("div", Qo, [
            s("h4", Xo, y(t.$t("usage_scene")), 1),
            s("div", en, y(t.$t("usage_scene_desc")), 1),
            s("div", tn, [
              (d(true), h(z, null, Q(r.value, ($, G) => (d(), h("div", {
                key: G,
                class: "flex-1 max-w-[330px] px-4 box-border flex flex-col items-center text-center pt-3 pb-10 relative cursor-pointer group"
              }, [
                $.image ? (d(), h("div", on, [
                  s("img", {
                    src: $.image,
                    class: "w-full h-full object-cover"
                  }, null, 8, nn)
                ])) : (d(), h("div", {
                  key: 1,
                  class: "w-[220px] h-[205px] border flex-center flex-col mx-auto",
                  onClick: _e((K) => D({
                    data: $
                  }), [
                    "stop"
                  ])
                }, [
                  l(C, {
                    size: "28",
                    color: "#9A9A9A"
                  }, {
                    default: _(() => [
                      l(A(Ve))
                    ]),
                    _: 1
                  }),
                  s("p", sn, y(t.$t("action_add")), 1)
                ], 8, an)),
                $.id ? (d(), h(z, {
                  key: 2
                }, [
                  s("h6", {
                    class: "text-base text-[#1D1E1F] mt-5 text-center max-w-[10em] truncate",
                    title: $.scene || ""
                  }, y($.scene || ""), 9, ln),
                  s("p", {
                    class: "text-xs text-[#9A9A9A] mt-4 text-center text-wrap break-words whitespace-pre-wrap max-w-[24em] truncate line-clamp-6",
                    title: $.desc || ""
                  }, y($.desc || ""), 9, rn),
                  s("div", cn, [
                    l(q, {
                      type: "primary",
                      onClick: _e((K) => D({
                        data: $
                      }), [
                        "stop"
                      ])
                    }, {
                      default: _(() => [
                        R(y(t.$t("action_edit")), 1)
                      ]),
                      _: 2
                    }, 1032, [
                      "onClick"
                    ]),
                    l(q, {
                      onClick: (K) => L({
                        data: $,
                        index: G
                      })
                    }, {
                      default: _(() => [
                        R(y(t.$t("action_delete")), 1)
                      ]),
                      _: 2
                    }, 1032, [
                      "onClick"
                    ])
                  ])
                ], 64)) : (d(), h(z, {
                  key: 3
                }, [
                  $.scene ? V("", true) : (d(), P(H, {
                    key: 0,
                    class: "mt-6",
                    rows: 1
                  }))
                ], 64))
              ]))), 128))
            ])
          ]),
          pe(t.$slots, "footer"),
          l(U, {
            modelValue: g.value,
            "onUpdate:modelValue": x[2] || (x[2] = ($) => g.value = $),
            title: i.id ? t.$t("action_edit") : t.$t("action_add"),
            "align-center": "",
            width: "600px"
          }, {
            footer: _(() => [
              s("div", dn, [
                l(j, {
                  class: "w-[96px] h-[36px]",
                  type: "primary",
                  onClick: B
                }, {
                  default: _(() => [
                    R(y(t.$t("action_confirm")), 1)
                  ]),
                  _: 1
                }),
                l(j, {
                  class: "w-[96px] h-[36px] text-[#1D1E1F]",
                  type: "info",
                  plain: "",
                  onClick: I
                }, {
                  default: _(() => [
                    R(y(t.$t("action_cancel")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: _(() => [
              l(O, {
                ref_key: "case_form_ref",
                ref: n,
                model: i,
                "label-width": "64px",
                "label-position": "left"
              }, {
                default: _(() => [
                  l(M, {
                    label: t.$t("input"),
                    prop: "input_text",
                    rules: [
                      ...A(se)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 200,
                        message: t.$t("form_input_placeholder_max_length", {
                          max: 200
                        })
                      }
                    ]
                  }, {
                    default: _(() => [
                      l(S, {
                        size: "large",
                        modelValue: i.input_text,
                        "onUpdate:modelValue": x[0] || (x[0] = ($) => i.input_text = $),
                        maxlength: 200,
                        "show-word-limit": ""
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "rules"
                  ]),
                  l(M, {
                    label: t.$t("output"),
                    prop: "output_text",
                    rules: [
                      ...A(se)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 1e3,
                        message: t.$t("form_input_placeholder_max_length", {
                          max: 1e3
                        })
                      }
                    ]
                  }, {
                    default: _(() => [
                      l(S, {
                        type: "textarea",
                        size: "large",
                        rows: "10",
                        resize: "none",
                        modelValue: i.output_text,
                        "onUpdate:modelValue": x[1] || (x[1] = ($) => i.output_text = $),
                        maxlength: 1e3,
                        "show-word-limit": ""
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "rules"
                  ])
                ]),
                _: 1
              }, 8, [
                "model"
              ])
            ]),
            _: 1
          }, 8, [
            "modelValue",
            "title"
          ]),
          l(U, {
            modelValue: c.value,
            "onUpdate:modelValue": x[6] || (x[6] = ($) => c.value = $),
            title: a.id ? t.$t("action_edit") : t.$t("action_add"),
            "align-center": "",
            width: "600px"
          }, {
            footer: _(() => [
              s("div", un, [
                l(j, {
                  class: "w-[96px] h-[36px]",
                  type: "primary",
                  onClick: v
                }, {
                  default: _(() => [
                    R(y(t.$t("action_confirm")), 1)
                  ]),
                  _: 1
                }),
                l(j, {
                  class: "w-[96px] h-[36px] text-[#1D1E1F]",
                  type: "info",
                  plain: "",
                  onClick: T
                }, {
                  default: _(() => [
                    R(y(t.$t("action_cancel")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: _(() => [
              l(O, {
                ref_key: "scene_form_ref",
                ref: e,
                model: a,
                "label-width": "102px",
                "label-position": "left"
              }, {
                default: _(() => [
                  l(M, {
                    label: t.$t("pictorial_image"),
                    prop: "image",
                    rules: A(se)({
                      message: "form_upload_placeholder"
                    })
                  }, {
                    default: _(() => [
                      l(Dt, {
                        class: "!w-[120px] !h-[112px]",
                        modelValue: a.image,
                        "onUpdate:modelValue": x[3] || (x[3] = ($) => a.image = $)
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "rules"
                  ]),
                  l(M, {
                    label: t.$t("scene"),
                    prop: "scene",
                    rules: [
                      ...A(se)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 20,
                        message: t.$t("form_input_placeholder_max_length", {
                          max: 20
                        })
                      }
                    ]
                  }, {
                    default: _(() => [
                      l(S, {
                        size: "large",
                        modelValue: a.scene,
                        "onUpdate:modelValue": x[4] || (x[4] = ($) => a.scene = $),
                        maxlength: 20,
                        "show-word-limit": ""
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "rules"
                  ]),
                  l(M, {
                    label: t.$t("description"),
                    prop: "desc",
                    rules: [
                      ...A(se)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 50,
                        message: t.$t("form_input_placeholder_max_length", {
                          max: 50
                        })
                      }
                    ]
                  }, {
                    default: _(() => [
                      l(S, {
                        type: "textarea",
                        size: "large",
                        rows: "5",
                        resize: "none",
                        modelValue: a.desc,
                        "onUpdate:modelValue": x[5] || (x[5] = ($) => a.desc = $),
                        maxlength: 50,
                        "show-word-limit": ""
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "rules"
                  ])
                ]),
                _: 1
              }, 8, [
                "model"
              ])
            ]),
            _: 1
          }, 8, [
            "modelValue",
            "title"
          ])
        ]);
      };
    }
  }), _n = {
    id: "app-config-full-screen-hook",
    class: "relative h-full flex bg-white"
  }, fn = {
    class: "flex-1 flex flex-col overflow-hidden"
  }, mn = {
    key: 0,
    class: "border-t px-4 py-5"
  }, gn = {
    class: "border-t px-4 py-5 mt-8 sticky bottom-0 left-0 right-0 bg-white z-10"
  }, vn = ne({
    __name: "index",
    setup(u) {
      const p = ct(), n = dt(), e = we(), o = F(), r = F("first"), g = F({});
      Te("channelConfig", g);
      const i = Y(() => g.value.channel_type == ue.get(xe) ? xe : g.value.channel_type == ue.get(ye) ? ye : "");
      Te("channelTypeKey", i);
      const c = Y(() => ![
        Se,
        qe
      ].includes(e.agent_type) || g.value.channel_id), a = async () => {
        if (e.saving)
          return;
        const f = o.value;
        let k = "";
        if (f && f.save) {
          e.saving = true;
          const { data: B = {} } = await f.save().catch(() => {
            e.saving = false;
          });
          k = B.agent_id;
        } else if (f && f.validateForm) {
          if (!await f.validateForm())
            return Promise.reject();
          await e.saveAgentData().catch(() => {
            e.saving = false;
          }), e.saving = true, k = e.agent_id;
        }
        kt.emit("agent-change", {
          agent_id: k
        }), k && await n.replace({
          name: "AgentCreate",
          query: {
            type: e.agent_type,
            agent_id: k
          }
        }), e.saving = false;
      };
      let E = true;
      return me(() => e.form_data.custom_config.coze_workspace_id, (f) => {
        E || e.loadCozeBotOptions(f);
      }), Pe(async () => {
        e.resetState(), await W();
        const f = p.query.type || "prompt";
        switch (e.agent_id = Number(p.query.agent_id), e.agent_type = f, e.form_data.logo = Me.get(f), e.form_data.group_id = Number(p.query.group_id), e.form_data.custom_config.agent_type = f, await e.loadDetailData(), e.loadGroupOptions(), e.loadChannelOptions(), e.loadSubscriptionOptions(), e.agent_type) {
          case qt:
            e.loadCozeWorkspaceOptions().then(() => {
              e.loadCozeBotOptions(e.form_data.custom_config.coze_workspace_id), E = false;
            });
            break;
          case St:
            e.loadAppBuilderBotOptions();
            break;
        }
        switch (f) {
          case qe:
            g.value.name = Ae.get($t), g.value.channel_type = ue.get(xe);
            break;
          case Se:
            g.value.name = Ae.get(wt), g.value.channel_type = ue.get(ye);
            break;
        }
        e.form_data.channel_type || (e.form_data.channel_type = g.value.channel_type || 0), e.form_data.model || (await W(), e.form_data.model = i.value);
      }), (f, k) => {
        const B = it, I = te, D = at, L = st, v = rt, T = lt;
        return d(), P(v, {
          class: "px-[60px] py-8"
        }, {
          default: _(() => [
            l(B, {
              back: "",
              title: f.$t(A(e).agent_option_data.label),
              class: "mb-5"
            }, null, 8, [
              "title"
            ]),
            l(L, {
              modelValue: r.value,
              "onUpdate:modelValue": k[0] || (k[0] = (t) => r.value = t),
              class: "flex-1 agent-tabs el-tabs--full"
            }, {
              default: _(() => [
                l(D, {
                  label: f.$t("app_config"),
                  name: "first",
                  lazy: ""
                }, {
                  default: _(() => [
                    X((d(), h("div", _n, [
                      s("div", fn, [
                        l(ut, {
                          ref_key: "agentFormRef",
                          ref: o,
                          class: "flex-1 py-7 px-4 overflow-y-auto",
                          "agent-type": A(e).agent_type
                        }, null, 8, [
                          "agent-type"
                        ]),
                        c.value ? (d(), h("div", mn, [
                          l(I, {
                            type: "primary",
                            size: "large",
                            loading: A(e).saving,
                            onClick: a
                          }, {
                            default: _(() => [
                              R(y(f.$t("action_save")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "loading"
                          ])
                        ])) : V("", true)
                      ]),
                      k[1] || (k[1] = s("div", {
                        class: "flex-none w-px border-r"
                      }, null, -1)),
                      A(e).agent_option_data.response === "chat" ? (d(), P(wo, {
                        key: 0,
                        class: "flex-1 overflow-hidden"
                      })) : A(e).agent_option_data.response === "completion" ? (d(), P(Ro, {
                        key: 1,
                        class: "flex-1 py-7"
                      })) : V("", true)
                    ])), [
                      [
                        T,
                        f.loading
                      ]
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                l(D, {
                  label: f.$t("usage_guide"),
                  name: "second",
                  lazy: ""
                }, {
                  default: _(() => [
                    l(pn, null, ht({
                      _: 2
                    }, [
                      c.value ? {
                        name: "footer",
                        fn: _(() => [
                          s("div", gn, [
                            l(I, {
                              type: "primary",
                              size: "large",
                              loading: A(e).saving,
                              onClick: a
                            }, {
                              default: _(() => [
                                R(y(f.$t("action_save")), 1)
                              ]),
                              _: 1
                            }, 8, [
                              "loading"
                            ])
                          ])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1024)
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ])
              ]),
              _: 1
            }, 8, [
              "modelValue"
            ])
          ]),
          _: 1
        });
      };
    }
  });
  ia = $e(vn, [
    [
      "__scopeId",
      "data-v-daa61045"
    ]
  ]);
});
export {
  __tla,
  ia as default
};
