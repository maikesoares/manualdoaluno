import { Stack } from "expo-router";

export default function StackRoutesLayoutCalendars2024() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="superior"
      />

      <Stack.Screen 
        name="medio"
      />

      <Stack.Screen 
        name="tecnico"
      />
      </Stack>
    
  )
}