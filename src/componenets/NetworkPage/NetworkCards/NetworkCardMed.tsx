import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import squares from "../../../assets/squares.png";
import { Network } from "../NetworkPage";

interface Props {
  item: Network;
}

const NetworkCardMed = ({ item: { label, value } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={3}>
        <HStack>
          <Image src={squares} boxSize={7} />
          <Heading fontWeight="bold" color="grey" fontSize={"small"}>
            {label}
          </Heading>
        </HStack>
        {label !== "Total Customers" && (
          <HStack paddingLeft={1} paddingTop={9}>
            <Text
              {...{
                color: value.substring(0, 1) === "-" ? "#df4036" : "green",
              }}
              fontWeight="bold"
              fontSize={"medium"}
            >
              {value}
            </Text>
          </HStack>
        )}
        <HStack paddingTop={1}></HStack>
      </CardBody>
    </Card>
  );
};

export default NetworkCardMed;
