import { useState } from 'react';
import { Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const useMenuToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const animatedValue = useState(new Animated.Value(-width))[0];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(animatedValue, {
      toValue: isOpen ? -width : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleItemPress = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return { isOpen, animatedValue, toggleMenu, expandedItem, handleItemPress };
};

export default useMenuToggle;
