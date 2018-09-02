import React from 'react';
import "./Description.css"

function Description(props) {
    const {template} = props;
    let activeClass = (template.disabled) ? "item__description_disabled" : "item__description";
    function innerHTML() {
        return {__html: template.description};
    }
    return (
        <p className={activeClass} dangerouslySetInnerHTML={innerHTML()}></p>
    );
}

export default Description;
