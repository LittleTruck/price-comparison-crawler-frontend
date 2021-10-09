<template>
    <div class="home">
        <h1>
            {{ count }}
        </h1>
<!--        <button @click="$store.commit('INCREMENT')">INCREMENT</button>-->
        <button class="button-class" @click="$store.commit('INCREMENT')">CSS Class</button>
        <button class="border border-black p-4 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out" @click="$store.commit('INCREMENT')">Tailwind CSS</button>
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
.button-class{
    border: solid 1px black;
    border-radius: 0.5rem;
    padding: 1rem;
    transition: 0.5s ease-in-out;
}
.button-class:hover{
    background-color:rgb(99,102,241) ;
    color: white;
}
</style>
