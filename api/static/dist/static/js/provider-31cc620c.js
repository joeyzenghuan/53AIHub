import { z as s, A as i, B as c, P as o } from "./index-8579fe4a.js";
const _ = { async list({ params: r = {} } = {}) {
  r = JSON.parse(JSON.stringify(r));
  const { data: t = [] } = await s.get("/api/providers", { params: r }).catch(i);
  return t.map((e = {}, d) => {
    try {
      e.configs = typeof e.configs == "string" ? JSON.parse(e.configs) : e.configs || {};
    } catch {
      e.configs = {};
    }
    switch (e.created_time = e.created_time ? c({ date: e.created_time }) : "", e.updated_time = e.updated_time ? c({ date: e.updated_time }) : "", e.authed_time = e.authed_time ? c({ date: e.authed_time }) : "", e.provider_type) {
      case o.APP_BUILDER:
      case o["53AI"]:
        e.authed_time = e.created_time;
        break;
    }
    return e;
  });
}, async save({ data: r } = {}) {
  r = { provider_type: o.COZE_CN, provider_id: 0, name: "", access_token: "", configs: {}, ...r };
  const t = r.provider_id;
  delete r.provider_id, typeof r.configs == "object" && (r.configs = JSON.stringify(r.configs));
  const { data: a = {} } = await s[t ? "put" : "post"](`/api/providers${t ? `/${t}` : ""}`, r).catch(i);
  return a;
}, async delete({ data: { provider_id: r } }) {
  return s.delete(`/api/providers/${r}`).catch(i);
} };
export {
  _ as p
};
