import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Network } from "../NetworkPage";

interface Props {
  item: Network;
}

const NetworkCardSml = ({ item: { label, text1, text2 } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={2.5} paddingLeft={1.5}>
        <Heading fontWeight="bold" color="#161616" fontSize={"small"}>
          {label}
        </Heading>
        <Text fontWeight="bold" color="#000000" fontSize={"xl"}>
          {text1}
        </Text>
        <Text
          fontWeight="bold"
          color={text2.substring(0, 1) === "-" ? "#df4036" : "green"}
          fontSize={"small"}
        >
          {text2}
        </Text>
      </CardBody>
    </Card>
  );
};

export default NetworkCardSml;
