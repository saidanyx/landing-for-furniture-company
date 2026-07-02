export const phoneFormContent = {
    title: {
        firstLine: 'Подберём мебель под',
        secondLine: 'ваш дом за один',
        thirdLine: 'разговор.',
    },

    description:
        'Оставьте номер — менеджер позвонит в течение 15 минут, рассчитает смету и забронирует бесплатный замер.',

    input: {
        placeholder: '+7 (___) ___-__-__',
    },

    button: 'Жду звонка',

    messages: {
        success: 'Спасибо! Менеджер свяжется с вами в ближайшее время.',
        emptyPhone: 'Номер не заполнен.',
        invalidPhone: 'Проверьте номер: Он должен содержать минимум 11 цифр.',
    },
} as const