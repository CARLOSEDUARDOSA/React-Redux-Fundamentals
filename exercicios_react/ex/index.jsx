import React from 'react'
import ReactDom from 'react-dom'
import Primeiro, {Segundo} from './componente'

//ReactDom.render(<h1>Olá React</h1>, document.getElementById('app'))
ReactDom.render(
    //Não pode retornar dois componentes
    //Pode agrupar todos em uma tag 
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.querySelector('#app'))
