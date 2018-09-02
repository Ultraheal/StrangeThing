import React from 'react';
import "./Card.css"

function Card(props) {
    const {template, state} = props;
    let activeClass = (template.disabled) ? "item__card_disabled" :
        (state.default) ? "item__card_default" :
        (state.defaultHover) ? "item__card_default-hover" :
            (state.selected) ? "item__card_selected" :
                (state.selectedHover) ? "item__card_selected-hover": null;

    return (
        <div className="item__card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 486" preserveAspectRatio="xMinYMin meet">
            <path className={activeClass} d="M310 482H14c-6.627 0-12-5.373-12-12V45L45 2h265c6.627 0 12 5.372 12 12v456c0 6.627-5.373 12-12 12z"/>
        </svg>
        </div>
    );
}

export default Card;