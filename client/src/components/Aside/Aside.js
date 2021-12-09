import {Component} from 'react';
import AsideItems from './AsideItems';
import style from './Aside.module.css'


class Aside extends Component {
        render() {
            return ( 
            <aside className={style.aside}>
                <ul>
                    
                    <AsideItems>Going to 1</AsideItems>
                    <AsideItems>Going to 2</AsideItems>
                    <AsideItems>Going to 3</AsideItems>
                    <AsideItems>Going to 4</AsideItems>
                    <AsideItems>Going to 5</AsideItems>
                    <AsideItems>Going to 6</AsideItems>
                    <AsideItems>Going to 7</AsideItems>
                    <AsideItems>Going to 8</AsideItems>
                    <AsideItems>Going to 9</AsideItems>
                    <AsideItems>Going to 10</AsideItems>
                    <AsideItems>Going to 11</AsideItems>
                </ul>
            </aside> 
            )
        }
};

export default Aside;