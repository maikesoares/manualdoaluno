import { Stack } from "expo-router";

export default function StackRoutesAcompanhamentoSocial() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Acompanhamento Social",
        }}
      />
      </Stack>
    
  )
}