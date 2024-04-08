import { useState } from "react";
import {
  Center,
  Heading,
  Box,
  Image,
  Text,
  VStack,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import SearchBar from "../components/SearchBar";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);
  const [isSmallerThan768, isBetween768and992, isBetween992and1200] =
    useMediaQuery([
      "(max-width: 767px)",
      "(min-width: 768px) and (max-width: 991px)",
      "(min-width: 992px) and (max-width: 1199px)",
    ]);

  const handleSearch = (searchTerm) => {
    const filtered = data.hits.filter((hit) => {
      return (
        hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hit.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        hit.recipe.cautions.some((caution) =>
          caution.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        hit.recipe.mealType.some((mealType) =>
          mealType.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });
    setFilteredRecipes(filtered);
  };

  const handleRecipeClick = (recipe) => {
    onSelectRecipe(recipe);
  };

  return (
    <Center flexDir="column" marginTop="auto">
      <Heading>Your Recipe App</Heading>
      <SearchBar onSearch={handleSearch} />
      <Grid
        templateColumns={
          isSmallerThan768
            ? "repeat(1, 1fr)"
            : isBetween768and992
            ? "repeat(2, 1fr)"
            : isBetween992and1200
            ? "repeat(3, 1fr)"
            : "repeat(5, 1fr)"
        }
        gap={6}
        mt={8}
        mb={8}
        minHeight="400px"
      >
        {filteredRecipes.map((hit, index) => (
          <Box
            key={index}
            h="100%"
            bg="whiteAlpha.700"
            borderRadius="md"
            boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
            p={4}
            cursor="pointer"
            onClick={() => handleRecipeClick(hit.recipe)}
            overflow="hidden"
          >
            <VStack spacing={2}>
              <Heading size="md">{hit.recipe.label}</Heading>
              <Box
                w="100%"
                h="300px"
                flex="none"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src={hit.recipe.image}
                  alt={hit.recipe.label}
                  minW="100%"
                  minH="100%"
                  objectFit="cover"
                />
              </Box>
              <Text>
                <strong>Diet Labels:</strong> {hit.recipe.dietLabels.join(", ")}
              </Text>
              <Text>
                <strong>Cautions:</strong>{" "}
                {hit.recipe.cautions.map((caution, index) => (
                  <Box
                    key={index}
                    as="span"
                    bg="red.200"
                    borderRadius="md"
                    px={2}
                    mr={2}
                  >
                    {caution}
                  </Box>
                ))}
              </Text>
              <Text>
                <strong>Meal Type:</strong>{" "}
                {hit.recipe.mealType.map((type, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </Text>
              <Text>
                <strong>Dish Type:</strong>{" "}
                {hit.recipe.dishType.map((type, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </Text>
              <strong>Health Labels:</strong>
              <VStack align="start" spacing={1}>
                <Box>
                  {hit.recipe.healthLabels.includes("Vegan") && (
                    <Box
                      display="inline-block"
                      bg="green.200" // Background color for Vegan label
                      color="green.800" // Text color for Vegan label
                      borderRadius="md"
                      p={1}
                      border="1px solid green.500" // Border color and width
                    >
                      <Text textAlign="center" fontSize="sm">
                        🌱Vegan
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box>
                  {hit.recipe.healthLabels.includes("Vegetarian") && (
                    <Box
                      display="inline-block"
                      bg="blue.200" // Background color for Vegetarian label
                      color="blue.800" // Text color for Vegetarian label
                      borderRadius="md"
                      p={1}
                      border="1px solid blue.500" // Border color and width
                    >
                      <Text textAlign="center" fontSize="sm">
                        🥦Vegetarian
                      </Text>
                    </Box>
                  )}
                </Box>
              </VStack>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Center>
  );
};

export default RecipeListPage;
