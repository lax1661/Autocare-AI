import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const vehicleTypes = ['Car', 'Motorcycle', 'Truck', 'Bus', 'Tractor', 'Construction', 'Boat'];

export default function DiagnoseScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What vehicle needs help?</Text>
      <Text style={styles.subtitle}>Choose a vehicle type to begin.</Text>

      <View style={styles.list}>
        {vehicleTypes.map((item) => (
          <Pressable
            key={item}
            style={[styles.option, selected === item && styles.selected]}
            onPress={() => setSelected(item)}
          >
            <Text style={[styles.optionText, selected === item && styles.selectedText]}>{item}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        disabled={!selected}
        style={[styles.button, !selected && styles.buttonDisabled]}
        onPress={() => console.log(`Selected vehicle: ${selected}`)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f7f9fc' },
  title: { marginTop: 48, fontSize: 28, fontWeight: '700', color: '#172033' },
  subtitle: { marginTop: 8, marginBottom: 24, fontSize: 16, color: '#667085' },
  list: { gap: 10 },
  option: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#d0d5dd', backgroundColor: '#fff' },
  selected: { borderColor: '#2563eb', backgroundColor: '#eff6ff' },
  optionText: { fontSize: 16, color: '#344054' },
  selectedText: { color: '#1d4ed8', fontWeight: '700' },
  button: { marginTop: 24, alignItems: 'center', padding: 16, borderRadius: 12, backgroundColor: '#2563eb' },
  buttonDisabled: { opacity: 0.45 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});
