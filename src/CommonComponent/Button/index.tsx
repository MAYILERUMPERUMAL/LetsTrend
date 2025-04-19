import React,{FC} from 'react'
import {View,Text, TouchableOpacity,Image} from 'react-native'
import {ButtonInterface} from './interface'
const Button:FC<ButtonInterface>=({isPrimary=false,isSecondary=false,image='',text,OnClick})=>{
return(
    <>
    {isSecondary&&
        <TouchableOpacity style={{borderColor:'black',borderWidth:2,width:'40%',height:40,justifyContent:'center',alignItems:'center'}} onPress={OnClick}>
<View style={{flexDirection:'row'}}>
{image&&<Image source={{uri:image}} style={{height:20,width:20,marginRight:5}}/>}
<Text style={{color:'black',fontSize:14,fontWeight:'500'}}>{text}</Text>
    </View>
</TouchableOpacity>
    }
    {isPrimary&&
    <TouchableOpacity style={{backgroundColor:'black',width:'40%',height:40,justifyContent:'center',alignItems:'center'}} onPress={OnClick}>
       <View style={{flexDirection:'row'}}>
{image&&<Image source={{uri:image}} style={{height:20,width:20,marginRight:5}}/>}
<Text style={{color:'white',fontSize:12,fontWeight:'500'}}>{text}</Text>
    </View> 
    </TouchableOpacity>
    }
    </>

)
}

export {Button}