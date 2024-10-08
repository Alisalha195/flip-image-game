import { View, Text, StyleSheet, Image } from 'react-native'

const ImageCard = ({src}) => {
  console.log("src",src);
  // const [imgSrc,setImgSrc] = useState(`@/assets/gameImages/${src}`)
  // let imgSrc = `@/assets/gameImages/${src}`;
  // console.log("imgSrc",imgSrc)
  return (
    <View style={styles.container}>
      

    <Image source={src} style={styles.image} />
    {/*<Text>src</Text>*/}
    </View>
  )
};

const styles = StyleSheet.create({
  container : {
    color:"#fff",
    width:"25vw"  
  },
  image:{
    alignSelf: 'center'
  }
});
export default ImageCard;

