import { Image, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";



export default function Navbar() {
    const navigate = useNavigate()

    const redirect = () => {
        navigate("/")
    }


  return (
    <Box
      w="100%"
      display="block"
      alignItems="center"
      justifyContent="space-evenly"
      borderBottom="1px solid #ddd"
    >
      <Image
        src={Logo}
        alt="Logo"
        width="50px"
        margin="0 auto"
        cursor="pointer"
        onClick={redirect}
      />
      <Heading
        as="h1"
        size="md"
        isTruncated
        textAlign="center"
        fontWeight={900}
        paddingBottom={5}
        color="#8B0000"
      >TurboFuel</Heading>
    </Box>
  );
}
