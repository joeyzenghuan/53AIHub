import { y as D, bS as O, r as w, Y as B, o as P, bT as j, b as r, c, j as $, d as l, s as H, q as V, a7 as S, bU as Y, e as k, F as u, I as R, f as e, w as i, t as m, u as n, al as Z, bV as q, x as h, L as K, K as J, a9 as F, aL as Q, G as W, az as X, ag as ee, R as te, ah as oe, __tla as __tla_0 } from "./index-8579fe4a.js";
import { _ as ne } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { E as se, a as ae } from "./el-checkbox-a21716fc.js";
import { _ as le } from "./index-5764df31.js";
import { A as ie } from "./agent-info-3b42dae9.js";
import { _ as re } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as pe } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as me, __tla as __tla_1 } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { _ as de, __tla as __tla_2 } from "./input.vue_vue_type_script_setup_true_lang-985a2572.js";
import { __tla as __tla_3 } from "./input.vue_vue_type_style_index_0_lang-0b377bda.js";
import { c as ce } from "./group-39bff2fe.js";
import "./el-skeleton-item-f5c34a93.js";
import "./el-tag-0b6baecb.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./el-text-f138b0ce.js";
import "./el-input-number-310bd679.js";
import "./index-ede470e7.js";
import "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import "./sortable.esm-7ba019b6.js";
import "./position-4ca9dd9d.js";
import "./editor.vue_vue_type_style_index_0_lang-603ca752.js";
import "./el-loading-8747b309.js";
import "./el-switch-1a77f9ca.js";
import "./el-drawer-393896dd.js";
import "./agent-f71520b7.js";
let nt;
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
  const _e = D({
    __name: "index",
    props: {
      target: {
        default: "body"
      },
      flex: {
        type: Boolean,
        default: false
      },
      zIndex: {
        default: 0
      }
    },
    emits: [
      "zoom"
    ],
    setup(f, { emit: E }) {
      const t = f, b = E, { nextZIndex: C } = O(), g = w(), p = w(false), x = w(0), z = B(() => ({
        "bg-black bg-opacity-25  overflow-y-auto content-container": p.value,
        "content-flex": t.flex
      })), o = B(() => ({
        zIndex: t.zIndex ? t.zIndex : C()
      })), s = () => {
        p.value = !p.value, b("zoom", p.value);
      };
      return P(() => {
        j(g, ([d]) => {
          x.value = d.target.scrollHeight;
        });
      }), (d, _) => (r(), c(u, null, [
        (r(), $(Y, {
          to: d.target,
          disabled: !p.value
        }, [
          l("div", {
            ref_key: "contentRef",
            ref: g,
            class: V([
              z.value,
              d.$attrs.class
            ]),
            style: S(o.value)
          }, [
            H(d.$slots, "default", {
              isopen: p.value,
              handler: s
            }, void 0, true)
          ], 6)
        ], 8, [
          "to",
          "disabled"
        ])),
        p.value ? (r(), c("div", {
          key: 0,
          style: S({
            height: `${x.value}px`
          })
        }, null, 4)) : k("", true)
      ], 64));
    }
  });
  const ue = R(_e, [
    [
      "__scopeId",
      "data-v-eb86626f"
    ]
  ]), fe = {
    class: "text-base text-[#1D1E1F] mb-3"
  }, be = {
    class: "text-base text-[#1D1E1F] font-medium mb-4"
  }, ge = {
    class: "flex-center inline-flex align-middle ml-1 w-4 h-4 bg-[#FDF8EB] rounded-sm"
  }, xe = {
    class: "text-base text-[#1D1E1F] font-medium mb-4"
  }, ve = {
    class: "text-base text-[#1D1E1F] font-medium mb-4"
  }, ye = {
    class: "border rounded w-full flex flex-col !bg-[#FAFBFC] overflow-auto relative"
  }, he = [
    "title"
  ], we = {
    class: "flex items-center gap-1"
  }, $e = [
    "onClick"
  ], ke = {
    class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4"
  }, Ee = {
    class: "text-[#1D1E1F]"
  }, Ce = D({
    __name: "prompt",
    props: {
      showChannelConfig: {
        type: Boolean,
        default: false
      }
    },
    setup(f, { expose: E }) {
      const t = me(), b = w(), C = () => F.warning(window.$t("feature_coming_soon")), g = () => F.warning(window.$t("feature_coming_soon")), p = (o) => {
        o.option.vision || (t.form_data.custom_config.image_parse.enable = false);
      }, x = async (o = "") => {
        await Q(o), F.success(window.$t("action_copy_success"));
      };
      return E({
        validateForm: async () => b.value.validate()
      }), (o, s) => {
        const d = W, _ = X, U = le, v = ee, y = te, T = ue, A = se, G = ae, N = ne, L = oe;
        return r(), c("div", {
          class: V([
            f.showChannelConfig ? "" : "py-7"
          ])
        }, [
          e(L, {
            ref_key: "form_ref",
            ref: b,
            model: n(t).form_data,
            "label-width": "104px",
            "label-position": "top"
          }, {
            default: i(() => [
              f.showChannelConfig ? (r(), c(u, {
                key: 0
              }, [
                l("h3", fe, m(o.$t("agent_app.prompt")), 1),
                l("div", be, m(o.$t("access_model")), 1),
                e(v, {
                  "label-width": "0",
                  prop: "model",
                  rules: n(Z)({
                    message: "form_select_placeholder"
                  })
                }, {
                  default: i(() => [
                    e(U, {
                      modelValue: n(t).form_data.model,
                      "onUpdate:modelValue": s[0] || (s[0] = (a) => n(t).form_data.model = a),
                      size: "large",
                      options: n(t).model_options,
                      onChange: p
                    }, {
                      item_after: i(({ data: a }) => [
                        a.vision ? (r(), $(_, {
                          key: 0,
                          content: o.$t("support_image"),
                          placement: "top"
                        }, {
                          default: i(() => [
                            l("div", ge, [
                              e(d, {
                                size: "10px",
                                color: "#F0A105"
                              }, {
                                default: i(() => [
                                  e(n(q))
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, [
                          "content"
                        ])) : k("", true)
                      ]),
                      _: 1
                    }, 8, [
                      "modelValue",
                      "options"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "rules"
                ]),
                l("div", xe, m(o.$t("basic_info")), 1),
                e(ie, {
                  modelValue: n(t).form_data,
                  "onUpdate:modelValue": s[1] || (s[1] = (a) => n(t).form_data = a)
                }, null, 8, [
                  "modelValue"
                ])
              ], 64)) : (r(), c(u, {
                key: 1
              }, [
                l("div", ve, m(o.$t("role_instruction")), 1),
                e(v, {
                  "label-width": "0",
                  class: "mb-10"
                }, {
                  default: i(() => [
                    e(T, {
                      class: "w-full",
                      "z-index": 9
                    }, {
                      default: i(({ isopen: a, handler: M }) => [
                        l("div", ye, [
                          l("div", {
                            class: V([
                              "min-h-10 pl-3 pr-2 border-b flex items-center justify-between rounded-t bg-[#FBFBFC]",
                              [
                                a ? "sticky top-0 left-0 right-0 z-10" : ""
                              ]
                            ])
                          }, [
                            l("div", {
                              class: "flex-1 text-sm text-[#4F5052] truncate",
                              title: o.$t("role_instruction_desc")
                            }, " *" + m(o.$t("role_instruction_desc")), 9, he),
                            l("div", we, [
                              e(_, {
                                placement: "top",
                                content: o.$t("optimize_tip")
                              }, {
                                default: i(() => [
                                  l("span", {
                                    class: "flex-center gap-1 text-[#2563EB] text-sm px-1 cursor-pointer opacity-60 pointer-events-none",
                                    onClick: h(C, [
                                      "stop"
                                    ])
                                  }, [
                                    e(y, {
                                      name: "hglt",
                                      width: "18px"
                                    }),
                                    K(" " + m(o.$t("optimize")), 1)
                                  ])
                                ]),
                                _: 1
                              }, 8, [
                                "content"
                              ]),
                              s[6] || (s[6] = l("div", {
                                class: "flex-none h-4 w-px border-r border-[#E1E2E6]"
                              }, null, -1)),
                              e(_, {
                                placement: "top",
                                content: o.$t("generate_tip")
                              }, {
                                default: i(() => [
                                  l("span", {
                                    class: "text-[#182B50] px-1 cursor-pointer opacity-60 pointer-events-none",
                                    onClick: h(g, [
                                      "stop"
                                    ])
                                  }, [
                                    e(y, {
                                      name: "magic-stick",
                                      width: "18px"
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, [
                                "content"
                              ]),
                              e(_, {
                                placement: "top",
                                content: o.$t("action_copy")
                              }, {
                                default: i(() => [
                                  l("span", {
                                    class: "text-[#182B50] px-1 cursor-pointer",
                                    onClick: s[2] || (s[2] = h((I) => x(n(t).form_data.prompt), [
                                      "stop"
                                    ]))
                                  }, [
                                    e(y, {
                                      name: "copy",
                                      width: "18px"
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, [
                                "content"
                              ]),
                              e(_, {
                                placement: "top",
                                content: o.$t(a ? "action_shrink" : "action_amplify")
                              }, {
                                default: i(() => [
                                  l("span", {
                                    class: "text-[#182B50] px-1 cursor-pointer",
                                    onClick: h(M, [
                                      "stop"
                                    ])
                                  }, [
                                    e(y, {
                                      name: a ? "shrink" : "amplify",
                                      width: "18px"
                                    }, null, 8, [
                                      "name"
                                    ])
                                  ], 8, $e)
                                ]),
                                _: 2
                              }, 1032, [
                                "content"
                              ])
                            ])
                          ], 2),
                          e(de, {
                            modelValue: n(t).form_data.prompt,
                            "onUpdate:modelValue": s[3] || (s[3] = (I) => n(t).form_data.prompt = I),
                            style: {
                              height: "280px",
                              "min-height": "max-content"
                            },
                            "show-line": ""
                          }, null, 8, [
                            "modelValue"
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e(re),
                e(pe),
                n(t).subscription_options.length ? (r(), c(u, {
                  key: 0
                }, [
                  l("div", ke, m(o.$t("permission_setting")), 1),
                  e(v, {
                    label: o.$t("register_user.title")
                  }, {
                    default: i(() => [
                      e(G, {
                        modelValue: n(t).form_data.subscription_group_ids,
                        "onUpdate:modelValue": s[4] || (s[4] = (a) => n(t).form_data.subscription_group_ids = a)
                      }, {
                        default: i(() => [
                          (r(true), c(u, null, J(n(t).subscription_options, (a) => (r(), $(A, {
                            key: a.value,
                            label: a.value
                          }, {
                            default: i(() => [
                              l("span", Ee, m(a.label), 1)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]))), 128))
                        ]),
                        _: 1
                      }, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  n(t).is_independent ? k("", true) : (r(), $(v, {
                    key: 0,
                    label: o.$t("internal_user.title"),
                    prop: "user_group_ids"
                  }, {
                    default: i(() => [
                      e(N, {
                        modelValue: n(t).form_data.user_group_ids,
                        "onUpdate:modelValue": s[5] || (s[5] = (a) => n(t).form_data.user_group_ids = a),
                        type: "picker",
                        "group-type": n(ce),
                        multiple: ""
                      }, null, 8, [
                        "modelValue",
                        "group-type"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]))
                ], 64)) : k("", true)
              ], 64))
            ]),
            _: 1
          }, 8, [
            "model"
          ])
        ], 2);
      };
    }
  });
  nt = R(Ce, [
    [
      "__scopeId",
      "data-v-b8e4d7cb"
    ]
  ]);
});
export {
  __tla,
  nt as default
};
