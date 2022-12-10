import React,{useEffect} from 'react';
import {AppBar,Container,Toolbar} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency,setSymbol, setUser } from '../redux/slice/Bitcoin';
import { setWatchlist, TrendingCoins } from '../redux/slice/Api';
import Login from '../login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '../firebase.js/Config';
import { CoinList } from '../redux/slice/Api'
import UserSidebar from '../login/SideBar';
import { doc, onSnapshot } from 'firebase/firestore';
export default function Header() {
 const dispatch = useDispatch()
 const {currency,user}=useSelector((state)=>state.bitcoin)
  useEffect(()=>{
    if(currency==='USD')dispatch(setSymbol('$'))
    else if(currency==='INR')dispatch(setSymbol('₹'))
    dispatch(TrendingCoins(currency))
    },[currency]);
    //authentication check
    useEffect(()=>{
      onAuthStateChanged(auth,user=>{
        if(user)dispatch(setUser(user))
        else dispatch(setUser(''))
      })
    })
    //setting all coins
    useEffect(()=>{
      dispatch(CoinList(currency))
  },[currency])
    //getting wishlist
    useEffect(()=>{
      if(user){
        const watch= doc(firestore,'watchlist',user.uid);
        var unsubscribe=onSnapshot(watch,(coin)=>{
          if(coin.exists()){
            dispatch(setWatchlist(coin.data().coins))
          }
          else{
            console.log('No Items in Wishlist')
          }
        })
        return()=>{
          unsubscribe()
        }
      }
    },[user])
    
  return (
    <AppBar color='inherit' position='static'  style={{background:'#16171a' ,color:'goldenrod'}}>
      <Container>
        <Toolbar>
          <h3 className='font col-10'> CRYPTO HUNTER</h3>
          <select className="form-select font size" value={currency} onChange={(e)=>dispatch(setCurrency(e.target.value))}>
            <option  value="USD">USD</option>
            <option value="INR">INR</option>
          </select> 
          {user?(<UserSidebar/>):(<Login/>)}
        </Toolbar>
      </Container>
    </AppBar> 
  )
}
