import { useState } from "react"
import { data } from './data';
import './App.css';


function FirstPage(){
    const [picture, setPicture] = useState(0);
    const{type, description, image, price } = data[picture]
const Next =()=>{
    setPicture(picture =>{
        picture++;
        if(picture > data.length-1){
            picture = 0
        }
        return picture
    })
}
const Previous =()=>{
    setPicture(picture=>{
        picture--;
        if(picture<0){
            return data.length-1;
        }
        return picture;
    })
}

    return(
        <div>
        
                    <div className="slider">
                        <div>
                            <button className="button" onClick={Previous}>Previous</button>
                        </div>
                        <div>
                            <img src={image} width="300px"/>
                        </div>
                        <div>
                        <button className="button" onClick={Next}>Next</button>
                        </div>
                    </div>
            
        </div>
    )
}

export default FirstPage;