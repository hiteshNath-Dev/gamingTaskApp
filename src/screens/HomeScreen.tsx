import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from '../redux/types';
import GameCard from '../components/GameCard';
import { View, Text , ScrollView} from 'react-native';

function HomeScreen() {

  
  const games = useSelector((state: any) => state.game.games);

 

  return (
    <ScrollView>
    <View>
        
    <Text>Games List</Text>
    <View>
      {games.map((game: Game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </View>
  </View>
   </ScrollView>

    
  );
}

export default HomeScreen;
