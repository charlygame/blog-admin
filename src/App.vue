<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to your Vue.js App" />
        <a-button>
            按钮
        </a-button>
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