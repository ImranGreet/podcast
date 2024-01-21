
<template>
  <section
    class="max-w-full min-h-screen flex flex-col justify-between items-center"
  >
    <!-- <Navabar /> -->
    <div class="max-w-7xl mx-auto">
      <router-view />
    </div>
    <div class="w-full h-10 xl:h-64 "></div>
    
    <Footer />
  </section>
</template>


<script>
import Footer from "./components/Footer/Footer.vue";
import Navabar from "./components/Header/Navabar.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navabar,
  },
};
</script>