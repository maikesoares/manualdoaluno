import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { tintColorBlack } from '~/src/constants/colors';

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={toggleMenu}
        accessibilityLabel="Abrir menu"
        accessibilityHint="Pressione para abrir ou fechar o menu lateral.">
        <Icon name="align-justify" size={24} color={tintColorBlack} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Manual do Aluno</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 11,
  },

  menuButton: {
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: tintColorBlack,
  },
});

export default Header;
