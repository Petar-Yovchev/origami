import { Component } from "react";
 

class NavigationItems extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <li className='listItem'>
                <a href="#">{this.props.children}</a>
            </li>
        )
    }
}

export default NavigationItems;
