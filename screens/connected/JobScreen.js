import { View, Text ,TouchableOpacity,TextInput,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons,Octicons,Feather,Ionicons} from '@expo/vector-icons'
import tw from 'twrnc'
import WorkCard from '../../components/card/WorkCard';
const JobScreen = () => {
  const blue = "#3777f0"
  const navigator = useNavigation()
  const MoveToChat = () =>{
    navigator.navigate('chat')
   }
  return (
    <View style={ tw `mt-8 bg-white h-full`}>
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

 {/* resultats de la recherche */}
<View style={ tw `mt-2 flex-1  p-1 `}>
<WorkCard />
<WorkCard />
<WorkCard />
<WorkCard />
</View>
    </View>
  )
}

export default JobScreen