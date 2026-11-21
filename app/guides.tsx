import { Text, View } from 'react-native';

export default function GuidesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Repair Guides</Text>
      <Text style={{ marginTop: 8, textAlign: 'center' }}>Offline guides will appear here.</Text>
    </View>
  );
}
