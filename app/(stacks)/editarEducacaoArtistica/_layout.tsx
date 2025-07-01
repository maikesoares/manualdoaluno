import { Stack } from 'expo-router';

export default function StackRoutesEditarApoioAEducacaoArtistica() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Apoio a Educação Artística',
        }}
      />
    </Stack>
  );
}
