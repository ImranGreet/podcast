<template>
  <div class="w-full max-w-sm bg-accentColor">
    <div class="w-full flex flex-col justify-between items-start">
      <div class="w-full flex flex-col justify-center items-center">
        <Users class="w-36 h-36" />
      </div>
      <div class="space-y-8">
        <h1 class="text-4xl font-headline">500+</h1>
        <h3>Podcast</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Users from "../../assets/svgs/Users.vue";

export default {
  name: "Statics",
  components: { Users },
};
</script>

<style>
</style>