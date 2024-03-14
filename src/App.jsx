import { useState } from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import Banner from "./components/ui/Banner";
import RecipePage from "./pages/RecipePage"; // Import RecipePage component

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to store selected recipe

  // Function to handle selecting a recipe
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle deselecting a recipe
  const handleRecipeDeselect = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      <Flex direction="column" bg="blue.200" minHeight="250vh">
        <Box>
          <Banner />
        </Box>
        <Box mt={650}>
          {selectedRecipe ? (
            <RecipePage
              recipe={selectedRecipe}
              onReturn={handleRecipeDeselect}
            />
          ) : (
            <RecipeListPage onSelectRecipe={handleRecipeSelect} />
          )}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
