
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PaperProvider, ActivityIndicator } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase-init';
import LoginStackNavigator from './src/navigation/LoginStackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, usuarioAtual => {
      setUsuario(usuarioAtual?.emailVerified ? usuarioAtual : null);
      setCarregando(false);
    });

    return cancelar;
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <PaperProvider>
          {carregando ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <NavigationContainer>
              {usuario ? (
                <DrawerNavigator />
              ) : (
                <LoginStackNavigator />
              )}
            </NavigationContainer>
          )}
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
