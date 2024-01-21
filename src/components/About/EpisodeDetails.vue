<template>
  <div
    class="w-full h-[500px] bg-center bg-fixed"
    :style="{ 'background-image': 'url(' + episodeLandingImage + ')' }"
  >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero, ipsa neque eius, accusantium necessitatibus et, cupiditate tempore aspernatur labore eaque.

</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "EpisodeDetails",
  setup() {
    const episodeLandingImage = ref(
      "https://images.unsplash.com/photo-1611532736573-418fe4ae3260?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    const episodeTitle = ref(
      "A UX Case Study on Creating a Studious Environment "
    );
    let episodeDesc = ref(
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon"
    );
    return {
      episodeLandingImage,
      episodeTitle,
      episodeDesc,
    };
  },
};
</script>

