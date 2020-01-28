<template>
    <div>
        <div class="container header fixed z-10 py-5px">
            <div class="absolute top-22px left-17px" @click="openMenu()">
                <img src="../../assets/img/open.svg" />
            </div>
            <nuxt-link to="/" class="text-center mx-auto block">
                <img src="@/assets/img/logo.svg" class="mx-auto" />
            </nuxt-link>
        </div>
        <div
            class="header-mobile z-30 w-full fixed h-screen bg-no-repeat flex flex-col bg-top bg-center pt-40px pb-30px"
            :class="{ active: mobileMenuState }"
        >
            <div @click="closeMenu()">
                <img
                    src="../../assets/img/exit.svg"
                    class="absolute top-17px left-17px"
                />
            </div>

            <nuxt-link to="/" class="max-w-140px mx-auto">
                <img src="@/assets/img/logo-white.svg" alt="" />
            </nuxt-link>
            <div class="flex-grow"></div>
            <MainMenu @onSelectItem="closeMenu" />
            <SocialIcons />
            <p class="text-gray-1 text-center text-12px opacity-30 mt-25px">
                All Rights Reserved 2019 «Muratov Partners
            </p>
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
import SocialIcons from './SocialIcons.vue';
export default {
    components: { SocialIcons, MainMenu },
    data() {
        return {
            mobileMenuState: false
        };
    },
    methods: {
        openMenu() {
            this.mobileMenuState = true;
        },
        closeMenu() {
            this.mobileMenuState = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.header-mobile {
    background-color: #f9fcfc;
    background-image: url('../../assets/img/header-mob-back.png');
    left: -100%;
    transition: 0.4s left ease-in;
    &.active {
        left: 0;
    }
}
.header {
    background: radial-gradient(
        7683.68% 132444.76% at 50% 49.99%,
        #ffffff 0%,
        #122841 100%
    );
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
