<template>
    <div class="flex flex-col gap-[35px] xl:gap-[44.7px]">
        <div class="flex flex-col items-center md:gap-[12px]">
            <div class="bg-light-yellow border-[1px] border-black/10 rounded-full flex w-[206px] md:w-[272px] h-[24px] md:h-[30px] gap-[7px] justify-center items-center">
                <div class="h-[6px] w-[6px] shrink-0 bg-yellow rounded-full"></div>
                <p class="text-label-2xs-semibold-wide translate-y-[1px] text-dark-grey">СОБСТВЕННОЕ ПРОИЗВОДСТВО</p>
            </div>
            <p class="text-heading-2xl-black text-black text-center">Мебель для жизни</p>
        </div>
        <div class="flex flex-col gap-[25px] md:gap-[24px] md:flex-row md:justify-center w-full">
            <div class="bg-white rounded-[24px] overflow-hidden flex flex-col gap-[24px] md:gap-[24px] border-[1px] h-full border-grey md:w-1/3">
                <img 
                src="/images/Кресло «Мур».png"
                alt="image"
                class="object-contain"
                />
                <div class="flex flex-col px-[24px] gap-[4px] pb-[25px] md:pb-[37px] xl:pb-[25px]">
                    <h1 class="text-label-xs-semibold text-dark-grey">Гостиная</h1>
                    <p1 class="text-heading-xl-bold">Кресло<br class="hidden md:block xl:hidden"> «Мур»</p1>
                </div>
            </div>
            <div class="bg-white rounded-[24px] overflow-hidden flex flex-col gap-[24px] border-[1px] h-full border-grey md:w-1/3">
                <img 
                src="/images/Стол «Дубрава».png"
                alt="image"
                class="object-contain"
                />
                <div class="flex flex-col px-[24px] gap-[4px] pb-[25px] md:pb-[37px] xl:pb-[25px] xl:flex-row xl:justify-between">
                    <div class="flex flex-col gap-[4px]">
                        <h1 class="text-label-xs-semibold text-dark-grey">Столовая</h1>
                        <p1 class="text-heading-xl-bold">Стол<br class="hidden md:block xl:hidden"> «Дубрава»</p1>
                    </div>
                    <div class="flex flex-col gap-[4px] mt-[4px] hidden xl:block 2xl:hidden">
                        <h1 class="text-body-xs text-dark-grey text-right">Цена</h1>
                        <p1 class="text-heading-bold-2 text-right"> от 38 500 ₽</p1>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-[24px] overflow-hidden flex flex-col gap-[24px] border-[1px] h-full border-grey md:w-1/3">
                <img 
                src="/images/Шкаф «Терра».png"
                alt="image"
                class="object-contain"
                />
                <div class="flex flex-col px-[24px] pb-[25px] md:pb-[37px] xl:pb-[25px] xl:flex-row xl:justify-between">
                    <div class="flex flex-col gap-[4px]">
                        <h1 class="text-label-xs-semibold text-dark-grey">Спальня</h1>
                        <p1 class="text-heading-xl-bold">Шкаф<br class="hidden md:block xl:hidden"> «Терра»</p1>
                    </div>
                    <div class="flex flex-col mt-[4px] hidden xl:block 2xl:hidden">
                        <h1 class="text-body-xs text-dark-grey text-right">Цена</h1>
                        <p1 class="text-heading-bold-2 text-right"> от 62 000 ₽</p1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>