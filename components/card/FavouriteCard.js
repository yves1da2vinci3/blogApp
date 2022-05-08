import {  Text, View ,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import tw from 'twrnc'
const FavouriteCard = () => {
  return (
    <View style={ tw ` h-26 bg-white flex-row mt-2 shadow`}>
    <Image style={ [tw `h-full w-26 rounded`]}  source={{ uri : "https://static.wikia.nocookie.net/onepiece/images/4/4d/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20210123222638"}}/>

    <View  style={ tw `items-center w-48 `} >
<Text style={ tw `capitalize text-gray-500 font-bold  `}> Melissa Smuter</Text>
<Text style={ tw `capitalize text-gray-500 font-semibold`}> Fluuter deveolpper </Text>
<Text style={ tw `capitalize text-gray-500 font-semibold`}> 30 abonnés</Text>
</View>
<View style={ tw ` items-center justify-center flex-1`}>
<TouchableOpacity  style={ tw `flex  items-center justify-center shadow-xl  h-10 w-10 bg-white rounded-full`}>
<MaterialCommunityIcons  name='heart'  color='red' size={24} />
</TouchableOpacity>
</View>
    </View>
  )
}

export default FavouriteCard
