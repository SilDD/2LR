import { YStack, Text } from 'tamagui'
import { StackHomeTabs} from "@/components/navigation/simpleHomeTabs";

export default function LiveScreen() {
  return (
    <YStack >
        {/*<StackHomeTabs />*/}
      <Text fontSize="$6">Liveauftritte in deiner Nähe</Text>
      {/* Bar-Liste oder Karte */}
    </YStack>
  )
}