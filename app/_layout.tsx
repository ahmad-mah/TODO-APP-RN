import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home Club' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  )
}
