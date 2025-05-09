import { Stack } from "expo-router";

export default function StackRoutesLaboratorio() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Laboratórios",
        }}
      />
      </Stack>
    
  )
}