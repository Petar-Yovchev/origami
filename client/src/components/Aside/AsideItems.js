import { Component } from "react";
 

class AsideItems extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <li className='listItem'>
               <li className="listItem"><a href="#">{this.props.children}</a></li>
            </li>
        )
    }
}

export default AsideItems;
