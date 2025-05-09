import { Stack } from "expo-router";

export default function StackRoutesEducacaoArtisticaECultural() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: "Educação Artística e Cultural",
        }}
      />
      </Stack>
    
  )
}