const address = {
    state:{
        addressInfo:[
            {
                username:'张三丰',
                phone:13988889999,
                tel:['023','55667788'],
                location:[
                    {
                        'Name':'河北',
                        'num':2
                    },
                    {
                        'Name':'石家庄',
                        'num':0
                    },
                    {
                        'Name':'长安区',
                        'num':0
                    }
                ],
                address:'九龙坡区大西洋国际',
                isDefault:false
            },
            {
                username:'张无忌',
                phone:13988889666,
                tel:['023','55667766'],
                location:[
                    {
                        'Name':'山西',
                        'num':3
                    },
                    {
                        'Name':'太原',
                        'num':0
                    },
                    {
                        'Name':'迎泽区',
                        'num':1
                    }
                ],
                address:'九龙坡区大西洋国际',
                isDefault:false
            }
        ]
    },
    mutations:{
        addAdresMut(state,obj){ //新增地址
            let {newObj,idx} = obj
            if(idx==-1){ //新增地址
                state.addressInfo.push(newObj)
            }else{  //编辑地址
                state.addressInfo[idx] = newObj
            }
        }
    }
}

export default address