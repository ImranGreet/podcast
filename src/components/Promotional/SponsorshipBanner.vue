<template>
  <div class="w-full bg-accentColor">
    <div class="w-full flex flex-col justify-center items-center text-center">
      <div class="text-center pt-8">
        <h1 class="text-2xl lg:text-4xl font-headline">Our Sponsor</h1>
      </div>
      <div
        class="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center px-8 py-16 gap-y-6 lg:gap-y-0"
      >
        <SponsorOne />
        <SponsorTwo />
        <SponsorThree />
        <SponsorFour />
        <SponsorFive />
      </div>
    </div>
  </div>
</template>

<script>
import SponsorOne from "../../assets/svgs/SponsorOne.vue";
import SponsorTwo from "../../assets/svgs/SponsorTwo.vue";
import SponsorThree from "../../assets/svgs/SponsorThree.vue";
import SponsorFour from "../../assets/svgs/SponsorFour.vue";
import SponsorFive from "../../assets/svgs/SponsorFive.vue";
export default {
  name: "SponsorshipBanner",
  components: {
    SponsorOne,
    SponsorTwo,
    SponsorThree,
    SponsorFour,
    SponsorFive,
  },
};
</script>

<style>
</style>