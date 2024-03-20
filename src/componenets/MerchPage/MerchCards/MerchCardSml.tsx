import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import { Merch } from "../MerchPage";

interface Props {
  item: Merch;
}

const MerchCardSml = ({ item }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={item.size}>
            {item.label}
          </Heading>
        </HStack>
        <>
          <HStack paddingTop={2}>
            <Text fontWeight="bold" color="#000000">
              Total: {item.data}
            </Text>
          </HStack>
          <HStack paddingTop={1}>
            <Text
              fontWeight="bold"
              color={item.value === "-45%" ? "#df4036" : "green"}
            >
              {item.value !== "-45%" ? "Target: " + item.value : item.value}
            </Text>
          </HStack>
        </>
      </CardBody>
    </Card>
  );
};

export default MerchCardSml;
