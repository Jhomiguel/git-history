import { useContext, createContext, PropsWithChildren, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadingContextProps {
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextProps | null>(null);
export const useLoadingContext = () => useContext(LoadingContext);

const LoadingContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const showLoading = () => setOpen(true);
  const hideLoading = () => setOpen(false);

  return (
    <LoadingContext.Provider value={{ hideLoading, showLoading }}>
      {props.children}
      {open && <CircularProgress />}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
