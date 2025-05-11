import { YStack, Text } from 'tamagui'
import {StackHomeTabs} from "@/components/navigation/simpleHomeTabs";

export default function EventScreen() {
  return (
    <YStack >
        <StackHomeTabs />
      <Text fontSize="$6">Events in deiner Nähe</Text>
      {/* Bar-Liste oder Karte */}
    </YStack>
  )
}