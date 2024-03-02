<template>
    <div class="bg-black w-full h-full ">
        <headerComponent />
        <div class="flex justify-center items-center w-full h-full">
            <div class="flex justify-center items-center flex-col space-y-24 w-full h-full">
                <div class="w-full h-full pt-12 justify-center items-center flex flex-col-reverse lg:flex-row">
                    <div
                        class="flex z-20 flex-col justify-start ph:items-center 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center w-auto space-y-5">
                        <p
                            class="text-white ph:text-xl ph:text-center 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl font-Lato font-extrabold">
                            Combination of
                            Forex and Crypto</p>
                        <p
                            class="text-gray ph:text-center ph:text-base 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:p-0 ph:px-5 2xl:text-xl xl:text-lg lg:text-lg md:text-left sm:text-center md:text-pretty sm:text-pretty 2xl:text-left xl:text-left lg:text-left md:text-lg sm:text-lg 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[500px] ph:w-[95%] font-Lato font-semibold">
                            for the first time in the world the revolution of crypto and forex has happened which is
                            called
                            4xFinance, to be part of this tribe you should click on the Buy button and then purchase
                            some of
                            our 4X tokens (or you will miss the movment)
                        </p>
                        <div class="flex flex-row justify-between w-[500px] ph:w-[320px]  space-x-4">
                            <RouterLink to="/presale"
                                class="bg-blue1/80 font-Lato shadow-lg shadow-blue1/80 text-white flex justify-center items-center rounded-full 2xl:text-xl xl:text-lg lg:text-base md:text-lg sm:text-lg py-3 w-full">
                                Buy Now
                            </RouterLink>
                            <RouterLink to="/"
                                class="bg-blue2 font-Lato text-white shadow-lg shadow-blue2 flex justify-center items-center rounded-full 2xl:text-xl xl:text-lg lg:text-lg md:text-lg sm:text-lg  py-3 w-full">
                                WhitePaper
                            </RouterLink>
                        </div>
                    </div>
                    <div class="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                        <video class="z-10" loop width="100%" height="100%" muted autoplay="autoplay">
                            <source src="../assets/land8.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div
                    class=" 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[90%] sm:w-[90%] ph:w-[95%] h-full flex justify-center items-center flex-col">
                    <div>
                        <p
                            class="font-Lato 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-2xl md:text-xl ph:text-xl text-white font-bold">
                            What has the 4x DONE so far ?
                        </p>
                    </div>
                    <div
                        class="flex flex-row justify-center items-center w-full pt-5 2xl:pb-40 xl:pb-40 lg:pb-24 md:pb-12 sm:pb-12 z-20 space-x-4 ph:space-x-2">
                        <div
                            class="font-Lato xl:text-2xl lg:text-xl md:text-lg 2xl:text-3xl ph:text-center sm:text-base ph:text-sm w-full flex justify-center items-center shadow-md shadow-blue1 hover:shadow-lg hover:shadow-blue1 text-gray font-bold p-4 ph:p-2 border-2 rounded-full border-blue2 ">
                            $172860 TVL
                        </div>
                        <div
                            class="font-Lato xl:text-2xl lg:text-xl md:text-lg 2xl:text-3xl ph:text-center sm:text-base ph:text-sm w-full flex justify-center items-center shadow-md shadow-blue1 hover:shadow-lg hover:shadow-blue1 text-gray font-bold ph:p-2 border-2 rounded-full border-blue2 p-4">
                            32K Community Members
                        </div>
                        <div
                            class="font-Lato xl:text-2xl lg:text-xl md:text-lg 2xl:text-3xl ph:text-center sm:text-base ph:text-sm w-full flex justify-center items-center shadow-md shadow-blue1 hover:shadow-lg hover:shadow-blue1 text-gray font-bold ph:p-2 p-4 border-2 rounded-full border-blue2 ">
                            4xFinance exchange
                        </div>
                    </div>
                </div>
                <div
                    class=" 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-[90%] pb-20 h-full flex justify-center items-center flex-col">
                    <div class="relative w-full flex justify-end items-center pb-10">
                        <div
                            class="text-white ph:text-lg 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl  sm:text-3xl 2xl:w-[520px] xl:w-[520px] lg:w-[520px] md:w-[450px] sm:w-[450px] ph:w-[300px] z-20 font-Lato p-5 border-r-2 rounded-3xl border-blue2 font-bold ">
                            What We Are Aiming To Do
                        </div>
                        <div class="absolute opacity-50 z-10 top-1">
                            <img src="../assets/gridcolor.jpg" alt="">
                        </div>
                    </div>
                    <div class="w-full flex flex-col space-y-6 z-20">
                        <div class="flex flex-row space-x-5 justify-start items-center">
                            <div>
                                <img src="../assets/circle.png" width="100" height="100" alt="">
                            </div>
                            <div class="flex flex-col space-y-2">
                                <p class="text-white text-2xl ph:text-xl font-Lato">Satellite Internet</p>
                                <p class="text-gray text-xl font-Lato ph:text-lg">4xfinance will run satellite internet
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-row space-x-5 justify-center items-center">
                            <div>
                                <img src="../assets/check.png" width="100" height="100" alt="">
                            </div>
                            <div class="flex flex-col space-y-2">
                                <p class="text-white text-2xl font-Lato ph:text-xl">Verifed Team</p>
                                <p class="text-gray text-xl font-Lato ph:text-lg">18 people working all day on this
                                    project
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-row space-x-5 justify-end items-center">
                            <div>
                                <img src="../assets/sup.png" width="100" height="100" alt="">
                            </div>
                            <div class="flex flex-col space-y-2">
                                <p class="text-white text-2xl font-Lato ph:text-xl">Support</p>
                                <p class="text-gray text-xl font-Lato ph:text-lg">4xFinance has its own 24/7 support
                                    team
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center z-20">
                    <video class="z-10" loop width="100%" height="100%" muted autoplay="autoplay">
                        <source src="../assets/cow5.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="relative w-full flex justify-center items-center">
                    <div
                        class="absolute opacity-50 z-10 h-full 2xl:-top-50 ph:-top-40 ph:-left-10 xl:left-0 2xl:left-36 lg:left-0 md:left-0 sm:left-0">
                        <img src="../assets/gridcolor2.jpg" alt="" width="400">
                    </div>
                    <div
                        class="flex justify-center z-20 items-start pt-10 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-[80%] flex-col  space-y-10 ">
                        <div
                            class=" text-white text-4xl w-[520px] ph:text-2xl ph:w-[300px] font-Lato p-5 border-l-2 py-10 pl-8 rounded-3xl border-blue2 font-bold ">
                            About Us
                        </div>
                        <div class=" w-full h-full flex justify-end items-center">
                            <p class="font-Lato text-gray text-xl w-auto ph:text-base ph:text-pretty">
                                professional experts in developing blockchain technology and web3 contains (1CEO - 5
                                Marketing experts - 4 CTO - 3 CFO - 2 product manager - 3 advisore ) in total 18 people
                                with
                                6 year + experince in developing and deploying business we aim to build an empire of
                                $30M+
                                Mcap crypto project we need your support in our journy if you want to know more just
                                click
                                on the white paper and read it!
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="w-[70%] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-[95%] h-full flex justify-center items-center flex-col relative z-20">
                    <div
                        class="absolute flex justify-center ph:w-full  ph:h-full 2xl:w-2/3 xl:w-[90%] md:w-full sm:w-full lg:w-full items-center 2xl:top-0 xl:top-0 opacity-60">
                        <video class="z-10" loop width="100%" height="100%" muted autoplay="autoplay">
                            <source src="../assets/pulse.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="w-full h-full flex flex-col justify-center space-y-5 items-center pt-10 z-20">
                        <div
                            class=" ph:w-[95%] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] border-t-2 p-5 space-y-4 rounded-3xl border-blue2 flex-col flex justify-center items-center">
                            <p class="text-white font-Lato font-bold text-5xl ph:text-3xl">Tokenomics</p>
                            <p class="text-white font-Lato text-3xl ph:text-xl">10,000,000,000</p>
                            <p class="text-white font-Lato text-3xl ph:text-xl">Total Supply</p>
                        </div>
                        <div
                            class="flex 2xl:flex-row 2xl:items-end xl:items-end lg:items-end md:items-end sm:items-end xl:flex-row lg:flex-row md:flex-row sm:flex-row ph:items-center ph:flex-col ph:space-y-5 ph:text-sm w-[70%] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] ph:w-full 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:min-w-[300px] border-[1px] border-white bg-blue2/50 rounded-xl p-5 justify-between ">
                            <p class="text-white font-Lato ">
                                Contract Address :
                            </p>
                            <p class="text-white font-Lato ">
                                0xa59a967Bb18793b463963Ebc3B5f0236B750625C
                            </p>
                            <button @click="copy()" class="text-white 2xl:pl-28 xl:pl-12 md:pl-12 ph:pl-2">
                                <font-awesome-icon icon="fa-regular fa-copy" />
                            </button>
                        </div>
                        <div
                            class="flex flex-row items-center justify-center space-x-10 ph:space-x-2 w-[70%] 2xl:min-w-[800px] xl:min-w-[700px] md:min-w-[700px] sm:min-w-[600px] ph:w-full">
                            <div
                                class="flex flex-col 2xl:w-52 2xl:h-52 2xl:text-3xl xl:w-44 xl:h-44 xl:text-2xl lg:w-44 lg:h-44 lg:text-xl md:w-44 md:h-44 md:text-xl sm:w-44 sm:h-44 ph:w-28 ph:h-28 sm:text-lg justify-center items-center text-white font-bold font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                                <p>% 50</p>
                                <p>Presale</p>
                            </div>
                            <div
                                class="flex flex-col 2xl:w-52 2xl:h-52 2xl:text-3xl xl:w-44 xl:h-44 xl:text-2xl lg:w-44 lg:h-44 lg:text-xl md:w-44 md:h-44 md:text-xl sm:w-44 sm:h-44 ph:w-28 ph:h-28 sm:text-lg justify-center items-center text-white font-bold  font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                                <p>% 23</p>
                                <p>Liquidity</p>
                            </div>
                            <div
                                class="flex flex-col 2xl:w-52 2xl:h-52 2xl:text-3xl xl:w-44 xl:h-44 xl:text-2xl lg:w-44 lg:h-44 lg:text-xl md:w-44 md:h-44 md:text-xl sm:w-44 sm:h-44 ph:w-28 ph:h-28 sm:text-lg justify-center items-center text-white font-bold  font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                                <p>% 10</p>
                                <p>Rewards</p>
                            </div>
                            <div
                                class="flex flex-col 2xl:w-52 2xl:h-52 2xl:text-3xl xl:w-44 xl:h-44 xl:text-2xl lg:w-44 lg:h-44 lg:text-xl md:w-44 md:h-44 md:text-xl sm:w-44 sm:h-44 ph:w-28 ph:h-28 sm:text-lg justify-center items-center text-white font-bold font-Lato bg-blue2/30 rounded-2xl border-[1px]">
                                <p>% 17</p>
                                <p>Burnt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full flex justify-center items-center flex-col relative ">
                    <div class="absolute flex justify-center items-center opacity-60">
                        <video class="z-10" loop width="100%" height="100%" muted autoplay="autoplay">
                            <source v-if="!isMobile()" src="../assets/down1.mp4" type="video/mp4" />
                            <source v-else src="../assets/downvertical.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div
                        class=" 2xl:w-[70%] xl:w-[70%] ph:space-y-5 ph:w-full lg:w-full md:w-full sm:w-full h-full flex justify-center items-center flex-col">
                        <div
                            class=" w-full flex justify-end lg:w-[85%] 2xl:w-full xl:w-full md:w-[85%] sm:w-[85%] ph:w-[85%] items-center pt-10 ph:pt-0 z-20">
                            <div
                                class="text-white ph:text-2xl text-4xl font-Lato p-5 border-r-2 py-10 rounded-3xl pr-10 ph:pr-5 border-blue2 font-bold ">
                                Our RoadMap
                            </div>
                        </div>
                        <div
                            class="flex md:space-y-10 ph:space-y-7 ph:flex-col sm:space-y-10 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center md:items-center 2xl:items-stretch xl:items-stretch lg:items-stretch sm:items-center w-[90%]  2xl:h-[1000px] xl:h-[1000px] lg:h-[1000px] md:h-full sm:h-full pb-12 z-20">
                            <div class="flex items-start ph:justify-center">
                                <div
                                    class="flex flex-col space-y-4 shadow-md shadow-blue1 rounded-3xl items-start justify-center w-80 h-80 bg-blue2/20 p-5">
                                    <p class="text-3xl text-blue2 font-Lato font-bold">Phase 1</p>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Solidity contract audit and EtherScan verification</p>
                                    </div>
                                    <div class="flex flex-row space-x-2 ">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Launch Pre-sale</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-CMC/Coingeco listing</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Dex Listing(Uniswap)</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-White paper v1</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center ph:justify-center">
                                <div
                                    class="flex flex-col space-y-4 shadow-md shadow-blue1 rounded-3xl items-start justify-center w-80 h-80 bg-blue2/20 p-5">
                                    <p class="text-3xl text-blue2 font-Lato font-bold">Phase 2</p>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Partnership with other companies</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-CEX listing</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Application development</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-joining new event on Twitter</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-joining new event on Discord</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-end ph:justify-center">
                                <div
                                    class="flex flex-col space-y-4 shadow-md shadow-blue1 rounded-3xl items-start justify-center w-80 h-80 bg-blue2/20 p-5">
                                    <p class="text-3xl text-blue2 font-Lato font-bold">Phase 3</p>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Andrioid/IOS version avalible</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-30M$ mcap</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Huge partnership with influencers</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-White paper/roadmap v2</p>
                                    </div>
                                    <div class="flex flex-row space-x-2">
                                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl text-blue1" />
                                        <p class="text-white">-Take the project to the next level</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        return {

        };
    },
    components: { RouterLink },
    methods: {
        copy() {
            navigator.clipboard.writeText("0xa59a967Bb18793b463963Ebc3B5f0236B750625C");
        },
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    },
};
</script>