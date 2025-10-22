import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ExhibitCard({ exhibit, onFavorite }) {
  return (
    <View style={styles.card}>
      <Image source={exhibit.image} style={styles.image} />
      <Text style={styles.title}>{exhibit.title}</Text>
      <Text style={styles.desc}>{exhibit.desc}</Text>
      <Button title="Favorite" onPress={() => onFavorite(exhibit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { margin:10, padding:10, borderWidth:1, borderColor:'#ccc', borderRadius:8, backgroundColor:'#fff' },
  image: { width:'100%', height:150, borderRadius:8 },
  title: { fontSize:18, fontWeight:'bold', marginTop:5 },
  desc: { fontSize:14, marginTop:5 }
});
