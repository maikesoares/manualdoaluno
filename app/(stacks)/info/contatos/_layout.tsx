import { Stack } from "expo-router";

export default function StackRoutesContatos() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Contatos Principais",
        }}
      />
      </Stack>
    
  )
}