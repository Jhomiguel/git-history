import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import LoadingContextProvider from "./contexts/loading/LoadingContext";
import CommitHistoryPage from "./pages/CommitHistory";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error) => console.log(error),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CommitHistoryPage />} />
          </Routes>
        </BrowserRouter>
      </LoadingContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
