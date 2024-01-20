<template>
  <div class="text-start space-y-5 px-3 sm:px-0">
    <h1
      class="text-2xl lg:text-4xl font-headline text-textColor capitalize leading-snug"
    >
      {{ heroHeadline }}
    </h1>
    <p>{{ herotextinDetails }}</p>
    <EmailSubscription />
  </div>
</template>

<script>
import EmailSubscription from "../Promotional/EmailSubscription.vue";

export default {
  name: "HeroText",
  components: { EmailSubscription },
  setup() {
    const heroHeadline = "Become the hero of your own history";
    const herotextinDetails =
      "The Performance API is a group of standards used to measure the performance of web applications.";
    return {
      heroHeadline,
      herotextinDetails,
    };
  },
};
</script>

<style>
</style>