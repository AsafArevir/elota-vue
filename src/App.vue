<template>
    <NavComp />

    <router-view />
    <FooterComp />
</template>

<script>
import NavComp from "@/components/NavbarComp.vue"
import FooterComp from "@/components/FooterComp.vue"
export default {
    name: "App",
    components: {
        NavComp,
        FooterComp
    }
}
</script>

<style>
#app {
    color: #2c3e50;
}
</style>
