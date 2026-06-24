<template>
    <div class="relative gap-[26px] flex flex-col md:flex-row " id="Reviews">
        <div class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-light-yellow"></div>
        <div class="flex flex-col md:w-1/2">
                <div class="bg-light-yellow border-1 border-black/10 rounded-lg flex items-center justify-center w-[188px] h-[42px] gap-[8px]">
                        <div class="h-[6px] w-[6px] bg-yellow-500 rounded-full"></div>
                        <p class="text-label-xs-semibold-wide text-orange">Отзывы клиентов</p>
                </div>
                <p class="text-heading-3xl-black text-black pt-[20px]">Нам доверяют<br> уют в доме.</p>
                <p class="text-body-md-relaxed text-dark-grey pt-[24px] ">Мы ценим доверие наших клиентов и делаем всё,<br class="hidden md:block"> чтобы каждая покупка радовала долгие годы.</p>
            <div class="h-[700px] mt-[14px]">
                <iframe class="w-full" style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/1069920512?comments"></iframe>
            </div>

        </div>
        <iframe class="h-[432px] w-full object-cover rounded-xl md:mt-[62px] md:w-1/2 md:h-auto" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad0016f15beb6e546f74871a15420fdb182908b2c0d592734741cf99707c789ce&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>

    </div>
</template>