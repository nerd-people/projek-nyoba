import {
  f as p,
  p as f,
  g as y,
  a6 as $,
  a7 as w,
  D as A,
  a1 as L,
  a8 as N,
  V as B,
} from "./CPIMTh_-.js";
import { d as M, a as S, r as U, w as Y, z as l, n as z } from "./CS_v0reC.js";
const [C, r, F] = p("pull-refresh"),
  x = 50,
  G = ["pulling", "loosing", "success"],
  I = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: f(x),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: y,
    successDuration: f(500),
    animationDuration: f(300),
  };
var j = M({
  name: C,
  props: I,
  emits: ["change", "refresh", "update:modelValue"],
  setup(s, { emit: d, slots: o }) {
    let u;
    const g = S(),
      T = S(),
      H = $(g),
      e = U({ status: "normal", distance: 0, duration: 0 }),
      i = w(),
      P = () => {
        if (s.headHeight !== x) return { height: `${s.headHeight}px` };
      },
      h = () => e.status !== "loading" && e.status !== "success" && !s.disabled,
      V = (t) => {
        const a = +(s.pullDistance || s.headHeight);
        return (
          t > a &&
            (t < a * 2
              ? (t = a + (t - a) / 2)
              : (t = a * 1.5 + (t - a * 2) / 4)),
          Math.round(t)
        );
      },
      n = (t, a) => {
        const c = +(s.pullDistance || s.headHeight);
        (e.distance = t),
          a
            ? (e.status = "loading")
            : t === 0
            ? (e.status = "normal")
            : t < c
            ? (e.status = "pulling")
            : (e.status = "loosing"),
          d("change", { status: e.status, distance: t });
      },
      m = () => {
        const { status: t } = e;
        return t === "normal" ? "" : s[`${t}Text`] || F(t);
      },
      k = () => {
        const { status: t, distance: a } = e;
        if (o[t]) return o[t]({ distance: a });
        const c = [];
        return (
          G.includes(t) && c.push(l("div", { class: r("text") }, [m()])),
          t === "loading" &&
            c.push(l(L, { class: r("loading") }, { default: m })),
          c
        );
      },
      E = () => {
        (e.status = "success"),
          setTimeout(() => {
            n(0);
          }, +s.successDuration);
      },
      v = (t) => {
        (u = N(H.value) === 0), u && ((e.duration = 0), i.start(t));
      },
      _ = (t) => {
        h() && v(t);
      },
      b = (t) => {
        if (h()) {
          u || v(t);
          const { deltaY: a } = i;
          i.move(t),
            u && a.value >= 0 && i.isVertical() && (B(t), n(V(a.value)));
        }
      },
      D = () => {
        u &&
          i.deltaY.value &&
          h() &&
          ((e.duration = +s.animationDuration),
          e.status === "loosing"
            ? (n(+s.headHeight, !0),
              d("update:modelValue", !0),
              z(() => d("refresh")))
            : n(0));
      };
    return (
      Y(
        () => s.modelValue,
        (t) => {
          (e.duration = +s.animationDuration),
            t
              ? n(+s.headHeight, !0)
              : o.success || s.successText
              ? E()
              : n(0, !1);
        }
      ),
      A("touchmove", b, { target: T }),
      () => {
        var t;
        const a = {
          transitionDuration: `${e.duration}ms`,
          transform: e.distance ? `translate3d(0,${e.distance}px, 0)` : "",
        };
        return l("div", { ref: g, class: r() }, [
          l(
            "div",
            {
              ref: T,
              class: r("track"),
              style: a,
              onTouchstartPassive: _,
              onTouchend: D,
              onTouchcancel: D,
            },
            [
              l("div", { class: r("head"), style: P() }, [k()]),
              (t = o.default) == null ? void 0 : t.call(o),
            ]
          ),
        ]);
      }
    );
  },
});
export { j as s };
