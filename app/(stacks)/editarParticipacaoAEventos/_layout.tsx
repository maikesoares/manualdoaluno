import { Stack } from 'expo-router';

export default function StackRoutesEditarParticipacaoAEventos() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Incentivo a Participação a Eventos e Reuniões',
        }}
      />
    </Stack>
  );
}
