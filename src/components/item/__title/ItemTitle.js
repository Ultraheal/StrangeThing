import React from 'react';
import "./ItemTitle.css"

function ItemTitle(props) {
    const {template, state} = props;
    let activeClass = (template.disabled) ? "item__title_disabled" :
        (state.selectedHover) ? "item__title_selected-hover" : "item__title_default";
    let activeContent = (state.selectedHover && !template.disabled) ? template.question : template.title;
    return (
        <div className="item__title">
        <p className={activeClass}>{activeContent}</p>
        </div>
    );
}

export default ItemTitle;