import React, {Component} from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = { value: props.initialValue}
    }

    sum(delta){
        this.setState({value: this.state.value + delta})
    }
    render() {
        return(
            <div>
                <h1> {this.props.lavel} </h1>
                <h2> {this.state.value} </h2>
                {/* 
                    como a funcao sum não tem o return ela deve ser chamado por uma função
                    se for chamada direto, o onclick receberia um undifined
                */}
                <button onClick={() => this.sum(1)}>Inc</button>
                <button onClick={() => this.sum(-1)}>Dec</button>
            </div>
        )
        }
}