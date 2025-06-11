import { Stack } from 'expo-router';

export default function StackRoutesEditarHistoria() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar História',
        }}
      />
    </Stack>
  );
}
