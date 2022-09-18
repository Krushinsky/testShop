import './App.css';
import { data } from './data';
import {useState} from 'react';
import Products from './Products';
import Buttons from './Buttons';

function Home(){
    const [imgd, setImgd] = useState(data)
    const chosenProducts = (type) =>{
        const newProducts = data.filter(element => element.type===type)
    setImgd(newProducts);
    
    }

    return(
        <div className='allShop'>
            <Buttons chosenProducts={chosenProducts}/>
            <Products  imgd={imgd}/>
        </div>
    )
}
export default Home;