import React,{FC} from 'react'
import {TextInput} from 'react-native'
import {InnputTextProps} from './interface'
const InputText:FC<InnputTextProps>=({
    value,
    palceholder,
    onChangeText,
    isPasswordField=false
})=>{
return(
   <TextInput
   value={value}
   placeholder={palceholder}
   keyboardType={isPasswordField?'number-pad':'default'}
   placeholderTextColor={'grey'}
   secureTextEntry={isPasswordField?true:false}
   onChangeText={onChangeText}
   style={{marginLeft:40}}
   />
)
}

export {InputText}