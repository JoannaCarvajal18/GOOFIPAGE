// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import goofi from "assets/img/avatars/Gooofi.jpg";
import ProfileBgImage from "assets/img/header.jpg";
import React from "react";
import { FaMap, FaPenFancy, FaFacebook } from "react-icons/fa";
import Header from "./components/Header";
import Projects from "./components/Projects";

function Inicio() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={goofi}
        name={"Jardín de Niños Los Tuxtlas"}
        tabs={[
          {
            name: "MAPS",
            icon: <FaMap w="100%" h="100%" />,
            onClick: () => {
              window.open(
                "https://maps.app.goo.gl/GvHjgPRE2bp32rQQ9", // Enlace a Google Maps
                "_blank"
              );
            },
          },
          {
            name: "Facebook",
            icon: <FaFacebook w="100%" h="100%" />,
            onClick: () => {
              window.open(
                "https://www.facebook.com/culturallostuxtlas/?locale=es_LA", // Enlace a tu perfil de Facebook
                "_blank"
              );
            },
          },
        ]}
      />

      <Projects
        title={"ESCANEA!!!"}
        description={"Solo escanea el código QR, no te pierdas de GOOFIKATCH!"}
      />
    </Flex>
  );
}

export default Inicio;
