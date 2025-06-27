import { Stack } from 'expo-router';

export default function StackRoutesEditarDiversidade() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Programa Educação a Diversidade',
        }}
      />
    </Stack>
  );
}
