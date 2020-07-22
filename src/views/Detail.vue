<template>
  <div class="store-content item" v-if="gdetail.stock_info">
    <div class="item-box">
        <div class="gallery-wrapper">
            <div class="gallery">
                <div class="thumbnail">
                    <ul>
                        <li 
                            v-for="(item,index) in gdetail.stock_info[m].imgs" 
                            :key="index" 
                            :class="index==n?'on':''" 
                            @click="n=index"
                        >
                            <img :src="item" />
                        </li>
                    </ul>
                </div>
                <div class="thumb">
                    <ul>
                        <li class="on">
                            <img :src="gdetail.stock_info[m].imgs[n]">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="sku-custom-title">
                <div class="params-price">
                    <span><em>¥</em><i>{{gdetail.stock_info[m].price}}</i></span>
                </div>
                <div class="params-info">
                    <h4>{{gdetail.stock_info[m].title}}</h4>
                    <h6>{{gdetail.stock_info[m].sub_title}}</h6>
                </div>
            </div>
            <div class="sku-dynamic-params-panel">
                <div class="sku-dynamic-params clear">
                    <span class="params-name">颜色</span>
                    <ul class="params-colors">
                        <li 
                            v-for="(item,index) in gdetail.stock_info" 
                            :key="index" 
                            :class="index==m?'cur':''" 
                            @click="m=index"
                        >
                            <a :style="{background:item.detail.color}"></a>
                        </li>
                    </ul>
                </div>
                <div class="sku-dynamic-params clear">
                    <div class="params-name">数量</div>
                    <div class="params-detail clear">
                        <div class="item-num js-select-quantity">
                            <span class="down down-disabled">-</span>
                            <span class="num">1</span>
                            <span class="up up-disabled">+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sku-status">
                <div class="cart-operation-wrapper clearfix">
                    <span class="blue-title-btn js-add-cart"><a>加入购物车</a></span>
                    <span class="gray-title-btn"><a>现在购买{{$route.params.id}}</a></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
// gdetail.stock_info
export default {
    data() {
        return {
            gdetail: {
                // 'stock_info':[{
                //     'imgs':[],
                //     'detail':{}
                // }]
            }, //商品详情数据包
            m:0, //标志当前是哪个子商品
            n:0  //标志当前是哪个缩略图处于激活状态
        }
    },
    created() {
        let id = this.$route.params.id
        let url = `http://localhost:3000/list?id=${id}`
        axios.get(url).then((res)=>{
            console.log(res)
            this.gdetail = res.data[0]
        })
    },
}
</script>

<style>
@import url('../assets/css/item.css');
</style>