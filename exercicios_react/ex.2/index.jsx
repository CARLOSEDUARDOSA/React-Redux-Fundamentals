import React from 'react'
import ReactDom from 'react-dom'
import Component from './componente'

//ReactDom.render(<h1>Olá React</h1>, document.getElementById('app'))
ReactDom.render(<Component value='Show' />, document.querySelector('#app'))
