<template>
  <div class="w-full">
    <div class="grid grid-cols-3 gap-x-3">
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