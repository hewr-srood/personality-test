import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { COLORS } from '../src/config';
export const unstable_settings = {
  initialRouteName: 'home/index',
};
export default function Layout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: 10 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
