import { cg as MapCache, ch as Symbol$1, ci as eq, cj as Uint8Array$1, ck as getAllKeys, cl as getTag, cm as isBuffer, cn as Stack, co as isTypedArray, cp as isArray, cq as isObjectLike, au as isObject, cr as keys, cs as isKey, ct as toKey, cu as get, cv as hasIn, cw as baseGet, cx as identity, ap as buildProps, aw as componentSizes, y as defineComponent, br as useFormSize, am as useNamespace, N as computed, b as openBlock, c as createElementBlock, d as createBaseVNode, Z as renderSlot, n as normalizeClass, O as unref, h as createBlock, i as withCtx, f as createVNode, aI as close_default, a1 as withModifiers, a4 as ElIcon, e as createCommentVNode, X as normalizeStyle, T as Transition, ao as _export_sfc, as as withInstall, s as shallowRef, r as ref, b1 as useResizeObserver, a$ as inject, c0 as castArray, ae as isObject$1, a_ as getCurrentInstance, cy as toRaw, Y as watch, an as useId, J as reactive, a7 as toRefs, b2 as onBeforeUnmount, $ as nextTick, g as withDirectives, v as vShow, t as toDisplayString, o as onMounted, aq as useLocale, cz as useComposition, cA as useFocusController, bv as useFormItem, bw as useFormItemInputId, cB as useEmptyValues, l as isArray$1, cC as ValidateComponentsMap, b9 as isUndefined, cD as isIOS, bx as debugWarn, k as isClient, ax as isNumber, w as watchEffect, bE as isFunction, cE as isPlainObject, aQ as EVENT_CODE, b8 as UPDATE_MODEL_EVENT, cF as scrollIntoView, bp as CHANGE_EVENT, ab as isString, bn as useSizeProp, az as definePropType, bZ as useTooltipContentProps, ay as iconPropType, bC as circle_close_default, aj as arrow_down_default, cG as Ee, cH as useEmptyValuesProps, bu as useAriaProps, bi as ElTooltip, b6 as provide, z as resolveComponent, K as resolveDirective, H as Fragment, I as renderList, B as createTextVNode, a0 as withKeys, cI as vModelText, al as resolveDynamicComponent, cJ as toHandlerKey, cK as useMutationObserver, bc as withNoopInstall, bo as isBoolean, cL as INPUT_EVENT, bs as useFormDisabled, ar as addUnit, bK as loading_default, cM as isPromise, b0 as throwError, cN as delete_default, a5 as ElButton, V as ElInput, cO as ElFormItem, cP as ElForm, bj as ElDialog, a3 as ElMessage, cQ as getPasswordRules, cR as userApi, cS as circle_plus_default, cT as remove_default, aO as refresh_right_default, Q as _export_sfc$1, ak as useUserStore, L as useRoute } from "./main-zTjO05wq.js";
import { u as useEnterpriseStore } from "./enterprise-EiZTO-a9.js";
import { E as ElScrollbar } from "./el-scrollbar-Ngsny-f4.js";
import { u as useBrowserSettingStore, _ as _sfc_main$e } from "./browser-setting-mkdXkMac.js";
import { i as isValidComponentSize, c as ElMessageBox, E as ElDropdownItem, a as ElDropdownMenu, b as ElDropdown } from "./el-dropdown-item-NOVRjZ1y.js";
import { e as escapeStringRegexp } from "./strings-gmAHSTq5.js";
import { t as toNumber, d as debounce } from "./debounce-Aw5yKx-N.js";
import { C as ClickOutside } from "./index-IGBoDB1x.js";
import { E as ElRadio, a as ElRadioGroup } from "./el-radio-uShQVp49.js";
import { u as upload, E as ElAvatar } from "./upload-U3GEMIbU.js";
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var nativeMax = Math.max, nativeMin = Math.min;
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index2 = length - 1;
  if (fromIndex !== void 0) {
    index2 = toInteger(fromIndex);
    index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate), index2, true);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$1 = defineComponent({
  name: "ElTag"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    const handleVNodeMounted = (vnode) => {
      var _a, _b, _c;
      if ((_c = (_b = (_a = vnode == null ? void 0 : vnode.component) == null ? void 0 : _a.subTree) == null ? void 0 : _b.component) == null ? void 0 : _c.bum) {
        vnode.component.subTree.component.bum = null;
      }
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(containerKls)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createBaseVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: "",
        onVnodeMounted: handleVNodeMounted
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: normalizeClass(unref(containerKls)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "tag.vue"]]);
const ElTag = withInstall(Tag);
function useCalcInputWidth() {
  const calculatorRef = shallowRef();
  const calculatorWidth = ref(0);
  const MINIMUM_INPUT_WIDTH = 11;
  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`
  }));
  const resetCalculatorWidth = () => {
    var _a, _b;
    calculatorWidth.value = (_b = (_a = calculatorRef.value) == null ? void 0 : _a.getBoundingClientRect().width) != null ? _b : 0;
  };
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  return {
    calculatorRef,
    calculatorWidth,
    inputStyle
  };
}
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    return contains(castArray(select.props.modelValue), props.value);
  });
  const limitReached = computed(() => {
    var _a;
    if (select.props.multiple) {
      const modelValue = castArray((_a = select.props.modelValue) != null ? _a : []);
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject$1(props.value) ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject$1(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    const shouldUpdate = remote ? val !== oldVal : !isEqual(val, oldVal);
    if (shouldUpdate) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && isObject$1(val) && isObject$1(oldVal) && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$c = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key = vm.value;
      const { selected: selectedOptions } = select.states;
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select.states.cachedOptions.get(key) === vm && !doesSelected) {
          select.states.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (!isDisabled.value) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMousemove: _ctx.hoverItem,
    onClick: withModifiers(_ctx.selectOptionClick, ["stop"])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$3], ["__file", "option.vue"]]);
const _sfc_main$b = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectRef) == null ? void 0 : _a.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectRef, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.be("dropdown", "header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$2], ["__file", "select-dropdown.vue"]]);
const useSelect = (props, emit) => {
  const { t } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref(null);
  const selectionRef = ref(null);
  const tooltipRef = ref(null);
  const tagTooltipRef = ref(null);
  const inputRef = ref(null);
  const prefixRef = ref(null);
  const suffixRef = ref(null);
  const menuRef = ref(null);
  const tagMenuRef = ref(null);
  const collapseItemRef = ref(null);
  const scrollbarRef = ref(null);
  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useComposition({
    afterComposition: (e) => onInput(e)
  });
  const { wrapperRef, isFocused, handleBlur } = useFocusController(inputRef, {
    beforeFocus() {
      return selectDisabled.value;
    },
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a, _b;
      return ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      expanded.value = false;
      states.menuVisibleOnFocus = false;
    }
  });
  const expanded = ref(false);
  const hoverOption = ref();
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const hasModelValue = computed(() => {
    return isArray$1(props.modelValue) ? props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const needStatusIcon = computed(() => {
    var _a;
    return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
  });
  const showClose = computed(() => {
    return props.clearable && !selectDisabled.value && states.inputHovering && hasModelValue.value;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => nsSelect.is("reverse", iconComponent.value && expanded.value));
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const isRemoteSearchEmpty = computed(() => props.remote && !states.inputValue && states.options.size === 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(() => optionsArray.value.filter((option) => option.visible).length);
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index2 = list.findIndex((i) => i.value === item);
      if (index2 > -1) {
        newList.push(list[index2]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return;
    optionsArray.value.forEach((option) => {
      var _a;
      (_a = option.updateOption) == null ? void 0 : _a.call(option, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && !isRemoteSearchEmpty.value;
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (props.multiple && !isUndefined(props.modelValue)) {
      return castArray(props.modelValue).length === 0 && !states.inputValue;
    }
    const value = isArray$1(props.modelValue) ? props.modelValue[0] : props.modelValue;
    return props.filterable || isUndefined(value) ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a;
    const _placeholder = (_a = props.placeholder) != null ? _a : t("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  const mouseEnterEventName = computed(() => isIOS ? null : "mouseenter");
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
        handleQueryChange("");
      }
    }
    setSelected();
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => expanded.value, (val) => {
    if (val) {
      handleQueryChange(states.inputValue);
    } else {
      states.inputValue = "";
      states.previousQuery = null;
      states.isBeforeHide = true;
    }
    emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    if (!isClient)
      return;
    setSelected();
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoveringIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || isComposing.value) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    const valueList = optionsArray.value.map((item) => item.value);
    states.hoveringIndex = getValueIndex(valueList, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    if (!props.multiple) {
      const value = isArray$1(props.modelValue) ? props.modelValue[0] : props.modelValue;
      const option = getOption(value);
      states.selectedLabel = option.currentLabel;
      states.selected = [option];
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (!isUndefined(props.modelValue)) {
      castArray(props.modelValue).forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = isPlainObject(value);
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : value != null ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    states.hoveringIndex = optionsArray.value.findIndex((item) => states.selected.some((selected) => getValueKey(selected) === getValueKey(item)));
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width;
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a, _b;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const updateTagTooltip = () => {
    var _a, _b;
    (_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => {
    const option = states.cachedOptions.get(it);
    return option && !option.disabled && !option.states.groupDisabled;
  });
  const deletePrevTag = (e) => {
    if (!props.multiple)
      return;
    if (e.code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0) {
      const value = castArray(props.modelValue).slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      const removeTagValue = value[lastNotDisabledIndex];
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", removeTagValue);
    }
  };
  const deleteTag = (event, tag) => {
    const index2 = states.selected.indexOf(tag);
    if (index2 > -1 && !selectDisabled.value) {
      const value = castArray(props.modelValue).slice();
      value.splice(index2, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option) => {
    var _a;
    if (props.multiple) {
      const value = castArray((_a = props.modelValue) != null ? _a : []).slice();
      const optionIndex = getValueIndex(value, option);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], option) => {
    if (isUndefined(option))
      return -1;
    if (!isObject$1(option.value))
      return arr.indexOf(option.value);
    return arr.findIndex((item) => {
      return isEqual(get(item, props.valueKey), getValueKey(option));
    });
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = isArray$1(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${nsSelect.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };
  const popperRef = computed(() => {
    var _a, _b;
    return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => {
      var _a;
      (_a = scrollbarRef.value) == null ? void 0 : _a.update();
      scrollToOption(states.selected);
    });
  };
  const focus = () => {
    var _a;
    (_a = inputRef.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    var _a;
    if (expanded.value) {
      expanded.value = false;
      nextTick(() => {
        var _a2;
        return (_a2 = inputRef.value) == null ? void 0 : _a2.blur();
      });
      return;
    }
    (_a = inputRef.value) == null ? void 0 : _a.blur();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event = new FocusEvent("focus", event);
      nextTick(() => handleBlur(_event));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = () => {
    if (selectDisabled.value)
      return;
    if (isIOS)
      states.inputHovering = true;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      const option = optionsArray.value[states.hoveringIndex];
      if (option && !option.isDisabled) {
        handleOptionSelect(option);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$1(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.isDisabled));
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || filteredOptionsCount.value === 0 || isComposing.value)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoveringIndex];
      if (option.isDisabled || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = window.getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth : states.selectionWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const popupScroll = (data) => {
    emit("popup-scroll", data);
  };
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(menuRef, updateTooltip);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  onMounted(() => {
    setSelected();
  });
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    mouseEnterEventName,
    needStatusIcon,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    focus,
    blur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    popupScroll,
    tagStyle,
    collapseTagStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_, { slots }) {
    const select = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray$1(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString(item.children) && !isArray$1(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray$1(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const SelectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  tagEffect: { ...tagProps.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: definePropType(String),
    values: Ee,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const COMPONENT_NAME$1 = "ElSelect";
const _sfc_main$a = defineComponent({
  name: COMPONENT_NAME$1,
  componentName: COMPONENT_NAME$1,
  components: {
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(props, { emit }) {
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props;
      const fallback = multiple ? [] : void 0;
      if (isArray$1(rawModelValue)) {
        return multiple ? rawModelValue : fallback;
      }
      return multiple ? fallback : rawModelValue;
    });
    const _props = reactive({
      ...toRefs(props),
      modelValue
    });
    const API = useSelect(_props, emit);
    const { calculatorRef, inputStyle } = useCalcInputWidth();
    provide(selectKey, reactive({
      props: _props,
      states: API.states,
      optionsArray: API.optionsArray,
      handleOptionSelect: API.handleOptionSelect,
      onOptionCreate: API.onOptionCreate,
      onOptionDestroy: API.onOptionDestroy,
      selectRef: API.selectRef,
      setSelected: API.setSelected
    }));
    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel;
      }
      return API.states.selected.map((i) => i.currentLabel);
    });
    return {
      ...API,
      modelValue,
      selectedLabel,
      calculatorRef,
      inputStyle
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]),
    [toHandlerKey(_ctx.mouseEnterEventName)]: ($event) => _ctx.states.inputHovering = true,
    onMouseleave: ($event) => _ctx.states.inputHovering = false
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropdownMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": _ctx.fallbackPlacements,
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      "append-to": _ctx.appendTo,
      "show-arrow": _ctx.showArrow,
      offset: _ctx.offset,
      onBeforeShow: _ctx.handleMenuEnter,
      onHide: ($event) => _ctx.states.isBeforeHide = false
    }, {
      default: withCtx(() => {
        var _a;
        return [
          createBaseVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass([
              _ctx.nsSelect.e("wrapper"),
              _ctx.nsSelect.is("focused", _ctx.isFocused),
              _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
              _ctx.nsSelect.is("filterable", _ctx.filterable),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ]),
            onClick: withModifiers(_ctx.toggleMenu, ["prevent"])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "prefixRef",
              class: normalizeClass(_ctx.nsSelect.e("prefix"))
            }, [
              renderSlot(_ctx.$slots, "prefix")
            ], 2)) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              ref: "selectionRef",
              class: normalizeClass([
                _ctx.nsSelect.e("selection"),
                _ctx.nsSelect.is("near", _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length)
              ])
            }, [
              _ctx.multiple ? renderSlot(_ctx.$slots, "tag", { key: 0 }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                  }, [
                    createVNode(_component_el_tag, {
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      type: _ctx.tagType,
                      effect: _ctx.tagEffect,
                      "disable-transitions": "",
                      style: normalizeStyle(_ctx.tagStyle),
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                        }, [
                          renderSlot(_ctx.$slots, "label", {
                            label: item.currentLabel,
                            value: item.value
                          }, () => [
                            createTextVNode(toDisplayString(item.currentLabel), 1)
                          ])
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                  ], 2);
                }), 128)),
                _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: _ctx.effect,
                  placement: "bottom",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      ref: "collapseItemRef",
                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                    }, [
                      createVNode(_component_el_tag, {
                        closable: false,
                        size: _ctx.collapseTagSize,
                        type: _ctx.tagType,
                        effect: _ctx.tagEffect,
                        "disable-transitions": "",
                        style: normalizeStyle(_ctx.collapseTagStyle)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: withCtx(() => [
                    createBaseVNode("div", {
                      ref: "tagMenuRef",
                      class: normalizeClass(_ctx.nsSelect.e("selection"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: _ctx.getValueKey(item),
                          class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                        }, [
                          createVNode(_component_el_tag, {
                            class: "in-tooltip",
                            closable: !_ctx.selectDisabled && !item.isDisabled,
                            size: _ctx.collapseTagSize,
                            type: _ctx.tagType,
                            effect: _ctx.tagEffect,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag($event, item)
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("span", {
                                class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                              }, [
                                renderSlot(_ctx.$slots, "label", {
                                  label: item.currentLabel,
                                  value: item.value
                                }, () => [
                                  createTextVNode(toDisplayString(item.currentLabel), 1)
                                ])
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "type", "effect", "onClose"])
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : createCommentVNode("v-if", true)
              ]) : createCommentVNode("v-if", true),
              createBaseVNode("div", {
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("input-wrapper"),
                  _ctx.nsSelect.is("hidden", !_ctx.filterable)
                ])
              }, [
                withDirectives(createBaseVNode("input", {
                  id: _ctx.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": ($event) => _ctx.states.inputValue = $event,
                  type: "text",
                  name: _ctx.name,
                  class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                  disabled: _ctx.selectDisabled,
                  autocomplete: _ctx.autocomplete,
                  style: normalizeStyle(_ctx.inputStyle),
                  tabindex: _ctx.tabindex,
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
                  "aria-controls": _ctx.contentId,
                  "aria-expanded": _ctx.dropdownMenuVisible,
                  "aria-label": _ctx.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    withKeys(withModifiers(_ctx.handleEsc, ["stop", "prevent"]), ["esc"]),
                    withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
                    withKeys(withModifiers(_ctx.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: _ctx.handleCompositionStart,
                  onCompositionupdate: _ctx.handleCompositionUpdate,
                  onCompositionend: _ctx.handleCompositionEnd,
                  onInput: _ctx.onInput,
                  onClick: withModifiers(_ctx.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [vModelText, _ctx.states.inputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                  textContent: toDisplayString(_ctx.states.inputValue)
                }, null, 10, ["textContent"])) : createCommentVNode("v-if", true)
              ], 2),
              _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("placeholder"),
                  _ctx.nsSelect.is("transparent", !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue)
                ])
              }, [
                _ctx.hasModelValue ? renderSlot(_ctx.$slots, "label", {
                  key: 0,
                  label: _ctx.currentPlaceholder,
                  value: _ctx.modelValue
                }, () => [
                  createBaseVNode("span", null, toDisplayString(_ctx.currentPlaceholder), 1)
                ]) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(_ctx.currentPlaceholder), 1))
              ], 2)) : createCommentVNode("v-if", true)
            ], 2),
            createBaseVNode("div", {
              ref: "suffixRef",
              class: normalizeClass(_ctx.nsSelect.e("suffix"))
            }, [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("caret"),
                  _ctx.nsSelect.e("icon"),
                  _ctx.nsSelect.e("clear")
                ]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
              _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: normalizeClass([
                  _ctx.nsInput.e("icon"),
                  _ctx.nsInput.e("validateIcon"),
                  _ctx.nsInput.is("loading", _ctx.validateState === "validating")
                ])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, { ref: "menuRef" }, {
          default: withCtx(() => [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
              onClick: withModifiers(() => {
              }, ["stop"])
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 10, ["onClick"])) : createCommentVNode("v-if", true),
            withDirectives(createVNode(_component_el_scrollbar, {
              id: _ctx.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: _ctx.popupScroll
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.states.inputValue,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
            }, [
              renderSlot(_ctx.$slots, "loading")
            ], 2)) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
            }, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createBaseVNode("span", null, toDisplayString(_ctx.emptyText), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
              onClick: withModifiers(() => {
              }, ["stop"])
            }, [
              renderSlot(_ctx.$slots, "footer")
            ], 10, ["onClick"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__file", "select.vue"]]);
const _sfc_main$9 = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref(null);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const visible = computed(() => children.value.some((option) => option.visible === true));
    const isOption = (node) => {
      var _a, _b;
      return ((_a = node.type) == null ? void 0 : _a.name) === "ElOption" && !!((_b = node.component) == null ? void 0 : _b.proxy);
    };
    const flattedChildren = (node) => {
      const Nodes = castArray(node);
      const children2 = [];
      Nodes.forEach((child) => {
        var _a, _b;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if ((_a = child.children) == null ? void 0 : _a.length) {
          children2.push(...flattedChildren(child.children));
        } else if ((_b = child.component) == null ? void 0 : _b.subTree) {
          children2.push(...flattedChildren(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren(instance.subTree);
    };
    onMounted(() => {
      updateChildren();
    });
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    ref: "groupRef",
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createBaseVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createBaseVNode("li", null, [
      createBaseVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render], ["__file", "option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: isValidComponentSize
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: iconPropType
  },
  activeActionIcon: {
    type: iconPropType
  },
  activeIcon: {
    type: iconPropType
  },
  inactiveIcon: {
    type: iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  beforeChange: {
    type: definePropType(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...useAriaProps(["ariaLabel"])
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
const COMPONENT_NAME = "ElSwitch";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = useFormItem();
    const switchSize = useFormSize();
    const ns = useNamespace("switch");
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useFormDisabled(computed(() => props.loading));
    const isControlled = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const labelLeftKls = computed(() => [
      ns.e("label"),
      ns.em("label", "left"),
      ns.is("active", !checked.value)
    ]);
    const labelRightKls = computed(() => [
      ns.e("label"),
      ns.em("label", "right"),
      ns.is("active", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    watch(() => props.modelValue, () => {
      isControlled.value = true;
    });
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : false;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, (val) => {
      var _a;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    onMounted(() => {
      input.value.checked = checked.value;
    });
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        onClick: withModifiers(switchValue, ["prevent"])
      }, [
        createBaseVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          "aria-label": _ctx.ariaLabel,
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: withKeys(switchValue, ["enter"])
        }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(labelLeftKls))
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, ["aria-hidden"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(ns).is("text")),
              "aria-hidden": !unref(checked)
            }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, ["aria-hidden"])) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(ns).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(loading_default))
              ]),
              _: 1
            }, 8, ["class"])) : unref(checked) ? renderSlot(_ctx.$slots, "active-action", { key: 1 }, () => [
              _ctx.activeActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : !unref(checked) ? renderSlot(_ctx.$slots, "inactive-action", { key: 2 }, () => [
              _ctx.inactiveActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(labelRightKls))
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, ["aria-hidden"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 10, ["onClick"]);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "switch.vue"]]);
const ElSwitch = withInstall(Switch);
const _imports_0$1 = "" + new URL("../images/toolbar.png", import.meta.url).href;
const _hoisted_1$6 = { class: "h-10 flex items-center justify-between px-4 border rounded-md" };
const _hoisted_2$6 = { class: "flex items-center justify-between py-3 mt-2" };
const _hoisted_3$4 = { class: "sort-icon cursor-move" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "toolbar",
  setup(__props) {
    const settingStore = useBrowserSettingStore();
    return (_ctx, _cache) => {
      const _component_el_switch = ElSwitch;
      const _component_el_button = ElButton;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_tooltip = ElTooltip;
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[6] || (_cache[6] = createBaseVNode("img", {
          class: "h-[280px] bg-[#E5ECFF] rounded-lg",
          src: _imports_0$1
        }, null, -1)),
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "flex items-center justify-between py-3 mt-2" }, [
          createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "启用/禁用")
        ], -1)),
        createBaseVNode("div", _hoisted_1$6, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-sm text-[#1D1E1F]" }, "启用网页工具栏", -1)),
          createVNode(_component_el_switch, {
            modelValue: unref(settingStore).toolbar_enabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settingStore).toolbar_enabled = $event)
          }, null, 8, ["modelValue"])
        ]),
        unref(settingStore).toolbar_enabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_2$6, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "工具栏", -1)),
            createVNode(_component_el_button, {
              type: "primary",
              plain: "",
              class: "!border-none"
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("系统内置")
              ])),
              _: 1
            })
          ]),
          createVNode(_sfc_main$e, {
            modelValue: unref(settingStore).toolbar_menus,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settingStore).toolbar_menus = $event),
            identity: "value",
            class: "flex flex-col gap-2"
          }, {
            item: withCtx(({ item, index: index2 }) => [
              createVNode(_component_el_input, {
                size: "large",
                modelValue: item.name,
                "onUpdate:modelValue": ($event) => item.name = $event
              }, {
                prefix: withCtx(() => [
                  createBaseVNode("div", _hoisted_3$4, [
                    createVNode(_component_svg_icon, {
                      size: "18",
                      name: "drag",
                      class: "cursor-move"
                    })
                  ])
                ]),
                suffix: withCtx(() => [
                  createVNode(_component_el_tooltip, {
                    content: "系统内置不可编辑",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_svg_icon, {
                        size: "16",
                        name: "edit",
                        class: "cursor-pointer",
                        onClick: withModifiers(($event) => _ctx.handleEdit(item), ["stop"])
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_icon, {
                    color: "#1D1E1F",
                    class: "ml-2 cursor-pointer",
                    onClick: withModifiers(($event) => _ctx.handleDel(item, index2), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(delete_default))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 64)) : createCommentVNode("", true),
        createVNode(_component_el_button, {
          type: "primary",
          plain: "",
          class: "!border-none mt-4"
        }, {
          default: withCtx(() => _cache[5] || (_cache[5] = [
            createTextVNode("+添加")
          ])),
          _: 1
        })
      ], 64);
    };
  }
});
const _imports_0 = "" + new URL("../images/glider.png", import.meta.url).href;
const _hoisted_1$5 = { class: "flex flex-col gap-2" };
const _hoisted_2$5 = { class: "h-10 flex items-center justify-between px-4 border rounded-md" };
const _hoisted_3$3 = {
  key: 0,
  class: "h-10 flex items-center justify-between px-4 border rounded-md"
};
const _hoisted_4$3 = { class: "text-sm text-[#1D1E1F]" };
const _hoisted_5$3 = { class: "flex items-center justify-between py-3 mt-2" };
const _hoisted_6$3 = { class: "sort-icon cursor-move" };
const _hoisted_7$3 = { class: "text-xs text-[#9A9A9A]" };
const _hoisted_8$2 = { class: "flex-center" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "glider",
  setup(__props) {
    const settingStore = useBrowserSettingStore();
    const formRef = ref();
    const visible = ref(false);
    const form = ref({
      name: "",
      value: ""
    });
    const handleAdd = () => {
      form.value.name = "";
      form.value.value = "";
      visible.value = true;
    };
    const handleEdit = (item) => {
      form.value.name = item.name;
      form.value.value = item.value;
      visible.value = true;
    };
    const handleDel = async (item, index2) => {
      await ElMessageBox.confirm("确认删除吗？");
      settingStore.glider_menus.splice(index2, 1);
    };
    const handleSave = () => {
      formRef.value.validate((valid) => {
        if (!valid)
          return;
        settingStore.glider_menus.push(form.value);
        visible.value = false;
      });
    };
    return (_ctx, _cache) => {
      const _component_el_switch = ElSwitch;
      const _component_el_icon = ElIcon;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      const _component_el_button = ElButton;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_tooltip = ElTooltip;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[19] || (_cache[19] = createBaseVNode("img", {
          class: "h-[160px] bg-[#E5ECFF] rounded-lg",
          src: _imports_0
        }, null, -1)),
        _cache[20] || (_cache[20] = createBaseVNode("div", { class: "flex items-center justify-between py-3 mt-2" }, [
          createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "启用/禁用")
        ], -1)),
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$5, [
            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-sm text-[#1D1E1F]" }, "启用划词菜单栏", -1)),
            createVNode(_component_el_switch, {
              modelValue: unref(settingStore).glider_enabled,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settingStore).glider_enabled = $event)
            }, null, 8, ["modelValue"])
          ]),
          unref(settingStore).glider_enabled ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
            _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-sm text-[#1D1E1F]" }, "唤起方式", -1)),
            createVNode(_component_el_dropdown, { trigger: "click" }, {
              dropdown: withCtx(() => [
                createVNode(_component_el_dropdown_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("划词后立即唤起")
                      ])),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => _cache[9] || (_cache[9] = [
                        createTextVNode("划词后按快捷键唤起")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4$3, [
                  _cache[7] || (_cache[7] = createTextVNode(" 划词立即唤起 ")),
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_down_default))
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ]),
        unref(settingStore).glider_enabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_5$3, [
            _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "菜单栏", -1)),
            createVNode(_component_el_button, {
              type: "primary",
              plain: "",
              class: "!border-none"
            }, {
              default: withCtx(() => _cache[11] || (_cache[11] = [
                createTextVNode("系统内置")
              ])),
              _: 1
            })
          ]),
          createVNode(_sfc_main$e, {
            modelValue: unref(settingStore).glider_menus,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settingStore).glider_menus = $event),
            identity: "value",
            class: "flex flex-col gap-2"
          }, {
            item: withCtx(({ item, index: index2 }) => [
              createVNode(_component_el_input, {
                size: "large",
                modelValue: item.name,
                "onUpdate:modelValue": ($event) => item.name = $event
              }, {
                prefix: withCtx(() => [
                  createBaseVNode("div", _hoisted_6$3, [
                    createVNode(_component_svg_icon, {
                      size: "18",
                      name: "drag",
                      class: "cursor-move"
                    })
                  ])
                ]),
                suffix: withCtx(() => [
                  createVNode(_component_el_tooltip, {
                    content: "系统内置不可编辑",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_svg_icon, {
                        size: "16",
                        name: "edit",
                        class: "cursor-pointer",
                        onClick: withModifiers(($event) => handleEdit(item), ["stop"])
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_icon, {
                    color: "#1D1E1F",
                    class: "ml-2 cursor-pointer",
                    onClick: withModifiers(($event) => handleDel(item, index2), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(delete_default))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createBaseVNode("div", null, [
            createVNode(_component_el_button, {
              type: "primary",
              plain: "",
              class: "!border-none mt-4",
              onClick: handleAdd
            }, {
              default: withCtx(() => _cache[13] || (_cache[13] = [
                createTextVNode("+添加")
              ])),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "primary",
              plain: "",
              class: "!border-none mt-4"
            }, {
              default: withCtx(() => _cache[14] || (_cache[14] = [
                createTextVNode("官方工具库")
              ])),
              _: 1
            })
          ])
        ], 64)) : createCommentVNode("", true),
        createVNode(_component_el_dialog, {
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => visible.value = $event),
          title: "添加工具",
          width: "600px"
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_8$2, [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSave
              }, {
                default: withCtx(() => _cache[17] || (_cache[17] = [
                  createTextVNode("保存")
                ])),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "default",
                onClick: _cache[4] || (_cache[4] = ($event) => visible.value = false)
              }, {
                default: withCtx(() => _cache[18] || (_cache[18] = [
                  createTextVNode("取消")
                ])),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              model: form.value,
              "label-position": "top",
              "require-asterisk-position": "right"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "工具图标和名称",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: form.value.name,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.name = $event),
                      size: "large",
                      placeholder: "请输入工具名称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "执行Agent",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: form.value.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.value = $event),
                      size: "large",
                      placeholder: "请输入工具名称"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "执行指令",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7$3, [
                      _cache[15] || (_cache[15] = createTextVNode("把 ")),
                      _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-[#2563EB]" }, "\\{\\{划词内容}}", -1)),
                      createTextVNode(" 填入到指令内容里，例如：总结以下内容：" + toDisplayString(_ctx.划词内容), 1)
                    ]),
                    createVNode(_component_el_input, {
                      class: "mt-2",
                      type: "textarea",
                      rows: 5,
                      resize: "none"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const _hoisted_1$4 = { class: "border h-[310px] rounded-md flex-center flex-col gap-3" };
const _hoisted_2$4 = { class: "text-sm text-[#9A9A9A]" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "about",
  setup(__props) {
    const version = ref("");
    const handleCheck = () => {
      window.$chat53ai.$updater({ type: "check" }).then((res) => {
        if (!res) {
          ElMessage.success(window.$t("updater.noUpdate"));
        }
      });
    };
    onMounted(() => {
      window.$chat53ai.$updater({ type: "version" }).then((res) => {
        version.value = res;
      });
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[0] || (_cache[0] = createBaseVNode("img", {
          class: "w-[68px]",
          src: "https://chat.53ai.com/images/logo-square.png",
          alt: ""
        }, null, -1)),
        _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "text-base text-[#1D1E1F]" }, "53AI 魔法菜单", -1)),
        createBaseVNode("p", _hoisted_2$4, toDisplayString(_ctx.$t("updater.currentVersion", { version: version.value })), 1),
        createVNode(_component_el_button, {
          type: "primary",
          onClick: handleCheck
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t("updater.checkUpdate")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "h-10 flex items-center justify-between px-4 border rounded-md" };
const _hoisted_2$3 = { class: "h-10 flex items-center justify-between px-4 border rounded-md mt-2" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "common",
  setup(__props) {
    const settingStore = useBrowserSettingStore();
    return (_ctx, _cache) => {
      const _component_el_switch = ElSwitch;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "flex items-center justify-between pb-3" }, [
          createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "通用设置")
        ], -1)),
        createBaseVNode("div", _hoisted_1$3, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-sm text-[#1D1E1F]" }, "开机自动启动", -1)),
          createVNode(_component_el_switch, {
            modelValue: unref(settingStore).boot_up_enabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settingStore).boot_up_enabled = $event)
          }, null, 8, ["modelValue"])
        ]),
        createBaseVNode("div", _hoisted_2$3, [
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-sm text-[#1D1E1F]" }, "设置为默认浏览器", -1)),
          createVNode(_component_el_switch, {
            modelValue: unref(settingStore).default_browser_enabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settingStore).default_browser_enabled = $event)
          }, null, 8, ["modelValue"])
        ]),
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "flex items-center justify-between py-3 mt-2" }, [
          createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "默认搜索引擎")
        ], -1)),
        createVNode(_component_el_select, {
          modelValue: unref(settingStore).default_search_url,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settingStore).default_search_url = $event),
          size: "large"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_option, {
              label: "百度",
              value: "https://www.baidu.com/s?wd=_word_"
            }),
            createVNode(_component_el_option, {
              label: "百度AI",
              value: "https://chat.baidu.com/search?word=_word_"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "flex items-center justify-between py-3 mt-2" }, [
          createBaseVNode("div", { class: "text-[#1D1E1F] text-sm font-semibold" }, "新标签页设置")
        ], -1)),
        createVNode(_component_el_input, {
          size: "large",
          modelValue: unref(settingStore).default_tab_url,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settingStore).default_tab_url = $event),
          placeholder: "请填写新标签页url"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "password",
  setup(__props) {
    const formRef = ref(null);
    const form = reactive({
      newPassword: "",
      confirmPassword: ""
    });
    const rules = reactive({
      newPassword: [getPasswordRules()],
      confirmPassword: [
        {
          required: true,
          message: window.$t("form.input_placeholder") + window.$t("form.new_password_confirm"),
          trigger: "blur"
        },
        {
          validator: (_rule, value, callback) => {
            if (value !== form.newPassword) {
              callback(new Error(window.$t("form.password_not_match")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }
      ]
    });
    const handleSubmit = () => {
      return formRef.value.validate().then(async (valid) => {
        if (!valid)
          return;
        console.log("valid");
        await userApi.updatePassword({
          new_password: form.newPassword,
          confirm_password: form.confirmPassword
        }).then(() => {
          ElMessage.success(window.$t("status.success"));
        });
      });
    };
    return (_ctx, _cache) => {
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _directive_trim = resolveDirective("trim");
      const _directive_debounce = resolveDirective("debounce");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_form, {
          ref_key: "formRef",
          ref: formRef,
          "label-position": "top",
          model: form,
          rules
        }, {
          default: withCtx(() => [
            false ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(_component_el_form_item, {
                label: _ctx.$t("form.select_verify")
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio_group, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio, { label: "1" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("form.email_verify")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_radio, { label: "2" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("form.mobile_verify")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(_component_el_form_item, {
                label: _ctx.$t("form.email")
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, { size: "large" })
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(_component_el_form_item, {
                label: _ctx.$t("form.mobile")
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, { size: "large" })
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(_component_el_form_item, {
                label: _ctx.$t("form.verify_code")
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, { size: "large" }, {
                    append: withCtx(() => [
                      createVNode(_component_el_button, {
                        size: "large",
                        type: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("form.get_verify_code")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"])
            ], 64)) : createCommentVNode("", true),
            createVNode(_component_el_form_item, {
              label: _ctx.$t("form.new_password"),
              prop: "newPassword"
            }, {
              default: withCtx(() => [
                withDirectives(createVNode(_component_el_input, {
                  modelValue: form.newPassword,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.newPassword = $event),
                  type: "password",
                  size: "large",
                  "show-password": "",
                  clearable: ""
                }, null, 8, ["modelValue"]), [
                  [_directive_trim]
                ])
              ]),
              _: 1
            }, 8, ["label"]),
            createVNode(_component_el_form_item, {
              label: _ctx.$t("form.new_password_confirm"),
              prop: "confirmPassword"
            }, {
              default: withCtx(() => [
                withDirectives(createVNode(_component_el_input, {
                  modelValue: form.confirmPassword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.confirmPassword = $event),
                  type: "password",
                  size: "large",
                  "show-password": "",
                  clearable: ""
                }, null, 8, ["modelValue"]), [
                  [_directive_trim]
                ])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }, 8, ["model", "rules"]),
        withDirectives((openBlock(), createBlock(_component_el_button, {
          type: "primary",
          class: "mt-5",
          size: "large",
          onClick: handleSubmit
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t("action.save")), 1)
          ]),
          _: 1
        })), [
          [_directive_debounce]
        ])
      ], 64);
    };
  }
});
const Y = {};
Y.getData = (t) => new Promise((e, i) => {
  let s = {};
  L(t).then((r) => {
    s.arrayBuffer = r;
    try {
      s.orientation = N(r);
    } catch {
      s.orientation = -1;
    }
    e(s);
  }).catch((r) => {
    i(r);
  });
});
function L(t) {
  let e = null;
  return new Promise((i, s) => {
    if (t.src)
      if (/^data\:/i.test(t.src))
        e = k(t.src), i(e);
      else if (/^blob\:/i.test(t.src)) {
        var r = new FileReader();
        r.onload = function(h) {
          e = h.target.result, i(e);
        }, E(t.src, function(h) {
          r.readAsArrayBuffer(h);
        });
      } else {
        var o = new XMLHttpRequest();
        o.onload = function() {
          if (this.status == 200 || this.status === 0)
            e = o.response, i(e);
          else
            throw "Could not load image";
          o = null;
        }, o.open("GET", t.src, true), o.responseType = "arraybuffer", o.send(null);
      }
    else
      s("img error");
  });
}
function E(t, e) {
  var i = new XMLHttpRequest();
  i.open("GET", t, true), i.responseType = "blob", i.onload = function(s) {
    (this.status == 200 || this.status === 0) && e(this.response);
  }, i.send();
}
function k(t, e) {
  e = e || t.match(/^data\:([^\;]+)\;base64,/mi)[1] || "", t = t.replace(/^data\:([^\;]+)\;base64,/gmi, "");
  for (var i = atob(t), s = i.length % 2 == 0 ? i.length : i.length + 1, r = new ArrayBuffer(s), o = new Uint16Array(r), h = 0; h < s; h++)
    o[h] = i.charCodeAt(h);
  return r;
}
function T(t, e, i) {
  var s = "", r;
  for (r = e, i += e; r < i; r++)
    s += String.fromCharCode(t.getUint8(r));
  return s;
}
function N(t) {
  var e = new DataView(t), i = e.byteLength, s, r, o, h, a, n, c, l, f, p;
  if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
    for (f = 2; f < i; ) {
      if (e.getUint8(f) === 255 && e.getUint8(f + 1) === 225) {
        c = f;
        break;
      }
      f++;
    }
  if (c && (r = c + 4, o = c + 10, T(e, r, 4) === "Exif" && (n = e.getUint16(o), a = n === 18761, (a || n === 19789) && e.getUint16(o + 2, a) === 42 && (h = e.getUint32(o + 4, a), h >= 8 && (l = o + h)))), l) {
    for (i = e.getUint16(l, a), p = 0; p < i; p++)
      if (f = l + p * 12 + 2, e.getUint16(f, a) === 274) {
        f += 8, s = e.getUint16(f, a);
        break;
      }
  }
  return s;
}
const $ = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, r] of e)
    i[s] = r;
  return i;
}, z = defineComponent({
  data: function() {
    return {
      // 容器高宽
      w: 0,
      h: 0,
      // 图片缩放比例
      scale: 1,
      // 图片偏移x轴
      x: 0,
      // 图片偏移y轴
      y: 0,
      // 图片加载
      loading: true,
      // 图片真实宽度
      trueWidth: 0,
      // 图片真实高度
      trueHeight: 0,
      move: true,
      // 移动的x
      moveX: 0,
      // 移动的y
      moveY: 0,
      // 开启截图
      crop: false,
      // 正在截图
      cropping: false,
      // 裁剪框大小
      cropW: 0,
      cropH: 0,
      cropOldW: 0,
      cropOldH: 0,
      // 判断是否能够改变
      canChangeX: false,
      canChangeY: false,
      // 改变的基准点
      changeCropTypeX: 1,
      changeCropTypeY: 1,
      // 裁剪框的坐标轴
      cropX: 0,
      cropY: 0,
      cropChangeX: 0,
      cropChangeY: 0,
      cropOffsertX: 0,
      cropOffsertY: 0,
      // 支持的滚动事件
      support: "",
      // 移动端手指缩放
      touches: [],
      touchNow: false,
      // 图片旋转
      rotate: 0,
      isIos: false,
      orientation: 0,
      imgs: "",
      // 图片缩放系数
      coe: 0.2,
      // 是否正在多次缩放
      scaling: false,
      scalingSet: "",
      coeStatus: "",
      // 控制emit触发频率
      isCanShow: true,
      // 图片是否等于截图大小
      imgIsQqualCrop: false
    };
  },
  props: {
    img: {
      type: [String, Blob, null, File],
      default: ""
    },
    // 输出图片压缩比
    outputSize: {
      type: Number,
      default: 1
    },
    outputType: {
      type: String,
      default: "jpeg"
    },
    info: {
      type: Boolean,
      default: true
    },
    // 是否开启滚轮放大缩小
    canScale: {
      type: Boolean,
      default: true
    },
    // 是否自成截图框
    autoCrop: {
      type: Boolean,
      default: false
    },
    autoCropWidth: {
      type: [Number, String],
      default: 0
    },
    autoCropHeight: {
      type: [Number, String],
      default: 0
    },
    // 是否开启固定宽高比
    fixed: {
      type: Boolean,
      default: false
    },
    // 宽高比 w/h
    fixedNumber: {
      type: Array,
      default: () => [1, 1]
    },
    // 固定大小 禁止改变截图框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    // 输出截图是否缩放
    full: {
      type: Boolean,
      default: false
    },
    // 是否可以拖动图片
    canMove: {
      type: Boolean,
      default: true
    },
    // 是否可以拖动截图框
    canMoveBox: {
      type: Boolean,
      default: true
    },
    // 上传图片按照原始比例显示
    original: {
      type: Boolean,
      default: false
    },
    // 截图框能否超过图片
    centerBox: {
      type: Boolean,
      default: false
    },
    // 是否根据dpr输出高清图片
    high: {
      type: Boolean,
      default: true
    },
    // 截图框展示宽高类型
    infoTrue: {
      type: Boolean,
      default: false
    },
    // 可以压缩图片宽高  默认不超过200
    maxImgSize: {
      type: [Number, String],
      default: 2e3
    },
    // 倍数  可渲染当前截图框的n倍 0 - 1000;
    enlarge: {
      type: [Number, String],
      default: 1
    },
    // 自动预览的固定宽度
    preW: {
      type: [Number, String],
      default: 0
    },
    /*
      图片布局方式 mode 实现和css背景一样的效果
      contain  居中布局 默认不会缩放 保证图片在容器里面 mode: 'contain'
      cover    拉伸布局 填充整个容器  mode: 'cover'
      如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为auto。 mode: '50px'
      如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。 mode: '50px 60px'
    */
    mode: {
      type: String,
      default: "contain"
    },
    //限制最小区域,可传1以上的数字和字符串，限制长宽都是这么大
    // 也可以传数组[90,90] 
    limitMinSize: {
      type: [Number, Array, String],
      default: () => 10,
      validator: function(t) {
        return Array.isArray(t) ? Number(t[0]) >= 0 && Number(t[1]) >= 0 : Number(t) >= 0;
      }
    },
    // 导出时,填充背景颜色
    fillColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    cropInfo() {
      let t = {};
      if (t.top = this.cropOffsertY > 21 ? "-21px" : "0px", t.width = this.cropW > 0 ? this.cropW : 0, t.height = this.cropH > 0 ? this.cropH : 0, this.infoTrue) {
        let e = 1;
        this.high && !this.full && (e = window.devicePixelRatio), this.enlarge !== 1 & !this.full && (e = Math.abs(Number(this.enlarge))), t.width = t.width * e, t.height = t.height * e, this.full && (t.width = t.width / this.scale, t.height = t.height / this.scale);
      }
      return t.width = t.width.toFixed(0), t.height = t.height.toFixed(0), t;
    },
    isIE() {
      return !!window.ActiveXObject || "ActiveXObject" in window;
    },
    passive() {
      return this.isIE ? null : {
        passive: false
      };
    },
    // 是否处于左右旋转
    isRotateRightOrLeft() {
      return [1, -1, 3, -3].includes(this.rotate);
    }
  },
  watch: {
    // 如果图片改变， 重新布局
    img() {
      this.checkedImg();
    },
    imgs(t) {
      t !== "" && this.reload();
    },
    cropW() {
      this.showPreview();
    },
    cropH() {
      this.showPreview();
    },
    cropOffsertX() {
      this.showPreview();
    },
    cropOffsertY() {
      this.showPreview();
    },
    scale(t, e) {
      this.showPreview();
    },
    x() {
      this.showPreview();
    },
    y() {
      this.showPreview();
    },
    autoCrop(t) {
      t && this.goAutoCrop();
    },
    // 修改了自动截图框
    autoCropWidth() {
      this.autoCrop && this.goAutoCrop();
    },
    autoCropHeight() {
      this.autoCrop && this.goAutoCrop();
    },
    mode() {
      this.checkedImg();
    },
    rotate() {
      this.showPreview(), this.autoCrop ? this.goAutoCrop(this.cropW, this.cropH) : (this.cropW > 0 || this.cropH > 0) && this.goAutoCrop(this.cropW, this.cropH);
    }
  },
  methods: {
    getVersion(t) {
      var e = navigator.userAgent.split(" "), i = "";
      let s = 0;
      const r = new RegExp(t, "i");
      for (var o = 0; o < e.length; o++)
        r.test(e[o]) && (i = e[o]);
      return i ? s = i.split("/")[1].split(".") : s = ["0", "0", "0"], s;
    },
    checkOrientationImage(t, e, i, s) {
      if (this.getVersion("chrome")[0] >= 81)
        e = -1;
      else if (this.getVersion("safari")[0] >= 605) {
        const h = this.getVersion("version");
        h[0] > 13 && h[1] > 1 && (e = -1);
      } else {
        const h = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
        if (h) {
          let a = h[1];
          a = a.split("_"), (a[0] > 13 || a[0] >= 13 && a[1] >= 4) && (e = -1);
        }
      }
      let r = document.createElement("canvas"), o = r.getContext("2d");
      switch (o.save(), e) {
        case 2:
          r.width = i, r.height = s, o.translate(i, 0), o.scale(-1, 1);
          break;
        case 3:
          r.width = i, r.height = s, o.translate(i / 2, s / 2), o.rotate(180 * Math.PI / 180), o.translate(-i / 2, -s / 2);
          break;
        case 4:
          r.width = i, r.height = s, o.translate(0, s), o.scale(1, -1);
          break;
        case 5:
          r.height = i, r.width = s, o.rotate(0.5 * Math.PI), o.scale(1, -1);
          break;
        case 6:
          r.width = s, r.height = i, o.translate(s / 2, i / 2), o.rotate(90 * Math.PI / 180), o.translate(-i / 2, -s / 2);
          break;
        case 7:
          r.height = i, r.width = s, o.rotate(0.5 * Math.PI), o.translate(i, -s), o.scale(-1, 1);
          break;
        case 8:
          r.height = i, r.width = s, o.translate(s / 2, i / 2), o.rotate(-90 * Math.PI / 180), o.translate(-i / 2, -s / 2);
          break;
        default:
          r.width = i, r.height = s;
      }
      o.drawImage(t, 0, 0, i, s), o.restore(), r.toBlob(
        (h) => {
          let a = URL.createObjectURL(h);
          URL.revokeObjectURL(this.imgs), this.imgs = a;
        },
        "image/" + this.outputType,
        1
      );
    },
    // checkout img
    checkedImg() {
      if (this.img === null || this.img === "") {
        this.imgs = "", this.clearCrop();
        return;
      }
      this.loading = true, this.scale = 1, this.rotate = 0, this.imgIsQqualCrop = false, this.clearCrop();
      let t = new Image();
      if (t.onload = () => {
        if (this.img === "")
          return this.$emit("img-load", new Error("图片不能为空")), false;
        let i = t.width, s = t.height;
        Y.getData(t).then((r) => {
          this.orientation = r.orientation || 1;
          let o = Number(this.maxImgSize);
          if (!this.orientation && i < o & s < o) {
            this.imgs = this.img;
            return;
          }
          i > o && (s = s / i * o, i = o), s > o && (i = i / s * o, s = o), this.checkOrientationImage(t, this.orientation, i, s);
        }).catch((r) => {
          this.$emit("img-load", "error"), this.$emit("img-load-error", r);
        });
      }, t.onerror = (i) => {
        this.$emit("img-load", "error"), this.$emit("img-load-error", i);
      }, this.img.substr(0, 4) !== "data" && (t.crossOrigin = ""), this.isIE) {
        var e = new XMLHttpRequest();
        e.onload = function() {
          var i = URL.createObjectURL(this.response);
          t.src = i;
        }, e.open("GET", this.img, true), e.responseType = "blob", e.send();
      } else
        t.src = this.img;
    },
    // 当按下鼠标键
    startMove(t) {
      if (t.preventDefault(), this.move && !this.crop) {
        if (!this.canMove)
          return false;
        this.moveX = ("clientX" in t ? t.clientX : t.touches[0].clientX) - this.x, this.moveY = ("clientY" in t ? t.clientY : t.touches[0].clientY) - this.y, t.touches ? (window.addEventListener("touchmove", this.moveImg), window.addEventListener("touchend", this.leaveImg), t.touches.length == 2 && (this.touches = t.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale))) : (window.addEventListener("mousemove", this.moveImg), window.addEventListener("mouseup", this.leaveImg)), this.$emit("img-moving", {
          moving: true,
          axis: this.getImgAxis()
        });
      } else
        this.cropping = true, window.addEventListener("mousemove", this.createCrop), window.addEventListener("mouseup", this.endCrop), window.addEventListener("touchmove", this.createCrop), window.addEventListener("touchend", this.endCrop), this.cropOffsertX = t.offsetX ? t.offsetX : t.touches[0].pageX - this.$refs.cropper.offsetLeft, this.cropOffsertY = t.offsetY ? t.offsetY : t.touches[0].pageY - this.$refs.cropper.offsetTop, this.cropX = "clientX" in t ? t.clientX : t.touches[0].clientX, this.cropY = "clientY" in t ? t.clientY : t.touches[0].clientY, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.cropW = 0, this.cropH = 0;
    },
    // 移动端缩放
    touchScale(t) {
      t.preventDefault();
      let e = this.scale;
      var i = {
        x: this.touches[0].clientX,
        y: this.touches[0].clientY
      }, s = {
        x: t.touches[0].clientX,
        y: t.touches[0].clientY
      }, r = {
        x: this.touches[1].clientX,
        y: this.touches[1].clientY
      }, o = {
        x: t.touches[1].clientX,
        y: t.touches[1].clientY
      }, h = Math.sqrt(
        Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)
      ), a = Math.sqrt(
        Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2)
      ), n = a - h, c = 1;
      c = c / this.trueWidth > c / this.trueHeight ? c / this.trueHeight : c / this.trueWidth, c = c > 0.1 ? 0.1 : c;
      var l = c * n;
      if (!this.touchNow) {
        if (this.touchNow = true, n > 0 ? e += Math.abs(l) : n < 0 && e > Math.abs(l) && (e -= Math.abs(l)), this.touches = t.touches, setTimeout(() => {
          this.touchNow = false;
        }, 8), !this.checkoutImgAxis(this.x, this.y, e))
          return false;
        this.scale = e;
      }
    },
    cancelTouchScale(t) {
      window.removeEventListener("touchmove", this.touchScale);
    },
    // 移动图片
    moveImg(t) {
      if (t.preventDefault(), t.touches && t.touches.length === 2)
        return this.touches = t.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale), window.removeEventListener("touchmove", this.moveImg), false;
      let e = "clientX" in t ? t.clientX : t.touches[0].clientX, i = "clientY" in t ? t.clientY : t.touches[0].clientY, s, r;
      s = e - this.moveX, r = i - this.moveY, this.$nextTick(() => {
        if (this.centerBox) {
          let o = this.getImgAxis(s, r, this.scale), h = this.getCropAxis(), a = this.trueHeight * this.scale, n = this.trueWidth * this.scale, c, l, f, p;
          switch (this.rotate) {
            case 1:
            case -1:
            case 3:
            case -3:
              c = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2 + (a - n) / 2, l = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2 + (n - a) / 2, f = c - a + this.cropW, p = l - n + this.cropH;
              break;
            default:
              c = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2, l = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2, f = c - n + this.cropW, p = l - a + this.cropH;
              break;
          }
          o.x1 >= h.x1 && (s = c), o.y1 >= h.y1 && (r = l), o.x2 <= h.x2 && (s = f), o.y2 <= h.y2 && (r = p);
        }
        this.x = s, this.y = r, this.$emit("img-moving", {
          moving: true,
          axis: this.getImgAxis()
        });
      });
    },
    // 移动图片结束
    leaveImg(t) {
      window.removeEventListener("mousemove", this.moveImg), window.removeEventListener("touchmove", this.moveImg), window.removeEventListener("mouseup", this.leaveImg), window.removeEventListener("touchend", this.leaveImg), this.$emit("img-moving", {
        moving: false,
        axis: this.getImgAxis()
      });
    },
    // 缩放图片
    scaleImg() {
      this.canScale && window.addEventListener(this.support, this.changeSize, this.passive);
    },
    // 移出框
    cancelScale() {
      this.canScale && window.removeEventListener(this.support, this.changeSize);
    },
    // 改变大小函数
    changeSize(t) {
      t.preventDefault();
      let e = this.scale;
      var i = t.deltaY || t.wheelDelta, s = navigator.userAgent.indexOf("Firefox");
      i = s > 0 ? i * 30 : i, this.isIE && (i = -i);
      var r = this.coe;
      r = r / this.trueWidth > r / this.trueHeight ? r / this.trueHeight : r / this.trueWidth;
      var o = r * i;
      o < 0 ? e += Math.abs(o) : e > Math.abs(o) && (e -= Math.abs(o));
      let h = o < 0 ? "add" : "reduce";
      if (h !== this.coeStatus && (this.coeStatus = h, this.coe = 0.2), this.scaling || (this.scalingSet = setTimeout(() => {
        this.scaling = false, this.coe = this.coe += 0.01;
      }, 50)), this.scaling = true, !this.checkoutImgAxis(this.x, this.y, e))
        return false;
      this.scale = e;
    },
    // 修改图片大小函数
    changeScale(t) {
      let e = this.scale;
      t = t || 1;
      var i = 20;
      if (i = i / this.trueWidth > i / this.trueHeight ? i / this.trueHeight : i / this.trueWidth, t = t * i, t > 0 ? e += Math.abs(t) : e > Math.abs(t) && (e -= Math.abs(t)), !this.checkoutImgAxis(this.x, this.y, e))
        return false;
      this.scale = e;
    },
    // 创建截图框
    createCrop(t) {
      t.preventDefault();
      var e = "clientX" in t ? t.clientX : t.touches ? t.touches[0].clientX : 0, i = "clientY" in t ? t.clientY : t.touches ? t.touches[0].clientY : 0;
      this.$nextTick(() => {
        var s = e - this.cropX, r = i - this.cropY;
        if (s > 0 ? (this.cropW = s + this.cropChangeX > this.w ? this.w - this.cropChangeX : s, this.cropOffsertX = this.cropChangeX) : (this.cropW = this.w - this.cropChangeX + Math.abs(s) > this.w ? this.cropChangeX : Math.abs(s), this.cropOffsertX = this.cropChangeX + s > 0 ? this.cropChangeX + s : 0), !this.fixed)
          r > 0 ? (this.cropH = r + this.cropChangeY > this.h ? this.h - this.cropChangeY : r, this.cropOffsertY = this.cropChangeY) : (this.cropH = this.h - this.cropChangeY + Math.abs(r) > this.h ? this.cropChangeY : Math.abs(r), this.cropOffsertY = this.cropChangeY + r > 0 ? this.cropChangeY + r : 0);
        else {
          var o = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
          o + this.cropOffsertY > this.h ? (this.cropH = this.h - this.cropOffsertY, this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0], s > 0 ? this.cropOffsertX = this.cropChangeX : this.cropOffsertX = this.cropChangeX - this.cropW) : this.cropH = o, this.cropOffsertY = this.cropOffsertY;
        }
      });
    },
    // 改变截图框大小
    changeCropSize(t, e, i, s, r) {
      t.preventDefault(), window.addEventListener("mousemove", this.changeCropNow), window.addEventListener("mouseup", this.changeCropEnd), window.addEventListener("touchmove", this.changeCropNow), window.addEventListener("touchend", this.changeCropEnd), this.canChangeX = e, this.canChangeY = i, this.changeCropTypeX = s, this.changeCropTypeY = r, this.cropX = "clientX" in t ? t.clientX : t.touches[0].clientX, this.cropY = "clientY" in t ? t.clientY : t.touches[0].clientY, this.cropOldW = this.cropW, this.cropOldH = this.cropH, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.fixed && this.canChangeX && this.canChangeY && (this.canChangeY = 0), this.$emit("change-crop-size", {
        width: this.cropW,
        height: this.cropH
      });
    },
    // 正在改变
    changeCropNow(t) {
      t.preventDefault();
      var e = "clientX" in t ? t.clientX : t.touches ? t.touches[0].clientX : 0, i = "clientY" in t ? t.clientY : t.touches ? t.touches[0].clientY : 0;
      let s = this.w, r = this.h, o = 0, h = 0;
      if (this.centerBox) {
        let c = this.getImgAxis(), l = c.x2, f = c.y2;
        o = c.x1 > 0 ? c.x1 : 0, h = c.y1 > 0 ? c.y1 : 0, s > l && (s = l), r > f && (r = f);
      }
      const [a, n] = this.checkCropLimitSize();
      this.$nextTick(() => {
        var c = e - this.cropX, l = i - this.cropY;
        if (this.canChangeX && (this.changeCropTypeX === 1 ? this.cropOldW - c < a ? (this.cropW = a, this.cropOffsertX = this.cropOldW + this.cropChangeX - o - a) : this.cropOldW - c > 0 ? (this.cropW = s - this.cropChangeX - c <= s - o ? this.cropOldW - c : this.cropOldW + this.cropChangeX - o, this.cropOffsertX = s - this.cropChangeX - c <= s - o ? this.cropChangeX + c : o) : (this.cropW = Math.abs(c) + this.cropChangeX <= s ? Math.abs(c) - this.cropOldW : s - this.cropOldW - this.cropChangeX, this.cropOffsertX = this.cropChangeX + this.cropOldW) : this.changeCropTypeX === 2 && (this.cropOldW + c < a ? this.cropW = a : this.cropOldW + c > 0 ? (this.cropW = this.cropOldW + c + this.cropOffsertX <= s ? this.cropOldW + c : s - this.cropOffsertX, this.cropOffsertX = this.cropChangeX) : (this.cropW = s - this.cropChangeX + Math.abs(c + this.cropOldW) <= s - o ? Math.abs(c + this.cropOldW) : this.cropChangeX - o, this.cropOffsertX = s - this.cropChangeX + Math.abs(c + this.cropOldW) <= s - o ? this.cropChangeX - Math.abs(c + this.cropOldW) : o))), this.canChangeY && (this.changeCropTypeY === 1 ? this.cropOldH - l < n ? (this.cropH = n, this.cropOffsertY = this.cropOldH + this.cropChangeY - h - n) : this.cropOldH - l > 0 ? (this.cropH = r - this.cropChangeY - l <= r - h ? this.cropOldH - l : this.cropOldH + this.cropChangeY - h, this.cropOffsertY = r - this.cropChangeY - l <= r - h ? this.cropChangeY + l : h) : (this.cropH = Math.abs(l) + this.cropChangeY <= r ? Math.abs(l) - this.cropOldH : r - this.cropOldH - this.cropChangeY, this.cropOffsertY = this.cropChangeY + this.cropOldH) : this.changeCropTypeY === 2 && (this.cropOldH + l < n ? this.cropH = n : this.cropOldH + l > 0 ? (this.cropH = this.cropOldH + l + this.cropOffsertY <= r ? this.cropOldH + l : r - this.cropOffsertY, this.cropOffsertY = this.cropChangeY) : (this.cropH = r - this.cropChangeY + Math.abs(l + this.cropOldH) <= r - h ? Math.abs(l + this.cropOldH) : this.cropChangeY - h, this.cropOffsertY = r - this.cropChangeY + Math.abs(l + this.cropOldH) <= r - h ? this.cropChangeY - Math.abs(l + this.cropOldH) : h))), this.canChangeX && this.fixed) {
          var f = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
          f < n ? (this.cropH = n, this.cropW = this.fixedNumber[0] * n / this.fixedNumber[1], this.changeCropTypeX === 1 && (this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW))) : f + this.cropOffsertY > r ? (this.cropH = r - this.cropOffsertY, this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0], this.changeCropTypeX === 1 && (this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW))) : this.cropH = f;
        }
        if (this.canChangeY && this.fixed) {
          var p = this.cropH / this.fixedNumber[1] * this.fixedNumber[0];
          p < a ? (this.cropW = a, this.cropH = this.fixedNumber[1] * a / this.fixedNumber[0], this.cropOffsertY = this.cropOldH + this.cropChangeY - this.cropH) : p + this.cropOffsertX > s ? (this.cropW = s - this.cropOffsertX, this.cropH = this.cropW / this.fixedNumber[0] * this.fixedNumber[1]) : this.cropW = p;
        }
      });
    },
    checkCropLimitSize() {
      let { cropW: t, cropH: e, limitMinSize: i } = this, s = new Array();
      return Array.isArray(i) ? s = i : s = [i, i], t = parseFloat(s[0]), e = parseFloat(s[1]), [t, e];
    },
    // 结束改变
    changeCropEnd(t) {
      window.removeEventListener("mousemove", this.changeCropNow), window.removeEventListener("mouseup", this.changeCropEnd), window.removeEventListener("touchmove", this.changeCropNow), window.removeEventListener("touchend", this.changeCropEnd);
    },
    // 根据比例x/y，最小宽度，最小高度，现有宽度，现有高度，得到应该有的宽度和高度
    calculateSize(t, e, i, s, r, o) {
      const h = t / e;
      let a = r, n = o;
      return a < i && (a = i, n = Math.ceil(a / h)), n < s && (n = s, a = Math.ceil(n * h), a < i && (a = i, n = Math.ceil(a / h))), a < r && (a = r, n = Math.ceil(a / h)), n < o && (n = o, a = Math.ceil(n * h)), { width: a, height: n };
    },
    // 创建完成
    endCrop() {
      this.cropW === 0 && this.cropH === 0 && (this.cropping = false);
      let [t, e] = this.checkCropLimitSize();
      const { width: i, height: s } = this.fixed ? this.calculateSize(
        this.fixedNumber[0],
        this.fixedNumber[1],
        t,
        e,
        this.cropW,
        this.cropH
      ) : { width: t, height: e };
      i > this.cropW && (this.cropW = i, this.cropOffsertX + i > this.w && (this.cropOffsertX = this.w - i)), s > this.cropH && (this.cropH = s, this.cropOffsertY + s > this.h && (this.cropOffsertY = this.h - s)), window.removeEventListener("mousemove", this.createCrop), window.removeEventListener("mouseup", this.endCrop), window.removeEventListener("touchmove", this.createCrop), window.removeEventListener("touchend", this.endCrop);
    },
    // 开始截图
    startCrop() {
      this.crop = true;
    },
    // 停止截图
    stopCrop() {
      this.crop = false;
    },
    // 清除截图
    clearCrop() {
      this.cropping = false, this.cropW = 0, this.cropH = 0;
    },
    // 截图移动
    cropMove(t) {
      if (t.preventDefault(), !this.canMoveBox)
        return this.crop = false, this.startMove(t), false;
      if (t.touches && t.touches.length === 2)
        return this.crop = false, this.startMove(t), this.leaveCrop(), false;
      window.addEventListener("mousemove", this.moveCrop), window.addEventListener("mouseup", this.leaveCrop), window.addEventListener("touchmove", this.moveCrop), window.addEventListener("touchend", this.leaveCrop);
      let e = "clientX" in t ? t.clientX : t.touches[0].clientX, i = "clientY" in t ? t.clientY : t.touches[0].clientY, s, r;
      s = e - this.cropOffsertX, r = i - this.cropOffsertY, this.cropX = s, this.cropY = r, this.$emit("crop-moving", {
        moving: true,
        axis: this.getCropAxis()
      });
    },
    moveCrop(t, e) {
      let i = 0, s = 0;
      t && (t.preventDefault(), i = "clientX" in t ? t.clientX : t.touches[0].clientX, s = "clientY" in t ? t.clientY : t.touches[0].clientY), this.$nextTick(() => {
        let r, o, h = i - this.cropX, a = s - this.cropY;
        if (e && (h = this.cropOffsertX, a = this.cropOffsertY), h <= 0 ? r = 0 : h + this.cropW > this.w ? r = this.w - this.cropW : r = h, a <= 0 ? o = 0 : a + this.cropH > this.h ? o = this.h - this.cropH : o = a, this.centerBox) {
          let n = this.getImgAxis();
          r <= n.x1 && (r = n.x1), r + this.cropW > n.x2 && (r = n.x2 - this.cropW), o <= n.y1 && (o = n.y1), o + this.cropH > n.y2 && (o = n.y2 - this.cropH);
        }
        this.cropOffsertX = r, this.cropOffsertY = o, this.$emit("crop-moving", {
          moving: true,
          axis: this.getCropAxis()
        });
      });
    },
    // 算出不同场景下面 图片相对于外层容器的坐标轴
    getImgAxis(t, e, i) {
      t = t || this.x, e = e || this.y, i = i || this.scale;
      let s = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      }, r = this.trueWidth * i, o = this.trueHeight * i;
      switch (this.rotate) {
        case 0:
          s.x1 = t + this.trueWidth * (1 - i) / 2, s.x2 = s.x1 + this.trueWidth * i, s.y1 = e + this.trueHeight * (1 - i) / 2, s.y2 = s.y1 + this.trueHeight * i;
          break;
        case 1:
        case -1:
        case 3:
        case -3:
          s.x1 = t + this.trueWidth * (1 - i) / 2 + (r - o) / 2, s.x2 = s.x1 + this.trueHeight * i, s.y1 = e + this.trueHeight * (1 - i) / 2 + (o - r) / 2, s.y2 = s.y1 + this.trueWidth * i;
          break;
        default:
          s.x1 = t + this.trueWidth * (1 - i) / 2, s.x2 = s.x1 + this.trueWidth * i, s.y1 = e + this.trueHeight * (1 - i) / 2, s.y2 = s.y1 + this.trueHeight * i;
          break;
      }
      return s;
    },
    // 获取截图框的坐标轴
    getCropAxis() {
      let t = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      return t.x1 = this.cropOffsertX, t.x2 = t.x1 + this.cropW, t.y1 = this.cropOffsertY, t.y2 = t.y1 + this.cropH, t;
    },
    leaveCrop(t) {
      window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.$emit("crop-moving", {
        moving: false,
        axis: this.getCropAxis()
      });
    },
    getCropChecked(t) {
      let e = document.createElement("canvas"), i = e.getContext("2d"), s = new Image(), r = this.rotate, o = this.trueWidth, h = this.trueHeight, a = this.cropOffsertX, n = this.cropOffsertY;
      s.onload = () => {
        if (this.cropW !== 0) {
          let p = 1;
          this.high & !this.full && (p = window.devicePixelRatio), this.enlarge !== 1 & !this.full && (p = Math.abs(Number(this.enlarge)));
          let d = this.cropW * p, C = this.cropH * p, u = o * this.scale * p, g = h * this.scale * p, m = (this.x - a + this.trueWidth * (1 - this.scale) / 2) * p, v = (this.y - n + this.trueHeight * (1 - this.scale) / 2) * p;
          switch (f(d, C), i.save(), r) {
            case 0:
              this.full ? (f(d / this.scale, C / this.scale), i.drawImage(
                s,
                m / this.scale,
                v / this.scale,
                u / this.scale,
                g / this.scale
              )) : i.drawImage(s, m, v, u, g);
              break;
            case 1:
            case -3:
              this.full ? (f(d / this.scale, C / this.scale), m = m / this.scale + (u / this.scale - g / this.scale) / 2, v = v / this.scale + (g / this.scale - u / this.scale) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(
                s,
                v,
                -m - g / this.scale,
                u / this.scale,
                g / this.scale
              )) : (m = m + (u - g) / 2, v = v + (g - u) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, v, -m - g, u, g));
              break;
            case 2:
            case -2:
              this.full ? (f(d / this.scale, C / this.scale), i.rotate(r * 90 * Math.PI / 180), m = m / this.scale, v = v / this.scale, i.drawImage(
                s,
                -m - u / this.scale,
                -v - g / this.scale,
                u / this.scale,
                g / this.scale
              )) : (i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -m - u, -v - g, u, g));
              break;
            case 3:
            case -1:
              this.full ? (f(d / this.scale, C / this.scale), m = m / this.scale + (u / this.scale - g / this.scale) / 2, v = v / this.scale + (g / this.scale - u / this.scale) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(
                s,
                -v - u / this.scale,
                m,
                u / this.scale,
                g / this.scale
              )) : (m = m + (u - g) / 2, v = v + (g - u) / 2, i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -v - u, m, u, g));
              break;
            default:
              this.full ? (f(d / this.scale, C / this.scale), i.drawImage(
                s,
                m / this.scale,
                v / this.scale,
                u / this.scale,
                g / this.scale
              )) : i.drawImage(s, m, v, u, g);
          }
          i.restore();
        } else {
          let p = o * this.scale, d = h * this.scale;
          switch (i.save(), r) {
            case 0:
              f(p, d), i.drawImage(s, 0, 0, p, d);
              break;
            case 1:
            case -3:
              f(d, p), i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, 0, -d, p, d);
              break;
            case 2:
            case -2:
              f(p, d), i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -p, -d, p, d);
              break;
            case 3:
            case -1:
              f(d, p), i.rotate(r * 90 * Math.PI / 180), i.drawImage(s, -p, 0, p, d);
              break;
            default:
              f(p, d), i.drawImage(s, 0, 0, p, d);
          }
          i.restore();
        }
        t(e);
      };
      var c = this.img.substr(0, 4);
      c !== "data" && (s.crossOrigin = "Anonymous"), s.src = this.imgs;
      const l = this.fillColor;
      function f(p, d) {
        e.width = Math.round(p), e.height = Math.round(d), l && (i.fillStyle = l, i.fillRect(0, 0, e.width, e.height));
      }
    },
    // 获取转换成base64 的图片信息
    getCropData(t) {
      this.getCropChecked((e) => {
        t(e.toDataURL("image/" + this.outputType, this.outputSize));
      });
    },
    //canvas获取为blob对象
    getCropBlob(t) {
      this.getCropChecked((e) => {
        e.toBlob(
          (i) => t(i),
          "image/" + this.outputType,
          this.outputSize
        );
      });
    },
    // 自动预览函数
    showPreview() {
      if (this.isCanShow)
        this.isCanShow = false, setTimeout(() => {
          this.isCanShow = true;
        }, 16);
      else
        return false;
      let t = this.cropW, e = this.cropH, i = this.scale;
      var s = {};
      s.div = {
        width: `${t}px`,
        height: `${e}px`
      };
      let r = (this.x - this.cropOffsertX) / i, o = (this.y - this.cropOffsertY) / i, h = 0;
      s.w = t, s.h = e, s.url = this.imgs, s.img = {
        width: `${this.trueWidth}px`,
        height: `${this.trueHeight}px`,
        transform: `scale(${i})translate3d(${r}px, ${o}px, ${h}px)rotateZ(${this.rotate * 90}deg)`
      }, s.html = `
      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">
        <div style="width: ${t}px; height: ${e}px">
          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${i})translate3d(${r}px, ${o}px, ${h}px)rotateZ(${this.rotate * 90}deg)">
        </div>
      </div>`, this.$emit("real-time", s);
    },
    // reload 图片布局函数
    reload() {
      let t = new Image();
      t.onload = () => {
        this.w = parseFloat(window.getComputedStyle(this.$refs.cropper).width), this.h = parseFloat(window.getComputedStyle(this.$refs.cropper).height), this.trueWidth = t.width, this.trueHeight = t.height, this.original ? this.scale = 1 : this.scale = this.checkedMode(), this.$nextTick(() => {
          this.x = -(this.trueWidth - this.trueWidth * this.scale) / 2 + (this.w - this.trueWidth * this.scale) / 2, this.y = -(this.trueHeight - this.trueHeight * this.scale) / 2 + (this.h - this.trueHeight * this.scale) / 2, this.loading = false, this.autoCrop && this.goAutoCrop(), this.$emit("img-load", "success"), setTimeout(() => {
            this.showPreview();
          }, 20);
        });
      }, t.onerror = () => {
        this.$emit("img-load", "error");
      }, t.src = this.imgs;
    },
    // 背景布局的函数
    checkedMode() {
      let t = 1, e = this.trueWidth, i = this.trueHeight;
      const s = this.mode.split(" ");
      switch (s[0]) {
        case "contain":
          this.trueWidth > this.w && (t = this.w / this.trueWidth), this.trueHeight * t > this.h && (t = this.h / this.trueHeight);
          break;
        case "cover":
          e = this.w, t = e / this.trueWidth, i = i * t, i < this.h && (i = this.h, t = i / this.trueHeight);
          break;
        default:
          try {
            let r = s[0];
            if (r.search("px") !== -1) {
              r = r.replace("px", ""), e = parseFloat(r);
              const o = e / this.trueWidth;
              let h = 1, a = s[1];
              a.search("px") !== -1 && (a = a.replace("px", ""), i = parseFloat(a), h = i / this.trueHeight), t = Math.min(o, h);
            }
            if (r.search("%") !== -1 && (r = r.replace("%", ""), e = parseFloat(r) / 100 * this.w, t = e / this.trueWidth), s.length === 2 && r === "auto") {
              let o = s[1];
              o.search("px") !== -1 && (o = o.replace("px", ""), i = parseFloat(o), t = i / this.trueHeight), o.search("%") !== -1 && (o = o.replace("%", ""), i = parseFloat(o) / 100 * this.h, t = i / this.trueHeight);
            }
          } catch {
            t = 1;
          }
      }
      return t;
    },
    // 自动截图函数
    goAutoCrop(t, e) {
      if (this.imgs === "" || this.imgs === null)
        return;
      this.clearCrop(), this.cropping = true;
      let i = this.w, s = this.h;
      if (this.centerBox) {
        const h = Math.abs(this.rotate) % 2 > 0;
        let a = (h ? this.trueHeight : this.trueWidth) * this.scale, n = (h ? this.trueWidth : this.trueHeight) * this.scale;
        i = a < i ? a : i, s = n < s ? n : s;
      }
      var r = t || parseFloat(this.autoCropWidth), o = e || parseFloat(this.autoCropHeight);
      (r === 0 || o === 0) && (r = i * 0.8, o = s * 0.8), r = r > i ? i : r, o = o > s ? s : o, this.fixed && (o = r / this.fixedNumber[0] * this.fixedNumber[1]), o > this.h && (o = this.h, r = o / this.fixedNumber[1] * this.fixedNumber[0]), this.changeCrop(r, o);
    },
    // 手动改变截图框大小函数
    changeCrop(t, e) {
      if (this.centerBox) {
        let i = this.getImgAxis();
        t > i.x2 - i.x1 && (t = i.x2 - i.x1, e = t / this.fixedNumber[0] * this.fixedNumber[1]), e > i.y2 - i.y1 && (e = i.y2 - i.y1, t = e / this.fixedNumber[1] * this.fixedNumber[0]);
      }
      this.cropW = t, this.cropH = e, this.checkCropLimitSize(), this.$nextTick(() => {
        this.cropOffsertX = (this.w - this.cropW) / 2, this.cropOffsertY = (this.h - this.cropH) / 2, this.centerBox && this.moveCrop(null, true);
      });
    },
    // 重置函数， 恢复组件置初始状态
    refresh() {
      this.img, this.imgs = "", this.scale = 1, this.crop = false, this.rotate = 0, this.w = 0, this.h = 0, this.trueWidth = 0, this.trueHeight = 0, this.imgIsQqualCrop = false, this.clearCrop(), this.$nextTick(() => {
        this.checkedImg();
      });
    },
    // 向左边旋转
    rotateLeft() {
      this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
    },
    // 向右边旋转
    rotateRight() {
      this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1;
    },
    // 清除旋转
    rotateClear() {
      this.rotate = 0;
    },
    // 图片坐标点校验
    checkoutImgAxis(t, e, i) {
      t = t || this.x, e = e || this.y, i = i || this.scale;
      let s = true;
      if (this.centerBox) {
        let r = this.getImgAxis(t, e, i), o = this.getCropAxis();
        r.x1 >= o.x1 && (s = false), r.x2 <= o.x2 && (s = false), r.y1 >= o.y1 && (s = false), r.y2 <= o.y2 && (s = false), s || this.changeImgScale(r, o, i);
      }
      return s;
    },
    // 缩放图片，将图片坐标适配截图框坐标
    changeImgScale(t, e, i) {
      let s = this.trueWidth, r = this.trueHeight, o = s * i, h = r * i;
      if (o >= this.cropW && h >= this.cropH)
        this.scale = i;
      else {
        const a = this.cropW / s, n = this.cropH / r, c = this.cropH <= r * a ? a : n;
        this.scale = c, o = s * c, h = r * c;
      }
      this.imgIsQqualCrop || (t.x1 >= e.x1 && (this.isRotateRightOrLeft ? this.x = e.x1 - (s - o) / 2 - (o - h) / 2 : this.x = e.x1 - (s - o) / 2), t.x2 <= e.x2 && (this.isRotateRightOrLeft ? this.x = e.x1 - (s - o) / 2 - (o - h) / 2 - h + this.cropW : this.x = e.x2 - (s - o) / 2 - o), t.y1 >= e.y1 && (this.isRotateRightOrLeft ? this.y = e.y1 - (r - h) / 2 - (h - o) / 2 : this.y = e.y1 - (r - h) / 2), t.y2 <= e.y2 && (this.isRotateRightOrLeft ? this.y = e.y2 - (r - h) / 2 - (h - o) / 2 - o : this.y = e.y2 - (r - h) / 2 - h)), (o < this.cropW || h < this.cropH) && (this.imgIsQqualCrop = true);
    }
  },
  mounted() {
    this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
    let t = this;
    var e = navigator.userAgent;
    this.isIOS = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
      value: function(i, s, r) {
        for (var o = atob(this.toDataURL(s, r).split(",")[1]), h = o.length, a = new Uint8Array(h), n = 0; n < h; n++)
          a[n] = o.charCodeAt(n);
        i(new Blob([a], { type: t.type || "image/png" }));
      }
    }), this.showPreview(), this.checkedImg();
  },
  unmounted() {
    window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.cancelScale();
  }
}), A = {
  key: 0,
  class: "cropper-box"
}, B = ["src"], P = { class: "cropper-view-box" }, R = ["src"], D = { key: 1 };
function U(t, e, i, s, r, o) {
  return openBlock(), createElementBlock("div", {
    class: "vue-cropper",
    ref: "cropper",
    onMouseover: e[28] || (e[28] = (...h) => t.scaleImg && t.scaleImg(...h)),
    onMouseout: e[29] || (e[29] = (...h) => t.cancelScale && t.cancelScale(...h))
  }, [
    t.imgs ? (openBlock(), createElementBlock("div", A, [
      withDirectives(createBaseVNode("div", {
        class: "cropper-box-canvas",
        style: normalizeStyle({
          width: t.trueWidth + "px",
          height: t.trueHeight + "px",
          transform: "scale(" + t.scale + "," + t.scale + ") translate3d(" + t.x / t.scale + "px," + t.y / t.scale + "px,0)rotateZ(" + t.rotate * 90 + "deg)"
        })
      }, [
        createBaseVNode("img", {
          src: t.imgs,
          alt: "cropper-img",
          ref: "cropperImg"
        }, null, 8, B)
      ], 4), [
        [vShow, !t.loading]
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: normalizeClass(["cropper-drag-box", { "cropper-move": t.move && !t.crop, "cropper-crop": t.crop, "cropper-modal": t.cropping }]),
      onMousedown: e[0] || (e[0] = (...h) => t.startMove && t.startMove(...h)),
      onTouchstart: e[1] || (e[1] = (...h) => t.startMove && t.startMove(...h))
    }, null, 34),
    withDirectives(createBaseVNode("div", {
      class: "cropper-crop-box",
      style: normalizeStyle({
        width: t.cropW + "px",
        height: t.cropH + "px",
        transform: "translate3d(" + t.cropOffsertX + "px," + t.cropOffsertY + "px,0)"
      })
    }, [
      createBaseVNode("span", P, [
        createBaseVNode("img", {
          style: normalizeStyle({
            width: t.trueWidth + "px",
            height: t.trueHeight + "px",
            transform: "scale(" + t.scale + "," + t.scale + ") translate3d(" + (t.x - t.cropOffsertX) / t.scale + "px," + (t.y - t.cropOffsertY) / t.scale + "px,0)rotateZ(" + t.rotate * 90 + "deg)"
          }),
          src: t.imgs,
          alt: "cropper-img"
        }, null, 12, R)
      ]),
      createBaseVNode("span", {
        class: "cropper-face cropper-move",
        onMousedown: e[2] || (e[2] = (...h) => t.cropMove && t.cropMove(...h)),
        onTouchstart: e[3] || (e[3] = (...h) => t.cropMove && t.cropMove(...h))
      }, null, 32),
      t.info ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: "crop-info",
        style: normalizeStyle({ top: t.cropInfo.top })
      }, toDisplayString(t.cropInfo.width) + " × " + toDisplayString(t.cropInfo.height), 5)) : createCommentVNode("", true),
      t.fixedBox ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", D, [
        createBaseVNode("span", {
          class: "crop-line line-w",
          onMousedown: e[4] || (e[4] = (h) => t.changeCropSize(h, false, true, 0, 1)),
          onTouchstart: e[5] || (e[5] = (h) => t.changeCropSize(h, false, true, 0, 1))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-line line-a",
          onMousedown: e[6] || (e[6] = (h) => t.changeCropSize(h, true, false, 1, 0)),
          onTouchstart: e[7] || (e[7] = (h) => t.changeCropSize(h, true, false, 1, 0))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-line line-s",
          onMousedown: e[8] || (e[8] = (h) => t.changeCropSize(h, false, true, 0, 2)),
          onTouchstart: e[9] || (e[9] = (h) => t.changeCropSize(h, false, true, 0, 2))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-line line-d",
          onMousedown: e[10] || (e[10] = (h) => t.changeCropSize(h, true, false, 2, 0)),
          onTouchstart: e[11] || (e[11] = (h) => t.changeCropSize(h, true, false, 2, 0))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point1",
          onMousedown: e[12] || (e[12] = (h) => t.changeCropSize(h, true, true, 1, 1)),
          onTouchstart: e[13] || (e[13] = (h) => t.changeCropSize(h, true, true, 1, 1))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point2",
          onMousedown: e[14] || (e[14] = (h) => t.changeCropSize(h, false, true, 0, 1)),
          onTouchstart: e[15] || (e[15] = (h) => t.changeCropSize(h, false, true, 0, 1))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point3",
          onMousedown: e[16] || (e[16] = (h) => t.changeCropSize(h, true, true, 2, 1)),
          onTouchstart: e[17] || (e[17] = (h) => t.changeCropSize(h, true, true, 2, 1))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point4",
          onMousedown: e[18] || (e[18] = (h) => t.changeCropSize(h, true, false, 1, 0)),
          onTouchstart: e[19] || (e[19] = (h) => t.changeCropSize(h, true, false, 1, 0))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point5",
          onMousedown: e[20] || (e[20] = (h) => t.changeCropSize(h, true, false, 2, 0)),
          onTouchstart: e[21] || (e[21] = (h) => t.changeCropSize(h, true, false, 2, 0))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point6",
          onMousedown: e[22] || (e[22] = (h) => t.changeCropSize(h, true, true, 1, 2)),
          onTouchstart: e[23] || (e[23] = (h) => t.changeCropSize(h, true, true, 1, 2))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point7",
          onMousedown: e[24] || (e[24] = (h) => t.changeCropSize(h, false, true, 0, 2)),
          onTouchstart: e[25] || (e[25] = (h) => t.changeCropSize(h, false, true, 0, 2))
        }, null, 32),
        createBaseVNode("span", {
          class: "crop-point point8",
          onMousedown: e[26] || (e[26] = (h) => t.changeCropSize(h, true, true, 2, 2)),
          onTouchstart: e[27] || (e[27] = (h) => t.changeCropSize(h, true, true, 2, 2))
        }, null, 32)
      ]))
    ], 4), [
      [vShow, t.cropping]
    ])
  ], 544);
}
const M = /* @__PURE__ */ $(z, [["render", U], ["__scopeId", "data-v-a742df44"]]);
const _hoisted_1$2 = { class: "cropper" };
const _hoisted_2$2 = { class: "cropper_left" };
const _hoisted_3$2 = { class: "reupload_box" };
const _hoisted_4$2 = { class: "cropper_right" };
const _hoisted_5$2 = { class: "preview_text" };
const _hoisted_6$2 = ["src"];
const _hoisted_7$2 = { class: "dialog-footer" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    type: { default: "systemLogo" },
    allowTypeList: { default: () => ["jpg", "png", "jpeg"] },
    limitSize: { default: 10 },
    fixedNumber: { default: () => [1, 1] },
    fixedNumberAider: { default: () => [1, 1] },
    previewWidth: { default: 160 },
    title: { default: "图片裁剪" },
    showWidth: { default: 300 },
    showHeight: { default: 300 },
    action: { default: "ibos" },
    uploadAvatar: { type: Boolean, default: false }
  },
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const dialogVisible = ref(false);
    const options = reactive({
      img: "",
      // 需要剪裁的图片
      autoCrop: true,
      // 是否默认生成截图框
      autoCropWidth: 300,
      // 默认生成截图框的宽度
      autoCropHeight: 300,
      // 默认生成截图框的长度
      fixedBox: false,
      // 是否固定截图框的大小 不允许改变
      info: true,
      // 裁剪框的大小信息
      outputSize: 1,
      // 裁剪生成图片的质量 [1至0.1]
      outputType: "png",
      // 裁剪生成图片的格式
      canScale: true,
      // 图片是否允许滚轮缩放
      fixed: true,
      // 是否开启截图框宽高固定比例
      fixedNumber: [1, 1],
      // 截图框的宽高比例 需要配合centerBox一起使用才能生效 1比1
      full: true,
      // 是否输出原图比例的截图
      canMove: false,
      // 截图框能否拖动
      original: false,
      // 上传图片按照原始比例渲染
      centerBox: true,
      // 截图框是否被限制在图片里面
      infoTrue: true,
      // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      accept: "image/jpeg,image/jpg,image/png,image/gif,image/x-icon",
      fillColor: "transparent"
    });
    const getStyle = ref({
      width: "",
      height: ""
    });
    const acceptType = ref([]);
    const previews = ref({});
    const cropperRef = ref({});
    const reuploadInput = ref();
    const uploading = ref(false);
    const beforeUploadEvent = (file) => {
      const type = file.name.substring(file.name.lastIndexOf(".") + 1);
      const isAllowTye = props.allowTypeList.includes(type);
      if (!isAllowTye) {
        ElMessage.error(`仅支持${acceptType.value.join("、")}格式的图片`);
        return false;
      }
      return true;
    };
    const onChange = (e) => {
      const { limitSize } = props;
      const file = e.target.files[0];
      if (file.size > limitSize * 1024 * 1024)
        return ElMessage.warning(`图片上传大小不能超过${limitSize}MB`);
      const URL2 = window.URL || window.webkitURL;
      if (beforeUploadEvent(file)) {
        options.img = URL2.createObjectURL(file);
        dialogVisible.value = true;
      }
    };
    const refreshCrop = () => {
      cropperRef.value.refresh();
    };
    const rotateRight = () => {
      cropperRef.value.rotateRight();
    };
    const changeScale = (num) => {
      const scale = num || 1;
      cropperRef.value.changeScale(scale);
    };
    const uploadFile = async (type) => {
      if (uploading.value)
        return;
      if (type === "reupload") {
        reuploadInput.value?.click();
        return;
      }
      let input = document.createElement("input");
      input.type = "file";
      input.accept = options.accept;
      input.onchange = onChange;
      input.click();
      await nextTick();
      input = null;
    };
    const cropperSuccess = async (dataFile) => {
      try {
        const res = await upload.upload(dataFile);
        return res.data;
      } catch (error) {
        return {};
      }
    };
    const dataURLtoFile = (dataUrl, filename) => {
      const arr = dataUrl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let len = bstr.length;
      const u8arr = new Uint8Array(len);
      while (len--)
        u8arr[len] = bstr.charCodeAt(len);
      return new File([u8arr], filename, { type: mime });
    };
    const onConfirm = () => {
      uploading.value = true;
      cropperRef.value.getCropData(async (data) => {
        const dataFile = dataURLtoFile(data, "images.png");
        const res = await cropperSuccess(dataFile).finally(() => {
          uploading.value = false;
        });
        const url = `${window.api_host}/api/preview/${res.preview_key || ""}`;
        res.url = url;
        emits("confirm", res);
        dialogVisible.value = false;
      });
    };
    const previewHandle = (data) => {
      cropperRef.value.getCropData((data2) => {
        previews.value.img = data2;
      });
    };
    watch(
      () => props,
      () => {
        getStyle.value = {
          width: `${props.previewWidth}px`,
          // 预览宽度
          height: `${props.previewWidth / props.fixedNumber[0]}px`,
          // 预览高度
          border: "1px solid #e8e8e8",
          "border-radius": "2px"
        };
        acceptType.value = [];
        for (let i = 0; i < props.allowTypeList.length; i++)
          acceptType.value.push(props.allowTypeList[i].toUpperCase());
      },
      {
        deep: true,
        immediate: true
      }
    );
    __expose({
      uploadFile,
      open(url) {
        options.img = url;
        dialogVisible.value = true;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      const _component_el_dialog = ElDialog;
      return openBlock(), createBlock(_component_el_dialog, {
        "model-value": dialogVisible.value,
        title: _ctx.$t("common.image_cropper"),
        width: "550px",
        "close-on-click-modal": false,
        "close-on-press-escape": false,
        "append-to-body": "",
        onClose: _cache[4] || (_cache[4] = ($event) => dialogVisible.value = false)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              createVNode(unref(M), {
                ref_key: "cropperRef",
                ref: cropperRef,
                style: normalizeStyle({ width: `${_ctx.showWidth}px`, height: `${_ctx.showHeight}px` }),
                img: options.img,
                info: true,
                "info-true": options.infoTrue,
                "auto-crop": options.autoCrop,
                "fixed-box": options.fixedBox,
                "can-move": options.canMove,
                "can-scale": options.canScale,
                "fixed-number": _ctx.fixedNumber,
                fixed: options.fixed,
                full: options.full,
                "output-type": options.outputType,
                "center-box": options.centerBox,
                "fill-color": options.fillColor,
                onRealTime: previewHandle
              }, null, 8, ["style", "img", "info-true", "auto-crop", "fixed-box", "can-move", "can-scale", "fixed-number", "fixed", "full", "output-type", "center-box", "fill-color"]),
              createBaseVNode("div", _hoisted_3$2, [
                createBaseVNode("div", {
                  class: "reupload_text",
                  onClick: _cache[0] || (_cache[0] = ($event) => uploadFile("reload"))
                }, toDisplayString(_ctx.$t("action.reupload")), 1),
                createBaseVNode("div", null, [
                  createVNode(_component_el_icon, {
                    class: "rotate_right",
                    onClick: _cache[1] || (_cache[1] = ($event) => changeScale(1))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(circle_plus_default))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_icon, {
                    class: "rotate_right",
                    onClick: _cache[2] || (_cache[2] = ($event) => changeScale(-1))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(remove_default))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_icon, {
                    class: "rotate_right",
                    onClick: rotateRight
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_right_default))
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", _hoisted_5$2, toDisplayString(_ctx.$t("action.preview")), 1),
              createBaseVNode("div", {
                style: normalizeStyle(getStyle.value),
                class: "previewImg"
              }, [
                createBaseVNode("img", {
                  style: normalizeStyle(previews.value.img),
                  src: previews.value.img,
                  alt: ""
                }, null, 12, _hoisted_6$2)
              ], 4)
            ])
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("span", _hoisted_7$2, [
            createVNode(_component_el_button, {
              size: "large",
              onClick: _cache[3] || (_cache[3] = ($event) => dialogVisible.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.cancel")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              size: "large",
              type: "",
              onClick: refreshCrop
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.reset")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              size: "large",
              type: "primary",
              loading: uploading.value,
              onClick: onConfirm
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      }, 8, ["model-value", "title"]);
    };
  }
});
const CropperDialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-0ae0623a"]]);
const _hoisted_1$1 = { class: "text-2xl text-primary font-medium" };
const _hoisted_2$1 = { class: "flex items-center gap-5 mt-5" };
const _hoisted_3$1 = { class: "flex-1" };
const _hoisted_4$1 = { class: "text-2xl text-primary font-medium" };
const _hoisted_5$1 = { class: "text-sm text-secondary mt-2" };
const _hoisted_6$1 = { class: "text-2xl text-primary font-medium mt-10" };
const _hoisted_7$1 = { class: "flex flex-col gap-4 mt-5" };
const _hoisted_8$1 = { class: "h-9 flex items-center gap-2.5" };
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = { class: "flex-none w-[100px] text-base text-primary" };
const _hoisted_11$1 = { class: "flex-1 text-sm text-placeholder" };
const _hoisted_12$1 = { class: "h-9 flex items-center gap-2.5" };
const _hoisted_13 = ["src"];
const _hoisted_14 = { class: "flex-none w-[100px] text-base text-primary" };
const _hoisted_15 = { class: "flex-1 text-sm text-placeholder" };
const _hoisted_16 = { class: "h-9 flex items-center gap-2.5" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "flex-none w-[100px] text-base text-primary" };
const _hoisted_19 = { class: "flex-1 text-sm text-placeholder" };
const _hoisted_20 = { class: "h-9 flex items-center gap-2.5" };
const _hoisted_21 = ["src"];
const _hoisted_22 = { class: "flex-none w-[100px] text-base text-primary" };
const _hoisted_23 = { class: "flex-1 text-sm text-placeholder" };
const _hoisted_24 = { class: "text-2xl text-primary font-medium mt-10" };
const _hoisted_25 = { class: "flex flex-col gap-4 mt-5" };
const _hoisted_26 = { class: "h-[110px] px-6 rounded-lg flex items-center bg-[#F8F8F9]" };
const _hoisted_27 = { class: "flex-1" };
const _hoisted_28 = { class: "text-base text-primary flex items-center gap-2" };
const _hoisted_29 = { class: "text-sm text-regular" };
const _hoisted_30 = { class: "flex items-center" };
const _hoisted_31 = { class: "w-[73px] text-[#182B50] text-opacity-80" };
const _hoisted_32 = { class: "absolute bottom-0 left-0 right-0 h-5 flex justify-center items-center bg-[#000000] bg-opacity-60 text-white text-opacity-80 text-xs" };
const _hoisted_33 = { class: "flex items-center mt-6" };
const _hoisted_34 = { class: "w-[73px] text-[#182B50] text-opacity-80" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "userinfo",
  setup(__props) {
    const userStore = useUserStore();
    const corpperRef = ref();
    const profileVisible = ref(false);
    const profileForm = reactive({
      nickname: "",
      avatar: ""
    });
    const handleEdit = () => {
      profileForm.avatar = userStore.info.avatar;
      profileForm.nickname = userStore.info.nickname;
      profileVisible.value = true;
    };
    const handleChangeAvatar = () => {
      corpperRef.value.uploadFile();
    };
    const handleSuccessCropper = (data) => {
      profileForm.avatar = data.url;
    };
    const handleSaveProfile = () => {
      return userStore.update(profileForm).then(() => {
        profileVisible.value = false;
        ElMessage.success($t("status.updated"));
      });
    };
    return (_ctx, _cache) => {
      const _component_el_avatar = ElAvatar;
      const _component_el_button = ElButton;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_input = ElInput;
      const _component_el_dialog = ElDialog;
      const _directive_trim = resolveDirective("trim");
      const _directive_debounce = resolveDirective("debounce");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h3", _hoisted_1$1, toDisplayString(_ctx.$t("profile.profile")), 1),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_el_avatar, {
            size: 80,
            src: unref(userStore).info.avatar,
            style: { "--el-avatar-bg-color": "transparent" }
          }, null, 8, ["src"]),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, toDisplayString(unref(userStore).info.nickname), 1),
            createBaseVNode("p", _hoisted_5$1, toDisplayString(unref(userStore).info.mobile || "- -"), 1)
          ]),
          createVNode(_component_el_button, {
            type: "info",
            plain: "",
            class: "border-none text-primary",
            onClick: handleEdit
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("action.edit")), 1)
            ]),
            _: 1
          })
        ]),
        createBaseVNode("h3", _hoisted_6$1, toDisplayString(_ctx.$t("profile.bind_accounts")), 1),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("img", {
              class: "size-6",
              src: _ctx.$getPublicPath("/images/profile/mobile.png"),
              alt: ""
            }, null, 8, _hoisted_9$1),
            createBaseVNode("div", _hoisted_10$1, toDisplayString(_ctx.$t("profile.bind_mobile")), 1),
            createBaseVNode("div", _hoisted_11$1, toDisplayString(unref(userStore).info.mobile || _ctx.$t("profile.unbind_account")), 1),
            createVNode(_component_el_button, {
              type: "info",
              class: "border-none text-placeholder-important",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("profile.bind")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            createBaseVNode("img", {
              class: "size-6",
              src: _ctx.$getPublicPath("/images/profile/email.png"),
              alt: ""
            }, null, 8, _hoisted_13),
            createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.$t("profile.bind_email")), 1),
            createBaseVNode("div", _hoisted_15, toDisplayString(unref(userStore).info.email || _ctx.$t("profile.unbind_account")), 1),
            createVNode(_component_el_button, {
              type: "info",
              class: "border-none text-placeholder-important",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("profile.bind")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("img", {
              class: "size-6",
              src: _ctx.$getPublicPath("/images/profile/wechat.png"),
              alt: ""
            }, null, 8, _hoisted_17),
            createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("profile.bind_wechat")), 1),
            createBaseVNode("div", _hoisted_19, toDisplayString(unref(userStore).info.wechatid || _ctx.$t("profile.unbind_account")), 1),
            createVNode(_component_el_button, {
              type: "info",
              class: "border-none text-placeholder-important",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("profile.bind")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("img", {
              class: "size-6",
              src: _ctx.$getPublicPath("/images/profile/google.png"),
              alt: ""
            }, null, 8, _hoisted_21),
            createBaseVNode("div", _hoisted_22, toDisplayString(_ctx.$t("profile.bind_google")), 1),
            createBaseVNode("div", _hoisted_23, toDisplayString(unref(userStore).info.wechatid || _ctx.$t("profile.unbind")), 1),
            createVNode(_component_el_button, {
              type: "info",
              class: "border-none text-placeholder-important",
              plain: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("profile.unbind")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("h3", _hoisted_24, toDisplayString(_ctx.$t("profile.logined_devices")), 1),
        createBaseVNode("div", _hoisted_25, [
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("div", _hoisted_28, [
                createVNode(_component_svg_icon, { name: "network" }),
                _cache[3] || (_cache[3] = createTextVNode(" WindowsChrome 网页版 "))
              ]),
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-sm text-secondary ml-6 mt-1" }, "2025年3月22日上午10点51分", -1))
            ]),
            createBaseVNode("div", _hoisted_29, toDisplayString(_ctx.$t("profile.used_devices")), 1)
          ])
        ]),
        createVNode(_component_el_dialog, {
          modelValue: profileVisible.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => profileVisible.value = $event),
          title: _ctx.$t("profile.profile"),
          width: "550"
        }, {
          footer: withCtx(() => [
            createVNode(_component_el_button, {
              size: "large",
              onClick: _cache[1] || (_cache[1] = ($event) => profileVisible.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.cancel")), 1)
              ]),
              _: 1
            }),
            withDirectives((openBlock(), createBlock(_component_el_button, {
              size: "large",
              type: "primary",
              disabled: !profileForm.nickname.trim(),
              onClick: handleSaveProfile
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.confirm")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])), [
              [_directive_debounce]
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, toDisplayString(_ctx.$t("form.avatar")), 1),
              createBaseVNode("div", {
                class: "relative rounded-full w-[60px] h-[60px] overflow-hidden cursor-pointer",
                onClick: handleChangeAvatar
              }, [
                createVNode(_component_el_avatar, {
                  style: { "--el-avatar-size": "60px" },
                  src: profileForm.avatar
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_32, toDisplayString(_ctx.$t("form.change")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, toDisplayString(_ctx.$t("form.nickname")), 1),
              withDirectives(createVNode(_component_el_input, {
                modelValue: profileForm.nickname,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => profileForm.nickname = $event),
                size: "large",
                class: "flex-1",
                maxlength: "15",
                "show-word-limit": ""
              }, null, 8, ["modelValue"]), [
                [_directive_trim]
              ])
            ]),
            createVNode(CropperDialog, {
              ref_key: "corpperRef",
              ref: corpperRef,
              "upload-avatar": true,
              "limit-size": 2,
              onConfirm: handleSuccessCropper
            }, null, 512)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "h-full flex flex-col md:flex-row bg-[#F4F6F9]" };
const _hoisted_2 = { class: "md:hidden flex items-center justify-between px-4 py-2 bg-white" };
const _hoisted_3 = { class: "flex items-center gap-2 text-primary" };
const _hoisted_4 = { class: "text-[18px]" };
const _hoisted_5 = { class: "h-15 hidden md:flex items-center gap-2 px-6 mb-2 text-primary" };
const _hoisted_6 = { class: "text-[22px]" };
const _hoisted_7 = { class: "py-2 flex flex-col gap-1" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "text-sm" };
const _hoisted_10 = { class: "flex-1 bg-[#F4F6F9] py-4 md:py-8 px-4 md:max-w-[750px] mx-auto flex flex-col" };
const _hoisted_11 = { class: "flex-none text-sm text-primary font-semibold" };
const _hoisted_12 = { class: "flex-1 p-4 md:p-8 bg-[#FFFFFF] rounded-xl mt-4 overflow-y-auto" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    type: { default: "glider" }
  },
  setup(__props) {
    const userStore = useUserStore();
    const enterpriseStore = useEnterpriseStore();
    const props = __props;
    const route = useRoute();
    const isMobileView = ref(false);
    const showMobileMenu = ref(false);
    const menus = computed(() => [
      {
        label: "划词菜单栏",
        value: "glider",
        icon: "mouse",
        visible: userStore.is_login && window.$isElectron
      },
      {
        label: "网页工具栏",
        value: "toolbar",
        icon: "web",
        visible: userStore.is_login && window.$isElectron
      },
      {
        label: "通用设置",
        value: "common",
        icon: "setting2",
        visible: window.$isElectron
      },
      {
        label: window.$t("profile.info"),
        value: "userinfo",
        icon: "person",
        visible: userStore.is_login
      },
      {
        label: window.$t("profile.change_password"),
        value: "password",
        icon: "lock",
        visible: userStore.is_login
      },
      {
        label: "关于",
        value: "about",
        icon: "info",
        visible: window.$isElectron
      }
    ]);
    const currentMenu = computed(() => {
      return menus.value.find((item) => item.value === page.value) || {};
    });
    const page = ref("");
    const handleSelect = (item) => {
      page.value = item.value;
      if (isMobileView.value) {
        showMobileMenu.value = false;
      }
    };
    const toggleMobileMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };
    const checkScreenSize = () => {
      isMobileView.value = window.innerWidth < 768;
      if (!isMobileView.value) {
        showMobileMenu.value = false;
      }
    };
    onMounted(() => {
      const visibleMenus = menus.value.filter((item) => item.visible).map((item) => item.value);
      const type = props.type || route.query.type || "userinfo";
      page.value = visibleMenus.includes(type) ? type : visibleMenus[0];
      enterpriseStore.loadInfo();
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    });
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_svg_icon, {
              size: "16",
              name: "setting"
            }),
            createBaseVNode("span", _hoisted_4, toDisplayString(_ctx.$t("action.setting")), 1)
          ]),
          createBaseVNode("div", {
            onClick: toggleMobileMenu,
            class: "cursor-pointer p-2"
          }, [
            createVNode(_component_svg_icon, {
              size: "20",
              name: "menu"
            })
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["w-full md:w-[250px] md:flex-none py-5 bg-white border-t md:block md:border-none", [isMobileView.value && !showMobileMenu.value ? "hidden" : ""]])
        }, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_svg_icon, {
              size: "16",
              name: "setting"
            }),
            createBaseVNode("span", _hoisted_6, toDisplayString(_ctx.$t("action.setting")), 1)
          ]),
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(menus.value, (item) => {
              return openBlock(), createElementBlock(Fragment, {
                key: item.value
              }, [
                item.visible ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["h-10 flex items-center gap-3 px-6 cursor-pointer hover-bg-primary-light-9 hover-text-theme", [
                    page.value === item.value ? "text-theme bg-primary-light-9" : "text-regular"
                  ]]),
                  onClick: ($event) => handleSelect(item)
                }, [
                  createVNode(_component_svg_icon, {
                    size: "16",
                    name: item.icon || "setting"
                  }, null, 8, ["name"]),
                  createBaseVNode("span", _hoisted_9, toDisplayString(item.label), 1)
                ], 10, _hoisted_8)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ], 2),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, toDisplayString(currentMenu.value.label), 1),
          createBaseVNode("div", _hoisted_12, [
            page.value === "userinfo" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : page.value === "password" ? (openBlock(), createBlock(_sfc_main$3, { key: 1 })) : page.value === "toolbar" ? (openBlock(), createBlock(_sfc_main$7, { key: 2 })) : page.value === "glider" ? (openBlock(), createBlock(_sfc_main$6, { key: 3 })) : page.value === "about" ? (openBlock(), createBlock(_sfc_main$5, { key: 4 })) : page.value === "common" ? (openBlock(), createBlock(_sfc_main$4, { key: 5 })) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-046ef336"]]);
export {
  index as default
};
