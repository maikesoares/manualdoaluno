import React from 'react';
import { FlatList, Animated, StyleSheet, Dimensions } from 'react-native';

import { tintColorBackGround } from '../../constants/colors';
import { menuItems } from '~/src/data/menuItems';
import { MenuItem } from '~/src/types/types';
import MenuItemComponent from '../menuItem';

interface SidebarProps {
  animatedValue: Animated.Value;
  isOpen: boolean;
  handleItemPress: (id: string) => void;
  expandedItem: string | null;
}

const { width } = Dimensions.get('window');

const Sidebar: React.FC<SidebarProps> = ({ animatedValue, handleItemPress, expandedItem }) => {
  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          transform: [{ translateX: animatedValue }],
          zIndex: 10,
        },
      ]}>
      <FlatList
        data={menuItems}
        renderItem={({ item }: { item: MenuItem }) => (
          <MenuItemComponent
            item={item}
            handleItemPress={handleItemPress}
            expandedItem={expandedItem}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.75,
    backgroundColor: tintColorBackGround,
    padding: 20,
    justifyContent: 'space-between',
    zIndex: 10,
    paddingTop: 80,
  },
});

export default Sidebar;
