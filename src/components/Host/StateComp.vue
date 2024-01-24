<template>
  <div class="w-full max-w-sm bg-accentColor rounded-lg">
    <div class="w-full flex flex-col justify-between items-start">
      <div class="w-full flex flex-col justify-center items-center h-48">
        <Users :width="'w-20'" :height="'w-20'" />
      </div>
      <div class="space-y-8 ml-10 py-5 text-default">
        <h1 class="text-4xl font-headline">500+</h1>
        <h3 class="text-2xl">Podcast</h3>
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