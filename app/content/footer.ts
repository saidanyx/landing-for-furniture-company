export const footerContent = {
    description: {
        firstLine: 'Воронежская мебельная фабрика.',
        secondLine: 'Создаём мебель с 1995',
        thirdLine: 'года.',
    },

    personalDataProcessingPolicy: {
        text: 'Политика обработки персональных данных',
        href: '/documents/personal-data-policy.pdf',
    },

    SaleAndPurchaseAgreement: {
        text: 'Договор купли-продажи',
        href: '/documents/sale-and-purchase-agreement.pdf',
    },

    logo: {
        src: '/logotype.svg',
        alt: 'Мэйко — мебель',
    },

    chapters: [
        {
            title: 'Компания',
            items: ['ООО «Мэйко»', 'ИНН 3663060384', 'ОГРН 1063667241780'],
        },
        {
            title: 'Контакты',
            items: ['г. Воронеж, ул. Ильюшина, 5', '+7 (991) 325-09-01', 'info@meyko.ru'],
        },
        {
            title: 'Документы',
            items: [
                'Политика обработки персональных данных',
                'Договор купли-продажи',
            ],
        },
    ],

    copyright: '© 1995–2026 МЭЙКО МЕБЕЛЬ. Все права защищены.',
    madeIn: 'Сделано с любовью в Воронеже',
} as const