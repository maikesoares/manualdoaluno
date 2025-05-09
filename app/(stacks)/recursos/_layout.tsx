import { Stack } from "expo-router";

export default function StackRoutesRecursos() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Recursos'
        }}
      />

      <Stack.Screen 
        name="biblioteca"
        options={{
          title: 'Biblioteca'
        }}
      />

      <Stack.Screen 
        name="laboratorio"
        options={{
          title: 'Laboratório'
        }}
      />

      </Stack>
    
  )
}