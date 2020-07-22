<template>
    <div id="pop">
        <div class="module-dialog-layer" style="display: block;"></div>
        <div @click="close" class="module-dialog clear module-dialog-address module-dialog-show">
            <div class="dialog-panel" @click.stop="">
                <div class="topbar">
                    <div class="dialog-tit clear">
                        <h4 class="js-dialog-title">管理收货地址</h4>
                    </div>
                    <span @click="close" class="dialog-close">x</span>
                </div>
                <div class="dialog-con js-dialog-container">
                    <div class="animate-layer">
                        <div class="dialog-inner js-address-add">
                            <div class="save-address-box">
                                <div class="address-form">
                                    <div class="module-form-row">
                                        <div class="form-item-v3">
                                            <input v-model="adresData.username" placeholder="收货人姓名" type="text" class="js-verify">
                                            <div class="verify-error"></div>
                                        </div>
                                    </div>
                                    <div class="module-form-row">
                                        <div class="form-item-v3">
                                            <input v-model="adresData.phone" placeholder="手机号" type="text" class="js-verify">
                                            <div class="verify-error"></div>
                                        </div>
                                    </div>
                                    <div class="module-form-row clear">
                                        <div class="form-item-v3 area-code-w fn-left form-valid-item">
                                            <input v-model="adresData.tel[0]" placeholder="区号（可选）" type="text" class="js-verify js-address-area-code">
                                            <div class="verify-error"></div>
                                        </div>
                                        <div class="form-item-v3 telephone-w fn-right form-valid-item">
                                            <input v-model="adresData.tel[1]" placeholder="固定电话（可选）" type="text" class="js-verify js-address-telephone">
                                            <div class="verify-error"></div>
                                        </div>
                                    </div>
                                    <div class="module-form-row clear">
                                        <div class="form-item-v3 select-item province-wrapper">
                                            <select @change="changeLv1" v-model="lv1" name="province_code" class="province select-province js-form-province js-verify">
                                                <option value="-1">请选择省份</option>
                                                <option 
                                                    v-for="(item,index) in citys" 
                                                    :key="index" 
                                                    :value="index"
                                                >
                                                    {{item.Name}}
                                                </option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <div class="module-form-row clear">
                                        <div class="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                            <select @change="changeLv2" v-model="lv2" class="city select-city js-form-city js-verify">
                                                <option value="-1">请选择城市</option>
                                                <option 
                                                    v-for="(item,index) in loc2" 
                                                    :key="index" 
                                                    :value="index"
                                                >
                                                    {{item.Name}}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                            <select v-model="lv3" class="city select-city js-form-city js-verify">
                                                <option value="-1">请选择区县</option>
                                                <option 
                                                    v-for="(item,index) in loc3" 
                                                    :key="index" 
                                                    :value="index"
                                                >
                                                    {{item.Name}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="module-form-row">
                                        <div class="form-item-v3">
                                            <input v-model="adresData.address" placeholder="详细地址，如街道名称，楼层，门牌号码等" type="text" class="js-verify">
                                            <div class="verify-error"></div>
                                        </div>
                                    </div>
                                    <div class="module-form-row fn-clear">
                                        <input type="checkbox" class="hide">
                                        <span class="blue-checkbox"></span>设为默认
                                    </div>
                                    <div @click="addAdresMut" class="dialog-blue-btn big-main-btn  js-verify-address" :class="{'disabled-btn':!saveBtn}">
                                        <a>保存</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
import {getCity} from '@/api'
export default {
    props: {
        popType: Number
    },
    data() {
        return {
            citys:[],  //一级地址数据包
            lv1:-1, //标志用户选择的一级地址的序号
            lv2:-1, //标志用户选择的二级地址的序号
            lv3:-1, //标志用户选择的三级地址的序号
            adresData:{
                username:'',
                phone:'',
                tel:['',''],
                address:'',
                isDefault:false
            }
        }
    },
    // watch: { //4. 解决一个用户重选地址后报错小Bug，但是导致【编辑】的时候无法正确初始化三级联动
    //     lv1(){
    //         this.lv2 = this.lv3 = -1
    //     },
    //     lv2(){
    //         this.lv3 = -1
    //     }
    // },
    computed: {
        loc2() {  //二级地址数据包
            return this.lv1<0 ? [] : this.citys[this.lv1].City 
        },
        loc3(){ //三级地址数据包
            if(this.lv1==-1 || this.lv2 == -1){
                return []
            }
            return this.citys[this.lv1].City[this.lv2].Region
        },
        saveBtn(){ //控制保存按钮的点击状态
            let {username,phone,address} = this.adresData
             
            let bool = username==''||phone==''||address==''||this.lv1==-1||this.lv2==-1
                ?
                false
                :
                true
            console.log(bool)
            return bool
        },
        ...mapState({
            addressInfo:state=>state.address.addressInfo
        })
    },
    async created() {
        console.log('AddressPop在初始化,参数是：',this.popType)
        // console.log(getCity())   //得到Promise对象
        let res = await getCity()
        // console.log(res)
        this.citys = res.data
        let t = this.popType;
        if(t!=-1){ //如果用户在编辑，则在弹窗中显示被编辑的地址
            // this.adresData = this.addressInfo[t];  //会发生对象的引用
            let address = JSON.stringify(this.addressInfo[t]);
            this.adresData = JSON.parse(address)
            let {location} = this.addressInfo[t]
            this.lv1 = location[0].num
            this.lv2 = location[1].num
            this.lv3 = location[2].num
        }
    },
    methods: {
        close() {
            this.$emit('close-click')
        },
        // ...mapMutations([
        //     'addAdresMut'
        // ]),
        addAdresMut(){ //保存按钮事件函数
            let location=[  //根据用户select选择，汇总成地址数据包
                {
                    'Name':this.citys[this.lv1].Name,
                    'num':this.lv1
                },
                {
                    'Name':this.loc2[this.lv2].Name,
                    'num':this.lv2
                },
                {
                    'Name':this.lv3==-1?'':this.loc3[this.lv3].Name,
                    'num':this.lv3
                }
            ]
            this.adresData.location = location
            this.$store.commit('addAdresMut',{
                newObj:this.adresData,
                idx:this.popType
            })
            this.close()
        },
        changeLv1(){  //为了替代前面的watch的作用
            this.lv2 = this.lv3 = -1
        },
        changeLv2(){  //为了替代前面的watch的作用
            this.lv3 = -1
        }
    },
}
</script>

<style>
@import url('../assets/css/address-pop.css');
</style>