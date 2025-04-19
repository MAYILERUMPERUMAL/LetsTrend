import axios from "axios";

export const postApi=async(url,params)=>{
try{
    const response=await axios.post(url,params)
    return response
}catch (error){
   return error
}
}