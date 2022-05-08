import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons ,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
const CallFunctionality = () => {
  return (
    <View style={ tw `flex-row mx-8  `}>
    <TouchableOpacity activeOpacity={0.8} style={ tw `flex justify-center w-14 h-14  items-center`}> 
    <Ionicons name="call" size={26} color="white" />
    </TouchableOpacity>
    <TouchableOpacity  activeOpacity={1} style={ tw ` mx-1 flex justify-center  w-14 h-14  items-center`}> 

    <Ionicons name="videocam" size={30} color="white" />
</TouchableOpacity>
  </View>
  )
}

export default CallFunctionality