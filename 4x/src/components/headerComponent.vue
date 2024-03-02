<template>
  <div
    class="flex justify-center  items-center w-full h-full bg-gradient-to-r from-black via-blue2/50 to-black shadow-lg shadow-blue2">
    <div
      class="flex w-[70%] ph:w-[95%] h-24 flex-row justify-between items-center  2xl:min-w-[800px] xl:min-w-[800px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[600px]">
      <div class="flex items-center min-w-60 ph:min-w-0 ph:space-x-3 flex-row justify-between">
        <a href="https://t.me/forx_fai"
          class="text-white bg-black/50 rounded-full ph:text-base border  border-white 2xl:w-10 2xl:h-10 2xl:text-2xl xl:w-10 xl:h-10 xl:text-2xl lg:w-10 lg:h-10 lg:text-2xl ph:w-8 ph:h-8 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-telegram" />
        </a>
        <a to="/"
          class="text-white bg-black/50 rounded-full ph:text-base  border border-white 2xl:w-10 2xl:h-10 2xl:text-2xl xl:w-10 xl:h-10 xl:text-2xl lg:w-10 lg:h-10 lg:text-2xl ph:w-8 ph:h-8 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-discord" />
        </a>
        <a href="https://twitter.com/4xfinance78904"
          class="text-white bg-black/50 rounded-full ph:text-base  border border-white 2xl:w-10 2xl:h-10 2xl:text-2xl xl:w-10 xl:h-10 xl:text-2xl lg:w-10 lg:h-10 lg:text-2xl ph:w-8 ph:h-8 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://www.instagram.com/4x_coin/"
          class="text-white bg-black/50  ph:text-base rounded-full border border-white 2xl:w-10 2xl:h-10 2xl:text-2xl xl:w-10 xl:h-10 xl:text-2xl lg:w-10 lg:h-10 lg:text-2xl ph:w-8 ph:h-8 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </div>
      <RouterLink to="/" class="flex justify-center items-center ph:w-20 2xl:w-28 xl:w-28 lg:w-28 md:w-28 sm:w-28">
        <img src="../assets/logo.png" class="" alt="" />
      </RouterLink>
      <RouterLink to="/presale"
        class="text-white bg-black/50 rounded-full 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base ph:text-sm border border-white lg:w-28 lg:h-10 2xl:w-28 2xl:h-10 md:w-28 md:h-10 xl:w-28 xl:h-10 ph:w-20 ph:h-9 shadow-lg shadow-white/20 hover:shadow-md hover:shadow-white/50 flex justify-center items-center">
        Buy Now
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  setup() {
    return {};
  },
  components: { RouterLink }
};
</script>
