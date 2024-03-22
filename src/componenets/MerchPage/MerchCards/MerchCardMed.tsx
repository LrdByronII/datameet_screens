import {
  Box,
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Merch } from "../MerchPage";

interface Props {
  item: Merch;
}

const MerchCardMed = ({ item: { label, int1, int2, text1, text2 } }: Props) => {
  const percent = 100 * (int1 / int2);

  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack paddingBottom={4}>
          <Heading fontWeight="bold" color="#161616" fontSize={"medium"}>
            {label}
          </Heading>
        </HStack>
        <CircularProgress
          value={percent}
          color="green"
          size={170}
          trackColor={"grey"}
        >
          <CircularProgressLabel
            color={"black"}
            fontWeight={"bold"}
            fontSize={"x-large"}
          >
            {percent.toFixed()}%
          </CircularProgressLabel>
        </CircularProgress>
        <HStack paddingTop={0} justifyContent={"space-between"}>
          <Box>
            <Text fontWeight="bold" color="grey" fontSize={"small"}>
              Total:
            </Text>
            <Text fontWeight="bold" color="#000000" fontSize={"medium"}>
              {text1}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" color="grey" fontSize={"small"}>
              Target:
            </Text>
            <Text fontWeight="bold" color="#000000" fontSize={"medium"}>
              {text2}
            </Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardMed;
