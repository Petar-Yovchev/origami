import {Component} from 'react'; 
import style from './Main.module.css';


class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
        render() {
            return ( 
           
              
              <main className={style.main}>
                  <h1>Sooooooooome Heading</h1>
                  <div className={style.posts}>
                        <div className={style.post}>
                          <img src="../white-origami-bird.png"  alt="origami"></img>
                          {}
                        </div>
                        <div className={style.post}></div>
                        <div className={style.post}></div>
                  </div>
              </main>
            
            )
        }
};

export default Main;