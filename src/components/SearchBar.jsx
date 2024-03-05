import { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Flex>
      <Input
        placeholder="Search recipes by name or health labels"
        value={searchTerm}
        onChange={handleInputChange}
        mr={2}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Flex>
  );
};

export default SearchBar;
