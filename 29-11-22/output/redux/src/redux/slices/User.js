import { createSlice } from '@reduxjs/toolkit'



const initialState={
  user:'Bibin',
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    change: (state) => {
      state.user = 'Arlin'
    },
    changeagain: (state) => {
        state.user = 'Bibin'
      },
    
  },
})


export const { change,changeagain } = userSlice.actions

export default userSlice.reducer