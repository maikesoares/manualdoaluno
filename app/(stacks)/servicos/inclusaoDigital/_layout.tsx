import { Stack } from "expo-router";

export default function StackRoutesInclusaoDigital() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Inclusão Digital",
        }}
      />
      </Stack>
    
  )
}