import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Boutton = ({titleBtn, navigationFunction}) => {
  const blue = "#3777f0"
  return (
    <TouchableOpacity onPress={navigationFunction} style={ [tw `mt-2 bg-blue-700 p-4 rounded-full justify-center items-center`,{
      backgroundColor : blue
    }]} > 
    <Text style={ tw ` text-white  font-semibold text-lg`} >{titleBtn}</Text>
</TouchableOpacity>
  )
}

export default Boutton

