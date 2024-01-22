<template>
  <div class="max-w-lg bg-accentColor h-40">
    <div
      class="w-11/12 mx-auto flex flex-col justify-center items-center h-full"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SponsorOne from "../../assets/svgs/SponsorOne.vue";

export default {
  name: "Sponsor",
  components: { SponsorOne },
};
</script>

<style>
</style>