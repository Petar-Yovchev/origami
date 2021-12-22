import { Component } from 'react'
import {Route, Routes, Link, NavLink, Redirect, Switch, Router} from 'react-router-dom';

import * as postService from './services/postService'

import Navigation from './components/Navigation/Navigation'
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer"
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Person from './components/Person-page/Person';
import style from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({posts})
                
            });
}

    render() {

        return (

            <div className={style.app}>
                <Navigation />

                <div className={style.container}>
                    
                    <Aside/>
                 
                    <Routes>
                        <Route path="/" element={
                            <Main posts={this.state.posts} />}
                        />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/person-page/:name" element={<Person/>}/>
                     </Routes>
                    
                     
                </div>
                <Footer/>
            </div>


        );
    }
}

export default App;

// function App() {

//   return (
//     <div className={style.app}>
//       <Navigation />

//       <div className={style.container}>
//         <Aside />
//         <Main/>
//       </div>

//     </div>


//   );
// }
