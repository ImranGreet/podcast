<template>
  <div class="w-full space-y-5">
    <div class="w-full flex justify-start items-center gap-x-5">
      <div class=" flex flex-col justify-center items-center">
        <img :src="publicProfileImage" alt="" class="w-24 h-24 rounded-full" />
      </div>
      <h2 class="font-headThree text-xl">{{ reviewerName }}</h2>
    </div>
    <div>
      <p>{{ reviewInText }}</p>
    </div>
    <div class="w-full h-3 bg-accentColor"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PublivReview",
  setup() {
    const publicProfileImage = ref(
      "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    const reviewInText = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat."
    );
    const reviewerName = ref("Eve Madien");
    return {
      publicProfileImage,
      reviewInText,
      reviewerName,
    };
  },
};
</script>

<style>
</style>