import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import FavouriteCard from '../../components/card/FavouriteCard'
const FavouriteScreen = () => {
  return (
    <View style={ tw `mt-8 bg-white h-full pl-2`}>
      <Text style={ tw ` text-lg font-bold `}>Favories</Text>
      <Text style={ tw ` capitalize text-gray-500 font-bold `}>Explorez vos publications favories</Text>
      <View style={ tw `mt-5 flex-1  p-2`}>
        {/* // card de favourite */}
   <FavouriteCard />
   <FavouriteCard />
   <FavouriteCard />
   <FavouriteCard />
      </View>
    </View>
  )
}

export default FavouriteScreen