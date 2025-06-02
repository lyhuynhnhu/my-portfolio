import { ThemeProvider } from "./context/theme-provider";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
