import { Component } from 'react'

import * as postService from './services/postService'

import Navigation from './components/Navigation/Navigation'
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer"
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
                    <Aside />
                    <Main posts={this.state.posts} />
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
