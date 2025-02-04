import { Text, View, StyleSheet } from "react-native";
import RideList from "../src/components/RideList";

export default function Index() {
  return (
    <View style={{ flex: 1 }}> {/* Ensure full height */}
      <View style={styles.header}>
        <Text style={styles.t}>Drive</Text>
      </View>
      <RideList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60, // Fixed height for header
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  t: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
