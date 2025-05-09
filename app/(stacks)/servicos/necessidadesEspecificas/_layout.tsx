import { Stack } from "expo-router";

export default function StackRoutesNecessidadesEspecificas() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Necessidades Específicas",
        }}
      />
      </Stack>
    
  )
}