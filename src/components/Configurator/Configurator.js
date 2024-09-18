// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Icon,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import GitHubButton from "react-github-btn";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaTwitterSquare, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (props.secondary) {
    fixedDisplay = "none";
  }

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Jardín de Niños Los Tuxtlas
            </Text>
            <Text fontSize="md" mb="16px">
              Para más opciones.
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Box>
                <Text fontSize="md" fontWeight="600">
                  Cambiar tema
                </Text>
                <Text fontSize="sm" mb="16px">
                  Seleccioné entre los 2 diferentes temas.
                </Text>
              </Box>
              <Box
                display={fixedDisplay}
                justifyContent="space-between "
                mb="16px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px"></Text>
                <Switch
                  colorScheme="teal"
                  isChecked={switched}
                  onChange={(event) => {
                    if (switched === true) {
                      props.onSwitch(false);
                      setSwitched(false);
                    } else {
                      props.onSwitch(true);
                      setSwitched(true);
                    }
                  }}
                />
              </Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Oscuro/Luz
                </Text>
                <Button onClick={toggleColorMode}>
                  Modo {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>

              <Separator />
              <Box mt="24px">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  mb="16px"
                >
                  <GitHubButton
                    href="https://github.com/JoannaCarvajal18"
                    data-icon="octicon-star"
                  >
                    GitHub
                  </GitHubButton>
                </Flex>
                <Box w="100%">
                  <Text mb="6px" textAlign="center">
                    Siguenos!
                  </Text>
                  <Flex justifyContent="center" alignContent="center">
                    <Link
                      isExternal="true"
                      href="https://x.com/culturaltuxtlas"
                    >
                      <Button
                        bg="black" // Fondo negro para el botón
                        color="white" // Color de texto blanco para contras
                        colorScheme="twitter"
                        leftIcon={<FaTwitterSquare />}
                        me="10px"
                      >
                        <Text>Twitter</Text>
                      </Button>
                    </Link>
                    <Link
                      isExternal="true"
                      href="https://www.facebook.com/culturallostuxtlas"
                    >
                      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                        <Text>Facebook</Text>
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};
