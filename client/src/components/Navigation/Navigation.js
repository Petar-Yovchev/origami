import { Component } from "react";
import NavigationItems from './NavigationItems'
import style from './Navigation.module.css'

class Navigation extends Component {
    render() {
        return (
            <nav className={style.navigation}>
                <ul>
                    <li className='listItem'><img src="../white-origami-bird.png" alt="white origami" /></li>
                    <NavigationItems>Going to 1</NavigationItems>
                    <NavigationItems>Going to 2</NavigationItems>
                    <NavigationItems>Going to 3</NavigationItems>
                    <NavigationItems>Going to 4</NavigationItems>
                    <NavigationItems>Going to 5</NavigationItems>
                    <NavigationItems>Going to 6</NavigationItems>
                    <NavigationItems>Going to 7</NavigationItems>
                    <NavigationItems>Going to 8</NavigationItems>
                    <NavigationItems>Going to 9</NavigationItems>
                    <NavigationItems>Going to 10</NavigationItems>
                    <NavigationItems>Going to 11</NavigationItems>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
