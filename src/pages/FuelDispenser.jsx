import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import ImageCar from "../assets/img/bluecar.png";
import { useNavigate } from "react-router-dom";

export default function FuelDispenser() {
  const dispensers = [
    {
      id: 1,
      name: "Dispenser 1",
    },
    {
      id: 2,
      name: "Dispenser 2",
    },
    {
      id: 3,
      name: "Dispenser 3",
    },
    {
      id: 4,
      name: "Dispenser 4",
    },
    {
      id: 5,
      name: "Dispenser 5",
    },
    {
      id: 6,
      name: "Dispenser 6",
    },
  ];

  return (
    <>
      <Heading textAlign="center" marginBottom={5}>
        Select the fuel dispenser
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={9}>
        {dispensers.map((dispenser) => (
          <GridItem
            key={dispenser.id}
            w="100%"
            h={40}
            margin={5}
            borderRadius={10}
            padding={4}
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 177);"
            _hover={{
              background:
                "linear-gradient(to right, var(--chakra-colors-teal-500), var(--chakra-colors-green-500))",
              color: "#fff",
              shadow: "2xl",
            }}
          >
            <Heading size="lg" mb={3}>{dispenser.name} </Heading>
            <Image
              src={ImageCar}
              alt={dispenser.name}
              width={140}
              margin="0 auto"
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
