import React,{FC} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {RadioButtonWithTextProps} from './interface'
const RadioButtonWithText:FC<RadioButtonWithTextProps>=({text,isSelect,handleSelectFunc})=>{
    return(
<TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:30}} onPress={handleSelectFunc}>
    <View style={{height:20,width:20,borderRadius:15,borderWidth:1,borderColor:'black',justifyContent:'center',alignItems:'center'}}>
{isSelect&&<View style={{backgroundColor:'black',height:15,width:15,borderRadius:15}}/>}
    </View>
    <Text style={{fontSize:15,marginLeft:5,marginBottom:4,color:'black',fontWeight:'500'}}>{text}</Text>
</TouchableOpacity>
    )
}

export {RadioButtonWithText}