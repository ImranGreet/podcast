<template>
  <section class="text-default w-full">
    <div class="w-full grid grid-cols-2 gap-x-5">
      <Contactform />

      <Contactform />
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