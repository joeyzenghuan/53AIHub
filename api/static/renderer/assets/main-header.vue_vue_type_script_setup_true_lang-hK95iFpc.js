import { y as defineComponent, ba as useSlots, am as useNamespace, N as computed, b as openBlock, c as createElementBlock, Z as renderSlot, n as normalizeClass, O as unref, ao as _export_sfc, X as normalizeStyle, as as withInstall, bc as withNoopInstall, ap as buildProps, az as definePropType, e as createCommentVNode, a9 as h, r as ref, b5 as onUpdated, o as onMounted, H as Fragment, ak as useUserStore, a$ as inject, a as onUnmounted, f as createVNode, i as withCtx, g as withDirectives, d as createBaseVNode, t as toDisplayString, h as createBlock, B as createTextVNode, bM as success_filled_default, bN as subscriptionApi, $ as nextTick, bO as setOrderCache, bP as A, a5 as ElButton, bj as ElDialog, a4 as ElIcon, C as service, F as handleError, b6 as provide, aJ as arrow_left_default, a1 as withModifiers, v as vShow, I as renderList, aK as arrow_right_default, aI as close_default, bQ as PAYMENT_TYPE_WECHAT, Q as _export_sfc$1, bR as useI18n, bS as eventBus, bT as EVENT_NAMES, bU as LoginModal, bV as Ev, bi as ElTooltip, K as resolveDirective, z as resolveComponent, aj as arrow_down_default, a3 as ElMessage } from "./main-zTjO05wq.js";
import { E as ElScrollbar } from "./el-scrollbar-Ngsny-f4.js";
import { E as ElImage } from "./el-image-viewer-l__UzqmW.js";
import { v as vLoading } from "./el-loading-bLs-AQkn.js";
import { E as ElRadio, a as ElRadioGroup } from "./el-radio-uShQVp49.js";
import { u as useEnterpriseStore } from "./enterprise-EiZTO-a9.js";
import { u as useGlobalStore } from "./global-kvMtX63s.js";
const __default__$5 = defineComponent({
  name: "ElContainer"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    direction: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ns = useNamespace("container");
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("vertical", unref(isVertical))])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Container = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "container.vue"]]);
const __default__$4 = defineComponent({
  name: "ElAside"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("aside");
    const style = computed(() => props.width ? ns.cssVarBlock({ width: props.width }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Aside = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "aside.vue"]]);
const __default__$3 = defineComponent({
  name: "ElFooter"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("footer");
    const style = computed(() => props.height ? ns.cssVarBlock({ height: props.height }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "footer.vue"]]);
const __default__$2 = defineComponent({
  name: "ElHeader"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("header");
    const style = computed(() => {
      return props.height ? ns.cssVarBlock({
        height: props.height
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "header.vue"]]);
const __default__$1 = defineComponent({
  name: "ElMain"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const ns = useNamespace("main");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Main = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "main.vue"]]);
const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});
const ElAside = withNoopInstall(Aside);
withNoopInstall(Footer);
withNoopInstall(Header);
const ElMain = withNoopInstall(Main);
const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__ = defineComponent({
  name: "ElDivider"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "divider.vue"]]);
const ElDivider = withInstall(Divider);
/*!
 * qrcode.vue v3.6.0
 * A Vue.js component to generate QRCode. Both support Vue 2 and Vue 3
 * © 2017-PRESENT @scopewu(https://github.com/scopewu)
 * MIT License.
 */
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var qrcodegen;
(function(qrcodegen2) {
  var QrCode = (
    /** @class */
    function() {
      function QrCode2(version, errorCorrectionLevel, dataCodewords, msk) {
        this.version = version;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.modules = [];
        this.isFunction = [];
        if (version < QrCode2.MIN_VERSION || version > QrCode2.MAX_VERSION)
          throw new RangeError("Version value out of range");
        if (msk < -1 || msk > 7)
          throw new RangeError("Mask value out of range");
        this.size = version * 4 + 17;
        var row = [];
        for (var i = 0; i < this.size; i++)
          row.push(false);
        for (var i = 0; i < this.size; i++) {
          this.modules.push(row.slice());
          this.isFunction.push(row.slice());
        }
        this.drawFunctionPatterns();
        var allCodewords = this.addEccAndInterleave(dataCodewords);
        this.drawCodewords(allCodewords);
        if (msk == -1) {
          var minPenalty = 1e9;
          for (var i = 0; i < 8; i++) {
            this.applyMask(i);
            this.drawFormatBits(i);
            var penalty = this.getPenaltyScore();
            if (penalty < minPenalty) {
              msk = i;
              minPenalty = penalty;
            }
            this.applyMask(i);
          }
        }
        assert(0 <= msk && msk <= 7);
        this.mask = msk;
        this.applyMask(msk);
        this.drawFormatBits(msk);
        this.isFunction = [];
      }
      QrCode2.encodeText = function(text, ecl) {
        var segs = qrcodegen2.QrSegment.makeSegments(text);
        return QrCode2.encodeSegments(segs, ecl);
      };
      QrCode2.encodeBinary = function(data, ecl) {
        var seg = qrcodegen2.QrSegment.makeBytes(data);
        return QrCode2.encodeSegments([seg], ecl);
      };
      QrCode2.encodeSegments = function(segs, ecl, minVersion, maxVersion, mask, boostEcl) {
        if (minVersion === void 0) {
          minVersion = 1;
        }
        if (maxVersion === void 0) {
          maxVersion = 40;
        }
        if (mask === void 0) {
          mask = -1;
        }
        if (boostEcl === void 0) {
          boostEcl = true;
        }
        if (!(QrCode2.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode2.MAX_VERSION) || mask < -1 || mask > 7)
          throw new RangeError("Invalid value");
        var version;
        var dataUsedBits;
        for (version = minVersion; ; version++) {
          var dataCapacityBits_1 = QrCode2.getNumDataCodewords(version, ecl) * 8;
          var usedBits = QrSegment.getTotalBits(segs, version);
          if (usedBits <= dataCapacityBits_1) {
            dataUsedBits = usedBits;
            break;
          }
          if (version >= maxVersion)
            throw new RangeError("Data too long");
        }
        for (var _i = 0, _a = [QrCode2.Ecc.MEDIUM, QrCode2.Ecc.QUARTILE, QrCode2.Ecc.HIGH]; _i < _a.length; _i++) {
          var newEcl = _a[_i];
          if (boostEcl && dataUsedBits <= QrCode2.getNumDataCodewords(version, newEcl) * 8)
            ecl = newEcl;
        }
        var bb = [];
        for (var _b = 0, segs_1 = segs; _b < segs_1.length; _b++) {
          var seg = segs_1[_b];
          appendBits(seg.mode.modeBits, 4, bb);
          appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
          for (var _c = 0, _d = seg.getData(); _c < _d.length; _c++) {
            var b = _d[_c];
            bb.push(b);
          }
        }
        assert(bb.length == dataUsedBits);
        var dataCapacityBits = QrCode2.getNumDataCodewords(version, ecl) * 8;
        assert(bb.length <= dataCapacityBits);
        appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
        appendBits(0, (8 - bb.length % 8) % 8, bb);
        assert(bb.length % 8 == 0);
        for (var padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
          appendBits(padByte, 8, bb);
        var dataCodewords = [];
        while (dataCodewords.length * 8 < bb.length)
          dataCodewords.push(0);
        bb.forEach(function(b2, i) {
          return dataCodewords[i >>> 3] |= b2 << 7 - (i & 7);
        });
        return new QrCode2(version, ecl, dataCodewords, mask);
      };
      QrCode2.prototype.getModule = function(x, y) {
        return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
      };
      QrCode2.prototype.getModules = function() {
        return this.modules;
      };
      QrCode2.prototype.drawFunctionPatterns = function() {
        for (var i = 0; i < this.size; i++) {
          this.setFunctionModule(6, i, i % 2 == 0);
          this.setFunctionModule(i, 6, i % 2 == 0);
        }
        this.drawFinderPattern(3, 3);
        this.drawFinderPattern(this.size - 4, 3);
        this.drawFinderPattern(3, this.size - 4);
        var alignPatPos = this.getAlignmentPatternPositions();
        var numAlign = alignPatPos.length;
        for (var i = 0; i < numAlign; i++) {
          for (var j = 0; j < numAlign; j++) {
            if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
              this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
          }
        }
        this.drawFormatBits(0);
        this.drawVersion();
      };
      QrCode2.prototype.drawFormatBits = function(mask) {
        var data = this.errorCorrectionLevel.formatBits << 3 | mask;
        var rem = data;
        for (var i = 0; i < 10; i++)
          rem = rem << 1 ^ (rem >>> 9) * 1335;
        var bits = (data << 10 | rem) ^ 21522;
        assert(bits >>> 15 == 0);
        for (var i = 0; i <= 5; i++)
          this.setFunctionModule(8, i, getBit(bits, i));
        this.setFunctionModule(8, 7, getBit(bits, 6));
        this.setFunctionModule(8, 8, getBit(bits, 7));
        this.setFunctionModule(7, 8, getBit(bits, 8));
        for (var i = 9; i < 15; i++)
          this.setFunctionModule(14 - i, 8, getBit(bits, i));
        for (var i = 0; i < 8; i++)
          this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
        for (var i = 8; i < 15; i++)
          this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
        this.setFunctionModule(8, this.size - 8, true);
      };
      QrCode2.prototype.drawVersion = function() {
        if (this.version < 7)
          return;
        var rem = this.version;
        for (var i = 0; i < 12; i++)
          rem = rem << 1 ^ (rem >>> 11) * 7973;
        var bits = this.version << 12 | rem;
        assert(bits >>> 18 == 0);
        for (var i = 0; i < 18; i++) {
          var color = getBit(bits, i);
          var a = this.size - 11 + i % 3;
          var b = Math.floor(i / 3);
          this.setFunctionModule(a, b, color);
          this.setFunctionModule(b, a, color);
        }
      };
      QrCode2.prototype.drawFinderPattern = function(x, y) {
        for (var dy = -4; dy <= 4; dy++) {
          for (var dx = -4; dx <= 4; dx++) {
            var dist = Math.max(Math.abs(dx), Math.abs(dy));
            var xx = x + dx;
            var yy = y + dy;
            if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
              this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
          }
        }
      };
      QrCode2.prototype.drawAlignmentPattern = function(x, y) {
        for (var dy = -2; dy <= 2; dy++) {
          for (var dx = -2; dx <= 2; dx++)
            this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
        }
      };
      QrCode2.prototype.setFunctionModule = function(x, y, isDark) {
        this.modules[y][x] = isDark;
        this.isFunction[y][x] = true;
      };
      QrCode2.prototype.addEccAndInterleave = function(data) {
        var ver = this.version;
        var ecl = this.errorCorrectionLevel;
        if (data.length != QrCode2.getNumDataCodewords(ver, ecl))
          throw new RangeError("Invalid argument");
        var numBlocks = QrCode2.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
        var blockEccLen = QrCode2.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
        var rawCodewords = Math.floor(QrCode2.getNumRawDataModules(ver) / 8);
        var numShortBlocks = numBlocks - rawCodewords % numBlocks;
        var shortBlockLen = Math.floor(rawCodewords / numBlocks);
        var blocks = [];
        var rsDiv = QrCode2.reedSolomonComputeDivisor(blockEccLen);
        for (var i = 0, k = 0; i < numBlocks; i++) {
          var dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
          k += dat.length;
          var ecc = QrCode2.reedSolomonComputeRemainder(dat, rsDiv);
          if (i < numShortBlocks)
            dat.push(0);
          blocks.push(dat.concat(ecc));
        }
        var result = [];
        var _loop_1 = function(i2) {
          blocks.forEach(function(block, j) {
            if (i2 != shortBlockLen - blockEccLen || j >= numShortBlocks)
              result.push(block[i2]);
          });
        };
        for (var i = 0; i < blocks[0].length; i++) {
          _loop_1(i);
        }
        assert(result.length == rawCodewords);
        return result;
      };
      QrCode2.prototype.drawCodewords = function(data) {
        if (data.length != Math.floor(QrCode2.getNumRawDataModules(this.version) / 8))
          throw new RangeError("Invalid argument");
        var i = 0;
        for (var right = this.size - 1; right >= 1; right -= 2) {
          if (right == 6)
            right = 5;
          for (var vert = 0; vert < this.size; vert++) {
            for (var j = 0; j < 2; j++) {
              var x = right - j;
              var upward = (right + 1 & 2) == 0;
              var y = upward ? this.size - 1 - vert : vert;
              if (!this.isFunction[y][x] && i < data.length * 8) {
                this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                i++;
              }
            }
          }
        }
        assert(i == data.length * 8);
      };
      QrCode2.prototype.applyMask = function(mask) {
        if (mask < 0 || mask > 7)
          throw new RangeError("Mask value out of range");
        for (var y = 0; y < this.size; y++) {
          for (var x = 0; x < this.size; x++) {
            var invert = void 0;
            switch (mask) {
              case 0:
                invert = (x + y) % 2 == 0;
                break;
              case 1:
                invert = y % 2 == 0;
                break;
              case 2:
                invert = x % 3 == 0;
                break;
              case 3:
                invert = (x + y) % 3 == 0;
                break;
              case 4:
                invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                break;
              case 5:
                invert = x * y % 2 + x * y % 3 == 0;
                break;
              case 6:
                invert = (x * y % 2 + x * y % 3) % 2 == 0;
                break;
              case 7:
                invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                break;
              default:
                throw new Error("Unreachable");
            }
            if (!this.isFunction[y][x] && invert)
              this.modules[y][x] = !this.modules[y][x];
          }
        }
      };
      QrCode2.prototype.getPenaltyScore = function() {
        var result = 0;
        for (var y = 0; y < this.size; y++) {
          var runColor = false;
          var runX = 0;
          var runHistory = [0, 0, 0, 0, 0, 0, 0];
          for (var x = 0; x < this.size; x++) {
            if (this.modules[y][x] == runColor) {
              runX++;
              if (runX == 5)
                result += QrCode2.PENALTY_N1;
              else if (runX > 5)
                result++;
            } else {
              this.finderPenaltyAddHistory(runX, runHistory);
              if (!runColor)
                result += this.finderPenaltyCountPatterns(runHistory) * QrCode2.PENALTY_N3;
              runColor = this.modules[y][x];
              runX = 1;
            }
          }
          result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode2.PENALTY_N3;
        }
        for (var x = 0; x < this.size; x++) {
          var runColor = false;
          var runY = 0;
          var runHistory = [0, 0, 0, 0, 0, 0, 0];
          for (var y = 0; y < this.size; y++) {
            if (this.modules[y][x] == runColor) {
              runY++;
              if (runY == 5)
                result += QrCode2.PENALTY_N1;
              else if (runY > 5)
                result++;
            } else {
              this.finderPenaltyAddHistory(runY, runHistory);
              if (!runColor)
                result += this.finderPenaltyCountPatterns(runHistory) * QrCode2.PENALTY_N3;
              runColor = this.modules[y][x];
              runY = 1;
            }
          }
          result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode2.PENALTY_N3;
        }
        for (var y = 0; y < this.size - 1; y++) {
          for (var x = 0; x < this.size - 1; x++) {
            var color = this.modules[y][x];
            if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
              result += QrCode2.PENALTY_N2;
          }
        }
        var dark = 0;
        for (var _i = 0, _a = this.modules; _i < _a.length; _i++) {
          var row = _a[_i];
          dark = row.reduce(function(sum, color2) {
            return sum + (color2 ? 1 : 0);
          }, dark);
        }
        var total = this.size * this.size;
        var k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
        assert(0 <= k && k <= 9);
        result += k * QrCode2.PENALTY_N4;
        assert(0 <= result && result <= 2568888);
        return result;
      };
      QrCode2.prototype.getAlignmentPatternPositions = function() {
        if (this.version == 1)
          return [];
        else {
          var numAlign = Math.floor(this.version / 7) + 2;
          var step = Math.floor((this.version * 8 + numAlign * 3 + 5) / (numAlign * 4 - 4)) * 2;
          var result = [6];
          for (var pos = this.size - 7; result.length < numAlign; pos -= step)
            result.splice(1, 0, pos);
          return result;
        }
      };
      QrCode2.getNumRawDataModules = function(ver) {
        if (ver < QrCode2.MIN_VERSION || ver > QrCode2.MAX_VERSION)
          throw new RangeError("Version number out of range");
        var result = (16 * ver + 128) * ver + 64;
        if (ver >= 2) {
          var numAlign = Math.floor(ver / 7) + 2;
          result -= (25 * numAlign - 10) * numAlign - 55;
          if (ver >= 7)
            result -= 36;
        }
        assert(208 <= result && result <= 29648);
        return result;
      };
      QrCode2.getNumDataCodewords = function(ver, ecl) {
        return Math.floor(QrCode2.getNumRawDataModules(ver) / 8) - QrCode2.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode2.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      };
      QrCode2.reedSolomonComputeDivisor = function(degree) {
        if (degree < 1 || degree > 255)
          throw new RangeError("Degree out of range");
        var result = [];
        for (var i = 0; i < degree - 1; i++)
          result.push(0);
        result.push(1);
        var root = 1;
        for (var i = 0; i < degree; i++) {
          for (var j = 0; j < result.length; j++) {
            result[j] = QrCode2.reedSolomonMultiply(result[j], root);
            if (j + 1 < result.length)
              result[j] ^= result[j + 1];
          }
          root = QrCode2.reedSolomonMultiply(root, 2);
        }
        return result;
      };
      QrCode2.reedSolomonComputeRemainder = function(data, divisor) {
        var result = divisor.map(function(_) {
          return 0;
        });
        var _loop_2 = function(b2) {
          var factor = b2 ^ result.shift();
          result.push(0);
          divisor.forEach(function(coef, i) {
            return result[i] ^= QrCode2.reedSolomonMultiply(coef, factor);
          });
        };
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
          var b = data_1[_i];
          _loop_2(b);
        }
        return result;
      };
      QrCode2.reedSolomonMultiply = function(x, y) {
        if (x >>> 8 != 0 || y >>> 8 != 0)
          throw new RangeError("Byte out of range");
        var z = 0;
        for (var i = 7; i >= 0; i--) {
          z = z << 1 ^ (z >>> 7) * 285;
          z ^= (y >>> i & 1) * x;
        }
        assert(z >>> 8 == 0);
        return z;
      };
      QrCode2.prototype.finderPenaltyCountPatterns = function(runHistory) {
        var n = runHistory[1];
        assert(n <= this.size * 3);
        var core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
        return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
      };
      QrCode2.prototype.finderPenaltyTerminateAndCount = function(currentRunColor, currentRunLength, runHistory) {
        if (currentRunColor) {
          this.finderPenaltyAddHistory(currentRunLength, runHistory);
          currentRunLength = 0;
        }
        currentRunLength += this.size;
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        return this.finderPenaltyCountPatterns(runHistory);
      };
      QrCode2.prototype.finderPenaltyAddHistory = function(currentRunLength, runHistory) {
        if (runHistory[0] == 0)
          currentRunLength += this.size;
        runHistory.pop();
        runHistory.unshift(currentRunLength);
      };
      QrCode2.MIN_VERSION = 1;
      QrCode2.MAX_VERSION = 40;
      QrCode2.PENALTY_N1 = 3;
      QrCode2.PENALTY_N2 = 3;
      QrCode2.PENALTY_N3 = 40;
      QrCode2.PENALTY_N4 = 10;
      QrCode2.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        // Low
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        // Medium
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        // Quartile
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        // High
      ];
      QrCode2.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        // Low
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        // Medium
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        // Quartile
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
        // High
      ];
      return QrCode2;
    }()
  );
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (var i = len - 1; i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  var QrSegment = (
    /** @class */
    function() {
      function QrSegment2(mode, numChars, bitData) {
        this.mode = mode;
        this.numChars = numChars;
        this.bitData = bitData;
        if (numChars < 0)
          throw new RangeError("Invalid argument");
        this.bitData = bitData.slice();
      }
      QrSegment2.makeBytes = function(data) {
        var bb = [];
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
          var b = data_2[_i];
          appendBits(b, 8, bb);
        }
        return new QrSegment2(QrSegment2.Mode.BYTE, data.length, bb);
      };
      QrSegment2.makeNumeric = function(digits) {
        if (!QrSegment2.isNumeric(digits))
          throw new RangeError("String contains non-numeric characters");
        var bb = [];
        for (var i = 0; i < digits.length; ) {
          var n = Math.min(digits.length - i, 3);
          appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
          i += n;
        }
        return new QrSegment2(QrSegment2.Mode.NUMERIC, digits.length, bb);
      };
      QrSegment2.makeAlphanumeric = function(text) {
        if (!QrSegment2.isAlphanumeric(text))
          throw new RangeError("String contains unencodable characters in alphanumeric mode");
        var bb = [];
        var i;
        for (i = 0; i + 2 <= text.length; i += 2) {
          var temp = QrSegment2.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
          temp += QrSegment2.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
          appendBits(temp, 11, bb);
        }
        if (i < text.length)
          appendBits(QrSegment2.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
        return new QrSegment2(QrSegment2.Mode.ALPHANUMERIC, text.length, bb);
      };
      QrSegment2.makeSegments = function(text) {
        if (text == "")
          return [];
        else if (QrSegment2.isNumeric(text))
          return [QrSegment2.makeNumeric(text)];
        else if (QrSegment2.isAlphanumeric(text))
          return [QrSegment2.makeAlphanumeric(text)];
        else
          return [QrSegment2.makeBytes(QrSegment2.toUtf8ByteArray(text))];
      };
      QrSegment2.makeEci = function(assignVal) {
        var bb = [];
        if (assignVal < 0)
          throw new RangeError("ECI assignment value out of range");
        else if (assignVal < 1 << 7)
          appendBits(assignVal, 8, bb);
        else if (assignVal < 1 << 14) {
          appendBits(2, 2, bb);
          appendBits(assignVal, 14, bb);
        } else if (assignVal < 1e6) {
          appendBits(6, 3, bb);
          appendBits(assignVal, 21, bb);
        } else
          throw new RangeError("ECI assignment value out of range");
        return new QrSegment2(QrSegment2.Mode.ECI, 0, bb);
      };
      QrSegment2.isNumeric = function(text) {
        return QrSegment2.NUMERIC_REGEX.test(text);
      };
      QrSegment2.isAlphanumeric = function(text) {
        return QrSegment2.ALPHANUMERIC_REGEX.test(text);
      };
      QrSegment2.prototype.getData = function() {
        return this.bitData.slice();
      };
      QrSegment2.getTotalBits = function(segs, version) {
        var result = 0;
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
          var seg = segs_2[_i];
          var ccbits = seg.mode.numCharCountBits(version);
          if (seg.numChars >= 1 << ccbits)
            return Infinity;
          result += 4 + ccbits + seg.bitData.length;
        }
        return result;
      };
      QrSegment2.toUtf8ByteArray = function(str) {
        str = encodeURI(str);
        var result = [];
        for (var i = 0; i < str.length; i++) {
          if (str.charAt(i) != "%")
            result.push(str.charCodeAt(i));
          else {
            result.push(parseInt(str.substring(i + 1, i + 3), 16));
            i += 2;
          }
        }
        return result;
      };
      QrSegment2.NUMERIC_REGEX = /^[0-9]*$/;
      QrSegment2.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
      QrSegment2.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
      return QrSegment2;
    }()
  );
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  (function(QrCode) {
    var Ecc = (
      /** @class */
      function() {
        function Ecc2(ordinal, formatBits) {
          this.ordinal = ordinal;
          this.formatBits = formatBits;
        }
        Ecc2.LOW = new Ecc2(0, 1);
        Ecc2.MEDIUM = new Ecc2(1, 0);
        Ecc2.QUARTILE = new Ecc2(2, 3);
        Ecc2.HIGH = new Ecc2(3, 2);
        return Ecc2;
      }()
    );
    QrCode.Ecc = Ecc;
  })(qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  (function(QrSegment) {
    var Mode = (
      /** @class */
      function() {
        function Mode2(modeBits, numBitsCharCount) {
          this.modeBits = modeBits;
          this.numBitsCharCount = numBitsCharCount;
        }
        Mode2.prototype.numCharCountBits = function(ver) {
          return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
        };
        Mode2.NUMERIC = new Mode2(1, [10, 12, 14]);
        Mode2.ALPHANUMERIC = new Mode2(2, [9, 11, 13]);
        Mode2.BYTE = new Mode2(4, [8, 16, 16]);
        Mode2.KANJI = new Mode2(8, [8, 10, 12]);
        Mode2.ECI = new Mode2(7, [0, 0, 0]);
        return Mode2;
      }()
    );
    QrSegment.Mode = Mode;
  })(qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var QR = qrcodegen;
var defaultErrorCorrectLevel = "L";
var ErrorCorrectLevelMap = {
  L: QR.QrCode.Ecc.LOW,
  M: QR.QrCode.Ecc.MEDIUM,
  Q: QR.QrCode.Ecc.QUARTILE,
  H: QR.QrCode.Ecc.HIGH
};
var SUPPORTS_PATH2D = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
}();
function validErrorCorrectLevel(level) {
  return level in ErrorCorrectLevelMap;
}
function generatePath(modules, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  var ops = [];
  modules.forEach(function(row, y) {
    var start = null;
    row.forEach(function(cell, x) {
      if (!cell && start !== null) {
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
}
function getImageSettings(cells, size, margin, imageSettings) {
  var width = imageSettings.width, height = imageSettings.height, imageX = imageSettings.x, imageY = imageSettings.y;
  var numCells = cells.length + margin * 2;
  var defaultSize = Math.floor(size * 0.1);
  var scale = numCells / size;
  var w = (width || defaultSize) * scale;
  var h2 = (height || defaultSize) * scale;
  var x = imageX == null ? cells.length / 2 - w / 2 : imageX * scale;
  var y = imageY == null ? cells.length / 2 - h2 / 2 : imageY * scale;
  var excavation = null;
  if (imageSettings.excavate) {
    var floorX = Math.floor(x);
    var floorY = Math.floor(y);
    var ceilW = Math.ceil(w + x - floorX);
    var ceilH = Math.ceil(h2 + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  return { x, y, h: h2, w, excavation };
}
function excavateModules(modules, excavation) {
  return modules.slice().map(function(row, y) {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map(function(cell, x) {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
var QRCodeProps = {
  value: {
    type: String,
    required: true,
    default: ""
  },
  size: {
    type: Number,
    default: 100
  },
  level: {
    type: String,
    default: defaultErrorCorrectLevel,
    validator: function(l) {
      return validErrorCorrectLevel(l);
    }
  },
  background: {
    type: String,
    default: "#fff"
  },
  foreground: {
    type: String,
    default: "#000"
  },
  margin: {
    type: Number,
    required: false,
    default: 0
  },
  imageSettings: {
    type: Object,
    required: false,
    default: function() {
      return {};
    }
  },
  gradient: {
    type: Boolean,
    required: false,
    default: false
  },
  gradientType: {
    type: String,
    required: false,
    default: "linear",
    validator: function(t) {
      return ["linear", "radial"].indexOf(t) > -1;
    }
  },
  gradientStartColor: {
    type: String,
    required: false,
    default: "#000"
  },
  gradientEndColor: {
    type: String,
    required: false,
    default: "#fff"
  }
};
var QRCodeVueProps = __assign(__assign({}, QRCodeProps), { renderAs: {
  type: String,
  required: false,
  default: "canvas",
  validator: function(as) {
    return ["canvas", "svg"].indexOf(as) > -1;
  }
} });
var QrcodeSvg = defineComponent({
  name: "QRCodeSvg",
  props: QRCodeProps,
  setup: function(props) {
    var numCells = ref(0);
    var fgPath = ref("");
    var imageProps;
    var generate = function() {
      var value = props.value, _level = props.level, _margin = props.margin;
      var margin = _margin >>> 0;
      var level = validErrorCorrectLevel(_level) ? _level : defaultErrorCorrectLevel;
      var cells = QR.QrCode.encodeText(value, ErrorCorrectLevelMap[level]).getModules();
      numCells.value = cells.length + margin * 2;
      if (props.imageSettings.src) {
        var imageSettings = getImageSettings(cells, props.size, margin, props.imageSettings);
        imageProps = {
          x: imageSettings.x + margin,
          y: imageSettings.y + margin,
          width: imageSettings.w,
          height: imageSettings.h
        };
        if (imageSettings.excavation) {
          cells = excavateModules(cells, imageSettings.excavation);
        }
      }
      fgPath.value = generatePath(cells, margin);
    };
    var renderGradient = function() {
      if (!props.gradient)
        return null;
      var gradientProps = props.gradientType === "linear" ? {
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%"
      } : {
        cx: "50%",
        cy: "50%",
        r: "50%",
        fx: "50%",
        fy: "50%"
      };
      return h(props.gradientType === "linear" ? "linearGradient" : "radialGradient", __assign({ id: "qr-gradient" }, gradientProps), [
        h("stop", {
          offset: "0%",
          style: { stopColor: props.gradientStartColor }
        }),
        h("stop", {
          offset: "100%",
          style: { stopColor: props.gradientEndColor }
        })
      ]);
    };
    generate();
    onUpdated(generate);
    return function() {
      return h("svg", {
        width: props.size,
        height: props.size,
        "shape-rendering": "crispEdges",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(numCells.value, " ").concat(numCells.value)
      }, [
        h("defs", {}, [renderGradient()]),
        h("rect", {
          width: "100%",
          height: "100%",
          fill: props.background
        }),
        h("path", {
          fill: props.gradient ? "url(#qr-gradient)" : props.foreground,
          d: fgPath.value
        }),
        props.imageSettings.src && h("image", __assign({ href: props.imageSettings.src }, imageProps))
      ]);
    };
  }
});
var QrcodeCanvas = defineComponent({
  name: "QRCodeCanvas",
  props: QRCodeProps,
  setup: function(props, ctx) {
    var canvasEl = ref(null);
    var imageRef = ref(null);
    var generate = function() {
      var value = props.value, _level = props.level, size = props.size, _margin = props.margin, background = props.background, foreground = props.foreground, gradient = props.gradient, gradientType = props.gradientType, gradientStartColor = props.gradientStartColor, gradientEndColor = props.gradientEndColor;
      var margin = _margin >>> 0;
      var level = validErrorCorrectLevel(_level) ? _level : defaultErrorCorrectLevel;
      var canvas = canvasEl.value;
      if (!canvas) {
        return;
      }
      var ctx2 = canvas.getContext("2d");
      if (!ctx2) {
        return;
      }
      var cells = QR.QrCode.encodeText(value, ErrorCorrectLevelMap[level]).getModules();
      var numCells = cells.length + margin * 2;
      var image = imageRef.value;
      var imageProps = { x: 0, y: 0, width: 0, height: 0 };
      var showImage = props.imageSettings.src && image != null && image.naturalWidth !== 0 && image.naturalHeight !== 0;
      if (showImage) {
        var imageSettings = getImageSettings(cells, props.size, margin, props.imageSettings);
        imageProps = {
          x: imageSettings.x + margin,
          y: imageSettings.y + margin,
          width: imageSettings.w,
          height: imageSettings.h
        };
        if (imageSettings.excavation) {
          cells = excavateModules(cells, imageSettings.excavation);
        }
      }
      var devicePixelRatio = window.devicePixelRatio || 1;
      var scale = size / numCells * devicePixelRatio;
      canvas.height = canvas.width = size * devicePixelRatio;
      ctx2.scale(scale, scale);
      ctx2.fillStyle = background;
      ctx2.fillRect(0, 0, numCells, numCells);
      if (gradient) {
        var grad = void 0;
        if (gradientType === "linear") {
          grad = ctx2.createLinearGradient(0, 0, numCells, numCells);
        } else {
          grad = ctx2.createRadialGradient(numCells / 2, numCells / 2, 0, numCells / 2, numCells / 2, numCells / 2);
        }
        grad.addColorStop(0, gradientStartColor);
        grad.addColorStop(1, gradientEndColor);
        ctx2.fillStyle = grad;
      } else {
        ctx2.fillStyle = foreground;
      }
      if (SUPPORTS_PATH2D) {
        ctx2.fill(new Path2D(generatePath(cells, margin)));
      } else {
        cells.forEach(function(row, rdx) {
          row.forEach(function(cell, cdx) {
            if (cell) {
              ctx2.fillRect(cdx + margin, rdx + margin, 1, 1);
            }
          });
        });
      }
      if (showImage) {
        ctx2.drawImage(image, imageProps.x, imageProps.y, imageProps.width, imageProps.height);
      }
    };
    onMounted(generate);
    onUpdated(generate);
    var style = ctx.attrs.style;
    return function() {
      return h(Fragment, [
        h("canvas", __assign(__assign({}, ctx.attrs), { ref: canvasEl, style: __assign(__assign({}, style), { width: "".concat(props.size, "px"), height: "".concat(props.size, "px") }) })),
        props.imageSettings.src && h("img", {
          ref: imageRef,
          src: props.imageSettings.src,
          style: { display: "none" },
          onLoad: generate
        })
      ]);
    };
  }
});
var QrcodeVue = defineComponent({
  name: "Qrcode",
  render: function() {
    var _a = this.$props, renderAs = _a.renderAs, value = _a.value, size = _a.size, margin = _a.margin, level = _a.level, background = _a.background, foreground = _a.foreground, imageSettings = _a.imageSettings, gradient = _a.gradient, gradientType = _a.gradientType, gradientStartColor = _a.gradientStartColor, gradientEndColor = _a.gradientEndColor;
    return h(renderAs === "svg" ? QrcodeSvg : QrcodeCanvas, {
      value,
      size,
      margin,
      level,
      background,
      foreground,
      imageSettings,
      gradient,
      gradientType,
      gradientStartColor,
      gradientEndColor
    });
  },
  props: QRCodeVueProps
});
const _hoisted_1$2 = { class: "flex flex-col items-center justify-center" };
const _hoisted_2$2 = { class: "text-sm text-[#4F5052]" };
const _hoisted_3$2 = { class: "mt-2 text-2xl font-bold text-[#3664EF]" };
const _hoisted_4$2 = { class: "text-base mr-1" };
const _hoisted_5$2 = { class: "mt-3 w-[200px] h-[200px] rounded-lg flex items-center justify-center" };
const _hoisted_6$2 = { class: "mt-3 text-lg text-[#000]" };
const _hoisted_7$2 = ["innerHTML"];
const _hoisted_8$2 = { class: "mt-8 flex flex-col items-center justify-center gap-4" };
const _hoisted_9$2 = { class: "text-2xl text-[#000]" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "payment-qrcode",
  emits: ["success"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const userStore = useUserStore();
    const active_subscription_info = inject("active_subscription_info");
    const active_time_info = inject("active_time_info");
    const active_payment = inject("active_payment");
    const visible = ref(false);
    const loading = ref(false);
    const pay_url = ref("");
    const success_visible = ref(false);
    const order_info = ref({});
    onUnmounted(() => {
      clearOrderStatusTimer();
    });
    function getOrderParams() {
      return {
        user_id: userStore.info.user_id,
        nickname: userStore.info.nickname,
        subscription_id: active_subscription_info.value.group_id,
        subscription_name: active_subscription_info.value.group_name,
        pay_type: active_payment.value,
        amount: Math.round(Number(active_time_info.value.amount || 0).toFixed(2) * 1e4) / 100,
        currency: active_time_info.value.currency,
        duration: 1,
        time_unit: active_time_info.value.time_unit
      };
    }
    async function open() {
      pay_url.value = "";
      visible.value = true;
      order_info.value = await subscriptionApi.createOrder({
        params: getOrderParams()
      });
      await nextTick();
      queryOrderStatus();
      pay_url.value = order_info.value.code_url;
      loading.value = false;
    }
    function close() {
      visible.value = false;
      clearOrderStatusTimer();
    }
    let timer = null;
    function queryOrderStatus() {
      getOrderStatus();
      clearOrderStatusTimer();
      timer = setInterval(() => {
        getOrderStatus();
      }, 5e3);
    }
    function clearOrderStatusTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    function getOrderStatus() {
      return subscriptionApi.getOrderStatus({ order_id: order_info.value.payment_order_id }).then((data) => {
        if (data.originalStatus === "SUCCESS") {
          setOrderCache({ key: A(JSON.stringify(getOrderParams())), value: {} });
          clearOrderStatusTimer();
          success_visible.value = true;
        }
      });
    }
    function paySuccess() {
      success_visible.value = false;
      close();
      emit("success");
    }
    __expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      const _component_ElButton = ElButton;
      const _component_ElDialog = ElDialog;
      const _component_ElIcon = ElIcon;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_ElDialog, {
          "header-class": "!px-5 !py-3",
          "footer-class": "!hidden",
          "append-to-body": "",
          "destroy-on-close": "",
          width: "640px",
          title: _ctx.$t("subscription.order_title"),
          "close-on-click-modal": false,
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
          onClosed: close
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_1$2, [
              createBaseVNode("h4", _hoisted_2$2, toDisplayString(_ctx.$t("subscription.pay_amount")), 1),
              createBaseVNode("div", _hoisted_3$2, [
                createBaseVNode("span", _hoisted_4$2, toDisplayString(unref(active_time_info).currency_symbol || "￥"), 1),
                createBaseVNode("span", null, toDisplayString(Number(unref(active_time_info).amount || 0).toFixed(2)), 1)
              ]),
              createBaseVNode("div", _hoisted_5$2, [
                pay_url.value ? (openBlock(), createBlock(QrcodeVue, {
                  key: 0,
                  ref: "qrcode_ref",
                  value: pay_url.value,
                  size: 180,
                  level: "H"
                }, null, 8, ["value"])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_6$2, toDisplayString(_ctx.$t("subscription.pay_by_wechat")), 1),
              createBaseVNode("div", {
                class: "mt-2 text-xs text-[#666666]",
                innerHTML: _ctx.$t("subscription.pay_policy", { policy: `<a style='color: #2F74FF;' href='#' target='_blank'>《隐私政策协议》</a>` })
              }, null, 8, _hoisted_7$2)
            ])), [
              [_directive_loading, loading.value]
            ]),
            createVNode(_component_ElButton, {
              class: "relative mt-8 mb-6 left-1/2 -translate-x-1/2 !px-8 !bg-[#F6F7F8] !text-[#333]",
              type: "info",
              plain: "",
              size: "large",
              onClick: close
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.cancel")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title", "modelValue"]),
        createVNode(_component_ElDialog, {
          center: "",
          "append-to-body": "",
          "destroy-on-close": "",
          width: "400px",
          "close-on-click-modal": false,
          modelValue: success_visible.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => success_visible.value = $event),
          onClosed: paySuccess
        }, {
          footer: withCtx(() => [
            createVNode(_component_ElButton, {
              class: "mt-8 mb-6 !px-8",
              type: "primary",
              size: "large",
              onClick: paySuccess
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("action.ok_v2")), 1)
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_8$2, [
              createVNode(_component_ElIcon, {
                size: "58",
                color: "#3ABA52"
              }, {
                default: withCtx(() => [
                  createVNode(unref(success_filled_default))
                ]),
                _: 1
              }),
              createBaseVNode("span", _hoisted_9$2, toDisplayString(_ctx.$t("subscription.pay_success")), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const paymentApi = {
  async getAvailableList() {
    const { data = {} } = await service.get(`/api/payment/available`).catch(handleError);
    return data;
  }
};
const _hoisted_1$1 = { class: "flex-none text-xl font-semibold text-[#000]" };
const _hoisted_2$1 = { class: "flex-1 h-0 max-h-max relative" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "w-full flex items-center gap-3" };
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = ["title"];
const _hoisted_7$1 = {
  key: 0,
  class: "flex-1"
};
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { class: "flex items-center gap-1" };
const _hoisted_10$1 = { class: "text-lg font-bold text-[#000]" };
const _hoisted_11$1 = { class: "text-xs text-[#333]" };
const _hoisted_12$1 = { class: "text-xs text-[#9A9A9A]" };
const _hoisted_13$1 = { class: "flex items-center gap-1" };
const _hoisted_14$1 = { class: "text-lg font-bold text-[#000]" };
const _hoisted_15$1 = { class: "text-xs text-[#333]" };
const _hoisted_16$1 = { class: "text-xs text-[#9A9A9A]" };
const _hoisted_17$1 = { class: "text-sm font-semibold text-[#1D1E1F]" };
const _hoisted_18$1 = { class: "flex flex-wrap gap-3.5 mt-4" };
const _hoisted_19$1 = ["title"];
const _hoisted_20$1 = ["src", "alt"];
const _hoisted_21$1 = { class: "flex-1 text-sm text-[#4F5052] truncate" };
const _hoisted_22$1 = { class: "text-sm font-semibold text-[#1D1E1F]" };
const _hoisted_23$1 = { class: "mt-4 flex flex-wrap items-center gap-2" };
const _hoisted_24$1 = ["src"];
const _hoisted_25$1 = ["src"];
const _hoisted_26$1 = ["src"];
const _hoisted_27$1 = { class: "flex-none text-xl font-semibold text-[#000]" };
const _hoisted_28 = { class: "flex-none w-full flex items-center gap-5 overflow-x-auto overflow-y-hidden" };
const _hoisted_29 = ["onClick"];
const _hoisted_30 = { class: "text-sm text-[#000]" };
const _hoisted_31 = { class: "mt-2 flex items-baseline" };
const _hoisted_32 = { class: "text-lg font-bold text-[#000]" };
const _hoisted_33 = { class: "text-2xl font-bold text-[#000] mx-1" };
const _hoisted_34 = { class: "text-sm text-[#333]" };
const _hoisted_35 = { class: "mt-10 text-2xl font-semibold text-[#000]" };
const _hoisted_36 = { class: "mt-2 text-sm text-[#333]" };
const _hoisted_37 = { class: "w-full flex items-center gap-2 mt-3" };
const _hoisted_38 = ["src"];
const _hoisted_39 = { class: "flex-1 text-sm font-medium text-[#333]" };
const _hoisted_40 = { class: "w-full flex-1 min-h-[108px]" };
const _hoisted_41 = { class: "w-full flex items-center justify-between text-lg text-[#000]" };
const _hoisted_42 = { class: "text-lg text-[#000]" };
const _hoisted_43 = { class: "text-[#333]" };
const _hoisted_44 = { class: "text-[#000] text-xl mt-8 flex items-center justify-between gap-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    const userStore = useUserStore();
    const version_scrollbar_ref = ref();
    const payment_qrcode_ref = ref();
    const visible = ref(false);
    const loading = ref(false);
    const subscription_options = ref([]);
    const active_group_id = ref("");
    const active_time_unit = ref("month");
    const scroll_left = ref(0);
    const scroll_left_limit = ref(0);
    const scroll_left_distance = ref(0);
    const active_payment = ref(PAYMENT_TYPE_WECHAT);
    const payment_options = ref([]);
    const active_subscription_info = computed(() => subscription_options.value.find((item) => item.group_id == active_group_id.value) || {});
    const active_time_info = computed(() => active_subscription_info.value[`${active_time_unit.value}_info`] || {});
    const pay_disabled = computed(() => !Number(active_time_info.value.amount || 0));
    provide("active_subscription_info", active_subscription_info);
    provide("active_time_info", active_time_info);
    provide("active_payment", active_payment);
    async function open() {
      visible.value = true;
      await loadSubscriptionData();
      active_group_id.value = (subscription_options.value[0] || {}).group_id;
      await nextTick();
      const scrollbar_el = version_scrollbar_ref.value.$el;
      scrollbar_el.getBoundingClientRect().width;
      const scrollbar_view_el = scrollbar_el.querySelector(".el-scrollbar__view");
      const scrollbar_view_children_el_list = scrollbar_view_el.children;
      if (scrollbar_view_children_el_list.length > 3) {
        const child_el_width = scrollbar_view_children_el_list[0].getBoundingClientRect().width;
        scroll_left_distance.value = child_el_width + 16;
        scroll_left_limit.value = scroll_left_distance.value * (scrollbar_view_children_el_list.length - 3);
      }
    }
    function close() {
      visible.value = false;
    }
    async function loadSubscriptionData() {
      if (subscription_options.value.length)
        return Promise.resolve(subscription_options.value);
      loading.value = true;
      const { list = [] } = await subscriptionApi.list().finally(() => {
        loading.value = false;
      });
      subscription_options.value = list;
      updateUserGroup();
      return Promise.resolve(subscription_options.value);
    }
    async function handleVersionSelect({ data = {} } = {}) {
      active_group_id.value = data.group_id || active_group_id.value;
      await nextTick();
      active_time_unit.value = "month";
      if (!+(active_subscription_info.value.month_info || {}).amount && +(active_subscription_info.value.year_info || {}).amount) {
        active_time_unit.value = "year";
      }
    }
    function handleTimeUnitSelect({ unit = "month" }) {
      active_time_unit.value = unit;
    }
    function handleAIAssistantOpen({ type }) {
    }
    function handleScrollLeft() {
      for (let i = 0; i < scroll_left_distance.value; i += 6) {
        setTimeout(() => {
          scroll_left.value -= 6;
          version_scrollbar_ref.value.setScrollLeft(scroll_left.value);
        }, 1);
      }
    }
    function handleScrollRight() {
      for (let i = 0; i < scroll_left_distance.value; i += 6) {
        setTimeout(() => {
          scroll_left.value += 6;
          version_scrollbar_ref.value.setScrollLeft(scroll_left.value);
        }, 1);
      }
    }
    async function loadPaymentSettingData({ data = {} } = {}) {
      const list = await paymentApi.getAvailableList();
      payment_options.value = list.filter((item = {}) => item.pay_type == PAYMENT_TYPE_WECHAT && item.enabled && item.configured);
    }
    async function validateUpgrade() {
      await loadSubscriptionData();
      if (!subscription_options.value.length)
        return false;
      await loadPaymentSettingData();
      if (!payment_options.value.length)
        return false;
      return true;
    }
    async function updateUserGroup({ refresh = false } = {}) {
      if (refresh)
        await userStore.getUserInfo();
      const subscription_data = subscription_options.value.find((item = {}) => item.group_id == userStore.info.group_id);
      if (subscription_data) {
        userStore.setGroupName(subscription_data.group_name || userStore.info.group_name);
        userStore.setGroupIcon(subscription_data.logo_url || userStore.info.group_icon);
      }
    }
    __expose({
      open,
      close,
      validateUpgrade
    });
    return (_ctx, _cache) => {
      const _component_ElButton = ElButton;
      const _component_ElDivider = ElDivider;
      const _component_ElScrollbar = ElScrollbar;
      const _component_ElMain = ElMain;
      const _component_ElIcon = ElIcon;
      const _component_ElRadio = ElRadio;
      const _component_ElRadioGroup = ElRadioGroup;
      const _component_ElAside = ElAside;
      const _component_ElContainer = ElContainer;
      const _component_ElDialog = ElDialog;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_ElDialog, {
          class: "max-w-[1200px] rounded-md !p-0 overflow-hidden",
          "header-class": "hidden",
          "footer-class": "hidden",
          "show-close": false,
          "append-to-body": "",
          center: "",
          "destroy-on-close": "",
          width: "90%",
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => visible.value = $event)
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(_component_ElContainer, { class: "h-[74vh]" }, {
              default: withCtx(() => [
                createVNode(_component_ElMain, { class: "!flex flex-col gap-4 relative !overflow-hidden !py-8 !pl-12 !pr-2" }, {
                  default: withCtx(() => [
                    createBaseVNode("h1", _hoisted_1$1, toDisplayString(_ctx.$t("subscription.version_title")), 1),
                    createBaseVNode("div", _hoisted_2$1, [
                      withDirectives(createVNode(_component_ElButton, {
                        class: "absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-[#F5F2F2] text-[#333] !border-none !outline-none",
                        icon: unref(arrow_left_default),
                        size: "default",
                        circle: "",
                        onClick: withModifiers(handleScrollLeft, ["stop"])
                      }, null, 8, ["icon"]), [
                        [vShow, scroll_left.value > 0]
                      ]),
                      createVNode(_component_ElScrollbar, {
                        ref_key: "version_scrollbar_ref",
                        ref: version_scrollbar_ref,
                        class: "relative version-scrollbar h-full",
                        "view-class": "relative  flex flex-nowrap gap-4 transition-all duration-300"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(subscription_options.value, (item, item_index) => {
                            return openBlock(), createElementBlock("div", {
                              key: item_index,
                              class: normalizeClass(["flex-none rounded-md px-3.5 pt-4 pb-10 box-border border cursor-pointer", [
                                subscription_options.value.length > 2 ? "w-[31%] max-w-[240px]" : subscription_options.value.length > 1 ? "w-[47%] max-w-[340px]" : "w-full",
                                item.group_id == active_group_id.value ? `shadow-[0_0_20px_rgba(6, 114, 255, 0.2)] border-[#2F74FF] bg-cover bg-center` : "border-[#EAEDF7] bg-[#F5F6FC]"
                              ]]),
                              style: normalizeStyle({ backgroundImage: item.group_id == active_group_id.value ? `url(${_ctx.$getPublicPath("/images/subscription/version-bg.png")})` : "none" }),
                              onClick: withModifiers(($event) => handleVersionSelect({ data: item }), ["stop"])
                            }, [
                              createBaseVNode("header", _hoisted_4$1, [
                                createBaseVNode("img", {
                                  src: !/\.png$/.test(item.logo) ? _ctx.$getPublicPath(`/images/subscription/${item.logo}.png`) : item.logo,
                                  class: "flex-none w-12 h-12 rounded-full overflow-auto"
                                }, null, 8, _hoisted_5$1),
                                createBaseVNode("h2", {
                                  class: normalizeClass(["text-lg font-semibold text-[#000] truncate", subscription_options.value.length <= 1 ? "flex-none" : "flex-1"]),
                                  title: item.group_name
                                }, toDisplayString(item.group_name), 11, _hoisted_6$1),
                                subscription_options.value.length <= 1 ? (openBlock(), createElementBlock("div", _hoisted_7$1)) : createCommentVNode("", true),
                                subscription_options.value.length <= 1 ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                                  createBaseVNode("div", _hoisted_9$1, [
                                    createBaseVNode("span", _hoisted_10$1, toDisplayString(item.month_info.currency_symbol) + " " + toDisplayString(item.month_info.amount), 1),
                                    createBaseVNode("span", _hoisted_11$1, " / " + toDisplayString(_ctx.$t(`subscription.${item.month_info.time_unit}`)), 1)
                                  ]),
                                  createBaseVNode("div", _hoisted_12$1, toDisplayString(_ctx.$t(`subscription.credit_month_amount`, { amount: ` ${item.credit_month_info.amount} ` })), 1)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode(_component_ElDivider, { class: "!my-4 !border-[#E7ECF7]" }),
                              subscription_options.value.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createBaseVNode("div", _hoisted_13$1, [
                                  createBaseVNode("span", _hoisted_14$1, toDisplayString(item.month_info.currency_symbol) + " " + toDisplayString(item.month_info.amount), 1),
                                  createBaseVNode("span", _hoisted_15$1, " / " + toDisplayString(_ctx.$t(`subscription.${item.month_info.time_unit}`)), 1)
                                ]),
                                createBaseVNode("div", _hoisted_16$1, toDisplayString(_ctx.$t(`subscription.credit_month_amount`, { amount: ` ${item.credit_month_info.amount} ` })), 1)
                              ], 64)) : createCommentVNode("", true),
                              createBaseVNode("div", {
                                class: normalizeClass([subscription_options.value.length > 1 ? "" : "flex flex-row"])
                              }, [
                                item.agents && item.agents.length ? (openBlock(), createElementBlock("div", {
                                  key: 0,
                                  class: normalizeClass([subscription_options.value.length > 1 ? "mt-6" : " flex-1"])
                                }, [
                                  createBaseVNode("h2", _hoisted_17$1, toDisplayString(_ctx.$t(`subscription.agent_bots_title`)), 1),
                                  createBaseVNode("ul", _hoisted_18$1, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.agents, (row, row_index) => {
                                      return openBlock(), createElementBlock("li", {
                                        key: row_index,
                                        class: "flex items-center gap-2 w-full",
                                        title: row.name
                                      }, [
                                        createBaseVNode("img", {
                                          src: row.logo || "",
                                          alt: row.name,
                                          class: "flex-none w-4 h-4 rounded-full overflow-hidden"
                                        }, null, 8, _hoisted_20$1),
                                        createBaseVNode("div", _hoisted_21$1, toDisplayString(row.name), 1)
                                      ], 8, _hoisted_19$1);
                                    }), 128))
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                createBaseVNode("div", {
                                  class: normalizeClass([subscription_options.value.length > 1 ? "mt-5" : "flex-1"])
                                }, [
                                  createBaseVNode("h2", _hoisted_22$1, toDisplayString(_ctx.$t(`subscription.ai_assistant_title`)), 1),
                                  createBaseVNode("div", _hoisted_23$1, [
                                    createVNode(_component_ElButton, {
                                      class: "!p-1.5",
                                      type: "default",
                                      plain: "",
                                      size: "default",
                                      disabled: !item.ai_enabled,
                                      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => handleAIAssistantOpen({ type: "windows" }), ["stop"]))
                                    }, {
                                      default: withCtx(() => [
                                        createBaseVNode("img", {
                                          src: _ctx.$getPublicPath(`/images/windows.png`),
                                          class: normalizeClass(["w-4 h-4 object-cover mr-1", { "opacity-50": !item.ai_enabled }])
                                        }, null, 10, _hoisted_24$1),
                                        _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-xs" }, "Windows", -1))
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled"]),
                                    createVNode(_component_ElButton, {
                                      class: "!p-1.5 !ml-0",
                                      type: "default",
                                      plain: "",
                                      size: "default",
                                      disabled: !item.ai_enabled,
                                      onClick: _cache[1] || (_cache[1] = withModifiers(($event) => handleAIAssistantOpen({ type: "ios" }), ["stop"]))
                                    }, {
                                      default: withCtx(() => [
                                        createBaseVNode("img", {
                                          src: _ctx.$getPublicPath(`/images/ios.png`),
                                          class: normalizeClass(["w-4 h-4 object-cover mr-1", { "opacity-50": !item.ai_enabled }])
                                        }, null, 10, _hoisted_25$1),
                                        _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-xs" }, "macOS", -1))
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled"]),
                                    createVNode(_component_ElButton, {
                                      class: "!p-1.5 !ml-0",
                                      type: "default",
                                      plain: "",
                                      size: "default",
                                      disabled: !item.ai_enabled,
                                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleAIAssistantOpen({ type: "chrome" }), ["stop"]))
                                    }, {
                                      default: withCtx(() => [
                                        createBaseVNode("img", {
                                          src: _ctx.$getPublicPath(`/images/chrome.png`),
                                          class: normalizeClass(["w-4 h-4 object-cover mr-1", { "opacity-50": !item.ai_enabled }])
                                        }, null, 10, _hoisted_26$1),
                                        _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-xs" }, "Google", -1))
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled"])
                                  ])
                                ], 2)
                              ], 2)
                            ], 14, _hoisted_3$1);
                          }), 128))
                        ]),
                        _: 1
                      }, 512),
                      withDirectives(createVNode(_component_ElButton, {
                        class: "absolute -right-0.5 top-1/2 -translate-y-1/2 z-10 bg-[#F5F2F2] text-[#333] !border-none !outline-none",
                        icon: unref(arrow_right_default),
                        size: "default",
                        circle: "",
                        onClick: withModifiers(handleScrollRight, ["stop"])
                      }, null, 8, ["icon"]), [
                        [vShow, scroll_left_limit.value > 0 && scroll_left.value < scroll_left_limit.value]
                      ])
                    ]),
                    +(active_subscription_info.value.month_info || {}).amount || +(active_subscription_info.value.year_info || {}).amount ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("h1", _hoisted_27$1, toDisplayString(_ctx.$t("subscription.time_title")), 1),
                      createBaseVNode("ul", _hoisted_28, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(["month", "year"], (key) => {
                          return openBlock(), createElementBlock(Fragment, { key }, [
                            +(active_subscription_info.value[`${key}_info`] || {}).amount ? (openBlock(), createElementBlock("li", {
                              key: 0,
                              class: normalizeClass(["h-[128px] w-[36%] max-w-[280px] p-5 box-border border rounded-md", [
                                key == active_time_unit.value ? `shadow-[0_0_20px_rgba(6, 114, 255, 0.2)] border-[#2F74FF] bg-[url('https://img.js.design/assets/img/67e3c887985b9b806ee10e09.png#681a27dfb07db7652079a5900c960b9e')] bg-cover bg-center` : "border-[#EAEDF7] bg-[#F5F6FC]"
                              ]]),
                              onClick: withModifiers(($event) => handleTimeUnitSelect({ unit: key }), ["stop"])
                            }, [
                              createBaseVNode("div", _hoisted_30, toDisplayString(_ctx.$t(`subscription.time_unit_${key}`)), 1),
                              createBaseVNode("div", _hoisted_31, [
                                createBaseVNode("span", _hoisted_32, toDisplayString((active_subscription_info.value[`${key}_info`] || {}).currency_symbol || "￥"), 1),
                                createBaseVNode("span", _hoisted_33, toDisplayString((active_subscription_info.value[`${key}_info`] || {}).amount || 0), 1),
                                createBaseVNode("span", _hoisted_34, " / " + toDisplayString(_ctx.$t(`subscription.${key}`)), 1)
                              ])
                            ], 10, _hoisted_29)) : createCommentVNode("", true)
                          ], 64);
                        }), 64))
                      ])
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_ElAside, {
                  class: "flex flex-col flex-none max-w-[306px] relative bg-[#FAFAFA] border-l border-[#F2F0F0] !py-8 !pl-6 !pr-12",
                  width: "30%"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ElIcon, {
                      class: "cursor-pointer absolute top-6 right-5 text-[#666]",
                      size: 20
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(close_default), {
                          onClick: withModifiers(close, ["stop"])
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("h2", _hoisted_35, toDisplayString(_ctx.$t("subscription.aside_title")), 1),
                    createBaseVNode("p", _hoisted_36, toDisplayString(_ctx.$t("subscription.aside_desc")), 1),
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("img", {
                        class: "flex-none size-8 rounded-full overflow-hidden object-cover",
                        src: unref(userStore).info.avatar
                      }, null, 8, _hoisted_38),
                      createBaseVNode("div", _hoisted_39, toDisplayString(unref(userStore).info.nickname), 1)
                    ]),
                    createVNode(_component_ElDivider, { class: "!my-5 !border-[#E7ECF7]" }),
                    createBaseVNode("div", _hoisted_40, [
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("span", null, toDisplayString(active_subscription_info.value.group_name || "- -"), 1),
                        createBaseVNode("span", null, toDisplayString(active_time_info.value.currency_symbol || "￥") + toDisplayString(active_time_info.value.amount || 0), 1)
                      ])
                    ]),
                    +active_time_info.value.amount ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(_component_ElDivider, { class: "!my-5 !border-[#E7ECF7]" }),
                      createBaseVNode("h2", _hoisted_42, toDisplayString(_ctx.$t("subscription.payment")), 1),
                      createVNode(_component_ElRadioGroup, {
                        modelValue: active_payment.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => active_payment.value = $event),
                        class: "mt-2",
                        disabled: pay_disabled.value
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElRadio, { value: unref(PAYMENT_TYPE_WECHAT) }, {
                            default: withCtx(() => [
                              createBaseVNode("span", _hoisted_43, toDisplayString(_ctx.$t("subscription.payment_wechat")), 1)
                            ]),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("subscription.total")), 1),
                        createBaseVNode("span", null, toDisplayString(active_time_info.value.currency_symbol || "￥") + " " + toDisplayString(Number(active_time_info.value.amount || 0).toFixed(2)), 1)
                      ]),
                      createVNode(_component_ElButton, {
                        class: "w-full mt-4",
                        type: "primary",
                        size: "large",
                        disabled: pay_disabled.value,
                        onClick: _cache[4] || (_cache[4] = withModifiers(($event) => payment_qrcode_ref.value.open(), ["stop"]))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("action.pay")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })), [
              [_directive_loading, loading.value]
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_sfc_main$2, {
          ref_key: "payment_qrcode_ref",
          ref: payment_qrcode_ref,
          onSuccess: _cache[6] || (_cache[6] = ($event) => updateUserGroup({ refresh: true }))
        }, null, 512)
      ]);
    };
  }
});
const Upgrade = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-5f097c3e"]]);
const _hoisted_1 = { class: "flex-1 flex items-center gap-2 overflow-hidden" };
const _hoisted_2 = { class: "flex items-center gap-2" };
const _hoisted_3 = { class: "w-[300px] p-4 flex items-center gap-2" };
const _hoisted_4 = { class: "flex-1 overflow-hidden" };
const _hoisted_5 = { class: "w-full flex items-center gap-1 overflow-hidden" };
const _hoisted_6 = { class: "flex-1 text-sm text-primary font-medium truncate" };
const _hoisted_7 = ["title"];
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "max-w-[5em] truncate" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "text-xs text-[#9A9A9A]" };
const _hoisted_12 = { class: "flex flex-col gap-1.5 px-3 py-1.5 border-t" };
const _hoisted_13 = {
  href: "/#/profile/",
  target: "_blank",
  class: "h-8 px-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#ECEDEE] text-primary"
};
const _hoisted_14 = { class: "flex-center size-6" };
const _hoisted_15 = { class: "text-sm" };
const _hoisted_16 = { class: "flex-center size-6" };
const _hoisted_17 = { class: "text-sm" };
const _hoisted_18 = { class: "h-8 px-3 flex items-center gap-2 rounded cursor-pointer text-primary opacity-50" };
const _hoisted_19 = { class: "flex-center size-6" };
const _hoisted_20 = { class: "text-sm" };
const _hoisted_21 = { class: "h-8 px-3 flex items-center gap-2 rounded cursor-pointer text-primary opacity-50" };
const _hoisted_22 = { class: "flex-center size-6" };
const _hoisted_23 = { class: "text-sm" };
const _hoisted_24 = { class: "flex flex-col gap-1.5 px-3 py-1.5 border-t" };
const _hoisted_25 = { class: "flex-center size-6" };
const _hoisted_26 = { class: "text-sm" };
const _hoisted_27 = { class: "flex items-center gap-1.5 cursor-pointer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "main-header",
  props: {
    needLogin: { type: Boolean, default: true },
    mainClass: { default: "" },
    siderButton: { type: Boolean, default: true },
    type: {}
  },
  setup(__props) {
    const { locale } = useI18n();
    const userStore = useUserStore();
    const globalStore = useGlobalStore();
    const enterpriseStore = useEnterpriseStore();
    const upgrade_ref = ref(null);
    const upgrade_visible = ref(false);
    const handleLogin = () => {
      LoginModal().open();
    };
    const handleJumpToAdmin = () => {
      const currentHost = window.location.host;
      const isTestEnv = currentHost.includes("hub.53ai.com");
      const isLocalEnv = !currentHost.includes("53ai.com");
      let adminUrl = window.admin_url || "";
      if (!adminUrl) {
        adminUrl = isTestEnv || isLocalEnv ? "http://hubtest.53ai.com/console" : "http://hub.53ai.com/console";
      }
      const url = `${adminUrl}?access_token=${userStore.info.access_token}&eid=${userStore.info.eid}&from_origin=${encodeURIComponent(location.origin)}`;
      console.info("adminUrl: ", url);
      window.open(url, "_blank");
    };
    const handleLogout = () => {
      userStore.logout();
      ElMessage.success(window.$t("status.logout_success"));
    };
    const validateUpgrade = async () => {
      if (!userStore.info.access_token)
        return Promise.resolve();
      upgrade_visible.value = await upgrade_ref.value.validateUpgrade();
    };
    const updateLocal = (language) => {
      locale.value = language;
      Ev.setLang(language);
    };
    enterpriseStore.loadFromStorage().then((res) => {
      updateLocal(res.language);
    });
    onMounted(async () => {
      await enterpriseStore.loadInfo().then((res) => {
        updateLocal(res.language);
      });
      await validateUpgrade();
      eventBus.on(EVENT_NAMES.LOGIN_SUCCESS, validateUpgrade);
      if (window.$chat53ai) {
        window.$chat53ai.$on("agenthub:service", (_event, { type, data } = {}) => {
          console.log(type, data);
          if (type === "login") {
            handleLogin();
          }
        });
      }
    });
    onUnmounted(() => {
      eventBus.off(EVENT_NAMES.LOGIN_SUCCESS, validateUpgrade);
    });
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_image = ElImage;
      const _component_el_icon = ElIcon;
      const _component_el_tooltip = ElTooltip;
      const _component_el_button = ElButton;
      const _directive_tooltip = resolveDirective("tooltip");
      const _directive_debounce = resolveDirective("debounce");
      return (_ctx.needLogin ? unref(userStore).is_login : true) ? (openBlock(), createElementBlock("header", {
        key: 0,
        class: normalizeClass(["flex-none h-[70px] border-b", [_ctx.type === "homepage" ? "nav-bg" : "bg-white"]])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["mx-auto px-4 flex items-center justify-between h-full", _ctx.mainClass])
        }, [
          createBaseVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "before_prefix"),
            _ctx.siderButton && !unref(globalStore).siderVisible ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: "flex-none size-7 rounded-md flex-center cursor-pointer hover:bg-[#ECEDEE]",
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => unref(globalStore).toggleSider && unref(globalStore).toggleSider(...args))
            }, [
              createVNode(_component_svg_icon, {
                name: "layout-left",
                size: "20",
                color: "#9A9A9A"
              })
            ])), [
              [_directive_tooltip, {
                content: _ctx.$t("chat.expand_side_bar")
              }]
            ]) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "before_suffix")
          ]),
          createBaseVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "after_prefix"),
            !_ctx.$isElectron ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              unref(userStore).is_login ? (openBlock(), createBlock(_component_el_tooltip, {
                key: 0,
                effect: "light",
                "popper-class": "el-popper--plain",
                placement: "bottom-end"
              }, {
                content: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_el_image, {
                      class: "flex-none size-10 rounded-full",
                      src: unref(userStore).info.avatar
                    }, null, 8, ["src"]),
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("p", _hoisted_6, toDisplayString(unref(userStore).info.nickname), 1),
                        createBaseVNode("div", {
                          class: "h-6 flex-center gap-1 bg-[#F7F7F7] rounded-full px-2 text-xs text-placeholder whitespace-nowrap",
                          title: unref(userStore).info.group_name
                        }, [
                          createBaseVNode("img", {
                            src: !/\.png$/.test(unref(userStore).info.group_icon) ? _ctx.$getPublicPath(`/images/subscription/${unref(userStore).info.group_icon}.png`) : unref(userStore).info.group_icon,
                            class: "w-4 h-4 object-cover"
                          }, null, 8, _hoisted_8),
                          createBaseVNode("p", _hoisted_9, toDisplayString(unref(userStore).info.group_name), 1)
                        ], 8, _hoisted_7),
                        upgrade_visible.value ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "flex items-center gap-1 ml-auto cursor-pointer hover:opacity-70 bg-[#F4F0FF] rounded-2xl h-6 px-2 box-border text-xs text-[#8E5EFF] whitespace-nowrap",
                          onClick: _cache[1] || (_cache[1] = withModifiers(
                            //@ts-ignore
                            (...args) => upgrade_ref.value.open && upgrade_ref.value.open(...args),
                            ["stop"]
                          ))
                        }, [
                          createBaseVNode("img", {
                            src: _ctx.$getPublicPath(`/images/subscription/upgrade.png`),
                            class: "w-4 h-4 object-cover"
                          }, null, 8, _hoisted_10),
                          createTextVNode(" " + toDisplayString(_ctx.$t("subscription.upgrade")), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_11, toDisplayString(unref(userStore).info.email), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("a", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, [
                        createVNode(_component_svg_icon, {
                          name: "setting",
                          size: "16"
                        })
                      ]),
                      createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("action.setting")), 1)
                    ]),
                    unref(userStore).info.role > 1 ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "h-8 px-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#ECEDEE] text-primary",
                      onClick: handleJumpToAdmin
                    }, [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_svg_icon, {
                          name: "jump",
                          size: "16"
                        })
                      ]),
                      createBaseVNode("span", _hoisted_17, toDisplayString(_ctx.$t("common.go_admin")), 1)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        createVNode(_component_svg_icon, {
                          name: "send_plane",
                          size: "16"
                        })
                      ]),
                      createBaseVNode("span", _hoisted_20, toDisplayString(_ctx.$t("common.new_friend")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(_component_svg_icon, {
                          name: "help",
                          size: "16"
                        })
                      ]),
                      createBaseVNode("span", _hoisted_23, toDisplayString(_ctx.$t("common.help_feedback")), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_24, [
                    withDirectives((openBlock(), createElementBlock("div", {
                      class: "h-8 px-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#ECEDEE] text-primary",
                      onClick: handleLogout
                    }, [
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(_component_svg_icon, {
                          name: "quit",
                          size: "14"
                        })
                      ]),
                      createBaseVNode("span", _hoisted_26, toDisplayString(_ctx.$t("login.quit")), 1)
                    ])), [
                      [_directive_debounce]
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_27, [
                    createVNode(_component_el_image, {
                      class: "size-[26px] rounded-full",
                      src: unref(userStore).info.avatar
                    }, null, 8, ["src"]),
                    createVNode(_component_el_icon, { color: "#A4A4AD" }, {
                      default: withCtx(() => [
                        createVNode(unref(arrow_down_default))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                type: "primary",
                onClick: handleLogin
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("action.login")), 1)
                ]),
                _: 1
              }))
            ], 64)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "after_suffix")
          ])
        ], 2),
        createVNode(Upgrade, {
          ref_key: "upgrade_ref",
          ref: upgrade_ref
        }, null, 512)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _
};
