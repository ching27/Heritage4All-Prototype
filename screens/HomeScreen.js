import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heritage4All</Text>
      <Button title="Explore Exhibits" onPress={() => navigation.navigate('Exhibit')} />
      <Button title="Saved Exhibits" onPress={() => navigation.navigate('Saved')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:28, fontWeight:'bold', marginBottom:20 }
});
