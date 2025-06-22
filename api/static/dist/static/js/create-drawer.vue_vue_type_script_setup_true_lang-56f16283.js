import { z as h, A as y, r as m, a9 as z, y as B, b as k, j as O, w as c, f as i, u as l, d as E, t as w, e as C, ag as I, a5 as P, ah as A, R as J, az as G, I as j, E as q, L as D, N as M, a4 as K, __tla as __tla_0 } from "./index-8579fe4a.js";
import { E as L } from "./el-drawer-393896dd.js";
import { E as Y } from "./el-input-number-310bd679.js";
import { _ as H } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { __tla as __tla_1 } from "./input.vue_vue_type_style_index_0_lang-0b377bda.js";
import { a as Q, G as W, c as X } from "./group-39bff2fe.js";
let pe, S, U;
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
  })()
]).then(async () => {
  let R, d, b, $, x, Z;
  S = {
    async list({ params: t = {} } = {}) {
      t = JSON.parse(JSON.stringify(t));
      const { data: { count: r = 0, prompts: u = [] } = {} } = await h.get("/api/prompts/admin", {
        params: t
      }).catch(y);
      return {
        total: +r || 0,
        list: u
      };
    },
    async detail({ prompt_id: t }) {
      const { data: r = {} } = await h.get(`/api/prompts/${t}`).catch(y);
      return r;
    },
    async save(t) {
      const r = +t.prompt_id || 0;
      delete t.prompt_id, t.custom_config && typeof t.custom_config == "object" && (t.custom_config = JSON.stringify(t.custom_config)), t.content || (t.content = " ");
      const { data: u = {} } = await h[r ? "put" : "post"](`/api/prompts/${r ? `${r}` : "system"}`, t).catch(y);
      return u;
    },
    async delete({ prompt_id: t }) {
      return h.delete(`/api/prompts/${t}`).catch(y);
    },
    async update_status({ prompt_id: t, status: r }) {
      return h.patch(`/api/prompts/${t}/status`, {
        status: r
      }).catch(y);
    }
  };
  R = {
    prompt_id: 0,
    group_ids: [],
    name: "",
    description: "",
    content: "",
    subscription_group_ids: [],
    user_group_ids: [],
    sort: 0,
    status: 1,
    custom_config: {
      use_cases: []
    }
  };
  d = m(JSON.parse(JSON.stringify(R)));
  b = m({});
  $ = m(false);
  x = m(false);
  U = () => {
    const t = () => {
      d.value = JSON.parse(JSON.stringify(R)), b.value = {};
    }, r = (e = {}) => {
      d.value = {
        ...d.value,
        ...e
      };
    }, u = () => d.value, a = async ({ prompt_id: e } = {}) => {
      $.value = true, e = e || d.value.prompt_id || b.value.prompt_id || 0;
      const n = await S.save({
        ...d.value
      }).finally(() => {
        $.value = false;
      });
      return z.success(window.$t("action_save_success")), n;
    }, p = async ({ prompt_id: e } = {}) => {
      e = e || d.value.prompt_id, x.value = true;
      const n = await S.detail({
        prompt_id: e
      }).finally(() => {
        x.value = false;
      });
      try {
        n.custom_config = JSON.parse(n.custom_config);
      } catch {
        n.custom_config = {};
      }
      n.custom_config || (n.custom_config = {}), n.custom_config.use_cases || (n.custom_config.use_cases = []), b.value = n, o();
    }, o = (e) => {
      e = e || b.value || {}, r({
        prompt_id: e.prompt_id || 0,
        group_ids: e.group_ids || [],
        name: e.name || "",
        description: e.description || "",
        content: e.content || "",
        subscription_group_ids: e.group_ids || [],
        user_group_ids: e.group_ids || [],
        sort: e.sort || 0,
        status: e.status,
        custom_config: e.custom_config
      });
    };
    return {
      formData: d,
      detailData: b,
      submitting: $,
      loading: x,
      reset: t,
      set: r,
      get: u,
      save: a,
      fetchDetail: p,
      formatFormData: o
    };
  };
  Z = {
    class: "w-full text-sm text-[#9A9A9A]"
  };
  const ee = {
    class: "font-semibold text-[#1D1E1F] mt-8 mb-4"
  }, te = B({
    __name: "form",
    setup(t, { expose: r }) {
      const a = U().formData, p = m();
      return r({
        validate: () => p.value.validate()
      }), (o, e) => {
        const n = H, _ = I, V = Y, v = P, N = J, f = G, g = A;
        return k(), O(g, {
          ref_key: "formRef",
          ref: p,
          class: "py-0 px-3",
          model: l(a),
          "label-position": "top",
          "label-width": "120px"
        }, {
          default: c(() => [
            i(_, {
              label: o.$t("group"),
              prop: "group_ids",
              rules: [
                {
                  required: true,
                  message: o.$t("form_select_placeholder")
                }
              ]
            }, {
              default: c(() => [
                i(n, {
                  modelValue: l(a).group_ids,
                  "onUpdate:modelValue": e[0] || (e[0] = (s) => l(a).group_ids = s),
                  "group-type": l(Q),
                  "default-first": "",
                  multiple: "",
                  clearable: ""
                }, null, 8, [
                  "modelValue",
                  "group-type"
                ])
              ]),
              _: 1
            }, 8, [
              "label",
              "rules"
            ]),
            i(_, {
              label: o.$t("action_sort"),
              prop: "sort",
              rules: [
                {
                  required: true,
                  message: o.$t("form_input_placeholder")
                }
              ]
            }, {
              default: c(() => [
                i(V, {
                  modelValue: l(a).sort,
                  "onUpdate:modelValue": e[1] || (e[1] = (s) => l(a).sort = s),
                  class: "!w-[200px]",
                  size: "large",
                  controls: false,
                  precision: 0,
                  min: 0,
                  max: 99999999,
                  placeholder: o.$t("form_input_placeholder"),
                  onKeydown: o.$numberInputKeydownHandler
                }, null, 8, [
                  "modelValue",
                  "placeholder",
                  "onKeydown"
                ]),
                E("div", Z, w(o.$t("module.agent_sort_desc")), 1)
              ]),
              _: 1
            }, 8, [
              "label",
              "rules"
            ]),
            i(_, {
              label: o.$t("title"),
              prop: "name",
              rules: [
                {
                  required: true,
                  message: o.$t("form_input_placeholder")
                }
              ]
            }, {
              default: c(() => [
                i(v, {
                  modelValue: l(a).name,
                  "onUpdate:modelValue": e[2] || (e[2] = (s) => l(a).name = s),
                  size: "large",
                  placeholder: o.$t("form_input_placeholder"),
                  maxlength: 20,
                  "show-word-limit": "",
                  clearable: ""
                }, null, 8, [
                  "modelValue",
                  "placeholder"
                ])
              ]),
              _: 1
            }, 8, [
              "label",
              "rules"
            ]),
            i(_, {
              label: o.$t("description"),
              prop: "description"
            }, {
              default: c(() => [
                i(v, {
                  modelValue: l(a).description,
                  "onUpdate:modelValue": e[3] || (e[3] = (s) => l(a).description = s),
                  type: "textarea",
                  rows: 6,
                  resize: "none",
                  placeholder: o.$t("form_input_placeholder"),
                  maxlength: 200,
                  "show-word-limit": "",
                  clearable: ""
                }, null, 8, [
                  "modelValue",
                  "placeholder"
                ])
              ]),
              _: 1
            }, 8, [
              "label"
            ]),
            C("", true),
            E("h1", ee, w(o.$t("usage_range")), 1),
            i(_, {
              label: o.$t("register_user.title"),
              prop: "subscription_group_ids"
            }, {
              default: c(() => [
                i(n, {
                  modelValue: l(a).subscription_group_ids,
                  "onUpdate:modelValue": e[8] || (e[8] = (s) => l(a).subscription_group_ids = s),
                  type: "checkbox",
                  "group-type": l(W),
                  multiple: "",
                  "default-all": ""
                }, null, 8, [
                  "modelValue",
                  "group-type"
                ])
              ]),
              _: 1
            }, 8, [
              "label"
            ]),
            i(_, {
              label: o.$t("internal_user.title"),
              prop: "user_group_ids"
            }, {
              default: c(() => [
                i(n, {
                  modelValue: l(a).user_group_ids,
                  "onUpdate:modelValue": e[9] || (e[9] = (s) => l(a).user_group_ids = s),
                  type: "picker",
                  "group-type": l(X),
                  multiple: ""
                }, null, 8, [
                  "modelValue",
                  "group-type"
                ])
              ]),
              _: 1
            }, 8, [
              "label"
            ])
          ]),
          _: 1
        }, 8, [
          "model"
        ]);
      };
    }
  });
  let oe, se;
  oe = j(te, [
    [
      "__scopeId",
      "data-v-0d7b9665"
    ]
  ]);
  se = {
    class: "flex border-t pt-5 justify-end w-full"
  };
  pe = B({
    __name: "create-drawer",
    setup(t, { expose: r }) {
      const u = m(), a = q(), p = m(false), o = m(false), e = U(), n = e.detailData, _ = e.submitting, V = async ({ group_ids: f = [] } = {}) => {
        p.value = !!n.value.prompt_id, p.value || e.reset(), o.value = true;
      }, v = () => {
        o.value = false;
      }, N = async () => {
        if (!await u.value.validate())
          return Promise.reject();
        const g = await e.save();
        M.emit(`prompt-${p.value ? "update" : "create"}`, {
          data: g
        }), v(), p.value ? e.fetchDetail() : a.push({
          name: "PromptCreate",
          query: {
            prompt_id: g.prompt_id
          }
        });
      };
      return r({
        open: V,
        close: v
      }), (f, g) => {
        const s = K, F = L;
        return k(), O(F, {
          modelValue: o.value,
          "onUpdate:modelValue": g[0] || (g[0] = (T) => o.value = T),
          title: p.value ? f.$t("action_edit") : f.$t("action_add"),
          size: "760px",
          "destroy-on-close": "",
          "append-to-body": "",
          "close-on-click-modal": false
        }, {
          footer: c(() => [
            E("div", se, [
              i(s, {
                size: "large",
                onClick: v
              }, {
                default: c(() => [
                  D(w(f.$t("action_cancel")), 1)
                ]),
                _: 1
              }),
              i(s, {
                type: "primary",
                size: "large",
                loading: l(_),
                onClick: N
              }, {
                default: c(() => [
                  D(w(f.$t("action_confirm")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ])
          ]),
          default: c(() => [
            i(oe, {
              ref_key: "formRef",
              ref: u
            }, null, 512)
          ]),
          _: 1
        }, 8, [
          "modelValue",
          "title"
        ]);
      };
    }
  });
});
export {
  pe as _,
  __tla,
  S as p,
  U as u
};
