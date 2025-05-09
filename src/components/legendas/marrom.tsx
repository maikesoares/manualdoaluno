import React from "react";
import { View, Text, StyleSheet } from "react-native";


const LegendaMarrom = () => {
  return(
    <View style={styles.legendaContainer}>
    <View style={styles.legenda}></View>
    <Text>Dia escolar</Text>
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
      backgroundColor:'#2e1a08b2', 
      width: 10, 
      height: 10
    }
});

export {LegendaMarrom};