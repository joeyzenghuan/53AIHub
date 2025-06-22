var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as _, a as z, s as G, M as K, D as L, V as O, E as g, T as Y, W as j, k as H, g as J, __tla as __tla_0 } from "./input.vue_vue_type_style_index_0_lang-0b377bda.js";
import { y as Q, r, Y as X, $ as P, o as Z, a as ee, b as B, c as S, f as te, q as ae, a7 as oe, u as ne, t as le, e as se, F as ie, n as m, __tla as __tla_1 } from "./index-8579fe4a.js";
let de;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  let re;
  re = {
    key: 0,
    class: "px-2 py-px text-right text-[#182B50] text-opacity-60 text-xs"
  };
  de = Q({
    __name: "input",
    props: {
      modelValue: {
        default: ""
      },
      placeholder: {
        default: "form_input_placeholder"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showLine: {
        type: Boolean,
        default: false
      },
      showToken: {
        type: Boolean,
        default: false
      },
      variables: {
        default: () => []
      },
      wordWrap: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "change",
      "input",
      "update:modelValue",
      "focus",
      "blur"
    ],
    setup(M, { expose: W, emit: A }) {
      const l = M, c = A, b = r(), o = r(null), s = r(null), w = r(0), n = r(""), i = r(-1), p = _.define(), F = z.define({
        create() {
          return null;
        },
        update(e, t) {
          for (const a of t.effects)
            if (a.is(p))
              return a.value;
          return e;
        },
        provide: (e) => G.from(e)
      }), N = (e) => {
        for (const t of l.variables) {
          const a = t.children.find((u) => u.value === e);
          if (a)
            return {
              ...a,
              group: t.label
            };
        }
        return null;
      };
      class $ extends j {
        constructor(t, a) {
          super();
          __publicField(this, "name");
          __publicField(this, "value");
          this.name = t, this.value = a;
        }
        eq(t) {
          return this.name === t.name;
        }
        toDOM() {
          const t = document.createElement("span");
          return t.style.cssText = `
      color: rgb(42, 100, 231);
      padding: 0 4px;`, t.textContent = this.name, t;
        }
        ignoreEvent() {
          return false;
        }
      }
      const k = new K({
        regexp: /(\{\#(\S+?)\#\}|\{\{(\S+?)\}\})/g,
        decoration: (e) => {
          const t = N(e[0]);
          return t ? L.replace({
            widget: new $(t == null ? void 0 : t.label, e[1])
          }) : "";
        }
      }), q = O.fromClass(class {
        constructor(e) {
          __publicField(this, "variablePlugin");
          this.variablePlugin = k.createDeco(e);
        }
        update(e) {
          this.variablePlugin = k.updateDeco(e, this.variablePlugin);
        }
      }, {
        decorations: (e) => e.variablePlugin,
        provide: (e) => g.atomicRanges.of((t) => {
          var _a;
          return ((_a = t.plugin(e)) == null ? void 0 : _a.variablePlugin) || L.none;
        })
      });
      let y;
      const T = () => {
        l.showToken && (clearTimeout(y), y = setTimeout(() => {
          const e = n.value, t = J("cl100k_base"), a = t.encode(e);
          t.free(), w.value = e.trim() ? a.length : 0;
        }, 200));
      }, I = () => {
        m(() => {
          c("update:modelValue", n.value), c("change", n.value), c("input", n.value);
        }), T();
      }, V = (e, t, a) => {
        o.value.dispatch({
          changes: {
            from: e,
            to: t,
            insert: a
          }
        });
      }, x = () => {
        s.value.querySelectorAll(".tooltip-item").forEach((t, a) => {
          a === i.value ? (t.classList.add("selected"), t.scrollIntoView({
            block: "nearest"
          })) : t.classList.remove("selected");
        });
      }, f = () => {
        o.value && o.value.dispatch({
          effects: p.of(null)
        }), document.removeEventListener("keydown", E, true);
      }, E = (e) => {
        if (!s.value)
          return;
        const t = s.value.querySelectorAll(".tooltip-item");
        switch (e.key) {
          case "ArrowDown":
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation();
            const a = e.key === "ArrowDown" ? 1 : -1;
            i.value = Math.max(0, Math.min(i.value + a, t.length - 1)), x();
            break;
          case "Enter":
            e.preventDefault(), e.stopPropagation(), i.value >= 0 && (t[i.value].click(), f());
            break;
        }
      }, C = (e, t) => {
        const a = document.createElement("div");
        a.className = "variable-tooltip", s.value = a, l.variables.forEach((u) => {
          const v = document.createElement("div");
          v.className = "tooltip-title", v.textContent = u.label, a.appendChild(v), u.children.forEach((h) => {
            const d = document.createElement("div");
            d.className = "tooltip-item", d.textContent = h.label, d.dataset.value = h.value, d.onclick = () => {
              V(e, t, h.value), f();
            }, a.appendChild(d);
          });
        }), o.value.dispatch({
          effects: p.of({
            pos: e,
            above: true,
            create: () => ({
              dom: a
            })
          })
        }), m(() => {
          i.value = 0, x(), document.addEventListener("keydown", E, true);
        });
      }, R = X(() => {
        const e = [
          g.updateListener.of((t) => {
            o.value = t.view, t.docChanged && t.view.dispatch({
              effects: p.of(null)
            });
          })
        ];
        return l.wordWrap && e.push(g.lineWrapping), l.variables && l.variables.length && e.push(q, F, H.of([
          {
            key: "/",
            run(t) {
              const a = t.state.selection.main.head;
              return setTimeout(() => {
                t.state.selection.main.head === a + 1 && C(a, a + 1);
              }, 200), false;
            }
          }
        ])), e;
      }), U = () => {
        m(() => {
          if (o.value) {
            const e = o.value.state.doc.lines - 1, t = o.value.state.doc.line(e).to;
            o.value.dispatch({
              selection: {
                anchor: t,
                head: t
              },
              scrollIntoView: true
            });
          }
        });
      };
      P(() => l.modelValue, () => {
        n.value = l.modelValue, T();
      }, {
        immediate: true
      }), P(() => l.variables, () => {
        b.value && setTimeout(async () => {
          const e = n.value;
          n.value = "", await m(), n.value = e;
        }, 200);
      }, {
        deep: true
      });
      const D = (e) => {
        s.value && !s.value.contains(e.target) && f();
      };
      return Z(() => {
        document.addEventListener("click", D);
      }), ee(() => {
        document.removeEventListener("click", D);
      }), W({
        showTooltip() {
          const e = Math.max(o.value.state.doc.length, 0);
          C(e, e);
        },
        insertContent(e) {
          const t = Math.max(o.value.state.doc.length, 0);
          V(t, t, e);
        },
        forceUpdate(e = "") {
          n.value = e;
        },
        scrollToBottom: U
      }), (e, t) => (B(), S(ie, null, [
        te(ne(Y), {
          ref_key: "codemirrorRef",
          ref: b,
          modelValue: n.value,
          "onUpdate:modelValue": t[0] || (t[0] = (a) => n.value = a),
          disabled: e.disabled,
          class: ae([
            "w-full prompt-code",
            [
              e.showLine ? "" : "prompt-line--hidden"
            ]
          ]),
          placeholder: e.$t(e.placeholder),
          "indent-with-tab": false,
          "tab-size": 2,
          extensions: R.value,
          style: oe(e.$attrs.style),
          onChange: I,
          onFocus: t[1] || (t[1] = (a) => c("focus")),
          onBlur: t[2] || (t[2] = (a) => c("blur"))
        }, null, 8, [
          "modelValue",
          "disabled",
          "class",
          "placeholder",
          "extensions",
          "style"
        ]),
        e.showToken ? (B(), S("div", re, le(w.value) + "\u4E2Atoken ", 1)) : se("", true)
      ], 64));
    }
  });
});
export {
  de as _,
  __tla
};
