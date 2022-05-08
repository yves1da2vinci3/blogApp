import { View, Text,SafeAreaView ,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useEffect} from 'react'
import tw from 'twrnc'
import { Octicons,MaterialCommunityIcons } from '@expo/vector-icons'; 
import Pin from '../../components/Publisment';
import Pins from '../../assets/data/Pins';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigator = useNavigation()
 const MoveToChat = () =>{
  navigator.navigate('chat')
 }

  return (
    <SafeAreaView style={ tw ` bg-white mt-8 h-full p-2`} >
      {/* bar de navigation */}
      <View style={ tw ` flex-row w-full items-center  `}>
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
  
      <View style={ tw `bg-white flex-1`} >
    <Text style={ tw ` text-center text-3xl mt-2 font-bold` }>Decouvrez </Text>
    <Text style={ tw ` text-center text-lg text-gray-300  mt-2 font-bold` }>nos nouvelles publications </Text>
            {/* categorie */}
            <View style={ tw  `  mt-3 flex-row  flex w-full px-2 justify-around`}> 
<TouchableOpacity style={ tw `w-20 h-12 bg-white flex  justify-center items-center border-gray-50 shadow-sm border-2 rounded-full`}>
  <Text  >XD</Text>
</TouchableOpacity>
<TouchableOpacity style={ tw ` w-20 h-12 flex bg-white   justify-center items-center border-gray-50 shadow-sm border-2 rounded-full`}>
  <Text  >Ps</Text>
</TouchableOpacity>
<TouchableOpacity style={ tw ` w-20 h-12 flex bg-black   justify-center items-center border-gray-50 shadow-sm border-2 rounded-full`}>
  <Text  style={ tw `text-white`} >  AI</Text>
</TouchableOpacity>
<TouchableOpacity style={ tw ` w-20 h-12 flex bg-white   justify-center items-center border-gray-50 shadow-sm border-2 rounded-full`}>
  <Text  >Pr</Text>
</TouchableOpacity>
            </View>
      </View>
        
        {/* gallerie */}
<View style={ tw `  flex-4 mt-8 flex-row  flex mb-5 `}>

<ScrollView  showsVerticalScrollIndicator={false} style={ tw ` flex-1`}>
<Pin pin ={Pins[6]} />
<Pin pin ={Pins[5]} />
<Pin pin ={Pins[4]} />
<Pin pin ={Pins[3]} />
<Pin pin ={Pins[2]} />
<Pin pin ={Pins[1]} />
</ScrollView>
<ScrollView showsVerticalScrollIndicator={false} style={ tw ` flex-1`}>
<Pin pin ={Pins[0]} />
<Pin pin ={Pins[2]} />
<Pin pin ={Pins[3]} />
<Pin pin ={Pins[4]} />
<Pin pin ={Pins[5]} />
<Pin pin ={Pins[1]} />
</ScrollView>
</View>

    </SafeAreaView>
  )
}

export default HomeScreen


