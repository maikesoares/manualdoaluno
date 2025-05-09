import { Stack } from "expo-router";

export default function StackRoutesConceito() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Conceito",
        }}
      />
      </Stack>
    
  )
}