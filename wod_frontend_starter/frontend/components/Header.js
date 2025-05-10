import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 60, padding: 15, backgroundColor: 'red' },
  headerText: { color: 'white', fontSize: 20, textAlign: 'center' },
});