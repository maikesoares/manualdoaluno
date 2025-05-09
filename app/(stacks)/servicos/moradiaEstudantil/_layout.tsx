import { Stack } from "expo-router";

export default function StackRoutesMoradiaEstudantil() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Moradia Estudantil",
        }}
      />
      </Stack>
    
  )
}