<template>
  <div class="w-full relative">
    <div class="w-full flex flex-col justify-center items-center">
      <img :src="blogThumbnail" alt="" class="w-full h-52 object-cover" />
    </div>
    <div class="text-start space-y-2">
      <h2 class="text-2xl font-headThree leading-7">
        Laravel is a web application framework with expressive, elegant syntax.
      </h2>
      <p>
        Laravel strives to provide an amazing developer experience while
        providing powerful features such as thorough dependency injection
      </p>
      <button class="text-accentColor font-headline">Read Now</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BlogBox",
  setup() {
    const blogThumbnail = ref(
      "https://images.unsplash.com/photo-1705650065370-656dafd3e20d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );

    return {
      blogThumbnail,
    };
  },
};
</script>

<style>
</style>