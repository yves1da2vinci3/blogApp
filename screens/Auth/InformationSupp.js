import { View, Text , Image,TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons'; 
import InputLabel from '../../components/InputLabel';
import Boutton from '../../components/Boutton';
const InformationSupp = () => {
  return (
    <View style={ tw `flex-1 bg-white p-4 relative`}>
      <Text style={ tw `text-center text-lg font-semibold`}>Information Supplementaires</Text>
      <View style={ tw ` relative flex-row justify-center mt-5`}>
      <Image resizeMode='cover' fadeDuration={400} source={{ uri : 'https://static.wikia.nocookie.net/onepiece/images/4/4d/Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20210123222638'}} style={ tw `h-48 w-48 rounded-full  bg-red-900 `} />
       <TouchableOpacity style={ tw `absolute left-60 top-38 bg-black rounded-full h-8 w-8 justify-center items-center  border-2 border-white `}>
       <FontAwesome5 name="pen" size={13} color="white" />
       </TouchableOpacity>
      </View>
      <View style={ tw `mt-8`}>
        <InputLabel  titleInput='profession' labelInput='veuillez entrer votre ou vos profession(s)' />
        </View>

  <View style={ tw `absolute  w-full pl-5 bottom-8`}>
        <Boutton  titleBtn="valider" />
        </View>
    </View>
  )
}

export default InformationSupp