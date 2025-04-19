import React,{FC} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ProductListScreen } from '../../Modules';
import { CustomDrawerContent } from '../CustomDrawerContent';
import { BottomTab } from '../BottomTab';
const  DrawerNavigation=()=> {
const Drawer = createDrawerNavigator();

  return (
   
      <Drawer.Navigator initialRouteName="HomeTab"
      screenOptions={{drawerType:'back'}}
      
      drawerContent={(props)=>(<CustomDrawerContent props={props}/>)}

      >
        {/* <Drawer.Screen name="ProductList" component={ProductListScreen} 
        options={{headerShown:false}}
        /> */}
          <Drawer.Screen name="HomeTab" component={BottomTab} 
        options={{headerShown:false}}
        />
      </Drawer.Navigator>

  );
}

export {DrawerNavigation}