import { colors } from "@/colors";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Button, Heading } from "@chakra-ui/react";

interface FilterListProps {
  filter: "all" | "active" | "inactive";
  setFilter: (value: "all" | "active" | "inactive") => void;
}

export const FilterList = ({ filter, setFilter }: FilterListProps) => {
  const { colorMode } = useColorMode();

  const getButtonStyle = (type: "all" | "active" | "inactive") => ({
    bg:
      filter === type
        ? colors.red500 // highlight active button
        : colorMode === "dark"
        ? colors.neutral700
        : colors.neutral0,
    color: filter === type ? "white" : colorMode === "dark" ? "white" : "black",
  });

  return (
    <Box
      display="flex"
      flexDirection={{ smToMd: "column", xlTo2xl: "row" }}
      justifyContent="space-between"
      flexWrap="wrap"
      gap={4}
    >
      <Heading size="2xl" color={colorMode === "dark" ? "white" : "black"}>
        Extensions List
      </Heading>

      <Box display="flex" flexDirection="row" gap={4}>
        <Button
          size="md"
          variant="outline"
          borderRadius="40px"
          shadow="md"
          onClick={() => setFilter("all")}
          {...getButtonStyle("all")}
        >
          All
        </Button>

        <Button
          size="md"
          variant="outline"
          borderRadius="40px"
          shadow="md"
          onClick={() => setFilter("active")}
          {...getButtonStyle("active")}
        >
          Active
        </Button>

        <Button
          size="md"
          variant="outline"
          borderRadius="40px"
          shadow="md"
          onClick={() => setFilter("inactive")}
          {...getButtonStyle("inactive")}
        >
          Inactive
        </Button>
      </Box>
    </Box>
  );
};
