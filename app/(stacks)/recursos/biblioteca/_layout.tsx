import { Stack } from "expo-router";

export default function StackRoutesBiblioteca() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Biblioteca",
        }}
      />
      </Stack>
    
  )
}