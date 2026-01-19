import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toaster } from 'sonner-native';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';
import db from '@/db/initDb';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const _ = useMigrations(db, migrations)

  return (
    <SafeAreaProvider>
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'dark']}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Stack 
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_bottom',
            gestureEnabled: true,
          }}
          >
          <Stack.Screen name='index' />
          <Stack.Screen name='new_channel' />
        </Stack>
        <Toaster />
        <PortalHost />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
