<template>
    <div class="bg-black h-full w-full justify-center items-center flex flex-col">
        <headerComponent />
        <div
            class="w-[70%] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] py-14 sm:w-[70%] ph:w-[95%] h-full flex justify-center items-center flex-col relative z-20">
            <div
                class="absolute flex justify-center ph:w-full  ph:h-full 2xl:w-2/3 xl:w-[90%] md:w-full sm:w-full lg:w-full items-center 2xl:top-0 xl:top-0 opacity-60">
                <video class="z-10" loop width="100%" height="100%" muted autoplay="autoplay">
                    <source src="../assets/pulse.mp4" type="video/mp4" />
                </video>
            </div>
            <div class="w-full h-full flex flex-col justify-center space-y-5 items-center z-20">
                <div
                    class="flex justify-center shadow-lg shadow-blue/70 items-center 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] border-[1px] border-white bg-blue2/50 rounded-xl py-5 px-3">
                    <p
                        class="text-white flex justify-center items-center 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg ph:text-sm font-Lato">
                        {{ timerOutput }}
                    </p>
                </div>
                <div
                    class="flex justify-center shadow-lg shadow-blue/70 items-center 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] border-[1px] border-white bg-blue2/50 rounded-xl py-5 px-3">
                    <p
                        class="text-yellow text-center font-Lato 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg ph:text-sm">
                        Send BNB to the presale address and recive your presale tokens immediately</p>
                </div>
                <div
                    class="flex justify-between shadow-lg shadow-blue/70 px-5 items-center 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] border-[1px] border-white bg-blue2/50 rounded-xl py-5">
                    <font-awesome-icon icon="fa-solid fa-arrow-down-long" class="text-2xl text-white" />
                    <p
                        class="text-white font-Lato 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg ph:text-sm">
                        Presale Address
                    </p>
                    <font-awesome-icon icon="fa-solid fa-arrow-down-long" class="text-2xl text-white" />
                </div>
                <div
                    class="flex flex-row justify-between shadow-lg shadow-blue/70 items-center 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] border-[1px] border-white bg-blue2/50 rounded-xl py-5 px-2 ">
                    <p
                        class="text-[#f95192] font-Lato 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg ph:text-xs">
                        0xaC3A99afCEd31F1d7e8890a5C7C2c877dc1792c3
                    </p>
                    <div class="flex flex-row justify-center items-center space-x-5 font-Lato">
                        <button @click="copy()" class="text-white text-xl">
                            <font-awesome-icon icon="fa-regular fa-copy" />
                        </button>
                    </div>
                </div>
                <div
                    class="flex flex-row items-center justify-center  2xl:space-x-3 ph:space-x-2 2xl:w-[70%] xl:w-[700px] md:w-[700px] sm:w-[600px] ph:w-full">
                    <div
                        class="flex flex-col 2xl:text-3xl w-[25%] shadow-lg shadow-blue/70 xl:text-2xl 2xl:h-48 xl:h-44 lg:h-40 md:h-40 sm:h-32 ph:h-32 lg:text-xl md:text-xl sm:text-lg justify-center items-center text-white font-bold font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                        <p>% 50</p>
                        <p>Presale</p>
                    </div>
                    <div
                        class="flex flex-col 2xl:text-3xl w-[25%] shadow-lg shadow-blue/70 xl:text-2xl 2xl:h-48 xl:h-44 lg:h-40 md:h-40 sm:h-32 ph:h-32 lg:text-xl md:text-xl sm:text-lg justify-center items-center text-white font-bold  font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                        <p>% 23</p>
                        <p>Liquidity</p>
                    </div>
                    <div
                        class="flex flex-col 2xl:text-3xl w-[25%] shadow-lg shadow-blue/70 xl:text-2xl 2xl:h-48 xl:h-44 lg:h-40 md:h-40 sm:h-32 ph:h-32 lg:text-xl md:text-xl sm:text-lg justify-center items-center text-white font-bold font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                        <p>% 10</p>
                        <p>Rewards</p>
                    </div>
                    <div
                        class="flex flex-col 2xl:text-3xl w-[25%] shadow-lg shadow-blue/70 xl:text-2xl 2xl:h-48 xl:h-44 lg:h-40 md:h-40 sm:h-32 ph:h-32 lg:text-xl md:text-xl sm:text-lg justify-center items-center text-white font-bold font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                        <p>% 17</p>
                        <p>Burnt</p>
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px] shadow-lg  xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30 rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Token Name
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-lg rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        4xFinance
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px] shadow-lg xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30 rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Token Symbol
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-lg rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        4x
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px]  xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30 rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Token Decimals
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-lg rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        18
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px]  xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30 rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Min Contribute
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-sm rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        0.01 BNB
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px]  xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30 rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Max Contribute
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-sm rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        200 BNB
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px]  xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30  rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Tokens Per BNB
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-lg rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        102000
                    </div>
                </div>
                <div
                    class="flex flex-row 2xl:min-w-[800px]  xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] text-white space-x-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full">
                    <div
                        class="bg-blue2/30 justify-center items-center rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[70%] text-xl">
                        Total Supply
                    </div>
                    <div
                        class="bg-blue2/30 justify-center items-center flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg ph:text-xs rounded-2xl border-[1px] shadow-lg shadow-blue/70 px-5 py-4 font-Lato w-[30%] text-xl text-center">
                        10,000,000,000
                    </div>
                </div>
            </div>
        </div>
        <footerComponent />
    </div>
</template>

<script setup>
import headerComponent from '@/components/headerComponent.vue';
import footerComponent from '@/components/footerComponent.vue';

</script>

<script>

import { RouterLink } from 'vue-router';


export default {
    data() {
        data: {
            return {
                countDownToTime: new Date("Apr 3, 2024 00:00:00").getTime(),
                timerOutput: null
            }
        }
    },
    components: { RouterLink },
    methods: {
        copy() {
            navigator.clipboard.writeText("0xaC3A99afCEd31F1d7e8890a5C7C2c877dc1792c3");
        },
        startTimer: function () {
            const timeNow = new Date().getTime();
            const timeDifference = this.countDownToTime - timeNow;
            const millisecondsInOneSecond = 1000;
            const millisecondsInOneMinute = millisecondsInOneSecond * 60;
            const millisecondsInOneHour = millisecondsInOneMinute * 60;
            const millisecondsInOneDay = millisecondsInOneHour * 24;
            const differenceInDays = timeDifference / millisecondsInOneDay;
            const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
            const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
            const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
            const remainingDays = Math.floor(differenceInDays);
            const remainingHours = Math.floor(remainderDifferenceInHours);
            const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
            const remainingSeconds = Math.floor(remainderDifferenceInSeconds);
            this.timerOutput = remainingDays + " Days " + ": " + remainingHours + " Hours " + ": " + remainingMinutes + " Minutes " + ": " + remainingSeconds + " Seconds";
        }
    },
    mounted() {
        setInterval(() => { this.startTimer() }, 1000);
    }
};
</script>