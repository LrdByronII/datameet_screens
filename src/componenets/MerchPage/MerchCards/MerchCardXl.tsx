// import { BarChart } from "@mantine/charts";
import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
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
import { chartData } from "../../../data/dummyData.json";

interface Props {
  item: Merch;
}

const MerchCardXl = ({ item: { label } }: Props) => {
  const data = chartData[0].barChart;

  return (
    <Card borderRadius={10} height={"100%"} width={"100%"}>
      <CardBody justifyContent={"space-between"}>
        <HStack paddingBottom={3}>
          <Heading fontWeight="bold" color="#161616" fontSize={"xl"}>
            {label}
          </Heading>
        </HStack>
        <HStack>
          <BarChart width={1100} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" fontSize={"small"} />
            <YAxis fontSize={"small"} />
            <Tooltip />
            <Legend />
            <Bar dataKey="2024 Sales" fill="green" />
            <Bar dataKey="2023 Sales" fill="#00c04b" />
          </BarChart>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MerchCardXl;
