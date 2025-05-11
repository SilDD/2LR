import { YStack, Text } from 'tamagui'
import { StackHomeTabs} from "@/components/navigation/simpleHomeTabs";

export default function PeopleScreen() {
  return (
    <YStack >
        <StackHomeTabs />
      <Text fontSize="$6">Menschen in deiner Nähe</Text>
      {/* Bar-Liste oder Karte */}
    </YStack>
  )
}