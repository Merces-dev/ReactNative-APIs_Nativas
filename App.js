import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Contatos' component ={Contatos}/>
        <Tab.Screen name='TextToSpeech' component ={TextToSpeech}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}