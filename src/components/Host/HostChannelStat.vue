<template>
  <div class="w-full px-5 xl:px-0 py-5">
    <spacer />
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-x-8"
    >
      <div v-for="(state, index) in channelStates" :key="index">
        <div
          class="w-full max-w-sm bg-accentColor hover:-translate-y-20 hover:delay-300 hover:duration-200 cursor-pointer"
        >
          <div class="w-full flex flex-col justify-between items-start t">
            <div class="w-full flex flex-col justify-center items-center h-96">
              <div v-html="state.svg"></div>
              <div class="space-y-8 py-5 text-default -ml-20">
                <h1 class="text-4xl font-headline">{{ state.stateNumber }}</h1>
                <h3 class="text-2xl capitalize tracking-wide">
                  {{ state.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import StateComp from "./StateComp.vue";

export default {
  name: "HostChannelStat",
  components: { StateComp },
  setup() {
    let channelStates = ref([
      {
        id: 1,
        stateNumber: 500,
        title: "podcasts",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
        stroke="currentColor" class="w-14 xl:w-36 h-14 xl:h-36 ">
        <path stroke-linecap="round" 
        stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
`,
      },
      {
        id: 2,
        stateNumber: 500,
        title: "subscribers",
        svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-14 xl:w-36 h-14 xl:h-36"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>`,
      },
      {
        id: 3,
        stateNumber: 500,
        title: "views",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 xl:w-36 h-14 xl:h-36">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
</svg>
`,
      },
      {
        id: 4,
        stateNumber: 50,
        title: "Blogs",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 xl:w-36 h-14 xl:h-36">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
`,
      },
    ]);
    return {
      channelStates,
    };
  },
};
</script>

<style>
</style>