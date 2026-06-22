<template>
  <div class="relative pt-[56px] pb-[57px] bg-white">
    <hr class="absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 border-0 bg-grey"/>
    <div class="flex flex-wrap gap-[40px] xl:justify-center">
        <div class="flex flex-col gap-[20px] w-[340px] xl:w-[278px]">
            <div class="flex items-center gap-[12px]">
            <img 
                src="/assets/images/Logotype.svg"
                alt="image"
                width="131.7px"
                height="40px"
                class="object-contain"
            />
            </div>
            <p class="text-body-sm text-dark-grey md:w-[290px]">Воронежская мебельная фабрика.<br class="hidden xl:block"> Создаём мебель с 1995<br class="hidden xl:block"> года.</p>
        </div>
        <div class="flex flex-col gap-[16px]  w-[340px] xl:w-[278px]">
            <h1 class="text-label-sm text-black">КАТАЛОГ</h1>
            <div class="flex flex-col gap-[10px]">
                <p class="text-body-sm text-dark-grey">Диваны</p>
                <p class="text-body-sm text-dark-grey">Кресла</p>
                <p class="text-body-sm text-dark-grey">Шкафы</p>
                <p class="text-body-sm text-dark-grey">Кухни</p>
            </div>
        </div>
        <div class="flex flex-col gap-[16px] w-[340px] xl:w-[278px]">
            <h1 class="text-label-sm text-black">КОМПАНИЯ</h1>
            <div class="flex flex-col gap-[10px]">
                <p class="text-body-sm text-dark-grey">О нас</p>
                <p class="text-body-sm text-dark-grey">Производство</p>
                <p class="text-body-sm text-dark-grey">Сервис</p>
                <p class="text-body-sm text-dark-grey">Вакансии</p>
            </div>
        </div>
        <div class="flex flex-col gap-[16px] w-[340px] xl:w-[278px]">
            <h1 class="text-label-sm text-black">КОНТАКТЫ</h1>
            <div class="flex flex-col gap-[10px]">
                <p class="text-body-sm text-dark-grey">г. Воронеж, ул. Производственная, 30</p>
                <p class="text-body-sm text-dark-grey">+7 (473) 200-30-30</p>
                <p class="text-body-sm text-dark-grey">hello@meyko.ru</p>
            </div>
        </div>
    </div>
    <hr class="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 border-0 bg-grey"/>
  </div>
  <div class="flex flex-col content-center">
    <div class="flex flex-col md:flex-row md:justify-between gap-[12px] py-[24px] content-center mb-[24px] md:mb-0">
        <p class="text-body-xs text-center text-dark-grey">© 1995–2026 МЭЙКО МЕБЕЛЬ. Все права защищены.</p>
        <p class="text-body-xs text-center text-dark-grey">Сделано с любовью в Воронеже</p>
    </div>
  </div>
</template>

<script setup lang="ts">
    let blocks = ref<FooterType[] | null>(null);
    
    interface FooterType {
        title: string;
        items: string[];
    }

    blocks.value = [
        {
            title: 'Компания',
            items: ['ООО «Мэйко»', 'ИНН 3663060384', 'ОГРН 1063667241780']
        },
        {
            title: 'Контакты',
            items: ['г. Воронеж, ул. Ильюшина, 5', '+7 (991) 325-09-01', 'hello@meyko.ru']
        },
        {
            title: 'Документы',
            items: ['Политика обработки персольных данных',]
        },
    ]
</script>