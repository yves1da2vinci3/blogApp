import { StyleSheet, Text, View,KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import InputLabel from '../../components/InputLabel'
import PasswordInput from '../../components/PasswordInput';
import Boutton from '../../components/Boutton';
import tw from 'twrnc'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignupScreen = () => {
  const navigator = useNavigation()
  const moveToLogin = () => {
    navigator.navigate('login')
  }
  const navigationFunction = () =>{
    navigator.navigate("user")
  }
  return (
    <KeyboardAwareScrollView   style={ tw` flex-1  p-4 bg-white mt-16`}>
    <Text style={ tw` font-bold text-black mt-5 text-2xl capitalize`}>S'enregistrer</Text>
    <Text style={ tw` font-semibold text-gray-500 mt-5 text-sm`}>Bienvenue sur la plateforme numero 1
    de mise en relation entre Designers de Cote D'ivoire.
      </Text>
         <View style={tw`mt-8`}>
      
         <InputLabel typeIcon='fa'  iconTitle="email-outline"  titleInput='Nom utilisateur'  labelInput='veuillez entrer votre Nom complet' />
            
         
         <InputLabel  iconTitle="email-outline" titleInput='addresse Email'  labelInput='veuillez entrer votre email' />
   
       <PasswordInput titleInput='mot de passe'   labelInput='veuillez entrer votre mot de passe' />

       <PasswordInput titleInput=' confirmation mot de passe'   labelInput='veuillez entrer le meme mot de passe' />
   </View>
     


{/* boutton de conenxion */}
<Boutton titleBtn=" s'enregistrer" navigationFunction={navigationFunction} />
<View style={ tw `flex flex-row mt-1 justify-center`}>
<Text style={ tw `text-black`}> Deja  un compte ?  </Text>
 <TouchableOpacity onPress={moveToLogin}>
     <Text style={ tw `text-blue-500`}>se connecter</Text>
 </TouchableOpacity>
 </View>
  </KeyboardAwareScrollView>

  )
}

export default SignupScreen
