import {
  Heading,
  Grid,
  GridItem,
  Image,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageGasoline95 from "../assets/img/gasoline95.png";
import ImageGasoline98 from "../assets/img/gasoline98.png";
import ImageDiesel from "../assets/img/diesel.png";
import ImageDieselPlus from "../assets/img/dieselplus.png";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Product() {
  const navigate = useNavigate();

  const fuelType = [
    {
      type: "Gasoline 95",
      price: "1,670",
      imageSrc: ImageGasoline95,
    },
    {
      type: "Gasoline 98",
      price: "1,820",
      imageSrc: ImageGasoline98,
    },
    {
      type: "Diesel",
      price: "1,546",
      imageSrc: ImageDiesel,
    },
    {
      type: "Diesel Plus",
      price: "1,629",
      imageSrc: ImageDieselPlus,
    },
  ];

  const clickFuel = (fuelType, fuelPrice) => {
    localStorage.setItem("fuelType", fuelType);
    localStorage.setItem("fuelPrice", fuelPrice);
    navigate("/payment-method");
  };

  return (
    <>
      <Heading textAlign="center" size="lg" marginBottom={10}>
        Select the product
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={9}>
        {fuelType.map((fuel, index) => (
          <GridItem
            key={index}
            padding="5"
            borderRadius="10"
            w="100%"
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117, 177, 177);"
            _hover={{
              bgGradient: "linear(to-r, orange.100, yellow.100)",
              shadow: "2xl",
            }}
            onClick={() => clickFuel(fuel.type, fuel.price)}
          >
            <Box>
              <Heading size="md" fontWeight="extrabold">
                {fuel.type}
              </Heading>
              <Box
                justifyContent="space-evenly"
                alignItems="center"
                marginTop={5}
                marginBottom={4}
                display="flex"
              >
                <Heading size="sm" marginRight={4}>
                  Actual Price
                </Heading>
                <Heading size="md" fontWeight="extrabold">
                  {fuel.price} €
                </Heading>
              </Box>
            </Box>
            <Image
              src={fuel.imageSrc}
              alt={fuel.type}
              width="100px"
              margin="0 auto"
            />
          </GridItem>
        ))}
      </Grid>
      <Box marginTop="40px">
        <Stack
          direction="row"
          spacing={4}
          cursor="pointer"
          onClick={() => navigate("/fuel-dispenser")}
        >
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Back to Fuel Dispenser
          </Button>
        </Stack>
      </Box>
    </>
  );
}
