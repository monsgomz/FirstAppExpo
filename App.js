//Tutorial en https://docs.expo.dev/tutorial/create-your-first-app/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {

let [selectedImage, setSelectedImage] = useState(null); //variable que va a cambiar de imagen
  const PlaceholderImage = require('./assets/clouds.jpg');
  const [showAppOptions, setShowAppOptions] = useState(false); //mostrar u ocultar los botones

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });
  if(!result.canceled){
    setSelectedImage(result.assets[0].uri);
    console.log(result)
  } else{
    alert("you did not select any image");
  }
  }
  

  return ( 
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text>
      <View style={styles.imageContainer}>
      <ImageViewer PlaceholderImage={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme={'primary'} onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
      {/* <Image source={{uri: 'https://images.unsplash.com/photo-1693742857885-3867bb972e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80'}}></Image> */}
      <StatusBar style="auto" />
    </View>
  );
}
//reactnative.dev/docs/style
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#D4E2D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
    footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
