

<template>
    <div class="bg-black w-full h-full ">
        <headerComponent />
        <div class="flex justify-center items-center ">
            <div class="w-[70%] flex justify-center items-center h-full">
                <div class="w-full relative h-full pt-12 justify-end items-center flex ">
                    <div class="flex absolute z-20 flex-col justify-start w-full space-y-5 ">
                        <p class="text-white text-4xl font-Lato font-extrabold">Combination of Forex and Crypto</p>
                        <p class="text-white text-xl w-[500px] font-Lato font-semibold">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic
                        </p>
                        <div class="flex flex-row justify-between w-[500px] space-x-4">
                            <RouterLink to="/"
                                class="bg-blue1 font-Lato text-white flex justify-center items-center rounded-full text-xl py-3 w-full">
                                Buy Now
                            </RouterLink>
                            <RouterLink to="/"
                                class="bg-blue2 font-Lato text-white flex justify-center items-center rounded-full text-xl py-3 w-full">
                                WhitePaper
                            </RouterLink>
                        </div>
                    </div>
                    <div class="w-[1200px]">
                        <video class="z-10" loop width="100%" height="100%" muted autoplay="autoplay">
                            <source src="../assets/land7.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import headerComponent from '@/components/headerComponent.vue';

</script>

<script>


import { RouterLink } from 'vue-router';

export default {
    data() {
        return {

        };
    },
    components: { RouterLink }
};
</script>