import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Membership } from "../MembershipPage";
import { chartData } from "../../../data/dummyData";

interface Props {
  item: Membership;
}

const MembershipCardXl = ({ item: { id, label, text1 } }: Props) => {
  const data = chartData[0].lineChart;
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
              {text1}
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
            <LineChart width={1050} height={380} data={data}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="date" fontSize={"small"} />
              <YAxis fontSize={"small"} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="2024 Sales" stroke="green" />
              <Line type="monotone" dataKey="2023 Sales" stroke="#00c04b" />
            </LineChart>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default MembershipCardXl;
