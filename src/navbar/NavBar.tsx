import { useColorMode } from "@/components/ui/color-mode";
import { Box, Heading } from "@chakra-ui/react";
import { CustomToggleMode } from "./CustomToggleMode";
import { colors } from "@/colors";

export const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bg={colorMode === "dark" ? colors.neutral700 : colors.neutral0}
      padding="10px"
      borderRadius="12px"
      shadow="md"
    >
      <Heading size="xl" color={colorMode === "dark" ? "white" : "black"}>
        Extentions
      </Heading>
      <CustomToggleMode />
    </Box>
  );
};
