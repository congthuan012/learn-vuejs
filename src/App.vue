<script setup lang="ts">
import NavMenu from './components/NavMenu.vue';
import Header from './components/Header.vue';

</script>

<template>
    <!-- Headers -->
    <Header />
    <!-- Headers -->
    

    <!-- nav menu -->
    <NavMenu />
    <!-- nav menu -->

    <!-- content -->
    <div class="container">
        <router-view></router-view>
    </div>
    <!-- content -->
</template>

<style lang="scss">
    @import './assets/scss/global.scss';
</style>
