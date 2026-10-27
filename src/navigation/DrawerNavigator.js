
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase-init';
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios';
import PagePerfil from '../pages/PagePerfil';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#5B4B9A',
        drawerActiveTintColor: '#5B4B9A',
        headerRight: () => (
          <Button onPress={() => signOut(auth)}>
            Sair
          </Button>
        )
      }}
    >
      <Drawer.Screen
        name="Início"
        component={Home}
      />

      <Drawer.Screen
        name="Comunidade de Estudos"
        component={Usuarios}
      />

      <Drawer.Screen
        name="Meu Perfil"
        component={PagePerfil}
      />
    </Drawer.Navigator>
  );
}
