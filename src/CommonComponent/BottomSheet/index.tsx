import React,{FC, useMemo, useState} from 'react'
import { View } from 'react-native'
import {BottomSheetProps} from './interface'
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { RadioButtonWithText } from '../RadioButtomWithText';
const BottomSheet:FC<BottomSheetProps>=({BottomSheetRef})=>{

    const snapPoints=useMemo(()=>[300,300],[])
    const [selectedFields,setSelectFields]=useState( {id:1,isSelected:false,name:'Price (highest first)'})
    const [OptionFields,setOptionFields]=useState([
    {id:1,isSelected:false,name:'Price (highest first)'},
        {id:2,isSelected:false,name:'Discount'},
        {id:3,isSelected:false,name:'Price (lowest first)'},
    {id:4,isSelected:false,name:'Whats New'},
    {id:5,isSelected:false,name:'Ratings'},
    {id:6,isSelected:false,name:'Relavance'},
    ])


    
   

    return(

<BottomSheetModalProvider >
        <BottomSheetModal
        
           enablePanDownToClose={true}
        onChange={(index) => {
           
          }}
         index={1} ref={BottomSheetRef} snapPoints={snapPoints}
          style={{
            elevation:10,
            zIndex:-1,
            padding: 10,
     
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowOpacity: 10,
            shadowRadius: 2,
          }}
        >
       <View>
        {OptionFields.map((el)=>{
            let isSelected=selectedFields?.id===el.id
            return(
                <View style={{marginBottom:10}}>

        <RadioButtonWithText text={el.name} isSelect={isSelected} handleSelectFunc={()=>{setSelectFields(el)}}/>
</View>
            )
        })}

       </View>
        </BottomSheetModal>
      </BottomSheetModalProvider> 

    )
}

export {BottomSheet}