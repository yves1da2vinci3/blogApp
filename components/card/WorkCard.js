import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,Octicons,Feather,Ionicons} from '@expo/vector-icons'
import tw from 'twrnc'
const workCard = () => {
    const blue = "#3777f0"
  return (
    <View style={ tw ` h-26 bg-white flex-row mt-2 shadow rounded ` }>
    {/* image */}
      <Image style={ [tw `h-22 w-22 rounded-full ml-2 mt-2`]}  source={{ uri : "https://static.wikia.nocookie.net/onepiece/images/4/4d/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20210123222638"}}/>
  {/* InformationSupp */}
      <View  style={ tw `items-start ml-4 w-44 mt-2 `} >
  <Text style={ tw `capitalize text-gray-500 font-bold  `}> Melissa Smuter</Text>
  <Text style={ tw `capitalize text-gray-500 font-semibold`}> Fluuter deveolpper </Text>
  <Text style={ tw `capitalize text-gray-500 font-semibold`}> 30 abonnés</Text>
  <View style={ tw `absolute bottom-0 flex-row items-center mb-2 `}>
  <Ionicons name="ios-person-add-sharp" size={20} color={blue}/>
  <Text style={[ tw ` text-gray-500 font-semibold`,{ color : blue}]}> 30 candidatures</Text>
  </View>
  
  </View>
  <View style={ tw `   justify-between`}>
  <TouchableOpacity  style={ tw `flex  items-center justify-center  self-end  h-10 w-10 bg-white `}>
  <Feather name="bookmark" size={24} color="black" />
  </TouchableOpacity>
  <Text style={ tw ` text-gray-500 text-sm font-semibold mb-2`}> il y a 2 jours</Text>
  </View>
      </View>
  )
}

export default workCard