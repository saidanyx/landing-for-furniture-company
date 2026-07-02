<template>
    <main class="flex flex-col align-middle w-[var(--layout-width)] ml-auto mr-auto">
        <SectionsNavbar />
        <SectionsHeader class="anchor-links pt-[130px] md:pt-[137px] xl:pt-[169px]" />
        <SectionsRunningLine class="anchor-links mt-[36px]" />
        <SectionsCatalog class="anchor-links mt-[35px] xl:mt-[40.22px]"/>
        <SectionsAboutUs class="anchor-links mt-[35px] xl:mt-[96px]" />
        <SectionsPhoneForm class="anchor-links my-[35px] xl:my-[96px]"/>
        <SectionsReviews class="anchor-links py-[24px]" />
        <SectionsFooter class="mt-[50px]"/>
        <ModalsQuizModal />
        <ModalsPhoneModal />
    </main>
</template>
