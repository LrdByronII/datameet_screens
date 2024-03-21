import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import bar from "../../../assets/member_bar.png";
import { Network } from "../NetworkPage";

interface Props {
  item: Network;
}

const NetworkCardLg = ({ item: { label, text1 } }: Props) => {
  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody>
        <HStack>
          <Heading fontWeight="bold" color="#161616" fontSize={"large"}>
            {label}
          </Heading>
        </HStack>
        {label === "Membership Sales" && (
          <>
            <HStack paddingBottom={7}>
              <Text color="grey" fontSize={"small"}>
                {text1}
              </Text>
            </HStack>
            <Box
              borderRadius={5}
              padding={2}
              bg={"green"}
              width={965}
              height={258}
            >
              <Image width={955} src={bar} />
            </Box>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default NetworkCardLg;
