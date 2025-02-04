import { Text, View, StyleSheet } from "react-native";
import RideList from "../src/components/RideList";
import { MaterialIcons } from "@expo/vector-icons"; // Icons for header branding

export default function Index() {
  return (
    <View style={{ flex: 1 }}> {/* Ensure full height */}
      <View style={styles.header}>
      <View style={styles.logoContainer}>
          <MaterialIcons name="directions-car" size={26} color="white" />
          <Text style={styles.t}>Drive</Text>
        </View>
      </View>
      <RideList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'purple',
    elevation: 5, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  t: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8, // Space between icon & text
  },
});
