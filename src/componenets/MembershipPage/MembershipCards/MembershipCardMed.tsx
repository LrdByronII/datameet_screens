import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import { Membership } from "../MembershipPage";
import squares from "../../../assets/squares.png";
import moneyFormatter from "../../../services/moneyFormatter";
import numberFormatter from "../../../services/numberFormatter";

interface Props {
  item: Membership;
  isLaptop: boolean;
}

const MembershipCardMed = ({ item: { label, total, target } }: Props) => {
  const percent = 100 * (total / target);

  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={3}>
        <HStack>
          <Image src={squares} boxSize={5} />
          <Heading fontWeight="bold" color="grey" fontSize={"x-small"}>
            {label}
          </Heading>
        </HStack>
        <HStack paddingTop={2}>
          <Text fontWeight="bold" color="#000000" fontSize={"large"}>
            {label === "TOTAL REVENUE ext GST"
              ? moneyFormatter(total)
              : numberFormatter(total)}
          </Text>
        </HStack>
        <HStack paddingTop={1}>
          <Text fontWeight="bold" color={"green"} fontSize={"x-small"}>
            {percent.toFixed()}% of target
          </Text>
        </HStack>
        <HStack
          paddingTop={2}
          paddingRight={1}
          justifyContent={"space-between"}
        >
          <Progress
            borderRadius={5}
            height={2}
            width={"100%"}
            colorScheme="green"
            bg={"#d3d3d3"}
            value={percent}
          />
          <Text fontSize={"x-small"} color={"grey"}>
            {label === "TOTAL REVENUE ext GST"
              ? moneyFormatter(target)
              : numberFormatter(target)}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MembershipCardMed;
