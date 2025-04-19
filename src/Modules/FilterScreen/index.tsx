import React,{FC, useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {FilterScreenProps} from './interface'
import { Header } from '../../CommonComponent'
import { useNavigation } from '@react-navigation/native'
const FilterScreen:FC<FilterScreenProps>=()=>{
    const navigation=useNavigation()
    const filterData=[
        {id:1,fieldName:'Price'},
        {id:2,fieldName:'category'},
        {id:3,fieldName:'Brand'},
        {id:4,fieldName:'Size'}
    ]

    const [selectedField,SetSelectedField]=useState({})
    return(
        <View style={{flex:1}}>
    <Header onArrowBack={()=>{navigation.goBack()}}/>
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{backgroundColor:'#D3D3D3',width:'40%'}}>
         {filterData.map((el:any)=>{
            let isSelected=el.id===selectedField?.id
            return(
                <TouchableOpacity style={{backgroundColor:isSelected?'white':'#D3D3D3',height:'5%',justifyContent:'center'}} onPress={()=>{SetSelectedField(el)}}>
                    <Text style={{fontSize:14,fontWeight:'600',marginLeft:10}}>{el.fieldName}</Text>
                    </TouchableOpacity>
            )
         })}
            </View>
           <View style={{backgroundColor:'white'}}>

            </View> 
        </View>
        </View>
    )
}

export {FilterScreen}