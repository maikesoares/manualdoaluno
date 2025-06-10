import { Stack } from 'expo-router';

export default function StackRoutesAdmLogin() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Login ADM',
        }}
      />
    </Stack>
  );
}
