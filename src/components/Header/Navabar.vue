<template>
  <div class="w-full bg-inherit">
    <div class="w-full px-10 flex justify-between items-center">
      <router-link to="#" class="text-4xl tracking-wider font-headThree"
        >Xenmesh</router-link
      >

      <div class="w-3/5">
        <!-- navlinks -->
        <ul class="w-full flex justify-between items-center">
          <li v-for="(link, index) in navs" :key="index">
            <router-link :to="{ name: link.urlTitle }" class="capitalize">{{
              link.urlTitle
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  setup() {
    const navs = [
      {
        id: 1,
        urlTitle: "podcast",
      },
      {
        id: 2,
        urlTitle: "host",
      },
      {
        id: 3,
        urlTitle: "about",
      },
      {
        id: 4,
        urlTitle: "readblog",
      },
      {
        id: 5,
        urlTitle: "contact",
      },
    ];
    return {
      navs,
    };
  },
};
</script>

<style>
</style>