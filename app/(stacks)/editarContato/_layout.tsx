import { Stack } from 'expo-router';

export default function StackRoutesEditarContato() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Contato',
        }}
      />
    </Stack>
  );
}
