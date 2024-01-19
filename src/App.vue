
<template>
  <section class="max-w-full">
    <div class="w-full flex flex-col justify-between items-center min-h-screen">
      <Navabar />
      <router-view />
      <Footer />
    </div>
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