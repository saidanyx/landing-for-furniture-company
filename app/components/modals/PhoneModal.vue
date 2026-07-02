<template>
    <Transition name="modal">
        <div @click="close" v-show="isOpen" class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-black/50 z-10 flex justify-center items-center">
            <div @click.stop class="modal-content xl:w-fit xl:h-fit w-[90%] h-fit relative flex justify-center items-center text-center bg-white rounded-md">
                <p class="text-body-xl xl:px-[90px] xl:py-[40px] border-box px-[10px] py-[60px]">{{ text }}</p>
                <button class="cursor-pointer z-100 absolute w-[15px] top-[10px] right-[10px] xl:top-[10px] xl:right-[10px]" @click="close"><img class="w-[full]" src="~/assets/images/cross.svg" alt=""></button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    import { UsePhoneModal } from '../composables/PhoneModalComposable';
    
    const { isOpen, close, text } = UsePhoneModal()
    console.log("111111", text)
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