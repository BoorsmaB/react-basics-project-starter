import { useState } from "react";
import {
  Center,
  Heading,
  Box,
  Image,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import SearchBar from "../components/SearchBar";

export const RecipeListPage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  const handleSearch = (searchTerm) => {
    const filtered = data.hits.filter((hit) => {
      // Check if the recipe name or any health label contains the search term
      return (
        hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hit.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });
    setFilteredRecipes(filtered);
  };

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <SearchBar onSearch={handleSearch} />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={8}>
        {filteredRecipes.map((hit, index) => (
          <Box
            key={index}
            h="100%"
            bg="whiteAlpha.700"
            borderRadius="md"
            boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
            p={4}
          >
            <VStack spacing={2}>
              <Heading size="md">{hit.recipe.label}</Heading>
              <Image
                src={hit.recipe.image}
                alt={hit.recipe.label}
                borderRadius="md"
                maxW="100px"
                maxH="100px"
              />
              <Text>Diet Labels: {hit.recipe.dietLabels.join(", ")}</Text>
              <Text>Cautions: {hit.recipe.cautions.join(", ")}</Text>
              <Text>Meal Type: {hit.recipe.mealType.join(", ")}</Text>
              <Text>Dish Type: {hit.recipe.dishType.join(", ")}</Text>
              <Text>Health Labels:</Text>
              <VStack align="start" spacing={1}>
                {hit.recipe.healthLabels.includes("Vegan") && (
                  <Text>Vegan</Text>
                )}
                {hit.recipe.healthLabels.includes("Vegetarian") && (
                  <Text>Vegetarian</Text>
                )}
              </VStack>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Center>
  );
};
