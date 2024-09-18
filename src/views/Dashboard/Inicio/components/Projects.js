// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import apk from "assets/img/qr_apk.png";
import ipa from "assets/img/qr_ipa.png";
import flutterflow from "assets/img/goofi_flutterflow.png";
import firebase from "assets/img/goofi_firebase.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ title, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px" my="24px">
      <CardHeader p="12px 5px" mb="12px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px="5px">
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap="24px"
        >
          <ProjectCard
            image={apk}
            name={"Escanea ahora!"}
            category={"Aplicación Android"}
            description={"Escaneé el código QR para descargar nuestra APK."}
            avatars={[avatar2, avatar4, avatar6]}
          />
          <ProjectCard
            image={ipa}
            name={"Escanea ahora!"}
            category={"Aplicación iOS"}
            description={"Escaneé el código QR para descargar nuestra APP."}
          />
          <ProjectCard
            image={flutterflow}
            name={"Escanea ahora!"}
            category={"Sistema web"}
            description={
              "Escaneé el código QR para acceder a nuestro sistema web."
            }
          />
          <ProjectCard
            image={firebase}
            name={"Escanea ahora!"}
            category={"Enlace alternativo de sistema web"}
            description={
              "Escaneé el código QR para acceder a nuestro sistema web."
            }
          />
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Projects;
