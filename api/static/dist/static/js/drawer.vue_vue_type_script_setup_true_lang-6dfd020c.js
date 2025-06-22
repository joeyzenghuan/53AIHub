import { y as S, r as m, Y as G, b as z, j as C, ao as F, C as s, ap as p, _ as l, aq as $, ar as M, as as k, at as E, au as T, av as v, aw as U, a9 as Y, w, n as q, ax as x, ay as j, d as W, f as D, L as R, t as L, m as Z, a4 as H, __tla as __tla_0 } from "./index-8579fe4a.js";
import { E as K } from "./el-drawer-393896dd.js";
import { a as I } from "./agent-f71520b7.js";
import { g as N, b as Q, G as J } from "./group-39bff2fe.js";
let _t, X, at;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let tt, B, et;
  X = S({
    __name: "index",
    props: {
      agentType: {},
      showChannelConfig: {
        type: Boolean
      }
    },
    setup(e, { expose: t }) {
      const a = e, _ = {
        [s.PROMPT]: p(() => l(() => import("./prompt-02870165.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), ["static/js/prompt-02870165.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/index-5764df31.js","static/css/index-ec0c9e0c.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/input.vue_vue_type_script_setup_true_lang-985a2572.js","static/js/input.vue_vue_type_style_index_0_lang-0b377bda.js","static/css/input-0dcea2e0.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/prompt-95ee8571.css"])),
        [s.COZE_AGENT_CN]: p(() => l(() => import("./coze-agent-2ec6bc88.js"), ["static/js/coze-agent-2ec6bc88.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/index-5764df31.js","static/css/index-ec0c9e0c.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/coze-agent-9fcfc51f.css"])),
        "coze-workflow": p(() => l(() => import("./coze-workflow-a334e6d0.js"), ["static/js/coze-workflow-a334e6d0.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-table-column-376475e4.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/sortable.esm-7ba019b6.js","static/css/el-table-column-ce73b86e.css","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/limit-config-9fc5876a.js","static/js/el-radio-2c60a23c.js","static/css/el-radio-72646e7e.css","static/css/limit-config-d055b96a.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/js/group-39bff2fe.js"])),
        [s.DIFY_AGENT]: p(() => l(() => import("./dify-agent-7931174d.js"), ["static/js/dify-agent-7931174d.js","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/el-popover-53d9d77c.js","static/js/dropdown-85221e0a.js","static/css/el-popover-11b2087f.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/dify-agent-6d016b39.css"])),
        "dify-workflow": p(() => l(() => import("./dify-workflow-8796fb0a.js"), ["static/js/dify-workflow-8796fb0a.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-table-column-376475e4.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/sortable.esm-7ba019b6.js","static/css/el-table-column-ce73b86e.css","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/limit-config-9fc5876a.js","static/js/el-radio-2c60a23c.js","static/css/el-radio-72646e7e.css","static/css/limit-config-d055b96a.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/js/group-39bff2fe.js"])),
        [s["53AI_AGENT"]]: p(() => l(() => import("./53ai-agent-37658223.js"), ["static/js/53ai-agent-37658223.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/index-5764df31.js","static/css/index-ec0c9e0c.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/53ai-agent-d4bbcf6e.css"])),
        "53ai-workflow": p(() => l(() => import("./53ai-workflow-ad323f5b.js"), ["static/js/53ai-workflow-ad323f5b.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-table-column-376475e4.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/sortable.esm-7ba019b6.js","static/css/el-table-column-ce73b86e.css","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/limit-config-9fc5876a.js","static/js/el-radio-2c60a23c.js","static/css/el-radio-72646e7e.css","static/css/limit-config-d055b96a.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/js/group-39bff2fe.js"])),
        [s.APP_BUILDER]: p(() => l(() => import("./app-builder-agent-aa92ceb8.js"), ["static/js/app-builder-agent-aa92ceb8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/index-5764df31.js","static/css/index-ec0c9e0c.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/app-builder-agent-87f5d729.css"])),
        [s.YUANQI]: p(() => l(() => import("./yuanqi-33c210e7.js"), ["static/js/yuanqi-33c210e7.js","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/el-popover-53d9d77c.js","static/js/dropdown-85221e0a.js","static/css/el-popover-11b2087f.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/yuanqi-40fc562d.css"])),
        [s.BAILIAN]: p(() => l(() => import("./bailian-a4491e95.js"), ["static/js/bailian-a4491e95.js","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/el-popover-53d9d77c.js","static/js/dropdown-85221e0a.js","static/css/el-popover-11b2087f.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/bailian-28b0be35.css"])),
        [s.VOLCENGINE]: p(() => l(() => import("./volcengine-78c38aa8.js"), ["static/js/volcengine-78c38aa8.js","static/js/index.vue_vue_type_script_setup_true_lang-52e77f65.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/el-skeleton-item-f5c34a93.js","static/css/el-skeleton-item-1be4c26c.css","static/js/el-tag-0b6baecb.js","static/css/el-tag-afac09bb.css","static/js/el-select-8a770a23.js","static/js/el-scrollbar-4065fe54.js","static/css/el-scrollbar-633caf6b.css","static/js/isEqual-8c73ec38.js","static/js/debounce-484109dd.js","static/css/el-select-3e27e884.css","static/js/el-checkbox-a21716fc.js","static/css/el-checkbox-7e02c4bc.css","static/js/el-text-f138b0ce.js","static/css/el-text-ac000e7a.css","static/js/group-39bff2fe.js","static/css/el-checkbox-group-987ef89c.css","static/js/el-popover-53d9d77c.js","static/js/dropdown-85221e0a.js","static/css/el-popover-11b2087f.css","static/js/agent-info-3b42dae9.js","static/js/el-input-number-310bd679.js","static/js/index-ede470e7.js","static/css/el-input-number-417cb491.css","static/js/image.vue_vue_type_style_index_0_lang-1ce00652.js","static/css/image-971073a0.css","static/css/agent-info-1081edb6.css","static/js/base-config.vue_vue_type_script_setup_true_lang-b44f6063.js","static/js/index.vue_vue_type_script_setup_true_lang-dd688c6c.js","static/js/sortable.esm-7ba019b6.js","static/js/position-4ca9dd9d.js","static/js/editor.vue_vue_type_style_index_0_lang-603ca752.js","static/js/el-loading-8747b309.js","static/css/el-loading-42f68ed0.css","static/css/editor-a014c84f.css","static/js/expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js","static/js/el-switch-1a77f9ca.js","static/css/el-switch-f5afc510.css","static/js/el-drawer-393896dd.js","static/css/el-drawer-cc4b4987.css","static/js/agent-f71520b7.js","static/css/volcengine-d1d66611.css"]))
      }, o = m(), u = G(() => _[a.agentType]);
      return t({
        get save() {
          var _a;
          return (_a = o.value) == null ? void 0 : _a.save;
        },
        get validateForm() {
          var _a;
          return (_a = o.value) == null ? void 0 : _a.validateForm;
        },
        get onChannelSave() {
          var _a;
          return (_a = o.value) == null ? void 0 : _a.onChannelSave;
        }
      }), (d, c) => (z(), C(F(u.value), {
        ref_key: "viewRef",
        ref: o,
        "show-channel-config": d.showChannelConfig
      }, null, 8, [
        "show-channel-config"
      ]));
    }
  });
  tt = $();
  B = {
    temperature: 0.2,
    top_p: 0.75,
    presence_penalty: 0.5,
    frequency_penalty: 0.5
  };
  at = M("agent-form-store", {
    state: () => ({
      saving: false,
      loading: false,
      agent_id: 0,
      agent_type: "prompt",
      form_data: {
        logo: "",
        name: "",
        group_id: 0,
        description: "",
        channel_type: 0,
        model: "",
        sort: 0,
        prompt: "",
        user_group_ids: [],
        subscription_group_ids: [],
        tools: [],
        use_cases: [],
        configs: {},
        custom_config: {
          agent_type: "prompt",
          coze_workspace_id: "",
          coze_bot_id: "",
          app_builder_bot_id: "",
          chat53ai_agent_id: "",
          channel_config: {},
          file_parse: {
            enable: false
          },
          image_parse: {
            enable: false
          }
        },
        settings: {
          opening_statement: "",
          suggested_questions: []
        }
      },
      agent_data: {},
      group_options: [],
      channel_options: [],
      subscription_options: [],
      model_options: [],
      coze_workspace_options: [],
      coze_bot_options: [],
      app_builder_bot_options: [],
      chat53ai_agent_options: []
    }),
    getters: {
      agent_option_data: (e) => k(e.agent_type),
      support_file: (e) => e.agent_type !== s.PROMPT,
      support_image: (e) => {
        var _a, _b;
        return e.agent_type !== s.PROMPT ? true : ((_b = (_a = e.model_options.find((t) => t.model_options.some((a) => a.value === e.form_data.model))) == null ? void 0 : _a.model_options.find((t) => t.value === e.form_data.model)) == null ? void 0 : _b.vision) || false;
      },
      is_independent: () => tt.info.is_independent
    },
    actions: {
      async loadDetailData() {
        if (!this.agent_id)
          return Promise.resolve();
        this.loading = true;
        try {
          this.agent_data = await I.detail({
            data: {
              agent_id: this.agent_id
            }
          }), this.updateFormData();
        } finally {
          this.loading = false;
        }
      },
      updateFormData() {
        var _a, _b, _c;
        this.agent_type = this.agent_data.agent_type || this.agent_type || "", Object.assign(this.form_data, {
          logo: this.agent_data.logo || ((_a = this.agent_option_data) == null ? void 0 : _a.icon) || "",
          name: this.agent_data.name || "",
          group_id: +this.agent_data.group_id || 0,
          description: this.agent_data.description || "",
          channel_type: +this.agent_data.channel_type || 0,
          model: this.agent_data.model || "",
          sort: +this.agent_data.sort || 0,
          prompt: this.agent_data.prompt || "",
          user_group_ids: this.agent_data.user_group_ids || [],
          subscription_group_ids: this.agent_data.user_group_ids || [],
          tools: this.agent_data.tools || [],
          use_cases: this.agent_data.use_cases || [],
          configs: this.agent_data.configs && Object.keys(this.agent_data.configs).length > 0 ? this.agent_data.configs : {
            completion_params: B
          },
          enable: !!+this.agent_data.enable || false,
          custom_config: {
            agent_type: this.agent_type,
            coze_workspace_id: "",
            coze_bot_id: "",
            app_builder_bot_id: "",
            chat53ai_agent_id: "",
            channel_config: {},
            file_parse: {
              enable: false
            },
            image_parse: {
              enable: false
            },
            ...this.agent_data.custom_config || {}
          },
          settings: {
            opening_statement: ((_b = this.agent_data.settings) == null ? void 0 : _b.opening_statement) || "",
            suggested_questions: ((_c = this.agent_data.settings) == null ? void 0 : _c.suggested_questions) || []
          }
        }), this.agent_type === s.PROMPT && (this.form_data.model = `${this.agent_data.channel_type}_${this.agent_data.model}` || "");
      },
      async loadGroupOptions() {
        const e = await N.list({
          params: {
            group_type: Q
          }
        });
        this.group_options = (e || []).map((t) => (t.value = +t.group_id || 0, t.label = t.group_name || "", t)), this.group_options.length && !this.form_data.group_id && (this.form_data.group_id = this.group_options[0].value), this.group_options.find((t) => t.value === this.form_data.group_id) || (this.form_data.group_id = "");
      },
      async loadChannelOptions() {
        const e = await E.list();
        this.channel_options = (e || []).filter((a = {}) => [
          T.SILICONFLOW,
          T.OPENAI,
          T.DEEPSEEK
        ].includes(a.type));
        const t = [];
        this.model_options = this.channel_options.map((a = {}) => (a.value = String(a.channel_type || a.channel_id || ""), a.icon = window.$getRealPath({
          url: `/images/platform/${a.icon}.png`
        }), a.options = (a.model_options || []).map((_ = {}) => (_.value = `${a.value}_${_.value}`, _.icon = window.$getRealPath({
          url: `/images/platform/${_.icon}.png`
        }), _)), t.push(...a.options), a)), t.length && !this.form_data.model && (this.form_data.model = t[0].value), [
          s.PROMPT
        ].includes(this.agent_type) && !t.find((a) => a.value === this.form_data.model) && (this.form_data.model = "");
      },
      async loadSubscriptionOptions() {
        const e = await N.list({
          params: {
            group_type: J
          }
        });
        this.subscription_options = (e || []).map((t) => (t.value = +t.group_id || 0, t.label = t.group_name || "", t)), !this.agent_id && this.subscription_options.length && !this.form_data.user_group_ids.length && (this.form_data.user_group_ids = this.subscription_options.map((t) => t.value));
      },
      async loadCozeWorkspaceOptions() {
        const e = await E.cozeWorkspaceList();
        this.coze_workspace_options = (e || []).map((t) => (t.value = t.id || 0, t.label = t.name || "", t.icon = t.icon_url || "", t)), this.coze_workspace_options.length && this.form_data.custom_config.coze_workspace_id, this.form_data.custom_config.coze_workspace_id = this.coze_workspace_options[0].value, this.coze_workspace_options.find((t) => t.value === this.form_data.custom_config.coze_workspace_id) || (this.form_data.custom_config.coze_workspace_id = "");
      },
      async loadCozeBotOptions(e) {
        if (!e)
          return;
        const t = await E.cozeBotList({
          params: {
            workspace_id: e
          }
        });
        if (this.coze_bot_options = (t || []).map((a) => (a.value = a.bot_id || 0, a.label = a.bot_name || "", a.icon = a.icon_url || "", a)), this.coze_bot_options.length && !this.form_data.custom_config.coze_bot_id) {
          const a = this.coze_bot_options[0];
          this.agent_id || (this.form_data.logo = a.icon, this.form_data.name = a.label, this.form_data.description = a.description || ""), this.form_data.custom_config.coze_bot_id = a.value;
        }
        this.coze_bot_options.find((a) => a.value === this.form_data.custom_config.coze_bot_id) || (this.form_data.custom_config.coze_bot_id = "");
      },
      async loadAppBuilderBotOptions() {
        const e = await E.appBuilderBotList();
        if (this.app_builder_bot_options = (e || []).map((t) => (t.value = t.id || 0, t.value && (t.value = `bot-${t.value}`), t.label = t.name || "", t.icon = t.icon || k(v.APP_BUILDER).icon, t)), this.app_builder_bot_options.length && !this.form_data.custom_config.app_builder_bot_id) {
          const t = this.app_builder_bot_options[0];
          this.agent_id || (this.form_data.name = t.label, this.form_data.description = t.description || ""), this.form_data.custom_config.app_builder_bot_id = t.value;
        }
        this.app_builder_bot_options.find((t) => t.value === this.form_data.custom_config.app_builder_bot_id) || (this.form_data.custom_config.app_builder_bot_id = "");
      },
      async load53aiAgentOptions() {
        const e = await E.chat53aiAgentList();
        if (this.chat53ai_agent_options = (e || []).map((t) => (t.value = t.bot_id || 0, t.label = t.name || "", t.icon = t.logo, t)), this.chat53ai_agent_options.length && !this.form_data.custom_config.chat53ai_agent_id) {
          const t = this.chat53ai_agent_options[0];
          this.agent_id || (this.form_data.logo = t.logo, this.form_data.name = t.name, this.form_data.description = t.description || ""), this.form_data.custom_config.chat53ai_agent_id = t.value, this.form_data.settings.opening_statement = t.opening_statement, this.form_data.settings.suggested_questions = t.suggested_questions.map((a) => ({
            id: Math.random().toString(36).substring(2, 15),
            content: a
          }));
        }
        this.chat53ai_agent_options.find((t) => t.value === this.form_data.custom_config.chat53ai_agent_id) || (this.form_data.custom_config.chat53ai_agent_id = "");
      },
      resetState() {
        this.saving = false, this.loading = false, this.agent_id = 0, this.agent_type = "prompt", this.form_data = {
          logo: "",
          name: "",
          group_id: 0,
          description: "",
          channel_type: 0,
          model: "",
          sort: 0,
          prompt: "",
          user_group_ids: [],
          subscription_group_ids: [],
          tools: [],
          use_cases: [],
          configs: {
            completion_params: B
          },
          custom_config: {
            agent_type: "prompt",
            coze_workspace_id: "",
            coze_bot_id: "",
            app_builder_bot_id: "",
            channel_config: {},
            file_parse: {
              enable: false
            },
            image_parse: {
              enable: false
            }
          },
          settings: {
            opening_statement: "",
            suggested_questions: []
          }
        }, this.agent_data = {}, this.group_options = [], this.channel_options = [], this.subscription_options = [], this.model_options = [], this.coze_workspace_options = [], this.coze_bot_options = [], this.app_builder_bot_options = [];
      },
      async saveAgentData({ hideToast: e = false } = {}) {
        const { logo: t = "", name: a = "", group_id: _ = 0, description: o = "", model: u = "", channel_type: d = 0, prompt: c = "", user_group_ids: b = [], subscription_group_ids: g = [], use_cases: A = [], tools: P = [], sort: y = 0, configs: O = {}, enable: i, custom_config: n = {}, settings: h = {} } = this.form_data, r = {
          agent_id: this.agent_id || 0,
          channel_type: d,
          model: u,
          logo: t,
          name: a,
          group_id: +_ || 0,
          description: o,
          sort: y,
          prompt: c,
          user_group_ids: b,
          subscription_group_ids: g,
          use_cases: A,
          tools: P,
          configs: O,
          enable: i,
          custom_config: n,
          settings: h
        };
        switch (d || (r.channel_type = U.get(this.agent_type) || 0), this.agent_type) {
          case s.PROMPT:
            r.channel_type = +u.split("_")[0] || 0, r.model = u.split("_")[1] || "";
            break;
          case s.COZE_AGENT_CN:
            r.model = n.coze_bot_id || "";
            break;
          case s.APP_BUILDER:
            r.model = n.app_builder_bot_id || "";
            break;
          case s["53AI_AGENT"]:
            r.model = n.chat53ai_agent_id || "";
            break;
        }
        this.saving = true;
        const f = await I.save({
          data: r
        }).finally(() => {
          this.saving = false;
        });
        return e || Y.success(window.$t("action_save_success")), this.agent_data = f, this.agent_id = f.agent_id, this.agent_data;
      }
    }
  });
  et = {
    class: "flex border-t pt-5 justify-end w-full"
  };
  _t = S({
    __name: "drawer",
    emits: [
      "success"
    ],
    setup(e, { expose: t, emit: a }) {
      const _ = a, o = at(), u = m(), d = m(false), c = m(v.DIFY_AGENT), b = m(false), g = m({});
      x("channelConfig", g);
      const A = () => {
        switch (c.value) {
          case v.COZE_AGENT_CN:
            o.loadCozeWorkspaceOptions().then(() => {
              o.loadCozeBotOptions(o.form_data.custom_config.coze_workspace_id);
            });
            break;
          case v.APP_BUILDER:
            o.loadAppBuilderBotOptions();
            break;
          case v["53AI_AGENT"]:
            o.load53aiAgentOptions();
            break;
        }
      };
      async function P({ agent_type: i, data: n = {}, agent_id: h, group_id: r = 0, cache: f = false } = {}) {
        c.value = i || v.DIFY_AGENT, b.value = !!+h, g.value = n.channel_config || {}, g.value.name = g.value.name || n.label || "", !g.value.channel_type && n.value && (g.value.channel_type = n.value), f ? A() : (o.resetState(), await q(), A(), o.agent_id = +h || 0, o.agent_type = o.form_data.custom_config.agent_type = c.value, o.form_data.logo = k(c.value).icon, o.form_data.group_id = r || 0, await o.loadDetailData()), o.loadGroupOptions(), o.loadChannelOptions(), o.loadSubscriptionOptions(), d.value = true;
      }
      const y = () => d.value = false;
      async function O() {
        var _a;
        const i = u.value;
        if (i && i.validateForm) {
          if (!await i.validateForm())
            return Promise.reject();
          await ((_a = i.onChannelSave) == null ? void 0 : _a.call(i)), await o.saveAgentData(), _("success", {
            agent_id: o.agent_id,
            agent_type: c.value,
            action: b.value ? "update" : "create"
          });
        }
        y();
      }
      return t({
        open: P,
        close: y
      }), (i, n) => {
        const h = H, r = K, f = j("debounce");
        return z(), C(r, {
          modelValue: d.value,
          "onUpdate:modelValue": n[0] || (n[0] = (V) => d.value = V),
          title: b.value ? i.$t("action_edit") : i.$t("action_add"),
          size: "840px",
          "destroy-on-close": "",
          "append-to-body": "",
          "close-on-click-modal": false
        }, {
          footer: w(() => [
            W("div", et, [
              D(h, {
                size: "large",
                onClick: y
              }, {
                default: w(() => [
                  R(L(i.$t("action_cancel")), 1)
                ]),
                _: 1
              }),
              Z((z(), C(h, {
                type: "primary",
                size: "large",
                onClick: O
              }, {
                default: w(() => [
                  R(L(i.$t("action_confirm")), 1)
                ]),
                _: 1
              })), [
                [
                  f
                ]
              ])
            ])
          ]),
          default: w(() => [
            D(X, {
              ref_key: "agentFormRef",
              ref: u,
              "agent-type": c.value,
              "show-channel-config": ""
            }, null, 8, [
              "agent-type"
            ])
          ]),
          _: 1
        }, 8, [
          "modelValue",
          "title"
        ]);
      };
    }
  });
});
export {
  _t as _,
  __tla,
  X as a,
  at as u
};
