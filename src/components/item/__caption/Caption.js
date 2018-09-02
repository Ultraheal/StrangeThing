import React from 'react';
import "./Caption.css"

function Caption(props) {
    const {template, state} = props;
    let activeClassBtn = (state.selected || state.selectedHover || template.disabled) ? "item__caption-btn_disabled" : "item__caption-btn";
    let activeContent = (template.disabled) ? template.disableText :
        (state.selected || state.selectedHover) ? template.select : template.caption;
    let activeClassTxt = (template.disabled) ? "item__caption-text_disabled" : "item__caption-text";
    return (
        <div className="item__caption" >
            <p className={activeClassTxt}>{activeContent} <button className={activeClassBtn}>{template.btn}</button></p>
        </div>
    );
}

export default Caption;
