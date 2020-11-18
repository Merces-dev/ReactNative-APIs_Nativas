import React,{useState} from 'react';
import {  View, StyleSheet, Button, StatusBar, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const TextToSpeech = () => {
    const [valorDito, setValorDito] = useState('');
    const speak = () =>{
        Speech.speak(valorDito);
        console.log(valorDito);

    }
    
    return (
       <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValorDito(text)}
                value={valorDito}
                placeholder='Digite o que quer que seja dito'
            />
        <Button style={styles.button} title="Pressione para Falar" onPress={() => speak()} />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item : {
        backgroundColor: 'gray',  
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button : {
        borderRadius: 10
    },
    input:{
        textAlign:'center',
        marginBottom: 20
    }
});

export default TextToSpeech


