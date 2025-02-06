import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Gallery from "./Components/Gallery";
import SearchForm from "./Components/SearchForm";
import ThemeToggle from "./Components/ThemeToggle";

const queryClient = new QueryClient();

const App = () => {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </QueryClientProvider>
    </main>
  );
};
export default App;
