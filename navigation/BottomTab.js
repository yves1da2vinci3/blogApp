import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/connected/HomeScreen'
import PostScreen from '../screens/connected/PostScreen';
import NotificationsScreen from '../screens/connected/FavouriteScreen'
import JobScreen from '../screens/connected/JobScreen'
import FavouriteScreen from '../screens/connected/FavouriteScreen'
import NetwWork from '../screens/connected/NetwWork'

import { Entypo ,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import BottomTab from '../components/BottomTab';
import CreateArticle from '../screens/article/CreateArticle';
function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initialRouteName="Home"  
      >
      <Tab.Screen  name="Home" component={HomeScreen}  options={{
        headerShown : false,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}  />
   
     
     
       <Tab.Screen name="Notifications" component={FavouriteScreen} options={{
             headerShown : false,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          
          <MaterialCommunityIcons name="heart" size={size} color={color}/>
        ),
      }}  />

          <Tab.Screen  name="post" component={CreateArticle}   options={{
              headerShown : false,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="folder-plus" size={size} color={color} />
        ),            headerShown :false
      }}   />
      <Tab.Screen  name="network" component={NetwWork} options={{
            headerShown : false,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="users" size={size} color={color} />
        ),
      }}  />
            <Tab.Screen   name="job" component={JobScreen} options={{
            headerShown : false,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="work" size={size} color={color} />
        ),
      }}  />
    </Tab.Navigator>
    );
  }

export  default  BottomTabNavigator;