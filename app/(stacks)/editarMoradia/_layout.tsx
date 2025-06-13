import { Stack } from 'expo-router';

export default function StackRoutesEditarMoradia() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Moradia Estudantil',
        }}
      />
    </Stack>
  );
}
