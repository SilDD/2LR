import { YStack, Text } from 'tamagui'
import { StackHomeTabs} from "@/components/navigation/simpleHomeTabs";

export default function BarsScreen() {
  return (
    <YStack >
        {/*<StackHomeTabs/>*/}
      <Text fontSize="$6">Bars in deiner Nähe</Text>
      {/* Bar-Liste oder Karte */}
    </YStack>
  )
}