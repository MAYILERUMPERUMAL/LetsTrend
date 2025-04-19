import React,{FC, useState} from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import {GloablSearchProps} from './interface'
import { Header, InputText, ProductListCard } from '../../CommonComponent'
import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
let listData=[{id:1,materialBrand:'U.S.Polo',data:[
    'https://imagescdn.allensolly.com/img/app/product/7/704475-7630022.jpg?auto=format&w=390',
    'https://rukminim2.flixcart.com/image/850/1000/l3nco7k0/shirt/t/s/m/44-assfmamofl19616-allen-solly-original-imagepuzmwvfru4a.jpeg?q=90&crop=false',
    'https://rukminim2.flixcart.com/image/850/1000/l33cia80/shirt/4/l/h/46-assfqspfy18006-allen-solly-original-imagea86kcsnnd8e.jpeg?q=90&crop=false'
]},
{id:2,materialBrand:'Calvin Kelvin',data:[
  'https://assets.ajio.com/medias/sys_master/root/20230712/eGZ6/64aed9dca9b42d15c94ffe39/-473Wx593H-469514019-white-MODEL.jpg',
  'https://cdn16.nnnow.com/web-images/medium/styles/T2CJRNS5XZ9/1707999783949/1.jpg',
  'https://cdn18.nnnow.com/web-images/medium/styles/TF64GCP0GZN/1718968223202/1.jpg'
]},
{id:3,materialBrand:'U.S.Polo',data:[
  'https://www.malemodelscene.net/wp-content/uploads/2021/12/%C2%A9Tommy-Hilfiger-Spring22-Mens-NewYork-credit-by%C2%A9Tommy-Hilfiger-LOOK-8.jpg',
  'https://assets.vogue.com/photos/61ae6957032fd4942ee18e22/master/w_2560%2Cc_limit/00003-TommyHilfiger-Spring-22-Mens-NewYork-credit-brand.jpg',
  'https://assets.vogue.com/photos/61ae69576ccd02e260541b4b/master/w_2560%2Cc_limit/00002-TommyHilfiger-Spring-22-Mens-NewYork-credit-brand.jpg'
]}

]
const GloablSearch:FC<GloablSearchProps>=()=>{
    const navigation=useNavigation()
    const [searchVal,setSearchVal]=useState('')
    const [filterData,setFilterData]=useState(listData)

  const hanndleFilterData=()=>{
    
    const filterListData=listData.filter((el)=>el.materialBrand.includes(searchVal))
    console.log(filterListData+'filterListData')
    setFilterData(filterListData)
  }
    return(
        <View style={{backgroundColor:'#ffffff',flex:1}}>
<Header onArrowBack={()=>navigation.goBack()} />
<View style={{backgroundColor:'#e9ecf1',marginHorizontal:10,marginTop:5,borderRadius:5}}>
    <InputText onChangeText={(text)=>{
        if(!text){
            setFilterData(listData)
            setSearchVal('')
            return
        }
        setSearchVal(text)}} value={searchVal}/>
<TouchableOpacity onPress={()=>{hanndleFilterData()}} style={{height:20,width:20,position:'absolute'}}>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54481.png'}} style={{height:20,width:20,position:'absolute',top:15,left:15}} />

    </TouchableOpacity>
<TouchableOpacity onPress={()=>{
    setFilterData(listData)
   setSearchVal('')
}
 } style={{height:20,width:20,position:'absolute',alignSelf:'flex-end'}}>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/9199/9199686.png'}} style={{height:20,width:20,position:'absolute',alignSelf:'flex-end',top:12,right:5}} />

    </TouchableOpacity>


</View>
<View style={{marginTop:10,flex:1}}>
<FlashList
      estimatedItemSize={20}
      data={filterData}
      numColumns={2}
      renderItem={({item,index})=>{
        return(
          <ProductListCard data={item} onProductCardClick={()=>{
            console.log('lllll')
            navigation.navigate('ProductViewerScreen')
          }}/>
        )
      }}
      />
</View>

        </View>
    )
}

export {GloablSearch}