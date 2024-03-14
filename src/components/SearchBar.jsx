import { useState } from "react";
import { Input, Flex } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <Flex>
      <Input
        placeholder="Search recipes by name or health labels"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        mr={2}
        width="500px"
        bg="white"
      />
    </Flex>
  );
};

export default SearchBar;
