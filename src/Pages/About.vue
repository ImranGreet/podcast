<template>
  <section>
    <div class="w-full h-36"></div>
    <CompanyInfo />
    <div class="w-full h-10"></div>
    <CompanyPromotion />
    <div class="w-full h-10"></div>
    <TeamMembers />
    <div class="w-full h-10"></div>
    <div class="w-full grid grid-cols-3 gap-3">
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
      <Sponsor>
        <SponsorOne />
      </Sponsor>
      <Sponsor>
        <SponsorOne />
      </Sponsor>
    </div>
    <div class="w-full h-10"></div>
    <RecentEpisode />
  </section>
</template>

<script>
import SponsorOne from "../assets/svgs/SponsorOne.vue";
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
  },
};
</script>

<style>
</style>