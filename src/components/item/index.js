import React from 'react';

import {itemContainer} from './styles';

function Item() {
    return ( 
        <itemContainer>
            <h3>bruno</h3>
            <p>bruno</p>
            <a href="#">ver repositorio</a>
            <a href="#" className="remover"> Remover</a>
            <hr></hr>
        </itemContainer>
    )
}

export default Item;