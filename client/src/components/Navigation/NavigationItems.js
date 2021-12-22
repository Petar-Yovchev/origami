import { Component } from "react";
 

class NavigationItems extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <li className='listItem'>
                <span>{this.props.children}</span>
            </li>
        )
    }
}

export default NavigationItems;
