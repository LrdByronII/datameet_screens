import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import { Merch } from "../MerchPage";

interface Props {
  item: Merch;
}

const MerchCardSml = ({ item: { label, text1, text2 } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={4} justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={"small"}>
            {label}
          </Heading>
        </HStack>
        <>
          <HStack paddingTop={3}>
            <Text fontSize={"xx-large"} fontWeight="bold" color="#000000">
              {text1}
            </Text>
          </HStack>
          <HStack paddingTop={2}>
            <Text
              fontWeight="bold"
              color={text2 === "-45%" ? "#df4036" : "green"}
            >
              {text2}
            </Text>
          </HStack>
        </>
      </CardBody>
    </Card>
  );
};

export default MerchCardSml;
