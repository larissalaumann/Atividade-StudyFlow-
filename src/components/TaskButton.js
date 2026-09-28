
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function TaskButton() {
  return (
    <Button
      mode="contained"
      icon="plus"
      style={styles.button}
      contentStyle={styles.content}
      labelStyle={styles.label}
    >
      Nova atividade
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginTop: 12,
    backgroundColor: '#5B4B9A',
  },
  content: {
    height: 50,
  },
  label: {
    fontSize: 15,
  },
});