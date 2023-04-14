import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type GameCardProps = {
  game: {
    id: number;
    title: string;
    highlightsSupported: boolean;
    fullyOptimized: boolean;
    steamUrl: string;
    publisher: string;
    genre: string;
    status: string;
  };
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.publisher}>Publisher: {game.publisher}</Text>
      <Text style={styles.genre}>Genre: {game.genre}</Text>
      <Text style={styles.status}>Status: {game.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  publisher: {
    fontStyle: 'italic',
  },
  genre: {
    marginTop: 5,
  },
  status: {
    marginTop: 5,
  },
});

export default GameCard;
