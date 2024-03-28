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
import { chartData } from "../../../data/dummyData.json";

interface Props {
  item: Membership;
}

const MembershipCardLg = ({ item: { label, text1 } }: Props) => {
  const data = chartData[0].barChart;

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
            <HStack paddingTop={3} paddingBottom={5}>
              <Text color="grey" fontSize={"small"}>
                {text1}
              </Text>
            </HStack>
            <BarChart width={955} height={270} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={"small"} />
              <YAxis fontSize={"small"} />
              <Tooltip />
              <Legend />
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
