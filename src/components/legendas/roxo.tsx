import React from "react";
import { View, Text, StyleSheet } from "react-native";


const LegendaRoxa = () => {
  return(
    <View style={styles.legendaContainer}>
    <View style={styles.legenda}></View>
    <Text>Eventos</Text>
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
      backgroundColor:'#7108b8', 
      width: 10, 
      height: 10
    }
});

export {LegendaRoxa};