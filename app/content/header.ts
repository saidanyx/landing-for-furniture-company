export const headerContent = {
    badge: 'Воронеж · с 1995 года',

    title: {
        firstLine: 'Мебель,',
        secondLine: 'которая',
        thirdLine: 'мурлычет.',
    },

    description:
        '34 года создаём мебель, с которой хочется жить. Своё производство — честные цены, индивидуальные размеры, пожизненная гарантия.',

    images: {
        src: '/header_image.webp',
        alt: 'Уютная гостинная'
    },
    
    arrow: {
        src: '/arrow_button.svg',
        alt: 'Стрелка назад'
    },

    buttons: {
        primary: 'Сделать замер',
        secondary: {
            text: 'О производстве',
            href: '#AboutUs',
        },
    },

    measurementInfo: {
        title: 'Что такое замер?',
        text: 'Ответьте на несколько вопросов и получите расчёт по Вашим параметрам + цветной 3D-проект бесплатно',
    },

    stats: {
        experience: {
            value: '40К',
            label: 'заказов',
        },
        models: {
            value: '4200+',
            label: 'декоров',
        },
        clients: {
            value: '76%',
            labelFirstLine: 'клиентов',
            labelSecondLine: 'рекомендуют',
        },
    },
} as const