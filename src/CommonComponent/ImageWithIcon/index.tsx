import React,{FC} from 'react'
import { Image,TouchableOpacity,View } from 'react-native'
import {ImageWithIconProps} from './interface'
import { RoundedIcon } from '..'
const ImageWithIcon:FC<ImageWithIconProps>=({isUri,source})=>{
    return(
<View style={{height:300,width:'35%'}}>
    <Image source={isUri?{uri:source}:source} style={{height:300}} />
    {/* <View style={{flexDirection:'row',justifyContent:'space-between',width:150,position:'absolute',bottom:4,alignSelf:'center'}}>
<RoundedIcon isUri source={'https://cdn-icons-png.flaticon.com/128/10412/10412693.png'}/>
<RoundedIcon isUri source={'https://cdn-icons-png.flaticon.com/128/1077/1077035.png'}  />
    </View> */}
</View>
    )
}

export {ImageWithIcon}