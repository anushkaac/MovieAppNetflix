import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

interface Props {
  navigation: SearchScreenNavigationProp;
}

interface Movie {
  id: number;
  name: string;
  image?: {
    medium?: string;
  };
}

interface ShowResponse {
  show: Movie;
}

export default function SearchScreen({ navigation }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<ShowResponse[]>([]);

  const searchMovies = async (text: string) => {
    setSearchTerm(text);
    if (text.length > 2) {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${text}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderMovie = ({ item }: { item: ShowResponse }) => (
    <TouchableOpacity 
      style={styles.movieCard}
      onPress={() => navigation.navigate('Details', { movie: item.show })}
    >
      <Image 
        source={{ uri: item.show.image?.medium }}
        style={styles.thumbnail}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.show.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={searchMovies}
        placeholder="Search shows..."
        placeholderTextColor={theme.colors.secondary}
      />
      <FlatList
        data={results}
        renderItem={renderMovie}
        keyExtractor={item => item.show.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  searchInput: {
    margin: theme.spacing.medium,
    padding: theme.spacing.medium,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    color: theme.colors.text,
  },
  movieCard: {
    flexDirection: 'row',
    padding: theme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: theme.spacing.medium,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
