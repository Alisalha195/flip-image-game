import { View, Text, StyleSheet,FlatList } from 'react-native';
import {useState} from 'react';

import {getShuffledImages} from "@/constants/data"
import ImageCard from "@/components/game/ImageCard";

const GameBoard = ({setWrongFlips}) => {
  const [shuffeledImages,setShuffeledImages] = useState(()=>getShuffledImages());

  const imagesSources = [
    require("@/assets/gameImages/1.jpg"),
    require("@/assets/gameImages/2.jpg"),
    require("@/assets/gameImages/3.jpg"),
    require("@/assets/gameImages/4.jpg"),
    require("@/assets/gameImages/5.jpg"),
    require("@/assets/gameImages/6.jpg"),
    require("@/assets/gameImages/7.jpg"),
    require("@/assets/gameImages/8.jpg"),

  ];

  // const imagesSources = [
  //   {id:1 , src:require("@/assets/gameImages/1.jpg")},  
  //   {id:2 , src:require("@/assets/gameImages/2.jpg")},  
  //   {id:3 , src:require("@/assets/gameImages/3.jpg")},  
  //   {id:4 , src:require("@/assets/gameImages/4.jpg")},  
  //   {id:5 , src:require("@/assets/gameImages/5.jpg")},  
  //   {id:6 , src:require("@/assets/gameImages/6.jpg")},  
  //   {id:7 , src:require("@/assets/gameImages/7.jpg")},  
  //   {id:8 , src:require("@/assets/gameImages/8.jpg")},  
  // ]

  console.log("shuffeledImages",shuffeledImages)
  return (
    <View style={{width:"100vw",height:"100vh", backgroundColor:"#f00"}}>
      
      <FlatList 
        horizontal={false}
        numColumns={4}
        data={shuffeledImages}
        // keyExtractor={item => item}
        renderItem={(item)=><ImageCard  style={{color:"#333"}} src={item.item.substring(0,1)} />}
      />

    </View>
  )
}
export default GameBoard;

//{imagesSources[item.item.substring(0,1)-1]}