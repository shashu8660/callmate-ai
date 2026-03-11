import { View, Text, Button, StyleSheet } from "react-native"
import { useEffect } from "react"
import { Audio } from "expo-av"
import { mediaDevices } from "react-native-webrtc"
import io from "socket.io-client"

const socket = io("http://192.168.1.4:3000")

export default function CallScreen(){

  useEffect(()=>{
    requestPermission()
  },[])

  const requestPermission = async () => {

    const { status } = await Audio.requestPermissionsAsync()

    if (status === "granted") {
      console.log("Microphone permission granted")
      startAudio()
    } else {
      console.log("Microphone permission denied")
    }

  }

  const startAudio = async () => {

    try {

      const stream = await mediaDevices.getUserMedia({
        audio:true,
        video:false
      })

      console.log("Microphone stream started",stream)

    } catch(err) {
      console.log("Microphone error",err)
    }

  }

  const joinRoom = ()=>{
    socket.emit("join-room","room1")
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Call Connected</Text>

      <Button title="Join Room" onPress={joinRoom} />

      <Button title="End Call" onPress={()=>alert("Call ended")} />

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
    fontSize:28,
    marginBottom:20
  }
})