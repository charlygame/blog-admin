<template>
    <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <a-form :form="form" :label-col="{span: 6, offset: 4}" :wrapper-col="{span: 4}">
        <a-form-item label="用户名">
            <a-input id="userName" />
        </a-form-item>
        <a-form-item label="密码">
            <a-input id="password" />
        </a-form-item>
        <a-form-item :label-col="{span: 6, offset: 4}" :wrapper-col="{span: 24}">
            <div class="buttonGroup">
                <a-button type="primary">
                    登录
                </a-button>
                
                <a-button type="primary">
                    注册
                </a-button>
            </div>
        </a-form-item>
    </a-form>
    </div>
</template>
<script>
import {Form, Input} from 'ant-design-vue'
import Vue from 'vue'

Vue.use(Form);
Vue.use(Input);

export default {
    name: 'Login',
    data() {
        return {
            form: ''
        }
    },
    methods: {

    }

}
</script>
<style>
    /* .buttonGroup {
        width: 400px;
        display: flex;
        justify-content: center;
    } */
</style>