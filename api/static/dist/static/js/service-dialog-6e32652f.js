import { u as d, h as _, i, Y as r, b as u, d as e, t as f, f as o, z as m, bf as v, y as g, p as x } from "./index-6feda8be.js";
const h = { class: "consult" }, b = { class: "consult-info" }, y = { class: "consult-info--rt" }, w = { class: "name" }, D = { class: "flex-center" }, $ = { class: "consult-ft px-[50px] py-[30px] max-md:px-4" }, z = ["innerHTML"], B = d({ __name: "service-dialog", props: { title: { default: window.$t("service.title") }, visible: { type: Boolean, default: false } }, emits: ["update:visible"], setup(C, { emit: l }) {
  const n = l, a = () => {
    n("update:visible", false);
  };
  return (t, s) => {
    const c = g, p = r;
    return u(), _(p, { class: "service-dialog", title: t.title, width: "520px", "before-close": a, "model-value": t.visible }, { default: i(() => [e("div", h, [e("div", b, [s[1] || (s[1] = e("div", { class: "w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center" }, [e("img", { class: "w-[50px] h-[50px]", src: "https://chat.53ai.com/images/extension_icon.png" })], -1)), e("div", y, [e("p", w, f(t.$t("service.consult_name")), 1), e("div", D, [o(c, { size: 16 }, { default: i(() => [o(m(v))]), _: 1 }), s[0] || (s[0] = e("span", { class: "mobile-number" }, "180 2238 7202", -1))])])]), e("div", $, [e("p", { innerHTML: `<span style='font-size: 15px;'>\u201C</span>${t.$t("service.desc_1")}<br />${t.title}<span style='font-size: 15px;'>\u201D</span>` }, null, 8, z)]), s[2] || (s[2] = e("div", { class: "consult-img right-[30px] max-md:right-[15px]" }, [e("img", { src: "https://chat.53ai.com/images/upgrade-qrcode.png" })], -1))])]), _: 1 }, 8, ["title", "model-value"]);
  };
} });
const I = x(B, [["__scopeId", "data-v-2e987f5f"]]);
export {
  I as S
};
