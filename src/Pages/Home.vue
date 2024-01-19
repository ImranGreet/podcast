<template>
  <section class="py-48 space-y-10">
    <div class="w-full flex h-96 flex-col-reverse sm:flex-row">
      <HeroText />
      <Soundshower />
    </div>
    <AvailableBrand />

    <PodcastPromotion/>

    <div class="w-full space-y-10">
      <div class="w-full flex justify-between">
        <div class="w-1/2">
          <h1 class="text-4xl">Recent Episodes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            corporis, dolorum architecto doloribus soluta nesciunt cum cumque
            voluptatem, dolorem error quis.
          </p>
        </div>
        <div class="self-center flex flex-col justify-center items-center">
          <router-link to="#" class="px-8 py-4 bg-accentColor text-deafult"
            >See All episode</router-link
          >
        </div>
      </div>
      <div class="w-full grid grid-cols-3 gap-x-5">
        <Episode />
        <Episode />
        <Episode />
      </div>
    </div>
    <!-- public review -->

    <div class="w-full space-y-10">
      <div class="w-full flex justify-between">
        <div class="w-1/2 space-y-10">
          <h1 class="text-4xl">What Our Listener Say</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            corporis, dolorum architecto doloribus soluta nesciunt cum cumque
            voluptatem, dolorem error quis.
          </p>
        </div>
        <div class="flex gap-x-3 self-center">
          <button class="bg-accentColor text-deafult px-5 py-2 text-default">
            <LeftArrow />
          </button>
          <button class="bg-accentColor text-deafult px-5 py-2 text-default">
            <Rightarrow />
          </button>
        </div>
      </div>
      <div class="w-full grid grid-cols-3 gap-x-5">
        <PublicReview />
        <PublicReview />
        <PublicReview />
      </div>
    </div>
    <!-- end public reviews -->

    <SubscriptionBox />
    <BlogContainer />
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