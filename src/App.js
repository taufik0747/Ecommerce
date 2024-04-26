// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <FavoritesProvider>
        <CartProvider>
          <AppNavigator />
        </CartProvider>
      </FavoritesProvider>
    </NavigationContainer>
  );
};

export default App;
