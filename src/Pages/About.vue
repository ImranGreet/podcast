<template>
  <section>
    <Teammember />
    <div class="w-full h-10"></div>
    <div class="w-full grid grid-cols-4">
      <Sponsor> </Sponsor>
    </div>
  </section>
</template>

<script>
import SponsorOne from "../assets/svgs/SponsorOne.vue";
import Sponsor from "../components/About/Sponsor.vue";
import Teammember from "../components/ReuseCompos/Teammember.vue";

export default {
  name: "About",
  components: { Teammember, Sponsor, SponsorOne },
};
</script>

<style>
</style>