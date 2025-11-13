import { Box } from "@chakra-ui/react";
import { NavBar } from "./navbar/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import { FilterList } from "./filter-box/FilterList";
import { ExtensionCard, rawData } from "./card/ExtensionCardGrid";
import { useState } from "react";

export const App = () => {
  const { colorMode } = useColorMode();

  // 🔹 Manage which filter is active
  const [data, setData] = useState<any[]>(rawData);

  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const onChange = (name: string, checked: boolean) => {
    const newData = data.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: checked };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <Box
      bg={
        colorMode === "dark"
          ? "linear-gradient(180deg, #040918 0%, #091540 100%)"
          : "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
      }
      width="100%"
      minH="100vh"
      padding={"20px"}
      gap="40px"
      display="flex"
      flexDirection="column"
    >
      <NavBar />

      {/* Pass current filter + setter down */}
      <FilterList filter={filter} setFilter={(filter) => setFilter(filter)} />

      {/* Pass filtered data to ExtensionCard */}
      <ExtensionCard data={data} onChange={onChange} filter={filter} />
    </Box>
  );
};
