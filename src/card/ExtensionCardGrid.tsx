import { colors } from "@/colors";
import { useColorMode } from "@/components/ui/color-mode";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Switch,
  Text,
} from "@chakra-ui/react";

export const rawData = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

interface ExtensionCardProps {
  data: typeof rawData; // array of items
  onChange: (name: string, checked: boolean) => void;
  filter: "all" | "active" | "inactive";
}

export const ExtensionCard = ({
  data,
  onChange,
  filter,
}: ExtensionCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={8}>
      {data
        .filter((d) => {
          if (filter === "all") return true;
          if (filter === "active") return d.isActive;
          if (filter === "inactive") return !d.isActive;
        })
        .map((card) => (
          <Card.Root
            key={card.name}
            overflow="hidden"
            borderRadius={10}
            bg={colorMode === "dark" ? colors.neutral700 : colors.neutral0}
            shadow="md"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            padding={4}
            minH={"200px"}
          >
            <Box display="flex" gap={4} flexWrap={"nowrap"}>
              <Image boxSize={"60px"} src={card.logo} alt={card.name} />
              <Box>
                <Heading
                  size="2xl"
                  color={colorMode === "dark" ? "white" : "black"}
                >
                  {card.name}
                </Heading>
                <Text
                  textStyle="sm"
                  fontWeight="normal"
                  color={colorMode === "dark" ? "white" : "black"}
                >
                  {card.description}
                </Text>
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-between" mt={4}>
              <Button
                size="md"
                variant="outline"
                bg={colorMode === "dark" ? colors.neutral700 : colors.neutral0}
                borderRadius="40px"
              >
                Remove
              </Button>
              <Switch.Root defaultChecked={card.isActive}>
                <Switch.HiddenInput
                  onChange={(e) => onChange(card.name, e.target.checked)}
                />
                <Switch.Control />
              </Switch.Root>
            </Box>
          </Card.Root>
        ))}
    </SimpleGrid>
  );
};
