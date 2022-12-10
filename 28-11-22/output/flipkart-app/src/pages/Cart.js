import { useState } from "react"
import { Link,} from "react-router-dom"
import Header from "../components/Header"
export default function Cart(){
    if(!localStorage.getItem('cart')){
        localStorage.setItem("cart",JSON.stringify([]))
    }
    const[cart,setCart]=useState(JSON.parse(localStorage.getItem('cart')))
 
//remove cart item
    
    const Remove=(index)=>{
            let newitem=cart.filter((item,i)=>index!==i)
            localStorage.setItem('cart',JSON.stringify(newitem))
            setCart(newitem)
        }
        let k=0;
        return(
        <>
        <Header/>
        <div className="container font">
        {cart.length>0&&cart.map((item,index)=>{
        k=k+item.rate
        return(
                    <div key={index} className='card text-center inline p-3 m-2 font '>
                        <h5>{item.name}</h5>
                        <div className="row">
                        <div className="col-4">
                            <img src={item.image} className='imgsize1'/>
                        </div>
                            <div className="col align"><p>{item.description}</p></div>
                        </div>
                        <p>{item.price}</p>
                        <button className="btn btn-warning text-white" onClick={()=>Remove(index)}>Remove</button>
                </div>
        )})
}
</div>
<div className="container font">
    
   {cart.length>0 ?( <Link to={'/placeorder/fromcart'}> <button className="btn btn-primary  col-12 btn-lg">Place Order-{k}</button></Link>):(<div className="text-center mt-3"><img className="imgsize1" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" /><h4 className="text-center text-primary mt-5">Nothing On Your Cart</h4></div>)}
</div>
</>
)
}