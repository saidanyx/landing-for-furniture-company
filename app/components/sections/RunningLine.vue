<template>
    <div class="bg-yellow relative left-1/2 w-screen -translate-x-1/2 h-[58px] border-black border-t-[1px] border-b-[1px] content-center overflow-hidden">
        <div class="flex w-max animate-[scroll_100s_linear_infinite]">
            <div v-for="box in 5" :key="box" class="flex content-center items-center">
                <p v-for="item in runningLine.items" :key="`${box}-${item}`" class="text-heading-bold text-black mr-[48px]">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { landingContent } from '~/data/landing'

    const runningLine = landingContent.runningLine
</script>