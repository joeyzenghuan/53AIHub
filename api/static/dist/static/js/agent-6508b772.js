import { C as c, n as A, m, s as g, t as _ } from "./index-76ebd052.js";
const i = "prompt", n = "53ai_agent", w = "53ai_workflow", p = "coze_agent_cn", r = "coze_workflow_cn", y = "coze_agent", N = "coze_workflow", o = "dify_agent", h = "dify_workflow", l = "app_builder", a = "bailian", f = "volcengine", s = /* @__PURE__ */ new Map([[i, "agent_app.prompt"], [n, "agent_app.53ai_agent"], [c.get(A), "agent_app.53ai_agent"], [w, "agent_app.53ai_workflow"], [p, "agent_app.coze_cn_agent"], [r, "agent_app.coze_cn_workflow"], [y, "agent_app.coze_agent"], [N, "agent_app.coze_workflow"], [o, "agent_app.dify_agent"], [c.get(m), "agent_app.dify_agent"], [h, "agent_app.dify_workflow"], [l, "agent_app.app_builder"], [a, "agent_app.bailian"], [f, "agent_app.volcengine"]]), P = /* @__PURE__ */ new Map([[i, window.$getRealPath({ url: "/images/agent/prompt.png" })], [n, window.$getRealPath({ url: "/images/agent/53ai.png" })], [w, window.$getRealPath({ url: "/images/agent/53ai.png" })], [p, window.$getRealPath({ url: "/images/agent/coze.png" })], [r, window.$getRealPath({ url: "/images/agent/coze.png" })], [y, window.$getRealPath({ url: "/images/agent/coze.png" })], [N, window.$getRealPath({ url: "/images/agent/coze.png" })], [o, window.$getRealPath({ url: "/images/agent/dify.png" })], [h, window.$getRealPath({ url: "/images/agent/dify.png" })], [l, window.$getRealPath({ url: "/images/agent/app_builder.png" })], [a, window.$getRealPath({ url: "/images/agent/bailian.png" })], [f, window.$getRealPath({ url: "/images/agent/volcengine.png" })]]), T = /* @__PURE__ */ new Map([[i, "chat"], [n, "chat"], [w, "completion"], [p, "chat"], [r, "chat"], [y, "chat"], [N, "chat"], [o, "chat"], [h, "chat"], [l, "chat"], [a, "chat"], [f, "chat"]]), b = [{ title: "intelligent_agent_platform", children: [p, l, o, n, r, i].map((e) => ({ value: e, label: s.get(e) || "", icon: P.get(e) || "", response: T.get(e) || "" })) }, { title: "cloud_computing_platform", children: [a, f].map((e) => ({ value: e, label: s.get(e) || "", icon: P.get(e) || "", response: T.get(e) || "" })) }];
function E(e = {}) {
  try {
    e.user_group_ids = (typeof e.user_group_ids == "string" ? JSON.parse(e.user_group_ids) : e.user_group_ids) || [];
  } catch {
    e.user_group_ids = [];
  }
  e.user_group_ids = e.user_group_ids.map((t) => +t);
  try {
    e.tools = typeof e.tools == "string" ? JSON.parse(e.tools) : e.tools || [];
  } catch {
    e.tools = [];
  }
  try {
    e.use_cases = typeof e.use_cases == "string" ? JSON.parse(e.use_cases) : e.use_cases || [];
  } catch {
    e.use_cases = [];
  }
  try {
    e.configs = typeof e.configs == "string" ? JSON.parse(e.configs) : e.configs || {};
  } catch {
    e.configs = {};
  }
  try {
    e.custom_config = typeof e.custom_config == "string" ? JSON.parse(e.custom_config) : e.custom_config || {};
  } catch {
    e.custom_config = {};
  }
  return e.agent_type = e.agent_type || e.custom_config.agent_type || i, e.agent_type_label = s.get(e.agent_type) || "", c.get(m) == e.channel_type && (e.agent_type = o, e.agent_type_label = s.get(o) || ""), c.get(A) == e.channel_type && (e.agent_type = n, e.agent_type_label = s.get(n) || ""), e.enable = !!+e.enable || false, e.sort = +e.sort || 0, e.channel_config = e.custom_config.channel_config || {}, e;
}
const G = { async list({ params: e = {} } = {}) {
  e = JSON.parse(JSON.stringify(e)), e.offset || (e.offset = 0), e.limit || (e.limit = 10), (!+e.group_id || +e.group_id < 1) && (e.group_id = "0"), e.keyword || delete e.keyword, e.channel_types || delete e.channel_types;
  const { data: t = {} } = await g.get("/api/agents/group", { params: e }).catch(_);
  return t.agents = (t.agents || []).map((u) => E(u)), t.count = +t.count || 0, t;
}, async save({ data: e } = {}) {
  e = { agent_id: 0, channel_type: 0, group_id: 0, configs: {}, logo: "", name: "", description: "", model: "", prompt: "", sort: 0, tools: [], use_cases: [], user_group_ids: [], custom_config: {}, enable: true, ...e };
  const t = +e.agent_id || 0;
  delete e.agent_id, typeof e.configs == "object" && (e.configs = JSON.stringify(e.configs)), typeof e.tools == "object" && (e.tools = JSON.stringify(e.tools)), typeof e.use_cases == "object" && (e.use_cases = JSON.stringify(e.use_cases)), typeof e.custom_config == "object" && (e.custom_config = JSON.stringify(e.custom_config)), typeof e.enable > "u" && (e.enable = true);
  const { data: u = {} } = await g[t ? "put" : "post"](`/api/agents${t ? `/${t}` : ""}`, e).catch(_);
  return E(u);
}, async delete({ data: { agent_id: e } }) {
  return g.delete(`/api/agents/${e}`).catch(_);
}, async detail({ data: { agent_id: e } }) {
  const { data: t = {} } = await g.get(`/api/agents/${e}`).catch(_);
  return E(t);
}, async updateStatus({ data: { agent_id: e, enable: t } }) {
  return g.patch(`/api/agents/${e}/status`, { enable: t }).catch(_);
} };
export {
  b as A,
  G as a,
  p as b,
  l as c,
  o as d,
  n as e,
  i as f,
  P as g
};
