
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=5')
      .then(res => res.json())
      .then(dados => setUsuarios(dados.users))
      .catch(() => alert('Erro ao buscar usuários'))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.titulo}>
        Comunidade de Estudos
      </Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#5B4B9A" />
      ) : (
        usuarios.map(item => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">
                {item.firstName} {item.lastName}
              </Text>
              <Text>{item.email}</Text>
              <Text>Idade: {item.age} anos</Text>
            </Card.Content>
          </Card>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  titulo: {
    color: '#5B4B9A',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
});
