import {Component} from 'react';
import AsideItems from './AsideItems';
import {Link} from 'react-router-dom'
import style from './Aside.module.css'


class Aside extends Component {
        render() {
            return ( 
            <aside className={style.aside}>
                <ul>
                   <Link to="/person-page/Mariq"> <AsideItems>Mariq's origami</AsideItems></Link>
                   <Link to="/person-page/Gosho"> <AsideItems>Gosho's origami</AsideItems></Link>
                   <Link to="/person-page/Karina"> <AsideItems>Karina's origami</AsideItems></Link>
                   <Link to="/person-page/Mike"> <AsideItems>Mike's origami</AsideItems></Link>
                   <Link to="/person-page/Pesho"> <AsideItems>Pesho's origami</AsideItems></Link>
                   <Link to="/person-page/Dobri"> <AsideItems>Dobri's origami</AsideItems></Link>
                   <Link to="/person-page/Ivan"> <AsideItems>Ivan's origami</AsideItems></Link>
                   <Link to="/person-page/Iva"> <AsideItems>Iva's origami</AsideItems></Link>
                   <Link to="/person-page/Vladi"> <AsideItems>Vladi's origami</AsideItems></Link>
                    <Link to="/person-page/Sttela"><AsideItems>Sttela's origami</AsideItems></Link>
                    <Link to="/person-page/Kristina"><AsideItems>Kristina's origami</AsideItems></Link>

                </ul>
            </aside> 
            )
        }
};

export default Aside;