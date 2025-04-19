import React,{FC, useRef, useState} from 'react'
import {ProductListProps} from './interface'
import { ImageWithIcon, RoundedIcon } from '..'
import { Dimensions, Text, View,TouchableOpacity,Image } from 'react-native';
import Carousel,{Pagination,ParallaxImage } from 'react-native-snap-carousel';
const ProductListCard:FC<ProductListProps>=({onProductCardClick,data})=>{
    const [index,setIndex]=useState(0)
    let carouselRef=useRef({})
    const screenWidth=Dimensions.get('window').width
    const SLIDER_WIDTH = (screenWidth*1.4)-3
//  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1.2)
 console.log('ttt',SLIDER_WIDTH)
    const handleIndex = (index: number) => {
        setIndex(index)
    }
    console.log('screenWidth',(screenWidth*1.4))
    return(


        <View style={{marginBottom:10}}>
            <View>
                <View style={{height:300}}>
 <Carousel
 itemHeight={300}
        layout={'default'}
            scrollEnabled
            onSnapToItem={(res)=>setIndex(res)}
            //   ref={(c) => carouselRef = c}
              data={data.data}
              renderItem={({item})=>{
                return(
                    <>
                    <TouchableOpacity style={{backgroundColor:'#ffff',paddingBottom:10,marginLeft:5}} onPress={onProductCardClick}>
<ImageWithIcon source={item} isUri/>

</TouchableOpacity>

</>
                )
              }}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={SLIDER_WIDTH}
            />
               <Pagination
                  dotsLength={data?.data?.length}
                  activeDotIndex={index}
                  containerStyle={{
                   position:'absolute',
                   top:'70%',
                   bottom:0,
                //    justifyContent:'center'
             marginLeft:40
                  }}
                  dotStyle={{
                    width:7 ,
                    height: 7,
                    borderRadius: -4,
                    marginHorizontal: -10,
                    backgroundColor: '#e5e5cc',
                  }}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                />
                </View>
           
             
              
            <View style={{flexDirection:'row',justifyContent:'space-between',width:150,position:'absolute',bottom:10,marginLeft:15}}>
<RoundedIcon isUri source={'https://cdn-icons-png.flaticon.com/128/10412/10412693.png'}/>
<RoundedIcon isUri source={'https://cdn-icons-png.flaticon.com/128/1077/1077035.png'}  />
    </View>
            </View>
      
            {/* <View style={{height:20,width:200,backgroundColor:'red'}}>
            <Text style={{fontFamily:'Sophisto Expert OT',fontWeight:'800'}}>{'U.S.Polo Assn'}</Text>
            <View style={{flexWrap:'wrap'}}><Text style={{fontWeight:'500'}}>{'Womens Colorback Slim'}</Text></View>
            </View> */}
            <View style={{marginLeft:10}}>
    <Text style={{fontWeight:'800',textTransform:'uppercase',fontSize:11,fontFamily:'cursive',color:'black',paddingTop:5}}>{data.materialBrand}</Text>
    <View style={{flexWrap:'wrap'}}><Text style={{fontWeight:'800',textTransform:'uppercase',fontSize:11,fontFamily:'cursive',color:'black',paddingTop:5}}>{'Womens Colorback Slim'}</Text></View>
    <View style={{flexDirection:'row'}}>
    <Text style={{textDecorationLine:'line-through',fontWeight:'800',fontSize:11,fontFamily:'cursive',color:'black',paddingTop:5}}>{'₹450'}</Text>
    <Text style={{marginLeft:20,fontWeight:'500',fontSize:11,color:'black',fontFamily:'cursive',paddingTop:5}}>{'Rs ₹350'}</Text>

    <Text style={{marginLeft:20,color:'green',fontWeight:'800',fontSize:11,fontFamily:'cursive',paddingTop:5}}>{'70% off'}</Text>
    </View>
 
    
</View>

        </View>

    )
}

export {ProductListCard}