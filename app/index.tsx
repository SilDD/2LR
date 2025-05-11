import { View, Text, Image } from 'tamagui'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View flex={1} bg="#1a0025" p="$4" >
      <Text fontSize="$9" fontWeight="700" color="#d100f9">Find Events</Text>
      <Text color="#ccc" mb="$4">Discover the best events in your city</Text>

      <View  bg="#2a0038" overflow="hidden">
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' }}
          height={180}
          width="100%"
        />
        <View p="$3">
          <Text fontSize="$7" fontWeight="600">Sunset Party</Text>
          <Text color="#aaa">Berlin · May 18</Text>
          <Link href="/(tabs)/home" asChild>
            <Text mt="$2" p="$2" bg="#d100f9" color="#fff" >
              Mitfeiern!
            </Text>
          </Link>
        </View>
      </View>
    </View>
  )
}
