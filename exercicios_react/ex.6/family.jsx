import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        {/* 
            Clonar elemento e a propriedade 
            1 elemento é o componente filho
            2 elemento é a propriedade que quer passar para o filho
            Funciona apenas com um componente

            {React.cloneElement(props.children, {...props}) }

            {React.Children.map(props.children, 
                child => React.cloneElement(child, {...props}))}
        */}
        {childrenWithProps(props.children, props)}
    </div>
)