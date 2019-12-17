import React from 'react'
import storage from '../model/storage'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            proName: '',
            listArr: [],
        }
    }
    handleInput =(e)=>{
        console.log(typeof storage.get,typeof storage.get1)
        this.setState({
            proName: e.target.value
        })
    }
    handleAdd =()=>{
        this.state.listArr.push({
            proName: this.state.proName,
            checked: false

        })
        storage.set('todoList', this.state.listArr)
        this.setState({
            proName: '',
            listArr: this.state.listArr
        })
    }
    handleCheck =(index)=>{
        let arrList = this.state.listArr
        arrList[index].checked = !arrList[index].checked

        storage.set('todoList', this.state.listArr)

        this.setState({
            listArr: arrList,
        })
    }
    handleDelete =(index)=>{
        console.log(index)

        this.state.listArr.splice(index, 1)
        storage.set('todoList', this.state.listArr)

        this.setState({
            listArr: this.state.listArr
        })
    }
    componentDidMount(){
        let todoList = storage.get('todoList')
        let todoList1 = storage.get1('todoList')

        console.log(
            todoList, todoList1
        )
        if(todoList){
            this.setState({
                listArr: todoList
            })
        }
    }
    render(){
        let todoList = this.state.listArr.map((value, index)=>{
            if(!value.checked){
                return (
                    <li key={index}>
                        <input type="checkbox"
                               checked={value.checked}
                               onChange={this.handleCheck.bind(this, index)}
                        />
                        {value.proName}
                        <button onClick={this.handleDelete.bind(this, index)}>删除</button>
                    </li>
                )
            }

        })
        let doneList = this.state.listArr.map((value, index)=>{
            if(value.checked){
                return (
                    <li key={index}>
                        <input type="checkbox"
                               checked={value.checked}
                               onChange={this.handleCheck.bind(this, index)}
                        />
                        {value.proName}
                        <button onClick={this.handleDelete.bind(this, index)}>删除</button>
                    </li>
                )
            }

        })

        return(
            <div>
                待办：<input type="text"
                       value={this.state.proName}
                       onChange={this.handleInput}
                />
                <input type="button"
                       defaultValue='增加+'
                       onClick={this.handleAdd}/>
                <br/>
                <ul>
                    {todoList}
                </ul>
                <br/>
                已完成：<ul>
                            {doneList}
                        </ul>
            </div>
        )
    }
}

export default TodoList
