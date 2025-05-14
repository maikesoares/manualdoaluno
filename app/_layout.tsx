import { Stack } from 'expo-router';

export default function StackRoutesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="(stacks)" />
    </Stack>
  );
}
