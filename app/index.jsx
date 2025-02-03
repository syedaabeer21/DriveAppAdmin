import { Text, View, StyleSheet } from "react-native";
import RideList from "../src/components/RideList";

export default function Index() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.t}>riderApp</Text>
        </View>
      <RideList/>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      alignItems: 'center',
      backgroundColor:'blue',
    },
    t: {
    color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
  }
  }
)
