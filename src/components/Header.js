
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        StudyFlow
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    color: '#5B4B9A',
  },
  subtitle: {
    color: '#666666',
    marginTop: 4,
  },
});