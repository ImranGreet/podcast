<template>
  <div class="w-full flex flex-col justify-center items-center ">
    <div class="space-y-3 w-full">
      <h3 class="text-xl font-headThree">Contact Us</h3>
      <h4 class="text-xl text-accentColor">
        Interested in collaborating? Please fill the form below.
      </h4>
    </div>
    <form
      action="#"
      method="post"
      class="w-full flex flex-col justify-between items-center"
    >
      <div class="w-full">
        <label for="name" class="sr-only">Full Name</label>
        <input
          type="text"
          name=""
          id=""
          class="w-full px-4 py-2 bg-blur border border-accentColor"
          placeholder="Your Full name"
        />
      </div>
      <div class="w-full">
        <label for="name" class="sr-only">Full Name</label>
        <input
          type="text"
          name=""
          id=""
          class="w-full px-4 py-2 bg-blur"
          placeholder="Your Full name"
        />
      </div>
      <div class="w-full">
        <label for="name" class="sr-only">Full Name</label>
        <input
          type="text"
          name=""
          id=""
          class="w-full px-4 py-2 bg-blur"
          placeholder="Your Full name"
        />
      </div>
      <div class="w-full">
        <label for="name" class="sr-only">Full Name</label>
        <input
          type="text"
          name=""
          id=""
          class="w-full px-4 py-2 bg-blur"
          placeholder="Your Full name"
        />
      </div>

      <div class="w-full">
        <label for="name" class="sr-only">Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button class="bg-accentColor px-5 py-3">Contact Now</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
</style>