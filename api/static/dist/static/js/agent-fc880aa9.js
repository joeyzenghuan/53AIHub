import { M as p, N as w, O as b, P as t, s, k as c } from "./index-6feda8be.js";
const i = "prompt", o = "53ai_agent", N = "53ai_workflow", r = "coze_agent_cn", f = "coze_workflow_cn", T = "coze_agent", A = "coze_workflow", _ = "dify_agent", h = "dify_workflow", l = "app_builder", u = "bailian", E = "volcengine", g = /* @__PURE__ */ new Map([[i, "agent_app.prompt"], [o, "agent_app.53ai_agent"], [p.get(w), "agent_app.53ai_agent"], [N, "agent_app.53ai_workflow"], [r, "agent_app.coze_cn_agent"], [f, "agent_app.coze_cn_workflow"], [T, "agent_app.coze_agent"], [A, "agent_app.coze_workflow"], [_, "agent_app.dify_agent"], [p.get(b), "agent_app.dify_agent"], [h, "agent_app.dify_workflow"], [l, "agent_app.app_builder"], [u, "agent_app.bailian"], [E, "agent_app.volcengine"]]), P = /* @__PURE__ */ new Map([[i, t + "/agent/prompt.png"], [o, t + "/agent/53ai.png"], [N, t + "/agent/53ai.png"], [r, t + "/agent/coze.png"], [f, t + "/agent/coze.png"], [T, t + "/agent/coze.png"], [A, t + "/agent/coze.png"], [_, t + "/agent/dify.png"], [h, t + "/agent/dify.png"], [l, t + "/agent/app_builder.png"], [u, t + "/agent/bailian.png"], [E, t + "/agent/volcengine.png"]]), O = /* @__PURE__ */ new Map([[i, "chat"], [o, "chat"], [N, "completion"], [r, "chat"], [f, "chat"], [T, "chat"], [A, "chat"], [_, "chat"], [h, "chat"], [l, "chat"], [u, "chat"], [E, "chat"]]), Y = [{ title: "intelligent_agent_platform", children: [r, l, _, o, f, i].map((e) => ({ value: e, label: g.get(e) || "", icon: P.get(e) || "", response: O.get(e) || "" })) }, { title: "cloud_computing_platform", children: [u, E].map((e) => ({ value: e, label: g.get(e) || "", icon: P.get(e) || "", response: O.get(e) || "" })) }];
function y(e = {}) {
  try {
    e.user_group_ids = (typeof e.user_group_ids == "string" ? JSON.parse(e.user_group_ids) : e.user_group_ids) || [];
  } catch {
    e.user_group_ids = [];
  }
  e.user_group_ids = e.user_group_ids.map((n) => +n);
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
  return e.agent_type = e.agent_type || e.custom_config.agent_type || i, e.agent_type_label = g.get(e.agent_type) || "", p.get(b) == e.channel_type && (e.agent_type = _, e.agent_type_label = g.get(_) || ""), p.get(w) == e.channel_type && (e.agent_type = o, e.agent_type_label = g.get(o) || ""), e.enable = !!+e.enable || false, e.sort = +e.sort || 0, e.channel_config = e.custom_config.channel_config || {}, e;
}
const m = { async list({ params: e = {} } = {}) {
  e = JSON.parse(JSON.stringify(e)), e.offset || (e.offset = 0), e.limit || (e.limit = 10), (!+e.group_id || +e.group_id < 1) && (e.group_id = "0"), e.keyword || delete e.keyword, e.channel_types || delete e.channel_types;
  const { data: n = {} } = await s.get("/api/agents/group", { params: e }).catch(c);
  return n.agents = (n.agents || []).map((a) => y(a)), n.count = +n.count || 0, n;
}, async save({ data: e } = {}) {
  e = { agent_id: 0, channel_type: 0, group_id: 0, configs: {}, logo: "", name: "", description: "", model: "", prompt: "", sort: 0, tools: [], use_cases: [], user_group_ids: [], custom_config: {}, enable: true, ...e };
  const n = +e.agent_id || 0;
  delete e.agent_id, typeof e.configs == "object" && (e.configs = JSON.stringify(e.configs)), typeof e.tools == "object" && (e.tools = JSON.stringify(e.tools)), typeof e.use_cases == "object" && (e.use_cases = JSON.stringify(e.use_cases)), typeof e.custom_config == "object" && (e.custom_config = JSON.stringify(e.custom_config)), typeof e.enable > "u" && (e.enable = true);
  const { data: a = {} } = await s[n ? "put" : "post"](`/api/agents${n ? `/${n}` : ""}`, e).catch(c);
  return y(a);
}, async delete({ data: { agent_id: e } }) {
  return s.delete(`/api/agents/${e}`).catch(c);
}, async detail({ data: { agent_id: e } }) {
  const { data: n = {} } = await s.get(`/api/agents/${e}`).catch(c);
  return y(n);
}, async updateStatus({ data: { agent_id: e, enable: n } }) {
  return s.patch(`/api/agents/${e}/status`, { enable: n }).catch(c);
} };
export {
  Y as A,
  m as a,
  r as b,
  l as c,
  _ as d,
  o as e,
  i as f,
  P as g
};
