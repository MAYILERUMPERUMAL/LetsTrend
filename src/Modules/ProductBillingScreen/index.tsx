import React,{FC} from 'react'
import {ProductBillingScreenProps} from './interface'
import { Header, ProductAddingCard } from '../../CommonComponent'
import { FlashList } from '@shopify/flash-list'
import {useNavigation} from '@react-navigation/native';
import { View ,Text, Dimensions, TouchableOpacity} from 'react-native';
const screenwidth=Dimensions.get('screen').width
const ProductBillingScreen:FC<ProductBillingScreenProps>=()=>{
    const navigation=useNavigation()
    const listData=[
        {id:1,productQuantity:2,ProductTotalPrice:5000,productName:'Abstart Print Shirt',productClothMaterial:'Guild Statement Pavo Black',productSize:'S-38',ProductColor:'Black'},
        {id:2,productQuantity:2,ProductTotalPrice:4000,productName:'Abstart Print Shirt',productClothMaterial:'Guild Statement Pavo Black',productSize:'S-39',ProductColor:'Black'}

    ]
    return(
<View style={{flex:1}}>
<Header onArrowBack={()=>{navigation.goBack()}}/>

<FlashList
data={listData}
renderItem={({item,index})=><ProductAddingCard data={item}/>}
/>
<TouchableOpacity style={{height:50,width:screenwidth,backgroundColor:'pink',borderTopEndRadius:10,borderTopLeftRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}} 
onPress={()=>{}}
>
<Text style={{color:'white',marginRight:20,fontSize:14}}>{'Item(2)'}</Text>
<Text style={{color:'white',fontSize:16}}>{'Checkout / 9000'}</Text>
</TouchableOpacity>
</View>
    )
}

export {ProductBillingScreen}