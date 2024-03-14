import { Box, useMediaQuery, Grid, Image } from "@chakra-ui/react";
import WincRecipesImage from "../images/Winc_Recipes.png";

const Banner = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="blue.500" color="white" p={4} textAlign="center">
      <Grid
        templateColumns={isLargerThan768 ? "1fr auto 1fr" : "1fr"}
        gap={6}
        mt={8}
      >
        <Image
          src={WincRecipesImage}
          alt="Winc Recipes"
          gridColumn={2}
          width="50%"
          justifySelf="center"
        />
      </Grid>
    </Box>
  );
};

export default Banner;
