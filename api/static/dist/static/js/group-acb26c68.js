import { s as n, k as o } from "./index-6feda8be.js";
const u = 1, _ = 2, d = 3, c = 4, g = { group_id: -Date.now(), group_name: "", sort: 0 }, i = { async list({ params: e = {} } = {}) {
  e = JSON.parse(JSON.stringify(e));
  const s = e.group_type;
  delete e.group_type;
  const { data: r = [] } = await n.get(`/api/groups/type/${s}`, { params: e }).catch(o);
  return r;
}, async save({ data: { group_type: e, groups: s } }) {
  const { data: r = {} } = await n.post(`/api/groups/type/${e}`, { groups: s }).catch(o);
  return r;
}, async single_save(e) {
  const s = +e.group_id || 0;
  delete e.group_id;
  const { data: r = {} } = await n[s ? "put" : "post"](`/api/groups${s ? `/${s}` : ""}`, e).catch(o);
  return r;
}, async delete({ data: { group_id: e } }) {
  return n.delete(`/api/groups/${e}`).catch(o);
}, async user_list(e) {
  const s = +e.group_id || 0;
  delete e.group_id;
  const { data: r = {} } = await n.get(`/api/groups/${s}/users`, { params: e }).catch(o);
  return { total: +r.total || 0, list: (r.permissions || []).map((t = {}) => (t.permission_id = +t.permission_id || +t.id || 0, t.user = t.user || {}, t.department = t.department || {}, t = { ...t, ...t.user, ...t.department }, t.departments = t.departments || [], t.dept_id_list = t.departments.map((p) => +p.did).filter((p) => p), t.dept_names = t.departments.map((p) => p.name).join(","), t.resource_type === "department" && (t.dept_id_list = [+t.department.did], t.dept_names = t.department.name || ""), t)) };
}, async remove_user(e) {
  const s = +e.group_id || 0;
  return delete e.group_id, n.delete(`/api/groups/${s}/users`, { data: e }).catch(o);
}, async batch_add_user(e) {
  const s = +e.group_id || 0;
  return delete e.group_id, e.department_ids || (e.department_ids = []), e.user_ids || (e.user_ids = []), n.post(`/api/groups/${s}/users/batch`, e).catch(o);
}, async agent_list(e) {
  const s = +e.group_id || 0;
  delete e.group_id;
  const { data: r = {} } = await n.get(`/api/groups/${s}/agents`, { params: e }).catch(o);
  return { total: +r.count || 0, list: (r.agents || []).map((t = {}) => (t.value = +t.agent_id || 0, t.label = t.name || "", t)) };
}, async batch_add_agent(e) {
  const s = +e.group_id || 0;
  return delete e.group_id, e.agent_ids || (e.agent_ids = []), n.post(`/api/groups/${s}/agents`, e).catch(o);
}, async remove_agent(e) {
  const s = +e.group_id || 0;
  return delete e.group_id, n.delete(`/api/groups/${s}/agents`, { data: e }).catch(o);
} };
export {
  g as D,
  d as G,
  _ as a,
  c as b,
  u as c,
  i as g
};
