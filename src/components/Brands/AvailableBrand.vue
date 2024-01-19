<template>
  <div class="w-full flex justify-between items-center">
    <div class="text-textColor font-headline">
      <h1 class="text-xl">Podcast Available On</h1>
    </div>
    <Spotify />
    <Googlepod />
    <SoundCloud />
    <Apple />
  </div>
</template>

<script>
import Apple from "../../assets/svgs/Apple.vue";
import Googlepod from "../../assets/svgs/Googlepod.vue";
import SoundCloud from "../../assets/svgs/SoundCloud.vue";
import Spotify from "../../assets/svgs/Spotify.vue";

export default {
  name: "AvailableBrand",
  components: {
    Spotify,
    Googlepod,
    SoundCloud,

    Apple,
  },
};
</script>

<style>
</style>