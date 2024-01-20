<template>
  <div class="w-full relative">
    <div class="w-full flex flex-col justify-center items-center">
      <img :src="episodeThumbnail" alt="" class="w-full h-52 object-cover" />
    </div>
    <div class="text-start space-y-2">
      <h2 class="text-xl lg:text-2xl font-headThree leading-7">
        Laravel is a web application framework with expressive, elegant syntax.
      </h2>
      <p>
        Laravel strives to provide an amazing developer experience while
        providing powerful features such as thorough dependency injection
      </p>
      <LisitingButton />
      <div class="absolute top-4 right-4">
        <HeadphoneButton />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HeadphoneButton from "../utility/Buttons/HeadphoneButton.vue";
import LisitingButton from "../utility/Buttons/LisitingButton.vue";

export default {
  name: "Episode",
  components: {
    LisitingButton,
    HeadphoneButton,
  },
  setup(props) {
    const episodeThumbnail = ref(
      "https://s3-alpha-sig.figma.com/img/f31a/e0d5/6c5d3f9e60f439221ac89b7d9bbcd606?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dw1I7bgLyJ8HSKR99q8GzPs7~Yq5M6uxbkW9d6xuBEg1A5bDpoR-sKvq20d10DM3igWCWTw7AFTk9hA23ZiJYLNkiCMdKxC0gwMZ4jy4YL~Wlu3~FYEjPojpuAcdEH2P3pKreSnjJACOMg9is14wnmiwV4~OFl3WiUQIePsziNITFhLxr~F5KSNh4Ku7Pd-n4ImZ627wGbnT5WDf3qJZ7UR~v-romEd0sI6exyu-bBjoApEpkKiilndBQN~c-Lk1d-O5n~AsE7-i9Pp4Dk9yE0cQsoNbi0VLhPGxVC9hDz1DFqw8EaEctnbsmTql-BiqgMePrjEBiiZFEwlutY4HTw__"
    );
    const episodeHeadline = ref(
      "Ep 1: How to build a world-class business brand"
    );
    let episodeDesc = ref(
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum."
    );
    return {
      episodeHeadline,
      episodeThumbnail,
      episodeDesc,
    };
  },
};
</script>

<style>
</style>