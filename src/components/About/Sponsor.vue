<template>
  <div
    class="max-w-lg bg-blur hover:bg-accentColor hover:duration-150 hover:delay-200 h-40 cursor-pointer text-textColor"
  >
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