import {  Text,View,StyleSheet,FlatList } from 'react-native'
import React ,{useLayoutEffect} from 'react'
import Message from '../../components/Message' 
import ChatRoomsData from '../../assets/data/Chats'
import MessageInput from '../../components/MessageInput'
import {useRoute,useNavigation} from '@react-navigation/native'
import CallFunctionality from '../../components/CallFunctionality'
const ChatRoomScreen = () => {
  const route = useRoute()
  useLayoutEffect(() =>{
      navigation.setOptions({title : 'elon Musk' ,headerRight : () => (<CallFunctionality />)  })
      
  })
  const navigation = useNavigation()
  return (
   <View style={styles.page}> 
    <FlatList data={ChatRoomsData.messages} 
    renderItem={({item}) => <Message message={item} 
    />}  
    inverted
    />
      <MessageInput />
   </View>
  )
}

export default ChatRoomScreen

const styles = StyleSheet.create({
  page : {
    backgroundColor : "white",
    height : '100%'
  }
})