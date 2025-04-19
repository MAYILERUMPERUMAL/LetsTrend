import React,{FC} from 'react'
import {View,Image} from 'react-native'
import { InputText } from '../InputText'
import {InputWithImageProps} from './interface'
const InputWithImage:FC<InputWithImageProps>=({
    image,
    placeholder,
    isPasswordField=false,

})=>{
return(
    <View style={{backgroundColor:'white',marginHorizontal:20,borderRadius:30,marginTop:10,marginBottom:20}}>
    <InputText palceholder={placeholder} isPasswordField={isPasswordField}/>
    <Image source={{uri:image}} style={{height:15,width:15,position:'absolute',top:18,left:20}} />
  
  </View> 
)
}

export {InputWithImage}