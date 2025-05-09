import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { tintColorGreenMedium, tintColorWhite } from '~/src/constants/colors';

type Prop = {
  onPress: () => void;
  labelButton: string;
  activeOpacity?: number;
};

const Button: React.FC<Prop> = ({ onPress, labelButton, activeOpacity = 0.7 }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={activeOpacity}>
      <Text style={styles.textInput}>{labelButton}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    width: 120,
    padding: 10,
    backgroundColor: tintColorGreenMedium,
    borderRadius: 4,
    alignItems: 'center',
  },

  textInput: {
    fontSize: 16,
    color: tintColorWhite,
  },
});
