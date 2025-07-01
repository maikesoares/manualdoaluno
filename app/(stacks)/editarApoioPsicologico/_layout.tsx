import { Stack } from 'expo-router';

export default function StackRoutesEditarApoioPsicologico() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Apoio Psicologico',
        }}
      />
    </Stack>
  );
}
