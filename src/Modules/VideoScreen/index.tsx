import React,{FC, useRef, useState} from 'react'
import { VideoScreenProps } from './interface'
import { StyleSheet, TouchableOpacity, View,Image } from 'react-native'
import Video from 'react-native-video'
import { icons } from '../../Assest'
import { useNavigation } from '@react-navigation/native'

const VideoScreen:FC<VideoScreenProps>=({videoCurl,index})=>{
    const navigation=useNavigation()
    const videoRef=useRef(null)
    let data=[1,2,3]
const [isPaused,setIsPaused]=useState(true)
const [isFullscreen,setIsFullscreen]=useState(false)
const [isClickIndex,setIsClickIndex]=useState(undefined)
const handleTouch=(i)=>{
    // console.log('pp',i)
    // if(isClickIndex===i){
    //     console.log('11111')
    //     videoRef.current.pause()
    //     setIsClickIndex(undefined)
    // }
    // else{
    //     setIsClickIndex(i)
    //     console.log('222')

        videoRef.current.resume()
    // }

}
    return(
<TouchableOpacity style={{height:250,width:150,borderRadius:100}} onPress={()=>{navigation.navigate('ViewFullScreenVideo',{videoCurl})
   handleTouch(index)
}}>
    <Video
    // paused={true}
    onTouchMove={()=>handleTouch(index)}
    repeat
    ref={videoRef}
    muted
    resizeMode='cover'
    onBuffer={(ee)=>{console.log('rrr',ee)}}
    style={{height:'100%',width:'100%',borderRadius:100}}
 source={videoCurl}
 fullscreen={isFullscreen}
 onAccessibilityTap={()=>{console.log('111111')}}
 onPlaybackStateChanged={()=>{console.log('99999')}}
 onControlsVisibilityChange={()=>{console.log('------')}}
 bufferConfig={{
    minBufferMs: 15000,
    maxBufferMs: 50000,
    bufferForPlaybackMs: 2500,
    bufferForPlaybackAfterRebufferMs: 5000,
    backBufferDurationMs: 120000,
    cacheSizeMB: 0,
    live: {
        targetOffsetMs: 500,
    },
  }}
    />
    <TouchableOpacity style={{position:'absolute',right:5}} onPress={()=>{navigation.navigate('ViewFullScreenVideo')}}>
        <Image style={{height:20,width:20,tintColor:'white'}}
        source={{uri:'https://cdn-icons-png.flaticon.com/128/8191/8191530.png'}}
        />
    </TouchableOpacity>
    <View style={{height:30,position:'absolute',flexDirection:'row',bottom:0,alignSelf:'center',marginBottom:10}}>
    {data.map(el=>{
        return(
            <TouchableOpacity style={{marginLeft:4,borderWidth:1,borderColor:'white'}}>
                <Image source={{uri:'https://kraftedwithhappiness.com/cdn/shop/products/3_da9f820a-ac07-4111-afd4-a8740fbb62d6_800x.jpg?v=1570918901'}} style={{height:30,width:30}}/>
            </TouchableOpacity>
        )
    })}
    </View>

</TouchableOpacity>
    )
}

export {VideoScreen}

const  styles = StyleSheet.create({
    backgroundVideo: {
        borderRadius:20,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });