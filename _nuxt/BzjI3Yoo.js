import { aJ as o, aK as f } from "./CPIMTh_-.js";
import {
  a as u,
  A as d,
  w as v,
  y as l,
  m as i,
  l as m,
  g as h,
} from "./CS_v0reC.js";
function U(t, a = {}) {
  const e = a.head || o();
  if (e) return e.ssr ? e.push(t, a) : p(e, t, a);
}
function p(t, a, e = {}) {
  const s = u(!1),
    n = u({});
  d(() => {
    n.value = s.value ? {} : f(a);
  });
  const r = t.push(n.value, e);
  return (
    v(n, (c) => {
      r.patch(c);
    }),
    h() &&
      (l(() => {
        r.dispose();
      }),
      i(() => {
        s.value = !0;
      }),
      m(() => {
        s.value = !1;
      })),
    r
  );
}
export { U as u };
