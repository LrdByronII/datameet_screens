import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import half_bar from "../../../assets/half_bar.png";

interface Props {
  item: Merch;
}

const MerchCardMed = ({ item: { label, text1, text2 } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={"medium"}>
            {label}
          </Heading>
        </HStack>
        <Image
          paddingLeft={3}
          paddingBottom={3}
          src={half_bar}
          width={"100%"}
        />
        <HStack justifyContent={"space-between"}>
          <Text fontWeight="bold" color="#000000">
            Total: {text1}
          </Text>
          <Text fontWeight="bold" color="green">
            Target: {text2}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardMed;
