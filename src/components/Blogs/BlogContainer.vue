<template>
  <div class="w-full">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-x-5 px-3 lg:px-0"
    >
      <BlogsIntroducer />
      <blog-box />
      <blog-box />
    </div>
  </div>
</template>

<script>
import BlogBox from "../ReuseCompos/BlogBox.vue";
import BlogsIntroducer from "./BlogsIntroducer.vue";

export default {
  name: "BlogContainer",
  components: { BlogsIntroducer, BlogBox },
};
</script>

<style>
</style>