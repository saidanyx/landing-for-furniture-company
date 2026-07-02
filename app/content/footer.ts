export const footerContent = {
    description: {
        firstLine: 'Воронежская мебельная фабрика.',
        secondLine: 'Создаём мебель с 1995',
        thirdLine: 'года.',
    },

    personalDataPolicy: {
        text: 'Политика обработки персольных данных',
        to: '/personalDataProcessingPolicy',
    },

    chapters: [
        {
            title: 'Компания',
            items: ['ООО «Мэйко»', 'ИНН 3663060384', 'ОГРН 1063667241780'],
        },
        {
            title: 'Контакты',
            items: ['г. Воронеж, ул. Ильюшина, 5', '+7 (991) 325-09-01', 'hello@meyko.ru'],
        },
        {
            title: 'Документы',
            items: ['Политика обработки персольных данных'],
        },
    ],

    copyright: '© 1995–2026 МЭЙКО МЕБЕЛЬ. Все права защищены.',
    madeIn: 'Сделано с любовью в Воронеже',
} as const