<template>
  <section>
    <div class="w-full flex flex-col justify-between items-center">
      <Poster />

      <div class="w-full h-8"></div>
      <PodcastDetails />
      <div class="w-full h-8"></div>
      <AuthorDetails />
      <div class="w-full h-8"></div>
      <RecentEpisode />
    </div>
  </section>
</template>

<script>
import RecentEpisode from "../components/Episodes/RecentEpisode.vue";
import AuthorDetails from "../components/SinglePodcast/AuthorDetails.vue";
import PodcastDetails from "../components/SinglePodcast/PodcastDetails.vue";
import Podcasttitle from "../components/SinglePodcast/Podcasttitle.vue";
import Poster from "../components/SinglePodcast/Poster.vue";

export default {
  name: "SinglePodcast",
  components: {
    Podcasttitle,
    AuthorDetails,
    PodcastDetails,
    RecentEpisode,
    Poster,
  },
};
</script>

<style>
</style>