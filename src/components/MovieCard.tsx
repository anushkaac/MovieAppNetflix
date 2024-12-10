import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';

interface Movie {
  id: number;
  name: string;
  image?: {
    medium?: string;
  };
}

interface MovieCardProps {
  movie: Movie;
  onPress: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 30) / 2;

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ 
          uri: movie.image?.medium || 'https://via.placeholder.com/210x295'
        }}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1}>
        {movie.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    margin: 5,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    color: '#FFFFFF',
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MovieCard;
