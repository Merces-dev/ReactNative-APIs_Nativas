import React,{useState, useEffect, useRef} from 'react';
import {  View, StyleSheet, Button, StatusBar, TextInput,Text, TouchableOpacity, Modal, Image  } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import {Camera} from 'expo-camera'

const Foto = () =>{
  const camRef = useRef(null);
  const [type,setType] = useState(Camera.Constants.Type.back)
  const [permissao,setPermissao] = useState(null)
  const [fotoTirada,setFotoTirada] = useState(null)
  const [open,setOpen] = useState(null)



  useEffect(() =>{
    (async () => {
      const {status} =await Camera.requestPermissionsAsync();
      setPermissao(status ==='granted')
    })();

  }, []);

  if (permissao === null){
    return <View/>
  }
  if (permissao === false){
    return <Text>Negado</Text>
  }

  async function TirarFoto(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setOpen(true);
      setFotoTirada(data.uri)
    }
  }
  return(
    <View style={styles.container}>
      <Camera
      style={{flex:1}}
      type={type}
      ref={camRef}
      >
        <View style={styles.container2}>
          <TouchableOpacity
                style={styles.botao}

        onPress={()=>{
            setType(
              type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
            )
          }}
          >
            <Text style={{fontSize: 20, color: 'white'}}>
              Trocar
            </Text>
          </TouchableOpacity>
          
      <TouchableOpacity
      style={styles.botao}
        onPress={TirarFoto}
      >
        <FontAwesome name='camera' size={20} color='white'/>
          
      </TouchableOpacity>
        </View>
      </Camera>


      {fotoTirada &&
        <Modal
        animationType='slide'
        transparent={false}
        visible={open}
        >
            <View style={styles.foto}>
                <Image 
                style={{width: '70%', height: '70%' }}
                source={{uri: fotoTirada}}
                />
            </View>
        </Modal>
        }

      
    </View>
  )

}



const styles = StyleSheet.create({
  container:{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0
  },
  container2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 50
},
  botao : {
      marginHorizontal: 16,
  },
  foto : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
});

export default Foto