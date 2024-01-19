<template>
  <div class="w-full flex justify-center items-center">
    <form class="w-full">
      <div class="w-full">
        <label for="email" class="sr-only">Email</label>
        <div class="w-full">
          <input
            type="email"
            name=""
            id=""
            class="px-4 py-2 w-3/5 border-y border-l border-textColor/15 focus:outline-none bg-blur text-textColor"
            placeholder="Enter Your email"
          />
          <button
            type="submit"
            class="px-4 py-2 w-1/5 bg-accentColor text-deafult border border-accentColor/20"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "emailsubscription",
};
</script>

<style>
</style>