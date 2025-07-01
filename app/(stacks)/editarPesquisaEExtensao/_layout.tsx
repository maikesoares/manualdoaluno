import { Stack } from 'expo-router';

export default function StackRoutesEditarPesquisaEExtensao() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Incentivo a Pesquisa e Extensão',
        }}
      />
    </Stack>
  );
}
