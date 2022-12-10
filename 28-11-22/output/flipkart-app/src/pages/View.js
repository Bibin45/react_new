import { useParams , Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import Header from "../components/Header";
import Footer from "../components/Footer";
export  default function View(){
    const myproduct=useSelector((state)=>state.product.product)
    let par=useParams();
    if(!localStorage.getItem('cart')){
        localStorage.setItem("cart",JSON.stringify([]))
    } 
    if(!localStorage.getItem('buy')){
        localStorage.setItem("buy",JSON.stringify([]))
    }
    //adding cart item
    const Cart=()=>{
        let cartitem;
        cartitem=JSON.parse( localStorage.getItem('cart'))
        myproduct.map((item,index)=>{
             if (par.brand===item.brand){
                cartitem.push(item)
                localStorage.setItem('cart',JSON.stringify(cartitem)) 
            }
        })
    }
       //buy item
       const Buy=()=>{
        myproduct.map((item,index)=>{
             if (par.brand===item.brand){
                localStorage.setItem('buy',JSON.stringify(item))
                }
            })
       }
    return(
        <>
        <Header/>
         {myproduct&&myproduct.map((item,index)=>{
           if(par.brand===item.brand){
                return(
                    <div key={index}  className='container text-center font '>
                        <div className="row">
                        <div className="col-7">
                            <p>{item.name}</p>
                            <img src={item.image} className='imgsize1'/>
                            <p>{item.price}</p>
                            <button className="btn btn-warning btn-lg text-white col-12 mt-2 mb-2" onClick={()=>Cart()}>Add To Cart</button>
                            <Link to={`/placeorder/frombuy`}><button className="btn btn-primary btn-lg col-12" onClick={Buy}>Buy Now</button></Link>
                        </div>
                        <div className="col position-relative">
                        <h6 className="position">{item.description}</h6>
                        </div>
                     </div>
                    </div>
                )}
         })}
        <Footer/>  
        </>
        )}