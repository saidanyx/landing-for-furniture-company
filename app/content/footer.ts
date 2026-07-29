export const footerContent = {
    description: {
        firstLine: 'Воронежская мебельная фабрика.',
        secondLine: 'Создаём мебель с 1992',
        thirdLine: 'года.',
    },

    personalDataProcessingPolicy: {
        text: 'Политика обработки персольных данных',
        to: '/personalDataProcessingPolicy',
    },

    SaleAndPurchaseAgreement: {
        text: 'Договор купли-продажи',
        to: '/saleAndPurchaseAgreement',
    },

    chapters: [
        {
            title: 'Компания',
            items: ['ООО «Мэйко»', 'ИНН 3663060384', 'ОГРН 1063667241780'],
        },
        {
            title: 'Контакты',
            items: ['г. Воронеж, ул. Ильюшина, 5', '+7 (991) 325-09-01', 'otk@meyko.ru'],
        },
        {
            title: 'Документы',
            items: ['Договор купли-продажи', 'Политика обработки персольных данных'],
        },
    ],

    copyright: '© 1992–2026 МЭЙКО МЕБЕЛЬ. Все права защищены.',
    madeIn: 'Сделано с любовью в Воронеже',
} as const