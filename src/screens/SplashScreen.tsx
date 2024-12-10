import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';

interface Movie {
  id: number;
  name: string;
  image?: {
    original?: string;
  };
  genres?: string[];
  summary?: string;
  rating?: {
    average?: number;
  };
}

export type RootStackParamList = {
  Splash: undefined;
  MainApp: undefined;
  Details: { movie: Movie };
  Search: undefined;
  Home: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

interface Props {
  navigation: SplashScreenNavigationProp;
}

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});