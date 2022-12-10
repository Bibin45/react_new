import { createSlice } from '@reduxjs/toolkit'

const initialState={
  islog:false,
  loguser:'',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIslog: (state,action) => {
        state.islog = action.payload
        console.log(state.islog)
    },
    
    setLoguser: (state,action) => {
        state.loguser = action.payload
        console.log(state.loguser)
    },
      
  },
})


export const { setIslog,setFalse,setLoguser} = userSlice.actions

export default userSlice.reducer