import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MaterialCommunityIcons ,Octicons,MaterialIcons} from '@expo/vector-icons';
const BottomTab = () => {
  return (
    <View style={ tw `justify-center ml- flex-row h-24 items-center mb-2 rounded bg-white shadow-lg mr-2`}>
            <View style={ tw `flex  h-16 w-16  justify-center   items-center `}>
            <MaterialCommunityIcons name="home" color="black" size={24} />
        </View>
        <View style={ tw `flex  h-16 w-16   justify-center   items-center `}>
        <MaterialCommunityIcons name="bell" color='black' size={24} />
        </View>
        <View style={ tw `flex  h-16 w-16 absolute bottom-16 right-   rounded-full  justify-center  shadow-lg items-center bg-blue-600`}>
        <MaterialCommunityIcons name="plus" color='white' size={24} />
        </View>
        <View style={ tw `flex  h-16 w-16   justify-center  items-center `}>
        <MaterialIcons name="work" color='black' size={24} />
        </View>
        <View style={ tw `flex  h-16 w-16   justify-center   items-center `}>
        <Octicons name="settings" color='black' size={24} />
        </View>
    </View>
  )
}

export default BottomTab