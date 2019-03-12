import React ,  {Component} from 'react'

class Field extends Component{
    constructor(props){
        super(props)
        //this.state = { value: undefined}
        this.state = { value: props.initialValue}
        //torna o this relacionado com o handle
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    render(){
        return (
            <div>
                <label> {this.state.value} </label>
                {/* 
                    O onChange espera receber uma função

                    -- controlado
                    <input onChange= value={this.state.value || ''} />
                */}
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field