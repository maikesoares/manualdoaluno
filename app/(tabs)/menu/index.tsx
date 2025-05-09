import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import useMenuToggle from '~/src/hooks/useMenuToggle';
import { tintColorBackGround } from '~/src/constants/colors';
import Sidebar from '~/src/components/sideBar';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GridItems from '~/src/components/gridItems';

const HomeScreen: React.FC = () => {
  const { isOpen, animatedValue, toggleMenu, expandedItem, handleItemPress } = useMenuToggle();
  const backgroundImage = require('~/assets/backGround.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Sidebar
          animatedValue={animatedValue}
          isOpen={isOpen}
          handleItemPress={handleItemPress}
          expandedItem={expandedItem}
        />

        <Header toggleMenu={toggleMenu} />
        <GridItems />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
    marginTop: 30,
    gap: 10,
  },

  container: {
    flex: 1,
    backgroundColor: tintColorBackGround,
    position: 'relative',
  },
});

export default HomeScreen;
