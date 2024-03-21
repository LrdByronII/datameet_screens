import { BarChart, LineChart } from "@mantine/charts";
import { chartData } from "./dummyData";
import { Box } from "@chakra-ui/react";

const MembershipReportPage = () => {
  const barData = chartData[0].barChart;
  const lineData = chartData[0].lineChart;

  return (
    <Box borderRadius={10} bg={"white"} height={500} width={1200}>
      <BarChart
        h={305}
        data={barData}
        dataKey="month"
        gridAxis="xy"
        series={[
          { name: "2024 Sales", color: "dark-green" },
          { name: "2023 Sales", color: "light-green" },
        ]}
      />
      <LineChart
        h={600}
        data={lineData}
        dataKey="date"
        gridAxis="xy"
        yAxisProps={{ domain: [0, "auto"], width: 100 }}
        strokeWidth={3}
        dotProps={{ r: 2, strokeWidth: 0.5, stroke: "#fff" }}
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        series={[
          { name: "Budget", color: "dark-green" },
          { name: "Sales", color: "light-green" },
        ]}
      />
    </Box>
  );
};

export default MembershipReportPage;
