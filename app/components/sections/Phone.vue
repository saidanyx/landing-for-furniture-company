<template>
    <div class="relative bg-yellow p-[40px] flex flex-col rounded-2xl gap-[33px]">
    
        <NuxtImg src="/images/cat.png" />
        <div class="flex flex-col gap-[22px] z-1">
            <h1 class="text-heading-3xl text-black">Подберём мебель под ваш дом за один разговор.</h1>
            <p class="text-body-md text-black/75">Оставьте номер — менеджер позвонит в течение 15 минут, рассчитает смету и забронирует бесплатный замер.</p>
        </div>
        <div class="flex flex-col gap-[12px] z-1">
            <input 
                type="text" 
                placeholder="+7 (___) ___-__-__" 
                class="bg-white/95 text-body-sm-medium text-dark-grey border-1 border-black/15 rounded-[33px] h-[54px] px-[25px]"
            >
            <button class="text-body-sm-bold bg-black rounded-[33px] text-white h-[52px] cursor-pointer">Жду звонка</button>
        </div>
    </div>
</template>