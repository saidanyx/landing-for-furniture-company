<template>
    <Transition name="modal">
        <div @click="emit('close')" v-show="isOpen" class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-black/50 z-10 flex justify-center items-center">
            <div @click.stop class="modal-content w-[90%] h-[80%] relative flex content-center items-center">
                <iframe class="w-full h-full"
                    src="//quiz.marquiz.ru/691af789b121790019a15c6d?cookies=%7B%22_ym_uid%22%3A%221781900775278625305%22%7D&amp;
                    href=https%3A%2F%2Fmebel.meyko.ru%2F%3Fysclid%3Dmqp8zk53du590821641&amp;mode=inline&amp;ysclid=mqp8zk53du590821641"
                    scrolling="auto" frameborder="0" allow="autoplay">
                </iframe>
                <button class="absolute top-[12px] right-[12px]" @click="emit('close')"><img class="w-[30px] " src="~/assets/images/cross.svg" alt=""></button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    defineProps<{
        isOpen: boolean
    }>()

    const emit = defineEmits<{
        close: []
    }>()
</script>

<style scoped>
    .modal-enter-active,
    .modal-leave-active {
    transition: opacity 0.35s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
    opacity: 0;
    }

    .modal-enter-to,
    .modal-leave-from {
    opacity: 1;
    }

    .modal-enter-active .modal-content,
    .modal-leave-active .modal-content {
    transition:
        opacity 0.35s ease,
        transform 0.35s ease;
    }

    .modal-enter-from .modal-content,
    .modal-leave-to .modal-content {
    opacity: 0;
    transform: scale(0.9);
    }

    .modal-enter-to .modal-content,
    .modal-leave-from .modal-content {
    opacity: 1;
    transform: scale(1);
    }
</style>