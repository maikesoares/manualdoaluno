import { Stack } from "expo-router";

export default function StackRoutesProgramaRenovar() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Programa Renovar",
        }}
      />
      </Stack>
    
  )
}