import { YStack, Text } from 'tamagui'
import { StackHomeTabs} from "@/components/navigation/simpleHomeTabs";

export default function CafeScreen() {
  return (
    <YStack >
        <StackHomeTabs />
      <Text fontSize="$6">Cafes in deiner Nähe</Text>
      {/* Bar-Liste oder Karte */}
    </YStack>
  )
}