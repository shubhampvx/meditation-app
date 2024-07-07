import React from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const CustomStatusBar = ({ backgroundColor }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar animated={true} backgroundColor={backgroundColor} barStyle="dark-content" />
    </View>
  );
};
export default CustomStatusBar;
