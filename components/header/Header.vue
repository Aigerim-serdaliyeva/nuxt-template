<template>
    <div class="header w-full font-roboto z-10 py-5px sm:py-0 fixed">
        <div class="container">
            <div class="w-11/12 mx-auto flex items-center sm:justify-between">
                <nuxt-link to="/">
                    <img src="@/assets/img/logo.svg" alt="" />
                </nuxt-link>
                <MainMenu class="hidden sm:block" />
            </div>
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu }
};
</script>

<style lang="scss" scoped>
.header {
    background: radial-gradient(
        7683.68% 132444.76% at 50% 49.99%,
        #ffffff 0%,
        #122841 100%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
