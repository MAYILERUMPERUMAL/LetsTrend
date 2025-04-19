import {getProductlist,getProductlistFailure,getProductlistSucess} from '../Action'
import {AuthInterface} from '../../Interface'
import { GET_PRODUCTS } from '../ActionTypes'
const initialState={
    productListData:[]
}

 const Authreducer=(state:AuthInterface=initialState,action:any)=>{
    switch (action.type){
        case GET_PRODUCTS :
        state={...state,productListData:[]}
        break;
        default:
        state=state
        break
    }
return state
 }

 export {Authreducer}