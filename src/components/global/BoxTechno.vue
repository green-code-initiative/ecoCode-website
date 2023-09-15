<template>
    <div class="container">
        <div class="box-container" v-for="language in languages" :key="language.id">
            <img :src="language.logo" :alt="language.alt" :width="language.width" :height="language.height" />
        </div>
    </div>
</template>

<script setup lang="ts">
import LogoPython from "/img/logo/logo-python.jpg";
import LogoJava from "/img/logo/logo-java.jpg";
import LogoPhp from "/img/logo/logo-php.jpg";
import LogoJs from "/img/logo/logo-js.jpg";
import LogoHtml from "/img/logo/logo-html.jpg";
import LogoRust from "/img/logo/logo-rust.jpg";
import LogoTs from "/img/logo/logo-ts.jpg";
import LogoXml from "/img/logo/logo-xml.jpg";
import LogoAndroid from "/img/logo/logo-android.jpg";
import LogoIos from "/img/logo/logo-ios.jpg";

const languages = [
    {
        id: 1,
        logo: LogoPython,
        alt: "Python",
        width: 120,
        height: 120,
    },
    {
        id: 2,
        logo: LogoJava,
        alt: "Java",
        width: 120,
        height: 120,
    },
    {
        id: 3,
        logo: LogoPhp,
        alt: "PHP",
        width: 120,
        height: 120,
    },
    {
        id: 4,
        logo: LogoJs,
        alt: "JavaScript",
        width: 120,
        height: 120,
    },
    {
        id: 5,
        logo: LogoHtml,
        alt: "HTML",
        width: 120,
        height: 120,
    },
    {
        id: 6,
        logo: LogoRust,
        alt: "Rust",
        width: 120,
        height: 120,
    },
    {
        id: 7,
        logo: LogoTs,
        alt: "TypeScript",
        width: 120,
        height: 120,
    },
    {
        id: 8,
        logo: LogoXml,
        alt: "XML",
        width: 120,
        height: 120,
    },
    {
        id: 9,
        logo: LogoAndroid,
        alt: "Android",
        width: 120,
        height: 120,
    },
    {
        id: 10,
        logo: LogoIos,
        alt: "Ios",
        width: 120,
        height: 120,
    },
];

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 45px 0 0 0;
    max-width: 1050px;
}

.box-container {
    width: 180px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap:72px;
    margin-bottom: 46px;
}
</style>
