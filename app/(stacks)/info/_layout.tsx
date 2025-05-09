import { Stack } from "expo-router";

export default function StackRoutesInformacoesGerais() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="contatos"
        options={{
          title: "Contatos",
        }}
      />

      <Stack.Screen 
        name="historia"
        options={{
          title: "História da Instituição",
        }}
      />

      <Stack.Screen 
        name="missaoEVisao"
        options={{
          title: "Missão e Visão",
        }}
      />

      <Stack.Screen 
        name="index"
        options={{
          title: "Informações Gerais",
        }}
      />

      </Stack>
    
  )
}