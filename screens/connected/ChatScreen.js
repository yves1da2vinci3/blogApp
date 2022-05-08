import{ StyleSheet} from 'react-native'

import { Text,View ,FlatList} from 'react-native';
import ChatRoomItem from '../../components/ChatRoomItem'
import {useNavigation} from '@react-navigation/native'
import chatRoomsData from "../../assets/data/ChatRooms"
const ChatScreen = () => {
  const navigation = useNavigation()
  navigation.setOptions({title : 'Messagerie'})
  return (
    <View style={styles.page}> 
     <FlatList data={chatRoomsData}  renderItem={({item}) => <ChatRoomItem  chatRoom={item} />} 
     showsHorizontalScrollIndicator={false}

     />
   </View>
  )
}

export default ChatScreen
const styles = StyleSheet.create({
  page : {
    backgroundColor : "white",
    height : '100%'
  }
})