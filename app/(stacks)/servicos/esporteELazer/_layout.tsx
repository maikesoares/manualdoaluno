import { Stack } from "expo-router";

export default function StackRoutesEsporteELazer() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Esporte e Lazer",
        }}
      />
      </Stack>
    
  )
}