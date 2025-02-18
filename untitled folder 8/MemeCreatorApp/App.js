import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(require('./assets/sample1.png'));
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const images = {
    sample1: require('./assets/sample1.png'),
    sample2: require('./assets/sample2.png'),
    // add more images as needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Meme Creator</Text>
      <Image source={selectedImage} style={styles.image} />
      <Text style={[styles.memeText, styles.topText]}>{topText}</Text>
      <Text style={[styles.memeText, styles.bottomText]}>{bottomText}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Top text"
        onChangeText={text => setTopText(text)}
        value={topText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Bottom text"
        onChangeText={text => setBottomText(text)}
        value={bottomText}
      />

      <Picker
        selectedValue={selectedImage}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedImage(images[itemValue])}
      >
        {Object.keys(images).map(key => (
          <Picker.Item key={key} label={key} value={key} />
        ))}
      </Picker>

      <Button title="Save Meme" onPress={() => alert('Meme Saved!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  memeText: {
    position: 'absolute',
    width: '100%',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  topText: {
    top: 10,
  },
  bottomText: {
    bottom: 10,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});
