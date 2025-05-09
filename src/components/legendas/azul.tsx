import React from "react";
import { View, Text, StyleSheet } from "react-native";


const LegendaAzul = () => {
  return(
    <View style={styles.legendaContainer}>
    <View style={styles.legenda}></View>
    <Text>Início e término dos períodos letivos</Text>
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
      backgroundColor:'#159da7', 
      width: 10, 
      height: 10
    }
});

export {LegendaAzul};