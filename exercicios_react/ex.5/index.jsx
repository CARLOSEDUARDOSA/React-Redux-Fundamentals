import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    
     /*    Member se torna uma tag filha  */
    <Family>
        <Member name='Gabriela' lastName='Conde'/>
    </Family>
, document.querySelector('#app'))
