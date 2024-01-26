<template>
  <div>
    <BlogThumbnailTitle />
    <spacer />
    <BlogContainer />
  </div>
</template>

<script>
import BlogContainer from "../components/Blogs/BlogContainer.vue";
import BlogThumbnailTitle from "../components/Blogs/BlogThumbnailTitle.vue";

export default {
  name: "Blog",
  components: {
    BlogContainer,
    BlogThumbnailTitle,
  },
};
</script>

<style>
</style>