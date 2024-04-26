// src/screens/ProductDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import axios from 'axios';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images ? product.images[0] : '' }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      <Button title="Add to Favorites" onPress={() => addToFavorites(product)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
});

export default ProductDetailsScreen;
