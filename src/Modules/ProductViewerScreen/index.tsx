import React,{FC,useEffect,useRef,useState} from 'react'
import { ProductListScreenProps } from '../ProductListScreen/interface'
import {Image, View,Text, Dimensions, StyleSheet, Platform, ScrollView, TouchableOpacity} from  'react-native'
import { Button,Header,ProductListCard } from '../../CommonComponent'
import { FlashList } from '@shopify/flash-list'
import {useNavigation} from '@react-navigation/native';
import Carousel,{Pagination, ParallaxImage} from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";
import { FastImage } from 'react-native-fast-image'
const { width: screenWidth } = Dimensions.get('window')
const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const ProductViewerScreen:FC<ProductListScreenProps>=()=>{
const navigation =useNavigation()
const isCarousel = useRef(null)
const [index,setIndex]=useState(0)
const [selectColor,setSelectColor]=useState(0)
const [showField,setShowFiled]=useState(false)
const [showFieldShipping,setShowFieldShipping]=useState(false)
const [showManufactureField,setShowManufactureField]=useState(false)

const availableColors=[{id:1,color:'red'},{id:2,color:'yellow'},{id:3,color:'grey'}]
const availablesize=['S','M','L','Xl','XXL']
const CarouselCardItem = ({ item, index },parallaxProps) => {
  return (
    <View style={{...styles.item}}>
        <ParallaxImage
            source={{ uri: item.imgUrl }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
        />
       
    </View>
);
}
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
]}

]
const data = [
   "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/04/8118_Image-1600w-X-2398h-B.jpg",
 
  "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
 
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
  
  "https://i.pinimg.com/736x/6a/31/86/6a3186602083ab397ff3999436de710a.jpg",
  
 "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",

  "https://i.pinimg.com/736x/6a/31/86/6a3186602083ab397ff3999436de710a.jpg",
  
   "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
 
];

