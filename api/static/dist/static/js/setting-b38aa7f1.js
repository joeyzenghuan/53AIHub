import { z as e, A as p, B as n } from "./index-8579fe4a.js";
const s = -1, _ = 1, c = 2, y = 3, g = /* @__PURE__ */ new Map([[s, "payment.type.all"], [_, "payment.type.wechat"], [c, "payment.type.manual"], [y, "payment.type.paypal"]]), r = { list() {
  return e.get("/api/settings").catch(p);
}, detail(a) {
  return e.get(`/api/settings/group/${a}`).catch(p);
}, create(a) {
  return e.post("/api/settings", a).catch(p);
}, update(a, t) {
  return e.put(`/api/settings/${a}`, t).catch(p);
}, async paymentSettingList() {
  const { data: { pay_settings: a = [] } = {} } = await e.get("/api/pay_settings").catch(p);
  return a.map((t = {}) => (t.pay_setting_id = +t.pay_setting_id || 0, t.pay_type = +t.pay_type || 0, t.pay_label = g.get(t.pay_type), t.pay_status = !!+t.pay_status, t.pay_config = t.pay_config || "{}", t.pay_config = typeof t.pay_config == "string" ? JSON.parse(t.pay_config) : t.pay_config, t.extra_config = t.extra_config || "{}", t.extra_config = typeof t.extra_config == "string" ? JSON.parse(t.extra_config) : t.extra_config, t.created_time = +t.created_time || 0, t.created_time && (t.created_time = n({ date: t.created_time })), t.updated_time = +t.updated_time || 0, t.updated_time && (t.updated_time = n({ date: t.updated_time })), t));
}, async savePaymentSetting(a) {
  a = { pay_setting_id: 0, pay_config: {}, extra_config: {}, pay_status: true, pay_type: _, ...a };
  const t = a.pay_setting_id;
  return delete a.pay_setting_id, a.pay_config = JSON.stringify(a.pay_config || {}), a.extra_config = JSON.stringify(a.extra_config || {}), +t ? e.patch(`/api/pay_settings/${t}/config`, { pay_config: a.pay_config, extra_config: a.extra_config }).catch(p) : e.post("/api/pay_settings", a).catch(p);
}, async updatePaymentStatus(a, t) {
  return e.patch(`/api/pay_settings/${a}/status`, { pay_status: t }).catch(p);
} };
export {
  s as P,
  _ as a,
  g as b,
  r as s
};
