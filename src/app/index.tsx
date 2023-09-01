import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import alertImage from '../assets/alert.png'
import socket from '../services/socket'

export default function Home() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conectado ao servidor Socket.IO')
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  function handleClick() {
    socket.send('356132115371941')
  }

  return (
    <View className="flex-1 justify-end bg-zinc-950 items-center p-8">
      <View className="absolute top-[calc(35%)] ">
        <TouchableOpacity
          className="w-72 h-72 rounded-full bg-red-700 justify-center items-center"
          onPress={handleClick}
        >
          <Text className="text-5xl text-zinc-50">Help</Text>
        </TouchableOpacity>
      </View>
      <Image
        className="w-28 h-24 mb-4"
        source={alertImage}
        alt="Imagem de alerta"
      />
      <Text className="text-sm text-zinc-50">Só aperte em casos urgentes.</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
