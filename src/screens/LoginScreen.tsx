import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useFonts } from '@expo-google-fonts/quicksand';
import image from '../../assets/image';

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome back to GoodLives</Text>
      <Image source={image.welcomeImage} style={styles.image} />
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <Text style={styles.buttonText}>Continue with</Text>
        <Image source={image.googleIcon} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#394B42',
    fontFamily: 'Quicksand-SemiBold',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.3,
    resizeMode: 'contain',
    marginVertical: '15%',
  },
  button: {
    width: '85%',
    paddingVertical: 15,
    backgroundColor: '#E8EBFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 18,
    color: '#394B42',
    fontFamily: 'Quicksand-SemiBold',
  },
  buttonIcon: {
    resizeMode: 'contain',
    marginLeft: '5%',
  },
});
