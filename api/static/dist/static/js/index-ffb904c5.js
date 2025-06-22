import { z as P, A as J, y as le, aI as he, r as f, Z as se, o as ae, Y as ne, b as d, j as A, w as r, d as i, f as s, L as T, t as c, x as ye, u as j, al as W, c as h, K as Q, F as N, n as G, a9 as te, ag as we, a5 as be, ah as ke, a4 as X, a6 as ue, e as ee, an as xe, N as re, a as $e, ax as Ee, ay as Ve, m as Z, p as de, a8 as Ce, ab as Te, R as Se, G as Fe } from "./index-8579fe4a.js";
import { v as Ie } from "./el-loading-8747b309.js";
import { _ as Be } from "./index-ad57f5b2.js";
import { _ as De } from "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import { E as Oe } from "./el-empty-0ab0c30c.js";
import { _ as pe } from "./index.vue_vue_type_style_index_0_lang-e49eb195.js";
import { _ as _e } from "./index-3e1ea7e0.js";
import { _ as Re } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import "./el-tag-0b6baecb.js";
import { E as ze, a as Le } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { _ as Ue } from "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import { d as Ge } from "./group-39bff2fe.js";
import "./sortable.esm-7ba019b6.js";
import "./position-4ca9dd9d.js";
import "./debounce-484109dd.js";
import "./el-tab-pane-e22c8d9b.js";
import "./index-3dae9a97.js";
import "./el-dropdown-menu-ce96a192.js";
import "./dropdown-85221e0a.js";
import "./el-divider-7d014453.js";
import "./el-checkbox-a21716fc.js";
import "./isEqual-8c73ec38.js";
const ce = (e = {}) => (e.ai_link_id = e.id = +e.id || 0, e), K = { async list({ params: e = {} } = {}) {
  e = JSON.parse(JSON.stringify(e)), (!+e.group_id || +e.group_id < 0) && delete e.group_id, e.keyword || delete e.keyword;
  const { data: w = [] } = await P.get("/api/ai_links", { params: e }).catch(J);
  return w.map((S = {}) => ce(S));
}, async save({ data: e = {} } = {}) {
  e = { ai_link_id: 0, logo: "", name: "", url: "", description: "", group_id: 0, sort: 0, ...e };
  const w = e.ai_link_id;
  delete e.ai_link_id;
  const { data: x = {} } = await P[w ? "put" : "post"](`/api/ai_links${w ? `/${w}` : ""}`, e).catch(J);
  return ce(x);
}, delete({ data: { ai_link_id: e } }) {
  return P.delete(`/api/ai_links/${e}`).catch(J);
}, store() {
  return P.get("/api/ai_links/default").catch(J);
}, sort({ items: e = [] }) {
  return P.post("/api/ai_links/batch/sort", { items: e }).catch(J);
} }, Ae = { class: "py-4 flex items-center justify-center" }, je = le({ __name: "create-dialog", props: { groupType: { default: 1 } }, emits: ["success"], setup(e, { expose: w, emit: x }) {
  const S = x, B = he("groupOptions", []), u = f(), p = f(false), y = f(false), _ = f(false), v = f({}), n = se({ logo: "", name: "", url: "", description: "", group_id: "" });
  ae(() => {
  });
  const D = ne(() => B.value.filter((t) => +t.group_id > 0)), O = () => {
    n.logo = "", n.name = "", n.url = "", n.description = "", n.group_id = (D.value[0] || {}).group_id || "", _.value = false;
  }, b = async ({ data: t = {} } = {}) => {
    O(), await G(), y.value = !!+t.ai_link_id, n.logo = t.logo || "", n.name = t.name || "", n.url = t.url || "", n.description = t.description || "", n.group_id = t.group_id || n.group_id || "", v.value = t, p.value = true;
  }, R = async () => {
    p.value = false;
  }, z = async () => {
    if (_.value)
      return;
    if (!await u.value.validate())
      return Promise.reject();
    _.value = true, await K.save({ data: { ...n, ai_link_id: v.value.ai_link_id } }).catch(() => {
      _.value = false;
    }), S("success"), te.success(window.$t("action_save_success")), R();
  };
  return w({ open: b, close: R, reset: O }), (t, a) => {
    const g = ze, $ = Le, E = we, F = be, m = ke, V = X, l = ue;
    return d(), A(l, { modelValue: p.value, "onUpdate:modelValue": a[5] || (a[5] = (o) => p.value = o), title: t.$t(y.value ? "action_edit" : "action_add"), width: "600px", "destroy-on-close": "", "close-on-click-modal": false }, { footer: r(() => [i("div", Ae, [s(V, { class: "w-[96px] h-[36px]", type: "primary", loading: _.value, onClick: z }, { default: r(() => [T(c(t.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), s(V, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ye(R, ["stop"]) }, { default: r(() => [T(c(t.$t("action_cancel")), 1)]), _: 1 })])]), default: r(() => [s(m, { ref_key: "formRef", ref: u, "label-width": "108px", "label-position": "left", model: n }, { default: r(() => [s(E, { label: t.$t("group"), prop: "group_id", rules: j(W)({ message: "form_select_placeholder" }) }, { default: r(() => [s($, { modelValue: n.group_id, "onUpdate:modelValue": a[0] || (a[0] = (o) => n.group_id = o), size: "large" }, { default: r(() => [(d(true), h(N, null, Q(D.value, (o) => (d(), A(g, { key: o.group_id, value: o.group_id, label: t.$t(o.group_name) }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), s(E, { label: "URL", prop: "url", rules: j(W)({ message: "form_input_placeholder", validator: ["url"] }) }, { default: r(() => [s(F, { modelValue: n.url, "onUpdate:modelValue": a[1] || (a[1] = (o) => n.url = o), size: "large", placeholder: "http://" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), s(E, { label: t.$t("icon"), prop: "logo", rules: j(W)({ message: "form_upload_placeholder" }) }, { default: r(() => [s(Ue, { modelValue: n.logo, "onUpdate:modelValue": a[2] || (a[2] = (o) => n.logo = o), class: "w-12 h-12" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), s(E, { label: t.$t("website_name"), prop: "name", rules: j(W)({ message: "form_input_placeholder" }) }, { default: r(() => [s(F, { modelValue: n.name, "onUpdate:modelValue": a[3] || (a[3] = (o) => n.name = o), size: "large", "show-word-limit": "", maxlength: "20", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), s(E, { label: t.$t("description"), prop: "description" }, { default: r(() => [s(F, { modelValue: n.description, "onUpdate:modelValue": a[4] || (a[4] = (o) => n.description = o), size: "large", type: "textarea", resize: "none", rows: "5", maxlength: "200", "show-word-limit": "", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} });
function Ne() {
  const e = f(null);
  return { scrollRef: e, scrollToBottom: async () => {
    await G(), e.value && (e.value.scrollTop = e.value.scrollHeight);
  }, scrollToTop: async () => {
    await G(), e.value && (e.value.scrollTop = 0);
  }, scrollTo: async (p, y = 0) => {
    await G();
    const _ = document.querySelector(p);
    e.value && _ && (e.value.scrollTop = _.offsetTop + y), await G();
  }, scrollToVal: async (p) => {
    await G(), e.value && (e.value.scrollTop = p);
  }, scrollToBottomIfAtBottom: async () => {
    await G(), e.value && e.value.scrollHeight - e.value.scrollTop - e.value.clientHeight <= 100 && (e.value.scrollTop = e.value.scrollHeight);
  } };
}
const He = { class: "bg-[#F7F7FA] -mx-7 -mt-5 -mb-4 px-7 py-4" }, Me = { class: "text-base text-[#1D1E1F] font-medium mt-4" }, Pe = { class: "flex-none flex items-center justify-between mt-4" }, Je = { class: "flex-1 w-0" }, Ke = { class: "flex-none flex-center gap-3 ml-8" }, Ye = ["id"], qe = { key: 1, class: "grid grid-cols-3 gap-4 mt-3" }, We = ["src"], Ze = { class: "flex-1 overflow-hidden" }, Qe = { class: "text-sm text-[#1D1E1F]" }, Xe = { class: "text-xs text-[#1D1E1F] text-opacity-60 truncate mt-1" }, eo = { class: "absolute inset-0 items-center justify-center bg-[#222326] bg-opacity-55 rounded hidden group-hover:flex" }, oo = le({ __name: "store-dialog", emits: ["add"], setup(e, { expose: w, emit: x }) {
  const S = x, { scrollRef: B, scrollTo: u } = Ne(), p = f(false), y = f([]), _ = se({ group_id: 0, keyword: "" }), v = ne(() => y.value.filter((t) => t.group_id > 0).map((t) => ({ ...t, links: t.links.filter((a) => a.name.includes(_.keyword) || a.description.includes(_.keyword)) }))), n = () => {
    p.value = true;
  }, D = () => {
    p.value = false;
  }, O = (t) => {
    u(`#toolbox-group-${t.value}`);
  }, b = (t) => {
    S("add", { data: t }), D();
  }, R = (t) => {
    window.open(t.url, "_blank");
  }, z = () => {
    K.store().then((t) => {
      const a = t.data.map((g, $) => ({ group_id: $ + 1, group_name: g.group_name, links: g.links }));
      a.unshift({ group_id: 0, group_name: window.$t("all") }), y.value = a;
    });
  };
  return ae(() => {
    z();
  }), w({ open: n, close: D }), (t, a) => {
    const g = _e, $ = pe, E = X, F = ue;
    return d(), A(F, { modelValue: p.value, "onUpdate:modelValue": a[2] || (a[2] = (m) => p.value = m), title: t.$t("action_add"), width: "870px" }, { default: r(() => [i("div", He, [i("div", { class: "flex items-center justify-center h-15 text-[#2563EB] bg-white text-sm cursor-pointer hover:bg-[#F2F4F8]", onClick: b }, " + " + c(t.$t("commom.add_manual")), 1), i("div", Me, c(t.$t("commom.add_market")), 1), i("div", Pe, [i("div", Je, [s(g, { modelValue: _.group_id, "onUpdate:modelValue": a[0] || (a[0] = (m) => _.group_id = m), type: "tabs-pure", options: y.value, onChange: O }, null, 8, ["modelValue", "options"])]), i("div", Ke, [s($, { modelValue: _.keyword, "onUpdate:modelValue": a[1] || (a[1] = (m) => _.keyword = m), placeholder: "module.ai_toolbox_search_placeholder" }, null, 8, ["modelValue"])])]), i("div", { ref_key: "scrollRef", ref: B, class: "max-h-[360px] overflow-y-auto relative" }, [(d(true), h(N, null, Q(v.value, (m) => (d(), h(N, { key: m.group_id }, [m.links.length ? (d(), h("div", { key: 0, id: `toolbox-group-${m.group_id}`, class: "text-sm text-[#939499] mt-4" }, c(m.group_name), 9, Ye)) : ee("", true), m.links.length ? (d(), h("div", qe, [(d(true), h(N, null, Q(m.links, (V, l) => (d(), h("div", { key: l, class: "bg-white rounded border p-4 flex items-center gap-2 relative group" }, [i("img", { alt: "AI \u641C\u7D22", src: V.logo, class: "size-10" }, null, 8, We), i("div", Ze, [i("div", Qe, c(V.name), 1), i("div", Xe, c(V.description), 1)]), i("div", eo, [s(E, { size: "small", onClick: (o) => R(V) }, { default: r(() => [T(c(t.$t("action_visit")), 1)]), _: 2 }, 1032, ["onClick"]), s(E, { type: "primary", size: "small", onClick: (o) => b(V) }, { default: r(() => [T(c(t.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])])]))), 128))])) : ee("", true)], 64))), 128))], 512)])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), to = { class: "flex-none flex items-center justify-between mt-5" }, lo = { class: "flex-1 w-0" }, so = { class: "flex-none flex-center gap-3 ml-8" }, ao = { class: "text-sm" }, no = { class: "mt-6 flex-1 box-border pr-1 overflow-y-auto relative" }, io = { key: 1 }, ro = ["aria-label"], co = { key: 0, class: "invisible group-hover:visible w-full h-full z-[2] absolute top-0 left-0 bg-black bg-opacity-40 flex-center gap-1.5" }, uo = ["src"], po = { class: "flex-1 w-0" }, _o = { class: "flex items-center justify-between" }, mo = { class: "text-sm text-[#1D1E1F] font-semibold line-clamp-1" }, fo = { class: "text-sm text-[#1D1E1F] text-opacity-60 line-clamp-1" }, go = { class: "sort-icon cursor-move" }, No = le({ __name: "index", setup(e) {
  const { isWorkEnv: w } = xe(), x = f(), S = f(), B = f(), u = se({ group_id: 0, keyword: "" }), p = f([]), y = f(false), _ = ne(() => {
    let l = b.value.filter((o) => +o.group_id > 0 && o.children && o.children.length);
    return +u.group_id > 0 && (l = l.filter((o) => o.group_id == u.group_id)), l;
  });
  ae(() => {
    v(), re.on("user-login-success", v);
  }), $e(() => {
    re.off("user-login-success", v);
  });
  const v = async () => {
    await n();
  }, n = async () => {
    y.value = true;
    const l = await K.list({ params: u }).finally(() => {
      y.value = false;
    });
    p.value = l, z();
  }, D = () => {
    B.value.open();
  }, O = ({ data: l = {} } = {}) => {
    +u.group_id > 0 && (l.group_id = +u.group_id), S.value.open({ data: l });
  }, b = f([]);
  Ee("groupOptions", b);
  const R = ({ options: l = [] } = {}) => {
    b.value = l.map((o) => ({ ...o, children: [] })), z();
  }, z = () => {
    b.value.forEach((l) => {
      l.children = p.value.filter((o) => o.group_id === l.group_id), l.children.sort((o, k) => k.sort - o.sort);
    });
  }, t = ({ data: l = {} } = {}) => {
    window.open(l.url, "_blank");
  }, a = async (l, o = {}) => {
    switch (l) {
      case "edit":
        O({ data: o });
        break;
      case "del":
        await Te.confirm(window.$t("action_delete_confirm"), window.$t("action_delete_tip")), await K.delete({ data: { ai_link_id: o.ai_link_id } }), te.success(window.$t("action_delete_success")), v();
        break;
    }
  }, g = f(false), $ = f(false), E = () => {
    g.value = true;
  }, F = () => {
    g.value = false, z();
  }, m = async () => {
    $.value = true;
    const l = b.value.reduce((o, k = {}) => [...o, ...k.children.map((H, L) => ({ group_id: k.group_id, id: H.ai_link_id, sort: k.children.length - L }))], []);
    await K.sort({ items: l }).finally(() => {
      $.value = false;
    }), te.success(window.$t("action_save_success")), F(), v();
  }, V = (l = {}) => {
    const { action: o, originSortableId: k = "", targetSortableId: H = "", value: L = [] } = l, oe = k.split("_").pop() || "", Y = H.split("_").pop() || "", q = b.value.find((M) => M.group_id === +oe), I = b.value.find((M) => M.group_id === +Y);
    switch (o) {
      case "add":
        I && (I.children = [...L]);
        break;
      case "remove":
        q && (q.children = [...L]);
        break;
      case "sort":
        I && (I.children = [...L]);
        break;
    }
  };
  return (l, o) => {
    const k = X, H = Re, L = _e, oe = pe, Y = Se, q = Oe, I = X, M = Fe, me = De, fe = Be, ge = Ve("debounce"), ve = Ie;
    return d(), A(fe, { class: "px-[60px] py-8" }, { default: r(() => [s(H, { title: l.$t("module.ai_toolbox") }, { right: r(() => [g.value ? (d(), h(N, { key: 0 }, [s(k, { type: "default", class: "min-w-[96px]", size: "large", onClick: F }, { default: r(() => [T(c(l.$t("action_cancel")), 1)]), _: 1 }), Z((d(), A(k, { type: "primary", class: "min-w-[96px] !ml-0", size: "large", onClick: m }, { default: r(() => [T(c(l.$t("action_save")), 1)]), _: 1 })), [[ge]])], 64)) : (d(), h(N, { key: 1 }, [j(w) ? ee("", true) : (d(), A(k, { key: 0, type: "default", class: "min-w-[96px]", size: "large", disabled: !!u.keyword, onClick: E }, { default: r(() => [T(c(l.$t("action_sort")), 1)]), _: 1 }, 8, ["disabled"])), s(k, { type: "primary", class: "min-w-[96px] !ml-0", size: "large", onClick: D }, { default: r(() => [T(c(l.$t("action_add")), 1)]), _: 1 })], 64))]), _: 1 }, 8, ["title"]), i("div", to, [i("div", lo, [s(L, { ref_key: "groupTabsRef", ref: x, modelValue: u.group_id, "onUpdate:modelValue": o[0] || (o[0] = (C) => u.group_id = C), disabled: g.value, "group-type": j(Ge), onChange: v, onGetOptions: R }, null, 8, ["modelValue", "disabled", "group-type"])]), i("div", so, [s(oe, { modelValue: u.keyword, "onUpdate:modelValue": o[1] || (o[1] = (C) => u.keyword = C), disabled: g.value, placeholder: "module.ai_toolbox_search_placeholder", onChange: v }, null, 8, ["modelValue", "disabled"]), i("div", { class: "flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]", onClick: o[2] || (o[2] = (...C) => x.value.open && x.value.open(...C)) }, [s(Y, { name: "cate-manage", width: "14px", height: "14px" }), i("div", ao, c(l.$t("group")), 1)])])]), Z((d(), h("div", no, [p.value.length ? (d(), h("ul", io, [(d(true), h(N, null, Q(_.value, (C) => (d(), h("li", { key: C.group_id }, [Z(i("div", { class: "text-[#4F5052] text-opacity-60 text-sm mb-4" }, c(C.group_name), 513), [[de, !+u.group_id || +u.group_id < 0]]), s(me, { "model-value": C.children, identity: "ai_link_id", class: "grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-9", customSortableId: `toolbox_group_${C.group_id}`, disabled: !g.value, group: "toolbox-group", forceRender: "", onChange: V, loading: $.value }, { item: r(({ item: U, index: vo }) => [i("div", { class: "h-[72px] bg-white overflow-hidden group relative border rounded p-4 flex items-center gap-2 cursor-pointer", role: "button", "aria-label": U.name }, [g.value ? ee("", true) : (d(), h("div", co, [s(I, { type: "default", onClick: (ie) => t({ data: U }) }, { default: r(() => [T(c(l.$t("action_visit")), 1)]), _: 2 }, 1032, ["onClick"]), s(I, { type: "primary", class: "!ml-0", onClick: (ie) => a("edit", U) }, { default: r(() => [T(c(l.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), s(I, { type: "default", class: "!ml-0 !px-2", onClick: (ie) => a("del", U) }, { default: r(() => [s(M, { color: "#FA5151", size: 16 }, { default: r(() => [s(j(Ce))]), _: 1 })]), _: 2 }, 1032, ["onClick"])])), i("img", { class: "w-10 h-10 object-cover rounded-full overflow-hidden", src: U.logo }, null, 8, uo), i("div", po, [i("div", _o, [i("div", mo, c(U.name), 1)]), i("div", fo, c(U.description), 1)]), Z(i("div", go, [s(Y, { name: "drag", width: "24px", height: "42px", color: "#a1a5af" })], 512), [[de, g.value]])], 8, ro)]), _: 2 }, 1032, ["model-value", "customSortableId", "disabled", "loading"])]))), 128))])) : (d(), A(q, { key: 0, class: "mt-10", description: l.$t("no_data") }, null, 8, ["description"]))])), [[ve, y.value || $.value]]), s(je, { ref_key: "createRef", ref: S, onSuccess: v }, null, 512), s(oo, { ref_key: "storeRef", ref: B, onAdd: O, onSuccess: v }, null, 512)]), _: 1 });
  };
} });
export {
  No as default
};
