<template>
  <div class="w-full px-8 py-5">
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3"
    >
      <StateComp />
      <StateComp />
      <StateComp />
      <StateComp />
    </div>
  </div>
</template>

<script>
import StateComp from "./StateComp.vue";

export default {
  name: "HostChannelStat",
  components: { StateComp },
};
</script>

<style>
</style>