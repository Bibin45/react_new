import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState={
  email:null,
  pass:null,
  course:[],
  
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    email:(state,email)=>{
        state.email=email.payload
        
    },
   

    check: (state) => {
    
        console.log(state.pass)
        console.log(state.email)
        if(state.email==='aaa'){
            alert('Success')
        }
        else{
            alert('Failed')
        }
      },
      setCourse:(state,action)=>{
        state.course=action.payload
        console.log(state.course)
      }
      
  
   
}
})
export const Api=()=>async(dispatch)=>{
    const {data} =  await axios.get('http://karka.academy/api/action.php?request=getCourses')
        dispatch(setCourse(data.data))
        
}

export const { check,email,setCourse} = loginSlice.actions

export default loginSlice.reducer