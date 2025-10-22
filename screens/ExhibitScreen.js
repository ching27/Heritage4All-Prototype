import React, { useState } from 'react';
import { View, Button, FlatList, Alert } from 'react-native';
import ExhibitCard from '../components/ExhibitCard';
import exhibits from '../data/exhibits.json';
import { saveFavorite } from '../utils/storage';

export default function ExhibitScreen() {
  const [currentExhibits, setCurrentExhibits] = useState(exhibits);

  const scanNFC = () => {
    Alert.alert("NFC Scanned", "Simulated NFC scan");
    setCurrentExhibits([exhibits[0]]); // 模擬掃描第一個展品
  };

  return (
    <View style={{ flex:1 }}>
      <Button title="Scan NFC Tag (simulate)" onPress={scanNFC} />
      <FlatList
        data={currentExhibits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ExhibitCard exhibit={item} onFavorite={saveFavorite} />}
      />
    </View>
  );
}
