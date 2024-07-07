import React from 'react';
import { MainStack } from '@my-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomStatusBar } from '@my-components';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomStatusBar backgroundColor={'#E0F3E0'} />
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
