import { Image, 
  StyleSheet, 
  Platform ,
  Button, 
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

import {useState} from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


import Header from "@/components/game/header";
import GameBoard from "@/components/game/GameBoard";

export default function HomeScreen() {

  const [wrongFlips, setWrongFlips] = useState(0);
  return (
    <View>
      <Header wrongFlips={wrongFlips} />
      <GameBoard setWrongFlips={setWrongFlips} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  
});
