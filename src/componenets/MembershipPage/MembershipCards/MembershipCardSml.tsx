import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Membership } from "../MembershipPage";

interface Props {
  item: Membership;
}

const MembershipCardSml = ({ item: { label, data, value } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={2.5} paddingLeft={1.5}>
        <Heading fontWeight="bold" color="#161616" fontSize={"small"}>
          {label}
        </Heading>
        <Text fontWeight="bold" color="#000000" fontSize={"xl"}>
          {data}
        </Text>
        <Text
          fontWeight="bold"
          color={value.substring(0, 1) === "-" ? "#df4036" : "green"}
          fontSize={"small"}
        >
          {value}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MembershipCardSml;
