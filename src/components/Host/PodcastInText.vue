<template>
  <div class="w-full px-5 xl:px-0">
    <div class="w-full flex flex-col justify-between items-center">
      <div class="w-full flex flex-col justify-between items-start space-y-10">
        <div class="w-full">
          <h1 class="text-3xl font-headline leading-snug">{{ headline }}</h1>
        </div>
        <div class="w-full">
          <p class="text-2xl  leading-snug">{{ podcastDetailsEnd }}</p>
        </div>
        <div class="w-full">
          <p class="text-lg font-headline leading-7">{{ podcastDetailsStart }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PodcastInText",
  props: {
    headline: {
      required: true,
      type: String,
    },
    podcastDetailsStart: {
      required: true,
      type: String,
    },
    podcastDetailsEnd: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { headline, podcastDetailsStart, podcastDetailsEnd } = props;
    return {
      headline,
      podcastDetailsStart,
      podcastDetailsEnd,
    };
  },
};
</script>

<style>
</style>