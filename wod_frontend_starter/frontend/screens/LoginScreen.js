import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} />
      <Text>Password:</Text>
      <TextInput style={styles.input} secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 8, marginVertical: 10 },
});