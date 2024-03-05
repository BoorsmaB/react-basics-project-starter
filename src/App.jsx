import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import Banner from "./components/ui/Banner";

export const App = () => {
  return (
    <ChakraProvider>
      <Flex direction="column" bg="blue.200" minHeight="100vh">
        <Box>
          <Banner />
        </Box>
        <Box mt={40}>
          <RecipeListPage />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
