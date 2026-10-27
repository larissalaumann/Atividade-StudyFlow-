
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Card, Text, TextInput, Button } from 'react-native-paper';
import { useAuthService } from '../services/useAuthService';

export default function PageLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  const { loginEmailSenha, recuperarSenha } = useAuthService();

  async function entrar() {
    if (!email.trim() || !senha) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }

    setCarregando(true);

    try {
      await loginEmailSenha(email.trim(), senha);
    } catch (erro) {
      Alert.alert('Erro no login', erro.message);
    } finally {
      setCarregando(false);
    }
  }

  async function recuperar() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Digite seu e-mail primeiro.');
      return;
    }

    try {
      await recuperarSenha(email.trim());
      Alert.alert('Pronto', 'Se o e-mail estiver cadastrado, você receberá as instruções.');
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível solicitar a recuperação.');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium" style={styles.titulo}>
            StudyFlow
          </Text>

          <TextInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.campo}
          />

          <TextInput
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.campo}
          />

          <Button
            mode="contained"
            onPress={entrar}
            loading={carregando}
            disabled={carregando}
          >
            Entrar
          </Button>

          <Button onPress={recuperar}>
            Esqueci minha senha
          </Button>

          <Button onPress={() => navigation.navigate('Cadastro')}>
            Criar conta
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
    paddingTop: 70
  },
  card: {
    backgroundColor: 'white',
    padding: 10
  },
  titulo: {
    color: '#5B4B9A',
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center'
  },
  campo: {
    marginBottom: 15
  }
});
