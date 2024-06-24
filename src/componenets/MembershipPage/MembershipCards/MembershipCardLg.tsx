import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import {
  CartesianGrid,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { Membership } from "../MembershipPage";
import useCharts, { ChartData } from "../../../hooks/useCharts";
import { buildMTData } from "../../../hooks/useMTData";
import moneyFormatter from "../../../services/moneyFormatter";
import dateFormat from "dateformat";

interface Props {
  item: Membership;
  isLaptop: boolean;
}

const MembershipCardLg = ({ item: { label, text1 }, isLaptop }: Props) => {
  const { data: dm_chart } = useCharts("membership-monthly");
  const mt_data = buildMTData(dm_chart?.body as ChartData, isLaptop);

  const leftPadding = isLaptop ? 9 : 0;
  const dateFormatting = isLaptop ? "mmm" : "mmmm";
  const widthFinder = isLaptop ? 955 : 180;
  const yLabelTextSize = isLaptop ? "small" : "x-small";
  const legendTextSize = isLaptop ? "small" : "x-large";
  const legendHeight = isLaptop ? 35 : 62;

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
            <HStack paddingTop={2} paddingBottom={3}>
              <Text color="grey" fontSize={"small"}>
                {text1}
              </Text>
            </HStack>
            <BarChart
              width={widthFinder}
              height={270}
              data={mt_data}
              margin={{ left: leftPadding }}
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
                verticalAlign="top"
                height={legendHeight}
                iconType="circle"
                iconSize={13}
                fontSize={legendTextSize}
              />
              <Bar dataKey="2024 Sales" fill="green" />
              <Bar dataKey="2023 Sales" fill="#00c04b" />
            </BarChart>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default MembershipCardLg;
