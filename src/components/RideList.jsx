import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, Alert, StyleSheet } from "react-native";
import { db } from "../config/firebaseConfig";
import { collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { MaterialIcons } from "@expo/vector-icons"; 

const RideList = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
   
    const q = query(collection(db, "rides"), where("status", "==", "pending"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const rideData = [];
      querySnapshot.forEach((doc) => {
        rideData.push({ id: doc.id, ...doc.data() });
      });
      setRides(rideData);
    });

    return () => unsubscribe(); 
  }, []);

 
  const acceptRide = async (rideId) => {
    const rideRef = doc(db, "rides", rideId);
    await updateDoc(rideRef, { status: "completed" });
    Alert.alert("Ride Accepted", "This ride has been marked as completed.", [
      { text: "OK" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Rides</Text>

      {rides.length === 0 ? (
        <Text style={styles.noRidesText}>No rides available right now</Text>
      ) : (
        <FlatList
          data={rides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.rideCard}>
              <View style={styles.rideInfo}>
                <Text style={styles.rideText}>
                  <MaterialIcons name="location-on" size={18} /> Pickup: {item.pickup}
                </Text>
                <Text style={styles.rideText}>
                  <MaterialIcons name="location-on" size={18} /> Destination: {item.destination}
                </Text>
                <Text style={styles.rideText}>
                  <MaterialIcons name="attach-money" size={18} /> Fare: Rs {item.fare}
                </Text>
              </View>
              <Button title="Accept Ride" color="#4CAF50" onPress={() => acceptRide(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  rideCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  rideInfo: {
    marginBottom: 10,
  },
  rideText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  noRidesText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default RideList;
