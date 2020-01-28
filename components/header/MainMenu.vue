<template>
    <ul class="md:flex md:justify-between w-full max-w-750px xl:max-w-890px">
        <li class="text-center" @click="select">
            <nuxt-link to="/blog" class="main-menu-link" active-class="active"
                >Блог</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/services"
                class="main-menu-link"
                active-class="active"
                >Услуги</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link to="/client" class="main-menu-link" active-class="active"
                >Клиенты</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/contacts"
                class="main-menu-link"
                active-class="active"
                >Контакты</nuxt-link
            >
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        select() {
            this.$emit('onSelectItem');
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    .main-menu-link {
        border-bottom: 5px solid transparent;
        &.active,
        &:hover {
            border-bottom: 5px solid #3ca6cd;
        }
    }
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 768px) {
    ul {
        .main-menu-link {
            border: none;
            &.active,
            &:hover {
                border: none;
                color: #3ca6cd;
            }
        }
    }
}
</style>
