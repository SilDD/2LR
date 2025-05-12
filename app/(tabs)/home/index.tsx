// app/(tabs)/home/index.tsx
import { View } from 'react-native';
import { HomeCategories } from '@/components/navigation/homeCategories';

export default function HomeStart() {
  return (
    <View style={{ flex: 1 }}>
      <HomeCategories />
    </View>
  );
}
