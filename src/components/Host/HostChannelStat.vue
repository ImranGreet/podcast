<template>
  <div class="w-full px-8 py-5">
    <div class="w-full grid grid-cols-4 gap-x-3">
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