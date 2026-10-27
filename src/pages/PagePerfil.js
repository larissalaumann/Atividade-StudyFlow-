
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Avatar, ActivityIndicator } from 'react-native-paper';
import { doc, getDoc, collection } from 'firebase/firestore';

import { auth, db } from '../../firebase-init';
import { usuarioConverter } from '../model/Usuario';

export default function PagePerfil() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarPerfil() {
      try {
        const atual = auth.currentUser;

        if (!atual) {
          setErro('Nenhum usuário conectado.');
          return;
        }

        const usuariosRef = collection(db, 'Usuarios')
          .withConverter(usuarioConverter);

        const documento = await getDoc(
          doc(usuariosRef, atual.uid)
        );

        if (documento.exists()) {
          setUsuario(documento.data());
        } else {
          setErro('Perfil não encontrado.');
        }
      } catch (e) {
        setErro('Erro ao carregar o perfil.');
      } finally {
        setCarregando(false);
      }
    }

    buscarPerfil();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.titulo}>
        Meu Perfil
      </Text>

      {carregando ? (
        <ActivityIndicator size="large" />
      ) : erro ? (
        <Text>{erro}</Text>
      ) : (
        <Card style={styles.card}>
          <Card.Content>
            <Avatar.Icon
              size={70}
              icon="account"
              style={styles.avatar}
            />

            <Text variant="titleLarge" style={styles.nome}>
              {usuario.nome}
            </Text>

            <Text>E-mail: {usuario.email}</Text>
            <Text>Telefone: {usuario.telefone}</Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#F5F3FA'
  },
  titulo: {
    color: '#5B4B9A',
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    backgroundColor: 'white'
  },
  avatar: {
    backgroundColor: '#5B4B9A',
    alignSelf: 'center',
    marginBottom: 15
  },
  nome: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold'
  }
});
