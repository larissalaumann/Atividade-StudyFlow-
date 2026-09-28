
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import Header from '../components/Header';
import StudyCard from '../components/StudyCard';
import TaskButton from '../components/TaskButton';

export default function Home() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Header />

        <StudyCard />

        <Text variant="titleMedium" style={styles.section}>
          Próximas atividades
        </Text>

        <View style={styles.task}>
          <Text variant="bodyLarge">
            Redes de Computadores
          </Text>
        </View>

        <View style={styles.task}>
          <Text variant="bodyLarge">
            Programação
          </Text>
        </View>

        <TaskButton />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F5F3FA',
  },
  container: {
    padding: 24,
    paddingTop: 60,
  },
  section: {
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  task: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
});