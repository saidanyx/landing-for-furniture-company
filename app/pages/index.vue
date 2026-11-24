<template>
    <main class="flex flex-col align-middle w-[var(--layout-width)] ml-auto mr-auto">
        <SectionsNavbar />
        <SectionsHeader class="anchor-links pt-[130px] md:pt-[137px] xl:pt-[169px] 3xl:pt-[190px]" />
        <SectionsRunningLine class="anchor-links mt-[36px]" />
        <SectionsCatalog class="anchor-links mt-[35px] xl:mt-[40.22px]"/>
        <SectionsAboutUs class="anchor-links mt-[35px] xl:mt-[96px]" />
        <SectionsPhoneForm class="anchor-links my-[35px] md:mb-[96px] xl:my-[96px]"/>
        <SectionsReviews class="anchor-links py-[24px] md:pb-[96px] xl:py-[96px]" />
        <SectionsFooter class="mt-[50px]"/>
        <ModalsQuizModal />
        <ModalsPhoneModal />
    </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Мебель на заказ в Воронеже',
  description: 'Изготавливаем кухни, шкафы, прихожие и корпусную мебель на заказ в Воронеже. Оставьте заявку, и менеджер свяжется с вами.',
  ogTitle: 'Мебель на заказ в Воронеже | МЭЙКО',
  ogDescription: 'Мебельная фабрика МЭЙКО: кухни, шкафы и корпусная мебель на заказ.',
  ogImage: '/images/og-main.png',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FurnitureStore',
        name: 'МЭЙКО',
        legalName: 'ООО «МЭЙКО»',
        url: 'https://meyko.ru',
        logo: 'https://meyko.ru/favicon.ico',
        image: 'https://meyko.ru/images/og-main.png',
        telephone: '+79913250901',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Воронеж',
          addressCountry: 'RU'
        },
        sameAs: [
          'https://meyko.ru'
        ]
      })
    }
  ]
})
</script>