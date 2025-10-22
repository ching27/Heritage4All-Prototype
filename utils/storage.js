import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveFavorite(exhibit) {
  let existing = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
  // 避免重複收藏
  if(!existing.find(e => e.id === exhibit.id)){
    existing.push(exhibit);
    await AsyncStorage.setItem('favorites', JSON.stringify(existing));
  }
}

export async function getFavorites() {
  return JSON.parse(await AsyncStorage.getItem('favorites')) || [];
}
