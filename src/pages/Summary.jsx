import {
  Box,
  Grid,
  Heading,
  Image,
  GridItem,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ImageConfetti from "../assets/img/confetti.png";
import ImageDrop from "../assets/img/drop.png";
import ImageFuel from "../assets/img/fuel-summary.png";
import ImageMoney from "../assets/img/moneybox.png";
import ImageCar from "../assets/img/bluecar.png";
import ImageCapital from "../assets/img/full-money.png";

export default function Summary() {
  const navigate = useNavigate();

  const dispenser = localStorage.getItem("dispenser");
  const fuelType = localStorage.getItem("fuelType");
  const fuelPrice = localStorage.getItem("fuelPrice");
  const paymentMethod = localStorage.getItem("paymentMethod");
  const quantity = localStorage.getItem("quantity");

  const finalPrice = (fuelPrice.replace(",", ".") * quantity).toFixed(2)

  const summaryData = [
    {
      title: "Dispenser",
      result: dispenser,
      image: ImageCar,
    },
    {
      title: "Fuel Type",
      result: fuelType,
      image: ImageFuel,
    },
    {
      title: "Payment Method",
      result: paymentMethod,
      image: ImageMoney,
    },
    {
      title: "Quantity",
      result: `${quantity} Liters`,
      image: ImageDrop,
    },
  ];

  const backHome = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <>
      <Grid marginBottom={5} textAlign="center">
        <Heading size="xl" marginBottom={5}>
          Supply Yourself!!!
        </Heading>
        <Image src={ImageConfetti} alt="" width={200} margin="0 auto" />
      </Grid>
      <Grid paddingBottom={5} textAlign="center">
        <Heading size="lg" marginBottom="40px">
          Order Summary:
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9}>
          {summaryData.map((data, index) => (
            <GridItem
              w="100%"
              borderRadius={10}
              padding="25px 15px"
              boxShadow="0px 4px 10px -4px rgb(117 117 177);"
              key={index}
            >
              <Box minHeight={50}>
                <Heading size="sm">{data.title}</Heading>
                <Heading size="md" fontWeight={800}>
                  {data.result}
                </Heading>
                <Image
                  src={data.image}
                  alt={data.title}
                  height="100px"
                  margin="0 auto"
                  
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Grid marginTop="20px" padding="20px" boxShadow="0px 4px 10px -4px rgb(117 117 177);" 
        borderRadius={10}>
          <Heading size="sm">Total Price To Pay</Heading>
          <GridItem borderRadius="10">
            <Heading size="md">{finalPrice}</Heading>
            <Image src={ImageCapital} alt="price" width="100px" margin="0 auto" />
          </GridItem>
        </Grid>
        <Box marginTop="40px">
            <Stack direction="row" spacing={4} cursor="pointer" onClick={backHome}>
              <Button leftIcon={<ArrowBackIcon />}
              colorScheme="teal"
              variant="outline">
                Back Home
              </Button>
            </Stack>
        </Box>
      </Grid>
    </>
  );
}
