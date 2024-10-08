import { View, Text, StyleSheet } from 'react-native'
import {shuffeledImages} from "@/constants/data"
import {ImageCard} from "@/components/game/ImageCard";

const GameBoard = ({setWrongFlips}) => {
  return (
    <View>
      {shuffeledImages.map(item)=>(
        <ImageCard 
        
        />      
      )}
    </View>
  )
}
export default GameBoard;