import React,{FC, useRef} from 'react'
import {Image, Text, View,Dimensions, TouchableOpacity,Animated, ScrollView} from 'react-native'
import { Header, ProductListCard,BottomSheet } from '../../CommonComponent'
import { FlashList } from '@shopify/flash-list'
import { ProductListScreenProps } from './interface'
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image'
import { ProductSingelListCard } from '../../CommonComponent/ProductSingelListCard'
const screenWidth=Dimensions.get('window').width
const ProductListScreen:FC<ProductListScreenProps>=()=>{
  const BottomSheetRefs=useRef({})
  const handleOpenModel=()=>BottomSheetRefs.current.present()
  const handleCloseModel=()=>BottomSheetRefs.current.close()
  const navigation=useNavigation()
  let listData=[{id:1,materialBrand:'U.S.Polo',data:[
    'https://i.pinimg.com/236x/89/d9/20/89d9202ca81e5cf7e80a37555b62b128.jpg',
    'https://cdn.shopify.com/s/files/1/0347/3225/files/DressingWell_30s_8_600x600.jpg?v=1685448409',
    'https://5.imimg.com/data5/SELLER/Default/2023/6/320105690/UG/MH/AX/192039720/mens-wear.jpeg'
]},
{id:2,materialBrand:'U.S.Polo',data:[
  'https://i.pinimg.com/236x/89/d9/20/89d9202ca81e5cf7e80a37555b62b128.jpg',
  'https://cdn.shopify.com/s/files/1/0347/3225/files/DressingWell_30s_8_600x600.jpg?v=1685448409',
  'https://5.imimg.com/data5/SELLER/Default/2023/6/320105690/UG/MH/AX/192039720/mens-wear.jpeg'
]},
{id:3,materialBrand:'U.S.Polo',data:[
  'https://i.pinimg.com/236x/89/d9/20/89d9202ca81e5cf7e80a37555b62b128.jpg',
  'https://cdn.shopify.com/s/files/1/0347/3225/files/DressingWell_30s_8_600x600.jpg?v=1685448409',
  'https://5.imimg.com/data5/SELLER/Default/2023/6/320105690/UG/MH/AX/192039720/mens-wear.jpeg'
]},
{id:4,materialBrand:'U.S.Polo',data:[
  'https://i.pinimg.com/236x/89/d9/20/89d9202ca81e5cf7e80a37555b62b128.jpg',
  'https://cdn.shopify.com/s/files/1/0347/3225/files/DressingWell_30s_8_600x600.jpg?v=1685448409',
  'https://5.imimg.com/data5/SELLER/Default/2023/6/320105690/UG/MH/AX/192039720/mens-wear.jpeg'
]}

]
 
let productList=[
  [{id:1,materialBrand:'U.S.Polo',priority:1,data:[
    'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d4a2e643-c4d4-4ed8-b57c-4fc6afb081e7/AS+M+NSW+PREM+ESSNTL+OP2+TEE+G.png',
    'https://d141zx60z515qt.cloudfront.net/mp62586fb643/pr04611/img71395_src.jpg',
    'https://d141zx60z515qt.cloudfront.net/mp62586fb643/pr04611/img40323_src.jpg'

]}],
[{id:2,materialBrand:'U.S.Polo',priority:0,data:[
  'https://5.imimg.com/data5/BM/AU/QA/GLADMIN-56214634/sportswear-mens-t-shirt-mk2tr1-500x500.jpg'
]},
{id:4,materialBrand:'U.S.Polo',priority:0,data:[
  'https://assets.ajio.com/medias/sys_master/root/hf6/h59/15815998177310/-1117Wx1400H-460574459-yellow-MODEL.jpg',
  'https://assets.ajio.com/medias/sys_master/root/20230720/N3IB/64b91e6aa9b42d15c963dc38/-473Wx593H-465806690-yellow-MODEL3.jpg'
]}],
[{id:3,materialBrand:'U.S.Polo',priority:1,data:[
  'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/827356af-6e02-46f2-b5e1-ef10800f533f/W+NSW+TEE+CLASSICS+BOXY.png',
  'https://www.gluestore.com.au/cdn/shop/files/AURORA_FQ6600-104_PHSYM001-2000_1600x.jpg?v=1710375171',
  'https://www.sneakercage.gr/image/cache/catalog/products/22/05/07/01/gunaikeio-t-shirt-lila-nike-sportswear-classic-36264-940x940.jpg'
]}]
]

    return(
     <View style={{flex:1,backgroundColor:'#ffff'}}>
        
 <Header onArrowBack={()=>navigation.goBack()}/>
<ScrollView>
<View style={{height:300}}>
    <Image source={{uri:'https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1h2q325bs1nhfm0i1ftnr7n1jek14.png'}} style={{height:300,width:'100%',resizeMode:'stretch'}} />
  </View>
  <FlashList
  data={productList}
  renderItem={({item})=>{
    let priority=item.some((el)=>el.priority)
    console.log('ppp',item)
    return(
<FlashList
      estimatedItemSize={20}
      data={item}
      numColumns={priority?1:2}
      renderItem={({item,index})=>{
        return(
          <>
          {priority&&<ProductSingelListCard data={item} onProductCardClick={()=>{}}/>}
            {!priority&&<ProductListCard data={item} onProductCardClick={()=>{
            console.log('lllll')
            navigation.navigate('ProductViewerScreen')
          }}/>}
          
          </>
        )
      }}
      />
    )
  }}
  />
</ScrollView>

      
      <View style={{height:50,width:screenWidth,backgroundColor:'#202020',flexDirection:'row'}}> 
<TouchableOpacity style={{flexDirection:'row',borderRightWidth:1,borderColor:'#525252',flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>handleOpenModel()}>
  <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/7601/7601533.png'}} style={{height:20,width:20,tintColor:'white',marginRight:5}}/>
  <View style={{}}>
  <Text style={{fontSize:10,fontWeight:'500',textAlign:'center',color:'white',textTransform:'uppercase'}}>{'Sort By'}</Text>
  <Text style={{fontSize:8,color:'white'}}>{'Relavance'}</Text>
  </View>
 
</TouchableOpacity>
<TouchableOpacity style={{borderRightWidth:1,borderColor:'#525252',flex:1,justifyContent:'center'}}>
  
  <Text style={{fontSize:10,fontWeight:'500',color:'white',textAlign:'center',textAlignVertical:'center',textTransform:'uppercase'}}>{'Categories'}</Text>
 
 
</TouchableOpacity>
<TouchableOpacity style={{flexDirection:'row',borderRightWidth:1,borderColor:'#525252',flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>{navigation.navigate('Filterscreen')}}>
  <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/7710/7710709.png'}} style={{height:20,width:20,tintColor:'white',marginLeft:10,marginTop:5}}/>
  <View style={{marginLeft:5,marginTop:5}}>
  <Text style={{fontSize:10,fontWeight:'500',textAlign:'center',color:'white',textTransform:'uppercase'}}>{'Filters'}</Text>
  </View>
 
</TouchableOpacity>
      </View>
      <BottomSheet BottomSheetRef={BottomSheetRefs}/>
     </View>
    )
}

export {ProductListScreen}