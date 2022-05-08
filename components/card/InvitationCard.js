import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Entypo } from '@expo/vector-icons'; 
const InvitationCard = () => {
  const blue = "#3777f0"
  return (
    <View style={ tw ` flex-row  bg-white p-2 shadow-lg rounded mt-2`} >
    {/* image person */}
      <Image style={ [tw `h-16 w-16 rounded-full`,{
        backgroundColor : blue
      }]}  source={{ uri : "https://static.wikia.nocookie.net/onepiece/images/4/4d/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20210123222638"}}/>
        {/* InformationSupp */}
     <View >
     <Text style={ tw `capitalize text-gray-500 font-bold`}> Melissa Smuter</Text>
     <Text style={ tw `capitalize text-gray-500 font-semibold`}> Fluuter deveolpper at</Text>
     <Text style={ tw `capitalize text-gray-500 font-semibold`}> 30 abonnés</Text>
     </View>
     {/* actions card */}
     <View  style={ tw ` flex-row  ml-2 items-start`} >
         <TouchableOpacity style={ [tw ` justify-center items-center  p-2 rounded`,{
                   backgroundColor : blue
         }] }>
     <Text style={ tw `capitalize text-white font-bold`}> accepter</Text>
         </TouchableOpacity>
    <TouchableOpacity style={ tw `ml-1 mt-1`} activeOpacity={1}>
    <Entypo  name="cross" size={28} color="gray" />
    </TouchableOpacity>
     </View>
</View>
  )
}

export default InvitationCard