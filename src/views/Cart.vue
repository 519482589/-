<template>
  <li class="nav-cart">
    <a href="javascript:;">购物车</a>
    <!--根据class改变颜色-->
    <span class="cart-empty-num cart-num">
        <i>{{allInfo.allNum}}</i>
    </span>
    <div class="nav-cart-wrapper">
        <div class="nav-cart-list">
            <div class="empty" v-if="cartList.length==0">
                <h3>购物车为空</h3>
                <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
            <div class="full">
                <div class="nav-cart-items">
                    <ul>
                        <li class="clear" v-for="(item,index) in cartList" :key="index">
                            <div class="cart-item js-cart-item cart-item-sell">
                                <div class="cart-item-inner">
                                    <div class="item-thumb">
                                        <img :src="item.image">
                                    </div>
                                    <div class="item-desc">
                                        <div class="cart-cell">
                                            <h4> 
                                                <a href="#/item/100027401">
                                                {{item.title}}
                                                </a>
                                            </h4>
                                            <p class="attrs">
                                                <span>{{item.detail.color_name}}</span>
                                            </p>
                                            <h6>
                                                <span class="price-icon">¥</span>
                                                <span class="price-num">{{item.price}}</span>
                                                <span class="item-num">x {{item.num}}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div @click="delCartMut(index)" class="del-btn">删除</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav-cart-total" v-if="allInfo.allNum!=0">
                    <p>共 <strong class="ng-binding">{{allInfo.allNum}}</strong> 件商品</p>
                    <h5>合计：
                        <span class="price-icon">¥</span>
                        <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">
                            {{allInfo.allPrice}}
                        </span>
                    </h5>
                    <h6>
                        <router-link to="/shop" class="nav-cart-btn">去购物车</router-link>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</li>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState({
            cartList:state=>state.cart.cartList 
        }),
        ...mapGetters([
            'allInfo'
        ])
    },
    methods: {
        ...mapMutations(['delCartMut'])
    },
}
</script>

<style>

</style>