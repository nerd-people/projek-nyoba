import { u as v } from "./BUTK-O5U.js";
import { f as w, l as G, o as k } from "./CPIMTh_-.js";
import { d as M, z as e } from "./CS_v0reC.js";
const [B, s] = w("empty"),
  S = {
    image: k("default"),
    imageSize: [Number, String, Array],
    description: String,
  };
var b = M({
  name: B,
  props: S,
  setup(o, { slots: a }) {
    const F = () => {
        const t = a.description ? a.description() : o.description;
        if (t) return e("p", { class: s("description") }, [t]);
      },
      f = () => {
        if (a.default) return e("div", { class: s("bottom") }, [a.default()]);
      },
      u = v(),
      l = (t) => `${u}-${t}`,
      r = (t) => `url(#${l(t)})`,
      i = (t, d, D) =>
        e(
          "stop",
          { "stop-color": t, offset: `${d}%`, "stop-opacity": D },
          null
        ),
      n = (t, d) => [i(t, 0), i(d, 100)],
      x = (t) => [
        e("defs", null, [
          e(
            "radialGradient",
            {
              id: l(t),
              cx: "50%",
              cy: "54%",
              fx: "50%",
              fy: "54%",
              r: "297%",
              gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)",
            },
            [i("#EBEDF0", 0), i("#F2F3F5", 100, 0.3)]
          ),
        ]),
        e(
          "ellipse",
          { fill: r(t), opacity: ".8", cx: "80", cy: "140", rx: "46", ry: "8" },
          null
        ),
      ],
      c = () => [
        e("defs", null, [
          e(
            "linearGradient",
            { id: l("a"), x1: "64%", y1: "100%", x2: "64%" },
            [i("#FFF", 0, 0.5), i("#F2F3F5", 100)]
          ),
        ]),
        e("g", { opacity: ".8" }, [
          e("path", { d: "M36 131V53H16v20H2v58h34z", fill: r("a") }, null),
          e("path", { d: "M123 15h22v14h9v77h-31V15z", fill: r("a") }, null),
        ]),
      ],
      h = () => [
        e("defs", null, [
          e(
            "linearGradient",
            { id: l("b"), x1: "64%", y1: "97%", x2: "64%", y2: "0%" },
            [i("#F2F3F5", 0, 0.3), i("#F2F3F5", 100)]
          ),
        ]),
        e("g", { opacity: ".8" }, [
          e(
            "path",
            {
              d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
              fill: r("b"),
            },
            null
          ),
          e(
            "path",
            {
              d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
              fill: r("b"),
            },
            null
          ),
        ]),
      ],
      y = () =>
        e("svg", { viewBox: "0 0 160 160" }, [
          e("defs", null, [
            e(
              "linearGradient",
              { id: l(1), x1: "64%", y1: "100%", x2: "64%" },
              [i("#FFF", 0, 0.5), i("#F2F3F5", 100)]
            ),
            e("linearGradient", { id: l(2), x1: "50%", x2: "50%", y2: "84%" }, [
              i("#EBEDF0", 0),
              i("#DCDEE0", 100, 0),
            ]),
            e(
              "linearGradient",
              { id: l(3), x1: "100%", x2: "100%", y2: "100%" },
              [n("#EAEDF0", "#DCDEE0")]
            ),
            e(
              "radialGradient",
              {
                id: l(4),
                cx: "50%",
                cy: "0%",
                fx: "50%",
                fy: "0%",
                r: "100%",
                gradientTransform: "matrix(0 1 -.54 0 .5 -.5)",
              },
              [i("#EBEDF0", 0), i("#FFF", 100, 0)]
            ),
          ]),
          e("g", { fill: "none" }, [
            c(),
            e("path", { fill: r(4), d: "M0 139h160v21H0z" }, null),
            e(
              "path",
              {
                d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
                fill: r(2),
              },
              null
            ),
            e(
              "g",
              { opacity: ".6", "stroke-linecap": "round", "stroke-width": "7" },
              [
                e(
                  "path",
                  { d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13", stroke: r(3) },
                  null
                ),
                e("path", { d: "M53 36a34 34 0 0 0 0 48", stroke: r(3) }, null),
                e(
                  "path",
                  { d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13", stroke: r(3) },
                  null
                ),
                e(
                  "path",
                  { d: "M106 84a34 34 0 0 0 0-48", stroke: r(3) },
                  null
                ),
              ]
            ),
            e("g", { transform: "translate(31 105)" }, [
              e(
                "rect",
                { fill: "#EBEDF0", width: "98", height: "34", rx: "2" },
                null
              ),
              e(
                "rect",
                {
                  fill: "#FFF",
                  x: "9",
                  y: "8",
                  width: "80",
                  height: "18",
                  rx: "1.1",
                },
                null
              ),
              e(
                "rect",
                {
                  fill: "#EBEDF0",
                  x: "15",
                  y: "12",
                  width: "18",
                  height: "6",
                  rx: "1.1",
                },
                null
              ),
            ]),
          ]),
        ]),
      g = () =>
        e("svg", { viewBox: "0 0 160 160" }, [
          e("defs", null, [
            e(
              "linearGradient",
              { x1: "50%", x2: "50%", y2: "100%", id: l(5) },
              [n("#F2F3F5", "#DCDEE0")]
            ),
            e(
              "linearGradient",
              { x1: "95%", y1: "48%", x2: "5.5%", y2: "51%", id: l(6) },
              [n("#EAEDF1", "#DCDEE0")]
            ),
            e(
              "linearGradient",
              { y1: "45%", x2: "100%", y2: "54%", id: l(7) },
              [n("#EAEDF1", "#DCDEE0")]
            ),
          ]),
          c(),
          h(),
          e("g", { transform: "translate(36 50)", fill: "none" }, [
            e("g", { transform: "translate(8)" }, [
              e(
                "rect",
                {
                  fill: "#EBEDF0",
                  opacity: ".6",
                  x: "38",
                  y: "13",
                  width: "36",
                  height: "53",
                  rx: "2",
                },
                null
              ),
              e(
                "rect",
                { fill: r(5), width: "64", height: "66", rx: "2" },
                null
              ),
              e(
                "rect",
                {
                  fill: "#FFF",
                  x: "6",
                  y: "6",
                  width: "52",
                  height: "55",
                  rx: "1",
                },
                null
              ),
              e("g", { transform: "translate(15 17)", fill: r(6) }, [
                e("rect", { width: "34", height: "6", rx: "1" }, null),
                e("path", { d: "M0 14h34v6H0z" }, null),
                e("rect", { y: "28", width: "34", height: "6", rx: "1" }, null),
              ]),
            ]),
            e(
              "rect",
              { fill: r(7), y: "61", width: "88", height: "28", rx: "1" },
              null
            ),
            e(
              "rect",
              {
                fill: "#F7F8FA",
                x: "29",
                y: "72",
                width: "30",
                height: "6",
                rx: "1",
              },
              null
            ),
          ]),
        ]),
      p = () =>
        e("svg", { viewBox: "0 0 160 160" }, [
          e("defs", null, [
            e(
              "linearGradient",
              { x1: "50%", x2: "50%", y2: "100%", id: l(8) },
              [n("#EAEDF1", "#DCDEE0")]
            ),
          ]),
          c(),
          h(),
          x("c"),
          e(
            "path",
            {
              d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
              fill: r(8),
            },
            null
          ),
        ]),
      E = () =>
        e("svg", { viewBox: "0 0 160 160" }, [
          e("defs", null, [
            e(
              "linearGradient",
              { x1: "50%", y1: "100%", x2: "50%", id: l(9) },
              [n("#EEE", "#D8D8D8")]
            ),
            e(
              "linearGradient",
              { x1: "100%", y1: "50%", y2: "50%", id: l(10) },
              [n("#F2F3F5", "#DCDEE0")]
            ),
            e(
              "linearGradient",
              { x1: "50%", x2: "50%", y2: "100%", id: l(11) },
              [n("#F2F3F5", "#DCDEE0")]
            ),
            e(
              "linearGradient",
              { x1: "50%", x2: "50%", y2: "100%", id: l(12) },
              [n("#FFF", "#F7F8FA")]
            ),
          ]),
          c(),
          h(),
          x("d"),
          e("g", { transform: "rotate(-45 113 -4)", fill: "none" }, [
            e(
              "rect",
              {
                fill: r(9),
                x: "24",
                y: "52.8",
                width: "5.8",
                height: "19",
                rx: "1",
              },
              null
            ),
            e(
              "rect",
              {
                fill: r(10),
                x: "22.1",
                y: "67.3",
                width: "9.9",
                height: "28",
                rx: "1",
              },
              null
            ),
            e(
              "circle",
              {
                stroke: r(11),
                "stroke-width": "8",
                cx: "27",
                cy: "27",
                r: "27",
              },
              null
            ),
            e("circle", { fill: r(12), cx: "27", cy: "27", r: "16" }, null),
            e(
              "path",
              {
                d: "M37 7c-8 0-15 5-16 12",
                stroke: r(11),
                "stroke-width": "3",
                opacity: ".5",
                "stroke-linecap": "round",
                transform: "rotate(45 29 13)",
              },
              null
            ),
          ]),
        ]),
      m = () => {
        var t;
        if (a.image) return a.image();
        const d = { error: p, search: E, network: y, default: g };
        return (
          ((t = d[o.image]) == null ? void 0 : t.call(d)) ||
          e("img", { src: o.image }, null)
        );
      };
    return () =>
      e("div", { class: s() }, [
        e("div", { class: s("image"), style: G(o.imageSize) }, [m()]),
        F(),
        f(),
      ]);
  },
});
export { b as s };
