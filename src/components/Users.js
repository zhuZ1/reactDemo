import React from 'react'
import { Route, Link } from 'react-router-dom'


class Users extends React.Component{
    constructor(props) {
        super(props)
    }


    componentWillMount(){
        console.log(this.props.routes)
    }
    render(){
        return(
            // 嵌套路由
            <div className='content'>
                <div className='left'>
                    <Link to='/users/'>个人中心</Link>
                    <Link to='/users/Info'>用户信息</Link>

                </div>
                <div className='right'>
                    {/*<Route exact path='/users/' component={Main}/>*/}
                    {/*<Route  path='/users/Info' component={Info}/>*/}
                    {
                        this.props.routes.map((route, key)=>{
                            return <Route exact
                                          key={key}
                                          path={route.path}
                                          component={route.component}/>
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Users
