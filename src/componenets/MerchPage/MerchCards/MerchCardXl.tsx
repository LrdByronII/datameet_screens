import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import { Merch } from "../MerchPage";
import {
  CartesianGrid,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import useCharts, { ChartData } from "../../../hooks/useCharts";
import { buildMTData } from "../../../hooks/useMTData";
import dateFormat from "dateformat";
import moneyFormatter from "../../../services/moneyFormatter";

interface Props {
  item: Merch;
  isLaptop: boolean;
}

const MerchCardXl = ({ item: { label, text1 }, isLaptop }: Props) => {
  const { data: dm_chart } = useCharts("merchandise-monthly");
  const mt_data = buildMTData(dm_chart?.body as ChartData, isLaptop);

  const leftPadding = isLaptop ? 9 : 0;
  const dateFormatting = isLaptop ? "mmm" : "mmmm";
  const widthFinder = isLaptop ? 1100 : 180;
  const yLabelTextSize = isLaptop ? "small" : "x-small";
  const legendTextSize = isLaptop ? "small" : "x-large";
  const legendHeight = isLaptop ? 35 : 45;

  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack paddingBottom={1}>
          <Heading fontWeight="bold" color="#161616" fontSize={"xl"}>
            {label}
          </Heading>
        </HStack>
        <HStack>
          <Text color="grey" fontSize={"small"}>
            {text1}
          </Text>
        </HStack>
        <HStack paddingTop={{ base: 2, xl: 0 }}>
          <BarChart
            width={widthFinder}
            height={300}
            data={mt_data}
            margin={{ left: leftPadding, bottom: 22, right: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              fontSize={"large"}
              tickFormatter={(date) => dateFormat(date, dateFormatting)}
            />
            <YAxis fontSize={yLabelTextSize} tickFormatter={moneyFormatter} />
            <Tooltip
              labelStyle={{ color: "black" }}
              labelFormatter={(date) => dateFormat(date, "mmmm")}
              formatter={moneyFormatter}
              cursor={{ stroke: "red", strokeWidth: 1 }}
              offset={40}
            />
            <Legend
              margin={{ left: 50 }}
              verticalAlign="top"
              height={legendHeight}
              iconType="circle"
              iconSize={13}
              fontSize={legendTextSize}
            />
            <Bar dataKey="Budget" fill="green" />
            <Bar dataKey="Sales" fill="#00c04b" />
          </BarChart>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardXl;
