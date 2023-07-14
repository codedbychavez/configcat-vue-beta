import { openBlock as i, createElementBlock as s, renderSlot as o, createCommentVNode as l } from "vue";
const c = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, u = {
  emits: ["flagValueChanged"],
  props: {
    featureKey: {
      type: String,
      required: !0
    },
    userObject: {
      type: Object,
      required: !1,
      default: {}
    }
  },
  data() {
    return {
      isFeatureFlagEnabled: !1
    };
  },
  mounted() {
    this.configCatClient.getValueAsync(this.featureKey, !1, this.userObject).then((e) => {
      this.isFeatureFlagEnabled = e, this.$emit("flagValueChanged", e);
    });
  },
  unmounted() {
    this.configCatClient.dispose();
  }
}, f = { key: 0 };
function d(e, t, n, r, a, g) {
  return a.isFeatureFlagEnabled ? (i(), s("div", f, [
    o(e.$slots, "default")
  ])) : l("", !0);
}
const C = /* @__PURE__ */ c(u, [["render", d]]), h = {
  install: (e, t) => {
    let n = (void 0)(t.SDKKey, t.clientOptions);
    e.config.globalProperties.configCatClient = n;
  }
};
export {
  h as ConfigCatPlugin,
  C as FeatureWrapper
};
