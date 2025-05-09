import React from "react";
import { View, Text, StyleSheet } from "react-native";


const LegendaAmarela = () => {
  return(
    <View style={styles.legendaContainer}>
    <View style={styles.legenda}></View>
    <Text>Sábado letivo</Text>
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
      backgroundColor:'#c0bd13', 
      width: 10, 
      height: 10
    }
});

export {LegendaAmarela};