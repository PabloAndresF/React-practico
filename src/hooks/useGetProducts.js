import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, []);
    return products;
};

// fecth Api
// useEffect(async () => {
//     const controller = new AbortController();
//   const { signal } = controller;

//   try {
//       const response = await fetch(API, { signal });
//       const data = await response.json();

//       if (data) {
//           setProducts([...products, ...data]);
//           setLoading(false);
//       }
//   } catch (err) {
//       console.log('Error: ', err);
//   }

//   return () => controller.abort();
// }, []);



export default useGetProducts;
