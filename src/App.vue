<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {Button} from 'ant-design-vue';
import Vue from 'vue';
Vue.use(Button)

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