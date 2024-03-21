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

interface Props {
  item: Membership;
}

const MembershipCardMed = ({ item: { label, text1, int1, int2 } }: Props) => {
  const percent = 100 * (int1 / int2);

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
            {text1}
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
            {int2}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MembershipCardMed;
