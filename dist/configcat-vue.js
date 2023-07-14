import { openBlock as o, createElementBlock as s, renderSlot as i, createCommentVNode as l } from "vue";
const c = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, a] of n)
    t[r] = a;
  return t;
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
function d(e, n, t, r, a, g) {
  return a.isFeatureFlagEnabled ? (o(), s("div", f, [
    i(e.$slots, "default")
  ])) : l("", !0);
}
const C = /* @__PURE__ */ c(u, [["render", d]]), h = {
  install: (e, n) => {
    let t = (void 0)(
      n.SDKKey
    );
    e.config.globalProperties.configCatClient = t;
  }
};
export {
  h as ConfigCatPlugin,
  C as FeatureWrapper
};
