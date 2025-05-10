import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadScreen() {
  const pickVideo = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    if (result.type === 'success') {
      alert('Video selected: ' + result.name);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Select a video to upload:</Text>
      <Button title="Pick Video" onPress={pickVideo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});