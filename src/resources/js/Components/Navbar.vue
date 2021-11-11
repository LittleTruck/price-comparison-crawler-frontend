<template>
    <nav class="navBar">
        <ul class="navBar_link">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/recorder">Recorder</router-link></li>
            <li><router-link to="/index">Index</router-link></li>
            <li><router-link to="/product">Product</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
