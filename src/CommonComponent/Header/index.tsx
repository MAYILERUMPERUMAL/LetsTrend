import React,{FC} from 'react'
import {HeaderProp} from './interface'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import { icons } from '../../Assest'
import { DrawerActions, useNavigation } from '@react-navigation/native'
const Header:FC<HeaderProp>=({onArrowBack,isShowArrow=true,isShowDrawer=false})=>{
    const navigation=useNavigation()
    return(
<View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',elevation:10,backgroundColor:'white'}}>

<View style={{flex:1}}>
   {isShowArrow&& <TouchableOpacity onPress={onArrowBack}>
    <Image source={icons.ArrowBack} style={{height:30,width:30,marginLeft:10}}/>

    </TouchableOpacity>}
    {isShowDrawer&& <TouchableOpacity onPress={()=>{navigation.dispatch(DrawerActions.openDrawer())}}>
    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/15627/15627949.png'}} style={{height:20,width:20,marginLeft:10}}/>

    </TouchableOpacity>}

    </View>
    <View>
    <Text style={{fontSize:17,fontFamily:'cursive',color:'black',fontWeight:'bold'}}>Let's Trendy</Text>

    </View>
<View style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('GloablSearch')}>
    <Image source={icons.SearchIcon} style={{height:25,width:25,marginRight:10}} />

    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={icons.Heart} style={{height:20,width:20,marginRight:10}}/>

    </TouchableOpacity>
<TouchableOpacity>
<Image source={icons.ShoppingBag} style={{height:20,width:20,marginRight:20}}/>
<View style={{height:15,width:15,position:'absolute',backgroundColor:'red',borderRadius:10,left:12,top:-5,bottom:10,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:10,textAlign:'center',color:'white'}}>{'1'}</Text></View>
</TouchableOpacity>

</View>
</View>
    )
}

export {Header}