import React,{FC, useEffect} from 'react'
import {Image, View} from 'react-native'
import { icons } from '../../Assest'
import { SplashScreenProps } from './interface'
import {useNavigation} from '@react-navigation/native';

const SplashScreen:FC<SplashScreenProps>=()=>{
    const naviagtion=useNavigation()
    useEffect(()=>{
setTimeout(()=>{
    naviagtion.navigate('Login')
},2000)
    },[])
    return(
        <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'#303841'}}>
           
<Image source={icons.AppLogo} style={{height:300,width:300}}/>
        </View>
    )
}

export {SplashScreen}