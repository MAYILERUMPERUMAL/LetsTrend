import React,{FC,useEffect,useState} from 'react'
import {View,Text,NativeEventEmitter, NativeModules} from 'react-native'
import { BluetoothScanProps } from './interface'
import BleManager from 'react-native-ble-manager';
import {check, PERMISSIONS, RESULTS,checkMultiple,requestMultiple,request} from 'react-native-permissions';

const BluetoothScan:FC<BluetoothScanProps>=({isEnable})=>{
    const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const [isScanning,setIsScanning]=useState(false)
    const multiplePermissionsAndroid=[PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,PERMISSIONS.ANDROID.BLUETOOTH_SCAN,PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
    useEffect(()=>{
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

            BleManager.start({ showAlert: false }).then(() => {
                // Success code
                console.log("Module initialized");
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
        <View>

        </View>
    )
}

export {BluetoothScan}