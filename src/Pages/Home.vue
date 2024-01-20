<template>
  <section class="space-y-10">
    <div
      class="w-full flex h-auto flex-col-reverse sm:flex-row py-14 xl:py-44 gap-y-5 sm:gap-y-0"
    >
      <HeroText />
      <Soundshower />
    </div>

    <AvailableBrand />
    <div class="w-full h-8"></div>
    <PodcastPromotion />

    <div class="w-full h-8"></div>

    <div class="w-full space-y-10">
      <div
        class="w-full flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0"
      >
        <div class="w-11/12 mx-auto sm:w-1/2 space-y-2">
          <h1 class="text-2xl lg:text-4xl font-headline">Recent Episodes</h1>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            corporis, dolorum architecto doloribus soluta nesciunt cum cumque
            voluptatem, dolorem error quis.
          </p>
        </div>
        <div
          class="w-full sm:w-auto self-center flex flex-col justify-center items-center"
        >
          <router-link
            to="#"
            class="w-11/12 mx-auto sm:w-auto px-8 py-2 lg:py-4 bg-accentColor text-deafult"
            >See All episode</router-link
          >
        </div>
      </div>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-x-5 px-3 lg:px-0"
      >
        <Episode />
        <Episode />
        <Episode />
      </div>
    </div>

    <div class="w-full h-8"></div>

    <!-- public review -->

    <div class="w-full space-y-10">
      <div class="w-full flex justify-between">
        <div class="w-full lg:w-1/2 space-y-4 lg:space-y-10 px-5 sm:px-0">
          <h1 class="text-2xl lg:text-4xl font-headline">
            What Our Listener Say
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            corporis, dolorum architecto doloribus soluta nesciunt cum cumque
            voluptatem, dolorem error quis.
          </p>
        </div>
        <div class="flex gap-x-1 lg:gap-x-3 self-center">
          <button
            class="bg-accentColor text-deafult px-2 lg:px-5 py-2 text-default"
          >
            <LeftArrow />
          </button>
          <button
            class="bg-accentColor text-deafult px-2 lg:px-5 py-2 text-default"
          >
            <Rightarrow />
          </button>
        </div>
      </div>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-x-5 px-4 lg:px-0"
      >
        <PublicReview />
        <PublicReview />
        <PublicReview />
      </div>
    </div>
    <!-- end public reviews -->

    <div class="w-full h-8"></div>

    <SubscriptionBox />

    <div class="w-full h-8"></div>

    <BlogContainer />

    <div class="w-full h-8"></div>

    <div class="block lg:hidden">
      <SponsorshipBanner />
    </div>
    <div class="h-36 hidden lg:block"></div>
  </section>
</template>

<script>
import LeftArrow from "../assets/svgs/LeftArrow.vue";
import Rightarrow from "../assets/svgs/Rightarrow.vue";

import AvailableBrand from "../components/Brands/AvailableBrand.vue";
import HeroText from "../components/Hero/HeroText.vue";
import Soundshower from "../components/Hero/Soundshower.vue";
import SubscriptionBox from "../components/Promotional/SubscriptionBox.vue";
import Episode from "../components/ReuseCompos/Episode.vue";
import PodcastPromoteText from "../components/ReuseCompos/PodcastPromoteText.vue";
import PodcastSpeaker from "../components/ReuseCompos/PodcastSpeaker.vue";
import PublicReview from "../components/ReuseCompos/PublicReview.vue";
/*blog*/
import BlogContainer from "../components/Blogs/BlogContainer.vue";
import SponsorshipBanner from "../components/Promotional/SponsorshipBanner.vue";
import PodcastPromotion from "../components/PodcastPromotion.vue";

export default {
  name: "Home",
  components: {
    HeroText,
    Soundshower,
    AvailableBrand,
    PodcastSpeaker,
    PodcastPromoteText,
    Episode,
    LeftArrow,
    Rightarrow,
    PublicReview,
    SubscriptionBox,
    BlogContainer,
    SponsorshipBanner,
    PodcastPromotion,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>