import { createSlice } from '@reduxjs/toolkit'
const initialState={
    product:'',
    mycart:{
      cart:[],
      email:''
    },
    deletecart:{
      cart:[],
      email:''
    },
  

}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {   
      setProduct:(state,action)=>{
        state.product=action.payload
      },
      setCart:(state,action)=>{
        state.mycart=action.payload
        console.log('mycart',state.mycart)
      },
      setDeletecart:(state,action)=>{
        state.deletecart=action.payload
        console.log('state_delete_cart',state.deletecart)
      } 
  },
})
export const Deletecart=()=>()=>{

}

export const {setCart,setBuy,setProduct,setDeletecart} = productSlice.actions
export default productSlice.reducer