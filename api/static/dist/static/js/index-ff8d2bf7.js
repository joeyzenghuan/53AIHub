import { _ as M } from "./index-ad57f5b2.js";
import { E as S, _ as N } from "./el-table-column-376475e4.js";
import { y as j, E as D, aa as G, r as f, Z as O, o as q, N as p, a as I, c as L, f as o, w as l, F as A, n as H, b as Y, L as w, t as u, d, u as E, a0 as Z, q as V, a9 as T, ab as J, a4 as K, a5 as Q, __tla as __tla_0 } from "./index-8579fe4a.js";
import { E as W } from "./el-switch-1a77f9ca.js";
import "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { _ as X } from "./index-3e1ea7e0.js";
import { _ as ee } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { p as y, _ as te, __tla as __tla_1 } from "./create-drawer.vue_vue_type_script_setup_true_lang-56f16283.js";
import { a as oe } from "./group-39bff2fe.js";
import "./el-loading-8747b309.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./sortable.esm-7ba019b6.js";
import "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import "./position-4ca9dd9d.js";
import "./el-tab-pane-e22c8d9b.js";
import "./index-3dae9a97.js";
import "./el-dropdown-menu-ce96a192.js";
import "./dropdown-85221e0a.js";
import "./el-divider-7d014453.js";
import "./el-drawer-393896dd.js";
import "./el-input-number-310bd679.js";
import "./index-ede470e7.js";
import "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import "./el-skeleton-item-f5c34a93.js";
import "./el-text-f138b0ce.js";
import { __tla as __tla_2 } from "./input.vue_vue_type_style_index_0_lang-0b377bda.js";
let De;
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
  })()
]).then(async () => {
  let ae, ne, le, se;
  ae = {
    class: "flex-1 overflow-y-auto bg-white rounded-lg px-10 py-6 mt-4"
  };
  ne = {
    class: "flex items-center justify-between mb-4"
  };
  le = {
    class: "flex-1 w-0"
  };
  se = {
    class: "flex-none flex-center gap-3 ml-8"
  };
  De = j({
    name: "Prompt",
    __name: "index",
    setup(re) {
      const x = D();
      G();
      const C = f(), k = f(), a = O({
        group_id: [],
        keyword: "",
        page: 1,
        page_size: 10
      }), b = f([]), $ = f(0), v = f(false), m = async () => {
        v.value = true;
        const { total: t = 0, list: n = [] } = await y.list({
          params: {
            group_id: a.group_id.join(","),
            keyword: a.keyword,
            offset: (a.page - 1) * a.page_size,
            limit: a.page_size
          }
        }).finally(() => {
          v.value = false;
        });
        $.value = t, b.value = [], await H(), b.value = [
          ...n
        ].map((s) => {
          s.group_ids = s.group_ids || [];
          let _ = C.value.getData();
          return _ = _.filter((c) => (s.group_ids || []).includes(c.group_id)) || {}, s.group_names = _.map((c) => c.group_name), s;
        });
      }, r = async () => (a.page = 1, m()), z = (t) => {
        a.page_size = t, r();
      }, P = (t) => {
        a.page = t, m();
      }, g = async (t, n = {}) => {
        switch (t) {
          case "add":
            k.value.open({
              group_ids: a.group_id
            });
            break;
          case "edit":
            await x.push({
              name: "PromptCreate",
              query: {
                prompt_id: n.prompt_id
              }
            });
            break;
          case "delete":
            await J.confirm(window.$t("prompt.delete_confirm"), window.$t("tip")), await y.delete({
              prompt_id: n.prompt_id
            }), T.success(window.$t("action_delete_success")), m();
            break;
          case "update_status":
            await y.update_status({
              prompt_id: n.prompt_id,
              status: n.status
            }), T.success(window.$t("action_save_success"));
            break;
        }
      };
      return q(() => {
        p.on("user-login-success", r), p.on("prompt-create", r), p.on("prompt-update", m);
      }), I(() => {
        p.off("user-login-success", r), p.off("prompt-create", r), p.off("prompt-update", m);
      }), (t, n) => {
        const s = K, _ = ee, c = X, R = Q, i = S, B = W, U = N, F = M;
        return Y(), L(A, null, [
          o(F, {
            class: "px-[60px] py-8"
          }, {
            default: l(() => [
              o(_, {
                title: t.$t("module.prompt")
              }, {
                right: l(() => [
                  o(s, {
                    type: "primary",
                    size: "large",
                    onClick: n[0] || (n[0] = (e) => g("add"))
                  }, {
                    default: l(() => [
                      w(" + " + u(t.$t("action_add")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "title"
              ]),
              d("div", ae, [
                d("div", ne, [
                  d("div", le, [
                    o(c, {
                      ref_key: "groupTabsRef",
                      ref: C,
                      modelValue: a.group_id,
                      "onUpdate:modelValue": n[1] || (n[1] = (e) => a.group_id = e),
                      type: "dropdown",
                      "group-type": E(oe),
                      onChange: r,
                      onGetOptions: r
                    }, null, 8, [
                      "modelValue",
                      "group-type"
                    ])
                  ]),
                  d("div", se, [
                    o(R, {
                      modelValue: a.keyword,
                      "onUpdate:modelValue": n[2] || (n[2] = (e) => a.keyword = e),
                      size: "large",
                      clearable: "",
                      placeholder: t.$t("prompt.search_placeholder"),
                      "suffix-icon": E(Z),
                      onChange: r
                    }, null, 8, [
                      "modelValue",
                      "placeholder",
                      "suffix-icon"
                    ])
                  ])
                ]),
                o(U, {
                  "header-row-class-name": "rounded overflow-hidden",
                  "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none",
                  data: b.value,
                  total: $.value,
                  loading: v.value,
                  page: a.page,
                  limit: a.page_size,
                  onPageSizeChange: z,
                  onPageCurrentChange: P
                }, {
                  default: l(() => [
                    o(i, {
                      label: t.$t("title"),
                      "min-width": "140",
                      prop: "name",
                      "show-overflow-tooltip": ""
                    }, null, 8, [
                      "label"
                    ]),
                    o(i, {
                      label: t.$t("description"),
                      "min-width": "180",
                      "show-overflow-tooltip": ""
                    }, {
                      default: l(({ row: e }) => [
                        d("span", {
                          class: V(e.description ? "" : "text-[#999]")
                        }, u(e.description || "--"), 3)
                      ]),
                      _: 1
                    }, 8, [
                      "label"
                    ]),
                    o(i, {
                      label: t.$t("group"),
                      "min-width": "180",
                      "show-overflow-tooltip": ""
                    }, {
                      default: l(({ row: e }) => [
                        d("span", {
                          class: V(!e.group_names || !e.group_names.length ? "text-[#999]" : "")
                        }, u(e.group_names.join("\u3001") || "--"), 3)
                      ]),
                      _: 1
                    }, 8, [
                      "label"
                    ]),
                    o(i, {
                      label: t.$t("sort"),
                      width: "80",
                      "show-overflow-tooltip": ""
                    }, {
                      default: l(({ row: e = {} }) => [
                        w(u(e.sort), 1)
                      ]),
                      _: 1
                    }, 8, [
                      "label"
                    ]),
                    o(i, {
                      label: t.$t("action_enable"),
                      width: "80"
                    }, {
                      default: l(({ row: e }) => [
                        o(B, {
                          modelValue: e.status,
                          "onUpdate:modelValue": (h) => e.status = h,
                          "active-value": 1,
                          "inactive-value": 0,
                          onChange: (h) => g("update_status", e)
                        }, null, 8, [
                          "modelValue",
                          "onUpdate:modelValue",
                          "onChange"
                        ])
                      ]),
                      _: 1
                    }, 8, [
                      "label"
                    ]),
                    o(i, {
                      label: t.$t("operation"),
                      width: "120",
                      align: "right",
                      fixed: "right"
                    }, {
                      default: l(({ row: e }) => [
                        o(s, {
                          type: "primary",
                          link: "",
                          onClick: (h) => g("edit", e)
                        }, {
                          default: l(() => [
                            w(u(t.$t("action_edit")), 1)
                          ]),
                          _: 2
                        }, 1032, [
                          "onClick"
                        ]),
                        o(s, {
                          type: "primary",
                          link: "",
                          onClick: (h) => g("delete", e)
                        }, {
                          default: l(() => [
                            w(u(t.$t("action_delete")), 1)
                          ]),
                          _: 2
                        }, 1032, [
                          "onClick"
                        ])
                      ]),
                      _: 1
                    }, 8, [
                      "label"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "data",
                  "total",
                  "loading",
                  "page",
                  "limit"
                ])
              ])
            ]),
            _: 1
          }),
          o(te, {
            ref_key: "createRef",
            ref: k
          }, null, 512)
        ], 64);
      };
    }
  });
});
export {
  __tla,
  De as default
};
