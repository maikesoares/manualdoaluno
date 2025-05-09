import { Stack } from "expo-router";

export default function StackRoutesEducacaoDiversidade() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Educação para a Diversidade",
        }}
      />
      </Stack>
    
  )
}