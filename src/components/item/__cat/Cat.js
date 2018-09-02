import React from 'react';
import './Cat.css'
import image from '../../../img/cat.png'

function Cat(props) {
    const{template} = props;
    let activeClass = (template.disabled) ? "item__cat_disabled" : null;
    return (
        <div className={activeClass}>
        <img src={image} className='item__cat' alt='cat'/>
        </div>
    );
}

export default Cat;