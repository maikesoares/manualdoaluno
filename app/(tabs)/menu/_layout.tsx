import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { tintColorBlack, tintColorGreenDark } from '~/src/constants/colors';

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          ),
          tabBarActiveTintColor: tintColorGreenDark,
          tabBarInactiveTintColor: tintColorBlack,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={32} color={color} />,
          tabBarActiveTintColor: tintColorGreenDark,
          tabBarInactiveTintColor: tintColorBlack,
        }}
      />

      <Tabs.Screen
        name="recursos"
        options={{
          title: 'Recursos',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="support" size={size} color={color} />
          ),
          tabBarActiveTintColor: tintColorGreenDark,
          tabBarInactiveTintColor: tintColorBlack,
        }}
      />
    </Tabs>
  );
}
