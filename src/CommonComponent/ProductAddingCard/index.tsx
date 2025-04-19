import React,{FC} from 'react'
import {ProductAddingCardProps} from './interface'
import { Text,View,Image } from 'react-native'
const ProductAddingCard:FC<ProductAddingCardProps>=({data})=>{
return(
    <View style={{marginBottom:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginBottom:10}}>
            <Text style={{fontSize:14}}>{`Item(${data.productQuantity})`}</Text>
            <Text style={{fontSize:14,fontWeight:'800'}}>{`Total: Rs. ${data.ProductTotalPrice}`}</Text>

        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{height:150,width:150}}>
            <Image source={{uri:'https://img0.junaroad.com/uiproducts/19410009/zoom_0-1677344181.jpg'}}
            style={{height:150,width:150}}
            />
            </View>
           
            <View style={{flex:1}}>
                <View style={{marginLeft:5}}>
                <Text style={{marginBottom:5,textTransform:'uppercase',fontSize:14,fontWeight:'500'}}>{data.productName}</Text>
            <Text style={{marginBottom:5}}>{data.productName}</Text>
            <Text >{`${data.productSize}/${data.ProductColor} shirt`}</Text>
                </View>
            
           
            </View>
          <View style={{flex:1}}>

          <View style={{alignItems:'flex-end',flex:1}}>
            <View style={{}}>
            <Text style={{fontWeight:'500',fontSize:14}}>{'Rs.'+data.ProductTotalPrice}</Text>

            </View>
            
        </View>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/484/484611.png'}} style={{height:20,width:20,alignSelf:'flex-end'}}/>

          </View>

        </View>
       
    </View>
)
}
export {ProductAddingCard}