import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const {signOut} = useAuth()


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => signOut()} style={{height: 50, width: 100, backgroundColor: "black", borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
        <Text style={{color: "white"}}>
          Signout out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
