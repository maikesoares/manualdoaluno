import { Stack } from "expo-router";

export default function StackRoutesLayout() {
  return (
    <Stack screenOptions={{ headerShown: true}}>
      <Stack.Screen 
        name="calendar2024"
        options={{
          title: "Calendário Acadêmico",
        }}
      />

      <Stack.Screen 
        name="calendar2025"
        options={{
          title: "Calendário Acadêmico",
        }}
      />

      <Stack.Screen 
        name="info"
        options={{
          title: "Informações Gerais",
        }}
      />

      <Stack.Screen 
        name="recursos"
        options={{
          title: "Recursos Acadêmicos",
        }}
      />

      <Stack.Screen 
        name="servicos"
        options={{
          title: "Serviços de Apoio ao Estudante",
        }}
      />
    </Stack>
    
  )
}