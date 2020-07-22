<template>
  <div class="item">
        <div>
            <div class="item-img">
                <img :src="gitem.stock_info[num].image" alt="">
            </div>
            <h6>{{gitem.stock_info[num].title}}</h6>
            <h3 >{{gitem.stock_info[num].sub_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li 
                        v-for="(item,index) in gitem.stock_info" 
                        :key="index" 
                        @click="num=index"
                    >
                        <a 
                        href="javascript:;" 
                        :class="index==num ? 'active' : ''" 
                        :style="{background:item.detail.color}"
                        >
                        </a>
                    </li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <router-link :to="'/detail/'+gitem.id">查看详情</router-link>
                </span>
                <span class="item-blue-btn" @click="addCartMut(gitem.stock_info[num])">加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{gitem.stock_info[num].price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <a href="javascript:;" target="_blank"></a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props:['gitem'],
    data() {
        return {
            num: 0
        }
    },
    methods: {
        ...mapMutations([
            'addCartMut'
        ])
    },
}
</script>

<style>

</style>