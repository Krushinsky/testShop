import './App.css';
import {useState} from 'react';


function Products({imgd}){
const [showMore, setShowMore] = useState(false);

    return (
        <div>
         {imgd.map(element =>{
           const{ description, image, price, about} = element;
           return(
            <div className='one'>
             <div className='products'>
               <img src={image} width='400px'/>
               <p>{ description }</p>
               <p> Price: {price}</p>
               <p>{showMore ? about : about.substring(0,170) + '...'} <button className='buttonsShowMore' onClick={()=> setShowMore(!showMore)}>{showMore? 'Show less' :"Show more"}</button></p>
             </div>
             </div>
           )
         })}
        </div>
           )
}
export default Products;
