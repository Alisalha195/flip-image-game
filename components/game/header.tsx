import {View, Text, StyleSheet} from 'react-native'

const Header = ({wrongFlips}) => {
  return (  
    <View>
      <Text>Flip-Game</Text>
      <Text>wrong flip pairs: {wrongFlips}</Text>
      
    </View>
  )
}
export default Header