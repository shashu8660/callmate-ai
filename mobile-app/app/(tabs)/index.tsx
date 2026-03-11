import { View, Text, Button, StyleSheet } from "react-native"
import { router } from "expo-router"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PolyCall AI</Text>

      <Button
        title="Start Call"
        onPress={() => router.push("/call")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:30,
    marginBottom:20
  }
})