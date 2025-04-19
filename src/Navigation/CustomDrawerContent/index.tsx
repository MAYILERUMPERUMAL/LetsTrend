import React,{FC, useState} from 'react'
import {CustomDrawerContentProps} from './interface'
import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'

const upArrow='https://cdn-icons-png.flaticon.com/128/3106/3106683.png'
const DownArrow='https://cdn-icons-png.flaticon.com/128/2985/2985150.png'

const CustomDrawerContent=(props:CustomDrawerContentProps)=>{
  const [showSubOption,setShowSubOption]=useState([])
  let number=9884143246
  let DrawerData=[{
    id:1,name:'Shirts',subChild:1,
  subOption:[{subId:1,name:'Plain shirts'},
    {subId:2,name:'Printed shirts'},
    {subId:3,name:'Chines Collar'}

  ]
  },
{  id:2,name:'Owr Brands',subChild:1,
  subOption:[{subId:1,name:'Calvin Kelvin'},
    {subId:2,name:'U.S Polo'},
    {subId:3,name:'Allen Solly'}

  ]
},
{  id:3,name:'Ethnic Wear',subChild:1, subOption:[]},
{  id:4,name:'Ethnic Wear',subChild:1,subOption:[]},
{id:5,name:'Carcos',subChild:0,subOption:[]},
{id:6,name:'Track Phant',subChild:0,subOption:[]},
{id:7,name:'T shirts',subChild:0,subOption:[]},
{id:7,name:'Shoes',subChild:0,subOption:[]},



]
const handleOnpressFunc=(el)=>{
if(el.subChild){
  let isExist=showSubOption.find(tl=>tl===el.id)
  console.log('isssss',isExist)
  if(isExist){
let  filterSubOption=showSubOption.filter(tl=>tl!==el.id)
setShowSubOption(filterSubOption)
  }
  else{
    setShowSubOption((prev:any)=>([...prev,el.id]))

  }
}
}
  const handleRenderData=(el:any)=>{
    return(
      <TouchableOpacity style={{marginTop:10,marginLeft:10,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{handleOnpressFunc(el)}}>
        <View>
        <Text  style={{fontSize:16,color:'#e8dfdf',fontFamily:'cursive'}}>{el.name}</Text>
     {el.subChild===1&& el.subOption.length>0 &&showSubOption.includes(el.id)&&<View>
{el.subOption.map((tl:any)=>{
  return(
    <TouchableOpacity style={{marginTop:10,marginLeft:5}}>
      <Text style={{fontSize:14,color:'#e8dfdf',fontFamily:'cursive'}}>{tl.name}</Text>
      </TouchableOpacity>
  )
})}
       </View>}
        </View>
    {el.subChild===1&& el.subOption.length>0&&<Image source={{uri:showSubOption.includes(el.id)?DownArrow:upArrow}} style={{height:20,width:20,tintColor:'#e8dfdf',marginRight:5}}/>}
      </TouchableOpacity>
    )
  }
return (
    <View style={{flex:1}}>
    <ImageBackground source={{uri:'https://www.villageofwilcox.ca/wp-content/uploads/2023/12/summer-shirt-030qjb-1.jpg'}} style={{height:800,width:280}}>
    <DrawerContentScrollView style={{height:100,backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
  <View style={{marginTop:20,marginLeft:10,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'black'}}>
    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1077/1077114.png'}} style={{height:20,width:20,marginRight:10,tintColor:'#e8dfdf'}}/>
    <Text style={{fontSize:18,color:'#e8dfdf',fontFamily:'cursive'}}>{`Hi ${'Tony Stark'}`}</Text>
  </View>
  <View style={{marginTop:10,marginLeft:10}}>
    <TouchableOpacity style={{ marginBottom:8}}>
    <Text style={{fontSize:16,color:'#e8dfdf',fontFamily:'cursive'}}>{'All Product'}</Text>
      
    </TouchableOpacity>
    <TouchableOpacity style={{ marginBottom:8}}>
    <Text style={{fontSize:16,color:'#e8dfdf',fontFamily:'cursive'}}>{'New Arraivals'}</Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={{ marginBottom:8}}>
    <Text style={{fontSize:16,color:'#e8dfdf',fontFamily:'cursive'}}>{'Trendy Styles'}</Text>
      
      </TouchableOpacity>


  </View>
    <View>
     {DrawerData.map(handleRenderData)}
    </View>
  
   </DrawerContentScrollView>
   <View style={{backgroundColor:'rgba(52, 52, 52, 0.8)',height:100,width:280,flexDirection:'row',justifyContent:'space-between'}}>
  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>Linking.openURL(`tel:${number}`)}>
    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1/1257.png'}} style={{height:20,width:20,tintColor:'#e8dfdf'}}/>
    <Text style={{color:'#e8dfdf',fontFamily:'cursive'}}>{'Enquiry call'}</Text>

  </TouchableOpacity>
  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{ Linking.openURL('mailto:' + 'shiyamraju1999@gmail.com');}}>
 
  <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/542/542638.png'}} style={{height:20,width:20,tintColor:'#e8dfdf'}}/>

  <Text style={{color:'#e8dfdf',fontFamily:'cursive'}}>{'Order Track'}</Text>

  </TouchableOpacity>
</View>
    </ImageBackground>

   
    </View>
  
)
}

const styles = StyleSheet.create({
    drawer: {
      flex: 1,
      backgroundColor: 'red', // Ensure the drawer itself is transparent
    },
    container: {
      flex: 1,
      backgroundColor: 'red', // Semi-transparent white,
    },
  });

export {CustomDrawerContent}