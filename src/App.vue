<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>
<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>