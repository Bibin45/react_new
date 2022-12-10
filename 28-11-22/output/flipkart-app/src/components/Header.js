import {useNavigate,Link} from 'react-router-dom'
import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIslog } from '../redux/slice/User'
export default function Header(){
    let islog=useSelector((state)=>state.user.islog)
    let loguser=useSelector((state)=>state.user.loguser)
    const dispatch=useDispatch()
    let log=localStorage.getItem('mylog')
    let navigate=useNavigate()
    useEffect(()=>{
        if(!islog && log===false) navigate('/login/all')
        },  
    )
    const Logout=()=>{
        dispatch(setIslog(false))
        localStorage.setItem('mylog',false)
        localStorage.setItem('name',null)
        localStorage.setItem('cart',JSON.stringify([]))
        navigate('/login/all')  
    }
    return(
        <>
         <nav className="navbar container navbar-expand-lg navbar-light font d-flex justify-content-around bg-primary header sticky-top border rounded">
         <Link to={'/'}> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"/></Link>
            <form className="form-inline ">
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
              </form>
              
          
            
              <Link to={'/cart'}>  <button className="btn btn-primary font-weight-bold "><img className="imgsize" alt="cart" src='https://cdn-icons-png.flaticon.com/512/3502/3502601.png'/><br/>Cart</button></Link>
             {islog===true&&<Link to={'/myorders'}>  <button className="btn btn-primary font-weight-bold "><img className="imgsize" alt="myorders" src='https://cdn-icons-png.flaticon.com/128/1559/1559859.png'/><br/>Myorders</button></Link>}

            {!islog?( <button className="btn btn-light btn-lg text-primary " onClick={Logout} >Login</button>):( <button className="btn btn-light btn-lg text-primary " onClick={Logout} >Logout - {loguser.name}</button>)}
           
            
           
    </nav>
        </>
    )
}