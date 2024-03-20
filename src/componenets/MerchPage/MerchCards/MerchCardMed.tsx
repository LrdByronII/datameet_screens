import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import half_bar from "../../../assets/half_bar.png";

interface Props {
  item: Merch;
}

const MerchCardMed = ({ item }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={item.size}>
            {item.label}
          </Heading>
        </HStack>
        <Image paddingBottom={2} src={half_bar} width={250} />
        <>
          <HStack>
            <Text fontWeight="bold" color="#000000">
              Total: {item.data}
            </Text>
            <Text fontWeight="bold" color="green">
              Target: {item.value}
            </Text>
          </HStack>
        </>
      </CardBody>
    </Card>
  );
};

export default MerchCardMed;
