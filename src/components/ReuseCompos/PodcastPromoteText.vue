<template>
  <div class="w-full  flex flex-col justify-center items-center">
    <div class="w-full space-y-10 px-6">
      <h1 class="text-textColor text-3xl leading-10 font-headline">
        {{ promoteHeadline }}
      </h1>
      <p class="text-lg">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PodcastPromoteText",
  setup(props) {
    const promoteHeadline = ref("A podcast for makers and entrepreneurs");
    const description = ref(
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "
    );
    return {
      promoteHeadline,
      description,
    };
  },
};
</script>

<style>
</style>