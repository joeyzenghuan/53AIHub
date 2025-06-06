import { s, t as o } from "./index-226b5715.js";
const c = 1, n = 2, p = 3, _ = { group_id: -Date.now(), group_name: "", sort: 0 }, g = { async list({ params: t = {} } = {}) {
  t = JSON.parse(JSON.stringify(t));
  const a = t.group_type;
  delete t.group_type;
  const { data: e = [] } = await s.get(`/api/groups/type/${a}`, { params: t }).catch(o);
  return e;
}, async save({ data: { group_type: t, groups: a } }) {
  const { data: e = {} } = await s.post(`/api/groups/type/${t}`, { groups: a }).catch(o);
  return e;
}, async delete({ data: { group_id: t } }) {
  return s.delete(`/api/groups/${t}`).catch(o);
} };
export {
  _ as D,
  p as G,
  n as a,
  c as b,
  g
};
