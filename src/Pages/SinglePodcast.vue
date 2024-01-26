<template>
  <section>
    <spacer />
    <div class="w-full">
      <div
        class="w-full flex flex-col sm:flex-row justify-between items-center gap-y-5 sm:gap-x-5"
      >
        <Poster />
        <div class="w-full px-6 sm:px-0">
          <div class="w-full space-y-3 xl:space-y-5">
            <h1
              class="text-start text-accentColor uppercase leading-relaxed tracking-widest"
            >
              Business
            </h1>
            <h1 class="text-3xl xl:text-4xl font-headline leading-snug">
              Ep 2: Getting the first 100 customers for your business
            </h1>
            <p class="text-lg leading-snug">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              veritatis saepe quaerat nesciunt aliquam est minus repellendus
              voluptatem, corrupti aspernatur perspiciatis.
            </p>
            <button class="px-6 py-4 bg-accentColor text-default">
              Listen Now
            </button>
          </div>
        </div>
      </div>

      <spacer />
      <PodcastDetails />
      <spacer />
      <AuthorDetails />
      <spacer />
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