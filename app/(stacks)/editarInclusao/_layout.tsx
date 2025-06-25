import { Stack } from 'expo-router';

export default function StackRoutesEditarInclusaoDigital() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Inclusão Digital',
        }}
      />
    </Stack>
  );
}
