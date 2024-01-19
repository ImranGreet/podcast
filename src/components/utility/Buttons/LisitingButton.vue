<template>
  <button class="flex gap-x-2 text-accentColor">
    <Listen />
    <span class="mt-1"> Listen Now</span>
  </button>
</template>
<script>
import Listen from "../../../assets/svgs/Listen.vue";
export default {
  name: "ListingButton",
  components: {
    Listen,
  },
};
</script>