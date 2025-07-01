import { Stack } from 'expo-router';

export default function StackRoutesEditarIncentivoAMobilidade() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Editar Incentivo a Mobilidade Acadêmica',
        }}
      />
    </Stack>
  );
}
