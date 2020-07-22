//将项目中所有请求数据接口的方法，进行集中管理

import axios from 'axios'

const $axios = axios.create({
    baseURL:'http://localhost:3000'
})

export const getCity = ()=>{  //请求三级联动数据
    return $axios.get('/city') 
}

export const getGoodList = ()=>{ //请求商品列表数据
    return $axios.get('/list')
}