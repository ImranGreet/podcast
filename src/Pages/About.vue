<template>
  <section>
    <spacer />
    <CompanyInfo />
    <spacer />
    <CompanyPromotion />
    <spacer />
    <TeamMembers />
    <spacer />
    <div class="w-full grid grid-cols-3 gap-3">
      <Sponsor>
        <SponsorOne :fillColor="black" />
      </Sponsor>
      <Sponsor>
        <SponsorTwo :fillColor="black" />
      </Sponsor>
      <Sponsor>
        <SponsorOne />
      </Sponsor>
      <Sponsor>
        <SponsorOne />
      </Sponsor>
      <Sponsor>
        <SponsorOne />
      </Sponsor>
      <Sponsor>
        <SponsorOne />
      </Sponsor>
    </div>
    <spacer />
    <RecentEpisode />
  </section>
</template>

<script>
import SponsorOne from "../assets/svgs/SponsorOne.vue";
import SponsorTwo from "../assets/svgs/SponsorTwo.vue";

import CompanyInfo from "../components/About/CompanyInfo.vue";
import CompanyPromotion from "../components/About/CompanyPromotion.vue";
import Sponsor from "../components/About/Sponsor.vue";
import TeamMembers from "../components/About/TeamMembers.vue";
import RecentEpisode from "../components/Episodes/RecentEpisode.vue";

export default {
  name: "About",
  components: {
    TeamMembers,
    Sponsor,
    SponsorOne,
    CompanyInfo,
    CompanyPromotion,
    RecentEpisode,
    SponsorTwo,
  },
  setup() {
    let black = "#334155";
    return {
      black,
    };
  },
};
</script>

<style>
</style>