import { Stack } from "expo-router";

export default function StackRoutesSegurancaAlimentar() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Segurança Alimentar",
        }}
      />
      </Stack>
    
  )
}