<template>
  <section class="w-full">
    <div class="w-full h-8"></div>
    <HostPerson />
    <div class="w-full h-52 sm:h-20"></div>
    <available-brand />
    <div class="w-full h-8"></div>
    <LiveHosting />
    <div class="w-full h-8"></div>
    <div
      class="w-full flex flex-col sm:flex-row justify-between items-center gap-y-5 sm:gap-x-5"
    >
      <PodcastInText
        v-for="(textPodcast, index) in podcastInTextIntro"
        :key="index"
        :headline="textPodcast.headline"
        :podcastDetailsStart="textPodcast.detailsStart"
        :podcastDetailsEnd="textPodcast.detailsEnd"
      />
    </div>
    <div class="w-full h-8"></div>
    <HostChannelStat />
    <div class="w-full h-8"></div>
    <HostAnchor />
    <div class="w-full h-8"></div>
    <recent-episode />
  </section>
</template>

<script>
import { ref } from "vue";
import AvailableBrand from "../components/Brands/AvailableBrand.vue";
import HostPerson from "../components/Host/HostPerson.vue";
import LiveHosting from "../components/Host/LiveHosting.vue";
import PodcastInText from "../components/Host/PodcastInText.vue";
import HostChannelStat from "../components/Host/HostChannelStat.vue";
import HostAnchor from "../components/ReuseCompos/HostAnchor.vue";
import RecentEpisode from "../components/Episodes/RecentEpisode.vue";

export default {
  name: "Host",

  components: {
    HostPerson,
    AvailableBrand,
    LiveHosting,
    PodcastInText,
    HostChannelStat,
    HostAnchor,
    RecentEpisode,
  },
  setup() {
    let podcastInTextIntro = ref([
      {
        id: 1,
        headline: "My origins on YouTube in 2008",
        detailsStart:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat, habitasse non nisl",
        detailsEnd:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.",
      },
      {
        id: 2,
        headline: "My origins on YouTube in 2008",
        detailsStart:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat, habitasse non nisl",
        detailsEnd:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.",
      },
    ]);
    return {
      podcastInTextIntro,
    };
  },
};
</script>

<style>
</style>