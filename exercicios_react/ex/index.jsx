import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    
     /*    Member se torna uma tag filha, passado lastname para utilizar na filha */
    <Family lastName='Conde'>
        <Member name='Gabriela' />
    </Family>
, document.querySelector('#app'))
