<template>
  <div class="w-full grid grid-cols-4 gap-x-4">
    <Teammember />
    <Teammember />
    <Teammember />
    <Teammember />
  </div>
</template>

<script>
import Teammember from "../ReuseCompos/Teammember.vue";

export default {
  name: "TeamMember",
  components: { Teammember },
};
</script>

<style>
</style>