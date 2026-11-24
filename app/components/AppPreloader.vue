<template>
    <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="isVisible"
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
            <div class="flex flex-col items-center gap-4">
                <div
                    class="h-[50px] w-[50px] animate-spin rounded-full
                           border-4 border-gray-200 border-t-yellow"
                ></div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(true)

let fallbackTimer: ReturnType<typeof setTimeout> | undefined

function waitForImage(image: HTMLImageElement): Promise<void> {
    image.loading = 'eager'

    if (image.complete) {
        return Promise.resolve()
    }

    return new Promise((resolve) => {
        const finish = () => resolve()

        image.addEventListener('load', finish, { once: true })
        image.addEventListener('error', finish, { once: true })

        if (image.complete) {
            finish()
        }
    })
}

onMounted(async () => {
    await nextTick()

    const images = Array.from(document.images).filter(
        image => image.getClientRects().length > 0
    )

    const preloadImages = Promise.all(
        images.map(async (image) => {
            await waitForImage(image)

            if (image.naturalWidth > 0) {
                await image.decode().catch(() => {})
            }
        })
    )

    await Promise.race([
        preloadImages,
        new Promise<void>((resolve) => {
            fallbackTimer = setTimeout(resolve, 12000)
        })
    ])

    isVisible.value = false

    if (fallbackTimer) {
        clearTimeout(fallbackTimer)
    }
})

onBeforeUnmount(() => {
    if (fallbackTimer) {
        clearTimeout(fallbackTimer)
    }
})
</script>