
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Card,
  Text,
  ProgressBar,
} from 'react-native-paper';

export default function StudyCard() {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.title}>
          Meus estudos
        </Text>

        <Text variant="bodySmall" style={styles.info}>
          Revise o que precisa ser feito!
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontWeight: 'bold',
    color: '#5B4B9A',
    marginBottom: 12,
  },
  progress: {
    height: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  info: {
    marginTop: 8,
    color: '#666666',
  },
});