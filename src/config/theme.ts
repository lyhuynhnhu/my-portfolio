import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react";

const textRecipe = defineRecipe({
  base: {
    color: "brand.800",
    _dark: {
      color: "textPrimary",
    },
  },
});

const headingRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    color: "brand.900",
    _dark: {
      color: "brand.100",
    },
  },
});

const linkRecipe = defineRecipe({
  base: {
    color: "brand.500",
    _hover: {
      textDecoration: "underline",
      color: "brand.700",
    },
    _dark: {
      color: "brand.400",
      _hover: {
        color: "brand.100",
      },
    },
  },
});

const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "semibold",
    borderRadius: "md",
  },
  variants: {
    visual: {
      solid: {
        color: "white",
        bg: "brand.500",
        _hover: {
          bg: "brand.400",
        },
      },
      outline: {
        color: "brand.500",
        borderColor: "brand.500",
        _hover: {
          bg: "brand.500",
          color: "white",
        },
      },
    },
  },
});

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          900: { value: "#1a202c" }, // Dark background
          800: { value: "#2d3748" }, // Slightly lighter dark
          700: { value: "#4a5568" }, // Card background
          500: { value: "#3182ce" }, // Primary blue accent
          400: { value: "#4299e1" }, // Lighter blue
          100: { value: "#ebf8ff" }, // Lightest blue for text on dark
        },
        textPrimary: {
          value: "#E2E8F0", // Light gray for text
        },
        textSecondary: {
          value: "#A0AEC0", // Medium gray for secondary text
        },
      },
    },
    recipes: {
      text: textRecipe,
      heading: headingRecipe,
      link: linkRecipe,
      button: buttonRecipe,
    },
  },
  globalCss: {
    body: {
      bg: "gray.50",
      color: "brand.900",
      _dark: {
        bg: "brand.900",
        color: "textPrimary",
      },
    },
    "html, body": {
      scrollBehavior: "smooth",
    },
    "*::placeholder": {
      color: "gray.400",
      _dark: {
        color: "textSecondary",
      },
    },
    "*, *::before, *::after": {
      borderColor: "gray.200",
      _dark: {
        borderColor: "brand.700",
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
