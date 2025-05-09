import { Stack } from "expo-router";

export default function StackRoutesIntegracaoDosEstudantes() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Integração dos Estudantes",
        }}
      />
      </Stack>
    
  )
}