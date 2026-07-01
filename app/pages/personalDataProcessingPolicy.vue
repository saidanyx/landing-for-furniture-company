<template>
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="max-h-[calc(100dvh-40px)] w-[88%] xl:w-[70%] 2xl:w-[60%] overflow-y-auto overflow-x-hidden">
            <NuxtLink class="w-[50px] h-auto" to="/"><img class="w-[50px] h-auto" src="~/assets/images/return.svg" alt=""></NuxtLink>
            <h2 class="text-[50px] mt-[40px] pb-[40px] font-bold">{{ policy.title }}</h2>
            <div class="flex flex-col gap-[30px]">
                <p class="text-[30px]" v-for="point in policy.points">{{ point }}</p>
            </div>
        </div>
  </div>

</template>

<script setup lang="ts">
let policy = {
    title: "Политика обработки персональных данных",
    points: [
        "Настоящая политика описывает, как 'ООО МЭЙКО' обрабатывает персональные данные пользователей сайта.",

        "Мы собираем только те данные, которые пользователь передаёт сам: номер телефона в форме заявки и ответы в опроснике Marquiz.",

        "Эти данные используются только для обработки заявки, понимания запроса пользователя и связи с ним через менеджера.",

        "Данные не продаются и не передаются третьим лицам, кроме сервисов, необходимых для работы сайта и обработки заявок, включая Marquiz.",

        "Доступ к данным имеют только сотрудники, которым это необходимо для связи с пользователем.",

        "Пользователь может запросить удаление своих данных или отозвать согласие на их обработку, написав на: doc@meyko.ru.",

        "Актуальная версия политики размещается на этой странице."
    ]
}
</script>