import React,{FC} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../Modules';
import { View, Text, TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();

function BottomTab() {

    const  MyTabBar=({ state, descriptors, navigation }:any)=> {
      console.log('000000',state)
        return (
          <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route,index) => {
              // console.log('optinon====>',route)
              // const { options } = descriptors[route?.key];
              // const label =
              //   options.tabBarLabel !== undefined
              //     ? options.tabBarLabel
              //     : options.title !== undefined
              //     ? options.title
              //     : route.name;
      
              // const isFocused = state.index === index;
      
              // const onPress = () => {
              //   const event = navigation.emit({
              //     type: 'tabPress',
              //     target: route.key,
              //     canPreventDefault: true,
              //   });
      
              //   if (!isFocused && !event.defaultPrevented) {
              //     navigation.navigate(route.name, route.params);
              //   }
              // };
      
              // const onLongPress = () => {
              //   navigation.emit({
              //     type: 'tabLongPress',
              //     target: route.key,
              //   });
              // };
      
              // return (
              //   <TouchableOpacity
              //     accessibilityRole="button"
              //     accessibilityState={isFocused ? { selected: true } : {}}
              //     accessibilityLabel={options.tabBarAccessibilityLabel}
              //     testID={options.tabBarTestID}
              //     onPress={onPress}
              //     onLongPress={onLongPress}
              //     style={{ flex: 1 }}
              //   >
              //     <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              //       {label}
              //     </Text>
              //   </TouchableOpacity>
              // );
            })}
          </View>
        );
      }

  return (
    <Tab.Navigator initialRouteName='Home' tabBar={(props)=><MyTabBar {...props} 
 
    />}>
      <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
      {/* <Tab.Screen name="Settings" component={} /> */}
    </Tab.Navigator>
  );
}

export {BottomTab}