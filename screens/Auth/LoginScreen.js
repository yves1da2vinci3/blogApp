import { StyleSheet, Text, View ,TextInput,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign,FontAwesome5 ,MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'
import InputLabel from '../../components/InputLabel'
import PasswordInput from  '../../components/PasswordInput'
import Boutton from '../../components/Boutton.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const LoginScreen = () => {
  const blue = "#3777f0"
   const navigator = useNavigation ()
    const  moveToSignup = () =>{
        navigator.navigate('signup')
    }
  return (
    <KeyboardAwareScrollView    style={ tw` flex-1  p-4 bg-white mt-16`}>
      <Text style={ tw` font-bold text-black mt-5 text-2xl capitalize`}>Se connecter</Text>
      <Text style={ tw` font-semibold text-gray-500 mt-5 text-sm`}>Bon retour sur la plateforme numero 1
      de mise en relation entre Designers de Cote D'ivoire.
        </Text>
           <View style={tw`mt-8`}>
            <TouchableOpacity style={tw  `flex justify-evenly items-center shadow-sm rounded-lg border-gray-300  border h-18 flex-row  bg-gray-50`}>
            <AntDesign name="google"  size={35} color="red" />
            <Text style={ tw` font-bold text-gray-500 text-sm`}> Continuer avec Google
        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw  ` flex justify-evenly items-center shadow-sm rounded-lg border-gray-300  border h-18 flex-row  bg-gray-50 mt-2`}>
            <FontAwesome5 name="facebook" size={35} color={blue} />
            <Text style={ tw` font-bold text-gray-500  text-sm`}> Continuer avec Facebook
        </Text>
            </TouchableOpacity>
           </View>
<View style={ tw ` bg-gray-200 h-1 flex-row mt-14`}></View>

{/* formulaire */}
<View style={ tw `mt-8`}>
 <InputLabel  titleInput='addresse Email'  labelInput='veuillez entrer votre email' />
<PasswordInput titleInput='mot de passe'   labelInput='veuillez entrer votre mot de passe' />
</View>
{/* boutton de conenxion */}
<Boutton titleBtn='se connecter' />
<View style={ tw `flex flex-row mt-1 justify-center`}>
<Text style={ tw `text-black`}> Avez vous un compte ? sinon </Text>
   <TouchableOpacity onPress={moveToSignup}>
       <Text style={ tw `text-blue-500`}>s'enregistrer</Text>
   </TouchableOpacity>
   </View>
    </KeyboardAwareScrollView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({})