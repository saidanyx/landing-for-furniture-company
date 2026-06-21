<template>
    <div class="flex flex-col gap-[35px]">
        <div class="flex flex-col items-center md:gap-[12px]">
            <div class="bg-light-yellow border-[1px] border-black/10 rounded-full flex w-[206px] md:w-[272px] h-[24px] md:h-[30px] gap-[7px] justify-center items-center">
                <div class="h-[6px] w-[6px] shrink-0 bg-yellow rounded-full"></div>
                <p class="text-label-2xs-semibold-wide translate-y-[1px] text-dark-grey">СОБСТВЕННОЕ ПРОИЗВОДСТВО</p>
            </div>
            <p class="text-heading-2xl-black text-black text-center">Мебель для жизни</p>
        </div>
        <div class="flex flex-col gap-[25px] md:gap-[24px] md:flex-row md:justify-center">
            <div v-for="product in products" :key="product.title" class="bg-white rounded-[24px] overflow-hidden flex flex-col gap-[25px] md:gap-[24px] border-[1px] border-grey">
                <img 
                :src=product.image
                alt="image"
                class="object-contain"
                />
                <div class="flex flex-col px-[25px] gap-[4px] pb-[25px] md:pb-[24px]">
                    <h1 class="text-label-xs-semibold text-dark-grey">{{ product.title }}</h1>
                    <p1 class="text-heading-xl-bold">{{ product.name }}</p1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    interface ProductType {
        title: string;
        name: string;
        image: string;
    }

    let products = ref<ProductType[] | null>(null);

    products.value = [
        {
            title: 'Гостиная',
            name: 'Кресло «Мур»',
            image: '/images/Кресло «Мур».png'
        },
        {
            title: 'Столовая',
            name: 'Стол «Дубрава»',
            image: '/images/Стол «Дубрава».png'
        },
        {
            title: 'Спальня',
            name: 'Шкаф «Терра»',
            image: '/images/Шкаф «Терра».png'
        }
    ]

</script>