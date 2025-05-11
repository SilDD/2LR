import { YStack, Text } from 'tamagui'
import {StackHomeTabs} from "@/components/navigation/simpleHomeTabs";

export default function ClubScreen() {
  return (
    <YStack >
        <StackHomeTabs/>
      <Text fontSize="$6">Clubs in deiner Nähe</Text>
      {/* Bar-Liste oder Karte */}
    </YStack>
  )
}