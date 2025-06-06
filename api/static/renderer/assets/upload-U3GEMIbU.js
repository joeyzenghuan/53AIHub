import { ap as buildProps, aw as componentSizes, ax as isNumber, ay as iconPropType, az as definePropType, y as defineComponent, am as useNamespace, r as ref, N as computed, ab as isString, ar as addUnit, Y as watch, b as openBlock, c as createElementBlock, X as normalizeStyle, O as unref, h as createBlock, i as withCtx, al as resolveDynamicComponent, a4 as ElIcon, Z as renderSlot, n as normalizeClass, ao as _export_sfc, as as withInstall, C as service, F as handleError } from "./main-zTjO05wq.js";
const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const __default__ = defineComponent({
  name: "ElAvatar"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError2(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError2
        }, null, 44, ["src", "alt", "srcset"])) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const upload = {
  upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    return service.post(`/api/upload`, formData).catch(handleError);
  },
  preview(key) {
    return service.get(`/api/preview/${key}`).catch(handleError);
  }
};
export {
  ElAvatar as E,
  upload as u
};
