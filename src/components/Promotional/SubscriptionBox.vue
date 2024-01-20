<template>
  <div
    class="sm:w-full w-11/12 mx-auto flex flex-col justify-center items-center text-default bg-accentColor py-16 relative"
  >
    <form action="#" class="w-full sm:w-2/5 mx-auto text-center space-y-6">
      <div class="w-full mx-auto">
        <h1 class="text-xl lg:text-2xl font-headline">
          Receive new episodes in your inbox.
        </h1>
      </div>
      <EmailSubscription />
    </form>
    <div class="absolute top-16 left-16 hidden sm:block">
      <LargeMikeLeft />
    </div>
    <div class="absolute top-20 right-5 hidden sm:block">
      <LargeMikeRight />
    </div>
  </div>
</template>

<script>
import LargeMikeLeft from "../../assets/svgs/LargeMikeLeft.vue";
import LargeMikeRight from "../../assets/svgs/LargeMikeRight.vue";
import EmailSubscription from "./EmailSubscription.vue";

export default {
  name: "SubcriptionBox",
  components: { EmailSubscription, LargeMikeLeft, LargeMikeRight },
};
</script>

<style>
</style>