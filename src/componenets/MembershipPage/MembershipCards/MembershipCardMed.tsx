import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Membership } from "../MembershipPage";
import squares from "../../../assets/squares.png";
import bar1 from "../../../assets/bar1.png";
import bar2 from "../../../assets/bar2.png";
import bar3 from "../../../assets/bar3.png";
import bar4 from "../../../assets/bar4.png";

interface Props {
  item: Membership;
}

const MembershipCardMed = ({ item: { id, label, data, value } }: Props) => {
  // const color = () => {
  //   return Number(item.value.substring(0, 3).replace("%", "")) < 100
  //     ? "#df4036"
  //     : "green";
  // };
  const bar = () => {
    const bar =
      id === 2
        ? bar1
        : id === 3
        ? bar2
        : id === 4
        ? bar3
        : id === 5
        ? bar4
        : bar1;
    return bar;
  };

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
            {data}
          </Text>
        </HStack>
        <HStack paddingTop={0}>
          <Text fontWeight="bold" color={"green"} fontSize={"x-small"}>
            {value}
          </Text>
        </HStack>
        <HStack paddingTop={1}>
          <Box
            borderRadius={10}
            padding={1}
            bg={"black"}
            width={300}
            height={"22px"}
          >
            <Image src={bar()} borderRadius={5} width={250} />
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MembershipCardMed;
