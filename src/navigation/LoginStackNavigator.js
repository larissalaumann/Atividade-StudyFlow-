
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PageLogin from '../pages/PageLogin';
import PageCadastro from '../pages/PageCadastro';

const Stack = createNativeStackNavigator();

export default function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={PageLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={PageCadastro}
        options={{ title: 'Criar conta' }}
      />
    </Stack.Navigator>
  );
}
