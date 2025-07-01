import { Stack } from 'expo-router';

export default function StackRoutesEditarFormacaoACidadania() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Formação a Cidadania',
        }}
      />
    </Stack>
  );
}
