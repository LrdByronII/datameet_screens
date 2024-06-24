import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Membership } from "../MembershipPage";
import numberFormatter from "../../../services/numberFormatter";

interface Props {
  item: Membership;
  isLaptop: boolean;
}

const MembershipCardSml = ({ item: { label, total, target } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={2.5} paddingLeft={1.5}>
        <Heading fontWeight="bold" color="#161616" fontSize={"small"}>
          {label}
        </Heading>
        <Text fontWeight="bold" color="#000000" fontSize={"xl"}>
          {numberFormatter(total)}
        </Text>
        <Text
          fontWeight="bold"
          color={target < 0 ? "#df4036" : "green"}
          fontSize={"small"}
        >
          {numberFormatter(target)}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MembershipCardSml;
