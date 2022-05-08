import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Pin = ({ pin }) => {
  const [ratio, setRatio] = useState(1);

  const navigation = useNavigation();
//   onPress={() => navigation.navigate("Pin", { id: pin.id })}
  useEffect(() => {
    Image.getSize(pin.image, (width, height) => setRatio(width / height));
  }, []);

  return (
    <Pressable
    onPress={() => navigation.navigate("article", { id: pin.id })}
      style={styles.root}
    >
      <View>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
          resizeMode="contain"
        />
        <View style={styles.icon}>
          <AntDesign name="hearto" size={16} color="black" />
        </View>
      </View>

      {!!pin.title && (
        <Text numberOfLines={2} style={styles.text}>
          {pin.title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 4,
    marginVertical: 5,
  },
  image: {
    width: "100%",
    borderRadius: 15,
    height: undefined,
  },
  text: {
    fontWeight: "bold",
    margin: 5,
    lineHeight: 22,
    fontSize: 16,
    color: "#181818",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#D3CFD4",
    padding: 7,
    borderRadius: 50,
  },
});

export default Pin;