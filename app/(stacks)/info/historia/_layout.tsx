import { Stack } from "expo-router";

export default function StackRoutesHistoria() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "História da Instituição",
        }}
      />
      </Stack>
    
  )
}