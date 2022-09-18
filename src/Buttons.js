import './App.css';

function Buttons({chosenProducts}){
    return(
        <div className='shop'>
            <button className='shopButtons' onClick={()=>chosenProducts('shorts')}>Shorts</button>
            <button className='shopButtons' onClick={()=>chosenProducts('shoes')}>Shoes</button>
            <button className='shopButtons' onClick={()=>chosenProducts('skirt')}>Skirt</button>
            <button className='shopButtons' onClick={()=>chosenProducts('watch')}>Watch</button>
        </div>
    )
}
export default Buttons;