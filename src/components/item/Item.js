import React, {Component} from 'react';
import './Item.css';
import Card from './__card/Card'
import Cat from './__cat/Cat';
import ItemTitle from './__title/ItemTitle';
import Name from './__name/Name';
import Description from './__description/Description';
import Ellipse from './__ellipse/Ellipse';
import Caption from './__caption/Caption';
import templates from '../../templates/template';

class Item extends Component{
    state = {
        default: true,
        defaultHover: false,
        selected: false,
        selectedHover: false,
    };

    render(){
        const {id} = this.props;
        let activeClass = (templates[id].disabled) ? "item_disabled" : "item";
        return (
            <div className="item_main">
            <div onClick={this.select} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className={activeClass}>
                <Card state={this.state} template={templates[id]}/>
                <Cat template={templates[id]}/>
                <ItemTitle state={this.state} template={templates[id]}/>
                <Name template={templates[id]}/>
                <Description template={templates[id]}/>
                <Ellipse state={this.state} template={templates[id]}/>
                <Caption state={this.state} template={templates[id]}/>
            </div>
            </div>
        );
    }

    select = () => {
        if(this.state.defaultHover) {
            this.setState({
                defaultHover: false,
                selected: true
            })
        } else if (this.state.selected){
            this.setState({
                defaultHover: true,
                selected: false
            })
        }
    };
    mouseOver = () => {
        if(this.state.default) {
            this.setState({
                default: false,
                defaultHover: true
            })
        } else if (this.state.selectedHover){
            this.setState({
                selectedHover: false,
                selected: true
            })
        }
    };
    mouseOut = () => {
        if(this.state.defaultHover) {
            this.setState({
                default: true,
                defaultHover: false
            })
        } else if (this.state.selected){
            this.setState({
                selectedHover: true,
                selected: false
            })
        }
    };
}


export default Item;