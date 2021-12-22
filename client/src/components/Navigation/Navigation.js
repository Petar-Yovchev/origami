import { Component } from "react";
import NavigationItems from './NavigationItems'
import { Link } from "react-router-dom";
import style from './Navigation.module.css'

class Navigation extends Component {
    render() {
        return (
            <nav className={style.navigation}>
                <ul>
                    <li className='listItem'><img src="../white-origami-bird.png" alt="white origami" /></li>
                   <Link to="/"><NavigationItems>Home Page</NavigationItems></Link>
                   <Link to="/about"><NavigationItems>About</NavigationItems></Link>
                   <Link to="/"><NavigationItems>Going to 3</NavigationItems></Link> 
                   <Link to="/"><NavigationItems>Going to 4</NavigationItems></Link>
                   <Link to="/"><NavigationItems>Going to 5</NavigationItems></Link>
                   <Link to="/"><NavigationItems>Going to 6</NavigationItems></Link>
                   <Link to="/"><NavigationItems>Going to 7</NavigationItems></Link>
                   <Link to="/"><NavigationItems>Going to 8</NavigationItems></Link>
                   <Link to="/"><NavigationItems>Going to 9</NavigationItems></Link>
                    <Link to="/"><NavigationItems>Going to 10</NavigationItems></Link>
                    <Link to="/contacts"><NavigationItems>Contacts</NavigationItems></Link>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
