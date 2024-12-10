import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  MainApp: undefined;
  Details: { movie: Movie };
  Search: undefined;
  Home: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

export interface Movie {
  id: number;
  name: string;
  image?: {
    medium?: string;
    original?: string;
  };
  summary?: string;
  genres?: string[];
  rating?: {
    average?: number;
  };
}
