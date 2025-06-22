import { z as i, A as c, C as u } from "./index-8579fe4a.js";
const n = (e, t) => {
  if (typeof e != "string")
    return e ?? t;
  try {
    return JSON.parse(e) ?? t;
  } catch {
    return t;
  }
};
function g(e = {}) {
  var _a, _b;
  return e.user_group_ids = n(e.user_group_ids, []), e.user_group_ids = [...new Set(e.user_group_ids)], e.tools = n(e.tools, []), e.use_cases = n(e.use_cases, []), e.configs = n(e.configs, {}), e.custom_config = n(e.custom_config, {}), e.settings = n(e.settings, {}), e.agent_type = e.agent_type || ((_a = e.custom_config) == null ? void 0 : _a.agent_type) || u.PROMPT, e.agent_type_label = `agent_app.${e.agent_type}`, e.enable = !!+(e.enable ?? false), e.sort = +(e.sort ?? 0), e.channel_config = ((_b = e.custom_config) == null ? void 0 : _b.channel_config) || {}, e;
}
const f = { async list({ params: e = {} } = { params: {} }) {
  e = JSON.parse(JSON.stringify(e)), e.offset = e.offset ?? 0, e.limit = e.limit ?? 10, e.group_id = !e.group_id || +e.group_id < 1 ? "0" : e.group_id, e.keyword || delete e.keyword, e.channel_types || delete e.channel_types;
  const { data: t = {} } = await i.get("/api/agents/group", { params: e }).catch(c), s = t;
  return s.agents = (s.agents || []).map((o) => g(o)), s.count = +(s.count ?? 0), s;
}, async save({ data: e = {} } = {}) {
  const t = { agent_id: 0, channel_type: 0, group_id: 0, configs: {}, logo: "", name: "", description: "", model: "", prompt: "", sort: 0, tools: [], use_cases: [], user_group_ids: [], custom_config: {}, settings: {}, enable: true, ...e }, s = +(t.agent_id ?? 0);
  delete t.agent_id;
  const o = { ...t, configs: typeof t.configs == "object" ? JSON.stringify(t.configs) : t.configs, tools: Array.isArray(t.tools) ? JSON.stringify(t.tools) : t.tools, use_cases: Array.isArray(t.use_cases) ? JSON.stringify(t.use_cases) : t.use_cases, custom_config: typeof t.custom_config == "object" ? JSON.stringify(t.custom_config) : t.custom_config, settings: typeof t.settings == "object" ? JSON.stringify(t.settings) : t.settings };
  typeof o.enable > "u" && (o.enable = true);
  const { data: r = {} } = await i[s ? "put" : "post"](`/api/agents${s ? `/${s}` : ""}`, o).catch(c);
  return g(r);
}, async delete({ data: { agent_id: e } }) {
  return i.delete(`/api/agents/${e}`).catch(c);
}, async detail({ data: { agent_id: e } }) {
  const { data: t = {} } = await i.get(`/api/agents/${e}`).catch(c);
  return g(t);
}, async updateStatus({ data: { agent_id: e, enable: t } }) {
  return i.patch(`/api/agents/${e}/status`, { enable: t }).catch(c);
} };
export {
  f as a
};
