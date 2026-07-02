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
                <div class="h-[50px] w-[50px] animate-spin rounded-full border-4 border-gray-200 border-t-yellow"/>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const isVisible = ref(true)

    const importantImages = [
        './images/гостиная с рабочим столом.jpg',
        './images/гостиная с рабочим столом.jpg'
    ]

    onMounted(async () => {
        await Promise.all(
            importantImages.map((src) => loadImage(src))
        )

        isVisible.value = false
    })

    function loadImage(src: string) {
        return new Promise<void>((resolve) => {
        const img = new Image()

        img.onload = () => resolve()
        img.onerror = () => resolve()

        img.src = src
    })
    }
</script>