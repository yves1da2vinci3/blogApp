import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'
import tw from 'twrnc'
const RecommendedCard = () => {
  return (
    <View style={ tw ` w-36 rounded shadow bg-white  h-48 p-1 items-center ml-2`}>
    {/* image et ajout */}
  <View  style={ tw `relative`}>
  <Image style={ tw `h-22 w-22 rounded-full mt-2 `} source={{ uri : "https://static.wikia.nocookie.net/onepiece/images/4/4d/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20210123222638"}} />
<TouchableOpacity style={ tw ` z-20 bg-blue-500 justify-center items-center h-12 w-12 p-1 rounded-full border-4 border-white shadow-xl absolute left-14`}>
<Entypo name="add-user" size={24} color="white" />
</TouchableOpacity>
  </View>
  {/* text */}
  <View  style={ tw `items-center`} >
<Text style={ tw `capitalize text-gray-500 font-bold  `}> Melissa Smuter</Text>
<Text style={ tw `capitalize text-gray-500 font-semibold`}> Fluuter deveolpper </Text>
<Text style={ tw `capitalize text-gray-500 font-semibold`}> 30 abonnés</Text>
</View>
</View>
  )
}

export default RecommendedCard