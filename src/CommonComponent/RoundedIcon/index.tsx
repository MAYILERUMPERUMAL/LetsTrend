import React,{FC} from 'react'
import {RoundedIconProps} from './interface'
import { View,Image, TouchableOpacity} from 'react-native'
const RoundedIcon:FC<RoundedIconProps>=({source,isUri})=>{
    return(
<TouchableOpacity style={{height:25,width:25,backgroundColor:'#ffff',justifyContent:'center',alignItems:'center',borderRadius:15}}>
    <Image source={isUri?{uri:source} :source} style={{height:15,width:15}}/>
</TouchableOpacity>
    )

}

export {RoundedIcon}