<template>
  <div class="w-full h-96 grid grid-cols-2">
    <div class="w-full flex flex-col justify-start items-start">
      <div class="w-full space-y-5">
        <h1 class="text-4xl tracking-wide leading-relaxed font-headline">
          About Xenmesh Podcast
        </h1>
        <div class="text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fuga quas eaque ex et molestiae, repellendus minus, eius illum sunt
            quibusdam adipisci consequuntur fugit sed totam est vitae tempore
            similique aliquam enim.
          </p>
        </div>
        <button
          class="txt-default bg-accentColor px-8 py-3 text-default tracking-wide"
        >
          Subscribe Now!
        </button>
      </div>
    </div>
    <!-- podcast equipment -->
    <div class="w-full flex flex-col justify-start items-start relative">
      <div
        class="w-full flex justify-center items-center gap-x-20 overflow-hidden absolute top-10 left-8"
      >
        <div
          class="w-8 h-52 self-end rotate-45 bg-accentColor -translate-y-10"
        ></div>
        <div class="w-8 h-64 rotate-45 bg-primaryColor"></div>
        <div class="w-8 h-48 rotate-45 self-end bg-accentColor"></div>
      </div>
      <div class="w-full flex flex-col justify-center items-center z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="355"
          height="359"
          viewBox="0 0 255 359"
          fill="none"
        >
          <path
            d="M254.472 125.916V143.83C254.436 173.959 243.43 203.068 223.467 225.832C203.504 248.596 175.918 263.492 145.757 267.797V322.972H200.114V358.801H55.1605V322.972H109.518V267.797C79.3569 263.492 51.7713 248.596 31.808 225.832C11.8447 203.068 0.838449 173.959 0.802734 143.83L0.802734 125.916H37.0412V143.83C37.0412 167.586 46.5861 190.369 63.5762 207.166C80.5663 223.964 103.61 233.401 127.637 233.401C151.665 233.401 174.709 223.964 191.699 207.166C208.689 190.369 218.234 167.586 218.234 143.83V125.916H254.472ZM127.637 197.573C142.054 197.573 155.88 191.911 166.074 181.832C176.268 171.753 181.995 158.083 181.995 143.83V54.2587C181.995 40.0053 176.268 26.3356 166.074 16.2569C155.88 6.17819 142.054 0.516022 127.637 0.516022C113.221 0.516022 99.3948 6.17819 89.2007 16.2569C79.0067 26.3356 73.2797 40.0053 73.2797 54.2587V143.83C73.2797 158.083 79.0067 171.753 89.2007 181.832C99.3948 191.911 113.221 197.573 127.637 197.573Z"
            fill="#14142B"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
};
</script>

<style>
</style>