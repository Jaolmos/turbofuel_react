import {
  Box,
  Heading,
  Grid,
  GridItem,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import ImageCash from "../assets/img/cash.png";
import ImageCreditCard from "../assets/img/creditcard.png";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const paymentMethods = [
  {
    name: "Cash",
    image: ImageCash,
  },
  {
    name: "Credit Card",
    image: ImageCreditCard,
  },
];

export default function PaymentMethod() {

    const navigate = useNavigate()

    const clickPayments = (paymentMethod) => {
        localStorage.setItem("paymentMethod", paymentMethod);
        navigate("/quantity");
    }

  return (
    <>
      <Box marginBottom={10} textAlign="center">
        <Heading size="lg" marginBottom={8}>
          Select payment method
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8} marginTop={4}>
          {paymentMethods.map((paymentMethod, index) => (
            <GridItem
              key={index}
              colSpan={1}
              padding={5}
              boxShadow="0px 4px 10px -3px rgb(117 117 117)"
              cursor="pointer"
              _hover={{ shadow: "2xl" }}
              onClick={() => clickPayments(
                paymentMethod.name
              )}
              
              
            >
                <Box
                marginTop={5}
                marginBottom={4}
                justifyContent="space-evenly"
                alignItems="center"
                >
                    <Heading size="lg" minHeight="80px">
                        {paymentMethod.name}
                    </Heading>
                    <Image src={paymentMethod.image} alt={paymentMethod.name} 
                    margin="0 auto" 
                    width={100}
                    />

                </Box>

            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box marginTop="40px">
        <Stack
          direction="row"
          spacing={4}
          cursor="pointer"
          onClick={() => navigate("/product")}
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
