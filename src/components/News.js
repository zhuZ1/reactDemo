import React from 'react'
import logo from '../assets/images/logo192.png'
import '../assets/css/index.css'
import { Link } from 'react-router-dom'

class News extends React.Component{
    constructor(props){ // 固定写法，父子组件传值的时候会用到
        super(props)
        this.state = {
            list: [111, 222, 333],// 需要转换成标签形式的内容才能被渲染
            list2: [<h1 key='1'>111</h1>, <h1 key='2'>222</h1>],
            className: 'red',
            msg: '姓名',

            // 需要注意的几点： class -> className 避免和关键字冲突
            // for -> htmlFor
            newList: [{
                aid: 1,
                title: '新闻1'
            },
                {
                    aid: 2,
                    title: '新闻2'
                },
                {
                    aid: 3,
                    title: '新闻3'
                }]
        }
        // this.message = this.getMsg.bind(this)
    }
    getMsg (str){ // 注册事件，注意this指向问题
        /* 三种方法 1. this.getMsg.bind(this)
                    2. this.message = this.getMsg.bind(this) 构造函数中改变
                    3. 使用箭头函数 方便，以后就用这个了
         */
        // 函数传参
       // alert(this.state.className)
       this.setState({ // 改变数据
           msg: str
       })

    }
    render(){
        let listResult = this.state.list.map((value, key)=>{
            return (<li key={key}>{value}</li>)
        })
        return (
            <div>
                <h5>{this.state.msg}</h5>
                <p>这是news页面</p>
                <img src={logo} alt=""/>
                <ul>
                    {listResult}
                </ul>
                <div style={{color: 'red'}}>
                    红色的行内样式
                </div>
                <button onClick={this.getMsg.bind(this, '张三')}>获取数据</button>

                <hr/>
                <ul>
                    {
                        this.state.newList.map((item, index)=>{
                            return (<li key={index}
                            >
                                {/*<Link to={`/newsDetail/${item.aid}`}> {item.title} </Link>*/}
                                {/*动态路由传值 路由也要配置成类似的结构*/}
                                <Link to={`/newsDetail?aid=${item.aid}`}> {item.title} </Link>
                                {/*get传值，路由普通配置*/}
                            </li>)
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default News
