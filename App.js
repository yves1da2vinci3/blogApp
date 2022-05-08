import 'react-native-gesture-handler';
import {createStackNavigator  } from '@react-navigation/stack'
import {NavigationContainer,useNavigation} from '@react-navigation/native'
// import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './navigation/BottomTab';
// importation des screens
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import InformationSupp from './screens/Auth/InformationSupp';
import CreateArticle from './screens/article/CreateArticle'
import SingleArticle from './screens/article/SingleArticle'
import ChatScreen from "./screens/connected/ChatScreen"
import ChatRoom from  "./screens/connected/ChatRoom"
import React,{useEffect} from 'react'

export default function App() {

  const  Stack = createStackNavigator()
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen options={ { headerShown : false}} name='login' component={LoginScreen} />
        <Stack.Screen options={ { headerShown : false}} name='signup' component={SignupScreen} />
        <Stack.Screen options={ { headerShown : false}}  name='signup2' component={InformationSupp} />
        <Stack.Screen options={ { headerShown : false}}  name='createArticle' component={CreateArticle} />
        <Stack.Screen options={ { headerShown : false}}  name='article' component={SingleArticle} />
        <Stack.Screen   name='chat' component={ChatScreen} />
        <Stack.Screen   options={{  headerTintColor: 'white' , headerStyle : {
          backgroundColor : "#3777f0"
        }}}  name='ChatRoom' component={ChatRoom} />
    
        <Stack.Screen options={ { headerShown : false}}  name='user' component={BottomTabNavigator} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}





