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
import useCharts from "../../../hooks/useCharts";
import moneyFormatter from "../../../services/moneyFormatter";
import { Merch } from "../MerchPage";

interface Props {
  item: Merch;
  isLaptop: boolean;
}

const MerchCardMed = ({ item: { label } }: Props) => {
  const { data: dm_chart } = useCharts("merchandise-monthly");

  const total = dm_chart?.body.series2Total || 1;
  const target = dm_chart?.body.series1Total || 69;
  const percent = 100 * (total / target);

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
          capIsRound={true}
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
              {moneyFormatter(total)}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" color="grey" fontSize={"small"}>
              Target:
            </Text>
            <Text fontWeight="bold" color="#000000" fontSize={"medium"}>
              {moneyFormatter(target)}
            </Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardMed;
