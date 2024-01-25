<template>
  <div class="w-full space-y-10">
    <div
      class="w-full flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0"
    >
      <div class="w-11/12 mx-auto sm:w-2/5 space-y-2 px-4 lg:px-0">
        <h1 class="text-2xl lg:text-4xl font-headline">Recent Episodes</h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          corporis, dolorum architecto doloribus soluta nesciunt cum cumque
          voluptatem, dolorem error quis.
        </p>
      </div>
      <div class="w-2/5"></div>
      <div
        class="w-full sm:w-1/5 self-center flex flex-col justify-center items-center"
      >
        <router-link
          to="#"
          class="w-11/12 mx-auto sm:w-full px-8 py-2 lg:py-4 bg-accentColor text-deafult text-center text-default"
          >See All episode</router-link
        >
      </div>
    </div>
    <div class="w-full h-8"></div>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-x-5 px-3 lg:px-0"
    >
      <Episode />
      <Episode />
      <Episode />
    </div>
  </div>
</template>

<script>
import Episode from "../ReuseCompos/Episode.vue";

export default {
  name: "RecentEpisode",
  components: { Episode },
};
</script>

<style>
</style>