import React from 'react';
import { StyleSheet } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomStatusBar from './src/components/CustomStatusBar';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
