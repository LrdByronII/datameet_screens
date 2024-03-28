import { Box, Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import { Network } from "../NetworkPage";

interface Props {
  item: Network;
}

const NetworkCardXl = ({ item: { id, label, text2, text1 } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={8}>
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
              {text2}
            </Text>
          )}
        </HStack>
        {label === "Membership Sales" && (
          <>
            <HStack paddingBottom={3}>
              <Text color="grey" fontSize={"small"}>
                {text1}
              </Text>
            </HStack>
            <Box
              borderRadius={5}
              padding={2}
              bg={"green"}
              width={1110}
              height={373}
            ></Box>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default NetworkCardXl;
