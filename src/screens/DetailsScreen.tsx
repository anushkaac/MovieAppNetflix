import React from 'react';
import { ScrollView, Image, Text, StyleSheet, Dimensions, View } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from '../styles/theme';

const { width } = Dimensions.get('window');

type ScreenNavigationProp = StackNavigationProp<ParamListBase, 'Details'>;
type ScreenRouteProp = RouteProp<ParamListBase, 'Details'>;

type Props = {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { movie } = route.params as { movie: any };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: movie.image?.original || 'https://via.placeholder.com/680x1000'
        }}
        style={styles.posterImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.name}</Text>
        {movie.genres && (
          <Text style={styles.genres}>
            {movie.genres.join(' • ')}
          </Text>
        )}
        <Text style={styles.summary}>
          {movie.summary?.replace(/<[^>]*>/g, '') || 'No summary available'}
        </Text>
        {movie.rating?.average && (
          <Text style={styles.rating}>
            Rating: ⭐️ {movie.rating.average}/10
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  posterImage: {
    width: width,
    height: width * 1.5,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: theme.spacing.medium,
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
  },
  genres: {
    color: theme.colors.primary,
    fontSize: 16,
    marginBottom: theme.spacing.medium,
  },
  summary: {
    color: theme.colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: theme.spacing.medium,
  },
  rating: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});


