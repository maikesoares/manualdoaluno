import { Stack } from 'expo-router';

export default function StackRoutesEditarAtencaoASaude() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Atenção a Saúde',
        }}
      />
    </Stack>
  );
}
