import React,{FC} from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { ProductListScreen} from '../../Modules/ProductListScreen';
import { ProductViewerScreen, SplashScreen, ViewFullScreenVideo } from '../../Modules';
import { LoginScreen } from '../../Modules/LoginScreen';
import { ProductBillingScreen } from '../../Modules/ProductBillingScreen';
import { GloablSearch } from '../../Modules/GlobalSearch';
import { FilterScreen } from '../../Modules/FilterScreen';
import { DrawerNavigation } from '../DrawerNavigation';
import { BottomTab } from '../BottomTab';

const Stack = createStackNavigator();

const  StackNavigation=() =>{
  return (
    <Stack.Navigator
    initialRouteName={'Splash'}
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name={'ProductList'} component={ProductListScreen} />
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen}/>
      <Stack.Screen name={'ProductViewerScreen'} component={ProductViewerScreen}/>
      <Stack.Screen name={'ProductBillingScreen'} component={ProductBillingScreen}/>
      <Stack.Screen name={'GloablSearch'} component={GloablSearch}/>
       <Stack.Screen name={'Filterscreen'} component={FilterScreen}/>
<Stack.Screen  name={'BottomTab'} component={BottomTab}/>
       <Stack.Screen name={'DrawerNavigation'} component={DrawerNavigation}/>
<Stack.Screen name={'ViewFullScreenVideo'} component={ViewFullScreenVideo}/>

      
    </Stack.Navigator>
  );
}

export {StackNavigation}