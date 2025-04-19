import {GET_PRODUCTS,GET_PRODUCTS_FAILURE,GET_PRODUCTS_SUCESS} from '../ActionTypes'

 // getproduct list action=================>
export const getProductlist=(params:any)=>{
    return {
        type:GET_PRODUCTS,
        payload:params
    }

}

export const getProductlistSucess=(response:any)=>{
    return {
        type:GET_PRODUCTS_SUCESS,
        payload:response
    }

}

export const getProductlistFailure=(response:any)=>{
    return {
        type:GET_PRODUCTS_FAILURE,
        payload:response
    }

}


//  =========================>