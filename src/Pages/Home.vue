<template>
  <section>
    <div class="w-full flex">
      <HeroText />
      <Soundshower />
    </div>
    <AvailableBrand />
    
  </section>
</template>

<script>
import AvailableBrand from "../components/Brands/AvailableBrand.vue";
import HeroText from "../components/Hero/HeroText.vue";
import Soundshower from "../components/Hero/Soundshower.vue";
import PodcastPromoteText from "../components/ReuseCompos/PodcastPromoteText.vue";
import PodcastSpeaker from "../components/ReuseCompos/PodcastSpeaker.vue";

export default {
  name: "Home",
  components: {
    HeroText,
    Soundshower,
    AvailableBrand,
    PodcastSpeaker,
    PodcastPromoteText,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>