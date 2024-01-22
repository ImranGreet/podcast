<template>
  <section>
    <BlogContainer />
    <div class="w-full h-10"></div>
    <BlogTitleAndThumnail />
    <div class="w-full h-10"></div>
    <BlogDetailsInText />
    <div class="w-full h-10"></div>
    <AuthorDetails />
  </section>
</template>

<script>
import BlogContainer from "../components/Blogs/BlogContainer.vue";
import BlogTitleAndThumnail from "../components/Blogs/BlogDetails/BlogTitleAndThumbnail.vue";
import BlogDetailsInText from "../components/Blogs/BlogDetails/BLogDetailsInText.vue";
import AuthorDetails from "../components/SinglePodcast/AuthorDetails.vue";

export default {
  name: "SingleBlog",
  components: {
    BlogContainer,
    BlogTitleAndThumnail,
    BlogDetailsInText,
    AuthorDetails,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>