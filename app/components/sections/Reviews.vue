<template>
    <div class="relative gap-[24px] flex flex-col py-[24px] xl:flex-row">
        <div class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-light-yellow"></div>
        <div class="flex flex-col gap-[24px] xl:w-1/2">
            <div class="flex flex-col gap-[14px]">
                <div class="flex flex-col gap-[20px]">
                    <div class="bg-light-yellow border-1 border-black/10 rounded-lg flex items-center justify-center w-[188px] h-[42px] gap-2">
                            <div class="h-[6px] w-[6px] bg-yellow-500 rounded-full"></div>
                            <p class="text-label-xs-semibold-wide text-orange">Отзывы клиентов</p>
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <p class="text-heading-3xl-black text-black">Нам доверяют<br> уют в доме.</p>
                        <p class="text-body-md-relaxed text-dark-grey">Мы ценим доверие наших клиентов и делаем всё,<br class="hidden md:block"> чтобы каждая покупка радовала долгие годы.</p>
                    </div>
                </div>
                <div class="bg-white flex flex-col p-[24px] gap-[12px] rounded-lg border-[1px] border-grey">
                    <div class="flex flex-col gap-[2px]">
                        <h1 class="text-body-xl text-black">Мэйко</h1>
                        <div class="flex gap-[13px]">
                            <p class="text-body-xxl text-black">4,4</p>
                            <div>
                                <p class="text-yellow text-heading-xl-bold">★★★★★</p>
                                <p class="text-body-sm text-dark-grey">83 отзыва · 149 оценок</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-[12px] bg-[#F5F4F4] rounded-[10px] px-[13px] py-[8.5px] items-center justify-center">
                        <p class="text-body-xs-spacing text-black">Поставьте нам оценку</p>
                        <button class="bg-[#2889FD] text-body-xs-medium-spacing rounded-[10px] py-[11px] px-[15.5px] text-white">Оставить отзыв</button>
                    </div>
                    <div class="flex flex-col gap-[10px]">
                        <div class="flex flex-col gap-[6px] pb-[13px] border-b-[1px] border-grey">
                            <div class="flex gap-[11px] ">
                                <img class="w-[35px] h-[35px] rounded-full" src="/assets/images/ball.png"></img>
                                <div class="flex flex-col gap-[7px]">
                                    <p class="text-body-sm-height-semibold text-black">Татьяна Шипилова</p>
                                    <p class="text-body-sm-height text-dark-grey">1 февраля</p>
                                </div>
                            </div>
                            <p class="text-yellow text-heading-xl-bold">★★★★★</p>
                            <p class="text-black text-body-sm md:w-[544px]">Не в первый раз заказываю мебель в этом салоне, очень качественно всё делают, вежливый персонал девушки всё быстро рассчитали, можно заказать мебель любого размера.</p>
                        </div>
                        <div class="flex flex-col gap-[6px] pb-[13px] border-b-[1px] border-grey">
                            <div class="flex gap-[11px] ">
                                <img class="w-[35px] h-[35px] rounded-full" src="/assets/images/rock.png"></img>
                                <div class="flex flex-col gap-[7px]">
                                    <p class="text-body-sm-height-semibold text-black">Ольга У</p>
                                    <p class="text-body-sm-height text-dark-grey">23 марта 2025</p>
                                </div>
                            </div>
                            <p class="text-yellow text-heading-xl-bold">★★★★★</p>
                            <p class="text-black text-body-sm md:w-[520px]">Посещение магазина оставило наилучшее впечатления. Людмила внимательно отнеслась ко всем нашим пожеланиям, подобрала, со знанием дела, все что нам было нужно. Мы хотели заказать стол-тумбу под мойку и ПММ, в результате ещё купили и стол обеденный, и стулья, и кровати с матрасом 😄. По телефону можно уточнить...</p>
                        </div>
                        <div class="flex flex-col gap-[6px]">
                            <div class="flex gap-[11px] ">
                                <img class="w-[35px] h-[35px] rounded-full" src="/assets/images/alien.png"></img>
                                <div class="flex flex-col gap-[7px]">
                                    <p class="text-body-sm-height-semibold text-black">Антон Р.</p>
                                    <p class="text-body-sm-height text-dark-grey">4 мая</p>
                                </div>
                            </div>
                            <p class="text-yellow text-heading-xl-bold">★★★★★</p>
                            <p class="text-black text-body-sm md:w-[544px]">Отличное качество мебели на заказ. Много цветов. Близко к дому магазин и фабрика.</p>
                        </div>
                    </div>
                    <button class="bg-[#F2F6FA] text-body-sm-height-semibold rounded-[10px] py-[11px] px-[15.5px] text-[#2889FD]">Больше отзывов на Яндекс Картах</button>
                </div>
            </div>
        </div>
        <img class=" relative xl:w-1/2 w-full h-auto xl:mt-[62px] object-cover rounded-xl" src="/images/meiko-map.png"></img>
    </div>
</template>