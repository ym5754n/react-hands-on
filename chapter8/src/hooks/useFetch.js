import { useState, useEffect } from "react";
import { useMountedRef } from "./useMountedRef";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const mounted = useMountedRef();

  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;
    fetch(uri)
      .then(data => {
        if (!mounted.current) throw new Error("component is not mounted");
        return data;
      })
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(error => {
        if (!mounted.current) return;
        setError(error);
      });
  }, [uri, mounted]);

  return { loading, data, error };
}