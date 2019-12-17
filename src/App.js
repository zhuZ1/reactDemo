import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import routes from './model/router.js'



function App() {
  return (
      <Router>
        <div className="App">

                <Link to='/'>首页</Link>
                <Link to='/news'>新闻</Link>
            <Link to='/login'>登录页面</Link>

            <Link to='/todoList'>待办</Link>
            <Link to='/users'>用户中心</Link>
            <Link to='/todo'>redux练习--todo</Link>
            {/*注意是双标签*/}
                <hr/>
                {/*<Route exact path='/' component={Home}/>*/}
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/todoList' component={TodoList}/>*/}
                {/*/!*<Route path='/newsDetail/:aid' component={newsDetail}/>*!/*/}
                {/*/!*动态路由*!/*/}
                {/*<Route path='/newsDetail' component={newsDetail}/>*/}
                {/*/!*get传值  *!/*/}
                {/*<Route path='/login' component={Login}/>*/}
                {/*<Route path='/users' component={Users}/>*/}
            {
                routes.map((route, key)=>{
                    if(route.exact){
                        return  <Route key={key} exact
                                       path={route.path}
                                       render={ props => (
                                           <route.component {...props} routes={route.routes} />
                                       )
                                       }
                        />
                    } else {
                        return  <Route key={key}
                                       path={route.path}
                                       render={props => (
                                           <route.component {...props} routes={route.routes}/>
                                       )
                                       }
                        />
                    }
                })
            }



        </div>
      </Router>
  )
}

export default App;
