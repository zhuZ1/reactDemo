import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputVal: '',
            sex: 1,
            cities: ['北京', '上海', '深圳', '南京'],
            curCity: '',
            hobbies: [{
                'title': '睡觉',
                'checked': true
            },
                {
                    'title': '吃饭',
                    'checked': false
                },
                {
                    'title': '打豆豆',
                    'checked': false
                }
            ]

        }
    }

    handleChange =(e)=>{
        this.setState({
            inputVal: e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state.inputVal, this.state.sex, this.state.curCity, this.state.hobbies)
    }
    radioChange =(e)=>{
        console.log(e.target.value)
        this.setState({
            sex: e.target.value
        })
    }
    selectChange =(e)=>{
        console.log(e.target.value)
        this.setState({
            curCity: e.target.value
        })

    }
    checkChange =(index)=>{
        let hobby = this.state.hobbies
        hobby[index].checked = !hobby[index].checked

        this.setState({
            hobby
        })
    }
    render(){
        let forCity = this.state.cities.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })
        let forHobby = this.state.hobbies.map((value, index)=>{
            return(
                <div key={index}>
                    <input type="checkbox"
                           checked={value.checked}
                           onChange={this.checkChange.bind(this, index)}
                    />
                    {value.title}
                </div>
            )
        })
        return( // form表单
            <form onSubmit={this.handleSubmit}>
                用户名：<input type="text"
                           value={this.state.inputVal}
                           onChange={this.handleChange}/>
                <br/>
                性别：<input type="radio"
                          value='1'
                          checked={this.state.sex==1}
                          onChange={this.radioChange}
            /> 男
                      <input type="radio"
                             value='2'
                             checked={this.state.sex==2}
                             onChange={this.radioChange}

                      /> 女
                <br/>
                城市：<select value={this.state.curCity} onChange={this.selectChange}>
                        {forCity}
                      </select>
                <br/>
                爱好：{forHobby}
                <br/>

                <input type="submit" defaultValue='提交'/>
            </form>
        )
    }

}

export default Form
