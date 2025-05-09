import { Stack } from "expo-router";

export default function StackRoutesMobilidadeAcademica() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Mobilidade Acadêmica",
        }}
      />
      </Stack>
    
  )
}