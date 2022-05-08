import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons ,FontAwesome5} from '@expo/vector-icons'; 

import tw from 'twrnc'
const InputLabel = ({typeIcon,titleInput,labelInput,iconTitle}) => {
  return (
    <View style={ tw `mb-5`} >
    <Text style={ tw`text-gray-500 font-semibold`}> {titleInput}</Text>
  <View style={ tw `bg-gray-100 h-14 shadow-sm  rounded-lg p-2 items-center flex-row`}>
    { typeIcon ==='fa' ? <FontAwesome5 name="user" size={24} color="black" /> :  <MaterialCommunityIcons name={iconTitle}  size={24} color="gray" /> }
  
  <TextInput style={ tw `ml-2 flex-1`} placeholder={labelInput} />
  </View>
</View>
  )
}

export default InputLabel
