import { Component } from "react";
import FooterItems from "./FooterItems";

import  style from "./Footer.module.css"

class Footer extends Component {


    render() {
        return (
            <footer className={style.footer}>
                <ul>
                    <FooterItems>Going to 1</FooterItems>
                    <FooterItems>Going to 2</FooterItems>
                    <FooterItems>Going to 3</FooterItems>
                    <FooterItems>Going to 4</FooterItems>
                    <FooterItems>Going to 5</FooterItems>
                    <FooterItems>Going to 6</FooterItems>
                    <FooterItems>Going to 7</FooterItems>
                    <FooterItems>Going to 8</FooterItems>
                    <FooterItems>Going to 9</FooterItems>
                    <FooterItems>Going to 10</FooterItems>
                    <FooterItems>Going to 11</FooterItems>
                     <li className="listItem"><img src="/blue-origami-bird-flipped.png" alt="origami"/></li>
                </ul>
                <p>Bulgaria Origami Company 2021 &copy;</p>
            </footer>
        )
    }
}

export default Footer;