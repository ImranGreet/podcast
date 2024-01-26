<template>
  <section class="space-y-10">
    <div
      class="w-full flex h-auto flex-col-reverse sm:flex-row md:px-4 py-14 xl:py-44 gap-y-5 sm:gap-y-0"
    >
      <HeroText />
      <Soundshower />
    </div>

    <AvailableBrand />
    <spacer />
    <PodcastPromotion />

    <spacer />
    <recent-episode />
    <spacer />

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

    <spacer />

    <SubscriptionBox />

    <div class="w-full sm:h-8"></div>

    <BlogContainer />

    <spacer />

    <div class="block lg:hidden">
      <SponsorshipBanner />
    </div>
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
import RecentEpisode from "../components/Episodes/RecentEpisode.vue";

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
    RecentEpisode,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>