import useAuthStore from '@/store/authStore';
import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import './global.css';
Sentry.init({
  dsn: 'https://cb7be8bb5da490d9e3c312f176c3d30d@o4509666941796352.ingest.us.sentry.io/4509666957524992',
  sendDefaultPii: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],
});
export default Sentry.wrap(function RootLayout() {
  const { isLoading,fetchAuthenticatedUser} = useAuthStore();
  const [fontsLoaded, error] = useFonts({
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
  });
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);
  if (!fontsLoaded || isLoading) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }}/>;
});