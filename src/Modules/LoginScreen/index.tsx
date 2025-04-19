import React,{FC, useState,useEffect} from 'react'
import {View,Text, TouchableOpacity,Switch,NativeEventEmitter, NativeModules, Dimensions,ImageBackground,Image} from 'react-native'
import { BluetoothScan,Gradient,InputText,InputWithImage } from '../../CommonComponent';
import { LoginScreenProps } from './interface'
import {useNavigation} from '@react-navigation/native';
import BleManager from 'react-native-ble-manager';
import {check, PERMISSIONS, RESULTS,checkMultiple,requestMultiple,request} from 'react-native-permissions';
const LoginScreen:FC<LoginScreenProps>=()=>{
  const screenWidth=Dimensions.get('window').width
  const screenHeight=Dimensions.get('window').height

    const navigation=useNavigation()
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [isEnable,setIsEnable]=useState(false)
const handleLogin=()=>{
    navigation.navigate('ProductList')
}

const toggleSwitch=()=>{
    setIsEnable(!isEnable)
    startScan()
}

const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const [isScanning,setIsScanning]=useState(false)
    const multiplePermissionsAndroid=[PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,PERMISSIONS.ANDROID.BLUETOOTH_SCAN,PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
    useEffect(()=>{
        BleManager.start({ showAlert: false }).then(() => {
            // Success code
            console.log("Module initialized");
          });
        handleConnectBluetooth()
    },[])

    async function requestPermissions() {
  
        try {
          const granted= await checkMultiple(multiplePermissionsAndroid)
          if (checkPermission(granted)) { 
            return true
          } else {
           const permissionGranted= await requestMultiple(multiplePermissionsAndroid)
           if (checkPermission(permissionGranted)){
            return true
          }
          return false
          }
        } catch (err) {
        }
      }


      const checkPermission=(granted:any)=>{
          if(
          (granted['android.permission.READ_EXTERNAL_STORAGE'] === RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === RESULTS.GRANTED)||granted['android.permission.READ_MEDIA_IMAGES'] === RESULTS.GRANTED){
            return true
          }
       
        return false
      }
    const handleConnectBluetooth=async()=>{
        const isPermission=await requestPermissions()
        if(isPermission){

              BleManager.enableBluetooth()
  .then(() => {
    // Success code
    console.log("The bluetooth is already enabled or the user confirm");
  })
  .catch((error) => {
    // Failure code
    console.log("The user refuse to enable bluetooth");
  });

        }
      
          
    }

    useEffect(() => {
        let stopListener = BleManagerEmitter.addListener(
       'BleManagerStopScan',
       () => {
         setIsScanning(false);
         console.log('Scan is stopped');
       },
     );
   }, []);

   const startScan = () => {
     if (!isScanning) {
       BleManager.scan([], 5, true)
         .then(() => {
           console.log('Scanning...');
           setIsScanning(true);
         })
         .catch(error => {
           console.error(error);
         });
     }
   };
console.log('isEnable',isEnable)


   useEffect(()=>{
    BleManagerEmitter.addListener("BleManagerDiscoverPeripheral", (args) => {
        console.log('eemeeeeppp==>',args)
        // The id: args.id
        // The name: args.name
      });
   },[])
    return(
<View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>

  <ImageBackground source={{uri:'https://img.freepik.com/free-photo/young-man-model-posing-street_1303-14448.jpg'}} style={{width:screenWidth,height:screenHeight}}>
    <View style={{width:screenWidth,height:screenHeight, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
<View style={{height:'30%',width:screenWidth,justifyContent:'center',marginLeft:20}}>
  <Text style={{fontSize:40,fontFamily:'HoltwoodOneSC-Regular',color:'white'}}>Let's Trendy</Text>
  <Text style={{color:'white',fontSize:14,fontWeight:'800',textAlign:'center',marginLeft:50,position:'absolute',left:100,top:135}}>{'Makes Your clothes trendy'}</Text>
</View>
<View style={{flex:1}}>
  <Text style={{color:'white',fontSize:20,textAlign:'center',marginBottom:30}}>{'User Login'}</Text>

<InputWithImage placeholder={'User Name'} image={'https://cdn-icons-png.flaticon.com/128/456/456212.png'} isPasswordField={undefined}/>

<InputWithImage placeholder={'password'} isPasswordField={true} image={'https://cdn-icons-png.flaticon.com/128/807/807292.png'}/>
<View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
<Text  style={{color:'white',fontSize:14,marginRight:10}}>{'New user?'}</Text>
<TouchableOpacity>
<Text style={{color:'pink',fontSize:16}}>{'Sign up'}</Text>

</TouchableOpacity>


</View>
<TouchableOpacity style={{height:50,width:100,backgroundColor:'pink',borderRadius:30,justifyContent:'center',alignSelf:'center',marginTop:30}} onPress={()=>navigation.navigate('DrawerNavigation')}>
  <Text style={{textAlign:'center'}}>{'Login'}</Text>
</TouchableOpacity>
</View>



    </View>
  </ImageBackground>
    
   
   
   


</View>
    )
}

export {LoginScreen}