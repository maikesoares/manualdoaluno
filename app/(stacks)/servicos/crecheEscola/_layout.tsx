import { Stack } from "expo-router";

export default function StackRoutesCrecheEscola() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Creche - Escola",
        }}
      />
      </Stack>
    
  )
}