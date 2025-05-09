import { Stack } from "expo-router";

export default function StackRoutesPesquisaEExtensao() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Pesquisa e Extensãos",
        }}
      />
      </Stack>
    
  )
}