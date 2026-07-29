<template>
  <section
    id="AboutUs"
    class="relative gap-[66px] flex flex-col pt-[35px] md:pt-[35px] xl:pt-[96px] pb-[35px] md:pb-[96px] xl:pb-[96px]"
    aria-labelledby="about-title"
  >
    <div
      class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-light-yellow"
      aria-hidden="true"
    ></div>

    <div class="flex flex-col xl:flex-row gap-[64px] xl:gap-[102.83px] justify-between">
      <div class="flex flex-col">
        <p class="text-body-xs-bold text-orange">
          {{ about.eyebrow }}
        </p>

        <h2 id="about-title" class="mt-[12px]">
          <span class="text-heading-3xl text-black block">
            {{ about.title.black.firstLine }}<br>{{ about.title.black.secondLine }}
          </span>

          <span class="text-heading-3xl text-orange block">
            {{ about.title.orange.firstLine }}<br class="hidden xl:block"> {{ about.title.orange.secondLine }}
          </span>
        </h2>

        <p class="mt-[24px] text-body-md-relaxed text-dark-grey md:w-[437.17px] 3xl:w-[595px]">
          {{ about.description }}
        </p>
      </div>

      <div
        class="flex flex-col radius-24px border-[1px] rounded-[24px] border-black/10 bg-black/10 gap-[1px] md:overflow-hidden xl:w-[692px] 3xl:w-[950px] xl:h-[394px]"
        aria-label="Преимущества компании"
      >
        <div class="flex flex-col md:flex-row gap-[1px] 3xl:h-[210px]">
          <article class="flex flex-col px-[32px] pt-[32px] pb-[33.5px] md:w-full bg-white rounded-t-[24px] md:rounded-none">
            <p class="text-number-xs text-orange" aria-hidden="true">
              {{ about.cards.production.number }}
            </p>

            <h3 class="text-heading-xl-bold text-black mt-[16px]">
              {{ about.cards.production.title.firstLine }}<br> {{ about.cards.production.title.secondLine }}
            </h3>

            <p class="text-body-sm-relaxed text-dark-grey mt-[10px]">
              {{ about.cards.production.text.firstLine }}<br class="hidden md:block xl:hidden"> {{ about.cards.production.text.secondLine }}<br class="hidden xl:block"> {{ about.cards.production.text.thirdLine }}
            </p>
          </article>

          <article class="flex flex-col px-[32px] pt-[32px] pb-[33.5px] md:w-full bg-white">
            <p class="text-number-xs text-orange" aria-hidden="true">
              {{ about.cards.choice.number }}
            </p>

            <h3 class="text-heading-xl-bold text-black mt-[16px]">
              {{ about.cards.choice.title }}
            </h3>

            <p class="text-body-sm-relaxed text-dark-grey mt-[10px]">
              {{ about.cards.choice.text.firstLine }}<br> {{ about.cards.choice.text.secondLine }}
            </p>
          </article>
        </div>

        <div class="flex flex-col md:flex-row gap-[1px]">
          <article class="flex flex-col px-[32px] pt-[32px] pb-[33.5px] md:w-full bg-white">
            <p class="text-number-xs text-orange" aria-hidden="true">
              {{ about.cards.service.number }}
            </p>

            <h3 class="text-heading-xl-bold text-black mt-[16px]">
              {{ about.cards.service.title }}
            </h3>

            <p class="text-body-sm-relaxed text-dark-grey mt-[10px]">
              {{ about.cards.service.text.firstLine }}<br> {{ about.cards.service.text.secondLine }}
            </p>
          </article>

          <article class="flex flex-col px-[32px] pt-[32px] pb-[33.5px] md:w-full bg-white rounded-b-[24px] md:rounded-none">
            <p class="text-number-xs text-orange" aria-hidden="true">
              {{ about.cards.years.number }}
            </p>

            <h3 class="text-heading-xl-bold text-black mt-[16px]">
              {{ about.cards.years.title }}
            </h3>

            <p class="text-body-sm-relaxed text-dark-grey mt-[10px]">
              {{ about.cards.years.text.firstLine }}<br> {{ about.cards.years.text.secondLine }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aboutContent } from '~/content/about'

const about = aboutContent
</script>