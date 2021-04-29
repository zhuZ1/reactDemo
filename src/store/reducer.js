
import { storage } from '../model/storage'
const defaultStore = {
    defaultVal: '写点什么吧',
    inputVal: '',
    list: [
        '第一条数据',
        '第二条数据'
    ]
}
export default (state = defaultStore, action)=>{
    console.log(state, action)
    if(action.type == 'changeVal'){
        let newState = JSON.parse(JSON.stringify(state))
        // Reducer内部不能直接改变state值，使用深拷贝后重新赋值给一个变量
        newState.inputVal = action.value
        return newState
    }
    if(action.type == 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        // Reducer内部不能直接改变state值，使用深拷贝后重新赋值给一个变量
        newState.list.push(newState.inputVal)
        storage.set('todoList', newState.list)
        newState.inputVal = ''
        return newState
    }
    if(action.type == 'deleteItem'){
        console.log(action.index)
        let newState = JSON.parse(JSON.stringify(state))
        // Reducer内部不能直接改变state值，使用深拷贝后重新赋值给一个变量
        newState.list.splice(action.index, 1)

        return newState
    }
    return state
}
