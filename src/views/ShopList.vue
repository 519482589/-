<template>
    <div class="hander-car">
        <div class="store-content">
            <div class="cart-box">
                <div class="title">
                    <h2>购物清单</h2>
                </div>
                <div class="cart-inner">
                    <div class="empty-label" v-if="cartList.length==0">
                        <h3>您的购物车中还没有商品</h3>
                        <a class="link" href="javascript:;">现在选购</a>
                    </div>
                    <div v-if="cartList.length!=0">
                        <div class="cart-table-title">
                            <span class="name">商品信息</span>
                            <span class="operation">操作</span>
                            <span class="subtotal">小计</span>
                            <span class="num">数量</span>
                            <span class="price">单价</span>
                        </div>
                        <div class="cart-table">
                            <div class="cart-group">
                                <!--购物列表-->
                            
                                <div 
                                    class="cart-top-items" 
                                    v-for="(item,index) in cartList" 
                                    :key="index"
                                >
                                    <div class="cart-items">
                                        <div class="items-choose">
                                            <span 
                                                :class="{'checkbox-on':item.isCheck}" 
                                                class="blue-checkbox-new" 
                                                @click="checkMut(index)"
                                            >
                                                <a></a>
                                            </span>
                                        </div>
                                        <div class="items-thumb">
                                            <img :src="item.image">
                                            <a href="javascript:;" target="_blank"></a>
                                        </div>
                                        <div class="name hide-row" >
                                            <div class="name-table">
                                                <a href="javascript:;" target="_blank">
                                                   {{item.title}}
                                                </a>
                                                <ul class="attribute">
                                                    <li>{{item.detail.color_name}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="operation">
                                            <a @click="delCartMut(index)" class="items-delete-btn" ></a>
                                        </div>
                                        <div class="subtotal">¥ {{item.price*item.num}}</div>
                                        <div class="item-cols-num">
                                            <div class="select js-select-quantity">
                                                <span 
                                                    class="down" 
                                                    :class="item.num<=1?'down-disabled':''"
                                                    @click="item.num>1?item.num--:''"
                                                >
                                                    -
                                                </span>
                                                <span class="num">
                                                    <input v-model="item.num" type="text" style="display: inline-block;">
                                                    <!-- <ul>
                                                        <li>1</li>
                                                        <li>2</li>
                                                    </ul> -->
                                                </span>
                                                <span 
                                                    class="up" 
                                                    :class="item.num>=item.limit_num?'up-disabled':''"
                                                    @click="item.num<item.limit_num?item.num++:''"
                                                >
                                                    +
                                                </span>
                                                
                                            </div>
                                        </div>
                                        <div class="price">¥ {{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-bottom-bg fix-bottom"  v-if="cartList.length!=0">
                    <div class="cart-bar-operation">
                        <div>
                            <div class="choose-all js-choose-all">
                                <span 
                                    class="blue-checkbox-new " 
                                    :class="{'checkbox-on':allInfo.isAllCheck}"
                                    @click="allCheckMut(allInfo.isAllCheck)"
                                >
                                    <a></a>
                                </span>
                                全选
                            </div>
                            <div @click="delCartCheckMut" class="delete-choose-goods">删除选中的商品</div>
                        </div>
                    </div>
                    <div class="shipping">
                        <div class="shipping-box">
                            <div class="shipping-total shipping-num">
                                <h4 class="">
                                    已选择 <i>{{allInfo.checkNum}}</i> 件商品
                                </h4>
                                <h5>
                                    共计 <i >{{allInfo.allNum}}</i> 件商品
                                </h5>
                            </div>
                            <div class="shipping-total shipping-price">
                                <h4 class="">
                                    应付总额：
                                    <span>￥</span>
                                    <i >{{allInfo.checkPrice}}</i> 
                                </h4>
                                <h5 class="shipping-tips">
                                    应付总额不含运费
                                </h5>
                                
                            </div>
                        </div>
                        <span 
                            class="jianguo-blue-main-btn big-main-btn js-checkout" 
                            :class="{'disabled-btn':allInfo.checkNum<=0}"
                        >
                            <router-link :to="allInfo.checkNum<=0?'':'/checkout'">
                                现在结算
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState({
            // cartList:(state)=>{ //与下面的方法等价
            //     return state.cart.cartList
            // },
            cartList:state => state.cart.cartList
            
        }),
        ...mapGetters(['allInfo'])
    },
    methods: {
        ...mapMutations([
            'checkMut',
            'allCheckMut',
            'delCartMut',
            'delCartCheckMut'
        ])
    },
}
</script>

<style>
@import url('../assets/css/cart.css');
</style>