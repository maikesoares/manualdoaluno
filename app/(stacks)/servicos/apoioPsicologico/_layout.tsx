import { Stack } from "expo-router";

export default function StackRoutesApoioPsicológico() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Apoio Psicológico",
        }}
      />
      </Stack>
    
  )
}