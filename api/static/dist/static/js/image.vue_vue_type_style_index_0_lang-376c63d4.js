import { u as E, b as W, c as L, g as B, v as R, d as f, aN as k, e as T, n as F, t as Y, r as I, ae as K, aG as ee, h as j, i as H, f as b, z as $, bG as te, bH as ie, bI as se, H as _, W as oe, bJ as P, y as V, $ as q, Y as re, a9 as D, bK as he, p as ae, q as U, F as ce, a6 as ne, am as le } from "./index-7b696e01.js";
const G = {};
G.getData = (e) => new Promise((t, i) => {
  let s = {};
  pe(e).then((o) => {
    s.arrayBuffer = o;
    try {
      s.orientation = fe(o);
    } catch {
      s.orientation = -1;
    }
    t(s);
  }).catch((o) => {
    i(o);
  });
});
function pe(e) {
  let t = null;
  return new Promise((i, s) => {
    if (e.src)
      if (/^data\:/i.test(e.src))
        t = de(e.src), i(t);
      else if (/^blob\:/i.test(e.src)) {
        var o = new FileReader();
        o.onload = function(h) {
          t = h.target.result, i(t);
        }, ue(e.src, function(h) {
          o.readAsArrayBuffer(h);
        });
      } else {
        var r = new XMLHttpRequest();
        r.onload = function() {
          if (this.status == 200 || this.status === 0)
            t = r.response, i(t);
          else
            throw "Could not load image";
          r = null;
        }, r.open("GET", e.src, true), r.responseType = "arraybuffer", r.send(null);
      }
    else
      s("img error");
  });
}
function ue(e, t) {
  var i = new XMLHttpRequest();
  i.open("GET", e, true), i.responseType = "blob", i.onload = function(s) {
    (this.status == 200 || this.status === 0) && t(this.response);
  }, i.send();
}
function de(e, t) {
  t = t || e.match(/^data\:([^\;]+)\;base64,/mi)[1] || "", e = e.replace(/^data\:([^\;]+)\;base64,/gmi, "");
  for (var i = atob(e), s = i.length % 2 == 0 ? i.length : i.length + 1, o = new ArrayBuffer(s), r = new Uint16Array(o), h = 0; h < s; h++)
    r[h] = i.charCodeAt(h);
  return o;
}
function ge(e, t, i) {
  var s = "", o;
  for (o = t, i += t; o < i; o++)
    s += String.fromCharCode(e.getUint8(o));
  return s;
}
function fe(e) {
  var t = new DataView(e), i = t.byteLength, s, o, r, h, a, c, n, l, p, u;
  if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
    for (p = 2; p < i; ) {
      if (t.getUint8(p) === 255 && t.getUint8(p + 1) === 225) {
        n = p;
        break;
      }
      p++;
    }
  if (n && (o = n + 4, r = n + 10, ge(t, o, 4) === "Exif" && (c = t.getUint16(r), a = c === 18761, (a || c === 19789) && t.getUint16(r + 2, a) === 42 && (h = t.getUint32(r + 4, a), h >= 8 && (l = r + h)))), l) {
    for (i = t.getUint16(l, a), u = 0; u < i; u++)
      if (p = l + u * 12 + 2, t.getUint16(p, a) === 274) {
        p += 8, s = t.getUint16(p, a);
        break;
      }
  }
  return s;
}
const me = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, o] of t)
    i[s] = o;
  return i;
}, ve = E({ data: function() {
  return { w: 0, h: 0, scale: 1, x: 0, y: 0, loading: true, trueWidth: 0, trueHeight: 0, move: true, moveX: 0, moveY: 0, crop: false, cropping: false, cropW: 0, cropH: 0, cropOldW: 0, cropOldH: 0, canChangeX: false, canChangeY: false, changeCropTypeX: 1, changeCropTypeY: 1, cropX: 0, cropY: 0, cropChangeX: 0, cropChangeY: 0, cropOffsertX: 0, cropOffsertY: 0, support: "", touches: [], touchNow: false, rotate: 0, isIos: false, orientation: 0, imgs: "", coe: 0.2, scaling: false, scalingSet: "", coeStatus: "", isCanShow: true, imgIsQqualCrop: false };
}, props: { img: { type: [String, Blob, null, File], default: "" }, outputSize: { type: Number, default: 1 }, outputType: { type: String, default: "jpeg" }, info: { type: Boolean, default: true }, canScale: { type: Boolean, default: true }, autoCrop: { type: Boolean, default: false }, autoCropWidth: { type: [Number, String], default: 0 }, autoCropHeight: { type: [Number, String], default: 0 }, fixed: { type: Boolean, default: false }, fixedNumber: { type: Array, default: () => [1, 1] }, fixedBox: { type: Boolean, default: false }, full: { type: Boolean, default: false }, canMove: { type: Boolean, default: true }, canMoveBox: { type: Boolean, default: true }, original: { type: Boolean, default: false }, centerBox: { type: Boolean, default: false }, high: { type: Boolean, default: true }, infoTrue: { type: Boolean, default: false }, maxImgSize: { type: [Number, String], default: 2e3 }, enlarge: { type: [Number, String], default: 1 }, preW: { type: [Number, String], default: 0 }, mode: { type: String, default: "contain" }, limitMinSize: { type: [Number, Array, String], default: () => 10, validator: function(e) {
  return Array.isArray(e) ? Number(e[0]) >= 0 && Number(e[1]) >= 0 : Number(e) >= 0;
} }, fillColor: { type: String, default: "" } }, computed: { cropInfo() {
  let e = {};
  if (e.top = this.cropOffsertY > 21 ? "-21px" : "0px", e.width = this.cropW > 0 ? this.cropW : 0, e.height = this.cropH > 0 ? this.cropH : 0, this.infoTrue) {
    let t = 1;
    this.high && !this.full && (t = window.devicePixelRatio), this.enlarge !== 1 & !this.full && (t = Math.abs(Number(this.enlarge))), e.width = e.width * t, e.height = e.height * t, this.full && (e.width = e.width / this.scale, e.height = e.height / this.scale);
  }
  return e.width = e.width.toFixed(0), e.height = e.height.toFixed(0), e;
}, isIE() {
  return !!window.ActiveXObject || "ActiveXObject" in window;
}, passive() {
  return this.isIE ? null : { passive: false };
}, isRotateRightOrLeft() {
  return [1, -1, 3, -3].includes(this.rotate);
} }, watch: { img() {
  this.checkedImg();
}, imgs(e) {
  e !== "" && this.reload();
}, cropW() {
  this.showPreview();
}, cropH() {
  this.showPreview();
}, cropOffsertX() {
  this.showPreview();
}, cropOffsertY() {
  this.showPreview();
}, scale(e, t) {
  this.showPreview();
}, x() {
  this.showPreview();
}, y() {
  this.showPreview();
}, autoCrop(e) {
  e && this.goAutoCrop();
}, autoCropWidth() {
  this.autoCrop && this.goAutoCrop();
}, autoCropHeight() {
  this.autoCrop && this.goAutoCrop();
}, mode() {
  this.checkedImg();
}, rotate() {
  this.showPreview(), this.autoCrop ? this.goAutoCrop(this.cropW, this.cropH) : (this.cropW > 0 || this.cropH > 0) && this.goAutoCrop(this.cropW, this.cropH);
} }, methods: { getVersion(e) {
  var t = navigator.userAgent.split(" "), i = "";
  let s = 0;
  const o = new RegExp(e, "i");
  for (var r = 0; r < t.length; r++)
    o.test(t[r]) && (i = t[r]);
  return i ? s = i.split("/")[1].split(".") : s = ["0", "0", "0"], s;
}, checkOrientationImage(e, t, i, s) {
  if (this.getVersion("chrome")[0] >= 81)
    t = -1;
  else if (this.getVersion("safari")[0] >= 605) {
    const h = this.getVersion("version");
    h[0] > 13 && h[1] > 1 && (t = -1);
  } else {
    const h = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
    if (h) {
      let a = h[1];
      a = a.split("_"), (a[0] > 13 || a[0] >= 13 && a[1] >= 4) && (t = -1);
    }
  }
  let o = document.createElement("canvas"), r = o.getContext("2d");
  switch (r.save(), t) {
    case 2:
      o.width = i, o.height = s, r.translate(i, 0), r.scale(-1, 1);
      break;
    case 3:
      o.width = i, o.height = s, r.translate(i / 2, s / 2), r.rotate(180 * Math.PI / 180), r.translate(-i / 2, -s / 2);
      break;
    case 4:
      o.width = i, o.height = s, r.translate(0, s), r.scale(1, -1);
      break;
    case 5:
      o.height = i, o.width = s, r.rotate(0.5 * Math.PI), r.scale(1, -1);
      break;
    case 6:
      o.width = s, o.height = i, r.translate(s / 2, i / 2), r.rotate(90 * Math.PI / 180), r.translate(-i / 2, -s / 2);
      break;
    case 7:
      o.height = i, o.width = s, r.rotate(0.5 * Math.PI), r.translate(i, -s), r.scale(-1, 1);
      break;
    case 8:
      o.height = i, o.width = s, r.translate(s / 2, i / 2), r.rotate(-90 * Math.PI / 180), r.translate(-i / 2, -s / 2);
      break;
    default:
      o.width = i, o.height = s;
  }
  r.drawImage(e, 0, 0, i, s), r.restore(), o.toBlob((h) => {
    let a = URL.createObjectURL(h);
    URL.revokeObjectURL(this.imgs), this.imgs = a;
  }, "image/" + this.outputType, 1);
}, checkedImg() {
  if (this.img === null || this.img === "") {
    this.imgs = "", this.clearCrop();
    return;
  }
  this.loading = true, this.scale = 1, this.rotate = 0, this.imgIsQqualCrop = false, this.clearCrop();
  let e = new Image();
  if (e.onload = () => {
    if (this.img === "")
      return this.$emit("img-load", new Error("\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A")), false;
    let i = e.width, s = e.height;
    G.getData(e).then((o) => {
      this.orientation = o.orientation || 1;
      let r = Number(this.maxImgSize);
      if (!this.orientation && i < r & s < r) {
        this.imgs = this.img;
        return;
      }
      i > r && (s = s / i * r, i = r), s > r && (i = i / s * r, s = r), this.checkOrientationImage(e, this.orientation, i, s);
    }).catch((o) => {
      this.$emit("img-load", "error"), this.$emit("img-load-error", o);
    });
  }, e.onerror = (i) => {
    this.$emit("img-load", "error"), this.$emit("img-load-error", i);
  }, this.img.substr(0, 4) !== "data" && (e.crossOrigin = ""), this.isIE) {
    var t = new XMLHttpRequest();
    t.onload = function() {
      var i = URL.createObjectURL(this.response);
      e.src = i;
    }, t.open("GET", this.img, true), t.responseType = "blob", t.send();
  } else
    e.src = this.img;
}, startMove(e) {
  if (e.preventDefault(), this.move && !this.crop) {
    if (!this.canMove)
      return false;
    this.moveX = ("clientX" in e ? e.clientX : e.touches[0].clientX) - this.x, this.moveY = ("clientY" in e ? e.clientY : e.touches[0].clientY) - this.y, e.touches ? (window.addEventListener("touchmove", this.moveImg), window.addEventListener("touchend", this.leaveImg), e.touches.length == 2 && (this.touches = e.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale))) : (window.addEventListener("mousemove", this.moveImg), window.addEventListener("mouseup", this.leaveImg)), this.$emit("img-moving", { moving: true, axis: this.getImgAxis() });
  } else
    this.cropping = true, window.addEventListener("mousemove", this.createCrop), window.addEventListener("mouseup", this.endCrop), window.addEventListener("touchmove", this.createCrop), window.addEventListener("touchend", this.endCrop), this.cropOffsertX = e.offsetX ? e.offsetX : e.touches[0].pageX - this.$refs.cropper.offsetLeft, this.cropOffsertY = e.offsetY ? e.offsetY : e.touches[0].pageY - this.$refs.cropper.offsetTop, this.cropX = "clientX" in e ? e.clientX : e.touches[0].clientX, this.cropY = "clientY" in e ? e.clientY : e.touches[0].clientY, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.cropW = 0, this.cropH = 0;
}, touchScale(e) {
  e.preventDefault();
  let t = this.scale;
  var i = { x: this.touches[0].clientX, y: this.touches[0].clientY }, s = { x: e.touches[0].clientX, y: e.touches[0].clientY }, o = { x: this.touches[1].clientX, y: this.touches[1].clientY }, r = { x: e.touches[1].clientX, y: e.touches[1].clientY }, h = Math.sqrt(Math.pow(i.x - o.x, 2) + Math.pow(i.y - o.y, 2)), a = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)), c = a - h, n = 1;
  n = n / this.trueWidth > n / this.trueHeight ? n / this.trueHeight : n / this.trueWidth, n = n > 0.1 ? 0.1 : n;
  var l = n * c;
  if (!this.touchNow) {
    if (this.touchNow = true, c > 0 ? t += Math.abs(l) : c < 0 && t > Math.abs(l) && (t -= Math.abs(l)), this.touches = e.touches, setTimeout(() => {
      this.touchNow = false;
    }, 8), !this.checkoutImgAxis(this.x, this.y, t))
      return false;
    this.scale = t;
  }
}, cancelTouchScale(e) {
  window.removeEventListener("touchmove", this.touchScale);
}, moveImg(e) {
  if (e.preventDefault(), e.touches && e.touches.length === 2)
    return this.touches = e.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale), window.removeEventListener("touchmove", this.moveImg), false;
  let t = "clientX" in e ? e.clientX : e.touches[0].clientX, i = "clientY" in e ? e.clientY : e.touches[0].clientY, s, o;
  s = t - this.moveX, o = i - this.moveY, this.$nextTick(() => {
    if (this.centerBox) {
      let r = this.getImgAxis(s, o, this.scale), h = this.getCropAxis(), a = this.trueHeight * this.scale, c = this.trueWidth * this.scale, n, l, p, u;
      switch (this.rotate) {
        case 1:
        case -1:
        case 3:
        case -3:
          n = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2 + (a - c) / 2, l = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2 + (c - a) / 2, p = n - a + this.cropW, u = l - c + this.cropH;
          break;
        default:
          n = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2, l = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2, p = n - c + this.cropW, u = l - a + this.cropH;
          break;
      }
      r.x1 >= h.x1 && (s = n), r.y1 >= h.y1 && (o = l), r.x2 <= h.x2 && (s = p), r.y2 <= h.y2 && (o = u);
    }
    this.x = s, this.y = o, this.$emit("img-moving", { moving: true, axis: this.getImgAxis() });
  });
}, leaveImg(e) {
  window.removeEventListener("mousemove", this.moveImg), window.removeEventListener("touchmove", this.moveImg), window.removeEventListener("mouseup", this.leaveImg), window.removeEventListener("touchend", this.leaveImg), this.$emit("img-moving", { moving: false, axis: this.getImgAxis() });
}, scaleImg() {
  this.canScale && window.addEventListener(this.support, this.changeSize, this.passive);
}, cancelScale() {
  this.canScale && window.removeEventListener(this.support, this.changeSize);
}, changeSize(e) {
  e.preventDefault();
  let t = this.scale;
  var i = e.deltaY || e.wheelDelta, s = navigator.userAgent.indexOf("Firefox");
  i = s > 0 ? i * 30 : i, this.isIE && (i = -i);
  var o = this.coe;
  o = o / this.trueWidth > o / this.trueHeight ? o / this.trueHeight : o / this.trueWidth;
  var r = o * i;
  r < 0 ? t += Math.abs(r) : t > Math.abs(r) && (t -= Math.abs(r));
  let h = r < 0 ? "add" : "reduce";
  if (h !== this.coeStatus && (this.coeStatus = h, this.coe = 0.2), this.scaling || (this.scalingSet = setTimeout(() => {
    this.scaling = false, this.coe = this.coe += 0.01;
  }, 50)), this.scaling = true, !this.checkoutImgAxis(this.x, this.y, t))
    return false;
  this.scale = t;
}, changeScale(e) {
  let t = this.scale;
  e = e || 1;
  var i = 20;
  if (i = i / this.trueWidth > i / this.trueHeight ? i / this.trueHeight : i / this.trueWidth, e = e * i, e > 0 ? t += Math.abs(e) : t > Math.abs(e) && (t -= Math.abs(e)), !this.checkoutImgAxis(this.x, this.y, t))
    return false;
  this.scale = t;
}, createCrop(e) {
  e.preventDefault();
  var t = "clientX" in e ? e.clientX : e.touches ? e.touches[0].clientX : 0, i = "clientY" in e ? e.clientY : e.touches ? e.touches[0].clientY : 0;
  this.$nextTick(() => {
    var s = t - this.cropX, o = i - this.cropY;
    if (s > 0 ? (this.cropW = s + this.cropChangeX > this.w ? this.w - this.cropChangeX : s, this.cropOffsertX = this.cropChangeX) : (this.cropW = this.w - this.cropChangeX + Math.abs(s) > this.w ? this.cropChangeX : Math.abs(s), this.cropOffsertX = this.cropChangeX + s > 0 ? this.cropChangeX + s : 0), !this.fixed)
      o > 0 ? (this.cropH = o + this.cropChangeY > this.h ? this.h - this.cropChangeY : o, this.cropOffsertY = this.cropChangeY) : (this.cropH = this.h - this.cropChangeY + Math.abs(o) > this.h ? this.cropChangeY : Math.abs(o), this.cropOffsertY = this.cropChangeY + o > 0 ? this.cropChangeY + o : 0);
    else {
      var r = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
      r + this.cropOffsertY > this.h ? (this.cropH = this.h - this.cropOffsertY, this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0], s > 0 ? this.cropOffsertX = this.cropChangeX : this.cropOffsertX = this.cropChangeX - this.cropW) : this.cropH = r, this.cropOffsertY = this.cropOffsertY;
    }
  });
}, changeCropSize(e, t, i, s, o) {
  e.preventDefault(), window.addEventListener("mousemove", this.changeCropNow), window.addEventListener("mouseup", this.changeCropEnd), window.addEventListener("touchmove", this.changeCropNow), window.addEventListener("touchend", this.changeCropEnd), this.canChangeX = t, this.canChangeY = i, this.changeCropTypeX = s, this.changeCropTypeY = o, this.cropX = "clientX" in e ? e.clientX : e.touches[0].clientX, this.cropY = "clientY" in e ? e.clientY : e.touches[0].clientY, this.cropOldW = this.cropW, this.cropOldH = this.cropH, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.fixed && this.canChangeX && this.canChangeY && (this.canChangeY = 0), this.$emit("change-crop-size", { width: this.cropW, height: this.cropH });
}, changeCropNow(e) {
  e.preventDefault();
  var t = "clientX" in e ? e.clientX : e.touches ? e.touches[0].clientX : 0, i = "clientY" in e ? e.clientY : e.touches ? e.touches[0].clientY : 0;
  let s = this.w, o = this.h, r = 0, h = 0;
  if (this.centerBox) {
    let n = this.getImgAxis(), l = n.x2, p = n.y2;
    r = n.x1 > 0 ? n.x1 : 0, h = n.y1 > 0 ? n.y1 : 0, s > l && (s = l), o > p && (o = p);
  }
  const [a, c] = this.checkCropLimitSize();
  this.$nextTick(() => {
    var n = t - this.cropX, l = i - this.cropY;
    if (this.canChangeX && (this.changeCropTypeX === 1 ? this.cropOldW - n < a ? (this.cropW = a, this.cropOffsertX = this.cropOldW + this.cropChangeX - r - a) : this.cropOldW - n > 0 ? (this.cropW = s - this.cropChangeX - n <= s - r ? this.cropOldW - n : this.cropOldW + this.cropChangeX - r, this.cropOffsertX = s - this.cropChangeX - n <= s - r ? this.cropChangeX + n : r) : (this.cropW = Math.abs(n) + this.cropChangeX <= s ? Math.abs(n) - this.cropOldW : s - this.cropOldW - this.cropChangeX, this.cropOffsertX = this.cropChangeX + this.cropOldW) : this.changeCropTypeX === 2 && (this.cropOldW + n < a ? this.cropW = a : this.cropOldW + n > 0 ? (this.cropW = this.cropOldW + n + this.cropOffsertX <= s ? this.cropOldW + n : s - this.cropOffsertX, this.cropOffsertX = this.cropChangeX) : (this.cropW = s - this.cropChangeX + Math.abs(n + this.cropOldW) <= s - r ? Math.abs(n + this.cropOldW) : this.cropChangeX - r, this.cropOffsertX = s - this.cropChangeX + Math.abs(n + this.cropOldW) <= s - r ? this.cropChangeX - Math.abs(n + this.cropOldW) : r))), this.canChangeY && (this.changeCropTypeY === 1 ? this.cropOldH - l < c ? (this.cropH = c, this.cropOffsertY = this.cropOldH + this.cropChangeY - h - c) : this.cropOldH - l > 0 ? (this.cropH = o - this.cropChangeY - l <= o - h ? this.cropOldH - l : this.cropOldH + this.cropChangeY - h, this.cropOffsertY = o - this.cropChangeY - l <= o - h ? this.cropChangeY + l : h) : (this.cropH = Math.abs(l) + this.cropChangeY <= o ? Math.abs(l) - this.cropOldH : o - this.cropOldH - this.cropChangeY, this.cropOffsertY = this.cropChangeY + this.cropOldH) : this.changeCropTypeY === 2 && (this.cropOldH + l < c ? this.cropH = c : this.cropOldH + l > 0 ? (this.cropH = this.cropOldH + l + this.cropOffsertY <= o ? this.cropOldH + l : o - this.cropOffsertY, this.cropOffsertY = this.cropChangeY) : (this.cropH = o - this.cropChangeY + Math.abs(l + this.cropOldH) <= o - h ? Math.abs(l + this.cropOldH) : this.cropChangeY - h, this.cropOffsertY = o - this.cropChangeY + Math.abs(l + this.cropOldH) <= o - h ? this.cropChangeY - Math.abs(l + this.cropOldH) : h))), this.canChangeX && this.fixed) {
      var p = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
      p < c ? (this.cropH = c, this.cropW = this.fixedNumber[0] * c / this.fixedNumber[1], this.changeCropTypeX === 1 && (this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW))) : p + this.cropOffsertY > o ? (this.cropH = o - this.cropOffsertY, this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0], this.changeCropTypeX === 1 && (this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW))) : this.cropH = p;
    }
    if (this.canChangeY && this.fixed) {
      var u = this.cropH / this.fixedNumber[1] * this.fixedNumber[0];
      u < a ? (this.cropW = a, this.cropH = this.fixedNumber[1] * a / this.fixedNumber[0], this.cropOffsertY = this.cropOldH + this.cropChangeY - this.cropH) : u + this.cropOffsertX > s ? (this.cropW = s - this.cropOffsertX, this.cropH = this.cropW / this.fixedNumber[0] * this.fixedNumber[1]) : this.cropW = u;
    }
  });
}, checkCropLimitSize() {
  let { cropW: e, cropH: t, limitMinSize: i } = this, s = new Array();
  return Array.isArray(i) ? s = i : s = [i, i], e = parseFloat(s[0]), t = parseFloat(s[1]), [e, t];
}, changeCropEnd(e) {
  window.removeEventListener("mousemove", this.changeCropNow), window.removeEventListener("mouseup", this.changeCropEnd), window.removeEventListener("touchmove", this.changeCropNow), window.removeEventListener("touchend", this.changeCropEnd);
}, calculateSize(e, t, i, s, o, r) {
  const h = e / t;
  let a = o, c = r;
  return a < i && (a = i, c = Math.ceil(a / h)), c < s && (c = s, a = Math.ceil(c * h), a < i && (a = i, c = Math.ceil(a / h))), a < o && (a = o, c = Math.ceil(a / h)), c < r && (c = r, a = Math.ceil(c * h)), { width: a, height: c };
}, endCrop() {
  this.cropW === 0 && this.cropH === 0 && (this.cropping = false);
  let [e, t] = this.checkCropLimitSize();
  const { width: i, height: s } = this.fixed ? this.calculateSize(this.fixedNumber[0], this.fixedNumber[1], e, t, this.cropW, this.cropH) : { width: e, height: t };
  i > this.cropW && (this.cropW = i, this.cropOffsertX + i > this.w && (this.cropOffsertX = this.w - i)), s > this.cropH && (this.cropH = s, this.cropOffsertY + s > this.h && (this.cropOffsertY = this.h - s)), window.removeEventListener("mousemove", this.createCrop), window.removeEventListener("mouseup", this.endCrop), window.removeEventListener("touchmove", this.createCrop), window.removeEventListener("touchend", this.endCrop);
}, startCrop() {
  this.crop = true;
}, stopCrop() {
  this.crop = false;
}, clearCrop() {
  this.cropping = false, this.cropW = 0, this.cropH = 0;
}, cropMove(e) {
  if (e.preventDefault(), !this.canMoveBox)
    return this.crop = false, this.startMove(e), false;
  if (e.touches && e.touches.length === 2)
    return this.crop = false, this.startMove(e), this.leaveCrop(), false;
  window.addEventListener("mousemove", this.moveCrop), window.addEventListener("mouseup", this.leaveCrop), window.addEventListener("touchmove", this.moveCrop), window.addEventListener("touchend", this.leaveCrop);
  let t = "clientX" in e ? e.clientX : e.touches[0].clientX, i = "clientY" in e ? e.clientY : e.touches[0].clientY, s, o;
  s = t - this.cropOffsertX, o = i - this.cropOffsertY, this.cropX = s, this.cropY = o, this.$emit("crop-moving", { moving: true, axis: this.getCropAxis() });
}, moveCrop(e, t) {
  let i = 0, s = 0;
  e && (e.preventDefault(), i = "clientX" in e ? e.clientX : e.touches[0].clientX, s = "clientY" in e ? e.clientY : e.touches[0].clientY), this.$nextTick(() => {
    let o, r, h = i - this.cropX, a = s - this.cropY;
    if (t && (h = this.cropOffsertX, a = this.cropOffsertY), h <= 0 ? o = 0 : h + this.cropW > this.w ? o = this.w - this.cropW : o = h, a <= 0 ? r = 0 : a + this.cropH > this.h ? r = this.h - this.cropH : r = a, this.centerBox) {
      let c = this.getImgAxis();
      o <= c.x1 && (o = c.x1), o + this.cropW > c.x2 && (o = c.x2 - this.cropW), r <= c.y1 && (r = c.y1), r + this.cropH > c.y2 && (r = c.y2 - this.cropH);
    }
    this.cropOffsertX = o, this.cropOffsertY = r, this.$emit("crop-moving", { moving: true, axis: this.getCropAxis() });
  });
}, getImgAxis(e, t, i) {
  e = e || this.x, t = t || this.y, i = i || this.scale;
  let s = { x1: 0, x2: 0, y1: 0, y2: 0 }, o = this.trueWidth * i, r = this.trueHeight * i;
  switch (this.rotate) {
    case 0:
      s.x1 = e + this.trueWidth * (1 - i) / 2, s.x2 = s.x1 + this.trueWidth * i, s.y1 = t + this.trueHeight * (1 - i) / 2, s.y2 = s.y1 + this.trueHeight * i;
      break;
    case 1:
    case -1:
    case 3:
    case -3:
      s.x1 = e + this.trueWidth * (1 - i) / 2 + (o - r) / 2, s.x2 = s.x1 + this.trueHeight * i, s.y1 = t + this.trueHeight * (1 - i) / 2 + (r - o) / 2, s.y2 = s.y1 + this.trueWidth * i;
      break;
    default:
      s.x1 = e + this.trueWidth * (1 - i) / 2, s.x2 = s.x1 + this.trueWidth * i, s.y1 = t + this.trueHeight * (1 - i) / 2, s.y2 = s.y1 + this.trueHeight * i;
      break;
  }
  return s;
}, getCropAxis() {
  let e = { x1: 0, x2: 0, y1: 0, y2: 0 };
  return e.x1 = this.cropOffsertX, e.x2 = e.x1 + this.cropW, e.y1 = this.cropOffsertY, e.y2 = e.y1 + this.cropH, e;
}, leaveCrop(e) {
  window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.$emit("crop-moving", { moving: false, axis: this.getCropAxis() });
}, getCropChecked(e) {
  let t = document.createElement("canvas"), i = t.getContext("2d"), s = new Image(), o = this.rotate, r = this.trueWidth, h = this.trueHeight, a = this.cropOffsertX, c = this.cropOffsertY;
  s.onload = () => {
    if (this.cropW !== 0) {
      let u = 1;
      this.high & !this.full && (u = window.devicePixelRatio), this.enlarge !== 1 & !this.full && (u = Math.abs(Number(this.enlarge)));
      let m = this.cropW * u, M = this.cropH * u, v = r * this.scale * u, w = h * this.scale * u, C = (this.x - a + this.trueWidth * (1 - this.scale) / 2) * u, x = (this.y - c + this.trueHeight * (1 - this.scale) / 2) * u;
      switch (p(m, M), i.save(), o) {
        case 0:
          this.full ? (p(m / this.scale, M / this.scale), i.drawImage(s, C / this.scale, x / this.scale, v / this.scale, w / this.scale)) : i.drawImage(s, C, x, v, w);
          break;
        case 1:
        case -3:
          this.full ? (p(m / this.scale, M / this.scale), C = C / this.scale + (v / this.scale - w / this.scale) / 2, x = x / this.scale + (w / this.scale - v / this.scale) / 2, i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, x, -C - w / this.scale, v / this.scale, w / this.scale)) : (C = C + (v - w) / 2, x = x + (w - v) / 2, i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, x, -C - w, v, w));
          break;
        case 2:
        case -2:
          this.full ? (p(m / this.scale, M / this.scale), i.rotate(o * 90 * Math.PI / 180), C = C / this.scale, x = x / this.scale, i.drawImage(s, -C - v / this.scale, -x - w / this.scale, v / this.scale, w / this.scale)) : (i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, -C - v, -x - w, v, w));
          break;
        case 3:
        case -1:
          this.full ? (p(m / this.scale, M / this.scale), C = C / this.scale + (v / this.scale - w / this.scale) / 2, x = x / this.scale + (w / this.scale - v / this.scale) / 2, i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, -x - v / this.scale, C, v / this.scale, w / this.scale)) : (C = C + (v - w) / 2, x = x + (w - v) / 2, i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, -x - v, C, v, w));
          break;
        default:
          this.full ? (p(m / this.scale, M / this.scale), i.drawImage(s, C / this.scale, x / this.scale, v / this.scale, w / this.scale)) : i.drawImage(s, C, x, v, w);
      }
      i.restore();
    } else {
      let u = r * this.scale, m = h * this.scale;
      switch (i.save(), o) {
        case 0:
          p(u, m), i.drawImage(s, 0, 0, u, m);
          break;
        case 1:
        case -3:
          p(m, u), i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, 0, -m, u, m);
          break;
        case 2:
        case -2:
          p(u, m), i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, -u, -m, u, m);
          break;
        case 3:
        case -1:
          p(m, u), i.rotate(o * 90 * Math.PI / 180), i.drawImage(s, -u, 0, u, m);
          break;
        default:
          p(u, m), i.drawImage(s, 0, 0, u, m);
      }
      i.restore();
    }
    e(t);
  };
  var n = this.img.substr(0, 4);
  n !== "data" && (s.crossOrigin = "Anonymous"), s.src = this.imgs;
  const l = this.fillColor;
  function p(u, m) {
    t.width = Math.round(u), t.height = Math.round(m), l && (i.fillStyle = l, i.fillRect(0, 0, t.width, t.height));
  }
}, getCropData(e) {
  this.getCropChecked((t) => {
    e(t.toDataURL("image/" + this.outputType, this.outputSize));
  });
}, getCropBlob(e) {
  this.getCropChecked((t) => {
    t.toBlob((i) => e(i), "image/" + this.outputType, this.outputSize);
  });
}, showPreview() {
  if (this.isCanShow)
    this.isCanShow = false, setTimeout(() => {
      this.isCanShow = true;
    }, 16);
  else
    return false;
  let e = this.cropW, t = this.cropH, i = this.scale;
  var s = {};
  s.div = { width: `${e}px`, height: `${t}px` };
  let o = (this.x - this.cropOffsertX) / i, r = (this.y - this.cropOffsertY) / i, h = 0;
  s.w = e, s.h = t, s.url = this.imgs, s.img = { width: `${this.trueWidth}px`, height: `${this.trueHeight}px`, transform: `scale(${i})translate3d(${o}px, ${r}px, ${h}px)rotateZ(${this.rotate * 90}deg)` }, s.html = `
      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">
        <div style="width: ${e}px; height: ${t}px">
          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${i})translate3d(${o}px, ${r}px, ${h}px)rotateZ(${this.rotate * 90}deg)">
        </div>
      </div>`, this.$emit("real-time", s);
}, reload() {
  let e = new Image();
  e.onload = () => {
    this.w = parseFloat(window.getComputedStyle(this.$refs.cropper).width), this.h = parseFloat(window.getComputedStyle(this.$refs.cropper).height), this.trueWidth = e.width, this.trueHeight = e.height, this.original ? this.scale = 1 : this.scale = this.checkedMode(), this.$nextTick(() => {
      this.x = -(this.trueWidth - this.trueWidth * this.scale) / 2 + (this.w - this.trueWidth * this.scale) / 2, this.y = -(this.trueHeight - this.trueHeight * this.scale) / 2 + (this.h - this.trueHeight * this.scale) / 2, this.loading = false, this.autoCrop && this.goAutoCrop(), this.$emit("img-load", "success"), setTimeout(() => {
        this.showPreview();
      }, 20);
    });
  }, e.onerror = () => {
    this.$emit("img-load", "error");
  }, e.src = this.imgs;
}, checkedMode() {
  let e = 1, t = this.trueWidth, i = this.trueHeight;
  const s = this.mode.split(" ");
  switch (s[0]) {
    case "contain":
      this.trueWidth > this.w && (e = this.w / this.trueWidth), this.trueHeight * e > this.h && (e = this.h / this.trueHeight);
      break;
    case "cover":
      t = this.w, e = t / this.trueWidth, i = i * e, i < this.h && (i = this.h, e = i / this.trueHeight);
      break;
    default:
      try {
        let o = s[0];
        if (o.search("px") !== -1) {
          o = o.replace("px", ""), t = parseFloat(o);
          const r = t / this.trueWidth;
          let h = 1, a = s[1];
          a.search("px") !== -1 && (a = a.replace("px", ""), i = parseFloat(a), h = i / this.trueHeight), e = Math.min(r, h);
        }
        if (o.search("%") !== -1 && (o = o.replace("%", ""), t = parseFloat(o) / 100 * this.w, e = t / this.trueWidth), s.length === 2 && o === "auto") {
          let r = s[1];
          r.search("px") !== -1 && (r = r.replace("px", ""), i = parseFloat(r), e = i / this.trueHeight), r.search("%") !== -1 && (r = r.replace("%", ""), i = parseFloat(r) / 100 * this.h, e = i / this.trueHeight);
        }
      } catch {
        e = 1;
      }
  }
  return e;
}, goAutoCrop(e, t) {
  if (this.imgs === "" || this.imgs === null)
    return;
  this.clearCrop(), this.cropping = true;
  let i = this.w, s = this.h;
  if (this.centerBox) {
    const h = Math.abs(this.rotate) % 2 > 0;
    let a = (h ? this.trueHeight : this.trueWidth) * this.scale, c = (h ? this.trueWidth : this.trueHeight) * this.scale;
    i = a < i ? a : i, s = c < s ? c : s;
  }
  var o = e || parseFloat(this.autoCropWidth), r = t || parseFloat(this.autoCropHeight);
  (o === 0 || r === 0) && (o = i * 0.8, r = s * 0.8), o = o > i ? i : o, r = r > s ? s : r, this.fixed && (r = o / this.fixedNumber[0] * this.fixedNumber[1]), r > this.h && (r = this.h, o = r / this.fixedNumber[1] * this.fixedNumber[0]), this.changeCrop(o, r);
}, changeCrop(e, t) {
  if (this.centerBox) {
    let i = this.getImgAxis();
    e > i.x2 - i.x1 && (e = i.x2 - i.x1, t = e / this.fixedNumber[0] * this.fixedNumber[1]), t > i.y2 - i.y1 && (t = i.y2 - i.y1, e = t / this.fixedNumber[1] * this.fixedNumber[0]);
  }
  this.cropW = e, this.cropH = t, this.checkCropLimitSize(), this.$nextTick(() => {
    this.cropOffsertX = (this.w - this.cropW) / 2, this.cropOffsertY = (this.h - this.cropH) / 2, this.centerBox && this.moveCrop(null, true);
  });
}, refresh() {
  this.img, this.imgs = "", this.scale = 1, this.crop = false, this.rotate = 0, this.w = 0, this.h = 0, this.trueWidth = 0, this.trueHeight = 0, this.imgIsQqualCrop = false, this.clearCrop(), this.$nextTick(() => {
    this.checkedImg();
  });
}, rotateLeft() {
  this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
}, rotateRight() {
  this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1;
}, rotateClear() {
  this.rotate = 0;
}, checkoutImgAxis(e, t, i) {
  e = e || this.x, t = t || this.y, i = i || this.scale;
  let s = true;
  if (this.centerBox) {
    let o = this.getImgAxis(e, t, i), r = this.getCropAxis();
    o.x1 >= r.x1 && (s = false), o.x2 <= r.x2 && (s = false), o.y1 >= r.y1 && (s = false), o.y2 <= r.y2 && (s = false), s || this.changeImgScale(o, r, i);
  }
  return s;
}, changeImgScale(e, t, i) {
  let s = this.trueWidth, o = this.trueHeight, r = s * i, h = o * i;
  if (r >= this.cropW && h >= this.cropH)
    this.scale = i;
  else {
    const a = this.cropW / s, c = this.cropH / o, n = this.cropH <= o * a ? a : c;
    this.scale = n, r = s * n, h = o * n;
  }
  this.imgIsQqualCrop || (e.x1 >= t.x1 && (this.isRotateRightOrLeft ? this.x = t.x1 - (s - r) / 2 - (r - h) / 2 : this.x = t.x1 - (s - r) / 2), e.x2 <= t.x2 && (this.isRotateRightOrLeft ? this.x = t.x1 - (s - r) / 2 - (r - h) / 2 - h + this.cropW : this.x = t.x2 - (s - r) / 2 - r), e.y1 >= t.y1 && (this.isRotateRightOrLeft ? this.y = t.y1 - (o - h) / 2 - (h - r) / 2 : this.y = t.y1 - (o - h) / 2), e.y2 <= t.y2 && (this.isRotateRightOrLeft ? this.y = t.y2 - (o - h) / 2 - (h - r) / 2 - r : this.y = t.y2 - (o - h) / 2 - h)), (r < this.cropW || h < this.cropH) && (this.imgIsQqualCrop = true);
} }, mounted() {
  this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
  let e = this;
  var t = navigator.userAgent;
  this.isIOS = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", { value: function(i, s, o) {
    for (var r = atob(this.toDataURL(s, o).split(",")[1]), h = r.length, a = new Uint8Array(h), c = 0; c < h; c++)
      a[c] = r.charCodeAt(c);
    i(new Blob([a], { type: e.type || "image/png" }));
  } }), this.showPreview(), this.checkedImg();
}, unmounted() {
  window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.cancelScale();
} }), we = { key: 0, class: "cropper-box" }, xe = ["src"], Ce = { class: "cropper-view-box" }, ye = ["src"], be = { key: 1 };
function Oe(e, t, i, s, o, r) {
  return W(), L("div", { class: "vue-cropper", ref: "cropper", onMouseover: t[28] || (t[28] = (...h) => e.scaleImg && e.scaleImg(...h)), onMouseout: t[29] || (t[29] = (...h) => e.cancelScale && e.cancelScale(...h)) }, [e.imgs ? (W(), L("div", we, [B(f("div", { class: "cropper-box-canvas", style: k({ width: e.trueWidth + "px", height: e.trueHeight + "px", transform: "scale(" + e.scale + "," + e.scale + ") translate3d(" + e.x / e.scale + "px," + e.y / e.scale + "px,0)rotateZ(" + e.rotate * 90 + "deg)" }) }, [f("img", { src: e.imgs, alt: "cropper-img", ref: "cropperImg" }, null, 8, xe)], 4), [[R, !e.loading]])])) : T("", true), f("div", { class: F(["cropper-drag-box", { "cropper-move": e.move && !e.crop, "cropper-crop": e.crop, "cropper-modal": e.cropping }]), onMousedown: t[0] || (t[0] = (...h) => e.startMove && e.startMove(...h)), onTouchstart: t[1] || (t[1] = (...h) => e.startMove && e.startMove(...h)) }, null, 34), B(f("div", { class: "cropper-crop-box", style: k({ width: e.cropW + "px", height: e.cropH + "px", transform: "translate3d(" + e.cropOffsertX + "px," + e.cropOffsertY + "px,0)" }) }, [f("span", Ce, [f("img", { style: k({ width: e.trueWidth + "px", height: e.trueHeight + "px", transform: "scale(" + e.scale + "," + e.scale + ") translate3d(" + (e.x - e.cropOffsertX) / e.scale + "px," + (e.y - e.cropOffsertY) / e.scale + "px,0)rotateZ(" + e.rotate * 90 + "deg)" }), src: e.imgs, alt: "cropper-img" }, null, 12, ye)]), f("span", { class: "cropper-face cropper-move", onMousedown: t[2] || (t[2] = (...h) => e.cropMove && e.cropMove(...h)), onTouchstart: t[3] || (t[3] = (...h) => e.cropMove && e.cropMove(...h)) }, null, 32), e.info ? (W(), L("span", { key: 0, class: "crop-info", style: k({ top: e.cropInfo.top }) }, Y(e.cropInfo.width) + " \xD7 " + Y(e.cropInfo.height), 5)) : T("", true), e.fixedBox ? T("", true) : (W(), L("span", be, [f("span", { class: "crop-line line-w", onMousedown: t[4] || (t[4] = (h) => e.changeCropSize(h, false, true, 0, 1)), onTouchstart: t[5] || (t[5] = (h) => e.changeCropSize(h, false, true, 0, 1)) }, null, 32), f("span", { class: "crop-line line-a", onMousedown: t[6] || (t[6] = (h) => e.changeCropSize(h, true, false, 1, 0)), onTouchstart: t[7] || (t[7] = (h) => e.changeCropSize(h, true, false, 1, 0)) }, null, 32), f("span", { class: "crop-line line-s", onMousedown: t[8] || (t[8] = (h) => e.changeCropSize(h, false, true, 0, 2)), onTouchstart: t[9] || (t[9] = (h) => e.changeCropSize(h, false, true, 0, 2)) }, null, 32), f("span", { class: "crop-line line-d", onMousedown: t[10] || (t[10] = (h) => e.changeCropSize(h, true, false, 2, 0)), onTouchstart: t[11] || (t[11] = (h) => e.changeCropSize(h, true, false, 2, 0)) }, null, 32), f("span", { class: "crop-point point1", onMousedown: t[12] || (t[12] = (h) => e.changeCropSize(h, true, true, 1, 1)), onTouchstart: t[13] || (t[13] = (h) => e.changeCropSize(h, true, true, 1, 1)) }, null, 32), f("span", { class: "crop-point point2", onMousedown: t[14] || (t[14] = (h) => e.changeCropSize(h, false, true, 0, 1)), onTouchstart: t[15] || (t[15] = (h) => e.changeCropSize(h, false, true, 0, 1)) }, null, 32), f("span", { class: "crop-point point3", onMousedown: t[16] || (t[16] = (h) => e.changeCropSize(h, true, true, 2, 1)), onTouchstart: t[17] || (t[17] = (h) => e.changeCropSize(h, true, true, 2, 1)) }, null, 32), f("span", { class: "crop-point point4", onMousedown: t[18] || (t[18] = (h) => e.changeCropSize(h, true, false, 1, 0)), onTouchstart: t[19] || (t[19] = (h) => e.changeCropSize(h, true, false, 1, 0)) }, null, 32), f("span", { class: "crop-point point5", onMousedown: t[20] || (t[20] = (h) => e.changeCropSize(h, true, false, 2, 0)), onTouchstart: t[21] || (t[21] = (h) => e.changeCropSize(h, true, false, 2, 0)) }, null, 32), f("span", { class: "crop-point point6", onMousedown: t[22] || (t[22] = (h) => e.changeCropSize(h, true, true, 1, 2)), onTouchstart: t[23] || (t[23] = (h) => e.changeCropSize(h, true, true, 1, 2)) }, null, 32), f("span", { class: "crop-point point7", onMousedown: t[24] || (t[24] = (h) => e.changeCropSize(h, false, true, 0, 2)), onTouchstart: t[25] || (t[25] = (h) => e.changeCropSize(h, false, true, 0, 2)) }, null, 32), f("span", { class: "crop-point point8", onMousedown: t[26] || (t[26] = (h) => e.changeCropSize(h, true, true, 2, 2)), onTouchstart: t[27] || (t[27] = (h) => e.changeCropSize(h, true, true, 2, 2)) }, null, 32)]))], 4), [[R, e.cropping]])], 544);
}
const He = me(ve, [["render", Oe], ["__scopeId", "data-v-a742df44"]]), We = { class: "cropper" }, Xe = { class: "cropper_left" }, Ye = { class: "reupload_box" }, Me = { class: "cropper_right" }, Se = { class: "preview_text" }, Ie = ["src"], Le = { class: "dialog-footer" }, ke = E({ __name: "index", props: { type: { default: "systemLogo" }, allowTypeList: { default: () => ["jpg", "png", "jpeg"] }, limitSize: { default: 10 }, fixedNumber: { default: () => [1, 1] }, fixedNumberAider: { default: () => [1, 1] }, previewWidth: { default: 160 }, title: { default: "\u56FE\u7247\u88C1\u526A" }, showWidth: { default: 300 }, showHeight: { default: 300 }, action: { default: "ibos" }, uploadAvatar: { type: Boolean, default: false }, cropperDisabled: { type: Boolean, default: false } }, emits: ["confirm"], setup(e, { expose: t, emit: i }) {
  const s = /* @__PURE__ */ new Map([["jpg", "image/jpg"], ["png", "image/png"], ["jpeg", "image/jpeg"], ["ico", "image/x-icon,image/ico"]]), o = e, r = i, h = I(false), a = K({ img: "", autoCrop: true, autoCropWidth: 300, autoCropHeight: 300, fixedBox: false, info: true, outputSize: 1, outputType: "png", canScale: true, fixed: true, fixedNumber: [1, 1], full: true, canMove: false, original: false, centerBox: true, infoTrue: true, accept: "image/jpeg,image/jpg,image/png,image/gif,image/x-icon", fillColor: "transparent" }), c = I({ width: "", height: "" }), n = I([]), l = I({}), p = I({}), u = I(), m = I(false), M = (g) => {
    const d = g.name.substring(g.name.lastIndexOf(".") + 1);
    return o.allowTypeList.includes(d) ? true : (D.error(`\u4EC5\u652F\u6301${n.value.join("\u3001")}\u683C\u5F0F\u7684\u56FE\u7247`), false);
  }, v = async (g) => {
    const { limitSize: d } = o, y = g.target.files[0];
    if (y.size > d * 1024 * 1024)
      return D.warning(`\u56FE\u7247\u4E0A\u4F20\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${d}MB`);
    const X = window.URL || window.webkitURL;
    if (M(y)) {
      if (a.img = X.createObjectURL(y), o.cropperDisabled) {
        m.value = true;
        const S = await A(y).finally(() => {
          m.value = false;
        }), O = `${P}/api/preview/${S.preview_key || ""}`;
        S.url = O, r("confirm", S);
        return;
      }
      h.value = true;
    }
  }, w = () => {
    p.value.refresh();
  }, C = () => {
    p.value.rotateRight();
  }, x = (g) => {
    const d = g || 1;
    p.value.changeScale(d);
  }, N = async (g) => {
    var _a;
    if (m.value)
      return;
    if (g === "reupload") {
      (_a = u.value) == null ? void 0 : _a.click();
      return;
    }
    let d = document.createElement("input");
    d.type = "file", d.accept = o.allowTypeList.map((y) => s.get(y)).join(",") || a.accept, d.onchange = v, d.click(), await oe(), d = null;
  }, A = async (g) => {
    const d = new FormData();
    d.append("file", g);
    try {
      return (await he.upload({ data: d })).data;
    } catch {
      return {};
    }
  }, Q = (g, d) => {
    const y = g.split(","), X = y[0].match(/:(.*?);/)[1], S = atob(y[1]);
    let O = S.length;
    const z = new Uint8Array(O);
    for (; O--; )
      z[O] = S.charCodeAt(O);
    return new File([z], d, { type: X });
  }, Z = () => {
    m.value = true, p.value.getCropData(async (g) => {
      const d = Q(g, "images.png"), y = await A(d).finally(() => {
        m.value = false;
      }), X = `${P}/api/preview/${y.preview_key || ""}`;
      y.url = X, r("confirm", y), h.value = false;
    });
  }, J = (g) => {
    p.value.getCropData((d) => {
      l.value.img = d;
    });
  };
  return ee(() => o, () => {
    c.value = { width: `${o.previewWidth}px`, height: `${o.previewWidth / o.fixedNumber[0]}px`, border: "1px solid #e8e8e8", "border-radius": "2px" }, n.value = [];
    for (let g = 0; g < o.allowTypeList.length; g++)
      n.value.push(o.allowTypeList[g].toUpperCase());
  }, { deep: true, immediate: true }), t({ uploadFile: N, open(g) {
    a.img = g, h.value = true;
  } }), (g, d) => {
    const y = V, X = q, S = re;
    return W(), j(S, { "model-value": h.value, title: g.$t("image_cropper"), width: "550px", "close-on-click-modal": false, "close-on-press-escape": false, "append-to-body": "", onClose: d[4] || (d[4] = (O) => h.value = false) }, { default: H(() => [f("div", We, [f("div", Xe, [b($(He), { ref_key: "cropperRef", ref: p, style: k({ width: `${g.showWidth}px`, height: `${g.showHeight}px` }), img: a.img, info: true, "info-true": a.infoTrue, "auto-crop": a.autoCrop, "fixed-box": a.fixedBox, "can-move": a.canMove, "can-scale": a.canScale, "fixed-number": g.fixedNumber, fixed: a.fixed, full: a.full, "center-box": a.centerBox, "fill-color": a.fillColor, "output-type": a.outputType, onRealTime: J }, null, 8, ["style", "img", "info-true", "auto-crop", "fixed-box", "can-move", "can-scale", "fixed-number", "fixed", "full", "center-box", "fill-color", "output-type"]), f("div", Ye, [f("div", { class: "reupload_text", onClick: d[0] || (d[0] = (O) => N("reload")) }, Y(g.$t("reupload")), 1), f("div", null, [b(y, { class: "rotate_right", onClick: d[1] || (d[1] = (O) => x(1)) }, { default: H(() => [b($(te))]), _: 1 }), b(y, { class: "rotate_right", onClick: d[2] || (d[2] = (O) => x(-1)) }, { default: H(() => [b($(ie))]), _: 1 }), b(y, { class: "rotate_right", onClick: C }, { default: H(() => [b($(se))]), _: 1 })])])]), f("div", Me, [f("div", Se, Y(g.$t("action_preview")), 1), f("div", { style: k(c.value), class: "previewImg" }, [f("img", { style: k(l.value.img), src: l.value.img, alt: "" }, null, 12, Ie)], 4)])])]), footer: H(() => [f("span", Le, [b(X, { size: "large", onClick: d[3] || (d[3] = (O) => h.value = false) }, { default: H(() => [_(Y(g.$t("action_cancel")), 1)]), _: 1 }), b(X, { size: "large", type: "", onClick: w }, { default: H(() => [_(Y(g.$t("action_reset")), 1)]), _: 1 }), b(X, { size: "large", type: "primary", loading: m.value, onClick: Z }, { default: H(() => [_(Y(g.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading"])])]), _: 1 }, 8, ["model-value", "title"]);
  };
} });
const $e = ae(ke, [["__scopeId", "data-v-143dbe6c"]]), _e = ["src"], Te = { key: 1, class: "w-full h-full flex items-center justify-center border rounded upload-image-placeholder" }, Ee = { class: "hidden group-hover:flex absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 items-center justify-center gap-6 text-xs text-white" }, Ae = E({ __name: "image", props: { modelValue: { default: "" }, text: { default: "action_replace" }, showText: { type: Boolean, default: false }, cropperDisabled: { type: Boolean, default: false }, allowTypeList: {}, disabled: { type: Boolean, default: false } }, emits: ["update:modelValue", "confirm"], setup(e, { emit: t }) {
  const i = e, s = t, o = I(), r = () => {
    i.disabled || o.value.uploadFile();
  }, h = (a = {}) => {
    s("update:modelValue", a.url), s("confirm", { url: a.url });
  };
  return (a, c) => {
    const n = q, l = V;
    return W(), L("div", { class: F(["w-[50px] h-[50px] rounded overflow-hidden relative cursor-pointer group", [a.disabled ? "cursor-not-allowed" : ""]]), onClick: le(r, ["stop"]) }, [U(a.$slots, "default", {}, () => [a.showText ? (W(), j(n, { key: 0, type: "text" }, { default: H(() => [_(Y(a.$t(a.text)), 1)]), _: 1 })) : (W(), L(ce, { key: 1 }, [a.modelValue ? (W(), L("img", { key: 0, class: "w-full h-full object-cover", src: a.modelValue, alt: "logo" }, null, 8, _e)) : (W(), L("div", Te, [b(l, { size: "16", color: "#9A9A9A" }, { default: H(() => [b($(ne))]), _: 1 })])), f("div", Ee, [U(a.$slots, "mask-text", {}, () => [_(Y(a.$t(a.text)), 1)])])], 64))]), b($e, { ref_key: "cropper_ref", ref: o, action: "python", cropperDisabled: a.cropperDisabled, allowTypeList: a.allowTypeList, onConfirm: h }, null, 8, ["cropperDisabled", "allowTypeList"])], 2);
  };
} });
export {
  Ae as _
};
