<template>
    <header class="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-3xl h-[73px] flex justify-center items-center">
        <div class="flex justify-start items-center w-[var(--layout-width)] h-full md:justify-between">    
            <img src="~/assets/images/logotype.svg" alt="header" />
            <div class="md:flex md:gap-[35.65px] md:w-[360.40px] md:h-[20px] hidden">
                <p class="text-dark-grey text-body-sm-semibold">Каталог</p>
                <p class="text-dark-grey text-body-sm-semibold whitespace-nowrap">О нас</p>
                <p class="text-dark-grey text-body-sm-semibold">Преимущества</p>
                <p class="text-dark-grey text-body-sm-semibold">Контакты</p>
            </div>
            <button class="bg-black text-white rounded-full w-[151.36px] h-[40px] hidden md:block text-body-sm-semibold">Заказать звонок</button>
        </div>
        <hr class="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 border-0 bg-grey"/>
    </header>
</template>
