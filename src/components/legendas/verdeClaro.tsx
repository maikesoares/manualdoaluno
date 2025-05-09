import React from "react";
import { View, Text, StyleSheet } from "react-native";


const LegendaVerdeClaro = () => {
  return(
    <View style={styles.legendaContainer}>
    <View style={styles.legenda}></View>
    <Text>Reunião de pais/conselho de classe</Text>
  </View>
  )
}

const styles = StyleSheet.create({

  legendaContainer: {
    display:"flex", 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 5,
    marginTop: 8,
  },
    legenda: {
      backgroundColor:'#84f875', 
      width: 10, 
      height: 10
    }
});

export {LegendaVerdeClaro};