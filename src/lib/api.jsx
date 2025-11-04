import { useEffect, useState } from "react";

const BASE_URL = "http://dani23g52.web.techcollege.dk";

export function useCategories({ includeProducts = false, search } = {}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const url = new URL("/api/Categories", BASE_URL);
        if (includeProducts !== undefined && includeProducts !== null && includeProducts !== "") {
          url.searchParams.set("includeProducts", includeProducts);
        }
        if (search !== undefined && search !== null && search !== "") {
          url.searchParams.set("q", search);
        }
        const response = await fetch(url.toString(), { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const result = await response.json();
        setData(Array.isArray(result) ? result : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("A Error Was Accoured (categories)", err);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [includeProducts, search]);

  return { data, error, isLoading };
}

export function useProducts({ categoryId, pageNumber = 1, pageSize = 12 } = {}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const url = new URL("/api/Products", BASE_URL);
        if (categoryId !== undefined && categoryId !== null && categoryId !== "") {
          url.searchParams.set("categoryId", categoryId);
        }
        if (pageNumber !== undefined && pageNumber !== null && pageNumber !== "") {
          url.searchParams.set("pageNumber", pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null && pageSize !== "") {
          url.searchParams.set("pageSize", pageSize);
        }
        const response = await fetch(url.toString(), { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const result = await response.json();
        setData(Array.isArray(result) ? result : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("A Error Was Accoured (products)", err);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [categoryId, pageNumber, pageSize]);

  return { data, error, isLoading };
}

export function useProduct(productId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  if (!productId) return;
    const controller = new AbortController();
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
  const url = new URL(`/api/Products/${productId}`, BASE_URL);
        const response = await fetch(url.toString(), { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("A Error Was Accoured (product)", err);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [productId]);

  return { data, error, isLoading };
}
