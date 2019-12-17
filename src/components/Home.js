import React, { Component } from 'react'
import Header from './Header'

class Home extends Component{
    constructor (props){
        super(props)
        this.state = {
            name: '张三',
            inputVal: '',
            title: 'home中的头部'
        }
    }
    handleChange=(e)=>{
        // 通过事件对象获取input值
        // 通过ref获取dom
        // console.log(e.target.value)
        let val = this.refs.inputDom.value
        console.log(val)
        this.setState(
            {
                inputVal: val// e.target.value
            }
        )
    }
    dataChange=()=>{
        this.setState({
            inputVal: '改变后的值'
        })
    }
    handleHeader =()=>{
        alert(this.state.title)
    }
    getChild =(result)=>{
        console.log(result)
        alert(result)
        this.setState({
            title: result
        })
    }
    getStart =()=>{
        console.log(this.refs.header.state.msg)
    }
    render(){
        return (
            <div>
                <h1>你好啊</h1>
                <p>{this.state.name}</p>
                <input type="text" ref='inputDom' value={this.state.inputVal} onChange={this.handleChange}/>
                <h1>{this.state.inputVal}</h1>
                <button onClick={this.dataChange}>改变数据影响视图</button>
                <h2>获取子组件传来的值--{this.state.title}</h2>
                <h2 onClick={this.getStart}>父组件主动获取子组件的值</h2>

                <hr/>

                <Header
                    ref='header'
                    title={this.state.title}
                        handleFather={this.handleHeader}
                        home={this}
                />
                {/*父传子*/}
            </div> // return 多行语句 return() ,单行加不加()都行
        )

        // 必须被根组件包裹

    }
}

export default Home
