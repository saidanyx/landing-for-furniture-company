<template>
    <div class="flex flex-col gap-[35px] xl:gap-[44.7px]" id="Catalog">
        <div class="flex flex-col items-center md:gap-[12px]">
            <div class="bg-light-yellow border-[1px] border-black/10 rounded-full flex w-[206px] md:w-[272px] h-[24px] md:h-[30px] gap-[7px] justify-center items-center">
                <div class="h-[6px] w-[6px] shrink-0 bg-yellow rounded-full"></div>
                <p class="text-label-2xs-semibold-wide translate-y-[1px] text-dark-grey">{{ catalog.badge }}</p>
            </div>
            <p class="text-heading-2xl-black text-black text-center">{{ catalog.title }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[24px] w-full">
            <div
                v-for="product in catalog.products"
                :key="product.name"
                class="bg-white rounded-[24px] overflow-hidden flex flex-col border-[1px] border-grey h-full"
            >
                <div class="aspect-[4/3] w-full overflow-hidden">
                    <img 
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-full object-cover"
                    />
                </div>

                <div class="flex flex-col justify-center items-start px-[25px] py-[20px] gap-[4px]">
                <h1 class="text-label-xs-semibold text-dark-grey">
                    {{ product.title }}
                </h1>

                <p class="text-heading-xl-bold">
                    {{ product.name }}
                </p>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup lang="ts">
    import { catalogContent } from '~/content/catalog'

    const catalog = catalogContent
</script>