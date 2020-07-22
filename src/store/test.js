const test = {
    state:{  //相当于组件中的data
      num:100,
      arr:[1,2,3,4,5,6,7,8,9,10]
    },
    getters:{ //相当于组件中的computed，处理state中的数据返回新数据包
      filterArr(state){
        return state.arr.filter((n)=>{
          return n%2==0
        })
      }
    },
    mutations:{ //相当于组件中的methods，作用在于操作state中的数据
      numMut(state){
        state.num++
      },
      arrMut(state,m){ //操作arr数据包的mutation
        let n = state.arr[state.arr.length-1];
        state.arr.push(n+m)
      }
    },
    actions:{ //当需要异步操作state值的时候，使用actions
      // actions 并不会直接修改state，异步操作之后可以触发对应的mutation
      asyncNumMut(context){
        let timer = setTimeout(()=>{
          context.commit('numMut');
          clearTimeout(timer)
        },1000)
      }
  
    }
  }

  export default test