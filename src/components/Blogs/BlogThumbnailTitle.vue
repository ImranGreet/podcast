<template>
  <div class="w-full py-8">
    <div class="w-full flex flex-col sm:flex-row justify-between items-center">
      <div class="w-full text-start">
        <h3 class="text-lg uppercase">Featured</h3>
        <h1 class="text-3xl text-accentColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ratione similique, dolor accusamus a placeat quasi possimus animi hic
          consequuntur laudantium magni libero nulla cum voluptatibus id quidem
          magnam. Deleniti, odio obcaecati?
        </p>
        <router-link to="#">Read Now ....</router-link>
      </div>
      <!-- tumbnail -->
      <div class="w-full flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1705350836117-e117aa1d315b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogThumbnailTitle",
};
</script>

<style>
</style>