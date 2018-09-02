import React from 'react';
import './Section.css';
import Title from './__title/Title'
import Item from '../item/Item'

function Section() {
        return (
            <section className={"section"}>
                <Title/>
                <div className={"section__content"}>
                    <Item id={0}/>
                    <Item id={1}/>
                    <Item id={2}/>
                </div>
            </section>
        );
}

export default Section;
