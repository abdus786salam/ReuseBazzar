import * as types from "./actiontype.js"
import axios from "axios"




export const getProductsLoading=()=>{
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}

export const getProductsSuccess=(payload)=>{
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsFailure=()=>{
    return {
        type:types.GET_PRODUCTS_FAILURE
    }
}



    

               
export const getProducts=(cat)=>async (dispatch)=>{
    dispatch(getProductsLoading())
    try {
        const r = await axios.get("https://calm-pink-python-suit.cyclic.app/" + cat)
        dispatch(getProductsSuccess(r.data))
    } catch (err) {
        dispatch(getProductsFailure())
    }
    
}

//....................adminside..........

export const getdataRequest=()=>{
    return{
        type:types.Get_data_Request
    }
}

export const getdataSuccess=(payload)=>{
    return{
        type:types.Get_data_Success,
        payload:payload,
    }
}

export const getdatafailuer=()=>{
    return{
        type:types.Get_data_Failuer
    }
}
export const getdata =()=> (dispatch) => {
    dispatch(getdataRequest());
    axios
      .get("https://636e2daeb567eed48ad57264.mockapi.io/admin")
      .then((r) => {
        dispatch(getdataSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getdatafailuer());
      });
  }