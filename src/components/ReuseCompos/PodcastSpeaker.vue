<template>
  <div class="bg-accentColor w-full py-16">
    <div class="w-full flex flex-col justify-center items-center">
      <img
        :src="speakerImage"
        alt=""
        class="w-48 h-48 rounded-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PodcastSpeaker",
  setup() {
    const speakerImage = ref(
      "https://s3-alpha-sig.figma.com/img/5e9a/dd16/c50b0e4f08e1f829f4190340aa0d0fe4?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZFkhRo40MDf9K8-Cu~DsdyLicndnSZ5SrdsbZhZHfVuY6EGQ1Qpu~RT-BdFRmTsdxVXxeX9Vk-FaszWcVNlCU2yfIcOOlfQyAVwQ9lfIgYJ4xF0xulxYEqyohgf2LnLKcqWi6-R3R1s7r-Wa4fLzNwhnuxJiUopzJ1mKIAAmMNum3NGVrUOHNsm3yrk1JESDe-vVqbfXPrLJU~0xoTa1QRRD4nXT77~W7RtS2kWISuEa3q1vaSCrGDccRnnEuc3qJBdfpwqy4pJmDa8Q1M07~CKd0JDeHYOpWVqyfwkeF6VUNBM1c6uClN3VNxElhVdxDhbOs8QWab79pDVJwl6npg__"
    );
    const supportivePartner = ref(
      "https://s3-alpha-sig.figma.com/img/df13/ab1b/611f2dade01e21cf99aa275677a32c08?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czArh6ZlZsHYCXeJRO3c44mnjoD68E2Ve76C7gQd0mSBsm8tDUaxs9o7Ao~St1FwH-fLKJM3TM5ia3h3R~Jj2F6x4OW-Bbb9TbohvQWjp9h4OniQ8ZkBLsrc4zOB5V1tXc74zvhLq52bIc0sOAScvKL8NpIebAjvhCf-JAY-V3~d6akUp4MYB9xhDw44MhZfoi5-POCy56Wa8aOnx9yeCoGLIn3UsbSniVUtpcCVrlAhqrxq4jEcyJeymVUF6~BzllyyVG4c2jIZrKHYbQIylKIHYB3M4THXRqvSMQoXXhs9UQIWUDSgHfaxIZfWaemC~n9WASvXEZCO83dWvoLgSA__"
    );

    return {
      speakerImage,
      supportivePartner,
    };
  },
};
</script>

<style></style>
