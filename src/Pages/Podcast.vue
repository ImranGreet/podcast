<template>
  <section>
    <EpisodeDetails />
    <spacer />
    <RecentEpisode />
    <spacer />
    <RecentEpisode />
    <spacer />
    <story-teller />
  </section>
</template>

<script>
import EpisodeDetails from "../components/About/EpisodeDetails.vue";
import RecentEpisode from "../components/Episodes/RecentEpisode.vue";
import StoryTeller from "../components/ReuseCompos/StoryTeller.vue";

export default {
  name: "About",
  components: { EpisodeDetails, RecentEpisode, StoryTeller },
};
</script>

<style>
</style>