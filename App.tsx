/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ProductListCard,Header } from './src/CommonComponent';
import { FlashList } from '@shopify/flash-list';
import { icons } from './src/Assest';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { StackNavigation } from './src/Navigation';
import { ErrorBoundary } from 'react-error-boundary';
import {PersistGate} from  'redux-persist/es/integration/react'
import { persistor } from './src/Redux/Store';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
const [isSplash,setIsSplash]=useState(true)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(()=>{
setTimeout(()=>{
setIsSplash(false)
},2000)
  },[])
let data=[1,1,1,1,1,1,1]
function ErrorFallback({ error, resetErrorBoundary }:{error:any,resetErrorBoundary:any}) {
console.log('error',error)
  const handlePress = () => {
    // resetErrorBoundary(); // Reset the error boundary state
  // Navigate to the Home screen
  };

  return (
    <View>
      <Text>Something Went Wrong..!</Text>
      <TouchableOpacity onPress={handlePress} style={{ width: '40%' }}>
        <Text
          style={{
            backgroundColor: '#898989',
            paddingVertical: 10,
            borderRadius: 5,
            color: 'white',
            width: '100%',
            textAlign: 'center',
          }}
        >
          Return to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
  return (
    <SafeAreaView style={{flex:1}}>
     <PersistGate persistor={persistor}>
     <NavigationContainer  >
<StackNavigation/>
       </NavigationContainer>
     </PersistGate>


    
    
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
