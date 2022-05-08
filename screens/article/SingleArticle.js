import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,TouchableOpacity
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import pins from "../../assets/data/Pins";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { StatusBar } from "expo-status-bar";
  import { FontAwesome, Ionicons } from "@expo/vector-icons";
  import { Octicons,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
  import tw from 'twrnc'
  const PinPage = () => {
    const route = useRoute();
    const pinId = route.params?.id;
    const [ratio, setRatio] = useState(1);
    const navigation = useNavigation();
    const [isLiked,SetLiked] = useState(true)
    const pin = pins.find((p) => p.id === pinId);
      const likeToggle = () =>{
        SetLiked(!isLiked)
      }

    useEffect(() => {
      if (pin) {
        Image.getSize(pin.image, (width, height) => setRatio(width / height));
      }
    }, [pin]);
  
    if (!pin) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Pin not found</Text>
        </View>
      );
    }
  
    return (
      <SafeAreaView style={styles.root}>
        <StatusBar style="light" />
        <ScrollView style={styles.container}>
          <View style={ tw `flex w-full relative`}>
          <Image
            source={{ uri: pin.image }}
            style={[styles.image, { aspectRatio: ratio }]}
          />
          <View style={ tw `flex-row mx-8 absolute -bottom-5 right-4`}>
            <TouchableOpacity activeOpacity={0.8} style={ tw `flex justify-center bg-white shadow-lg w-14 h-14 rounded-full items-center`}> 

          <MaterialCommunityIcons name="share" color='gray' size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={likeToggle} activeOpacity={1} style={ tw ` mx-3 flex justify-center bg-white shadow-lg w-14 h-14 rounded-full items-center`}> 

<MaterialCommunityIcons name="heart" color= {  isLiked ?  'red' : 'gray'} size={28} />
  </TouchableOpacity>
          </View>
          </View>
        
          <Text style={styles.title}>{pin.title}</Text>
          <Pressable   onPress={() => navigation.goBack()} style={styles.back}>
            <Ionicons name="chevron-back" size={35} color="black" />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      backgroundColor: "black",
    },
    back: {
      position: "absolute",
      top: 10,
      left: 10,
    },
    container: {
      backgroundColor: "white",
      height: "100%",
  
      borderTopEndRadius: 30,
      borderTopLeftRadius: 30,
    },
    image: {
      width: "100%",
      borderTopEndRadius: 30,
      borderTopLeftRadius: 30,
    },
    title: {
      margin: 10,
      fontSize: 24,
      fontWeight: "600",
      lineHeight: 35,
      textAlign: "center",
    },
  });
  
  export default PinPage;