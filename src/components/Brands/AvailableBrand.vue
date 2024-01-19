<template>
  <div class="w-full grid grid-cols-5">
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