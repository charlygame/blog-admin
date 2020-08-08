<template>
    <div class="login">
        <img alt="Vue logo" src="../assets/logo.png">
        <a-form :label-col="{span: 6, offset: 3}" :wrapper-col="{span: 6}">
            <a-form-item label="用户名">
                <a-input id="userName" v-model="name"/>
            </a-form-item>
            <a-form-item label="密码">
                <a-input id="password" v-model="password" type="password" />
            </a-form-item>
            <a-form-item :wrapper-col="{span: 24}">
                <!-- <div class="buttonGroup"> -->
                    <a-button type="primary" @click="onLogin">
                        登录
                    </a-button>
                    <!-- <a-button type="primary">
                        注册
                    </a-button> -->
                <!-- </div> -->
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
import {Form, Input} from 'ant-design-vue'
import Vue from 'vue'
import RequestLogin from '../requests/user/RequestLogin'

Vue.use(Form);
Vue.use(Input);

export default {
    name: 'Login',
    data() {
        return {
            form: '',
            name: '',
            password: ''
        }
    },
    methods: {
        onLogin: async function() {
            let request = new RequestLogin();
            request.addParam('name', this.name);
            request.addParam('password', this.password);
            let response = await request.get({})
            console.log(response);
        }
    },
    watch: {
        name: function(newName, oldName) {
            console.log('>>>> watch Name change')
            console.log(newName);
            console.log(oldName);
        }
    }
}
</script>
<style>
    /* .buttonGroup {
        width: 400px;
        display: flex;
        justify-content: center;
    } */
    .login {
        margin-top: 25vh;
    }
</style>