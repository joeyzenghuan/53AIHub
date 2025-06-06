import { ap as buildProps, az as definePropType, y as defineComponent, am as useNamespace, N as computed, bA as warning_filled_default, bB as circle_check_default, bC as circle_close_default, bD as check_default, aI as close_default, bE as isFunction, ab as isString, b as openBlock, c as createElementBlock, n as normalizeClass, O as unref, d as createBaseVNode, X as normalizeStyle, Z as renderSlot, t as toDisplayString, e as createCommentVNode, h as createBlock, i as withCtx, al as resolveDynamicComponent, a4 as ElIcon, ao as _export_sfc, as as withInstall, ay as iconPropType, a8 as useGlobalComponentSettings, r as ref, bF as TypeComponentsMap, o as onMounted, aG as useEventListener, g as withDirectives, H as Fragment, v as vShow, a1 as withModifiers, f as createVNode, T as Transition, bG as CloseComponents, bH as useTimeoutFn, aQ as EVENT_CODE, k as isClient, u as isVNode, m as isElement, b9 as isUndefined, bI as render, bJ as withInstallFunction, p as defineStore, s as shallowRef, P as defineAsyncComponent, _ as __vitePreload, z as resolveComponent, bK as loading_default, b7 as plus_default, ak as useUserStore, $ as nextTick, a as onUnmounted, aJ as arrow_left_default, aK as arrow_right_default, aO as refresh_right_default, a0 as withKeys, I as renderList, B as createTextVNode, bL as more_filled_default, V as ElInput, a5 as ElButton, Q as _export_sfc$1, Y as watch, a3 as ElMessage, bi as ElTooltip, a9 as h, K as resolveDirective } from "./main-zTjO05wq.js";
import "./el-scrollbar-Ngsny-f4.js";
import { u as useBrowserSettingStore, _ as _sfc_main$6 } from "./browser-setting-mkdXkMac.js";
import { v as vLoading } from "./el-loading-bLs-AQkn.js";
import { E as ElDropdownItem, a as ElDropdownMenu, b as ElDropdown, c as ElMessageBox } from "./el-dropdown-item-NOVRjZ1y.js";
const progressProps = buildProps({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: Boolean,
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  textInside: Boolean,
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const __default__$1 = defineComponent({
  name: "ElProgress"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: progressProps,
  setup(__props) {
    const props = __props;
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const ns = useNamespace("progress");
    const barStyle = computed(() => {
      const barStyle2 = {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`
      };
      const color = getCurrentColor(props.percentage);
      if (color.includes("gradient")) {
        barStyle2.background = color;
      } else {
        barStyle2.backgroundColor = color;
      }
      return barStyle2;
    });
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const statusIcon = computed(() => {
      if (props.status === "warning") {
        return warning_filled_default;
      }
      if (props.type === "line") {
        return props.status === "success" ? circle_check_default : circle_close_default;
      } else {
        return props.status === "success" ? check_default : close_default;
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index) => {
        if (isString(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (isFunction(color)) {
        return color(percentage);
      } else if (isString(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.type),
          unref(ns).is(_ctx.status),
          {
            [unref(ns).m("without-text")]: !_ctx.showText,
            [unref(ns).m("text-inside")]: _ctx.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": _ctx.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).b("bar"))
        }, [
          createBaseVNode("div", {
            class: normalizeClass(unref(ns).be("bar", "outer")),
            style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          }, [
            createBaseVNode("div", {
              class: normalizeClass([
                unref(ns).be("bar", "inner"),
                { [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate },
                { [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped },
                { [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow }
              ]),
              style: normalizeStyle(unref(barStyle))
            }, [
              (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).be("bar", "innerText"))
              }, [
                renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                  createBaseVNode("span", null, toDisplayString(unref(content)), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true)
            ], 6)
          ], 6)
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).b("circle")),
          style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
        }, [
          (openBlock(), createElementBlock("svg", { viewBox: "0 0 100 100" }, [
            createBaseVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "track")),
              d: unref(trackPath),
              stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
            createBaseVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "path")),
              d: unref(trackPath),
              stroke: unref(stroke),
              fill: "none",
              opacity: _ctx.percentage ? 1 : 0,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              style: normalizeStyle(unref(circlePathStyle))
            }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
          ]))
        ], 6)),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns).e("text")),
          style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
        }, [
          renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
            !_ctx.status ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(unref(content)), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))
              ]),
              _: 1
            }))
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 10, ["aria-valuenow"]);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "progress.vue"]]);
const ElProgress = withInstall(Progress);
const notificationTypes = [
  "success",
  "info",
  "warning",
  "error"
];
const notificationProps = buildProps({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: Boolean,
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: iconPropType
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: definePropType(Function),
    default: () => void 0
  },
  onClose: {
    type: definePropType(Function),
    required: true
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...notificationTypes, ""],
    default: ""
  },
  zIndex: Number
});
const notificationEmits = {
  destroy: () => true
};
const __default__ = defineComponent({
  name: "ElNotification"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: notificationProps,
  emits: notificationEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { ns, zIndex } = useGlobalComponentSettings("notification");
    const { nextZIndex, currentZIndex } = zIndex;
    const { Close } = CloseComponents;
    const visible = ref(false);
    let timer = void 0;
    const typeClass = computed(() => {
      const type = props.type;
      return type && TypeComponentsMap[props.type] ? ns.m(type) : "";
    });
    const iconComponent = computed(() => {
      if (!props.type)
        return props.icon;
      return TypeComponentsMap[props.type] || props.icon;
    });
    const horizontalClass = computed(() => props.position.endsWith("right") ? "right" : "left");
    const verticalProperty = computed(() => props.position.startsWith("top") ? "top" : "bottom");
    const positionStyle = computed(() => {
      var _a;
      return {
        [verticalProperty.value]: `${props.offset}px`,
        zIndex: (_a = props.zIndex) != null ? _a : currentZIndex.value
      };
    });
    function startTimer() {
      if (props.duration > 0) {
        ({ stop: timer } = useTimeoutFn(() => {
          if (visible.value)
            close2();
        }, props.duration));
      }
    }
    function clearTimer() {
      timer == null ? void 0 : timer();
    }
    function close2() {
      visible.value = false;
    }
    function onKeydown({ code }) {
      if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        clearTimer();
      } else if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close2();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      nextZIndex();
      visible.value = true;
    });
    useEventListener(document, "keydown", onKeydown);
    expose({
      visible,
      close: close2
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: ($event) => _ctx.$emit("destroy"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            id: _ctx.id,
            class: normalizeClass([unref(ns).b(), _ctx.customClass, unref(horizontalClass)]),
            style: normalizeStyle(unref(positionStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer,
            onClick: _ctx.onClick
          }, [
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              class: normalizeClass(unref(ns).e("group"))
            }, [
              createBaseVNode("h2", {
                class: normalizeClass(unref(ns).e("title")),
                textContent: toDisplayString(_ctx.title)
              }, null, 10, ["textContent"]),
              withDirectives(createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("content")),
                style: normalizeStyle(!!_ctx.title ? void 0 : { margin: 0 })
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", { key: 0 }, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                    createBaseVNode("p", { innerHTML: _ctx.message }, null, 8, ["innerHTML"])
                  ], 2112))
                ])
              ], 6), [
                [vShow, _ctx.message]
              ]),
              _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(ns).e("closeBtn")),
                onClick: withModifiers(close2, ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(Close))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 46, ["id", "onClick"]), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave", "onAfterLeave"]);
    };
  }
});
var NotificationConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "notification.vue"]]);
const notifications = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
};
const GAP_SIZE = 16;
let seed = 1;
const notify = function(options = {}, context) {
  if (!isClient)
    return { close: () => void 0 };
  if (isString(options) || isVNode(options)) {
    options = { message: options };
  }
  const position = options.position || "top-right";
  let verticalOffset = options.offset || 0;
  notifications[position].forEach(({ vm: vm2 }) => {
    var _a;
    verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + GAP_SIZE;
  });
  verticalOffset += GAP_SIZE;
  const id = `notification_${seed++}`;
  const userOnClose = options.onClose;
  const props = {
    ...options,
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, position, userOnClose);
    }
  };
  let appendTo = document.body;
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo;
  } else if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!isElement(appendTo)) {
    appendTo = document.body;
  }
  const container = document.createElement("div");
  const vm = createVNode(NotificationConstructor, props, isFunction(props.message) ? props.message : isVNode(props.message) ? () => props.message : null);
  vm.appContext = isUndefined(context) ? notify._context : context;
  vm.props.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  notifications[position].push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => {
      vm.component.exposed.visible.value = false;
    }
  };
};
notificationTypes.forEach((type) => {
  notify[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
      options = {
        message: options
      };
    }
    return notify({ ...options, type }, appContext);
  };
});
function close(id, position, userOnClose) {
  const orientedNotifications = notifications[position];
  const idx = orientedNotifications.findIndex(({ vm: vm2 }) => {
    var _a;
    return ((_a = vm2.component) == null ? void 0 : _a.props.id) === id;
  });
  if (idx === -1)
    return;
  const { vm } = orientedNotifications[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  const verticalPos = position.split("-")[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const { el, component } = orientedNotifications[i].vm;
    const pos = Number.parseInt(el.style[verticalPos], 10) - removedHeight - GAP_SIZE;
    component.props.offset = pos;
  }
}
function closeAll() {
  for (const orientedNotifications of Object.values(notifications)) {
    orientedNotifications.forEach(({ vm }) => {
      vm.component.exposed.visible.value = false;
    });
  }
}
notify.closeAll = closeAll;
notify._context = null;
const ElNotification = withInstallFunction(notify, "$notify");
const _imports_0 = "" + new URL("../images/blank.png", import.meta.url).href;
const useTabsStore = defineStore("tabs", {
  state: () => ({
    tabs: [],
    activeId: 0
  }),
  getters: {
    activeTab: (state) => state.tabs.find((t) => t.id === state.activeId),
    MAIN_URL: () => location.origin + location.pathname
    // MAIN_URL: () => 'http://ziroom.hub.53ai.com/'
  },
  actions: {
    // addTab(tab: Omit<Browser.Tab, 'id' | 'loading' | 'defaultUrl' | 'type' | 'icon' | 'timestamp'>, isActive = true) {
    pureAddTab(tab) {
      const newTab = {
        defaultUrl: "",
        loading: "none",
        type: "browser",
        id: Math.random() * 1e17,
        title: "",
        url: "",
        closable: true,
        ability: true,
        timestamp: Date.now(),
        icon: window.$chat53ai.getPublicPath("/images/blank.png"),
        component: tab.type === "page" ? shallowRef() : "",
        browsers: tab.type === "multibrowser" ? [] : "",
        render: true,
        webview: null,
        ...tab
      };
      return newTab;
    },
    addTab(tab, isActive = true) {
      const newTab = this.pureAddTab(tab);
      if (this.tabs.some((t) => t.id === newTab.id)) {
        this.setActive(newTab.id);
        return;
      }
      this.tabs.push(newTab);
      if (isActive) {
        this.activeId = newTab.id;
      }
      return newTab;
    },
    addChildTab(tabId, tab) {
      const index = this.tabs.findIndex((t) => t.id === tabId);
      if (index > -1) {
        this.tabs[index].browsers?.push(this.pureAddTab({ ...tab, width: null }));
      }
    },
    closeTab(tabId) {
      this.tabs = this.tabs.filter((t) => t.id !== tabId);
      if (this.activeId === tabId) {
        this.activeId = this.tabs[this.tabs.length - 1]?.id || 0;
      }
    },
    updateTab(tabId, updates) {
      const index = this.tabs.findIndex((t) => t.id === tabId);
      if (index > -1) {
        this.tabs[index] = { ...this.tabs[index], ...updates };
      }
    },
    refreshTab(tabId) {
      const tab = this.tabs.find((t) => t.id === tabId);
      if (tab) {
        if (tab.webview) {
          tab.webview.reload();
        } else {
          tab.render = false;
          setTimeout(() => {
            tab.render = true;
          }, 200);
        }
      }
    },
    updateChildTab(parent, tabId, updates) {
      const index = parent.browsers.findIndex((t) => t.id === tabId);
      if (index > -1) {
        parent.browsers[index] = { ...parent.browsers[index], ...updates };
      }
    },
    setActive(tabId) {
      if (this.tabs.some((t) => t.id === tabId)) {
        this.activeId = tabId;
      }
    },
    activeSetting() {
      this.addTab({
        id: "setting",
        title: window.$t("action.setting"),
        closable: true,
        ability: false,
        icon: window.$chat53ai.getPublicPath("/images/setting.png"),
        // defaultUrl:  this.MAIN_URL + '#/profile',
        type: "page",
        component: defineAsyncComponent(() => __vitePreload(() => import("./index-_KL5Zetu.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0, import.meta.url))
      }, true);
    }
  }
});
const _hoisted_1$3 = ["data-index", "onClick", "draggable", "onDragstart", "onDragend"];
const _hoisted_2$3 = { class: "flex items-center gap-2 overflow-hidden flex-grow" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = {
  key: 2,
  class: "absolute left-0 right-0 -bottom-1.5 h-1.5 bg-white"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GNBTabs",
  setup(__props) {
    const tabsStore = useTabsStore();
    const settingStore = useBrowserSettingStore();
    const sortableRef = ref();
    const activeTabId = computed({
      get: () => tabsStore.activeId,
      set: (val) => tabsStore.setActive(val)
    });
    const handleAddTab = () => {
      tabsStore.addTab({
        title: window.$t("browser.newTab"),
        closable: true,
        url: "",
        defaultUrl: settingStore.default_tab_url
      });
    };
    const handleDragStart = (e, item) => {
      if (e.dataTransfer) {
        e.dataTransfer.setData(
          "text/plain",
          JSON.stringify({
            id: item.id,
            title: item.title,
            url: item.url || item.defaultUrl
          })
        );
        e.dataTransfer.effectAllowed = "copy";
      }
    };
    const handleDragEnd = (e, item) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const sortableElement = sortableRef.value?.$el;
      const isOutsideBrowser = mouseX <= 0 || mouseY <= 0 || mouseX >= windowWidth || mouseY >= windowHeight;
      const isOutsideSortable = sortableElement ? !sortableElement.contains(document.elementFromPoint(mouseX, mouseY)) : false;
      if (isOutsideBrowser || isOutsideSortable) {
        console.log("元素被拖放到浏览器外部", {
          item,
          position: { x: mouseX, y: mouseY }
        });
        window.$chat53ai.$win({
          type: "new-window",
          data: {
            title: item.title,
            url: encodeURIComponent(item.url || item.defaultUrl)
          }
        });
        tabsStore.closeTab(item.id);
      } else {
        console.log("元素在浏览器内部拖放完成");
      }
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createBlock(_sfc_main$6, {
        class: "flex items-center gap-1.5 drag py-1.5 px-2",
        identity: "id",
        ref_key: "sortableRef",
        ref: sortableRef,
        props: {
          handle: ".sort-icon",
          filter: ".filtered",
          animation: 150,
          onMove: function(event) {
            const newIndex = "" + event.related.dataset.index;
            if (newIndex === "0" || newIndex === "-1") {
              return false;
            }
            return true;
          }
        },
        modelValue: unref(tabsStore).tabs,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(tabsStore).tabs = $event)
      }, {
        item: withCtx(({ item, index }) => [
          createBaseVNode("div", {
            class: normalizeClass(["flex-1 h-7 flex items-center gap-2 px-2 rounded-md max-w-50 min-w-[28px] cursor-pointer relative select-none no-drag group", [
              activeTabId.value === item.id ? "bg-[#FFFFFF] text-[#1D1E1F] rounded-b-none" : "text-[#182B50] hover:bg-[#CCD0D5]"
            ]]),
            "data-index": index,
            onClick: ($event) => unref(tabsStore).setActive(item.id),
            draggable: ["index", "setting"].includes(item.id) ? false : true,
            onDragstart: ($event) => handleDragStart($event, item),
            onDragend: ($event) => handleDragEnd($event, item)
          }, [
            createBaseVNode("div", _hoisted_2$3, [
              createBaseVNode("div", {
                class: normalizeClass(["size-4 flex-center overflow-hidden transition-all duration-300", [["index"].includes(item.id) ? "filtered" : "sort-icon"]])
              }, [
                item.loading === "loading" ? (openBlock(), createBlock(_component_el_icon, {
                  key: 0,
                  class: "animate-spin",
                  size: "14"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(loading_default))
                  ]),
                  _: 1
                })) : item.icon ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: "size-4",
                  src: item.icon
                }, null, 8, _hoisted_3$2)) : (openBlock(), createBlock(_component_svg_icon, {
                  key: 2,
                  name: "tab",
                  color: "#666666"
                }))
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(["text-xs text-#182B50 flex-1 truncate overflow-hidden transition-all duration-300", [["index"].includes(item.id) ? "filtered" : "sort-icon"]])
              }, toDisplayString(item.title), 3)
            ]),
            item.closable ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "size-4 flex-center rounded-full hover:bg-[#DDDDDE] shrink-0",
              onClick: withModifiers(($event) => unref(tabsStore).closeTab(item.id), ["stop"])
            }, " × ", 8, _hoisted_4$2)) : createCommentVNode("", true),
            index > 0 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(["absolute -left-[4px] top-1.5 w-0.5 h-4 bg-[#CECECE] group-hover:bg-[#F0F0F0] group-hover:z-10", [activeTabId.value === item.id ? "bg-[#F0F0F0] z-10" : ""]])
            }, null, 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["absolute -right-[4px] top-1.5 w-0.5 h-4 bg-[#CECECE] group-hover:bg-[#F0F0F0] group-hover:z-10", [activeTabId.value === item.id ? "bg-[#F0F0F0] z-10" : ""]])
            }, null, 2),
            activeTabId.value === item.id ? (openBlock(), createElementBlock("div", _hoisted_5$2, _cache[1] || (_cache[1] = [
              createBaseVNode("div", { class: "absolute -left-2 bottom-0 size-2 bg-[#fff] overflow-hidden" }, [
                createBaseVNode("div", { class: "absolute right-0 bottom-0 size-4 bg-[#F0F0F0] rounded-full" })
              ], -1),
              createBaseVNode("div", { class: "absolute -right-2 bottom-0 size-2 bg-[#fff] overflow-hidden" }, [
                createBaseVNode("div", { class: "absolute left-0 bottom-0 size-4 bg-[#F0F0F0] rounded-full" })
              ], -1)
            ]))) : createCommentVNode("", true)
          ], 42, _hoisted_1$3)
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", {
            class: "flex-none size-7 flex-center cursor-pointer rounded-full hover:bg-[#A8C7FA] no-drag filtered",
            "data-index": "-1",
            onClick: handleAddTab
          }, [
            createVNode(_component_el_icon, {
              color: "#474747",
              size: "14"
            }, {
              default: withCtx(() => [
                createVNode(unref(plus_default))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["props", "modelValue"]);
    };
  }
});
const _hoisted_1$2 = { class: "flex flex-col bg-white" };
const _hoisted_2$2 = {
  key: 0,
  class: "flex items-center gap-2 px-4 py-1.5 border-b"
};
const _hoisted_3$1 = { class: "flex items-center gap-0.5" };
const _hoisted_4$1 = { class: "flex-1" };
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { class: "text-sm text-[#1D1E1F] truncate" };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = { class: "text-sm text-[#1D1E1F] truncate" };
const _hoisted_10$1 = ["onClick"];
const _hoisted_11$1 = { class: "text-sm text-[#1D1E1F] truncate" };
const _hoisted_12$1 = { class: "text-[#177CDD]" };
const _hoisted_13$1 = {
  key: 0,
  class: "flex items-center gap-1 relative"
};
const _hoisted_14$1 = { class: "text-sm text-[#1D1E1F]" };
const _hoisted_15$1 = { class: "text-sm text-[#1D1E1F]" };
const _hoisted_16$1 = { class: "size-8 flex-center rounded cursor-pointer hover:bg-[#f0f0f0]" };
const _hoisted_17$1 = { class: "flex-1 flex overflow-hidden" };
const _hoisted_18$1 = { class: "flex-1 relative" };
const _hoisted_19$1 = ["src", "preload"];
const _hoisted_20 = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center bg-white"
};
const _hoisted_21 = { class: "text-center" };
const _hoisted_22 = { class: "text-lg font-semibold text-gray-800" };
const _hoisted_23 = {
  key: 2,
  class: "absolute inset-0 bg-[#F5F5F5]"
};
const _hoisted_24 = {
  key: 0,
  class: "flex-none w-[420px] p-5 border-l overflow-hidden relative"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Browser",
  props: {
    tab: { default: () => ({}) },
    parent: { default: null }
  },
  setup(__props) {
    const props = __props;
    const getPreloadPath = () => {
      return window.$chat53ai.getPreloadPath();
    };
    const Reader = defineAsyncComponent(() => __vitePreload(() => import("./index-NDXP37gk.js"), true ? __vite__mapDeps([17,1,2,7,4,5,8,18,19]) : void 0, import.meta.url));
    const loadReadability = async () => {
      const { Readability } = await __vitePreload(() => import("./index-lK8JGpn_.js").then((n) => n.i), true ? __vite__mapDeps([20,18]) : void 0, import.meta.url);
      return Readability;
    };
    const userStore = useUserStore();
    const tabsStore = useTabsStore();
    const settingStore = useBrowserSettingStore();
    const webviewRef = ref(null);
    const isFocus = ref(false);
    const isChange = ref(false);
    const isSider = ref(false);
    const showSider = ref(false);
    const isReader = ref(false);
    const loadError = ref("");
    const cleaning = ref(false);
    const contentHtml = ref("");
    const webviewEvents = ref([]);
    const canBack = computed(() => {
      if (!webviewRef.value || props.tab.loading !== "completed")
        return false;
      return webviewRef.value.canGoBack();
    });
    const canForward = computed(() => {
      if (!webviewRef.value || props.tab.loading !== "completed")
        return false;
      return webviewRef.value.canGoForward();
    });
    const moreMenus = computed(() => {
      return settingStore.toolbar_menus.slice(2);
    });
    const models = ref([
      {
        name: "百度AI+",
        value: "baiduai+",
        url: "https://chat.baidu.com/search?word="
      },
      {
        name: "纳米搜索",
        value: "n",
        url: "https://www.n.cn/?q="
      },
      {
        name: "秘塔",
        value: "metaso",
        url: "https://metaso.cn/?q="
      },
      {
        name: "Perplexity",
        value: "perplexity",
        url: "https://perplexity.ai/search?q="
      }
    ]);
    const historys = ref([
      { name: "百度", url: "https://www.baidu.com" },
      { name: "AI知识库|大模型知识库|智能体开发|53AI", url: "https://www.53ai.com" }
    ]);
    let _isClickPanel = false;
    const handleChange = () => {
      isChange.value = true;
      handleFocus();
    };
    const handleFocus = () => {
      isFocus.value = true;
    };
    const handleBlur = () => {
      setTimeout(() => {
        if (_isClickPanel) {
          _isClickPanel = false;
          return;
        }
        isFocus.value = false;
        isChange.value = false;
      }, 200);
    };
    const handlePanelClick = () => {
      _isClickPanel = true;
    };
    const handleBack = () => {
      if (canBack.value && webviewRef.value) {
        webviewRef.value.goBack();
      }
    };
    const handleForward = () => {
      if (canForward.value && webviewRef.value) {
        webviewRef.value.goForward();
      }
    };
    const handleRefresh = () => {
      if (webviewRef.value) {
        webviewRef.value.reload();
      }
    };
    const updateTab = (data = {}) => {
      if (props.parent) {
        tabsStore.updateChildTab(props.parent, props.tab.id, data);
      } else {
        tabsStore.updateTab(props.tab.id, data);
      }
    };
    const isUrl = (url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[\w\-.,@?^=%&:/~+#]*$/.test(url);
      }
    };
    const handleUrl = (value) => {
      let targetUrl = value.trim();
      if (!targetUrl) {
        return;
      } else if (isUrl(targetUrl)) {
        if (!/^https?:\/\//i.test(targetUrl)) {
          targetUrl = "https://" + targetUrl;
        }
      } else {
        targetUrl = settingStore.default_search_url.replace("_word_", encodeURIComponent(targetUrl));
      }
      if (props.tab.defaultUrl) {
        updateTab({
          url: targetUrl,
          loading: "loading"
        });
        nextTick(() => {
          webviewRef.value.loadURL(targetUrl);
        });
      } else {
        updateTab({
          defaultUrl: targetUrl,
          loading: "loading"
        });
        nextTick(() => {
          initWebviewListener();
        });
      }
      handleBlur();
    };
    const getWebviewContent = async () => {
      return await webviewRef.value.executeJavaScript(`
    (function() {
      return document.documentElement.innerHTML; // 提取可见文本
    })()
  `);
    };
    const processLinks = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      doc.querySelectorAll("a").forEach((link) => {
        try {
          const href = link.getAttribute("href") || "";
          if (props.tab.url && !href.startsWith("http")) {
            const base = new URL(props.tab.url);
            link.href = new URL(href, base).href;
          }
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        } catch (e) {
        }
      });
      return doc.body.innerHTML;
    };
    const setContentOfMarkdown = async () => {
      try {
        cleaning.value = true;
        const content = await getWebviewContent();
        const doc = document.implementation.createHTMLDocument("");
        doc.documentElement.innerHTML = content;
        const Readability = await loadReadability();
        const article = new Readability(doc).parse();
        if (!article) {
          cleaning.value = false;
          throw new Error("Failed to parse content");
        }
        contentHtml.value = processLinks(
          `<h1 class="reader-title">${article.title}</h1>${article.content}`
        );
        nextTick(() => {
          cleaning.value = false;
        });
      } catch (error) {
        console.error("Content processing failed:", error);
      }
    };
    const handleParseContent = async () => {
      if (!webviewRef.value || props.tab.loading !== "completed")
        return;
      isSider.value = true;
      showSider.value = true;
      nextTick(() => {
        setContentOfMarkdown();
      });
    };
    const handleReader = () => {
      if (props.tab.loading !== "completed")
        return;
      if (isReader.value) {
        isReader.value = false;
        return;
      }
      isReader.value = true;
      setContentOfMarkdown();
    };
    const handleMenuCommand = (command) => {
      console.log(command);
      switch (command) {
        case "setting":
          tabsStore.activeSetting();
          break;
        default:
          handleParseContent();
          break;
      }
    };
    const initWebviewListener = () => {
      removeWebviewListener();
      if (webviewRef.value) {
        tabsStore.updateTab(props.tab.id, {
          webview: webviewRef.value
        });
        let hasError = false;
        const events = {
          "did-start-loading": () => {
            hasError = false;
            isReader.value = false;
            contentHtml.value = "";
            updateTab({ loading: "loading" });
          },
          "did-stop-loading": () => {
            if (!hasError) {
              const url = webviewRef.value.getURL();
              updateTab({
                loading: "completed",
                url
              });
            }
          },
          "did-navigate": (event) => {
            const url = event.url;
            updateTab({
              url: settingStore.default_tab_url === url ? "" : url,
              loading: hasError ? "error" : "completed"
            });
          },
          "did-navigate-in-page": (event) => {
            updateTab({
              url: event.url
            });
          },
          "will-navigate": (event) => {
            updateTab({
              url: event.url,
              loading: "loading"
            });
          },
          // 页面信息更新事件
          "page-title-updated": (event) => {
            if (!props.tab.ability)
              return;
            updateTab({
              title: event.title
            });
          },
          "page-favicon-updated": (event) => {
            if (!props.tab.ability)
              return;
            updateTab({
              icon: event.favicons[0] || ""
            });
          },
          // 错误处理事件
          "did-fail-load": (event) => {
            if (!event.isMainFrame)
              return;
            hasError = true;
            loadError.value = `加载失败: ${event.errorDescription}`;
            console.log(event);
            updateTab({
              loading: "error"
            });
          },
          // 新增：内容加载完成事件
          "dom-ready": () => {
          },
          // 新增：新窗口打开事件
          "new-window": (event) => {
            tabsStore.addTab({ url: event.url });
          },
          // 新增：控制台消息事件
          "console-message": (event) => {
            console.log("Webview console:", event.message);
          }
        };
        Object.keys(events).forEach((eventName) => {
          webviewRef.value.addEventListener(eventName, events[eventName]);
          webviewEvents.value.push({
            event: eventName,
            handler: events[eventName]
          });
        });
      }
    };
    const removeWebviewListener = () => {
      if (webviewRef.value) {
        webviewEvents.value.forEach((event) => {
          webviewRef.value.removeEventListener(event.event, event.handler);
        });
        webviewEvents.value = [];
      }
    };
    const handleIframeMessage = (res) => {
      const { type, from } = res.data;
      if (from !== "chat53ai_extension")
        return;
      if (type === "close") {
        showSider.value = false;
      }
    };
    onMounted(() => {
      nextTick(() => {
        initWebviewListener();
      });
      window.addEventListener("message", handleIframeMessage);
    });
    onUnmounted(() => {
      window.removeEventListener("message", handleIframeMessage);
      removeWebviewListener();
    });
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      const _component_el_button = ElButton;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _ctx.tab.ability ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", {
              class: normalizeClass(["size-[34px] flex-center rounded-full", [canBack.value ? "cursor-pointer hover:bg-[#F2F2F2]" : "cursor-not-allowed"]]),
              onClick: handleBack
            }, [
              createVNode(_component_el_icon, {
                color: canBack.value ? "#666666" : "#CCCCCC"
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_left_default))
                ]),
                _: 1
              }, 8, ["color"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["size-[34px] flex-center rounded-full", [canForward.value ? "cursor-pointer hover:bg-[#F2F2F2]" : "cursor-not-allowed"]]),
              onClick: handleForward
            }, [
              createVNode(_component_el_icon, {
                color: canForward.value ? "#666666" : "#CCCCCC"
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              }, 8, ["color"])
            ], 2),
            createBaseVNode("div", {
              class: "size-[34px] flex-center rounded-full hover:bg-[#F2F2F2] cursor-pointer",
              onClick: handleRefresh
            }, [
              createVNode(_component_el_icon, { color: "#666666" }, {
                default: withCtx(() => [
                  createVNode(unref(refresh_right_default))
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", {
              class: normalizeClass(["relative h-full bg-white px-3", [_ctx.tab.url && isFocus.value && isChange.value ? "shadow" : ""]])
            }, [
              createVNode(_component_el_input, {
                modelValue: _ctx.tab.url,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tab.url = $event),
                style: { "--el-border-radius-base": "50px", "--el-input-bg-color": "#edf2fa", "--el-input-border-color": "none", "--el-input-height": "32px", "--el-color-primary": "#0b57d0", "--el-input-hover-border-color": "transparent" },
                class: "url-input",
                disabled: !_ctx.tab.closable,
                placeholder: _ctx.$t("browser.search_placeholder"),
                autocomplete: "false",
                onFocus: handleFocus,
                onBlur: handleBlur,
                onInput: handleChange,
                onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => handleUrl(_ctx.tab.url), ["enter"]))
              }, {
                prefix: withCtx(() => [
                  createBaseVNode("div", {
                    class: "size-6 rounded-full bg-white ml-1 overflow-hidden",
                    style: normalizeStyle({
                      "background-image": `url(${_ctx.tab.title === _ctx.$t("browser.newTab") ? "https://www.baidu.com/favicon.ico" : _ctx.tab.icon})`,
                      "background-size": "70%",
                      "background-repeat": "no-repeat",
                      "background-position": "center"
                    }),
                    alt: ""
                  }, null, 4)
                ]),
                _: 1
              }, 8, ["modelValue", "disabled", "placeholder"]),
              _ctx.tab.url && isFocus.value && isChange.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "absolute left-0 right-0 z-10 py-4 bg-white px-3 shadow rounded-b",
                onClick: handlePanelClick
              }, [
                isUrl(_ctx.tab.url) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "h-9 px-4 mb-4 flex items-center gap-3 rounded-full cursor-pointer hover:bg-[#F2F2F2]",
                  onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleUrl(_ctx.tab.url), ["stop"]))
                }, [
                  createBaseVNode("img", {
                    class: "size-4",
                    src: isUrl(_ctx.tab.url) ? "https://chat.53ai.com/images/toolbox/website.png" : `https://www.baidu.com/favicon.ico`
                  }, null, 8, _hoisted_5$1),
                  createBaseVNode("div", _hoisted_6$1, toDisplayString(_ctx.tab.url), 1)
                ])) : createCommentVNode("", true),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-sm text-[#9A9A9A] px-4 mb-2" }, "问答搜索", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(models.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.value,
                    class: "h-9 px-4 mt-1 flex items-center gap-3 rounded-full cursor-pointer hover:bg-[#F2F2F2]",
                    onClick: withModifiers(($event) => handleUrl(item.url + _ctx.tab.url), ["stop"])
                  }, [
                    createBaseVNode("img", {
                      class: "size-4",
                      src: `https://chat.53ai.com/images/toolbox/${item.value}.png`
                    }, null, 8, _hoisted_8$1),
                    createBaseVNode("div", _hoisted_9$1, toDisplayString(_ctx.tab.url), 1)
                  ], 8, _hoisted_7$1);
                }), 128)),
                _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-sm text-[#9A9A9A] px-4 mt-4 mb-2" }, "历史记录", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(historys.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.value,
                    class: "h-9 px-4 mt-1 flex items-center gap-3 rounded-full cursor-pointer hover:bg-[#F2F2F2]",
                    onClick: withModifiers(($event) => handleUrl(item.url), ["stop"])
                  }, [
                    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "size-4" }, null, -1)),
                    createBaseVNode("div", _hoisted_11$1, [
                      createTextVNode(toDisplayString(item.name) + "-", 1),
                      createBaseVNode("span", _hoisted_12$1, toDisplayString(item.url), 1)
                    ])
                  ], 8, _hoisted_10$1);
                }), 128))
              ])) : createCommentVNode("", true)
            ], 2)
          ]),
          unref(settingStore).toolbar_enabled && _ctx.tab.closable && unref(userStore).is_login && (!_ctx.parent || _ctx.parent && _ctx.parent.browsers.length === 1) ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
            createBaseVNode("div", {
              class: "h-8 px-2 rounded-full flex-center gap-1 bg-[#F5F5F5] cursor-pointer hover:bg-[#dbdbdb]",
              onClick: handleReader
            }, [
              createVNode(_component_svg_icon, { name: "clean" }),
              createBaseVNode("span", _hoisted_14$1, toDisplayString(_ctx.$t("browser.knowledge_clean")), 1)
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(settingStore).toolbar_menus.slice(0, 2), (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.value,
                class: normalizeClass(["h-8 px-2 rounded-full flex-center gap-1 bg-[#F5F5F5] hover:bg-[#dbdbdb]", [
                  _ctx.tab.loading === "completed" ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                ]]),
                onClick: _cache[3] || (_cache[3] = ($event) => handleParseContent())
              }, [
                createVNode(_component_svg_icon, {
                  name: "setting",
                  size: "16"
                }),
                createBaseVNode("span", _hoisted_15$1, toDisplayString(item.name), 1)
              ], 2);
            }), 128)),
            moreMenus.value.length ? (openBlock(), createBlock(_component_el_dropdown, {
              key: 0,
              trigger: "click",
              onCommand: handleMenuCommand
            }, {
              dropdown: withCtx(() => [
                createVNode(_component_el_dropdown_menu, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(moreMenus.value, (item) => {
                      return openBlock(), createBlock(_component_el_dropdown_item, {
                        key: item.value,
                        command: item.value,
                        disabled: _ctx.tab.loading !== "completed"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_svg_icon, {
                            class: "mr-2",
                            name: "setting",
                            size: "16"
                          }),
                          createTextVNode(" " + toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["command", "disabled"]);
                    }), 128)),
                    createVNode(_component_el_dropdown_item, {
                      divided: "",
                      command: "setting"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_svg_icon, {
                          class: "mr-2",
                          name: "setting",
                          size: "16"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("action.setting")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(_component_el_icon, { size: "14" }, {
                    default: withCtx(() => [
                      createVNode(unref(more_filled_default))
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_17$1, [
          withDirectives((openBlock(), createElementBlock("div", _hoisted_18$1, [
            _ctx.tab.defaultUrl ? (openBlock(), createElementBlock("webview", {
              key: 0,
              ref_key: "webviewRef",
              ref: webviewRef,
              src: _ctx.tab.defaultUrl,
              style: { "height": "100%" },
              nodeintegration: "",
              allowpopups: "",
              preload: getPreloadPath(),
              webpreferences: "contextIsolation=no"
            }, null, 8, _hoisted_19$1)) : createCommentVNode("", true),
            _ctx.tab.loading === "error" ? (openBlock(), createElementBlock("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_el_icon, { class: "text-red-500 text-4xl mb-2" }, {
                  default: withCtx(() => [
                    createVNode(unref(warning_filled_default))
                  ]),
                  _: 1
                }),
                createBaseVNode("p", _hoisted_22, toDisplayString(loadError.value), 1),
                createVNode(_component_el_button, {
                  class: "mt-4",
                  type: "primary",
                  onClick: handleRefresh
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("browser.reload")), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true),
            isReader.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
              createVNode(unref(Reader), { content: contentHtml.value }, null, 8, ["content"])
            ])) : createCommentVNode("", true)
          ])), [
            [_directive_loading, cleaning.value]
          ]),
          isSider.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_24, [
            createBaseVNode("div", {
              class: "absolute right-1 top-1 cursor-pointer",
              onClick: _cache[4] || (_cache[4] = withModifiers(($event) => showSider.value = false, ["stop"]))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(unref(close_default))
                ]),
                _: 1
              })
            ]),
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "h-full border rounded overflow-y-auto" }, null, -1))
          ], 512)), [
            [vShow, showSider.value]
          ]) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const Browser = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-975febbd"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "absolute inset-0"
};
const _hoisted_2$1 = ["onMousedown"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MultiBrowser",
  props: {
    tab: { default: () => ({}) }
  },
  setup(__props) {
    const containerRef = ref(null);
    const isResizing = ref(false);
    const currentResizeIndex = ref(-1);
    const currentResizeTab = ref(null);
    const startX = ref(0);
    const handleStartResize = (e, index, tab) => {
      e.preventDefault();
      isResizing.value = true;
      currentResizeIndex.value = index;
      currentResizeTab.value = tab;
      startX.value = e.clientX;
      document.body.style.cursor = "col-resize";
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", stopResize);
    };
    const handleResize = (e) => {
      if (!isResizing.value || !currentResizeTab.value)
        return;
      e.preventDefault();
      console.log(e);
      const dx = e.clientX - startX.value;
      const container = containerRef.value;
      if (!container)
        return;
      const totalWidth = container.offsetWidth;
      const browsers = currentResizeTab.value.browsers;
      const leftBrowser = browsers[currentResizeIndex.value];
      const rightBrowser = browsers[currentResizeIndex.value + 1];
      const leftWidth = leftBrowser.width || 100 / browsers.length;
      const rightWidth = rightBrowser.width || 100 / browsers.length;
      const deltaPercent = dx / totalWidth * 100;
      const minWidth = 20;
      const newLeftWidth = Math.min(Math.max(leftWidth + deltaPercent, minWidth), 100 - minWidth);
      const newRightWidth = Math.min(Math.max(rightWidth - deltaPercent, minWidth), 100 - minWidth);
      leftBrowser.width = newLeftWidth;
      rightBrowser.width = newRightWidth;
      startX.value = e.clientX;
    };
    const stopResize = () => {
      isResizing.value = false;
      currentResizeIndex.value = -1;
      currentResizeTab.value = null;
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("mouseup", stopResize);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["h-full flex relative", { "select-none": isResizing.value }]),
        ref_key: "containerRef",
        ref: containerRef
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tab.browsers, (item, index) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.id
          }, [
            createVNode(Browser, {
              class: "flex-1",
              style: normalizeStyle({ flexBasis: item.width ? item.width + "%" : "0%" }),
              parent: _ctx.tab,
              tab: item
            }, null, 8, ["style", "parent", "tab"]),
            isResizing.value ? (openBlock(), createElementBlock("div", _hoisted_1$1)) : createCommentVNode("", true),
            index < _ctx.tab.browsers.length - 1 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "w-1 hover:bg-blue-400 cursor-col-resize relative z-10",
              onMousedown: ($event) => handleStartResize($event, index, _ctx.tab)
            }, null, 40, _hoisted_2$1)) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ], 2);
    };
  }
});
const useLocalUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    eid: 0,
    loginkey: "",
    accesstoken: "",
    userInfo: {},
    enteriseinfo: {}
  }),
  getters: {},
  actions: {
    login(data) {
      this.isLoggedIn = true;
      this.eid = data.eid;
      this.loginkey = data.loginkey;
      this.userInfo = data.userInfo;
      this.enteriseinfo = data.enteriseinfo;
      this.accesstoken = data.accesstoken;
    },
    logout() {
      this.isLoggedIn = false;
      this.eid = 0;
      this.loginkey = "";
      this.accesstoken = "";
      this.userInfo = {};
      this.enteriseinfo = {};
    }
  }
});
const _hoisted_1 = { class: "w-screen h-screen flex flex-col bg-[#F0F0F0]" };
const _hoisted_2 = { class: "h-10 flex items-center gap-3" };
const _hoisted_3 = { class: "flex items-center gap-2 px-4 py-2 mt-2" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "flex-1 text-sm text-[#1D1E1F] truncate" };
const _hoisted_6 = { class: "flex items-center gap-2 px-3 py-2 border-t" };
const _hoisted_7 = { class: "h-8 flex-1 flex items-center gap-3 px-3" };
const _hoisted_8 = { class: "text-[#1D1E1F] text-sm" };
const _hoisted_9 = { class: "flex items-center gap-2" };
const _hoisted_10 = { class: "flex flex-col gap-2 px-3 py-2 border-t" };
const _hoisted_11 = { class: "size-4 flex-center" };
const _hoisted_12 = { class: "size-4 flex-center" };
const _hoisted_13 = { class: "text-[#1D1E1F] text-sm" };
const _hoisted_14 = { class: "size-4 flex-center" };
const _hoisted_15 = { class: "text-[#1D1E1F] text-sm" };
const _hoisted_16 = { class: "flex flex-col gap-2 px-3 py-2 border-t" };
const _hoisted_17 = { class: "h-8 flex items-center gap-1 px-2 rounded-full text-[#474747] bg-[#E6E6E6] cursor-pointer nodrag" };
const _hoisted_18 = ["src"];
const _hoisted_19 = { class: "flex no-drag" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const localUserStore = useLocalUserStore();
    const settingStore = useBrowserSettingStore();
    const userStore = useUserStore();
    const tabsStore = useTabsStore();
    const isMaximized = ref(false);
    const alwaysOnTop = ref(false);
    const notification = ref(null);
    const percentage = ref(0);
    const avatar = computed(() => {
      return userStore.info.avatar || window.$chat53ai.getPublicPath("/images/default_avatar.png");
    });
    const tabs = computed(() => {
      const list = [...tabsStore.tabs];
      list.sort((itemA, itemB) => itemA.timestamp > itemB.timestamp ? -1 : 1);
      return list;
    });
    const useWindowActions = () => {
      const minimize2 = () => window.$chat53ai.$win({ type: "minimize" });
      const close22 = () => window.$chat53ai.$win({ type: "close" });
      const toggleMaximize2 = () => {
        isMaximized.value = !isMaximized.value;
        window.$chat53ai.$win({ type: isMaximized.value ? "maximize" : "restore" });
      };
      return { minimize: minimize2, close: close22, toggleMaximize: toggleMaximize2 };
    };
    const { minimize, close: close2, toggleMaximize } = useWindowActions();
    const handlePostion = (position) => {
      window.$chat53ai.$win({ type: "setPosition", data: { position } });
    };
    const handleSetAlwaysOnTop = () => {
      alwaysOnTop.value = !alwaysOnTop.value;
      window.$chat53ai.$win({ type: "setAlwaysOnTop", data: { alwaysOnTop: alwaysOnTop.value } });
    };
    const handleTest = () => {
      window.$chat53ai.$win({ type: "test", data: {} });
    };
    const handleSetting = () => {
      tabsStore.activeSetting();
    };
    const handleImmeidateLogin = (isActive = true) => {
      tabsStore.addTab(
        {
          id: "main",
          title: "AI导航",
          closable: false,
          ability: false,
          icon: window.$chat53ai.getPublicPath("/images/home.png"),
          defaultUrl: tabsStore.MAIN_URL
        },
        true
      );
      if (isActive) {
        const main = tabsStore.tabs.find((item) => item.id === "main");
        if (main && main.webview) {
          main.webview.send("agenthub:service", { type: "login" });
        }
      }
    };
    const handleQuit = () => {
      tabsStore.closeTab("setting");
      tabsStore.refreshTab("main");
      tabsStore.updateTab("main", {
        title: "AI导航"
      });
      userStore.logout();
      window.$chat53ai.$win({ type: "clearSession", data: { url: tabsStore.MAIN_URL } });
    };
    const subsriceConfig = () => {
      window.$chat53ai.$win({ type: "setting", data: JSON.stringify({ ...settingStore.$state }) });
    };
    const showDownloading = () => {
      notification.value = ElNotification({
        title: window.$t("updater.downloading"),
        message: () => h("div", { class: "flex flex-col gap-2", percentage }, [
          h(ElProgress, {
            percentage: percentage.value,
            format: (percentage2) => `${percentage2}%`
          })
        ]),
        duration: 0,
        showClose: false,
        position: "bottom-right",
        onClose: () => {
          notification.value = null;
        }
      });
    };
    const handleJump = (id, defaultUrl, options = {}) => {
      tabsStore.addTab({
        id,
        title: "",
        icon: defaultUrl + "/favicon.ico",
        ability: false,
        closable: true,
        defaultUrl,
        ...options
      });
    };
    const showUpdater = async () => {
      if (notification.value)
        return;
      percentage.value = 0;
      await ElMessageBox.confirm(window.$t("updater.newVersion"), window.$t("updater.newVersionTitle"));
      window.$chat53ai.$updater({ type: "download" });
    };
    const showDownloaded = async () => {
      if (notification.value) {
        notification.value.close();
        notification.value = null;
        percentage.value = 0;
      }
      await ElMessageBox.confirm(window.$t("updater.completed"), window.$t("updater.completedTitle"));
      window.$chat53ai.$updater({ type: "restart" });
    };
    const initIPCListener = () => {
      window.$chat53ai.$on("win:service", (_event, { type, data } = {}) => {
        console.log(type, data, "成功");
        switch (type) {
          case "login":
            localUserStore.login(JSON.parse(data));
            subsriceConfig();
            break;
          case "agenthub_login":
            userStore.updateInfo(JSON.parse(data));
            tabsStore.updateTab("main", {
              title: "首页"
            });
            break;
          case "agenthub_logout":
            handleQuit();
            break;
          case "setting":
            settingStore.$patch(JSON.parse(data));
            break;
          case "new-window":
            tabsStore.addTab({
              url: data.url,
              defaultUrl: data.url
            });
            break;
          case "new-tab":
            const tabData = JSON.parse(data);
            if (tabData.urls.length === 1) {
              tabsStore.addTab({
                title: tabData.title,
                type: "browser",
                closable: tabData.closable === void 0 ? true : tabData.closable,
                ability: tabData.ability === void 0 ? true : tabData.ability,
                defaultUrl: tabData.urls[0]
              });
            } else {
              const tab = tabsStore.addTab({
                title: tabData.title,
                type: "multibrowser"
              });
              tabData.urls.forEach((defaultUrl) => {
                tabsStore.addChildTab(tab.id, {
                  defaultUrl
                });
              });
            }
            break;
          case "maximize":
            isMaximized.value = true;
            break;
          case "unmaximize":
            isMaximized.value = false;
            break;
          case "glider:setting":
            handleSetting();
            break;
          case "glider:forbid":
            settingStore.glider_enabled = false;
            break;
        }
      });
      window.$chat53ai.$on("glider:service", (_event, { type, data } = {}) => {
        console.log(type, data, "成功");
      });
      window.$chat53ai.$on("updater:service", (_event, { type, data } = {}) => {
        console.log(type, data, "成功");
        switch (type) {
          case "available":
            showUpdater();
            break;
          case "progress":
            percentage.value = Math.floor(data.percent);
            if (!notification.value)
              showDownloading();
            break;
          case "error":
            if (notification.value) {
              notification.value.close();
              notification.value = null;
            }
            ElMessage.error(data);
            break;
          case "downloaded":
            showDownloaded();
            break;
        }
      });
    };
    watch(
      settingStore.$state,
      (newValue, oldValue) => {
        console.log("settingStore 发生变化:", newValue, oldValue);
        subsriceConfig();
      },
      { deep: true }
    );
    onMounted(() => {
      const params = new URLSearchParams(location.search);
      const isMain = params.get("window") === "main";
      if (isMain) {
        handleImmeidateLogin(false);
      } else {
        tabsStore.addTab({
          title: window.$t("browser.newTab"),
          closable: true,
          defaultUrl: decodeURIComponent(params.get("url") || "")
        });
      }
      initIPCListener();
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_tooltip = ElTooltip;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$3, { class: "flex-1 overflow-hidden" }),
          createVNode(_component_el_tooltip, {
            effect: "light",
            placement: "bottom-end",
            "popper-class": "!p-0 w-[300px]"
          }, {
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("img", {
                  class: "flex-none w-10 h-10 rounded-full",
                  src: avatar.value
                }, null, 8, _hoisted_4),
                createBaseVNode("div", _hoisted_5, toDisplayString(unref(userStore).info.nickname || _ctx.$t("browser.not_logged_in")), 1),
                !unref(userStore).is_login ? (openBlock(), createBlock(_component_el_button, {
                  key: 0,
                  type: "primary",
                  onClick: _cache[0] || (_cache[0] = ($event) => handleImmeidateLogin(true))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("browser.login")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  _cache[9] || (_cache[9] = createBaseVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "w-4 h-4"
                  }, null, -1)),
                  createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("browser.window_position")), 1)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "size-6 flex-center rounded bg-[#F0EFEF] cursor-pointer",
                    onClick: _cache[1] || (_cache[1] = ($event) => handlePostion("left"))
                  }, [
                    createVNode(_component_svg_icon, { name: "justify-left" })
                  ])), [
                    [_directive_tooltip, { content: _ctx.$t("browser.leftWindow") }]
                  ]),
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "size-6 flex-center rounded bg-[#F0EFEF] cursor-pointer",
                    onClick: _cache[2] || (_cache[2] = ($event) => handlePostion("center"))
                  }, [
                    createVNode(_component_svg_icon, { name: "justify-center" })
                  ])), [
                    [_directive_tooltip, { content: _ctx.$t("browser.centerWindow") }]
                  ]),
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "size-6 flex-center rounded bg-[#F0EFEF] cursor-pointer",
                    onClick: _cache[3] || (_cache[3] = ($event) => handlePostion("right"))
                  }, [
                    createVNode(_component_svg_icon, { name: "justify-right" })
                  ])), [
                    [_directive_tooltip, { content: _ctx.$t("browser.rightWindow") }]
                  ]),
                  _cache[10] || (_cache[10] = createBaseVNode("div", { class: "h-[14px] border-r" }, null, -1)),
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "size-6 flex-center rounded bg-[#F0EFEF] cursor-pointer",
                    onClick: handleSetAlwaysOnTop
                  }, [
                    createVNode(_component_svg_icon, {
                      name: "top",
                      color: alwaysOnTop.value ? "#1D1E1F" : "#C4C4C4"
                    }, null, 8, ["color"])
                  ])), [
                    [_directive_tooltip, { content: _ctx.$t("browser.alwaysOnTop") }]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", {
                  class: "h-8 flex items-center gap-3 px-3 rounded cursor-pointer hover:bg-[#F0EFEF]",
                  onClick: handleTest
                }, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_svg_icon, {
                      size: "16",
                      name: "setting"
                    })
                  ]),
                  _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-[#1D1E1F] text-sm" }, toDisplayString("调试"), -1))
                ]),
                createBaseVNode("div", {
                  class: "h-8 flex items-center gap-3 px-3 rounded cursor-pointer hover:bg-[#F0EFEF]",
                  onClick: handleSetting
                }, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_svg_icon, {
                      size: "16",
                      name: "setting"
                    })
                  ]),
                  createBaseVNode("span", _hoisted_13, toDisplayString(_ctx.$t("action.setting")), 1)
                ]),
                unref(userStore).is_login ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "h-8 flex items-center gap-3 px-3 rounded cursor-pointer hover:bg-[#F0EFEF]",
                  onClick: handleQuit
                }, [
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_component_svg_icon, {
                      size: "14",
                      name: "quit"
                    })
                  ]),
                  createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("login.quit")), 1)
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", {
                  class: "h-8 flex items-center gap-3 px-3 rounded cursor-pointer hover:bg-[#F0EFEF]",
                  onClick: _cache[4] || (_cache[4] = ($event) => handleJump("53ai_offical", "https://www.53ai.com/", { title: "53AI" }))
                }, _cache[12] || (_cache[12] = [
                  createBaseVNode("div", { class: "size-4 flex-center" }, [
                    createBaseVNode("img", {
                      src: "https://www.53ai.com/favicon.ico",
                      class: "size-4"
                    })
                  ], -1),
                  createBaseVNode("span", { class: "text-[#1D1E1F] text-sm" }, toDisplayString("53AI"), -1)
                ])),
                createBaseVNode("div", {
                  class: "h-8 flex items-center gap-3 px-3 rounded cursor-pointer hover:bg-[#F0EFEF]",
                  onClick: _cache[5] || (_cache[5] = ($event) => handleJump("53ai_studio", "http://chatrc.53ai.com/", { title: "53AI Studio" }))
                }, _cache[13] || (_cache[13] = [
                  createBaseVNode("div", { class: "size-4 flex-center" }, [
                    createBaseVNode("img", {
                      src: "https://chat.53ai.com/favicon.ico",
                      class: "size-4"
                    })
                  ], -1),
                  createBaseVNode("span", { class: "text-[#1D1E1F] text-sm" }, toDisplayString("53AI Studio"), -1)
                ]))
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("img", {
                  class: "size-6 rounded-full",
                  src: avatar.value,
                  alt: ""
                }, null, 8, _hoisted_18),
                createVNode(_component_svg_icon, {
                  name: "down",
                  size: "18"
                })
              ])
            ]),
            _: 1
          }),
          createBaseVNode("nav", _hoisted_19, [
            createBaseVNode("div", {
              class: "size-10 flex-center cursor-pointer text-[#333333] hover:bg-[#C6CCD1]",
              onClick: _cache[6] || (_cache[6] = //@ts-ignore
              (...args) => unref(minimize) && unref(minimize)(...args))
            }, [
              createVNode(_component_svg_icon, {
                name: "mini",
                size: "14"
              })
            ]),
            createBaseVNode("div", {
              class: "size-10 flex-center cursor-pointer text-[#333333] hover:bg-[#C6CCD1]",
              onClick: _cache[7] || (_cache[7] = //@ts-ignore
              (...args) => unref(toggleMaximize) && unref(toggleMaximize)(...args))
            }, [
              createVNode(_component_svg_icon, {
                name: isMaximized.value ? "zoom-in" : "zoom-out",
                size: "14"
              }, null, 8, ["name"])
            ]),
            createBaseVNode("div", {
              class: "size-10 flex-center cursor-pointer text-[#333333] hover:bg-[#C6CCD1]",
              onClick: _cache[8] || (_cache[8] = //@ts-ignore
              (...args) => unref(close2) && unref(close2)(...args))
            }, [
              createVNode(_component_svg_icon, {
                name: "close",
                size: "14"
              })
            ])
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
          return withDirectives((openBlock(), createElementBlock("div", {
            class: "flex-1 rounded-t-lg overflow-hidden",
            key: tab.id
          }, [
            !tab.render ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : tab.type === "browser" ? (openBlock(), createBlock(Browser, {
              key: 1,
              class: "h-full",
              tab
            }, null, 8, ["tab"])) : tab.type === "page" ? (openBlock(), createBlock(resolveDynamicComponent(tab.component), { key: 2 })) : tab.type === "multibrowser" ? (openBlock(), createBlock(_sfc_main$1, {
              key: 3,
              tab
            }, null, 8, ["tab"])) : createCommentVNode("", true)
          ])), [
            [vShow, tab.id === unref(tabsStore).activeId]
          ]);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-_KL5Zetu.js","./main-zTjO05wq.js","./main-hmm0JC4y.css","./enterprise-EiZTO-a9.js","./el-scrollbar-Ngsny-f4.js","./el-scrollbar-MGPS7OqT.css","./browser-setting-mkdXkMac.js","./el-dropdown-item-NOVRjZ1y.js","./el-dropdown-item-2HWGmYcF.css","./strings-gmAHSTq5.js","./debounce-Aw5yKx-N.js","./index-IGBoDB1x.js","./el-radio-uShQVp49.js","./el-radio-P9nymJDg.css","./upload-U3GEMIbU.js","./upload-EpRhXtGe.css","./index-fFBRgUxU.css","./index-NDXP37gk.js","./_commonjsHelpers-jUUCeJQL.js","./index-2oxjR5zz.css","./index-lK8JGpn_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
