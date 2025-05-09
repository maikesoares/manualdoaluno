import { Stack } from "expo-router";

export default function StackRoutesIncentivoACidadania() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Incentivo a Cidadania",
        }}
      />
      </Stack>
    
  )
}