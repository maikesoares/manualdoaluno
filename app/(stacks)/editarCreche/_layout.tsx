import { Stack } from 'expo-router';

export default function StackRoutesEditarCrecheEscola() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Programa Creche Escola',
        }}
      />
    </Stack>
  );
}
