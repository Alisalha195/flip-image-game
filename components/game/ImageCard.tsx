import { View, Text, StyleSheet, Image } from 'react-native'

const ImageSrc = ({ src }) => {
  return (
    <View style={styles.container}>
      <Image src={src} style={styles.image} />
    </View>
  )
};

const styles = StyleSheet.create({
  container : {
    
  },
  image:{
    
  }
});
export default ImageSrc;