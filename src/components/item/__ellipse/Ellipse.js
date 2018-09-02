import React from 'react';
import "./Ellipse.css"

function Ellipse(props) {
    const {template, state} = props;
    let activeClass = (template.disabled) ? "item__ellipse_disabled" :
        (state.default) ? "item__ellipse" :
        (state.defaultHover) ? "item__ellipse_default-hover" :
            (state.selected) ? "item__ellipse_selected" :
                (state.selectedHover) ? "item__ellipse_selected-hover": null;

    return (
            <div className={activeClass}>
                <span className="item__ellipse-text">{template.weight}<small>кг</small></span>
            </div>
    );
}

export default Ellipse;