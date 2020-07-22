<template>
    <el-row :gutter="20">
        <el-col :span="8" :offset="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>登录</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        去注册
                    </el-button>
                </div>
                <el-input class="my-input" placeholder="请输入手机号">
                    <template slot="prepend">
                        <i class="el-icon-s-custom"></i>
                    </template>
                </el-input>
                <el-input class="my-input" placeholder="请输入密码">
                    <template slot="prepend">
                        <i class="el-icon-view"></i>
                    </template>
                </el-input>
                <el-button @click="handleLogin" class="btn" type="primary">
                    登录
                </el-button>
            </el-card>
        </el-col>
    </el-row>
  
</template>

<script>
export default {
    methods: {
        handleLogin() {
            localStorage.setItem('token','jlkjljlkjljakljlk')
            this.$router.push({
                path:'/address'
            })
        }
    },
}
</script>

<style>
.my-input{
    margin: 10px 0;
}
.btn{
    display: block;
    width: 100%;
}
</style>