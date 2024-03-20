import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import line from "../../../assets/member_line.png";
import { Membership } from "../MembershipPage";

interface Props {
  item: Membership;
}

const MembershipCardXl = ({ item: { id, label, value, data } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={6}>
        <HStack justifyContent={"space-between"}>
          <Heading
            {...{ fontSize: id === 1 ? "5xl" : "large" }}
            fontWeight="bold"
            color="#161616"
          >
            {label}
          </Heading>
          {label === "Total Members" && (
            <Text color={"green"} fontWeight={"bold"} fontSize={"5xl"}>
              {value}
            </Text>
          )}
        </HStack>
        {label === "Membership Sales" && (
          <>
            <HStack paddingBottom={3}>
              <Text color="grey" fontSize={"small"}>
                {data}
              </Text>
            </HStack>
            <Box
              borderRadius={5}
              padding={2}
              bg={"green"}
              width={1110}
              height={373}
            >
              <Image borderRadius={5} src={line} width={1100} />
            </Box>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default MembershipCardXl;
