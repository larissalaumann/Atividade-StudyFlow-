
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  );
}