import { Stack } from 'expo-router';

export default function StackRoutesEditarLabs() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Laboratórios',
        }}
      />
    </Stack>
  );
}
