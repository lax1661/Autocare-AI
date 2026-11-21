import { Text, View } from 'react-native';

export default function ReportsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Saved Reports</Text>
      <Text style={{ marginTop: 8, textAlign: 'center' }}>Diagnosis reports will be stored locally.</Text>
    </View>
  );
}
