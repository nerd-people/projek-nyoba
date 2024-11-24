import { ap as R, aq as H, ar as K, as as L } from "./CPIMTh_-.js";
import {
  a as x,
  s as N,
  t as T,
  ac as E,
  o as q,
  w as A,
  ad as k,
  u as W,
  g as $,
  ae as I,
  c as J,
  af as v,
  r as V,
} from "./CS_v0reC.js";
const z = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0,
});
function G(r, a) {
  a ? (a = { ...z, ...a }) : (a = z);
  const s = j(a);
  return s.dispatch(r), s.toString();
}
const Q = Object.freeze(["prototype", "__proto__", "constructor"]);
function j(r) {
  let a = "",
    s = new Map();
  const e = (t) => {
    a += t;
  };
  return {
    toString() {
      return a;
    },
    getContext() {
      return s;
    },
    dispatch(t) {
      return (
        r.replacer && (t = r.replacer(t)),
        this[t === null ? "null" : typeof t](t)
      );
    },
    object(t) {
      if (t && typeof t.toJSON == "function") return this.object(t.toJSON());
      const n = Object.prototype.toString.call(t);
      let i = "";
      const h = n.length;
      h < 10 ? (i = "unknown:[" + n + "]") : (i = n.slice(8, h - 1)),
        (i = i.toLowerCase());
      let c = null;
      if ((c = s.get(t)) === void 0) s.set(t, s.size);
      else return this.dispatch("[CIRCULAR:" + c + "]");
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(t))
        return e("buffer:"), e(t.toString("utf8"));
      if (i !== "object" && i !== "function" && i !== "asyncfunction")
        this[i] ? this[i](t) : r.ignoreUnknown || this.unkown(t, i);
      else {
        let f = Object.keys(t);
        r.unorderedObjects && (f = f.sort());
        let o = [];
        r.respectType !== !1 && !F(t) && (o = Q),
          r.excludeKeys &&
            ((f = f.filter((l) => !r.excludeKeys(l))),
            (o = o.filter((l) => !r.excludeKeys(l)))),
          e("object:" + (f.length + o.length) + ":");
        const p = (l) => {
          this.dispatch(l),
            e(":"),
            r.excludeValues || this.dispatch(t[l]),
            e(",");
        };
        for (const l of f) p(l);
        for (const l of o) p(l);
      }
    },
    array(t, n) {
      if (
        ((n = n === void 0 ? r.unorderedArrays !== !1 : n),
        e("array:" + t.length + ":"),
        !n || t.length <= 1)
      ) {
        for (const c of t) this.dispatch(c);
        return;
      }
      const i = new Map(),
        h = t.map((c) => {
          const f = j(r);
          f.dispatch(c);
          for (const [o, p] of f.getContext()) i.set(o, p);
          return f.toString();
        });
      return (s = i), h.sort(), this.array(h, !1);
    },
    date(t) {
      return e("date:" + t.toJSON());
    },
    symbol(t) {
      return e("symbol:" + t.toString());
    },
    unkown(t, n) {
      if ((e(n), !!t && (e(":"), t && typeof t.entries == "function")))
        return this.array(Array.from(t.entries()), !0);
    },
    error(t) {
      return e("error:" + t.toString());
    },
    boolean(t) {
      return e("bool:" + t);
    },
    string(t) {
      e("string:" + t.length + ":"), e(t);
    },
    function(t) {
      e("fn:"),
        F(t) ? this.dispatch("[native]") : this.dispatch(t.toString()),
        r.respectFunctionNames !== !1 &&
          this.dispatch("function-name:" + String(t.name)),
        r.respectFunctionProperties && this.object(t);
    },
    number(t) {
      return e("number:" + t);
    },
    xml(t) {
      return e("xml:" + t.toString());
    },
    null() {
      return e("Null");
    },
    undefined() {
      return e("Undefined");
    },
    regexp(t) {
      return e("regex:" + t.toString());
    },
    uint8array(t) {
      return e("uint8array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    uint8clampedarray(t) {
      return (
        e("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(t))
      );
    },
    int8array(t) {
      return e("int8array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    uint16array(t) {
      return e("uint16array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    int16array(t) {
      return e("int16array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    uint32array(t) {
      return e("uint32array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    int32array(t) {
      return e("int32array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    float32array(t) {
      return e("float32array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    float64array(t) {
      return e("float64array:"), this.dispatch(Array.prototype.slice.call(t));
    },
    arraybuffer(t) {
      return e("arraybuffer:"), this.dispatch(new Uint8Array(t));
    },
    url(t) {
      return e("url:" + t.toString());
    },
    map(t) {
      e("map:");
      const n = [...t];
      return this.array(n, r.unorderedSets !== !1);
    },
    set(t) {
      e("set:");
      const n = [...t];
      return this.array(n, r.unorderedSets !== !1);
    },
    file(t) {
      return e("file:"), this.dispatch([t.name, t.size, t.type, t.lastModfied]);
    },
    blob() {
      if (r.ignoreUnknown) return e("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    domwindow() {
      return e("domwindow");
    },
    bigint(t) {
      return e("bigint:" + t.toString());
    },
    process() {
      return e("process");
    },
    timer() {
      return e("timer");
    },
    pipe() {
      return e("pipe");
    },
    tcp() {
      return e("tcp");
    },
    udp() {
      return e("udp");
    },
    tty() {
      return e("tty");
    },
    statwatcher() {
      return e("statwatcher");
    },
    securecontext() {
      return e("securecontext");
    },
    connection() {
      return e("connection");
    },
    zlib() {
      return e("zlib");
    },
    context() {
      return e("context");
    },
    nodescript() {
      return e("nodescript");
    },
    httpparser() {
      return e("httpparser");
    },
    dataview() {
      return e("dataview");
    },
    signal() {
      return e("signal");
    },
    fsevent() {
      return e("fsevent");
    },
    tlswrap() {
      return e("tlswrap");
    },
  };
}
const M = "[native code] }",
  X = M.length;
function F(r) {
  return typeof r != "function"
    ? !1
    : Function.prototype.toString.call(r).slice(-X) === M;
}
class w {
  constructor(a, s) {
    (a = this.words = a || []),
      (this.sigBytes = s === void 0 ? a.length * 4 : s);
  }
  toString(a) {
    return (a || Y).stringify(this);
  }
  concat(a) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let s = 0; s < a.sigBytes; s++) {
        const e = (a.words[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
        this.words[(this.sigBytes + s) >>> 2] |=
          e << (24 - ((this.sigBytes + s) % 4) * 8);
      }
    else
      for (let s = 0; s < a.sigBytes; s += 4)
        this.words[(this.sigBytes + s) >>> 2] = a.words[s >>> 2];
    return (this.sigBytes += a.sigBytes), this;
  }
  clamp() {
    (this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4));
  }
  clone() {
    return new w([...this.words]);
  }
}
const Y = {
    stringify(r) {
      const a = [];
      for (let s = 0; s < r.sigBytes; s++) {
        const e = (r.words[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
        a.push((e >>> 4).toString(16), (e & 15).toString(16));
      }
      return a.join("");
    },
  },
  Z = {
    stringify(r) {
      const a =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        s = [];
      for (let e = 0; e < r.sigBytes; e += 3) {
        const t = (r.words[e >>> 2] >>> (24 - (e % 4) * 8)) & 255,
          n = (r.words[(e + 1) >>> 2] >>> (24 - ((e + 1) % 4) * 8)) & 255,
          i = (r.words[(e + 2) >>> 2] >>> (24 - ((e + 2) % 4) * 8)) & 255,
          h = (t << 16) | (n << 8) | i;
        for (let c = 0; c < 4 && e * 8 + c * 6 < r.sigBytes * 8; c++)
          s.push(a.charAt((h >>> (6 * (3 - c))) & 63));
      }
      return s.join("");
    },
  },
  tt = {
    parse(r) {
      const a = r.length,
        s = [];
      for (let e = 0; e < a; e++)
        s[e >>> 2] |= (r.charCodeAt(e) & 255) << (24 - (e % 4) * 8);
      return new w(s, a);
    },
  },
  et = {
    parse(r) {
      return tt.parse(unescape(encodeURIComponent(r)));
    },
  };
class st {
  constructor() {
    (this._data = new w()),
      (this._nDataBytes = 0),
      (this._minBufferSize = 0),
      (this.blockSize = 512 / 32);
  }
  reset() {
    (this._data = new w()), (this._nDataBytes = 0);
  }
  _append(a) {
    typeof a == "string" && (a = et.parse(a)),
      this._data.concat(a),
      (this._nDataBytes += a.sigBytes);
  }
  _doProcessBlock(a, s) {}
  _process(a) {
    let s,
      e = this._data.sigBytes / (this.blockSize * 4);
    a ? (e = Math.ceil(e)) : (e = Math.max((e | 0) - this._minBufferSize, 0));
    const t = e * this.blockSize,
      n = Math.min(t * 4, this._data.sigBytes);
    if (t) {
      for (let i = 0; i < t; i += this.blockSize)
        this._doProcessBlock(this._data.words, i);
      (s = this._data.words.splice(0, t)), (this._data.sigBytes -= n);
    }
    return new w(s, n);
  }
}
class rt extends st {
  update(a) {
    return this._append(a), this._process(), this;
  }
  finalize(a) {
    a && this._append(a);
  }
}
const U = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  at = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  B = [];
class nt extends rt {
  constructor() {
    super(...arguments), (this._hash = new w([...U]));
  }
  reset() {
    super.reset(), (this._hash = new w([...U]));
  }
  _doProcessBlock(a, s) {
    const e = this._hash.words;
    let t = e[0],
      n = e[1],
      i = e[2],
      h = e[3],
      c = e[4],
      f = e[5],
      o = e[6],
      p = e[7];
    for (let l = 0; l < 64; l++) {
      if (l < 16) B[l] = a[s + l] | 0;
      else {
        const m = B[l - 15],
          S = ((m << 25) | (m >>> 7)) ^ ((m << 14) | (m >>> 18)) ^ (m >>> 3),
          y = B[l - 2],
          C = ((y << 15) | (y >>> 17)) ^ ((y << 13) | (y >>> 19)) ^ (y >>> 10);
        B[l] = S + B[l - 7] + C + B[l - 16];
      }
      const b = (c & f) ^ (~c & o),
        D = (t & n) ^ (t & i) ^ (n & i),
        d =
          ((t << 30) | (t >>> 2)) ^
          ((t << 19) | (t >>> 13)) ^
          ((t << 10) | (t >>> 22)),
        _ =
          ((c << 26) | (c >>> 6)) ^
          ((c << 21) | (c >>> 11)) ^
          ((c << 7) | (c >>> 25)),
        g = p + _ + b + at[l] + B[l],
        u = d + D;
      (p = o),
        (o = f),
        (f = c),
        (c = (h + g) | 0),
        (h = i),
        (i = n),
        (n = t),
        (t = (g + u) | 0);
    }
    (e[0] = (e[0] + t) | 0),
      (e[1] = (e[1] + n) | 0),
      (e[2] = (e[2] + i) | 0),
      (e[3] = (e[3] + h) | 0),
      (e[4] = (e[4] + c) | 0),
      (e[5] = (e[5] + f) | 0),
      (e[6] = (e[6] + o) | 0),
      (e[7] = (e[7] + p) | 0);
  }
  finalize(a) {
    super.finalize(a);
    const s = this._nDataBytes * 8,
      e = this._data.sigBytes * 8;
    return (
      (this._data.words[e >>> 5] |= 128 << (24 - (e % 32))),
      (this._data.words[(((e + 64) >>> 9) << 4) + 14] = Math.floor(
        s / 4294967296
      )),
      (this._data.words[(((e + 64) >>> 9) << 4) + 15] = s),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    );
  }
}
function it(r) {
  return new nt().finalize(r).toString(Z);
}
function ot(r, a = {}) {
  const s = typeof r == "string" ? r : G(r, a);
  return it(s).slice(0, 10);
}
const ct = (r) => r === "defer" || r === !1;
function lt(...r) {
  var D;
  const a = typeof r[r.length - 1] == "string" ? r.pop() : void 0;
  typeof r[0] != "string" && r.unshift(a);
  let [s, e, t = {}] = r;
  if (typeof s != "string")
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof e != "function")
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const n = H(),
    i = e,
    h = () => null,
    c = () => (n.isHydrating ? n.payload.data[s] : n.static.data[s]);
  (t.server = t.server ?? !0),
    (t.default = t.default ?? h),
    (t.getCachedData = t.getCachedData ?? c),
    (t.lazy = t.lazy ?? !1),
    (t.immediate = t.immediate ?? !0),
    (t.deep = t.deep ?? R.deep),
    (t.dedupe = t.dedupe ?? "cancel");
  const f = () => t.getCachedData(s, n) != null;
  if (!n._asyncData[s] || !t.immediate) {
    (D = n.payload._errors)[s] ?? (D[s] = null);
    const d = t.deep ? x : N;
    n._asyncData[s] = {
      data: d(t.getCachedData(s, n) ?? t.default()),
      pending: x(!f()),
      error: T(n.payload._errors, s),
      status: x("idle"),
    };
  }
  const o = { ...n._asyncData[s] };
  (o.refresh = o.execute =
    (d = {}) => {
      if (n._asyncDataPromises[s]) {
        if (ct(d.dedupe ?? t.dedupe)) return n._asyncDataPromises[s];
        n._asyncDataPromises[s].cancelled = !0;
      }
      if ((d._initial || (n.isHydrating && d._initial !== !1)) && f())
        return Promise.resolve(t.getCachedData(s, n));
      (o.pending.value = !0), (o.status.value = "pending");
      const _ = new Promise((g, u) => {
        try {
          g(i(n));
        } catch (m) {
          u(m);
        }
      })
        .then(async (g) => {
          if (_.cancelled) return n._asyncDataPromises[s];
          let u = g;
          t.transform && (u = await t.transform(g)),
            t.pick && (u = ft(u, t.pick)),
            (n.payload.data[s] = u),
            (o.data.value = u),
            (o.error.value = null),
            (o.status.value = "success");
        })
        .catch((g) => {
          if (_.cancelled) return n._asyncDataPromises[s];
          (o.error.value = K(g)),
            (o.data.value = W(t.default())),
            (o.status.value = "error");
        })
        .finally(() => {
          _.cancelled ||
            ((o.pending.value = !1), delete n._asyncDataPromises[s]);
        });
      return (n._asyncDataPromises[s] = _), n._asyncDataPromises[s];
    }),
    (o.clear = () => ut(n, s));
  const p = () => o.refresh({ _initial: !0 }),
    l = t.server !== !1 && n.payload.serverRendered;
  {
    const d = $();
    if (d && !d._nuxtOnBeforeMountCbs) {
      d._nuxtOnBeforeMountCbs = [];
      const u = d._nuxtOnBeforeMountCbs;
      E(() => {
        u.forEach((m) => {
          m();
        }),
          u.splice(0, u.length);
      }),
        q(() => u.splice(0, u.length));
    }
    l && n.isHydrating && (o.error.value || f())
      ? ((o.pending.value = !1),
        (o.status.value = o.error.value ? "error" : "success"))
      : d &&
        ((n.payload.serverRendered && n.isHydrating) || t.lazy) &&
        t.immediate
      ? d._nuxtOnBeforeMountCbs.push(p)
      : t.immediate && p();
    const _ = I();
    if (t.watch) {
      const u = A(t.watch, () => o.refresh());
      _ && k(u);
    }
    const g = n.hook("app:data:refresh", async (u) => {
      (!u || u.includes(s)) && (await o.refresh());
    });
    _ && k(g);
  }
  const b = Promise.resolve(n._asyncDataPromises[s]).then(() => o);
  return Object.assign(b, o), b;
}
function ut(r, a) {
  a in r.payload.data && (r.payload.data[a] = void 0),
    a in r.payload._errors && (r.payload._errors[a] = null),
    r._asyncData[a] &&
      ((r._asyncData[a].data.value = void 0),
      (r._asyncData[a].error.value = null),
      (r._asyncData[a].pending.value = !1),
      (r._asyncData[a].status.value = "idle")),
    a in r._asyncDataPromises &&
      ((r._asyncDataPromises[a].cancelled = !0),
      (r._asyncDataPromises[a] = void 0));
}
function ft(r, a) {
  const s = {};
  for (const e of a) s[e] = r[e];
  return s;
}
function gt(r, a, s) {
  const [e = {}, t] = typeof a == "string" ? [{}, a] : [a, s],
    n = J(() => v(r)),
    i = e.key || ot([t, typeof n.value == "string" ? n.value : "", ...ht(e)]);
  if (!i || typeof i != "string")
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + i);
  if (!r) throw new Error("[nuxt] [useFetch] request is missing.");
  const h = i === t ? "$f" + i : i;
  if (
    !e.baseURL &&
    typeof n.value == "string" &&
    n.value[0] === "/" &&
    n.value[1] === "/"
  )
    throw new Error(
      '[nuxt] [useFetch] the request URL must not start with "//".'
    );
  const {
      server: c,
      lazy: f,
      default: o,
      transform: p,
      pick: l,
      watch: b,
      immediate: D,
      getCachedData: d,
      deep: _,
      dedupe: g,
      ...u
    } = e,
    m = V({
      ...L,
      ...u,
      cache: typeof e.cache == "boolean" ? void 0 : e.cache,
    }),
    S = {
      server: c,
      lazy: f,
      default: o,
      transform: p,
      pick: l,
      immediate: D,
      getCachedData: d,
      deep: _,
      dedupe: g,
      watch: b === !1 ? [] : [m, n, ...(b || [])],
    };
  let y;
  return lt(
    h,
    () => {
      var O;
      (O = y == null ? void 0 : y.abort) == null || O.call(y),
        (y = typeof AbortController < "u" ? new AbortController() : {});
      const P = v(e.timeout);
      return (
        P && setTimeout(() => y.abort(), P),
        (e.$fetch || globalThis.$fetch)(n.value, { signal: y.signal, ...m })
      );
    },
    S
  );
}
function ht(r) {
  var s;
  const a = [
    ((s = v(r.method)) == null ? void 0 : s.toUpperCase()) || "GET",
    v(r.baseURL),
  ];
  for (const e of [r.params || r.query]) {
    const t = v(e);
    if (!t) continue;
    const n = {};
    for (const [i, h] of Object.entries(t)) n[v(i)] = v(h);
    a.push(n);
  }
  return a;
}
export { gt as u };
