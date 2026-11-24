<template>
    <div class="bg-white">
        <div class="relative w-full">
            <div class="relative mx-auto flex flex-col w-[var(--layout-width)] pt-[56px] pb-[57px] gap-[40px] xl:flex-row xl:justify-between xl:gap-[20px]">
                <div class="flex flex-col gap-[20px]">
                    <NuxtImg
                        :src="footer.logo.src"
                        :alt="footer.logo.alt"
                        loading="eager"
                        width="132"
                        height="40"
                        class="object-contain"
                    />
                    <p class="text-body-sm text-dark-grey">
                        {{ footer.description.firstLine }}<br class="hidden xl:block"> {{ footer.description.secondLine }}<br class="hidden xl:block"> {{ footer.description.thirdLine }}
                    </p>
                </div>

                <div v-for="chapter in footer.chapters" :key="chapter.title" class="flex flex-col gap-[16px]">
                    <h1 class="text-label-sm text-black">{{ chapter.title }}</h1>

                    <div class="flex flex-col gap-[10px]">
                        <template v-for="(item, itemIndex) in chapter.items" :key="itemIndex">
                            <a
                                v-if="item === footer.personalDataProcessingPolicy.text"
                                class="text-body-sm text-dark-grey"
                                :href="footer.personalDataProcessingPolicy.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ item }}
                            </a>

                            <a
                                v-else-if="item === footer.SaleAndPurchaseAgreement.text"
                                class="text-body-sm text-dark-grey"
                                :href="footer.SaleAndPurchaseAgreement.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ item }}
                            </a>

                            <p v-else class="text-body-sm text-dark-grey">
                                {{ item }}
                            </p>
                        </template>
                    </div>
                </div>
            </div>

            <hr class="absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 border-0 bg-grey"/>
            <hr class="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 border-0 bg-grey"/>
        </div>

        <div class="relative mx-auto flex flex-col w-[var(--layout-width)] md:flex-row md:justify-between gap-[12px] py-[24px] content-center mb-[24px] md:mb-0">
            <p class="text-body-xs text-center text-dark-grey">{{ footer.copyright }}</p>
            <p class="text-body-xs text-center text-dark-grey">{{ footer.madeIn }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { footerContent } from '~/content/footer'

    const footer = footerContent
</script>