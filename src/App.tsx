import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { ColorModeProvider } from "./components/ui/color-mode";
import system from "./config/theme";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <HomePage />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
