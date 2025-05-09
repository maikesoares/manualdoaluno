import { Stack } from "expo-router";

export default function StackRoutesAtencaoASaude() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Atenção a Saúde",
        }}
      />
      </Stack>
    
  )
}