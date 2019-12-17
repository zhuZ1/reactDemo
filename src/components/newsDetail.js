import React from 'react'

class newsDetail extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    GetRequest =(url)=> {
        //获取url中"?"符后的字串
        let theRequest = new Object()
        if (url.indexOf("?") != -1) {
            let str = url.substr(1),
            strs = str.split("&")
            console.log(strs)
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest
    }
    componentDidMount(){
        console.log(this.GetRequest(this.props.location.search).aid)
    }
    render(){
        return(
            <div>
                {/*新闻详情--{this.props.match.params.aid}*/}
                get传值新闻详情--{this.GetRequest(this.props.location.search).aid}
            </div>
        )
    }
}

export default newsDetail


