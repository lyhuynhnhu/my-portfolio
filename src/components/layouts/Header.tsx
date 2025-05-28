import { Box, Button, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { NAV_ITEMS } from "../../constants/nav";
import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      as="nav"
      bg={colorMode === "dark" ? "brand.900" : "white"}
      py={4}
      px={{ base: 4, md: 8 }}
      position="sticky"
      top="0"
      zIndex="sticky"
      boxShadow="sm"
      className="backdrop-filter backdrop-blur-lg bg-opacity-80"
    >
      <Flex maxW="7xl" mx="auto" justifyContent="space-between" alignItems="center">
        <HStack spaceX={2}>
          <Text fontSize="2xl" fontWeight="bold" color="brand.500">
            L.N
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            Ly Huynh Nhu
          </Text>
        </HStack>
        <HStack spaceX={4} paddingX={4} display={{ base: "none", md: "flex" }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} fontWeight="medium">
              {item.label}
            </Link>
          ))}
        </HStack>
        <HStack spaceX={2}>
          <IconButton aria-label="Toggle dark mode" onClick={toggleColorMode} variant="ghost">
            {colorMode === "dark" ? <Sun /> : <Moon />}
          </IconButton>
          {/* Language switcher placeholder */}
          <Button variant="ghost" size="sm">
            <Globe size={16} /> EN <ChevronDown size={16} />
          </Button>
          <IconButton
            aria-label="Open menu"
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            variant="ghost"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
