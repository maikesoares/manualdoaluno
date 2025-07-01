import { Stack } from 'expo-router';

export default function StackRoutesEditarAuxilioEmergencial() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Auxilio Emergêncial',
        }}
      />
    </Stack>
  );
}
