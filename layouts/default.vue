<template>
    <div>
        <HeaderMobile class="sm:hidden" />
        <Header class="hidden sm:block" />
        <nuxt />
    </div>
</template>

<script>
import HeaderMobile from '../components/header/HeaderMobile.vue';
import Header from '../components/header/Header.vue';
export default {
    components: {
        Header,
        HeaderMobile
    },
    data() {
        return {};
    }
};
</script>
