import React from 'react';
import "./Name.css"

function Name(props) {
    const {template} = props;
    let activeClass = (template.disabled) ? "item__name_second-disabled" : "item__name_second";
    return (
        <h2 className={activeClass}><span className="item__name_first">Нямушка</span><br/>{template.taste}</h2>
    );
}

export default Name;