import React from 'react'
import PropTypes from 'prop-types'


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            msg: '我是header组件的内容'
        }
    }
    toFather =()=>{

        this.props.home.getChild(this.state.msg)
    }


    render(){
        return (
            <div>
                {this.props.title}
                <button onClick={this.props.handleFather}>{this.props.home.state.title}</button>
                {/*调用了父组件中的方法 方法名和绑定在子组件上的一致*/}
                <button onClick={this.toFather}>传递值给父组件</button>
            </div>
        )
    }

}
Header.defaultProps = {
    title: '标题' // 默认父组件传过来的值
}
Header.propTypes = {
    title: PropTypes.string
 // 小写
}

export default Header
