import React, { useState, useCallback, useEffect } from 'react';

type Args = {
  url: string;
  options: RequestInit;
};

type useFetchOutput = {
  data: any | null;
  loading: boolean;
  error: any | null;
  refetch: () => void;
};

const useFetch = ({ url, options }: Args): useFetchOutput => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    await fetch(url, options)
      .then((response) => setData(response.json()))
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url, options]);

  const refetch = useCallback(() => {
    setData(null);
    setError(null);
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const loadData = async () => fetchData();
    loadData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useFetch;
