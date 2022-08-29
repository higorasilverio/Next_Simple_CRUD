import { useCallback, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  return {
    loading,
    stopLoading,
    startLoading,
  };
};
