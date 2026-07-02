<template>
    <div id="PhoneForm" class="flex xl:place-content-center">
        <div class="relative bg-yellow p-[40px] md:p-[64px] flex flex-col rounded-2xl gap-[32px] overflow-hidden w-full">
        
            <NuxtImg
            class="absolute right-[-92px] md:right-[-70px] xl:right-[0px] bottom-0"
            width="248px"
            height="248px"
            src="/images/cat.png"
            />
            <div class="flex flex-col gap-[20px] z-1">
                <h1 class="text-heading-3xl text-black">
                    {{ phoneForm.title.firstLine }}<br class="hidden md:block"> {{ phoneForm.title.secondLine }}<br class="hidden md:block"> {{ phoneForm.title.thirdLine }}
                </h1>
                <p class="text-body-md text-black/75 md:w-[449.15px] 3xl:w-[504px]">{{ phoneForm.description }}</p>
            </div>
            <div class="flex flex-col gap-[12px] z-1 md:flex-row">
                <input 
                    v-model="phoneValue"
                    ref="phoneInput"
                    type="text" 
                    :placeholder="phoneForm.input.placeholder" 
                    class="bg-white/95 text-body-sm-medium text-dark-grey border-1 md:w-[434.11px] xl:w-[514.11px] border-black/15 rounded-[33px] h-[54px] px-[25px]"
                >
                <button @click="sendPhone" class="group bg-black rounded-[33px] md:w-[145.89px] h-[52px] md:h-[54px] cursor-pointer flex justify-center items-center ">
                    <p class="w-fit relative text-body-sm-bold text-white">
                        {{ phoneForm.button }}
                        <span class="absolute -bottom-0.5 right-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </p>        
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { UsePhoneModal } from '../composables/PhoneModalComposable';
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import imask from 'imask';
    import { landingContent } from '~/data/landing'

    const phoneForm = landingContent.phoneForm

    let { open, isOpen, text } = UsePhoneModal()
    let phoneInput = ref(null);
    let phoneValue = ref('')
    let phoneMask = null;

    onMounted(() => {
        phoneMask = imask(phoneInput.value, {
            mask: '7-000-000-00-00'
        });
    });

    onBeforeUnmount(() => {
        phoneMask?.destroy()
    })

    const sendPhone = async () => {  
        let hasError = errorChecking()
        if (hasError) {
            return
        }

        await $fetch('/api/send-phone', {
            method: 'POST',
            body: {
                phone: phoneValue.value
            }
        })

        text.value = phoneForm.messages.success
        open()
        phoneValue.value = ''
    }

    function errorChecking() {
        if (phoneValue.value.length == 0) {
            text.value = phoneForm.messages.emptyPhone
            open()
            return true
        }

        if (phoneValue.value.length < 15) {
            text.value = phoneForm.messages.invalidPhone
            open()
            return true
        }
        
        return false
    }
</script>