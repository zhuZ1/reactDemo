import Home from "../components/Home";
import News from "../components/News";
import TodoList from "../components/todoList";
import newsDetail from "../components/newsDetail";
import Login from "../components/Login";
import Users from "../components/Users";
    import Info from "../components/Users/Info";
    import Main from "../components/Users/Main";
import todo from '../components/todo'
let routes = [
    // 路由模块化
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/todoList',
        component: TodoList
    },
    {
        path: '/newsDetail',
        component: newsDetail
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/users',
        component: Users,
        routes: [
            {
                path: '/users/',
                component: Main,
                exact: true
            },
            {
                path: '/users/Info',
                component: Info
            }

        ]

    },
    {
        path: '/todo',
        component: todo
    }
]

export default routes
