import React from 'react';
import {  View, StyleSheet, Button, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';

const TextToSpeech = () => {
    const speak = () =>[
        Speech.speak('Boa Tarde')
    ]
    return (
        <View style={styles.container}>
        <Button title="Pressione para Falar" onPress={() => speak()} />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item : {
        backgroundColor: 'gray',  
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default TextToSpeech


