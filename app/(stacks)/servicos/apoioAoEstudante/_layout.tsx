import { Stack } from "expo-router";

export default function StackRoutesApoioAoEstudante() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Apoio ao Estudante",
        }}
      />
      </Stack>
    
  )
}