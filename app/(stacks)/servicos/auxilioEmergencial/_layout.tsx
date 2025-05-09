import { Stack } from "expo-router";

export default function StackRoutesAuxilioEmergencial() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Auxílio Emergêncial",
        }}
      />
      </Stack>
    
  )
}