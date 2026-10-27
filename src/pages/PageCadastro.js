
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, Text, TextInput, Button } from 'react-native-paper';
import { useAuthService } from '../services/useAuthService';

export default function PageCadastro() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  });

  const [carregando, setCarregando] = useState(false);
  const { cadastrarEmailSenha } = useAuthService();

  async function cadastrar() {
    if (!usuario.nome.trim() || !usuario.email.trim() ||
        !usuario.telefone.trim() || !usuario.senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    setCarregando(true);

    try {
      await cadastrarEmailSenha(
        usuario.nome.trim(),
        usuario.email.trim(),
        usuario.senha,
        usuario.telefone.trim()
      );

      Alert.alert(
        'Cadastro realizado',
        'Confira seu e-mail para confirmar a conta.'
      );
    } catch (erro) {
      Alert.alert('Erro no cadastro', erro.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium" style={styles.titulo}>
            Criar conta
          </Text>

          <TextInput
            label="Nome"
            value={usuario.nome}
            onChangeText={texto =>
              setUsuario({ ...usuario, nome: texto })
            }
            style={styles.campo}
          />

          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={usuario.email}
            onChangeText={texto =>
              setUsuario({ ...usuario, email: texto })
            }
            style={styles.campo}
          />

          <TextInput
            label="Telefone"
            keyboardType="phone-pad"
            value={usuario.telefone}
            onChangeText={texto =>
              setUsuario({ ...usuario, telefone: texto })
            }
            style={styles.campo}
          />

          <TextInput
            label="Senha"
            secureTextEntry
            value={usuario.senha}
            onChangeText={texto =>
              setUsuario({ ...usuario, senha: texto })
            }
            style={styles.campo}
          />

          <Button
            mode="contained"
            onPress={cadastrar}
            loading={carregando}
            disabled={carregando}
          >
            Cadastrar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FA',
    padding: 20,
    paddingTop: 50
  },
  card: {
    backgroundColor: 'white',
    padding: 10
  },
  titulo: {
    color: '#5B4B9A',
    fontWeight: 'bold',
    marginBottom: 20
  },
  campo: {
    marginBottom: 15
  }
});
