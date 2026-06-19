<template>
    <div class="relative bg-yellow p-[40px] md:p-[64px] flex flex-col rounded-2xl my-[35px] gap-[32px] overflow-hidden">
        <NuxtImg
        class="absolute right-[-92px] md:right-[-70px] bottom-0"
        width="248px"
        height="248px"
        src="/images/cat.png"
        />
        <div class="flex flex-col gap-[20px] z-1">
            <h1 class="text-heading-3xl text-black">Подберём мебель под<br class="hidden md:block"> ваш дом за один<br class="hidden md:block"> разговор.</h1>
            <p class="text-body-md text-black/75 md:w-[449.15px]">Оставьте номер — менеджер позвонит в течение 15 минут, рассчитает смету и забронирует бесплатный замер.</p>
        </div>
        <div class="flex flex-col gap-[12px] z-1 md:flex-row">
            <input 
                ref="phoneInput"
                type="text" 
                placeholder="+7 (___) ___-__-__" 
                class="bg-white/95 text-body-sm-medium text-dark-grey border-1 md:w-[434.11px] border-black/15 rounded-[33px] h-[54px] px-[25px]"
            >
            <button class="text-body-sm-bold bg-black rounded-[33px] md:w-[145.89px] text-white h-[52px] md:h-[54px] cursor-pointer">Жду звонка</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import imask from 'imask';

    let phoneInput = ref(null);
    let phoneMask = null;

    onMounted(() => {
        phoneMask = imask(phoneInput.value, {
            mask: '7-000-000-00-00'
        });
    });

    onBeforeUnmount(() => {
        phoneMask?.destroy()
    })
</script>