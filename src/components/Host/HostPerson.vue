<template>
  <div class="w-full h-[500px] flex flex-col justify-center items-center">
    <div
      class="w-full h-full mx-auto flex flex-col sm:flex-row justify-center items-center gap-x-10"
    >
      <div
        class="w-full sm:w-1/2 h-full flex flex-col justify-center items-center"
      >
        <img :src="host" alt="" class="h-full object-fill w-full" />
      </div>
      <div
        class="w-full sm:w-1/2 flex flex-col justify-between items-start gap-y-10"
      >
        <div class="space-y-5 w-full">
          <h1 class="text-3xl font-headline leading-snug">{{ hostSpeech }}</h1>
          <p class="text-lg">{{ hostSpeechDesc }}</p>
        </div>
        <button class="bg-accentColor px-3 py-4 text-default">Know More</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HostPerson",
  setup() {
    let hostSpeech = ref(
      "Hey there, I’m Andrew Jonson and welcome to my Podcast"
    );
    let host = ref(
      "https://images.pexels.com/photos/6954192/pexels-photo-6954192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    );
    let hostSpeechDesc = ref(
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "
    );
    return {
      hostSpeech,
      hostSpeechDesc,
      host,
    };
  },
};
</script>

<style>
</style>