import { Image, Box, Stack, Heading } from "@chakra-ui/react";
import imageStartFlag from "../assets/img/startflag.png"
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()

    const buttonStart = () => {
        navigate("/fuel-dispenser")
    }

  return (
    <Box w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Stack
        spacing={8}
        
      >
        <Box
          p={5}
          borderRadius="10"
          bgGradient="linear(to-r, teal.500, green.500)"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          cursor="pointer"
          shadow="base"
          _hover={{ shadow: "dark-lg" }}
          onClick={buttonStart}
        >
          <div>
            <Heading fontSize="7xl" color="white">
              Start
            </Heading>
            <Heading fontSize="4xl" color="white">
              Press here
            </Heading>
          </div>
            <Image src={imageStartFlag} alt="Start" width="200px" />
        </Box>
      </Stack>
    </Box>
  );
}
