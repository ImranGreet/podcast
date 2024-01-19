<template>
  <div class="bg-blur w-full">
    <div class="space-y-2 px-8">
      <h1 class="text-3xl font-headline">
        Read our articles <span>&#38;</span> news
      </h1>
      <router-link to="#" class="text-accentColor font-headline"
        >See More</router-link
      >
    </div>
    <div
      class="w-full flex justify-center items-center gap-x-20 overflow-hidden"
    >
      <div class="w-8 h-48 self-end rotate-45 bg-accentColor -translate-x-10"></div>
      <div class="w-8 h-48 rotate-45 bg-primaryColor"></div>
      <div class="w-8 h-48 rotate-45 self-end bg-accentColor "></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogsintroducer",
};
</script>

<style>
</style>