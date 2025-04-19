import React,{FC, useRef, useState} from 'react'
import { ViewFullScreenVideoProps } from './interface'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import Video from 'react-native-video'
import { icons } from '../../Assest'
import { useNavigation } from '@react-navigation/native'

const ViewFullScreenVideo:FC<ViewFullScreenVideoProps>=(routes)=>{
    const screenHeight=Dimensions.get('window').height
    const screenWidth=Dimensions.get('window').width
const navigation=useNavigation()
    console.log('routes',routes)
 const videoRef=useRef(null)
 const [isPause,setIsPause]=useState(false)
 const [isAudio,setIsAudio]=useState(false)
 const handlePause=()=>{

 }
    return(
        <View style={{flex:1,position:'relative'}}>
<TouchableOpacity style={{height:'100%',width:'100%'}} onPress={()=>setIsPause(!isPause)}>
<View style={{position:'absolute',zIndex:1,right:5,top:20}} >
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/657/657059.png'}} style={{height:20,width:20,marginRight:10,marginBottom:20}}/>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setIsAudio(!isAudio)}} style={{height:40,width:40}}>
        <Image source={{uri:!isAudio?'https://cdn-icons-png.flaticon.com/128/2541/2541606.png':'https://cdn-icons-png.flaticon.com/128/561/561106.png'}} style={{height:25,width:25,marginLeft:0}}/>
    </TouchableOpacity>

    </View>
    <Video
    muted={isAudio}
    paused={isPause}
    ref={videoRef}
    resizeMode='cover'
    repeat
    source={icons.Video3}
    style={{height:'100%',width:'100%',position:'absolute'}}
    
  
    />
  
</TouchableOpacity>
        </View>

    )
}

export {ViewFullScreenVideo}