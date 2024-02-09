<template>
  <div class="flex justify-center  items-center w-full h-full bg-gradient-to-r from-black via-blue2 to-black shadow-lg shadow-blue2">
    <div class="flex w-[70%] h-24 flex-row justify-between items-center min-w-[800px] ">
      <div class="flex items-center min-w-60 flex-row justify-between">
        <RouterLink to="/"
          class="text-white bg-black/50 rounded-full border text-2xl border-white w-10 h-10 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-telegram" />
        </RouterLink>
        <RouterLink to="/"
          class="text-white bg-black/50 rounded-full text-lg border border-white w-10 h-10 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-discord" />
        </RouterLink>
        <RouterLink to="/"
          class="text-white bg-black/50 rounded-full text-xl border border-white w-10 h-10 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </RouterLink>
        <RouterLink to="/"
          class="text-white bg-black/50 text-2xl rounded-full border border-white w-10 h-10 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </RouterLink>
      </div>
      <div class="flex justify-center items-center">
        <img src="../assets/logo.png" class="" alt="" width="100" />
      </div>
      <button class="text-white bg-black/50 rounded-full text-lg border border-white w-10 h-10 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/50 flex justify-center items-center">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
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
