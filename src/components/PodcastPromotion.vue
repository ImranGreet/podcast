<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-20 px-5 lg:px-0">
    <PodcastPromoteText />
    <PodcastSpeaker />
    <!-- podcast image -->
    <div class="w-full flex flex-col justify-center items-center">
      <img :src="podcaster" alt="" class="w-full" />
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="w-full mx-auto text-start space-y-6 md:pl-4">
        <h1
          class="text-textColor text-xl lg:text-3xl font-headline leading-snug"
        >
          {{ podcasterHeadline }}
        </h1>
        <p class="text-xl">{{ podcasterDelivery }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PodcastPromoteText from "./ReuseCompos/PodcastPromoteText.vue";
import PodcastSpeaker from "./ReuseCompos/PodcastSpeaker.vue";

export default {
  name: "PodcastPromotion",
  components: {
    PodcastSpeaker,
    PodcastPromoteText,
  },
  setup() {
    let podcaster = ref(
      "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    let podcasterHeadline = ref("My origins on YouTube in 2008");
    let podcasterDelivery = ref(
      "Creating a complete, professional profile can help you stand out from the competition and get you in front of clients you want to work with. Learn more"
    );
    return {
      podcaster,
      podcasterHeadline,
      podcasterDelivery,
    };
  },
};
</script>

<style>
</style>