import { Stack } from 'expo-router';

export default function StackRoutesEditarAcompanhamentoSocial() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Acompanhamento Social',
        }}
      />
    </Stack>
  );
}
