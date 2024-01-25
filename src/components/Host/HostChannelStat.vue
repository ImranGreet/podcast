<template>
  <div class="w-full px-5 xl:px-0 py-5">
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 sm:gap-x-8"
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