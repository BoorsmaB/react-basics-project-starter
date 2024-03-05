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

export const RecipeListPage = () => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={8}>
        {data.hits.map((hit, index) => (
          <Box
            key={index}
            h="100%"
            bg="whiteAlpha.700"
            borderRadius="md"
            boxShadow="0 1px 2px rgba(0, 0, 0, 0.5)"
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
