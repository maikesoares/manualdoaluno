import { Stack } from 'expo-router';

export default function StackRoutesEditarSegurancaAlimentar() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Segurança Alimentar',
        }}
      />
    </Stack>
  );
}
