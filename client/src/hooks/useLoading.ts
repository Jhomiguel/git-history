import { useEffect } from "react";
import { useLoadingContext } from "../contexts/loading/LoadingContext";

export const useLoading = (loading: boolean) => {
  const context = useLoadingContext();
  useEffect(() => {
    loading ? context?.showLoading() : context?.hideLoading();
  }, [loading]);
};
