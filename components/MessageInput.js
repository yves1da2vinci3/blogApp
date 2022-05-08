import { StyleSheet, Text, View ,TextInput,
    Pressable,KeyboardAvoidingView,
     Platform} from 'react-native'
  import React,{useState} from 'react'
  import  {SimpleLineIcons, Feather,MaterialCommunityIcons,
    AntDesign, Ionicons } from '@expo/vector-icons'
  
  const MessageInput = () => {
    const [message,SetMessage] = useState('')
  
    // defintion de sendMessqge
    const sendMessage = () =>{
      console.warn("sending"  , message)
    }
     // defintion de  onPlusClciked 
    const onPlusClicked = () =>{
   console.warn('on plus clicked')
    }
    const onPress = () =>{
      if(message){
     sendMessage()
      }else{
    onPlusClicked ()
      }
    }
    return (
      <KeyboardAvoidingView  style={styles.root}  keyboardVerticalOffset={5}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}> 
        <SimpleLineIcons name='emotsmile' style={styles.icon} size={24} color='#595959'  />
          <TextInput style={styles.input}  
          value ={message}
          onChangeText={SetMessage}
          placeholder="signal message..."
          />
          <Feather name='camera' size={24} color='#595959'  style={styles.icon} />
          <MaterialCommunityIcons name='microphone-outline' size={24} color='#595959' />
        </View>
        <Pressable onPress={onPress} style={styles.buttonContainer}> 
        {  message ? <Ionicons name='send' size={18} color='white' /> :   <AntDesign name='plus' size={24} color='white'/> }
  
        </Pressable>
      </KeyboardAvoidingView>
    )
  }
  
  export default MessageInput
  
  const styles = StyleSheet.create({
    root :{
   flexDirection : 'row',
   padding: 10
    },
    inputContainer :{
    backgroundColor : '#f2f2f2',
    flex : 1,
    marginRight : 10,
    borderRadius: 25,
    borderWidth: 1,
    flexDirection : 'row',
    borderColor : '#dedede',
    alignItems : 'center',
    padding: 5
    },
    buttonContainer :{
      width : 40,
      height: 40,
      backgroundColor :  "#3777f0",
      borderRadius : 25,
      justifyContent : 'center',
      alignItems : 'center'
    },
    buttonText :{
       color : 'white',
       fontSize: 25
    },input :{
      flex : 1,
      marginHorizontal : 5
    },
    icon :{
      marginHorizontal : 5
    }
  })