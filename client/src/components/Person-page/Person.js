import style from '../Main.module.css'
import { useParams } from 'react-router-dom';
const Person = ({
    
}) => { 
     
    const params = useParams("/person-page/:name")
    return(
         <h1 className={style.main}>Everything From {params.name}!</h1>

    )
}

export default Person;