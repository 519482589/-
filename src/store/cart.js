import Vue from 'vue'
const cart = {
    state:{
        cartList:[
            {
                "stock_id":1000801,
                "title":"坚果Pro保护膜 红色",
                "sub_title":"耐刮花、防指纹 宝石蓝",
                "image":"https://resource.smartisan.com/resource/e883f15eed51a49e1fbc9d8ddd82460b.png",
                "imgs":[],
                "price":50,
                "num":1,  //购物车中本商品的数量
                "isCheck":true,
                "limit_num":7,    
                "detail": {
                    "color": "#78282a",
                    "color_name": "红色"
                  }
            },
            {
            "stock_id":1000802,
            "title":"坚果Pro保护膜 黑色",
            "sub_title":"耐刮花、防指纹 黑色",
            "image":"https://resource.smartisan.com/resource/3bd5267edd7257e719e7965b756e2c2e.png",
            "imgs":[],
            "price":51,
            "num":2,  //购物车中本商品的数量
            "isCheck":false,
            "limit_num":5,    
            "detail": {
                "color": "#181818",
                "color_name": "黑色"
            }
            },
        ]
    },
    getters:{
        allInfo(state){ //汇总购物车数据（总数量、总价格、待结算价格）
            let cartList = state.cartList;
            let allNum=0,
                allPrice=0,
                isAllCheck=true, 
                checkNum=0,  //已勾选商品总数
                checkPrice=0;  //已勾选商品总价
            cartList.forEach((item)=>{
                allNum += item.num;
                allPrice += item.num*item.price;
                if(!item.isCheck){  //但凡有一个商品没勾选，将全选置为false
                    isAllCheck = false;
                }
                if(item.isCheck){ //计算应付总数  与  应付总额
                    checkNum += item.num;
                    checkPrice += item.num*item.price;
                }
            })
            return {
                allNum,
                allPrice,
                isAllCheck,
                checkNum,
                checkPrice
            }
        }
    },
    mutations:{
        addCartMut(state,obj){ //加入购物车的mutation
            let id = obj.stock_id; //得到新增商品id
            let Len = state.cartList.length;

            //for循环，看原有的购物车列表中是否已存在跟新商品一样的商品
            for(let i=0;i<Len;i++){ 
                if(state.cartList[i].stock_id==id){
                    state.cartList[i].num++;
                    console.log(state.cartList[i].num)
                    return false; //中断后续逻辑代码的执行，
                }
            }
            
            //当我们第二次点击同一个商品的时候，后两句代码将不会执行
            // obj.num = 1  //通过这种方式为对象绑定的属性，是非响应式数据
            Vue.set(obj,'num',1) //向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。
            Vue.set(obj,'isCheck',true)
            state.cartList.push(obj)
        },
        delCartMut(state,idx){ //删除一条购物车数据
            state.cartList.splice(idx,1)
        },
        checkMut(state,idx){ //购物清单的单选点击
            let {isCheck} = state.cartList[idx]
            state.cartList[idx].isCheck = !isCheck
        },
        allCheckMut(state,bool){  //全选控制单选
            state.cartList.forEach((item)=>{
                item.isCheck = !bool
            })
        },
        delCartCheckMut(state){ //删除已选中的购物车商品
            for(let i=0;i<state.cartList.length;i++){
                if(state.cartList[i].isCheck){
                    state.cartList.splice(i,1)
                    i--;  //为了保证不漏删
                }
            }
        }
    }
}

export default cart