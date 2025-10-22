import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ExhibitScreen from './screens/ExhibitScreen';
import SavedScreen from './screens/SavedScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exhibit" component={ExhibitScreen} />
        <Stack.Screen name="Saved" component={SavedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
