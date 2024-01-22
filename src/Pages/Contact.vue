<template>
  <section class="w-full text-default">
    <div class="w-full flex justify-between items-center gap-x-6">
      <div class="w-1/2">
        <Contactform />
      </div>
      <div class="w-1/2">
        <Contactform />
      </div>
    </div>
  </section>
</template>

<script>
import Contactform from "../components/Contact/Contactform.vue";

export default {
  name: "Contact",
  components: { Contactform },
};
</script>

<style>
</style>