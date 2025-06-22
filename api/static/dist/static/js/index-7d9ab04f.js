import { y as ee, r as b, Z as J, $ as Q, b as f, c as v, d as o, t as r, F as B, K as W, f as t, w as a, L as g, x as E, u as m, aB as X, j as ce, e as de, s as pe, al as S, aL as ue, a9 as me, n as M, aM as _e, aN as Y, R as te, a4 as G, G as fe, ag as q, ah as P, a5 as ve, a6 as xe, aa as ge, E as he, o as be, a as we, aO as ye, m as $e, az as ke, N as Ee, I as Ce, __tla as __tla_0 } from "./index-8579fe4a.js";
import { v as Ve } from "./el-loading-8747b309.js";
import { _ as Ae } from "./index-ad57f5b2.js";
import { E as De, a as Fe } from "./el-tab-pane-e22c8d9b.js";
import { _ as ze } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { _ as Se, __tla as __tla_1 } from "./input.vue_vue_type_script_setup_true_lang-985a2572.js";
import { __tla as __tla_2 } from "./input.vue_vue_type_style_index_0_lang-0b377bda.js";
import { u as oe, _ as Be, __tla as __tla_3 } from "./create-drawer.vue_vue_type_script_setup_true_lang-56f16283.js";
import { E as Ie } from "./el-drawer-393896dd.js";
import { a as Te } from "./el-skeleton-item-f5c34a93.js";
import { _ as Ue } from "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import { _ as j } from "./editor.vue_vue_type_style_index_0_lang-603ca752.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./el-tag-0b6baecb.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./index-3dae9a97.js";
import "./el-input-number-310bd679.js";
import "./index-ede470e7.js";
import "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import "./el-checkbox-a21716fc.js";
import "./el-text-f138b0ce.js";
import "./group-39bff2fe.js";
let Pt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  const je = {
    class: "h-full overflow-y-auto relative"
  }, Re = {
    class: "p-6 bg-white rounded"
  }, Ne = {
    class: "text-base text-[#1D1E1F]"
  }, Le = {
    class: "text-sm text-[#9A9A9A] mt-4"
  }, Oe = {
    class: "flex flex-wrap gap-5 mt-5"
  }, Me = {
    class: "bg-white rounded p-5 relative"
  }, Ge = {
    class: "text-sm text-[#9A9A9A]"
  }, qe = {
    class: "text-sm text-[#1D1E1F] break-words mt-4"
  }, Pe = {
    class: "absolute right-8 -bottom-9"
  }, He = {
    class: "bg-[#E6EEFF] rounded p-5 mt-4"
  }, Ke = {
    class: "flex items-center justify-between"
  }, Ze = {
    class: "text-sm text-[#9A9A9A]"
  }, Je = {
    class: "text-sm text-[#1D1E1F] text-wrap break-words whitespace-pre-wrap mt-4 truncate line-clamp-6",
    style: {
      "-webkit-line-clamp": "12"
    }
  }, Qe = {
    class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex"
  }, We = {
    class: "text-base text-[#9A9A9A] mt-4"
  }, Xe = {
    class: "p-6 bg-white rounded mt-6"
  }, Ye = {
    class: "text-base text-[#1D1E1F]"
  }, et = {
    class: "text-sm text-[#9A9A9A] mt-4"
  }, tt = {
    class: "flex flex-wrap justify-between gap-5 mt-5"
  }, ot = {
    key: 0,
    class: "w-[220px] h-[205px]"
  }, st = [
    "src"
  ], at = [
    "onClick"
  ], lt = {
    class: "text-base text-[#9A9A9A] mt-4"
  }, nt = [
    "title"
  ], it = [
    "title"
  ], rt = {
    class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex"
  }, ct = {
    class: "border-t pt-4 flex items-center justify-end"
  }, dt = {
    class: "py-4 flex items-center justify-center"
  }, pt = ee({
    __name: "guide",
    setup(se) {
      const w = oe().formData.value.custom_config, C = b(), $ = b(), h = b(w.use_cases.filter((e) => e.type === "case")), _ = b([]);
      for (let e = 0; e < 3; e++) {
        const l = w.use_cases.filter((u) => u.type === "scene");
        _.value.push(l[e] || {
          id: "",
          image: "",
          scene: "",
          desc: ""
        });
      }
      const y = b(false), d = J({
        id: "",
        input_text: "",
        output_text: ""
      }), k = b(false), n = J({
        id: "",
        image: "",
        scene: "",
        desc: ""
      }), i = async (e = "") => {
        await ue(e), me.success(window.$t("action_copy_success"));
      }, p = async ({ data: e = {} } = {}) => {
        d.id = e.id || "", d.input_text = e.input_text || "", d.output_text = e.output_text || "", y.value = true, await M(), C.value.clearValidate();
      }, I = ({ data: e = {}, index: l = -1 } = {}) => {
        h.value.splice(l, 1);
      }, R = async () => {
        if (await _e(0.2), !await C.value.validate())
          return;
        const l = d.id || Y(8), u = h.value.find((c) => c.id === l);
        u ? (u.input_text = d.input_text || "", u.output_text = d.output_text || "") : h.value.push({
          type: "case",
          id: l,
          input_text: d.input_text || "",
          output_text: d.output_text || ""
        }), V();
      }, V = () => {
        y.value = false;
      }, A = async ({ data: e = {} } = {}) => {
        n.id = e.id || "", n.image = e.image || "", n.scene = e.scene || "", n.desc = e.desc || "", k.value = true, await M(), $.value.clearValidate();
      }, N = ({ data: e = {}, index: l = -1 } = {}) => {
        _.value.splice(l, 1), _.value.push({
          id: "",
          image: "",
          scene: "",
          desc: ""
        });
      }, L = () => {
        $.value.validate((e) => {
          if (!e)
            return;
          const l = n.id || Y(8), u = _.value.find((c) => c.id === l);
          if (u)
            u.image = n.image || "", u.scene = n.scene || "", u.desc = n.desc || "";
          else {
            const c = _.value.findIndex((T) => !T.id);
            c >= 0 && _.value.splice(c, 1, {
              type: "scene",
              id: l,
              image: n.image || "",
              scene: n.scene || "",
              desc: n.desc || ""
            });
          }
          D();
        });
      }, D = () => {
        k.value = false;
      };
      return Q(() => h.value, () => {
        w.use_cases = [
          ...h.value,
          ..._.value
        ].filter((e) => e.id);
      }, {
        immediate: true,
        deep: true
      }), Q(() => _.value, () => {
        w.use_cases = [
          ...h.value,
          ..._.value
        ].filter((e) => e.id);
      }, {
        immediate: true,
        deep: true
      }), (e, l) => {
        const u = te, c = G, T = fe, ae = Te, K = q, le = P, U = G, ne = Ie, O = q, Z = ve, ie = P, re = xe;
        return f(), v("div", je, [
          o("div", Re, [
            o("h4", Ne, r(e.$t("usage_case")), 1),
            o("div", Le, r(e.$t("usage_case_desc")), 1),
            o("div", Oe, [
              (f(true), v(B, null, W(h.value, (s, F) => (f(), v("div", {
                key: F,
                class: "flex-none w-[48%] box-border p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid"
              }, [
                o("div", Me, [
                  o("div", Ge, r(e.$t("input")), 1),
                  o("div", qe, [
                    t(j, {
                      class: "w-full",
                      height: "auto",
                      "model-value": s.input_text || "--",
                      preview: ""
                    }, null, 8, [
                      "model-value"
                    ])
                  ]),
                  o("div", Pe, [
                    t(u, {
                      width: "50",
                      height: "50",
                      name: "arrow-down",
                      color: "white"
                    })
                  ])
                ]),
                o("div", He, [
                  o("div", Ke, [
                    o("div", Ze, r(e.$t("output")), 1),
                    t(u, {
                      name: "copy",
                      color: "#4F5052",
                      onClick: (z) => i(s.output_text)
                    }, null, 8, [
                      "onClick"
                    ])
                  ]),
                  o("div", Je, [
                    t(j, {
                      class: "w-full",
                      "bg-color": "transparent",
                      "model-value": s.output_text || "--",
                      preview: ""
                    }, null, 8, [
                      "model-value"
                    ])
                  ])
                ]),
                o("div", Qe, [
                  t(c, {
                    type: "primary",
                    onClick: (z) => p({
                      data: s
                    })
                  }, {
                    default: a(() => [
                      g(r(e.$t("action_edit")), 1)
                    ]),
                    _: 2
                  }, 1032, [
                    "onClick"
                  ]),
                  t(c, {
                    onClick: (z) => I({
                      data: s,
                      index: F
                    })
                  }, {
                    default: a(() => [
                      g(r(e.$t("action_delete")), 1)
                    ]),
                    _: 2
                  }, 1032, [
                    "onClick"
                  ])
                ])
              ]))), 128)),
              o("div", {
                class: "flex-none w-[48%] h-[140px] flex-center flex-col p-5 bg-[#F7F9FC] rounded cursor-pointer",
                onClick: E(p, [
                  "stop"
                ])
              }, [
                t(T, {
                  size: "28",
                  color: "#9A9A9A"
                }, {
                  default: a(() => [
                    t(m(X))
                  ]),
                  _: 1
                }),
                o("p", We, r(e.$t("action_add")), 1)
              ])
            ])
          ]),
          o("div", Xe, [
            o("h4", Ye, r(e.$t("usage_scene")), 1),
            o("div", et, r(e.$t("usage_scene_desc")), 1),
            o("div", tt, [
              (f(true), v(B, null, W(_.value, (s, F) => (f(), v("div", {
                key: F,
                class: "flex-1 max-w-[330px] px-4 box-border flex flex-col items-center text-center pt-3 pb-10 relative cursor-pointer group"
              }, [
                s.image ? (f(), v("div", ot, [
                  o("img", {
                    src: s.image,
                    class: "w-full h-full object-cover"
                  }, null, 8, st)
                ])) : (f(), v("div", {
                  key: 1,
                  class: "w-[220px] h-[205px] border flex-center flex-col mx-auto",
                  onClick: E((z) => A({
                    data: s
                  }), [
                    "stop"
                  ])
                }, [
                  t(T, {
                    size: "28",
                    color: "#9A9A9A"
                  }, {
                    default: a(() => [
                      t(m(X))
                    ]),
                    _: 1
                  }),
                  o("p", lt, r(e.$t("action_add")), 1)
                ], 8, at)),
                s.id ? (f(), v(B, {
                  key: 2
                }, [
                  o("h6", {
                    class: "text-base text-[#1D1E1F] mt-5 text-center max-w-[10em] truncate",
                    title: s.scene || ""
                  }, r(s.scene || ""), 9, nt),
                  o("p", {
                    class: "text-xs text-[#9A9A9A] mt-4 text-center text-wrap break-words whitespace-pre-wrap max-w-[24em] truncate line-clamp-6",
                    title: s.desc || ""
                  }, r(s.desc || ""), 9, it),
                  o("div", rt, [
                    t(c, {
                      type: "primary",
                      onClick: E((z) => A({
                        data: s
                      }), [
                        "stop"
                      ])
                    }, {
                      default: a(() => [
                        g(r(e.$t("action_edit")), 1)
                      ]),
                      _: 2
                    }, 1032, [
                      "onClick"
                    ]),
                    t(c, {
                      onClick: (z) => N({
                        data: s,
                        index: F
                      })
                    }, {
                      default: a(() => [
                        g(r(e.$t("action_delete")), 1)
                      ]),
                      _: 2
                    }, 1032, [
                      "onClick"
                    ])
                  ])
                ], 64)) : (f(), v(B, {
                  key: 3
                }, [
                  s.scene ? de("", true) : (f(), ce(ae, {
                    key: 0,
                    class: "mt-6",
                    rows: 1
                  }))
                ], 64))
              ]))), 128))
            ])
          ]),
          pe(e.$slots, "footer"),
          t(ne, {
            modelValue: y.value,
            "onUpdate:modelValue": l[2] || (l[2] = (s) => y.value = s),
            size: "980px",
            "append-to-body": "",
            "destroy-on-close": "",
            title: d.id ? e.$t("action_edit") : e.$t("action_add")
          }, {
            footer: a(() => [
              o("div", ct, [
                t(U, {
                  class: "w-[68px] h-[36px]",
                  plain: "",
                  onClick: V
                }, {
                  default: a(() => [
                    g(r(e.$t("action_cancel")), 1)
                  ]),
                  _: 1
                }),
                t(U, {
                  class: "w-[68px] h-[36px]",
                  type: "primary",
                  onClick: R
                }, {
                  default: a(() => [
                    g(r(e.$t("action_confirm")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: a(() => [
              t(le, {
                ref_key: "case_form_ref",
                ref: C,
                model: d,
                "label-width": "64px",
                "label-position": "top"
              }, {
                default: a(() => [
                  t(K, {
                    label: e.$t("input"),
                    prop: "input_text",
                    rules: [
                      ...m(S)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 200,
                        message: e.$t("form_input_placeholder_max_length", {
                          max: 200
                        })
                      }
                    ]
                  }, {
                    default: a(() => [
                      t(j, {
                        modelValue: d.input_text,
                        "onUpdate:modelValue": l[0] || (l[0] = (s) => d.input_text = s),
                        class: "w-full",
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
                  t(K, {
                    label: e.$t("output"),
                    prop: "output_text",
                    rules: [
                      ...m(S)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 1e3,
                        message: e.$t("form_input_placeholder_max_length", {
                          max: 1e3
                        })
                      }
                    ]
                  }, {
                    default: a(() => [
                      t(j, {
                        modelValue: d.output_text,
                        "onUpdate:modelValue": l[1] || (l[1] = (s) => d.output_text = s),
                        class: "w-full",
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
          t(re, {
            modelValue: k.value,
            "onUpdate:modelValue": l[6] || (l[6] = (s) => k.value = s),
            title: n.id ? e.$t("action_edit") : e.$t("action_add"),
            "align-center": "",
            width: "600px"
          }, {
            footer: a(() => [
              o("div", dt, [
                t(U, {
                  class: "w-[96px] h-[36px]",
                  type: "primary",
                  onClick: L
                }, {
                  default: a(() => [
                    g(r(e.$t("action_confirm")), 1)
                  ]),
                  _: 1
                }),
                t(U, {
                  class: "w-[96px] h-[36px] text-[#1D1E1F]",
                  type: "info",
                  plain: "",
                  onClick: D
                }, {
                  default: a(() => [
                    g(r(e.$t("action_cancel")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            default: a(() => [
              t(ie, {
                ref_key: "scene_form_ref",
                ref: $,
                model: n,
                "label-width": "102px",
                "label-position": "left"
              }, {
                default: a(() => [
                  t(O, {
                    label: e.$t("pictorial_image"),
                    prop: "image",
                    rules: m(S)({
                      message: "form_upload_placeholder"
                    })
                  }, {
                    default: a(() => [
                      t(Ue, {
                        modelValue: n.image,
                        "onUpdate:modelValue": l[3] || (l[3] = (s) => n.image = s),
                        class: "!w-[120px] !h-[112px]"
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "rules"
                  ]),
                  t(O, {
                    label: e.$t("scene"),
                    prop: "scene",
                    rules: [
                      ...m(S)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 20,
                        message: e.$t("form_input_placeholder_max_length", {
                          max: 20
                        })
                      }
                    ]
                  }, {
                    default: a(() => [
                      t(Z, {
                        modelValue: n.scene,
                        "onUpdate:modelValue": l[4] || (l[4] = (s) => n.scene = s),
                        size: "large",
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
                  t(O, {
                    label: e.$t("description"),
                    prop: "desc",
                    rules: [
                      ...m(S)({
                        message: "form_input_placeholder"
                      }),
                      {
                        max: 50,
                        message: e.$t("form_input_placeholder_max_length", {
                          max: 50
                        })
                      }
                    ]
                  }, {
                    default: a(() => [
                      t(Z, {
                        modelValue: n.desc,
                        "onUpdate:modelValue": l[5] || (l[5] = (s) => n.desc = s),
                        type: "textarea",
                        size: "large",
                        rows: 5,
                        resize: "none",
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
  }), ut = {
    id: "app-config-full-screen-hook",
    class: "relative h-full bg-white flex flex-col"
  }, mt = {
    class: "flex-1 flex flex-col overflow-hidden"
  }, _t = {
    class: "border prompt-input-wrapper rounded w-full flex flex-col !bg-white overflow-hidden relative"
  }, ft = {
    class: "min-h-10 pl-3 pr-2 border-b flex items-center justify-between rounded-t bg-white"
  }, vt = [
    "title"
  ], xt = {
    class: "flex items-center gap-1"
  }, gt = {
    class: "border-t px-4 py-5 bg-white"
  }, ht = ee({
    __name: "index",
    setup(se) {
      const H = ge();
      he();
      const x = oe(), w = x.formData, C = x.detailData, $ = x.loading, h = x.submitting, _ = b(), y = b(), d = b("config"), k = async () => {
        x.formatFormData(), await M(), y.value.open();
      }, n = async () => {
        if (!await _.value.validate())
          return;
        const p = await x.save();
        Ee.emit("prompt-update", {
          data: p
        }), x.fetchDetail();
      };
      return be(async () => {
        const i = H.query.prompt_id;
        i && x.fetchDetail({
          prompt_id: i
        });
      }), we(() => {
        x.reset();
      }), (i, p) => {
        const I = G, R = ze, V = te, A = ke, N = q, L = P, D = De, e = Fe, l = Ae, u = Ve;
        return f(), v(B, null, [
          t(l, {
            class: "px-[60px] py-8"
          }, {
            default: a(() => [
              t(R, {
                back: "",
                title: m(C).name || i.$t("action_edit"),
                class: "mb-5"
              }, {
                title_suffix: a(() => [
                  t(I, {
                    class: "bg-transparent !p-0 !size-6",
                    size: "default",
                    icon: m(ye),
                    onClick: k
                  }, null, 8, [
                    "icon"
                  ])
                ]),
                _: 1
              }, 8, [
                "title"
              ]),
              t(e, {
                modelValue: d.value,
                "onUpdate:modelValue": p[4] || (p[4] = (c) => d.value = c),
                class: "flex-1 prompt-tabs el-tabs--full"
              }, {
                default: a(() => [
                  t(D, {
                    label: i.$t("prompt.config"),
                    name: "config",
                    lazy: ""
                  }, {
                    default: a(() => [
                      $e((f(), v("div", ut, [
                        o("div", mt, [
                          t(L, {
                            class: "py-6 px-8",
                            model: m(w),
                            ref_key: "formRef",
                            ref: _,
                            "label-position": "top",
                            "label-width": "120px"
                          }, {
                            default: a(() => [
                              t(N, {
                                label: i.$t("prompt.content"),
                                prop: "content",
                                rules: [
                                  {
                                    required: true,
                                    message: i.$t("form_input_placeholder")
                                  }
                                ]
                              }, {
                                default: a(() => [
                                  o("div", _t, [
                                    o("div", ft, [
                                      o("div", {
                                        class: "flex-1 text-sm text-[#4F5052] truncate",
                                        title: i.$t("role_instruction_desc")
                                      }, " *" + r(i.$t("role_instruction_desc")), 9, vt),
                                      o("div", xt, [
                                        t(A, {
                                          placement: "top",
                                          content: i.$t("optimize_tip")
                                        }, {
                                          default: a(() => [
                                            o("span", {
                                              class: "flex-center gap-1 text-[#2563EB] text-sm px-1 cursor-pointer opacity-60 pointer-events-none",
                                              onClick: p[0] || (p[0] = E((...c) => i.onOptimize && i.onOptimize(...c), [
                                                "stop"
                                              ]))
                                            }, [
                                              t(V, {
                                                name: "hglt",
                                                width: "18px"
                                              }),
                                              g(" " + r(i.$t("optimize")), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, [
                                          "content"
                                        ]),
                                        p[5] || (p[5] = o("div", {
                                          class: "flex-none h-4 w-px border-r border-[#E1E2E6]"
                                        }, null, -1)),
                                        t(A, {
                                          placement: "top",
                                          content: i.$t("generate_tip")
                                        }, {
                                          default: a(() => [
                                            o("span", {
                                              class: "text-[#182B50] px-1 cursor-pointer opacity-60 pointer-events-none",
                                              onClick: p[1] || (p[1] = E((...c) => i.onGenerate && i.onGenerate(...c), [
                                                "stop"
                                              ]))
                                            }, [
                                              t(V, {
                                                name: "magic-stick",
                                                width: "18px"
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, [
                                          "content"
                                        ])
                                      ])
                                    ]),
                                    t(Se, {
                                      modelValue: m(w).content,
                                      "onUpdate:modelValue": p[2] || (p[2] = (c) => m(w).content = c),
                                      style: {
                                        flex: "none",
                                        height: "calc(100vh - 400px)"
                                      },
                                      showLine: "",
                                      showToken: "",
                                      onChange: p[3] || (p[3] = (c) => _.value.validateField("content"))
                                    }, null, 8, [
                                      "modelValue"
                                    ])
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
                        ])
                      ])), [
                        [
                          u,
                          m($)
                        ]
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  t(D, {
                    label: i.$t("prompt.guide"),
                    name: "guide",
                    lazy: ""
                  }, {
                    default: a(() => [
                      t(pt)
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              }, 8, [
                "modelValue"
              ]),
              o("div", gt, [
                t(I, {
                  class: "w-[96px]",
                  type: "primary",
                  size: "large",
                  loading: m($) || m(h),
                  onClick: E(n, [
                    "stop"
                  ])
                }, {
                  default: a(() => [
                    g(r(i.$t("action_save")), 1)
                  ]),
                  _: 1
                }, 8, [
                  "loading"
                ])
              ])
            ]),
            _: 1
          }),
          t(Be, {
            ref_key: "createRef",
            ref: y
          }, null, 512)
        ], 64);
      };
    }
  });
  Pt = Ce(ht, [
    [
      "__scopeId",
      "data-v-ddd1b9ab"
    ]
  ]);
});
export {
  __tla,
  Pt as default
};
