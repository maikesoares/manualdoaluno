import { Stack } from 'expo-router';

export default function StackRoutesEditarApoio() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Apoio Estudantil',
        }}
      />
    </Stack>
  );
}
