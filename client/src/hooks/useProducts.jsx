import React, { useCallback, useEffect, useMemo, useState } from "react";
import { productServices } from "../api/services";

export default function useProducts() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const products = await productServices.getProducts();
      setProducts(products);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const getProductByName = useCallback(
    (name) => {
      if (!name.trim()) return "Enter a search term";

      try {
        const regex = new RegExp(name, "i"); // 'i' flag for case-insensitive matching
        const product = products.find((product) => regex.test(product.name));
        return product ? product.name : "Product not found";
      } catch {
        // Handle invalid regex patterns
        return "Invalid search pattern";
      }
    },
    [products]
  );

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);

  const handleProductSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return {
    products,
    search,
    isLoading,
    error,
    getProductByName,
    totalPrice,
    handleProductSearch,
  };
}
