import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as Location from 'expo-location';


const Localizacao = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    
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

export default Localizacao


