import { Stack } from 'expo-router';

export default function StackRoutesEditarIncentivoAoEsporteELazer() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Incentivo ao Esporte e Lazer',
        }}
      />
    </Stack>
  );
}
