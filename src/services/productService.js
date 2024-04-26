import axios from 'axios';

const BASE_URL= 'https://dummyjson.com/products';

export const getAllProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data.products; // Assuming the API returns products under this key
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };