import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipe, onReturn }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      maxW="1200px"
      mx="auto"
      bg="whiteAlpha.400"
      marginTop={10}
    >
      {" "}
      <IconButton
        aria-label="Return to recipe list"
        icon={<ArrowBackIcon />}
        onClick={onReturn}
        alignSelf="flex-start"
        mb={4}
      />
      <Heading as="h2" size="lg" mb={4}>
        {recipe.label}
      </Heading>
      <Image src={recipe.image} alt={recipe.label} mb={4} borderRadius="md" />
      <VStack align="start" spacing={2}>
        <Text>
          <strong>Meal Type:</strong>{" "}
          {recipe.mealType.map((type, index) => (
            <span key={index}>
              {index > 0 && ", "}
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </Text>
        <Text>
          <strong>Dish Type:</strong>{" "}
          {recipe.dishType.map((type, index) => (
            <span key={index}>
              {index > 0 && ", "}
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </Text>
        <Text>
          <strong>Total Cooking Time:</strong> {recipe.totalTime} minutes
        </Text>
        <Text>
          <strong>Diet Label:</strong> {recipe.dietLabels.join(", ")}
        </Text>
        <Text>
          <strong>Health Labels:</strong>{" "}
          {recipe.healthLabels.map((label, index) => (
            <Box
              key={index}
              as="span"
              bg="yellow.100"
              color="yellow.800"
              borderRadius="md"
              p={0.5}
              margin={0.5}
              border="1px solid yellow.500"
            >
              {label}
            </Box>
          ))}
        </Text>
        <Text>
          <strong>Cautions:</strong>{" "}
          {recipe.cautions.map((caution, index) => (
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
          <strong>Ingredients:</strong>
        </Text>
        <VStack align="start" spacing={1}>
          {recipe.ingredientLines.map((ingredient, index) => (
            <Text key={index}>{ingredient}</Text>
          ))}
        </VStack>
        <Text>
          <strong>Servings:</strong> {recipe.yield}
        </Text>
        <Text>
          <strong>Total Nutrients:</strong>
        </Text>
        <VStack align="start" spacing={1}>
          <Text>
            <strong>Energy:</strong>{" "}
            {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} kcal
          </Text>
          <Text>
            <strong>Protein:</strong>{" "}
            {recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g
          </Text>
          <Text>
            <strong>Fat:</strong>{" "}
            {recipe.totalNutrients.FAT.quantity.toFixed(2)} g
          </Text>
          <Text>
            <strong>Carbs:</strong>{" "}
            {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g
          </Text>
          <Text>
            <strong>Cholesterol:</strong>{" "}
            {recipe.totalNutrients.CHOLE.quantity.toFixed(2)} mg
          </Text>
          <Text>
            <strong>Sodium:</strong>{" "}
            {recipe.totalNutrients.NA.quantity.toFixed(2)} mg
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default RecipePage;
