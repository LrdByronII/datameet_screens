import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
} from "recharts";
import { Membership } from "../MembershipPage";
import { buildMTData } from "../../../hooks/useMTData";
import useCharts, { ChartData } from "../../../hooks/useCharts";
import numberFormatter from "../../../services/numberFormatter";
import moneyFormatter from "../../../services/moneyFormatter";
import dateFormat from "dateformat";

interface Props {
  item: Membership;
  isLaptop: boolean;
}

const MembershipCardXl = ({
  item: { id, label, text1, total },
  isLaptop,
}: Props) => {
  const { data: dm_chart } = useCharts("membership-daily-exgst");
  const mt_data = buildMTData(dm_chart?.body as ChartData, isLaptop);

  const monthTickMaker = (date: string) => {
    const formattedDate = dateFormat(date, dateFormatting);
    const nice_date = isLaptop
      ? "       " + formattedDate + "        "
      : formattedDate;
    return nice_date;
  };

  const leftPadding = isLaptop ? 9 : 4;
  const rightPadding = isLaptop ? 46 : 46;
  const dateFormatting = isLaptop ? "mmm" : "mmmm dd";
  const widthFinder = isLaptop ? 1100 : 260;
  const legendTextSize = isLaptop ? "small" : "x-large";
  const legendHeight = isLaptop ? 35 : 62;

  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody padding={6}>
        <HStack justifyContent={"space-between"}>
          <Heading
            {...{
              fontSize: id === 1 ? { base: "xl", xl: "5xl" } : "large",
            }}
            fontWeight="bold"
            color="#161616"
          >
            {label}
          </Heading>
          {label === "Total Members" && (
            <Text
              color={"green"}
              fontWeight={"bold"}
              fontSize={{ base: "xl", xl: "5xl" }}
            >
              {numberFormatter(total)}
            </Text>
          )}
        </HStack>
        {label === "Membership Sales" && (
          <>
            <HStack paddingBottom={1}>
              <Text color="grey" fontSize={"small"}>
                {text1}
              </Text>
            </HStack>
            <LineChart
              width={widthFinder}
              height={380}
              data={mt_data}
              margin={{ left: leftPadding, right: rightPadding }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis
                dataKey="date"
                fontSize={"small"}
                tickFormatter={(date) => monthTickMaker(date)}
                tick={{ width: 70 }}
              />
              {/* <YAxis fontSize={yLabelTextSize} tickFormatter={moneyFormatter} /> */}
              <Tooltip
                labelStyle={{ color: "black" }}
                labelFormatter={(date) => dateFormat(date, "mmmm dd")}
                formatter={moneyFormatter}
                cursor={{ stroke: "red", strokeWidth: 2 }}
                offset={40}
              />
              <Legend
                verticalAlign="top"
                height={legendHeight}
                iconSize={20}
                fontSize={legendTextSize}
              />
              <Line
                dot={false}
                type="monotone"
                dataKey="2024 Sales"
                stroke="green"
              />
              <Line
                dot={false}
                type="monotone"
                dataKey="2023 Sales"
                stroke="#00c04b"
              />
            </LineChart>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default MembershipCardXl;
