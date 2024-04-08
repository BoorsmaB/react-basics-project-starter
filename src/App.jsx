import { useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
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
      <Flex direction="column" minHeight="100vh" bg="blue.200">
        <Banner />
        <Flex flex="1" overflowY="auto">
          {selectedRecipe ? (
            <RecipePage
              recipe={selectedRecipe}
              onReturn={handleRecipeDeselect}
            />
          ) : (
            <RecipeListPage onSelectRecipe={handleRecipeSelect} />
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
