import Header from "../components/Header"
import React from "react"
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import Footer from "../components/Footer"
export default function Home(){
    const myproduct=useSelector((state)=>state.product.product)
return(
    <>
    <Header/>
        <div className="container font">
            {myproduct&&myproduct.map((item,index)=>{
                return(
                    <div key={index} className="col-4 inline text-secondary text-center pics mt-2">
                        <div >
                            <Link to={`/view/${item.brand}`}><p><img src={item.image} className='imgsize1'/></p></Link>
                            <h5>{item.brand}</h5>
                            <h6>{item.price}</h6>
                        </div>
                    </div>
                )
            })}
        </div>
    <Footer/>
    </>)
}