const handleAvailableColors=(el,index)=>{
  return(
    <TouchableOpacity style={{marginLeft:5}} onPress={()=>{setSelectColor(el.id)}}>
<View style={{height:25,width:25,backgroundColor:el.color,borderRadius:20}}>

</View>
{selectColor===el.id&&<View style={{position:'absolute',left:15,backgroundColor:'black',borderRadius:10,elevation:10}}>
  <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5291/5291032.png'}} style={{height:12,width:12,tintColor:'white'}}/>
</View>}
</TouchableOpacity>
  )
}
const handleAvailableSize=(el,index)=>{
  return(
<View style={{marginLeft:5}}>
<View style={{height:25,width:25,backgroundColor:'white',borderRadius:20,elevation:20,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:10,color:'black'}}>{el}</Text>
</View>
{/* <View style={{position:'absolute',left:15,backgroundColor:'black',borderRadius:10}}>
  <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5291/5291032.png'}} style={{height:12,width:12,tintColor:'white'}}/>
</View> */}
</View>
  )
}
// const productDetails=[{id:1,discription:'',productQuality:'',}]
const handleProductDetails=()=>{
return(
  <View style={{margin:5}}>
<View style={{backgroundColor:'grey',width:screenWidth-20,height:1,alignSelf:'center'}}/>
<View style={{paddingHorizontal:10,paddingVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
  <Text>{'Discription'}</Text>
  <TouchableOpacity onPress={()=>{setShowFiled(!showField)}} style={{padding:5}}>
  <Image 
  source={{uri:!showField?'https://cdn-icons-png.flaticon.com/128/1828/1828925.png':'https://cdn-icons-png.flaticon.com/128/2801/2801932.png'}}
  style={{height:10,width:10,marginTop:5}}
  />
  </TouchableOpacity>
 
</View>
{showField&&<View>
  <Text style={{flexWrap:'wrap',marginLeft:10,lineHeight:20}}>{'A long- or short-sleeved garment for the upper part of the body, usually lightweight and having a collar and a front opening. an undergarment of cotton, or other material, for the upper part of the body. a shirtwaist'}</Text>
  <View style={{marginLeft:10,marginTop:5}}>
    <Text>{'-Floral Print'}</Text>
    <Text>{'-Regular Collar'}</Text>
    <Text>{'-Full seleve'}</Text>
    <Text>{'-100 % Viscose Print'}</Text>
    <Text>{'-Regular Fit'}</Text>

  </View>
  <View style={{marginLeft:10,marginTop:10,marginBottom:10}}>
    <Text>{'SIZE'}</Text>
    <Text>{'Model height 188 cm. The model ()chest39,Waist-32.Hips-35) is wearing asize M.'}</Text>
  </View>
</View>}
<View style={{backgroundColor:'grey',width:screenWidth-20,height:1,alignSelf:'center'}}/>
</View>
)
}
const handleManufactureDetails=()=>{
  return(
    <View style={{margin:5}}>
    <View style={{backgroundColor:'grey',width:screenWidth-20,height:1,alignSelf:'center'}}/>
    <View style={{paddingHorizontal:10,paddingVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
      <Text>{'ManufactureDetails'}</Text>
      <TouchableOpacity onPress={()=>{setShowManufactureField(!showManufactureField)}} style={{padding:5}}>
      <Image 
      source={{uri:!showManufactureField?'https://cdn-icons-png.flaticon.com/128/1828/1828925.png':'https://cdn-icons-png.flaticon.com/128/2801/2801932.png'}}
      style={{height:10,width:10,marginTop:5}}
      />
      </TouchableOpacity>
     
    </View>
    {showManufactureField&&<View>
      
      <Text style={{flexWrap:'wrap',marginLeft:10,lineHeight:20,fontWeight:'800'}}>{'H&M Products Private Limited'}</Text>
      
    <View>
    <View style={{width:'80%',padding:5}}>
      <Text style={{flexWrap:'wrap'}}>{'Addess-27,VTMS Arcade,Bomanhails,Bengaluru,560068 yygyyty'}</Text>

        </View>
      <Text style={{padding:5}}>{'Country og Origin - India'}</Text>
      <Text style={{padding:5}}>{'Contact Customer Care Manager at'}
      
      </Text>
      <Text style={{padding:5}}>{'+9180 66085236'}</Text>
      <Text style={{padding:5}}>{'Mail ID: support @ the houseofrare.com'}</Text>
      </View>
    </View>}
    <View style={{backgroundColor:'grey',width:screenWidth-20,height:1,alignSelf:'center'}}/>
    </View>
  )
}
const shippingDetails=[
  {title:'shipping',data:['Address formats are a collection of information that points towards a physical shipping destination',
    'Address formats are a collection of information that points towards a physical shipping destination',
    'Recipient name, house number, street number, name of city, postal code, and the name of the country are all part of an address format'
  ]},
  {title:'RETURNS',data:['If you accept returns, offer refunds, exchanges, or store credit',
    'What items are eligible for returns, and in what condition',
    'Fees customers pay when returning an item',
    'How long customers have to submit a return'
  ]}
]
const handleShippingDetails=()=>{
  return(
    <View style={{margin:5}}>
    <View style={{backgroundColor:'grey',width:screenWidth-20,height:1,alignSelf:'center'}}/>
    <View style={{paddingHorizontal:10,paddingVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
      <Text>{'Shipping,Returns'}</Text>
      <TouchableOpacity onPress={()=>{setShowFieldShipping(!showFieldShipping)}} style={{padding:5}}>
      <Image 
      source={{uri:!showFieldShipping?'https://cdn-icons-png.flaticon.com/128/1828/1828925.png':'https://cdn-icons-png.flaticon.com/128/2801/2801932.png'}}
      style={{height:10,width:10,marginTop:5}}
      />
      </TouchableOpacity>
     
    </View>
    {showFieldShipping&&<View>
      {shippingDetails.map((el)=>{
        return(
          <View>
            <Text style={{fontSize:14,fontWeight:'bold',textTransform:'uppercase',color:'black',marginTop:5,marginBottom:5}}>{el.title}</Text>
            {el.data.map((tl)=>{
              return(
                <View style={{flexDirection:'row'}}>
                  <View style={{height:5,width:5,backgroundColor:'black',borderRadius:10,marginTop:8}}></View>
                  <Text style={{marginLeft:10}}>{tl}</Text>
                  </View>
              )
            })}
            </View>
        )
      })}
    </View>}
    <View style={{backgroundColor:'grey',width:screenWidth-20,height:1,alignSelf:'center'}}/>
    </View>
  )
}
return(
    <View style={{flex:1,backgroundColor:'white'}}>
<Header onArrowBack={()=>{navigation.goBack()}}/>
<ScrollView>
<View style={{backgroundColor:'white'}}>
        {/* <Carousel
        ref={isCarousel}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 50}
        data={data}
        renderItem={CarouselCardItem}
        hasParallaxImages={true}
       onSnapToItem={(t)=>setIndex(t)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
     containerStyle={{bottom:'5%'}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
     
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}
      <SliderBox
  ImageComponent={FastImage}
  images={data}
  sliderBoxHeight={400}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="white"
  inactiveDotColor="grey"
  paginationBoxVerticalPadding={20}
  autoplay={false}
  // circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "white"
  }}
  ImageComponentStyle={{ width: '97%', marginTop: 5}}
  imageLoadingColor="#2196F3"
/>
    </View>
    <View 
    style={{backgroundColor:'white',
    flex:1,
    elevation:10,
    shadowOpacity:50}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:10}}>
  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:14,color:'black'}}>{'H&M'}</Text>
  <Image 
  source={{uri:'https://cdn-icons-png.flaticon.com/128/2107/2107957.png'}} 
  style={{height:15,width:15}}/>
  <Text>{'4.9'}</Text>
  <Text>{'(136)'}</Text>
    </View>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1077/1077035.png'}}
style={{height:20,width:20}}
/>
</View>
<View style={{padding:10}}>
  <Text style={{fontSize:14,color:'black',fontWeight:'600'}}>{'OverSized Fit Printed Mesh T-Shirt'}</Text>
  <Text style={{fontSize:12,color:'red'}}>{`₹295.00`}</Text>
  
</View>
<View style={{padding:5}}>
  <Text style={{lineHeight:20,marginHorizontal:5,fontSize:12,fontWeight:'500'}}>
    {'A T-shirt (also spelled tee shirt, or tee for short) is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.'}
  </Text>
</View>
<View style={{flexDirection:'row'}}>
<View style={{marginTop:10,marginLeft:10,flex:1}}>
  <Text style={{color:'black'}}>{'Colors'}</Text>
  < View style={{flexDirection:'row',marginTop:5}}>
 {availableColors.map(handleAvailableColors)}

  </View>
</View>
<View  style={{marginLeft:10,marginTop:10}}>
  <Text style={{color:'black'}}>{'Size'}</Text>
  <View style={{flexDirection:'row'}}>
  {availablesize.map(handleAvailableSize)}

  </View>
</View>
</View>
{handleProductDetails()}
{handleManufactureDetails()}
{handleShippingDetails()}


    </View>
    <View  style={{marginTop:10,backgroundColor:'white'}}>
      <Text style={{marginLeft:10,color:'black',fontSize:14,fontWeight:'500'}}>{'Similar Products'}</Text>
    <FlashList
      estimatedItemSize={20}
      data={listData}
      numColumns={2}
      renderItem={({item,index})=>{
        return(
          <ProductListCard data={item} onProductCardClick={()=>{
            console.log('lllll')
          }}/>
        )
      }}
      />
    </View>
</ScrollView>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:10,backgroundColor:'rgba(0,0,0,0)'}}>
<Button text={'Add To Cart'} image='https://cdn-icons-png.flaticon.com/128/7279/7279827.png' isSecondary={true}/>
<Button text={'Buy Now'} isPrimary={true} OnClick={()=>{
  console.log('kkkkk')
  navigation.navigate('ProductBillingScreen')}}/>
</View>
  
{/* <FlashList
onPointerMove={(s)=>console.log(s)}
onViewableItemsChanged={(aa)=>console.log('111',aa)}
showsHorizontalScrollIndicator={true}
        horizontal
        data={[1,1,1,1]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      /> */}


    </View>
)
}
const styles = StyleSheet.create({
 
 
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  item: {
    width: screenWidth - 50,
    height: 400,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})

export {ProductViewerScreen}