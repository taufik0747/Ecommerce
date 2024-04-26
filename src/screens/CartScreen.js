// src/screens/CartScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default CartScreen;
