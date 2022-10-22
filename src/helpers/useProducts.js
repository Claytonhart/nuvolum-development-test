import { useQuery } from 'react-query';

export function useProducts() {
  const productsData = useQuery(['products'], () =>
    fetch(`https://fakestoreapi.com/products?limit=3`).then((res) => res.json())
  );

  return productsData;
}

// https://fakestoreapi.com/products?limit=6
