import { Stack } from "expo-router";

export default function StackRoutesParticipacaoAEventos() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Participação a Eventos",
        }}
      />
      </Stack>
    
  )
}