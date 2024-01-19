<template>
  <div>
    <h1>{{promoteHeadline}}</h1>
    <p>{{description}}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:"PodcastPromoteText",
setup(props) {
    const promoteHeadline = ref("A podcast for makers and entrepreneurs");
    const description = ref("Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. ");
    return {
     promoteHeadline,
     description
    }
}
}
</script>

<style>

</style>