<template>
    <div class="relative gap-[26px] flex flex-col md:flex-row" id="Reviews">
        <div class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-light-yellow"></div>
        <div class="flex flex-col md:w-1/2 3xl:w-2/5">
            <div class="bg-light-yellow border-1 border-black/10 rounded-lg flex items-center justify-center w-[188px] 3xl:w-[237px] h-[42px] gap-[8px]">
                    <div class="h-[6px] w-[6px] bg-yellow-500 rounded-full"></div>
                    <p class="text-label-xs-semibold-wide text-orange">{{ reviews.badge }}</p>
            </div>
            <p class="text-heading-3xl-black text-black pt-[20px]">{{ reviews.title.firstLine }}<br> {{ reviews.title.secondLine }}</p>
            <p class="text-body-md-relaxed text-dark-grey pt-[24px] ">{{ reviews.description.firstLine }}<br class="hidden md:block"> {{ reviews.description.secondLine }}</p>
            <div class="w-auto h-[700px] mt-[14px]">
                <iframe class="w-full rounded-xl" style="width:100%;height:100%;border:1px solid #e6e6e6;box-sizing:border-box" :src="reviews.widgets.reviewsSrc"></iframe>
            </div>
        </div>
        <iframe class="h-[432px] w-full object-cover rounded-xl md:mt-[62px] md:w-1/2 2xl:w-[60%] md:h-auto" :src="reviews.widgets.mapSrc" width="500" height="400" frameborder="0"></iframe>
    </div>
</template>

<script setup lang="ts">
    import { reviewsContent } from '~/content/reviews'

    const reviews = reviewsContent
</script>