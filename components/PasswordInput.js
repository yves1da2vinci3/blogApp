import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const PasswordInput = ({titleInput,labelInput}) => {
  return (
    <View   style={ tw `mb-5`} >
    <Text style={ tw`text-gray-500 font-semibold`}> {titleInput}</Text>
  <View style={ tw `bg-gray-100 h-14 shadow-sm  rounded-lg p-2 items-center flex-row`}>
  <MaterialCommunityIcons name="form-textbox-password" size={24} color="gray" />
  <TextInput secureTextEntry style={ tw `ml-2 flex-1`} placeholder={labelInput} />
  </View>
</View>
  )
}

export default PasswordInput
