<template>
  <section
    id="Catalog"
    class="flex flex-col gap-[35px] xl:gap-[44.7px]"
    aria-labelledby="catalog-title"
  >
    <div class="flex flex-col items-center md:gap-[12px]">
      <div class="bg-light-yellow border-[1px] border-black/10 rounded-full flex w-[206px] md:w-[272px] 3xl:w-[337px] h-[24px] md:h-[30px] gap-[7px] justify-center items-center">
        <div class="h-[6px] w-[6px] shrink-0 bg-yellow rounded-full" aria-hidden="true"></div>

        <p class="text-label-2xs-semibold-wide translate-y-[1px] text-dark-grey">
          {{ catalog.badge }}
        </p>
      </div>

      <h2 id="catalog-title" class="text-heading-2xl-black text-black text-center">
        {{ catalog.title }}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[24px] w-full">
      <article
        v-for="(product, index) in catalog.products"
        :key="product.name"
        class="bg-white rounded-[24px] overflow-hidden flex flex-col border-[1px] border-grey h-full"
        :aria-labelledby="`catalog-product-${index}`"
      >
        <div class="aspect-[4/3] w-full overflow-hidden">
          <NuxtImg
            :src="product.image"
            :alt="`Мебель МЭЙКО: ${product.name}`"
            class="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="flex flex-col justify-center items-start px-[25px] py-[20px] gap-[4px]">
          <p class="text-label-xs-semibold text-dark-grey">
            {{ product.title }}
          </p>

          <h3 :id="`catalog-product-${index}`" class="text-heading-xl-bold">
            {{ product.name }}
          </h3>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { catalogContent } from '~/content/catalog'

const catalog = catalogContent
</script>