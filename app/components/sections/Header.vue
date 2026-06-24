<template>
    <section class="flex flex-col">
        <div class="flex justify-between">
            <div>
                <div class="bg-light-yellow border-1 border-black/10 rounded-lg flex items-center justify-center w-[222px] h-[30px] gap-2">
                    <div class="h-[6px] w-[6px] bg-yellow-500 rounded-full"></div>
                    <p class="text-label-xs-semibold-wide text-dark-grey">Воронеж · с 1995 года</p>
                </div>
                <div class="flex flex-col gap-[27px] md:gap-[28px] mt-[24px]">
                    <h1 class="text-heading-4xl">Мебель,<br>которая<br class="hidden xl:block"> мурлычет.</h1>
                    <p class="text-body-lg w-[85vw] text-dark-grey md:w-[440.53px]">30 лет создаём диваны, кресла и шкафы, в которых хочется жить. Своё производство — честные цены, индивидуальные размеры, пожизненный сервис.</p>
                </div>
                <div class="flex flex-col md:flex-row gap-[16px] mt-[13px] md:mt-[37.75px] xl:mt-[31.75px]">
                    <button @click="openModal" class="flex justify-center items-center gap-[11px] text-body-sm-bold rounded-[33px] text-black w-[203px] h-[52px] bg-yellow">Сделать замер <img src="~/assets/images/arrow_button.svg" alt=""></button>
                    <a href="#AboutUs" class="flex justify-center items-center text-body-sm-medium border-[1px] border-[#DAD9D6] rounded-[33px] text-black w-[165px] h-[54px]">О производстве</a>
                </div>
                <div class="border-[1px] border-black/15 rounded-[27px] w-[342px] md:w-[386px] h-[120px] md:h-[137px] flex flex-col justify-center box-border px-[26px] md:px-[23px] gap-[9px] md:gap-[18px] mt-[13px] md:mt-[9.25px]">
                    <p class="text-body-sm-bold">Что такое замер?</p>
                    <p class="text-body-xs-relaxed h-[55px] flex justify-center items-center text-dark-grey">Ответьте на 6 вопросов и получите расчёт стоимости кухни по Вашим параметрам в 3-х ценовых вариантах + 3D-проект кухни бесплатно</p>
                </div>
            </div>
            
            <div class="relative hidden xl:block">
                <div class="pointer-events-none absolute -right-10 -top-10 z-1 h-[288px] w-[288px] rounded-full bg-[radial-gradient(circle,#FFD400_0%,rgba(249,157,28,0.5)_80%,rgba(249,157,28,0)_75%)] blur-2xl" />
                <NuxtImg class="relative w-[598px] h-[498.33px] z-10 object-cover rounded-lg" src="/images/header_living_room.svg"></NuxtImg>
            </div>

        </div>
        <div class="flex flex-col gap-[34px] md:gap-[16px] mt-[13px] md:mt-[47px] xl:mt-[16px]">
            <hr class="h-px w-full border-0 bg-grey"/>
            <div class="flex justify-between">
                <div class="flex flex-col gap-1 justify-start text-start h-[56px] w-[100px]">
                    <p class="text-heading-2xl">30</p>
                    <p class="text-body-xs-medium uppercase text-dark-grey">лет опыта</p>
                </div>
                <div class="flex flex-col gap-1 justify-start text-center h-[56px] w-[100px]">
                    <p class="text-heading-2xl">1 200+</p>
                    <p class="text-body-xs-medium uppercase text-dark-grey">моделей</p>
                </div>
                <div class="flex flex-col gap-1 justify-start text-center items-end h-[56px] w-[100px]"> 
                    <p class="text-heading-2xl">98%</p>
                    <p class="text-body-xs-medium uppercase text-dark-grey whitespace-nowrap">довольных<br class="md:hidden"> клиентов</p>
                </div>
            </div>
            <hr class="h-px w-full border-0 bg-grey"/>
        </div>
        <div class="relative w-full h-full mt-[34px] md:mt-[85px] xl:hidden">
            <div class="pointer-events-none absolute -right-10 -top-10 z-1 h-[288px] w-[288px] rounded-full bg-[radial-gradient(circle,#FFD400_0%,rgba(249,157,28,0.5)_80%,rgba(249,157,28,0)_75%)] blur-2xl" />
            <NuxtImg class="relative w-full h-full z-10 object-cover rounded-lg" src="/images/header_living_room.svg"></NuxtImg>
        </div>

        

        <SectionsQuizModal :is-open="isOpen" @close="closeModal"/>
    </section>
</template>



<script setup lang="ts">
    const isOpen = ref(false)

    const openModal = () => {
        console.log('123')
        isOpen.value = true
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
    }

    const closeModal = () => {
        isOpen.value = false
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
    }
</script>