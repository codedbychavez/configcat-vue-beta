<template>
  <div v-if="isFeatureFlagEnabled">
    <slot />
  </div>
</template>

<script>
export default {
  emits: ['flagValueChanged'],
  props: {
    featureKey: {
      type: String,
      required: true,
    },
    userObject: {
      type: Object,
      required: false,
      default: {},
    }
  },
  data() {
    return {
      isFeatureFlagEnabled: false,
    };
  },
  mounted() {
    // Check if feature flag is enabled
    this.configCatClient.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
      this.isFeatureFlagEnabled = value;
      this.configCatClient.on('configChanged', (response) => {
        this.$emit('flagValueChanged', response.settings[this.featureKey].value);
      })
    });
  },
  unmounted() {
    this.configCatClient.dispose();
  }
};
</script>
