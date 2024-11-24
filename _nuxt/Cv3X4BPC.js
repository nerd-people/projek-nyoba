import { aL as e } from "./CPIMTh_-.js";
import "./CS_v0reC.js";
class t extends e {
  constructor() {
    super();
  }
  async show() {
    return new Promise((o) => {
      console.log("Navigation Bar Showed!"), o();
    });
  }
  async hide() {
    return new Promise((o) => {
      console.log("Navigation Bar Hided!"), o();
    });
  }
  async setColor(o) {
    return new Promise((r) => {
      console.log(
        `Navigation Bar color changed to ${
          o.color ? o.color : "#FFFFFF"
        } : Dark Buttons: ${o.darkButtons ? "YES" : "NO"}`
      ),
        r();
    });
  }
  async setTransparency(o) {
    return new Promise((r) => {
      console.log(
        `Navigation Bar is transparent: ${o.isTransparent ? "YES" : "NO"}`
      ),
        r();
    });
  }
  async getColor() {
    return new Promise((o) => {
      o({ color: "#FFFFFF" });
    });
  }
}
export { t as NavigationBarWeb };
