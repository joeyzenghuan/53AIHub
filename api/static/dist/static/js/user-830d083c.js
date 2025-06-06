import { s, t as e } from "./index-226b5715.js";
const t = 0, n = 1, r = 2, c = /* @__PURE__ */ new Map([[t, "internal_user.status.undefined"], [n, "internal_user.status.enabled"], [r, "internal_user.status.disabled"]]), E = { batch_save_admin(a) {
  return s.put("/api/users/batch/admin", a).catch(e);
}, batch_remove_admin(a) {
  return s.delete("/api/users/batch/admin", { data: a }).catch(e);
} };
export {
  t as I,
  n as a,
  r as b,
  c,
  E as u
};
