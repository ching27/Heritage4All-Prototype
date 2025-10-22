import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ExhibitCard from '../components/ExhibitCard';
import { getFavorites } from '../utils/storage';

export default function SavedScreen() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favs = await getFavorites();
      setFavorites(favs);
    };
    fetchFavorites();
  }, []);

  if(favorites.length === 0){
    return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>No saved exhibits yet.</Text></View>
  }

  return (
    <View style={{ flex:1 }}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ExhibitCard exhibit={item} onFavorite={() => {}} />}
      />
    </View>
  );
}
