import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import {
  tintColorGreenDark,
  tintColorGreenDarkOpacity,
  tintColorWhite,
} from '~/src/constants/colors';
import { MenuItem, SubItem } from '~/src/types/types';

interface MenuItemProps {
  item: MenuItem;
  handleItemPress: (id: string) => void;
  expandedItem: string | null;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item, handleItemPress, expandedItem }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => handleItemPress(item.id)}
        style={styles.menuItem}
        accessibilityLabel={item.title}
        accessibilityHint="Pressione para expandir ou recolher.">
        <Text style={styles.menuText}>{item.title}</Text>
      </TouchableOpacity>
      {expandedItem === item.id && (
        <FlatList
          data={item.subItems}
          renderItem={({ item }: { item: SubItem }) => (
            <TouchableOpacity
              style={styles.subItem}
              onPress={item.onPress}
              accessibilityLabel={item.title}
              accessibilityHint="Pressione para ver mais detalhes.">
              <Text style={styles.subItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(subItem) => subItem.id}
          style={styles.subItemsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    paddingVertical: 10,
    justifyContent: 'center',
  },

  menuText: {
    color: tintColorWhite,
    fontSize: 18,
    backgroundColor: tintColorGreenDark,
    padding: 10,
    borderRadius: 10,
  },

  subItemsContainer: {
    marginTop: 10,
  },

  subItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  subItemText: {
    color: tintColorWhite,
    fontSize: 16,
    backgroundColor: tintColorGreenDarkOpacity,
    padding: 6,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default MenuItemComponent;
