import React,{FC, useState} from 'react'
import {HomeScreenProps} from './interface'
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { ImageWithIcon,Header, ProductListCard } from '../../CommonComponent';
import Carousel from 'react-native-reanimated-carousel';
import { FlashList } from '@shopify/flash-list';
import { useNavigation } from '@react-navigation/native';
import { VideoScreen } from '../VideoScreen';
import { icons } from '../../Assest';

const HomeScreen:FC<HomeScreenProps>=()=>{
    const [index,setIndex]=useState(0)
    const navigation=useNavigation()
    const screenWidth=Dimensions.get('window').width
const shoeList=[
    {id:1,materialBrand:'Paragon',data:[
        'https://paragonfootwear.com/cdn/shop/products/k1011g_bdg_1.jpg?v=1691676832&width=1920',
        'https://m.media-amazon.com/images/I/414NYzh8k-L.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2024/2/388357108/EW/YK/SS/145779374/88-500x500.webp'
    ]},
    {id:2,materialBrand:'VERO MODA',data:[
      'https://uspoloassn.in/cdn/shop/files/1_0096ebac-5466-4607-a5c0-690fe7fd4f92.jpg?v=1707887687',
      'https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/25551708/2024/3/13/a8d2e992-cf1c-45ea-922e-f5fdda478f701710320229012USPoloAssnMenTanalSneakers6.jpg',
      'https://assets.ajio.com/medias/sys_master/root/20230526/STf6/6470c73bd55b7d0c63175975/-473Wx593H-469371509-offwhite-MODEL.jpg'
    ]},
]
    const OffersData=[
        {id:1,image:'https://i5.walmartimages.com/seo/Premier-Mens-Jeans-Stitch-Long-Sleeve-Denim-Shirt_9ca92706-ca62-44c4-9008-35699bc4f7f6.2cf73bd1734e02bd15035813d475af17.jpeg?odnHeight=50px&odnWidth=50px&odnBg=FFFFFF'},
        {id:2,image:'https://www.sc9.pl/eng_pm_MALIBU-TROPICAL-SHIRT-6365_4.png'},
        {id:2,image:'https://www.buffalojeans.com/cdn/shop/files/WebHeadersW1_87fa889f-a4f0-42f4-bd85-7afa0d3ac2c0_370x230@2x.jpg?v=1717004739'}


    ]

    let listData=[{id:1,materialBrand:'U.S.Polo',data:[
        'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/9/f/b/m-ustshs1536-u-s-polo-assn-original-imagszkz7g3trghz.jpeg?q=20&crop=false',
        'https://rukminim2.flixcart.com/image/720/864/xif0q/t-shirt/4/0/u/-original-imagrv6rk3mzqczh.jpeg?q=60&crop=false',
        'https://images-static.nykaa.com/media/catalog/product/b/a/bacf9feUSPOL00093912_2.jpg?tr=w-500'
    ]},
    {id:2,materialBrand:'VERO MODA',data:[
      'https://www.malieofficial.com/cdn/shop/files/amara4_c38d4b11-7169-420e-8313-a2056321b514.png?v=1708156311',
      'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/f/w/c/l-ttc309shirt-the-trending-company-original-imagqzfym2fshqc7.jpeg?q=20&crop=false',
      'https://rukminim2.flixcart.com/image/850/1000/kgcl7680-0/shirt/s/u/d/s-fwsh1132-flying-machine-original-imafwhqzuybgspg8.jpeg?q=20&crop=false'
    ]},
    
    
    ]

    let BrandData=[
        {id:1,brandName:'Allen Solly',image:'https://couponswala.com/blog/wp-content/uploads/2022/08/allen-solly-clearance-sale.jpg.webp'},
        {id:2,brandName:'Calvin Kelvin',image:'https://www.fashiontrendsetter.com/v2/wp-content/uploads/2017/11/Calvin-Klein-UnderwearJeans-MyCalvins-Ad-Campaign-Solange-Willy-Vanderperre-03.jpg'},

        {id:3,brandName:'Levis',image:'https://www.retailtouchpoints.com/wp-content/uploads/2022/03/Levis-logo-male-and-female-models.jpg'},
        {id:4,brandName:'cargo',image:'https://pantproject.com/cdn/shop/articles/6-pocket-cargo-pants_8ecfad62-7e09-487c-a847-49d8dbaedc00.png?v=1678944109'},
    ]

    return(
        <View style={{flex:1}}>
            <Header  isShowDrawer isShowArrow={false}/>

            <ScrollView>

          
        <View style={{height:450}}>
        <Carousel
                loop
                width={screenWidth}
                height={450}
                autoPlay={true}
                data={OffersData}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item,index }) => (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    onPress={()=>navigation.navigate('ProductList')}>
                      <Image source={{uri:item.image}} style={{height:450,width:screenWidth}}/>
                    </TouchableOpacity>
                )}
                panGestureHandlerProps={{
                    activeOffsetX: [-100, 100],
                  }}
            />
                </View>
                <View style={{paddingVertical:5,marginLeft:10}}>
                    <Text style={{color:'black',fontSize:22,fontFamily:'cursive',fontWeight:'800'}}>{'Makes You Trendy !'}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{alignSelf:'flex-end',marginBottom:5}}>
                        <Text style={{fontFamily:'cursive',fontSize:12,color:'black',fontWeight:'bold',marginRight:5}}>{'View More'}</Text>
                    </TouchableOpacity>
                <FlashList
      estimatedItemSize={40}
      data={listData}
      numColumns={2}
      renderItem={({item,index})=>{
        return(
          <ProductListCard data={item} onProductCardClick={()=>{
            console.log('lllll')
            // navigation.navigate('ProductViewerScreen')
          }}/>
        )
      }}
      />
                </View>
       
      <FlashList
      estimatedItemSize={40}
      data={BrandData}
    //   numColumns={2}
      renderItem={({item,index})=>{
        return(
         <TouchableOpacity style={{marginTop:5,height:300,width:screenWidth}}>
            <Image source={{uri:item.image}} style={{height:300,width:screenWidth}}/>
         </TouchableOpacity>
        )
      }}
      />
        <FlashList
      estimatedItemSize={40}
      data={shoeList}
      numColumns={2}
      renderItem={({item,index})=>{
        return(
          <ProductListCard data={item} onProductCardClick={()=>{
            console.log('lllll')
            // navigation.navigate('ProductViewerScreen')
          }}/>
        )
      }}
      />
      <View style={{marginBottom:50,marginLeft:10}}>
      <FlashList
      data={[1,1,1,1,1,1]}
      horizontal
      estimatedItemSize={50}
      onScroll={(aa)=>console.log('aaaaa',aa)}
    //   contentContainerStyle={{backgroundColor}}
      renderItem={({item,index})=>{
        let videoCurl=index===0?icons.Video3:index/2 ?icons.Video1:icons.Video2

        return(
            < View style={{marginRight:10,borderRadius:20}}>
            <VideoScreen videoCurl={videoCurl} index={index}/>

                </View>
        )
      }}
      />
      </View>
     
     
        </ScrollView>
        </View>
    )
}

export {HomeScreen}