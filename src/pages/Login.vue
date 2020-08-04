<template>
    <a-form>
        <a-form-item label="用户名">
            <a-input id="userName" />
        </a-form-item>
        <a-form-item label="密码">
            <a-input id="password" />
        </a-form-item>
        <a-form-item>
            <a-button type="primary">
                登录
            </a-button>
        </a-form-item>
    </a-form>
</template>
<script>

export default {
    name: 'Login',
    data() {
        return {

        }
    },
    methods: {

    }

}
</script>