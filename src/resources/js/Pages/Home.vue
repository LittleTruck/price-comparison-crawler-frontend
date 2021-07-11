<template>
    <div class="home">
        <h1>
            {{ count }}
        </h1>
        <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Home",
        computed: {
            ...mapState({
                count: state => state.count
            })
        }
    }
</script>

<style scoped>

</style>
