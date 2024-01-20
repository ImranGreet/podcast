<template>
  <div class="w-full flex justify-center items-center">
    <form class="w-full px-2">
      <div class="w-full">
        <label for="email" class="sr-only">Email</label>
        <div class="w-full">
          <input
            type="email"
            name=""
            id=""
            class="px-4 py-2 w-4/5 sm:w-3/5 border-y border-l border-textColor/15 focus:outline-none bg-blur text-textColor"
            placeholder="Enter Your email"
          />
          <button
            type="submit"
            class="py-2 sm:px-2 lg:px-4 w-1/5 sm:w-2/5 bg-accentColor text-deafult border border-accentColor/20"
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