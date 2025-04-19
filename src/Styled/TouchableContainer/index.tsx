import React,{FC} from 'react'
import {View,Text} from 'react-native'
import { ButtonInterface } from './interface'
const Button:FC<ButtonInterface>=({label})=>{
    return (
        <View>
         <Text>{label}</Text>
        </View>
    )
}

export {Button}