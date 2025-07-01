import { Stack } from 'expo-router';

export default function StackRoutesEditarEstudantesIngressantes() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Integração dos Estudantes Ingressantes',
        }}
      />
    </Stack>
  );
}
