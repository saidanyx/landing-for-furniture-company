<template>
    <section class="flex flex-col">
        <div class="flex justify-between">
            <div>
                <div class="bg-light-yellow border-1 border-black/10 rounded-lg flex items-center justify-center w-[222px] 3xl:w-[271px] h-[30px] gap-2">
                    <div class="h-[6px] w-[6px] bg-yellow-500 rounded-full"></div>
                    <p class="text-label-xs-semibold-wide text-dark-grey">{{ hero.badge }}</p>
                </div>

                <div class="flex flex-col gap-[27px] md:gap-[28px] mt-[24px]">
                    <h1 class="text-heading-4xl">
                        {{ hero.title.firstLine }}<br>
                        {{ hero.title.secondLine }}<br class="hidden xl:block"> {{ hero.title.thirdLine }}
                    </h1>

                    <p class="text-body-lg w-[85vw] text-dark-grey md:w-[440.53px] 3xl:w-[490px]">
                        {{ hero.description }}
                    </p>
                </div>

                <div class="flex flex-col md:flex-row gap-[16px] mt-[13px] md:mt-[37.75px] xl:mt-[31.75px]">
                    <button @click="open" class="flex justify-center items-center gap-[11px] text-body-sm-bold rounded-[33px] text-black w-[203px] 3xl:w-[222px] h-[52px] bg-yellow transition-all duration-300 ease-in-out hover:scale-103 active:scale-95 group">
                        {{ hero.buttons.primary }}
                        <NuxtImg
                            :src="hero.arrow.src"
                            :alt="hero.arrow.alt"
                            loading="eager"
                        />
                    </button>

                    <div class="cursor-pointer flex justify-center items-center border-[1px] border-[#DAD9D6] rounded-[33px] w-[165px] 3xl:w-[184px] h-[54px]">
                        <a :href="hero.buttons.secondary.href" class="relative text-body-sm-medium text-black group">
                            {{ hero.buttons.secondary.text }}
                            <span class="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </a>
                    </div>
                </div>

                <div class="border-[1px] border-black/15 rounded-[27px] w-[342px] md:w-[386px] 3xl:w-[423px] h-[120px] md:h-[137px] flex flex-col justify-center box-border px-[26px] md:px-[23px] gap-[9px] md:gap-[18px] mt-[13px] md:mt-[9.25px]">
                    <p class="text-body-sm-bold">{{ hero.measurementInfo.title }}</p>

                    <p class="text-body-xs-relaxed h-[55px] flex justify-center items-center text-dark-grey">
                        {{ hero.measurementInfo.text }}
                    </p>
                </div>
            </div>

            <div class="relative hidden xl:block">
                <div class="pointer-events-none absolute -right-10 -top-10 z-1 h-[288px] w-[288px] rounded-full bg-[radial-gradient(circle,#FFD400_0%,rgba(249,157,28,0.5)_80%,rgba(249,157,28,0)_75%)] blur-2xl"></div>
                <NuxtImg
                    class="relative w-[620px] h-[498.33px] z-10 object-cover rounded-lg"
                    :src="hero.images.src"
                    :alt="hero.images.alt"
                    sizes="100vw xl:620px"
                    format="webp"
                    quality="82"
                    loading="eager"
                    decoding="async"
                    :preload="{ fetchPriority: 'high' }"
                />
            </div>
        </div>

        <div class="flex flex-col gap-[34px] md:gap-[16px] mt-[13px] md:mt-[47px] xl:mt-[16px]">
            <hr class="h-px w-full border-0 bg-grey"/>

            <div class="flex justify-between">
                <div class="flex flex-col gap-1 justify-start text-start h-[56px] w-[100px]">
                    <p class="text-heading-2xl">{{ hero.stats.experience.value }}</p>
                    <p class="text-body-xs-medium uppercase text-dark-grey">{{ hero.stats.experience.label }}</p>
                </div>

                <div class="flex flex-col gap-1 justify-start text-center h-[56px] w-[100px]">
                    <p class="text-heading-2xl">{{ hero.stats.models.value }}</p>
                    <p class="text-body-xs-medium uppercase text-dark-grey">{{ hero.stats.models.label }}</p>
                </div>

                <div class="flex flex-col gap-1 justify-start text-center items-end h-[56px] w-[100px]">
                    <p class="text-heading-2xl">{{ hero.stats.clients.value }}</p>
                    <p class="text-body-xs-medium uppercase text-end text-dark-grey whitespace-nowrap">
                        {{ hero.stats.clients.labelFirstLine }}<br class="md:hidden"> {{ hero.stats.clients.labelSecondLine }}
                    </p>
                </div>
            </div>

            <hr class="h-px w-full border-0 bg-grey"/>
        </div>

        <div class="relative w-full h-full mt-[34px] md:mt-[85px] xl:hidden">
            <div class="pointer-events-none absolute -right-10 -top-10 z-1 h-[288px] w-[288px] rounded-full bg-[radial-gradient(circle,#FFD400_0%,rgba(249,157,28,0.5)_80%,rgba(249,157,28,0)_75%)] blur-2xl"></div>
            <NuxtImg
                class="relative w-full h-full z-10 object-cover rounded-lg"
                :src="hero.images.src"
                :alt="hero.images.alt"
                sizes="100vw xl:620px"
                format="webp"
                quality="82"
                loading="eager"
                decoding="async"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
    import { headerContent } from '~/content/header'
    import { UseQuizModal } from '../composables/QuizModalComposable'

    const { open } = UseQuizModal()

    const hero = headerContent
</script>