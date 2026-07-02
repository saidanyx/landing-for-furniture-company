<template>
    <header class="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-3xl h-[73px] flex justify-center items-center 3xl:h-[85px]">
        <div class="flex justify-start items-center w-[var(--layout-width)] h-full md:justify-between">    
            <img src="~/assets/images/logotype.svg" alt="header" />
            <div class="hidden md:flex md:gap-[35.65px]">
                <a href="#Catalog" class="relative group cursor-pointer text-dark-grey text-body-sm-semibold">Каталог
                    <span class="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
                <a href="#AboutUs" class="relative group cursor-pointer text-dark-grey text-body-sm-semibold whitespace-nowrap">О нас
                    <span class="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
                <a href="#Reviews" class="relative group cursor-pointer text-dark-grey text-body-sm-semibold">Отзывы
                    <span class="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
                <button @click="open" class="relative group cursor-pointer text-dark-grey text-body-sm-semibold text-nowrap">Бесплатный замер
                    <span class="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
            </div>
            <a href="#PhoneForm" class="justify-center items-center bg-black text-white rounded-full w-[151.36px] h-[40px] 3xl:w-[168px] hidden md:flex text-body-sm-semibold transition-all duration-300 ease-in-out hover:scale-103 active:scale-95">Заказать звонок</a>
        </div>
        <hr class="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 border-0 bg-grey"/>
    </header>
</template>

<script setup lang="ts">
    import { UseQuizModal } from '../composables/QuizModalComposable'

    const { open } = UseQuizModal()
</script>
