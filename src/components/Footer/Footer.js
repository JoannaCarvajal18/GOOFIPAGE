import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; 2024 Derechos reservados por{" "}
        <Link
          href="https://maps.app.goo.gl/GvHjgPRE2bp32rQQ9"
          color="blue.400" // Color azul para el nombre de la institución
        >
          Jardín de Niños Los Tuxtlas
        </Link>{" "}
        creado por{" "}
        <Link
          color="blue.400" // Color azul para el nombre de la persona
          href="mailto:isc.carvajal24@gmail.com"
          target="_blank"
        >
          Joanna Carvajal
        </Link>
      </Text>

      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="mailto:isc.carvajal24@gmail.com">
            Contacto
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
