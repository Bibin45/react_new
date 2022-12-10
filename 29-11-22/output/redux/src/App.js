import './App.css';
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from './redux/slices/Count'
import {change,changeagain} from './redux/slices/User'
import {check,email,Api} from './redux/slices/Login'
function App() {
  const count=useSelector((state)=>state.counter.value)
  const user=useSelector((state)=>state.user.user)
  const course=useSelector((state)=>state.login.course)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Api())
  },[])
  return (
    <div className="App">
      
      <div>
      <div>
        <button className='btn btn-primary mt-5'onClick={() => dispatch(increment())}>+</button><br/><br/><br/>
        <h5 className='text-secondary'>{count}</h5><br/><br/>
        <button className='btn btn-danger'onClick={() => dispatch(decrement())}>-</button><br/><br/>
        <button className='btn btn-success'onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button><br/><br/>
      <h3 className='text-secondary'>{user}</h3>
      <button className='btn btn-primary mt-5'onClick={() => dispatch(change())}>Change User</button><br/><br/><br/>
      <button className='btn btn-success mt-5'onClick={() => dispatch(changeagain())}>Default User</button><br/><br/><br/>
      <input className='form-control'placeholder='Email Address' onChange={(e) => dispatch(email(e.target.value))}/>

      <button  className='btn btn-primary mt-5' onClick={() => dispatch(check())}>Login</button>
    <p>{course.length}</p>
      </div>
    </div>
    </div>
  );
};

export default App;
