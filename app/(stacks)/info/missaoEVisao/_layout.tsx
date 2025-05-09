import { Stack } from "expo-router";

export default function StackRoutesMissaoEVisao() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Missão e Visão",
        }}
      />
      </Stack>
    
  )
}