import { Component } from "react";

class FooterItems extends Component {
        // constructor (props){
        //    super(props);
        // }

    render() {
        return (
            <li className="listItem">
                <a hraf="#">{this.props.children}</a>
            </li>
        )
    }
}

export default FooterItems;