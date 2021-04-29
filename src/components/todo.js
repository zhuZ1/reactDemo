import React  from 'react'
import store from '../store'

class todo extends React.Component{
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    handleChange =(e)=>{
        const action = {
            type: 'changeVal',
            value: e.target.value

        }
        store.dispatch(action)
        store.subscribe(this.storeChange)
    }
    storeChange =()=>{
        this.setState(
            store.getState()
        )
    }
    handleAdd =()=>{
        store.dispatch({
            type: 'addItem'
        })
    }
    handleDelete =(index)=>{
        store.dispatch({
            type: 'deleteItem',
            index
            }
        )
    }
    render(){
        return(
            <div>
                <input type="text"
                       placeholder={this.state.defaultVal}
                       onChange={this.handleChange}
                       value={this.state.inputVal}
                />
                <button onClick={this.handleAdd}>增加</button>
                <br/>
                <ul>
                    {
                        this.state.list.map((item, key)=>{
                            return <li key={key}
                                       onClick={() => this.handleDelete(key)}
                            > {item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default todo



