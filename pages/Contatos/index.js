import React, {useEffect, useState} from 'react';
import {StyleSheet,View,Text, StatusBar, FlatList, Button} from 'react-native'
import * as Contacts from 'expo-contacts'


const ItemContato = ({nome}) => {
    return(
        <View>
            <Text>
                {nome}
            </Text>
            <Button name='btnId' onPress={() => alert(id)} title='Id do Item'>  </Button>
        </View>
    )

}


const Contatos = () =>{
    const [contatos, setContatos] =useState({})
// Ciclo de vida, assim que aparece a página passa pelo useEffect
 
    useEffect(() => {
      (async () => {
         // Requisita permissao para obter a lista de contatos
        const { status } = await Contacts.requestPermissionsAsync();
         // Permissao concedida
        if (status === 'granted') {
            // Pega os contatos
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
  
            // Verifica se existem contatos cadastrados
          if (data.length > 0) {
              console.log(data)
            setContatos(data);
          }
        }
      })();
    }, []);
    
    
    const renderItem = ({item}) => {
        return(
            <ItemContato nome={item.name}/>
        )
    }

return(
    <View style ={styles.container}>

    <Text>Contatos</Text>
    {/* <FlatList
        data = {contatos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
    /> */}

    </View>
)

};

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
export default Contatos;