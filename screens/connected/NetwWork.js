import { View, Text,TouchableOpacity,TextInput,Image,ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Octicons,MaterialCommunityIcons  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import InvitationCard from '../../components/card/InvitationCard';
import RecommendedCard from '../../components/card/RecommendedCard';
const NetwWork = () => {
   const blue = '#3777f0'
    const navigator = useNavigation()
    const MoveToChat = () =>{
     navigator.navigate('chat')
    }
  return (
    <View  style={ tw `bg-gray-100 h-full p-2`}>
   <View style={ tw ` flex-row w-full items-center   bg-white p-5 `}>
        {/* iamge */}
        <View style={ tw `mr-8 flex-row justify-center`}> 
        <Image style={ tw `h-8 w-8 rounded-full`} source={{ uri : "https://static.wikia.nocookie.net/onepiece/images/4/4d/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20210123222638"}} />
        </View>
     {/* bar de recherhce */}
        <View style={ tw `bg-gray-100 h-10  shadow-sm w-56  p-2 items-center flex-row`}>
  <TextInput style={ tw `ml-2 flex-1`} placeholder='entrer un mot clé' />
  <Octicons name="search" size={20} color="gray" />
  </View>
  {/* chat icon */}
  <TouchableOpacity  onPress={MoveToChat} style={ tw `ml-8 flex-row justify-center`}>
  <MaterialCommunityIcons name="chat-processing" size={33} color="gray" />
     </TouchableOpacity>
      </View >
      {/* parite invitations */}
      <Text style={[ tw `text-lg text-blue-800 capitalize font-bold`,{ color : blue}]}>invitations</Text>

      <View style ={ tw `mt-5 bg-white shadow w-full h-48 p-2`}>
       {/* inviation card  */}
   <InvitationCard />
   <InvitationCard />
      </View>

      {/* parite recommadations */}
      <Text style={ tw `text-lg text-blue-800 capitalize font-bold`}>recommendé</Text>
      <View style={ tw `flex-row` }>
        {/* recommended card */}
  <RecommendedCard />
  <RecommendedCard />
  <RecommendedCard />

      </View>
    </View>
  )
}

export default NetwWork 